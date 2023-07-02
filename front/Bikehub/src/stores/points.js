import { reactive } from "vue";
import { defineStore } from "pinia";
import api from "../api";

const usePointsStore = defineStore("points", () => {
  const points = reactive([]);

  const init = async () => {
    try {
      const { data } = await api.get("/rentalPoints");
      points.push(...data);
    } catch (e) {
      alert(e);
    }
  };

  return { points, init };
});

export default usePointsStore;
