<template>
  <div class="featThree bg-white py-32">
    <div class="max-w-screen-xl mx-auto">
      <p class="text-3xl font-bold pb-10">
        Find the right Dropbox plan for you
      </p>
      <div class="grid grid-cols-2">
        <div>
          <p class="text-5xl font-bold pb-10">
            For freelancers and <br />
            solo workers
          </p>
          <button class="bg-blue-500 text-white px-16 py-3 capitalize">
            get dropbox
          </button>
        </div>
        <div>
          <p class="text-5xl font-bold pb-10">
            For businesses and <br />
            teams of any size
          </p>
          <button class="bg-blue-500 text-white px-16 py-3 capitalize">
            get dropbox business
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
gsap.registerPlugin(ScrollTrigger);

export default {
  name: "FeatureThreeComponent",
  mounted() {
    gsap.to(".featThree", {
      // transform: "translate(45vw, 0)",
      scrollTrigger: {
        trigger: ".featThree",
        start: "top top",
        // ease: "power1.inOut",
        pin: true
      },
    });
  },
};
</script>

<style lang="scss" scoped>
.featThree {
}
</style>