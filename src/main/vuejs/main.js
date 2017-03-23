// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import vueResource from 'vue-resource'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import vslide from 'components/slide/Slide'
import vheader from 'components/header/header'
import vfooter from 'components/footer/footer'
Vue.use(vueResource)
Vue.use(ElementUI)
Vue.use(vslide)
Vue.use(vheader)
Vue.use(vfooter)

require('assets/css/weather.css')
require('assets/css/reset.css')
require('assets/css/common.css')
require('assets/fonts/iconfont.css')
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  vueResource,
  template: '<App/>',
  components: { App }
})
