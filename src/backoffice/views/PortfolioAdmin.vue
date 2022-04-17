<template>
  <div id="mainCointainer" class="mx-auto w-100">
    <div class="min-h-screen bg-gray-500 rounded py-5 shadow-xl">
      <div id="main" class="flex m-10">
        <div class="sidebar w-1/5">
          <SideBar />
        </div>
        <div class="w-4/5 p-10 relative">
          <div
            v-show="modalFilesList"
            class="centered bg-white p-10 border rounded-xl text-center text-xl z-10"
          >
            <p class="uppercase text-lg py-5">
              Voici la liste des photos à uploader :
            </p>
            <div v-for="(file, key) of filesList" :key="key">
              <p class="py-1">
                <span class="text-gray-500">name: </span>{{ file.name }}
              </p>
            </div>
            <button
              class="material-icons absolute top-2 right-3"
              @click="toggleModalFileList()"
            >
              clear
            </button>
          </div>
          <div class="portfolioAddPictures">
            <div class="flex flex-col justify-center">
              <h1 class="text-xl text-center uppercase text-rose-200">
                Voulez-vous ajouter des photos?
              </h1>
              <hr class="max-w-xs w-full mx-auto my-3" />

              <label class="text-white my-3 text-center" for="bigPictures"
                >Merci de sélectionner les photos choisies à ajouter au
                portfolio.</label
              >
              <input
                id="uploadFile"
                class="mx-auto"
                type="file"
                multiple
                name="bigPictures"
                accept=".jpg, .jpeg"
                @change="getFilesList()"
              />
              <div v-show="uploadAndListShow" class="mt-6 flex justify-center">
                <button
                  type="button"
                  @click="toggleModalFileList()"
                  class="inline-flex items-center mx-4 px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-gray-700 bg-gray-100 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:underline focus:bg-pink-300"
                >
                  Voir la liste des photos à uploader
                </button>
                <button
                  type="button"
                  @click="addPortfolioPictures()"
                  class="inline-flex items-center mx-4 px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-gray-700 bg-pink-200 hover:bg-pink-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:underline focus:bg-pink-300"
                >
                  Valider et uploader mes choix
                </button>
              </div>
            </div>

            <!-- remove pics -->
            <div class="portfolioRemovePictures">
              <h1 class="text-xl text-center uppercase text-rose-200 mt-20">
                Voulez-vous supprimer des photos?
              </h1>
              <hr class="max-w-xs w-full mx-auto my-3" />
              <p class="text-white my-3 text-center">
                Voici les photos du portfolio actuel :
              </p>
              <div class="flex flex-wrap justify-center">
                <div
                  class="photoList relative"
                  v-for="picture in $store.state.slidePictures"
                  :key="picture.id"
                >
                  <img
                    class="vforPictures"
                    type="image"
                    :id="picture.id"
                    :data-image="picture.picture"
                    :src="picture.slideImg"
                    :alt="picture.name"
                  />
                  <button
                    @click="removeThisImage(picture)"
                    class="material-icons absolute right-1 top-1 text-white text-2xl bg-gray-700 hover:bg-gray-500 hover:text-pink-200"
                  >
                    delete
                  </button>
                </div>
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
  data() {
    return {
      uploadAndListShow: false,
      filesList: [],
      modalFilesList: false,
    };
  },
  created() {
    this.$store.dispatch("getSlidePictures");
  },
  mounted() {},
  methods: {
    removeThisImage(picture) {
      if (
        confirm(
          "Etes vous sur de vouloir effacer la photo (id: " + picture.id + ")?"
        ) == true
      ) {
        alert("la photo est bien effacée");
      } else {
        alert("la demande est annulée, la photo reste inchangée");
      }
    },
    getFilesList() {
      let fileInput = document.querySelector("#uploadFile");
      if (fileInput.files.length > 0) {
        this.uploadAndListShow = true;
      } else {
        this.uploadAndListShow = false;
      }
      this.filesList = fileInput.files;
    },
    toggleModalFileList() {
      this.modalFilesList = !this.modalFilesList;
    },
    addPortfolioPictures() {
      alert("Vos photos ont bien été envoyé au server.");
    },
  },
};
</script>

<style scoped>
.vforPictures {
  max-height: 250px;
  max-width: 250px;
  margin: 5px;
}
.centered {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
