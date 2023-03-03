<!--
 * @Author: Shu Binqi
 * @Date: 2023-02-28 19:06:05
 * @LastEditors: Shu Binqi
 * @LastEditTime: 2023-03-03 01:36:21
 * @Description: NodeJS 面试题（27题）
 * @Version: 1.0.0
 * @FilePath: \interviewQuestions\NodeJS\NodeJS.md
-->

https://juejin.cn/post/6844903951742025736

#### 请介绍一下 Node 里的模块是什么？

在 Node 中，模块是指一个 JavaScript 文件，它包含了一些封装好的 JavaScript 方法、JSON 数据、编译过的 C/C++拓展等。模块是 Node 的一个重要概念，用于将代码组织成可重用的单元。以下是一些要点：

- 模块与文件是一一对应的，一个 Node.js 文件就是一个模块。
- Node 中可以将模块分为三类：内置模块、自定义模块和第三方模块。内置模块是 Node 官方提供的，例如 fs、path、http 等，自定义模块是我们自己创建的.js 文件，而第三方模块是非官方提供的模块，需要通过 npm 安装后才能使用。
- Node.js 的内置模块提供了访问网络、操作文件等核心功能，npm 里的模块库就是基于这些顶层 API 的进一步封装。
- Node.js 中的模块可以被看作是 JavaScript 库，是整体代码中你想放在一起的某个部分（比如函数集），你会想把这部分代码相对独立于代码库中的其它部分，可以把事情区分清楚。
- 模块可以通过 require()函数引入，并通过 module.exports 或 exports 对象导出。例如：

```
// module1.js
exports.func1 = function(){
        console.log('func1 from module1 called');
}

// module2.js
var in_module1 = require('./module1.js');
in_module1.func1();
exports.func2 = function(){
        console.log('func2 from module2 called');
}

// module3.js
var in_module2 = require('./module2.js');
in_module2.func2();
```

在这个例子中，module1.js 导出了一个名为 func1 的函数，module2.js 引入了 module1.js，并调用了其中的 func1 函数，同时还导出了一个名为 func2 的函数。module3.js 引入了 module2.js，并调用了其中的 func2 函数。最后，运行 module3.js 会输出“func1 from module1 called”和“func2 from module2 called”。

- 模块在首次被引入时会被缓存，之后的引入将直接从缓存中读取。可以通过 module.cache 对象查看当前缓存的模块。
- Node.js 12 版本开始支持 ES 模块，可以使用 import/export 语法进行模块导入导出。

#### 请介绍一下 require 的模块加载机制？

#### 请介绍一下 Node 事件循环的流程？

#### 在每个 tick 的过程中，如何判断是否有事件需要处理呢？

#### 请描述一下整个异步 I/O 的流程？

#### 如何查看 V8 的内存使用情况？

#### V8 的内存限制是多少？

#### 为什么 V8 这样设计？

#### V8 的内存分代和回收算法请简单讲一讲？

#### 老生代？新生代？？

#### 标记清除算法的问题？

#### 哪些情况会造成 V8 无法立即回收内存？

#### 请谈一下内存泄漏是什么？

#### 常见内存泄漏的原因和排查的方法？

#### 新建 Buffer 会占用 V8 分配的内存吗

#### Buffer 的内存分配机制？

#### Buffer 乱码问题？

#### webSocket 与传统的 http 有什么优势？

#### https 用哪些端口进行通信？

#### 这些端口分别有什么用？

#### 身份验证过程中会涉及到密钥，对称加密，非对称加密，摘要的概念，请解释一下？

#### 为什么需要 CA 机构对证书签名？

#### https 验证身份也就是 TSL/SSL 身份验证的过程？

#### 请简述一下 node 的多进程架构？

#### 请问创建子进程的方法有哪些，简单说一下它们的区别？
