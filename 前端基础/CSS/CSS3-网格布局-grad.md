<!--
 * @Author: Shu Binqi
 * @Date: 2023-03-15 09:05:18
 * @LastEditors: Shu Binqi
 * @LastEditTime: 2023-03-15 19:08:50
 * @Description: CSS 网格布局 grid
 * @Version: 1.0.0
 * @FilePath: \interviewQuestions\前端基础\CSS\CSS3-网格布局-grad.md
-->

#### CSS 网格布局是什么？有什么优缺点？

CSS 网格布局（CSS Grid Layout）是一种基于网格的布局系统，它允许开发者通过创建行和列的网格来排列和定位页面中的元素。相比于传统的布局方式（如使用 float 和 position），CSS 网格布局可以更容易地实现复杂的布局，提供更多的布局控制和自适应性。

优点：

1. **更灵活的布局控制**：CSS 网格布局允许开发者以行和列的形式来定义布局，可以更精确地控制元素的位置和大小。
1. **更适应性**：CSS 网格布局可以自适应页面的大小和分辨率，使得开发者可以更容易地为不同设备和屏幕大小优化布局。
1. **更容易实现复杂布局**：CSS 网格布局提供了一种简单且直观的方式来实现复杂的布局，如多列布局、网格化布局、分割视图等。
1. **更易于维护**：使用 CSS 网格布局可以减少代码量并提高代码可读性，使得布局更易于维护。

缺点：

1. **兼容性问题**：由于 CSS 网格布局是一个比较新的技术，不同的浏览器对其支持程度不一，可能需要使用兼容性处理。
1. **学习成本**：相比于传统的布局方式，CSS 网格布局有更高的学习曲线，需要开发者掌握一些新的概念和语法。
1. **可读性**：在一些简单布局的情况下，使用 CSS 网格布局可能会使代码更加冗长，降低代码的可读性。

#### 网格布局有哪些属性？

CSS 网格布局提供了一系列属性来定义网格的行和列、对齐方式、尺寸等等。以下是一些常用的属性：

1. **display: grid;**：用来指定元素使用网格布局。
1. **grid-template-rows** 和 **grid-template-columns**：分别用来定义网格的行和列的大小和数量。
1. **grid-template-areas**：用来指定网格中的区域，可以更方便地定义复杂的布局。
1. **grid-gap**：用来指定网格中的行和列之间的间距。
1. **grid-row-start、grid-row-end、grid-column-start、grid-column-end**：用来指定一个网格单元的位置。
1. **grid-row** 和 **grid-column**：用来指定一个网格单元的行和列。
1. **grid-area**：用来指定一个网格单元的位置和大小。
1. **justify-items** 和 **align-items**：用来定义网格中单元格的对齐方式。
1. **justify-content** 和 **align-content**：用来定义网格中行和列的对齐方式。
1. **grid-auto-rows** 和 **grid-auto-columns**：用来定义网格中自动添加的行和列的大小。

这些属性可以用来创建各种不同的布局，使开发者可以更精确地控制网格中元素的位置和大小。

#### 写一个网格布局示例？

下面是一个简单的网格布局示例，其中包含一个网格，其中包含三个元素。第一个元素跨越两列，第二个元素跨越两行，第三个元素占据单个单元格。具体实现代码如下：

HTML 代码：

```
<div class="grid-container">
  <div class="item item1">Item 1</div>
  <div class="item item2">Item 2</div>
  <div class="item item3">Item 3</div>
</div>
```

CSS 代码：

```
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto auto;
  grid-gap: 10px;
}

.item1 {
  grid-column: 1 / span 2;
  grid-row: 1;
}

.item2 {
  grid-column: 2;
  grid-row: 1 / span 2;
}

.item3 {
  grid-column: 3;
  grid-row: 1;
}
```

解释：

首先，我们将网格容器的 display 属性设置为 grid，表示该元素将使用网格布局。

接着，我们使用 grid-template-columns 和 grid-template-rows 属性来定义网格的列和行，这里我们将网格分为三列和两行。

我们还使用 grid-gap 属性来指定单元格之间的间距为 10px。

对于每个元素，我们使用 grid-column 和 grid-row 属性来定义它们的位置。例如，.item1 占据第一列和第二列，并跨越了第一行，因此我们将 grid-column 设置为 1 / span 2，将 grid-row 设置为 1。类似地，.item2 占据了第二行，并跨越了第二列，因此我们将 grid-column 设置为 2，将 grid-row 设置为 1 / span 2。.item3 则占据了第三列和第一行，因此我们将 grid-column 设置为 3，将 grid-row 设置为 1。

最终，我们得到了一个简单的网格布局，其中三个元素分别占据了不同的位置。
