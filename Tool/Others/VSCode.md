<!--
 * @Author: Shu Binqi
 * @Date: 2023-03-22 20:20:25
 * @LastEditors: Shu Binqi
 * @LastEditTime: 2023-03-22 21:30:13
 * @Description: VS Code 插件介绍
 * @Version: 1.0.0
 * @FilePath: \interviewQuestions\Tool\Others\VSCode.md
-->

和文件夹插件不一定对应，部分插件未介绍。

### 一、汉化插件（2 个）

1. Chinese (Simplified) (简体中文) Language Pack for Visual Studio Code：简体中文（zh-hans）
2. Chinese (Traditional) Language Pack for Visual Studio Code：繁体中文（zh-hant）

### 二、主题图标插件（11 个）

1. vscode-icons：一个好的编辑界面能够让开发过程心情舒畅，甚至可以提升开发效率。 显然，VS Code 默认的图标是达不到这种程度的。

### 三、编码辅助插件（13 个）

1. Bracket Pair Colorizer（已内置）：让嵌套的括号拥有独立的颜色，易于区分。可以配合任意主题使用。
1. Indent-Rainbow：一个简单的插件可以使得对齐更加具有可读性。
1. Highlight Matching Tag：高亮对应的 HTML 标签 以及 标识出对应的各种括号。
1. Auto Rename Tag：自动修改匹配的 HTML 标签。
1. Auto Close Tag：自动闭合 HTML/XML 标签
1. javascript console utils
   作用：快速 console.log 和 删除 console.log
   使用：选择要打印的变量，然后使用快捷键 Ctrl + Shift + L（Cmd + Shift + L）会自动在下一行输出 console.log（'variable：'，variable）。使用快捷键 Ctrl + Shift + D（Cmd + Shift + D）会删除当前文件中的所有 console.log
1. JavaScript (ES6) code snippets
   作用：该扩展包含 Vs 代码编辑器（支持 JavaScript 和 TypeScript）ES6 语法中的 JavaScript 代码片段。
   例如：clg + Tab 键（快速生成 console）
1. Path Intellisense：智能路径提示，可以在你输入文件路径时智能提示
1. css-auto-prefix：自动添加 CSS 私有前缀。（仅在 css 文件中生效）
1. Trailing Spaces：高亮那些冗余的空格，可以快速删掉。Vue 开发必备
1. CSS Peek：定位 CSS 类名。
1. Guides：显示代码对其辅助线，当前所在的级别缩进线会变红，当前在哪一级一目了然。

### 四、格式化插件（5 个）

1. Prettier：格式化插件。有的人可能会推荐 Beautify。我原来也是一直用这个，后来发现这个并不能格式化 React 的代码。所以果断换成 Prettier。
1. EsLint：语法纠错
1. vue-format：vue 格式化：格式化 vue 代码
1. stylelint：CSS / SCSS / Less 语法检查
1. vscode-json：处理 JSON 文件

### 五、Git 插件（4 个）

1. GitLens：详细的 Git 提交日志。
   Git 重度使用者必备，尤其是多人协作时：哪一行代码，何时、何人提交都有记录。
1. Git Graph：查看存储库的 Git 合并以及提交记录图表，并从图表执行 Git 操作。
1. Git History：查看 git 日志、文件历史、比较分支或提交。
   文件编辑页面右键，可以使用 Git：View File History 或者 Git：View Line History 来查看文件历史提交记录或者行代码历史提交记录

### 六、Vue 插件（6 个）

1. Vetur：VS Code 里面的 Vue 工具！由 Pine Wu 开发，已经累计 900 多万下载量！
   格式化 vue 代码快捷键（注意：会添加不必要的分号）

   ```
   // 格式化vue代码快捷键
   Shift + Alt + F
   不添加分号，则需要修改 首选项 - 设置 里面 setting.json，添加如下代码

   // 让vue中的js按编辑器自带的ts格式进行格式化
   "vetur.format.defaultFormatter.js": "vscode-typescript",
   // 其他配置
   "vetur.format.defaultFormatterOptions": {
       "prettier": {
           "semi": false, // 末尾添加分号
           "singleQuote": true // 使用单引号
       }
   },
   ```

1. EsLint：语法纠错
1. vue-format：Vue 格式化：格式化 Vue 代码
1. React.js code snippets：用 ES6 语法去开发 React.js 应用非常方便。

### 六、实用工具插件（9 个）

