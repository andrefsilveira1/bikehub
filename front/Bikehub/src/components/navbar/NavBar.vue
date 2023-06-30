<script>
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import { RouterLink } from 'vue-router';
</script>
<template>
    <div class="navbar">
      <div class="navbar-left">
        <RouterLink class="nav" to="/">
            <h1>BikeHub</h1>
            <i class="bike fas fa-bicycle"></i>
        </RouterLink>
      </div>
      <div class="navbar-right">
        <ul>
          <li><RouterLink to="/map">Mapa</RouterLink></li>
          <li><RouterLink to="/points">Pontos de aluguel</RouterLink></li>
          <li><RouterLink to="/subscriptions">Suas inscrições</RouterLink></li>
        </ul>
      </div>
    </div>
  </template>

  
  <style scoped>
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: #f2f2f2;
    z-index: 999;
  }
  .bike {
    margin-left: 15px;
    margin-top: 22px;
    color: #FF1654;
    font-size: 50px;


  }
  .nav {
    display: flex;
  }
  .navbar-left {
    font-size: 30px;

  }
  
  .navbar-left h1 {
    color: #FF1654;
    margin: 0;
  }
  
  .navbar-right ul {
    margin: auto;
    padding: 0;
    display: flex;
  }
  
  .navbar-right li {
    color: #FF1654;
    margin-right: 35px;
  }
  
  .navbar-right a {
    color: #FF1654;
  }
  
  @media (max-width: 600px) {
    .navbar {
      flex-direction: column;
    }
  
    .navbar-left,
    .navbar-right {
      margin-bottom: 10px;
    }
  }
  </style>
  