// import Vue from 'vue'
const model = {
  state: {
    connect: false,
    account: '',
    netVersion: '',
    chainId: '',
    web3: undefined,
    contract: {},
    balance: {
      BYB:0,BCG:0,DMC:0
    }
  },
  mutations: {
    // 是否连接
    SET_WALLET_CONNECT: (state, data) => {
      state.connect = data
    },
    // 钱包账户
    SET_WALLET_ACCOUNT: (state, data) => {
      state.account = data
    },
    // 网络版本
    SET_WALLET_NET_VERSION: (state, data) => {
      state.netVersion = data
    },
    // 链ID
    SET_WALLET_CHAIN_ID: (state, data) => {
      state.chainId = data
    },
    // web3对象
    SET_WALLET_WEB3: (state, data) => {
      state.web3 = data
    },
    // contract合约对象
    SET_WALLET_CONTRACT: (state, data) => {
      state.contract[data.key] = data.contract
    },
    // contract合约对象
    SET_WALLET_BALANCE: (state, data) => {
      state.balance[data.key] = data.balance
    }
  },
  actions: {
    /**
     * 查询余额
     * @param data 对象：{contract: 合约名称, symbol: 币种名称}
     * @returns {Promise<unknown>}
     */
    balanceOf({commit, state}, data) {
      return new Promise((resolve, reject) => {
        let contract = state.contract[data.contract]
        contract.methods.balanceOf(state.account).call().then(res => {
          let balance = state.web3.utils.fromWei(res, 'ether')
          console.log('获取余额', '币种：' + data.symbol + '，数量：' + balance)
          commit('SET_WALLET_BALANCE', {key: data.symbol, balance: balance})
          resolve(balance)
        }).catch(err => {
          reject(err)
        })
      })
    },
    /**
     * 查询余额
     * @param data 对象：{contract: 合约名称, symbol: 币种名称}
     * @returns {Promise<unknown>}
     */
    balance({commit, state}, data) {
      return new Promise((resolve, reject) => {
        let contract = state.contract[data.contract]
        contract.methods.balanceOf(contract.options.address).call().then(res => {
          let balance = state.web3.utils.fromWei(res, 'ether')
          console.log('获取余额', '币种：' + data.symbol + '，数量：' + balance)
          commit('SET_WALLET_BALANCE', {key: data.symbol, balance: balance})
          resolve(balance)
        }).catch(err => {
          reject(err)
        })
      })
    },
    /**
     * 合约授权。只有当从用户账户中扣除代币时调用。
     * @param data 对象：{from: 来源合约, to: 被授权合约}。说明：“被授权合约”可以从“来源合约”中当前账户地址提取代币
     * @returns {Promise<unknown>}
     */
    approve({state}, data) {
      return new Promise((resolve, reject) => {
        let contractFrom = state.contract[data.from]
        let contractTo = state.contract[data.to]
        //判断是否授权
        contractFrom.methods.allowance(state.account, contractTo.options.address).call().then(r => {
          if (r <= 1) {
            console.log('合约授权，From：' + data.from, '，To：' + data.to + '，账户：' + state.account)
            contractFrom.methods.approve(contractTo.options.address, "10000000000000000000000000000000000000").send().then(() => {
              resolve()
            }).catch(err => {
              reject(err)
            })
          } else {
            resolve()
          }
        }).catch(err => {
          reject(err)
        })
      })
    }
  }
}
export default model
