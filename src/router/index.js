import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Equipment from "../views/Equipment.vue";
import Tags from "../views/Tags.vue";
import Dev from "../views/Dev.vue";

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
      path: "/tags", 
      name: "tags", 
      component: Tags
    }]
  },
  {
    path: '/dev',
    name: 'dev',
    component: Dev,
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
