<template>
  <div class="bigbox">
    <img
      src="~@/assets/img/topbg.png"
      alt=""
      style="width:100%;position: absolute;margin-top:-99px;z-index:0"
    />

    <div
      style="position: relative;width: 18.38rem;margin:5rem 0 0 2rem;height: 4.88rem;font-size: 4rem;font-family: Montserrat-Bold, Montserrat;font-weight: bold;color: #24135B;line-height: 4.69rem;"
    >
      STAKING
    </div>
    <div
      style="width: 40.25rem;margin:1rem 0 0 2rem;height: 4.5rem;font-size: 1.75rem;font-family: Montserrat-Bold, Montserrat;font-weight: bold;color: #24135B;line-height: 2.25rem;"
    >
      Just stake BCG&BYB tokens to earn DMC. High APR, low risk.
    </div>
    <div style="display:flex;margin-top:2rem">
      <div
        style="width: 20.5rem;
                height: 11.25rem;
                background: #FFFFFF;
                box-shadow: 0rem 0.88rem 0.13rem -0.25rem rgba(0, 0, 0, 0.05000000074505806);
                border-radius: 2rem 2rem 2rem 2rem;
                opacity: 1;
                border: 0.13rem solid #E7E4EB;margin-left:2rem;display:flex;align-items:center"
      >
        <img
          src="@/assets/img/BCG_logo.png"
          style="width:7.25rem;height:7.25rem;margin:0 1rem 0 2rem"
        />
        <div class="flex-col">
          <span class="span1">BCG</span>
          <span class="span2">{{
            Number($store.state.wallet.balance.BCG).toFixed(2)
          }}</span>
        </div>
      </div>
      <div
        style="width: 20.5rem;
                  height: 11.25rem;
                  background: #FFFFFF;
                  box-shadow: 0rem 0.88rem 0.13rem -0.25rem rgba(0, 0, 0, 0.05000000074505806);
                  border-radius: 2rem 2rem 2rem 2rem;
                  opacity: 1;
                  border: 0.13rem solid #E7E4EB;margin-left:1.7rem;display:flex;align-items:center"
      >
        <img
          src="@/assets/img/BYB_logo.png"
          style="width:7.25rem;height:7.25rem;margin:0 0.7rem 0 1.6rem"
        />
        <div class="flex-col">
          <span class="span1">BYB</span>
          <span class="span2">{{
            Number($store.state.wallet.balance.BYB).toFixed(2)
          }}</span>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="con1">
        <div>
          <div class="article1">ERAN DMC</div>
          <div class="article2">Earn DMC Tokens</div>
          <div class="article2">Stake BCG Tokens & BYB Tokens</div>
        </div>
        <div><img src="@/assets/img/DMC2.png" alt="" /></div>
      </div>
      <div class="con2">
        <div
          style=" display: flex;justify-content: space-between;margin-top:1.8rem"
        >
          <span
            style="font-size: 1.75rem;font-weight: bold;color:#24135B;margin-top:0.5rem"
            >APR:</span
          >
          <div
            style="height:3.13rem;display:flex;align-items: center;margin-right: 1rem;"
          >
            <span
              style="margin-top:0.7rem;color: #24135B;font-size: 1.75rem;font-weight: bold;"
              >137.23%</span
            >
            <img
              src="@/assets/img/calculator.png"
              alt=""
              style="margin-left:1rem"
            />
          </div>
        </div>
        <div style=" display: flex;margin-top:1.8rem">
          <span
            style="font-size: 1.75rem;font-weight: bold;color:#24135B;margin-top:0.5rem"
            >STAKING:</span
          >
          <div style="height:3.13rem;display:flex;align-items: center;">
            <span
              style="margin-top:0.5rem;margin-left:17rem;color: #24135B;font-size: 1.75rem;font-weight: bold;"
              >BCG & BYB</span
            >
          </div>
        </div>
        <div style=" display: flex;;margin-top:1.8rem">
          <span
            style="font-size: 1.75rem;font-weight: bold;color:#24135B;margin-top:0.5rem"
            >BCG ：BYB</span
          >
          <div style="height:3.13rem;display:flex;align-items: center;">
            <span
              style="margin-top:0.5rem;margin-left:15.5rem;color: #F33D9A;font-size: 1.75rem;font-weight: bold;"
              >8000 ： 1</span
            >
          </div>
        </div>
        <div style=" display: flex;margin-top:1.8rem">
          <span
            style="font-size: 1.75rem;font-weight: bold;color:#24135B;margin-top:0.5rem"
            >ERAN：</span
          >
          <div style="height:3.13rem;display:flex;align-items: center;">
            <span
              style="margin-top:0.5rem;margin-left:18.5rem;color: #24135B;font-size: 1.75rem;font-weight: bold;"
              >DMC</span
            >
          </div>
        </div>
      </div>
      <div class="con3">
        <span>All Tokens Based On Binance Smart Chain</span>
      </div>
      <div class="btn1 span-css" @click="showPopup">ERAN DMC</div>
      <div class="btn2 span-css" @click="withdrawLP">
        {{ $t("pledge.art1") }}
      </div>
    </div>

    <van-popup
      style="width:42rem;height:56rem;background: #FFFFFF;box-shadow: 0rem 0.88rem 0.13rem -0.25rem rgba(0, 0, 0, 0.05000000074505806);
