<template>
  <div class="app">
    <div class="list mb">
      <div class="img_wrap">
        <img src="../../assets/pengyouquan.png">
      </div>
      <div class="text_wrap">
        <span>朋友圈</span>
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
        <img src="../../assets/saoyisao.png">
      </div>
      <div class="text_wrap border">
        <span>扫一扫</span>
        <span>
          <van-icon name="arrow" />
        </span>
      </div>
    </div>
    <div class="list mb">
      <div class="img_wrap">
        <img src="../../assets/yaoyiyao.png">
      </div>
      <div class="text_wrap">
        <span>摇一摇</span>
        <span>
          <van-icon name="arrow" />
        </span>
      </div>
    </div>
    <div class="list">
      <div class="img_wrap">
        <img src="../../assets/kanyikan.png">
      </div>
      <div class="text_wrap border">
        <span>看一看</span>
        <span>
          <van-icon name="arrow" />
        </span>
      </div>
    </div>
    <div class="list mb">
      <div class="img_wrap">
        <img src="../../assets/souyisou.png">
      </div>
      <div class="text_wrap">
        <span>搜一搜</span>
        <span>
          <van-icon name="arrow" />
        </span>
      </div>
    </div>
    <div class="list mb">
      <div class="img_wrap">
        <img src="../../assets/fujin.png">
      </div>
      <div class="text_wrap">
        <span>附近的人</span>
        <span>
          <van-icon name="arrow" />
        </span>
      </div>
    </div>
    <div class="list">
      <div class="img_wrap">
        <img src="../../assets/gouwu.png">
      </div>
      <div class="text_wrap border">
        <span>购物</span>
        <span>
          <van-icon name="arrow" />
        </span>
      </div>
    </div>
    <div class="list mb">
      <div class="img_wrap">
        <img src="../../assets/youxi.png">
      </div>
      <div class="text_wrap">
        <span>游戏</span>
        <span>
          <van-icon name="arrow" />
        </span>
      </div>
    </div>
    <div class="list mb">
      <div class="img_wrap">
        <img src="../../assets/xiaochengxu.png">
      </div>
      <div class="text_wrap">
        <span>小程序</span>
        <span>
          <van-icon name="arrow" />
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.app {
  background: #ededed;
  .mb {
    margin-bottom: .3rem;
  }
}
.list {
  display: flex;
  align-items: center;
  background: #fff;
  .img_wrap {
    width: .7rem;
    height: .7rem;
    margin: 0 .3rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .border {
    border-bottom: 1px solid #e8e8e8;
  }
  .text_wrap {
    padding: 0 .3rem;
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
</style>
