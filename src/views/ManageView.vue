<!--
 * @GitHub       : https://github.com/Valinaa
 * @Author       : Valinaa
 * @Date         : 2022-07-29 00:27:21
 * @LastEditors  : Valinaa 1114854003@qq.com
 * @LastEditTime : 2022-07-30 01:58:02
 * @FilePath     : \\PythonProject\\vite3\\src\\views\\ManageView.vue
 * @Description  : 功能页面组件
 *
 * WeChat:Wish-Komorebi
 * Copyright (c) 2022 by Valinaa 1114854003@qq.com, All Rights Reserved.
-->

<template>
    <el-config-provider :locale="locale">
        <el-container>
            <el-header>
                <NavBar></NavBar>
            </el-header>
            <el-container>
                <el-aside>
                    <SideBar></SideBar>
                </el-aside>
                <el-container>
                    <el-main>
                        <Authentication></Authentication>
                    </el-main>
                    <el-footer>
                        <Footer></Footer>
                    </el-footer>
                </el-container>
            </el-container>
        </el-container>
    </el-config-provider>
</template>

<script setup lang="ts">
import zhCn from 'element-plus/lib/locale/lang/zh-cn'

const locale = ref(zhCn)
</script>
