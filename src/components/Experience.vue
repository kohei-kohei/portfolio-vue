<template>
  <v-container>
    <h2 class="text-h4 text-sm-h3">Experience</h2>

    <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
      <v-timeline-item
        v-for="(intern, i) in interns"
        :key="i"
        :color="intern.color"
        :icon="intern.icon"
        fill-dot
      >
        <v-card :color="intern.color" dark>
          <span class="mt-2 ml-4">{{ intern.term }}</span>
          <v-card-title class="title pt-0 pb-2">
            {{ intern.name }}
          </v-card-title>
          <v-card-text class="white text--primary pa-4">
            <p class="mb-0">
              {{ intern.content }}
            </p>
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export type DataType = {
  interns: {
    color: string;
    icon: string;
    term: string;
    name: string;
    content: string;
  }[];
};

export default Vue.extend({
  data(): DataType {
    return {
      interns: [
        {
          color: "grey darken-4",
          icon: "mdi-video-image",
          term: "2020年6月1日〜2021年1月28日",
          name: "デジタルクルーズ株式会社",
          content:
            "私1人で使用言語や設計を考え、エンジニアの方にアドバイスをいただきながら、GoとVueとMySQLを使って勤怠管理システムを実装し、EC2にデプロイしました。"
        }
      ]
    };
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
