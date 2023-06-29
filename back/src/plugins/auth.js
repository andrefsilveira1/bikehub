import jwt from "jsonwebtoken";

export default async function auth(fastify, _, done) {
  fastify.addHook("preHandler", async (req, res) => {
    console.log("YOOOOOOOOOOOOOOOOOOO");
    console.log(req.headers);
  });
}
