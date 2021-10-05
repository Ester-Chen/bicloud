<template>
  <div class="box">
    <div class="bgbox">
      <!-- <NavBar></NavBar> -->
      <div class="con1" style="font-family: Kanit, sans-serif;">{{$t("home.art1")}}</div>
      <div class="con2" style="font-family: Kanit, sans-serif;">
        A set of high-quality brand-new blockchain DEFI ecological network
      </div>
      <div  class="con3" @click="$router.push('/bcg')">{{$t("home.art2")}}</div>
      <div class="samll-img">
        <img src="@/assets/img/上下.png" alt="" />
        <img src="@/assets/img/分享.png" alt="" />
        <img src="@/assets/img/风车.png" alt="" />
      </div>
      <div class="con4" style="font-family: Kanit, sans-serif;white-space:nowrap;font-weight:600">BI CLOUD SWAP & DIFI & Smart Chain</div>
    </div>
    <div class="bg2box">
      <div class="btn1" @click="toWallet"><span>EXCHANGE</span></div>
      <div class="btn2" @click="$router.push('/pledge')"><span>DIFI-STAKING</span></div>
      <div class="btn3">
        <span @click="jump(0)"> LEARN MORE</span>
      </div>
    </div>
    <div class="con5">
      <span class="span1" >Coin cloud ecological network based on Binance Smart Chain</span
      >
    </div>

   
    <!-- content2 -->

  <!-- <img class="bbg" src="@/assets/img/Intersect.png" alt=""> -->
    <div class="content " >
    <div class="con1 ">
      <div class="div1 d_jump" style="white-space:nowrap">{{$t("home.art3")}}</div>
      <div class="div2">Ecology of coin cloud network</div>
    </div>
    <div class="bigBox">
      <div class="blockBox1">
        <div class="block1">
          <div><img src="@/assets/img/LOGO 2.png" alt="" /></div>
          <span class="span1">{{$t("home.art4")}}</span>
          <span class="span2"
            >{{$t("home.art5")}}</span
          >
        </div>
        <div class="block2">
          <div><img src="@/assets/img/LOGO 2(1).png" alt="" /></div>
          <span class="span1">{{$t("home.art6")}}</span>
          <span class="span2"
            >{{$t("home.art7")}}</span
          >
        </div>
        <!-- <div class="block3"></div> -->
      </div>
      <div class="blockBox2">
        <div class="block1">
          <div><img src="@/assets/img/LOGO 2@2x(2).png" alt="" /></div>
          <span class="span1">{{$t("home.art8")}}</span>
          <span class="span2"
            >{{$t("home.art9")}}</span
          >
        </div>
        <div class="block2">
          <div><img src="@/assets/img/LOGO 2@2x(4).png" alt="" /></div>
        <span class="span1" style="height: 3.25rem;
      font-size: 2.13rem;
      font-family: Source Han Sans SC-Bold, Source Han Sans SC;
      font-weight: bold;
      color: #24135b;
      line-height: 3.25rem;
      margin-top: 0rem;
      letter-spacing: -0.04rem;
            text-align: center;">BI CLOUD SWAP</span>
          <span class="span2"
            >{{$t("home.art10")}}</span
          >
        </div>
        <div class="block3">
          <div><img src="@/assets/img/LOGO 2@2x(3).png" alt="" /></div>
          <div class="div3">
            <span class="span1">BICLOUD CHAIN</span>
            <span class="span2">BICLOUD SMART SMART</span>
          </div>
          <span class="span3"
            >{{$t("home.art11")}}</span
          >
        </div>
      </div>
    </div>
    <!-- <ROTATE></ROTATE> -->
  </div>
  
   <div class="pop">
     <span style="font-size:3.5rem;color:#fff;margin-top:4rem;font-weight:600">Start in seconds.</span>
     <span style="1.5rem;color:#fff;margin-top:2rem;font-size:1.7rem;font-weight:600">Connect your crypto wallet to start using the app</span>
     <span style="1.5rem;color:#fff;margin-top:1rem;font-size:1.7rem;font-weight:600">in seconds</span>
     <span style="1.5rem;color:#fff;font-weight:600;margin-top:1.5rem;font-size:1.6rem;">No registration needed</span>
     <span style="1.8rem;color:#21C2D3;margin-top:5rem;font-size:1rem;">EARN DMC TOKEN</span>
     <div><van-button
          type="primary"
          color="#5BD2E3"
          style="width: 18rem;
