<template>
  <v-container>
    <h2 class="text-h4 text-sm-h3">Skill</h2>

    <h3 class="text-h5">
      <v-icon size="20px" color="black"> mdi-file-code-outline </v-icon>
      langage
      <v-icon size="20px" color="black"> mdi-file-code-outline </v-icon>
    </h3>

    <v-row justify="center" align-content="center">
      <v-col v-for="(lang, index) in langs" :key="index" sm="2">
        <img :src="lang.src" :alt="lang.name" />
        <p>{{ lang.name }}</p>
      </v-col>
    </v-row>

    <h3 class="text-h5">
      <v-icon size="18px" color="black"> mdi-tools </v-icon>
      other
      <v-icon size="18px" color="black"> mdi-tools </v-icon>
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
          src: require("@/assets/img/gopher.svg"),
          name: "Go"
        },
        {
          src: require("@/assets/img/typescript-icon.svg"),
          name: "TypeScript"
        },
        {
          src: require("@/assets/img/react.svg"),
          name: "React"
        },
        {
          src: require("@/assets/img/vue.svg"),
          name: "Vue.js"
        },
        {
          src: require("@/assets/img/python.svg"),
          name: "Python"
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
          src: require("@/assets/img/firebase.svg"),
          name: "firebase"
        },
        {
          src: require("@/assets/img/grpc.svg"),
          name: "gRPC"
        },
        {
          src: require("@/assets/img/webrtc.svg"),
          name: "WebRTC"
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
