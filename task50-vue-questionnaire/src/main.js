// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import 'animate.css';
import App from './App';
import Blank from './components/blank';
import Newqn from './components/newqn';
import List from './components/list';

Vue.use(VueRouter);

const bus = new Vue();
export default bus;

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
  template: '<App/>',
  components: {
    App,
  },
});
