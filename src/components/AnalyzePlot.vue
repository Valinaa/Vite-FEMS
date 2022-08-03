<!--
 * @GitHub       : https://github.com/Valinaa
 * @Author       : Valinaa 1114854003@qq.com
 * @Date         : 2022-07-10 17:57:15
 * @LastEditors  : Valinaa 1114854003@qq.com
 * @LastEditTime : 2022-08-03 00:33:19
 * @FilePath     : \\vite3\\src\\components\\AnalyzePlot.vue
 * @Description  : 数据分析——echarts绘图
 *
 * WeChat:Wish-Komorebi
 * Copyright (c) 2022 by Valinaa 1114854003@qq.com, All Rights Reserved.
-->

<template>
    <div>
        <el-upload
            action=""
            :on-change="uploadLocalFile"
            :auto-upload="false"
            :limit="1">
            <el-button type="primary">上传文件</el-button>
        </el-upload>
    </div>
</template>
<script lang="ts" setup>
// 注册必须的组件
import { CanvasRenderer } from 'echarts/renderers'

echarts.use([
    CanvasRenderer,
    TitleComponent,
    TooltipComponent,
    GridComponent,
    DatasetComponent,
    TransformComponent,
    BoxplotChart,
    ScatterChart,
    LabelLayout,
    UniversalTransition,
])

/**
 ** 获取上传的文件对象，并使用xlsx解析出workbook对象
 */
const uploadLocalFile = (file: { raw: Blob }) => {
    console.log(file)
    const reader = new FileReader()
    reader.onload = (e) => {
        const data = e.target.result
        const workbook = XLSX.read(data, { type: 'binary' })
        console.log(workbook)
        // 处理excel文件
        handle(workbook)
    }
    reader.readAsBinaryString(file.raw)
}
/**
 ** 提取workbook对象中某些工作表的数据
 */
const handle = (workbook) => {
    const totalData = XLSX.utils.sheet_to_json(
        workbook.Sheets[workbook.SheetNames[1]]
    )
    if (totalData.length > 0) {
        console.log(totalData)
        makePlots(totalData)
    } else {
        alert('数据上传有误！')
    }
}

const makePlots = (data) => {
    const charts = echarts.init(document.getElementById('demo'))
    /** @type EChartsOption */
    charts.setOption({
        title: [
            {
                text: 'Michelson-Morley Experiment',
                left: 'center',
            },

            {
                text: 'upper: Q3 + 1.5 * IQR\nr: Q1 - 1.5 * IQR',
                borderColor: '#999',
                borderWidth: 1,
                textStyle: {
                    fontWeight: 'normal',
                    fontSize: 14,
                    lineHeight: 20,
                },
                left: '10%',
                top: '90%',
            },
        ],
        dataset: [
            {
                source: [
                    [
                        850, 740, 900, 1070, 930, 850, 950, 980, 980, 880, 1000,
                        980, 930, 650, 760, 810, 1000, 1000, 960, 960,
                    ],
                    [
                        960, 940, 960, 940, 880, 800, 850, 880, 900, 840, 830,
                        790, 810, 880, 880, 830, 800, 790, 760, 800,
                    ],
                    [
                        880, 880, 880, 860, 720, 720, 620, 860, 970, 950, 880,
                        910, 850, 870, 840, 840, 850, 840, 840, 840,
                    ],
                    [
                        890, 810, 810, 820, 800, 770, 760, 740, 750, 760, 910,
                        920, 890, 860, 880, 720, 840, 850, 850, 780,
                    ],
                    [
                        890, 840, 780, 810, 760, 810, 790, 810, 820, 850, 870,
                        870, 810, 740, 810, 940, 950, 800, 810, 870,
                    ],
                ],
            },
            {
                transform: {
                    type: 'boxplot',
                    config: { itemNameFormatter: 'expr {value}' },
                },
            },
            {
                fromDatasetIndex: 1,
                fromTransformResult: 1,
            },
        ],
        tooltip: {
            trigger: 'item',
            axisPointer: {
                type: 'shadow',
            },
        },
        grid: {
            left: '10%',
            right: '10%',
            bottom: '15%',
        },
        xAxis: {
            type: 'category',
            boundaryGap: true,
            nameGap: 30,
            splitArea: {
                show: false,
            },
            splitLine: {
                show: false,
            },
        },
        yAxis: {
            type: 'value',
            name: 'km/s -299,000',
            nameLocation: 'end',
            splitArea: {
                show: true,
            },
        },
        series: [
            {
                name: 'boxplot',
                type: 'boxplot',
                datasetIndex: 1,
            },
            {
                name: 'outlier',
                type: 'scatter',
                datasetIndex: 2,
            },
        ],
    })
}
</script>
<style>
#demo {
    width: 500px;
    height: 600px;
    margin-left: 10px;
}
</style>
