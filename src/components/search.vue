<template>
  <div>
    <van-search
      v-model="value"
      placeholder="搜索"
      @search="onSearch"
      @cancel="onCancel"
    />
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
    onSearch(val) {
      this.$toast(val);
    },
    onCancel() {
      this.$toast('取消');
    }
  }
}
</script>

<style lang="less" scoped>
.van-search {
  background: none;
  border-bottom: 1px solid #dbdbdb;
}
</style>