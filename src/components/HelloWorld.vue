<template>
    <div class="app-t">测试内容:{{ appObj.testNum }}</div>
    <button @click="setNum">随机赋值</button>
    <el-button type="primary" @click="getNum">获取值</el-button>
</template>

<script lang="ts" setup>
import { useAppStore } from '@/store/modules/app';

const appObj = useAppStore();

const setNum = () => {
    appObj.setNum(Math.round(100 * Math.random()));
};

const getNum = () => {
    console.log(appObj.getCurrentNum1);
};
</script>
<style lang="scss" scope>
.app-t {
    width: 200px;
    display: flex;
    color: #f00;
}
</style>
