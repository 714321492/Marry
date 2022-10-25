import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/home/home.vue"),
  },
  {
    path: "/banner_1",
    name: "banner_1",
    component: () => import("../views/banner_1/banner_1.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
