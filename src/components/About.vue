<template>
  <v-container>
    <h2 class="display-1">About</h2>

    <v-avatar size="150">
      <img src="@/assets/img/mycat.jpeg" alt="mycat" />
    </v-avatar>

    <p>機械学習を用いた研究をしています</p>

    <a href="https://github.com/kohei-kohei">
      <v-icon size="32px" class="black--text">
        mdi-github
      </v-icon>
      kohei-kohei
    </a>

    <a href="https://scrapbox.io/kohei-kohei-develop/">
      Scrapbox
    </a>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data: () => ({})
});
</script>

<style lang="scss" scoped>
.github-logo {
  height: 30px;
  width: 30px;
}
a {
  display: block;
  text-decoration: none;
}
</style>
