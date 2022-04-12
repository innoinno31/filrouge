<template>
  <div id="app">
    <navigation-menu
      v-if="$route.name !== 'home' && !$route.meta.hideNavAndFooter"
    />
    <!-- <keep-alive> -->
    <router-view />
    <!-- </keep-alive> -->
    <website-footer
      v-if="$route.name !== 'home' && !$route.meta.hideNavAndFooter"
    />
  </div>
</template>

<script>
import NavigationMenu from "./components/TheNavigationMenu.vue";
import Footer from "./components/TheFooter.vue";

export default {
  name: "App",
  components: {
    "navigation-menu": NavigationMenu,
    "website-footer": Footer,
  },
};
</script>
