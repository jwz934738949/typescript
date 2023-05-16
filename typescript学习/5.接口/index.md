# 接口
## 对象接口
- 对行为进行抽象，是一种对象约束
```js
  interface IPerson {
    name: string;
    age: number;
    gender: boolean;
  }

  const person: IPerson = {
    name: "test123456",
    age: 25,
    gender: false,
  };
```
- 接口中所有属性必须存在，不能多也不能少
- 可选属性用于某些不是一定存在的属性
```js
  interface IPerson2 {
    name: string;
    age: number;
    gender?: boolean;
  }

  const person2: IPerson2 = {
    name: "test123456",
    age: 25,
  };
```
- readonly只读属性，只能初始化，无法被修改
```js
  const person3: IPerson3 = {
    id: "0001",
    name: "test123456",
    age: 25,
  };

  person3.id = "0002"; // 报错
  person3.name = "test1111";
```

## 数组接口
- 使用interface定义数组类型，不常用
```js
  interface IArray {
    [index: number]: string;
  }

  const list1: IArray = ["1", "2", "3"];
```

## 函数接口
- 使用(参数:类型,...):返回值类型定义函数接口
```js
  interface IFunc {
    (params1: string, params2: number): boolean;
  }

  const fun: IFunc = (p1, p2) => {
    if (p1 === "test" || p2 === 1) return true;
    return false;
  };

  console.log(fun("test", 123));
  console.log(fun("test2", 123));
```