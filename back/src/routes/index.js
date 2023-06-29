import userRoutes from "./user.js";

export default function routes(fastify, opts, done) {
  fastify.get("/", (req, res) => {
    res.send({ foo: "bar" });
  });
  fastify.register(userRoutes, { prefix: "/user" });
  done();
}
