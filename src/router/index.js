import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Buttons",
    component: () => import("../views/Buttons.vue"),
  },
  {
    path: "/inputs",
    name: "Inputs",
    component: () => import("../views/Inputs.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  /* eslint-disable no-unused-vars */
  scrollBehavior(to, from, savedPosition) {
    //If there is no hash parameter when we change vue, scroll to top of page
    if (!to.hash) {
      return { x: 0, y: 0 };
    }
  },
});

export default router;
