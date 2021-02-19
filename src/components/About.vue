<template>
  <v-container>
    <h2 class="text-h4 text-sm-h3">About</h2>

    <v-row justify="center" align="center" align-content="center">
      <v-col cols="12" sm="4" md="3">
        <v-avatar size="200">
          <img src="@/assets/img/mycat.jpeg" alt="mycat" />
        </v-avatar>
      </v-col>

      <v-col cols="12" sm="8" lg="6">
        <v-card>
          <v-card flat>
            <v-card flat>
              <v-card-title>情報</v-card-title>

              <v-card-text class="d-flex align-start text--primary">
                <p class="item-name mr-5 mr-sm-12">Name</p>
                <p>Kohei</p>
              </v-card-text>

              <v-card-text class="d-flex align-start text--primary">
                <p class="item-name mr-5 mr-sm-12">GitHub</p>
                <p>
                  <a href="https://github.com/kohei-kohei">
                    <v-icon :size="iconSize" color="black">
                      mdi-github
                    </v-icon>
                    kohei-kohei
                  </a>
                </p>
              </v-card-text>

              <v-card-text class="d-flex align-start text--primary">
                <p class="item-name mr-5 mr-sm-12">Memo</p>
                <p>
                  <a href="https://scrapbox.io/kohei-kohei-develop/">
                    <v-icon :size="iconSize" color="green darken-1">
                      mdi-file-document-edit-outline
                    </v-icon>
                    Scrapbox
                  </a>
                </p>
              </v-card-text>

              <v-card-text class="d-flex align-start text--primary">
                <p class="item-name mr-5 mr-sm-12">Like</p>
                <p>
                  <v-icon :size="iconSize" color="black">
                    mdi-apple
                  </v-icon>
                  <v-icon :size="iconSize" color="blue">
                    mdi-microsoft-visual-studio-code
                  </v-icon>
                  /
                  <v-icon :size="iconSize" color="black">
                    mdi-soccer
                  </v-icon>
                  <v-icon :size="iconSize" color="black">
                    mdi-badminton
                  </v-icon>
                  <v-icon :size="iconSize" color="black">
                    mdi-snowboard
                  </v-icon>
                  /
                  <v-icon :size="iconSize" color="red accent-2">
                    mdi-glass-cocktail
                  </v-icon>
                  <v-icon :size="iconSize" color="black">
                    mdi-airplane-takeoff
                  </v-icon>
                  <v-icon :size="iconSize" color="red">
                    mdi-music-box
                  </v-icon>
                  <v-icon :size="iconSize" color="amber darken-2">
                    mdi-cat
                  </v-icon>
                </p>
              </v-card-text>
            </v-card>

            <v-card-title>経歴</v-card-title>

            <v-card-text
              class="d-flex align-start text--primary"
              v-for="(background, index) in background"
              :key="index"
            >
              <p class="text-no-wrap mr-5">{{ background.year }}</p>
              <p>
                {{ background.content }}
                <v-icon :size="iconSize" :color="background.color">
                  {{ background.icon }}
                </v-icon>
              </p>
            </v-card-text>
          </v-card>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export type DataType = {
  iconSize: string;
  backgrounds: {
    color: string;
    icon: string;
    year: string;
    content: string;
  }[];
};

export default Vue.extend({
  data: () => ({
    iconSize: "22px",
    background: [
      {
        color: "grey darken-1",
        icon: "mdi-language-c",
        year: "'16年4月〜",
        content: "CSの基礎、画像・音声処理"
      },
      {
        color: "grey darken-1",
        icon: "mdi-language-python",
        year: "'19年4月〜",
        content: "機械学習を用いた自然言語処理の研究"
      },
      {
        color: "light-blue",
        icon: "mdi-language-go",
        year: "'22年4月〜",
        content: "バックエンドエンジニア(予定)"
      }
    ]
  })
});
</script>

<style lang="scss" scoped>
.v-card {
  .v-card__text {
    padding: 4px 16px;
  }
  p {
    margin-bottom: 10px;
    text-align: left;
  }
  .item-name {
    width: 60px;
  }
}
</style>
