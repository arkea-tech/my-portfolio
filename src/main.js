import Vue from 'vue'
import App from './App.vue'
import i18n from './i18n'

import AOS from 'aos'
import 'aos/dist/aos.css'
import 'vue-select/dist/vue-select.css';
import VueParallaxJs from 'vue-parallax-js'
import VueScrollTo from 'vue-scrollto'
import VueRouter from 'vue-router'
import VTooltip from 'v-tooltip'
import vSelect from 'vue-select'

var VueCookie = require('vue-cookie');

Vue.use(VTooltip)
Vue.use(VueRouter)
Vue.use(VueScrollTo)
Vue.use(VueCookie);
Vue.use(VueParallaxJs)
Vue.component('v-select', vSelect)

Vue.config.productionTip = false

const routes = [
  { path: '/'}
]

const router = new VueRouter({
  mode:'history',
  routes
})

new Vue({
  created () {
    AOS.init()
  },
  router,
  i18n,
  render: h => h(App),
}).$mount('#app')

if (window.location.protocol !== 'https:') window.location.href = 'https://www.gabrielpironneau.com'
