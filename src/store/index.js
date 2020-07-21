import Vue from 'vue'
import Vuex from 'vuex'

import layout from './modules/layout.module'
import auth from './modules/auth.module'
import post from './modules/post.module'
import page from './modules/page.module'
import playlist from './modules/playlist.module'
import topic from './modules/topic.module'
import search from './modules/search.module'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    layout,
    auth,
    post,
    page,
    playlist,
    topic,
    search,
  },
})
