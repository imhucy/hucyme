<template>
  <div class="hucy-header">
    <hucy-nav :nav="nav"></hucy-nav>
  </div>
</template>
<script>
import nav from "../mock/nav";
export default {
  name: "HucyHeader",
  data() {
    return {
      nav,
    };
  },
};
</script>
<style lang="scss">
.hucy-header {
  width: 100%;
  height: 60px;
  background-color: #324157;
  background-image: url(~img/logo.png);
  background-repeat: no-repeat;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  color: #fff;
  padding-left: 160px;
}
</style>
