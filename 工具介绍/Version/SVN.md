<!--
 * @Author: Shu Binqi
 * @Date: 2023-02-24 21:10:13
 * @LastEditors: Shu Binqi
 * @LastEditTime: 2023-03-04 04:01:07
 * @Description: SVN 面试题（1题）
 * @Version: 1.0.0
 * @FilePath: \interviewQuestions\Tool\Version\SVN.md
-->

#### SVN 有什么优势？

SVN 是一款集中式版本控制系统，相比于 Git 有一些不同的优势和劣势。以下是 SVN 的优势：

1. **简单易用**：SVN 的最大优势之一是易用性。它的常规操作只有提交和更新，因此团队使用成本较低，很容易上手。此外，SVN 的版本号严格递增，可以很容易地进行版本比较。
2. **集中管理**：SVN 采用集中式管理，客户端只需要同步提交即可，操作简单，很容易上手。在服务端统一控制好访问权限，利用代码的安全管理。所有的代码以服务端为准，代码一致性高。
3. **对二进制文件的处理**：SVN 在处理二进制文件方面有优势。它支持 Lock-Modify-Unlock 模型，可以使用 lock 命令（svn:needs-lock 属性）实现独占文件锁定，因此对于代码库中具有多个不可合并二进制资产的企业项目，这是一个真正的交易破坏者，通常也是他们选择坚持使用 SVN 的原因。
4. **容易回退**：SVN 可以帮你记住每个人每次的修改记录，随时查看历史记录、内容，并且能随时回到某个历史版本，同步代码修改的代码。
5. **分支管理**：SVN 的分支是一个完整的目录，且这个目录拥有完整的实际文件，这些操作都是在服务端进行同步的，不是本地化操作。如果要删除分支，也是需要将远程的分支进行删除，这会导致大家都得同步。
6. **易用性**：SVN 相对于 Git 易用性更好，简单易上手，对新手很友好。

#### SVN 常用命令？

1. 下载一个 SVN 项目和它的整个代码历史，并初始化为 Git 代码库：`$ git svn clone -s [repository]`
1. 查看当前版本库情况：`$ git svn info`
1. 取回远程仓库所有分支的变化：`$ git svn fetch`
1. 取回远程仓库当前分支的变化，并与本地分支变基合并：`$ git svn rebase`
1. 上传当前分支的本地仓库到远程仓库：`$ git svn dcommit`
1. 拉取新分支，并提交到远程仓库：`$ svn copy [remote_branch] [new_remote_branch] -m [message]`
1. 创建远程分支对应的本地分支：`$ git checkout -b [local_branch] [remote_branch]`
