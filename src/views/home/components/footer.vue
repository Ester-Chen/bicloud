<template>
  <div class="footer">
    <div class="imags">
      <img src="@/assets/img/推特@2x.png" alt="" class="img1" />
      <img src="@/assets/img/飞机.png" alt="" />
      <img src="@/assets/img/机器人.png" alt="" />
      <img src="@/assets/img/合约.png" alt="" />
    </div>
    <div class="div1">
      <span class="span1">BICLOUD Token 2021. All Rights Reserved.</span>
    </div>
    <div class="div2">
      <span class="span2"
        >LEGAL DISCLAIMER: None of the information on this website should be
        construed as providing legal or financial advice. Please note there are
        always risks associated with smart contracts. Please use at your own
        risk. BICLOUD Token is not a registered broker, analyst or investment
        advisor. If you are willing to, or have purchased BICLOUD, you agree
        that you are not purchasing a security or investment. The BV team can
        not be held liable for any losses or taxes you may incur. You also agree
        that the team is presenting the token as it was launched, due to it
        being renounced it can not be changed. Do conduct your own due diligence
        and consult your financial advisor before making any investment
        decisions.</span
      >
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.imags {
  margin-top: 4rem;
  display: flex;
  align-items: center;
  margin-right: 3rem;
  // position: relative;
  // top: 0;
  // right: 0;
  // bottom: 0;
  // left: 0;
  // margin: auto;
  img {
    margin-left: 3rem;
    width: 4rem;
    height:4rem;
  }
  .img1 {
   
    
    margin-bottom:0.5rem ;
  }
}
.div1 {
  margin-top: 3rem;
  width: 31.38rem;
  height: 2.25rem;
  .span1 {
    height: 2.25rem;
    font-weight: 400;
    font-size: 1.5rem;
    color: #24135b;
    line-height: 2.25rem;
  }
}
.div2{
  margin-top: 2rem;
  width: 42.88rem;
  height: 31.5rem;
  .span2{

font-size: 1.5rem;
 display:inline-block; text-align:justify;
font-weight: 400;
color: #24135B;
  }
}
</style>
