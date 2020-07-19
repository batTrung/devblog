import { PostsService } from '@/common/api.service'

import {
    FETCH_POSTS,
    FETCH_POST,
} from '@/store/actions.type'
import {
    SET_POSTS,
    SET_POST,
} from '@/store/mutations.type'

const state = {
    posts: [],
    currentPost: {},
}

const getters = {
    posts(state) {
        return state.posts
    },
}

const actions = {
    [FETCH_POSTS]({ commit }, params) {
        return PostsService.query(params)
            .then(({ data }) => {
                commit(SET_POSTS, data)
            })
    },
    [FETCH_POST]({ commit }, params) {
      return PostsService.query(params)
        .then(({ data }) => {
          commit(SET_POST, data)
        })
    },
}

const mutations = {
    [SET_POSTS](state, data) {
        state.posts = data.results
    },
    [SET_POST](state, data) {
        state.currentPost = data.results
    },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