1. Trailing Spaces：高亮那些冗余的空格，可以快速删掉。Vue 开发必备
1. Time Master：时间管理插件：统计使用 VS Code 的时长，活跃时间，添加的代码行数，删除的代码行数等数据。
1. Markdown Preview：实时预览 markdown。
1. View In Browser（已弃用，停止维护）：在浏览器里预览网页必备，文件上右键浏览器打开。
1. open in browser：在浏览器里预览网页必备。代码编辑页面右键浏览器打开
1. Live Server：这个插件基本功能是预览网页，但它的特点是：会将网页在本地服务器上预览，最重要的是代码保存之后，浏览器自动刷新，有多方便不用我说了吧？
   使用方法：
   ```
   在 HTML 文件上右键
   打开 HTML 文件，点击编辑器右下角 Go Live 按钮
   ```
1. Turbo Console Log：快捷添加 console.log，一键 注释 / 启用 / 删除 所有 console.log。
   简单说下这个插件要用到的快捷键:
   ```
   ctrl + alt + l 选中变量之后，使用这个快捷键生成 console.log
   alt + shift + c 注释所有 console.log
   alt + shift + u 启用所有 console.log
   alt + shift + d 删除所有 console.log
   ```
1. Change Case：转换命名风格。（小驼峰法 - myName，下划线法 - my_name，短横线法 - my-name）
   扩展知识：大驼峰法 - MyName
1. HTML Boilerplate：虽然 VSCode 已经内置了一键生成 HTML 模板的快捷方式，但这个有另外的用处

IntelliSense for CSS class names in HTML

基于你的项目以及通过 link 标签引用的外部文件，该智能插件提供 HTML 中 CSS class 名字的补全。

1. SVG Viewer：一个用来预览 SVG 的插件。
1. TypeScript Hero（已弃用，停止维护）：辅助用 TypeScript 编程的童鞋！
1. koroFileHeader：自定义作者信息
   Ctrl + Win + I（Mac：Control + Command + I），添加 文件头 注释，大写的 i
   Ctrl + Win + T（Mac：Control + Command + T），添加 函数 注释
   配置：首选项-设置里面找到 Custom Made 在 setting.json 中写入如下配置（按需写入，如果只需要头部注释，只写头部即可）
   ```
   // 此为头部注释 （设置作者名，其他置空即可，会自动生成）
   "fileheader.customMade": {
       "Author": "Shu Binqi",
       "Date": "",
       "LastEditors": "Shu Binqi",
       "LastEditTime": "",
       "Description": "",
       "Version": "1.0.0",
       "FilePath": ""
   },
   // 此为函数注释 （设置作者名，其他置空即可，会自动生成）
   "fileheader.cursorMode": {
       "description":"",
       "param": "",
       "return": "",
       "author":"Shu Binqi"
   },
   // 默认配置信息
   "fileheader.configObj": {
       "autoAdd": true, // 默认开启自动添加头部注释，当文件没有设置头部注释时保存会自动添加
       "autoAlready": true, // 默认开启
       "prohibitAutoAdd": [
           "json",
           "md"
       ], // 禁止.json .md文件，自动添加头部注释
       "wideSame": false, // 设置为true开启
       "wideNum": 13 // 字段长度 默认为13
   }
   ```
1. Markdown Preview Enhanced：Markdown 类型文件快捷查看
   快捷键
   ```
   // Open preview 预览 快捷键
   Mac：Command + Shift + V
   Win：Ctrl + Shift + V
   ```

### 七、注释插件（3 个）

1. Better Comments：使注释有人性化的高亮显示。

### 九、首选项建议（setting）

setting.json 配置

参考的 setting.json 配置（部分配置需要安装插件使用）

