<template>
  <main class="mb-20">
    <div id="app">
      <div class="emptyCart" v-if="$store.state.productsCart.length == 0">
        <h3 class="text-3xl mx-auto mt-48 text-center">
          Votre panier est vide !
        </h3>
      </div>
      <div class="cartNotEmpty" v-if="$store.state.productsCart.length >= 1">
        <!-- ##### Début du popup ##### --->
        <div
          id="shipmentPopup"
          v-show="modalShow"
          style="display: none"
          class="flex"
        >
          <div>
            <input
              type="button"
              value="X"
              @click="toggleModalShow"
              class="border-2 border-black px-0.5 absolute right-3 top-3"
            />
          </div>
          <form id="clientInfoForm" class="align-self-center">
            <div class="clientInfo">
              <label for="clientName">Nom: </label>
              <input
                v-model="clientName"
                type="text"
                value=""
                id="clientName"
                class="formVerif border border-black"
                required
              />
            </div>
            <div class="clientInfo mt-2">
              <label for="clientStreet">Adresse:</label>
              <input
                v-model="clientStreetAdress"
                type="text"
                id="clientStreet"
                class="formVerif border border-black"
                required
              />
            </div>
            <div class="clientInfo mt-2">
              <label for="postalCode">Code postal:</label>
              <input
                v-model="clientPostCode"
                type="text"
                id="postalCode"
                class="formVerif border border-black"
                required
              />
              <input
                type="text"
                value="Merci de rentrer un code postal valide"
                style="display: none"
                id="postalCodeErrorMsg"
                readonly
              />
            </div>
            <div class="clientInfo mt-2">
              <label for="clientTown">Ville:</label>
              <input
                v-model="clientTown"
                type="text"
                id="clientTown"
                class="formVerif border border-black"
                required
              />
            </div>
            <div class="clientInfo">
              <label class="mt-2" for="clientMail">Email:</label>
              <input
                v-model="clientEmail"
                type="email"
                class="border border-black"
                id="clientMail"
                placeholder="tél ou email obligatoire"
              />
              <input
                type="text"
                value="Merci de rentrer un email valide"
                style="display: none"
                id="clientMailErrorMsg"
                readonly
              />
            </div>
            <div class="clientInfo mt-2">
              <label for="clientNumber">Téléphone:</label>
              <input
                v-model="clientPhoneNumber"
                type="number"
                id="clientNumber"
                placeholder="tél ou email obligatoire"
                class="border border-black"
              />
              <input
                type="text"
                value="Merci de rentrer un numéro de télphone valide"
                style="display: none"
                id="clientPhoneErrorMsg"
                readonly
              />
            </div>
            <div id="errorFormClient" style="display: none">
              <input
                type="text"
                disabled
                id="errorFormMsg"
                value="Une erreur est survenue, merci de vérifier"
                readonly
              />
            </div>
            <button
              @click="
                toggleModalShow();
                clientInformationsShow = true;
              "
              class="border-2 border-gray-700 rounded px-2 bg-gray-100 mt-4 hover:bg-gray-200 hover:border-black"
              type="button"
              id="sendClientInfo"
              form="clientInfoForm"
              value=""
            >
              Valider
            </button>
          </form>
        </div>
        <!-- ##### Fin du popup ##### --->

        <div
          class="w-11/12 flex justify-around mx-auto"
          :class="{ mainDiv: oppacityBackground }"
        >
          <div class="ProductListMainDiv w-1/2">
            <div class="pb-2 mt-5 items-center">
              <p>VOTRE SELECTION</p>
            </div>
            <hr />
            <div>
              <div
                v-for="(item, index) in $store.state.productsCart"
                :key="item.id"
              >
                <div class="flex pb-2 justify-between mt-2">
                  <div class="pt-2 mx-3 w-25 self-center">
                    <img
                      @click="showProductPage(item)"
                      :src="item.picture"
                      alt=""
                      width="120px"
                    />
                  </div>
                  <div class="pt-2 mx-3 uppercase text-xs">
                    <h1 class="mt-2 text-base">{{ item.name }}</h1>
                    <p class="mt-3">description</p>
                    <p class="mt-2">date: {{ item.manufactureDate }}</p>
                    <p class="mt-1">pays: {{ item.country }}</p>
                    <p class="mt-1">état: {{ item.productCondition }}</p>
                  </div>
                  <div
                    class="pt-2 mx-3 flex flex-col justify-center text-center"
                  >
                    <p class="text-xs">QUANTITE</p>
                    <div class="flex items-center">
                      <i
                        type="input"
                        @click="changeQuantity(item, 'less')"
                        class="material-icons cursor-pointer text-base text-black"
                        >remove</i
                      >
                      <p class="my-1 text-xl text-center mx-2 disabled">
                        {{ item.quantity }}
                      </p>
                      <i
                        type="input"
                        @click="changeQuantity(item, 'more')"
                        class="material-icons cursor-pointer text-base text-black"
                        >add</i
                      >
                    </div>
                    <div class="text-center mt-2">
                      <i
                        @click="delItem(index)"
                        class="material-icons cursor-pointer text-center"
                        >delete</i
                      >
                    </div>
                  </div>
                  <div class="pt-2 mx-3 flex items-center">
                    <i class="material-icons">euro</i>
                    {{ item.price }}
                  </div>
                </div>
                <hr class="mt-2" />
              </div>
            </div>
          </div>

          <aside class="RightSideInformation w-1/5 mt-4 h-100">
            <div class="m-2 border-1 border-gray-300 bg-white p-3">
              <h1 class="text-center">RECAPITULATIF</h1>
              <div class="flex justify-between mt-4">
                <p>Sous total</p>
                <div>
                  <i class="material-icons">euro</i>
                  {{ costWithoutShipment }}
                </div>
              </div>
              <hr class="mt-2 w-1/2 mx-auto" />
              <div class="flex flex-col mt-4">
                <p class="text-center">Choix de la livraison</p>
                <div class="flex justify-around mt-2">
                  <div class="flex items-center">
                    <input
                      @change="
                        toggleModalShow();
                        calculateshipmentCostPrice('relais');
                      "
                      type="radio"
                      id="relaisColis"
                      name="deliveryChoice"
                      value="relaisColis"
                    />
                    <label
                      class="pointer-events-none text-center"
                      for="relaisColis"
                      >Relais colis<br />
                      <i class="material-icons">euro</i>
                      5
                    </label>
                  </div>
                  <div class="flex items-center">
                    <input
                      @change="
                        toggleModalShow();
                        calculateshipmentCostPrice('home');
                      "
                      type="radio"
                      id="deliveryHome"
                      name="deliveryChoice"
                      value="deliveryHome"
                    />
                    <label
                      class="pointer-events-none text-center"
                      for="deliveryHome"
                      >Domicile <br />
                      <i class="material-icons">euro</i>
                      12
                    </label>
                  </div>
                </div>
                <hr class="mt-3 w-1/2 mx-auto" />
              </div>
              <div class="flex mt-4 justify-between">
                <p>Total</p>
                <div>
                  <i class="material-icons">euro</i>
                  {{ totalCost }}
                </div>
              </div>
              <hr class="mt-3" />
              <div class="flex-col flex mt-6 items-center">
                <a href="/cartConfirm.html">
                  <button
                    type="button"
                    class="border-1 border-gray-700 px-2 rounded w-fit"
                  >
                    <i class="material-icons">euro</i>
                    REGLEMENT
                  </button>
                </a>
                <a href="/cartConfirm.html">
                  <button
                    class="mt-2 border-1 border-gray-700 bg-blue-100 px-2 rounded w-fit"
                  >
                    <i class="material-icons">paypal</i>
                    PAYPAL
                  </button>
                </a>
              </div>
            </div>
            <div v-show="clientInformationsShow" class="mt-1 text-center">
              <p>Vos informations:</p>
              <p class="mt-1">{{ clientName }}</p>
              <p class="mt-1">{{ clientStreetAdress }}</p>
              <p>{{ clientPostCode }} {{ clientTown }}</p>
              <p class="mt-1">{{ clientEmail }}</p>
              <p>{{ clientPhoneNumber }}</p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
