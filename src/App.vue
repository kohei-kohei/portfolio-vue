<template>
  <v-app>
    <Nav />

    <v-main>
      <About />
      <Skill />
      <Timeline />
    </v-main>

    <Footer />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Nav from "./components/Nav.vue";
import About from "./components/About.vue";
import Skill from "./components/Skill.vue";
import Timeline from "./components/Timeline.vue";
import Footer from "./components/Footer.vue";

export default Vue.extend({
  name: "App",

  components: {
    Nav,
    About,
    Skill,
    Timeline,
    Footer
  },

  data: () => ({
    //
  })
});
</script>

<style lang="scss">
.container {
  text-align: center;
}
h2 {
  margin: 30px auto 20px;
}
h3 {
  margin: 20px auto;
}
</style>
