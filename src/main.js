import {createApp} from 'vue'
import App from './App.vue'

import './style.css'
import '../src/iconfont/iconfont.css'
import {ConfigProvider} from 'vant';

const app = createApp(App);
app.use(ConfigProvider);
app.mount('#app')
