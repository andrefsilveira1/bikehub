export default (fastify) => ({
  get: () =>
    fastify
      .knex("rental_points")
      .join("bikes", "bikes.rental_point_id", "=", "rental_points.id")
      .select(
        "name",
        "description",
        "latitude",
        "longitude",
        fastify.knex.raw('count(*)::integer as "availableBikes"')
      )
      .groupBy("rental_points.id"),
});
