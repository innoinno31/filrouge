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
          <i class="material-icons text-white">shopping_cart</i>
          <p>(3)</p>
        </div>
      </div>
      <img
        class="mx-auto mt-2"
        src="/images/RpSignBlanc.png"
        alt=""
        width="180px"
      />
    </div>
    <nav class="mainMenu text-white my-3 flex justify-around text-sm">
      <ul>
        <li class="inline-block mx-2">
          <a href="/index.html">Page principale</a>
        </li>
        <li class="inline-block mx-2"><a href="">Mariages</a></li>
        <li class="inline-block mx-2"><a href="">Contactez-moi</a></li>
        <li class="inline-block mx-2"><a href="">Voir vos photos</a></li>
        <li class="inline-block mx-2"><a href="/cart.html">Panier</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "navigation-menu",
};
</script>
