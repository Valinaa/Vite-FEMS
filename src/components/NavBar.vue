<!--
 * @GitHub       : https://github.com/Valinaa
 * @Author       : Valinaa
 * @Date         : 2022-07-28 18:31:56
 * @LastEditors  : Valinaa 1114854003@qq.com
 * @LastEditTime : 2022-07-29 13:31:42
 * @FilePath     : \\PythonProject\\vite3\\src\\components\\NavBar.vue
 * @Description  : 导航栏组件
 *
 * WeChat:Wish-Komorebi
 * Copyright (c) 2022 by Valinaa 1114854003@qq.com, All Rights Reserved.
-->
<template>
    <el-menu
        class="font-mono font-bold"
        mode="horizontal"
        :ellipsis="ellipsis">
        <el-menu-item index="1">
            <i style="font-size: 30px; color: red">
                <IHeroiconsSolidFire />
            </i>
        </el-menu-item>
        <el-menu-item
            index="2"
            disabled>
            <IBiGift />
            功能待扩展...
        </el-menu-item>

        <div class="flex-grow" />
        <el-sub-menu index="3">
            <template #title>
                <IAkarIconsPerson />
                姓名
            </template>
            <el-menu-item index="3-1">首页</el-menu-item>
            <el-menu-item index="3-2">个人信息</el-menu-item>
            <el-divider>
                <IEpStarFilled />
            </el-divider>
        </el-sub-menu>
    </el-menu>
    <el-backtop />
</template>
<script lang="ts" setup>
const ellipsis = ref(false)
</script>
