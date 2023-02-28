<!--
 * @Author: Shu Binqi
 * @Date: 2023-02-24 21:13:25
 * @LastEditors: Shu Binqi
 * @LastEditTime: 2023-02-26 13:53:07
 * @Description: 创建 Vue 初始化项目
 * @Version: 1.0.0
 * @FilePath: \interviewQuestions\Chinese\创建Vue项目.md
-->

### 创建初始化项目

1. 创建一个 React + Vite + Redux + TS + Element-UI 的 后台管理项目，并实现登录注册功能和登录路由拦截，登录 token 保存在 sessionstorage 中，路由实现模块化加载
1. 创建一个 Vue3 + Vite + Pinia + Vue-Router + TS + axios + Element-UI 的 后台管理项目，并实现登录注册功能和登录路由拦截，登录 token 保存在 sessionstorage 中，路由实现模块化加载
1. 创建一个 Vue3 + Vite + Pinia + Vue-Router + TS + axios + Vant-UI 的 H5 项目，并实现登录注册功能和登录路由拦截，登录 token 保存在 sessionstorage 中，路由实现模块化加载
1. 创建一个 Vue2 + Webpack + VueX + Vue-Router + axios + Element-UI 的 后台管理项目，并实现登录注册功能和登录路由拦截，登录 token 保存在 sessionstorage 中，路由实现模块化加载

#### PC 端项目

1. 后台管理项目（vue2-admin-template）
2. 后台管理项目（vue3-admin-template）
3. 商城项目（vue2-shop-template）
4. 商城项目（vue3-shop-template）
5. 网站项目（vue2-website-template）
6. 网站项目（vue3-website-template）
7. 博客项目（vue3-blog-template）

#### 移动端项目

1. H5 项目（vue2-h5-template）
2. H5 项目（vue3-h5-template）

### 创建 Vue2 + Vue-Cli + Element-UI 项目

技术栈：Vue2 + Vue-Cli + Element-UI + VueX + Vue-Router

#### 第一步：创建 Vue 项目

#### 第二步：安装插件

#### 第三步：项目配置

#### 第四步：封装代码

#### 踩坑记录

### 创建 Vue2 + Webpack + Element-UI 项目

技术栈：Vue2 + Webpack + Element-UI + VueX + Vue-Router

#### 第一步：创建 Vue 项目

#### 第二步：安装插件

#### 第三步：项目配置

#### 第四步：封装代码

#### 踩坑记录

### 创建 Vue3 + Webpack + Element-UI 项目

技术栈：Vue2 + Webpack + Element-UI + Pinia + Vue-Router

#### 第一步：创建 Vue 项目

#### 第二步：安装插件

#### 第三步：项目配置

#### 第四步：封装代码

#### 踩坑记录

### 创建 Vue3 + Vite + Vant-UI 项目

技术栈：Vue2 + Webpack + Vant-UI + Pinia + Vue-Router

1、检查环境

```
node -v
npm -v
```

2、安装 Vue-Cli 并创建项目

```
npm install -g @vue/cli

vue create my-project
cd my-project
```

3、安装依赖

```
<!-- 单个安装 -->
npm install pinia
npm install --save-dev typescript
npm install vite --save-dev
npm install vant
npm install vue-router
npm install axios

<!-- 批量安装 -->
npm install pinia vant vue-router axios
npm install --save-dev @types/vue @vue/compiler-sfc vite-plugin-style-import
```

其中 pinia 是一个状态管理库，vant 是一个 UI 组件库，vue-router 是 Vue.js 官方提供的路由管理库。@types/vue 是 Vue.js 的 TypeScript 类型定义文件，@vue/compiler-sfc 是一个用于编译单文件组件的工具，vite-plugin-style-import 是一个 Vite 插件，用于按需引入样式。

4、创建 TSC 配置文件

```
npx tsc --init
```

6、配置 Pinia，创建 src/store/index.ts 文件，并添加以下代码：

```
import { createPinia } from 'pinia'

export const store = createPinia()
```

7、在 main.ts 中使用 Pinia、Vant-UI 和 Vue-Router：

```
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import 'vant/lib/index.css' // 引入 Vant-UI 样式文件
import { Button } from 'vant' // 按需引入 Vant-UI 组件

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)
app.use(Button) // 注册 Vant-UI 组件
app.mount('#app')
```

8、在 src 目录下创建一个 components 文件夹，并创建一个示例组件：

```
<template>
  <div>{{ message }}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MyComponent',
  setup() {
    const message = 'Hello, world!'

    return {
      message,
    }
  },
})
</script>
```

10、在 App.vue 中使用组件：

```
<template>
  <div>
    <MyComponent />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MyComponent from './components/MyComponent.vue'

export default defineComponent({
  name: 'App',
  components: {
    MyComponent,
  },
})
</script>
```

11、启动项目

```
npm run dev
```

#### 踩坑记录
