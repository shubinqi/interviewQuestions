<!--
 * @Author: Shu Binqi
 * @Date: 2023-02-24 21:10:06
 * @LastEditors: Shu Binqi
 * @LastEditTime: 2023-03-10 18:41:00
 * @Description: Git 面试题（11题）
 * @Version: 1.0.0
 * @FilePath: \interviewQuestions\Tool\Version\Git.md
-->

#### Git 和 SVN 有什么区别？

Git 和 SVN 都是版本控制系统，但它们之间有几个区别：

1. **分布式 vs 集中式**：Git 是分布式版本控制系统，每个开发人员都可以将代码库完全克隆到本地，并在本地存储完整的代码历史记录。这使得在没有网络连接的情况下可以进行大部分开发工作。相反，SVN 是集中式版本控制系统，代码库位于中央服务器上，开发人员从服务器上检出代码，对其进行更改，然后将更改提交回服务器。
1. **分支管理**：Git 是非常擅长分支管理的工具。Git 支持轻量级分支，开发人员可以轻松地从主分支中创建、合并和删除分支。SVN 也支持分支管理，但它的分支模型比 Git 的复杂得多。
1. **版本号**：Git 使用 SHA-1 哈希值来标识每个提交，并且这些哈希值是唯一的。每个提交都有一个单独的 SHA-1 哈希值，以便在代码库中进行引用。SVN 使用递增的版本号来标识每个提交，版本号是整数。
1. **性能**：Git 的性能比 SVN 要好，因为开发人员可以在本地存储完整的代码历史记录，可以快速地进行提交、分支和合并操作。
1. **处理二进制文件**：Git 比 SVN 更擅长处理二进制文件，因为 Git 将二进制文件作为一组更改处理，而不是将整个文件视为单个更改。这意味着 Git 在处理大型二进制文件（例如图像和视频）时要快得多。

总的来说，Git 和 SVN 都是优秀的版本控制系统，但是 Git 的分布式模型、分支管理和性能方面要优于 SVN。

#### 介绍一下 Git 常用命令？

Git 是一种分布式版本控制工具，是管理代码的重要工具之一。下面是 Git 的常用命令：

```
git init：初始化一个新的Git仓库。
git clone：克隆一个远程Git仓库到本地。
git add：将文件添加到Git暂存区。
git commit：提交代码到Git本地仓库。
git push：将本地Git仓库的代码推送到远程仓库。
git pull：从远程Git仓库拉取最新代码到本地。
git branch：列出所有分支，或创建、删除分支。
git checkout：切换分支或恢复文件到上一个提交版本。
git merge：合并不同分支的代码。
git status：查看Git仓库当前状态，即工作区、暂存区和本地仓库的状态。
git log：查看提交记录和提交信息。
git reset：将文件恢复到上一个提交版本。
```

此外，还有一些常用的 Git 命令：

```
git config：配置Git相关信息，如用户名和邮箱地址。
git diff：查看更新的详细信息命令。
git reset HEAD：取消缓存命令。
git rm：删除命令。
git mv：移动或重命名命令。
```

下面对一些常用命令进行详细介绍：

git config：通过该命令配置用户名和邮箱地址，便于将代码提交到远程仓库。

```
git config --global user.name '你的用户名'
git config --global user.email '你的邮箱'
```

git add：将文件添加到 Git 暂存区。

```
# 把指定的文件添加到暂存区中
$ git add <文件路径>
# 添加所有修改、已删除的文件到暂存区中
$ git add -u [<文件路径>]
$ git add --update [<文件路径>]
# 添加所有修改、已删除、新增的文件到暂存区中，省略 <文件路径> 即为当前目录
$ git add -A [<文件路径>]
$ git add --all [<文件路径>]
# 查看所有修改、已删除但没有提交的文件，进入一个子命令系统
$ git add -i [<文件路径>]
$ git add --interactive [<文件路径>]
```

git commit：提交代码到 Git 本地仓库。

