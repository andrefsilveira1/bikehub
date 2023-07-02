<script setup>
import Button from "../common/Button.vue";
const tableData = [
  { col1: "Valor 1", col2: "Valor 2", col3: "Valor 3" },
  { col1: "Valor 4", col2: "Valor 5", col3: "Valor 6" },
  { col1: "Valor 7", col2: "Valor 8", col3: "Valor 9" },
];
</script>

<template>
  <div class="table-container">
    <table class="responsive-table">
      <thead>
        <tr>
          <th>Identificador</th>
          <th>Status</th>
          <th style="text-align: center">Horário de Aluguel</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in tableData" :key="index">
          <td>{{ item.col1 }}</td>
          <td>{{ item.col2 }}</td>
          <td style="text-align: center">{{ item.col3 }}</td>
          <td style="text-align: center"><Button>Alugar</Button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.table-container {
  width: 100%;
  overflow-x: auto;
}

.responsive-table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  font-size: 1.6rem;
  text-align: center;
}

th {
  color: #ff1654;
  font-weight: 500;
}
</style>
