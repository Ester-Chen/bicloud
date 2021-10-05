<template>
  <div class="bigbox">
   
    <!-- 第一个板块 -->
    <div class="div1 flex-col">
      <div class="modu1" style="padding-top:1.5rem ;">
        <img
          src="@/assets/img/bcg.png"
          alt=""
          style="width:14.75rem;height:5rem"
        />
        <img
          src="@/assets/img/Frame.png"
          alt=""
          style="width:6rem;height:6rem"
        />
      </div>
      <div class="modu2">
        <span 
          >{{$t("bcg.art1")}}</span
        >
      </div>
      <div class="modu3" style="padding-bottom:1.5rem ;">
        <span 
          >{{$t("bcg.art2")}}</span
        >
      </div>
    </div>
    <!-- 第一个板块 -->

    <!-- 第二个板块 -->
    <div class="div2 flex-col">
      <div class="modu1" style="padding-top:1.5rem ;">
        <img src="@/assets/img/BYBh1.png" alt=""   style="width:14.75rem;height:7rem"/>
        <img src="@/assets/img/Frame(1).png" alt="" style="width:6rem;height:6rem"/>
      </div>
      <div class="modu2">
        <span>{{$t("bcg.art3")}}</span>
      </div>
      <div class="modu3" style="padding-bottom:1.5rem ;">
        <span>{{$t("bcg.art4")}}</span>
      </div>
    </div>
    <!-- 第二个板块 -->
  </div>
</template>

<script>

export default {
  components: {
    
  },
  data () {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.flex-col {
  display: flex;
  flex-direction: column;

  align-items: center;
}
.bigbox {
  width: 46.88rem;
  height: 101.5rem;
  background: linear-gradient(180deg, #daf9ff 0%, #e4eafe 100%);
  .div1 {
    width: 42.88rem;
    
    margin: 4rem 0 0 2rem;
    background: #fff;
  border-radius: 2rem 2rem 2rem 2rem;
  }
  .div2 {
    width: 42.88rem;
  
    margin: 4rem 0 0 2rem;
    background: #fff;
    border-radius: 2rem 2rem 2rem 2rem;
  }
  .modu1 {
      width: 36.88rem;
      display: flex;
      justify-content: space-between;
      margin-top: 1rem;
    }
    .modu2 {
      margin-top: 2rem;
      width: 36.88rem;

      span {
        font-size: 1.75rem;
        color: #24135b;
        font-weight: bold;
      }
    }
    .modu3 {
      margin-top: 1rem;
      width: 36.88rem;

      font-size: 1.75rem;
      font-weight: 400;

      color: #7870a6;
    }
}
</style>
