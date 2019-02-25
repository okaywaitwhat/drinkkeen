import Vue from 'vue'
import Vuex from 'vuex'

import Module from './modules/Module.js'

Vue.use(Vuex)
Vue.use(axios)

export const store = new Vuex.Store({
  state: {
    intro: {
      status: {
        seen: true,
      }
    }
  },
  getters: {
    getIntroStatus: state => {
      return state.intro.status.seen
    }
  },
  mutations: {
    setIntroStatus: (state, status) => {
      state.intro.status.seen = status
    }
  },
  actions: {
    updateIntroStatus: ({ commit }, status) => {
      commit('setIntroStatus', status)
    }
  },
  modules: {
    Module,
  },
})
