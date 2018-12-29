# 采坑

### new Date()

#### Chrome

```
> new Date('2017-11-27 19:19')
< Mon Nov 27 2017 19:19:00 GMT+0800 (CST)
> new Date('2017-11-27T19:19')
< Mon Nov 27 2017 19:19:00 GMT+0800 (CST)
> new Date('2017-11-27T19:19+08:00')
< Mon Nov 27 2017 19:19:00 GMT+0800 (CST)
> new Date('2017/11/27 19:19')
< Mon Nov 27 2017 19:19:00 GMT+0800 (CST)
```

#### Safari

```
> new Date('2017-11-27 19:19')
< Invalid Date
> new Date('2017-11-27T19:19')
< Tue Nov 28 2017 03:19:00 GMT+0800 (CST)
> new Date('2017-11-27T19:19+08:00')
< Mon Nov 27 2017 19:19:00 GMT+0800 (CST)
> new Date('2017/11/27 19:19')
< Mon Nov 27 2017 19:19:00 GMT+0800 (CST)
```

GMT 和 UTC 

GMT（Greenwich Mean Time）英国伦敦的皇家格林威治天文台的标准时间,有地球公转和自转的影响，不是特别准确。

UTC（Coordinated Universal Time）根据原子钟计算的标准时间

一般情况下，GMT 和 UTC 可以互换，但是实际上，GMT 是一个时区，而 UTC 是一个时间标准。

new Date():
构造出的日期用来显示时，会被转换为本地时间（调用 toString 方法）
后面的 GMT+0800 表示是“东八区”，CST 表示是“中国标准时间（China Standard Time)

时间字符串
类似于yyyy-mm-ddThh:mm:ss.sssZ的情况， 主要靠T 和Z来确定UTC以及时区
