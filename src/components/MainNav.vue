<!--
 * @GitHub       : https://github.com/Valinaa
 * @Author       : Valinaa 1114854003@qq.com
 * @Date         : 2022-07-16 17:05:56
 * @LastEditors  : Valinaa 1114854003@qq.com
 * @LastEditTime : 2022-08-03 00:23:46
 * @FilePath     : \\vite3\\src\\components\\MainNav.vue
 * @Description  : 上方导航栏
 *
 * WeChat:Wish-Komorebi
 * Copyright (c) 2022 by Valinaa 1114854003@qq.com, All Rights Reserved.
-->

<template>
    <el-menu
        :default-active="activeIndex"
        class="el-menu font-mono font-bold"
        mode="horizontal"
        :ellipsis="false"
        background-color="rgb(186 230 253 / var(--tw-bg-opacity))"
        text-color="rgb(249 115 22 / var(--tw-text-opacity))"
        active-text-color="rgb(99 102 241)">
        <el-menu-item
            index="1"
            class="font-mono font-bold">
            <IBiBuilding />
            <span style="font-size: 20px">GMIS</span>
        </el-menu-item>
        <el-menu-item index="5">
            <IBiHouseHeart />
            首页
        </el-menu-item>
        <el-menu-item index="6">
            <IBiStack />
            题库
        </el-menu-item>
        <el-menu-item index="7">
            <IBiSafeFill />
            专业考试添加
        </el-menu-item>
        <el-menu-item index="8">
            <IBiStars />
            成绩查询
        </el-menu-item>
        <el-menu-item
            index="9"
            @click="toStuTable">
            <IBiFilePersonFill />
            学生信息
        </el-menu-item>
        <el-menu-item
            index="10"
            @click="toTestTable">
            <IBiPersonBadge />
            教师信息
        </el-menu-item>
        <el-menu-item index="11">
            <IBiPersonWorkspace />
            已注册用户信息
        </el-menu-item>
        <el-menu-item index="12">
            <IBiClipboard2CheckFill />
            考试信息
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
            <el-menu-item index="3-3">密码修改</el-menu-item>
            <el-divider>
                <IEpStarFilled />
            </el-divider>
        </el-sub-menu>
    </el-menu>
    <el-backtop />
</template>
<script lang="ts" setup>
const activeIndex = ref('1')
const router = useRouter()
const toStuTable = async () => {
    await router.replace('/stuTable')
}
const toTestTable = async () => {
    await router.replace('/testTable')
}
</script>
<style scoped>
.el-menu {
    --tw-text-opacity: 1;
    --tw-bg-opacity: 1;
}
</style>
