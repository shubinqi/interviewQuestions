<!--
 * @Author: Shu Binqi
 * @Date: 2023-04-08 13:55:49
 * @LastEditors: Shu Binqi
 * @LastEditTime: 2023-04-08 14:01:47
 * @Description: Uniapp 项目目录结构
 * @Version: 1.0.0
 * @FilePath: \interviewQuestionsc:\Git\interviewQuestions\前端项目\前端项目封装\常见配置文件\Uniapp目录介绍.md
-->

#### Uniapp 项目目录结构

Uniapp 项目目录结构如下：

```
┌── manifest.json           // Uniapp 应用配置文件
├── pages                   // Uniapp 页面目录
│   ├── index               // 首页
│   │   ├── index.vue       // 页面结构
│   │   ├── index.js        // 页面逻辑
│   │   ├── index.json      // 页面配置
│   │   └── index.scss      // 页面样式
│   └── ...
├── components              // Uniapp 组件目录
│   ├── header              // 头部组件
│   │   ├── header.vue      // 组件结构
│   │   ├── header.js       // 组件逻辑
│   │   ├── header.json     // 组件配置
│   │   └── header.scss     // 组件样式
│   └── ...
├── static                  // 静态资源目录
│   ├── img                 // 图片资源目录
│   ├── css                 // 样���资源目录
│   └── ...
├── uni_modules             // Uniapp 模块目录
│   ├── uni-ui              // Uniapp UI 组件库
│   ├── ...
│   └── ...
├── unpackage               // 编译后的文件目录
│   ├── dev                 // 开发模式编译后的文件目录
│   └── prod                // 生产模式编译后的文件目录
├── node_modules            // Node.js 模块目录
├── package.json            // 项目配置文件
└── README.md               // 项目说明文件
```

其中，manifest.json 是 Uniapp 应用的配置文件，用于配置应用的基本信息、页面路由等。

1. **pages**：目录下存放 Uniapp 的页面文件，每个页面由四个文件组成：.vue 文件是页面的结构和逻辑文件，.js 文件是页面的逻辑文件，.json 文件是页面的配置文件，.scss 文件是页面的样式文件。
1. **components**：目录下存放 Uniapp 的组件文件，每个组件也由四个文件组成，分别是.vue、.js、.json、.scss 文件。
1. **static**：目录下存放应用所需的静态资源文件，比如图片、样式等。
1. **uni_modules**：目录下存放 Uniapp 的模块，比如 Uniapp 官方提供的 UI 组件库 uni-ui。
1. **unpackage**：目录下存放编译后的文件，其中 dev 目录是开发模式编译后的文件目录，prod 目录是生产模式编译后的文件目录。
1. **node_modules**：目录下存放 Node.js 模块。
1. **package.json**：是项目的配置文件，README.md 是项目说明文件。

以上就是 Uniapp 项目的目录结构。
