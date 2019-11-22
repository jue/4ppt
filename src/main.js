import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import App from "./App.vue";

import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
Vue.use(ElementUI);

Vue.directive("drag", function(el) {
  el.onmousedown = function(e) {
    var disx = e.clientX - el.offsetLeft;
    var disy = e.clientY - el.offsetTop;
    document.onmousemove = function(e) {
      el.style.left = e.clientX - disx + "px";
      el.style.top = e.clientY - disy + "px";
    };
    document.onmouseup = function() {
      document.onmousemove = document.onmouseup = null;
    };
  };
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
