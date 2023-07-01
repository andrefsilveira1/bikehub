<script setup>
import MainLayout from "../components/layouts/MainLayout.vue";
import RentalPointListing from "../components/RentalPointListing.vue";
</script>

<style scoped>
main {
  display: flex;
  justify-content: space-between;
  height: calc(100vh - 120px); /* header height is 120px */
  width: 100%;
}
</style>

<template>
  <MainLayout>
    <RentalPointListing />
  </MainLayout>
</template>
