export default (fastify) => ({
  findById: async (id) =>
    (
      await fastify.knex
        .with(
          "available_bikes",
          fastify.knex.raw(`
      select id from bikes
      where id not in (
        select bike_id 
        from bike_rentals
        where start_timestamp is not null and end_timestamp is null
      )
    `)
        )
        .select(
          "id",
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
