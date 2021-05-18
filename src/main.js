import Vue from 'vue'
import App from './App.vue'
import LoadScript from 'vue-plugin-load-script'
import jQuery from "jquery"
import VueCarousel from '@chenfengyuan/vue-carousel';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { faFacebook, faTwitter,faYoutube,faInstagram,faGoogle } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret,faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons'
import VueScrollProgress from "vue-scroll-progress";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import router from "./routes"

library.add(faUserSecret)
library.add(faUser)
library.add(faFacebook)
library.add(faTwitter)
library.add(faEnvelope)
library.add(faYoutube)
library.add(faInstagram)
library.add(faGoogle)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueScrollProgress);

Vue.component('VueScrollProgress',VueScrollProgress)



console.log('VueCarousel',VueCarousel)

// const app = Vue.createApp({});

// app.component(VueCarousel.name, VueCarousel);
global.jQuery = jQuery;

Vue.use(LoadScript)



// import css file
import "./assets/font/font-awesome.min.css"
import "./assets/font/font.css"
import "./assets/css/bootstrap.min.css"
import "./assets/css/style.css"
import "./assets/css/responsive.css"
import "./assets/css/jquery.bxslider.css"
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

// import js file

// import "./assets/js/jquery-min.js"
// import "./assets/js/bootstrap.min.js"
// import "./assets/js/jquery.bxslider.js"
// import "./assets/js/selectnav.min.js"

Vue.loadScript("./assets/js/jquery-min.js")
Vue.loadScript("./assets/js/bootstrap.min.js")
Vue.loadScript("/assets/js/jquery.bxslider.js")
Vue.loadScript("./assets/js/selectnav.min.js")
//Vue.loadScript("./assets/js/sticky.min.js")

Vue.config.productionTip = false
Vue.prototype.jQuery = jQuery

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
