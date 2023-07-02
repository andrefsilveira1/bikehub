<script setup>
import MainLayout from "../components/layouts/MainLayout.vue";
import RentTable from "../components/RentTable.vue";
</script>

<template>
  <MainLayout>
    <RentTable :bikes="bikes" />
  </MainLayout>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 1.5s;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(100%);
}
</style>
