# vue

## doc

- [Vue.js](https://github.com/vuejs/vue) [documentation](http://cn.vuejs.org/guide/)
  - [Vue 技术内幕](http://hcysun.me/vue-design/art/)
- [vue-router](https://github.com/vuejs/vue-router) [documentation](http://vuejs.github.io/vue-router/zh-cn/index.html) Vue.js 官方路由
- [vue-resource](https://github.com/vuejs/vue-resource) 通过 XMLHttpRequest 或 JSONP 发起请求并处理响应
- [vue-recyclerview](https://github.com/hilongjw/vue-recyclerview) Vue 超大数据列表解决方案
- [vue-async-data](https://github.com/vuejs/vue-async-data) 异步加载数据插件
- [vue-validator](https://github.com/vuejs/vue-validator) 表单验证插件
- [vue-loader](http://vuejs.github.io/vue-loader/) [中文](http://hq5544.github.io/vue-webpack/index.html)
- [vue-devtools](https://github.com/vuejs/vue-devtools) Chrome 开发者工具扩展，用于调试 Vue.js 应用
- [vue-element](https://github.com/vuejs/vue-element) 使用 Vue.js 注册自定义元素
- [vuex](http://vuejs.github.io/vuex/zh-cn/index.html)
- [Vue Color](https://github.com/xiaokaike/vue-color)
- [vuese](https://github.com/HcySunYang/vuese) 解析 Vue SFC 并生成 markdown 文档

- [vue-gesture](https://github.com/mlyknown/vue-gesture) 手势插件

- [使用 Vue 构建中(大)型应用](https://segmentfault.com/a/1190000004706690)

- [vue-timeago](https://github.com/egoist/vue-timeago) 倒计时

- [vue 源码解读](https://juejin.im/user/58f87ae844d9040069ca7507)
- [聊聊 Vue.js 的 template 编译](https://github.com/answershuto/learnVue)
- [learnVue](https://github.com/answershuto/learnVue)

- [vue-create-api](https://www.npmjs.com/package/vue-create-api)

- [Vue技术内幕 - 逐行级别的 Vue 源码分析](http://hcysun.me/vue-design/)
  - [Vue技术内幕 github](https://github.com/HcySunYang/vue-design)

## UI

- [Cube UI](https://didi.github.io/cube-ui/)
- [Mand Mobile](https://github.com/didi/mand-mobile)
  - [Mand Mobile Palette](https://mand-mobile.github.io/palette/#/home)
- [Keen-UI](https://github.com/JosephusPaye/keen-ui)
- [Mint UI](https://github.com/ElemeFE/mint-ui)
- [Vux](https://github.com/airyland/vux)
- [Mint UI](http://mint-ui.github.io/#!/zh-cn) 饿了么
- [ZanUI](https://www.youzanyun.com/zanui)
- [Ant Design Vue](https://github.com/vueComponent/ant-design-vue)

## JSX

- [在 Vue 中使用 JSX 的正确姿势](https://zhuanlan.zhihu.com/p/37920151)

## 工具

- [vue-markdown-loader](https://github.com/QingWei-Li/vue-markdown-loader)
- [vue-demo-loader](https://github.com/Jokcy/vue-demo-loader)
- [vuep](https://github.com/QingWei-Li/vuep/) [官网](https://cinwell.com/vuep)

## vue-cli

[https://github.com/vuejs/vue-cli](https://github.com/vuejs/vue-cli)

```shell
npm install -g vue-cli

vue init webpack my-project
cd my-project
npm install
npm run dev
```

browserify - A full-featured Browserify + vueify setup with hot-reload, linting & unit testing.

browserify-simple - A simple Browserify + vueify setup for quick prototyping.

webpack - A full-featured Webpack + vue-loader setup with hot reload, linting, testing & css extraction.

webpack-simple - A simple Webpack + vue-loader setup for quick prototyping.

### Vue 核心文件目录

```
src/
├── api/              # 接入微服务的基础 API
├── App/              # App Root Component
├── asset/            # 静态文件
├── business/         # 业务
├── component/        # 组件
├── const/            # 常量
├── event-bus/        # Event Bus 事件总线，类似 EventEmitter
├── global/           # 通用定义的 directive, mixin 还有绑定到 Vue.prototype 的函数
├── model/            # Model 抽象层
├── repository/       # 仓库，接入 Vuex 中
├── router/           # 路由
├── service/          # 服务
├── state/            # Vuex 状态管理
├── style/            # 样式
├── util/             # 通用 utility functions
├── view/             # 各个页面
├── client-entry.js   # 前端业务 & build
├── server-entry.js   # SSR业务 & build
├── ...
└── main.js           # Vue Object Initiation

基础设施层
api/
util/

领域层 Domain
service/       % 各个 Domain 下的基础功能业务
repository/    %某一个独立 Domain 下的获取数据的业务
model/         %数据抽象层

业务层
business/        % 各个 Domain 下的具体业务，会引用 service 和 repository 中定义的功能
validator/       %不同数据的 validation 过程

表现层
state/
router/
component/
view/            % Vue 下具体的交互展示层业务
```
