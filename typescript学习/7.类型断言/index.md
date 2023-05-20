# 类型断言
- 使用as进行类型断言
- 使用<>进行类型断言
- 类型断言可以讲任意类型(string,number,...)断言为any类型，同时也可以将any类型断言为任意类型
```js
  const fun = (params: string | number): void => {
    let res: string[] = (params as string).split(" ");
    console.log("res", res);
  };

  fun("2022-10-10 22:12:23");

  const fun2 = (params: string | number): void => {
    let res: string[] = (<string>params).split(" ");
    console.log("res", res);
  };

  fun("2022-10-10 22:12:23");
```
