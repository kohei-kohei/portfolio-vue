<template>
  <v-app>
    <v-main>
      <Top />
      <About />
      <Skill />
      <Timeline />
    </v-main>

    <Footer />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Top from "./components/Top.vue";
import About from "./components/About.vue";
import Skill from "./components/Skill.vue";
import Timeline from "./components/Timeline.vue";
import Footer from "./components/Footer.vue";

export default Vue.extend({
  name: "App",

  components: {
    Top,
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
p {
  font-size: 18px;
}
a {
  text-decoration: none;
  font-size: 18px;
}
</style>
