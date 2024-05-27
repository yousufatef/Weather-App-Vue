import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./assets/tailwind.css";
import App from "./App.vue";
import Home from "./views/Home.vue";

const routes = [{ path: "/", component: Home }];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

createApp(App).use(router).mount("#app");
