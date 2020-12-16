<template>
  <div>
    <Menu />
    <Jumbotron />
    <!-- <AuthenticationPanelComponent /> -->
    <FeatureOne />
  </div>
</template>

<script>
import Menu from "@/components/Menu.vue";
import Jumbotron from "@/components/Jumbotron.vue";
// import AuthenticationPanelComponent from "@/components/AuthPanel.vue";
import FeatureOne from "@/components/FeatureOne.vue";
export default {
  name: "DropBoxHomeView",
  components: {
    Menu,
    Jumbotron,
    // AuthenticationPanelComponent,
    FeatureOne,
  },
};
</script>

<style lang="scss" scoped>
</style>