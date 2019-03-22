import Vue from 'vue'
import App from './App.vue'
import router from './plugins/router'
import store from './plugins/store'
import './plugins/filter'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import '@/styles/common.stylus'

Vue.use(Mint);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
