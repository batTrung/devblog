import {
    MESSAGE_SET,
} from '@/store/mutations.type'

const state = {
  message: '',
}

const getters = {
    message(state) {
        return state.message
    }
}

const actions = {

}

const mutations = {
    [MESSAGE_SET](state, message) {
        state.message = message
    }
}

export default {
  state,
  getters,
  actions,
  mutations,
}
