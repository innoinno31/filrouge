<template>
  <div class="mainCointainer h-screen pb-24">
    <div class="image max-h-fit h-full">
      <div class="h-2/3 w-screen">
        <div
          id="backgroundImage"
          class="bg-none h-full w-full relative flex flex-col items-center"
        >
          <div
            class="text-gray-800 flex absolute w-1/2 justify-between bottom-0 py-2 px-12 bg-gray-300/50 rounded-xl text-sm"
          >
            <div class="firstParagraph">
              <p>
                <i class="material-icons text-xl pr-2">house</i>

                47 rue du stade
              </p>
              <p>31200 CUGNAUX</p>
            </div>
            <div class="secondParagraph">
              <p>
                <i class="material-icons text-xl pr-2">phone</i>
                0781704790
              </p>
              <p>
                <i class="material-icons text-xl pr-2">mail</i>
                contact@franckrp-photographe.com
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex w-1/2 justify-center mx-auto items-center">
        <h1 class="text-3xl pr-6 py-6">Gardons le contact !</h1>
        <i
          class="material-icons animate-bounce"
          id="bounceIcon"
          style="font-size: 48px"
          >keyboard_arrow_down</i
        >
      </div>
      <!-- Beginning of the contact form -->
      <div class="contactForm w-2/3 flex flex-col mx-auto justify-center pb-24">
        <p class="text-center py-2">
          Merci de remplir le formulaire de contact ou de me contacter au
          07.81.70.47.90
        </p>

        <div class="py-6">
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
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ContactPage",
};
</script>

<style scoped>
#backgroundImage {
  background-image: url("/images/small_images/handWedding.jpg");
  background-attachment: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
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
