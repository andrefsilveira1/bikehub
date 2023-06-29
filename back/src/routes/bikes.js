export default function bikesRoutes(fasitfy, _, done) {
  fasitfy.post("/bike/:id/rent", (req, res) => {
    const { id } = req.params;
    return fasitfy.services.bike.rentBike(id);
  });
  done();
}
