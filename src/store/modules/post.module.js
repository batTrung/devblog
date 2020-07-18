import { PostsService } from '@/common/api.service'

import {
    FETCH_POSTS,
} from '@/store/actions.type'
import {
    SET_POSTS,
} from '@/store/mutations.type'

const state = {
    posts: [],
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
}

const mutations = {
    [SET_POSTS](state, data) {
        state.posts = data.results
    },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
