<template>
  <div style="width: 100%;">
    <van-index-bar sticky :sticky-offset-top="50">
      <div class="cont_list">
        <div class="img_wrap">
          <img src="../../assets/xinpengyou.jpg">
        </div>
        <van-cell title="新的朋友" />
      </div>
      <div class="cont_list">
        <div class="img_wrap">
          <img src="../../assets/qunliao.jpg">
        </div>
        <van-cell title="群聊" />
      </div>
      <div class="cont_list">
        <div class="img_wrap">
          <img src="../../assets/biaoqian.jpg">
        </div>
        <van-cell title="标签" />
      </div>
      <div class="cont_list">
        <div class="img_wrap">
          <img src="../../assets/gongzhonghao.jpg">
        </div>
        <van-cell title="公众号" />
      </div>

      <van-index-anchor index="A" />
      <div class="cont_list">
        <div class="img_wrap">
          <img src="https://img.yzcdn.cn/vant/cat.jpeg">
        </div>
        <van-cell title="小村花" />
      </div>
      <div class="cont_list">
        <div class="img_wrap">
          <img src="https://img.yzcdn.cn/vant/cat.jpeg">
        </div>
        <van-cell title="小村花" />
      </div>
      <div class="cont_list">
        <div class="img_wrap">
          <img src="https://img.yzcdn.cn/vant/cat.jpeg">
        </div>
        <van-cell title="小村花" />
      </div>
      <div class="cont_list">
        <div class="img_wrap">
          <img src="https://img.yzcdn.cn/vant/cat.jpeg">
        </div>
        <van-cell title="小村花" />
      </div>
      <div class="cont_list">
        <div class="img_wrap">
          <img src="https://img.yzcdn.cn/vant/cat.jpeg">
        </div>
        <van-cell title="小村花" />
      </div>
      <van-index-anchor index="B" />
      <div class="cont_list">
        <div class="img_wrap">
          <img src="https://img.yzcdn.cn/vant/cat.jpeg">
        </div>
        <van-cell title="小村花" />
      </div>
      <div class="cont_list">
        <div class="img_wrap">
          <img src="https://img.yzcdn.cn/vant/cat.jpeg">
        </div>
        <van-cell title="小村花" />
      </div>
      <div class="cont_list">
        <div class="img_wrap">
          <img src="https://img.yzcdn.cn/vant/cat.jpeg">
        </div>
        <van-cell title="小村花" />
      </div>
      <div class="cont_list">
        <div class="img_wrap">
          <img src="https://img.yzcdn.cn/vant/cat.jpeg">
        </div>
        <van-cell title="小村花" />
      </div>
      <div class="cont_list">
        <div class="img_wrap">
          <img src="https://img.yzcdn.cn/vant/cat.jpeg">
        </div>
        <van-cell title="小村花" />
      </div>
      <van-index-anchor index="C" />
      <div class="cont_list">
        <div class="img_wrap">
          <img src="https://img.yzcdn.cn/vant/cat.jpeg">
        </div>
        <van-cell title="小村花" />
      </div>
      <div class="cont_list">
        <div class="img_wrap">
          <img src="https://img.yzcdn.cn/vant/cat.jpeg">
        </div>
        <van-cell title="小村花" />
      </div>
      <div class="cont_list">
        <div class="img_wrap">
          <img src="https://img.yzcdn.cn/vant/cat.jpeg">
        </div>
        <van-cell title="小村花" />
      </div>
      <div class="cont_list">
        <div class="img_wrap">
          <img src="https://img.yzcdn.cn/vant/cat.jpeg">
        </div>
        <van-cell title="小村花" />
      </div>
      <div class="cont_list">
        <div class="img_wrap">
          <img src="https://img.yzcdn.cn/vant/cat.jpeg">
        </div>
        <van-cell title="小村花" />
      </div>
      <van-index-anchor index="D" />
      <div class="cont_list">
        <div class="img_wrap">
          <img src="https://img.yzcdn.cn/vant/cat.jpeg">
        </div>
        <van-cell title="小村花" />
      </div>
      <div class="cont_list">
        <div class="img_wrap">
          <img src="https://img.yzcdn.cn/vant/cat.jpeg">
        </div>
        <van-cell title="小村花" />
      </div>
      <div class="cont_list">
        <div class="img_wrap">
          <img src="https://img.yzcdn.cn/vant/cat.jpeg">
        </div>
        <van-cell title="小村花" />
      </div>
      <div class="cont_list">
        <div class="img_wrap">
          <img src="https://img.yzcdn.cn/vant/cat.jpeg">
        </div>
        <van-cell title="小村花" />
      </div>
      <div class="cont_list">
        <div class="img_wrap">
          <img src="https://img.yzcdn.cn/vant/cat.jpeg">
        </div>
        <van-cell title="小村花" />
      </div>
    </van-index-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      isLoading: false,
    };
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
.cont_list {
  overflow: hidden;
  display: flex;
  padding: 0 .3rem;
  align-items: center;
  .img_wrap {
    width: 1.2rem;
    height: 1.2rem;
    margin-right: .3rem;
    border-radius: .2rem;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .van-cell {
    flex: 1;
    height: 1.8rem;
    padding: 0;
    line-height: 1.8rem;
    font-size: .5rem;
    font-weight: 500;
    border-bottom: 1px solid #e8e8e8;
  }
}
</style>
