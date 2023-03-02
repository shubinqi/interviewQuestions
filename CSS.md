<!--
 * @Author: Shu Binqi
 * @Date: 2023-02-24 21:03:56
 * @LastEditors: Shu Binqi
 * @LastEditTime: 2023-03-03 02:52:11
 * @Description: CSS 面试题汇总（47题）
 * @Version: 1.0.0
 * @FilePath: \interviewQuestions\CSS.md
-->

#### CSS3 中有哪些新特性？

CSS3 是 CSS 的最新标准，相对于 CSS2.1，CSS3 包含了许多新的特性，以下是 CSS3 中一些比较重要的新特性：

1. **选择器的扩展**：CSS3 引入了很多新的选择器，例如属性选择器、伪元素选择器、伪类选择器等，可以更加精确地选择 DOM 元素。
1. **盒子模型的改进**：CSS3 中的盒子模型引入了 box-sizing 属性，可以选择标准盒子模型（content-box）和 IE 盒子模型（border-box）。
1. **渐变**：CSS3 中引入了线性渐变（linear-gradient）和径向渐变（radial-gradient），可以方便地创建颜色渐变效果。
1. **圆角**：CSS3 中引入了 border-radius 属性，可以方便地创建圆角效果。
1. **阴影和边框**：CSS3 中引入了 box-shadow 属性和 border-image 属性，可以方便地创建阴影和自定义边框。
1. **文本效果**：CSS3 中引入了 text-shadow 属性和 text-overflow 属性，可以方便地创建文本阴影和文本溢出效果。
1. **动画和过渡**：CSS3 中引入了动画（@keyframes）和过渡（transition）属性，可以方便地创建动态效果。
1. **弹性盒子布局**：CSS3 中引入了弹性盒子布局（Flexbox），可以方便地实现响应式布局。
1. **响应式媒体查询**：CSS3 中引入了媒体查询（@media），可以根据不同的设备尺寸和分辨率，动态地适配页面布局。

总的来说，CSS3 中的新特性使得开发者可以更加方便地实现各种效果和布局，同时也提高了网站的性能和用户体验。

### BFC 是什么？产生条件？作用？特性？

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

#### IFC 是什么？特点？使用场景？

IFC（内联格式化上下文）是 CSS 中的一个概念，指的是一个内联元素的渲染区域，与块级元素的 BFC 相对应。IFC 中的元素按照一定的规则排列布局，且不会影响到 IFC 外部的元素。

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

#### CSS 选择器优先级怎么确定？

| 选择器         | 格式          | 优先级权重 |
| -------------- | ------------- | ---------- |
| id 选择器      | #id           | 100        |
| 类选择器       | #classname    | 10         |
| 属性选择器     | a[ref=“eee”]  | 10         |
| 伪类选择器     | li:last-child | 10         |
| 标签选择器     | div           | 1          |
| 伪元素选择器   | li:after      | 1          |
| 相邻兄弟选择器 | h1+p          | 0          |
| 子选择器       | ul>li         | 0          |
| 后代选择器     | li a          | 0          |
| 通配符选择器   | \*            | 0          |

对于选择器的优先级：

- 标签选择器、伪元素选择器：1
- 类选择器、伪类选择器、属性选择器：10
- id 选择器：100
- 内联样式：1000

注意事项：

- !important 声明的样式的优先级最高 ∞；
- 如果优先级相同，则最后出现的样式生效；
- 继承得到的样式的优先级最低；
- 通用选择器（\*）、子选择器（>）和相邻同胞选择器（+）并不在这四个等级中，所以它们的权值都为 0 ；
- 样式表的来源不同时，优先级顺序为：内联样式 > 内部样式 > 外部样式 > 浏览器用户自定义样式 > 浏览器默认样式。

需要注意的是，CSS 选择器优先级的计算规则相对复杂，因此在编写 CSS 样式时，应该尽量减少使用 ID 选择器，并且避免使用 !important 关键字，以免影响样式的维护和升级。如果必须使用 ID 选择器或者 !important，应该考虑使用更加具体的选择器来覆盖它们，以确保样式的正确性。

#### CSS 有哪些属性会继承？

在 CSS 中，有一些属性可以被子元素继承。这些属性一般是一些与文字和布局相关的属性，例如：

1. 字体相关属性：font-family、font-size、font-style、font-weight。
1. 文本相关属性：color、text-align、line-height、word-break、white-space。
1. 布局相关属性：margin、padding、border、background。

需要注意的是，并不是所有的属性都可以被子元素继承。例如，定位相关属性（position、top、left 等）、盒模型相关属性（width、height、box-sizing 等）以及大部分的背景属性（background-image、background-repeat 等）都不会被子元素继承。

