<template>
  <div>
    <button
      @click="$router.go(-1)"
      class="absolute left-8 border border-black rounded px-2 flex items-center justify-center"
    >
      <span class="material-icons">reply</span>Back
    </button>
    <div class="product flex justify-around my-6 w-2/3 mx-auto relative">
      <img class="max-h-80" :src="phone.picture" :alt="phone.name" />
      <div class="flex-col items-center flex justify-center">
        <div class="detailsProduct text-2xl my-2">{{ phone.name }}</div>
        <div class="detailsProduct">Pays d'origine: {{ phone.country }}</div>
        <div class="detailsProduct">
          Année de production: {{ phone.manufactureDate }}
        </div>
        <div class="detailsProduct">Prix: {{ phone.price }} euros</div>
        <div class="detailsProduct">
          Condition de l'objet: {{ phone.productCondition }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductPage",

  props: {
    itemID: {
      // type: Number,
      required: true,
    },
  },
  data: function () {
    return {
      phone: this.$store.state.phone,
    };
  },
  created() {
    this.$store.commit("itemID", parseInt(this.itemID));
  },
};
</script>
