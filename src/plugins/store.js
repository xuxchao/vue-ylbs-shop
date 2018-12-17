import Vue from 'vue'
import Vuex from 'vuex'
import axios from './axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login: false
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
    getShops () {
      return axios.get('data/shops.json')
    },
    getPlayList () {
      return axios.get('data/playList.json')
    },
    getCarList () {
      return axios.get('data/carList.json')
    }
  }
})
