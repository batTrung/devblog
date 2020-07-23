import { PostsService } from '@/common/api.service'

import {
    FETCH_POSTS,
    FETCH_POST,
} from '@/store/actions.type'
import {
    SET_POSTS,
    SET_POST,
    SET_INFO_POST,
} from '@/store/mutations.type'

const state = {
    posts: [],
    pagePost: 1,
    numPagePost: 0,
    countPost: 0,
    hasNextPost: false,
    currentPost: {},
}

const getters = {
    posts(state) {
        return state.posts
    },
    pagePost(state) {
        return state.pagePost
    },
    numPagePost(state) {
        return state.numPagePost
    },
    countPost(state) {
        return state.countPost
    },
    hasNextPost(state) {
        return state.hasNextPost
    },
}

const actions = {
    [FETCH_POSTS]({ commit }, params) {
        return PostsService.query(params)
            .then(({ data }) => {
                commit(SET_POSTS, data)
                commit(SET_INFO_POST, data)
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
    [SET_INFO_POST](state, data) {
        state.pagePost = data.page
        state.numPagePost = data.num_page
        state.countPost = data.count
        state.hasNextPost = data.has_next
    }
}

export default {
  state,
  getters,
  actions,
  mutations,
}
