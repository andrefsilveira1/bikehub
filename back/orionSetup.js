// Setup script for orion. Used to populate the orion database
// with the entities from the bikehub database.
// Could've we just used the orion database for everything?
// Maybe, but I didn't think of that and now it's too late.
import axios from "axios";
import Knex from "knex";
import { config } from "dotenv";

config();

const knex = Knex({
  client: "pg",
  connection: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

// Make all bikes available.
await knex("bike_rentals").del();

const points = await knex("rental_points").select(
  "id",
  "name",
  knex.raw(`
          (select count(*)::integer 
            from bikes
            where rental_point_id = rental_points.id) as "amountBikes"
        `)
);

// Deleting all entries from the database
try {
  await Promise.all(
    points.map((point) =>
      axios.delete(`${process.env.ORION_URL}/v2/entities/point${point.id}`)
    )
  );
} catch {}

// Inserting every point into the database again
Promise.all(
  points.map((point) =>
    axios.post(`${process.env.ORION_URL}/v2/entities`, {
      id: `point${point.id}`,
      type: "point",
      name: {
        value: point.name,
        type: "String",
      },
      amountBikes: {
        value: point.amountBikes,
        type: "Integer",
      },
    })
  )
)
  .then(() => console.log("Done setting up Orion"))
  .catch((e) => console.log(e.response.data))
  .finally(() => process.exit());
