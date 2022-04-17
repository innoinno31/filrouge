<template>
  <div id="mainCointainer" class="mx-auto w-100">
    <div class="min-h-screen bg-gray-500 rounded py-5 shadow-xl">
      <div id="main" class="flex m-10">
        <div class="sidebar w-1/5">
          <SideBar />
        </div>
        <div class="w-4/5 p-10">
          <h1 class="text-center text-xl text-white my-5 uppercase">
            Choix des clients pour l'album <br />
            <span class="text-lg text-gray-100">
              Voici la liste des clients qui ont choisi leur photos pour leur
              album.</span
            >
          </h1>
          <p class="text-white text-center">
            Merci de cliquer sur le client pour voir sa liste de photos choisis
            apparaitre.<br />
            Si vous voulez savoir quelques détails sur la photo, il suffit de la
            survoler.
          </p>
          <div class="flex space-around p-10 justify-center">
            <div
              v-for="client of $store.getters.choiceAlbumDone"
              :key="client.id"
            >
              <button
                type="button"
                class="inline-flex items-center mx-4 px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-gray-700 bg-pink-200 hover:bg-pink-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:underline focus:bg-pink-300"
                @click="showTheAlbumPictures(client.album_choice)"
              >
                {{ client.lastname }} {{ client.firstname }}
              </button>
            </div>
          </div>
          <div
            v-if="imageChoosed.length != 0"
            class="flex flex-wrap justify-center space-x-5 content-center items-center"
          >
            <div v-for="(picture, key) in imageChoosed" :key="key">
              <div class="imageWrap">
                <img
                  class="vforPictures"
                  :src="picture.picture"
                  :alt="picture.name"
                />
                <div class="imageDescription">
                  {{ picture.name }} <br />
                  {{ picture.picture }}
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
      websiteLoaded: false,
      imageChoosed: [],
    };
  },
  mounted() {
    this.websiteLoaded = true;
  },
  created() {
    this.$store.dispatch("getReservation");
    this.$store.dispatch("getSlidePictures");
  },
  methods: {
    showTheAlbumPictures(clientAlbumChoice) {
      let allImages = this.$store.state.slidePictures;
      let filtered = [];

      clientAlbumChoice.filter(function (el) {
        allImages.forEach((element) => {
          if (element.id === el) {
            filtered.push(element);
          }
        });
      });
      this.imageChoosed = filtered;
    },
  },
  computed: {},
};
</script>

<style scoped>
.vforPictures {
  max-height: 200px;
  max-width: 200px;
  margin: 5px;
}
.imageWrap {
  position: relative;
  height: 200px;
  width: 200px;
}

.imageDescription {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(197, 124, 185, 0.72);
  color: rgb(255, 254, 254);
  visibility: hidden;
  opacity: 0;
  overflow-wrap: break-word;
  padding-top: 10px;
  transition: opacity 0.3s, visibility 0.3s;
}

.imageWrap:hover .imageDescription {
  visibility: visible;
  opacity: 1;
}
</style>
