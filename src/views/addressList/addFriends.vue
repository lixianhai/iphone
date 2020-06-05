<template>
  <div class="app">
    <van-search
      v-model="value"
      show-action
      label=""
      background="#ededed"
      placeholder="微信号/手机号"
      @search="onSearch"
    >
      <template #action>
        <div @click="onSearch">搜索</div>
      </template>
    </van-search>
    <!-- <div class="wechatNumber">我的微信号: {{ wechatNumber }}</div> -->
    <div class="search_info">
      <div class="icon_wrap">
        <van-icon name="search" />
      </div>
      <div class="search_text">搜索：12324132</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ''
    }
  },
  methods: {
    onSearch() {
      
    }
  },
  computed: {
    wechatNumber() {
      return this.$store.getters.wechatNumber
    }
  }
}
</script>

<style lang="less" scoped>
.wechatNumber {
  text-align: center;
  font-size: .4rem;
}
.search_info {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #d1d1d1;
  .icon_wrap {
    width: 1rem;
    height: 1rem;
    text-align: center;
    border-radius: .15rem;
    background: #07c15e;
    margin: .3rem;
    margin-top: 0;
    i {
      font-size: .7rem;
      line-height: 1rem;
      color: #fff;
      font-weight: 500;
    }
  }
  .search_text {
    font-size: .4rem;
    font-weight: 700;
    color: #191919;
  }
}
</style>