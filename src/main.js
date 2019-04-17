import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import numkeyboard from 'vue-numkeyboard';
import 'vue-numkeyboard/style.css';


Vue.use(numkeyboard);

const moment = require('moment')
moment.updateLocale("en", { week: {
  dow: 1, // First day of week is Monday
  doy: 4  // First week of year must contain 4 January (7 + 1 - 4)
}});
Vue.use(require('vue-moment'), {
  moment
})

Vue.prototype.$http = axios
Vue.config.productionTip = false

/* Load GAPI plugin and API configuration */
import VueGAPI from "vue-gapi";
import apiConfig from "./apiConfig";

// Use the plugin and pass along the configuration
Vue.use(VueGAPI, apiConfig);

new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app')