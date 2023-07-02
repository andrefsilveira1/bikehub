import fp from "fastify-plugin";
import axios from "axios";

async function orionPlugin(fastify, _, done) {
  const instance = axios.create({ baseURL: process.env.ORION_URL });
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
    async unsubscribeToRentalPoint(rentalPointId, userId) {
      const subscription =
        await fastify.daos.subscription.getByUserAndRentalPoint(
          userId,
          rentalPointId
        );
      await instance.delete(
        `/v2/subscriptions/${subscription.subscription_id}`
      );
      await fastify.daos.subscription.delete(subscription.subscription_id);
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
      await fastify.daos.subscription.create(
        userId,
        rentalPointId,
        subscriptionId
      );
    },
    getUserAssociatedWithNotificationId: async (subscriptionId) => {
      const subscription = await fastify.daos.subscription.get(subscriptionId);
      return subscription.user_id;
    },
  });
  done();
}

export default fp(orionPlugin);
