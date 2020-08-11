<template>
  <div class="hm-form-item">
    <label class="hm-form-item__label" :style="{width: this.Form.labelWidth}">{{label}}</label>
    <div class="hm-form-item__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HmFormItem',
  props: {
    label: String
  },
  inject: ['Form'],
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

  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () {

  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {

  }
}
</script>
<style lang="scss" >
.hm-form-item {
  margin-bottom: 25px;
  .hm-form-item__label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-style: 14px;
    color: #606266;
    line-height: 40px;
    padding: 0 12px 0 0;
    box-sizing: border-box;
  }
  .hm-form-item__content {
    line-height: 40px;
    position: relative;
    font-style: 14px;
    overflow: hidden;
  }
}
</style>
