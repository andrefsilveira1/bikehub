<script setup>
import { onMounted } from "vue";
import { RouterView } from "vue-router";
import Loader from "./components/common/Loader.vue";
import useAuthStore from "./stores/auth";

const auth = useAuthStore();

onMounted(async () => {
  await auth.validateToken();
});
</script>

<template>
  <div
    v-if="auth.loading"
    style="
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    "
  >
    <Loader :size="15" />
  </div>
  <RouterView v-else />
</template>
