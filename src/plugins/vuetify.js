import Vue from 'vue';
import Vuetify from 'vuetify/lib';

function loadLocaleSvgs() {
  const locales = require.context('../components/icons/', true, /[A-Za-z0-9-_,\s]+\.vue$/i)
  const icons = {}
  locales.keys().forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i)
    if (matched && matched.length > 1) {
      const name = matched[1]
      icons[name] = {
        component: () => import('../components/icons/' + key.substr(2, key.length)),
        props: {
          name
        }
      }
    }
  })
  // console.log('输出图标：', icons)
  return icons
}

Vue.use(Vuetify);
export default new Vuetify({
  icons: {
    values: {
      ...loadLocaleSvgs()
    }
  }
});
