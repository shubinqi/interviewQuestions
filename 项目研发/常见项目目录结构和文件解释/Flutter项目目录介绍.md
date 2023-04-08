<!--
 * @Author: Shu Binqi
 * @Date: 2023-04-08 13:57:23
 * @LastEditors: Shu Binqi
 * @LastEditTime: 2023-04-08 18:52:20
 * @Description: Flutter 项目目录结构
 * @Version: 1.0.0
 * @FilePath: \interviewQuestionsc:\Git\interviewQuestions\前端项目\前端项目封装\常见配置文件\Flutter项目目录介绍.md
-->

#### Flutter 项目目录结构

Flutter 项目目录结构如下：

```
┌── android              // Android 原生代码目录
│   ├── app              // Android 应用代码目录
│   ├── gradle           // Gradle 构建配置目录
│   └── ...
├── ios                  // iOS 原生代码目录
│   ├── Runner           // iOS 应用代码目录
│   └── ...
├── lib/                 // Flutter 应用代码目录
│   ├── main.dart        // 应用入口文件
│   ├── models/          // 数据模型目录
│   ├── services/        // 服务目录
│   ├── utils/           // 工具目录
│   ├── widgets/
│   ├── screens/
│   ├── constants/
│   ├── themes/          // 主题目录
│   └── routes/
├── test/                // 测试代码目录
├── assets/
│   ├── fonts/
│   ├── images/
│   └── json/
├── pubspec.yaml        // Flutter 应用配置文件
├── .gitignore          // Git 忽略文件配置
├── analysis_options.yaml
└── README.md           // 项目说明文件
```

其中，android 目录下为 Android 原生代码目录，app 目录为 Android 应用代码目录，gradle 目录为 Gradle 构建配置目录。

1. **android/**：存放 Android 平台相关的代码和配置文件。
1. **ios/**：存放 iOS 平台相关的代码和配置文件。
1. **lib/**：存放 Flutter 应用的源代码。
   - **main.dart**：Flutter 应用的入口文件。
   - **models/**：存放数据模型类。
   - **services/**：存放服务类，如网络请求、本地存储等。
   - **utils/**：存放通用的工具函数或常量等。
   - **widgets/**：存放可复用的 Flutter 组件，按照功能模块划分，通常分为 common/（通用组件）、layout/（布局组件）和 ui/（UI 组件）三个子目录。
   - **screens/**：存放每个屏幕对应的 Flutter 页面，按照页面名称划分，每个页面通常包含一个 .dart 文件和一个 .g.dart 文件。
   - **constants/**：存放常量定义，如颜色、字体等。
   - **themes/**：存放应用的主题样式定义。
   - **routes/**：存放应用的路由定义。
   - **test/**：存放测试用例代码。
1. **assets/**：存放应用所需的资源文件，如字体、图片和 JSON 数据等。
1. **pubspec.yaml**：Flutter 应用的配置文件，包含依赖、资源和配置等信息。
1. **analysis_options.yaml**：Dart 代码分析工具的配置文件。
1. **README.md**：项目的说明文档。

以上就是 Flutter 项目的目录结构。