height: 5rem;
border-radius: 1.5rem 1.5rem 1.5rem 1.5rem;margin-top:2rem;
font-weight:800;
font-size: 1.8rem;
"
         @click="toStake"
          >{{ $t('home.art12')}}</van-button
        ></div>
   </div>
  <div class="modled1" >   
   
    
    
    <div style="margin-left:2rem;padding-top: 3rem;">
      <span class="bigtitle">BI CLOUD SUPPORT</span>
    </div>
    <div class="img-box" style="padding-top: 3rem;">
      <div  class="img-top"><img src="@/assets/img/1.png" alt="" /></div>
      <div  class="img-top"><img src="@/assets/img/4.png" alt="" /></div>
       <div class="img-top" ><img src="@/assets/img/5.png" alt="" /></div>
       <div class="img-top" ><img src="@/assets/img/6.png" alt="" /></div>
       <div class="img-top" ><img src="@/assets/img/7.png" alt="" /></div>
       <div class="img-top" ><img src="@/assets/img/8.png" alt="" /></div>
       <div class="img-top" ><img src="@/assets/img/10.png" alt="" /></div>
       <div class="img-top" ><img src="@/assets/img/11.png" alt="" /></div>
       <div class="img-top" ><img src="@/assets/img/12.png" alt="" /></div>
       <div class="img-top" ><img src="@/assets/img/13.png" alt="" /></div>
    </div>
   </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Button } from 'vant';

Vue.use(Button);
// import ROTATE from '@/components/rotate'
export default {
  components: {
    // ROTATE
  },
  data() {
    return {};
  },
  methods: {
    toStake(){
      this.$router.push("pledge")
    },
    toWallet() {
      console.log(1);
      this.$router.push("/wallet");
    },
    jump(index) {
        // 用 class="d_jump" 添加锚点
        let jump = document.querySelectorAll('.d_jump')
        let total = jump[index].offsetTop
        let distance = document.documentElement.scrollTop || document.body.scrollTop
        // 平滑滚动，时长500ms，每10ms一跳，共50跳
        let step = total / 50
        if (total > distance) {
          smoothDown()
        } else {
          let newTotal = distance - total
          step = newTotal / 50
          smoothUp()
        }

        function smoothDown() {
          if (distance < total) {
            distance += step
            document.body.scrollTop = distance
            document.documentElement.scrollTop = distance
            setTimeout(smoothDown, 10)
          } else {
            document.body.scrollTop = total
            document.documentElement.scrollTop = total
          }
        }

        function smoothUp() {
          if (distance > total) {
            distance -= step
            document.body.scrollTop = distance
            document.documentElement.scrollTop = distance
            setTimeout(smoothUp, 10)
          } else {
            document.body.scrollTop = total
            document.documentElement.scrollTop = total
          }
        }
      },
    // toExtracr() {
    //   console.log(2);
    //   this.$router.push("/extract");
    // },
  },
};
</script>

