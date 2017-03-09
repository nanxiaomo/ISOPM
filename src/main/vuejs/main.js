// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import vueResource from 'vue-resource'
import App from './App'
import router from './router'
Vue.use(vueResource)
require('./assets/css/weather.css')
require('./assets/css/reset.css')
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  vueResource,
  template: '<App/>',
  components: { App }
})
