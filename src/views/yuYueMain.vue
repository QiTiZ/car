<template>
  <div>
    <van-steps :active="active">
      <van-step>买家下单</van-step>
      <van-step>商家接单</van-step>
      <van-step>买家提货</van-step>
      <van-step>交易完成</van-step>
    </van-steps>
  </div>
</template>

<script lang="ts">
import {ref} from "vue";

export default {
  name: 'yuYueMain'
}
</script>

<script lang="ts" setup>
const active = ref(1);
</script>

<style scoped>

</style>
