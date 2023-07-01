<script setup>
import MainLayout from "../components/layouts/MainLayout.vue";
import RentalPointListing from "../components/RentalPointListing.vue";
</script>

<style scoped>
main {
  height: calc(100vh - 120px);
  width: 100%;
  padding-top: 4rem;
  padding-left: 4rem;
  display: flex;
  justify-content: space-between;
}

.left-panel {
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  width: 30%;
}

:global(.left-panel > * + *) {
  margin-top: 3rem;
}

.right-panel {
  overflow: hidden;
  height: 100%;
  width: 67%;
  background: blue;
}
</style>

<template>
  <MainLayout>
    <main>
      <div class="left-panel">
        <RentalPointListing />
      </div>
      <div class="right-panel"></div>
    </main>
  </MainLayout>
</template>
