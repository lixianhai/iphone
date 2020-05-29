<template>
  <div class="app">
    <van-sticky>
      <van-row class="header_wrap">
        <van-col :span="4"></van-col>
        <van-col :span="16"></van-col>
        <van-col :span="4">
          <router-link to="/login">
            <div class="img_wrap">
              <img src="../../assets/xiangji.png">
            </div>
          </router-link>
        </van-col>
      </van-row>
    </van-sticky>
    <div class="user_info mb">
      <div class="user_img">
        <div>
          <img src="../../assets/touxiang.jpg">
        </div>
      </div>
      <div class="text_info">
        <div class="name">来两根儿油炸淀粉香肠</div>
        <div class="wechatNum">
          <div>
            微信号：
            <span>LI1792786454</span>
          </div>
          <div>
            <van-icon name="arrow" />
          </div>
        </div>
      </div>
    </div>
    <div class="list mb">
      <div class="img_wrap">
        <div class="wrap">
          <img src="../../assets/weixinzhifu.png">
        </div>
      </div>
      <div class="text_wrap">
        <span>支付</span>
        <span>
          <van-icon name="arrow" />
        </span>
      </div>
    </div>
    <div class="list">
      <div class="img_wrap">
        <div class="wrap" style="width: .5rem;height: .5rem;margin-top: .25rem">
          <img src="../../assets/shoucang.png">
        </div>
      </div>
      <div class="text_wrap border">
        <span>收藏</span>
        <span>
          <van-icon name="arrow" />
        </span>
          <span class="frienf_img">
            <img src="https://img.yzcdn.cn/vant/cat.jpeg">
          </span>
      </div>
    </div>
    <div class="list">
      <div class="img_wrap">
        <div class="wrap">
          <img src="../../assets/xiangce.png">
        </div>
      </div>
      <div class="text_wrap border">
        <span>相册</span>
        <span>
          <van-icon name="arrow" />
        </span>
          <span class="frienf_img">
            <img src="https://img.yzcdn.cn/vant/cat.jpeg">
          </span>
      </div>
    </div>
    <div class="list">
      <div class="img_wrap">
        <div class="wrap" style="width: .5rem;height: .5rem;margin-top: .25rem">
          <img src="../../assets/kabao.png">
        </div>
      </div>
      <div class="text_wrap border">
        <span>卡包</span>
        <span>
          <van-icon name="arrow" />
        </span>
          <span class="frienf_img">
            <img src="https://img.yzcdn.cn/vant/cat.jpeg">
          </span>
      </div>
    </div>
    <div class="list mb">
      <div class="img_wrap">
        <div class="wrap" style="width: .6rem;height: .6rem;margin-top: .2rem">
          <img src="../../assets/biaoqing.png">
        </div>
      </div>
      <div class="text_wrap">
        <span>表情</span>
        <span>
          <van-icon name="arrow" />
        </span>
          <span class="frienf_img">
            <img src="https://img.yzcdn.cn/vant/cat.jpeg">
          </span>
      </div>
    </div>
    <div class="list">
      <div class="img_wrap">
        <div class="wrap" style="width: .5rem;height: .5rem;margin-top: .25rem">
          <img src="../../assets/shezhi.png">
        </div>
      </div>
      <div class="text_wrap">
        <span>设置</span>
        <span>
          <van-icon name="arrow" />
        </span>
          <span class="frienf_img">
            <img src="https://img.yzcdn.cn/vant/cat.jpeg">
          </span>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.app {
  background: #ededed;
}
.mb {
  margin-bottom: .3rem;
}
.wh {
  width: .5rem!important;
  height: .5rem!important;
}
.header_wrap {
  width: 100%;
  height: 1.6rem;
  background: #fff;
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
.user_info {
  display: flex;
  background: #fff;
  padding: 1rem 0;
  .user_img {
    width: 1.8rem;
    height: 1.8rem;
    margin: 0 .6rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .text_info {
    flex: 1;
    .name {
      font-size: .6rem;
      line-height: 1rem;
      color: #212121;
      font-weight: 700;
      width: 5rem;
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
    }
    .wechatNum {
      font-size: .45rem;
      line-height: .8rem;
      color: #737373;
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
      div:nth-child(1) {
        float: left;
        width: 5rem;
      }
      div:nth-child(2) {
        float: right;
        margin-right: .5rem;
        i {
          vertical-align: middle;
          margin-top: -.1rem;
        }
      }
    }
  }
}
.list {
  display: flex;
  align-items: center;
  background: #fff;
  .img_wrap {
    width: 1rem;
    height: 1rem;
    margin: 0 .3rem;
    .wrap {
      width: .7rem;
      height: .7rem;
      margin: .17rem auto;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .border {
    border-bottom: 1px solid #e8e8e8;
  }
  .text_wrap {
    padding-right: .3rem;
    flex: 1;
    span {
      line-height: 1.6rem;
      display: inline-block;
      &:nth-child(1) {
        float: left;
        font-size: 0.5rem;
        font-weight: 500;
        color: #323233;
      }
      &:nth-child(2) {
        float: right;
      }
      i {
        font-size: .5rem;
        color: #b6b6b6;
        vertical-align: middle;
      }
    }
    .frienf_img {
      width: .8rem;
      height: .8rem;
      float: right;
      margin-right: .2rem;
      position: relative;
      img {
        width: 100%;
        height: 100%;
        vertical-align: middle;
      }
      &::before {
        content: "";
        display: block;
        width: .2rem;
        height: .2rem;
        background: rgb(238, 4, 4);
        border-radius: 50%;
        position: absolute;
        bottom: 30%;
        right: -15%;
      }
    }
  }
}
.van-card:not(:first-child) {
  margin: 0;
}
</style>
