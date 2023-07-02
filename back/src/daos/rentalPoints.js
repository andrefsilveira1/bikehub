export default (fastify) => ({
  get: (userId) =>
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
        `),
      fastify.knex.raw(`
        case when id in (
          select s.rental_point_id
          from user_subscriptions as s
          where s.user_id = ${userId}
        ) then true
        else false
        end as subscribed
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
  findBikeByRentId: async (id) =>
    await fastify.knex.select("*").from("bikes").where({ rental_point_id: id }),
});
