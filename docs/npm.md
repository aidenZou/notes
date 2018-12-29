# npm技巧

https://docs.npmjs.com/misc/config#shorthands-and-other-cli-niceties

## 基本的速记

安装安装包

常规: npm install pkg, 速记: npm i pkg.

全局安装包:

常规: npm i --global pkg, 速记: npm i -g pkg.

安装包并包含在依赖中:

常规: npm i --save pkg, 速记: npm i -S pkg.

安装包并包含在开发依赖中:

常规: npm i --save-dev pkg, 速记: npm i -D pkg.

npm博客 速记表


## 其它

### 初始化一个新包

npm init

使用npm init -y 和 npm init -f回到初始化！


### 运行测试命令

npm test

npm t


## 管理你的模块

### 枚举可用的脚本

一个方法是打开package.json文件并检查scripts部分。

1. cat package.json

2. 运行npm run得到一个的所有可用的脚本的列表。

3. 安装ntl (npm i -g ntl)，然后运行ntl在项目文件夹中。它也可以运行脚本，也很方面。


### 枚举已经安装的包

有时我们会问自己我们的项目中有哪些依赖项

npm list

> (ls、la & ll 可以用作 list 的别名)

该命令会显示所有模块：(安装的)模块，子模块以及子模块的子模块等。可以限制输出的模块层级：

npm ls --depth=0

枚举全局安装包，使用 npm ls --depth 0 -g


npm list 会显示和你已经安装地模块的关联模块---这些没有在 package.json文件中被引用。你可以单独 npm uninstall 每一个模块或者全部移除它们：

npm prune

如果安装模块时你添加了 --production 标记或者 NODE_ENV 被设置成 production，package.json 文件中被指定为 devDependencies 的模块也会被移除。


### 锁定依赖

默认情况下，当用 --save/-S 或者 --save-dev/-D 安装一个模块时，npm 通过脱字符(^)来限定所安装模块的主版本号。例如，当运行 npm update 时， ^1.5.1 允许安装版本号大于 1.5.1 但小于 2.0.0 版本的模块。

波浪号(~)字符是限定模块的次要版本。例如，当运行 npm update 时， ~1.5.1 允许安装版本号大于 1.5.1 但小于 1.6.0 版本的模块。可以将需要安装的模块版本前缀默认设置成波浪号(~):

npm config set save-prefix="~"
对于那些偏执的认为任何更新(模块的行为)会破坏系统的人，可以配置npm仅安装精确版本号的模块：

npm config set save-exact true


### 找出过时的模块

npm outdated
或者 npm outdated -g 来查找全局模块。

你也可以查看一个独立模块的当前版本：

npm list <package>
也可以查看检验当前和历史版本：

npm view <package> versions
npm view <package> 会显示一个独立模块的所有信息，包括它的依赖、关键字、更新日期、贡献者、仓库地址和许可证等。

或

npm i npm-check -g -g
npm-check
npm-check -g


### 查看模块

npm view <package>

会显示一个独立模块的所有信息，包括它的依赖、关键字、更新日期、贡献者、仓库地址和许可证等。


### 使用开发中的模块

当你正在开发一个模块时，会经常想在其它项目中尝试使用或者在任何一个目录运行它(如果你的应用支持)，这时没必要将其发布到 npm，并全局安装---仅需在该模块所在目录使用下面的命令：

npn link
该命令会为模块在全局目录下创建一个符号链接。可以通过下面的命令查看模块引用：

npm list -g --depth=0
或者：

npm outdated -g
现在，就可以从命令行运行模块或者通过 require 在任何项目中引入该模块。

另一个选择是，可以通过文件路径在 package.json 文件中声明对该模块的依赖：

"dependencies": {
  "myproject": "file:../myproject/"
}



### 在其他脚本前后运行脚本

您可能熟悉诸如pretest之类的脚本，它允许您定义在test脚本之前运行的代码。


### 修改包的版本

你开发一个安装包，你使用semver作为版本管理工具，修改一个新版本。

通过这种方式，你需要手动的修改package.json文件，我们不推荐这样做。

更容易的方式是运行npm version 通过 major, minor 或者 patch


### 打开一个模块的主页

> 这只有在你的系统能打开浏览器时有用--在服务端的系统上会失败

npm home <package>

### 打开一个模块的 Github 仓库

npm repo <package>

### 或者它的文档

npm docs <package>

### 或者它目前的bugs列表

npm bugs <package>
