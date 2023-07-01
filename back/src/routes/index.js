import userRoutes from "./user.js";
import rentalPointsRoutes from "./rentalPoints.js";
import bikesRoutes from "./bikes.js";
import validationRoutes from "./validation.js";

export default function routes(fastify, opts, done) {
  fastify.register(userRoutes, { prefix: "/user" });
  fastify.register(rentalPointsRoutes);
  fastify.register(bikesRoutes);
  fastify.register(validationRoutes);
  done();
}
