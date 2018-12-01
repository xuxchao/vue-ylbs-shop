import Vue from 'vue'
import Vuex from 'vuex'
import axios from './axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login: true
  },
  mutations: {
    login (state) {
      state.login = true
    },
    logout (state) {
      state.login = false
    }
  },
  actions: {
    getShops (state) {
      return axios.get('data/shops.json')
    },
    getPlayList (state) {
      return axios.get('data/playList.json')
    }
  }
})
