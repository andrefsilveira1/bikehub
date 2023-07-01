<script setup>
import { reactive, ref } from "vue";
import RentalPointCard from "./RentalPointCard.vue";

let selectedCardId = ref(null);
let receivedCoordinate = ref("");
const cards = reactive([
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

function selectCard(cardId) {
  selectedCardId.value = cardId;
}

function handleCoordinateSelected(coordinate) {
  receivedCoordinate.value = coordinate;
}
</script>
<template>
  <h2>Pontos de aluguel</h2>
  <RentalPointCard v-for="card in cards" :key="card.id" :point="card" />
</template>

<style scoped>
h2 {
  color: #090c08;
  font-size: 2.8rem;
  font-family: Inter;
  font-weight: 500;
}
</style>
