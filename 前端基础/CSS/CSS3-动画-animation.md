<!--
 * @Author: Shu Binqi
 * @Date: 2023-03-13 22:30:59
 * @LastEditors: Shu Binqi
 * @LastEditTime: 2023-03-14 19:11:35
 * @Description: CSS3 动画 animation
 * @Version: 1.0.0
 * @FilePath: \interviewQuestions\前端基础\CSS\CSS3-动画-animation.md
-->

#### 介绍一下 CSS 动画？

CSS 动画是一种通过 CSS 样式表实现的动画效果，可以让页面元素产生各种动态效果。相对于 JavaScript 动画，CSS 动画更加简单易用，同时也更加轻量级，对于性能的消耗更小。

CSS 动画有以下几个主要特点：

1. **基于关键帧**：CSS 动画是基于关键帧的，通过在关键帧中指定不同的 CSS 属性值来定义不同的动画效果。在关键帧之间的过渡中，浏览器会自动计算中间的动画状态。
1. **支持多种属性**：CSS 动画可以同时对多个 CSS 属性进行动画设置，比如背景颜色、透明度、位置、大小、旋转等。
1. **可以设置动画延迟和持续时间**：可以通过设置动画延迟和持续时间来控制动画的开始时间和结束时间，实现更加精细的动画效果。
1. **可以使用时间函数**：可以使用 CSS 的时间函数（timing-function）来控制动画的加速度和减速度，从而实现更加平滑自然的动画效果。
1. **支持暂停、继续和重复**：CSS 动画可以通过 JavaScript 代码控制动画的暂停、继续和重复等操作。

CSS 动画可以通过关键帧（@keyframes）来定义动画的每个阶段，然后通过动画属性（animation）将其应用到需要动画的元素上。常用的动画属性包括：

1. **动画名称**（animation-name）：指定动画名称，即关键帧的名称。
1. **执行时间**（animation-duration）：指定动画执行的时间。
1. **时间函数**（animation-timing-function）：指定动画时间函数，可以控制动画的速度变化曲线。
1. **延迟时间**（animation-delay）：指定动画延迟执行的时间。
1. **重复次数**（animation-iteration-count）：指定动画的循环次数，可以为具体的数字，也可以为 infinite 表示无限循环。
1. **运动方向**（animation-direction）：指定动画的播放方向，可以为
   - normal（正常播放）
   - reverse（反向播放）
   - alternate（轮流正反向播放）
   - alternate-reverse（轮流反正向播放）。
1. **结束状态**（animation-fill-mode）：指定动画结束时元素的状态，可以为
   - none（保持初始状态）
   - forwards（保持最后一帧状态）
   - backwards（保持第一帧状态）
   - both（同时保持第一帧和最后一帧状态）。
1. **播放状态**（animation-play-state）：指定动画的播放状态，可以为
   - paused（暂停播放）
   - running（正在播放）。

animation 方法

1. **animationend**: 在动画结束时触发。
1. **animationstart**: 在动画开始时触发。
1. **animationiteration**: 在动画重复播放时触发。

下面是一个使用 CSS 动画实现旋转效果的示例代码：

```
/* 定义关键帧 */
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* 应用动画属性 */
.box {
  width: 100px;
  height: 100px;
  background-color: blue;
  animation-name: rotate;
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
```
