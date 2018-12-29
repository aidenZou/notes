# Module

许多JS框架都会实现一套自己的 module/loader 机制。反复造轮子这也就罢了，更大的问题在于，这些轮子互相都是不兼容的。结果就造成了JS社区的分化和内耗，阻碍了JS库和组件在较细粒度上的竞争和发展，JS框架和库的切换成了强迫开发者做出非此即彼的选择。缺乏语言级别的 module，其恶果就是既没有足够的标准库，也很难像其他语言一样通过丛林法则发展出事实标准库。 ---- johnhax

社区主流解决方案有 CommonJS 和 AMD，分别用于服务器端和浏览器端，浏览器端还有 seajs 遵循的 CMD。


### CommonJS

```javascript
exports.firstName = 'mei';
exports.lastName = 'qingguang';
exports.year = 1988;

// or
 module.exports = {
	firstName: 'mei',
	lastName: 'qingguang',
	year: 1988
}
 // or
 module.exports = function () {
	// do something
}
```


### AMD

```javascript
define(['./a', './b'], function (a, b) { // 依赖必须一开始就写好
	a.doSomething()
	// 此处略去 100 行
	b.doSomething()
	// ...
	
	exports.action = function () {};
})
```

### CMD

```javascript
define(function (require, exports, module) {
	var a = require('./a')
	a.doSomething()
	// 此处略去 100 行
	var b = require('./b') // 依赖可以就近书写
	b.doSomething()
	// ...
	
	exports.action = function () {
	};
})
```

### ES6 Module

export 命令 和 import 命令

```javascript
export var firstName = 'mei';
export var lastName = 'qingguang';
export var year = 1988;

import {firstName, lastName, year} from './profile'
console.log(firstName, lastName, year)
```

模块整体输出

```javascript
var firstName = 'mei';
var lastName = 'qingguang';
var year = 1988;
export {firstName, lastName, year};

import * as Profile from './profile'
console.log(Profile.firstName, Profile.lastName, Profile.year)
```

export default 整体输出

```javascript
export default function () {
    console.log('My name is mei qingguang');
};

import sayMyName from './profile'
console.log(sayMyName())
```

https://segmentfault.com/a/1190000003764489

