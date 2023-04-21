<!--
 * @Author: Shu Binqi
 * @Date: 2023-03-15 19:22:08
 * @LastEditors: Shu Binqi
 * @LastEditTime: 2023-04-21 22:52:17
 * @Description: BOM
 * @Version: 1.0.0
 * @FilePath: \interviewQuestionsc:\Git\interviewQuestions\前端基础\浏览器\BOM.md
-->

#### BOM

BOM（Browser Object Model，浏览器对象模型）是指浏览器提供的一组 JavaScript 对象，用于访问和控制浏览器窗口及其内容。BOM 主要包括以下几个对象：

1. **Window 对象**：代表浏览器窗口或框架，是 BOM 的核心对象。Window 对象提供了许多属性和方法，如 location、navigator、history、setTimeout 等，可以用来访问和控制浏览器窗口及其内容。
1. **Document 对象**：代表当前窗口或框架中的文档（网页），提供了许多属性和方法，如 getElementById、getElementsByTagName、createElement 等，可以用来操作文档中的元素和内容。
1. **Navigator 对象**：提供了浏览器的一些信息，如浏览器名称、版本、平台等。
1. **History 对象**：提供了浏览器窗口的历史记录，可以用来访问和控制浏览器的后退和前进。
1. **Screen 对象**：提供了显示器的一些信息，如屏幕宽度、高度、像素数等。
1. **Location 对象**：提供了当前文档的 URL 信息，可以用来访问和控制浏览器的地址栏。

BOM 对象可以通过 JavaScript 代码来访问和操作，可以用来实现一些网页交互效果，如弹出窗口、定时器、浏览器跳转等。需要注意的是，不同浏览器对 BOM 的实现存在差异，因此在使用 BOM 对象时需要注意兼容性问题。
