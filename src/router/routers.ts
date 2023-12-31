// 对外暴露配置路由（常量路由）
export const constantRoute = [
    {
        path: '/layout999',
        component: () => import('@/layout/index.vue'),
        name: 'layout',
        // 这儿我估计会写一大堆的孩子
        children: [
            {
                path: '/',
                component: () => import('@/views/Home/index.vue'),
                name: '/',
            },
            // 忘记多个语法的写法了，只能这样写了
            {
                path: '/home',
                component: () => import('@/views/Home/index.vue'),
                name: 'home',
            },
            // 分类
            {
                path: '/classify',
                component: () => import('@/views/Classify/index.vue'),
                name: 'classify',
            },
            // 标签
            {
                path: '/label',
                component: () => import('@/views/Label/index.vue'),
                name: 'label',
            },
            // 留言板
            {
                path: '/message',
                component: () => import('@/views/Message/index.vue'),
                name: 'message',
            },
            // 归档--叫做time了，按照时间顺序进行的排序
            {
                path: '/time',
                component: () => import('@/views/Time/index.vue'),
                name: 'time',
            },
            // 关于我
            {
                path: '/about',
                component: () => import('@/views/About/index.vue'),
                name: 'about',
            },

        ],
    },
    // 404
    {
        path: '/404',
        component: () => import('@/views/404/index.vue'),
        name: '404',
        meta: {
            title: '404',
        },
    },
    // 匹配路由，如果是错误的什么的，都跳转到404
    {
        path: '/:pathMatch(.*)*',
        redirect: '404',
        name: 'Any',
        meta: {
            title: '404',
        },
    },
    // 测试页
    {
        path: '/test',
        component: () => import('@/views/Test/index.vue'),
        name: 'test',
    },
]
