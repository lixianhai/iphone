<template>
  <div class="butCom">
    <div class="but_wrap" @click="clickBut" :style="{background: wrapBG}">
      <div class="but" :style="{background: butBG}">
        <div class="text" :style="{fontSize: fontSize, color: textColor}"> {{ text }} </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    wrapBG: {
      type: String,
      default: '#fff'
    },
    butBG: {
      type: String,
      default: '#0bbf5b'
    },
    fontSize: {
      type: String,
      default: '.4rem'
    },
    textColor: {
      type: String,
      default: '#fff'
    },
    text: {
      type: String,
      default: '按钮'
    }
  },
  methods: {
    clickBut() {
      this.$emit('handleButClick')
    }
  }
}
</script>

<style lang="less" scoped>
.butCom {
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  .but_wrap {
    padding: .3rem .5rem;
    .but {
      border-radius: .5rem;
      text-align: center;
      .text {
        line-height: 1rem;
      }
    }
  }
}
</style>
