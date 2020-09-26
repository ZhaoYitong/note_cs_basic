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

#### 待补充
git cherrypick ......
```

