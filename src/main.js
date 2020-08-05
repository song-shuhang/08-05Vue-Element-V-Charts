import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'

import VCharts from 'v-charts'

import router from "./router";

Vue.config.productionTip = false

Vue.use(VCharts)


new Vue({
  render: h => h(App),
  router,
  VCharts
}).$mount('#app')
