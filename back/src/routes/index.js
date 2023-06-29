export default function routes(fastify, opts, done) {
  fastify.get("/foo", (req, res) => {
    res.send({ foo: "bar" });
  });
  done();
}