```
# 把暂存区中的文件提交到本地仓库，调用文本编辑器输入该次提交的描述信息
$ git commit
# 把暂存区中的文件提交到本地仓库中并添加描述信息
$ git commit -m "<提交的描述信息>"
# 把所有修改、已删除的文件提交到本地仓库中
# 不包括未被版本库跟踪的文件，等同于先调用了 "
```

#### 你们是怎么进行分支管理的？

在分支管理中，Git 是一种非常流行的工具。GitFlow 是其中一种比较流行的分支管理模型，它的主要理念包括两个主干分支（Master 和 Develop），一个发布分支（Release），若干个开发分支（Feature），以及 HotFix 分支。下面是一些常见的 Git 命令和操作，可以帮助我们更好地理解和掌握 Git 的分支管理功能：

1. **git branch**(branchname)：创建一个新分支，比如 git branch dev 就是在当前位置创建一个指针，名为 dev，然后将 HEAD 指向 dev。
1. **git checkout**(branchname)：切换到指定的分支，比如 git checkout dev 就是切换到 dev 分支。
1. **git merge**：将指定分支的代码合并到当前分支，比如 git merge dev 就是将 dev 分支的代码合并到当前分支。
1. **git branch -d**(branchname)：删除指定的分支，比如 git branch -d dev 就是删除 dev 分支。
1. **git checkout -b**(branchname)：创建一个新分支并立即切换到该分支下，比如 git checkout -b newdev 就是创建一个名为 newdev 的新分支，并切换到该分支下进行操作。

- 在实际开发中，通常会存在两条主分支：master 和 develop 分支。其中，master 分支用于存储正式发布的历史，develop 分支则作为功能的集成分支。在开发新功能时，可以从 develop 分支创建新的 feature 分支，并在该分支下进行开发。开发完成后，将 feature 分支合并到 develop 分支上。在发布新版本时，可以从 develop 分支创建新的 release 分支，并在该分支下进行测试和 bug 修复。修复完毕后，将 release 分支合并到 master 分支和 develop 分支上。如果在发布后发现了紧急 bug，可以从 master 分支创建新的 hotfix 分支，并在该分支下进行 bug 修复。修复完毕后，将 hotfix 分支合并到 master 分支和 develop 分支上。

虽然 GitFlow 是一种非常全面的分支管理模型，但在实践中仍然存在一些问题。例如，由于每个开发人员都在自己的 feature 分支上进行开发，长期的 feature 分支可能会导致严重的合并冲突问题，需要花费大量的时间解决。因此，在使用 Git 进行分支管理时，需要根据项目实际情况选择适合自己的分支管理模型，并灵活运用 Git 提供的各种命令和操作。

#### 如何解决代码冲突？

代码冲突通常在团队开发中出现，当多个人对同一个文件进行编辑并提交到 Git 仓库时，就可能会出现代码冲突。在这种情况下，需要解决代码冲突，保留有效的代码，并提交最终的代码。以下是解决代码冲突的方法：

1. 手动解决冲突

- 删除代码中矛盾的代码，然后上传或者下拉 git pull 或 git push 时出现 MERGING，说明代码合并冲突。

打开冲突文件，一般情况下冲突后的文件会是：

```
<<<<<<<<<HEAD
//你的代码
=========
//别人的代码
>>>>>>>>>your branch name
```

解决代码冲突时，尽量把所有不同的代码保留，共同的代码只留一份。

- 解决代码冲突之后，重新 add 和 commit 最后 push。

2. 找回 git pull 之前的本地代码

- 输入 git reflog 查看你本地提交记录，找到最新一次提交的版本号，然后 git reset --hard HEAD@{版本号} 回退到操作前的本地代码。

3. 使用工具解决

- 使用工具对比不同分支代码的差异化，把不同分支中有效代码进行保留，并合并成最终代码。
- 提交合并后的最终代码。

在解决代码冲突时，需要注意以下几点：

- 解决代码冲突时，尽量保留所有不同的代码，共同的代码只留一份。
- 如果多个人对同一个文件进行编辑，就需要协调好编辑的时间和位置，避免代码冲突的发生。
- 可以使用分支来避免代码冲突的发生。在分支上进行开发，开发完成后再合并到主分支上。

