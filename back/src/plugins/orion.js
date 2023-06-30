import fp from "fastify-plugin";
import axios from "axios";

async function orionPlugin(fastify, _, done) {
  const instance = axios.create({ baseURL: process.env.ORION_URL });
  fastify.decorate("orion", {
    onBikeRent: async (rentalPointId) => {
      const point = await fastify.daos.rentalPoints.findById(rentalPointId);
      return instance.patch(`/v2/entities/point${rentalPointId}/attrs`, {
        availableBikes: {
          type: "Integer",
          value: point.availableBikes,
        },
      });
    },
  });
  done();
}

export default fp(orionPlugin);
