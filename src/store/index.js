import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //是否显示车辆进站时间信息
    showInfo: true,
    //默认车站_bimface
    defStation: {
      "id": "01",
      "name": "演示站",
      "model_url": "https://filecdn.jue.sh/demo",
      "fileId": 1724432338945504,
      "forge_url": "https://filecdn.jue.sh/gyurt/L01Z01/Resource/____/3D/3D.svf"
    },
    //车站信息
    stationList: {
      "L01Z01": {
        "name": "窦关站",
        "forge_url": "https://filecdn.jue.sh/gyurt/L01Z01/Resource/____/3D/3D.svf",
        "pointDataUrl": "https://api.myjson.com/bins/9k8ma"
      },
      "L01Z02": {
        "name": "林城西路",
        "forge_url": "https://filecdn.jue.sh/data/228159488-05--rvt/Resource/____/3D/3D.svf",
        "pointDataUrl": "https://api.myjson.com/bins/o6y1e"
      }
    },
    //当前站点SID
    currSid: "L01Z01",
    //是否显示模型按钮
    modelBtns: false,
    //是否显示视角编辑框
    showPointEdit: false
  },
  mutations: {
    update_showInfo(state, status) {
      state.showInfo = status;
    },
    update_currSid(state, sid) {
      state.currSid = sid;
    },
    update_modelBtns(state, status) {
      state.modelBtns = status
    },
    update_showPointEdit(state, status) {
      state.showPointEdit = status
    }
  },
  actions: {},
  modules: {}
});
