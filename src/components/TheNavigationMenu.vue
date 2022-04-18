<template>
  <header class="bg-gray-700 py-1">
    <div class="flex flex-col sm:flex-row justify-between">
      <div v-if="!mobileDetected" class="w-1/4 flex justify-start">
        <div class="smallLogo flex flex-col justify-around">
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
      </div>

      <div class="flex mt-2 w-1/2 items-center justify-center">
        <router-link :to="{ name: 'home' }" class="mx-auto">
          <img
            src="/images/small_images/RpSignBlanc.png"
            alt=""
            width="180px"
            class="logoImageRP"
          />
        </router-link>
      </div>

      <div
        class="text-white text-base items-center flex justify-end w-1/4 mr-2 absolute top-2 right-2 sm:relative"
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
    </div>
    <nav class="mainMenu my-3 flex justify-around text-sm">
      <ul v-if="!mobileDetected">
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
      <div v-if="mobileDetected">
        <button
          class="border border-white bg-gray-200 rounded-xl px-3 py-1"
          @click="toggleMobileMenu()"
        >
          Menu
        </button>
        <div v-if="openMobileMenu">
          <ul>
            <li
              @click="toggleMobileMenu()"
              class="flex flex-col text-white focus:text-red"
            >
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
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "NavigationMenu",
  data: function () {
    return {
      mobileDetected: false,
      openMobileMenu: false,
    };
  },
  mounted: function () {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      this.mobileDetected = true;
    } else {
      this.mobileDetected = false;
    }
  },

  methods: {
    toggleMobileMenu() {
      this.openMobileMenu = !this.openMobileMenu;
    },
  },
  watch: {
    mobileDetected() {
      if (window.screen.width >= 500) {
        return (this.mobileDetected = false);
      }
    },
  },
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
