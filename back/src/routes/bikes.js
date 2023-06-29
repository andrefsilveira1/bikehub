import fp from "fastify-plugin";
import auth from "../plugins/auth.js";

export default function bikesRoutes(fastify, _, done) {
  fastify.register(fp(auth));
  fastify.post("/bike/:id/rent", (req, res) => {
    const { id } = req.params;
    return fastify.services.bike.rentBike(id);
  });
  done();
}
