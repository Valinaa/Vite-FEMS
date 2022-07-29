<template>

  <el-table
    :data="tableData.slice((currentPage - 1) * pageSize, currentPage * pageSize)"
    style="width: 100%"
    border
    stripe
  >
    <el-table-column
      align="center"
      prop="number"
      label="学号(编号)"
      sortable
    />
    <el-table-column
      align="center"
      prop="name"
      label="姓名"
    />
    <el-table-column
      align="center"
      prop="age"
      label="年龄"
      width="180"
      sortable
    />
    <el-table-column
      align="center"
      prop="sex"
      label="性别"
      width="180"
    />
    <el-table-column
      align="center"
      prop="subject"
      label="所学专业"
      width="180"
      sortable
    />
    <el-table-column
      align="center"
      label="操作"
      width="200"
    >
      <el-row class="mb-4">
        <el-button
          type="success"
          @click="dialogVisible = true"
        >
          <IEpEdit />修改
        </el-button>
        <IBiActivity style="color: rgb(215 111 15)" />
        <el-button
          type="danger"
          @click="open"
        >
          <IEpDeleteFilled />删除
        </el-button>
      </el-row>
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
  <el-dialog
    v-model="dialogVisible"
    width="30%"
    draggable
    center
    destroy-on-close
  >
    <template #header>
      <div class="my-header">
        <h4 class="font-black">信息修改确认</h4>
      </div>
    </template>
    <span>创建表单</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button
          type="primary"
          @click="dialogVisible = false"
        >确认修改</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
const dialogVisible = ref(false)
const currentPage = ref(1)
const pageSize = ref(5)
const open = () => {
  ElMessageBox.confirm(
    '将永久删除此行信息，是否继续？',
    '警告',
    {
      confirmButtonText: '确认删除',
      cancelButtonText: '还是算了吧',
      type: 'warning',
      center: true,
      draggable: true
    }
  )
    .then(() => {
      ElMessage({
        type: 'success',
        message: '已删除',
        showClose: true,
        center: true,
      })
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '操作已取消',
        showClose: true,
        center: true,
      })
    })
}
interface Student {
  number: Number,
  name: String,
  age: Number,
  sex: String,
  subject: String,
}
const tableData: Student[] = [
  {
    number: 20002605,
    name: "陈康",
    age: 19,
    sex: "男",
    subject: "信息管理与信息系统",
  },
  {
    number: 19002466,
    name: "伟伟",
    age: 22,
    sex: "女",
    subject: "人力资源管理哦",
  },
  {
    number: 19002444,
    name: "陈伟",
    age: 21,
    sex: "女",
    subject: "人力资源管理呀",
  },
  {
    number: 19002000,
    name: "刘晨",
    age: 21,
    sex: "女",
    subject: "人力资源管理啦",
  },
];
</script>
<style>
.my-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
