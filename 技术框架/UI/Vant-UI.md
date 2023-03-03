<!--
 * @Author: Shu Binqi
 * @Date: 2023-02-24 21:07:20
 * @LastEditors: Shu Binqi
 * @LastEditTime: 2023-03-03 14:06:56
 * @Description: Vant-UI 面试题（1题）
 * @Version: 1.0.0
 * @FilePath: \interviewQuestions\UI\Vant-UI.md
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
