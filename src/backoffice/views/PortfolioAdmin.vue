<template>
  <div id="mainCointainer" class="mx-auto h-screen w-100">
    <div class="h-screen bg-gray-500 rounded py-5 shadow-xl">
      <!-- <h1 class="text-center text-2xl text-white my-5 uppercase">
        Envie de changer de portfolio ?
      </h1>
      <hr /> -->

      <div id="main" class="flex m-10">
        <div class="sidebar w-1/5">
          <SideBar />
        </div>
        <div class="w-4/5 p-10">
          <!-- contenu de la page  -->
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
              <input class="mx-auto" type="file" multiple name="bigPictures" />
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
                  <input
                    class="vforPictures"
                    @click="removeThisImage($event, picture)"
                    type="image"
                    :id="picture.id"
                    :data-image="picture.picture"
                    :src="picture.slideImg"
                    :alt="picture.name"
                  />
                  <i class="material-icons absolute right-1 top-1 text-white"
                    >delete</i
                  >
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
  created() {
    this.$store.dispatch("getSlidePictures");
  },
  methods: {
    removeThisImage(e, picture) {
      console.log("remove image was fired");
      console.log(e);
      console.log(picture);
      if (
        confirm(
          "Etes vous sur de vouloir effacer la photo (id: " + picture.id + ")?"
        ) == true
      ) {
        console.log("la photo est bien effacée");
      } else {
        console.log("la demande est annulée, la photo reste inchangée");
      }
    },
  },
};
</script>

<style scoped>
.vforPictures {
  max-height: 100px;
  max-width: 100px;
  margin: 5px;
}
</style>
