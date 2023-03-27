<!--
 * @Author: Shu Binqi
 * @Date: 2023-03-13 22:30:59
 * @LastEditors: Shu Binqi
 * @LastEditTime: 2023-03-19 22:13:21
 * @Description: CSS3 动画 animation
 * @Version: 1.0.0
 * @FilePath: \interviewQuestions\前端基础\CSS\CSS3-动画-animation.md
-->

#### 介绍一下 CSS 动画？

**CSS 动画**是一种通过 CSS 样式表实现的动画效果，可以让页面元素产生各种动态效果。相对于 JavaScript 动画，CSS 动画更加简单易用，同时也更加轻量级，对于性能的消耗更小。

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

#### GSAP 动画库

GSAP 是 GreenSock Animation Platform 的缩写，是一个 JavaScript 动画库，用于创建高性能、复杂的动画效果。它提供了一组强大的 API，包括 TweenMax、TimelineMax 等，可以使开发者轻松地创建流畅、快速、交互性强的动画效果。GSAP 被广泛用于 Web 开发、游戏开发、移动应用程序等多个领域，可以用于创建平滑的页面过渡、动态网页效果、响应式设计动画等。

#### 淡入淡出

```
html [data-msa][data-msa][data-msa-easing=linear],html body[data-msa-easing=linear] [data-msa] {
  -webkit-transition-timing-function: cubic-bezier(.25,.25,.75,.75);
  transition-timing-function: cubic-bezier(.25,.25,.75,.75)
}

html [data-msa][data-msa][data-msa-easing=ease],html body[data-msa-easing=ease] [data-msa] {
  -webkit-transition-timing-function: ease;
  transition-timing-function: ease
}

html [data-msa][data-msa][data-msa-easing=ease-in],html body[data-msa-easing=ease-in] [data-msa] {
  -webkit-transition-timing-function: ease-in;
  transition-timing-function: ease-in
}

html [data-msa][data-msa][data-msa-easing=ease-out],html body[data-msa-easing=ease-out] [data-msa] {
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out
}

html [data-msa][data-msa][data-msa-easing=ease-in-out],html body[data-msa-easing=ease-in-out] [data-msa] {
  -webkit-transition-timing-function: ease-in-out;
  transition-timing-function: ease-in-out
}

html [data-msa][data-msa][data-msa-easing=ease-in-back],html body[data-msa-easing=ease-in-back] [data-msa] {
  -webkit-transition-timing-function: cubic-bezier(.6,-.28,.735,.045);
  transition-timing-function: cubic-bezier(.6,-.28,.735,.045)
}

html [data-msa][data-msa][data-msa-easing=ease-out-back],html body[data-msa-easing=ease-out-back] [data-msa] {
  -webkit-transition-timing-function: cubic-bezier(.175,.885,.32,1.275);
  transition-timing-function: cubic-bezier(.175,.885,.32,1.275)
}

html [data-msa][data-msa][data-msa-easing=ease-in-out-back],html body[data-msa-easing=ease-in-out-back] [data-msa] {
  -webkit-transition-timing-function: cubic-bezier(.68,-.55,.265,1.55);
  transition-timing-function: cubic-bezier(.68,-.55,.265,1.55)
}

html [data-msa][data-msa][data-msa-easing=ease-in-sine],html body[data-msa-easing=ease-in-sine] [data-msa] {
  -webkit-transition-timing-function: cubic-bezier(.47,0,.745,.715);
  transition-timing-function: cubic-bezier(.47,0,.745,.715)
}

html [data-msa][data-msa][data-msa-easing=ease-out-sine],html body[data-msa-easing=ease-out-sine] [data-msa] {
  -webkit-transition-timing-function: cubic-bezier(.39,.575,.565,1);
  transition-timing-function: cubic-bezier(.39,.575,.565,1)
}

html [data-msa][data-msa][data-msa-easing=ease-in-out-sine],html body[data-msa-easing=ease-in-out-sine] [data-msa] {
  -webkit-transition-timing-function: cubic-bezier(.445,.05,.55,.95);
  transition-timing-function: cubic-bezier(.445,.05,.55,.95)
}

html [data-msa][data-msa][data-msa-easing=ease-in-quad],html body[data-msa-easing=ease-in-quad] [data-msa] {
  -webkit-transition-timing-function: cubic-bezier(.55,.085,.68,.53);
  transition-timing-function: cubic-bezier(.55,.085,.68,.53)
}

html [data-msa][data-msa][data-msa-easing=ease-out-quad],html body[data-msa-easing=ease-out-quad] [data-msa] {
  -webkit-transition-timing-function: cubic-bezier(.25,.46,.45,.94);
  transition-timing-function: cubic-bezier(.25,.46,.45,.94)
}

html [data-msa][data-msa][data-msa-easing=ease-in-out-quad],html body[data-msa-easing=ease-in-out-quad] [data-msa] {
  -webkit-transition-timing-function: cubic-bezier(.455,.03,.515,.955);
  transition-timing-function: cubic-bezier(.455,.03,.515,.955)
}

html [data-msa][data-msa][data-msa-easing=ease-in-cubic],html body[data-msa-easing=ease-in-cubic] [data-msa] {
  -webkit-transition-timing-function: cubic-bezier(.55,.085,.68,.53);
  transition-timing-function: cubic-bezier(.55,.085,.68,.53)
}

html [data-msa][data-msa][data-msa-easing=ease-out-cubic],html body[data-msa-easing=ease-out-cubic] [data-msa] {
  -webkit-transition-timing-function: cubic-bezier(.25,.46,.45,.94);
  transition-timing-function: cubic-bezier(.25,.46,.45,.94)
}

html [data-msa][data-msa][data-msa-easing=ease-in-out-cubic],html body[data-msa-easing=ease-in-out-cubic] [data-msa] {
  -webkit-transition-timing-function: cubic-bezier(.455,.03,.515,.955);
  transition-timing-function: cubic-bezier(.455,.03,.515,.955)
}

html [data-msa][data-msa][data-msa-easing=ease-in-quart],html body[data-msa-easing=ease-in-quart] [data-msa] {
  -webkit-transition-timing-function: cubic-bezier(.55,.085,.68,.53);
  transition-timing-function: cubic-bezier(.55,.085,.68,.53)
}

html [data-msa][data-msa][data-msa-easing=ease-out-quart],html body[data-msa-easing=ease-out-quart] [data-msa] {
  -webkit-transition-timing-function: cubic-bezier(.25,.46,.45,.94);
  transition-timing-function: cubic-bezier(.25,.46,.45,.94)
}

html [data-msa][data-msa][data-msa-easing=ease-in-out-quart],html body[data-msa-easing=ease-in-out-quart] [data-msa] {
  -webkit-transition-timing-function: cubic-bezier(.455,.03,.515,.955);
  transition-timing-function: cubic-bezier(.455,.03,.515,.955)
}

:root {
  --delay: 0;
  --duration: 400ms;
  --distance: 30px;
  --perspective: 2500px;
  --flip-rotate: 100deg
}

html [data-msa][data-msa][data-msa-duration="50"],html body[data-msa-duration="50"] [data-msa] {
  --duration: 50ms
}

html [data-msa][data-msa][data-msa-delay="50"],html body[data-msa-delay="50"] [data-msa] {
  --delay: 50ms
}

html [data-msa][data-msa][data-msa-duration="100"],html body[data-msa-duration="100"] [data-msa] {
  --duration: 100ms
}

html [data-msa][data-msa][data-msa-delay="100"],html body[data-msa-delay="100"] [data-msa] {
  --delay: 100ms
}

html [data-msa][data-msa][data-msa-duration="150"],html body[data-msa-duration="150"] [data-msa] {
  --duration: 150ms
}

html [data-msa][data-msa][data-msa-delay="150"],html body[data-msa-delay="150"] [data-msa] {
  --delay: 150ms
}

html [data-msa][data-msa][data-msa-duration="200"],html body[data-msa-duration="200"] [data-msa] {
  --duration: 200ms
}

html [data-msa][data-msa][data-msa-delay="200"],html body[data-msa-delay="200"] [data-msa] {
  --delay: 200ms
}

html [data-msa][data-msa][data-msa-duration="250"],html body[data-msa-duration="250"] [data-msa] {
  --duration: 250ms
}

html [data-msa][data-msa][data-msa-delay="250"],html body[data-msa-delay="250"] [data-msa] {
  --delay: 250ms
}

html [data-msa][data-msa][data-msa-duration="300"],html body[data-msa-duration="300"] [data-msa] {
  --duration: 300ms
}

html [data-msa][data-msa][data-msa-delay="300"],html body[data-msa-delay="300"] [data-msa] {
  --delay: 300ms
}

html [data-msa][data-msa][data-msa-duration="350"],html body[data-msa-duration="350"] [data-msa] {
  --duration: 350ms
}

html [data-msa][data-msa][data-msa-delay="350"],html body[data-msa-delay="350"] [data-msa] {
  --delay: 350ms
}

html [data-msa][data-msa][data-msa-duration="400"],html body[data-msa-duration="400"] [data-msa] {
  --duration: 400ms
}

html [data-msa][data-msa][data-msa-delay="400"],html body[data-msa-delay="400"] [data-msa] {
  --delay: 400ms
}

html [data-msa][data-msa][data-msa-duration="450"],html body[data-msa-duration="450"] [data-msa] {
  --duration: 450ms
}

html [data-msa][data-msa][data-msa-delay="450"],html body[data-msa-delay="450"] [data-msa] {
  --delay: 450ms
}

html [data-msa][data-msa][data-msa-duration="500"],html body[data-msa-duration="500"] [data-msa] {
  --duration: 500ms
}

html [data-msa][data-msa][data-msa-delay="500"],html body[data-msa-delay="500"] [data-msa] {
  --delay: 500ms
}

html [data-msa][data-msa][data-msa-duration="550"],html body[data-msa-duration="550"] [data-msa] {
  --duration: 550ms
}

html [data-msa][data-msa][data-msa-delay="550"],html body[data-msa-delay="550"] [data-msa] {
  --delay: 550ms
}

html [data-msa][data-msa][data-msa-duration="600"],html body[data-msa-duration="600"] [data-msa] {
  --duration: 600ms
}

html [data-msa][data-msa][data-msa-delay="600"],html body[data-msa-delay="600"] [data-msa] {
  --delay: 600ms
}

html [data-msa][data-msa][data-msa-duration="650"],html body[data-msa-duration="650"] [data-msa] {
  --duration: 650ms
}

html [data-msa][data-msa][data-msa-delay="650"],html body[data-msa-delay="650"] [data-msa] {
  --delay: 650ms
}

html [data-msa][data-msa][data-msa-duration="700"],html body[data-msa-duration="700"] [data-msa] {
  --duration: 700ms
}

html [data-msa][data-msa][data-msa-delay="700"],html body[data-msa-delay="700"] [data-msa] {
  --delay: 700ms
}

html [data-msa][data-msa][data-msa-duration="750"],html body[data-msa-duration="750"] [data-msa] {
  --duration: 750ms
}

html [data-msa][data-msa][data-msa-delay="750"],html body[data-msa-delay="750"] [data-msa] {
  --delay: 750ms
}

html [data-msa][data-msa][data-msa-duration="800"],html body[data-msa-duration="800"] [data-msa] {
  --duration: 800ms
}

html [data-msa][data-msa][data-msa-delay="800"],html body[data-msa-delay="800"] [data-msa] {
  --delay: 800ms
}

html [data-msa][data-msa][data-msa-duration="850"],html body[data-msa-duration="850"] [data-msa] {
  --duration: 850ms
}

html [data-msa][data-msa][data-msa-delay="850"],html body[data-msa-delay="850"] [data-msa] {
  --delay: 850ms
}

html [data-msa][data-msa][data-msa-duration="900"],html body[data-msa-duration="900"] [data-msa] {
  --duration: 900ms
}

html [data-msa][data-msa][data-msa-delay="900"],html body[data-msa-delay="900"] [data-msa] {
  --delay: 900ms
}

html [data-msa][data-msa][data-msa-duration="950"],html body[data-msa-duration="950"] [data-msa] {
  --duration: 950ms
}

html [data-msa][data-msa][data-msa-delay="950"],html body[data-msa-delay="950"] [data-msa] {
  --delay: 950ms
}

html [data-msa][data-msa][data-msa-duration="1000"],html body[data-msa-duration="1000"] [data-msa] {
  --duration: 1000ms
}

html [data-msa][data-msa][data-msa-delay="1000"],html body[data-msa-delay="1000"] [data-msa] {
  --delay: 1000ms
}

html [data-msa][data-msa][data-msa-duration="1050"],html body[data-msa-duration="1050"] [data-msa] {
  --duration: 1050ms
}

html [data-msa][data-msa][data-msa-delay="1050"],html body[data-msa-delay="1050"] [data-msa] {
  --delay: 1050ms
}

html [data-msa][data-msa][data-msa-duration="1100"],html body[data-msa-duration="1100"] [data-msa] {
  --duration: 1100ms
}

html [data-msa][data-msa][data-msa-delay="1100"],html body[data-msa-delay="1100"] [data-msa] {
  --delay: 1100ms
}

html [data-msa][data-msa][data-msa-duration="1150"],html body[data-msa-duration="1150"] [data-msa] {
  --duration: 1150ms
}

html [data-msa][data-msa][data-msa-delay="1150"],html body[data-msa-delay="1150"] [data-msa] {
  --delay: 1150ms
}

html [data-msa][data-msa][data-msa-duration="1200"],html body[data-msa-duration="1200"] [data-msa] {
  --duration: 1200ms
}

html [data-msa][data-msa][data-msa-delay="1200"],html body[data-msa-delay="1200"] [data-msa] {
  --delay: 1200ms
}

html [data-msa][data-msa][data-msa-duration="1250"],html body[data-msa-duration="1250"] [data-msa] {
  --duration: 1250ms
}

html [data-msa][data-msa][data-msa-delay="1250"],html body[data-msa-delay="1250"] [data-msa] {
  --delay: 1250ms
}

html [data-msa][data-msa][data-msa-duration="1300"],html body[data-msa-duration="1300"] [data-msa] {
  --duration: 1300ms
}

html [data-msa][data-msa][data-msa-delay="1300"],html body[data-msa-delay="1300"] [data-msa] {
  --delay: 1300ms
}

html [data-msa][data-msa][data-msa-duration="1350"],html body[data-msa-duration="1350"] [data-msa] {
  --duration: 1350ms
}

html [data-msa][data-msa][data-msa-delay="1350"],html body[data-msa-delay="1350"] [data-msa] {
  --delay: 1350ms
}

html [data-msa][data-msa][data-msa-duration="1400"],html body[data-msa-duration="1400"] [data-msa] {
  --duration: 1400ms
}

html [data-msa][data-msa][data-msa-delay="1400"],html body[data-msa-delay="1400"] [data-msa] {
  --delay: 1400ms
}

html [data-msa][data-msa][data-msa-duration="1450"],html body[data-msa-duration="1450"] [data-msa] {
  --duration: 1450ms
}

html [data-msa][data-msa][data-msa-delay="1450"],html body[data-msa-delay="1450"] [data-msa] {
  --delay: 1450ms
}

html [data-msa][data-msa][data-msa-duration="1500"],html body[data-msa-duration="1500"] [data-msa] {
  --duration: 1500ms
}

html [data-msa][data-msa][data-msa-delay="1500"],html body[data-msa-delay="1500"] [data-msa] {
  --delay: 1500ms
}

html [data-msa][data-msa][data-msa-duration="1550"],html body[data-msa-duration="1550"] [data-msa] {
  --duration: 1550ms
}

html [data-msa][data-msa][data-msa-delay="1550"],html body[data-msa-delay="1550"] [data-msa] {
  --delay: 1550ms
}

html [data-msa][data-msa][data-msa-duration="1600"],html body[data-msa-duration="1600"] [data-msa] {
  --duration: 1600ms
}

html [data-msa][data-msa][data-msa-delay="1600"],html body[data-msa-delay="1600"] [data-msa] {
  --delay: 1600ms
}

html [data-msa][data-msa][data-msa-duration="1650"],html body[data-msa-duration="1650"] [data-msa] {
  --duration: 1650ms
}

html [data-msa][data-msa][data-msa-delay="1650"],html body[data-msa-delay="1650"] [data-msa] {
  --delay: 1650ms
}

html [data-msa][data-msa][data-msa-duration="1700"],html body[data-msa-duration="1700"] [data-msa] {
  --duration: 1700ms
}

html [data-msa][data-msa][data-msa-delay="1700"],html body[data-msa-delay="1700"] [data-msa] {
  --delay: 1700ms
}

html [data-msa][data-msa][data-msa-duration="1750"],html body[data-msa-duration="1750"] [data-msa] {
  --duration: 1750ms
}

html [data-msa][data-msa][data-msa-delay="1750"],html body[data-msa-delay="1750"] [data-msa] {
  --delay: 1750ms
}

html [data-msa][data-msa][data-msa-duration="1800"],html body[data-msa-duration="1800"] [data-msa] {
  --duration: 1800ms
}

html [data-msa][data-msa][data-msa-delay="1800"],html body[data-msa-delay="1800"] [data-msa] {
  --delay: 1800ms
}

html [data-msa][data-msa][data-msa-duration="1850"],html body[data-msa-duration="1850"] [data-msa] {
  --duration: 1850ms
}

html [data-msa][data-msa][data-msa-delay="1850"],html body[data-msa-delay="1850"] [data-msa] {
  --delay: 1850ms
}

html [data-msa][data-msa][data-msa-duration="1900"],html body[data-msa-duration="1900"] [data-msa] {
  --duration: 1900ms
}

html [data-msa][data-msa][data-msa-delay="1900"],html body[data-msa-delay="1900"] [data-msa] {
  --delay: 1900ms
}

html [data-msa][data-msa][data-msa-duration="1950"],html body[data-msa-duration="1950"] [data-msa] {
  --duration: 1950ms
}

html [data-msa][data-msa][data-msa-delay="1950"],html body[data-msa-delay="1950"] [data-msa] {
  --delay: 1950ms
}

html [data-msa][data-msa][data-msa-duration="2000"],html body[data-msa-duration="2000"] [data-msa] {
  --duration: 2000ms
}

html [data-msa][data-msa][data-msa-delay="2000"],html body[data-msa-delay="2000"] [data-msa] {
  --delay: 2000ms
}

html [data-msa][data-msa][data-msa-duration="2050"],html body[data-msa-duration="2050"] [data-msa] {
  --duration: 2050ms
}

html [data-msa][data-msa][data-msa-delay="2050"],html body[data-msa-delay="2050"] [data-msa] {
  --delay: 2050ms
}

html [data-msa][data-msa][data-msa-duration="2100"],html body[data-msa-duration="2100"] [data-msa] {
  --duration: 2100ms
}

html [data-msa][data-msa][data-msa-delay="2100"],html body[data-msa-delay="2100"] [data-msa] {
  --delay: 2100ms
}

html [data-msa][data-msa][data-msa-duration="2150"],html body[data-msa-duration="2150"] [data-msa] {
  --duration: 2150ms
}

html [data-msa][data-msa][data-msa-delay="2150"],html body[data-msa-delay="2150"] [data-msa] {
  --delay: 2150ms
}

html [data-msa][data-msa][data-msa-duration="2200"],html body[data-msa-duration="2200"] [data-msa] {
  --duration: 2200ms
}

html [data-msa][data-msa][data-msa-delay="2200"],html body[data-msa-delay="2200"] [data-msa] {
  --delay: 2200ms
}

html [data-msa][data-msa][data-msa-duration="2250"],html body[data-msa-duration="2250"] [data-msa] {
  --duration: 2250ms
}

html [data-msa][data-msa][data-msa-delay="2250"],html body[data-msa-delay="2250"] [data-msa] {
  --delay: 2250ms
}

html [data-msa][data-msa][data-msa-duration="2300"],html body[data-msa-duration="2300"] [data-msa] {
  --duration: 2300ms
}

html [data-msa][data-msa][data-msa-delay="2300"],html body[data-msa-delay="2300"] [data-msa] {
  --delay: 2300ms
}

html [data-msa][data-msa][data-msa-duration="2350"],html body[data-msa-duration="2350"] [data-msa] {
  --duration: 2350ms
}

html [data-msa][data-msa][data-msa-delay="2350"],html body[data-msa-delay="2350"] [data-msa] {
  --delay: 2350ms
}

html [data-msa][data-msa][data-msa-duration="2400"],html body[data-msa-duration="2400"] [data-msa] {
  --duration: 2400ms
}

html [data-msa][data-msa][data-msa-delay="2400"],html body[data-msa-delay="2400"] [data-msa] {
  --delay: 2400ms
}

html [data-msa][data-msa][data-msa-duration="2450"],html body[data-msa-duration="2450"] [data-msa] {
  --duration: 2450ms
}

html [data-msa][data-msa][data-msa-delay="2450"],html body[data-msa-delay="2450"] [data-msa] {
  --delay: 2450ms
}

html [data-msa][data-msa][data-msa-duration="2500"],html body[data-msa-duration="2500"] [data-msa] {
  --duration: 2500ms
}

html [data-msa][data-msa][data-msa-delay="2500"],html body[data-msa-delay="2500"] [data-msa] {
  --delay: 2500ms
}

html [data-msa][data-msa][data-msa-duration="2550"],html body[data-msa-duration="2550"] [data-msa] {
  --duration: 2550ms
}

html [data-msa][data-msa][data-msa-delay="2550"],html body[data-msa-delay="2550"] [data-msa] {
  --delay: 2550ms
}

html [data-msa][data-msa][data-msa-duration="2600"],html body[data-msa-duration="2600"] [data-msa] {
  --duration: 2600ms
}

html [data-msa][data-msa][data-msa-delay="2600"],html body[data-msa-delay="2600"] [data-msa] {
  --delay: 2600ms
}

html [data-msa][data-msa][data-msa-duration="2650"],html body[data-msa-duration="2650"] [data-msa] {
  --duration: 2650ms
}

html [data-msa][data-msa][data-msa-delay="2650"],html body[data-msa-delay="2650"] [data-msa] {
  --delay: 2650ms
}

html [data-msa][data-msa][data-msa-duration="2700"],html body[data-msa-duration="2700"] [data-msa] {
  --duration: 2700ms
}

html [data-msa][data-msa][data-msa-delay="2700"],html body[data-msa-delay="2700"] [data-msa] {
  --delay: 2700ms
}

html [data-msa][data-msa][data-msa-duration="2750"],html body[data-msa-duration="2750"] [data-msa] {
  --duration: 2750ms
}

html [data-msa][data-msa][data-msa-delay="2750"],html body[data-msa-delay="2750"] [data-msa] {
  --delay: 2750ms
}

html [data-msa][data-msa][data-msa-duration="2800"],html body[data-msa-duration="2800"] [data-msa] {
  --duration: 2800ms
}

html [data-msa][data-msa][data-msa-delay="2800"],html body[data-msa-delay="2800"] [data-msa] {
  --delay: 2800ms
}

html [data-msa][data-msa][data-msa-duration="2850"],html body[data-msa-duration="2850"] [data-msa] {
  --duration: 2850ms
}

html [data-msa][data-msa][data-msa-delay="2850"],html body[data-msa-delay="2850"] [data-msa] {
  --delay: 2850ms
}

html [data-msa][data-msa][data-msa-duration="2900"],html body[data-msa-duration="2900"] [data-msa] {
  --duration: 2900ms
}

html [data-msa][data-msa][data-msa-delay="2900"],html body[data-msa-delay="2900"] [data-msa] {
  --delay: 2900ms
}

html [data-msa][data-msa][data-msa-duration="2950"],html body[data-msa-duration="2950"] [data-msa] {
  --duration: 2950ms
}

html [data-msa][data-msa][data-msa-delay="2950"],html body[data-msa-delay="2950"] [data-msa] {
  --delay: 2950ms
}

html [data-msa][data-msa][data-msa-duration="3000"],html body[data-msa-duration="3000"] [data-msa] {
  --duration: 3000ms
}

html [data-msa][data-msa][data-msa-delay="3000"],html body[data-msa-delay="3000"] [data-msa] {
  --delay: 3000ms
}

html [data-msa] {
  -webkit-transition-delay: 0s;
  transition-delay: 0s;
  -webkit-transition-duration: var(--duration);
  transition-duration: var(--duration)
}

html [data-msa].msa-animated {
  -webkit-transition-delay: var(--delay);
  transition-delay: var(--delay)
}

html [data-msa^=fade] {
  opacity: 0;
  -webkit-transition-property: opacity,-webkit-transform;
  transition-property: opacity,-webkit-transform;
  transition-property: opacity,transform;
  transition-property: opacity,transform,-webkit-transform
}

html [data-msa^=fade].msa-animated {
  opacity: 1;
  -webkit-transform: none;
  -ms-transform: none;
  transform: none
}

html [data-msa=fade-up] {
  -webkit-transform: translate3d(0,var(--distance),0);
  transform: translate3d(0,var(--distance),0)
}

html [data-msa=fade-down] {
  -webkit-transform: translate3d(0,calc(var(--distance)*-1),0);
  transform: translate3d(0,calc(var(--distance)*-1),0)
}

html [data-msa=fade-right] {
  -webkit-transform: translate3d(calc(var(--distance)*-1),0,0);
  transform: translate3d(calc(var(--distance)*-1),0,0)
}

html [data-msa=fade-left] {
  -webkit-transform: translate3d(var(--distance),0,0);
  transform: translate3d(var(--distance),0,0)
}

html [data-msa=fade-up-right] {
  -webkit-transform: translate3d(calc(var(--distance)*-1),var(--distance),0);
  transform: translate3d(calc(var(--distance)*-1),var(--distance),0)
}

html [data-msa=fade-up-left] {
  -webkit-transform: translate3d(var(--distance),var(--distance),0);
  transform: translate3d(var(--distance),var(--distance),0)
}

html [data-msa=fade-down-right] {
  -webkit-transform: translate3d(calc(var(--distance)*-1),calc(var(--distance)*-1),0);
  transform: translate3d(calc(var(--distance)*-1),calc(var(--distance)*-1),0)
}

html [data-msa=fade-down-left] {
  -webkit-transform: translate3d(var(--distance),calc(var(--distance)*-1),0);
  transform: translate3d(var(--distance),calc(var(--distance)*-1),0)
}

html [data-msa=fade-in-down] {
  -webkit-transform: translateY(-60px);
  -ms-transform: translateY(-60px);
  transform: translateY(-60px)
}

html [data-msa^=zoom] {
  opacity: 0;
  -webkit-transition-property: opacity,-webkit-transform;
  transition-property: opacity,-webkit-transform;
  transition-property: opacity,transform;
  transition-property: opacity,transform,-webkit-transform
}

html [data-msa^=zoom].msa-animated {
  opacity: 1;
  -webkit-transform: translateZ(0) scale(1);
  transform: translateZ(0) scale(1)
}

html [data-msa=zoom-in] {
  -webkit-transform: scale(.6);
  -ms-transform: scale(.6);
  transform: scale(.6)
}

html [data-msa=zoom-in-up] {
  -webkit-transform: translate3d(0,var(--distance),0) scale(.6);
  transform: translate3d(0,var(--distance),0) scale(.6)
}

html [data-msa=zoom-in-down] {
  -webkit-transform: translate3d(0,calc(var(--distance)*-1),0) scale(.6);
  transform: translate3d(0,calc(var(--distance)*-1),0) scale(.6)
}

html [data-msa=zoom-in-right] {
  -webkit-transform: translate3d(calc(var(--distance)*-1),0,0) scale(.6);
  transform: translate3d(calc(var(--distance)*-1),0,0) scale(.6)
}

html [data-msa=zoom-in-left] {
  -webkit-transform: translate3d(var(--distance),0,0) scale(.6);
  transform: translate3d(var(--distance),0,0) scale(.6)
}

html [data-msa=zoom-out] {
  -webkit-transform: scale(1.2);
  -ms-transform: scale(1.2);
  transform: scale(1.2)
}

html [data-msa=zoom-out-up] {
  -webkit-transform: translate3d(0,var(--distance),0) scale(1.2);
  transform: translate3d(0,var(--distance),0) scale(1.2)
}

html [data-msa=zoom-out-down] {
  -webkit-transform: translate3d(0,calc(var(--distance)*-1),0) scale(1.2);
  transform: translate3d(0,calc(var(--distance)*-1),0) scale(1.2)
}

html [data-msa=zoom-out-right] {
  -webkit-transform: translate3d(calc(var(--distance)*-1),0,0) scale(1.2);
  transform: translate3d(calc(var(--distance)*-1),0,0) scale(1.2)
}

html [data-msa=zoom-out-left] {
  -webkit-transform: translate3d(var(--distance),0,0) scale(1.2);
  transform: translate3d(var(--distance),0,0) scale(1.2)
}

html [data-msa^=slide] {
  -webkit-transition-property: -webkit-transform;
  transition-property: -webkit-transform;
  transition-property: transform;
  transition-property: transform,-webkit-transform;
  visibility: hidden
}

html [data-msa^=slide].msa-animated {
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  visibility: visible
}

html [data-msa=slide-up] {
  -webkit-transform: translate3d(0,100%,0);
  transform: translate3d(0,100%,0)
}

html [data-msa=slide-down] {
  -webkit-transform: translate3d(0,-100%,0);
  transform: translate3d(0,-100%,0)
}

html [data-msa=slide-right] {
  -webkit-transform: translate3d(-100%,0,0);
  transform: translate3d(-100%,0,0)
}

html [data-msa=slide-left] {
  -webkit-transform: translate3d(100%,0,0);
  transform: translate3d(100%,0,0)
}

html [data-msa^=flip][data-msa^=flip] {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transition-property: -webkit-transform;
  transition-property: -webkit-transform;
  transition-property: transform;
  transition-property: transform,-webkit-transform
}

html [data-msa=flip-left] {
  -webkit-transform: perspective(var(--perspective)) rotateY(calc(var(--flip-rotate)*-1));
  transform: perspective(var(--perspective)) rotateY(calc(var(--flip-rotate)*-1))
}

html [data-msa=flip-left].msa-animated {
  -webkit-transform: perspective(var(--perspective)) rotateY(0);
  transform: perspective(var(--perspective)) rotateY(0)
}

html [data-msa=flip-right] {
  -webkit-transform: perspective(var(--perspective)) rotateY(var(--flip-rotate));
  transform: perspective(var(--perspective)) rotateY(var(--flip-rotate))
}

html [data-msa=flip-right].msa-animated {
  -webkit-transform: perspective(var(--perspective)) rotateY(0);
  transform: perspective(var(--perspective)) rotateY(0)
}

html [data-msa=flip-up] {
  -webkit-transform: perspective(var(--perspective)) rotateX(calc(var(--flip-rotate)*-1));
  transform: perspective(var(--perspective)) rotateX(calc(var(--flip-rotate)*-1))
}

html [data-msa=flip-up].msa-animated {
  -webkit-transform: perspective(var(--perspective)) rotateX(0);
  transform: perspective(var(--perspective)) rotateX(0)
}

html [data-msa=flip-down] {
  -webkit-transform: perspective(var(--perspective)) rotateX(var(--flip-rotate));
  transform: perspective(var(--perspective)) rotateX(var(--flip-rotate))
}

html [data-msa=flip-down].msa-animated {
  -webkit-transform: perspective(var(--perspective)) rotateX(0);
  transform: perspective(var(--perspective)) rotateX(0)
}
```
