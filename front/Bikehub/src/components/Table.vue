<script setup>
import Button from "./common/Button.vue";
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
        <tr style="border: none">
          <th style="padding: 1.5rem">Identificador</th>
          <th style="padding: 1.5rem">Status</th>
          <th style="padding: 1.5rem">Horário de Aluguel</th>
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
