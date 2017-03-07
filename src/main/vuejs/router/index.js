import Vue from 'vue'
import Router from 'vue-router'
import Slide from 'components/slide/Slide'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Slide',
      component: Slide
    }
  ]
})
