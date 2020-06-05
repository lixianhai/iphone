<template>
  <div class="app">
    <div>
      <div>
        <span>当前头像：</span>
        <span class="img_wrap">
          <img :src="userHeadPortrait">
        </span>
      </div>
      <div>
        <span>上传头像：</span>
        <van-uploader v-model="fileList" :max-count="1" :after-read="afterRead" />
      </div>
    </div>
    <van-button @click="confirmChange" type="primary" size="large">确认修改</van-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fileList: []
    }
  },
  methods: {
    afterRead(file) {
      // 此时将文件上传至本地
      const filePath = file.content
      this.$store.commit('setUserHeadPortraitPath', filePath)
      localStorage.setItem('userHeadPortraitPath', filePath)
    },
    confirmChange() {
      this.$router.go(-1)
    }
  },
  computed: {
    userHeadPortrait() {
      return this.$store.state.userHeadPortraitPath || localStorage.getItem('userHeadPortraitPath')
    }
  }
}
</script>

<style lang="less" scoped>
.app {
  width: 100%;
  div {
    padding:  0 .3rem;
    span {
      padding:  0 .3rem;
    }
    div {
      display: flex;
      align-items: center;
      &:nth-child(1) {
        margin-bottom: .3rem;
      }
    }
  }
  .img_wrap {
    display: inline-block;
    width: 80px;
    height: 80px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
