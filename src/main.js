import Vue from 'vue'
import { store } from './store/store'
import { router } from './router/router'
import App from './App'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App />',
  components: { App }
})
