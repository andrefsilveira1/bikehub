import fp from "fastify-plugin";
import axios from "axios";

async function orionPlugin(fastify, _, done) {
  const instance = axios.create({ baseURL: process.env.ORION_URL });
  fastify.decorate("orion", {
    userSubscribed: {},
    onBikeRent: async (rentalPointId) => {
      const point = await fastify.daos.rentalPoints.findById(rentalPointId);
      return instance.patch(`/v2/entities/point${rentalPointId}/attrs`, {
        availableBikes: {
          type: "Integer",
          value: point.availableBikes,
        },
      });
    },
    onBikeReturn: async (rentalPointId) => {
      const point = await fastify.daos.rentalPoints.findById(rentalPointId);
      return instance.patch(`/v2/entities/point${rentalPointId}/attrs`, {
        availableBikes: {
          type: "Integer",
          value: point.availableBikes,
        },
      });
    },
    async subscribeToRentalPoint(rentalPointId, userId) {
      const response = await instance.post(`/v2/subscriptions`, {
        subject: {
          entities: [
            {
              id: `point${rentalPointId}`,
              type: "point",
              condition: { attrs: ["availableBikes"] },
            },
          ],
        },
        notification: {
          http: {
            url: `${process.env.ORION_NOTIFICATION_URL}/rentalPoint/notification`,
          },
        },
      });
      const subscriptionId = response.headers.location.split("/")[3];
      this.userSubscribed[subscriptionId] = userId;
    },
  });
  done();
}

export default fp(orionPlugin);
