## java

## 入门

- [Spring Boot教程](https://github.com/forezp/SpringBootLearning)
- [史上最简单的Spring Cloud教程源码](https://github.com/forezp/SpringCloudLearning)
  - [方志朋](https://me.csdn.net/forezp)
- [JHipster](https://www.jhipster.tech/)

## 框架

- [Spring Cloud](https://springcloud.cc/spring-cloud-brixton.html)
- [jOOQ](http://www.jooq.org/)
- [Kong](https://getkong.org/)
- [Consul](https://www.consul.io/)

- [Dubbo](https://github.com/alibaba/dubbo) [Apache Dubbo](https://github.com/apache/incubator-dubbo) 一个高性能，基于Java的RPC框架，由阿里巴巴开源。
  - [Apache Dubbo Home](http://dubbo.apache.org/zh-cn/index.html)

- [Spring Boot教程](https://github.com/dyc87112/SpringBoot-Learning)
- [spring boot 实践学习案例](https://gitee.com/jeff1993/springboot-learning-example)
- [Spring Boot参考指南](http://blog.didispace.com/books/spring-boot-reference/)
- [Spring Cloud教程](https://github.com/dyc87112/SpringCloud-Learning)

## 安全

- [Shiro](https://shiro.apache.org) Apache 功能强大且易于使用的Java安全框架，可执行身份验证，授权，加密和会话管理。
- [Spring Security](https://spring.io/projects/spring-security)

## maven

/usr/local/Cellar/maven

查看 maven版本
mvn -v

maven配置文件
~/.m2/settings.xml

配置国内私服库

```xml
  <mirrors>
    <!--
    <mirror>
      <id>mirrorId</id>
      <mirrorOf>repositoryId</mirrorOf>
      <name>Human Readable Name for this Mirror.</name>
      <url>http://my.repository.com/repo/path</url>
    </mirror>
     -->
    <mirror>
      <!--This sends everything else to /public -->
      <id>aliyun</id>
      <mirrorOf>central</mirrorOf> 
      <url>http://maven.aliyun.com/nexus/content/groups/public/</url>
    </mirror>
  </mirrors>
```


## IDEA

Debug 启动
command + shift + f9 热重启

alt + enter 导包
command + n getset



## swagger

访问地址
http://localhost:8080/swagger-ui.html
