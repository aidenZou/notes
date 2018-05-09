# docker

## 常用命令

### 列出所有 images列表

`docker images`

### 删除指定 image

`docker rmi {IMAGE ID}`

### 列出当前运行的容器列表

`docker ps`

### 列出所有容器列表

`docker ps -a`

## 启动容器

`docker run ubuntu echo hello docker`

### 容器操作

创建

`docker run -p 8080:80 -d nginx`

停止

`docker stop 308accb9d8ac`

删除

`docker start 308accb9d8ac`

启动

`docker start 308accb9d8ac`

拷贝文件到容器

`docker cp index.html {CONTAINER ID}://usr/share/nginx/html`
`docker cp ./index.html 308accb9d8ac://usr/share/nginx/html`

报错改动为新的image

`docker commit -m 'change index' 308accb9d8ac nginx-changeindex`

进入容器

`docker exec -it nginx /bin/bash`

## Dockerfile

### 语法

FROM：base image
RUN：执行命令
ADD：添加文件
COPY：拷贝文件
CMD：执行命令
EXPOSE：暴露端口
WORKDIR：指定路径
MAINTAINER：维护者
ENV：指定环境变量
ENTRYPOINT：容器入口
USER：指定用户
VOLUME：容器挂载的卷

### 举例

Dockerfile

```
FROM alpine:latest
MAINTAINER zifan
CMD echo "hello docker!"
```

构建image

`docker build -t zifan/hello_docker .`

运行image

`docker run zifan/hello_docker`

hello docker!

## volume

### 1.通过 -v挂载卷

docker run -d --name nginx -v /usr/share/nginx/html nginx

docker inspect nginx

Mounts.Source -> Destination

### 2.本地目录挂载到容器

docker run -p 80:80 -d -v $PWD/html:/usr/share/nginx/html nginx

把当前 html文件夹挂载到 `/usr/share/nginx/html`

### 3.创建仅有数据的容器

`docker create -v $PWD/data:/var/mydata --name data_contriner ubuntu`

`docker run -it --volumes-from data_contriner ubuntu /bin/bash`

mount

## compose
