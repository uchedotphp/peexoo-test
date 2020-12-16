<template>
  <div>
    <Menu />
    <Jumbotron />
    <AuthenticationPanelComponent />
  </div>
</template>

<script>
import Menu from "@/components/Menu.vue";
import Jumbotron from "@/components/Jumbotron.vue";
import AuthenticationPanelComponent from '@/components/AuthPanel.vue';
export default {
  name: "DropBoxHomeView",
  components: {
    Menu,
    Jumbotron,
    AuthenticationPanelComponent
  },
};
</script>

<style lang="scss" scoped>
</style>