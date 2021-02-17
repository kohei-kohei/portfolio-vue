<template>
  <v-container>
    <h2 class="display-1">About</h2>

    <v-row justify="center" align="center" align-content="center">
      <v-col cols="12" sm="4" md="3">
        <v-avatar size="150">
          <img src="@/assets/img/mycat.jpeg" alt="mycat" />
        </v-avatar>
      </v-col>

      <v-col cols="12" sm="8" lg="6">
        <v-card>
          <v-card flat>
            <v-card-title>経歴</v-card-title>

            <v-card-text class="d-flex align-start">
              <p class="year">'16年4月〜</p>
              <p class="describe">
                CSの基礎、画像・音声処理
                <v-icon :size="iconSize" color="grey darken-1">
                  mdi-language-c </v-icon
                >/
                <v-icon :size="iconSize" color="blue darken-3">
                  mdi-language-cpp
                </v-icon>
              </p>
            </v-card-text>

            <v-card-text class="d-flex align-start">
              <p class="year">'19年4月〜</p>
              <p class="describe">
                機械学習を用いた自然言語処理の研究
                <v-icon :size="iconSize">
                  mdi-language-python
                </v-icon>
              </p>
            </v-card-text>

            <v-card-text class="d-flex align-start">
              <p class="year">'22年4月〜</p>
              <p class="describe">
                バックエンドエンジニア(予定)
                <v-icon size="32px" color="light-blue">
                  mdi-language-go
                </v-icon>
              </p>
            </v-card-text>
          </v-card>

          <v-card flat>
            <v-card-title>情報</v-card-title>

            <v-card-text class="d-flex align-start">
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

            <v-card-text class="d-flex align-start">
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

            <v-card-text class="d-flex align-start">
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
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export type DataType = {
  iconSize: string;
};

export default Vue.extend({
  data: () => ({ iconSize: "22px" })
});
</script>

<style lang="scss" scoped>
.v-card {
  .v-card__text {
    color: rgba(0, 0, 0, 0.87) !important;
    padding: 4px 16px;
  }
  p {
    margin-bottom: 10px;
    text-align: left;
  }
  .year {
    margin-right: 20px;
    white-space: nowrap;
  }
  .item-name {
    white-space: nowrap;
    width: 60px;
  }
}
</style>
