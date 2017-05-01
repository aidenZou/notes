# Angular2


[Angular](https://angular.cn/)
[Angular CLI](https://cli.angular.io/)
[Angular Material](https://material.angular.io/)


环境：node 4.x.x+ 和 npm 3.x.x+

## Angular

![](https://angular.cn/resources/images/devguide/architecture/overview2.png)

这个架构图展现了 Angular 应用中的 8 个主要构造块：

- [模块 (module)](https://angular.cn/docs/ts/latest/guide/architecture.html#modules)
- [组件 (component)](https://angular.cn/docs/ts/latest/guide/architecture.html#components)
- [模板 (template)](https://angular.cn/docs/ts/latest/guide/architecture.html#templates)
- [元数据 (metadata)](https://angular.cn/docs/ts/latest/guide/architecture.html#metadata)
- [数据绑定 (data binding)](https://angular.cn/docs/ts/latest/guide/architecture.html#data-binding)
- [指令 (directive)](https://angular.cn/docs/ts/latest/guide/architecture.html#directives)
- [服务 (service)](https://angular.cn/docs/ts/latest/guide/architecture.html#services)
- [依赖注入 (dependency injection)](https://angular.cn/docs/ts/latest/guide/architecture.html#dependency-injection)



数据绑定

```html
<li>{{hero.name}}</li>
<hero-detail [hero]="selectedHero"></hero-detail>
<li (click)="selectHero(hero)"></li>
<input [(ngModel)]="hero.name">
```


- {{hero.name}} `插值表达式` 在<li>标签中显示组件的hero.name属性的值。
- [hero] `属性绑定` 把父组件HeroListComponent的selectedHero的值传到子组件HeroDetailComponent的hero属性中。
- (click) `事件绑定` 在用户点击英雄的名字时调用组件的selectHero方法。
- [(ngModel)]="hero.name" `双向数据绑定` 它使用ngModel指令组合了属性绑定和事件绑定的功能。



## Angular CLI

[Wiki](https://github.com/angular/angular-cli/wiki)


1. 全局安装 [Angular CLI](https://cli.angular.io/)

```
npm install -g @angular/cli
```


2. 创建新项目

```
ng new my-app
```

3. 启动开发服务器

```
cd my-app
ng serve
```

> `ng serve` 命令会启动开发服务器，监听文件变化，并在修改这些文件时重新构建此应用。

起飞：在浏览器中打开 http://localhost:4200/


