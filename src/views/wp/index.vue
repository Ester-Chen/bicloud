<template>
  <div>
    <pdf class="pdf" :src="pdfSrc" v-for="i in numPages" :key="i" :page="i"></pdf>
  </div>
</template>

<script>
  import pdf from 'vue-pdf'

  export default {
    components: {pdf},
    data() {
      return {
        pdfSrc: '',
        numPages: 1,  //  pdf 文件总页数
        overlay: false,
        absolute: true,
        opacity: 1,
      }
    },
    watch: {
      '$store.state.app.lang': function(newVal, oldVal) {
        console.log(newVal, oldVal)
        this.getNumPages('/' + newVal + '.pdf')
      }
    },
    mounted() {
      this.overlay = true
      this.$store.commit("SET_AWAIT", true)
      this.getNumPages('/' + this.$store.state.app.lang + '.pdf')
    },
    methods: {
      getNumPages(url) {
        var loadingTask = pdf.createLoadingTask(url)
        loadingTask.promise.then(pdf => {
          this.pdfSrc = loadingTask
          this.numPages = pdf.numPages
          this.overlay = false
          this.$store.commit("SET_AWAIT", false)
        })
      },
    }
  }
</script>

<style scoped>
  .pdf {
    z-index: 9;
  }
</style>
