/** @format */

// 定义变量时赋值，自动将该变量转为number类型,给该变量赋值字符串会报错
let params1 = 444;
// params1 = 'abc'; // 报错

// 定义变量不赋值，默认转为any类型
let params2;
params2 = "1234";
params2 = 1234;
params2 = false;

let params3: number | string = 12345;
params3 = "1234abccc";
params3.split(","); // 未报错

params3 = 1234;
// params3.split() // 报错
