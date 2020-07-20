import { PlayListsService } from '@/common/api.service'

import {
    FETCH_PLAYLISTS,
} from '@/store/actions.type'
import {
    SET_PLAYLISTS,
    SET_INFO_PLAYLIST,
} from '@/store/mutations.type'

const state = {
    playLists: [],
    pagePlayList: 1,
    numPagePlayList: 0,
    countPlayList: 0,
    hasNextPlayList: false,
}

const getters = {
    playLists(state) {
        return state.playLists
    },
    pagePlayList(state) {
        return state.pagePlayList
    },
    numPagePlayList(state) {
        return state.numPagePlayList
    },
    countPlayList(state) {
        return state.countPlayList
    },
    hasNextPlayList(state) {
        return state.hasNextPlayList
    },
}

const actions = {
  [FETCH_PLAYLISTS]({ commit }, params) {
      return PlayListsService.query(params)
          .then(({ data }) => {
              commit(SET_PLAYLISTS, data)
              commit(SET_INFO_PLAYLIST, data)
          })
  },
}

const mutations = {
  [SET_PLAYLISTS](state, data) {
      state.playLists = data.results
  },
  [SET_INFO_PLAYLIST](state, data) {
      state.pagePlayList = data.page
      state.numPagePlayList = data.num_page
      state.countPlayList = data.count
      state.hasNextPlayList = data.has_next
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
