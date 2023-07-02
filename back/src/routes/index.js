import userRoutes from "./user.js";
import rentalPointsRoutes from "./rentalPoints.js";
import bikesRoutes from "./bikes.js";

export default function routes(fastify, _, done) {
  fastify.register(userRoutes, { prefix: "/user" });
  fastify.register(rentalPointsRoutes);
  fastify.register(bikesRoutes);
  done();
}
