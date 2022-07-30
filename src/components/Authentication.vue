<!--
 * @GitHub       : https://github.com/Valinaa
 * @Author       : Valinaa 1114854003@qq.com
 * @Date         : 2022-07-17 23:24:46
 * @LastEditors  : Valinaa 1114854003@qq.com
 * @LastEditTime : 2022-07-30 23:34:32
 * @FilePath     : \\PythonProject\\vite3\\src\\components\\Authentication.vue
 * @Description  : 注册、登录组件
 *
 * WeChat:Wish-Komorebi
 * Copyright (c) 2022 by Valinaa 1114854003@qq.com, All Rights Reserved.
-->

<template>
    <!-- eslint-disable -->
    <div class="container mx-auto">
        <transition mode="out-in">
            <div
                v-if="showLogin"
                class="box-content mx-auto w-80 h-2/6 bg-opacity-20 bg-stone-800"
            >
                <div
                    class="font-bold font-theme"
                    style="font-family: '楷体', serif"
                >
                    消防设备管理系统
                </div>
                <el-form
                    ref="loginFormRef"
                    :model="loginForm"
                    :rules="rules"
                    label-width="auto"
                    hide-required-asterisk
                    scroll-to-error
                    status-icon
                >
                    <el-radio-group
                        v-model="loginForm.authSwitch"
                        class="auth-switch"
                        size="large"
                        @change="authChange"
                    >
                        <el-radio-button label="Login">登录 </el-radio-button>
                        <el-radio-button label="Register">注册
                        </el-radio-button>
                    </el-radio-group>
                    <el-form-item
                        label="用户名"
                        prop="username"
                    >
                        <el-input
                            v-model="loginForm.username"
                            maxlength="15"
                            placeholder="请输入您的用户名"
                            show-word-limit
                            clearable
                        />
                    </el-form-item>
                    <el-form-item
                        label="密码"
                        prop="password"
                    >
                        <el-input
                            v-model="loginForm.password"
                            type="password"
                            placeholder="请输入您的密码"
                            show-password
                        />
                    </el-form-item>
                    <el-form-item>
                        <span style="
                                margin-right: 10px;
                                margin-left: 40px;
                                color: ghostwhite;
                            ">自动登录</span>
                        <el-switch
                            v-model="loginForm.rememberMe"
                            class="switch"
                            inline-prompt
                            active-text="是"
                            inactive-text="否"
                        />
                    </el-form-item>
                    <el-form-item>
                        <el-button
                            class="bt-submit"
                            type="success"
                            size="large"
                            @click="submitLogin(loginFormRef)"
                        >登录</el-button>
                        <el-button
                            class="bt-reset"
                            type="danger"
                            size="large"
                            @click="resetForm(loginFormRef)"
                        >重置</el-button>
                    </el-form-item>
                </el-form>
            </div>
            <div
                v-else="!showLogin"
                class="box-content mx-auto w-3/12 h-2/6 bg-opacity-20 bg-stone-800"
            >
                <div
                    class="font-bold font-theme"
                    style="font-family: '楷体', serif"
                >
                    消防设备管理系统
                </div>
                <el-form
                    ref="registerFormRef"
                    :model="registerForm"
                    :rules="rules"
                    label-width="auto"
                    hide-required-asterisk
                    scroll-to-error
                    status-icon
                >
                    <el-radio-group
                        v-model="loginForm.authSwitch"
                        class="auth-switch"
                        size="large"
                        @change="authChange"
                    >
                        <el-radio-button label="Login">登录 </el-radio-button>
                        <el-radio-button label="Register">注册
                        </el-radio-button>
                    </el-radio-group>
                    <el-form-item
                        label="职位"
                        prop="authority"
                    >
                        <el-select
                            v-model="registerForm.authority"
                            placeholder="请选择你的身份"
                        >
                            <el-option-group
                                v-for="group in selectOptions"
                                :key="group.label"
                                :label="group.label"
                            >
                                <el-option
                                    v-for="item in group.options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                />
                            </el-option-group>
                        </el-select>
                    </el-form-item>
                    <el-form-item
                        label="用户名"
                        prop="username"
                    >
                        <el-input
                            v-model="registerForm.username"
                            maxlength="15"
                            placeholder="请输入您的用户名"
                            show-word-limit
                            clearable
                        />
                    </el-form-item>
                    <el-form-item
                        label="密码"
                        prop="password"
                    >
                        <el-input
                            v-model="registerForm.password"
                            type="password"
                            placeholder="请输入您的密码"
                            show-password
                        />
                    </el-form-item>
                    <el-form-item
                        label="姓名"
                        prop="name"
                    >
                        <el-input
                            v-model="registerForm.name"
                            placeholder="请输入您的姓名"
                        />
                    </el-form-item>
                    <el-form-item
                        label="手机号"
                        prop="phoneNumber"
                    >
                        <el-input
                            v-model.number="registerForm.phoneNumber"
                            placeholder="请输入您的联系方式"
                        />
                    </el-form-item>
                    <el-form-item label="性别">
                        <el-radio-group v-model="registerForm.sex">
                            <el-radio label="0">男</el-radio>
                            <el-radio label="1">女</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item
                        label="年龄"
                        prop="age"
                    >
                        <el-input
                            v-model.number="registerForm.age"
                            maxlength="2"
                            placeholder="请输入您的年龄"
                        />
                    </el-form-item>
                    <el-form-item
                        label="邮箱"
                        prop="email"
                    >
                        <el-input
                            v-model="registerForm.email"
                            placeholder="请输入您的邮箱"
                        />
                    </el-form-item>
                    <el-form-item>
                        <el-button
                            class="bt-submit"
                            type="success"
                            size="large"
                            @click="submitRegister(registerFormRef)"
                        >注册</el-button>
                        <el-button
                            class="bt-reset"
                            type="danger"
                            size="large"
                            @click="resetForm(registerFormRef)"
                        >重置</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </transition>
    </div>
