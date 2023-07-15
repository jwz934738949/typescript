/** @format */

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  sayHi() {
    console.log(`name: ${this.name}, age: ${this.age}, sayHi!`);
  }
}

let person = new Person("name", 15);

console.log(person);
person.sayHi();

class Man extends Person {
  constructor(name: string, age: number) {
    // 调用父类构造函数
    super(name, age);
  }
  // 重写父类方法
  sayHi() {
    console.log("Man sayHi!");
    // 调用父类方法
    super.sayHi();
  }
}

let man = new Man("男人", 20);
console.log(man);
man.sayHi();

class Person2 {
  name: string;
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.name = this.firstName + this.lastName;
  }

  get fullName() {
    return `format: ${this.firstName}${this.lastName}`;
  }

  set fullName(value: string) {
    let list = value.split("-");

    this.firstName = list[0];
    this.lastName = list[1];
  }
}

const person2 = new Person2("李", "四");
console.log(person2.fullName);

person2.fullName = "张-三";
console.log(person2.fullName);

class StaticA {
  static name1: string;

  static fun() {
    console.log("name1: " + this.name1);
  }
}

const staticA = new StaticA();

// staticA.name1 = 'aaabbb'; // 报错
// staticA.fun(); // 报错

StaticA.name1 = "aaabbb";
StaticA.fun();
