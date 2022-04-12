<template>
  <div class="mainContainer h-screen">
    <div class="h-2/3 w-100">
      <div
        class="backgroundImageWeddingPage bg-none h-full relative flex flex-col items-center"
      >
        <div
          class="text-gray-800 flex absolute w-fit justify-between bottom-0 py-2 px-12 bg-gray-300/75 rounded-xl text-sm"
        >
          <div class="firstParagraph">
            <p class="text-xl text-gray-800">
              Le mariage c'est la volonté à deux de créer l'unique.
            </p>
            <p class="text-base text-gray-700">Friedrich Nietzsche</p>
          </div>
        </div>
      </div>
    </div>
    <!-- suite de la page -->
    <div>
      <h1
        class="mx-auto text-xl text-center py-5 leading-relaxed tracking-wide"
      >
        Votre photographe de mariage et photobooth à Toulouse
      </h1>
      <p class="w-3/4 mx-auto pb-5 leading-relaxed tracking-wide">
        Pour les prestations de mariage j'ai voulu être différent, proposer
        quelque chose de nouveau, tout en mettant l'accent sur la qualité de mes
        services. C'est pourquoi au lieu de vous proposer un simple reportage
        photo de votre mariage, je vous propose de vivre avec moi une expérience
        photographique en vous accompagnant avant , pendant et après le jour J.
      </p>
      <img
        src="http://localhost:8080/small_images/indianaStar.jpg"
        alt=""
        class="secondImage h-1/3"
      />
      <p class="w-3/4 mx-auto py-5">
        L'expérience RP Photographie c'est avant tout :
      </p>
      <ul class="list-disc w-3/4 mx-auto">
        <li class="pb-3">
          <p class="leading-relaxed tracking-wide">
            <span class="text-lg text-pink-700 underline underline-offset-2"
              >Le service :</span
            >
            Je le place en premier car c'est indéniablement ce qui me tient le
            plus à cœur. C'est pourquoi nous nous rencontrerons avant le mariage
            pour bien définir vos attentes, afin de se connaitre davantage et
            d'être plus à l'aise le jour J. Je reviendrai vers vous quelques
            mois avant le mariage pour en suivre l'évolution, et serai
            disponible pour répondre à la moindre de vos questions. Pour la
            livraison de vos commandes je préfère me déplacer en personne afin
            de vous livrer un produit sans faille, vérifié par mes soins au
            préalable. Comme dit ci-dessus, plus qu'un simple reportage photo,
            une expérience photographique.
          </p>
        </li>
        <li class="pb-3">
          <p class="leading-relaxed tracking-wide">
            <span class="text-lg text-pink-700 underline underline-offset-2"
              >Du sur mesure :</span
            >
            Vous souhaitez que votre photographe de mariage couvre plutôt les
            préparatifs de votre mariage ? Plutôt la soirée dansante? Vous avez
            une idée particulière? Désirez plusieurs albums? Des photos de
            remerciements? Plus ou moins de temps pour les photos de groupes? de
            couple? etc... Je m'adapte à VOUS! C'est votre journée!
          </p>
        </li>

        <li class="pb-3">
          <p class="leading-relaxed tracking-wide">
            <span class="text-lg text-pink-700 underline underline-offset-2"
              >Un style photographique différent :</span
            >
            Plutôt discret pendant les mariages tout en assurant une couverture
            complète de ceux-ci, on pourrait surtout me définir comme reporter
            photos, ceci étant j'aime capturer les détails que vous avez mis des
            mois à inventer, créer et peaufiner... J'aime aussi m'amuser lors
            des photos de couple, faire des poses innovantes, me laisser guider
            par vous ou par mes inspirations du moment. Mon style pourrait
            s'appeler le "reportage créatif".
          </p>
        </li>

        <li class="pb-3">
          <p class="leading-relaxed tracking-wide">
            <span class="text-lg text-pink-700 underline underline-offset-2"
              >La qualité des produits :</span
            >
            Cette journée passera rapidement, tout ce que vous garderez de ces
            moments seront vos souvenirs et vos photos. Il est pour moi
            primordial de livrer des produits d'une extrême qualité. En effet,
            quel intérêt d'avoir un album de mariage, des photos ou un
            agrandissement décolorés ou abîmés après 20 ans ? Dans le but que
            vos photos restent intactes et que vous ayez la meilleure qualité
            possible, je travaille en étroite collaboration avec un laboratoire
            professionnel d'une qualité prouvée depuis plusieurs années, pour
            tous mes produits.
          </p>
        </li>
      </ul>
      <!-- <img
        src="http://localhost:8080/small_images/coupleGolf.jpg"
        alt=""
        class="thirdImage pb-3"
      /> -->
      <div id="parralaxImage"></div>

      <p class="leading-relaxed tracking-wide pb-3 w-3/4 mx-auto">
        <span class="text-lg text-pink-700 underline underline-offset-2"
          >Envie d'une animation photo?</span
        >
        <br />
        le photobooth Toulouse : c'est l'annimation phare d'un mariage, toujours
        un succés . Si vous voulez des souvenirs drôles et originaux que vous
        n'auriez jamais eus, c'est ce qu'il vous faut! C'est aussi un moment où
        les invités adorent faire des surprises aux mariés (attendez-vous au
        pire!). Le Photobooth est donc une excellente animation pour un mariage
        et cela permet de garder des souvenirs drôles et très personnels de
        votre mariage. Résultat et invités ravis garanti!
      </p>
      <div
        class="imagePhotobooth w-5/12 mx-auto flex flex-col items-center py-5"
      >
        <div class="flexTop flex space-x-2">
          <img
            src="http://localhost:8080/small_images/photobooth1.jpg"
            alt=""
            class="imagesPhotobooth"
          />
          <img
            src="http://localhost:8080/small_images/photobooth2.jpg"
            alt=""
            class="imagesPhotobooth"
          />
        </div>
        <div class="flexBottom flex space-x-2">
          <img
            src="http://localhost:8080/small_images/photobooth3.jpg"
            alt=""
            class="imagesPhotobooth"
          />
          <img
            src="http://localhost:8080/small_images/photobooth4.jpg"
            alt=""
            class="imagesPhotobooth"
          />
        </div>
      </div>
      <div>
        <h1
          class="pt-6 pb-4 text-center mx-auto text-xl leading-relaxed tracking-wide"
        >
          Si vous avez eu le courage de tout lire, je crois qu'il est temps de
          me contacter
        </h1>
      </div>
      <img src="LOGO MARIAGES.NET" alt="" />
      <div class="w-3/4 mx-auto">
        <div class="pb-6">
          <form action="" class="gap-8 grid grid-cols-11 py-8">
            <div class="col-span-4 col-start-2 flex flex-col">
              <label for="nameInput">Nom * </label>
              <input type="text" name="nameInput" required />
            </div>
            <div class="col-span-4 col-start-7 flex flex-col">
              <label for="partnerName">Nom de votre partenaire</label>
              <input type="text" name="partnerName" />
            </div>
            <div class="col-span-4 col-start-2 flex flex-col">
              <label for="email">Email *</label>
              <input type="text" name="email" required />
            </div>
            <div class="col-span-4 col-start-7 flex flex-col">
              <label for="phone">Téléphone *</label>
              <input type="text" name="phone" required />
            </div>

            <div class="col-span-4 col-start-2 flex flex-col">
              <label for="weddingDate">Date du mariage</label>
              <input type="text" name="weddingDate" />
            </div>
            <div class="col-span-4 col-start-7 flex flex-col">
              <label for="weddingLocation">Lieu du mariage</label>
              <input type="text" name="weddingLocation" />
            </div>

            <div class="col-span-9 col-start-2 flex flex-col">
              <label for="subject">Titre du message *</label>
              <input type="text" name="subject" required />
            </div>
            <div class="col-span-9 col-start-2 flex flex-col">
              <label for="message" class="w-full">Message *</label>
              <textarea type="textarea" rows="4" name="message" required />
            </div>
            <button
              type="button"
              class="border border-pink-400 col-span-2 col-start-2 hover:bg-pink-200/50 px-3 py-2 rounded text-center bg-pink-100/50"
            >
              Envoyer
            </button>
            <p class="text-gray-400 col-start-2 col-span-9">
              Pensez à vérifier vos spams
            </p>
          </form>
          <div id="wp-ratedWA" class="mx-auto pb-8 flex justify-around">
            <img
              width="125"
              height="125"
              alt="Rieu-Patey Photographie, gagnant Wedding Awards 2022 Mariages.net"
              id="wp-ratedWA-img-2022"
              src="https://cdn1.mariages.net/img/badges/2022/badge-weddingawards_fr_FR.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WeddingPage",
};
</script>

<style scoped>
.backgroundImageWeddingPage {
  background-image: url("http://localhost:8080/small_images/BWchurch.jpg");
  background-attachment: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: left;
}
#parralaxImage {
  background-image: url("http://localhost:8080/small_images/coupleGolf.jpg");
  background-attachment: fixed;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  height: 50vh;
  width: 100%;
}
.secondImage,
.thirdImage {
  object-fit: cover;
  width: 100%;
  height: 70vh;
  margin: auto;
}
.thirdImageDiv {
  width: 100%;
  height: 50vh;
  max-height: 50vh;
  margin: auto;
  position: relative;
  height: 1500px;
}
.imagesPhotobooth {
  width: 250px;
  padding: 4px 0;
}
input,
textarea {
  background-color: transparent;
  padding-top: 2px;
  margin-top: 2px;
  border-bottom-width: 2px;
  border-color: rgb(75 85 99);
}
input:focus,
textarea:focus {
  background-color: rgba(245, 39, 200, 0.08);
  border-radius: 5px;
  outline: none;
}

label {
  color: rgb(107 114 128);
}
</style>
