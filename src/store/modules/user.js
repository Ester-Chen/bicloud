/**
 * TODO 自定义用户对象
 */
  // import Vue from 'vue'
const model = {
    state: {
      userinfo: {},
      staking: '0',
      poolUsdt: '0',
      poolGood: '0',
      // 质押挖矿合约地址
      stakingAddress: '0x8584F1B29f9AA4E4b6D214aea7920152Fc2e4EbA',
      // 代币合约地址
      goodAdress: '0xc94cE34BaCA5eC0f642Adc63C84d019aA32233F2'
    },
    mutations: {
      // 钱包账户
      SET_USER_INFO: (state, data) => {
        state.userinfo = data
        //console.log('钱包账户：', data)
      },
      // 总质押价值量
      SET_STAKING: (state, data) => {
        state.staking = data
        //console.log('总质押价值量：', data)
      },
      // 资金池USDT
      SET_POOL_USDT: (state, data) => {
        state.poolUsdt = data
        //console.log('资金池USDT：', data)
      },
      // 资金池GOOD
      SET_POOL_GOOD: (state, data) => {
        state.poolGood = data
        //console.log('资金池GOOD：', data)
      }
    },
    actions: {}
  }
export default model
