# Generator

Generator 生成器允许你通过写一个可以保存自己状态的的简单函数来定义一个迭代算法。和 Generator 一起出现的通常还有 `yield`。

> Generator 是一种可以停止并在之后重新进入的函数。生成器的环境（绑定的变量）会在每次执行后被保存，下次进入时可继续使用。generator 字面上是“生成器”的意思，在 ES6 里是迭代器生成器，用于生成一个迭代器对象。

```javascript
function *gen() {
	yield 'hello';
	yield 'world';
	return true;
}
```

> 以上代码定义了一个简单的 generator，看起来就像一个普通的函数，区别是function关键字后面有个*号，函数体内可以使用yield语句进行流程控制。

```javascript
var iter = gen();
var a = iter.next();
console.log(a); // { value: 'hello', done: false }
var b = iter.next();
console.log(b); // { value: 'world', done: false }
var c = iter.next();
console.log(c); // { value: true, done: true }
```

当执行gen()的时候，并不执行 generator 函数体，而是返回一个迭代器 Iterator。迭代器具有 next() 方法，每次调用 next() 方法，函数就执行到yield语句的地方。next() 方法返回一个对象，其中value属性表示 yield 关键词后面表达式的值，done 属性表示是否遍历结束。generator 生成器通过 next 和 yield 的配合实现流程控制，上面的代码执行了三次 next() ，generator 函数体才执行完毕。

