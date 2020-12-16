<template>
  <div>
    <Menu />
    <Jumbotron />
  </div>
</template>

<script>
import Menu from "@/components/Menu.vue";
import Jumbotron from "@/components/Jumbotron.vue";
export default {
  name: "DropBoxHomeView",
  components: {
    Menu,
    Jumbotron,
  },
};
</script>

<style lang="scss" scoped>
</style>