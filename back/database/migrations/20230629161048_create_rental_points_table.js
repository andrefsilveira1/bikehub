/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
  return knex.schema.createTable("rentalPoints", function (table) {
    table.increments("id");
    table.string("name").notNullable();
    table.string("description").notNullable();
    table.double("latitude").notNullable();
    table.double("longitude").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function (knex) {
  return knex.schema.dropTable("rentalPoints");
};
