<template>
  <div>
    <Menu />
    <Jumbotron />
    <AuthenticationPanelComponent />
    <FeatureOne />
    <FeatureTwo />
    <FeatureThree />
    <Footer />
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
import FeatureTwo from "@/components/FeatureTwo.vue";
import FeatureThree from "@/components/FeatureThree.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "DropBoxHomeView",
  components: {
    Menu,
    Jumbotron,
    AuthenticationPanelComponent,
    FeatureOne,
    FeatureTwo,
    FeatureThree,
    Footer,
  },
  mounted() {
    gsap.to(".auth-pane", {
      transform: "translate(45vw, 0)",
      scrollTrigger: {
        trigger: ".img-pane",
        start: "top top",
        ease: "power1.inOut",
        toggleActions: "play none none reverse"
      }
    });
  },
};
</script>

<style lang="scss" scoped>
</style>