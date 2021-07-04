import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

import store from './store/index';

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
// Vue.use(axios);

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
