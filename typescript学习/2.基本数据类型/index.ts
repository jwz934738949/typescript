/** @format */

let params1: number = 40;
let params2: string = "字符串";
let params3: boolean = true;

console.log("before: " + params1);
console.log("before: " + params2);
console.log("before: " + params3);

params1 = 50;
params2 = "字符串abcde";
params3 = false;

console.log("after: " + params1);
console.log("after: " + params2);
console.log("after: " + params3);

params1 = undefined;
params2 = undefined;
params3 = undefined;

console.log("undefined: " + params1);
console.log("undefined: " + params2);
console.log("undefined: " + params3);

params1 = null;
params2 = null;
params3 = null;

console.log("null: " + params1);
console.log("null: " + params2);
console.log("null: " + params3);
