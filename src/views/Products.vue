<template>
  <div class="maintContainer lg:w-3/4 mx-auto text-center mb-10">
    <div
      v-if="errorAddProductShow"
      class="modalError fixed bg-gray-400 text-white rounded-full px-16 py-8 z-1 bottom-32 left-1/3 inset-x-46 mx-auto"
    >
      <h3>Ce produits est déja ajouté à votre panier.</h3>
      <p>Pour modifier la quantitée, merci de vous rendre sur votre panier.</p>
    </div>
    <h1 class="mx-auto text-2xl mt-6">
      Bienvenue sur notre page produits, ne resistez pas à la tentation !
    </h1>

    <div class="productsContainer flex flex-col md:flex-row mt-6 flex-wrap">
      <div
        class="md:w-1/3 px-10 my-6"
        v-for="product in $store.state.products"
        :key="product.id"
      >
        <div class="flex">
          <div class="lg:w-1/2 lg:flex">
            <img
              @click="showProductPage(product)"
              :src="product.picture"
              alt=""
            />
          </div>
          <div class="w-1/2 flex flex-col justify-around">
            <div>
              <p>{{ product.name }}</p>
              <p>état: {{ product.productCondition }}</p>
              <p>{{ product.price }} euros</p>
            </div>
            <button
              @click="addProductToCart(product)"
              class="mx-3 py-1 border rounded border-black px-1 hover:bg-indigo-300 hover:text-white"
            >
              Ajouter
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductsPage",

  created() {
    this.$store.dispatch("getProducts");
  },

  methods: {
    showProductPage: function (product) {
      this.$store.commit("getPhoneDetail", product);
      this.$router.push({
        name: "product",
        params: { itemID: parseInt(product.id) },
      });
    },
    addProductToCart: function (product) {
      this.$store.dispatch("addProductCart", product);
    },
    ModalChange: function () {
      if (this.$store.state.errorAddProduct === true) {
        setTimeout(function () {
          this.$store.state.errorAddProduct = false;
        }, 3000);
      }
    },
  },
  computed: {
    errorAddProductShow() {
      return this.$store.state.errorAddProduct;
    },
  },
};
</script>
