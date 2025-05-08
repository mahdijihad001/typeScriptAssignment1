## 1. What are some differences between interfaces and types in TypeScript? 

* Interface can only be defined in the form of an object. Type can be defined in any type.
* Interfaces can be combined by extending them, and types can be combined by intersection.
* Interface can be defined multiple times with the same name, while type cannot be defined more than once.
* Interface can only be used with Non Primitive Data type a and can be used with both Primitive and Non Primitive types.


## 2. What is the use of the keyof keyword in TypeScript? Provide an example.
* keyof is an important keyword in TypeScript. It returns the keys of an object type in the form of a Union.

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}
<br>
const person: Person = { name: "Mohammad Jihad", age: 17, address: "Savar , Dhaka" };
<br>
const name = getProperty(person, "name");
<br>
const email = getProperty(person, "email");
<br>

## 6. How does TypeScript help in improving code quality and project maintainability? 

* Instead of getting an error at runtime, it reports an error at development time.
* Type Definition works in the form of Documentation.
* New developers can understand code quickly.
* You don't need to remember properties to use the API.
* It is safe to change code in large projects.
* Protection from unexpected data types.
* Use in Frontend & Backend
* Increases type definition and security of code.

