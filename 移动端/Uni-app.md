<!--
 * @Author: Shu Binqi
 * @Date: 2023-02-24 21:09:51
 * @LastEditors: Shu Binqi
 * @LastEditTime: 2023-03-04 19:03:04
 * @Description: Uni-app 面试题（8题）
 * @Version: 1.0.0
 * @FilePath: \interviewQuestions\移动端\Uni-app.md
-->

#### 什么是 Uni-app？

Uni-app 是一个跨平台应用开发框架，使用 Vue.js 开发一套代码，可以将其编译到 iOS、Android、微信小程序等多个平台，保证其正确运行并达到优秀体验。以下是关于 Uni-app 的详细信息：

- Uni-app 继承自 Vue.js，提供完整的 Vue.js 开发体验。组件规范和扩展 API 与微信小程序基本相同，因此有一定 Vue.js 和微信小程序开发经验的开发者可快速上手 Uni-app，开发出兼容多端的应用。
  - Uni-app 打包到 App 时仍然使用了 5+引擎，5+的所有能力都可以在 Uni-app 中使用。在 App 端运行性能和微信小程序基本相同。
  - Uni-app 提供了条件编译优化，可以优雅地为某平台写个性化代码、调用专有能力而不影响其他平台。例如，可以使用条件编译指令#ifdef 和#ifndef 来实现平台特有的 API 实现或在 H5 中不使用某个 API。
  - Uni-app 的目录结构包括 components、hybrid、platforms、pages、static、main.js、App.vue 和 manifest.json 等。
  - 在 Uni-app 中，可以使用 wx.request 和 uni.request 等 API 来发起网络请求。这些 API 的用法与微信小程序的 API 类似，可以设置请求地址、请求参数、请求头信息等。
- Uni-app 支持多个平台，包括 iOS、Android、微信小程序、百度小程序、支付宝小程序、头条小程序、QQ 小程序、快应用、H5 等。但是，某些平台不能提交简单 demo，需要补充一些其他功能。
- Uni-app 的官网提供了详细的文档和示例，可以帮助开发者快速上手并开发出优秀的跨平台应用。

#### Uni-app 的优缺点？

Uni-app 是一套可以适用多端的开源框架，一套代码可以同时生成 iOS、Android、H5、微信小程序、支付宝小程序、百度小程序等等。这个特点使得开发人员不需要在每个平台都单独开发一套代码，从而节省了大量的成本。此外，Uni-app 基于 Vue.js 开发，对于前端开发工程师来说，学习门槛相对较低。Uni-app 封装的组件和微信小程序的组件类似，也很容易上手。Uni-app 使用 HBX 进行开发，HBX 对于 Vue 语法等支持比较完备，因此开发速度也比较快。Uni-app 还支持 nvue，封装了 H5+，同时还支持原生的 iOS 和 Android 开发，拓展性很强。总体来说，Uni-app 的优点可以总结为：

- 兼容性好，一套代码编译以后多端通用，节省开发成本。
- 学习成本低，基于 Vue.js 开发，封装的组件与微信小程序相同，上手容易。
- 开发速度快，使用 HBX 进行开发，支持 Vue 的语法，编译速度快。
- 拓展性强，支持 nvue、H5+、原生 iOS 和 Android 开发。

然而，Uni-app 的问世时间还比较短，因此完善性较差，存在一些缺点，包括：

- 坑多，文档不够完善，还有一些 Bug。
- 可扩展性不够，有些功能需要自己去开发插件。
- 性能问题，由于需要同时支持多个平台，因此可能存在性能问题。

需要注意的是，不同的人可能会有不同的看法，因此以上列举的优缺点并不是绝对的，只是从多个角度分析 Uni-app 的特点。

#### Uni-app 的配置文件、入口文件、主组件、页面管理部分分别是什么？

Uni-app 是一种跨平台开发框架，可以使用一套代码生成多端应用程序。以下是 Uni-app 的配置文件、入口文件、主组件和页面管理部分的详细解释：

- 配置文件：Uni-app 的配置文件是 pages.json，它用于配置应用程序的页面路由、窗口样式、导航条样式等信息。在 pages.json 中，可以指定应用程序的首页、页面路径、页面标题、页面样式等信息。此外，pages.json 还可以配置全局的样式和组件。
- 入口文件：Uni-app 的入口文件是 main.js，它是一个 Vue 实例的入口文件。在 main.js 中，可以初始化 Vue 实例、定义全局组件、使用插件等。需要注意的是，Uni-app 的路由配置在 pages.json 文件中，而不是在 main.js 中。
- 主组件：Uni-app 的主组件是 App.vue，它是所有页面的容器，用于管理页面的切换和生命周期。在 App.vue 中，可以调用应用程序的生命周期函数、配置全局样式、配置全局的存储等。需要注意的是，App.vue 本身不是页面，不能编写视图元素。
- 页面管理部分：Uni-app 的页面管理部分是页面文件夹，每个页面都是一个单独的 Vue 组件。在页面文件夹中，需要包含一个 .vue 文件和一个 .js 文件，用于配置页面的生命周期和导出页面组件。页面文件夹的命名规则与页面路由的配置相关，详见 pages.json。

