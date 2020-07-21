import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { API_URL } from '@/common/config'
import JwtService from "@/common/jwt.service"

const ApiService = {
  init() {
    Vue.use(VueAxios, axios)
    Vue.axios.defaults.baseURL = API_URL
    Vue.axios.defaults.xsrfCookieName = 'csrftoken'
    Vue.axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN'
  },

  setHeader() {
    Vue.axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${ JwtService.getAccessToken() }`;
  },

  query(resource, params) {
    return Vue.axios.get(`${resource}/`, params).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`)
    })
  },

  get(resource, slug='') {
    return Vue.axios.get(`${resource}/${slug}`).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`)
    })
  },

  post(resource, params) {
    return Vue.axios.post(`${resource}/`, params)
  },

  update(resource, slug, params) {
    return Vue.axios.put(`${resource}/${slug}/`, params)
  },

  put(resource, params) {
    return Vue.axios.put(`${resource}/`, params)
  },

  delete(resource) {
    return Vue.axios.delete(`${resource}/`).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`)
    })
  },
}

export default ApiService

export const PostsService = {
    query(params) {
        return ApiService.query('posts', {
            params: params
        })
    },
}

export const PagesService = {
    query(params) {
        return ApiService.query('websites', {
            params: params
        })
    },
    get(slug) {
        return ApiService.get('websites', slug)
    },
}


export const PlayListsService = {
    query(params) {
        return ApiService.query('playlists', {
            params: params
        })
    },
    get(slug) {
        return ApiService.get('playlists', slug)
    },
}


export const TopicsService = {
    query(params) {
        return ApiService.query('topics', {
            params: params
        })
    },
}
