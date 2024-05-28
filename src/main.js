import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./assets/tailwind.css";
import App from "./App.vue";
import HomeView from "./views/HomeView.vue";
import CityView from "./views/CityView.vue";

const routes = [
  { path: "/", name: "home", component: HomeView },
  { path: "/weather/:state/:city", name: "cityView", component: CityView },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

createApp(App).use(router).mount("#app");
