## 元组与枚举
###元组(tuple)
- 合并不同的数据类型
```js
  let arr1: [number, string] = [123456, "123456"];

  arr1.push(111);
  // arr1.push(true); // 报错
```
###枚举(enum)
- 枚举值常用于对某些数值进行命名，通过引用命名来使用对应的值
- 枚举定义后，可以根据枚举获取对应的值，也可以通过值来获取对应枚举
- 定义枚举时可以不手动进行赋值，默认按照从0开始依次递增
```js
  enum numberType {
    first,
    second,
    third,
    forth,
  }

  console.log(numberType);

  // 打印结果
  {
  '0': 'first',
  '1': 'second',
  '2': 'third',
  '3': 'forth',
  first: 0,
  second: 1,
  third: 2,
  forth: 3
}
```
- 手动赋值后，之后的枚举会按照手动赋值依次递增；当出现重复数据后，后面的会覆盖掉前面的
```js
  enum numberType {
    first = 3,
    second,
    third,
    forth,
  }

  console.log(numberType);

  // 打印结果为
  {
    '3': 'first',
    '4': 'second',
    '5': 'third',
    '6': 'forth',
    first: 3,
    second: 4,
    third: 5,
    forth: 6
  }

  enum numberType {
    first = 3,
    second = 1,
    third,
    forth,
  }

  console.log(numberType);

  // 打印结果为
  {
    '1': 'second',
    '2': 'third',
    '3': 'forth',
    first: 3,
    second: 1,
    third: 2,
    forth: 3
  }
```

