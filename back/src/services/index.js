import fp from "fastify-plugin";
import userService from "./user.js";
import rentalPointsService from "./rentalPoints.js";
import bikesService from "./bikes.js";
import loginService from "./validation.js";

function services(fastify, _, done) {
  fastify.decorate("services", {
    user: userService(fastify),
    rentalPoints: rentalPointsService(fastify),
    bike: bikesService(fastify),
    validation: loginService(fastify),

  });
  done();
}

export default fp(services);
