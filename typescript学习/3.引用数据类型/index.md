# 引用数据类型
## 数组
- 数组定义
1. 类型+[]
2. 泛型
```js
  let arr1: number[] = [10, 20, 30];
  console.log(arr1);

  let arr2: Array<string> = ["aa", "bb"];
  console.log(arr2);
```

## 对象
- 对象类型是除基本数据类型之外的类型，数组，对象，undefined,null均可以为对象
```js
  let obj: object = {};
  obj = []
  obj = new String()
  obj = null
  obj = undefined
```

## any
- any类型为任意类型，可以是基本数据类型，也可以是引用数据类型
```js
  let params: any = {};
  params = 10;
  params = "1234";
  params = false;
  params = [1, 2, 3, 4];
  params = { aa: 123 };
```

## void
- void类型表示没有任何类型，常用于无返回值的函数中
```js
  function fun(): void {
    console.log("this is function");
  }

  console.log(fun());
```