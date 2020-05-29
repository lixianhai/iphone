<template>
  <div class="back">
    <van-form @submit="onSubmit">
      <van-field
        v-model="loginForm.userName"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="loginForm.passWord"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">
          登录
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<style lang="less" scoped>
.back {
  width: 100vw;
  height: 100vh;
  background: #ccc;
  position: absolute;
  // padding: 0 20px;
  top: 0;
}
.van-form {
  margin-top: 5rem;
}
</style>

<script>
import Cookies from 'js-cookie';

export default {
  data() {
    return {
      loginForm: {
        userName: '',
        passWord: ''
      }
    }
  },
  methods: {
    onSubmit(values) {
      if (this.userName !== '' && this.passWord !== '') {
        this.$store.dispatch('LoginByUsername', this.loginForm).then(() => {
          this.$router.push('/')
        })
      }
    }
  }
}
</script>