</template>
<!-- eslint-enable -->
<script lang="ts" setup>
import { AxiosResponse } from 'axios'
import { FormInstance, FormRules } from 'element-plus'
import qs from 'qs'

const showLogin = ref(true)
/**
 ** 注册与登录表单初始化
 */
const loginFormRef = ref<FormInstance>()
const loginForm = reactive({
    authSwitch: 'Login',
    username: '',
    password: '',
    rememberMe: false,
})
const registerFormRef = ref<FormInstance>()
const registerForm = reactive({
    authority: 'POPULACE',
    username: '',
    password: '',
    name: '',
    phoneNumber: '',
    sex: 0,
    age: '',
    email: '',
})
/**
 ** 控制登录界面与注册界面的切换
 */
const authChange = () => {
    if (loginForm.authSwitch === 'Login') {
        showLogin.value = true
    } else if (loginForm.authSwitch === 'Register') {
        showLogin.value = false
    } else {
        console.log('No Acceptable Value!')
    }
}
const selectOptions = [
    {
        label: '设备检查部门',
        options: [
            {
                value: 'CQO',
                label: '质量总监',
            },
            {
                value: 'CENSOR_1',
                label: '一级检查员',
            },
            {
                value: 'CENSOR_2',
                label: '二级检查员',
            },
        ],
    },
    {
        label: '设备采购部门',
        options: [
            {
                value: 'CPO',
                label: '采购总监',
            },
            {
                value: 'PROCURER',
                label: '采购员',
            },
        ],
    },
    {
        label: '财务部门',
        options: [
            {
                value: 'CFO',
                label: '财务总监',
            },
            {
                value: 'ACCOUNTANT',
                label: '会计员',
            },
        ],
    },
    {
        label: '其他人员',
        options: [
            {
                value: 'ADMIN',
                label: '系统管理员',
            },
            {
                value: 'POPULACE',
                label: '非管理人员',
            },
        ],
    },
]

/**
 ** 年龄格式检验
 */
const checkAge = (
    _rule: unknown,
    value: number,
    callback: (error?: string | Error | undefined) => void
) => {
    if (!value) {
        return callback(new Error('请填写您的年龄！'))
    }
    if (!Number.isInteger(value)) {
        return callback(new Error('只允许为数字！'))
    }
    if (value < 18 || value > 65) {
        return callback(new Error('只允许18-65岁的人群进入管理系统!'))
    }
    return callback()
}

/**
 ** 手机号码格式检验
 */
const checkPhoneNumber = (
    _rule: unknown,
    value: string,
    callback: (error?: string | Error | undefined) => void
) => {
    const reg = /^1[0-9]\d{9}$/
    if (!value) {
        return callback(new Error('请填写您的联系方式！'))
    }
    if (!reg.test(value)) {
        return callback(new Error('手机号码必须为11位数字!'))
    }
    return callback()
}

/**
 ** 邮箱格式检验
 */
const checkEmail = (
    _rule: unknown,
    value: string,
    callback: (error?: string | Error | undefined) => void
) => {
    const reg =
        // eslint-disable-next-line no-useless-escape
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (value && !reg.test(value)) {
        return callback(new Error('邮箱格式错误！'))
    }
    return callback()
}

