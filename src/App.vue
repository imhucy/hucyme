<template>
  <div id="app">
    <div class="route-view-container" style="padding-top: 60px">
      <hucy-header></hucy-header>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
};
</script>
<style lang="scss">
@import "~scss/common-style";
</style>
