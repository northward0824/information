// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import rem from './util/rem'
import API from '../src/http/api'
import Vant from 'vant';


import axios from 'axios' //引入
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// axios.defaults.headers.common['refresh_token'] = localStorage.getItem('accessToken');
Vue.prototype.$axios = axios;



import 'vant/lib/index.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Vant);
Vue.use(ElementUI);
Vue.config.productionTip = false;

Vue.prototype.$api = API;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
