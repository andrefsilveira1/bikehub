import fastify from "fastify";
import * as dotenv from "dotenv";
import routes from "./routes/index.js";
import database from "./db.js";
import services from "./services/index.js";
import ws from "./plugins/ws.js";
import orion from "./plugins/orion.js";

dotenv.config();

const server = fastify({
  logger: true,
});

await server.register(services);
await server.register(database);
await server.register(ws);
await server.register(orion);
await server.register(routes);

server.listen({ port: process.env.PORT, host: "0.0.0.0" }, (err, address) => {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }
  console.log(`Server running on ${address}`);
});
