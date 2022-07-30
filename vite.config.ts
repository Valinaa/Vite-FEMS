/*
 * @GitHub       : https://github.com/Valinaa
 * @Author       : Valinaa
 * @Date         : 2022-07-16 16:49:43
 * @LastEditors  : Valinaa 1114854003@qq.com
 * @LastEditTime : 2022-07-31 00:29:45
 * @FilePath     : \\PythonProject\\vite3\\vite.config.ts
 * @Description  : vite配置文件
 *
 * WeChat:Wish-Komorebi
 * Copyright (c) 2022 by Valinaa 1114854003@qq.com, All Rights Reserved.
 */

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslint from 'vite-plugin-eslint'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'
import Icons from 'unplugin-icons/vite'
import {
    createStyleImportPlugin,
    ElementPlusResolve,
} from 'vite-plugin-style-import'
import IconsResolver from 'unplugin-icons/resolver'
import { resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        eslint(),
        Components({
            dts: true,
            resolvers: [ElementPlusResolver(), IconsResolver()],
        }),
        AutoImport({
            imports: [
                'vue',
                'vue-router',
                '@vueuse/core',
                {
                    pinia: ['createPinia', 'defineStore', 'storeToRefs'],
                    axios: [
                        ['default', 'axios'], // import { default as axios } from 'axios',
                    ],
                    'echarts/core': [['*', 'echarts']],
                    'echarts/charts': [
                        'BarChart',
                        'BoxplotChart',
                        'ScatterChart',
                        'PieChart',
                    ],
                    'echarts/renderers': ['CanvasRenderer', 'SVGRenderer'],
                    'echarts/features': ['LabelLayout', 'UniversalTransition'],
                    // 引入提示框，标题，直角坐标系，数据集，内置数据转换器等组件
                    'echarts/components': [
                        'DatasetComponent',
                        'DataZoomComponent',
                        'GridComponent',
                        'LegendComponent',
                        'MarkLineComponent',
                        'TitleComponent',
                        'ToolboxComponent',
                        'TooltipComponent',
                        'TransformComponent',
                    ],
                    xlsx: [['*', 'XLSX']],
                },
            ],
            dts: true,
            resolvers: [ElementPlusResolver()],
            eslintrc: {
                enabled: true,
            },
        }),
        Icons({ compiler: 'vue3', autoInstall: true }),
        createStyleImportPlugin({ resolves: [ElementPlusResolve()] }),
    ],
    server: {
        port: 3000,
        open: true,
        proxy: {
            '/fire': {
                target: 'http://localhost:8081',
                changeOrigin: true, // 接口跨域
                // proxy websockets
                // ws: true
                // 重写url
                rewrite: (path) => path.replace(/^\/fire/, ''),
            },
        },
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'), // 路径别名
        },
    },
})
