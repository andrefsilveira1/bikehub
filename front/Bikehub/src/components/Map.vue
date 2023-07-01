<script setup>
import { onMounted, ref } from "vue";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const mapContainer = ref(null);
const mapRef = ref(null);

onMounted(() => {
  mapRef.value = L.map(mapContainer.value, { zoomControl: false }).setView(
    [-5.832206500202732, -35.20519943935597],
    13
  );
  const imd = L.marker([-5.8317987316920785, -35.205290890708916]).addTo(
    mapRef.value
  );
  imd.bindPopup("Instituto Metrópole Digital");
  const cc = L.marker([-5.863775407951932, -35.18072265020563]).addTo(
    mapRef.value
  );
  cc.bindPopup("Centro de convenções");
  const favorito = L.marker([-5.878229195496277, -35.20154908599613]).addTo(
    mapRef.value
  );
  favorito.bindPopup("Favorito Neópolis");
  const smartFit = L.marker([-5.857628344588509, -35.19656159756927]).addTo(
    mapRef.value
  );
  smartFit.bindPopup("SmartFit Roberto Freire");
  const mcdonalds = L.marker([-5.878389594054686, -35.209369969779885]).addTo(
    mapRef.value
  );
  mcdonalds.bindPopup("Mc'Donalds Abel Cabral");
  const huol = L.marker([-5.7807474182664, -35.19626263463553]).addTo(
    mapRef.value
  );
  huol.bindPopup("Hospital Universitário Onofre Lopes");
  const midway = L.marker([-5.8114397640359865, -35.20469857536568]).addTo(
    mapRef.value
  );
  midway.bindPopup("Midway");

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
