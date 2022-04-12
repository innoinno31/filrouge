<template>
  <div id="mainCointainer" class="mx-auto h-screen w-100">
    <div class="h-screen bg-gray-500 rounded py-5 shadow-xl">
      <div id="main" class="flex m-10">
        <div class="sidebar w-1/5">
          <SideBar />
        </div>
        <div class="w-4/5 p-10">
          <!-- contenu de la page  -->
          <h1 class="text-center text-xl text-white my-5 uppercase">
            Page Statistiques
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "../components/SideBar.vue";

export default {
  name: "calendar",
  components: {
    SideBar,
  },
};
</script>
