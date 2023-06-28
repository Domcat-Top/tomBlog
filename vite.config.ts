import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import path from 'path'

export default defineConfig(() => {
    return {
        // 关闭校验
        lintOnSave: false,
        plugins: [
            vue(),
        ],
        resolve: {
            alias: {
                '@': path.resolve('./src'), // 相对路径别名配置，使用 @ 代替 src
            },
        },
        // scss 全局变量的一个配置---指定了全局的样式，颜色指定在了index.scss中
        css: {
            preprocessorOptions: {
                scss: {
                    javascriptEnabled: true,
                    additionalData: '@import "./src/style/css/variable.scss";',
                },
            },
        },
    }
})
