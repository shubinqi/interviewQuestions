<!--
 * @Author: Shu Binqi
 * @Date: 2023-03-01 23:28:39
 * @LastEditors: Shu Binqi
 * @LastEditTime: 2023-03-07 04:16:06
 * @Description: 八股文：BFC（块级格式化上下文），IFC（内联格式化上下文）（6题）
 * @Version: 1.0.0
 * @FilePath: \interviewQuestions\八股文\CSS\BFC.md
-->

#### display

1. block-level Box
   当元素的 CSS 属性 display 为 block, list-item 或 table 时，它是块级元素 block-level。块级元素（比如&lt;p&gt;)视觉上呈现为块，竖直排列。 每个块级元素至少生成一个块级盒（block-level Box）参与 BFC ，称为主要块级盒(principal block-level box)。一些元素，比如&lt;li&gt;，生成额外的盒来放置项目符号，不过多数元素只生成一个主要块级盒。

2. Inline-level Box
   当元素的 CSS 属性 display 的计算值为 inline,inline-block 或 inline-table 时，称它为行内级元素。视觉上它将内容与其它行内级元素排列为多行。典型的如段落内容，有文本或图片，都是行内级元素。行内级元素生成行内级盒(inline-level boxes)，参与行内格式化上下文 IFC 。

3. flex container
   当元素的 CSS 属性 display 的计算值为 flex 或 inline-flex ，称它为弹性容器。display:flex 这个值会导致一个元素生成一个块级（block-level）弹性容器框。display:inline-flex 这个值会导致一个元素生成一个行内级（inline-level）弹性容器框。

4. grid container
   当元素的 CSS 属性 display 的计算值为 grid 或 inline-grid，称它为栅格容器。

#### BFC（Block Formatting Context 块级格式化上下文）是什么？特点？作用？

**BFC**（**块级格式化上下文**）是 CSS 中的一个重要概念，它指的是一个独立的渲染区域，具有一定的特性和行为。BFC 中的元素按照一定的规则排列布局，且不会影响到 BFC 外部的元素。

BFC 的产生条件包括：

1. 根元素（HTML）。
1. 浮动元素（float 不为 none）。
1. 绝对定位元素（position 为 absolute 或 fixed）。
1. 行内块元素（display 为 inline-block）。
1. 表格单元格（table-cell）。
1. 弹性盒子容器（display 为 flex 或 inline-flex）。
1. overflow 值不为 visible、clip 的块元素。。

BFC 的触发方式包括（格式化上下文影响布局，通常，我们会为定位和清除浮动创建新的 BFC，而不是更改布局）：

1. float
1. position（除了 static）
1. display（除了 inline）
1. overflow（除了 visible）

BFC 的特点包括：

1. BFC 中的元素在垂直方向上按照一定规则排列，不会重叠。
1. BFC 中的元素会形成一个独立的渲染区域，与外部的元素互不干扰。
1. BFC 中的元素可以清除浮动，避免浮动元素对其他元素的影响。
1. BFC 中的元素可以包含浮动元素，防止父元素高度塌陷。

BFC 的作用包括（主要是**清除浮动**和**防止 margin 重叠**）：

1. **清除浮动**，避免浮动元素对其他元素的影响。
1. **防止 margin 重叠**，让元素按照预期的方式进行布局。
1. 创建独立的渲染区域，防止元素的样式受到外部元素的影响。
1. 解决父元素高度塌陷的问题。

总的来说，BFC 是 CSS 中的一个重要概念，它可以有效地解决一些常见的布局问题，并提高网页的性能和稳定性。

#### IFC（Inline Formatting Context 内联格式化上下文）是什么？特点？使用场景？

**IFC**（**内联格式化上下文**）是 CSS 中的一个概念，指的是一个内联元素的渲染区域，与块级元素的 BFC 相对应。IFC 中的元素按照一定的规则排列布局，且不会影响到 IFC 外部的元素。

IFC 的产生条件是：块级元素中仅包含内联级别元素。

IFC 的主要特点是：

1. IFC 中的元素按照从左到右的顺序排列，一旦遇到不可换行的元素，就会进行换行。
1. IFC 中的元素按照一定的规则排列，可以通过 text-align 属性对齐方式进行控制。
1. IFC 中的元素可以设置 vertical-align 属性，对齐方式包括 top、middle、bottom 等。
1. IFC 中的元素会随着包含它们的元素的宽度自动调整大小。

IFC 的典型应用场景包括：

1. **水平居中**：将一个内联元素水平居中，可以在其包含块级元素上创建一个 IFC，然后将内联元素放在 IFC 中，再通过 text-align 属性进行水平居中。
1. **垂直居中**：将一个内联元素垂直居中，可以在其包含块级元素上创建一个 IFC，然后将内联元素放在 IFC 中，再通过 vertical-align 属性进行垂直居中。
1. **多列布局**：使用 column-count 属性可以将一个块级元素分为多列，每列内部形成一个 IFC。

总的来说，IFC 是 CSS 中的一个概念，用于描述内联元素的渲染区域。了解 IFC 的特点和应用场景可以帮助我们更好地理解 CSS 布局原理，并快速解决一些常见的布局问题。

#### FFC（Flex Formatting Context 弹性格式化上下文）

flex 布局提供一种更加有效的方式来进行容器内的项目布局，以适应各种类型的显示设备和各种尺寸的屏幕，使用 Flex box 布局实际上就是声明创建了 FFC。

FFC 的产生条件是：

1. display: flex 这个值会导致一个元素生成一个块级（block-level）弹性容器框。
1. display: inline-flex 这个值会导致一个元素生成一个行内级（inline-level）弹性容器框。

FFC 的布局规则：

1. 设置为 flex 的容器被渲染为一个块级元素
1. 设置为 inline-flex 的容器被渲染为一个行内元素
1. 弹性容器中的每一个子元素都是一个弹性项目。弹性项目可以是任意数量的。弹性容器外和弹性项目内的一切元素都不受影响。简单地说，Flexbox 定义了弹性容器内弹性项目该如何布局

FFC 的典型应用场景包括：

1. 弹性布局

注意：FFC 布局中，float、clear、vertical-align 属性不会生效。

#### GFC（Grid Formatting Context 网格格式化上下文）

GFC 的产生条件是：

1. display 值为 grid
2. display 值为 inline-grid

当为一个元素设置 display 值为 grid 或者为 inline-grid 的时候，此元素将会获得一个独立的渲染区域，我们可以通过在网格容器 grid container 上定义网格定义行 grid definition rows 和网格定义列 grid definition columns 属性各在网格项目 grid item 上定义网格行 grid row 和网格列 grid columns 为每一个网格项目 grid item 定义位置和空间。

GFC 布局规则

1. 通过在网格容器（grid container）上定义网格定义行（grid definition rows）和网格定义列（grid definition columns）属性各在网格项目（grid item）上定义网格行（grid row）和网格列（grid columns）为每一个网格项目（grid item）定义位置和空间（具体可以在 MDN 上查看）

GFC 应用场景

1. 网格布局
