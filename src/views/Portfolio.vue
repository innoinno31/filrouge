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
    <!-- Begining of the main image -->
    <div class="imgFocus relative" id="imgFocusDiv">
      <i
        v-if="imgInFocusId > 1"
        id="prevImageChevron"
        class="material-icons text-7xl text-gray-400 hover:text-gray-600 cursor-pointer absolute left-24 top-1/3"
        @click="previousImage"
        >chevron_left</i
      >
      <div class="w-2/3 h-2/3 mx-auto relative" id="focusMainImageDiv">
        <img :src="imgInFocus" alt="" id="focusMainImage" />
        <!-- <i
          @click="fullscreen()"
          class="fullscreenIcon material-icons text-4xl text-white cursor-pointer"
          >fullscreen</i
        > -->
      </div>

      <i
        v-if="imgInFocusId < $store.state.slidePictures.length"
        class="material-icons text-7xl text-gray-400 hover:text-gray-600 cursor-pointer absolute right-24 top-1/3"
        @click="nextImage"
        >chevron_right</i
      >
    </div>
    <!-- Begining of the small images slide -->
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

    <!-- <button @click="console">consoleClick</button> -->
  </div>
</template>

<script>
export default {
  name: "PortfolioPage",

  data() {
    return {
      imgInFocus: "/small_images/brideCarRain.jpg",
      imgInFocusId: 1,
      imgInFocusWidth: 600,
      isFullScreen: false,
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
      // check if isActive exist, and put the clicked image to isActive
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
    fullscreen() {
      var elem = document.getElementById("imgFocusDiv");
      elem.requestFullscreen();
    },
    addHandler: function () {
      //add event listen for arrow left and right / switch pictures
      window.addEventListener("keydown", (e) => {
        if (e.key === "ArrowLeft") {
          this.previousImage();
        } else if (e.key === "ArrowRight") {
          this.nextImage();
        }
      });
      document.addEventListener("fullscreenchange", function () {
        //add event listen for full screen pictures styling

        if (document.fullscreen) {
          console.log("enter fullscreen");
          document.getElementById("focusMainImage").id =
            "focusMainImageFullscreen";
          document.getElementById("focusMainImageDiv").id =
            "focusMainImageDivFullscreen";
        } else {
          console.log("leave fullscreen");
          document.getElementById("focusMainImageFullscreen").id =
            "focusMainImage";
          document.getElementById("focusMainImageDivFullscreen").id =
            "focusMainImageDiv";
        }
      });
    },

    removeHandler: function () {
      window.removeEventListener("keydown", console.log("removedKD"));
      window.removeEventListener("fullscreenchange", console.log("removedFS"));
    },
    // console() {
    //   console.log(this.countImages);
    // },
  },

  watch: {
    imgInFocusId: function () {
      // translate the slide image
      var divToMove = document.getElementById("containerFullMiniImg");
      divToMove.style.transform =
        "translateX(" + -218 * (this.imgInFocusId - 1) + "px)";
      if (this.imgInFocusId.id === this.$store.state.slidePictures.length) {
        divToMove.style.transform = "translateX(" + 0 + "px)";
      }
    },
  },
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
#focusMainImageFullscreen,
#focusMainImageDivFullscreen {
  min-width: 90%;
  max-height: 100vh;
  margin: auto;
  object-fit: contain;
}
</style>
