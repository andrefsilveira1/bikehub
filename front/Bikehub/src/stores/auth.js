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
      token.value = jwt;
      loggedIn.value = true;
      loading.value = false;
      router.push("/map");
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  return { loading, loggedIn, login };
});

export default useAuthStore;
