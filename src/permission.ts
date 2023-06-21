import router from "@/router";
import nprogress from 'nprogress'
// 引入进度条样式
import 'nprogress/nprogress.css'
// 关闭进度条加载时候的小圆球，也可以不关
nprogress.configure({ showSpinner: false })


// 路由鉴权文件，判断权限还有携带参数的
router.beforeEach((to, from, next) => {
    nprogress.start();
    next();
});
router.afterEach(() => {
    nprogress.done();
});
