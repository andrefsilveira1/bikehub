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
          <tr v-for="(item, index) in bikeRow" :key="index" :class="{ 'table-row-odd': index % 2 === 0, 'table-row-even': index % 2 !== 0 }">
            <td>{{ item.id}}</td>
            <td>Disponível</td>
            <td>Não definido</td>
            <td><button class="button">Alugar</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
    import { onMounted, reactive } from "vue";

    import Button from "../common/Button.vue"
    import api from "../../api"
    const props = defineProps({
    points: { type: Object, required: true },
    });

    const bikeRow = reactive([]);
    onMounted(async () => {
    try {
        const bikes = await api.get(`/rentalPoint/${props.points.id}/bikes`);
        bikeRow.push(...bikes.data);

    } catch (e) {
        alert(e);
    }
    });
    function rentBike(id) {
        try {
            // await api.get(`/rent`) Implementar rota de alugar bike
        } catch (err) {
            // console.log("ERR:", err)
        }
    }


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
  