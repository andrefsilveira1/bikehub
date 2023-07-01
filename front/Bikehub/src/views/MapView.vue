<script setup>
import { reactive, ref } from "vue";
import MainLayout from "../components/layouts/MainLayout.vue";
import RentalPointListing from "../components/RentalPointListing.vue";
import Map from "../components/Map.vue";

const selectedPoint = ref(null);
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

function openModal(point) {
  selectedPoint.value = point;
}
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

.modal-container {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
}

.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;

  padding: 3.6rem 2.8rem;

  border-radius: 6px;
  border: 1px solid #c4c4c4;
  background: #f1f2f6;
  box-shadow: 2px 3px 6px 0px rgba(0, 0, 0, 0.25);
}

.modal__header {
  display: flex;
  justify-content: space-between;
}

.modal__title {
  font-size: 2.3rem;
  font-weight: 500;
}
</style>

<template>
  <MainLayout>
    <main>
      <div class="modal-container" v-if="selectedPoint !== null">
        <div class="modal">
          <header class="modal__header">
            <h1 class="modal__title">Ponto {{ selectedPoint.title }}</h1>
          </header>
        </div>
      </div>
      <RentalPointListing
        :cards="points"
        @open-modal="(point) => openModal(point)"
      />
      <Map :points="points" />
    </main>
  </MainLayout>
</template>
