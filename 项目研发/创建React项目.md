<!--
 * @Author: Shu Binqi
 * @Date: 2023-02-24 21:13:31
 * @LastEditors: Shu Binqi
 * @LastEditTime: 2023-02-26 16:36:06
 * @Description: 创建 React 项目
 * @Version: 1.0.0
 * @FilePath: \interviewQuestions\Chinese\创建React项目.md
-->

### 创建 React + Vite + Redux + TypeScript + SWC 项目

#### 创建项目、安装依赖

使用 vite 创建 React 项目

```
npm init vite@latest react-admin-template --template react-ts
```

安装依赖

```
npm install react react-dom redux react-redux react-router-dom axios element-plus --save
npm install @types/react @types/react-dom @types/react-redux @types/react-router-dom --save-dev
```

#### 目录结构

```
src
├── api
│   ├── index.ts
│   └── user.ts
├── assets
├── components
│   └── login
│       └── index.tsx
├── layout
│   ├── index.tsx
│   └── menu.tsx
├── pages
│   ├── home
│   │   └── index.tsx
│   ├── login
│   │   └── index.tsx
│   └── user
│       └── index.tsx
├── store
│   ├── index.ts
│   ├── user
│   │   ├── actions.ts
│   │   ├── reducer.ts
│   │   ├── selectors.ts
│   │   └── types.ts
│   └── types.ts
├── utils
│   └── request.ts
├── App.tsx
├── index.css
└── index.tsx
```

#### 目录结构说明：

api：用于存放 API 请求相关的代码；
assets：用于存放静态资源，例如图片、样式等；
components：用于存放公共组件；
layout：用于存放布局组件；
pages：用于存放页面组件；
store：用于存放 Redux 相关的代码；
utils：用于存放工具函数、封装请求等代码；
App.tsx：应用程序入口文件；
index.css：全局样式文件；
index.tsx：React 渲染入口文件。

#### 配置路由

在 src 目录下创建 router 目录，用于存放路由相关的代码。在 router 目录下创建 index.tsx 文件，配置路由代码如下：

```
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../pages/login';
import Home from '../pages/home';
import User from '../pages/user';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" exact component={Home} />
        <Route path="/user" component={User} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
```

#### 配置 Redux

在 store 目录下创建 index.ts 文件，用于创建 Redux store：
