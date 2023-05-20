/** @format */

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
