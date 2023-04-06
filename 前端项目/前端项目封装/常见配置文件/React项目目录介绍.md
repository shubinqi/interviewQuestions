<!--
 * @Author: Shu Binqi
 * @Date: 2023-04-06 22:44:45
 * @LastEditors: Shu Binqi
 * @LastEditTime: 2023-04-06 22:47:43
 * @Description: React 项目目录结构
 * @Version: 1.0.0
 * @FilePath: \interviewQuestionsc:\Git\interviewQuestions\前端项目\前端项目封装\常见配置文件\React项目目录介绍.md
-->

#### React 项目目录结构

React 项目的目录结构一般如下：

```
├── public
│   ├── index.html          // 入口 HTML
│   └── favicon.ico         // 网站图标
├── src
│   ├── assets              // 静态资源
│   ├── components          // 组件
│   ├── containers          // 容器组件
│   ├── pages               // 页面组件
│   ├── services            // 接口请求相关
│   ├── store               // Redux状态管理
│   ├── utils               // 工具类
│   ├── App.js              // 根组件
│   ├── index.js            // 入口 JS
│   └── routes.js           // 路由
├── node_modules            // 依赖包
├── .gitignore              // Git忽略文件
├── package.json            // 依赖包配置
└── README.md               // 项目文档
```

其中，public 目录下是一些静态资源，如入口 HTML、网站图标等；src 目录下是项目的主要代码，包括组件、容器组件、页面组件、接口请求、状态管理、工具类等；node_modules 目录下是项目依赖的第三方包；.gitignore 文件是 Git 忽略文件，用于定义哪些文件或文件夹不需要被 Git 管理；package.json 文件是依赖包配置文件，用于定义项目依赖、脚本、版本等信息；README.md 文件是项目文档，用于描述项目的功能、使用方法等。

这个目录结构是比较常见的，但实际上可以根据项目的需求进行调整和扩展。例如，可以在 src 目录下再增加一个 api 目录，用于存放接口请求相关的代码；也可以在 src 目录下再增加一个 constants 目录，用于存放常量相关的代码等。

#### React 项目常见配置文件

React 项目常见的配置文件有以下几种：

1. **package.json**：用于定义项目依赖、脚本、版本等信息。
1. **webpack.config.js**：用于定义 Webpack 打包相关的配置，包括入口、输出、loader、插件等。
1. **.babelrc**：用于定义 Babel 转码相关的配置，包括转码规则、插件等。
1. **.eslintrc**：用于定义 ESLint 代码检查相关的配置，包括检查规则、插件等。
1. **.prettierrc**：用于定义 Prettier 代码格式化相关的配置，包括格式化规则等。
1. **.editorconfig**：用于定义编辑器相关的配置，包括缩进、换行符等。
1. **.gitignore**：用于定义哪些文件或文件夹不需要被 Git 管理。
1. **.env**：用于定义环境变量。

以上是 React 项目中常见的配置文件，不同的项目可能会有所不同。配置文件的作用是可以让开发者在开发过程中更加方便地管理和配置项目。
