import fp from "fastify-plugin";
import auth from "../plugins/auth.js";

export default function bikesRoutes(fastify, _, done) {
  fastify.register(fp(auth));
  fastify.post("/bike/:id/rent", async (req, res) => {
    const { id } = req.params;
    await fastify.services.bike.rentBike(id, req.user.id);
    return res.code(201).send();
  });
  done();
}
