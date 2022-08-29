import { defineStore } from 'pinia';

export const useAppStore = defineStore({
    id: 'sys-app',
    state: () => {
        return {
            testNum: 1
        };
    },
    //  主要作用类似于computed 数据修饰并且有缓存
    //  使用箭头函数的时候不能使用this关键字
    getters: {
        getCurrentNum1(): number {
            return this.testNum;
        },
        getCurrentNum2: (state) => state.testNum
    },
    //  对state的值进行处理,多个action互相调用
    //  异步promise 可以结合async await 修饰
    actions: {
        setNum(value: number) {
            this.testNum = value;
        }
    }
});
