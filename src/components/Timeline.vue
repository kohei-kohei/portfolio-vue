<template>
  <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
    <v-timeline-item
      v-for="(item, i) in items"
      :key="i"
      :color="item.color"
      :icon="item.icon"
      fill-dot
    >
      <v-card :color="item.color" dark>
        <span class="mt-2 ml-4">{{ item.term }}</span>
        <v-card-title class="title pt-0 pb-2">
          {{ item.name }}
        </v-card-title>
        <v-card-text class="white text--primary pa-4">
          <p class="mb-0">
            {{ item.content }}
          </p>
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";

export default Vue.extend({
  props: {
    items: Object as PropType<DataType>
  }
});
</script>

<style lang="scss" scoped>
.v-card {
  text-align: left;
  span {
    display: inline-block;
  }
}
</style>
