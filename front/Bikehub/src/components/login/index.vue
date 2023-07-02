<script setup>
import { ref } from "vue";
import Input from "../common/Input.vue";
import api from "../../api";
import router from "../../router/index";

const email = ref("");
const password = ref("");

async function login() {
  const loginData = {
    email: email.value,
    password: password.value,
  };

  try {
    const response = await api.post("/user/login", loginData);
    const token = {
      token: response.data,
    };

    const validate = await api.post("/validate", token);

    if (validate) {
      api.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${token.token.jwt}`;
      router.push("/map");
    }
  } catch (error) {
    console.error(error);
  }
}
</script>

<template>
  <div class="login-container">
    <img src="/bike.jpg" alt="Imagem de fundo" class="main-img" />
    <div class="login-container__right">
      <img src="/logo.svg" class="logo" />
      <form class="login-form">
        <div class="form-group">
          <label for="email">Email:</label>
          <Input
            v-model="email"
            placeholder="email@seuemail.com"
            type="email"
            id="email"
            required
          />
        </div>
        <div class="form-group" style="margin-top: 2rem; margin-bottom: 4rem">
          <label for="password">Senha:</label>
          <Input
            type="password"
            id="password"
            v-model="password"
            required
            placeholder="Sua senha aqui"
          />
        </div>
        <button class="login-button" @click="login" type="submit">
          <span>Entrar</span>
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.login-container {
  display: flex;
  height: 100vh;
  overflow: hidden;
}

.main-img {
  width: 75%;
  height: 100%;
  object-fit: cover;
}

.login-container__right {
  background-color: white;

  display: flex;
  flex-direction: column;

  padding-top: 10%;

  width: 100%;
  height: 100%;
}

.logo {
  width: 60%;
  margin: 0 auto;
  margin-bottom: 4rem;
}

.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 90%;
  margin: 0 auto;
}

.form-group {
  width: 100%;
}

h2 {
  margin-bottom: 1rem;
}

label {
  font-weight: 300;
  font-size: 1.6rem;
  display: block;
  margin-bottom: 0.7rem;
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

button {
  display: block;
  width: 80%;
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
  transition: all 0.35s;
}

button span {
  position: relative;
  z-index: 2;
}

button:after {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background: #ff1654;
  transition: all 0.35s;
  border-radius: 4px;
}

button:hover {
  color: #fff;
}

button:hover:after {
  width: 100%;
}
</style>
