export default async function validation(fastify, _, done) {
    fastify.decorate('authenticate', async (request, reply) => {
        try {
          await request.jwtVerify();
        } catch (err) {
          reply.status(401).send({ message: 'Token JWT inválido ou ausente' });
        }
      });
  }
  