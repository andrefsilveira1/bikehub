<template>
    <div class="table-container">
      <table class="responsive-table">
        <thead>
          <tr>
            <th>Identificador</th>
            <th>Status</th>
            <th>Horário de Aluguel</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in tableData" :key="index" :class="{ 'table-row-odd': index % 2 === 0, 'table-row-even': index % 2 !== 0 }">
            <td>{{ item.col1 }}</td>
            <td>{{ item.col2 }}</td>
            <td>{{ item.col3 }}</td>
            <td><button class="button">Alugar</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  import Button from "../common/Button.vue"
  const tableData = [
    { col1: 'Valor 1', col2: 'Valor 2', col3: 'Valor 3' },
    { col1: 'Valor 4', col2: 'Valor 5', col3: 'Valor 6' },
    { col1: 'Valor 7', col2: 'Valor 8', col3: 'Valor 9' },
  ];
  </script>
  
  <style>
  .table-container {
    width: 100%;
    overflow-x: auto;
  }
  
  .responsive-table {
    width: 100%;
    border-collapse: collapse;
  }
  
  .responsive-table th,
  .responsive-table td {
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }
  th {
    color:#FF1654;
  }
  
  .table-row-odd {
    background-color: rgba(255, 22, 84, 0.2);
  }
  
  .table-row-even {
    background-color: #fff;
  }
  .button {
  background-color: #ff1654;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
  </style>
  