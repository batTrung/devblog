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
  errors: {
    name: 'danger',
    content: [],
  },
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
  [REGISTER]() {
    console.log('REGISTER')
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
