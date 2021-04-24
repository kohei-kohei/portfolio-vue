<template>
  <v-container>
    <h2 class="text-h4 text-sm-h3">Intern</h2>

    <Timeline :items="interns" />
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Timeline from "./Timeline.vue";

export default Vue.extend({
  components: {
    Timeline
  },
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
