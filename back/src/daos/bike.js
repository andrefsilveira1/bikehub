export default (fastify) => ({
  createRental: (bikeId, userId) =>
    fastify.knex("bike_rentals").insert([{ bike_id: bikeId, user_id: userId }]),
  findById: async (id) =>
    (
      await fastify.knex
        .select(
          "id",
          fastify.knex.ref("rental_point_id").as("rentalPointId"),
          fastify.knex.raw(`
        case
          when id in (select id from available_bikes) then true
          else false
        end as available
    `)
        )
        .from("bikes")
        .where({ id })
    )[0],
});
