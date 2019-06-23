# mongodb

## 常用命名

```shell
# 进入 mongo
mongo


db
```

## 插入数据

```shell
db.product.insert({"_id":1,"productname":"商品1","price":15});
db.product.insert({"_id":2,"productname":"商品2","price":36});

db.order.insert({"_id":1,"pid":1,"ordername":"订单1","uid":1});
db.order.insert({"_id":2,"pid":2,"ordername":"订单2","uid":2});
db.order.insert({"_id":3,"pid":2,"ordername":"订单3","uid":2});
db.order.insert({"_id":4,"pid":1,"ordername":"订单4","uid":1});

db.user.insert({"_id":1,"username":1});
db.user.insert({"_id":2,"username":2});
```

## 查询

```shell
db.product.find();
db.order.find();
db.user.find();
```

## 多表查询

1. `$lookup`
2. `populate`

### 2 个集合查询

`$lookup`:

- localField：在输入文档中的查找字段
- from：需要连接的集合
- foreignField：需要在 from 集合中查找的字段
- as：输出的字段名字

```shell
db.product.aggregate([
  {
    $lookup: {
      from: "order",
      localField: "_id",
      foreignField: "pid",
      as: "order_docs"
    }
  }
]);
```

输出：

```shell
/* 1 */
{
    "_id" : 1.0,
    "productname" : "商品1",
    "price" : 15.0,
    "order_docs" : [
        {
            "_id" : 1.0,
            "pid" : 1.0,
            "ordername" : "订单1",
            "uid" : 1.0
        },
        {
            "_id" : 4.0,
            "pid" : 1.0,
            "ordername" : "订单4",
            "uid" : 1.0
        }
    ]
}

/* 2 */
{
    "_id" : 2.0,
    "productname" : "商品2",
    "price" : 36.0,
    "order_docs" : [
        {
            "_id" : 2.0,
            "pid" : 2.0,
            "ordername" : "订单2",
            "uid" : 2.0
        },
        {
            "_id" : 3.0,
            "pid" : 2.0,
            "ordername" : "订单3",
            "uid" : 2.0
        }
    ]
}
```

### 3 个集合查询

```shell
db.order.aggregate([
  {
    $lookup: {
      from: "product",
      localField: "pid",
      foreignField: "_id",
      as: "product_docs"
    }
  },
  {
    $lookup: {
      from: "user",
      localField: "uid",
      foreignField: "_id",
      as: "user_docs"
    }
  }
])
```

结果：

```shell
/* 1 */
{
    "_id" : 1.0,
    "pid" : 1.0,
    "ordername" : "订单1",
    "uid" : 1.0,
    "product_docs" : [
        {
            "_id" : 1.0,
            "productname" : "商品1",
            "price" : 15.0
        }
    ],
    "user_docs" : [
        {
            "_id" : 1.0,
            "username" : 1.0
        }
    ]
}

/* 2 */
{
    "_id" : 2.0,
    "pid" : 2.0,
    "ordername" : "订单2",
    "uid" : 2.0,
    "product_docs" : [
        {
            "_id" : 2.0,
            "productname" : "商品2",
            "price" : 36.0
        }
    ],
    "user_docs" : [
        {
            "_id" : 2.0,
            "username" : 2.0
        }
    ]
}

/* 3 */
{
    "_id" : 3.0,
    "pid" : 2.0,
    "ordername" : "订单3",
    "uid" : 2.0,
    "product_docs" : [
        {
            "_id" : 2.0,
            "productname" : "商品2",
            "price" : 36.0
        }
    ],
    "user_docs" : [
        {
            "_id" : 2.0,
            "username" : 2.0
        }
    ]
}

/* 4 */
{
    "_id" : 4.0,
    "pid" : 1.0,
    "ordername" : "订单4",
    "uid" : 1.0,
    "product_docs" : [
        {
            "_id" : 1.0,
            "productname" : "商品1",
            "price" : 15.0
        }
    ],
    "user_docs" : [
        {
            "_id" : 1.0,
            "username" : 1.0
        }
    ]
}
```
