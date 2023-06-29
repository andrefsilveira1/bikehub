import { config as configDotenv } from "dotenv";

configDotenv();
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
const config = {
  client: "pg",
  connection: {
    host: "localhost",
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
  migrations: {
    tableName: "knex_migrations",
    directory: "./database/migrations",
  },
  seeds: {
    directory: "./database/seeds",
  },
};

export default config;
