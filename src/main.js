import {createApp} from 'vue'
import App from './App.vue'

import './style.css'
import '../src/iconfont/iconfont.css'
import {ConfigProvider} from 'vant';

//引入echarts
import * as echarts from 'echarts';

const app = createApp(App);
app.use(ConfigProvider);
app.config.globalProperties.$echarts = echarts;

app.mount('#app')
