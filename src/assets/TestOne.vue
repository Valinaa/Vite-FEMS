<script lang="ts" setup>
import { FormInstance } from 'element-plus'

interface Axios {
    method: string
    headers: { 'content-type': string }
    data: unknown
    url: string
}
const submitRegister = async (formEl: FormInstance | undefined) => {
    if (!formEl) {
        return
        // 报错信息
    }
    await formEl.validate(async (valid) => {
        if (valid) {
            const registerAxios: Axios = {
                method: 'POST',
                headers: {
                    'content-type': 'application/x-www-form-urlencoded',
                },
                data: 'qs.stringify(registerData)',
                url: 'user',
            }
            await axios(registerAxios).catch((error) => {
                console.log('')
            })
        }
    })
}
</script>
