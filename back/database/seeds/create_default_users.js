import bcrypt from "bcryptjs";
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("users").del();
  await knex("users").insert([
    {
      first_name: "Mateus",
      last_name: "Nascimento",
      email: "mateusmelornrn@gmail.com",
      password: bcrypt.hashSync("mateusmelo123", bcrypt.genSaltSync(10)),
    },
    {
      first_name: "André",
      last_name: "Freitas",
      email: "andrefsilveira1@gmail.com",
      password: bcrypt.hashSync("andre123", bcrypt.genSaltSync(10)),
    },
  ]);
};
