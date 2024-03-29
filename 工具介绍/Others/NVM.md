<!--
 * @Author: Shu Binqi
 * @Date: 2023-03-01 12:28:57
 * @LastEditors: Shu Binqi
 * @LastEditTime: 2023-03-20 20:06:53
 * @Description: NVM（2题）
 * @Version: 1.0.0
 * @FilePath: \interviewQuestions\Tool\Others\NVM.md
-->

### NVM 使用教程

#### NVM 是什么？怎么使用？

NVM（Node Version Manager）是一个 Node.js 版本管理器，可以帮助用户在同一台计算机上同时安装和切换多个 Node.js 版本。使用 NVM，用户可以轻松地在不同的 Node.js 版本之间切换，方便开发和测试。

下面是使用 NVM 的一些基本操作：

1. **安装 NVM**：首先需要在计算机上安装 NVM。可以通过 NVM 的官方网站或者 Github 仓库下载 NVM，并根据文档中的说明进行安装。
1. **安装 Node.js**：安装完成 NVM 后，可以通过命令行安装不同版本的 Node.js。例如，可以使用命令 "nvm install <version>" 来安装指定版本的 Node.js，例如 "nvm install 14.16.1"。
1. **切换 Node.js 版本**：安装完成 Node.js 后，可以使用命令 "nvm use <version>" 来切换不同版本的 Node.js。例如，可以使用命令 "nvm use 14.16.1" 来切换到版本为 14.16.1 的 Node.js。
1. **管理 Node.js 版本**：除了安装和切换 Node.js 版本外，NVM 还提供了其他的一些管理命令。例如，可以使用命令 "nvm list" 来列出当前已经安装的 Node.js 版本，使用命令 "nvm alias" 来设置默认的 Node.js 版本等等。

需要注意的是，在使用 NVM 时，需要将 NVM 的路径添加到系统环境变量中。同时，由于 NVM 使用的是符号链接来管理 Node.js 版本，因此在使用 Node.js 相关命令时，需要保证符号链接的正确性。

#### 安装 NVM

```
# 安装完查看版本
nvm version

```

#### 安装 node 前配置一下镜像地址

C:\Users\XXX\AppData\Roaming\nvm\setting.txt

把以下两行代码添加到上述路径文件中，XXX 是您的电脑用户名。

```
node_mirror: https://npm.taobao.org/mirrors/node/
npm_mirror: https://npm.taobao.org/mirrors/npm/
```

或者使用命令行配置

```
nvm node_mirror https://npm.taobao.org/mirrors/node/
nvm npm_mirror https://npm.taobao.org/mirrors/npm/
```

#### 使用 NVM

1. 查看可安装的版本

```
nvm ls available
```

2. 安装方式 nvm install 版本号

```
# current：当前最新的版本
# LTS：稳定版本

# 以下是三个稳定版本
nvm install 18.15.0
nvm install 16.9.1
nvm install 14.17.0
```

3. 启用、切换指定 NodeJS 版本

```
# 临时版本 - 只在当前命令窗口生效指定版本
nvm use 18.15.0

# 永久版本 - 所有命令窗口生效指定版本
nvm alias default 16.9.1
```

4. 删除指定 NodeJS 版本

```
# 删除某个版本
nvm uninstall 16.9.1
```

5. 查看已安装版本

```
# 显示当前版本
nvm current

# 列出安装好的所有版本
nvm list
```
