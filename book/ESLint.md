# ESLint

`npm install -g eslint`

`eslint --init`


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



