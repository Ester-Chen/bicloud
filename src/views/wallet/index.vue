<template>
  <div class="bigBox">
    <img
      src="~@/assets/img/topbg.png"
      alt=""
      style="width:100%;position: absolute;top:-80px;z-index:0"
    />

    <div class="header">
      <div class="title">
        <span class="span1">{{ $t("wallet.art1") }}</span>
        <span class="span2">WALLET</span>
      </div>
    </div>
    <div class="conBox">
      <div class="top">
        <div class="smallbox">
          <div
            style="    width: 2.13rem;
    height: 2rem;"
          >
            <img
              class="img1"
              src="@/assets/img/check_circle_outline.png"
              alt=""
              style="    position: relative;
    top: 0;"
              v-if="isImgShow"
            />
          </div>
          <span class="Connection" ref="zhuangtai">{{ getContent }}</span>
        </div>

        <span class="address">{{ getAddress }}</span>
        <span class="instructions">Based on Binance Smart Chain</span>
      </div>
      <div class="center">
        <div class="con1">
          <img
            src="@/assets/img/biglogo.png"
            alt=""
            style="width:20.5rem;height:11rem"
          />
          <div class="flex-col">
            <span class="num">NUM</span>
            <span class="cont" style="text-align:center">{{
             Number($store.state.wallet.balance.BCG).toFixed(2)
            }}</span>
          </div>
        </div>
        <div class="con2">
          <img
            src="@/assets/img/byblogo.png"
            alt=""
            style="width:20.5rem;height:11rem"
          />
          <div class="flex-col">
            <span class="num">NUM</span>
            <span class="cont" style="text-align:center">{{
              Number($store.state.wallet.balance.BYB).toFixed(2)
            }}</span>
          </div>
        </div>
      </div>
      <div class="bottom flex-col">
        <img src="@/assets/img/DMC1.png" alt=""  style="height:11.5rem"/>
        <div class="brick">
          <div class="flex-col">
            <span class="num" style="margin-top:1.63rem">NUM</span>
            <span class="cont" style="color:#6E4DD1;text-align:center">{{
             Number($store.state.wallet.balance.DMC).toFixed(2)
            }}</span>
          </div>
        </div>
        <div class="stak-btn" @click="$router.push('/pledge')">STAKING</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "wallet",
  components: {},
  data() {
    return {
      noContent: "未连接",
      isImgShow: true,
    };
  },

  watch: {
    isImgShow: {
      handler() {
        if (!this.isImgShow) {
          this.$refs.zhuangtai.style.color = "red";
        } else {
          this.$refs.zhuangtai.style.color = "#27bc36";
        }
      },
    },
  },

  computed: {
    getContent: function() {
      return this.upgetContent();
    },
    getAddress() {
      return this.getUpAddress();
    },
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
      self.$store.dispatch("balanceOf", { contract: "BCG", symbol: "BCG" });
      self.$store.dispatch("balanceOf", { contract: "BYB", symbol: "BYB" });
      self.$store.dispatch("balanceOf", { contract: "DMC", symbol: "DMC" });
    },
    upgetContent() {
      const content = this.$store.state.wallet.account;
      let isContent = "已连接";
      if (!content) {
        this.isImgShow = false;
        return this.noContent;
      } else {
        this.isImgShow = true;
        return isContent;
      }
    },
    getUpAddress() {
      const address = this.$store.state.wallet.account;
      if (address) {
        return address;
      } else {
        return;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.bigBox {
  background: linear-gradient(180deg, #daf9ff 0%, #e4eafe 100%);
  display: flex;
  flex-direction: column;
}

.flex-col {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.title {
  position: relative;
  margin-left: 2rem;
  height: 5.75rem;
  margin-top: 5rem;
  .span1 {
    font-size: 4rem;
    font-weight: 800;
    line-height: 4.69rem;
    color: #24135b;
  }
  .span2 {
    width: 7.75rem;
    height: 2.25rem;
    font-size: 1.75rem;
    font-family: Montserrat-Bold, Montserrat;
    font-weight: bold;
    color: #7870a6;
    line-height: 2.25rem;
    margin-left: 1rem;
  }
}
.conBox {
  height: 74rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  .top {
    width: 42.88rem;
    height: 10.63rem;
    background: #ffffff;
    box-shadow: 0rem 0.88rem 0.13rem -0.25rem rgba(0, 0, 0, 0.05000000074505806);
    border-radius: 2rem 2rem 2rem 2rem;
    opacity: 1;
    border: 0.13rem solid #e7e4eb;
    margin-top: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .smallbox {
      width: 8rem;
      height: 2rem;
      margin-bottom: 1.5rem;
      display: flex;
      justify-content: space-around;
      align-content: center;
      .img1 {
        width: 2.13rem;
        height: 2rem;
      }
      .Connection {
        width: 5rem;
        height: 2.13rem;
        font-size: 1.38rem;
        font-family: Source Han Sans CN-Regular, Source Han Sans CN;
        font-weight: 400;
        color: #27bc36;
        line-height: 2.06rem;
      }
    }
    .address {
      width: 35.88rem;
      height: 2.25rem;
      font-size: 1.5rem;
      font-family: Montserrat-Regular, Montserrat;
      font-weight: 400;
      color: #24135b;
      line-height: 2.25rem;
    }
    .instructions {
      width: 21.5rem;
      height: 1.75rem;
      font-size: 1.38rem;
      font-family: Montserrat-Regular, Montserrat;
      font-weight: 400;
      color: #7870a6;
      line-height: 1.75rem;
      white-space: nowrap;
    }
  }
  .center {
    width: 44rem;
    height: 20.75rem;
    display: flex;
    justify-content: space-around;
    .con1 {
      width: 20rem;
      height: 20.75rem;
      background: #ffffff;
      box-shadow: 0rem 0.88rem 0.13rem -0.25rem rgba(0, 0, 0, 0.05000000074505806);
      border-radius: 2rem 2rem 2rem 2rem;
      opacity: 1;
      border: 0.13rem solid #e7e4eb;
    }
    .con2 {
      width: 20rem;
      height: 20.75rem;
      background: #ffffff;
      box-shadow: 0rem 0.88rem 0.13rem -0.25rem rgba(0, 0, 0, 0.05000000074505806);
      border-radius: 2rem 2rem 2rem 2rem;
      opacity: 1;
      border: 0.13rem solid #e7e4eb;
    }
  }
  .bottom {
    width: 42.88rem;
    height: 34.13rem;
    background: #ffffff;
    box-shadow: 0rem 0.88rem 0.13rem -0.25rem rgba(0, 0, 0, 0.05000000074505806);
    border-radius: 2rem 2rem 2rem 2rem;
    opacity: 1;
    border: 0.13rem solid #e7e4eb;
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
      margin-top: 2rem;
      font-size: 2.13rem;
      font-family: Montserrat-Bold, Montserrat;
      font-weight: bold;
      color: #ffffff;
      line-height: 3.25rem;
      text-align: center;
      line-height: 6.25rem;
    }
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
</style>
