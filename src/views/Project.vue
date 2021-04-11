<template>
  <div class="project">
    <div class="list">
      <div
        class="list-item"
        :style="{ 'background-color': COLORS[i] }"
        v-for="(item, i) in list"
        :key="item.title"
      >
        <div class="project-row project-between">
          <div class="project-title">{{ item.title }}</div>
          <div class="project-date">2020-01-01</div>
        </div>
        <div class="project-info" style="width: 300px; margin-top: 10px">
          <div class="project-platform">平台: PC</div>
          <div class="project-jg">技术栈: Vue</div>
        </div>
        <div class="project-info" style="width: 300px; margin-top: 10px">
          <div class="project-platform">开发周期: 3个月</div>
          <!-- <div class="project-platform">平台: PC</div> -->
        </div>
        <div class="project-info" style="width: 300px; margin-top: 10px">
          <div class="project-platform">简要描述: 这个项目的功能</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Project",
  props: {},
  data() {
    return {
      list: [
        { title: "项目名称-1" },
        { title: "项目名称-2" },
        { title: "项目名称-3" },
        { title: "项目名称-4" },
        { title: "项目名称-5" },
        { title: "项目名称-11" },
        { title: "项目名称-12" },
        { title: "项目名称-13" },
        { title: "项目名称-14" },
        { title: "项目名称-15" },
      ],
    };
  },
  computed: {},
  created() {},
  methods: {},
};
</script>

<style lang="scss">
.project-row {
  display: flex;
}
.project-between {
  align-items: center;
  justify-content: space-between;
}
.project-info {
  display: flex;
  & > div {
    width: 200px;
  }
}
.project-title {
  font-size: 30px;
  border-bottom: 4px solid rgba(255, 255, 255, 0.5);
}

@keyframes slide-up-in {
  from {
    opacity: 0;
    transform: translate3d(0, 200px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
</style>
