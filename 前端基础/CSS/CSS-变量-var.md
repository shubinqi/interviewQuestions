<!--
 * @Author: Shu Binqi
 * @Date: 2023-03-14 19:19:02
 * @LastEditors: Shu Binqi
 * @LastEditTime: 2023-03-14 19:41:52
 * @Description: CSS 变量（5题）
 * @Version: 1.0.0
 * @FilePath: \interviewQuestions\前端基础\CSS\CSS-变量-var.md
-->

#### CSS 变量是什么？怎么使用？

**CSS 变量**（CSS variables），又称为自定义属性（custom properties），是一种可以在 CSS 中定义、复用和更新的值，以便在整个文档中维护一致性和可读性。与预处理器中的变量不同，CSS 变量是在运行时计算的，这意味着可以根据条件或用户输入动态地更新它们的值。

CSS 变量的语法是使用 **--** 前缀定义一个变量，例如：

```
:root {
  --main-color: #ff0000;
}

h1 {
  color: var(--main-color);
}
```

在上面的示例中，:root 伪类选择器用于定义文档树的根元素，可以在整个文档中重复使用 --main-color 这个变量，而 var() 函数用于引用它。

CSS 变量可以在任何 CSS 属性中使用，包括动画、过渡和媒体查询等，还可以与 JavaScript 结合使用，动态更新其值，以响应用户交互和条件变化等。

使用 CSS 变量有以下几个优点：

1. **可维护性更高**：使用变量可以减少代码量，提高可维护性和可读性。
1. **更好的重用性**：使用变量可以更好地重用代码，提高效率。
1. **动态更新**：可以根据需要动态更改变量值，以响应用户交互和条件变化等。

总之，CSS 变量是一个非常有用的功能，可以大大简化 CSS 编码和维护，提高开发效率和用户体验。

#### CSS 变量定义主题时常用属性？

在定义主题时，常用的 CSS 属性包括颜色、字体、间距、边框等，下面是一些常见的示例：

颜色：

```
:root {
  --primary-color: #007bff; /* 定义主色调 */
  --secondary-color: #6c757d; /* 定义次要颜色 */
}
```

字体：

```
:root {
  --font-family: Arial, sans-serif; /* 定义默认字体 */
  --font-size: 16px; /* 定义默认字号 */
}
```

间距：

```
:root {
  --spacing-unit: 8px; /* 定义间距单位 */
  --margin: var(--spacing-unit) 0; /* 定义默认外边距 */
  --padding: var(--spacing-unit); /* 定义默认内边距 */
}
```

边框：

```
:root {
  --border-color: #ccc; /* 定义默认边框颜色 */
  --border-width: 1px; /* 定义默认边框宽度 */
  --border-style: solid; /* 定义默认边框样式 */
}
```

这些示例中，使用了 :root 伪类来定义全局变量，可以在任何地方使用。在定义变量时，变量名前面加上两个连字符（--）表示这是一个自定义变量。在使用变量时，使用 var() 函数来引用变量。例如，color: var(--primary-color) 表示使用自定义变量 --primary-color 来定义文本颜色。

#### CSS 变量定义多个主题示例？

CSS 变量定义多个主题可以通过定义不同的 CSS 变量集合来实现。下面是一个示例：

```
/* 定义第一个主题 */
:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
}

/* 定义第二个主题 */
:root.theme-dark {
  --primary-color: #28a745;
  --secondary-color: #17a2b8;
}
```

上面的示例中，:root 选择器定义了第一个主题的 CSS 变量，包括 --primary-color 和 --secondary-color。:root.theme-dark 选择器定义了第二个主题的 CSS 变量，通过给根元素添加 .theme-dark 类来切换主题。

这样，在 HTML 中可以通过切换根元素的类来切换主题：

```
<button onclick="document.documentElement.classList.toggle('theme-dark')">切换主题</button>
```

上面的示例中，点击按钮时切换根元素的类，从而切换主题。
