/** @format */

function fun1(params1: number, params2: number): number {
  return params1 * params2;
}

console.log(fun1(20, 20));

const fun2 = (name: string): string => {
  name = "欢迎" + name;
  console.log(name);
  return name;
};

// let res: number = fun2('helloworld'); // 报错
let res: string = fun2("helloworld");
console.log(res);

// const notRequiredFun = (name: string, address?: string, age: number): void => {}; //报错，必填参数要位于可选参数之后

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

const defaultFun = (name: string, address?: string, age: number = 10): void => {
  let person = `名称：${name}，年龄：${age}，地址：${address}`;
  console.log(person);
};

defaultFun("bbb", "china");

const restFun = (p1: string, p2: string, ...param: number[]) => {
  console.log(p1, p2, ...param);
};

restFun("1", "2", 3, 4, 5, 6, 7, 8);

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
