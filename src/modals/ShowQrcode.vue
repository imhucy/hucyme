<template>
  <el-dialog
    class="show-qrcode-dialog"
    width="800px"
    :before-close="beforeClose"
    :visible.sync="visible"
  >
    <div slot="title">扫码查看项目</div>
    <div class="qrcodes">
      <div class="qrcode" v-for="(code, index) in codes" :key="index">
        <img :src="code" />
      </div>
    </div>
    <div slot="footer">
      <el-button @click="cancel">取消</el-button>
      <el-button type="primary" @click="confirm">确定</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: "ShowQrcode",
  data() {
    return {
      visible: true,
      codes: [],
    };
  },
  methods: {
    confirm() {
      this.$emit("confirm");
      this.visible = false;
      this.afterClose();
    },
    cancel() {
      this.$emit("cancel");
      this.visible = false;
      this.afterClose();
    },
    afterClose() {
      this.$el.parentNode.removeChild(this.$el);
      this.$destroy();
    },
    beforeClose(done) {
      this.cancel();
      done();
    },
  },
  mounted() {
    this.visible = true;
  },
};
</script>
