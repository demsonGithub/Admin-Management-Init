import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import 'normalize.css/normalize.css';

(async () => {
    // 1. todo 加载初始化信息

    // 2. 初始化UI
    const app = createApp(App);

    app.use(router);
    app.use(store);
    app.mount('#app');
})();