// import products from "@/products.js";

export default {
  name: "PageCart",

  data: function () {
    return {
      costWithoutShipment: 0,
      itemQuantity: 0,
      shipmentCostPrice: 0,
      modalShow: false,
      clientName: "",
      clientStreetAdress: "",
      clientPostCode: "",
      clientTown: "",
      clientEmail: "",
      clientPhoneNumber: "",
      clientInformationsShow: false,
      oppacityBackground: false,
      phones: this.$store.state.productsCart,
    };
  },

  mounted: function () {
    this.calculateCostWithoutShipment();
  },

  created() {
    this.$store.dispatch("getProducts");
  },

  methods: {
    calculateCostWithoutShipment: function () {
      this.costWithoutShipment = 0;

      this.phones.forEach((item) => {
        this.costWithoutShipment += item.price * item.quantity;
      });
    },

    changeQuantity: function (item, choice) {
      if (choice === "more") {
        item.quantity++;
      }
      if (choice === "less") {
        if (item.quantity >= 2) {
          item.quantity--;
        }
      }
      this.calculateCostWithoutShipment();
    },

    delItem: function (index) {
      // this.$store.state.productsCart.splice(index, 1);
      this.$store.commit("removeCartProduct", index);
      this.calculateCostWithoutShipment();
    },

    calculateshipmentCostPrice: function (choice) {
      if (choice === "home") {
        this.shipmentCostPrice = 12;
      }
      if (choice === "relais") {
        this.shipmentCostPrice = 5;
      }
    },

    toggleModalShow: function () {
      this.modalShow = !this.modalShow;
    },

    showProductPage: function (item) {
      this.$router.push({ name: "product", params: { itemID: item.id } });
    },
  },

  watch: {
    modalShow: function () {
      this.oppacityBackground = this.modalShow;
    },
  },

  computed: {
    totalCost: function () {
      if (this.costWithoutShipment === 0) {
        return 0;
      }
      return this.shipmentCostPrice + this.costWithoutShipment;
    },
  },
};
</script>

<style scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: auto;
  margin: 30px auto;
}

td,
th {
  border: 1px solid #000000;
  text-align: left;
  padding: 10px;
  text-align: center;
}

.mainMenu > ul > li :hover {
  text-decoration: underline;
  text-decoration-color: rgb(255, 104, 104);
  text-underline-offset: 8px;
  color: rgb(255, 104, 104);
}

.mainMenu > ul > li :target {
  text-decoration: underline;
  text-decoration-color: rgb(255, 104, 104);
  text-underline-offset: 8px;
  color: rgb(255, 104, 104);
}

#shipmentPopup {
  width: auto;
  height: auto;
  position: fixed;
  left: 30%;
  transform: translateX(-20%);
  transform: translateY(-40%);
  z-index: 5;
  margin: 10% auto;
  background-color: rgb(243, 243, 243);
  padding: 1em;
  box-shadow: 0 30px 40px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  padding: 50px 75px;
}

#shipmentPopup input {
  display: block;
}

.mainDiv {
  filter: opacity(40%);
  pointer-events: none;
}
</style>
