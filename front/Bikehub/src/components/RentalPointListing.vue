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
</script>
<template>
  <div class="left-panel">
    <h2>Pontos de aluguel</h2>
    <input type="text" placeholder="Busque por pontos de aluguel" />
    <div class="left-panel__listing">
      <RentalPointCard v-for="card in cards" :key="card.id" :point="card" />
    </div>
  </div>
</template>

<style scoped>
.left-panel {
  overflow-y: hidden;
  overflow-x: hidden;
  height: 100%;
  width: 30%;
}

.left-panel__listing {
  padding-top: 2rem;
  height: calc(100% - 100px - 2rem);
  overflow-y: auto;
}

.left-panel__listing > * + * {
  margin-top: 2rem;
}

h2 {
  color: #090c08;
  font-size: 2.8rem;
  font-family: Inter;
  font-weight: 500;
  margin-bottom: 3rem;
}

input {
  border-radius: 7px;
  border: 1px solid #c4c4c4;
  font-size: 1.6rem;

  width: 100%;
  padding: 2rem 1.6rem;

  transition: 0.3s;
}

input::placeholder {
  color: rgba(9, 12, 8, 0.6);
  font-style: italic;
}

input:focus {
  outline: none;
  border: 1px solid #ff1654;
}
</style>
