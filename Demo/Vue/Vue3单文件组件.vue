<template>
  <div>
    <h1>{{ title }}</h1>
    <ul>
      <li
        v-for="(item, index) in items"
        :key="index"
      >{{ item }}</li>
    </ul>
  </div>
</template>

<script>
// Vue 3 单文件组件
// 该组件有一个 title 和 items 的 props，分别用于显示标题和列表。使用了 Vue3 的 defineComponent 函数定义组件，可以使用 name 属性指定组件名。在模板中使用了插值语法和 v-for 指令渲染数据，同时使用了作用域样式，样式只会影响到该组件内部的元素。

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MyComponent',
  props: {
    title: {
      type: String,
      required: true
    },
    items: {
      type: Array,
      required: true
    }
  }
});
</script>

<style scoped>
/* scoped 样式只作用于该组件内部 */
h1 {
  font-size: 1.5rem;
  color: #333;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  margin-bottom: 0.5rem;
}
</style>