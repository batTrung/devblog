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
  errors: [],
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
          commit(SET_AUTH, data.user)
          JwtService.saveToken(data)
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
          commit(SET_AUTH, data.user)
          JwtService.saveToken(data)
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
  [CHECK_AUTH]({ commit, dispatch }) {
    if (JwtService.getAccessToken()) {
      ApiService.setHeader()
      ApiService.get("rest-auth/user")
        .then(({ data }) => {
          commit(SET_AUTH, data)
        })
        .catch(() => {
          ApiService.post(
            'rest-auth/token/refresh',
            { refresh: JwtService.getRefreshToken() },
           ).then(({ data }) => {
             JwtService.saveToken(data.access)
             dispatch(CHECK_AUTH)
           }).catch(() => {
             commit(PURGE_AUTH)
           })
        })
    } else {
      commit(PURGE_AUTH)
    }
  },
}

const mutations = {
  [SET_ERRORS](state, errors) {
    state.errors = errors
  },
  [SET_AUTH](state, user) {
    state.isAuthenticated = true
    state.user = user
    state.errors = []
  },
  [PURGE_AUTH](state) {
    state.isAuthenticated = false
    state.user = {}
    state.errors = []
    ApiService.deleteHeader()
    JwtService.destroyToken()
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
