import fp from "fastify-plugin";
import userService from "./user.js";
import rentalPointsService from "./rentalPoints.js";

function services(fastify, _, done) {
  fastify.decorate("services", {
    user: userService(fastify),
    rentalPoints: rentalPointsService(fastify),
  });
  done();
}

export default fp(services);
