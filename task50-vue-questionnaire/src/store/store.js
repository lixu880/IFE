import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// 从localStorage获取数据
const STORAGE_KEY = 'questionaire-by-vuejs';
function fetchLocal() {
  const qnss = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  return qnss;
}

const store = new Vuex.Store({
  state: {
    qnss: fetchLocal(),
    editing: null,
    fillQns: null,
  },
  mutations: {
    saveQns(state, payload) {
      const obj = state;
      // 判断如果是新建保存插入qnss末尾
      // 如果是编辑则只清楚editin的引用
      if (!obj.editing) {
        obj.qnss.push(payload);
      }
      obj.editing = null;
    },
    delQns(state, payload) {
      state.qnss.splice(state.qnss.indexOf(payload), 1);
    },
    updateQns(state, payload) {
      // status这个参数是必需的，不然改变数据不会引发view更新，及时这里没有用到
      const obj = payload;
      obj.status = 2;
    },
    // 编辑问卷，将数据对象指向editing
    editQns(state, payload) {
      const obj = state;
      obj.editing = payload;
    },
    fillQns(state, payload) {
      const obj = state;
      obj.fillQns = payload;
    },
    saveFill(state) {
      const obj = state;
      obj.fillQns = null;
    },
  },
});

export default store;
