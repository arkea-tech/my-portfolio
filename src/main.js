import Vue from 'vue'
import App from './App.vue'

import { createI18n } from 'vue-i18n/index'

import AOS from 'aos'
import 'aos/dist/aos.css'
import VueParallaxJs from 'vue-parallax-js'
import VueScrollTo from 'vue-scrollto'
import VueRouter from 'vue-router'
import VTooltip from 'v-tooltip'

import fr from "./locales/fr.json";
import en from "./locales/en.json";

var VueCookie = require('vue-cookie');
const i18n = createI18n({
  locale: "en",
  fallbackLocale: "en",
  messages: { fr, en },
});

Vue.use(VTooltip)
Vue.use(VueRouter)
Vue.use(VueScrollTo)
Vue.use(VueCookie);
Vue.use(VueParallaxJs)
Vue.use(i18n)

Vue.config.productionTip = false

const routes = [
  { path: '/'}
]

const router = new VueRouter({
  mode:'history',
  routes // short for `routes: routes`
})

new Vue({
  created () {
    AOS.init()
  },
  router,
  render: h => h(App),
}).$mount('#app')
