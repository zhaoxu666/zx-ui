<template>
  <div class='hm-radio-group'>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'HmRadioGroup',
  props: {
    // provide 与 inject  祖孙之间组件通信
    value: null
  },
  provide () {
    return {
      RadioGroup: this
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

  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () {

  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {

  }
}
</script>
<style  scoped>

</style>
