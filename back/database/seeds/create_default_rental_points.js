/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("bikes").del();
  await knex("rental_points").del();
  const rentalPoints = [
    {
      id: 1,
      name: "Via Costeira",
      description:
        "No início da Via Costeira, logo depois do Centro de Convenções",
      latitude: -5.863374,
      longitude: -35.181452,
      bikes: 3,
    },
    {
      id: 2,
      name: "Shopping Cidade Verde",
      description:
        "Dentro do Shopping Cidade Verde, no estacionamento traseiro",
      latitude: -5.896545,
      longitude: -35.198758,
      bikes: 2,
    },
    {
      id: 3,
      name: "Nordestão Cidade Jardim",
      description: "Dentro do estacionamento, perto da cafeteria principal",
      latitude: -5.84966,
      longitude: -35.206258,
      bikes: 5,
    },
    {
      id: 4,
      latitude: -5.843207,
      longitude: -35.199981,
      name: "UFRN - ECT",
      description: "No estacionamento do CT - Setor 4",
      bikes: 2,
    },
    {
      id: 5,
      name: "UFRN - RU",
      latitude: -5.833542,
      longitude: -35.203629,
      description: "Na frente do RU, perto da parada dos circulares",
      bikes: 1,
    },
  ];
  await Promise.all(
    rentalPoints.map((rentalPoint) =>
      knex("rental_points").insert({
        id: rentalPoint.id,
        name: rentalPoint.name,
        description: rentalPoint.description,
        latitude: rentalPoint.latitude,
        longitude: rentalPoint.longitude,
      })
    )
  );
  await Promise.all(
    rentalPoints.map((rentalPoint) =>
      knex("bikes").insert(
        new Array(rentalPoint.bikes).fill({ rental_point_id: rentalPoint.id })
      )
    )
  );
};
