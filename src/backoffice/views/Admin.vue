<template>
  <div id="mainCointainer" class="mx-auto h-screen w-100">
    <div class="h-screen bg-gray-500 rounded py-5 shadow-xl">
      <div id="main" class="flex m-10">
        <div class="sidebar w-1/5">
          <SideBar />
        </div>
        <div class="w-4/5 p-10">
          <h1 class="text-center text-xl text-white my-5 uppercase">
            Bienvenue sur la page d'administration
          </h1>
          <!-- contenu de la page  -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "../components/SideBar.vue";

export default {
  name: "admin",
  components: {
    SideBar,
  },
};
</script>
