import {
    SET_SEARCH,
} from '@/store/mutations.type'

const state = {
    search: '',
}

const getters = {
    search(state) {
        return state.search
    },
}

const actions = {

}

const mutations = {
    [SET_SEARCH](state, data) {
        state.search = data
    },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
