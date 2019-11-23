import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //是否显示车辆进站时间信息
    showInfo: true,
    //默认车站
    defStation: {
      id: "05",
      name: "林城西路",
      model_url: "https://filecdn.jue.sh/demo",
      fileId: 1737035989092000
    }
  },
  mutations: {
    update_showInfo(state, status) {
      state.showInfo = status;
    },
    update_defStation(state, json) {
      state.defStation = json;
    }
  },
  actions: {},
  modules: {}
});
