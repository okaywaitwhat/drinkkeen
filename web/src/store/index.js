import Vue from 'vue'
import Vuex from 'vuex'

import { intro } from './modules/intro'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    intro,
  },
})
