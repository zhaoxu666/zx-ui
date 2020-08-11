<template>
<transition name="dialog-fade">
  <!-- 对话框的遮罩 -->
  <div class="hm-dialog-wrapper" v-show="visible" @click.self="handleClose" ref='wrapper'>
      <!-- 对话框 -->
      <div class="hm-dialog" :style="{width,marginTop:top}" @mousedown.stop="move"  ref="dialog">
          <div class="hm-dialog__header">
              <slot name="title">
                  <span class="hm-dialog__title">{{title}}</span>
              </slot>
              <button class="hm-dialog__headerbtn" @click="handleClose">
                  <i class="iconcuo"></i>
              </button>
          </div>
          <div class="hm-dialog__body">
              <!-- 默认插槽 -->
            <slot></slot>
          </div>
          <div class="hm-dialog__footer" v-if="$slots.footer">
              <slot name="footer"></slot>
          </div>
      </div>
   </div>
  </transition>
</template>

<script>
export default {
  name: 'HmDialog',
  props: {
    title: {
      type: String,
      default: '提示'
    },
    width: {
      type: String,
      default: '50%'
    },
    top: {
      type: String,
      default: '15vh'
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      screenWidth: document.body.clientWidth
    }
  },
  methods: {
    handleClose () {
      this.$emit('update:visible', false)
    },
    move () {
      const bar = this.$refs.dialog
      const rex = event.clientX - bar.offsetLeft
      const rey = event.clientY - bar.offsetTop
      const barWidth = bar.style.width.toString().indexOf('%') > -1 ? this.screenWidth * bar.style.width.replace('%', '') / 100 / 2 : bar.style.width
      const marginWidth = this.screenWidth / 2 - barWidth
      const barHeight = this.top ? Number(this.top.replace('px', '')) : '15vh'
      console.log(this.$refs.wrapper.style.height)
      document.onmousemove = function (e) {
        const xX = e.clientX
        const yY = e.clientY
        bar.style.left = (xX - rex - marginWidth) + 'px'
        bar.style.top = (yY - rey - barHeight) + 'px'
      }
    }
  },
  mounted () {
    document.onmouseup = function () {
      document.onmousemove = null
    }
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth
        this.screenWidth = window.screenWidth
      })()
    }
  }
}
</script>
<style lang="scss" scoped>
.hm-dialog-wrapper {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    margin: 0;
    z-index: 2001;
    height:100%;
    background: rgba(0,0,0,.5);
    .hm-dialog {
        position: relative;
        margin: 15vh auto 50px;
        background: #ffffff;
        border-radius: 2px;
        box-shadow: 0 1px 3px rgba(0,0,0,.3);
        box-sizing: border-box;
        width: 30%;
        &__header {
            padding: 20px 20px 10px;
            .hm-dialog__title {
                line-height: 24px;
                font-size: 18px;
                color: #303133;
            }
            .hm-dialog__headerbtn {
                position: absolute;
                top: 20px;
                right: 20px;
                padding: 0;
                background: transparent;
                border: none;
                outline: none;
                cursor: pointer;
                font-size: 16px;
                .el-icon-close {
                    color: #909399;
                }
            }
        }
        &__body {
            padding: 30px 20px;
            color: #606266;
            font-size: 14px;
            word-break: break-all;
        }
        &__footer {
            padding: 10px 20px 20px;
            text-align: right;
            box-sizing: border-box;
            // 深度选择器 scss ::v-deep less /deep/ css >>>
           ::v-deep .hm-button:first-child {
                margin-right: 20px;
            }
        }
    }
}

.dialog-fade-enter-active {
  animation: fade .3s;
}
.dialog-fade-leave-active {
  animation: fade .3s reverse
}

@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
