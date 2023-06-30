import fp from "fastify-plugin";
import axios from "axios";

async function orionPlugin(fastify, _, done) {
  const instance = axios.create({ baseURL: process.env.ORION_URL });
  // This should be stored in the database.
  // I'll do this later.
  const userSubscribed = {};
  fastify.decorate("orion", {
    onBikeRent: async (rentalPointId) => {
      const point = await fastify.daos.rentalPoints.findById(rentalPointId);
      return instance.put(
        `/v2/entities/point${rentalPointId}/attrs/availableBikes/value`,
        point.availableBikes.toString(),
        { headers: { "Content-Type": "text/plain" } }
      );
    },
    onBikeReturn: async (rentalPointId) => {
      const point = await fastify.daos.rentalPoints.findById(rentalPointId);
      return instance.put(
        `/v2/entities/point${rentalPointId}/attrs/availableBikes/value`,
        point.availableBikes.toString(),
        { headers: { "Content-Type": "text/plain" } }
      );
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
      userSubscribed[subscriptionId] = userId;
    },
    getUserAssociatedWithNotificationId: (notificationId) =>
      userSubscribed[notificationId],
  });
  done();
}

export default fp(orionPlugin);
