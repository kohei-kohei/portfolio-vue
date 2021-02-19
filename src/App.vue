<template>
  <v-app>
    <v-main>
      <Top />
      <About />
      <Skill />
      <Experience />
      <Intern />
    </v-main>

    <Footer />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Top from "./components/Top.vue";
import About from "./components/About.vue";
import Skill from "./components/Skill.vue";
import Experience from "./components/Experience.vue";
import Intern from "./components/Intern.vue";
import Footer from "./components/Footer.vue";

export default Vue.extend({
  name: "App",

  components: {
    Top,
    About,
    Skill,
    Experience,
    Intern,
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
  margin: 20px auto;
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
