import Vue from 'vue'
import Vuex from 'vuex'

import auth from './auth'
import error from './error'
import timer from './timer'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    auth,
    error,
    timer
  }
})

export default store
