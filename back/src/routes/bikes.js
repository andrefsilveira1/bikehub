import fp from "fastify-plugin";
import auth from "../plugins/auth.js";

export default function bikesRoutes(fastify, _, done) {
  fastify.register(fp(auth));
  fastify.post("/bike/:id/rent", async (req, res) => {
    const { id } = req.params;
    const bike = await fastify.services.bike.rentBike(id, req.user.id);
    res.code(204).send();
    try {
      await fastify.orion.onBikeRent(bike.rentalPointId);
    } catch {}
  });
  fastify.post("/bike/:id/return", async (req, res) => {
    const { id } = req.params;
    const bike = await fastify.services.bike.returnBike(id, req.user.id);
    res.code(204).send();
    try {
      await fastify.orion.onBikeReturn(bike.rentalPointId);
    } catch {}
  });
  done();
}
