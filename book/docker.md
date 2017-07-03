# docker

```
docker --version

docker-compose --version

docker-machine --version
```

## 运行一个 Nginx 服务器

```
$ docker run -d -p 80:80 --name webserver nginx
```

> 服务运行后，可以访问 http://localhost，如果看到了 "Welcome to nginx!"，就说明 Docker安装成功了。

停止 Nginx 服务器并删除执行下面的命令：

```
$ docker stop webserver
$ docker rm webserver
```

### 镜像

#### 获取镜像

docker pull [选项] [Docker Registry地址]<仓库名>:<标签>
docker pull [OPTIONS] NAME[:TAG|@DIGEST]

```
$ docker pull ubuntu:14.04
```

> 获取官方镜像 library/ubuntu 仓库中标签为 14.04 的镜像。


### 运行

```
$ docker run -it --rm ubuntu:14.04 bash
root@0b8f56c344ff:/# cat /etc/os-release
NAME="Ubuntu"
VERSION="14.04.5 LTS, Trusty Tahr"
ID=ubuntu
ID_LIKE=debian
PRETTY_NAME="Ubuntu 14.04.5 LTS"
VERSION_ID="14.04"
HOME_URL="http://www.ubuntu.com/"
SUPPORT_URL="http://help.ubuntu.com/"
BUG_REPORT_URL="http://bugs.launchpad.net/ubuntu/"
root@0b8f56c344ff:/# esit
bash: esit: command not found
root@0b8f56c344ff:/# exit
exit
```

docker run 就是运行容器的命令，具体格式我们会在后面的章节讲解，我们这里简要的说明一下上面用到的参数。

-it：这是两个参数，一个是 -i：交互式操作，一个是 -t 终端。我们这里打算进入 bash 执行一些命令并查看返回结果，因此我们需要交互式终端。
--rm：这个参数是说容器退出后随之将其删除。默认情况下，为了排障需求，退出的容器并不会立即删除，除非手动 docker rm。我们这里只是随便执行个命令，看看结果，不需要排障和保留结果，因此使用 --rm 可以避免浪费空间。
ubuntu:14.04：这是指用 ubuntu:14.04 镜像为基础来启动容器。
bash：放在镜像名后的是命令，这里我们希望有个交互式 Shell，因此用的是 bash。
进入容器后，我们可以在 Shell 下操作，执行任何所需的命令。这里，我们执行了 cat /etc/os-release，这是 Linux 常用的查看当前系统版本的命令，从返回的结果可以看到容器内是 Ubuntu 14.04.5 LTS 系统。

最后我们通过 exit 退出了这个容器。

---


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



### 命令

docker build --tag aidenzou/nodejs-demo:latest .


#### nginx

使用nginx镜像开启nginx应用容器
docker run -d --name myNginx -p 8080:80 -v /var/www/html:/usr/share/nginx/html nginx

-p : 该参数设置端口对应的关系。所有访问宿主机8080端口的URL会转发到nginx容器的80端口。


登录到对应的容器中，查看配置信息路径。

docker exec -it myNginx /bin/bash

-i : --interactive，交互模式。
-t : --tty，开启一个伪终端。
/bin/bash : 必须写，否则会报错。这是开始伪终端时，进入bash界面，也就是命令行界面。

查看对应的配置文件位置
/etc/nginx/conf.d/default.conf

退出命令行，不要使用exit，因为exit会让容器停止。这里使用ctrl + p + q来退出容器。

使用专用的复制命令将配置文件复制到宿主机，然后在宿主机进行编辑（这就是变通的方法）

docker cp myNginx:/etc/nginx/conf.d/default.conf ./default.conf
再次使用复制命令将其复制到容器中，然后再次进入容器中，将nginx配置文件重新载入
docker cp ./default.conf myNginx:/etc/myNginx:/etc/nginx/conf.d/default.conf

进入到nginx容器中重新载入配置文件
docker exec -it myNginx /bin/bash
service nginx reload



#### mysql

使用mysql镜像运行单独的容器

```
docker run -d --name mysql_1 -v /data/mysql:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=root -p 3306:3306 mysql
docker run -d --name mysql_1 -v /Users/zouguilin/develop/mysql_data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=root -p 3306:3306 mysql:5.7
```

-d : --detach，后台运行。
--name : 为你的镜像创建一个别名，该别名用于更好操作。
-p : 映射端口，一般我们会将默认端口进行更改，避免与本机的mysql端口冲突，如果你宿主机有mysql，请更改端口，如 -p 33060:3306。
-e : 环境变量。为mysql的root用户设置密码为123456。
-v : 指定数据卷，意思就是将mysql容器中的/var/lib/mysql（这个是数据库所有数据信息文件）映射到宿主机/data/mysql里面。
进入到myMysql容器中

docker exec -t -i myMysql /bin/bash
-i : --interactive，交互界面。
-t : --tty，伪终端界面。

登录到myMysql容器中，登录到mysql服务器中

mysql -uroot -p


### 国内镜像

[网易蜂巢](https://c.163.com)
