import validateAuthHeader from "../util/validateAuthHeader.js";

export default async function auth(fastify, _, done) {
  fastify.decorateRequest("user", null);
  fastify.addHook("preHandler", async (req, res) => {
    try {
      const user = validateAuthHeader(req.headers.authorization);
      req.user = user;
    } catch (e) {
      throw e;
    }
  });
}
