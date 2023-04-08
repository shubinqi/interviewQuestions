<!--
 * @Author: Shu Binqi
 * @Date: 2023-04-08 14:05:34
 * @LastEditors: Shu Binqi
 * @LastEditTime: 2023-04-08 18:54:01
 * @Description:
 * @Version: 1.0.0
 * @FilePath: \interviewQuestionsc:\Git\interviewQuestions\前端项目\前端项目封装\常见配置文件\NodeJS项目目录介绍.md
-->

#### Nodejs 项目目录结构

Node.js 项目的目录结构通常采用如下的方式组织：

```
project/
├── config/
│   ├── default.json
│   ├── development.json
│   ├── production.json
│   └── test.json
├── controllers/
│   ├── userController.js
│   └── ...
├── db/
│   ├── migrations/
│   ├── seeds/
│   └── index.js
├── middlewares/
│   ├── auth.js
│   └── ...
├── models/
│   ├── user.js
│   └── ...
├── routes/
│   ├── index.js
│   ├── userRoutes.js
│   └── ...
├── services/
│   ├── authService.js
│   └── ...
├── tests/
│   ├── user.test.js
│   └── ...
├── utils/
│   ├── logger.js
│   └── ...
├── app.js
├── package.json
└── README.md
```

目录结构解释：

1. **config/**：存放配置文件，如数据库连接信息、环境变量等。
1. **controllers/**：存放控制器，用于处理请求，调用服务并返回响应。
1. **db/**：存放数据库相关的文件，如迁移脚本、种子数据等。
1. **middlewares/**：存放中间件，用于处理请求前后的逻辑，如身份验证、日志记录等。
1. **models/**：存放数据模型，用于定义数据库中的表、字段等。
1. **routes/**：存放路由文件，用于定义 API 路径及请求方法，并调用相应的控制器。
1. **services/**：存放服务文件，用于实现业务逻辑，如用户注册、登录等。
1. **tests/**：存放测试文件，用于测试代码的正确性。
1. **utils/**：存放工具文件，如日志记录、加密解密等公共函数。
1. **app.js**：应用程序的入口文件，初始化应用程序并启动服务器。
1. **package.json**：存放应用程序的依赖信息、脚本信息等。
1. **README.md**：项目的说明文档。

以上就是 Node.js 项目的常见目录结构。在实际开发中，可以根据项目需要自行调整和扩展。
