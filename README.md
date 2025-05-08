## 1. What are some differences between interfaces and types in TypeScript? 


## 2. What is the use of the keyof keyword in TypeScript? Provide an example.


function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}
<br>
<br>
const person: Person = { name: "Mohammad Jihad", age: 17, address: "Savar , Dhaka" };
<br>
<br>
const name = getProperty(person, "name");
<br>
const email = getProperty(person, "email");
<br>

## 6. How does TypeScript help in improving code quality and project maintainability? 



