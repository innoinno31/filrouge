<template>
  <div class="main h-screen">
    <div class="container w-3/4 mx-auto flex flex-col my-5">
      <h1 class="text-xl my-5 mx-auto">
        Vous souhaitez voir vos photos? et vous ne savez pas comment cela
        fonctionne? Je suis la pour vous aider.
      </h1>
      <p class="mx-auto text-left">
        Pour voir vos photos, il suffit de rentrer votre identifiant qui
        commence par FR59- , ainsi que votre mot de passe.
      </p>
      <p class="mx-auto text-center mb-10">
        Besoin d'aide? Vous pouvez me contacter via
        <router-link
          :to="{ name: 'contact' }"
          class="text-pink-700 underline underline-offset-2"
        >
          mon formulaire de contact </router-link
        >, ou au
        <i class="material-icons align-text-bottom">call</i>
        07.81.70.47.90
      </p>
      <div id="jingooGallery" class="my-5"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ClientPictures",
  mounted: function () {
    (function (i, s, o, g, r, a, m) {
      i["JingooGalleryObject"] = r;
      (i[r] =
        i[r] ||
        function () {
          (i[r].q = i[r].q || []).push(arguments);
        }),
        (i[r].l = 1 * new Date());
      (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
      a.async = 1;
      a.src = g;
      m.parentNode.insertBefore(a, m);
    })(
      window,
      document,
      "script",
      "https://www.jingoo.com/api/accesDistant/BGgDZVYEAjFdOlcjWzMHZgN2VDBTcFc8XTENZ1swDWYFNVBhBDZVN1lgByFTNVw5BnUFaV1hVzpZbQQ/CToJJwR1A1NWMQIpXTpXJVso.js",
      "JingooGalleryLoader"
    );
  },
};
</script>
