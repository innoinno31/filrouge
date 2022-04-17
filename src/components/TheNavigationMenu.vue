<template>
  <header class="bg-gray-700 py-1">
    <div class="logoAndInfo">
      <div class="smallLogo flex flex-col absolute justify-around">
        <div class="flex ml-2 text-white text-xs items-center">
          <i class="material-icons text-xl text-white">call</i>
          <p class="ml-2">07.81.70.47.90</p>
        </div>
        <div class="flex ml-2 mt-2 text-white text-xs items-center">
          <i class="material-icons text-xl text-white">email</i>
          <p class="ml-2">contact@franckrp-photographe.com</p>
        </div>
        <div class="flex ml-2 mt-2 text-white text-xs items-center">
          <i class="material-icons text-xl text-white">facebook</i>
          <p class="ml-2">RP Photographie</p>
        </div>
      </div>
      <div
        class="ml-2 mt-2 text-white text-base items-center absolute right-10"
      >
        <div class="flex items-center justify-center">
          <router-link :to="{ name: 'cart' }" class="flex">
            <i class="material-icons text-white">shopping_cart</i>
          </router-link>
          <div v-if="$store.state.productsCart.length">
            <p>({{ $store.state.productsCart.length }})</p>
          </div>
        </div>
      </div>
      <router-link :to="{ name: 'home' }" class="mx-auto">
        <img
          class="mx-auto mt-2"
          src="/images/small_images/RpSignBlanc.png"
          alt=""
          width="180px"
        />
      </router-link>
    </div>
    <nav class="mainMenu my-3 flex justify-around text-sm">
      <ul>
        <li class="inline-block mx-2 space-x-4 text-white focus:text-red">
          <router-link :to="{ name: 'home' }">Accueil</router-link>
          <router-link :to="{ name: 'wedding' }">Mariage</router-link>
          <router-link :to="{ name: 'portofolio' }">Portofolio</router-link>
          <router-link :to="{ name: 'about' }">Présentation</router-link>
          <router-link :to="{ name: 'contact' }">Contact</router-link>
          <router-link :to="{ name: 'clientPictures' }"
            >Voir vos photos</router-link
          >
          <router-link :to="{ name: 'products' }">Produits</router-link>
          <router-link :to="{ name: 'cart' }">Panier</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "NavigationMenu",
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
