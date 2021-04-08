<template>
  <div class="not-found">404 Not Found</div>
</template>

<script>
export default {
  name: "NotFound",
  props: {},
  data() {
    return {};
  },
  computed: {},
  created() {},
  methods: {},
};
</script>

<style lang="scss">
.not-found {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 100px;
  background: pink;
  animation: color-animate 10s infinite;
}
@keyframes color-animate {
  0% {
    background: pink;
  }
  25% {
    background: lightblue;
  }
  50% {
    background: lightsalmon;
  }
  75% {
    background: #cccccc;
  }
  100% {
    background: pink;
  }
}
</style>
