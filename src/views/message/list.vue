<template>
  <div class="app">
    <div class="header_wrap">
      <van-row>
        <van-col @click="goBack" span="4">
          <van-icon name="arrow-left" />
        </van-col>
        <van-col span="16">
          <div class="title">
            小村花
          </div>
        </van-col>
        <van-col span="4">
          <van-icon name="ellipsis" />
        </van-col>
      </van-row>
    </div>
    <div style="padding-top: 1.7rem;">
      <div class="message_wrap_left">
        <div class="img_wrap">
          <img src="https://img.yzcdn.cn/vant/cat.jpeg">
        </div>
        <div class="text_wrap">
          <span>嫂奥是吗康明斯经济</span>
          <div></div>
        </div>
      </div>
      <div class="message_wrap_left">
        <div class="img_wrap">
          <img src="https://img.yzcdn.cn/vant/cat.jpeg">
        </div>
        <div class="text_wrap">
          <span>嫂奥是吗康明斯经济</span>
          <div></div>
        </div>
      </div>
      <div class="message_wrap_left">
        <div class="img_wrap">
          <img src="https://img.yzcdn.cn/vant/cat.jpeg">
        </div>
        <div class="text_wrap">
          <span>嫂奥是吗康明斯经济</span>
          <div></div>
        </div>
      </div>
      <div class="message_wrap_right">
        <div class="img_wrap">
          <img src="https://img.yzcdn.cn/vant/cat.jpeg">
        </div>
        <div class="text_wrap">
          <span>嫂奥是吗康明斯经济</span>
          <div></div>
        </div>
      </div>
      <div class="message_wrap_right">
        <div class="img_wrap">
          <img src="https://img.yzcdn.cn/vant/cat.jpeg">
        </div>
        <div class="text_wrap">
          <span>嫂奥是吗康明斯经济</span>
          <div></div>
        </div>
      </div>
      <div class="message_wrap_left">
        <div class="img_wrap">
          <img src="https://img.yzcdn.cn/vant/cat.jpeg">
        </div>
        <div class="text_wrap">
          <span>嫂奥是吗康明斯经济</span>
          <div></div>
        </div>
      </div>
      <div class="message_wrap_left">
        <div class="img_wrap">
          <img src="https://img.yzcdn.cn/vant/cat.jpeg">
        </div>
        <div class="text_wrap">
          <span>嫂奥是吗康明斯经济</span>
          <div></div>
        </div>
      </div>
    </div>
    <div class="footer_input">
      <van-row>
        <van-col span="3">
          <div class="img_wrap">
            <img src="../../assets/yuyin.png">
          </div>
        </van-col>
        <van-col span="18">
          <input type="text">
        </van-col>
        <van-col @click="sendMessage" span="3">
          <div class="send" >
            发送
          </div>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="less" scoped>
.header_wrap {
  position: fixed;
  top: 0;
  background: #ededed;
  width: 100%;
  border-bottom: 1px solid #d1d1d1;
  z-index: 9;
  .title {
    text-align: center;
    font-size: .5rem;
    line-height: 1.5rem;
    color: #262626;
    font-weight: 700;
  }
  .van-col--4 {
    text-align: center;
    i {
      line-height: 1.5rem;
      font-size: .7rem;
    }
  }
}
.footer_input {
  background: #f6f6f6;
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: .2rem 0;
  .van-col--18 {
    input {
      width: calc(100% - .6rem);
      height: 1.2rem;
      background: #fff;
      border-radius: .12rem;
      border: none;
      font-size: .5rem;
      padding: 0 .3rem;
      caret-color:green;
    }
  }
  .van-col--3 {
    height: 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    i {
      font-size: .83rem;
    }
    .send {
      font-size: .4rem;
      font-weight: 700;
      color: #4a4a4a;
    }
    .img_wrap {
      width: .8rem;
      height: .8rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
.message_wrap_right {
  overflow: hidden;
  padding: .2rem .3rem;
  .img_wrap {
    float: right;
    width: 1.2rem;
    height: 1.2rem;
    border-radius: .2rem;
    overflow: hidden;
    margin-left: .5rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .text_wrap {
    float: right;
    height: 1.2rem;
    padding: 0 .3rem;
    line-height: 1.2rem;
    border-radius: .12rem;
    background: #fff;
    position: relative;
    color: #010101;
    font-size: .4rem;
    div {
      position: absolute;
      top: calc(50% - .15rem);
      right: -.3rem;
      width: 0;
      height: 0;
      border-top: .15rem solid transparent;
      border-right: .15rem solid transparent;
      border-bottom: .15rem solid transparent;
      border-left: .15rem solid #fff;
    }
  }
}
.message_wrap_left {
  overflow: hidden;
  padding: .2rem .3rem;
  .img_wrap {
    float: left;
    width: 1.2rem;
    height: 1.2rem;
    border-radius: .2rem;
    overflow: hidden;
    margin-right: .5rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .text_wrap {
    float: left;
    height: 1.2rem;
    padding: 0 .3rem;
    line-height: 1.2rem;
    border-radius: .12rem;
    background: #fff;
    position: relative;
    color: #010101;
    font-size: .4rem;
    div {
      position: absolute;
      top: calc(50% - .15rem);
      left: -.3rem;
      width: 0;
      height: 0;
      border-top: .15rem solid transparent;
      border-right: .15rem solid #fff;
      border-bottom: .15rem solid transparent;
      border-left: .15rem solid transparent;
    }
  }
}
</style>