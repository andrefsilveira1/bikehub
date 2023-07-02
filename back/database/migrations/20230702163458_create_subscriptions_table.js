/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
  return knex.schema.createTable("user_subscriptions", function (table) {
    table.integer("user_id").notNullable();
    table.foreign("user_id").references("users.id");
    table.integer("rental_point_id").notNullable();
    table.foreign("rental_point_id").references("rental_points.id");
    table.string("subscription_id").notNullable();
    table.primary(["user_id", "rental_point_id", "subscription_id"]);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function (knex) {
  return knex.schema.dropTable("user_subscriptions");
};
