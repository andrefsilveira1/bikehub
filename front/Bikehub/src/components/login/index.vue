<template>
    <div class="login-container">
      <div class="image-container">
        <img src="/bike.jpg" alt="Imagem de fundo">
      </div>
      <div class="login-card">
        <img src="/logo.svg" />
        <form class="loginForm">
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="email" required placeholder="seuemail@email.com">
        </div>
          <div class="form-group">
            <label for="password">Senha:</label>
            <input type="password" id="password" v-model="password" required>
          </div>
          <a href="#" class="login-button" @click="login"><span>Entrar</span></a>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      login() {
        console.log('Email:', this.email);
        console.log('Senha:', this.password);
      }
    }
  };
  </script>
  
  <style scoped>
  .login-container {
    display: grid;
    grid-template-columns: 3fr 1fr;
    height: 100vh;
  }
  
  .image-container {
    position: relative;
    overflow: hidden;
  }
  
  .image-container img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .login-card {
    background-color: white;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .loginForm {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2), 2px 0px 4px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    padding: 5px;
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  h2 {
    margin-bottom: 1rem;
  }
  
  .form-group {
    font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
    font-size: 2rem;
    margin: 4rem;
  }
  
  label {
    font-weight: bold;
  }
  
  input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ff1654;
    border-radius: 4px;
  }
  
  .login-button {
    background-color: white;
    color: #333;
    padding: 1rem 4rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    width: 100%;
    padding-bottom: 40px;
    border: 1px solid #ff1654;
  }


  a {
  display: block;
  width: 200px;
  height: 40px;
  line-height: 40px;
  font-size: 18px;
  font-family: sans-serif;
  text-decoration: none;
  color: #333;
  border: 2px solid #333;
  letter-spacing: 2px;
  text-align: center;
  position: relative;
  transition: all .35s;
}

a span {
  position: relative;
  z-index: 2;

}

a:after {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background: #ff1654;
  transition: all .35s;
  border-radius: 4px;
}

a:hover{
  color: #fff;
}
span {
}

a:hover:after{
  width: 100%;
}
  </style>
  