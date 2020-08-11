<template>
  <div class="hm-switch" :class="{'is-checked': value}" @click="handleClick">
    <span class="hm-switch__core" ref="core">
      <span class="hm-switch__button"></span>
    </span>
    <input type="checkbox" class="hm-switch__input" :name="name" ref="input">
  </div>
</template>

<script>
export default {
  name: 'HmSwitch',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: ''
    },
    inactiveColor: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  },
  data () {
    return {

    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    async handleClick () {
      this.$emit('input', !this.value)
      // 点击修改背景色
      // 等待value发生改变，再setColor
      await this.$nextTick()
      this.setColor()
      this.$refs.input.checked = this.value
    },
    setColor () {
      if (this.activeColor || this.inactiveColor) {
        const color = this.value ? this.activeColor : this.inactiveColor
        this.$refs.core.style.borderColor = color
        this.$refs.core.style.backgroundColor = color
      }
    }
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () {

  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {
    // 修改开关的颜色
    this.setColor()
    // 控制checkbox 的值
    this.$refs.input.checked = this.value
  }
}
</script>
<style lang="scss" scoped>
  .hm-switch {
      display:inline-flex;
      align-items: center;
      position: relative;
      font-style: 14px;
      line-height: 20px;
      height: 20px;
      vertical-align: middle;
      .hm-switch__input {
          position: absolute;
          width: 0;
          height: 0;
          opacity: 0;
          margin: 0;
      }
      .hm-switch__core {
          margin: 0;
          display:inline-block;
          position:relative;
          width: 40px;
          height: 20px;
          border: 1px solid #dcdfe6;
          outline: none;
          border-radius: 10px;
          box-sizing: border-box;
          background: #dcdfe6;
          cursor: pointer;
          transition:border-color .3s,background-color .3s;
          vertical-align: middle;
          .hm-switch__button {
              position: absolute;
              top: 1px;
              left: 1px;
              border-radius: 100%;
              transition: all .3s;
              width: 16px;
              height: 16px;
              background-color: #fff;
          }
      }
  }
  .is-checked {
      .hm-switch__core {
          border-color:#409eff;
          background-color: #409eff;
      }
      .hm-switch__button {
          transform: translateX(20px);
      }
  }
</style>
