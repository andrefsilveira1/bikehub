export default (fastify) => ({
  create: (userId, rentalPointId, subscriptionId) =>
    fastify.knex("user_subscriptions").insert([
      {
        user_id: userId,
        rental_point_id: rentalPointId,
        subscription_id: subscriptionId,
      },
    ]),
  get: (subscriptionId) =>
    fastify
      .knex("user_subscriptions")
      .where({ subscription_id: subscriptionId })
      .first(),
  getByUserAndRentalPoint: (userId, rentalPointId) =>
    fastify
      .knex("user_subscriptions")
      .where({ user_id: userId, rental_point_id: rentalPointId })
      .first(),
  delete: (subscriptionId) =>
    fastify
      .knex("user_subscriptions")
      .where({ subscription_id: subscriptionId })
      .del(),
});
