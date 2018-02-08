# let and const


> 原来的 javascript 中没有块级作用域，只有函数级作用域。ES6 中新增了 let 命令，使用 let 命令代替 var 命令声明变量，具有块级作用域。

### 函数级作用域

```javascript
function test() {     var hello = 'world';     console.log(hello); }  test(); // world console.log(hello); // ReferenceError: hello is not defined
``` 
### 块级作用域 
var 命令

```javascript
if (true) {     var hello = 'world';     console.log(hello); // world } console.log(hello); // world
```

let 命令

```javascript
if (true) {     let hello = 'world';     console.log(hello); // world } console.log(hello); // ReferenceError: hello is not defined
```

### const 常量

```javascript
const STATUS_NOT_FOUND = 404; STATUS_NOT_FOUND = 200; // TypeError: Assignment to constant variable.
```