此外，还有一些属性可以通过设置为 inherit 来强制继承父元素的值。例如，color: inherit; 将会使子元素继承父元素的文字颜色。需要注意的是，使用 inherit 会增加样式表的复杂度，而且可能会影响到性能，因此应该谨慎使用。

#### 常见的图片格式及使用场景？

常见的图片格式有以下几种：

1. **JPEG（JPG）**：支持全彩色和灰度图像，文件压缩比较高，适用于摄影、艺术等需要保留颜色细节的场景，但对线条、文字等锐利图像处理不太好。
1. **PNG**：支持全彩色、灰度和索引色图像，文件大小相对较大，但无损压缩，保留了图片的透明度信息，适用于图标、Logo、背景等需要透明效果的场景。
1. **GIF**：支持索引色图像，文件较小，可以实现简单的动画效果，适用于动态图标、简单的动画等场景。
1. **WebP**：由 Google 开发的图片格式，支持无损和有损压缩，文件大小小，加载速度快，适用于网页图片。
1. **SVG**：基于 XML 的矢量图形格式，支持缩放而不失真，文件较小，适用于需要放大或缩小的图形、图表等场景。

选择图片格式应该根据具体情况来决定。一般来说，对于需要保留颜色细节、对锐利图像处理不太敏感的照片或艺术图片，应该选择 JPEG 格式；对于需要保留透明度信息的图标、Logo 或背景，应该选择 PNG 格式；对于需要动态效果的图标或简单的动画，应该选择 GIF 格式；对于需要在网页上使用的图像，应该选择 WebP 或 SVG 格式。

#### Base64 图片是什么？有什么优缺点？

Base64 是一种编码方式，可以将任意二进制数据编码成只包含 ASCII 字符的文本。在 Web 开发中，Base64 被广泛用于将图片等二进制数据编码成文本格式，以便于在 HTML、CSS、JavaScript 等文件中直接使用。

Base64 编码后的图片数据会变得比原始二进制数据大 1/3 左右，这是因为每 3 个字节的二进制数据会被编码成 4 个字节的 ASCII 字符。因此，Base64 编码的图片数据会占用更多的网络带宽，导致页面加载速度变慢。

优点：

1. 可以减少 HTTP 请求次数，减少页面加载时间；
1. 可以将图片等二进制数据直接嵌入 HTML、CSS、JavaScript 等文件中，方便管理和维护。

缺点：

1. 编码后的文本比原始二进制数据要大，会占用更多的网络带宽；
1. 编码和解码的过程会占用一定的 CPU 时间，导致性能损失；
1. 难以缓存，因为每次请求都需要将 Base64 编码后的文本重新传输一次，而不能像普通图片一样使用浏览器的缓存机制。

综上所述，Base64 编码的图片适用于一些小图片或者不需要频繁请求的情况下，但对于大量、频繁请求的图片，最好还是采用普通的图片格式，以避免影响页面加载速度和性能。

#### link 和 @import 的区别？

&lt;link&gt; 和 @import 都是用于在 HTML 或 CSS 文件中引入外部资源的方式，但它们之间有以下几个区别：

加载顺序：&lt;link&gt; 元素在页面加载时同时被加载，而 @import 会在页面加载完成后再加载。
浏览器支持：由于 @import 是 CSS2.1 才加入的语法，因此一些古老的浏览器（如 IE6）不支持 @import，而 &lt;link&gt; 可以在所有浏览器中使用。
兼容性：@import 只能用于 CSS 中，而 &lt;link&gt; 不仅可以用于 CSS 中，还可以用于引入其他资源，如 JavaScript、icon 等。
权重：由于 &lt;link&gt; 在页面加载时就被同时加载了，因此它的权重要高于 @import。
总之，如果需要引入 CSS 文件，最好使用 &lt;link&gt;，因为它能够更好地控制 CSS 文件的加载顺序，而如果需要引入其他资源，如 JavaScript 或 icon，只能使用 &lt;link&gt;。如果需要使用 @import，则应该在 CSS 文件中的首部进行引入，以保证它能够尽早被加载。

#### 常见的布局方法有哪些？

常见的布局方法包括以下几种：

1. **盒模型布局**：使用盒模型（Box Model）来布局，通过设置元素的 margin、padding、width、height 等属性来实现布局效果。
1. **浮动布局**：将元素设置为浮动（float），使其脱离正常文档流，并可以通过设置 clear 属性来控制浮动元素的位置。
1. **定位布局**：使用定位（position）属性来实现布局，可以通过设置元素的 top、right、bottom、left 属性来控制元素的位置。
1. **弹性布局**：使用弹性盒子（Flexbox）来布局，可以通过设置容器元素的 display:flex 属性来实现弹性布局效果。
1. **栅格布局**：使用栅格（Grid）布局，可以通过设置容器元素的 display:grid 属性来实现栅格布局效果。

