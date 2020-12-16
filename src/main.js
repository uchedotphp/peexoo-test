import Vue from "vue";
import App from "./App.vue";
import "tailwindcss/tailwind.css";
import "./assets/css/general-styles.scss";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
