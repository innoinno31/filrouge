<template>
  <div class="sidebarContainer">
    <div class="links text-white divide-y divite-white">
      <div class="flex ml-5 my-4 space-x-4 py-4">
        <i class="material-icons text-white">home</i>
        <router-link :to="{ name: 'admin' }">Accueil</router-link>
      </div>
      <div class="flex ml-5 my-4 space-x-4 py-4">
        <i class="material-icons text-white">calendar_month</i>
        <router-link :to="{ name: 'calendar' }">Calendrier</router-link>
      </div>
      <div class="flex ml-5 my-4 space-x-4 py-4">
        <i class="material-icons text-white">image</i>
        <router-link :to="{ name: 'portfolioAdmin' }">Portfolio</router-link>
      </div>
      <div class="flex ml-5 my-4 space-x-4 py-4">
        <i class="material-icons text-white">event_available</i>
        <router-link :to="{ name: 'reservation' }">Réservations</router-link>
      </div>
      <div class="flex ml-5 my-4 space-x-4 py-4">
        <i class="material-icons text-white">photo_album</i>
        <router-link :to="{ name: 'album' }">Choix album</router-link>
      </div>
      <div class="flex ml-5 my-4 space-x-4 py-4">
        <i class="material-icons text-white">analytics</i>
        <router-link :to="{ name: 'statistics' }">Statistiques</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideBar",
};
</script>

<style scoped>
.router-link-exact-active {
  color: pink;
  font-size: 1rem;
  line-height: 1.5rem;
  text-decoration: underline;
  text-underline-offset: 4px;
}
</style>
