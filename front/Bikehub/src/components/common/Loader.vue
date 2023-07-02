<script setup>
import { computed } from "vue";
const { size, color } = defineProps({
  size: {
    type: Number,
    default: 10,
  },
  color: {
    type: String,
    default: "#FF1654",
  },
});

const rgbColor = computed(() => {
  const r = parseInt(color.slice(1, 3), 16);
  const g = parseInt(color.slice(3, 5), 16);
  const b = parseInt(color.slice(5), 16);
  return { r, g, b };
});

const style = computed(() => ({
  border: `1.1em solid rgba(${rgbColor.value.r}, ${rgbColor.value.g}, ${rgbColor.value.b}, 0.2)`,
  borderLeft: `1.1em solid ${color}`,
  fontSize: `${size}px`,
}));
</script>

<template>
  <div class="loader" :style="style"></div>
</template>

<style scoped>
.loader,
.loader:after {
  border-radius: 50%;
  width: 10em;
  height: 10em;
}
.loader {
  margin: 60px auto;
  position: relative;
  text-indent: -9999em;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: load8 1.1s infinite linear;
  animation: load8 1.1s infinite linear;
}
@-webkit-keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
