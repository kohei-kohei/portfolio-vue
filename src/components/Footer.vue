<template>
  <v-footer dark padless>
    <v-card flat tile width="100%" class="purple lighten-4 text-center">
      <v-card-text class="subtitle-1 black--text pb-2">
        This web page is created by
        <v-icon color="green darken-2">
          mdi-vuejs
        </v-icon>
        <v-icon color="light-blue lighten-2">
          mdi-vuetify
        </v-icon>
        <v-icon color="blue">
          mdi-language-typescript
        </v-icon>
      </v-card-text>

      <v-card-text class="black--text pt-2">
        &copy; 2021 — <strong>Kohei</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data: () => ({
    //
  })
});
</script>
