<template>
  <div class="content">
    <v-app style="background: linear-gradient( 180deg, #DAF9FF 0%, #E4EAFE 100%); ">
      <!-- 左侧菜单 -->
      <v-navigation-drawer app fixed right width="250px" color="#e3b776" v-model="showMenu" style="z-index: 199;margin-top: 55px; height: calc(100vh - 55px);
background: linear-gradient(180deg, #F1EDF3 0%, #ECF3F6 100%);">
        <!-- <div style="background: #e3b776; height: 50px;">
           &lt;!&ndash;<img src="~@/assets/img/logo.png" class="menu-logo" />&ndash;&gt;
         </div>-->
        <div style="margin:4rem 0 0 4rem;width:5rem;height:2rem"><img src="@/assets/img/logo.png" alt="" style="width:120%"></div>
        <v-list style="margin-top:3rem;margin-left:2.5rem">
          <v-list-item v-for="(menu, i) in menus" :key="i" link :to="{ path: menu.url }">
            <v-list-item-icon style="color:#000">
              <v-icon v-text="'$vuetify.icons.'+menu.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title style="color:#6E4DD1;font-weight:bold" v-text="$t('menu.'+menu.value)"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <div @click="$router.push('/wp')" style="width: 12.5rem;height: 4rem;background: #7D52FB;border-radius: 5rem 5rem 5rem 5rem;margin:3rem 0 0 3rem;opacity: 1;text-align:center"><span style="width: 5.25rem;
height: 2rem;
font-size: 1.5rem;
font-family: Montserrat-Medium, Montserrat;
font-weight: 500;
color: #FFFFFF;
line-height: 4rem;
">白皮书</span></div>
        <div style="width: 12.5rem;
height: 4rem;
margin:2.5rem 0 0 3rem;

background: #5CD2E3;border-radius: 5rem 5rem 5rem 5rem;
opacity: 1;text-align:center"><span style="width: 5.25rem;
height: 2rem;
font-size: 1.5rem;
font-family: Montserrat-Medium, Montserrat;
font-weight: 500;
color: #FFFFFF;
line-height: 4rem;
">GitHub</span></div>
        <div style="position: fixed; bottom: 55px; text-align: center; width: 100%; color: #7a7b7c;padding: 0 5rem" class="d-flex flex-row justify-center">
          <div style="margin-right: 2rem;" @click="jump('https://twitter.com/sar37238935')">
            <svg t="1631613233557" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1383" data-spm-anchor-id="a313x.7781069.0.i3" width="3.5rem" height="3.5rem">
              <path d="M1024 512c0-282.763636-229.236364-512-512-512C229.236364 0 0 229.236364 0 512s229.236364 512 512 512C794.763636 1024 1024 794.763636 1024 512zM236.311273 693.946182c8.843636 1.117091 17.873455 1.722182 26.996364 1.722182 53.015273 0.093091 101.794909-19.037091 140.474182-51.153455-49.524364-1.163636-91.275636-36.165818-105.658182-84.200727 6.888727 1.442909 14.010182 2.280727 21.271273 2.327273 10.333091 0.046545 20.293818-1.349818 29.789091-4.049455-51.758545-11.450182-90.763636-60.555636-90.763636-119.063273 0-0.512 0-1.024 0-1.536 15.266909 9.216 32.674909 14.801455 51.246545 15.639273C279.365818 431.709091 259.397818 394.472727 259.397818 352.581818c0-22.155636 5.585455-42.821818 15.313455-60.509091 55.808 73.774545 139.170909 122.740364 233.146182 128.837818-1.954909-8.797091-2.932364-17.966545-2.932364-27.322182 0-66.141091 50.641455-118.923636 113.105455-117.899636 32.535273 0.558545 61.952 15.499636 82.571636 38.958545 25.786182-4.933818 49.989818-14.429091 71.819636-27.694545-8.424727 27.601455-26.391273 50.594909-49.757091 64.977455 22.900364-2.56 44.683636-8.610909 64.977455-17.780364-15.173818 23.598545-34.350545 44.218182-56.459636 60.695273 0.232727 5.12 0.325818 10.24 0.325818 15.36 0 157.044364-113.803636 338.152727-321.861818 338.059636C345.832727 748.311273 286.347636 728.296727 236.311273 693.946182z" p-id="1384" fill="#24135B" data-spm-anchor-id="a313x.7781069.0.i2" class="selected"></path>
            </svg>
          </div>
          <div style="margin-right: 2rem;" @click="jump('https://0.plus/sarguanfang')">
            <svg t="1631613413115" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1439" width="3.5rem" height="3.5rem">
              <path d="M679.424 746.861714l84.004571-395.995428c7.424-34.852571-12.580571-48.566857-35.437714-40.009143l-493.714286 190.281143c-33.718857 13.129143-33.133714 32-5.705142 40.557714l126.281142 39.424 293.156572-184.576c13.714286-9.142857 26.294857-3.986286 16.018286 5.156571l-237.129143 214.272-9.142857 130.304c13.129143 0 18.870857-5.705143 25.709714-12.580571l61.696-59.428571 128 94.281142c23.442286 13.129143 40.009143 6.290286 46.299428-21.723428zM1024 512c0 282.843429-229.156571 512-512 512S0 794.843429 0 512 229.156571 0 512 0s512 229.156571 512 512z" fill="#24135B" p-id="1440"></path>
            </svg>
          </div>
          <div @click="$router.push('/wordpress')">
            <svg t="1632139171239" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8838" width="3.5rem" height="3.5rem">
              <path d="M128 512c0 148.02944 88.33024 275.968 216.43264 336.56832l-183.17312-488.77568c-21.2992 46.51008-33.25952 97.97632-33.25952 152.20736zM771.23584 493.13792c0-46.24384-17.05984-78.2336-31.66208-103.13728-19.456-30.8224-37.72416-56.89344-37.72416-87.71584 0-34.36544 26.76736-66.37568 64.49152-66.37568 1.69984 0 3.31776 0.2048 4.97664 0.3072-68.32128-60.96896-159.3344-98.2016-259.31776-98.2016-134.16448 0-252.19072 67.05152-320.83968 168.57088 9.0112 0.28672 17.5104 0.45056 24.71936 0.45056 40.16128 0 102.33856-4.75136 102.33856-4.75136 20.6848-1.18784 23.12192 28.42624 2.4576 30.8224 0 0-20.80768 2.37568-43.95008 3.54304l139.83744 405.11488 84.04992-245.4528-59.82208-159.6416c-20.6848-1.18784-40.28416-3.54304-40.28416-3.54304-20.70528-1.18784-18.26816-32.01024 2.43712-30.8224 0 0 63.40608 4.75136 101.13024 4.75136 40.1408 0 102.35904-4.75136 102.35904-4.75136 20.70528-1.18784 23.1424 28.42624 2.43712 30.8224 0 0-20.82816 2.37568-43.95008 3.54304l138.77248 402.0224 38.31808-124.64128c16.5888-51.75296 29.22496-88.90368 29.22496-120.89344zM518.73792 544.70656l-115.22048 326.06208c34.4064 9.85088 70.79936 15.23712 108.48256 15.23712 44.70784 0 87.61344-7.51616 127.50848-21.1968-1.024-1.59744-1.96608-3.29728-2.74432-5.16096l-118.02624-314.94144zM848.95744 332.57472c1.65888 11.91936 2.58048 24.6784 2.58048 38.46144 0 37.92896-7.29088 80.5888-29.20448 133.95968l-117.28896 330.28096c114.15552-64.8192 190.93504-185.28256 190.93504-323.25632 0-65.024-17.05984-126.1568-47.04256-179.42528zM512 0c-282.76736 0-512 229.23264-512 512s229.23264 512 512 512 512-229.23264 512-512-229.23264-512-512-512zM512 960c-247.41888 0-448-200.58112-448-448s200.58112-448 448-448 448 200.58112 448 448-200.58112 448-448 448z" p-id="8839" data-spm-anchor-id="a313x.7781069.0.i3" class="selected" fill="#24135B"></path>
            </svg>
          </div>
          <div @click="$router.push('/wordpress')" style="margin-left: 1rem;    position: relative;top:-1px
">
            <svg t="1632913323643" class="icon" viewBox="0 0 1024 1024" width="4rem" height="4rem" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="21114" data-spm-anchor-id="a313x.7781069.0.i44">
              <path d="M584 548a36 36 0 1 0 72 0 36 36 0 1 0-72 0z m144-108c-14.3 0-26.8 8.4-32.5 20.6 18.8 14.3 34.4 30.7 45.9 48.8 13.2-5.3 22.6-18.3 22.6-33.4 0-19.9-16.1-36-36-36zM512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m245 477.9c4.6 13.5 7 27.6 7 42.1 0 99.4-112.8 180-252 180s-252-80.6-252-180c0-14.5 2.4-28.6 7-42.1-25.3-11.2-43-36.4-43-65.9 0-39.8 32.2-72 72-72 27.1 0 50.6 14.9 62.9 37 36.2-19.8 80.2-32.8 128.1-36.1l58.4-131.1c4.3-9.8 15.2-14.8 25.5-11.8l91.6 26.5c9.1-16.9 27-28.4 47.6-28.4 29.8 0 54 24.2 54 54s-24.2 54-54 54c-23.5 0-43.5-15.1-50.9-36.1L577 308.3l-43 96.5c49.1 3 94.2 16.1 131.2 36.3 12.3-22.1 35.8-37 62.9-37 39.8 0 72 32.2 72 72-0.1 29.3-17.8 54.6-43.1 65.8z m-171.3 83c-14.9 11.7-44.3 24.3-73.7 24.3s-58.9-12.6-73.7-24.3c-9.3-7.3-22.7-5.7-30 3.6-7.3 9.3-5.7 22.7 3.6 30 25.7 20.4 65 33.5 100.1 33.5 35.1 0 74.4-13.1 100.2-33.5 9.3-7.3 10.9-20.8 3.6-30-7.3-9.3-20.8-10.9-30.1-3.6zM296 440c-19.9 0-36 16.1-36 36 0 15.1 9.4 28.1 22.6 33.4 11.5-18.1 27.1-34.5 45.9-48.8-5.7-12.2-18.2-20.6-32.5-20.6z m72 108a36 36 0 1 0 72 0 36 36 0 1 0-72 0z" p-id="21115" data-spm-anchor-id="a313x.7781069.0.i43" class="selected" fill="#24135B"></path>
            </svg>
          </div>
        </div>
        <div style="position: fixed; bottom: 35px; text-align: center; width: 100%; color: #24135B;
font-size: 1rem;">
          All Tokens Based On Binance Smart Chain
        </div>
        <div style="position: fixed; bottom: 10px; text-align: center; width: 100%; color: #24135B;
font-size: 1.8rem;">
          BI CLOUD TOKEN @ 2021
        </div>
      </v-navigation-drawer>
      <!-- 顶部导航 -->
      <v-app-bar class="nav" app style="position: relative !important;box-shadow:unset;  max-height: 8rem;    background: transparent;
" light>

        <v-toolbar-title class="d-flex flex-row align-center"><img src="~@/assets/img/logo.png" style="width: 6.13rem;height: 3.5rem;margin-right: 1rem;" />
        </v-toolbar-title>
        <v-spacer></v-spacer>

        <div class="boxx flex-row" style="width:8rem;display:flex;aling-content:center;height:3rem;border-radius:5rem;text-align:center;font-size:1.75rem;font-family:SourceHanSansSC-Regular,SourceHanSansSC;font-weight:400;color:#FFFFFF;line-height:3.3rem;z-index:19; margin-right: 1rem;">
          <img class="img1" src="@/assets/img/icon.png" alt="" @click="changeLang()">

          <div style="margin-right: 2rem;" @click="changeShowMenu">
            <svg style="margin:0 0 1rem 2rem;width:3.5rem;height:3.5rem" t="1632898592468" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="23113" height="rem;">
              <path d="M196.266667 277.333333h635.733333c17.066667 0 34.133333-12.8 34.133333-34.133333s-17.066667-29.866667-38.4-29.866667H196.266667c-21.333333 0-34.133333 17.066667-34.133334 34.133334s12.8 29.866667 34.133334 29.866666zM827.733333 477.866667H196.266667c-17.066667 0-34.133333 12.8-34.133334 34.133333s12.8 34.133333 34.133334 34.133333h635.733333c17.066667 0 34.133333-12.8 34.133333-34.133333s-17.066667-34.133333-38.4-34.133333zM827.733333 746.666667H196.266667c-17.066667 0-34.133333 12.8-34.133334 34.133333s12.8 29.866667 34.133334 29.866667h635.733333c17.066667 0 34.133333-12.8 34.133333-34.133334s-17.066667-29.866667-38.4-29.866666z" fill="#111111" p-id="23114"></path>
            </svg>
          </div>
        </div>
      </v-app-bar>
      <v-main style="background-color: transparent; padding: 0 !important;">
        <router-view></router-view>
      </v-main>

      <Message />
      <!--<v-overlay absolute :opacity="0.8" :value="$store.state.app.await" z-index="99">
        <div class="d-flex flex-column">
          <div id="circularG">
            <div id="circularG_1" class="circularG"></div>
            <div id="circularG_2" class="circularG"></div>
            <div id="circularG_3" class="circularG"></div>
            <div id="circularG_4" class="circularG"></div>
            <div id="circularG_5" class="circularG"></div>
            <div id="circularG_6" class="circularG"></div>
            <div id="circularG_7" class="circularG"></div>
            <div id="circularG_8" class="circularG"></div>
          </div>
          <div class="text-center mt-9 font-weight-bold" style="font-size:2.5rem;" v-text="$t('app.awaiting')"></div>
        </div>
      </v-overlay>-->
    </v-app>
  </div>
</template>

<script>
  import common from '@/utils/mixinsCommon'
  //引入Message
  import Message from "./components/message";

  export default {
    name: 'App',
    mixins: [common],
    components: {Message},
    data: () => ({
      showMenu: false,
      menus: [
        {icon: 'home', label: '首页', value: 'home', url: '/'},
        {icon: 'lang', label: 'lang', value: 'zhanshi', url: '/bcg'},
        {icon: 'nft', label: 'M19NFT', value: 'nft', url: '/wallet'},
        {icon: 'pledge', label: '参与瓜分', value: 'pledge', url: '/pledge'},
        {icon: 'whitePaper', label: '白皮书', value: 'whitePaper', url: '/extract'},
        {icon: 'contract', label: '代币合约', value: 'contract', url: ''}
      ],
      // TODO 此处更换开源合约跳转的地址
      contractUrl: 'http://baidu.com'
    }),
    watch: {
      showMenu(newVal) {
        this.$store.commit('SET_SHOW_MENU', newVal ? '1' : '0')
      }
    },
    mounted: function() {
      let self = this
      self.showMenu = localStorage.getItem("showMenu") !== "0"
      self.$metaMask.init().then(() => {
        // 初始化web3
        let web3 = self.$metaMask.getWeb3();
        // 遍历合约对象
        self.$metaMask.getContract(web3, self.$abi);
      })
    },
    methods: {
      changeLang() {
        this.$store.commit('SET_LANG', (this.$i18n.locale === 'zh') ? 'en' : 'zh')
        this.$i18n.locale = (this.$i18n.locale === 'zh') ? 'en' : 'zh';
      }, changeShowMenu() {
        this.showMenu = !this.showMenu
      }
    }
  };
</script>
<style>
  /* .content{
    background: linear-gradient(180deg, #DAF9FF 0%, #E4EAFE 100%);
  } */

  @font-face {
    font-family: 'Do Hyeon';
    src: url('./assets/font/DoHyeon-Regular.ttf');
    font-weight: normal;
    font-style: normal;
    background: transparent;
  }
  @font-face {
    font-family: 'KanitBold';
    src: url('./assets/font/Kanit-Bold.ttf');
    font-weight: normal;
    font-style: normal;
    background: transparent;
  }
  @font-face {
    font-family: 'Kanit';
    src: url('./assets/font/Kanit.ttf');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'nKKU';
    src: url('./assets/font/nKKU.woff2');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'PostinoStd';
    src: url('./assets/font/PostinoStd.otf');
    font-weight: normal;
    font-style: normal;
  }
  #app {
    font-family: Arial, Verdana, nKKU, Kanit, Avenir, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  .container {
    padding: 0 !important;
  }
  .v-list {
    padding: 0 !important;
  }
  .v-list-item {
    flex-direction: row;
  }
  .v-list-item__content {
    flex: none !important;
  }
  .v-list-item__icon:first-child {
    margin-right: 20px !important;
  }
  .v-list-item__title {
    color: #FFFFFF;
    font-size: 1.63rem !important;
  }
  .v-toolbar__title {
    font-size: 2rem !important;
    padding-left: 0 !important;
  }
  .v-select__slot {
    flex-direction: row;
  }
  .v-toolbar__content {
    flex-direction: row;
  }
  .v-expansion-panels {
    flex-direction: row;
  }
  .v-expansion-panel {
    margin-top: 10px;
    border-radius: 5px;
  }
  .v-overlay {
    z-index: 19 !important;
  }
  .v-expansion-panel-header {
    font-size: 1.8rem !important;
    line-height: 1.2 !important;
  }
  .v-overlay__content {
    position: absolute;
    top: 50vh;
  }
  .v-expansion-panel--active > .v-expansion-panel-header {
    color: #039FFF;
    box-shadow: 0 1px 5px #d7d7d7;
  }
  .v-expansion-panel-content__wrap {
    padding: 16px 24px 16px !important;
    font-size: 1.6rem !important;
  }
  @media screen and (min-width: 960px) {
    .menu-logo {
      width: 100px;
    }
  }

  @media screen and (max-width: 960px) {
    .menu-logo {
      width: 80px;
    }

    .v-main {
      width: 100vw;
    }
  }


  /** 动效 */
  .bg-bubbles {
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .bg-bubbles li {
    position: absolute;
    z-index: 1;
    bottom: -160px;
    width: 40px;
    height: 40px;
    background-color: rgba(236, 184, 108, 0.3);
    list-style: none;
    animation: square 15s infinite;
    transition-timing-function: linear;
  }

  .bg-bubbles li:nth-child(1) {
    z-index: 1;
    left: 10%;
  }

  .bg-bubbles li:nth-child(2) {
    z-index: 1;
    left: 20%;
    width: 40px;
    height: 40px;
    border-radius: 40px;
    animation-delay: 2s;
    animation-duration: 7s;
  }

  .bg-bubbles li:nth-child(3) {
    z-index: 1;
    left: 25%;
    width: 30px;
    height: 30px;
    animation-delay: 4s;
  }

  .bg-bubbles li:nth-child(4) {
    z-index: 1;
    left: 40%;
    width: 25px;
    height: 25px;
    border-radius: 25px;
    animation-duration: 8s;
    background-color: rgba(236, 184, 108, 0.3);
  }

  .bg-bubbles li:nth-child(5) {
    z-index: 1;
    left: 70%;
  }

  .bg-bubbles li:nth-child(6) {
    z-index: 1;
    left: 80%;
    width: 60px;
    height: 60px;
    border-radius: 60px;
    animation-delay: 3s;
    background-color: rgba(236, 184, 108, 0.3);
  }

  .bg-bubbles li:nth-child(7) {
    z-index: 1;
    left: 32%;
    width: 50px;
    height: 50px;
    animation-delay: 2s;
  }

  .bg-bubbles li:nth-child(8) {
    z-index: 1;
    left: 55%;
    width: 50px;
    height: 50px;
    border-radius: 50px;
    animation-delay: 4.5s;
    animation-duration: 10s;
  }

  .bg-bubbles li:nth-child(9) {
    z-index: 1;
    left: 35%;
    width: 15px;
    height: 15px;
    animation-delay: 2s;
    animation-duration: 12s;
    background-color: rgba(236, 184, 108, 0.3);
  }

  .bg-bubbles li:nth-child(10) {
    z-index: 1;
    left: 85%;
    width: 60px;
    height: 60px;
    animation-delay: 5s;
  }

  @keyframes square {
    0% {
      z-index: 1;
      opacity: 0.5;
      transform: translateY(0px) rotate(45deg);
    }
    25% {
      opacity: 0.75;
      transform: translateY(-400px) rotate(90deg);
    }
    50% {
      opacity: 1;
      transform: translateY(-600px) rotate(135deg);
    }
    100% {
      z-index: 1;
      opacity: 0;
      transform: translateY(-1000px) rotate(180deg);
    }
  }

  #circularG {
    width: 128px;
    height: 128px;
  }
  .circularG {
    position: absolute;
    background-color: #ffffff;
    width: 29px;
    height: 29px;
    -moz-border-radius: 19px;
    -moz-animation-name: bounce_circularG;
    -moz-animation-duration: 1.04s;
    -moz-animation-iteration-count: infinite;
    -moz-animation-direction: linear;
    -webkit-border-radius: 19px;
    -webkit-animation-name: bounce_circularG;
    -webkit-animation-duration: 1.04s;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-direction: linear;
    -ms-border-radius: 19px;
    -ms-animation-name: bounce_circularG;
    -ms-animation-duration: 1.04s;
    -ms-animation-iteration-count: infinite;
    -ms-animation-direction: linear;
    -o-border-radius: 19px;
    -o-animation-name: bounce_circularG;
    -o-animation-duration: 1.04s;
    -o-animation-iteration-count: infinite;
    -o-animation-direction: linear;
    border-radius: 19px;
    animation-name: bounce_circularG;
    animation-duration: 1.04s;
    animation-iteration-count: infinite;
    animation-direction: linear;
  }
  #circularG_1 {
    left: 0;
    top: 50px;
    -webkit-animation-delay: 0.39s;
    animation-delay: 0.39s;
  }
  #circularG_2 {
    left: 14px;
    top: 14px;
    -webkit-animation-delay: 0.52s;
    animation-delay: 0.52s;
  }
  #circularG_3 {
    top: 0;
    left: 50px;
    -webkit-animation-delay: 0.65s;
    animation-delay: 0.65s;
  }
  #circularG_4 {
    right: 14px;
    top: 14px;
    -webkit-animation-delay: 0.78s;
    animation-delay: 0.78s;
  }
  #circularG_5 {
    right: 0;
    top: 50px;
    -webkit-animation-delay: 0.91s;
    animation-delay: 0.91s;
  }
  #circularG_6 {
    right: 14px;
    bottom: 14px;
    -webkit-animation-delay: 1.04s;
    animation-delay: 1.04s;
  }
  #circularG_7 {
    left: 50px;
    bottom: 0;
    -webkit-animation-delay: 1.17s;
    animation-delay: 1.17s;
  }
  #circularG_8 {
    left: 14px;
    bottom: 14px;
    -webkit-animation-delay: 1.3s;
    animation-delay: 1.3s;
  }
  @-webkit-keyframes bounce_circularG {
    0% {
      -webkit-transform: scale(1);
    }
    100% {
      -webkit-transform: scale(0.3);
    }
  }
  @keyframes bounce_circularG {
    0% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
    100% {
      -webkit-transform: scale(0.3);
      transform: scale(0.3);
    }
  }

  .img1 {
    position: relative;
    top: 0.3rem;
    width: 2.7rem;
    height: 2.7rem;

  }
  .icon-xinyongheyuechaxun {
    width: 3rem;
    height: 3rem;
    font-size: 2.5rem;
    /* color: #E9B367; */
    color: #E9B367;

  }
</style>
