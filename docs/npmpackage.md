# npm package

[每天阅读一个 npm 模块](https://github.com/parro-it/awesome-micro-npm-packages)

## utils

- [throttle-debounce](https://github.com/niksy/throttle-debounce) throttle: 节流; debounce: 防抖动
- [decimal.js-light](https://www.npmjs.com/package/decimal.js-light)

### 工程、构建

- [amfe-flexible](https://www.npmjs.com/package/amfe-flexible) 可伸缩布局方案
- [inline-source](https://www.npmjs.com/package/inline-source)

### 版本

- [node-semver](https://github.com/npm/node-semver)

### 模块

- [Commitizen](https://www.npmjs.com/package/commitizen) 一个撰写合格 Commit message 的工具
- [crypto-js](https://www.npmjs.com/package/crypto-js) 加密
- [protobuf.js](https://github.com/dcodeIO/protobuf.js) 用于 JavaScript 的协议缓冲区

- [PhantomJS](https://github.com/ariya/phantomjs)

#### CLI

- [commander](https://github.com/tj/commander.js)
- [yargs](https://github.com/yargs/yargs)
- [inquirer](https://github.com/SBoudrias/Inquirer.js) 一组通用的交互式命令行用户界面。input, confirm, list, rawlist, expand, checkbox, password, editor
- [yargs-parser](https://www.npmjs.com/package/yargs-parser)

- [username](https://www.npmjs.com/package/username) 获取当前用户的用户名

- [standard-version](https://github.com/conventional-changelog/standard-version)

### script

- `npm run watch-js & npm run watch-css` 同时运行多个命令
- [concurrently](https://www.npmjs.com/package/concurrently) 同时运行多个命令
  - `concurrently "npm:watch-js" "npm:watch-css" "npm:watch-node"`

#### 性能

- [fast-json-stringify](https://www.npmjs.com/package/fast-json-stringify)
- [msgpack](https://www.npmjs.com/package/msgpack)

## 构建

- cross-env 设置 node 环境变量
- child_process
- execa

lint-staged
pre-commit

app-root-path

[vm2](https://github.com/patriksimek/vm2)

## 其它

```javascript
//从仓库下载并提取git存储库（GitHub，GitLab，Bitbucket）。
var download = require("download-git-repo");
//主要用于创建子命令和切割命令行参数并执行
var program = require("commander");
//检查文件是否存在
var exists = require("fs").existsSync;
//路径模块提供用于处理文件和目录路径的实用程序。 比如路径分割，文件路径格式化，json格式化等
var path = require("path");
//漂亮的loding
var ora = require("ora");
//获取用户主目录的路径
var home = require("user-home");
//绝对路径转换为相对路径
var tildify = require("tildify");
//美化
var chalk = require("chalk");
//常用的交互式命令行用户界面的集合。表现是控制台输出提问
var inquirer = require("inquirer");
var rm = require("rimraf").sync;
```

"dependencies": {
"async": "^2.5.0",
"chalk": "^1.1.3",
"commander": "^2.9.0",
"inquirer": "^3.0.6",
"is": "^3.2.1",
"multimatch": "^2.1.0",
"ora": "^1.3.0",
"phpdate-js": "^1.0.2",
"request": "^2.81.0",
"scp2": "^0.5.0",
"semver": "^5.4.1",
"simple-git": "^1.77.0",
"ssh2shell": "^1.7.0",
"tar-fs": "^1.15.3"
},
"devDependencies": {
"chai": "^4.1.2",
"jquery": "^3.1.1",
"mocha": "^4.0.1",
"webpack": "^2.2.1"
}

"peerDependencies": {
"firebase": "^3.1.0",
"immutable": "^3.7.6",
"lodash": "^4.13.1",
"react": "^0.14.6 || ^15.0.0 || ^16.0.0",
"react-redux": "^4.0.6 || ^5.0.0",
"prop-types": "^15.6.0",
"redux": "^3.0.5"
}
