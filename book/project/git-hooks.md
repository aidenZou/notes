# Git hooks

## 使用commitizen

在这项目中我们使用了Git 来作为版本控制器

使用npm 全局安装

`$ npm install -g commitizen`

在项目中使用 angular 的 commit 规范

`$ commitizen init cz-conventional-changelog --save-dev --save-exact`

然后我们就可以愉快的使用 `git cz` 代替 `git commit` 命令了。当然我们也可也将其加到 npm script 中

```json
"script": {
    "commit": "git cz"
}
```

然后直接使用 `npm run commit` 或者使用 `git cz`

## 使用ESLint

在开始使用ESLint之前，我们需要通过NPM来安装它：

```shell
$ npm install -g eslint
# 我们也可以将它安装到项目开发依赖中
$ npm install --save-dev eslint

$ eslint --init
```

## 使用Git hooks自动检查代码

[husky](https://www.npmjs.com/package/husky) 可以方便我使用Git hooks,我们用来配置在提交代码是检查代码
[lint-staged](https://github.com/okonet/lint-staged) 每次提交只检查本次提交所修改的文件

`$ npm install --save-dev lint-staged husky`

我们在package.json 稍做配置即可

```json
"scripts": {
    "precommit": "lint-staged"
},

// 配置husky 在提交代码时运行lint-staged
"husky": {
    "hooks": {
        "pre-commit": "lint-staged"
    }
},
// 配置lint-staged 只在检查本次提交的代码
"lint-staged": {
    "*.js": [
        "eslint --fix",
        "git add"
    ]
}
```

到此我们的这个项目配置的差不多了，也是一套比较流行的工作流。
