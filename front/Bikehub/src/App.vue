<script setup>
import { ref } from "vue";
import { RouterView } from "vue-router";
import Loader from "./components/common/Loader.vue";

const loading = ref(true);
const loggedIn = ref(false);
</script>

<template>
  <div
    v-if="loading"
    style="
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    "
  >
    <Loader :size="15" />
  </div>
</template>
