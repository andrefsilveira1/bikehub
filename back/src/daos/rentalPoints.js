export default (fastify) => ({
  get: () =>
    fastify.knex("rental_points").select(
      "id",
      "name",
      "description",
      "latitude",
      "longitude",
      fastify.knex.raw(`
          (select count(*)::integer
            from available_bikes
            where rental_point_id = rental_points.id) as "availableBikes"
        `)
    ),
  findById: async (id) =>
    (
      await fastify
        .knex("rental_points")
        .select(
          "name",
          "description",
          "latitude",
          "longitude",
          // This is not optimal at all, but I'm desperate here.
          fastify.knex.raw(`
          (select count(*)::integer
            from available_bikes
            where rental_point_id = rental_points.id) as "availableBikes"
        `),
          fastify.knex.raw(`
          (select count(*)::integer
            from bikes
            where rental_point_id = rental_points.id) as "amountBikes"
        `)
        )
        .where({ id })
    )[0],
});
