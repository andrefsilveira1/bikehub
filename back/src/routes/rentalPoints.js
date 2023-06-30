import fp from "fastify-plugin";
import auth from "../plugins/auth.js";

export default function rentalPointsRoutes(fastify, _, done) {
  fastify.register(fp(auth));
  fastify.get("/rentalPoints", async (req, res) => {
    return fastify.services.rentalPoints.get();
  });
  fastify.post("/rentalPoint/:id/subscribe", async (req, res) => {
    const { id } = req.params;
    await fastify.services.rentalPoints.subscribeToRentalPoint(id);
    await fastify.orion.subscribeToRentalPoint(id, req.user.id);
    res.code(204).send();
  });
  done();
}
