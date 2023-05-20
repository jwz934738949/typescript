# 函数
## 函数定义
- 命名函数
```js
  function fun1(params1: number, params2: number): number {
    return params1 * params2;
  }

  console.log(fun1(20, 20));
```
- 函数表达式
```js
  const fun2 = (name: string): string => {
    name = "欢迎" + name;
    console.log(name);
    return name;
  };

  // let res: number = fun2('helloworld'); // 报错
  let res: string = fun2("helloworld");
  console.log(res);
```
## 可选参数和默认参数
- 可选参数
使用？来代表可选参数，同时函数参数必填参数一定会在可选参数之前
```js
  //报错，必填参数要位于可选参数之后
  // const notRequiredFun = (name: string, address?: string, age: number): void => {}; 

  const notRequiredFun1 = (name: string, age: number, address: string): void => {
    let person = `名称：${name}，年龄：${age}`;
    console.log(person);
  };

  const notRequiredFun2 = (name: string, age: number, address?: string): void => {
    let person = `名称：${name}，年龄：${age}`;
    console.log(person);
  };

  // notRequiredFun1("aaa", 15); // 报错
  notRequiredFun2("aaa", 15);
```
- 默认参数
默认参数使用=来进行默认赋值，同时默认参数可以在可选参数之后
```js
  const defaultFun = (name: string, address?: string, age: number = 10): void => {
    let person = `名称：${name}，年龄：${age}，地址：${address}`;
    console.log(person);
  };

  defaultFun("bbb", "china");
```

## 数组接口
- 使用interface定义数组类型，不常用
```js
  interface IArray {
    [index: number]: string;
  }

  const list1: IArray = ["1", "2", "3"];
```

## 剩余参数与函数重载
- 使用...来接收剩余参数
```js
  const restFun = (p1: string, p2: string, ...param: number[]) => {
    console.log(p1, p2, ...param);
  };

  restFun("1", "2", 3, 4, 5, 6, 7, 8);
```
- 函数重载
```js
  // 函数重载声明
  function fun3(p1: string, p2: string): string;
  function fun3(p1: number, p2: number): number;

  // 函数重载实现
  function fun3(p1: string | number, p2: string | number): string | number {
    if (typeof p1 === "string" && typeof p2 === "string") {
      return p1 + p2;
    } else if (typeof p1 === "number" && typeof p2 === "number") {
      return p1 + p2;
    }
    return "";
  }

  console.log(fun3(10, 20));
  console.log(fun3("111", "222"));
```