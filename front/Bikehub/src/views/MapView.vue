<script setup>
import { reactive, ref, onMounted, toRaw } from "vue";
import MainLayout from "../components/layouts/MainLayout.vue";
import RentalPointListing from "../components/RentalPointListing.vue";
import Map from "../components/Map.vue";
import Button from "../components/common/Button.vue";
import BikeAvailabilityText from "../components/BikeAvailabilityText.vue";
import api from "../api";
import Table from "../components/table/index.vue"

const selectedPoint = ref(null);
const selectedCoordinate = reactive([]);
const points = reactive([]);

function openModal(point) {
  selectedPoint.value = point;
}

function handleSentCoordinate(coordinate) {
  selectedCoordinate[0] = coordinate[0];
  selectedCoordinate[1] = coordinate[1];
}

onMounted(async () => {
  try {
    const { data } = await api.get("/rentalPoints");
    points.push(...data);
  } catch (e) {
    alert(e);
  }
});
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

  width: 900px;

  background: white;
}

.modal__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal__title {
  font-size: 2.3rem;
  font-weight: 500;
}

.modal span {
  display: block;
  color: rgba(9, 12, 8, 0.8);
  font-size: 1.4rem;
  font-weight: 300;
  margin-bottom: 3rem;
}
</style>

<template>
  <MainLayout>
    <main>
      <div
        class="modal-container"
        v-if="selectedPoint !== null"
        @click.self="selectedPoint = null"
      >
        <div class="modal">
          <header class="modal__header">
            <h1 class="modal__title">Ponto {{ selectedPoint.title }}</h1>
            <Button variant="secondary">Inscrever-se</Button>
          </header>
          <span>
            <BikeAvailabilityText :amount="selectedPoint.bikenums" />
          </span>
          <Table />
        </div>
      </div>
      <RentalPointListing
        :cards="points"
        @open-modal="(point) => openModal(point)"
        @sentCoordinate="handleSentCoordinate"
      />
      <Map
        :points="points"
        :lat="selectedCoordinate[0]"
        :lon="selectedCoordinate[1]"
      />
    </main>
  </MainLayout>
</template>
