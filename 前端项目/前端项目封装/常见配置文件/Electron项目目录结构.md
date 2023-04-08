<!--
 * @Author: Shu Binqi
 * @Date: 2023-04-08 13:59:22
 * @LastEditors: Shu Binqi
 * @LastEditTime: 2023-04-08 19:03:16
 * @Description: Electron 项目目录结构
 * @Version: 1.0.0
 * @FilePath: \interviewQuestionsc:\Git\interviewQuestions\前端项目\前端项目封装\常见配置文件\Electron项目目录结构.md
-->

#### Electron 项目目录结构

Electron 项目目录结构如下：

```
my-electron-app/
├── node_modules/   # 存放项目依赖的第三方模块
├── public/
│   ├── index.html
│   ├── favicon.ico
│   ├── manifest.json
│   └── robots.txt
├── dist/           # 存放打包后可执行文件及其依赖文件
├── build/          # 存放打包脚本和配置文件
├── src/            # 存放源代码文件
│   ├── assets/         # 存放应用程序所需的资源文件
│   │   ├── images/     # 应用程序图片文件
│   │   ├── fonts/      # 应用程序字体图标文件
│   │   └── styles/     # 应用程序样式文件
│   ├── renderer/   # 渲染进程相关文件
│   │   ├── index.js        # 渲染进程入口文件
│   │   ├── components/     # 存放组件文件
│   │   ├── pages/          # 存放页面文件
│   │   ├── assets/         # 存放渲染进程所需的资源文件
│   │   └── ...             # 其他渲染进程相关文件
│   ├── main/       # 主进程相关文件
│   │   ├── app.js          # 应用程序的入口文件
│   │   ├── menu.js         # 应用程序的菜单配置文件
│   │   ├── ipc.js          # 应用程序的进程间通信文件
│   │   ├── windows.js      # 应用程序的窗口管理文件
│   │   └── ...             # 其他主进程相关文件
│   ├── preload/
│   │   └── index.js
│   ├── common/     # 存放主进程和渲染进程共用的代码
│   ├── main.js     # 主进程代码文件
│   ├── index.html  # 应用程序的入口页面
│   ├── package.json
│   ├── tsconfig.json
│   └── webpack.config.js
│   └── ...         # 其他源代码文件
├── .env
├── .gitignore
├── package.json       # 项目依赖配置文件
├── package-lock.json  # 项目依赖锁定文件
├── README.md          # 项目说明文件
└── yarn.lock
```

1. **node_modules/**：存放项目依赖的第三方模块。
1. **public/**：存放不需要经过编译处理的静态资源文件，如 index.html、favicon.ico、manifest.json 和 robots.txt 等。
1. **src/**：存放源代码。
1. **assets/**：存放项目所需的图片、字体和样式等资源文件。
   1. **main/**：存放 Electron 主进程代码。
      - **index.js**：Electron 应用的入口文件。
      - **app.js**：Electron 应用的核心代码，处理应用的生命周期、窗口管理等操作。
      - **menu.js**：定义应用的菜单栏。
      - **tray.js**：定义应用的系统托盘图标。
   1. **renderer/**：存放 Electron 渲染进程代码。
      - **index.js**：Electron 渲染进程的入口文件。
      - **App.jsx**：React 应用的根组件。
      - **components/**：存放可复用的 React 组件，按照功能模块划分，通常分为 common/（通用组件）、layout/（布局组件）和 ui/（UI 组件）三个子目录。
      - **pages/**：存放每个页面对应的 React 组件，按照页面名称划分，每个页面通常包含一个 .jsx 文件和一个 .module.css 文件。
      - **services/**：存放与后端 API 交互的代码，如 axios 的封装等。
      - **utils/**：存放通用的工具函数或常量等。
      - **styles/**：存放样式文件。
   1. **preload/**：存放 Electron 预加载脚本代码。
      - **index.js**：预加载脚本的入口文件，可以在此处注入一些全局变量或函数。
   1. **package.json**：项目的配置文件，包含依赖、脚本和配置等信息。
   1. **tsconfig.json**：TypeScript 的配置文件，用于编译 TypeScript 代码。
   1. **webpack.config.js**：Webpack 的配置文件，用于打包应用代码。
1. **.env**：存放环境变量，如 API 地址、端口号等。
1. **.gitignore**：Git 版本控制忽略文件。
1. **package.json**：项目的配置文件，包含依赖、脚本和配置等信息。
1. **README.md**：项目的说明文档。
1. **yarn.lock**：Yarn 依赖管理工具的锁定文件，用于确保每个开发者的依赖版本一致。

其中，main.js 为主进程代码文件，index.html 为渲染进程主页面文件，package.json 为项目配置文件，node_modules 为依赖库目录。

1. **renderer**目录为渲染进程代码目录，其中 components 目录为组件目录，pages 目录为页面目录，styles 目录为样式目录，index.js 为渲染进程入口文件。
1. **assets**目录为静态资源目录，其中 icons 目录为图标目录，images 目录为图片目录等等。

以上就是 Electron 项目的目录结构。
