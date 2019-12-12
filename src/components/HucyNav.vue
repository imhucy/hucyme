<template>
  <div class="hucy-nav-container">
    <div
      class="nav-item"
      v-for="(item, index) in nav"
      ref="navItems"
      :key="index"
      :class="{ active: isActive(item, index) }"
      @click="toNext(item, index)"
    >
      {{ item.label }}
    </div>
    <div class="star-container"
      :style="star_style"
    >
      <div class="star"></div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    nav: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    star_style () {
      let items = this.$refs.navItems
      let i = this.index
      if (items && i) {
        let top = (items[i].offsetTop - 10)
        let bottom = (items[i].offsetTop + items[i].offsetHeight - 10)
        return {
          left: (items[i].offsetLeft + items[i].offsetWidth / 2 - 10) + 'px',
          top: (i % 2 ? top : bottom) + 'px'
        }
      } else {
        return {}
      }
    }
  },
  data () {
    return {
      index: 0
    }
  },
  methods: {
    isActive (item, index) {
      if (item.name === 'home' && this.$route.path === '/') {
        this.index = index
        return true
      }
      let isActive = this.$route.path.match(new RegExp(item.name))
      if (isActive) {
        this.index = index
      }
      return isActive
    },
    toCamelcase (str) {
      return str[0].toUpperCase() + str.substr(1)
    },
    toNext (item, index) {
      this.index = index
      let name = this.toCamelcase(item.name)
      this.$router.push({ name })
    }
  }
}
</script>
<style lang="scss">
.hucy-nav-container {
  display: flex;
  align-items: center;
  height: 60px;
  position: relative;
  .nav-item {
    margin-right: 20px;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
    // &.active {
    //   // border-bottom: 3px solid #fff;
    // }
  }
}
$star-color: #ff0;
$size: 20px;
@keyframes circle {
  0% { transform: rotate(360deg) }
  // 20% { transform: rotate(200deg) }
  // 80% { transform: rotate(160deg) }
  100% { transform: rotate(0) }
}
.star-container {
  position: absolute;
  top: 12px;
  left: -134px;
  transition: all .6s;
  animation: circle 1.2s infinite linear;
  // background: red;
  width: $size;
  height: $size - 1;
}
.star,
.star:before,
.star:after {
  width: 0;
  height: 0;
  margin: 0;
  position: absolute;
  display: block;
  border-left: $size / 2 solid transparent;
  border-right: $size / 2 solid transparent;
  border-bottom: $size * 7 / 20 solid $star-color;
  // animation: circle 1.5s infinite linear;
  content: '';
}
.star {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  // box-shadow: 0 0 30px 10px #fff;
  // transform: rotate(35deg);
}
.star:before {
  top: 0;
  left: -$size / 2;
  transform: rotate(-70deg);
}
.star:after {
  top: 0;
  left: -$size / 2;
  transform: rotate(70deg);
}
</style>