<style lang="scss" scoped>
.pop{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 7rem;
  width: 100%;
  height: 40rem;
    background: linear-gradient(180deg, #855DD7  20%,  #5222B2 100%);

}
.bigtitle {
    width: 32.25rem;
    height: 4.5rem;
    font-size: 3rem;
    font-weight: bold;
    line-height: 4.5rem;
    font-family:Source Han Sans SC-Bold, Source Han Sans SC ;
    color: #24135b;
  }
.img-box {
    width: 40.76rem;
    margin: 0 0 0 3rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    div{
      margin-top: 1.5rem;
       width: 16rem;
      height: 5rem;
      background: hsla(0,0%,100%,.5);
      border-radius: 1rem;
      margin-bottom: .53333333rem;
    }
    img{
     width: 100%;
     height: 100%;
    }
  }
.modled1{
  
  height: 55rem;
  width:100%;
  background: linear-gradient(180deg, #B9DBF8 20%,  #fff 100%);
}
// .bbg{
//   position: absolute;
  
 
//  width: 100%;
// }
.navbar {
  height: 5.5rem;
  display: flex;
  align-items: center;

  .logo {
    padding-left: 2rem;
    width: 6.13rem;
    height: 3.5rem;
  }
  .lagbtn {
    width: 3rem;
    height: 3rem;
    padding-right: 2rem;
    margin-left: 28.75rem;
    div {
      padding: 0.25rem;
      width: 2.5rem;
      height: 2.5rem;
    }
  }
  .hanbao {
    width: 3rem;
    height: 3rem;
    padding-right: 2rem;
    div {
      width: 2.25rem;
      height: 2rem;
      margin: 0.38rem;
    }
  }
}
.box {
  z-index: 99;
  width: 100%;
  background: linear-gradient(180deg, #DAF9FF 0%, #E4EAFE 100%);
  // background-image:url('~@/assets/img/顶部bg.png') ;
   background-image:url('~@/assets/img/Intersect.png') ;
   background-size:100%;
   background-position-y: 700px;
  background-repeat:no-repeat ;
  
  .bg2box {
    margin-top: -1rem;
    width: 46.68rem;
    height: 31rem;
    background: url("~@/assets/img/image @1x.png") no-repeat;
    background-position: right;
  }
}
.con1 {
  height: 5.75rem;
  padding-left: 2rem;
  font-size: 3.9rem;
  color: #24135b;
  font-weight: 800;
  // margin-top: 4rem;
}
.con2 {
  width: 40.25rem;
  height: 4.5rem;
  font-size: 1.65rem;
  font-family: Montserrat-Bold, Montserrat;
  font-weight: bold;
  color: #24135b;
  padding: 1rem 0 0 2rem;
}
.con3 {
  font-size: 3rem;
  font-family:Do Hyeon,sans-serif;
  font-weight: bold;
  color: #6e4dd1;
  line-height: 3.52rem;
  padding: 3rem 0 0 2rem;
}
.samll-img {
  width: 15rem;
  margin: 2rem 0 0 0;
  img {
    margin-left: 2rem;
    width: 3rem;
    height: 3rem;
  }
}
.con4 {
  width: 34rem;
  height: 2.25rem;
  font-size: 1.75rem;
  // font-family: Montserrat-Medium, Montserrat;
  font-weight: 500;
  color: #24135b;
  line-height: 2.25rem;
  padding: 1rem 0 0 2rem;
}
.btn1 {
  width: 22rem;
  height: 6.25rem;
  background: #7c52fa;
  box-shadow: 0rem 1rem 2rem 0.13rem rgba(110, 77, 209, 0.25);
  border-radius: 1.25rem 1.25rem 1.25rem 1.25rem;
  opacity: 1;
  margin: 9.5rem 0 0 2rem;
  span {
    width: 12.38rem;
    height: 3.25rem;
    font-size: 2.13rem;
    font-family: Montserrat-Bold, Montserrat;
    font-weight: bold;
    color: #ffffff;
    line-height: 6.25rem;
    padding-left: 3.63rem;
  }
}
.btn2 {
  width: 22rem;
  height: 6.25rem;
  background: #5bd2e3;
  box-shadow: 0rem 1rem 2rem 0.13rem rgba(92, 210, 227, 0.25);
  border-radius: 1.25rem 1.25rem 1.25rem 1.25rem;
  opacity: 1;
  margin: 4rem 0 0 2rem;
  span {
    width: 14.75rem;
    height: 3.25rem;
    font-size: 2.13rem;
    font-family: Montserrat-Bold, Montserrat;
    font-weight: bold;
    color: #ffffff;
    line-height: 6.25rem;
    padding-left: 3.63rem;
  }
}
.btn3 {
  width: 22rem;
  height: 6.25rem;
  background: #f33c9a;
  box-shadow: 0rem 1rem 2rem 0.13rem rgba(243, 61, 154, 0.25);
  border-radius: 1.25rem 1.25rem 1.25rem 1.25rem;
  opacity: 1;
  margin: 4rem 0 0 2rem;
  span {
    width: 14.75rem;
    height: 3.25rem;
    font-size: 2.13rem;
    font-weight: bold;
    color: #ffffff;
    line-height: 6.25rem;
    padding-left: 3.63rem;
  }
}
.con5 {
  width: 46.88rem;
  height: 5rem;
  font-size: 1rem;
  font-family: Montserrat-Regular, Montserrat;
  font-weight: 400;
  color: #24135b;
  line-height: 2.5rem;
  padding-top: 6.25rem;
  text-align: center;
  .span1 {
    padding-left: 2rem;
    display: block;
  }
  .span2 {
    
  }
}

.content {
 

  //  background-image:url('~@/assets/img/Intersect.png') ;
  //  background-size:100%;
  //  background-position-y: -10px;
  // background-repeat:no-repeat ;
}
.con1 {
  
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 4rem;
  .div1 {
    text-align: center;
    width: 31.75rem;
    height: 5.75rem;
    font-size: 3rem;
    font-family: Source Han Sans SC-Bold, Source Han Sans SC;
    font-weight: bold;
    color: #24135b;
    line-height: 4.69rem;
    margin-top: 12.5rem;
    margin-left: 7rem;
  }
  .div2 {
    width: 27.88rem;
    height: 2.25rem;
    font-size: 1.75rem;
    font-family: Montserrat-Bold, Montserrat;
    font-weight: bold;
    color: #24135b;
    line-height: 2.25rem;
        margin-left: 9.5rem;

  }
}
.bigBox {
  display: flex;
  justify-content: space-between;

  margin-top: 4rem;
  justify-content: space-around;
}
.blockBox1 {
  height: 94rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .block1 {
    width: 20.5rem;
    
    background: linear-gradient(135deg, #fdf7e6 0%, #f4ebd2 100%);
    border-radius: 1.25rem 1.25rem 1.25rem 1.25rem;
    opacity: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      margin-top: 1rem;
      width: 10.25rem;
      height: 10.25rem;
      border-radius: 0rem 0rem 0rem 0rem;
      opacity: 1;
    }
    .span1 {
      
      height: 3.25rem;
      font-size: 2.13rem;
      font-family: Source Han Sans SC-Bold, Source Han Sans SC;
      font-weight: bold;
      color: #24135b;
      line-height: 3.25rem;
      margin-top: 1rem;
      letter-spacing: -0.04rem;
            text-align: center;

    }
    .span2 {
      width: 16.5rem;
   
      font-size: 1.38rem;
      font-family: Source Han Sans SC-Light, Source Han Sans SC;
      font-weight: 300;
      color: #24135b;
      line-height: 2.25rem;
      margin-top: 1.5rem;
      padding-bottom: 3rem;
       display:inline-block; text-align:justify;
      word-break: break-all;
    }
  }
  .block2 {
    width: 20.5rem;
    margin-top: 2rem;
    background: linear-gradient(135deg, #f2ecff 0%, #e6defa 100%);
    border-radius: 1.25rem 1.25rem 1.25rem 1.25rem;
    opacity: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      margin-top: 1rem;
      width: 10.25rem;
      height: 10.25rem;
      border-radius: 0rem 0rem 0rem 0rem;
      opacity: 1;
    }
    .span1 {
      width: 16.5rem;
      height: 3.25rem;
      font-size: 2.13rem;
      font-family: Source Han Sans SC-Bold, Source Han Sans SC;
      font-weight: bold;
      color: #24135b;
      line-height: 3.25rem;
      margin-top: 1rem;
      text-align: center;
    }
    .span2 {
      width: 16.5rem;
     
      font-size: 1.38rem;
      font-family: Source Han Sans SC-Light, Source Han Sans SC;
      font-weight: 300;
      color: #24135b;
      line-height: 2.25rem;
      margin-top: 1.5rem;
      padding-bottom: 3rem;
   display:inline-block; text-align:justify;
      word-break: break-all;
    }
  }
  .block3 {
    width: 20.5rem;
    height: 8.63rem;
    background: #f8f6ff;
    border-radius: 1.25rem 1.25rem 1.25rem 1.25rem;
    opacity: 1;
  }
}
.blockBox2 {
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .block1 {
    width: 20.5rem;
    
    background: linear-gradient(135deg, #e8f4f2 0%, #d9f1ea 100%);
    border-radius: 1.25rem 1.25rem 1.25rem 1.25rem;
    opacity: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      margin-top: 1rem;
      width: 10.25rem;
      height: 10.25rem;
      border-radius: 0rem 0rem 0rem 0rem;
      opacity: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .span1 {
      white-space: nowrap;
      height: 3.25rem;
      font-size: 2.13rem;
      font-family: Source Han Sans SC-Bold, Source Han Sans SC;
      font-weight: bold;
      color: #24135b;
      line-height: 3.25rem;
      margin-top: 1rem;
            text-align: center;

    }
    .span2 {
      width: 16.5rem;
     
      font-size: 1.38rem;
      font-family: Source Han Sans SC-Light, Source Han Sans SC;
      font-weight: 300;
      color: #24135b;
      line-height: 2.25rem;
      margin-top: 1.5rem;
      padding-bottom: 3rem;
       display:inline-block; text-align:justify;
      word-break: break-all;
    }
  }
  .block2 {
    width: 20.5rem;
   margin-top: 2rem;
    background: linear-gradient(135deg, #e5f1fb 0%, #d8faff 100%);
    border-radius: 1.25rem 1.25rem 1.25rem 1.25rem;
    opacity: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      margin-top: 1rem;
      width: 10.25rem;
      height: 10.25rem;
      border-radius: 0rem 0rem 0rem 0rem;
      opacity: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .span2 {
      width: 16.5rem;
     
      font-size: 1.38rem;
      font-family: Source Han Sans SC-Light, Source Han Sans SC;
      font-weight: 300;
      color: #24135b;
      line-height: 2.25rem;
      margin-top: 1.5rem;
      padding-bottom: 3rem;
      display:inline-block; text-align:justify;
      word-break: break-all;
    }
  }
  .block3 {
    width: 20.5rem;
    margin-top: 2rem;
    background: linear-gradient(135deg, #faf2f5 0%, #f3dae3 100%);
    border-radius: 1.25rem 1.25rem 1.25rem 1.25rem;
    opacity: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      margin-top: 2rem;
      width: 6.25rem;
      height: 6.25rem;
      border-radius: 0rem 0rem 0rem 0rem;
      opacity: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .div3 {

      display: flex;
      flex-direction: column;
      height: 5.13rem;
justify-content: space-around;
      .span1 {
        color: #24135b;
        font-size: 2.13rem;
        font-weight: 800;
        letter-spacing: -0.04rem;
      }
      .span2 {
text-align: center;
        color: #24125b;
        font-size:0.5rem;
        letter-spacing: -0.04rem;
        padding-left: 0.3rem;
      }
    }
    .span3 {
      margin-top: 1rem;
      width: 16.5rem;
     
      font-size: 1.38rem;
      font-family: Source Han Sans SC-Light, Source Han Sans SC;
      font-weight: 300;
      color: #24135b;
      line-height: 2.25rem;
      padding-bottom: 3rem;
      display:inline-block; text-align:justify;
      word-break: break-all;
     
    }
  }
}
</style>
