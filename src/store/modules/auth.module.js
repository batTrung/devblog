import {
    LOGIN,
    LOGOUT,
    REGISTER,
} from '@/store/actions.type'


const state = {
  user: {},
  isAuthenticated: false,
}

const getters = {
    currentUser(state) {
        return state.user
    },
    isAuthenticated(state) {
        return state.isAuthenticated
    },
}

const actions = {
  [LOGIN]() {
    console.log('LOGIN')
  },
  [LOGOUT]() {
    console.log('LOGOUT')
  },
  [REGISTER]() {
    console.log('REGISTER')
  },
}

const mutations = {

}

export default {
  state,
  getters,
  actions,
  mutations,
}
