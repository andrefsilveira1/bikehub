export default function userRoutes(fastify, _, done) {
  fastify.post(
    "/",
    {
      schema: {
        body: {
          type: "object",
          required: ["email", "password"],
          properties: {
            email: { type: "string", format: "email" },
            password: { type: "string" },
          },
        },
      },
    },
    (req, res) => {
      const {
        body: { email, password },
      } = req;
      res.send({ email, password });
    }
  );
  done();
}
