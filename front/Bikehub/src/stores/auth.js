import { ref } from "vue";
import { defineStore } from "pinia";
import api from "../api";
import router from "../router";

const useAuthStore = defineStore("auth", () => {
  const loading = ref(true);
  const loggedIn = ref(false);
  const token = ref(null);

  const login = async (email, password) => {
    try {
      const {
        data: { jwt },
      } = await api.post("/user/login", { email, password });
      api.defaults.headers.authorization = `Bearer ${jwt}`;
      localStorage.setItem("bikehubToken", jwt);
      token.value = jwt;
      loggedIn.value = true;
      loading.value = false;
      router.push("/map");
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  const validateToken = async () => {
    const localStorageJwt = localStorage.getItem("bikehubToken");
    if (localStorageJwt === null) {
      loading.value = false;
      router.push("/login");
      return;
    }
    try {
      await api.post("/user/validateToken", { jwt: localStorageJwt });
      token.value = localStorageJwt;
      loggedIn.value = true;
      loading.value = false;
      api.defaults.headers.authorization = `Bearer ${localStorageJwt}`;
      router.push("/map");
    } catch {
      loading.value = false;
      router.push("/login");
    }
  };

  const logout = () => {
    token.value = null;
    delete api.defaults.headers.authorization;
    loggedIn.value = false;
    localStorage.removeItem("bikehubToken");
    router.push("/login");
  };

  return { loading, loggedIn, login, validateToken, logout };
});

export default useAuthStore;
