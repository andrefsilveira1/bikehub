<template>
    <div class="card" :class="{ 'selected': isSelected }">
      <div class="header">
        <h2 class="title">{{ title }}</h2>
        <h3 class="subtitle">{{ subtitle }}</h3>
      </div>
      <div class="content">
        <p> Bicicletas disponíveis: {{ bikesnum }}</p>
      </div>
      <div class="footer">
        <button class="button">Visualizar</button>
      </div>
    </div>
  </template>
  
  <style>
  .card {
    cursor: pointer;
    color: #090C08;
    border-radius: 10px;
    margin-top: 120px;
    background-color: #fafafa;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2), 2px 0px 4px rgba(0, 0, 0, 0.2);
    padding: 10px;
    height: 100%;
    max-height: 160px;
  }
  
  .header {
    margin-bottom: 10px;
  }
  
  .title {
    font-size: 18px;
    font-weight: bold;
  }
  
  .subtitle {
    font-size: 14px;
  }
  
  .footer {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  }
  
  .button {
    background-color: #FF1654;
    color: white;
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
  }
  .selected {
    border: 2px solid #FF1654;
  }
  </style>
  
  <script>
  export default {
    data() {
        return {
            isSelected: false
        };
    },
    props: {
      title: String,
      subtitle: String,
      bikesnum: String,
    },
    
  };
  
  </script>
  