```bash
# git operation
# 工作代码托管平台 gerrit

git status 
# 查看当前Repo文件修改状态 

git pull -r
#从远程分支拉取代码并更新本地代码库

git add .
# 把当前修改放到缓存区

git commit
#确认当前修改

git commit --amend
#继续修改当前commit

git push origin master
#以github为例，提交到远程分支

git diff
#查看当前修改详情

git checkout [filename|xxx*]
#清除当前修改

git checkout [branchName]
#切换本地分支

git reset HEAD^
#重置最新的commit，恢复到修改后的状态

git checkout -b [localBranchName] [remoteBranchName]
#新建本地分支并映射到远程分支

git branch -D [localBranchName0] [localBranchName1
#删除本地分支，支持批量删除


git checkout -b [newLocalBranchName]
#新建一个本地分支, 无远程映射

git push origin [existedLocalBranchName]:[existedLocalBranchName]
#新建一个远程分支, 分支名称和本地一致

git push origin :[remoteBranchName]
#删除远程分支

git push origin --delete [remoteBranchName]
#删除远程分支

git merge [anotherLocalBranch]
#将另一个本地分支合并到当前分支, 出现冲突则先解决冲突. 
#如远程分支test123 需要合并到 master主分支, 本地切换到 test123, 将本地master(最新) 合并到 test123, push 到远程(远程test123至最新), 后切换到本地master, merge 本地 test123


git rm -r --cached .
git add .
git commit -m ".gitignore is now working"
#.gitignore 不生效? 路径 + 文件名都没问题 -> git 的机制是如果对已经commit的文件再配置 gitignore, 那么ignore不会生效, 具体参考 
https://stackoverflow.com/questions/25436312/gitignore-not-working


To untrack a single file that has already been added/initialized to your repository, i.e., stop tracking the file but not delete it from your system use: git rm --cached filename
​

// git ignore 为什么不生效
#### 待补充
git cherrypick ......
```

