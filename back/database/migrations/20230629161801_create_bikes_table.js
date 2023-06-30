/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
  return Promise.all([
    knex.schema.createTable("bikes", function (table) {
      table.increments("id");
      table.integer("rental_point_id").notNullable();
      table.foreign("rental_point_id").references("rental_points.id");
    }),
    knex.schema.createTable("bike_rentals", function (table) {
      table.increments("id");
      table.integer("bike_id").notNullable();
      table.foreign("bike_id").references("bikes.id");
      table.integer("user_id").notNullable();
      table.foreign("user_id").references("users.id");
      table.timestamp("start_timestamp").notNullable().defaultTo(knex.fn.now());
      table.timestamp("end_timestamp").defaultTo(null);
    }),
  ]);
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function (knex) {
  return Promise.all([
    knex.schema.dropTable("bike_rentals"),
    knex.schema.dropTable("bikes"),
  ]);
};
