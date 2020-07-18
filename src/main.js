import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import '@icon/themify-icons/themify-icons.css'
import './assets/styles/index.css';
import './assets/vendor/fontawesome-5.11.2/css/fontawesome.min.css';
import VTooltip from 'v-tooltip'
import App from './App.vue'
import router from '@/router'
import { titleMixin } from '@/common/mixins'

[
  BootstrapVue,
  VTooltip,
].forEach((x) => Vue.use(x))

Vue.mixin(titleMixin)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
