<template>
    <div>
        <el-form
            ref="loginFormRef"
            :model="loginForm"
            status-icon
            :rules="rules"
            label-width="120px"
            class="demo-ruleForm"
        >
            <el-form-item label="账号" prop="checkUsername">
                <el-input v-model="loginForm.username" />
            </el-form-item>
            <el-form-item label="密码" prop="checkPassword">
                <el-input v-model="loginForm.password" type="password" />
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="handleLogin(loginFormRef)">Submit</el-button>
                <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import type { FormInstance } from 'element-plus';
import { rules, LoginData } from './login';

//#region 登录
const loginFormRef = ref<FormInstance>();

var loginForm = reactive(new LoginData());

const handleLogin = (val: FormInstance) => {
    console.log(loginForm);
};
//#endregion
</script>
<style lang="scss" scope></style>
