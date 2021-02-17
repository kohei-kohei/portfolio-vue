<template>
  <v-container>
    <h2 class="display-1">Skill</h2>

    <h3 class="headline">
      <v-icon size="20px" color="black"> mdi-xml </v-icon>
      langage
      <v-icon size="20px" color="black"> mdi-xml </v-icon>
    </h3>

    <v-row justify="center" align-content="center">
      <v-col v-for="(lang, index) in langs" :key="index" sm="2">
        <img :src="lang.src" :alt="lang.name" />
        <p>{{ lang.name }}</p>
      </v-col>
    </v-row>

    <h3 class="headline">
      <v-icon size="20px" color="black"> mdi-tools </v-icon>
      other
      <v-icon size="20px" color="black"> mdi-tools </v-icon>
    </h3>

    <v-row justify="center" align-content="center">
      <v-col v-for="(tool, index) in tools" :key="index" sm="2">
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
.row {
  max-width: 768px;
  margin: 0 auto;
}
p {
  font-size: 18px;
}
img {
  height: 50px;
  width: 50px;
}
</style>
