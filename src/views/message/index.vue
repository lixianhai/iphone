<template>
  <div style="width: 100%;">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <router-link to="/list">
        <van-swipe-cell>
        <van-card
          default="w21212"
          desc="在？干嘛呢  "
          title="小村花"
          class="goods-card"
          thumb="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <div class="time">11:21</div>
        <template #right>
          <van-button @click.stop.prevent="deleteMessage" square text="删除" type="danger" class="delete-button" />
        </template>
      </van-swipe-cell>
      </router-link>
      
      <van-swipe-cell>
        <van-card
          default="w21212"
          desc="在？干嘛呢  "
          title="小村花"
          class="goods-card"
          thumb="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <div class="time">11:21</div>
        <template #right>
          <van-button square text="删除" type="danger" class="delete-button" />
        </template>
      </van-swipe-cell>
      <van-swipe-cell>
        <van-card
          default="w21212"
          desc="在？干嘛呢  "
          title="小村花"
          class="goods-card"
          thumb="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <div class="time">11:21</div>
        <template #right>
          <van-button square text="删除" type="danger" class="delete-button" />
        </template>
      </van-swipe-cell>
      <van-swipe-cell>
        <van-card
          default="w21212"
          desc="在？干嘛呢  "
          title="小村花"
          class="goods-card"
          thumb="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <div class="time">11:21</div>
        <template #right>
          <van-button square text="删除" type="danger" class="delete-button" />
        </template>
      </van-swipe-cell>
      <van-swipe-cell>
        <van-card
          default="w21212"
          desc="在？干嘛呢  "
          title="小村花"
          class="goods-card"
          thumb="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <div class="time">11:21</div>
        <template #right>
          <van-button square text="删除" type="danger" class="delete-button" />
        </template>
      </van-swipe-cell>
      <van-swipe-cell>
        <van-card
          default="w21212"
          desc="在？干嘛呢  "
          title="小村花"
          class="goods-card"
          thumb="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <div class="time">11:21</div>
        <template #right>
          <van-button square text="删除" type="danger" class="delete-button" />
        </template>
      </van-swipe-cell>
      <van-swipe-cell>
        <van-card
          default="w21212"
          desc="在？干嘛呢  "
          title="小村花"
          class="goods-card"
          thumb="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <div class="time">11:21</div>
        <template #right>
          <van-button square text="删除" type="danger" class="delete-button" />
        </template>
      </van-swipe-cell>
      <van-swipe-cell>
        <van-card
          default="w21212"
          desc="在？干嘛呢  "
          title="小村花"
          class="goods-card"
          thumb="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <div class="time">11:21</div>
        <template #right>
          <van-button square text="删除" type="danger" class="delete-button" />
        </template>
      </van-swipe-cell>
      <van-swipe-cell>
        <van-card
          default="w21212"
          desc="在？干嘛呢  "
          title="小村花"
          class="goods-card"
          thumb="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <div class="time">11:21</div>
        <template #right>
          <van-button square text="删除" type="danger" class="delete-button" />
        </template>
      </van-swipe-cell>
    </van-pull-refresh>
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
    onRefresh() {
      setTimeout(() => {
        this.$toast('刷新成功');
        this.isLoading = false;
        this.count++;
      }, 1000);
    },
    deleteMessage() {
      console.log('shanchu')
    }
  }
}
</script>

<style lang="less" scoped>
.goods-card {
  margin: 0;
}

.van-swipe-cell {
  border-bottom: 1px solid #dbdbdb;
  background: #fff;
}

.van-card {
  background: none;
  padding: 0;
  margin: .2rem .5rem;
}

.van-swipe-cell__wrapper {
  position: relative;
  .time {
    position: absolute;
    top: .2rem;
    right: .4rem;
    font-size: .4rem;
    color: #bebebe;
  }
}

.delete-button {
  height: 100%;
}

.van-card__thumb {
  width: 1.8rem;
  height: 1.8rem;
}

.van-card__content {
  min-height: 0;
}

.van-card__title {
  line-height: 1.2rem;
  font-size: .5rem;
  font-weight: 700;
  color: #2a2a2a;
}

.van-card__desc {
  max-height: 30px;
  line-height: .8rem;
  font-size: .4rem;
  color: #a0a0a0;
}

.delete-button {
  height: 2.2rem;
  top: -0.2rem;
}
</style>
