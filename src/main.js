import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// Ant-Design
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
Vue.use(Antd);
// scssF
import "./assets/scss/main.scss";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
