import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/components/Home.vue";
import Projects from "@/components/Projects.vue";
import Contacts from "@/components/Contacts.vue";
import About from "@/components/About.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/projects",
    name: "projects",
    component: Projects
  },
  {
    path: "/contacts",
    name: "contacts",
    component: Contacts
  },
  {
    path: "/about",
    name: "about",
    component: About
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
