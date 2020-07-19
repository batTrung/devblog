import Vue from 'vue'
import Vuex from 'vuex'

import layout from './modules/layout.module'
import post from './modules/post.module'
import page from './modules/page.module'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    layout,
    post,
    page,
  },
})