/**
 ** 无中文检验
 */
const usernameNoChinese = (
    _rule: unknown,
    value: string,
    callback: (error?: string | Error | undefined) => void
) => {
    const reg = /^[^\u4e00-\u9fa5]+$/
    if (!value) {
        return callback(new Error('请填写用户名！'))
    }
    if (!reg.test(value)) {
        return callback(new Error('用户名中不能含有中文！'))
    }
    return callback()
}
const passwordNoChinese = (
    _rule: unknown,
    value: string,
    callback: (error?: string | Error | undefined) => void
) => {
    const reg = /[^\u4e00-\u9fa5]/
    if (!value) {
        return callback(new Error('请填写密码！'))
    }
    if (!reg.test(value)) {
        return callback(new Error('密码中不能含有中文！'))
    }
    return callback()
}

/**
 ** 配置表单验证规则
 */
const rules = reactive<FormRules>({
    authority: [
        { required: true, message: '请选择您的身份！', trigger: 'change' },
    ],
    username: [{ validator: usernameNoChinese, trigger: 'blur' }],
    password: [{ validator: passwordNoChinese, trigger: 'blur' }],
    name: [{ required: true, message: '请填写您的姓名！', trigger: 'blur' }],
    phoneNumber: [{ validator: checkPhoneNumber, trigger: 'blur' }],
    age: [{ validator: checkAge, trigger: 'blur' }],
    email: [{ validator: checkEmail, trigger: 'blur' }],
})

/**
 ** 表单数据封装
 */
const registerData = toRaw(registerForm)
const loginData = toRaw(loginForm)
/**
 ** axios格式构建
 */
interface Axios {
    method: string
    headers: { 'content-type': string }
    data: any
    url: string
}
/**
 ** 注册检验
 */
const submitRegister = (formEl: FormInstance | undefined) => {
    if (!formEl) return '校验失败' // 报错信息
    formEl.validate(async (valid) => {
        if (valid) {
            console.log(`注册内容:${registerData}`)
            const registerAxios: Axios = {
                method: 'POST',
                headers: {
                    'content-type': 'application/x-www-form-urlencoded',
                },
                data: qs.stringify(registerData),
                url: 'user',
            }
            await axios(registerAxios)
                .catch((error) => {
                    console.log(`before Response error:${error}`)
                })
                .then((res) => {
                    if (<AxiosResponse>res) {
                        const response = <AxiosResponse>res
                        console.log(response.data)
                        console.log(response.status)
                        console.log(response.config)
                        console.log(response.headers)
                        console.log(response.statusText)
                        return 'submit Success'
                    }
                    console.log('response is empty')
                    return 'submit with no response'
                })
                .catch((error) => {
                    console.log(error)
                })
        } else {
            console.log('error submit!')
        }
    })
}

/**
 ** 登录检验
 */
const submitLogin = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    void formEl.validate((valid) => {
        if (valid) {
            console.log(`登录内容:${loginData}`)
            const loginAxios: Axios = {
                method: 'POST',
                headers: {
                    'content-type': 'application/x-www-form-urlencoded',
                },
                data: qs.stringify(loginData),
                url: 'loginCheck',
            }
            axios(loginAxios)
                .then((response) => {
                    console.log(response.data)
                    console.log(response.status)
                    console.log(response.config)
                    console.log(response.headers)
                    console.log(response.statusText)
                })
                .catch((error) => {
                    console.log(error)
                })
        } else {
            console.log('error submit!')
        }
    })
}
/**
 ** 表单重置
 */
const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
}
</script>
<!-- eslint-disable -->
<!-- prettier-ignore -->
<style scoped>
.switch {
    --el-switch-off-color: #ff4949;
    --el-switch-on-color: #13ce66;
}

.auth-switch {
    width: 320px;
    margin-top: 0;
    margin-bottom: 30px;
}

.bt-submit {
    margin-bottom: 20px;
    margin-left: 20px;
    }
    
    .bt-reset {
        margin-bottom: 18px;
    }
    
    .font-theme {
        padding-top: 15px;
        margin-bottom: 20px;
        font-size: larger;
        color: rgb(217 227 238);
    }
    
    .v-enter-active {
        transition: all 0.3s ease;
    }
    
    .v-leave-active {
        transition: all 0.6s cubic-bezier(1, 0.5, 0.8, 1);
}

.v-enter,
.v-leave-active {
    opacity: 0;
    transform: translateX(50px);
}
</style>
<style>
#bg-img {
    width: 100%;
    height: 100%;
    background: url('/static/Img/1.jpg');
    background-size: 100% 100%;
}
</style>
