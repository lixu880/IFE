// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import 'animate.css';
import App from './App';
import Blank from './components/blank';
import Newqn from './components/newqn';
import List from './components/list';

Vue.use(VueRouter);
Vue.use(Vuex);

// const bus = new Vue();
// export default bus;
const store = new Vuex.Store({
  state: {
    qnss: [
      {
        title: 'aaa',
        deadline: '1900',
        status: 1,
        qns: [],
      },
      {
        title: 'aaa',
        deadline: '1900',
        status: 2,
        qns: [],
      },
      {
        title: 'aaa',
        deadline: '1900',
        status: 3,
        qns: [],
      },
    ],
  },
  mutations: {
    saveQns(state, payload) {
      state.qnss.push(payload);
    },
    delQns(state, payload) {
      state.qnss.splice(state.qnss.indexOf(payload), 1);
    },
  },
});

const router = new VueRouter({
  moder: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      component: Blank,
    },
    {
      path: '/newqn',
      component: Newqn,
    },
    {
      path: '/list',
      component: List,
    },
  ],
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App,
  },
});