以上是常见的几种布局方法，每种布局方法都有其适用场景和优缺点，需要根据实际需求选择合适的布局方式来实现页面布局。

#### 两种盒模型的区别？标准盒模型宽度由什么构成？

在 CSS 盒模型中，有两种不同的盒模型：标准盒模型和 IE 盒模型。

1. **标准盒模型**（W3C 盒模型）中，一个盒子的宽度仅包含了内容的宽度（width），而不包括内边距（padding）、边框（border）和外边距（margin）。这意味着当设置一个元素的宽度为 100px 时，它的内容区域宽度就是 100px，加上内边距和边框后，整个盒子的宽度会变得更宽。
1. **IE 盒模型**中，一个盒子的宽度包含了内容的宽度、内边距和边框的宽度，但不包括外边距。这意味着当设置一个元素的宽度为 100px 时，它的内容区域宽度就会比标准盒模型中少一些，因为内边距和边框的宽度也要占用一定的空间。

在标准盒模型中，一个盒子的宽度由内容区域（content）的宽度（width）构成。而在 IE 盒模型中，一个盒子的宽度由内容区域、内边距和边框的宽度（width + padding + border）构成。无论是哪种盒模型，外边距（margin）都不会影响一个盒子的宽度。

#### 什么是回流？哪些会导致回流？怎么避免回流？

回流（Reflow）是指浏览器为了重新渲染部分或全部文档而进行的一系列计算过程。回流通常会造成页面的重绘，是性能问题的重要来源。

以下情况会导致回流：

1. 改变窗口大小（resize）
1. 改变字体大小
1. 添加或删除样式表
1. 内容的改变，比如用户在 input 框中输入文字
1. 元素的位置、尺寸、内容等发生改变
1. 初始化渲染时

为了避免回流，可以采取以下措施：

1. 避免频繁操作样式：将需要改变的样式放到一起进行修改，或者一次性更改元素的 class
1. 使用 translate 替代 top、left 等属性
1. 使用 flexbox 进行布局
1. 避免使用 table 进行布局
1. 将动画效果应用到 position 属性为 fixed 或 absolute 的元素上
1. 避免使用 document.write，因为它会触发文档的重新解析和渲染

以上措施并不能完全避免回流，但可以有效减少回流的次数和影响。

#### 什么是重绘？哪些会导致重绘？怎么避免重绘？

重绘是指元素样式的改变并不影响其在文档流中的位置，重新渲染元素的可视化外观。重绘的成本比回流低，因为它不涉及元素位置和布局的计算，但仍然会影响性能。

会导致重绘的操作包括修改元素的颜色、背景、边框、阴影、文字的样式等。以下是常见的导致重绘的操作：

1. 修改元素样式，如 color、background、visibility、opacity 等；
1. 修改元素的 className；
1. 修改元素内文本的样式；
1. 添加或移除样式表；
1. 浏览器窗口大小变化。

避免重绘的方法包括：

1. 尽量避免在 DOM 树中的多个节点频繁交换位置，这会导致重排和重绘；
1. 避免频繁读取布局信息，这会迫使浏览器强制重新计算布局；
1. 避免在 JavaScript 中频繁读取或设置样式，因为这会强制浏览器进行样式计算和布局；
1. 如果需要多次进行样式修改，可以先将元素的 display 属性设置为 none，然后再进行样式修改，最后再将 display 属性设置为原来的值，这样可以将多次修改合并为一次；
1. 避免使用 CSS 表达式，因为它们会在每次重绘时都被重新计算。

#### display 有哪些属性值？

display 是 CSS 中常用的一个属性，用于设置元素的显示方式。以下是 display 常见的属性值：

1. **none**：元素不会被显示，也不会占据任何空间。
1. **block**：将元素显示为块级元素，会在前后添加换行符，占据整行空间。
1. **inline**：将元素显示为行内元素，不会在前后添加换行符，宽度随内容改变。
1. **inline-block**：将元素显示为行内块级元素，不会在前后添加换行符，可以设置宽度和高度。
1. **table、table-cell、table-row、table-column、table-column-group、table-header-group、table-footer-group、table-row-group**：将元素显示为表格、表格单元格、表格行、表格列、表格列组、表头组、表尾组、表体组，常用于布局和格式化数据。
1. **flex、inline-flex**：将元素显示为弹性盒子，可以通过 flex-direction、justify-content、align-items、align-content 等属性进行布局和对齐。
1. **grid、inline-grid**：将元素显示为网格盒子，可以通过 grid-template-columns、grid-template-rows、grid-template-areas 等属性进行布局。
1. **list-item**：将元素显示为列表项，常用于无序列表和有序列表中。
1. **inherit**：继承父元素的 display 属性。

