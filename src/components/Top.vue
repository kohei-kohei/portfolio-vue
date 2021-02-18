<template>
  <v-container class="top d-flex align-center justify-center" fluid>
    <h1 class="display-3 text-h3 text-sm-h2 text-lg-h1 white--text">
      Welcome to Kohei's page
    </h1>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data: () => ({
    //
  })
});
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Lora:ital@1&display=swap");

.top {
  background: #8360c3;
  background: -webkit-linear-gradient(to bottom right, #8360c3, #2ebf91);
  background: linear-gradient(to bottom right, #8360c3, #2ebf91);
  min-height: 100vh;
  h1 {
    background: rgba($color: #000000, $alpha: 0.1);
    font-family: "Lora", serif !important;
    font-style: italic;
    padding: 30px;
  }
}
</style>
