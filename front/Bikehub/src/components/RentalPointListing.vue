<script setup>
const { cards } = defineProps({ cards: { required: true } });
import { ref, computed } from "vue";
import RentalPointCard from "./RentalPointCard.vue";
import Input from "./common/Input.vue";

const searchInput = ref("");
const receivedCoordinate = ref(null);

const filteredPoints = computed(() => {
  if (searchInput.value === "") return cards;
  return cards.filter(
    (point) =>
      point.name.toLowerCase().includes(searchInput.value.toLowerCase()) ||
      point.description.toLowerCase().includes(searchInput.value.toLowerCase())
  );
});
const emit = defineEmits(["open-modal", "sentCoordinate"]);

function handleCoordinateClick(point) {
  receivedCoordinate.value = [point.latitude, point.longitude];
  emit("sentCoordinate", receivedCoordinate.value);
}
</script>
<template>
  <div class="left-panel">
    <h2>Pontos de aluguel</h2>
    <Input placeholder="Busque por pontos de aluguel" v-model="searchInput" />
    <div class="left-panel__listing">
      <RentalPointCard
        v-for="point in filteredPoints"
        @open-modal="(point) => $emit('open-modal', point)"
        @click="handleCoordinateClick(point)"
        :key="point.id"
        :point="point"
      />
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
  padding: 2rem 0;
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