以上是常见的 display 属性值，还有一些不常用的属性值不在列举范围内。

#### display: none 和 visibility: hidden 的区别？

display: none 和 visibility: hidden 都可以让元素不可见，但它们之间有以下不同：

1. display: none 会让元素不占据空间，即不显示，也不会保留位置和大小。而 visibility: hidden 仅仅是让元素不可见，但是仍会占据空间，保留位置和大小。
1. 对于 display: none 的元素，无论是在 HTML 代码还是在 DOM 树中都不会被渲染，也不会参与页面布局，因此不能通过 JavaScript 获取到它们的信息，也无法对其进行操作。而对于 visibility: hidden 的元素，它们在 DOM 树中存在，仍可以通过 JavaScript 获取到它们的信息，也可以对其进行操作。

因此，如果需要暂时隐藏元素，但是需要保留它的位置和大小，可以使用 visibility: hidden；如果需要隐藏元素，且不保留位置和大小，可以使用 display: none。

#### position 有哪些属性值？

CSS 的 position 属性有以下几个属性值：

1. **static**：默认值，元素遵循正常的文档流排版。
1. **relative**：相对定位，相对于元素原来所在的位置进行定位。不脱离文档流，仍占据原来的空间，可以通过 top、bottom、left、right 属性进行微调。
1. **absolute**：绝对定位，相对于其最近的非 static 定位祖先元素进行定位。如果不存在这样的祖先元素，则相对于文档的 body 元素定位。脱离文档流，不占据原来的空间。
1. **fixed**：固定定位，相对于浏览器视口进行定位。与 absolute 类似，也脱离文档流，不占据原来的空间。
1. **sticky**：粘性定位，表示元素在容器内的滚动中始终可见，直到容器的顶部或底部滚动到达特定的阈值位置。兼具相对定位和固定定位的特性。

#### Flex 是什么？使用过哪些属性？

Flex 是一种 CSS 布局模式，可以方便地实现弹性盒模型布局。Flex 布局主要由父容器和子元素两部分组成。父容器通过设置 display: flex 将其变为 Flex 容器，而子元素则根据需要设置相应的属性值以实现特定的布局效果。

Flex 布局中常用的属性包括：

1. **flex-direction**：设置 Flex 容器内子元素的排列方向（横向或纵向）。
1. **justify-content**：设置 Flex 容器内子元素在主轴上的对齐方式。
1. **align-items**：设置 Flex 容器内子元素在交叉轴上的对齐方式。
1. **flex-wrap**：设置 Flex 容器内子元素是否换行。
1. **flex-flow**：flex-direction 和 flex-wrap 的缩写属性。
1. **align-content**：设置多行 Flex 容器内子元素在交叉轴上的对齐方式。

使用 Flex 布局可以方便地实现响应式布局、等高布局等效果。

#### flex: 1; 由哪几个属性组成？分别有什么作用？

flex 默认为 0 1 auto 三个属性，后两个参数可省略。

```
flex: 0 1 auto; // 后两个属性可省略，等同于默认值 flex: 0;
flex: 1; // 代表有多余空间自动放大
```

1. **flex-grow**：放大比例，默认为 0 ，即如果有多余空间，也不放大
1. **flex-shrink**：缩小比例，默认为 1，即如果空间不足，该项目将缩小
1. **flex-basies**：项目占据的主轴空间，默认值为 auto，即项目本身的大小，可以设置成跟 width 和 height 相同的值，则将占据固定空间

#### 伪元素与伪类的作用和区别？

伪元素和伪类都是 CSS 中的概念，它们可以用来向某些选择器添加额外的样式，从而实现更加灵活的样式控制。

伪元素是指在选择器中使用 :: 前缀来表示的一些虚拟元素，比如 ::before 和 ::after。它们可以在一个元素的内容前面或后面插入新的内容，比如通过 ::before 插入一个图标、一个引用符号或者一个序号等。伪元素可以使用 CSS 属性来为这些虚拟元素设置样式。

伪类是指在选择器中使用 : 前缀来表示的一些特殊状态或关系的元素，比如 :hover、:active、:focus、:first-child 等。它们可以用来表示一个元素处于某种特殊状态或者与其他元素之间存在某种特殊的关系。伪类也可以使用 CSS 属性来为这些状态或关系设置样式。

区别：

