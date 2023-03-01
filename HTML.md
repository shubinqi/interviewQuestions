<!--
 * @Author: Shu Binqi
 * @Date: 2023-02-24 21:03:48
 * @LastEditors: Shu Binqi
 * @LastEditTime: 2023-02-28 21:25:16
 * @Description: HTML 面试题
 * @Version: 1.0.0
 * @FilePath: \interviewQuestions\HTML.md
-->

#### HTML 5 有哪些新标签？

HTML 5 引入了很多新的标签，一些常见的包括：

1. **&lt;header&gt;**: 用于定义文档或区域的页眉。
1. **&lt;nav&gt;**: 用于定义文档的导航链接部分。
1. **&lt;main&gt;**: 用于定义文档的主要内容部分。
1. **&lt;section&gt;**: 用于定义文档中的节（section）。
1. **&lt;article&gt;**: 用于定义独立的自包含文章。
1. **&lt;aside&gt;**: 用于定义与文档内容相关的侧边栏内容。
1. **&lt;footer&gt;**: 用于定义文档或区域的页脚。
1. **&lt;video&gt;**: 用于在网页中嵌入视频。
1. **&lt;audio&gt;**: 用于在网页中嵌入音频。
1. **&lt;canvas&gt;**: 用于在网页中绘制图形。
1. **&lt;progress&gt;**: 用于表示任务的完成进度。
1. **&lt;meter&gt;**: 用于表示度量值，如温度或尺寸。
1. **&lt;time&gt;**: 用于表示日期或时间。
1. **&lt;datalist&gt;**: 用于定义输入框的选项列表。
1. **&lt;output&gt;**: 用于定义计算结果输出的容器。

等等。这些标签的引入使得 HTML 的语义化更加丰富，同时也方便了搜索引擎和屏幕阅读器等工具的理解。

#### HTML5 对比 HTML4 有哪些不同之处？HTML5 有哪些新特性？

HTML5 相对于 HTML4 来说有以下不同之处：

1. **结构和元素方面**：HTML5 新增了一些新的结构化元素，如 header、footer、article、section、nav、aside、main 等，这些元素能够让开发者更好地划分文档结构，同时也更有利于 SEO。
1. **多媒体方面**：HTML5 对多媒体方面的支持更加完善，增加了 audio 和 video 元素，支持原生的多媒体播放、控制等功能。同时，HTML5 也提供了更好的支持媒体流的技术。
1. **表单方面**：HTML5 新增了很多新的表单元素和属性，如 date、time、email、url、range、number、search、required 等等，使得表单元素更加丰富、便于开发者处理表单数据。
1. **语义化方面**：HTML5 强调语义化，通过使用新增的语义化元素和属性，开发者可以更加准确地描述文档内容和结构。
1. **存储和缓存方面**：HTML5 提供了 Web Storage 和 Web SQL 数据库两种方式用于客户端存储和缓存数据。
1. **性能方面**：HTML5 提供了一些新的 API，如 Web Workers、Web Sockets、IndexedDB 等，用于提高 Web 应用的性能和响应速度。

HTML5 的新特性包括但不限于：

1. **新的结构化元素**：header、footer、article、section、nav、aside、main 等。
1. **多媒体元素**：audio、video、source 等。
1. **新的表单控件和属性**：date、time、email、url、range、number、search、required 等。
1. **语义化标签**：article、section、nav、header、footer、aside 等。
1. **存储和缓存**：Web Storage、Web SQL 数据库、Application Cache 等。
1. **Web Workers**：允许开发者创建一个后台进程，以提高 Web 应用的性能和响应速度。
1. **Web Sockets**：允许开发者建立基于 TCP 的双向通信，实时通讯。
1. **Canvas 和 SVG**：用于图形和动画的绘制。
1. **Geolocation API**：用于获取用户地理位置信息。

#### 怎么理解语义化标签？用过哪些语义化标签？

语义化标签是指在 HTML 中使用具有特定含义的标签，以便更好地描述文档的结构和内容，使得文档更易于理解、维护和访问。语义化标签不仅可以提高页面的可读性和可访问性，而且对搜索引擎优化(SEO)也有很大的帮助。

常见的语义化标签有：

1. **&lt;header&gt;**：定义文档或节的页眉。
1. **&lt;nav&gt;**：定义导航链接的部分。
1. **&lt;main&gt;**：定义文档的主要内容。
1. **&lt;article&gt;**：定义独立的自包含文章或内容块。
1. **&lt;aside&gt;**：定义页面或文章的侧边栏。
1. **&lt;section&gt;**：定义页面或文章的某个章节或区域。
1. **&lt;footer&gt;**：定义文档或节的页脚。
1. **&lt;figure&gt;**：定义一段独立的流内容，如一张图片、一段视频等。
1. **&lt;figcaption&gt;**：定义 &lt;figure&gt; 元素的标题或说明。

使用语义化标签可以让代码更加清晰易懂，并且能够使搜索引擎更好地理解页面的结构和内容，提高网页的排名和曝光度。同时也可以让页面在无样式情况下有更好的可读性和可访问性，提高用户体验。

#### src 和 href 的区别？

相同点：都是用来引入外部资源路径。

不同点：

1. src 是用于指定引入资源的路径，比如 &lt;img src="example.jpg"&gt; 表示引入一张图片。
1. href 则是用于指定链接的 URL，比如 &lt;a href="https://example.com"&gt; 表示该链接指向 https://example.com。

#### script 引用时 defer 和 async 的区别是什么？

defer 和 async 都是用于异步加载脚本，不过两者的区别在于执行的时机。

1. defer 会在文档解析完毕后才会执行，
2. async 则是在下载完成后立即执行。

这也意味着如果有多个 defer 脚本，它们的执行顺序是按照它们在文档中出现的顺序执行；而对于多个 async 脚本，则不能保证它们的执行顺序。

1. src 和 href 的区别？
   script 引用时 defer 和 async 的区别是什么？
   img 的 srcset 属性的作用？
   响应式图片处理优化：Picture 标签？
   Canvas 和 SVG 的区别是什么？
   如何理解 HTML 中的语义化标签？
   行内元素有哪些？块级元素有哪些？空元素有哪些？
1. title 与 h1 的区别、b 与 strong 的区别、i 与 em 的区别？
1. 说一下 HTML5 的离线存储？
1. html 常见兼容性问题？
1. 说说 img 标签的 onerror 事件，图片加载失败的处理方法？
1. 前端页面由哪三层构成？
1. 说说你对 WEB 标准以及 W3C 的理解与认识？
1. 为什么最好把 CSS 的 &lt;link&gt; 标签放在&lt;head&gt; &lt;/head&gt; 之间？
1. 为什么最好把 JS 的 &lt;script&gt; 标签恰好放在 &lt;/body&gt; 之前？
