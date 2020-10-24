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
    path: "/",
    name: "Buscador",
    component: Buscador,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/news",
    name: "News",
    component: News,
  },
  {
    path: "/livecamaras",
    name: "LiveCamaras",
    component: LiveCamaras,
  },
  {
    path: "/photos",
    name: "Photos",
    component: Photos,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
