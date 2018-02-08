# Arrow Function

> 允许使用 => 定义函数，箭头函数自动绑定当前上下文 this。

```javascript
x => x + 1;

// =>

function (x) {
	return x + 1;
}

(x => console.log(x + 1))(5);

// =>

(function (x) {
	return console.log(x + 1);
})(5)
```

- 多个参数：

```javascript
(a, b) => a + b;

// =>

function (a, b) {
	return a + b;
}
```

- 多行函数体：

```javascript
(a, b) => {
	console.log(a + b);
	return a + b;
}

// =>

function (a, b) {
	console.log(a + b);
	return a + b;
}
```



