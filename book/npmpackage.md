# npm package

```
//从仓库下载并提取git存储库（GitHub，GitLab，Bitbucket）。
var download = require('download-git-repo')
//主要用于创建子命令和切割命令行参数并执行
var program = require('commander')
//检查文件是否存在
var exists = require('fs').existsSync
//路径模块提供用于处理文件和目录路径的实用程序。 比如路径分割，文件路径格式化，json格式化等
var path = require('path')
//漂亮的loding
var ora = require('ora')
//获取用户主目录的路径
var home = require('user-home')
//绝对路径转换为相对路径
var tildify = require('tildify')
//美化
var chalk = require('chalk')
//常用的交互式命令行用户界面的集合。表现是控制台输出提问
var inquirer = require('inquirer')
var rm = require('rimraf').sync
```


### 构建


- cross-env 设置 node环境变量
- child_process
- execa

lint-staged
pre-commit

app-root-path


### 模块

- [Commitizen](https://www.npmjs.com/package/commitizen) 一个撰写合格 Commit message 的工具
- [crypto-js ](https://www.npmjs.com/package/crypto-js) 加密


### 其它

- [js2flowchart](https://github.com/Bogdan-Lyashenko/js-code-to-svg-flowchart) 一个将任何JavaScript代码转换成漂亮的SVG流程图的可视化库
