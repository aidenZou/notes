# 

`docker run -it -v /Users/aidenZou/Desktop/pro:/usr/Downloads:ro ubuntu /bin/bash`

> -v参数，冒号前为宿主机目录，必须为绝对路径，冒号后为镜像内挂载的路径。

> 默认挂载的路径权限为读写。如果指定为只读可以用：ro

`docker run -it -v /home/dock/Downloads:/usr/Downloads:ro ubuntu64 /bin/bash`

docker还提供了一种高级的用法。叫数据卷

数据卷：『其实就是一个正常的容器，专门用来提供数据卷供其它容器挂载的』。感觉像是由一个容器定义的一个数据挂载信息。其他的容器启动可以直接挂载数据卷容器中定义的挂载信息。

`docker run -v /Users/aidenZou/Desktop/pro:/usr/Downloads --name dataVol ubuntu /bin/bash`


再创建一个新的容器，来使用这个数据卷
`docker run -it --volumes-from dataVol --name ubuntu-server ubuntu /bin/bash`

> --volumes-from 用来指定要从哪个数据卷来挂载数据。


OS X

`eval $(docker-machine env default)`

```shell
➜  ~ docker ps
Cannot connect to the Docker daemon. Is the docker daemon running on this host?
➜  ~ eval $(docker-machine env default)
➜  ~ docker ps
CONTAINER ID        IMAGE                           COMMAND                  CREATED             STATUS              PORTS                      NAMES
bcac56198b24        mongo:latest                    "/entrypoint.sh mongo"   4 weeks ago         Up 8 hours          0.0.0.0:27017->27017/tcp   mongo
00c0f6fd8ca5        daocloud.io/daocloud/daomonit   "/usr/local/bin/daomo"   5 weeks ago         Up 10 hours                                    daomonit
```

`docker-machine ssh default`


## 

建立镜像

docker build -t ipython/notebook .

指令启动容器

`docker run -p 80:80 my-front-end-app`
`docker run -d -p 8888:8888 -e PASSWORD=admin ipython/notebook`



## 事例

app.js

```
console.log('hello, docker');
```

然后运行docker：

```
docker run --rm -v "$(pwd)":/app -w /app nodejs:latest sh -c 'node app.js'
```

这个时候应该输出：`hello, docker`

这个docker在运行结束后会自动关闭（--rm），docker的这一特性也提供了按需使用的方式。

正式的开发环境可以选择supervisor（监听程序更改并重启node程序）代替node命令，并把-rm命令去掉，这样就只需要输入一次命令进行调试了：

```
docker run -v "$(pwd)":/app -w /app nodejs-supervisor:latest sh -c 'supervisor app.js'
```

多说一句，生产环境不建议使用supervisor，建议使用pm2。

端口暴露
Web程序都是有端口的，使用docker仅需要一个-p命令进行暴露即可：

```
docker run --rm -v "$(pwd)":/app -p 8080:8080 -w /app nodejs:latest sh
```

