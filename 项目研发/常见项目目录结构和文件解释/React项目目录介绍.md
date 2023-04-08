<!--
 * @Author: Shu Binqi
 * @Date: 2023-04-06 22:44:45
 * @LastEditors: Shu Binqi
 * @LastEditTime: 2023-04-08 18:44:08
 * @Description: React 项目目录结构
 * @Version: 1.0.0
 * @FilePath: \interviewQuestionsc:\Git\interviewQuestions\前端项目\前端项目封装\常见配置文件\React项目目录介绍.md
-->

#### React 项目目录结构

React 项目的目录结构一般如下：

```
my-react-app/
├── node_modules/
├── public/
│   ├── index.html          // 入口 HTML
│   ├── favicon.ico         // 网站图标
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── assets/             // 静态资源
│   │   ├── images/
│   │   ├── fonts/
│   │   └── styles/
│   ├── components/         // 组件
│   │   ├── common/
│   │   ├── layout/
│   │   └── ui/
│   ├── pages/              // 页面组件
│   │   ├── Home/
│   │   │   ├── Home.jsx
│   │   │   └── Home.module.css
│   │   ├── About/
│   │   └── Contact/
│   ├── services/           // 接口请求相关
│   ├── utils/              // 工具类
│   ├── App.js              // 根组件
│   ├── index.js            // 入口 JS
│   ├── index.css           // 入口 CSS
│   └── setupTests.js
├── .env                    // 环境配置文件
├── .gitignore              // Git忽略文件
├── package.json            // 依赖包配置
├── README.md               // 项目文档
└── yarn.lock
```

1. **node_modules/**：存放项目依赖的第三方模块。
1. **public/**：存放不需要经过编译处理的静态资源文件，如 index.html、favicon.ico、manifest.json 和 robots.txt 等。
1. **src/**：存放源代码。
1. **assets/**：存放项目所需的图片、字体和样式等资源文件。
   - **components/**：存放可复用的 React 组件，按照功能模块划分，通常分为 common/（通用组件）、layout/（布局组件）和 ui/（UI 组件）三个子目录。
   - **pages/**：存放每个页面对应的 React 组件，按照页面名称划分，每个页面通常包含一个 .jsx 文件和一个 .module.css 文件。
   - **services/**：存放与后端 API 交互的代码，如 axios 的封装等。
   - **utils/**：存放通用的工具函数或常量等。
   - **App.js**：React 应用的根组件。
   - **index.js**：React 应用的入口文件。
   - **index.css**：全局样式文件。
   - **setupTests.js**：测试相关的配置文件。
1. **.env**：存放环境变量，如 API 地址、端口号等。
1. **.gitignore**：Git 版本控制忽略文件。
1. **package.json**：项目的配置文件，包含依赖、脚本和配置等信息。
1. **README.md**：项目的说明文档。
1. **yarn.lock**：Yarn 依赖管理工具的锁定文件，用于确保每个开发者的依赖版本一致。

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

#### React 项目的 package.json 文件示例

以下是一个全面的 React 项目的 package.json 示例：

```
{
  "name": "react-project",
  "version": "1.0.0",
  "description": "A React project",
  "main": "index.js",
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "lint": "eslint src/**/*.js",
    "lint:fix": "eslint src/**/*.js --fix"
  },
  "keywords": [
    "React"
  ],
  "author": "Your Name",
  "license": "MIT",
  "dependencies": {
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-router-dom": "^5.3.0",
    "axios": "^0.21.1"
  },
  "devDependencies": {
    "eslint": "^7.32.0",
    "eslint-config-airbnb": "^18.2.1",
    "eslint-config-prettier": "^8.3.0",
    "eslint-plugin-import": "^2.24.2",
    "eslint-plugin-jsx-a11y": "^6.4.1",
    "eslint-plugin-prettier": "^4.0.0",
    "eslint-plugin-react": "^7.26.1",
    "eslint-plugin-react-hooks": "^4.2.0",
    "prettier": "^2.4.1",
    "husky": "^7.0.4",
    "lint-staged": "^11.1.2"
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "src/**/*.js": [
      "eslint --fix"
    ]
  }
}
```

该配置文件主要包括以下几个部分：

1. **name**: 项目名称。
1. **version**: 项目版本号。
1. **description**: 项目描述。
1. **main**: 入口文件。
1. **scripts**: 脚本命令，包括启动、构建、测试、弹出配置等。
1. **keywords**: 关键词。
1. **author**: 作者。
1. **license**: 许可证。
1. **dependencies**: 项目依赖，包括 React、React DOM、React Router DOM 和 Axios 等。
1. **devDependencies**: 开发依赖，包括 ESLint、Prettier、Husky 和 Lint-staged 等。
1. **husky**: Git 钩子配置，指定了 pre-commit 钩子，用于在提交代码前进行代码格式检查。
1. **lint-staged**: 指定了需要进行代码格式检查的文件和相应的命令。

其中，还有一些辅助函数，例如 eslint-config-airbnb 和 eslint-config-prettier 用于配置 ESLint，prettier 用于格式化代码。

#### React 项目的 .gitignore 文件示例

下面是一个全面的 React 项目的 .gitignore 示例：

```
# dependencies
/node_modules

# build output
/build
/dist

# IDE/Editor specific files
/.vscode
/.idea
*.suo
*.ntvs*
*.njsproj
*.sln
*.swp
*.lock
*.sqlite

# OS generated files
.DS_Store
Thumbs.db

# logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# dotenv environment variables file
.env

# local development files
/.env.local
/.env.development.local
/.env.test.local
/.env.production.local

# Compiled JSX and CSS
src/**/*.css
src/**/*.scss
src/**/*.sass
src/**/*.less
src/**/*.styl
src/**/*.jsx
src/**/*.tsx

# Storybook build output
/storybook-static

# Jest coverage output
/coverage

# Cypress end-to-end test output
/cypress/videos
/cypress/screenshots

# Netlify build output
/netlify

# Next.js build output
/.next

# Gatsby build output
/public
.cache
```

这个 .gitignore 文件除了基本的忽略项外，还包括了一些 React 项目特有的忽略项，下面是详细介绍：

1. /build、/dist：忽略打包后的输出目录，这些目录通常包含了编译后的代码和静态资源，也不需要提交到版本控制系统中。
1. src//_.css、src//.scss、src/\*\*/.sass、src//_.less、src//.styl、src/**/.jsx、src/**/\*.tsx：忽略编译后的 JSX 和 CSS 文件，这些文件通常由构建工具自动生成，不需要提交到版本控制系统中。
1. /storybook-static：忽略 Storybook 的构建输出目录。
1. /coverage：忽略 Jest 测试覆盖率报告的输出目录。
1. /cypress/videos、/cypress/screenshots：忽略 Cypress 端到端测试的视频和截图输出目录。
1. /netlify：忽略 Netlify 的构建输出目录。
1. /.next：忽略 Next.js 的构建输出目录。
1. /public、.cache：忽略 Gatsby 的构建输出目录和缓存目录。

以上这些忽略项可以根据具体的项目需求进行调整和修改。
