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


### 枚举可用的脚本

一个方法是打开package.json文件并检查scripts部分。

1. cat package.json

2. 运行npm run得到一个的所有可用的脚本的列表。

3. 安装ntl (npm i -g ntl)，然后运行ntl在项目文件夹中。它也可以运行脚本，也很方面。


### 枚举已经安装的包

有时我们会问自己我们的项目中有哪些依赖项

npm ls --depth 0

枚举全局安装包，使用npm ls -g --depth 0


### 在其他脚本前后运行脚本

您可能熟悉诸如pretest之类的脚本，它允许您定义在test脚本之前运行的代码。


### 修改包的版本

你开发一个安装包，你使用semver作为版本管理工具，修改一个新版本。

通过这种方式，你需要手动的修改package.json文件，我们不推荐这样做。

更容易的方式是运行npm version 通过 major, minor 或者 patch
