<template>
  <div>
    <van-sticky>
      <van-row class="header_wrap">
        <van-col :span="4">
          <van-icon v-show="isBack" name="arrow-left" />
        </van-col>
        <van-col :span="16">
          <span>{{ title }}</span>
        </van-col>
        <van-col :span="4">
          <van-icon v-show="pathName === '/message'" name="add-o" />
          <router-link v-show="pathName === '/contacts'" to="/login">
            <div class="img_wrap">
              <img src="../assets/addFriend.png">
            </div>
          </router-link>
          <router-link v-show="pathName === '/personal'" to="/login">
            <div class="img_wrap">
              <img src="../assets/xiangji.png">
            </div>
          </router-link>
        </van-col>
      </van-row>
    </van-sticky>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '消息',
      isBack: false,
      pathName: ''
    }
  },
  watch: {
    $route(to) {
      const path = to.path
      console.log(path)

      this.isBack = to.meta.showBackBut
      this.title = to.meta.title
      this.pathName = path
    }
  },
}
</script>

<style lang="less" scoped>
.header_wrap {
  width: 100%;
  height: 1.6rem;
  background: #ededed;
  .van-col {
    height: 100%;
    text-align: center;
    line-height: 1.6rem;
    color: #1e1e1e;
    font-size: .6rem;
    font-weight: 700;
    i {
      line-height: 1.6rem;
      font-size: .7rem;
    }
  }
  .img_wrap {
    width: .7rem;
    height: .7rem;
    img {
      width: 100%;
      height: 100%;
      vertical-align: middle;
      margin-top: -.2rem;
      margin-left: .5rem;
    }
  }
}
</style>