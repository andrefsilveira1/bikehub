import { createRouter, createWebHistory } from "vue-router";
import MapView from "../views/MapView.vue";
import SubscriptionsView from "../../src/views/SubscriptionsView.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/map",
      name: "map",
      component: MapView,
    },
    {
      path: "/subscriptions",
      name: "subscriptions",
      component: SubscriptionsView
    }
  ],
});

export default router;
