import Vue from 'vue'
import Vuex from 'vuex'

import auth from './modules/auth.module'
import post from './modules/post.module'
import page from './modules/page.module'
import playlist from './modules/playlist.module'
import topic from './modules/topic.module'
import search from './modules/search.module'
import home from './modules/home.module'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    post,
    page,
    playlist,
    topic,
    search,
    home,
  },
})