- 伪元素用于在一个元素的内容前面或后面插入新的内容，而伪类用于表示一个元素处于某种特殊状态或者与其他元素之间存在某种特殊的关系。
- 伪元素使用 :: 前缀，而伪类使用 : 前缀。
- 在 CSS3 中，伪元素使用 :: 前缀更加严格地区分伪元素和伪类，而在 CSS2.1 中，伪元素和伪类可以使用 : 前缀，但是建议使用 :: 前缀来表示伪元素。

#### vw 和 vh 是什么？vmin 和 vmax 是什么？

vw 和 vh 是相对于视口（Viewport）宽度和高度的单位，即 1vw 等于视口宽度的 1%，1vh 等于视口高度的 1%。

vmin 和 vmax 是相对于视口宽度和高度中的较小值和较大值的单位，即 1vmin 等于视口宽度和高度中的较小值的 1%，1vmax 等于视口宽度和高度中的较大值的 1%。

这些相对单位可以让我们更方便地实现响应式布局，以及在不同设备上获得更好的可用性和可读性。

#### px，em，rem 的区别和使用场景？

在前端开发中，常见的长度单位有 px，em，rem 和 rpx，它们的区别和使用场景如下：

1. **px**：指定一个绝对值的长度单位，一般用于设置像素大小的尺寸，它是一个相对于显示器分辨率的单位，一个像素相当于显示器上的一个点。在不同的显示设备上，1px 的大小可能不同，所以在响应式布局中，使用 px 可能会导致页面显示效果失真。
1. **em**：相对于父元素的字体大小设置长度，当父元素字体大小发生变化时，子元素的大小也会跟着变化。但是，如果嵌套的层级比较深，就需要考虑多层级的父元素字体大小，因此在实际应用中使用较少。
1. **rem**：相对于根元素（即 HTML 元素）的字体大小设置长度，根元素的字体大小通常是 16px，因此可以通过设置根元素的字体大小，来控制页面中元素的大小。相对于 em，rem 的优势在于只需要考虑根元素字体大小的变化，不需要考虑多层级父元素字体大小的影响。
1. **rpx**：小程序中的单位，可以根据屏幕宽度进行自适应调节，其中 1rpx 等于屏幕宽度的 1/750，用于解决小程序在不同设备上的适配问题。

综合来看，对于响应式布局，推荐使用 rem 或者 vw/vh 单位；对于小程序开发，推荐使用 rpx 单位；而在一些特定场景下，如需要按照父元素的字体大小来调节子元素大小时，可以使用 em 单位。而 px 单位应该尽量避免使用，特别是在响应式布局中。

#### rem 的实现原理？（建议写博客）

rem（即 root em）是相对于根元素（即 html 元素）的字体大小来计算的相对长度单位。

rem 的实现原理是基于浏览器的默认行为，即当一个元素的字体大小没有指定时，其字体大小继承自其父元素的字体大小。利用这个特性，我们可以通过设置根元素的字体大小，来实现页面中所有元素的字体大小的控制。

具体来说，通常我们会将根元素的字体大小设置为相对于视口宽度的百分比，比如我们可以将其设置为视口宽度的 1/10（即 10vw），然后再利用 rem 单位来设置其他元素的字体大小、宽度、高度等属性。这样，当页面在不同的设备上展示时，只需要调整根元素的字体大小，就可以实现自适应的效果。

举个例子，如果我们将根元素的字体大小设置为 10vw，那么 1rem 就等于视口宽度的 1%，如果我们想要设置某个元素的宽度为视口宽度的 50%，那么只需要将其宽度设置为 5rem 即可。当页面在不同的设备上展示时，只需要调整根元素的字体大小，就可以实现不同设备上的自适应效果。

#### CSS 优化和提高性能的方法有哪些？

CSS 优化和提高性能的方法有很多，以下列举了一些常见的方法：

1. **减少样式规则的数量**：使用更少的样式规则可以减少 CSS 的加载时间和解析时间，从而提高页面性能。
1. **减少样式选择器的复杂性**：选择器越复杂，匹配的时间就越长，影响页面性能。应该尽可能地减少选择器的复杂性。
1. **避免使用通配符选择器**：通配符选择器会匹配所有元素，影响性能。应该尽可能地避免使用通配符选择器。
1. **使用 ID 选择器和类选择器**：ID 选择器和类选择器比标签选择器更具体，匹配速度更快，应该尽可能地使用它们。
1. **避免使用 @import**：使用 @import 会导致多个 CSS 文件的请求被阻塞，影响性能。
1. **将 CSS 文件放在页面的头部**：将 CSS 文件放在头部可以让浏览器尽早地开始加载 CSS 文件，提高页面性能。
1. **将 CSS 文件进行压缩**：压缩 CSS 文件可以减少文件大小，提高页面性能。
1. **避免使用 CSS 表达式**：CSS 表达式会在每次页面渲染时重新计算，影响性能。
1. **使用浏览器的缓存机制**：浏览器可以将 CSS 文件缓存起来，下次访问时可以直接使用缓存文件，提高页面性能。
1. **避免使用 !important**：!important 会覆盖其他样式规则，影响性能。应该尽可能地避免使用 !important。

