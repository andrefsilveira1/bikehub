export default (fastify) => ({
  get: () => fastify.knex("rentalPoints"),
});
