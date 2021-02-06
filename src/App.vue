<template>
  <v-app>
    <Nav />

    <v-main>
      <v-container>
        <img height="10%" width="10%" contain src="@/assets/img/gopher.svg" />
        <img height="10%" width="10%" contain src="@/assets/img/go.svg" />
        <img height="10%" width="10%" contain src="@/assets/img/python.svg" />
        <img height="10%" width="10%" contain src="@/assets/img/aws-ec2.svg" />
      </v-container>
      <v-container>
        <Timeline />
      </v-container>
    </v-main>

    <Footer />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Nav from "./components/Nav.vue";
import Timeline from "./components/Timeline.vue";
import Footer from "./components/Footer.vue";

export default Vue.extend({
  name: "App",

  components: {
    Nav,
    Timeline,
    Footer
  },

  data: () => ({
    //
  })
});
</script>
