git status 查看 仓库状态

新手要随时用这个命令观察仓库中的文件状态


…or create a new repository on the command line
echo "# study" >> README.mdgit initgit add README.mdgit commit -m "first commit"git remote add origin https://github.com/macheng2017/study.gitgit push -u origin master
…or push an existing repository from the command line
git remote add origin https://github.com/macheng2017/study.gitgit push -u origin master
…or import code from another repository
You can initialize this repository with code from a Subversion, Mercurial, or TFS project.
Import code

使用git status 之后的状态
$ git status
On branch master
Your branch is up-to-date with 'origin/master'.
Untracked files:
  (use "git add <file>..." to include in what will be committed)
        README.md
nothing added to commit but untracked files present (use "git add" to track)




## git add ---向暂存区中添加文件 
先来看幅图 暂存区就是图中,中间这个部分(index) 












想要看懂上面那种图,你首先需要知道gitHub 的 示意图 GitHub其实是一个分散型 仓库 

git commit—— 保 存 仓 库 的 历 史 记 录

git commit -m 加上 -m 参数是指 first commit 快捷提交,
    如果想详细记录提交 的信息 则不加 -m




git log  查看提交日志操作


git diff 查看更改前后的差别






git branch—— 显 示 分 支 一 览 表


*号代表当前所处的分支

git checkout -b—— 创 建、 切 换 分 支

git branch



git checkout - 切回上一个分支





master 保持稳定分支,feature 是特性分支,(新主题,新功能),新功能开发完毕后再与主分支master合并
在新功能分支feature 发现bug 需要在feature基础上创建新的分支,并修改错误.


git merge ---合并分支


git merge --no-ff feature-A  合并feature-A分支到master 加上--no-ff 参数在历史记录中明确记录本次合并分支

其余参数

vm常用命令
git log --graph  以图表形式查看分支


git reset 回溯历史版本 


 



git reflog 找出回溯历史

git log 命 令 只 能 查 看 以 当 前 状 态 为 终 点 的 历 史 日 志。 所 以
需要用到 git reflog 

git reflog 命 令， 查 看 当 前 仓 库 的 操 作 日 志。 在 日 志 中 找 出 回 溯 历 史 之 前 的 哈 希 值， 通 过 git reset --hard 命 令 恢 复 到 回 溯 历 史 前 的 状 态。



在 日 志 中， 我 们 可 以 看 到 commit、 checkout、 reset、 merge 等 Git 命 令 的 执 行 记 录。 只 要 不 进 行 Git 的 GC（ Garbage Collection， 垃 圾 回 收）， 就 可 以 通 过 日 志 随 意 调 取 近 期 的 历 史 状 态， 就 像 给 时 间 机 器 指 定 一 个 时 间 点， 在 过 去 未 来 中 自 由 穿 梭 一 般。 即 便 开 发 者 错 误 执 行 了 Git 操 作， 基 本 也 都 可 以 利 用 git reflog 命 令 恢 复 到 原 先 的 状 态， 所 以 请 各 位 读 者 务 必 牢 记 本 部 分。



恢复历史后 冲突


修复冲突

git commit --amend—— 修 改 提 交 信 息




git rebase -i—— 压 缩 历 史

当出现修改错误的时候,并且已经提交,修改拼写错误当然不可能作为一种,有意义的提交,可以使用压缩


提交的时候故意写错


更改历史


git remote add 添加远程仓库


	1. 在本地电脑上已经有了一个仓库
	2. 在gitHub 创建一个同名的 仓库
	3. 使用git remote add 将本地电脑 仓库上传(映射)到远程,或者这样说将它设置成本地库的远程库



git push 推送至远程仓库

git push -u origin master  -u 参数可以在推送的同时,将 origin仓库的master分支设置为本地仓库当前分值的上游(upstream)


创建新的分支 feature-D 将它push给远程仓库并保持分支名称不变.















