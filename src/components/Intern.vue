<template>
  <v-container>
    <h2 class="text-h4 text-sm-h3">Intern</h2>

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
          color: "red darken-2",
          icon: "mdi-cart-outline",
          term: "2020年8月 9days",
          name: "楽天株式会社",
          content:
            "５人１チームで新規プロダクトを考え、設計・開発を行いました。私のチームはFlaskとVueとPostgreSQLを用いて旅行に特化したSNSを作成しました。"
        },
        {
          color: "orange darken-2",
          icon: "mdi-chef-hat",
          term: "2020年9月 5days",
          name: "クックパッド株式会社",
          content:
            "前半２日間でRailsのハンズオンやサービス開発手法について学び、後半３日間でテーマに沿ったWEBアプリケーションを設計・開発しました。"
        },
        {
          color: "indigo darken-1",
          icon: "mdi-graph",
          term: "2020年9月 1day",
          name: "株式会社ファンコミュニケーションズ",
          content:
            "広告主のためのプラットフォームであるDSPの実装をPHPで行いました。"
        },
        {
          color: "grey darken-4",
          icon: "mdi-sail-boat",
          term: "2020年11月 2days",
          name: "株式会社VOYAGE GROUP",
          content:
            "４人１チームとなり、GoとAWSを用いてパフォーマンスチューニングを行いました。"
        },
        {
          color: "light-green darken-1",
          icon: "mdi-television-classic",
          term: "2021年3月 2days",
          name: "株式会社サイバーエージェント",
          content:
            "ABEMAの視聴データを題材に機械学習を用いた番組レコメンド機能を作成し、それをAPIに組み込む体験をしました。私は自由課題としてCodeDeployを用いた自動デプロイに挑戦しました。"
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
