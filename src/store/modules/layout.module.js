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

const mutations = {
    [SET_LAYOUT](state, payload) {
        state.layout = payload
    },
}

export default {
  state,
  getters,
  mutations,
}
