import userRoutes from "./user.js";
import rentalPointsRoutes from "./rentalPoints.js";

export default function routes(fastify, opts, done) {
  fastify.register(userRoutes, { prefix: "/user" });
  fastify.register(rentalPointsRoutes);
  done();
}
