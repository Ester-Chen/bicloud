// import Vue from 'vue'
const app = {
  state: {
    lang: localStorage.getItem("lang") || 'en',
    showMenu: '0',
    await: false
  },
  mutations: {
    // 系统语言
    SET_LANG: (state, lang) => {
      state.lang = lang
      console.log(lang)
      localStorage.setItem("lang", lang)
    },
    // 是否展开菜单
    SET_SHOW_MENU: (state, data) => {
      state.showMenu = data
      localStorage.setItem("showMenu", data)
    },
    // 是否展开菜单
    SET_AWAIT: (state, data) => {
      state.await = data
      localStorage.setItem("awaiting", data)
    }
  },
  actions: {
    setLang({commit}, lang) {
      commit('SET_LANG', lang)
    }
  }
}
export default app
