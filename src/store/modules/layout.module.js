import {
    CHANGE_LAYOUT,
} from '@/store/actions.type'

import {
    SET_LAYOUT,
} from '@/store/mutations.type'

const state = {
    layout: 'base-layout',
}

const getters = {
    layout(state) {
        return state.layout
    },
}

const actions = {
    async [CHANGE_LAYOUT]({ commit }, nameLayout) {
        commit(SET_LAYOUT, nameLayout)
    },
}

const mutations = {
    [SET_LAYOUT](state, nameLayout) {
        state.layout = nameLayout
    },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
