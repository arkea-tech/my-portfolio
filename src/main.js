import Vue from 'vue'
import App from './App.vue'
import i18n from './i18n'

import { createI18n } from 'vue-i18n/index'

import AOS from 'aos'
import 'aos/dist/aos.css'
import 'vue-select/dist/vue-select.css';
import VueParallaxJs from 'vue-parallax-js'
import VueScrollTo from 'vue-scrollto'
import VueRouter from 'vue-router'
import VTooltip from 'v-tooltip'
import vSelect from 'vue-select'

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
<<<<<<< HEAD
Vue.component('v-select', vSelect)
=======
Vue.use(i18n)
>>>>>>> ffa6806 ([ADD] Language translation in progress)

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
