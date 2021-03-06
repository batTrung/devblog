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

  deleteHeader() {
    delete Vue.axios.defaults.headers.common['Authorization']
  },

  query(resource, params, slug='') {
    const vslug = slug ? `${slug}/` : slug
    return Vue.axios.get(`${resource}/${vslug}`, params).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`)
    })
  },

  get(resource, slug='') {
    const vslug = slug ? `${slug}/` : slug
    return Vue.axios.get(`${resource}/${vslug}`).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`)
    })
  },

  post(resource, params) {
    return Vue.axios.post(`${resource}/`, params)
  },

  update(resource, slug, params) {
    const vslug = slug ? `${slug}/` : slug
    return Vue.axios.patch(`${resource}/${vslug}`, params)
  },

  put(resource, params) {
    return Vue.axios.put(`${resource}/`, params)
  },

  delete(resource, slug) {
    const vslug = slug ? `${slug}/` : slug
    return Vue.axios.delete(`${resource}/${vslug}`).catch(error => {
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
    update(slug) {
      return ApiService.update('posts', slug)
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
    update(slug) {
      return ApiService.update('websites', slug)
    },
}


export const PlayListsService = {
    query(params, slug) {
        return ApiService.query(
          'playlists',
          {
            params: params
          },
          slug,
        )
    },
    get(slug) {
        return ApiService.get('playlists', slug)
    },
    update(slug, params) {
      return ApiService.update('playlists', slug, params)
    },
    delete(slug) {
      return ApiService.delete('playlists', slug)
    },
}


export const TopicsService = {
    query(params) {
        return ApiService.query('topics', {
            params: params
        })
    },
}