```
{
  // ----- 系统配置 -----
  "workbench.iconTheme": "vscode-icons", // 主题图标配置
  "workbench.startupEditor": "none", // 不展示欢迎页面
  "workbench.editor.enablePreview": false, // 打开文件不覆盖
  "terminal.integrated.defaultProfile.windows": "Command Prompt", // 打开集成终端默认使用 CMD
  "search.followSymlinks": false, // 解决搜索进程占用过多问题
  // ----- 编辑器配置 -----
  "editor.tabSize": 2, // 按 tab 时使用两个空格
  "editor.fontSize": 14, // 默认字号
  "editor.lineHeight": 22, // 编辑器默认行高
  // "editor.hover.delay": 2000, // 悬浮提示信息延迟显示，毫秒
  "editor.wordWrap": "on", // 代码自动换行显示
  "editor.minimap.enabled": false, // 关闭快速预览(右侧预览框)
  "editor.defaultFormatter": "esbenp.prettier-vscode", // 编辑器格式化工具
  "files.autoSave": "onFocusChange", // 配置编辑页面失去焦点自动保存（afterDelay：编辑时自动保存，onWindowsChange：窗口失去焦点自动保存）
  "editor.formatOnSave": true, // 保存时自动格式化，和下面冲突导致格式化较慢
  // "editor.codeActionsOnSave": {
  //   "source.fixAll.eslint": true // 每次保存的时候将代码按eslint格式进行修复
  // },,
  // "editor.codeActionsOnSave": {},
  // ----- 格式化配置（安装 vetur、prettier 插件） -----
  "prettier.semi": false, // 去掉代码结尾的分号
  "prettier.singleQuote": true, // 使用单引号替代双引号
  "prettier.trailingComma": "none", // 不要尾随逗号
  "prettier.arrowParens": "avoid", // (x) => {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号
  "prettier.printWidth": 3000, // 超过最大值换行
  "vetur.ignoreProjectWarning": true, // 忽略vetur检测是否有jsconfig.json的提示
  "vetur.format.defaultFormatter.html": "js-beautify-html", // 更改 vue 的 html 格式，根据需求设置
  "vetur.format.defaultFormatterOptions": {
    "prettier": {
      "semi": false, // 去掉代码结尾的分号
      "singleQuote": true, // 使用单引号替代双引号
      "trailingComma": "none", // 不要尾随逗号
      "printWidth": 3000, // 超过最大值换行
      "stylelintIntegration": true, // 样式格式化
      "eslintIntegration": true // 使用eslint格式化
    },
    "vscode-typescript": {
      "semi": false,
      "singleQuote": true
    },
    // html 标签属性强制换行，默认为全部折行
    "js-beautify-html": {
      // "wrap_attributes": "auto" // 自适应折行
      // "wrap_attributes": "force-aligned" //属性强制折行对齐
    }
  },
  "vetur.completion.autoImport": true,
  "vetur.format.defaultFormatter.js": "vscode-typescript", // 让 vue 中的 js 按编辑器自带的 ts 格式进行格式化，会导致上面全部配置无法生效，先使用 prettier 进行格式化，再 Ctrl + S 保存
  "javascript.format.insertSpaceBeforeFunctionParenthesis": true, // 配合上面设置让方法名与括号间添加空格
  "vetur.format.defaultFormatter.ts": "vscode-typescript",
  "typescript.format.insertSpaceBeforeFunctionParenthesis": true,
  "eslint.validate": [
    "javascript",
    "typescript",
    "html",
    "javascriptreact",
    "vue"
  ], // 使用 eslint 规则格式化文件
  // ----- 头部注释配置 Ctrl + Win + I（Control + Command + I）（安装 koroFileHeader 插件） -----
  "fileheader.customMade": {
    "Author": "Shu Binqi",
    "Date": "",
    "LastEditors": "Shu Binqi",
    "LastEditTime": "",
    "Description": "",
    "Version": "1.0.0",
    "FilePath": ""
  },
  // ----- 注释插件默认配置 Ctrl + Win + T（Control + Command + T） -----
  "fileheader.configObj": {
    "autoAdd": false, // 默认开启自动添加头部注释，当文件没有设置头部注释时保存会自动添加
    "autoAlready": false, // 默认开启
    "prohibitAutoAdd": [
      "json",
      "md",
      "html"
    ], // 禁止给 .json .md .html 文件自动添加头部注释
    "wideSame": false // 设置为true开启
  },
  // ----- 文件格式化默认配置 -----
  "[json]": {
    "editor.defaultFormatter": "vscode.json-language-features"
  },
  "[jsonc]": {
    "editor.defaultFormatter": "vscode.json-language-features"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascript]": {
    "editor.defaultFormatter": "vscode.typescript-language-features"
  },
  "[scss]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[css]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[html]": {
    "editor.defaultFormatter": "vscode.html-language-features"
  },
  "[vue]": {
    "editor.defaultFormatter": "octref.vetur"
  },
  "settingsSync.ignoredExtensions": [], // 设置同步（暂时未用到）（安装 Setting Sync 插件）
  // ----- 智能路径感知（安装 Path Intellisense 插件） -----
  "typescript.suggest.paths": false,
  "javascript.suggest.paths": false
}
```
