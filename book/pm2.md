# PM2

> `PM2`是一个带有**负载均衡**功能的`Node`应用的进程管理器。`PM2`可以利用服务器上的**所有CPU**，并保证进程永远都活着，**0秒的重载**，部署管理**多个**Node项目。`PM2`是`Node`线上部署完美的管理工具。

## 基本命令

安装：`npm install -g pm2`

启动程序：`pm2 start <app_name|id|all>`
启动程序：`pm2 start <app_name|id|all>`

`pm2 start app.js --watch` 启动监听
`pm2 start app.js -i [n] --name [name]` 启动n个进程，名字命名为name。
`pm2 start app.js -i max` PM2将自动检测可用的CPU数量和运行多个进程可以在负载均衡模式
`pm2 start app.js --max_memory_restart 1024M`：当内存超过1024M时自动重启。 如果工程中有比较棘手的内存泄露问题，这个算是一个折中方案。
`pm2 start app.js --kill-timeout 3000` 配置超时时间
`pm2 start app.js --wait-ready --listen-timeout 3000` 优雅的重启/重载

或者

```json
{
  "apps" : [{
    "name"         : "api",
    "script"       : "app.js",
    "listen_timeout" : 3000
  }]
}
```


查看所有的进程：`pm2 list`
查看所有的进程状态：`pm2 status`
查看某一个进程的信息：`pm2 describe app_name|app_id`
程序信息：`pm2 describe id|all`

停止：`pm2 stop <app_name|id|all>`
删除：`pm2 delete app_name|app_id`
重启：`pm2 restart app_name|app_id|all`
重启：`npm reload app_name|app_id|all`： 和 rastart功能相同，但是可以实现0s的无缝衔接；如果有nginx的使用经验，可以对比nginx reload指令。

监控：`pm2 monit` 对服务进行监控

API：`pm2 web (端口：9615 )` http://0.0.0.0:9615/

## 启动程序参数说明

`--watch`：监听应用目录源码的变化，一旦发生变化，自动重启。如果要精确监听、不见听的目录，最好通过配置文件
`-i --instances`：启用多少个实例，可用于负载均衡。如果-i 0或者-i max，则根据当前机器核数确定实例数目，可以弥补node.js缺陷
`--ignore-watch`：排除监听的目录/文件，可以是特定的文件名，也可以是正则。比如--ignore-watch="test node_modules "some scripts"
`-n --name`：应用的名称。查看应用信息的时候可以用到
`-o --output <path>`：标准输出日志文件的路径，有默认路径
`-e --error <path>`：错误输出日志文件的路径，有默认路径
`--interpreter <interpreter>`：the interpreter pm2 should use for executing app (bash, python...)。比如你用的coffee script来编写应用

完整参数命令：`pm2 start index.js --watch -i max`

## 负载均衡

```shell
pm2 start app.js -i 3 # 开启三个进程
pm2 start app.js -i max # 根据机器CPU核数，开启对应数目的进程
```

## 日志

实时集中log处理: `pm2 logs`

显示日志管理命令

`pm2 logs -h`

显示所有的应用程序的日志

`pm2 logs`

仅仅显示api应用程序的日志

`pm2 logs app`

显示1000行的应用程序日志

`pm2 logs app --lines 1000`

显示json格式的日志

`pm2 logs --json`

查看转换时间格式的日志

`pm2 logs --format`

刷新日志

`pm2 flush`

重载所有日志

`pm2 reloadLogs`

启动时日志配置

`pm2 start echo.js --merge-logs --log-date-format="YYYY-MM-DD HH:mm Z"`

或者

```json
{
  "script"          : "echo.js",
  "error_file"      : "err.log",
  "out_file"        : "out.log",
  "merge_logs"      : true,
  "log_date_format" : "YYYY-MM-DD HH:mm Z"
}
```

关闭日志

使用 `--merge-logs` 参数关闭 文件输出日志

或者

```json
{
  "out_file": "/dev/null",
  "error_file": "/dev/null"
}
```

### 目录

pm2的相关文件默认存放于$HOME/.pm2/目录下，其日志主要有两类：

- pm2自身的日志，存放于 `$HOME/.pm2/pm2.log`
- pm2所管理的应用的日志，存放于 `$HOME/.pm2/logs/`
    - 标准输出日志存放于 `app-out-0.log`
    - 标准错误日志存放于 `app-error-0.log`

## 开机自动启动

- 通过 `pm2 save`保存当前进程状态。
- 通过 `pm2 startup [platform]`生成开机自启动的命令。例如：`pm2 startup centeros`
- 将步骤2生成的命令，粘贴到控制台进行。

手动复活进程 `pm2 resurrect`

## 进程文件

**创建一个示例的进程文件**

`pm2 ecosystem`

> 程序会在当前目录生成一个 `ecosystem.config.js` 文件

**启动进程文件**

`pm2 start ecosystem.config.js`

或者

`pm2 start ecosystem.config.js --only worker-app`

**停止进程文件**

`pm2 stop ecosystem.config.js`

**重启进程文件**

`pm2 restart ecosystem.config.js`

**重新加载进程文件**

`pm2 reload ecosystem.config.js`

**删除进程文件**

`pm2 delete ecosystem.config.js`

**启动单个应用程序**

```
pm2 start   ecosystem.config.js --only api-app
pm2 restart ecosystem.config.js --only api-app
pm2 reload  ecosystem.config.js --only api-app
pm2 delete  ecosystem.config.js --only api-app
```

**更新进程文件**

```
pm2 restart ecosystem.config.js --update-env
pm2 startOrReload ecosystem.config.js --update-env
```

**调整运行环境**

生产环境

`pm2 start process.json --env production`

开发环境

`pm2 restart process.json --env staging`

## 更新PM2

> 更新PM2速度非常快（少于几秒）并且无缝连接。

```shell
pm2 save # 保存所有进程
npm install pm2 -g # 从NPM安装最新的PM2版本
pm2 update # 更新内存中的PM2进程
```

## 相关资料

- [PM2 Documentation](http://pm2.keymetrics.io/docs/usage/cluster-mode/)
- [pm2从入门到精通 - 看云](https://www.kancloud.cn/daiji/pm2/395273)
- [关于Node进程管理器PM2使用技巧和需要注意的地方](https://github.com/jawil/blog/issues/7)
