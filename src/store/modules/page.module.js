import { PagesService } from '@/common/api.service'

import {
    FETCH_PAGES,
} from '@/store/actions.type'
import {
    SET_PAGES,
} from '@/store/mutations.type'

const state = {
    pages: [],
}

const getters = {
    pages(state) {
        return state.pages
    },
}

const actions = {
    [FETCH_PAGES]({ commit }, params) {
        return PagesService.query(params)
            .then(({ data }) => {
                commit(SET_PAGES, data)
            })
    },
}

const mutations = {
    [SET_PAGES](state, data) {
        state.pages = data.results
    },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