border-radius: 2rem 2rem 2rem 2rem;
border: 0.13rem solid #E7E4EB;"
      v-model="show"
    >
      <div
        style="width: 17.88rem;
height: 4.38rem;
font-size: 3rem;
margin:1.5rem 0 0 2rem
font-family: Source Han Sans SC-Bold, Source Han Sans SC;
font-weight: bold;
color: #24135B;
line-height: 3.52rem;
white-space:nowrap
"
      >
        {{$t('pledge.art2')}}
      </div>
      <div style="margin:0 0 0 12.88rem">
        <img src="@/assets/img/90.png" alt="" />
      </div>
      <div
        style="display:flex;align-items: center;
    justify-content: space-around;"
      >
        <div
          style="align-items: center;
    display: flex;"
        >
          <img src="@/assets/img/101.png" alt="" />
          <span
            style="width: 12.25rem;
height: 2.13rem;
font-size: 1.75rem;
font-family: Montserrat-SemiBold, Montserrat;
font-weight: 600;
color: #2B98D4;
line-height: 2.05rem;
"
            >STAKING BYB</span
          >
        </div>
        <div style="margin-top:0.3rem">
          <span
            style="width: 15.75rem;
height: 1.88rem;
font-size: 1.5rem;
font-family: Montserrat-Regular, Montserrat;
font-weight: 400;
color: #C4C4C4;
line-height: 1.76rem;
"
            >BYB：BCG = 1：8000</span
          >
        </div>
      </div>

      <van-field
        style="width: 35.88rem;
