/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
  return Promise.all([
    knex.schema.createTable("bikes", function (table) {
      table.increments("id");
      table.integer("rentalPointId").notNullable();
      table.foreign("rentalPointId").references("rentalPoints.id");
    }),
    knex.schema.createTable("bikeRentals", function (table) {
      table.integer("bikeId").notNullable();
      table.foreign("bikeId").references("bikes.id");
      table.integer("userId").notNullable();
      table.foreign("userId").references("users.id");
      table.timestamp("startTimestamp").notNullable().defaultTo(knex.fn.now());
      table.timestamp("endTimestamp").notNullable();
    }),
  ]);
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function (knex) {
  return Promise.all([
    knex.schema.dropTable("bikeRentals"),
    knex.schema.dropTable("bikes"),
  ]);
};