#### CSS 怎么解决浏览器兼容问题？

CSS 解决浏览器兼容问题的方法包括：

1. 尽量使用标准的 CSS 属性和规则，避免使用过时的、非标准的属性和规则，避免使用浏览器私有前缀的属性。
1. 使用 CSS reset 和 normalize.css 等库来规范浏览器之间的差异。
1. 使用 CSS hack，根据不同的浏览器或不同的浏览器版本采用不同的 CSS 规则。但是这种方法并不推荐，因为 hack 很容易失效，而且增加了代码的复杂度。
1. 使用 CSS 预处理器，例如 Sass 和 Less，它们提供了许多帮助我们编写跨浏览器兼容的 CSS 的功能，例如变量、混合、函数等。
1. 使用 Autoprefixer 工具，它可以自动添加浏览器前缀，从而简化浏览器兼容性的问题。
1. 使用 CSS polyfill，例如 CSS3PIE，它可以为不支持 CSS3 样式的 IE 浏览器提供支持。
1. 使用 Modernizr 等库来检测浏览器是否支持某些 CSS3 特性，并根据支持情况提供不同的 CSS 样式。

#### 怎么实现单行、多行文本溢出隐藏？

在 CSS 中实现单行文本溢出隐藏可以使用 text-overflow: ellipsis 属性，它可以在文本溢出时显示省略号。具体实现方法如下：

```
.single-line {
  white-space: nowrap; /* 禁止换行 */
  overflow: hidden; /* 超出部分隐藏 */
  text-overflow: ellipsis; /* 显示省略号 */
}
```

多行文本溢出隐藏可以使用 -webkit-line-clamp 属性和 -webkit-box-orient 属性实现。具体实现方法如下：

```
.multi-line {
  display: -webkit-box; /* 将元素设为弹性盒子 */
  -webkit-box-orient: vertical; /* 设置垂直排列 */
  overflow: hidden; /* 超出部分隐藏 */
  -webkit-line-clamp: 3; /* 最多显示行数 */
}
```

上述代码将文本显示为最多三行，超出部分将被隐藏，并显示省略号。注意，-webkit-line-clamp 属性只适用于 Webkit 内核浏览器，如 Chrome 和 Safari。

#### 移动端适配 1px 问题？

移动端屏幕分辨率相对较小，而有些手机屏幕密度比较大，例如 iPhone 6 Plus 的屏幕宽度为 414px，但是它的物理像素却是 1242px，这样就会出现在手机上显示 1px 线条时，实际上会被渲染成 2px 或者 3px，从而导致 UI 显示效果不佳。

以下是一些解决方法：

使用 viewport 的缩放：
在 meta 标签中添加 initial-scale 和 maximum-scale 属性可以控制 viewport 的缩放，从而解决 1px 问题，示例如下：

```
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
```

使用 CSS3 的 border-image 属性：

border-image 属性可以将一张图片分割成 9 个部分，然后使用这 9 个部分来渲染边框。这种方法可以解决 1px 问题，但是需要制作多张图片来适配不同的屏幕。

使用 CSS3 的 transform: scale() 属性：

使用 transform: scale() 属性可以将元素进行缩放，从而解决 1px 问题，示例如下：

```
div {
  width: 100px;
  height: 100px;
  background-color: #f00;
  border: 1px solid #000;
  transform: scale(0.5);
```

}
使用 CSS3 的 box-shadow 属性：

使用 box-shadow 属性可以创建一个无色阴影，然后调整阴影的位置和大小来模拟 1px 线条，示例如下：

```
div {
  width: 100px;
  height: 100px;
  box-shadow: 0 0 0 1px #000;
```

}
使用 CSS3 的 background-clip 属性：

使用 background-clip 属性可以控制背景的绘制区域，然后使用背景渐变模拟 1px 线条，示例如下：

```
div {
  width: 100px;
  height: 100px;
  background-color: #f00;
  background-image: linear-gradient(to bottom, #000 1px, transparent 0);
  background-repeat: no-repeat;
  background-size: 100% 1px;
  background-position: center top;
  background-clip: content-box;
}
```

综上所述，移动端适配 1px 问题有多种解决方法，开发者可以根据实际需求和项目情况选择适合的方法。

#### CSS 画一条 0.5px 的线？

