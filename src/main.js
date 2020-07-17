import Vue from 'vue'

import App from './App.vue'
import router from '@/router'
import { titleMixin } from '@/common/mixins'

// [
// ].forEach((x) => Vue.use(x))

import './assets/styles/index.css';

Vue.mixin(titleMixin)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
