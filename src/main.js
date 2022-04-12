import Vue from "vue";
import App from "./App.vue";
import mainRouter from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router: mainRouter,
  store,
  render: (h) => h(App),
  beforeCreate() {
    this.$store.commit("initialiseStore");
  },
}).$mount("#app");
