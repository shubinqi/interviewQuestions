<!--
 * @Author: Shu Binqi
 * @Date: 2023-03-15 09:05:18
 * @LastEditors: Shu Binqi
 * @LastEditTime: 2023-03-19 20:41:23
 * @Description: CSS 弹性布局 Flex
 * @Version: 1.0.0
 * @FilePath: \interviewQuestions\前端基础\CSS\CSS3-弹性布局-flex.md
-->

#### CSS 弹性布局是什么？有什么优缺点？

**CSS 弹性布局**（Flexbox）是一种用于创建自适应和灵活布局的 CSS 布局模型。它提供了一种灵活的方式，可以对容器中的元素进行对齐、分布和排序，以及在各种屏幕尺寸和设备上适应不同的布局。Flexbox 的一些优缺点如下：

优点：

1. **灵活性**：Flexbox 布局提供了一种灵活的方式来对齐和分布元素，可以适应各种不同的布局需求。
1. **自适应**：由于 Flexbox 布局是自适应的，因此可以轻松地适应不同的屏幕尺寸和设备。
1. **易于使用**：Flexbox 布局具有相对简单的语法，可以快速学习和实现。
1. **支持动画**：Flexbox 布局的属性支持过渡和动画，因此可以用来创建各种动态效果。

缺点：

1. **兼容性**：虽然现代浏览器都支持 Flexbox，但一些旧版本的浏览器可能不支持。
1. **难以理解**：Flexbox 的一些概念可能相对难以理解，例如 flex 容器和 flex 项，以及 flex 方向、主轴和交叉轴等属性。
1. **可读性差**：Flexbox 的布局语法可能相对冗长，特别是在需要定义多个属性的情况下，可能会导致代码可读性降低。

总之，Flexbox 布局是一种强大而灵活的布局模型，可以用于创建各种布局，但在使用时需要注意兼容性和理解相关概念。

#### Flex 有哪些属性，分别有哪些值？

Flex 布局中有很多属性，以下是一些常用的属性及其取值：

1. display: flex;
   - 取值：flex
   - 说明：将容器设置为 flex 容器。
1. flex-direction: row | row-reverse | column | column-reverse;
   - 取值：row（默认值）、row-reverse、column、column-reverse
   - 说明：设置**主轴**的方向。
1. flex-wrap: nowrap | wrap | wrap-reverse;
   - 值：nowrap（默认值）、wrap、wrap-reverse
   - 明：设置是否允许容器内的项**换行**。
1. justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly;
   - 取值：flex-start（默认值）、flex-end、center、space-between、space-around、space-evenly
   - 说明：设置容器内的项在**主轴**上的**对齐方式**。
1. align-items: stretch | flex-start | flex-end | center | baseline;
   - 取值：stretch（默认值）、flex-start、flex-end、center、baseline
   - 说明：设置容器内的项在**交叉轴**上的对齐方式。
1. align-content: stretch | flex-start | flex-end | center | space-between | space-around;
   - 取值：stretch（默认值）、flex-start、flex-end、center、space-between、space-around
   - 说明：设置多行容器内的项在**交叉轴**上的对齐方式。
1. flex-grow: &lt;number&gt;;
   - 取值：数字（默认值为 0）
   - 说明：设置 flex 项的**放大比例**。
1. flex-shrink: &lt;number&gt;;
   - 取值：数字（默认值为 1）
   - 说明：设置 flex 项的**缩小比例**。
1. flex-basis: &lt;length&gt; | auto;
   - 取值：长度单位或 auto（默认值为 auto）
   - 说明：设置 flex 项的**初始大小**。
1. flex: &lt;flex-grow&gt; &lt;flex-shrink&gt; &lt;flex-basis&gt;;
   - 取值：flex-grow、flex-shrink 和 flex-basis 属性的值（默认值为 **0 1 auto**）
   - 说明：用于设置 flex 项的三个属性的缩写。

以上是一些常用的 Flex 属性及其取值，使用这些属性可以方便地控制 Flex 布局中容器和项的排列方式和大小。

1. **flex-grow**：放大比例，默认为 0 ，即如果有多余空间，也不放大
1. **flex-shrink**：缩小比例，默认为 1，即如果空间不足，该项目将缩小
1. **flex-basies**：项目占据的主轴空间，默认值为 auto，即项目本身的大小，可以设置成跟 width 和 height 相同的值，则将占据固定空间

#### 写一个 Flex 使用示例？

以下是一个简单的 Flex 使用示例：

HTML 代码：

```
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
```

CSS 代码：

```
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 200px;
  background-color: #f2f2f2;
}

.item {
  flex: 1;
  text-align: center;
  font-size: 24px;
  background-color: #333;
  color: #fff;
  padding: 10px;
}
```

解释：

在上面的代码中，我们创建了一个包含三个 div 元素的 Flex 容器，并使用了以下属性：

1. **display: flex;**：将容器设置为 Flex 容器。
1. **flex-direction: row;**：设置主轴的方向为水平方向（默认值）。
1. **justify-content: space-around;**：设置容器内的项在主轴上的对齐方式为平均分布。
1. **align-items: center;**：设置容器内的项在交叉轴上的对齐方式为居中对齐。
1. **height: 200px;**：设置容器的高度为 200px。
1. **background-color: #f2f2f2;**：设置容器的背景色为灰色。

我们还为每个 div 元素应用了以下样式：

1. **flex: 1;**：将每个元素的 flex-grow、flex-shrink 和 flex-basis 属性设置为 1 1 0，表示它们可以根据需要放大或缩小，并且它们的初始大小相等。
1. **text-align: center;**：将文本居中对齐。
1. **font-size: 24px;**：设置字体大小为 24 像素。
1. **background-color: #333;**：设置背景色为黑色。
1. **color: #fff;**：将文本颜色设置为白色。
1. **padding: 10px;**：为元素添加 10 像素的内边距。

效果：

最终的效果是一个水平方向的 Flex 容器，其中包含三个元素，这三个元素具有相等的宽度，并且它们在容器内均匀分布。它们的背景色为黑色，文本颜色为白色，字体大小为 24 像素，并且它们的文本居中对齐。容器的背景色为灰色，高度为 200 像素。

#### Flex 实现水平垂直居中？

Flexbox 是一种用于布局的弹性盒子模型，可以轻松实现元素的水平垂直居中。下面是一些使用 Flexbox 实现水平垂直居中的示例：

1. 示例 1

HTML：

```
<div class="container">
  <div class="content">
    <p>居中内容</p>
  </div>
</div>
```

CSS：

```
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.content {
  text-align: center;
}
```

2. 示例 2

HTML：

```
<div class="container">
  <div class="content">
    <p>居中内容</p>
  </div>
</div>
```

CSS：

```
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.content {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
```

示例 3

HTML：

```
<div class="container">
  <div class="content">
    <p>居中内容</p>
  </div>
</div>
```

CSS：

```
.container {
  position: relative;
  height: 100vh;
}

.content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
```

在上述示例中，.container 元素被设置为 display: flex;，并使用 justify-content: center; 和 align-items: center; 属性将其内容水平垂直居中。在第二个示例中，.content 元素还被设置为 display: flex;，并将其子元素水平垂直居中。在第三个示例中，.content 元素被设置为 position: absolute;，并使用 top: 50%;，left: 50%; 和 transform: translate(-50%, -50%); 将其自身水平垂直居中。
