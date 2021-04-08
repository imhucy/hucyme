<template>
  <div class="home-main" @mousewheel="mouseWheelHandler">
    <div class="panel-container" :style="panel_transform">
      <div
        class="panel"
        v-for="(p, panel_page_num) in render_items"
        :key="panel_page_num"
        :style="panel_width"
      >
        <transition-group tag="div" name="box">
          <div
            class="cell"
            :class="{ 'main-cell': i === 0, 'right-main-cell': i === 7 }"
            v-for="(item, i) in panel_page_num === page ? p : []"
            :key="item + i"
          >
            <div
              class="box"
              :style="box_style(item, page, i)"
              @click="clickHandler(item, page, i)"
            >
              <i v-if="item.url" class="el-icon-link mr10"></i>
              <img
                v-if="item.modal"
                class="mr10"
                src="~@/assets/img/icon_modal.png"
              />
              {{ item.label }}
            </div>
          </div>
        </transition-group>
      </div>
    </div>
    <div class="home-main-arrow arrow-left" @click="prevPage">
      <i class="el-icon-arrow-left"></i>
    </div>
    <div class="home-main-arrow arrow-right" @click="nextPage">
      <i class="el-icon-arrow-right"></i>
    </div>
  </div>
</template>
<script>
import { chunk, throttle } from "lodash";
let box_style_cache = {};
export default {
  data() {
    return {
      page: 0,
      items: [
        { label: "Lodash 文档", url: "https://www.lodashjs.com/docs/latest" },
        {
          label: "Element UI",
          url: "https://element.eleme.cn/#/zh-CN/component/installation",
        },
        {
          label: "Echarts 配置项文档",
          url: "https://echarts.apache.org/zh/option.html",
        },
        {
          label: "Echarts Gallery",
          url:
            "https://www.makeapie.com/explore.html#sort=rank~timeframe=all~author=all",
        },
        // { label: 'Jenkins', url: 'http://101.201.42.70:8080/' },
        // { label: '中建华北项目', url: 'http://cscec1bhb.marketbox.cn/bulletin' },
        // { label: '国祯环保', url: 'xx' },
        {
          label: "易众标小程序",
          modal: "ShowQrcode",
          data: { codes: ["//www.baidu.com/img/bd_logo1.png?where=super"] },
        },
        { label: "易众标PC", url: "https://www.ezhongbiao.com/" },
        { label: "慧聪系列公众号" },
        { label: "经营决策平台" },
        { label: "啄木鸟医疗营销平台" },
        { label: "数纽知识云", url: "http://kc.zhongbiao.mobi/" },
        { label: "数据运营平台", url: "http://eagle.zhongbiao.mobi/" },
        {
          label: "厦门可视化大屏",
          url: "http://youe.zhongbiao.mobi/client-charts/#/",
          bak_url: "http://117.29.164.46:8081/client-charts/#/",
        },
        { label: "福州台江区政策服务平台" },
        { label: "福州市12345热线数据研判平台" },
        { label: "中建一局报告自动化" },
      ],
    };
  },
  computed: {
    render_items: (vm) => chunk(vm.items, 10),
    page_total: (vm) => vm.render_items.length,
    // 计算滑动距离
    panel_transform: (vm) => {
      return {
        width: vm.page_total * 100 + "%",
        transform: `translateX(-${(100 / vm.page_total) * vm.page + "%"})`,
      };
    },
    // 每个panel的宽度
    panel_width: (vm) => ({ width: 100 / vm.page_total + "%" }),
  },
  methods: {
    clickHandler(item /* , page, i */) {
      if (item.url) {
        this.openNewTab(item.url);
      } else if (item.modal) {
        this.$modal(item.modal, { data: item.data }).then((x) => x);
      }
    },
    openNewTab(url) {
      let elem = document.createElement("a");
      elem.href = url;
      elem.target = "_blank";
      elem.click();
      elem.remove();
    },
    mouseWheelHandler: throttle(
      function (evt) {
        if (evt.wheelDelta < 0 && this.page < this.page_total - 1) {
          this.page++;
        } else if (evt.wheelDelta >= 0 && this.page > 0) {
          this.page--;
        }
      },
      1000,
      { leading: true, trailing: false }
    ),
    nextPage() {
      if (this.page < this.page_total - 1) {
        this.page += 1;
      }
    },
    prevPage() {
      if (this.page > 0) {
        this.page -= 1;
      }
    },
    box_style(item, page, i) {
      let cache_key = [item.label, page, i].join("_");
      box_style_cache = box_style_cache || {};
      if (!box_style_cache[cache_key]) {
        box_style_cache[cache_key] =
          "#" + (~~(Math.random() * (1 << 24))).toString(16);
      }
      return {
        "background-color": box_style_cache[cache_key],
      };
    },
  },
};
</script>
<style lang="scss">
.mr10 {
  margin-right: 10px;
}
$padding: 15px;
$height: 200px;
.home-main {
  position: relative;
  .home-main-arrow {
    width: 100px;
    height: 100px;
    background: rgba($color: #000000, $alpha: 0.1);
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    z-index: 1000;
    transition: all 0.4s;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 50px;
    cursor: pointer;
    &:hover {
      background: rgba($color: #000000, $alpha: 0.8);
    }

    &.arrow-left {
      left: 0;
    }
    &.arrow-right {
      right: 0;
    }
  }
  .box-enter-active,
  .box-leave-active,
  .box-move {
    transition: all 1s;
  }
  .box-enter, .box-leave-to
  /* .list-leave-active for below version 2.1.8 */ {
    opacity: 0;
    transform: translate3d(100px, 0, 0) scale(0.5);
    transform-origin: right center;
  }
  .cell {
    @for $i from 1 through 17 {
      &:nth-child(#{$i}) {
        transition-delay: $i * 0.03s;
      }
    }
  }
  padding: $padding;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow: hidden;
  .panel-container {
    height: 100%;
    box-sizing: border-box;
    float: left;
    transition: all 0.3s;
  }
  .panel {
    height: 100%;
    float: left;
  }
  .cell {
    width: 25%;
    height: $height;
    float: left;
    margin-left: -$padding;
    margin-right: -$padding;
    margin-bottom: $padding;
    padding-left: $padding;
    padding-right: $padding;
    display: flex;
  }
  .main-cell {
    width: 50%;
    height: $height * 2 + $padding;
  }
  .right-main-cell {
    width: 50%;
    height: $height * 2 + $padding;
    float: right;
  }
  .box {
    background-color: skyblue;
    margin: $padding;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 30px;
    cursor: pointer;
    transition: all 0.3s;
    user-select: none;
    &:hover {
      box-shadow: 0 0 10px 10px #bbb;
    }
  }
}
</style>
