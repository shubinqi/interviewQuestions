<!--
 * @Author: Shu Binqi
 * @Date: 2023-04-18 21:38:50
 * @LastEditors: Shu Binqi
 * @LastEditTime: 2023-04-18 21:56:24
 * @Description: CSS 骚操作合集
 * @Version: 1.0.0
 * @FilePath: \interviewQuestionsc:\Git\interviewQuestions\前端基础\CSS\CSS-骚操作合集.md
-->

#### :not() 是什么？

not() 是一个 CSS 伪类选择器，它用于选择不符合指定条件的元素。它的语法是:not(selector)，其中 selector 是一个 CSS 选择器，表示要排除的元素。使用:not() 可以帮助我们更精确地选取元素，使得样式更加准确地应用到目标元素上。例如，可以使用 :not(:first-child) 选取除了第一个子元素以外的所有子元素。

1. **:not(:first-child)**：选取除了第一个子元素以外的所有子元素。
1. **:not(:last-child)**：选取除了最后一个子元素以外的所有子元素。

#### 和 :not() 类似的 CSS 属性？

以下是一些类似的 CSS 属性：

1. **:nth-child()**：根据元素在其父元素中的位置选择元素。
1. **:nth-of-type()**：根据元素在其父元素中相同类型元素的位置选择元素。
1. **:first-child**：选择作为其父元素的第一个子元素的元素。
1. **:last-child**：选择作为其父元素的最后一个子元素的元素。
1. **:first-of-type**：选择作为其父元素的第一个相同类型子元素的元素。
1. **:last-of-type**：选择作为其父元素的最后一个相同类型子元素的元素。
1. **:empty**：选择没有任何子元素的元素。
1. **:checked**：选择被选中的 input 元素。
1. **:disabled**：选择被禁用的 input 元素。
1. **:enabled**：选择没有被禁用的 input 元素。

#### CSS 反色

CSS 反色可以通过 filter 属性来实现。具体来说，可以使用 filter: invert(100%); 将元素中的颜色反转。invert() 函数的参数是一个百分比值，表示将颜色反转的程度，100% 表示完全反转。

以下是一个示例：

```
/* 将 .box 中的颜色反转 */
.box {
  filter: invert(100%);
}
```

需要注意的是，CSS 反色会将所有颜色反转，包括背景色和文本颜色等。因此，在使用 CSS 反色时需要注意对其他样式的影响，以确保最终的效果符合预期。

#### CSS 禁止图片拖动

可以使用 CSS 中的 user-drag 和 user-select 属性来禁止图片拖动。

禁止图片拖动：

```
img {
  -webkit-user-drag: none;
  user-drag: none;
}
```

禁止图片被选中：

```
img {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
```

注意：这些属性可能不受所有浏览器的支持，所以最好使用前检查浏览器的兼容性。

#### CSS 禁止文本选中

可以使用 CSS 中的 user-select 属性来禁止文本选中。

禁止页面所有文本被选中：

```
body {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
```

禁止特定元素内的文本被选中：

```
.element {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
```

注意：这些属性可能不受所有浏览器的支持，所以最好使用前检查浏览器的兼容性。

#### CSS 滚动条样式

可以使用 CSS 中的::-webkit-scrollbar 和::-webkit-scrollbar-thumb 等伪元素来自定义滚动条样式。

以下是一个简单的例子：

```
/* 滚动条样式 */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

/* 滚动条轨道 */
::-webkit-scrollbar-track {
  background-color: #f1f1f1;
}

/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 4px;
}

/* 滚动条滑块悬停样式 */
::-webkit-scrollbar-thumb:hover {
  background-color: #555;
}
```

解释：

1. **::-webkit-scrollbar**：表示滚动条的整个样式，包括轨道和滑块。
1. **::-webkit-scrollbar-track**：表示滚动条轨道的样式。
1. **::-webkit-scrollbar-thumb**：表示滚动条滑块的样式。
1. **::-webkit-scrollbar-thumb:hover**：表示滚动条滑块悬停时的样式。

注意：这些属性可能不受所有浏览器的支持，所以最好使用前检查浏览器的兼容性。
