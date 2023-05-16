/** @format */
const person = {
    name: "test123456",
    age: 25,
    gender: false,
};
console.log(person);
const person2 = {
    name: "test123456",
    age: 25,
};
console.log(person2);
const person3 = {
    id: "0001",
    name: "test123456",
    age: 25,
};
// person3.id = "0002"; // 报错
person3.name = "test1111";
const list1 = ["1", "2", "3"];
const fun = (p1, p2) => {
    if (p1 === "test" || p2 === 1)
        return true;
    return false;
};
console.log(fun("test", 123));
console.log(fun("test2", 123));
