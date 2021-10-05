<template>
  <div style="background: linear-gradient( 180deg, #DAF9FF 0%, #E4EAFE 100%); ">
       <div class="navbar" >
       <div class="logo" style="z-index:9"><img src="@/assets/img/logo.png" alt="" ></div>
       <div class="lagbtn" style="z-index:9"><img src="@/assets/img/icon／中英文.png" alt="" ></div>
       <div class="hanbao" style="z-index:9"><img src="@/assets/img/icon／nav.png" alt="" ></div>
  </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
    .navbar{

    height: 5.5rem;
    display: flex;
    align-items: center;

      .logo{
        padding-left: 2rem;
        width: 6.13rem;
        height: 3.5rem;

      }
      .lagbtn{
        width: 3rem;
        height:3rem;
        padding-right:2rem ;
        margin-left: 28.75rem;
          div{
            padding: 0.25rem;
            width: 2.5rem;
            height: 2.5rem;
          }
      }
      .hanbao{
        width: 3rem;
        height: 3rem;
        padding-right:2rem ;
          div{
            width: 2.25rem;
            height: 2rem;
            margin: 0.38rem;
        }
      }
  }
</style>
