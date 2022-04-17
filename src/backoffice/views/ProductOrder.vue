<template>
  <div id="mainCointainer" class="mx-auto w-100">
    <div class="min-h-screen bg-gray-500 rounded py-5 shadow-xl">
      <div id="main" class="flex m-10">
        <div class="sidebar w-1/5">
          <SideBar />
        </div>
        <div class="w-4/5 p-10">
          <h1 class="text-center text-xl text-white my-5 uppercase">
            Tableau des commandes
          </h1>
          <table
            class="table-auto border-collapse border border-white min-w-full text-center text-gray-100"
          >
            <thead>
              <tr>
                <td class="border border-white py-4">Client</td>
                <td class="border border-white py-4">Produits</td>
                <td class="border border-white py-4">Date</td>
                <td class="border border-white py-4">Adresse du client</td>
                <td class="border border-white py-4"></td>
              </tr>
            </thead>
            <tbody>
              <tr v-for="order of $store.state.orderList" :key="order.id">
                <td class="border border-white py-4">
                  {{ order.client.lastname }} {{ order.client.firstname }}
                </td>
                <td class="border border-white">
                  <div v-for="product of order.cart" :key="product.productID">
                    <p class="py-2">
                      {{ product.product_name }} <br />
                      quantité: {{ product.quantity }} prix:
                      {{ product.price }} <br />
                      ID produits : {{ product.productID }}
                    </p>
                    <hr />
                  </div>
                </td>
                <td class="border border-white py-4">{{ order.date }}</td>
                <td class="border border-white py-4">
                  {{ order.shipping.adress }} <br />
                  {{ order.shipping.postal_code }} {{ order.shipping.town }}
                  <br />
                  {{ order.shipping.country }}
                </td>
                <td class="border border-white">
                  <button
                    class="material-icons text-white"
                    @click="deleteThis(order)"
                  >
                    delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "../components/SideBar.vue";

export default {
  name: "productPageOrder",
  components: {
    SideBar,
  },
  created() {
    this.$store.dispatch("getOrderList");
  },
  methods: {
    deleteThis(order) {
      if (
        confirm(
          "Est ce que la commande de " +
            order.client.firstname +
            " " +
            order.client.lastname +
            " est traitée?"
        ) == true
      ) {
        alert("la commande a bien été traitée et par conséquent supprimé.");
      } else {
        alert("la commande reste inchangée");
      }
    },
  },
};
</script>
