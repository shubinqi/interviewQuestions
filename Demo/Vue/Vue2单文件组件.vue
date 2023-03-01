<template>
  <div>
    <h1>{{ title }}</h1>
    <ul>
      <li
        v-for="item in items"
        :key="item.id"
      >{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
// Vue 2 列表单文件组件示例
// 这是一个简单的列表组件，包括一个标题和一个项目列表。模板中使用了 Vue 的模板语法和 v-for 指令来渲染列表数据。组件的 JavaScript 部分使用了 export default 导出组件定义，并在 data 选项中定义了组件的数据。样式部分使用了常规的 CSS 规则来设置样式。
export default {
  name: 'MyComponent',
  data () {
    return {
      title: 'My List',
      items: [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' }
      ]
    };
  }
};
</script>

<style>
h1 {
  font-size: 24px;
  color: #333;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
li {
  font-size: 18px;
  color: #666;
  margin-bottom: 10px;
}
</style>