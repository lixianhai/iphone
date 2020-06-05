<template>
  <div class="app">
    <div class="address_list">
      <ul>
        <li v-for="item in myAddress" :key="item.iphone">
          <div class="address_info">
            <div class="name">{{ item.contacts }}</div>
            <div class="address">{{ item.addressList }}</div>
          </div>
          <div @click="editAddress(item.id)" class="list_but">
            <van-icon name="info-o" />
          </div>
        </li>
      </ul>
    </div>
    <van-swipe-cell>
      <template #left>
        <van-button square type="primary" text="选择" />
      </template>
      <van-cell :border="false" title="单元格">
        <van-icon name="info-o" />
      </van-cell>
       <van-cell :border="false" title="单元格" />
      <template #right>
        <van-button square type="danger" text="删除" />
      </template>
    </van-swipe-cell>
    <router-link to="/me/addAddress">
      <div class="add_address">
        <van-row>
          <van-col span="3">
            <van-icon name="add-o" />
          </van-col>
          <van-col span="20">
            新增地址
          </van-col>
          <van-col span="1">
            <van-icon name="arrow" />
          </van-col>
        </van-row>
      </div>
    </router-link>
  </div>
</template>

<script>
import bottomButton from '@/components/bottomButton'

export default {
  data() {
    return {}
  },
  methods: {
    editAddress(id) {
      this.$router.push({
        path: '/me/changeAddress',
        query: { id: id }
      })
    }
  },
  computed: {
    myAddress() {
      return JSON.parse(localStorage.getItem('myAddress'))
    }
  }
}
</script>

<style lang="less" scoped>
.app {
  width: 100%;
}
.address_list {
  padding-left: .3rem;
  background: #fff;
  ul {
    padding: 0;
    margin: 0;
    li {
      list-style: none;
      overflow: hidden;
      border-bottom: 1px solid #e7e7e7;
      padding: .3rem 0;
      .address_info {
        float: left;
        max-width: 80%;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
        .name {
          font-size: .4rem;
          color: #212121;
        }
        .address {
          font-size: .35rem;
          color: #616161;
        }
      }
      .list_but {
        float: right;
        padding: 0 .3rem;
        i {
          font-size: .6rem;
          line-height: 1rem;
          color: #2a71bf;
        }
      }
    }
  }
}
.add_address {
  background: #fff;
  display: flex;
  align-items: center;
  padding: .3rem;
  .van-row {
    width: 100%;
    .van-col--20 {
      font-size: .4rem;
      counter-reset: #2c2c2c;
    }
    .van-col--3 {
      i {
        color: #156db5;
        font-size: .5rem;
        vertical-align: middle;
      }
    }
    .van-col--1 {
      i {
        color: #bfbfbf;
        font-size: .5rem;
        vertical-align: middle;
      }
    }
  }
}
</style>
