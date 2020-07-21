import ApiService from "@/common/api.service"
import JwtService from "@/common/jwt.service"
import {
    LOGIN,
    LOGOUT,
    REGISTER,
    CHECK_AUTH,
} from '@/store/actions.type'
import {
  SET_ERRORS,
  SET_AUTH,
  PURGE_AUTH,
} from '@/store/mutations.type'


const state = {
  errors: {
    name: 'danger',
    content: [],
  },
  user: {},
  isAuthenticated: !!JwtService.getAccessToken(),
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
    return new Promise((resolve, reject) => {
      ApiService.post('rest-auth/login', credentials)
        .then(({ data }) => {
          commit(SET_AUTH, data)
          resolve(data)
        })
        .catch(() => {
          commit(
            SET_ERRORS,
            ['Thông tin tài khoản đăng nhập không hợp lệ'],
           )
          reject()
        })
    })
  },
  [LOGOUT]({ commit }) {
    commit(PURGE_AUTH);
  },
  [REGISTER]({ commit }, credentials) {
    return new Promise((resolve, reject) => {
      ApiService.post('rest-auth/registration', credentials)
        .then(({ data }) => {
          console.log("okeeee", data)
          commit(SET_AUTH, data)
          resolve(data)
        })
        .catch(() => {
          commit(
            SET_ERRORS,
            ['Thông tin tài khoản đăng ký không hợp lệ'],
           )
          reject()
        })
    })
  },
  [CHECK_AUTH]({ commit }) {
    if (JwtService.getAccessToken()) {
      console.log('localStore -> token')
      console.log(JwtService.getRefreshToken())
    } else {
      commit(PURGE_AUTH)
    }
  },
}

const mutations = {
  [SET_ERRORS](state, errors) {
    state.errors.content = errors
  },
  [SET_AUTH](state, data) {
    state.isAuthenticated = true
    state.user = data.user
    state.errors = {}
    JwtService.saveToken(data)
  },
  [PURGE_AUTH](state) {
    state.isAuthenticated = false
    state.user = {}
    state.errors = {}
    JwtService.destroyToken()
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
