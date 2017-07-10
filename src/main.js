// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueLazyload from 'vue-lazyload'
import fastclick from 'fastclick'

import 'com/index.styl'

fastclick.attach(document.body)

Vue.config.productionTip = false

Vue.use(VueAwesomeSwiper)

Vue.use(VueLazyload, {
  loading: require('./image/default.png')
})


import { swiper, swiperSlide } from 'vue-awesome-swiper'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  // router,
  // template: '<App/>',
  components: { swiper, swiperSlide }
})
