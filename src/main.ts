/*
 * @GitHub       : https://github.com/Valinaa
 * @Author       : Valinaa
 * @Date         : 2022-07-16 16:49:43
 * @LastEditors  : Valinaa 1114854003@qq.com
 * @LastEditTime : 2022-08-02 23:35:48
 * @FilePath     : \\vite3\\src\\main.ts
 * @Description  :
 *
 * WeChat:Wish-Komorebi
 * Copyright (c) 2022 by Valinaa 1114854003@qq.com, All Rights Reserved.
 */

import { createApp } from 'vue'
import '@/index.css'
import VueAxios from 'vue-axios'
import { createPinia } from 'pinia'
// eslint-disable-next-line import/default
import App from '@/App.vue'
import '@/assets/style.scss'
import router from '@/router'

axios.defaults.baseURL = '/fire'

createApp(App).use(router, axios, VueAxios, createPinia()).mount('#app')
