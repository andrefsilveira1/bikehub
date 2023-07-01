<script setup>
import { reactive } from "vue";
import MainLayout from "../components/layouts/MainLayout.vue";
import RentalPointListing from "../components/RentalPointListing.vue";
import Map from "../components/Map.vue";

const points = reactive([
  {
    id: 1,
    title: "IMD",
    subtitle: "Na frente do centro de convenções",
    bikenums: 5,
    lat: -5.8317987316920785,
    lon: -35.205290890708916,
  },
  {
    id: 2,
    title: "Centro de Convenções",
    subtitle: "Próximo ao Senac",
    bikenums: 9,
    lat: -5.863775407951932,
    lon: -35.18072265020563,
  },
  {
    id: 3,
    title: "Favorito - Neópolis",
    subtitle: "Do lado da SmartFit",
    bikenums: 2,
    lat: -5.878229195496277,
    lon: -35.20154908599613,
  },
  {
    id: 4,
    title: "Smart Fit - Roberto Freire",
    subtitle: "Na rua do Mcdonalds",
    bikenums: 2,
    lat: -5.857628344588509,
    lon: -35.19656159756927,
  },
  {
    id: 5,
    title: "Mc'Donalds - Abel Cabral",
    subtitle: "No quinto andar do IMD",
    bikenums: 2,
    lat: -5.878389594054686,
    lon: -35.209369969779885,
  },
]);
</script>

<style scoped>
main {
  height: calc(100vh - 120px);
  width: 100%;
  padding-top: 4rem;
  padding-left: 4rem;
  display: flex;
  justify-content: space-between;
}
</style>

<template>
  <MainLayout>
    <main>
      <RentalPointListing :cards="points" />
      <Map :points="points" />
    </main>
  </MainLayout>
</template>
