import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const basePath = process.env.VUE_APP_BASEPATH;

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: `${basePath}/about`,
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: `${basePath}/chat`,
    name: "chat",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ChatView.vue"),
  },
  {
    path: `${basePath}/objects`,
    name: "objects",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ObjectsView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
