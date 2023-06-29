import fp from "fastify-plugin";
import userService from "./user.js";

function services(fastify, _, done) {
  fastify.decorate("services", {
    user: userService(fastify),
  });
  done();
}

export default fp(services);
