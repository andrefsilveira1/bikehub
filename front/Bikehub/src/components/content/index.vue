<template>
  <h1>Ponto de aluguel</h1>
    <div class="grid-container">
      <div class="left-panel">
        <div v-for="card in cards" :key="card.id">
          <!-- Essa função será responsável no futuro para realizar um panCrop no mapa -->
            <Card :title=card.title :subtitle=card.subtitle :bikesnum=card.bikenums
             @click="selectCard(card.id)" :class="{ 'selected': card.id === selectedCardId }"/>
        </div>
      </div>
      <div class="right-panel">
        <!-- <h1>O mapa deve ficar aqui -->
    </div>
</div>
  </template>
  
  <style scoped>
  .grid-container {
    display: grid;
    grid-template-columns: 1fr 3fr; /* Define as proporções das colunas */
    height: 100vh; /* Ajuste a altura conforme necessário */
    width: 100%;
  }
  
  .left-panel {
    background-color: white;
    padding: 20px; /* Espaçamento interno do painel esquerdo */
  }
  
  .right-panel {
    background-color: #000000; /* Cor de fundo do painel direito */
    padding: 20px; /* Espaçamento interno do painel direito */
  }
  h1 {
    color: aqua;

  }
  .teste {
    background-color: #eb0000;
  }
  </style>

<script>
import Card from "../cardpoints/index.vue";
export default {
  components: {
    Card
  },
  data() {
    // Dados estáticos, ver get no server
    return {
      cards: [
        { id: 1, title: 'Via Costeira', subtitle: 'Na frente do centro de convenções', bikenums: '5' },
        { id: 2, title: 'Ayrton Senna', subtitle: 'Próximo ao Senac', bikenums: '9'  },
        { id: 3, title: 'Roberto Freire', subtitle: 'Do lado da SmartFit', bikenums: '2' }
      ],
      selectedCardId: null
    };
  },
  methods: {
    selectCard(cardId) {
      this.selectedCardId = cardId;
    }
  }
};
</script>
  