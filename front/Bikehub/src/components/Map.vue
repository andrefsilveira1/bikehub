<script setup>
import { onMounted, ref, defineProps, watchEffect, nextTick } from "vue";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const props = defineProps({
  points: { type: Array, required: true },
  lat: Number,
  lon: Number,
});

const mapContainer = ref(null);
const mapRef = ref(null);

onMounted(() => {
  nextTick(() => {
    mapRef.value = L.map(mapContainer.value, { zoomControl: false }).setView(
      [props.points[0].lat, props.points[0].lon],
      13
    );

    props.points.forEach((point) => {
      const marker = L.marker([point.lat, point.lon]).addTo(mapRef.value);
      marker.bindPopup(point.title);
    });

    L.tileLayer("http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}", {
      maxZoom: 20,
      subdomains: ["mt0", "mt1", "mt2", "mt3"],
    }).addTo(mapRef.value);
  });
});

watchEffect(() => {
  if (mapRef.value && props.lat !== undefined && props.lon !== undefined) {
    zoomToRegion(props.lat, props.lon);
  }
});

function zoomToRegion(lat, lon) {
  const regionCoordinates = [lat, lon];
  const zoomLevel = 19;
  mapRef.value.setView(regionCoordinates, zoomLevel);
}
</script>

<template>
  <div class="right-panel">
    <div ref="mapContainer" class="map-container"></div>
  </div>
</template>

<style scoped>
.right-panel {
  overflow: hidden;
  height: 100%;
  width: 67%;
  background: blue;
}

.map-container {
  height: 100%;
  width: 100%;
}
</style>
