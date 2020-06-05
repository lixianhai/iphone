<template>
  <div class="app">
    <router-link to="/me/changeHeadPortrait">
      <div class="list">
        <div class="title">头像</div>
        <div class="right">
          <div class="img_wrap">
            <img :src="userHeadPortrait">
          </div>
          <div class="icon-wrap">
            <van-icon name="arrow" />
          </div>
        </div>
      </div>
    </router-link>
    <div class="list list_text">
      <div class="title">名字</div>
      <div class="right">
        <div v-if="isName" @click="changeName" class="text">{{ name }}</div>
        <input v-else @blur="changeNameInput" type="text" v-model="name" ref="name">
        <div class="icon-wrap">
          <van-icon name="arrow" />
        </div>
      </div>
    </div>
    <div class="list list_text">
      <div class="title">微信号</div>
      <div class="right">
        <div class="text">{{ wechatNumber }}</div>
      </div>
    </div>
    <div class="list list_text">
      <div class="title">我的二维码</div>
      <div class="right">
        <div class="icon-wrap">
          <van-icon name="arrow" />
        </div>
      </div>
    </div>
    <div class="list list_text mb">
      <div class="title">更多</div>
      <div class="right">
        <div class="icon-wrap">
          <van-icon name="arrow" />
        </div>
      </div>
    </div>
    <router-link to="/me/address">
      <div class="list list_text">
        <div class="title">我的地址</div>
        <div class="right">
          <div class="icon-wrap">
            <van-icon name="arrow" />
          </div>
        </div>
      </div>
    </router-link>
    <div class="list list_text">
      <div class="title">我的发票抬头</div>
      <div class="right">
        <div class="icon-wrap">
          <van-icon name="arrow" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isName: true,
      name: this.$store.state.userName || localStorage.getItem('userName')
    }
  },
  created() {
    console.log(localStorage.getItem('userName'))
  },
  methods: {
    changeName() {
      this.isName = false
      this.$nextTick(() => {
        this.$refs.name.focus()
      })
    },
    changeNameInput() {
      if (this.name.length <= 10 && this.name.length >=2 ) {
        this.isName = true
        localStorage.setItem('userName', this.name)
      } else {
        this.$toast('名字请输入2-10个(含)字符')
      }
    }
  },
  computed: {
    wechatNumber() {
      return this.$store.getters.wechatNumber
    },
    userHeadPortrait() {
      return localStorage.getItem('userHeadPortraitPath')
    }
  }
}
</script>

<style lang="less" scoped>
.mb {
  margin-bottom: .3rem;
}
.list {
  padding: .3rem;
  overflow: hidden;
  background: #fff;
  border-bottom: 1px solid #e7e7e7;
  .title {
    font-size: .5rem;
    font-weight: 500;
    color: #242424;
    float: left;
    line-height: 1.4rem;
  }
  .right {
    float: right;
    display: flex;
    align-items: center;
    color: #818181;
    .img_wrap {
      width: 1.4rem;
      height: 1.4rem;
      border-radius: .2rem;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .text, input {
      line-height: 1.2rem;
      font-size: .5rem;
      border: none;
    }
    i {
      font-size: .5rem;
      margin-left: .3rem;
    }
  }
}
.list_text {
  .title {
    line-height: 1rem;
  }
  .right {
    .text, input {
      line-height: 1rem;
      border: none;
    }
  }
  i {
    line-height: 1rem;
  }
}
</style>