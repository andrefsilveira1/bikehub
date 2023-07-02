<script setup>
const { amount } = defineProps(["amount"]);
</script>
<template>
  {{ amount === 0 ? "Sem" : amount }} bicicleta{{
    amount === 1 ? "" : "s"
  }}
  disponíve{{ amount === 1 ? "l" : "is" }}
</template>
