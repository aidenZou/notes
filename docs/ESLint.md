# ESLint

`npm install -g eslint`

`eslint --init`


## 规则

规则
每条规则有3个等级：off、warn和error。off表示禁用这条规则，warn表示仅给出警告，并不会导致检查不通过，而error则会导致检查不通过。

有些规则还带有可选的参数，比如comma-dangle可以写成[ "error", "always-multiline" ]；no-multi-spaces可以写成[ "error", { exceptions: { "ImportDeclaration": true }}]。

规则的详细说明文档可以参考这里：[Rules - 规则](http://eslint.cn/docs/rules/)


### airbnb

http://airbnb.io/javascript/
[github](https://github.com/airbnb/javascript)

### standard

https://standardjs.com/
[github](https://github.com/feross/standard)


```javascript
/* global Swiper, _hmt */

// 直接 eslint-disable 的作用是完全禁用ESLint进行检测
/* eslint-disable */
...
/* eslint-enable */

// 使用 eslint-disable + 规则名 的作用是不检测这条规则，注意要使用 eslint-enable 结束哟
/* eslint-disable no-new */
...
/* eslint-enable no-new */
```



