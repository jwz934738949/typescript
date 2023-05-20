"use strict";
/** @format */
function fun1(params1, params2) {
    return params1 * params2;
}
console.log(fun1(20, 20));
const fun2 = (name) => {
    name = "欢迎" + name;
    console.log(name);
    return name;
};
// let res: number = fun2('helloworld'); // 报错
let res = fun2("helloworld");
console.log(res);
// const notRequiredFun = (name: string, address?: string, age: number): void => {}; //报错，必填参数要位于可选参数之后
const notRequiredFun1 = (name, age, address) => {
    let person = `名称：${name}，年龄：${age}`;
    console.log(person);
};
const notRequiredFun2 = (name, age, address) => {
    let person = `名称：${name}，年龄：${age}`;
    console.log(person);
};
// notRequiredFun1("aaa", 15); // 报错
notRequiredFun2("aaa", 15);
const defaultFun = (name, address, age = 10) => {
    let person = `名称：${name}，年龄：${age}，地址：${address}`;
    console.log(person);
};
defaultFun("bbb", "china");
const restFun = (p1, p2, ...param) => {
    console.log(p1, p2, ...param);
};
restFun("1", "2", 3, 4, 5, 6, 7, 8);
// 函数重载实现
function fun3(p1, p2) {
    if (typeof p1 === "string" && typeof p2 === "string") {
        return p1 + p2;
    }
    else if (typeof p1 === "number" && typeof p2 === "number") {
        return p1 + p2;
    }
    return "";
}
console.log(fun3(10, 20));
console.log(fun3("111", "222"));
