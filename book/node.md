## 环境

- [cnpm](https://cnpmjs.org/) 淘宝
- [rednpm](http://npm.mirror.cqupt.edu.cn/) 部署于 中国教育和科研计算机网 (CERNET) 重庆 - 重庆邮电大学节点

- [npm模块管理器](http://javascript.ruanyifeng.com/nodejs/npm.html)

- npm cache clear 可以清空NPM本地缓存，用于对付使用相同版本号发布新版本代码的人。

- http-server
- webpack
- gulp
- yo
- vue-cli
- antd-init
- express


## 教程

- [七天学会NodeJS](http://nqdeng.github.io/7-days-nodejs/)
- [Express](http://expressjs.com/)
- [koajs](https://github.com/koajs/koa)
- [ThinkJS](https://thinkjs.org/zh-cn/doc/index.html)


- [nodemon](https://github.com/remy/nodemon)
- [forever] forever是一个Node应用程序，用于一个子进程意外退出时，自动重启。
- [PM2](https://github.com/Unitech/pm2) 用PM2守护Node.js进程，PM2相比以前的Forever有更强大的进程管理功能。

- [log4js](https://github.com/nomiddlename/log4js-node)


## 文章

- [【译】Node.js 给前端带来了什么](https://www.h5jun.com/post/Node.js%20%E7%BB%99%E5%89%8D%E7%AB%AF%E5%B8%A6%E6%9D%A5%E4%BA%86%E4%BB%80%E4%B9%88.html)


## PM2常用命令

监控运行状态：
`pm2 status`

监控Node.js程序的运行日志
`pm2 logs`

检查内存占用情况和程序的运行状态：
`pm2 monit`

分别是启动|停止|重启 ghost程序:
`pm2 <start|stop|restart> ghost`

清除所有正在运行的PM2 Ghost进程:
`pm2 kill ghost`


让PM2知道在开机后自动运行我们的网站：
1.Ubuntu 系统：
pm2 startup ubuntu

2.CentOS 系统：

pm2 startup centos

保存设置（非常重要）
pm2 save



### 模块

- [cheerio](https://github.com/cheeriojs/cheerio)

### 模板

- [Nunjucks](https://github.com/mozilla/nunjucks)

