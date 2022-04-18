<template>
  <div class="main h-screen">
    <div class="mainImage relative">
      <img
        src="/images/small_images/coupleHavingFun.jpg"
        alt="photo RP photographie"
      />
      <div
        id="textInPicture"
        class="absolute top-0 left-0 mt-12 ml-12 text-xl w-1/4"
      >
        <h1 class="text-base xl:text-2xl mb-3">
          Photographe de mariage basé à Toulouse
        </h1>
        <p class="text-gray-700 text-xs xl:text-base">
          Franck est quelqu'un de discret et d'humain.<br />
          Il nous a écoutés avant de nous voir derrière un objectif. Il a su
          nous guider nous aiguiller pour capturer chaque magnifique moment de
          ce jour fabuleux malgré les mariées dissipées que nous sommes.<br />
          Nous le remercions infiniment pour son professionnalisme mais surtout
          pour sa personnalité.<br />Nous sommes impatientes de voir le résultat
          qui sera, j'en suis sûre, plein d'émotion.<br />
          <span class="text-sm xl:text-lg my-5">Manon</span>
        </p>
      </div>
    </div>
    <div class="secondScroll h-screen w-100 flex flex-col">
      <div class="aboutAndPicture flex justify-around mt-48">
        <div
          class="textAboutme leftSide w-1/3 h-1/2 flex flex-col justify-center"
        >
          <h1 class="text-xl xl:text-2xl uppercase">à propos de Franck</h1>
          <p class="leading-loose mt-3 text-sm lg:text-base">
            C'est un plaisir pour moi de mettre en image ce monde qui nous
            entoure, ces gens qui nous donnent tant d'émotions, avec qui nous
            partageons tant de choses... <br />Sublimer, peaufiner, faire
            attention aux détails, m'adapter, sont mes priorités en matière de
            photos. <br />Passionné de photo, quasi inexistants sont les jours
            qui me séparent de mon appareil photo ou d'une retouche d'image, que
            ce soit pour mon travail ou pour ma vie privée. <br />J’espère que
            cette brève description de moi vous donnera envie de me rencontrer
            autour d'une session photo.
          </p>
        </div>
        <div
          class="rightSidePictureMe w-1/3 mt-8 h-1/2 flex flex-col justify-center"
        >
          <img
            src="/images/small_images/ME.jpg"
            alt="photo RIEU-PATEY Franck photographe toulouse"
          />
        </div>
      </div>
      <div class="comment text-center">
        <p class="uppercase text-gray-600 my-5">quelques avis</p>
      </div>

      <!--  CAROUSSEL client's opinion -->
      <div v-for="comment in $store.state.fetchComments" :key="comment.id">
        <div
          class="divCommentDisplay opacity-50 text-center w-3/4 mx-auto mb-32"
          v-if="commentDisplay == comment.id"
        >
          <p class="my-3 text-sm">{{ comment.content }}</p>
          <p class="uppercase">{{ comment.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AboutPage",

  data() {
    return {
      commentDisplay: 1,
    };
  },

  created() {
    this.$store.dispatch("getComments");
    this.incrementComments();
  },
  methods: {
    incrementComments() {
      let commentNumber = this.$store.state.fetchComments.length;
      return setTimeout(() => {
        this.commentDisplay == commentNumber
          ? (this.commentDisplay = 1)
          : this.commentDisplay++;
        this.incrementComments();
      }, 6000);
    },
  },
};
</script>

<style scoped>
.divCommentDisplay {
  animation-name: commentAnimation;
  animation-duration: 2s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
  line-height: 22px;
  white-space: pre-line;
}
@keyframes commentAnimation {
  from {
    opacity: 0%;
  }
  to {
    opacity: 100%;
  }
  from {
    transform: scale(0.3, 0.3);
  }
  to {
    transform: scale(1, 1);
  }
}
@media screen and (max-width: 780px) {
  #textInPicture {
    visibility: hidden;
  }
  .rightSidePictureMe {
    display: none;
  }
  .textAboutme {
    width: 75%;
  }
}
</style>
