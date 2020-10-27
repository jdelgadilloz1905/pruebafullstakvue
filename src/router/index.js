import Vue from "vue";
import VueRouter from "vue-router";
import Buscador from "../views/Buscador.vue";
import News from "../views/News.vue";
import LiveCamaras from "../views/Livecamaras.vue";
import Photos from "../views/Photos.vue";
import Contact from "../views/Contact.vue";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/search/:usuario?",
    name: "search",
    component: Buscador,
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/home",
    name: "home",
    component: Home,
  },
  {
    path: "/news",
    name: "news",
    component: News,
  },
  {
    path: "/livecamaras",
    name: "liveCamaras",
    component: LiveCamaras,
  },
  {
    path: "/photos",
    name: "photos",
    component: Photos,
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
