<!--
 * @Author: Shu Binqi
 * @Date: 2023-03-14 21:09:31
 * @LastEditors: Shu Binqi
 * @LastEditTime: 2023-03-14 21:13:09
 * @Description: HTML 标签
 * @Version: 1.0.0
 * @FilePath: \interviewQuestions\前端基础\HTML\Link.md
-->

#### media 属性定义媒体查询？

可以在 &lt;style&gt;、&lt;link&gt;、&lt;source&gt; 等标签的 media 属性中来定义媒体查询

```
/* 当页面宽度大于等于 900 像素时应用该样式 */
<link rel="stylesheet" media="screen and (min-width: 900px)" href="widescreen.css">
/* 当页面宽度小于等于 600 像素时应用该样式 */
<link rel="stylesheet" media="screen and (max-width: 600px)" href="smallscreen.css">
```

#### link 标签 media 属性怎么设置？

media 属性是<link>标签的一个可选属性，用于指定链接的媒体类型。它告诉浏览器该资源应该在什么媒体上使用，例如屏幕、打印机或其他设备。

media 属性的常见值包括：

1. **all**：适用于所有设备；
1. **screen**：适用于彩色计算机屏幕；
1. **print**：适用于打印机和 PDF 文件；
1. **speech**：适用于屏幕阅读器等语音合成器设备。

media 属性的语法如下：

```
<link rel="stylesheet" href="styles.css" media="media_query">
```

其中 media_query 是一个 CSS 媒体查询，它描述了资源适用的媒体类型。例如，要将样式表应用于仅打印机上的页面，请使用以下代码：

```
<link rel="stylesheet" href="print.css" media="print">
```

你也可以同时指定多个媒体类型，例如：

```
<link rel="stylesheet" href="styles.css" media="screen, print">
```

这意味着该样式表适用于屏幕和打印机。
