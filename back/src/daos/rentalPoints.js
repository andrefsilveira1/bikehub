export default (fastify) => ({
  get: () =>
    fastify
      .knex("rentalPoints")
      .join("bikes", "bikes.rentalPointId", "=", "rentalPoints.id")
      .select(
        "name",
        "description",
        "latitude",
        "longitude",
        fastify.knex.raw('count(*)::integer as "availableBikes"')
      )
      .groupBy("rentalPoints.id"),
});
