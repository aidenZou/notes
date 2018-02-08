# Template String

### 传统的字符串

```javascript
var name = 'es6-';
 var sayhello = 'hello, my name is ' + name + '.';
 console.log(sayhello);  // hello, my name is es6-.
```

### ES6 模板字符串

> 空格和换行都会被保留

```javascript
var name = 'es6';
 var sayhello = `hello,

   my name is ${name}.`;
 console.log(sayhello);
 // hello,
// 
//   my name is es6.
```

