import fp from "fastify-plugin";
import userService from "./user.js";
import rentalPointsService from "./rentalPoints.js";
import bikesService from "./bikes.js";

function services(fastify, _, done) {
  fastify.decorate("services", {
    user: userService(fastify),
    rentalPoints: rentalPointsService(fastify),
    bike: bikesService(fastify),
  });
  done();
}

export default fp(services);
