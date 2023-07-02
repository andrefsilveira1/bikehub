export default function userRoutes(fastify, _, done) {
  fastify.post(
    "/login",
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
    async (req, res) => {
      const {
        body: { email, password },
      } = req;
      const response = await fastify.services.user.login(email, password);
      return res.code(201).send(response);
    }
  );
  fastify.post(
    "/validateToken",
    {
      schema: {
        body: {
          type: "object",
          required: ["jwt"],
          properties: {
            jwt: { type: "string" },
          },
        },
      },
    },
    async (req, res) => {
      const {
        body: { jwt },
      } = req;
      fastify.services.user.validateJwt(jwt);
      return res.code(204).send();
    }
  );
  done();

  fastify.get("/:id/bikes", async (req, res) => {
    const { id } = req.params;
    const bikes = await fastify.services.user.getBikesByUser(id);
    return res.send(bikes);
  });

  done();

}
