import Vue from 'vue'
import Vuelidate from 'vuelidate'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@icon/themify-icons/themify-icons.css'
import 'nprogress/nprogress.css';
import './assets/styles/index.css';
import './assets/vendor/fontawesome-5.11.2/css/fontawesome.min.css';
import VTooltip from 'v-tooltip'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import { titleMixin, doLogin } from '@/common/mixins'
import ApiService from '@/common/api.service'
import { CHECK_AUTH } from "@/store/actions.type";

[
  Vuelidate,
  BootstrapVue,
  VTooltip,
].forEach((x) => Vue.use(x))

ApiService.init()

router.beforeEach((to, from, next) =>
  Promise.all([store.dispatch(CHECK_AUTH)]).then(next)
);

[
    doLogin,
    titleMixin,
].forEach((x) => Vue.mixin(x))

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
