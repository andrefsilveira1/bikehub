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
  done();
}
