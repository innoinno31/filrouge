<template>
  <div id="app">
    <navigation-menu />
    <cart-page />
    <website-footer />
  </div>
</template>

<script>
import NavigationMenu from "./components/NavigationMenu.vue";
import Footer from "./components/Footer.vue";
import Cart from "./components/Cart.vue";

export default {
  name: "App",
  components: {
    "navigation-menu": NavigationMenu,
    "website-footer": Footer,
    "cart-page": Cart,
  },
};
</script>
