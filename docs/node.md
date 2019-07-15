# Node

## 环境

- [cnpm](https://cnpmjs.org/) 淘宝
- [rednpm](http://npm.mirror.cqupt.edu.cn/) 部署于 中国教育和科研计算机网 (CERNET) 重庆 - 重庆邮电大学节点

- [npm 模块管理器](http://javascript.ruanyifeng.com/nodejs/npm.html)

- npm cache clear 可以清空 NPM 本地缓存，用于对付使用相同版本号发布新版本代码的人。

- http-server
- webpack
- gulp
- yo
- vue-cli
- antd-init
- express

## 版本管理

- [Node Version Manager](https://github.com/nvm-sh/nvm) 一个 Node.js 版本管理器，使用 bash 实现，几乎是业内最有名
  - 安装一个新的 node 版本时重新安装包: `nvm install lts/dubnium --reinstall-packages-from=10.15.1`
- [n](https://github.com/tj/n)
- [nave](https://github.com/isaacs/nave)
- [NVS](https://github.com/jasongin/nvs)
  - [从 nvm 迁移到 nvs](https://ukn.me/cong-nvm-qian-yi-dao-nvs.html) 一个的 Node.js 版本切换器，使用 JavaScript 实现，跨平台

## 框架、库

- [Express](https://github.com/strongloop/express)
- [Koa](https://github.com/koajs/koa)
  - [一起学 koa](https://github.com/base-n/koa-generator-examples)
- [hapi](https://github.com/hapijs/hapi)
- [ThinkJS](https://github.com/75team/thinkjs) [官网](https://thinkjs.org/)
- [Chair](http://yq.aliyun.com/articles/2921) Chair 是支付宝前端团队推出的，基于 Node.js 的 Web 框架，适用于大部分的 Web 应用。
- [AdonisJs](https://adonisjs.com/) 类似 PHP laravel
- [Nest](https://github.com/nestjs/nest) 类似 Spring
  - [NestCloud](https://nestcloud.org)
  - 案例工程
    - [nest-cnode](https://github.com/jiayisheji/nest-cnode)
    - [nestx](https://github.com/vellengs/nestx)
    - [typerx](https://github.com/vellengs/typerx)
    - [让我们用 Nestjs 来重写一个 CNode](https://github.com/jiayisheji/blog/issues/19)
- [Midway](https://github.com/midwayjs/midway) 类似 Spring（阿里）
- [Moleculer](https://moleculer.services/) Node.js 的渐进式微服务框架
- [Fastify](https://github.com/fastify/fastify)
- [eggjs](https://eggjs.org/)
- [sails](https://sailsjs.com/)
- [Daruk](https://github.com/daruk-framework/daruk)

- [Webot](https://github.com/node-webot) 微信公共平台
- [Nodemailer](https://github.com/nodemailer/nodemailer) 邮件模块

- [node-oauth](https://www.npmjs.com/package/oauth)
- [typeorm](https://github.com/typeorm/typeorm)
- [prisma](https://github.com/prisma/prisma)

## 文章：

- [Node.js 在双十一中有哪些应用，表现如何？](https://www.zhihu.com/question/37379084)

## 教程

- [《Node.js 包教不包会》 by alsotang](https://github.com/alsotang/node-lessons)
- [七天学会 NodeJS](http://nqdeng.github.io/7-days-nodejs/)

- [nodemon](https://github.com/remy/nodemon)
- [supervisor](https://www.npmjs.com/package/supervisor)
- [forever](https://www.npmjs.com/package/forever) forever 是一个 Node 应用程序，用于一个子进程意外退出时，自动重启。
- hotnode

- [log4js](https://github.com/nomiddlename/log4js-node)
- [nodebestpractices](https://github.com/i0natan/nodebestpractices/blob/master/README.chinese.md) Node.js 最佳实践

## 快速定位性能问题

- [clinic](https://clinicjs.org/) [clinic](https://www.npmjs.com/package/clinic) Node Clinic - NearForm 的开源 Node.js 性能分析套件
- [autocannon](https://www.npmjs.com/package/autocannon)

压测工具 ab、curl、autocannon

## 监控

- [PM2](https://github.com/Unitech/pm2) 用 PM2 守护 Node.js 进程，PM2 相比以前的 Forever 有更强大的进程管理功能。
  - [关于 Node 进程管理器 PM2 使用技巧和需要注意的地方](https://github.com/jawil/blog/issues/7)
- [alinode](http://alinode.aliyun.com/)
- [Keymetrics](https://keymetrics.io/)
- [New Relic](https://newrelic.com/nodejs)
- [N_Solid](https://nodesource.com/products/nsolid/)

## 文章

- [【译】Node.js 给前端带来了什么](https://www.h5jun.com/post/Node.js%20%E7%BB%99%E5%89%8D%E7%AB%AF%E5%B8%A6%E6%9D%A5%E4%BA%86%E4%BB%80%E4%B9%88.html)

- [唯快不破，让 nodejs 再快一点](https://github.com/alibaba/beidou/blob/master/packages/beidou-docs/articles/node-performance-optimization.md)
- [Node 应用内存泄漏分析方法论与实战](https://github.com/alibaba/beidou/blob/master/packages/beidou-docs/articles/node-memory-leak.md) -[你不知道的 Node.js 性能优化](https://zhuanlan.zhihu.com/p/50055740)
- [打造高可靠与高性能的 React 同构解决方案](https://github.com/alibaba/beidou/blob/master/packages/beidou-docs/articles/high-performance-isomorphic-app.md)

## PM2 常用命令

监控运行状态：
`pm2 status`

监控 Node.js 程序的运行日志
`pm2 logs`

检查内存占用情况和程序的运行状态：
`pm2 monit`

分别是启动|停止|重启 ghost 程序:
`pm2 <start|stop|restart> ghost`

清除所有正在运行的 PM2 Ghost 进程:
`pm2 kill ghost`

让 PM2 知道在开机后自动运行我们的网站：
1.Ubuntu 系统：
pm2 startup ubuntu

2.CentOS  系统：

pm2 startup centos

保存设置（非常重要）
pm2 save

## 模块

- [cheerio](https://github.com/cheeriojs/cheerio)
- [fs-extra](https://github.com/jprichardson/node-fs-extra)

- [shortid](https://github.com/dylang/shortid)
- [uuid](https://www.npmjs.com/package/uuid)
- [Nano ID](https://www.npmjs.com/package/nanoid)

- [object-hash](https://github.com/puleos/object-hash)
- [faker.js](https://github.com/Marak/faker.js)
- [Mock.js](https://github.com/nuysoft/Mock)

## 模板

- [Nunjucks](https://github.com/mozilla/nunjucks)

## 数据

- [lowdb](https://github.com/typicode/lowdb)
- [nedb](https://github.com/louischatriot/nedb)

- [typeorm](https://typeorm.io)
