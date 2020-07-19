import { PlayListsService } from '@/common/api.service'

import {
    FETCH_PLAYLISTS,
} from '@/store/actions.type'
import {
    SET_PLAYLISTS,
} from '@/store/mutations.type'

const state = {
    playLists: [],
}

const getters = {
    playLists(state) {
        return state.playLists
    },
}

const actions = {
  [FETCH_PLAYLISTS]({ commit }, params) {
      return PlayListsService.query(params)
          .then(({ data }) => {
              commit(SET_PLAYLISTS, data)
          })
  },
}

const mutations = {
  [SET_PLAYLISTS](state, data) {
      state.playLists = data.results
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
