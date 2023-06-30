import fp from "fastify-plugin";
import auth from "../plugins/auth.js";

export default function rentalPointsRoutes(fastify, _, done) {
  fastify.register(fp(auth));
  fastify.get("/rentalPoints", async (req, res) => {
    return fastify.services.rentalPoints.get();
  });
  done();
}
