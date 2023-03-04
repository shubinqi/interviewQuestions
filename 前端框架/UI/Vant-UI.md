<!--
 * @Author: Shu Binqi
 * @Date: 2023-02-24 21:07:20
 * @LastEditors: Shu Binqi
 * @LastEditTime: 2023-03-04 21:10:44
 * @Description: Vant-UI 面试题（2题）
 * @Version: 1.0.0
 * @FilePath: \interviewQuestions\前端框架\UI\Vant-UI.md
-->

#### Vant-UI 怎么实现下拉刷新和上滑加载？

Vant-UI 是一个基于 Vue.js 的轻量级移动端组件库，它提供了一些常用的 UI 组件，如下拉刷新和上滑加载等功能。要实现下拉刷新和上滑加载，可以使用 Vant-UI 中提供的组件 van-pull-refresh 和 van-list。

van-pull-refresh 组件实现下拉刷新功能，当用户下拉页面时，该组件会触发 refresh 事件，开发者可以在该事件中请求数据，并将数据更新到页面中。使用 van-pull-refresh 组件需要在 v-scroll 组件上包裹，例如：

```
<template>
  <v-scroll>
    <van-pull-refresh @refresh="onRefresh">
      <!-- 列表数据 -->
    </van-pull-refresh>
  </v-scroll>
</template>
```

van-list 组件实现上滑加载功能，当用户滑动到列表底部时，该组件会触发 load 事件，开发者可以在该事件中请求数据，并将数据追加到列表末尾。使用 van-list 组件需要在 v-scroll 组件上包裹，例如：

```
<template>
  <v-scroll>
    <van-list :loading="loading" :finished="finished" @load="onLoad">
      <!-- 列表数据 -->
    </van-list>
  </v-scroll>
</template>
```

其中，:loading 表示是否在加载数据，:finished 表示是否已经加载完全部数据。在 onLoad 事件中，需要手动设置 loading 和 finished 的值，以控制上滑加载的状态。

需要注意的是，为了保证上滑加载的效果，van-list 组件中的数据应该使用 v-for 指令进行渲染，而不能使用 :data 属性，例如：

```
<van-list>
  <van-cell v-for="(item, index) in list" :key="index">{{ item }}</van-cell>
</van-list>
```

这样才能保证在数据更新时，van-list 组件能够正确地检测到数据变化并触发 load 事件。

#### 使用过 Vant 哪些组件？

Vant 是一个基于 Vue.js 的移动端组件库，包含了很多常用的 UI 组件和业务组件。以下是 Vant 中常用的一些组件：

组件使用方式通常是 **vant-组件名**。

1. **Button**（按钮）：基础的按钮组件，支持多种类型、大小、颜色等属性。
1. **Cell**（单元格）：用于展示列表数据的组件，可以自定义左右侧内容。
1. **Toast**（轻提示）：用于展示操作结果、错误提示等信息，支持多种类型和自定义图标。
1. **Dialog**（弹出框）：用于展示模态窗口，支持多种类型、自定义内容和按钮。
1. **Tabbar**（标签栏）：常用于底部导航栏的组件，支持多种样式和动画效果。
1. **Icon**（图标）：内置了很多常用的图标，支持自定义图标。
1. **Image**（图片）：用于展示图片，支持懒加载、预览等功能。
1. **Form**（表单）：用于处理表单数据，包括输入框、单选框、多选框等组件。
1. **ActionSheet**（动作面板）：用于展示多个操作选项，支持多种样式和动画效果。
1. **PullRefresh**（下拉刷新）：用于实现下拉刷新功能，支持多种样式和自定义动画。

以上是 Vant 中常用的一些组件，还有很多其他组件如 Popup（弹出层）、Badge（徽标数）、NavBar（导航栏）等都很实用。
