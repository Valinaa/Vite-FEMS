<!--
 * @GitHub       : https://github.com/Valinaa
 * @Author       : Valinaa 1114854003@qq.com
 * @Date         : 2022-07-28 13:20:16
 * @LastEditors  : Valinaa 1114854003@qq.com
 * @LastEditTime : 2022-08-03 00:21:14
 * @FilePath     : \\vite3\\src\\components\\SideBar.vue
 * @Description  : 侧边栏组件
 *
 * WeChat:Wish-Komorebi
 * Copyright (c) 2022 by Valinaa 1114854003@qq.com, All Rights Reserved.
-->

<template>
    <el-menu
        class="side-bar"
        default-active="mainView"
        :collapse="Collapse"
        @mouseover="goCollapse"
        @click="goCollapse"
        @mouseleave="leaveCollapse">
        <el-menu-item index="mainView">
            <IFluentHome20Regular />
            <span>主页</span>
        </el-menu-item>
        <el-sub-menu index="1">
            <template #title>
                <IFluentHome20Regular />
                <span>Navigator One</span>
            </template>
            <el-menu-item-group title="第一组">
                <el-menu-item index="1-1">item one</el-menu-item>
                <el-menu-item index="1-2">item one</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="第二组">
                <el-menu-item index="1-3">item three</el-menu-item>
            </el-menu-item-group>
            <el-sub-menu index="1-4">
                <template #title>item four</template>
                <el-menu-item index="1-4-1">item one</el-menu-item>
            </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="2">
            <IFluentHome20Regular />
            <span>Navigator Two</span>
        </el-menu-item>
        <el-menu-item
            index="3"
            disabled>
            <IFluentHome20Regular />
            <span>Navigator Three</span>
        </el-menu-item>
        <el-menu-item index="4">
            <IFluentHome20Regular />
            <span>Navigator Four</span>
        </el-menu-item>
    </el-menu>
</template>
<script lang="ts" setup>
const Collapse = ref(true)
const goCollapse = () => {
    Collapse.value = false
}
const leaveCollapse = () => {
    Collapse.value = true
}
</script>
<style scoped>
/* stylelint-disable-next-line selector-class-pattern */
.el-menu--collapse {
    height: 100vh;
}

/* stylelint-disable-next-line selector-class-pattern */
.side-bar:not(.el-menu--collapse) {
    width: 200px;
    height: 100vh;
    min-height: 400px;
}
</style>
