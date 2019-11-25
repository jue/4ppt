import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //是否显示车辆进站时间信息
    showInfo: true,
    //默认车站_bimface
    defStation: {
      "id": "03",
      "name": "演示站",
      "model_url": "https://filecdn.jue.sh/demo",
      "fileId": 1724432338945504,
      "forge_url": 'https://filecdn.jue.sh/data/228159488-05--rvt/Resource/____/3D/3D.svf'
    },
    //是否显示模型按钮
    modelBtns: false
  },
  mutations: {
    update_showInfo(state, status) {
      state.showInfo = status;
    },
    update_defStation(state, json) {
      state.defStation = json;
    },
    update_modelBtns(state, status){
      state.modelBtns = status
    }
  },
  actions: {},
  modules: {}
});
