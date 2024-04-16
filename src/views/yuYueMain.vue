<template>
  <div class="homepage">
    <div class="step">
      <van-steps :active="active" active-color="#252527" active-icon="success">
        <van-step>
          <i class="iconfont icon-number-one"></i>
          验证信息
          <van-icon name="arrow"/>
        </van-step>
        <van-step>
          <i class="iconfont icon-number-two"></i>
          选择时间
          <van-icon name="arrow"/>
        </van-step>
        <van-step>
          <i class="iconfont icon-numberthree"></i>
          预约完成
        </van-step>
      </van-steps>
    </div>
    <div class="field">
      <van-cell-group inset>
        <van-field
            v-model="username"
            label="《处理通知书》编号"
            label-align="top"
            placeholder="请输入通知书编号"
            required
        />
        <van-field
            v-model="phone"
            label="《处理通知书》通知对象名称"
            label-align="top"
            placeholder="请输入通知对象名称"
        />
      </van-cell-group>
    </div>
    <div class="numberPlate">
      <h5>车牌号</h5>
      <div class="numberPlateFlex">
        <a-cascader v-model:value="value" :options="options" placeholder=""/>
        <a-input v-model:value="numberPlate" placeholder="请输入车牌号"/>
        <a-cascader v-model:value="value" :options="options" placeholder=""/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {ref} from "vue";

export default {
  name: 'yuYueMain'
}
</script>

<script lang="ts" setup>
const active = ref(0);

const username = ref('')
const phone = ref()

import type {CascaderProps} from 'ant-design-vue';

const options: CascaderProps['options'] = [
  {
    value: '皖',
    label: '皖',

  },
  {
    value: '苏',
    label: '苏',

  },
];
const value = ref<string[]>([]);
const numberPlate = ref<string[]>([]);
</script>

<style scoped>
.homepage {
  margin: 15px;
}

:deep .van-step--horizontal .van-step__circle-container {
  display: none;
}

:deep .van-step--horizontal .van-step__line {
  height: 0;
}

:deep .van-steps--horizontal .van-steps__items {
  padding-bottom: 0;
}

:deep .van-cell-group--inset {
  margin: 0 -15px;
}

:deep .van-field__body {
  border: 1px solid #bbbbbb;
  padding: 5px;
}

:deep .van-field__control {
  text-align: center;
}

:where(.css-dev-only-do-not-override-1hsjdkk).ant-cascader {
  width: 81px;
}

:where(.css-dev-only-do-not-override-1hsjdkk).ant-input {
  width: 45%;
  margin: 0 15px;
}

.numberPlate {
  display: flex;
  flex-direction: column;

  h5 {
    font-size: 16px;
    font-weight: normal;
    margin: 10px 0;
    padding: 0;
  }
}
</style>