在 CSS 中，像素（pixel）是一个相对单位，它的大小是相对于显示设备的屏幕分辨率而言的，因此无法精确表示 0.5 像素。但是，我们可以使用其他方法来模拟出 0.5 像素的线条。

一种方法是使用 transform: scaleY(0.5) 把线条的高度缩小为原来的一半。这种方法在某些情况下会产生锯齿或模糊的效果。

另一种方法是使用 CSS3 的 box-shadow 属性来模拟线条，例如：

css
Copy code
.div {
box-shadow: 0 0 0 0.5px #000;
}
这样可以在不产生锯齿或模糊效果的情况下画出 0.5px 的线条。

#### CSS 预处理器是什么？了解哪些？（Sass、Less、Stylus）

CSS 预处理器是指对 CSS 进行封装，扩展和优化的工具，其本质是一种编程语言。常见的 CSS 预处理器有 Sass、Less、Stylus 等。

Sass 和 Less 是目前应用比较广泛的两种 CSS 预处理器。

常用的 Sass 属性：

1. **变量**：用$符号定义，方便多处引用和修改
1. **嵌套**：可以在选择器内嵌套其他选择器或属性，便于理解和维护
1. **Mixin**：用于定义和重用一组 CSS 属性，类似于函数
1. **Extend/Inheritance**：用于继承已有的 CSS 样式
1. **函数**：提供了一些内置的 CSS 函数，也可以自定义函数

常用的 Less 属性：

1. **变量**：用@符号定义，方便多处引用和修改
1. **嵌套**：可以在选择器内嵌套其他选择器或属性，便于理解和维护
1. **Mixin**：用于定义和重用一组 CSS 属性，类似于函数
1. **Extend/Inheritance**：用于继承已有的 CSS 样式
1. **函数**：提供了一些内置的 CSS 函数，也可以自定义函数
1. **运算**：可以进行数学运算，如加减乘除等
1. **嵌套规则**：可以嵌套一些逻辑运算和条件判断语句

预处理器的使用可以提高 CSS 的可读性和可维护性，并且提供了很多方便的语法和工具，但也需要注意其增加了项目的复杂性，需要适当的学习和使用。

#### 深度作用选择器了解吗？

#### 如何实现两栏、三栏布局？（建议写博客）

实现两栏布局可以使用以下两种方式：

1. float + margin 方式：

```
<!-- HTML： -->
<div class="wrapper">
  <div class="main">Main Content</div>
  <div class="sidebar">Sidebar Content</div>
</div>
```

CSS：

```
.wrapper {
  overflow: hidden; /*清除浮动*/
}

.main {
  float: left;
  width: 75%;
}

.sidebar {
  float: left;
  width: 25%;
}
```

2. flex 布局方式：

```
<!-- HTML： -->
<div class="wrapper">
  <div class="main">Main Content</div>
  <div class="sidebar">Sidebar Content</div>
</div>
```

```
<!-- CSS -->
.wrapper {
  display: flex;
}

.main {
  flex: 3;
}

.sidebar {
  flex: 1;
}
```

实现三栏布局可以使用以下两种方式：

1. float + margin 方式：

```
<!-- HTML： -->
<div class="wrapper">
  <div class="left">Left Content</div>
  <div class="main">Main Content</div>
  <div class="right">Right Content</div>
</div>
```

```
<!-- CSS -->
.wrapper {
  overflow: hidden; /*清除浮动*/
}

.left {
  float: left;
  width: 25%;
}

.main {
  float: left;
  width: 50%;
}

.right {
  float: left;
  width: 25%;
}
```

2. flex 布局方式：

```
<!-- HTML： -->
<div class="wrapper">
  <div class="left">Left Content</div>
  <div class="main">Main Content</div>
  <div class="right">Right Content</div>
</div>
```

```
<!-- CSS -->
.wrapper {
  display: flex;
}

.left {
  flex: 1;
}

.main {
  flex: 2;
}

.right {
  flex: 1;
}
```

以上是常见的实现方式，实际开发中，还可以根据需求使用其他方式实现布局。

#### 如何实现水平垂直居中？（建议写博客，至少 4 种）

父、子元素宽高未知时

1.  table-cell（使用表格样式）
1.  flex 布局（父级 justify-content: center 和 align-items: center 即可）
1.  absolute + transform（定位的上、左为 50%，translate 上、左负 50%）
1.  absolute + margin: auto（定位的上下左右为 0）
1.  Grid 网格布局
1.  直接使用 table（改变结构实现，和第一条类似）

子元素固定宽高已知时（假设子元素宽高为 200px）

7.  absolute + calc（定位上、左负 50%时减去子元素宽、高）
8.  absolute + 负 margin（定位的上、左为 50%，margin 的上、左负子元素的一半）

