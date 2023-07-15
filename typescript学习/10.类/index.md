## 类
### 属性与方法
- 使用class关键字进行类的定义
- 类的属性必须声明类型，同时构造函数中传参要与属性类型保持一致，或者使用any类型
```js
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
```
### 类的继承
- 定义类时使用extends关键字进行类的继承
- 子类可以继承类的所有成员与方法
- 子类使用super关键字可以引用父类，包括构造方法以及一般方法
- 子类可以重写父类方法
```js
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
```

### 类的存取器
- 使用get与set进行存取器的定义，get用与获取，set用于设置
```js
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
```

### 类的静态成员与静态方法
- 使用static关键字定义静态成员与静态方法
- 静态成员与静态方法无法被实例所使用，只能被类调用
```js
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
```


