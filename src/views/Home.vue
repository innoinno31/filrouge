<template>
  <div class="main h-screen w-screen relative">
    <div class="logoRP absolute w-screen flex top-6">
      <img
        src="http://localhost:8080/images/RpSignBlanc.png"
        class="w-72 mx-auto bg-black/10"
        alt=""
      />
    </div>
    <div class="w-screen absolute bottom-6 flex">
      <p
        class="text-medium text-white font-medium bg-black/15 leading-relaxed text-center mx-auto"
      >
        photographe basé à toulouse <br />
        email : contact@franckrp-photographe.com
      </p>
    </div>
    <div class="w-screen absolute bottom-24 flex">
      <router-link :to="{ name: 'wedding' }" class="mx-auto">
        <button
          class="border border-2 rounded border-white text-center px-4 py-2 text-white bg-black/50"
        >
          Entrée site
        </button>
      </router-link>
    </div>
    <div class="socialLinks absolute"></div>
    <div id="backgroundImage" class="bg-none bg-fixed h-full w-full"></div>
  </div>
</template>
<script>
export default {
  name: "HomePage",
}
</script>

<style scoped>
#backgroundImage {
  background-image: url("http://localhost:8080/images/homePicture.jpg");
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
