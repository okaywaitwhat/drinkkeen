// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App'
import router from './router'
import VueProgressiveImage from 'vue-progressive-image'
import 'bootstrap/dist/css/bootstrap.min.css'
import store from './store'
import moment from 'moment'
//import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.prototype.moment = moment
Vue.use(BootstrapVue)
Vue.use(VueProgressiveImage)
Vue.config.productionTip = false

window.moment = require('moment');
window.moment.locale('ru');

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
