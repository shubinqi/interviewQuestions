<!--
 * @Author: Shu Binqi
 * @Date: 2023-04-10 21:12:22
 * @LastEditors: Shu Binqi
 * @LastEditTime: 2023-04-10 21:14:53
 * @Description: 原生JS实现复制页面标签内容
 * @Version: 1.0.0
 * @FilePath: \interviewQuestionsc:\Git\interviewQuestions\项目研发\原生JS代码片段\原生JS实现复制页面内容.md
-->

#### 复制指定标签内容

```
// 获取需要复制的代码块
var codeBlock = document.querySelector('.hljs');
// 将代码块的innerHTML转换为纯文本
var codeText = codeBlock.innerText;
// 创建一个临时文本框
var tempInput = document.createElement('textarea');
tempInput.value = codeText;
document.body.appendChild(tempInput);
// 选中文本框中的内容
tempInput.select();
// 复制选中的内容到剪贴板
document.execCommand('copy');
// 删除临时文本框
document.body.removeChild(tempInput);
```

#### 有多个同类名标签时复制内容

```
// 获取所有的copy按钮
const copyBtns = document.querySelectorAll(".mycopy");

// 给每个copy按钮添加点击事件
copyBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    // 获取当前按钮所在的pre标签
    const pre = btn.parentNode;
    // 获取pre标签内的code代码
    const code = pre.querySelector("code");
    // 创建一个textarea元素，用于复制代码
    const textarea = document.createElement("textarea");
    // 将textarea元素的值设置为代码内容，如果有多个换行符使用正则替换为单个
    textarea.value = code.innerText.replace(/\n+/g, '\n');
    // 将textarea元素添加到页面中
    document.body.appendChild(textarea);
    // 选中textarea元素内的文本
    textarea.select();
    // 复制选中的文本
    document.execCommand("copy");
    // 移除textarea元素
    document.body.removeChild(textarea);
    // 添加反馈信息
    btn.classList.add("active");
    // 1.8秒后删除反馈信息
    setTimeout(function () {
      btn.classList.remove("active");
    }, 1800);
  });
});
```

这段代码主要涉及到以下知识点：

1. document.querySelectorAll() 方法：用于获取 HTML 文档中与指定 CSS 选择器匹配的所有元素列表。
1. forEach() 方法：用于对数组中的每个元素执行一次指定的函数。
1. addEventListener() 方法：用于为指定元素添加事件句柄。
1. parentNode 属性：用于获取指定节点的父节点。
1. querySelector() 方法：用于获取匹配指定 CSS 选择器的第一个元素。
1. document.createElement() 方法：用于创建一个指定类型的 HTML 元素。
1. innerText 属性：用于设置或获取元素及其后代的文本内容。
1. select() 方法：用于选择元素中的文本。
1. execCommand() 方法：用于执行浏览器命令。
1. classList 属性：用于获取元素的类名列表。
1. setTimeout() 方法：用于在指定的时间后执行一次指定的函数。

该代码的功能是：为所有 class 为"mycopy"的按钮添加点击事件，点击按钮后将按钮所在标签下的代码复制到剪贴板，并给按钮添加一个反馈信息，1.8 秒后删除反馈信息。
