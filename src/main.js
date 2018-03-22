// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import { AlertPlugins } from 'v-m-layer'
import 'v-m-layer/dist/layer.css'
import './assets/css/reset.css'

Vue.config.productionTip = false

Vue.use(AlertPlugins)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
