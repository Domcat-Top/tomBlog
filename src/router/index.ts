// 通过vue-router插件实现模板路由配置
import { createRouter, createWebHashHistory } from 'vue-router'
import { constantRoute } from './routers'

// 创建路由器
let router = createRouter({
  // 路由模式
  history: createWebHashHistory(),
  routes: constantRoute,
})

// 对外暴露
export default router
