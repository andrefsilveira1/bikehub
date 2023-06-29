import userRoutes from "./user.js";

export default function routes(fastify, opts, done) {
  fastify.register(userRoutes, { prefix: "/user" });
  done();
}
