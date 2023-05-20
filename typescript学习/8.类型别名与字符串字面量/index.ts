/** @format */

type unionType = string | boolean | number;

let a: unionType = 15;
let b: unionType = true;
let c: unionType = "aabbc";
// let d: unionType = null; // 报错

type stringType = "aaa" | "bbb" | "ccc";

let str: stringType = "aaa";
// let str2: stringType = "12345"; // 报错
