<script setup>
import { onMounted, reactive } from "vue";
import Button from "./common/Button.vue";
import api from "../api";

const bikes = reactive([]);

onMounted(async () => {
  try {
    const { data } = await api.get(`/user/bikes`);
    bikes.push(...data);
  } catch (e) {
    alert(e);
  }
});
</script>

<template>
  <div class="table-container">
    <table class="responsive-table">
      <thead>
        <tr style="border: none">
          <th style="padding: 1.5rem">Identificador</th>
          <th style="padding: 1.5rem">Status</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(bike, index) in bikes" :key="index">
          <td>BK{{ bike.bikeId }}</td>
          <td>{{ bike.endTimestamp === null ? "Ativo" : "Devolvida" }}</td>
          <td style="text-align: center">
            <Button :disabled="bike.endTimestamp !== null">Devolver</Button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.table-container {
  width: 100%;
  overflow-x: auto;
  border-radius: 8px 8px 0px 0px;
  border: 1px solid #c4c4c4;
}

.responsive-table {
  width: 100%;
  border-collapse: collapse;
}

tr {
  border-bottom: 1px solid #c4c4c4;
  border-top: 1px solid #c4c4c4;
}

th,
td {
  font-size: 1.6rem;
  text-align: center;
  padding: 1rem;
}

th {
  color: #ff1654;
  font-weight: 500;
}
</style>
