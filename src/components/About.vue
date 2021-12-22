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
            <p class="like">
              <v-icon
                v-for="(likeIcon, index) in likeIcons"
                :key="index"
                :size="iconSize"
                :color="likeIcon.color"
              >
                {{ likeIcon.icon }}
              </v-icon>
            </p>
          </v-card-text>
          <v-card-title>経歴</v-card-title>

          <v-card-text
            class="d-flex align-start text--primary"
            v-for="(background, index) in backgrounds"
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
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export type DataType = {
  iconSize: string;
  likeIcons: {
    color: string;
    icon: string;
  }[];
  backgrounds: {
    color: string;
    icon: string;
    year: string;
    content: string;
  }[];
};

export default Vue.extend({
  data(): DataType {
    return {
      iconSize: "22px",
      likeIcons: [
        {
          color: "black",
          icon: "mdi-apple"
        },
        {
          color: "blue",
          icon: "mdi-microsoft-visual-studio-code"
        },
        {
          color: "black",
          icon: "mdi-soccer"
        },
        {
          color: "black",
          icon: "mdi-badminton"
        },
        {
          color: "black",
          icon: "mdi-snowboard"
        },
        {
          color: "red accent-2",
          icon: "mdi-glass-cocktail"
        },
        {
          color: "black",
          icon: "mdi-airplane-takeoff"
        },
        {
          color: "red",
          icon: "mdi-music-box"
        },
        {
          color: "amber darken-2",
          icon: "mdi-cat"
        }
      ],
      backgrounds: [
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
          color: "",
          icon: "",
          year: "'22年4月〜",
          content: "バックエンドエンジニア(予定)"
        }
      ]
    };
  }
});
</script>

<style lang="scss" scoped>
.v-card {
  .v-card__text {
    padding: 4px 16px;
    .like {
      i:nth-child(2),
      i:nth-child(5) {
        padding-right: 12px;
      }
    }
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
