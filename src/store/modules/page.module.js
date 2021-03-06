import Nprogress from 'nprogress'

import store from '@/store'
import { PagesService } from '@/common/api.service'

import {
    FETCH_START,
    FETCH_END,
    FETCH_PAGES,
    FETCH_PAGE,
} from '@/store/actions.type'
import {
    SET_PAGES,
    SET_PAGE,
    SET_INFO_PAGE,
} from '@/store/mutations.type'

const state = {
    pages: [],
    pageWeb: 1,
    numPageWeb: 0,
    countPage: 0,
    hasNextPage: false,
    currentPage: {},
}

const getters = {
    pages(state) {
        return state.pages
    },
    page(state) {
      return state.currentPage
    },
    pageWeb(state) {
      return state.pageWeb
    },
    numPageWeb(state) {
      return state.numPageWeb
    },
    countPage(state) {
      return state.countPage
    },
    hasNextPage(state) {
      return state.hasNextPage
    },
}

const actions = {
  [FETCH_START]() {
    Nprogress.start()
  },
  [FETCH_END]() {
    Nprogress.done()
  },
  [FETCH_PAGES]({ commit }, params) {
      return PagesService.query(params)
          .then(({ data }) => {
              commit(SET_PAGES, data)
              commit(SET_INFO_PAGE, data)
          })
  },
  async [FETCH_PAGE]({ commit }, slug) {
    store.dispatch(FETCH_START)
    const { data } = await PagesService.get(slug)
    commit(SET_PAGE, data)
    store.dispatch(FETCH_END)
    return data
  },
}

const mutations = {
  [SET_PAGES](state, data) {
      state.pages = data.results
  },
  [SET_PAGE](state, data) {
    state.currentPage = data
  },
  [SET_INFO_PAGE](state, data) {
      state.pageWeb = data.page
      state.numPageWeb = data.num_page
      state.countPage = data.count
      state.hasNextPage = data.has_next
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
