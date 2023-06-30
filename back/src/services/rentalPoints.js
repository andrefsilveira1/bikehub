const rentalPointsService = (fastify) => ({
  get: async () => fastify.daos.rentalPoints.get(),
});

export default rentalPointsService;
