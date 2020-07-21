/* eslint-disable */

export default {
  getAccessToken() {
    return window.localStorage.getItem('access_token')
  },

  getRefreshToken() {
    return window.localStorage.getItem('refresh_token')
  },

  saveToken({ access_token, refresh_token }) {
    window.localStorage.setItem('access_token', access_token)
    window.localStorage.setItem('refresh_token', refresh_token)
  },

  updateAccessToken(access_token) {
    window.localStorage.setItem('access_token', access_token)
  },

  destroyToken() {
    window.localStorage.removeItem('access_token')
    window.localStorage.removeItem('refresh_token')
  },
}
