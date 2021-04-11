<template>
  <div class="article">
    <div class="list">
      <div
        class="list-item"
        :style="{ 'background-color': COLORS[i] }"
        v-for="(item, i) in list"
        :key="i"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Article",
  props: {},
  data() {
    return {
      list: [
        { title: "xxx" },
        { title: "xxx" },
        { title: "xxx" },
        { title: "xxx" },
        { title: "xxx" },
      ],
    };
  },
  computed: {},
  created() {},
  methods: {},
};
</script>

<style lang="scss">
.article {
}
</style>
