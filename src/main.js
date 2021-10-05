import Vue from 'vue'
//import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import i18n from './i18n/i18n'
import Api from './api'
import metaMask from './utils/metaMask'
import Message from './utils/message'

Vue.prototype.$Message = Message
Vue.config.productionTip = false
Vue.use(Api)
Vue.use(metaMask)
new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount('#app')
