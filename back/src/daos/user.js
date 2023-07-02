export default (fastify) => ({
  findByEmail: async (email) =>
    (await fastify.knex("users").where({ email }))[0],
    findBikesByUser: async (userId) =>
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
        .where({ user_id: userId })
    ),
});
