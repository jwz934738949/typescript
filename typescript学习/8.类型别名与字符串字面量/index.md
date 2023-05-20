## 类型别名与字符串字面量
- 使用type关键字进行类型别名或字符串字面量类型的声明
- 常用于联合类型中，减少重复代码编写
- 定义字符串字面量类型后，给对应字符串赋值必须为字符串字面量类型中的一种
```js
  type unionType = string | boolean | number;

  let a: unionType = 15;
  let b: unionType = true;
  let c: unionType = "aabbc";
  // let d: unionType = null; // 报错

  type stringType = "aaa" | "bbb" | "ccc";

  let str: stringType = "aaa";
  // let str2: stringType = "12345"; // 报错
```