总之，Uni-app 的开发规范是遵循 Vue 单文件组件 (SFC) 规范、组件标签靠近小程序规范、接口能力靠近微信小程序规范、数据绑定及事件处理同 Vue.js 规范。Uni-app 的目录结构包含 components、hybrid、platforms 等目录。Uni-app 的优点是一套代码可以生成多端、学习成本低、拓展能力强、使用 HBuilderX 开发、突破了系统对 H5 条用原生能力的限制。Uni-app 的缺点是问世时间短、很多地方不完善、社区不大、官方对问题的支持不够及其它缺陷。

#### Uni-app 如何监听页面滚动？

在 Uni-app 中监听页面滚动可以通过以下步骤实现：

1. 在页面中添加滚动事件监听，可以通过 uni.$emit('onPageScroll', res.scrollTop)来触发滚动事件，并传递 scrollTop 值。
1. 在子组件中添加监听器，可以通过 uni.$on('onPageScroll', function(opt) {})来监听滚动事件，并获取传递的 scrollTop 值。
1. 在监听器中处理滚动事件，例如更新组件的状态或执行其他操作。

除此之外，Uni-app 中还可以通过监听触摸事件来实现滑动效果。关键点在于三个事件：@touchstart、@touchmove 和@touchend。可以在这些事件的回调函数中处理滑动事件，并执行相应的操作。

在具体实现中，可以根据不同的需求选择不同的方法。例如，在实现页面滚动时，可以使用 onPageScroll 方法；在实现吸顶效果时，可以通过监听滚动事件并更新组件状态来实现；在实现图片懒加载时，可以使用子组件和父组件绑定、通信的方法。

#### Uni-app 如何实现上拉加载

在 Uni-app 中，可以通过 onReachBottom 事件来实现上拉加载的功能。具体的实现步骤如下：

在页面或组件中添加 onReachBottom 事件监听函数，例如：

```
<template>
  <div class="list">
    <div v-for="(item, index) in list" :key="index">{{item}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      pageNum: 1,
      pageSize: 10
    }
  },
  onReachBottom() {
    this.loadMore()
  },
  methods: {
    loadMore() {
      // 上拉加载更多的处理逻辑
      // ...
    }
  }
}
</script>
```

在 loadMore 方法中发送请求获取更多数据，并将新数据追加到 list 数组中，例如：

```
loadMore() {
  uni.request({
    url: 'http://example.com/api/list',
    data: {
      pageNum: this.pageNum,
      pageSize: this.pageSize
    },
    success: (res) => {
      this.list = this.list.concat(res.data.list)
      this.pageNum++
    }
  })
}
```

这样，当用户滑动页面到底部时，就会触发 onReachBottom 事件，从而调用 loadMore 方法进行上拉加载。新数据加载完毕后，将其追加到列表中，页面就能自动更新显示出更多的数据。

#### Uni-app 如何实现下拉刷新

在 uni-app 中，可以通过使用 scroll-view 组件来实现下拉刷新功能。

具体实现步骤如下：

1. 在 scroll-view 组件中添加 enablePullDownRefresh 属性，并将其值设置为 true，开启下拉刷新功能。
2. 添加 bind:pullingdown 事件监听函数，该函数会在用户下拉页面时触发。在该函数中，可以执行数据请求操作并更新页面数据。

示例代码如下：

```
<scroll-view :enablePullDownRefresh="true" @scrolltolower="loadData" @scroll="scrollEvent" @pullingdown="onPullDownRefresh">
  <!-- 页面内容 -->
</scroll-view>

onPullDownRefresh() {
  // 下拉刷新操作
  // 更新数据
}
```

其中，@pullingdown 监听函数中可以编写具体的下拉刷新操作，例如发送数据请求并更新页面数据。

需要注意的是，在下拉刷新完成后，需要手动调用 uni.stopPullDownRefresh() 方法来停止下拉刷新动画。例如：

```
onPullDownRefresh() {
  // 发送数据请求并更新数据

  // 停止下拉刷新动画
  uni.stopPullDownRefresh();
}
```

