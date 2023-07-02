import fp from "fastify-plugin";
import auth from "../plugins/auth.js";

export default function rentalPointsRoutes(fastify, _, done) {
  fastify.register((instance, _, done) => {
    instance.register(fp(auth));
    instance.get("/rentalPoints", async (req, res) => {
      return fastify.services.rentalPoints.get();
    });
    instance.post("/rentalPoint/:id/subscribe", async (req, res) => {
      const { id } = req.params;
      await fastify.services.rentalPoints.subscribeToRentalPoint(id);
      await fastify.orion.subscribeToRentalPoint(id, req.user.id);
      res.code(204).send();
    });
    done();
  });
  fastify.post("/rentalPoint/notification", async (req, res) => {
    const { subscriptionId } = req.body;
    const userId =
      fastify.orion.getUserAssociatedWithNotificationId(subscriptionId);
    const data = req.body.data[0];
    fastify.ws.notify(userId, {
      type: "BIKE_AVAILABILITY_CHANGED",
      rentalPoint: data.name.value,
      availableBilkes: data.availableBikes.value,
    });
    res.send();
  });
  done();
  fastify.get("/rentalPoint/:id/bikes", async (req, res) => {
    const {id} = req.params;
    const bikes = await fastify.services.rentalPoints.getBikeByRentId(id);
    res.send(bikes);
  });
  done();
}
