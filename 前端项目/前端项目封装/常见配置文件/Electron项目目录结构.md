<!--
 * @Author: Shu Binqi
 * @Date: 2023-04-08 13:59:22
 * @LastEditors: Shu Binqi
 * @LastEditTime: 2023-04-08 14:01:36
 * @Description: Electron 项目目录结构
 * @Version: 1.0.0
 * @FilePath: \interviewQuestionsc:\Git\interviewQuestions\前端项目\前端项目封装\常见配置文件\Electron项目目录结构.md
-->

#### Electron 项目目录结构

Electron 项目目录结构如下：

```
┌── main.js             // 主进程代码
├── index.html          // 渲染进程主页面
├── package.json        // 项目配置文件
├── node_modules        // 依赖库目录
├── renderer            // 渲染进程代码目录
│   ├── components      // 组件目录
│   ├── pages           // 页面目录
│   ├── styles          // 样式目录
│   └── index.js        // 渲染进程入口文件
└── assets              // 静态资源目录
    ├── icons           // 图标目录
    ├── images          // 图片目录
    └── ...
```

其中，main.js 为主进程代码文件，index.html 为渲染进程主页面文件，package.json 为项目配置文件，node_modules 为依赖库目录。

1. **renderer**目录为渲染进程代码目录，其中 components 目录为组件目录，pages 目录为页面目录，styles 目录为样式目录，index.js 为渲染进程入口文件。
1. **assets**目录为静态资源目录，其中 icons 目录为图标目录，images 目录为图片目录等等。

以上就是 Electron 项目的目录结构。