解决代码冲突的命令如下：

- **git merge**：将多个分支合并到当前分支。
- **git pull**：将远程仓库的代码拉取到本地，并合并到当前分支。
- **git rebase**：将当前分支的提交移到目标分支的顶端，并合并到目标分支。
- **git cherry-pick**：将指定的提交复制到当前分支。

在使用这些命令时，可能会出现代码冲突，需要手动解决。解决冲突后，需要重新提交代码。如果使用了 git rebase 命令，并且出现了冲突，需要使用 git rebase --continue 命令继续合并过程。

总之，解决代码冲突需要仔细分析冲突的原因，保留有效的代码，避免代码冲突的发生。

#### 为什么会产生冲突？

代码冲突是 Git 中常见的问题，它通常出现在多个开发者同时修改同一个文件的同一行代码时。这种情况下，Git 无法判断应该使用哪个版本的代码，因此会提示产生了冲突，需要手动解决。以下是可能导致代码冲突的原因：

- 多个开发者同时修改同一个文件的同一行代码。
- 合并分支时，两个分支都修改了同一个文件的同一行代码。
- 合并分支时，一个分支删除了一个文件，而另一个分支修改了该文件。

解决代码冲突的方法包括：

- 在合并分支前，先将本地代码提交并推送到远程仓库。
  在合并分支时，使用 git merge 命令，并解决出现的冲突。
- 在解决冲突时，可以手动编辑冲突文件，或者使用合并工具（如 Beyond Compare 等）来解决冲突。
  在解决冲突后，使用 git add 命令将修改后的文件添加到暂存区，然后使用 git commit 命令提交修改。

以下是一些可能导致代码冲突的情况和解决方法：

1. 如果两个开发者同时修改了同一个文件的同一行代码，Git 会提示产生了冲突，需要手动解决。解决方法是打开冲突文件，手动选择要保留的代码，然后使用 git add 和 git commit 命令提交修改。
1. 如果合并分支时两个分支都修改了同一个文件的同一行代码，Git 会提示产生了冲突，需要手动解决。解决方法是打开冲突文件，手动选择要保留的代码，然后使用 git add 和 git commit 命令提交修改。如果两个分支修改的代码不冲突，可以使用 git merge 命令合并分支，Git 会自动解决冲突。
1. 如果一个分支删除了一个文件，而另一个分支修改了该文件，Git 会提示产生了冲突，需要手动解决。解决方法是打开冲突文件，手动选择要保留的代码，然后使用 git add 和 git commit 命令提交修改。

在解决代码冲突时，需要注意以下几点：

1. 不要直接使用 git push 命令将修改推送到远程仓库，因为这样会覆盖其他开发者的修改。应该先使用 git pull 命令将远程仓库的修改拉取到本地，然后再解决冲突并推送修改。
   - 在解决冲突时，应该仔细检查代码，确保修改后的代码没有错误。

#### 如果本次提交失误，如何撤销？

如果本次提交出现失误，可以使用 Git 的撤销机制进行撤销。具体操作方式如下：

撤销已暂存的文件

如果文件已经被 git add 添加到暂存区，可以使用 git reset HEAD <file> 命令将文件从暂存区撤销到工作区。

撤销已提交的文件

如果文件已经被 git commit 提交到本地仓库，可以使用以下命令进行撤销：

1. 撤销本次提交：git reset --soft HEAD^
1. 撤销本次提交并将文件撤销到工作区：git reset HEAD^
1. 彻底撤销本次提交并删除提交的文件：git reset --hard HEAD^

需要注意的是，以上操作都需要慎重使用，因为撤销操作会导致文件的版本历史被修改，如果修改不当可能会造成不可逆的损失。

#### 怎么更改某次 commit 信息？

如果要更改某次 commit 的信息，可以使用 git commit --amend 命令。该命令默认修改最近一条记录。

具体步骤如下：

