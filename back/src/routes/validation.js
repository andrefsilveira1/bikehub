export default function validationRoutes(fastify, _, done) {
    fastify.post(
      "/validate",
      {
        schema: {
          body: {
            type: "object",
            required: ["token"],
          },
        },
      },
      async (req, res) => {
        const {
          body: { token },
        } = req;
        const response = await fastify.services.validation.authenticate(token.jwt);
        return res.code(201).send(response);
      }
    );
    done();
  }