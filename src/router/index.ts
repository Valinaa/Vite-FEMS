/*
 * @GitHub       : https://github.com/Valinaa
 * @Author       : Valinaa 1114854003@qq.com
 * @Date         : 2022-06-25 00:16:43
 * @LastEditors  : Valinaa 1114854003@qq.com
 * @LastEditTime : 2022-07-29 00:52:11
 * @FilePath     : \\PythonProject\\vite3\\src\\router\\index.ts
 * @Description  : 路由核心配置文件
 *
 * WeChat:Wish-Komorebi
 * Copyright (c) 2022 by Valinaa 1114854003@qq.com, All Rights Reserved.
 */

import { createRouter, createWebHistory } from 'vue-router';
const ActiveTable = () => import('@/components/ActiveTable.vue');
const testTable = () => import('@/components/DataTable.vue');
const routes = [
    {
        path: '/',
        name: 'home',
        redirect: '/index',
    },
    {
        path: '/stuTable',
        name: 'Table',
        component: ActiveTable,
    },
    {
        path: '/testTable',
        name: 'testTable',
        component: testTable,
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