1. 首先使用 git log 命令查看需要更改信息的 commit 的 SHA-1 值；
1. 使用 git rebase -i HEAD~n 命令进入交互式的 rebase 模式，n 表示需要更改信息的 commit 之前的几个 commit；
1. 将需要更改信息的 commit 前面的单词 pick 改为 edit；
1. 使用 git commit --amend 命令修改 commit 的信息；
1. 使用 git rebase --continue 命令完成操作。

需要注意的是，如果该 commit 已经被推送到远程仓库，那么更改信息后需要使用 git push --force 命令来强制推送更改后的 commit。

#### git fetch、git merge、git pull 的区别？

git fetch、git merge、git pull 是 Git 中常用的三个命令，它们之间的主要区别如下：

1. **git fetch**：从远程仓库下载最新的提交到本地，但不会将代码合并到本地代码。通常需要与其他 Git 命令（如 git diff）结合使用，以查看远程分支与本地分支之间的差异。
1. **git merge**：将本地代码与远程分支合并。通常需要先使用 git fetch 将远程分支的最新代码更新到本地，然后使用 git merge 将代码合并到本地代码。
1. **git pull**：相当于 git fetch 和 git merge 的组合操作，它会将远程仓库的代码更新到本地并自动合并代码。

总的来说，git fetch 只是下载最新代码到本地，不会自动合并，而 git merge 和 git pull 则会将代码合并到本地代码。在协作开发中，建议使用 git fetch 和 git merge 分开使用，以便在合并代码前查看远程分支与本地分支之间的差异。

#### Git 报错： Failed to connect to github.com port 443 解决方案？

两种情况：

1. 第一种情况自己有 VPN，网页可以打开 github。说明命令行在拉取/推送代码时并没有使用 VPN 进行代理。
2. 第二种情况没有 VPN，这时可以去某些网站上找一些代理 ip + port。

解决办法：配置 http 代理 Windows、Linux、Mac OS 中 git 命令相同：

配置 socks5 代理

```
git config --global http.proxy socks5 127.0.0.1:7890
git config --global https.proxy socks5 127.0.0.1:7890
```

配置 http 代理

```
git config --global http.proxy 127.0.0.1:7890
git config --global https.proxy 127.0.0.1:7890
```

注意：

命令中的主机号（127.0.0.1）是使用的代理的主机号（自己电脑有 vpn 那么本机可看做访问 github 的代理主机），即填入 127.0.0.1 即可，否则填入代理主机 ip（就是网上找的那个 ip）。

命令中的端口号（7890）为代理软件（代理软件不显示端口的话，就去 Windows 中的代理服务器设置中查看）或代理主机的监听 IP，可以从代理服务器配置中获得，否则填入网上找的那个端口 port。

查看代理命令

```
git config --global --get http.proxy
git config --global --get https.proxy
```

取消代理命令

```
git config --global --unset http.proxy
git config --global --unset https.proxy
```

#### Git 报错：Failed to connect to 127.0.0.1 port 7890 after 2070 ms: Couldn't connect to？

查看是否有代理：

```
git config --global http.proxy
```

取消代理：

```
git config --global --unset http.proxy
```

#### github 怎么删除项目？

要删除 GitHub 上的项目，请按照以下步骤进行操作：

1. 首先进入您的 GitHub 仓库页面。
1. 在您要删除的仓库页面中，找到仓库名称下方的菜单栏，点击“Settings”（设置）选项。
1. 滚动页面直到您看到“Danger Zone”（危险区域）部分。
1. 在“Danger Zone”部分中，找到“Delete this repository”（删除此仓库）选项，点击。
1. 输入您要删除的仓库名称以确认您的选择，并且点击“I understand the consequences, delete this repository”（我明白后果，删除此仓库）。
1. 输入您的 GitHub 密码以确认删除操作。
1. 点击“Verify”（验证）按钮。

此时，您的 GitHub 仓库已经被成功删除。注意，一旦删除，您将无法恢复该仓库及其所有内容，请谨慎操作。
