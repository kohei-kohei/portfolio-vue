<template>
  <v-footer dark padless>
    <v-card
      flat
      tile
      width="100%"
      class="indigo lighten-1 white--text text-center"
    >
      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        &copy; 2021 — <strong>Kohei</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"]
  })
});
</script>
