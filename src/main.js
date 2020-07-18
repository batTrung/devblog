import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@icon/themify-icons/themify-icons.css'
import './assets/styles/index.css';
import './assets/vendor/fontawesome-5.11.2/css/fontawesome.min.css';
import VTooltip from 'v-tooltip'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import { titleMixin } from '@/common/mixins'
import ApiService from '@/common/api.service'

[
  BootstrapVue,
  VTooltip,
].forEach((x) => Vue.use(x))

ApiService.init()

Vue.mixin(titleMixin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
