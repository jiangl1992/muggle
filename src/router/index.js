import Vue from "vue";
import VueRouter from "vue-router";
import login from "../views/account/login.vue";
import index from "../views/appAdmin/index.vue";
import visualConfigRouter from "./_visualConfig/visualConfig";

Vue.use(VueRouter);

import HSLayout from "./layout/HSLayout";
const routes = [
  {
    path: "/",
    beforeEnter(to, from, next) {
      next("login");
    }
  },
  {
    path: "/login",
    name: "login",
    components: {
      default: login
    },
    meta: {
      module: "account"
    }
  },
  {
    path: "/index",
    name: "index",
    components: {
      ...HSLayout,
      default: index
    },
    meta: {
      module: "appAdmin"
    }
  },
  ...visualConfigRouter
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
