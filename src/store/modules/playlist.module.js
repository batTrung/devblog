import { PlayListsService } from '@/common/api.service'
import store from '@/store'
import {
    FETCH_START,
    FETCH_END,
    FETCH_PLAYLISTS,
    FETCH_PLAYLIST,
    PLAYLIST_DELETE,
} from '@/store/actions.type'
import {
    SET_PLAYLISTS,
    SET_PLAYLIST,
    SET_INFO_PLAYLIST,
} from '@/store/mutations.type'

const state = {
    playLists: [],
    playlist: {},
    pagePlayList: 1,
    numPagePlayList: 0,
    countPlayList: 0,
    hasNextPlayList: false,
}

const getters = {
    playLists(state) {
        return state.playLists
    },
    playlist(state) {
        return state.playlist
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
  async [FETCH_PLAYLIST]({ commit }, { params, slug }) {
    store.dispatch(FETCH_START)
    store.dispatch(FETCH_END)
    const { data } = await PlayListsService.query(params, slug)
    commit(SET_PLAYLIST, data)
    return data
  },
  // eslint-disable-next-line
  [PLAYLIST_DELETE]({ commit }, slug) {
    return PlayListsService.delete(slug)
  },
}

const mutations = {
  [SET_PLAYLISTS](state, data) {
    console.log('set playlist: ', data.results)
      state.playLists = data.results
  },
  [SET_INFO_PLAYLIST](state, data) {
      state.pagePlayList = data.page
      state.numPagePlayList = data.num_page
      state.countPlayList = data.count
      state.hasNextPlayList = data.has_next
  },
  [SET_PLAYLIST](state, data) {
    state.playlist = data
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
