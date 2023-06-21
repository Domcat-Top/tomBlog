import { createApp } from 'vue'
import App from './App.vue'

// 重置全局H5样式
import '@/style/css/reset.css';
// 引入hover.css
import 'hover.css';
// 引入全局icon
import '@/assets/icons/iconfont.js';

// 引入路由
import route from '@/router/index.ts';

// 引入路由跳转的权限文件
import '@/permission.ts';


const app = createApp(App)

app.use(route);

app.mount('#app')
