<!--
 * @Author: Shu Binqi
 * @Date: 2023-04-08 13:57:23
 * @LastEditors: Shu Binqi
 * @LastEditTime: 2023-04-08 14:01:44
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
├── lib                  // Flutter 应用代码目录
│   ├── main.dart        // 应用入口文件
│   ├── models           // 数据模型目录
│   ├── pages            // 页面目录
│   ├── services         // 服务目录
│   ├── utils            // 工具目录
│   └── main.dart        // 应用入口文件
├── test                 // 测试代码目录
├── pubspec.yaml         // Flutter 应用配置文件
├── .idea                // IDE 配置目录
├── .gitignore           // Git 忽略文件配置
└── README.md            // 项目说明文件
```

其中，android 目录下为 Android 原生代码目录，app 目录为 Android 应用代码目录，gradle 目录为 Gradle 构建配置目录。

1. **ios**目录下为 iOS 原生代码目录，Runner 目录为 iOS 应用代码目录。
1. **lib**目录为 Flutter 应用代码目录，其中 main.dart 为应用的入口文件，models 目录为数据模型目录，pages 目录为页面目录，services 目录为服务目录，utils 目录为工具目录。
1. **test**目录下存放测试代码。
1. **pubspec.yaml**为 Flutter 应用的配置文件，.idea 为 IDE 配置目录，.gitignore 为 Git 忽略文件配置。
1. **README.md**为项目说明文件。

以上就是 Flutter 项目的目录结构。
