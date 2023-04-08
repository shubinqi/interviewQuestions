<!--
 * @Author: Shu Binqi
 * @Date: 2023-03-03 20:43:55
 * @LastEditors: Shu Binqi
 * @LastEditTime: 2023-03-04 00:33:28
 * @Description: 创建 NodeJS 项目
 * @Version: 1.0.0
 * @FilePath: \interviewQuestions\Project\创建Node项目.md
-->

#### 创建 Node 项目

为了创建一个 Node 项目，需要按照以下步骤进行操作：

1. 安装 Node.js 和 npm，npm 是 Node.js 的包管理器，也是 Node.js 开发中常用的工具之一。
2. 创建项目文件夹，可以在终端中使用 mkdir 命令创建。
3. 在项目文件夹中使用终端运行 npm init 命令，生成 package.json 和 package-lock.json 文件，其中 package.json 文件中包含了项目的名称、版本号、描述等信息。
4. 安装所需的 Node.js 插件，可以使用 npm install 命令进行安装，例如 npm install xlsx --save。
5. 创建项目脚本文件，例如 test.js。
6. 修改 package.json 文件中的 scripts 部分，添加 "test": "node test.js"。
7. 运行项目，可以在终端中使用 npm run test 命令。

除此之外，还有一些 Node.js 的相关知识点需要了解：

- Node.js 是一个基于 Chrome V8 引擎的 JavaScript 后端运行环境，可以用于构建 Web 应用、桌面应用和 API 接口项目。
- 在 Node.js 项目中，可以使用内置模块、自定义模块和第三方模块，其中第三方模块也被称为包，是基于内置模块封装出来的，提供了更高级、更方便的 API，极大的提高了开发效率。
- 在 Node.js 项目中，常用的框架有 Express、Electron 和 Restify，它们分别用于构建 Web 应用、桌面应用和 API 接口项目。
- 在 Node.js 项目中，可以使用 joi 模块对请求参数进行验证，例如对用户名和密码进行验证。
- 在 Node.js 项目中，可以使用 jsonwebtoken 模块生成和解析 JSON Web Token（JWT），用于用户认证和授权。

####

要创建一个 Next.js 项目，可以使用两种方法：手动创建或使用 create-next-app 脚手架创建。手动创建虽然麻烦，但是可以更容易让新手了解过程和原理。下面是手动创建 Next.js 项目的步骤：

1. 建立文件夹：在你喜欢的位置新建一个文件夹，名称可以根据自己想法自定义。

```
mkdir NextDemo
```

2. 初始化项目：在根目录里添加一个 package.json 的文件。

```
npm init
```

3. 安装 Next.js：在终端中运行以下命令安装 Next.js。
   npm install next react react-dom
4. 创建页面：在 pages 文件夹中创建一个名为 index.js 的文件，这是 Next.js 中默认的首页。

5. 运行项目：在终端中运行以下命令启动项目。

```
npm run dev
```

如果想使用 create-next-app 脚手架创建项目，可以使用以下命令：

```
npx create-next-app my-app
cd my-app
npm run dev
```

Next.js 是一个基于 React 的服务端渲染框架，支持 TypeScript。它是一个框架，可以解决许多重要的细节，例如使用打包程序（例如 webpack）打包代码，并使用 Babel 等编译器进行代码转换，针对生产环境进行优化，例如代码拆分，对一些页面进行预先渲染以提高页面性能和 SEO，使用服务器端渲染或客户端渲染，编写一些服务器端代码才能将 React 应用程序连接到数据存储等。Next.js 直接提供了一个 &lt;Head&gt; 组件来包裹 Meta Data，可以方便地设置网页的 Meta Data。在 Next.js 中，可以使用 Static Generation 和 Server-side Rendering 来优化网站性能。动态路由可以生成类似 posts/:id 这样的路由，:id 可以为 post 的 id。可以使用 getStaticProps、getServerSideProps 和 getStaticPaths 函数来获取数据。
