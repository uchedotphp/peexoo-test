<template>
  <div id="app">
    <DropBox />
  </div>
</template>

<script>
import DropBox from "@/components/DropBox.vue";
export default {
  name: "App",
  components: {
    DropBox,
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
