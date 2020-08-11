<template>
  <div class='hm-input' :class="{'hm-input--suffix' : showSuffix}">
      <!-- 如果传了show-password,判断是否需要切换密码的显示 如果不传，不判断 -->
     <input
       :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
       class="hm-input__inner"
       :class="{'is-disabled': disabled}"
       :placeholder="placeholder"
       :name='name'
       :disabled="disabled"
       :value="value"
       @input="handleInput"
       @focus="focusInput"
       @blur="blurInput">
    <span class="hm-input__suffix" v-if="showSuffix">
        <i class="hm-input__icon iconcuo" v-if="clearable && value" @click="clear"></i>
        <i class="hm-input__icon icondenglu-xianshi " v-if="showPassword" @click="handlePassword" :class="{'icondenglu-xianshi-active' : passwordVisible}"></i>
    </span>
  </div>
</template>

<script>
export default {
  name: 'HmInput',
  props: {
    placeholder: {
      type: String,
      dfault: ''
    },
    type: {
      type: String,
      dfault: 'text'
    },
    name: {
      type: String,
      dfault: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ''
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      // 用于控制是否显示密码框
      passwordVisible: false
    }
  },
  methods: {
    handleInput (e) {
      this.$emit('input', e.target.value)
    },
    clear () {
      this.$emit('input', '')
    },
    handlePassword () {
      this.passwordVisible = !this.passwordVisible
    },
    focusInput (e) {
      this.$emit('focus', e)
    },
    blurInput (e) {
      console.log(e)
      this.$emit('blur', e)
    }
  },
  // 监听属性 类似于data概念
  computed: {
    showSuffix () {
      return this.clearable || this.showPassword
    }
  },
  // 监控data中的数据变化
  watch: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () {

  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {

  }
}
</script>
<style lang="scss">
.hm-input {
  width: 100%;
  position: relative;
  font-size: 14px;
  display:inline-block;
  .hm-input__inner {
      -webkit-appearance:none;
      background-color: #fff;
      background-image: none;
      border-radius: 4px;
      border: 1px solid #dcdfe6;
      box-sizing: border-box;
      color:#606266;
      display: inline-block;
      font-size: inherit;
      height: 40px;
      line-height: 40px;
      outline: none;
      padding: 0 15px;
      transition: border-color .2s cubic-bezier(.645,.045,.355,1);
      width: 100%;
      &:focus {
          outline: none;
          border-color: #409eff;
      }
      &.is-disabled {
          background-color: #f5f7fa;
          border-color: #e4e7ed;
          color: #c0c4cc;
          cursor: not-allowed;
      }
  }
}

.hm-input--suffix {
    .hm-input__inner{
        padding-right: 30px;
    }
    .hm-input__suffix {
        position: absolute;
        height: 100%;
        right: 10px;
        top: 0;
        line-height: 40px;
        text-align: center;
        color:#c0c4cc;
        transition: all .3s;
        z-index: 900;
        i {
            color:#c0c4cc;
            font-style: 14px;
            cursor: pointer;
            transition: color .2s cubic-bezier(.654,.045,.355,1);
        }
        .icondenglu-xianshi-active {
          color:blue
        }
    }
}
</style>
