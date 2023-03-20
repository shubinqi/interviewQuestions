<!--
 * @Author: Shu Binqi
 * @Date: 2023-03-13 22:58:23
 * @LastEditors: Shu Binqi
 * @LastEditTime: 2023-03-14 19:12:07
 * @Description: CSS3 过渡 transition
 * @Version: 1.0.0
 * @FilePath: \interviewQuestions\前端基础\CSS\CSS3-过渡-transition.md
-->

#### 介绍一下 CSS 过渡？

**CSS 过渡**（transition）是一种通过改变 CSS 属性的值来实现平滑过渡效果的方法。通过在元素上设置 transition 属性，可以指定在元素发生变化时应该如何处理过渡动画。过渡通常用于响应用户交互事件（例如 hover 或点击事件）或 JS 脚本操作，以提高用户体验。

CSS 过渡的语法如下：

```
transition: property duration timing-function delay;
```

1. **property** 表示需要过渡的 CSS 属性；
1. **duration** 表示过渡动画的持续时间，以毫秒或秒为单位；
1. **timing-function** 表示过渡动画的时间函数，用于指定过渡动画的速度曲线；
1. **delay** 表示过渡动画的延迟时间，以毫秒或秒为单位。

下面是一个示例代码，为一个按钮添加 hover 过渡效果：

```
button {
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: darkblue;
}
```

这段代码中，我们在 button 元素上设置了一个 hover 过渡效果，当用户将鼠标悬停在按钮上时，按钮的背景颜色将平滑地从蓝色变为深蓝色。在 transition 属性中，我们指定了需要过渡的属性为 background-color，持续时间为 0.3 秒，时间函数为 ease，即缓慢加速再缓慢减速的过渡效果。

CSS 过渡有几个重要的特点：

1. 只能过渡 CSS 属性的值，不能过渡 CSS 属性本身。
1. 过渡动画只会在 CSS 属性值发生变化时触发，不会在其他情况下触发。
1. 可以指定多个过渡属性，每个属性可以有不同的动画效果。
1. 可以使用 JavaScript 动态修改 transition 属性值，以实现更复杂的过渡效果。

总之，CSS 过渡是一种非常简单易用的动画效果，可以让 Web 页面更加生动有趣。在实际应用中，我们可以根据需要自由地使用 CSS 过渡来增强页面交互效果。

#### timing-function 有哪几种？

CSS 过渡属性中的 timing-function 可以用来指定过渡动画的时间函数，用于定义动画的速度变化曲线。常见的 timing-function 有以下几种：

1. **linear**（线性）：动画在整个过渡过程中以恒定的速度运行，没有加速或减速的效果。
1. **ease**（缓慢加速再缓慢减速）：动画在开始时缓慢启动，然后加速到达过渡中点，最后缓慢减速结束。这是默认值，也是最常用的时间函数。
1. **ease-in**（缓慢加速）：动画在开始时缓慢启动，然后加速到达过渡结束点。
1. **ease-out**（缓慢减速）：动画在开始时以恒定速度运行，然后减速到达过渡结束点。
1. **ease-in-out**（缓慢加速再缓慢减速）：动画在开始时缓慢启动，然后加速到达过渡中点，最后缓慢减速结束。
1. **cubic-bezier**（贝塞尔曲线）：通过自定义贝塞尔曲线来定义过渡动画的时间函数。cubic-bezier 函数接受 4 个参数，分别表示控制点的坐标值，可以根据需要自由调整。这种时间函数可以实现更加复杂的过渡效果。

例如，下面的 CSS 代码展示了如何使用 ease-in-out 时间函数：

```
div {
  background-color: blue;
  height: 100px;
  width: 100px;
  transition: all 1s ease-in-out;
}

div:hover {
  background-color: red;
  transform: scale(1.2);
}
```

这段代码中，我们为一个 div 元素添加了一个 hover 过渡效果，在过渡动画中同时过渡背景颜色和缩放效果。在 transition 属性中，我们使用了 ease-in-out 时间函数，使过渡动画缓慢加速再缓慢减速，从而实现更加平滑自然的过渡效果。
