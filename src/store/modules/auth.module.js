import ApiService from "@/common/api.service"
import JwtService from "@/common/jwt.service"
import {
    LOGIN,
    LOGOUT,
    REGISTER,
} from '@/store/actions.type'
import {
  SET_ERRORS,
  SET_AUTH,
  PURGE_AUTH,
} from '@/store/mutations.type'


const state = {
  errors: [],
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
  [LOGIN]({ commit }, credentials) {
    console.log('LOGIN')
    ApiService.post('rest-auth/login', credentials)
      .then(({ data }) => {
        console.log(data)
        commit(SET_AUTH, data)
      })
      .catch(() => {
        commit(
          SET_ERRORS,
          ['Thông tin tài khoản đăng nhập không hợp lệ'],
         )
      })
  },
  [LOGOUT]({ commit }) {
    commit(PURGE_AUTH);
  },
  [REGISTER]() {
    console.log('REGISTER')
  },
}

const mutations = {
  [SET_ERRORS](state, errors) {
    state.errors = errors
  },
  [SET_AUTH](state, data) {
    state.isAuthenticated = true
    state.user = data.user
    state.errors = []
    JwtService.saveToken(data)
  },
  [PURGE_AUTH](state) {
    state.isAuthenticated = false
    state.user = {}
    state.errors = []
    JwtService.destroyToken()
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