另外，也可以使用一些 uni-app 的第三方插件来实现下拉刷新功能，例如 uni-pull-down-refresh 插件。

#### rpx、px、em、rem、%、vh、vw 的区别是什么？

1. **px**：px 就是 pixel 的缩写，意为像素。
1. **em**：参考物是父元素的 font-size，具有继承的特点。
1. **rem**：rem 是相对于根元素 html，这样就意味着，我们只需要在根元素确定一个参考值，可以设计 HTML 为大小为 10px，到时设置 1.2rem 就是 12px
1. **%**：对于普通定位元素就是我们理解的父元素。
1. **vh**：CSS3 新单位，view height 的简写，是指可视窗口的高度。
1. **vw**：CSS3 新单位，view width 的简写，是指可视窗口的宽度。
1. **rpx**：rpx 是微信小程序解决自适应屏幕尺寸的尺寸单位。

#### 如何让图片宽度不变，高度自动变化，保持原图宽高比不变？

小程序中，可根据需求给 image 设置 mode 属性来控制图片的裁剪、缩放模式
如果要保持图片在容器内不变形可设置 mode 属性为 aspectFit

#### Uni-app 的生命周期？

uni-app 支持如下生命周期函数：

**页面的生命周期**

1. **onLoad** 监听页面加载，其参数为上个页面传递的数据，参数类型为 object（用于页面传参），参考示例
1. **onShow** 监听页面显示
1. **onReady** 监听页面初次渲染完成
1. **onHide** 监听页面隐藏
1. **onUnload** 监听页面卸载
1. **onPullDownRefresh** 监听用户下拉动作
1. **onReachBottom** 页面上拉触底事件的处理函数
1. **onShareAppMessage** 用户点击右上角分享 微信小程序
1. **onPageScroll** 监听页面滚动
1. **onTabItemTap** 当前是 tab 页时，点击 tab 时触发

**组件的生命周期**

1. **beforeCreate** 组件初始化，但数据原生观测、自定义观测(event\watcher)没生成之前。 未完全创建阶段
1. **created** 组件创建后，但还未挂载 完全创建阶段
1. **beforeMount** 组件渲染后，挂载前。 渲染后待挂载
1. **mounted** 组件挂载到页面 可用 vm.$el 访问 挂载 OK
1. **beforeUpdate** 虚拟 DOM 重新渲染和打补丁之前 再次渲染前
1. **updated** 组件 DOM 已经更新 再次渲染后
1. **activated** keep-alive 组件激活时调用。 当前组件被激活：显示
1. **deactivated** keep-alive 组件停用时调用。 当前组件隐藏
1. **beforeDestroy** 实例销毁之前调用。实例仍然完全可用。 销毁前
1. **destroy** Vue 实例销毁后调用

注：挂载阶段，先渲染组件，然后挂载组件。

#### 使用过 Uni-app 哪些组件？

Uni-app 是一个跨平台的开发框架，支持多端（H5、小程序、APP）开发，它提供了一套组件库来满足不同端的需求，其中一些常用的组件如下：

1. **uni-icon**: 图标组件，支持使用阿里图标库和自定义图标。
1. **uni-badge**: 徽标组件，可以显示角标和标签。
1. **uni-button**: 按钮组件，支持多种形状和颜色。
1. **uni-checkbox**: 复选框组件，支持单选和多选。
1. **uni-form**: 表单组件，支持表单验证和提交。
1. **uni-input**: 输入框组件，支持多种输入类型和校验规则。
1. **uni-list**: 列表组件，支持多种列表样式和滚动加载。
1. **uni-loading**: 加载组件，支持多种加载动画和自定义加载文本。
1. **uni-modal**: 模态框组件，支持多种模态框类型和自定义模态框内容。
1. **uni-popup**: 弹出层组件，支持多种弹出层类型和位置。
1. **uni-radio**: 单选框组件，支持多种单选框样式和布局。
1. **uni-search-bar**: 搜索框组件，支持搜索输入和清空历史记录。
1. **uni-slider**: 滑块组件，支持横向和竖向滑块。
1. **uni-stepper**: 步进器组件，支持数字增减和手动输入。
1. **uni-switch**: 开关组件，支持多种开关类型和颜色。
1. **uni-tab-bar**: 底部导航栏组件，支持多种样式和图标。
1. **uni-tabs**: 标签页组件，支持多种样式和滑动切换。
1. **uni-toast**: 提示框组件，支持多种提示类型和自动关闭。

除了以上组件，Uni-app 还提供了很多其他的组件和 API，可以根据实际需求选择合适的组件进行开发。
