<script setup>
import { ref, defineProps, watchEffect } from "vue";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import redMarker from "../assets/marker.png";

const props = defineProps({
  points: { type: Array, required: true },
  latitude: Number,
  longitude: Number,
});

const mapContainer = ref(null);
const mapRef = ref(null);
const markerColor = "#FF1654";


watchEffect(() => {
  if (props.points.length > 0) {
    mapRef.value = L.map(mapContainer.value, { zoomControl: false }).setView(
      [props.points[0].latitude, props.points[0].longitude],
      13
    );

    props.points.forEach((point) => {
      const customIcon = L.icon({
        iconUrl: redMarker,
        iconSize: [50, 50],
        iconAnchor: [12, 41],
      });
      const marker = L.marker([point.latitude, point.longitude], {
        icon: customIcon
      }).addTo(
        mapRef.value
      );
      marker.bindPopup(point.name);
    });
    L.tileLayer("http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}", {
      maxZoom: 20,
      subdomains: ["mt0", "mt1", "mt2", "mt3"],
    }).addTo(mapRef.value);
  }
});

watchEffect(() => {
  console.log("MUDOU")
  if (
    mapRef.value &&
    props.latitude !== undefined &&
    props.longitude !== undefined
  ) {
    zoomToRegion(props.latitude, props.longitude);
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
