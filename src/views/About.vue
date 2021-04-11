<template>
  <div class="about">
    <div class="about-header">
      <div class="about-photo">照片吧</div>
      <div class="about-info">
        <div>姓名: 星辰</div>
        <div>性别: 男</div>
        <div>爱好: 罗小黑</div>
        <div>其他:</div>
        <div>其他:</div>
        <div>其他:</div>
      </div>
    </div>
    <div class="about-body">
      <div class="about-title">个人经历</div>
      <div class="about-timeline">
        <div class="about-timeline-node" v-for="(item, i) in list" :key="i">
          <div class="node-time-container">{{ item.date }}</div>
          <div class="node-container">
            <div class="node-name">{{ item.title }}</div>
            <div class="node-desc" v-if="item.desc">{{ item.desc }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  props: {},
  data() {
    return {
      list: [
        { date: "2016-06", title: "大学毕业" },
        { date: "2016-07", title: "入职上海恒生聚源数据有限公司" },
        { date: "2016-12", title: "入职北京众标智能科技有限公司上海分公司" },
        { date: "2017-01", title: "angular" },
        { date: "2017-07", title: "vue" },
        { date: "2018-07", title: "微信小程序" },
        { date: "2019-07", title: "百度小程序" },
        { date: "2020-06", title: "入职上海融达互联科技有限公司长沙分公司" },
        { date: "2021-04", title: "未完待续" },
      ],
    };
  },
  computed: {},
  created() {},
  methods: {},
};
</script>

<style lang="scss">
.about {
  width: 1200px;
  margin: 0 auto;
  padding-top: 20px;
  .about-header {
    display: flex;
    padding-bottom: 40px;
    border-bottom: 5px solid #ccc;
  }
  .about-photo {
    width: 160px;
    height: 200px;
    background: #eccc68;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .about-info {
    margin-left: 20px;
    font-size: 16px;
    line-height: 2em;
  }
  .about-body {
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .about-timeline {
    display: flex;
    flex-direction: column;
    padding-left: 500px;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      top: 10px;
      left: 498px;
      bottom: 0;
      width: 2px;
      background: #1e90ff;
    }
  }
  .about-timeline-node {
    position: relative;
    // border-left: 2px solid #5352ed;
    padding-left: 15px;
    min-height: 160px;
    // padding-bottom: 30px;
    &::before {
      content: "";
      position: absolute;
      left: -6px;
      top: 8px;
      width: 10px;
      height: 10px;
      background: #1e90ff;
      border-radius: 50%;
    }
    .node-time-container {
      position: absolute;
      width: 70px;
      left: -90px;
      background: #eccc68;
      font-size: 12px;
      text-align: center;
      border-radius: 4px;
      padding: 4px;
    }
    .node-container {
      background: rgba(112, 161, 255, 0.8);
      padding: 7px 15px;
      width: 505px;
      color: #fff;
    }
    .node-name {
      font-size: 16px;
      font-weight: 700;
      line-height: 20px;
    }
    .node-desc {
      font-size: 14px;
      margin-top: 5px;
    }
  }
  .about-timeline-node:nth-child(even) {
    .node-time-container {
      position: static;
    }
    .node-container {
      position: absolute;
      top: 0;
      left: -550px;
    }
    .node-name {
      text-align: right;
    }
  }
  $title-color: #666;
  .about-title {
    padding: 0 0 20px;
    text-align: center;
    font-size: 30px;
    position: relative;
    display: inline-block;
    color: $title-color;
    &::before {
      content: "";
      position: absolute;
      width: 100px;
      left: -120px;
      top: 20px;
      height: 2px;
      background: $title-color;
    }
    &::after {
      content: "";
      position: absolute;
      width: 100px;
      right: -120px;
      top: 20px;
      height: 2px;
      background: $title-color;
    }
  }
}
</style>
