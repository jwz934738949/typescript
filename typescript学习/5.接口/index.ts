/** @format */

interface IPerson {
  name: string;
  age: number;
  gender: boolean;
}

const person: IPerson = {
  name: "test123456",
  age: 25,
  gender: false,
};

console.log(person);

interface IPerson2 {
  name: string;
  age: number;
  gender?: boolean;
}

const person2: IPerson2 = {
  name: "test123456",
  age: 25,
};

console.log(person2);

interface IPerson3 {
  readonly id: string;
  name: string;
  age: number;
}

const person3: IPerson3 = {
  id: "0001",
  name: "test123456",
  age: 25,
};

// person3.id = "0002"; // 报错
person3.name = "test1111";

interface IArray {
  [index: number]: string;
}

const list1: IArray = ["1", "2", "3"];

interface IFunc {
  (params1: string, params2: number): boolean;
}

const fun: IFunc = (p1, p2) => {
  if (p1 === "test" || p2 === 1) return true;
  return false;
};

console.log(fun("test", 123));
console.log(fun("test2", 123));
