<template>
  <div class="article-detail">
    <div class="article-title">{{ detail.title }}</div>
    <div class="markdown-body" v-html="body"></div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ArticleDetail",
  props: {},
  data() {
    return {
      detail: {},
    };
  },
  computed: {
    body() {
      return window.marked(this.detail.body || "");
    },
  },
  created() {
    axios
      .get("https://api.github.com/repos/killer0124/blog/issues/1")
      .then(({ data }) => {
        console.log(data);
        this.detail = data;
      });
  },
  methods: {},
};
</script>

<style lang="scss">
.article-detail {
  background: #fefefe;
  .article-title {
    color: #5352ed;
    width: 1200px;
    margin: 0 auto;
    padding: 20px 0;
    font-size: 40px;
  }
  .markdown-body {
    width: 1200px;
    margin: 0 auto;
    background: #fff;
  }
}
</style>
