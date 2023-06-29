import { createApp } from 'vue'
import App from './App.vue'


// 全局样式统一管理
import "@/style/css/index.scss";
// 引入hover.css--悬停
import 'hover.css';
// 引入全局icon
import '@/assets/icons/iconfont.js';

// 导入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 引入路由
import route from '@/router/index.ts';

// 引入路由跳转的权限文件
import '@/permission.ts';



const app = createApp(App)

// 安装element-plus插件
app.use(ElementPlus);

app.use(route);

app.mount('#app')
