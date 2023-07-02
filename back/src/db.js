import fp from "fastify-plugin";
import Knex from "knex";

import userDao from "./daos/user.js";
import rentalPointsDao from "./daos/rentalPoints.js";
import bikeDao from "./daos/bike.js";
import subscriptionDao from "./daos/subscription.js";

async function database(fastify, _, done) {
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
  // Testing connection.
  await knex.raw("SELECT 1");
  // The knex decorator should only be used by low-level modules
  // that do direct database interaction.
  fastify.decorate("knex", knex);
  fastify.decorate("daos", {
    user: userDao(fastify),
    rentalPoints: rentalPointsDao(fastify),
    bike: bikeDao(fastify),
    subscription: subscriptionDao(fastify),
  });
  done();
}

export default fp(database);
