import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Equipment from "../views/Equipment.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    children: [{
      path: "/equipment", 
      name: "equipment", 
      component: Equipment
    }]
  }
];

const router = new VueRouter({
  routes
});

export default router;