height: 7.5rem;
margin:1rem 0 0 3rem;
background: linear-gradient(270deg, #EBF2F5 0%, #F0ECF2 100%);
border-radius: 2rem 2rem 2rem 2rem;
opacity: 1;
border: 0.13rem solid #E7E4EB;"
        v-model="value"
        type="number"
        
        :placeholder="$t('pledge.art3')"
      />
      <div
        style="width: 12.5rem;
height: 1.88rem;
font-size: 1.5rem;
font-family: Montserrat-Regular, Montserrat;
font-weight: 400;
color: #C4C4C4;
line-height: 1.76rem;
margin:1rem 0 0 3rem;
white-space:nowrap;
"
      >
      {{ $t('pledge.art4')}} {{ Number($store.state.wallet.balance.BYB).toFixed(2) }}
      </div>
      <div
        style="display:flex;
    flex-direction: column;
    align-items: center;"
      >
        <div style="width:7.25rem;height:5.13rem;margin-left: 1rem;margin-top:3rem">
          <img src="@/assets/img/100.png" alt="" style="100%" />
        </div>
        <span
          style="margin:1rem 0rem 0 0.5rem;width: 4rem;
height: 2.13rem;
font-size: 1.75rem;
font-family: Montserrat-Medium, Montserrat;
font-weight: 500;
color: #B13204;

"
          >BCG</span
        >
        <span
          style="width: 13.88rem;
height: 3.63rem;
font-size: 3rem;
font-family: Montserrat-Bold, Montserrat;
font-weight: bold;
color: #6E4DD1;
margin-top:1rem;text-align:center
"
          >{{ getRatioNum }}</span
        >
        <van-button
          type="primary"
          color="#5BD2E3"
          style="width: 22rem;
height: 6.25rem;
border-radius: 1.25rem 1.25rem 1.25rem 1.25rem;margin-top:3rem
font-weight:800;
font-size: 2.13rem;
"
          @click="deposit"
          :disabled="isdisabled"
          >{{ $t('pledge.art5')}}</van-button
        >
      </div>
    </van-popup>
  </div>
</template>

<script>
import { Field } from "vant";

Vue.use(Field);
import Vue from "vue";
import { Popup, Cell, CellGroup, Button, Toast } from "vant";

Vue.use(Popup)
  .use(Cell)
  .use(CellGroup)
  .use(Button)
  .use(Toast);

export default {
  components: {},
  data() {
    return {
      show: false,
      amountBI: 0,
      amountBCG: 0,
      scrollTop: 0,
      value: "",
      sms: "",
      isdisabled: false,
    };
  },
  computed: {
    getRatioNum() {
      this.getDisabled();
      return Number(this.value * 8000).toFixed(2);
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
    getDisabled() {
      if (
        this.value > Number(this.$store.state.wallet.balance.BYB).toFixed(2)
      ) {
        this.value = "";
        this.isdisabled=true
        Toast("BYB余额不足");
      }else{
        this.isdisabled=false
      }
    },
    //弹出层
    showPopup() {
      this.show = true;
    },

    init() {
      let self = this;
      self.$store.dispatch("balanceOf", { contract: "BCG", symbol: "BCG" });
      self.$store.dispatch("balanceOf", { contract: "BYB", symbol: "BYB" });

      console.log(self.$store.state.wallet.contract.DMCpoolv2);
      self.$store.state.wallet.contract.DMCpoolv2.methods
        .userInfo(0, self.$store.state.wallet.account)
        .call()
        .then((res) => {
          console.log(res);
          self.amountBCG = self.$store.state.wallet.web3.utils.fromWei(
            res.amount,
            "ether"
          );
          console.log("获取价格：", self.amountBCG);
        });
    },
    deposit() {
      console.log(1);
      let self = this;

      self.$store.commit("SET_AWAIT", true);
      self.scrollTop =
        document.documentElement.scrollTop ||
        window.pageYOffset ||
        document.body.scrollTop;
      window.scrollTo({ left: 0, top: 0 });

      self._earnGood();
    },
    _earnGood() {
      let self = this;
      self.$store
        .dispatch("approve", { from: "BCG", to: "DMCpoolv2" })
        .then(() => {
          self.$store
            .dispatch("approve", { from: "BYB", to: "DMCpoolv2" })
            .then(() => {
              let amountBI = self.$store.state.wallet.web3.utils.toWei(
                (self.value * 8000).toString(),
                "ether"
              );
              self.$store.state.wallet.contract.DMCpoolv2.methods
                .deposit(0, amountBI)
                .send()
                .then((res) => {
                  window.scrollTo({ left: 0, top: self.scrollTop });
                  self.$store.commit("SET_AWAIT", false);
                  self.$Message.success(self.$t("app.success"));
                  console.log("质押成功：", res);
                })
                .catch((err) => {
                  window.scrollTo({ left: 0, top: self.scrollTop });
                  self.$store.commit("SET_AWAIT", false);
                  self.$Message.error(self.$t("app.error"));
                  console.log("质押 失败：", err);
                });
            });
        });
    },
    withdrawLP() {
      let self = this;

      self.$store.commit("SET_AWAIT", true);
      self.scrollTop =
        document.documentElement.scrollTop ||
        window.pageYOffset ||
        document.body.scrollTop;
      window.scrollTo({ left: 0, top: 0 });

      let amountWei = self.$store.state.wallet.web3.utils.toWei(
        self.amountBCG.toString(),
        "ether"
      );
      self.$store.state.wallet.contract.DMCpoolv2.methods
        .withdrawLP(0, amountWei)
        .send()
        .then((res) => {
          window.scrollTo({ left: 0, top: self.scrollTop });
          self.$store.commit("SET_AWAIT", false);
          self.$Message.success(self.$t("app.success"));
          console.log("质押成功：", res);
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

<style lang="less" scoped>
.van-button__text{
  font-weight: bold;
}
/deep/ .van-field__control {
  text-align: center !important;
  line-height: 5rem !important;

  font-size: 1.75rem;
  font-family: Montserrat-Medium, Montserrat;
  font-weight: 500;
  color: #7870a6 !important;
}
.bigbox {
  width: 46.88rem;
  height: 101.5rem;
  background: linear-gradient(180deg, #daf9ff 0%, #e4eafe 100%);
  border-radius: 0rem 0rem 0rem 0rem;
  display: flex;
  flex-direction: column;
}
.header {
  height: 22.75rem;
}
.flex-col {
  display: flex;
  flex-direction: column;
}
.span1 {
  width: 4rem;
  height: 2.13rem;
  font-size: 1.75rem;
  font-weight: 700;
  color: #b13204;
  line-height: 2.05rem;
}
.span2 {
  width: 7.25rem;
  height: 2.25rem;
  font-size: 1.88rem;
  font-weight: bold;
  color: #24135b;
  line-height: 2.2rem;
}
.con1 {
  width: 42.88rem;
  height: 14rem;
  background-color: #edf0f4;

  border-radius: 2rem 2rem 0 0;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .article1 {
    width: 17.38rem;
    height: 3.63rem;
    font-size: 3rem;
    font-weight: bold;
    color: #24135b;
    line-height: 3.52rem;
    padding-bottom: 0.5rem;
  }
  .article2 {
    width: 25.5rem;
    font-size: 1.5rem;
    font-weight: 500;
    color: #24135b;
    line-height: 1.76rem;
  }
}
.content {
  width: 42.88rem;
  height: 55.63rem;
  background: #ffffff;
  box-shadow: 0rem 0.88rem 0.13rem -0.25rem rgba(0, 0, 0, 0.05000000074505806);
  border-radius: 2rem 2rem 2rem 2rem;
  opacity: 1;
  border: 0.13rem solid #e7e4eb;
  margin-left: 2rem;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  .con2 {
    width: 36.88rem;
    height: 3.13rem;
  }
  .con3 {
    margin-top: 19.5rem;
    span {
      width: 29.13rem;
      height: 1.75rem;
      font-size: 1.38rem;
      font-weight: 400;
      color: #7870a6;
      line-height: 1.75rem;
    }
  }
  .btn1 {
    width: 36.88rem;
    height: 6.25rem;
    background: #5bd2e3;
    box-shadow: 0rem 1rem 2rem 0.13rem rgba(92, 210, 227, 0.25);
    border-radius: 1.25rem 1.25rem 1.25rem 1.25rem;
    opacity: 1;
    font-size: 2.13rem;
    font-weight: bold;
    color: #ffffff;
    margin-top: 2rem;
  }
  .btn2 {
    width: 36.88rem;
    height: 6.25rem;
    background: #f0edf3;
    border-radius: 1.25rem 1.25rem 1.25rem 1.25rem;
    opacity: 1;
    margin-top: 1rem;
    font-size: 2.13rem;
    font-weight: bold;
    color: #24135b;
  }
}
.span-css {
  line-height: 6.25rem;
  text-align: center;
}
</style>
