<template>
  <v-container>
    <h2 class="text-h4 text-sm-h3">Experience</h2>

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
          color: "grey darken-4",
          icon: "mdi-table-clock",
          term: "2020年6月1日〜2021年1月28日",
          name: "デジタルクルーズ株式会社",
          content:
            "私1人で使用言語や設計を考え、エンジニアの方にアドバイスをいただきながら、GoとVueとMySQLを使って勤怠管理システムを実装し、EC2にデプロイしました。"
        },
        {
          color: "deep-orange darken-3",
          icon: "mdi-video-account",
          term: "2021年4月20日〜2021年12月21日",
          name: "株式会社スタジアム",
          content:
            "GoとgRPCを用いてWeb面接システムの改善・開発を行いました。また、ReactとWebRTCを用いて面接画面などのUI・UXの改善を行いました。Storybookを用いた開発やCodeceptJSを用いたE2Eテストを経験させてもらいました。"
        }
      ]
    };
  }
});
</script>
