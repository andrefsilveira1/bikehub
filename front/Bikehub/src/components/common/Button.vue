<script setup>
const { variant } = defineProps({
  variant: {
    default: "primary",
  },
});
</script>

<template>
  <button :class="variant"><slot /></button>
</template>

<style scoped>
button {
  border: none;
  font-size: 1.6rem;
  font-weight: 500;
  padding: 1.2rem 2.6rem;
  border-radius: 6px;
  cursor: pointer;
}

button.primary {
  color: white;
  background: #ff1654;
}
</style>
