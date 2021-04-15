<template>
  <div class="article">
    <div class="list">
      <div class="loading" v-if="!list.length">加载中...</div>
      <div
        class="list-item"
        :style="{ 'background-color': COLORS[i] }"
        v-for="(item, i) in list"
        :key="i"
        @click="toDetail(item)"
      >
        <div class="article-title">
          <span>{{ item.title }}</span>
          <span
            class="label"
            v-for="label in item.labels"
            :key="label.node_id"
            >{{ label.name }}</span
          >
        </div>
        <div class="article-update_at">{{ item.updated_at }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Article",
  props: {},
  data() {
    return {
      list: [],
    };
  },
  computed: {},
  created() {
    axios
      .get("https://api.github.com/repos/killer0124/blog/issues")
      .then(({ data }) => {
        console.log(data);
        this.list = data;
      });
  },
  methods: {
    toDetail(item) {
      this.$router.push({ name: "ArticleDetail", params: { id: item.number } });
    },
  },
};
</script>

<style lang="scss">
.article {
  .article-title {
    font-size: 24px;
    .label {
      font-size: 12px;
      padding: 0 10px;
      border-radius: 10px;
      color: #ffffff;
      background: cornflowerblue;
      margin-left: 10px;
    }
  }
  .article-update_at {
    font-size: 12px;
    color: #eee;
    margin-top: 10px;
    margin-bottom: 5px;
  }
}
</style>
