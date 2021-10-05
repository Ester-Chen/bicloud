<template>
<div style="display:flex;flex-direction: column;">
  
          <img src="@/assets/img/topg.png" alt="" class="topbg" />

    <Content1></Content1>
   
    <Fotter></Fotter>
  
  </div>
</template>

<script>
import Content1 from '@/views/home/components/content1.vue'
import Fotter from '@/views/home/components/footer.vue'
export default {
  components: {
    Content1,
    
    Fotter
  },
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.topbg {
  position: absolute;
  width: 100%;
  top: -143px;
  left: 0;
  z-index: 0;
}
</style>
