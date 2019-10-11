/**
import Vant from 'vant';
import App from './App.vue';
import router from './router';
import store from './store';
 * @LastEditTime: 2019-10-11 15:55:46
 * @Descripttion:
 */
import Vue from 'vue';
import Vant, { Lazyload } from 'vant';
import App from './App.vue';
import router from './router';
import store from './store';
import 'vant/lib/index.css';

// options 为可选参数，无则不传
Vue.use(Lazyload);
Vue.use(Vant);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
