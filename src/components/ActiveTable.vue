<!--
 * @GitHub       : https://github.com/Valinaa
 * @Author       : Valinaa 1114854003@qq.com
 * @Date         : 2022-07-16 17:05:56
 * @LastEditors  : Valinaa 1114854003@qq.com
 * @LastEditTime : 2022-07-16 17:06:09
 * @FilePath     : \\PythonProject\\vite3\\src\\components\\ActiveTable.vue
 * @Description  : 预执行动态表格
 *
 * WeChat:Wish-Komorebi
 * Copyright (c) 2022 by Valinaa 1114854003@qq.com, All Rights Reserved.
-->

<template>
    <div>
        <h2>Vue3 + Element plus 动态表格</h2>
        <el-table
            :data="tableData.slice((currentPage - 1) * pageSize, currentPage * pageSize)"
            style="width: 100%"
        >
            <el-table-column
                :prop="index"
                :label="item"
                v-for="(item, index) in tableHeader"
                :key="index"
            >
            </el-table-column>
        </el-table>
        <el-pagination
            class="justify-center"
            style="margin-top: 20px;margin-bottom: 10px"
            v-model:current-page="currentPage"
            :page-sizes="[2, 5, 10, 20, 30, 50]"
            v-model:page-size="pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="tableData.length"
            background
        >
        </el-pagination>
    </div>
</template>
<script lang="ts" setup>
const currentPage = ref(1)
const pageSize = ref(5)
const tableHeader = {
    name: "姓名",
    birth: "生日",
    address: "地址",
    age: "年龄",
    phone: "电话",
}
const tableData = [
    {
        name: '张三',
        address: '上海市普陀区金沙江路 1518 弄',
        birth: '2016-05-02',
        age: 18,
        phone: "12345678910",
    }, {
        name: '李四',
        birth: '2016-05-04',
        address: '上海市普陀区金沙江路 1517 弄',
        age: 19,
        phone: "12345678911",
    }, {
        name: '王五',
        birth: '2016-05-01',
        address: '上海市普陀区金沙江路 1519 弄',
        age: 20,
        phone: "12345678912",
    }, {
        name: '赵六',
        birth: '2016-05-03',
        address: '上海市普陀区金沙江路 1516 弄',
        age: 21,
        phone: "12345678913",
    },
    {
        name: '张三',
        address: '上海市普陀区金沙江路 1518 弄',
        birth: '2016-05-02',
        age: 18,
        phone: "12345678910",
    }, {
        name: '李四',
        birth: '2016-05-04',
        address: '上海市普陀区金沙江路 1517 弄',
        age: 19,
        phone: "12345678911",
    }, {
        name: '王五',
        birth: '2016-05-01',
        address: '上海市普陀区金沙江路 1519 弄',
        age: 20,
        phone: "12345678912",
    }, {
        name: '赵六',
        birth: '2016-05-03',
        address: '上海市普陀区金沙江路 1516 弄',
        age: 21,
        phone: "12345678913",
    },
    {
        name: '张三',
        address: '上海市普陀区金沙江路 1518 弄',
        birth: '2016-05-02',
        age: 18,
        phone: "12345678910",
    }, {
        name: '李四',
        birth: '2016-05-04',
        address: '上海市普陀区金沙江路 1517 弄',
        age: 19,
        phone: "12345678911",
    }, {
        name: '王五',
        birth: '2016-05-01',
        address: '上海市普陀区金沙江路 1519 弄',
        age: 20,
        phone: "12345678912",
    }, {
        name: '赵六',
        birth: '2016-05-03',
        address: '上海市普陀区金沙江路 1516 弄',
        age: 21,
        phone: "12345678913",
    },
    {
        name: '张三',
        address: '上海市普陀区金沙江路 1518 弄',
        birth: '2016-05-02',
        age: 18,
        phone: "12345678910",
    }, {
        name: '李四',
        birth: '2016-05-04',
        address: '上海市普陀区金沙江路 1517 弄',
        age: 19,
        phone: "12345678911",
    }, {
        name: '王五',
        birth: '2016-05-01',
        address: '上海市普陀区金沙江路 1519 弄',
        age: 20,
        phone: "12345678912",
    }, {
        name: '赵六',
        birth: '2016-05-03',
        address: '上海市普陀区金沙江路 1516 弄',
        age: 21,
        phone: "12345678913",
    },
    {
        name: '张三',
        address: '上海市普陀区金沙江路 1518 弄',
        birth: '2016-05-02',
        age: 18,
        phone: "12345678910",
    }, {
        name: '李四',
        birth: '2016-05-04',
        address: '上海市普陀区金沙江路 1517 弄',
        age: 19,
        phone: "12345678911",
    }, {
        name: '王五',
        birth: '2016-05-01',
        address: '上海市普陀区金沙江路 1519 弄',
        age: 20,
        phone: "12345678912",
    }, {
        name: '赵六',
        birth: '2016-05-03',
        address: '上海市普陀区金沙江路 1516 弄',
        age: 21,
        phone: "12345678913",
    }
]
</script>