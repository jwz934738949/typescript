/** @format */

let arr1: [number, string] = [123456, "123456"];

arr1.push(111);
// arr1.push(true); // 报错

// enum numberType {
//   first,
//   second,
//   third,
//   forth,
// }

// console.log(numberType);

// enum numberType {
//   first = 3,
//   second,
//   third,
//   forth,
// }

// console.log(numberType);

enum numberType {
  first = 3,
  second = 1,
  third,
  forth,
}

console.log(numberType);
