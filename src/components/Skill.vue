<template>
  <v-container>
    <h2 class="display-1">Skill</h2>

    <h3 class="headline">langage</h3>

    <v-row justify="center" align-content="center">
      <v-col v-for="(lang, index) in langs" :key="index" cols="1">
        <img :src="lang.src" :alt="lang.name" />
        <p>{{ lang.name }}</p>
      </v-col>
    </v-row>

    <h3 class="headline">other</h3>

    <v-row justify="center" align-content="center">
      <v-col v-for="(tool, index) in tools" :key="index" cols="1">
        <img :src="tool.src" :alt="tool.name" />
        <p>{{ tool.name }}</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export type DataType = {
  langs: { src: string; name: string }[];
  tools: { src: string; name: string }[];
};

export default Vue.extend({
  data(): DataType {
    return {
      langs: [
        {
          src: require("@/assets/img/logo.png"),
          name: "Vue"
        },
        {
          src: require("@/assets/img/python.svg"),
          name: "Python"
        },
        {
          src: require("@/assets/img/gopher.svg"),
          name: "Go"
        },
        {
          src: require("@/assets/img/php.svg"),
          name: "PHP"
        },
        {
          src: require("@/assets/img/mysql.svg"),
          name: "MySQL"
        }
      ],
      tools: [
        {
          src: require("@/assets/img/git.svg"),
          name: "Git"
        },
        {
          src: require("@/assets/img/docker.svg"),
          name: "Docker"
        },
        {
          src: require("@/assets/img/aws-ec2.svg"),
          name: "EC2"
        }
      ]
    };
  }
});
</script>

<style lang="scss" scoped>
.col {
  margin: 20px 15px;
}
p {
  font-size: 18px;
}
img {
  height: 50px;
  width: 50px;
}
</style>
