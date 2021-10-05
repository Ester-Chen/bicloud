import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

function loadStores() {
  const locales = require.context('./modules/', true, /[A-Za-z0-9-_,\s]+\.js$/i)
  const obj = {}
  locales.keys().forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i)
    if (matched && matched.length > 1) {
      const locale = matched[1]
      obj[locale] = locales(key).default
    }
  })
  return obj
}

const modules = loadStores();
const store = new Vuex.Store({
  state: {
    msgPool: [],
    confirmPool: []
  },
  mutations: {
    message(state, step) {
      state.msgPool.push(step)
      //将消息添加到消息列表
      setTimeout(() => {
        if (state.msgPool.length > 0) state.msgPool.shift()
      }, step.time);
      //清除消息
    },
    confirm(state, step) {
      state.confirmPool.push(step)
      //将消息添加到消息列表
      setTimeout(() => {
        for (let i = 0; i < state.confirmPool.length; i++) {
          if (!state.confirmPool[i].show) {
            state.confirmPool.splice(i, 1)
          }
        }
      }, 5000);
    }
  },
  modules: modules
})
export default store
