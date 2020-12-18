<template>
  <div>
    <Menu />
    <Jumbotron />
    <AuthenticationPanelComponent />
    <FeatureOne />
    <FeatureThree />
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
gsap.registerPlugin(ScrollTrigger);

import Menu from "@/components/Menu.vue";
import Jumbotron from "@/components/Jumbotron.vue";
import AuthenticationPanelComponent from "@/components/AuthPanel.vue";
import FeatureOne from "@/components/FeatureOne.vue";
import FeatureThree from "@/components/FeatureThree.vue";
export default {
  name: "DropBoxHomeView",
  components: {
    Menu,
    Jumbotron,
    AuthenticationPanelComponent,
    FeatureOne,
    FeatureThree,
  },
  mounted() {
    gsap.to(".auth-pane", {
      transform: "translate(45vw, 0)",
      scrollTrigger: {
        trigger: ".img-pane",
        start: "top top",
        ease: "power1.inOut",
      },
    });
    // gsap.from(".auth-pane", {
    //   transform: "translate(-41.666667%, 0)",
    //   scrollTrigger: {
    //     trigger: ".img-pane",
    //     start: "bottom bottom",
    //     ease: "power1.inOut",
    //   },
    // });
  },
};
</script>

<style lang="scss" scoped>
</style>