/**
 * Created by qiwihui on 2/5/17.
 */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
  strict: debug,
  state: {
    user_info: {
      user_id: '',
      user_name: '',
      email: ''
    }
  },
  actions: {
    GET_USER_INFO: function ({ commit }) {
      let data = {
        user_id: 1,
        user_name: 'qiwihui',
        email: 'qiwihui@qiwihui.com'
      }
      commit('SET_USER_INFO', { dict: data })
    }
  },
  mutations: {
    SET_USER_INFO: (state, { dict }) => {
      state.user_info = dict
    }
  },
  getters: {
    userInfo: state => {
      return state.user_info
    }
  }
})
export default store
