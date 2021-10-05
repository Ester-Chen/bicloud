<template>
  <div class="bigBox" style="height: 81rem;">
    <div class="bottom flex-col">
      <img src="@/assets/img/DMC1.png" alt="" />
      <div class="brick">
        <div class="flex-col">
          <span class="num" style="margin-top:1.63rem">NUM</span>
          <span class="cont" style="color:#6E4DD1;text-align:center">{{
            amountBI
          }}</span>
        </div>
      </div>
      <div class="stak-btn" @click="withdrawGoodToken">
        {{ $t("extract.art1") }}
      </div>
    </div>
    <div class="cellbox" style="margin-left:2rem">
      <div class="cell">
        <div class="flex">
          <span class="span1">累计提取</span>
          <span class="span2">Cumulative extraction</span>
        </div>
        <div class="pricebtn">0.00</div>
      </div>
      <div class="cell">
        <div class="flex">
          <span class="span1">上次提取</span>
          <span class="span2">Last extraction</span>
        </div>
        <div class="pricebtn" style="background: #5CD2E3;">
         0.00
        </div>
      </div>
      <div class="cell">
        <div class="flex">
          <span class="span1">昨日收益</span>
          <span class="span2">Yesterday's earnings</span>
        </div>
        <div class="pricebtn" style="background: #F33D9A;">
          0.00
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      amountBI: 0,
    };
  },
  mounted() {
    let self = this;
    if (!self.$store.state.wallet.contract.DMCpoolv2) {
      self.$metaMask.initContract(self.$abi).then(() => {
        self.init();
      });
    } else {
      self.init();
    }
  },
  methods: {
    init() {
      let self = this;
      // self.$store.dispatch('balanceOf', {contract: 'm19', symbol: 'M19'})
      // self.$store.dispatch('balanceOf', {contract: 'usdt', symbol: 'USDT'})
      console.log(self.$store.state.wallet.contract.DMCpoolv2);
      self.$store.state.wallet.contract.DMCpoolv2.methods
        .pendingGood(0, self.$store.state.wallet.account)
        .call()
        .then((res) => {
          self.amountBI = self.$store.state.wallet.web3.utils.fromWei(
            res.toString(),
            "ether"
          );
          console.log("获取价格：", self.amountBI);
        });
    },
    withdrawGoodToken() {
      let self = this;

      self.$store.commit("SET_AWAIT", true);
      self.scrollTop =
        document.documentElement.scrollTop ||
        window.pageYOffset ||
        document.body.scrollTop;
      window.scrollTo({ left: 0, top: 0 });

      let amountWei = self.$store.state.wallet.web3.utils.toWei(
        (self.amountBI).toString() ,
        "ether"
      );
      self.$store.state.wallet.contract.DMCpoolv2.methods
        .withdrawGoodToken(0, amountWei)
        .send()
        .then((res) => {
          window.scrollTo({ left: 0, top: self.scrollTop });
          self.$store.commit("SET_AWAIT", false);
          self.$Message.success(self.$t("app.success"));
          console.log("质押成功：", res);
          self.$api.deposit({ days: self.pid, amount: self.amount });
        })
        .catch((err) => {
          window.scrollTo({ left: 0, top: self.scrollTop });
          self.$store.commit("SET_AWAIT", false);
          self.$Message.error(self.$t("app.error"));
          console.log("质押 失败：", err);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.bigBox {
  background: linear-gradient(180deg, #daf9ff 0%, #e4eafe 100%);
}
.flex-col {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.bottom {
  width: 42.88rem;
  height: 34.13rem;
  background: #ffffff;
  box-shadow: 0rem 0.88rem 0.13rem -0.25rem rgba(0, 0, 0, 0.05000000074505806);
  border-radius: 2rem 2rem 2rem 2rem;
  opacity: 1;
  border: 0.13rem solid #e7e4eb;
  margin-top: 4rem;
  margin-left: 2rem;
  .brick {
    width: 38.88rem;
    height: 8.88rem;
    background: linear-gradient(270deg, #ebf2f5 0%, #f0ecf2 100%);
    border-radius: 2rem 2rem 2rem 2rem;
    opacity: 1;
    border: 0.13rem solid #e7e4eb;
  }
  .stak-btn {
    width: 22rem;
    height: 6.25rem;
    background: #5bd2e3;
    box-shadow: 0rem 1rem 2rem 0.13rem rgba(92, 210, 227, 0.25);
    border-radius: 1.25rem 1.25rem 1.25rem 1.25rem;
    opacity: 1;
    margin-top: 4rem;
    font-size: 2.13rem;
    font-family: Montserrat-Bold, Montserrat;
    font-weight: bold;
    color: #ffffff;
    line-height: 3.25rem;
    text-align: center;
    line-height: 6.25rem;
  }
}

.num {
  width: 4.5rem;
  height: 2.13rem;
  font-size: 1.75rem;
  font-family: Montserrat-Medium, Montserrat;
  font-weight: 500;
  color: #7870a6;
  line-height: 2.05rem;
  margin-bottom: 0.5rem;
}
.cont {
  width: 11.5rem;
  height: 3.63rem;
  font-size: 3rem;
  font-family: Montserrat-Bold, Montserrat;
  font-weight: bold;
  color: #24135b;
  line-height: 3.52rem;
}
.cellbox {
  margin-top: 2rem;
  .cell {
    width: 42.88rem;
    height: 9.75rem;
    background: #edeaf3;
    box-shadow: 0rem 0.88rem 0.13rem -0.25rem rgba(0, 0, 0, 0.05000000074505806);
    border-radius: 2rem 2rem 2rem 2rem;
    opacity: 1;
    border: 0.13rem solid #e7e4eb;
    margin-bottom: 2rem;
  }
}
.cell {
  display: flex;
  justify-content: space-around;
  align-items: center;
  .flex {
    display: flex;
    flex-direction: column;
    margin-left: 3rem;
  }
  .span1 {
    width: 7rem;
    height: 2.5rem;
    font-size: 1.75rem;
    font-family: Source Han Sans SC-Bold, Source Han Sans SC;
    font-weight: bold;
    color: #24135b;
    line-height: 2.05rem;
  }
  .span2 {
    width: 19.5rem;
    height: 2.25rem;
    font-size: 1.75rem;
    font-family: Montserrat-Regular, Montserrat;
    font-weight: 400;
    color: #7870a6;
    line-height: 2.25rem;
    margin-top: 0.5rem;
  }
  .pricebtn {
    text-align: center;
    width: 10rem;
    height: 4.5rem;
    background: #7d52fb;
    border-radius: 1.38rem 1.38rem 1.38rem 1.38rem;
    opacity: 1;
    line-height: 4.5rem;
    font-size: 1.75rem;
    font-family: Montserrat-Bold, Montserrat;
    font-weight: bold;
    color: #ffffff;
    margin-right: 3rem;
  }
}
</style>
