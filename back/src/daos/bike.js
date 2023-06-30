export default (fastify) => ({
  createRental: async (bikeId, userId) =>
    fastify.knex("bike_rentals").insert([{ bike_id: bikeId, user_id: userId }]),
  endRental: (rentalId) =>
    fastify
      .knex("bike_rentals")
      .where({ id: rentalId })
      .update({ end_timestamp: new Date() }),
  getActiveRentalForBike: async (bikeId) =>
    (
      await fastify
        .knex("bike_rentals")
        .select(
          "id",
          fastify.knex.ref("bike_id").as("bikeId"),
          fastify.knex.ref("user_id").as("userId"),
          fastify.knex.ref("start_timestamp").as("startTimestamp"),
          fastify.knex.ref("end_timestamp").as("endTimestamp")
        )
        .where({ bike_id: bikeId, end_timestamp: null })
    )[0],
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
