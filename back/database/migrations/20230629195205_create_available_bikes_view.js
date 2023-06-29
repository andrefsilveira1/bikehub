/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
  return knex.schema.createView("available_bikes", function (view) {
    view.columns(["id", "rental_point_id"]);
    view.as(
      knex.raw(`
      select id, rental_point_id from bikes
      where id not in (
        select bike_id
        from bike_rentals
        where start_timestamp is not null and end_timestamp is null
      )
    `)
    );
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function (knex) {
  return knex.schema.dropView("available_bikes");
};
