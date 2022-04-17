<template>
  <div id="mainCointainer" class="mx-auto w-100">
    <div class="min-h-screen bg-gray-500 rounded py-5 shadow-xl">
      <div id="main" class="flex m-10">
        <div class="sidebar w-1/5">
          <SideBar />
        </div>
        <div class="w-4/5 p-10">
          <h1 class="text-center text-xl text-white my-5 uppercase">
            Gérer vos réservations
          </h1>
          <table
            class="table-auto border-collapse border border-white min-w-full text-center text-gray-100"
          >
            <thead>
              <tr>
                <td class="border border-white py-4">Client</td>
                <td class="border border-white py-4">Prestations</td>
                <td class="border border-white py-4">Date</td>
                <td class="border border-white py-4">Infos</td>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="client of $store.state.reservationList"
                :key="client.id"
              >
                <td class="border border-white py-4">
                  {{ client.lastname }} {{ client.firstname }}<br />{{
                    client.email
                  }}
                  <br />
                  {{ client.phone }}
                </td>
                <td class="border border-white py-4">{{ client.type }}</td>
                <td class="border border-white py-4">
                  {{ client.reservation_date }}
                </td>
                <td class="border border-white py-4">
                  <button
                    @click="showModal(client)"
                    class="material-icons text-white py-4"
                  >
                    info
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <!-- modal -->
          <div
            v-show="modalShow"
            class="absolute bottom-0 inset-x-0 max-w-fit mx-auto my-60"
          >
            <div
              class="bg-gray-300 border min-w-fit max-w-3xl p-10 rounded-xl text-center relative"
            >
              <h1 class="text-xl">détails de : {{ modalDetail }}</h1>
              <p>{{ modalText }}</p>
              <div class="absolute top-2 right-2">
                <button @click="closeModal()" class="material-icons">
                  close
                </button>
              </div>
            </div>
          </div>
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
  created() {
    this.$store.dispatch("getReservation");
  },
  data: function () {
    return {
      modalText: String,
      modalShow: false,
      modalDetail: String,
    };
  },
  methods: {
    showModal(client) {
      this.modalText = client.details;
      this.modalDetail = client.lastname + " " + client.firstname;
      this.modalShow = true;
      if (this.modalText === "") {
        this.modalText = "Ce client n'a pas mis de détails.";
      }
    },
    closeModal() {
      this.modalShow = false;
      this.modalText = "";
      this.modalDetail = "";
    },
  },
};
</script>
