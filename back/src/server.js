import fastify from "fastify";
import * as dotenv from "dotenv";
import routes from "./routes/index.js";

dotenv.config();

const server = fastify({
  logger: true,
});

server.register(routes);

server.listen({ port: process.env.PORT }, (err, address) => {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }
  console.log(`Server running on ${address}`);
});
