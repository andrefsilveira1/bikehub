<script setup>
import { onMounted, ref } from "vue";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const { points } = defineProps({ points: { required: true } });

const mapContainer = ref(null);
const mapRef = ref(null);

onMounted(() => {
  mapRef.value = L.map(mapContainer.value, { zoomControl: false }).setView(
    [points[0].lat, points[0].lon],
    13
  );

  points.forEach((point) => {
    const marker = L.marker([point.lat, point.lon]).addTo(mapRef.value);
    marker.bindPopup(point.title);
  });

  L.tileLayer("http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}", {
    maxZoom: 20,
    subdomains: ["mt0", "mt1", "mt2", "mt3"],
  }).addTo(mapRef.value);
});
</script>
<template>
  <div ref="mapContainer" class="map-container"></div>
</template>
<style scoped>
.map-container {
  height: 100%;
  width: 100%;
}
</style>
