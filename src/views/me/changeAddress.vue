<template>
  <div class="app">
    <div class="header">
      <van-row>
        <van-col @click="reset" span="3">取消</van-col>
        <van-col span="18">
          设置地址
        </van-col>
        <van-col @click="done" span="3">
          <div class="but_wrap">
            完成
          </div>
        </van-col>
      </van-row>
    </div>
    <ul>
      <li>
        <van-row>
          <van-col span="8">联系人</van-col>
          <van-col span="12">
            <input type="text" v-model="formData.contacts">
          </van-col>
          <van-col span="2">
            <van-icon name="newspaper-o" />
          </van-col>
        </van-row>
      </li>
      <li>
        <van-row>
          <van-col span="8">手机号码</van-col>
          <van-col span="12">
            <input type="text" v-model="formData.iphone">
          </van-col>
          <van-col span="2"></van-col>
        </van-row>
      </li>
      <li>
        <van-row>
          <van-col span="8">地区选择</van-col>
          <van-col span="12">
            <input type="text" v-model="formData.selectRegion">
          </van-col>
          <van-col span="2"></van-col>
        </van-row>
      </li>
      <li>
        <van-row>
          <van-col span="8">详细地址</van-col>
          <van-col span="12">
            <input type="text" v-model="formData.addressList">
          </van-col>
          <van-col span="2">
            <van-icon name="location" />
          </van-col>
        </van-row>
      </li>
      <li>
        <van-row>
          <van-col span="8">邮政编码</van-col>
          <van-col span="12">
            <input type="text" v-model="formData.postalCode">
          </van-col>
          <van-col span="2"></van-col>
        </van-row>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {},
      id: this.$route.query.id
    }
  },
  created() {
    const myAddress = JSON.parse(localStorage.getItem('myAddress'))

    const filterMyAddress = myAddress.filter(item => { return item.id === this.id })
    
    this.formData = filterMyAddress[0]
  },
  methods: {
    reset() { 
      this.$dialog.alert({
        message: '确定要放弃此次编辑',
        showCancelButton: true
      }).then(() => {
        this.$router.go(-1)
      })
    },
    done() {
      this.$toast.loading({
        message: '正在加载...',
        forbidClick: true,
        loadingType: 'spinner',
        duration: 100
      });

      const myAddress = JSON.parse(localStorage.getItem('myAddress'))

      const filterMyAddress = myAddress.filter(item => { return item.id !== this.id })
      
      filterMyAddress.push(this.formData)

      localStorage.setItem('myAddress', JSON.stringify(filterMyAddress))

      setTimeout(() => {
        this.$router.go(-1)
      }, 200)
    }
  }
}
</script>

<style lang="less" scoped>
.app {
  width: 100%;
  .header {
    line-height: 1.6rem;
    text-align: center;
    .van-col--18 {
      color: #1e1e1e;
      font-size: .5rem;
      font-weight: 700;
    }
    .van-row {
      padding: 0 .3rem;
      .van-col--3 {
        font-size: .4rem;
        .but_wrap {
          width: 100%;
          height: .8rem;
          background: #0bbf5b;
          border-radius: .1rem;
          margin-top: .4rem;
          line-height: .8rem;
          color: #fff;
          font-size: .36rem;
          font-weight: 700;
        }
      }
    }
  }
  ul {
    padding-left: .3rem;
    background: #fff;
    li {
      height: 1rem;
      line-height: 1rem;
      border-bottom: 1px solid #e7e7e7;
      font-size: .4rem;
      .van-col--12 {
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
        input {
          height: .9rem;
          border: none;
        }
      }
      i {
        line-height: 1rem;
        font-size: .5rem;
      }
    }
  }
}
</style>
