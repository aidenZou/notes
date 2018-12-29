# 坑


[A list of funny and tricky JavaScript examples](https://github.com/denysdovhan/wtfjs)


```
'22' == true // false
// 两边都会发生隐式强制转换，'22' --> 22 ， true --> 1， 
// 因此 22 == 1  // false

0 == '' // true
// 字符串会发生隐式类型转转 '' --> 0
// 因此 0 == 0 // true

// 相同的场景还有

[] == 0 // true
[] == '' // true

[] == 0 // true
[] == '' // true


parseInt(0.0000008) // 8
// 原因是parseInt(0.0000008)会变成parseInt("8e-7")，结果输出8
```

