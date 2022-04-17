<template>
  <div
    class="mainContainer pb-24"
    @keyup.left="previousImage()"
    @keyup.right="nextImage()"
  >
    <div class="title text-center py-6 relative">
      <h1 class="text-3xl">Gallerie photos</h1>
      <button
        type="button"
        class="rounded absolute top-1/3 right-1/4 text-black border border-slate-700 px-2 py-1 text-sm bg-slate-100"
        @click="fullscreen()"
      >
        afficher en plein écran
      </button>
    </div>
    <div class="imgFocus relative" id="imgFocusDiv">
      <button
        v-if="imgInFocusId > 1"
        id="prevImageChevron"
        class="material-icons text-7xl text-gray-400 hover:text-gray-600 cursor-pointer z-10 absolute left-24 top-1/3"
        @click="previousImage"
      >
        chevron_left
      </button>
      <!-- fullscreen screen div-->
      <div class="w-2/3 h-2/3 mx-auto relative" id="focusMainImageDiv">
        <img :src="imgInFocus" alt="" id="focusMainImage" />
        <div
          v-if="isFullScreen"
          class="absolute inset-x-0 bottom-0 h-16 bg-gray-700/25"
        >
          <div class="flex justify-around m-auto w-1/2">
            <button
              @click="playPictures()"
              class="material-icons text-5xl text-gray-300 hover:text-gray-100 z-10"
            >
              play_circle
            </button>
            <button
              @click="stopPlayPictures()"
              class="material-icons text-5xl text-gray-300 hover:text-gray-100 z-10"
            >
              pause_circle
            </button>
            <button
              v-if="imgInFocusId > 1"
              id="prevImageChevron"
              class="material-icons text-5xl text-gray-300 hover:text-gray-100 z-10"
              @click="previousImage()"
            >
              chevron_left
            </button>
            <button
              v-if="imgInFocusId < $store.state.slidePictures.length"
              class="material-icons text-5xl text-gray-300 hover:text-gray-100 z-10"
              @click="nextImage()"
            >
              chevron_right
            </button>
            <button
              @click="leaveFullscreen()"
              class="material-icons text-5xl text-gray-300 hover:text-gray-100 z-10"
            >
              fullscreen_exit
            </button>
          </div>
        </div>
      </div>
      <i
        v-if="imgInFocusId < $store.state.slidePictures.length"
        class="material-icons text-7xl text-gray-400 hover:text-gray-600 cursor-pointer z-10 absolute right-24 top-1/3"
        @click="nextImage"
        >chevron_right</i
      >
    </div>
    <!-- small images  -->
    <div class="imgMiniMenu overflow-hidden w-10/12 relative mx-auto">
      <div
        class="pb-24 gap-1 mx-auto relative py-5 flex"
        id="containerFullMiniImg"
      >
        <div
          v-for="picture in $store.state.slidePictures"
          :key="picture.id"
          class="vforPictures"
        >
          <input
            @click="activateImage($event, picture)"
            type="image"
            class="imagesSlide mx-2"
            :id="picture.id"
            :data-image="picture.picture"
            :src="picture.slideImg"
            :alt="picture.name"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PortfolioPage",

  data() {
    return {
      imgInFocus: "/images/small_images/brideCarRain.jpg",
      imgInFocusId: 1,
      imgInFocusWidth: 600,
      isFullScreen: false,
      playPicture: "",
      pictureIsPlaying: false,
      keydownArrows: "",
      fullscreenEvent: "",
    };
  },

  created() {
    this.$store.dispatch("getSlidePictures");
    this.addHandler();
  },

  destroyed: function () {
    this.removeHandler();
  },
  methods: {
    activateImage(e, picture) {
      // check if isActive exist, and put on the clicked image isActive
      var elems = document.querySelector(".isActive");
      if (elems !== null) {
        elems.classList.remove("isActive");
      }
      e.target.classList.add("isActive");
      // bind the big image to the clicked one
      this.imgInFocus = picture.picture;
      this.imgInFocusId = picture.id;
    },

    previousImage() {
      if (this.imgInFocusId > 1) {
        let prevImage = this.$store.state.slidePictures.find(
          (picture) => picture.id === this.imgInFocusId - 1
        );
        this.imgInFocus = prevImage.picture;
        this.imgInFocusId = prevImage.id;
      }
    },
    nextImage() {
      let nextImage = this.$store.state.slidePictures.find(
        (picture) => picture.id === this.imgInFocusId + 1
      );
      this.imgInFocus = nextImage.picture;
      this.imgInFocusId = nextImage.id;
    },
    playPictures() {
      if (!this.pictureIsPlaying) {
        this.pictureIsPlaying = true;
        let numberOfimages = this.$store.state.slidePictures.length;
        //we are playing the first asap if possible.
        if (this.imgInFocusId < numberOfimages) {
          this.nextImage();
        }
        //then we set an setinterval
        this.playPicture = setInterval(() => {
          if (this.imgInFocusId < numberOfimages) {
            this.nextImage();
          } else {
            let firstImage = this.$store.state.slidePictures.find(
              (picture) => picture.id === 1
            );
            this.imgInFocus = firstImage.picture;
            this.imgInFocusId = firstImage.id;
            this.nextImage();
          }
        }, 3000);
      }
    },
    stopPlayPictures() {
      clearInterval(this.playPicture);
      this.playPicture = null;
      this.pictureIsPlaying = false;
    },
    fullscreen() {
      var elem = document.getElementById("focusMainImageDiv");
      elem.requestFullscreen();
    },
    leaveFullscreen() {
      document.exitFullscreen();
    },
    addHandler: function () {
      //add event listen for arrow left and right / switch pictures
      this.keydownArrows = (e) => {
        if (e.key === "ArrowLeft") {
          this.previousImage();
        } else if (e.key === "ArrowRight") {
          this.nextImage();
        }
      };
      //add event listen for fullscreen
      this.fullscreenEvent = () => {
        if (document.fullscreenElement) {
          this.isFullScreen = true;
        } else {
          this.isFullScreen = false;
        }
      };
      window.addEventListener("keydown", this.keydownArrows);
      document.addEventListener("fullscreenchange", this.fullscreenEvent);
    },
    removeHandler: function () {
      window.removeEventListener("keydown", this.keydownArrows);
      window.removeEventListener("fullscreenchange", this.fullscreenEvent);
    },
  },

  watch: {
    imgInFocusId() {
      // translate the slide image
      let divToMove = document.getElementById("containerFullMiniImg");
      divToMove.style.transform =
        "translateX(" + -218 * (this.imgInFocusId - 1) + "px)";
      if (this.imgInFocusId.id === this.$store.state.slidePictures.length) {
        divToMove.style.transform = "translateX(" + 0 + "px)";
      }
    },
    isFullScreen() {
      let focusMainImage = document.getElementById("focusMainImage");
      if (this.isFullScreen) {
        focusMainImage.classList.add("fullscreenStyle");
      } else {
        focusMainImage.classList.remove("fullscreenStyle");
        this.stopPlayPictures();
      }
    },
  },
  computed: {},
};
</script>

<style scoped>
#containerFullMiniImg {
  --countImage: this.$store.state.slidePictures.length;
  width: calc(var(--countImage) * 220px);
  height: 166px;
  transition: all ease 1s;
}
.vforPictures {
  height: inherit;
  padding-bottom: 20px;
  display: flex;
  justify-content: center;
  justify-items: center;
  min-width: 218px;
}
.isActive {
  padding: 3px;
  border: 2px;
  border-color: rgb(79 70 229);
  border: solid;
}
.imagesSlide {
  max-width: 218px;
}
#focusMainImage,
#focusMainImageDiv {
  max-height: 600px;
  min-height: 600px;
  max-width: fit-content;
  margin: auto;
  max-width: 900px;
  object-fit: contain;
}
.fullscreenStyle {
  max-height: 100% !important;
  max-width: 100% !important;
  min-width: 100% !important;
  min-height: 100% !important;
}
</style>
