<script setup>
defineEmits(["click"]);
const { variant, disabled } = defineProps({
  variant: {
    default: "primary",
  },
  disabled: {
    default: false,
  },
});
</script>

<template>
  <button :class="variant" @click="$emit('click')" :disabled="disabled">
    <slot />
  </button>
</template>

<style scoped>
button {
  border: none;
  font-size: 1.6rem;
  font-weight: 500;
  padding: 1.2rem 2.6rem;
  border-radius: 6px;
  cursor: pointer;

  transition: background 0.3s ease;
}

button.primary {
  color: white;
  background: #ff1654;
}

button.secondary {
  color: #ff1654;
  background: white;
}

button:disabled {
  cursor: not-allowed !important;
  background-color: #c4c4c4;
  opacity: 0.6;
}

button.secondary:hover {
  background: #f1f2f6;
}
</style>
