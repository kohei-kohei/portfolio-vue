<template>
  <v-container
    class="top d-flex align-center justify-center"
    fluid
    :style="{ height: height + 'px' }"
  >
    <h1 class="text-h3 text-sm-h2 text-lg-h1 white--text">
      Welcome to Kohei's page
    </h1>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export type DataType = {
  height: number;
  width: number;
};

export default Vue.extend({
  data(): DataType {
    return {
      height: window.innerHeight,
      width: window.innerWidth
    };
  },
  methods: {
    handleResize: function() {
      this.height = window.innerHeight;
      this.width = window.innerWidth;
    }
  },
  mounted: function() {
    window.addEventListener("resize", () => {
      // Safariのタブ対策
      // 画面の横サイズが変わった時だけ再計算する
      if (this.width !== window.innerWidth) {
        this.handleResize();
      }
    });
  },
  beforeDestroy: function() {
    window.removeEventListener("resize", this.handleResize);
  }
});
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Lora:ital@1&display=swap");

.top {
  background: #8360c3;
  background: -webkit-linear-gradient(to bottom right, #8360c3, #2ebf91);
  background: linear-gradient(to bottom right, #8360c3, #2ebf91);
  h1 {
    background: rgba($color: #000000, $alpha: 0.1);
    font-family: "Lora", serif !important;
    font-style: italic;
    padding: 30px;
  }
}
</style>
