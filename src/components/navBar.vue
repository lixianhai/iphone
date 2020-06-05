<template>
  <div>
    <van-tabbar v-model="active" @change="changeNav">
      <van-tabbar-item :badge="3" to="/message">
        <span>消息</span>
        <template #icon="props">
          <img :src="props.active ? icon.home_active : icon.home_inactive " />
        </template>
      </van-tabbar-item>
      <van-tabbar-item to="/addressList">
        <span>通讯录</span>
        <template #icon="props">
          <img :src="props.active ? icon.contacts_active : icon.contacts_inactive " />
        </template>
      </van-tabbar-item>
      <van-tabbar-item to="/find">
        <span>发现</span>
        <template #icon="props">
          <img :src="props.active ? icon.moments_active : icon.moments_inactive " />
        </template>
      </van-tabbar-item>
      <van-tabbar-item to="/me">
        <span>我</span>
        <template #icon="props">
          <img :src="props.active ? icon.me_active : icon.me_inactive " />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
// import {setRouterdirection} from '@/public/index'

export default {
  data() {
    return {
      active: 0,
      icon: {
        home_active: require('../assets/home_active.png'),
        home_inactive: require('../assets/home_inactive.png'),
        contacts_active: require('../assets/contacts_active.png'),
        contacts_inactive: require('../assets/contacts_inactive.png'),
        moments_active: require('../assets/moments_active.png'),
        moments_inactive: require('../assets/moments_inactive.png'),
        me_active: require('../assets/me_active.png'),
        me_inactive: require('../assets/me_inactive.png'),
      }
    }
  },
  methods: {
    changeNav() {
      
    }
  }
}
</script>

<style lang="less" scoped>
/deep/.van-tabbar {
  height: 1.6rem;
  background: rgba(248, 248, 248, 0.9);
  .van-tabbar-item {
    .van-tabbar-item__icon {
      width: .8rem;
      height: .8rem;
      img {
        width: 100%;
        height: 100%;
      }
      .van-info {
        top: .1rem;
        width: .1rem;
        height: .5rem;
        line-height: .5rem;
        text-align: center;
      }
    }
    &:nth-child(1) {
      img {
        width: 90%;
        height: 90%;
        margin-top: 4px;
        margin-left: 2px;
      }
    }
    &:nth-child(2) {
      img {
        width:108%;
        height:108%;
      }
    }
    &:nth-child(3) {
      img {
        margin-top: 2px;
      }
    }
    &:nth-child(4) {
      img {
        width:108%;
        height:108%;
        margin-top: 2px;
      }
    }
  }
  .van-tabbar-item--active {
    .van-tabbar-item__text {
      color: #00cb5c;
    }
  }
}
</style>
