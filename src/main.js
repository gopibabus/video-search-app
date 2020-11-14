import Vue from 'vue'
import App from './App.vue'
// import Form from './Form.vue';

Vue.config.productionTip = false

new Vue({
	render: (h) => h(App),
}).$mount('#app');

// new Vue({
// 	render: (h) => h(Form),
// }).$mount('#form');
