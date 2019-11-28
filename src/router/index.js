import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Equipment from "../views/Equipment.vue";
import Points from "../views/Points.vue";

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
    },
    {
      path: "/points", 
      name: "points", 
      component: Points
    }]
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
