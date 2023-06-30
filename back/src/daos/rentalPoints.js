export default (fastify) => ({
  get: () =>
    fastify
      .knex("rental_points")
      .select(
        "name",
        "description",
        "latitude",
        "longitude",
        fastify.knex.raw(`
          (select count(*)::integer 
            from available_bikes 
            where rental_point_id = rental_points.id) as "availableBikes"
        `)
      )
      .groupBy("rental_points.id"),
});
