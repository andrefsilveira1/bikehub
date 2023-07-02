<script setup>
import Button from "./common/Button.vue";
import BikeAvailabilityText from "./BikeAvailabilityText.vue";

const { point, lat, lon } = defineProps({
  point: { type: Object, required: true },
  lat: Number,
  lon: Number,
});
</script>
<template>
  <article class="card">
    <h1>{{ point.title }}</h1>
    <p>{{ point.subtitle }}</p>
    <span><BikeAvailabilityText :amount="point.bikenums" /></span>
    <Button @click="$emit('open-modal', point)">Visualizar</Button>
  </article>
</template>
<style scoped>
.card {
  background: white;
  border: 1px solid #c4c4c4;
  box-shadow: 2px 3px 6px 0px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  padding: 2rem;

  position: relative;

  transition: 0.3s;
  cursor: pointer;
}

.card:hover {
  border: 1px solid #ff1654;
  transform: translateY(-10px);
}

.card :deep(button) {
  position: absolute;
  right: 2rem;
  bottom: 2rem;
}

.card h1 {
  font-size: 2rem;
  font-weight: 400;
  margin-bottom: 1rem;
}
.card p {
  font-size: 1.6rem;
  font-weight: 400;
  color: rgba(9, 12, 8, 0.8);
  margin-bottom: 1rem;
}

.card span {
  color: rgba(9, 12, 8, 0.8);
  font-size: 14px;
  font-family: Inter;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
}
</style>
