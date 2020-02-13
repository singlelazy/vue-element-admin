import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// 初始化css
import 'normalize.css';

// element
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';

Vue.use(ElementUI)

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
