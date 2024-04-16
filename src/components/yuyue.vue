<template>
  <div class="homepage">
    <div class="navbar">
      <van-nav-bar
          left-arrow
          @click-left="onClickLeft"
      />
    </div>
    <div class="main">
      <van-config-provider :theme-vars="themeVars">
        <van-tabs v-model:active="active" type="card">
          <van-tab title="网上预约">
            <yuYueMain></yuYueMain>
          </van-tab>
          <van-tab title="历史预约">内容 2</van-tab>
        </van-tabs>
      </van-config-provider>
    </div>
  </div>
</template>

<script lang="ts">
import {ref, reactive} from "vue";
import yuYueMain from "../views/yuYueMain.vue";

export default {
  name: 'yuYue',
  components: {
    yuYueMain
  }
}
</script>

<script lang="ts" setup>
const onClickLeft = () => history.back();
const active = ref(0)
const themeVars = reactive({
  tabsCardHeight: '50px',
  radiusSm: '5px',
})
</script>

<style scoped>
:deep .van-nav-bar .van-icon {
  color: black;
}
</style>
