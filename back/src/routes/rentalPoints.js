export default function rentalPointsRoutes(fastify, _, done) {
  fastify.get("/rentalPoints", async (req, res) => {
    return fastify.services.rentalPoints.get();
  });
  done();
}
