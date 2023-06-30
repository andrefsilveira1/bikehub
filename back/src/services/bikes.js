import { StatusCodes } from "http-status-codes";
import APIError from "../errors/APIError.js";

const bikesService = (fastify) => ({
  rentBike: async (bikeId, userId) => {
    const bike = await fastify.daos.bike.findById(bikeId);
    if (!bike) throw new APIError("Bike doesn't exist", StatusCodes.NOT_FOUND);
    if (!bike.available)
      throw new APIError(
        "Bike isn't available",
        StatusCodes.UNPROCESSABLE_ENTITY
      );
    await fastify.daos.bike.createRental(bikeId, userId);
    return bike;
  },
  returnBike: async (bikeId, userId) => {
    const bike = await fastify.daos.bike.findById(bikeId);
    if (!bike) throw new APIError("Bike doesn't exist", StatusCodes.NOT_FOUND);
    if (bike.available)
      throw new APIError(
        "Cannot returned an available bike",
        StatusCodes.UNPROCESSABLE_ENTITY
      );
    const rental = await fastify.daos.bike.getActiveRentalForBike(bikeId);
    if (rental.userId !== userId)
      throw new APIError(
        "Cannot a return a bike that you did not rent",
        StatusCodes.UNPROCESSABLE_ENTITY
      );
    await fastify.daos.bike.endRental(rental.id);
    return bike;
  },
});

export default bikesService;
