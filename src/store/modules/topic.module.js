import { TopicsService } from '@/common/api.service'

import {
    FETCH_TOPICS,
} from '@/store/actions.type'
import {
    SET_TOPICS,
} from '@/store/mutations.type'

const state = {
    topics: [],
}

const getters = {
    topics(state) {
        return state.topics
    },
}

const actions = {
  [FETCH_TOPICS]({ commit }, params) {
      return TopicsService.query(params)
          .then(({ data }) => {
              commit(SET_TOPICS, data)
          })
  },
}

const mutations = {
  [SET_TOPICS](state, data) {
      state.topics = data.results
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
