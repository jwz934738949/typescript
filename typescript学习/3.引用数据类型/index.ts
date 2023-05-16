/** @format */

let arr1: number[] = [10, 20, 30];
console.log(arr1);

let arr2: Array<string> = ["aa", "bb"];
console.log(arr2);

let obj: object = {};
obj = [];
obj = new String();
obj = null;
obj = undefined;

let params: any = {};
params = 10;
params = "1234";
params = false;
params = [1, 2, 3, 4];
params = { aa: 123 };

function fun(): void {
  console.log("this is function");
}

console.log(fun());
