<!--
 * @Author: Shu Binqi
 * @Date: 2023-04-08 14:05:34
 * @LastEditors: Shu Binqi
 * @LastEditTime: 2023-04-08 14:05:36
 * @Description:
 * @Version: 1.0.0
 * @FilePath: \interviewQuestionsc:\Git\interviewQuestions\前端项目\前端项目封装\常见配置文件\NodeJS项目目录介绍.md
-->

#### Nodejs 项目目录结构

Node.js 项目的目录结构通常采用如下的方式组织：

```
├── bin                 // 可执行文件
│   └── www             // 应用程序入口
├── public              // 静态资源
│   ├── css             // 样式文件
│   ├── img             // 图片文件
│   └── js              // JavaScript 文件
├── routes              // 路由文件
│   ├── index.js        // 主页路由
│   └── users.js        // 用户路由
├── views               // 视图文件
│   ├── error.ejs       // 错误页面
│   ├── index.ejs       // 主页
│   └── layout.ejs      // 页面布局
├── app.js              // 应用程序
├── package.json        // 项目描述文件
└── README.md           // 项目说明文件
```

1. bin 目录用于存放可执行文件
1. www 为应用程序的入口文件
1. public 目录用于存放静态资源
1. 包括样式文件、图片文件和 JavaScript 文件等
1. routes 目录用于存放路由文件，分别对应不同的页面或功能
1. views 目录用于存放视图文件，包括页面布局和具体页面
1. app.js 文件为应用程序的主文件，负责启动服务器和配置路由等
1. package.json 文件为项目的描述文件，包括项目的名称、版本、依赖等信息
1. README.md 文件为项目的说明文件，包括项目的介绍、使用方法等。

以上就是 Node.js 项目的常见目录结构。在实际开发中，可以根据项目需要自行调整和扩展。
