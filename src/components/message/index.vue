<template>
  <div class="message">
    <template v-for="(item, index) in $store.state.msgPool">
      <div class="d-flex justify-center" transition="slide-y-transition" :key="index">
        <template v-if="item.light === false">
          <v-alert dense :type="item.type" transition="scale-transition">{{ item.message }}</v-alert>
        </template>
        <template v-if="item.light === true">
          <v-alert dense :type="item.type" outlined transition="scale-transition">{{item.message}}</v-alert>
        </template>
      </div>
    </template>
    <template v-for="(item, index) in $store.state.confirmPool">
      <div class="d-flex justify-center" transition="slide-y-transition" :key="index">
        <template v-if="item.component ==='dialog'">
          <v-dialog v-model="item.show" persistent transition="scale-transition">
            <v-card>
              <v-card-title v-text="item.title"></v-card-title>
              <v-card-text v-html="item.content"></v-card-text>
              <v-card-actions class="flex-row">
                <v-spacer></v-spacer>
                <v-btn color="info" small @click="confirm(item)">
                  {{$t('app.confirm')}}
                </v-btn>
                <v-btn small @click="cancel(item)">
                  {{$t('app.cancel')}}
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </template>
      </div>
    </template>
  </div>
</template>
<script>
  export default {
    methods: {
      confirm(item) {
        item.show = false
        if (item.confirm) item.confirm()
      },
      cancel(item) {
        item.show = false
        if (item.cancel) item.cancel()
      }
    }
  }
</script>
<style scoped>
  .message {
    left: 50%;
    top: 40%;
    z-index: 9999;
    display: flex;
    position: fixed;
    max-width: 80vw;
    flex-direction: column;
    transform: translateX(-50%);
  }
  /deep/ .v-alert--dense{
    padding-top: 16px;
    padding-bottom: 16px;
  }
  /deep/ .v-alert__wrapper {
    flex-direction: row !important;
  }
  /deep/ .v-dialog {
    width: auto;
    min-width: 200px;
    max-width: 80%;
  }
  /deep/ .v-dialog > .v-card > .v-card__title {
    font-size: 2rem;
    font-weight: bold;
    align-items: unset;
    padding: 16px 24px 14px 24px;
  }
  /deep/ .v-card__subtitle, .v-card__text {
    font-size: 1rem;
    line-height: 2.5rem;
  }
</style>