父元素高度已知（假设为 400px），子元素宽高未知

9.  text-align + vertical-align

#### 什么是浮动？如何清除浮动？（建议写博客，至少 3 种）

元素的浮动是指设置了浮动属性的元素会脱离标准普通流的控制，移动到其父元素中指定位置的过程。

第一种：额外标签法（clear: both）

是 W3C 推荐的做法：通过在浮动元素末尾添加一个空的标签例如 <div style="clear: both"></div>，或则其他标签 br 等亦可。

```
<br style="clear: both">
```

1.  优点：通俗易懂，书写方便
1.  缺点：添加许多无意义的标签，结构化较差。我只能说，W3C 你推荐的方法我不接受，你不值得拥有。

第二种：父级添加 overflow 属性方法（overflow: hidden | auto）

可以给父级添加： overflow 为 hidden | auto | scroll  都可以实现。

```
overflow: hidden
```

1.  优点：代码简洁
1.  缺点：内容增多时候容易造成不会自动换行导致内容被隐藏掉，无法显示需要溢出的元素。

第三种：使用 after 伪元素清除浮动（.clearfix:after）

```
.clearfix:after {
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}       
.clearfix {
  *zoom: 1;
} /* IE6、7 专有 */
```

1.  优点：符合闭合浮动思想   结构语义化正确
1.  缺点：由于 IE6-7 不支持 :after，使用 zoom:1 触发 hasLayout。

注意：content:"."   里面尽量跟一个小点，或者其他，尽量不要为空，否则再 firefox 7.0 前的版本会有生成空格。

第四种：使用 before 和 after 双伪元素清除浮动（.clearfix:before, .clearfix:after）

```
.clearfix:before, .clearfix:after {     
  content:"";    
  display:table;  /* 这句话可以触发 BFC BFC 可以清除浮动 */    
}    
.clearfix:after {    
  clear:both;    
}    
.clearfix {    
  *zoom:1;    
}
```

1.  优点：代码更简洁
1.  缺点：由于 IE6-7 不支持 :after，使用 zoom:1 触发 hasLayout。

第五种：父盒子设置高度（height: 600px;）

1.  优点：一行代码解决

1.  缺点：需要知道盒子高度，且高度固定，使用范围极其有限。

第六种：父元素也浮动（float: left）

1.  优点：也是一行代码解决
1.  缺点：但是父元素的父元素也会产生高度塌陷，这波属于是 KO 自己了。

第七种：父元素直接设置 display: table（display: table）

1.  优点：可以触发 BFC 块格式化上下文，限制其内部元素 float 的不影响到 BFC 外面。和第四种类似
1.  缺点：使用表格元素属性解决浮动的同时，继承了表格元素的弊端。

#### 如何实现一个三角形？（建议写博客，例如实现扇形等）

CSS 可以通过伪元素 ::before 和 ::after 来实现三角形的效果，具体方法如下：

HTML 代码：

```
<div class="triangle"></div>
```

CSS 代码：

```
.triangle {
  width: 0;
  height: 0;
  border-top: 50px solid red;
  border-right: 50px solid transparent;
  border-left: 50px solid transparent;
}
```

上面的代码使用了 border 属性来画出一个向上的三角形，其中 border-top 控制三角形的高度，border-right 和 border-left 控制三角形的斜边。需要注意的是，border 的三个参数表示的是宽度、样式和颜色，所以在这里需要把 border-right 和 border-left 的宽度设为 0，只有 border-top 才有宽度。

类似的，我们也可以通过控制不同的边框来实现不同方向的三角形。

#### 如何实现一个宽高自适应的正方形？（建议写博客）

实现一个宽高自适应的正方形可以使用 CSS 的 padding 和伪元素来实现，具体方式如下：

```
.square {
  position: relative; /* 为了让内部伪元素定位在正方形内部 */
  width: 50%; /* 此处可以设置任意宽度 */
  padding-top: 50%; /* 此处 padding-top 的值等于宽度的一半，即实现了宽高相等的正方形 */
  background-color: red; /* 为了便于观察效果，设置一个背景色 */
}

.square::before {
  content: ""; /* 必须设置 content，否则伪元素无法显示 */
  display: block; /* 将伪元素转化为块级元素 */
  width: 100%; /* 宽度和高度都设置为 100%，使伪元素充满整个正方形 */
  height: 100%;
  background-color: green; /* 为了便于观察效果，设置一个背景色 */
  position: absolute; /* 相对于 .square 定位，实现伪元素在正方形内部的效果 */
  top: 0;
  left: 0;
}
```

这样就可以实现一个宽高自适应的正方形，无论宽度如何变化，都可以保持宽高相等的效果。
