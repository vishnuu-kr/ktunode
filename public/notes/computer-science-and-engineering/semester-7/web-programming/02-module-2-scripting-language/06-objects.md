---
title: "Objects"
subject: "WEB PROGRAMMING"
module: "Module 2: Scripting language  "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162780fc9aa1fdbc8c0c8"
status: "completed"
scrapedAt: "2026-05-20T17:12:46.037Z"
---
# Web Programming: Module 2 - Scripting Language - Objects

## Introduction to Objects

Objects are fundamental building blocks in modern scripting languages like JavaScript. They allow us to group related data (properties) and behaviors (methods) into a single, cohesive unit. This approach, known as **Object-Oriented Programming (OOP)**, promotes code organization, reusability, and maintainability.

### Learning Outcomes:

*   **Understand the concept of objects as collections of properties and methods.**
*   **Differentiate between primitive data types and object data types.**
*   **Create and manipulate objects using object literals, constructor functions, and classes.**
*   **Access and modify object properties and methods.**
*   **Understand the concept of `this` keyword and its behavior in different contexts.**
*   **Explore built-in objects and their functionalities.**
*   **Understand the concept of inheritance and prototypes (if applicable to the specific scripting language).**

---

### 1. Objects: The Core Concept

#### 1.1 What is an Object?

An object is a **collection of key-value pairs**.

*   **Keys (or Properties/Attributes):** These are names that identify the data associated with the object. They are typically strings.
*   **Values:** These are the data associated with the keys. Values can be primitive data types (strings, numbers, booleans, null, undefined, symbols, bigints) or other objects.

Objects represent real-world entities or abstract concepts in a structured way.

#### 1.2 Objects vs. Primitive Data Types

| Feature            | Primitive Data Types                                 | Objects                                                              |
| :----------------- | :--------------------------------------------------- | :------------------------------------------------------------------- |
| **Structure**      | Single value                                         | Collection of properties (key-value pairs)                           |
| **Mutability**     | Immutable (cannot be changed after creation)         | Mutable (properties can be added, removed, or modified)             |
| **Data Storage**   | Directly hold the value                              | Hold a reference (memory address) to the actual data stored elsewhere |
| **Examples**       | `string`, `number`, `boolean`, `null`, `undefined` | Arrays, Functions, Dates, custom objects                             |
| **Access**         | Directly accessed                                    | Accessed via property names (using dot notation or bracket notation) |

**Example:**

```javascript
// Primitive data types
let name = "Alice"; // string
let age = 30;       // number
let isStudent = false; // boolean

// Object
let person = {
  firstName: "Alice",
  lastName: "Smith",
  age: 30,
  isStudent: false,
  greet: function() { // Method
    console.log("Hello, my name is " + this.firstName + " " + this.lastName);
  }
};
```

---

### 2. Creating and Manipulating Objects

There are several ways to create and manipulate objects in scripting languages.

#### 2.1 Object Literals (The Most Common Way)

Object literals provide a concise syntax for creating objects.

**Syntax:**

```javascript
let objectName = {
  key1: value1,
  key2: value2,
  methodName: function() {
    // code
  }
};
```

**Example:**

```javascript
let car = {
  make: "Toyota",
  model: "Camry",
  year: 2023,
  startEngine: function() {
    console.log("Engine started!");
  },
  displayInfo: function() {
    console.log(`Car: ${this.make} ${this.model} (${this.year})`);
  }
};
```

#### 2.2 Constructor Functions

Constructor functions are special functions used to create multiple instances of similar objects. They use the `new` keyword to create new objects.

**Syntax:**

```javascript
function ConstructorFunctionName(parameter1, parameter2, ...) {
  this.property1 = parameter1;
  this.property2 = parameter2;
  this.methodName = function() {
    // code
  };
}

let newObject = new ConstructorFunctionName(value1, value2, ...);
```

**Example:**

```javascript
function Book(title, author, yearPublished) {
  this.title = title;
  this.author = author;
  this.yearPublished = yearPublished;
  this.getDetails = function() {
    return `${this.title} by ${this.author} (${this.yearPublished})`;
  };
}

let book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
let book2 = new Book("1984", "George Orwell", 1949);

console.log(book1.title);        // Output: The Great Gatsby
console.log(book2.getDetails()); // Output: 1984 by George Orwell (1949)
```

**Important Note on Constructor Functions:** Methods defined directly within the constructor function are recreated for each instance, which can be less efficient. Prototypes are often used to define methods more efficiently.

#### 2.3 Classes (ES6 and later)

Classes provide a more structured and syntactically cleaner way to create objects compared to constructor functions. They are essentially syntactic sugar over prototype-based inheritance.

**Syntax:**

```javascript
class ClassName {
  constructor(parameter1, parameter2, ...) {
    this.property1 = parameter1;
    this.property2 = parameter2;
  }

  methodName1() {
    // code
  }

  methodName2() {
    // code
  }
}

let newObject = new ClassName(value1, value2, ...);
```

**Example:**

```javascript
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  describe() {
    console.log(`${this.fullName()} is ${this.age} years old.`);
  }
}

let person1 = new Person("John", "Doe", 25);
let person2 = new Person("Jane", "Smith", 32);

console.log(person1.firstName); // Output: John
person2.describe();             // Output: Jane Smith is 32 years old.
```

---

### 3. Accessing and Modifying Object Properties and Methods

#### 3.1 Dot Notation (`.`)

Used when the property name is a valid identifier (starts with a letter, underscore, or dollar sign, and contains only alphanumeric characters, underscores, or dollar signs).

**Syntax:**

```javascript
objectName.propertyName
objectName.methodName()
```

**Example:**

```javascript
let myObject = {
  name: "Example",
  value: 100
};

console.log(myObject.name);   // Accessing a property
myObject.value = 150;        // Modifying a property
myObject.greet = function() { console.log("Hello!"); }; // Adding a new property (method)
myObject.greet();            // Calling the method
```

#### 3.2 Bracket Notation (`[]`)

Used when the property name is not a valid identifier (e.g., contains spaces, hyphens, or starts with a number) or when the property name is stored in a variable.

**Syntax:**

```javascript
objectName['propertyName']
objectName['methodName']()
```

**Example:**

```javascript
let dynamicObject = {
  "first name": "Dynamic", // Property name with a space
  "2nd_value": 200
};

console.log(dynamicObject['first name']); // Accessing a property with a space
console.log(dynamicObject['2nd_value']);  // Accessing a property with a number

let propertyToAccess = "first name";
console.log(dynamicObject[propertyToAccess]); // Accessing using a variable

// Adding or modifying with bracket notation
dynamicObject["new-property"] = "some value";
dynamicObject["2nd_value"] = 250;
```

#### 3.3 Modifying Properties

You can change the value of an existing property or add a new one by assigning a new value to it.

**Example:**

```javascript
let user = {
  username: "coder",
  email: "coder@example.com"
};

user.username = "master coder"; // Modifying existing property
user.isAdmin = true;           // Adding a new property
```

#### 3.4 Deleting Properties

You can remove properties from an object using the `delete` operator.

**Syntax:**

```javascript
delete objectName.propertyName;
delete objectName['propertyName'];
```

**Example:**

```javascript
let tempObject = {
  id: 1,
  data: "temp"
};

delete tempObject.data;
console.log(tempObject); // Output: { id: 1 }
```

---

### 4. The `this` Keyword

The `this` keyword is a special keyword that refers to the **context** in which a function is executed. Its value can change depending on how and where the function is called.

#### 4.1 `this` in Methods

When `this` is used inside a method of an object, it refers to the **object itself** that the method is called upon.

**Example:**

```javascript
let book = {
  title: "The Hobbit",
  author: "J.R.R. Tolkien",
  displayInfo: function() {
    console.log(`Title: ${this.title}, Author: ${this.author}`);
  }
};

book.displayInfo(); // 'this' refers to the 'book' object
```

#### 4.2 `this` in Constructor Functions (and Classes)

When `this` is used inside a constructor function (or class `constructor`), it refers to the **newly created object** being instantiated.

**Example (Constructor Function):**

```javascript
function Car(make, model) {
  this.make = make;
  this.model = model;
  this.start = function() {
    console.log(`${this.make} ${this.model} started!`);
  };
}

let myCar = new Car("Honda", "Civic");
myCar.start(); // 'this' inside start refers to myCar
```

**Example (Class):**

```javascript
class Motorcycle {
  constructor(brand) {
    this.brand = brand;
  }
  ride() {
    console.log(`Riding the ${this.brand}.`);
  }
}

let myBike = new Motorcycle("Harley-Davidson");
myBike.ride(); // 'this' inside ride refers to myBike
```

#### 4.3 `this` in Global Context

In the global scope (outside of any function), `this` typically refers to the **global object** (e.g., `window` in browsers, `global` in Node.js).

**Example (Browser):**

```javascript
console.log(this === window); // Output: true
```

#### 4.4 `this` in Regular Functions (Non-Method)

When `this` is used in a regular function that is not a method of an object, its behavior can be tricky and depends on how it's called.

*   **Strict Mode (`'use strict';`):** `this` will be `undefined`.
*   **Non-Strict Mode:** `this` will refer to the global object.

**Example (Non-Strict Mode):**

```javascript
function showGlobal() {
  console.log(this);
}
showGlobal(); // Will log the global object (e.g., window)
```

**Example (Strict Mode):**

```javascript
'use strict';
function showGlobalStrict() {
  console.log(this);
}
showGlobalStrict(); // Will log undefined
```

**Important Point:** To explicitly control the value of `this` in function calls, you can use methods like `call()`, `apply()`, and `bind()`.

---

### 5. Built-in Objects

Scripting languages provide a wealth of built-in objects that offer pre-defined functionalities.

#### 5.1 `Object`

The `Object` constructor is the foundation of all objects. You can use its static methods to work with objects.

*   `Object.keys(obj)`: Returns an array of an object's own enumerable property names.
*   `Object.values(obj)`: Returns an array of an object's own enumerable property values.
*   `Object.entries(obj)`: Returns an array of an object's own enumerable string-keyed property `[key, value]` pairs.

**Example:**

```javascript
let employee = {
  name: "Alice",
  id: 101,
  department: "IT"
};

console.log(Object.keys(employee));   // Output: ["name", "id", "department"]
console.log(Object.values(employee)); // Output: ["Alice", 101, "IT"]
console.log(Object.entries(employee)); // Output: [["name", "Alice"], ["id", 101], ["department", "IT"]]
```

#### 5.2 `Array`

Arrays are special types of objects that store ordered collections of data.

*   **Creation:** `let arr = [1, 2, 3];` or `let arr = new Array(1, 2, 3);`
*   **Accessing elements:** `arr[index]`
*   **Common methods:** `push()`, `pop()`, `shift()`, `unshift()`, `slice()`, `splice()`, `forEach()`, `map()`, `filter()`, `reduce()`, etc.

**Example:**

```javascript
let numbers = [10, 20, 30];
numbers.push(40);
console.log(numbers);       // Output: [10, 20, 30, 40]
console.log(numbers[1]);    // Output: 20
```

#### 5.3 `String`

Strings are objects that represent sequences of characters.

*   **Creation:** `let str = "Hello";` or `let str = new String("Hello");` (less common)
*   **Properties:** `length`
*   **Common methods:** `toUpperCase()`, `toLowerCase()`, `substring()`, `indexOf()`, `slice()`, `split()`, etc.

**Example:**

```javascript
let greeting = "Welcome";
console.log(greeting.length);     // Output: 7
console.log(greeting.toUpperCase()); // Output: WELCOME
```

#### 5.4 `Number`

Represents numeric values.

*   **Creation:** `let num = 123;` or `let num = new Number(123);`
*   **Properties:** `MAX_VALUE`, `MIN_VALUE`, `POSITIVE_INFINITY`, `NEGATIVE_INFINITY`
*   **Methods:** `toFixed()`, `toPrecision()`, `toString()`

**Example:**

```javascript
let price = 19.99;
console.log(price.toFixed(2)); // Output: "19.99"
```

#### 5.5 `Boolean`

Represents truth values (`true` or `false`).

*   **Creation:** `let isTrue = true;` or `let isTrue = new Boolean(true);`

#### 5.6 `Date`

Represents dates and times.

*   **Creation:** `let today = new Date();`
*   **Methods:** `getFullYear()`, `getMonth()`, `getDate()`, `getDay()`, `getHours()`, `getMinutes()`, `getSeconds()`, `setFullYear()`, etc.

**Example:**

```javascript
let now = new Date();
console.log(now.getFullYear()); // Output: The current year
```

#### 5.7 `Math`

A built-in object that provides properties and methods for mathematical constants and functions. It's not a constructor, so you don't use `new Math()`.

*   **Constants:** `Math.PI`, `Math.E`
*   **Methods:** `Math.round()`, `Math.floor()`, `Math.ceil()`, `Math.random()`, `Math.max()`, `Math.min()`, `Math.pow()`, `Math.sqrt()`, etc.

**Example:**

```javascript
console.log(Math.PI);        // Output: 3.141592653589793
console.log(Math.round(4.7)); // Output: 5
console.log(Math.random());   // Output: A random number between 0 (inclusive) and 1 (exclusive)
```

---

### 6. Inheritance and Prototypes (JavaScript Focus)

*Note: This section specifically applies to JavaScript's prototype-based inheritance. Other scripting languages might have different mechanisms.*

In JavaScript, objects can inherit properties and methods from other objects. This is achieved through **prototypes**.

#### 6.1 The Prototype Chain

Every JavaScript object has an internal property called `[[Prototype]]` (often accessed via `__proto__` or `Object.getPrototypeOf()`) which is either `null` or a reference to another object. This creates a **prototype chain**.

When you try to access a property or method on an object, JavaScript first looks at the object itself. If it's not found, it then looks at the object's prototype, and then the prototype's prototype, and so on, until it reaches the end of the chain (where the prototype is `null`).

#### 6.2 Constructor Functions and Prototypes

Constructor functions automatically create a `prototype` property on the function itself. This `prototype` object is then used as the `[[Prototype]]` for all objects created using that constructor with the `new` keyword.

**Example:**

```javascript
function Animal(name) {
  this.name = name;
}

// Adding a method to the Animal's prototype
Animal.prototype.speak = function() {
  console.log(`${this.name} makes a sound.`);
};

let dog = new Animal("Buddy");
dog.speak(); // 'speak' is found on Animal.prototype

console.log(Object.getPrototypeOf(dog) === Animal.prototype); // Output: true
```

**Benefits of Prototype Methods:**

*   **Efficiency:** Methods are defined only once on the prototype, not duplicated for each instance.
*   **Inheritance:** Allows objects to inherit behaviors.

#### 6.3 Classes and Prototypes

Classes in JavaScript are syntactic sugar for prototype-based inheritance. Methods defined within a class are automatically added to the `prototype` of the constructor function generated by the class.

**Example (revisiting the class example):**

```javascript
class Dog {
  constructor(name) {
    this.name = name;
  }

  // This method is automatically added to Dog.prototype
  bark() {
    console.log(`${this.name} barks!`);
  }
}

let myDog = new Dog("Rex");
myDog.bark();

console.log(Object.getPrototypeOf(myDog).hasOwnProperty('bark')); // Output: true
```

#### 6.4 `Object.create()`

You can create an object with a specified prototype using `Object.create()`.

**Syntax:**

```javascript
let newObject = Object.create(prototypeObject);
```

**Example:**

```javascript
let animalPrototype = {
  makeSound: function() {
    console.log("Generic animal sound.");
  }
};

let wildDog = Object.create(animalPrototype);
wildDog.makeSound(); // Output: Generic animal sound.
```

---

### **Important Points to Remember:**

*   **Objects are collections of key-value pairs.** Keys are typically strings, and values can be any data type, including other objects.
*   **Object literals (`{}`) are the most common and convenient way to create objects.**
*   **Constructor functions and classes are used for creating multiple similar objects (instances).**
*   **Use dot notation (`.`) for accessing properties with valid identifiers, and bracket notation (`[]`) for property names with spaces or when the name is dynamic.**
*   **The `this` keyword's value is context-dependent.** It refers to the object when used in methods, the new object in constructors, and the global object (or `undefined` in strict mode) in other contexts.
*   **Master the `this` keyword's behavior** to avoid common pitfalls.
*   **Leverage built-in objects** like `Object`, `Array`, `String`, `Number`, `Date`, and `Math` for efficient programming.
*   **In JavaScript, inheritance is achieved through prototypes.** Understanding the prototype chain is crucial for advanced object manipulation.
*   **Methods defined on the prototype** are more efficient than methods defined directly on object instances.

---

### Practice Questions and Exercises

**Question 1:**
Create an object literal representing a "Book" with properties: `title`, `author`, and `publicationYear`. Add a method `getSummary()` that returns a string in the format: "Title by Author (Year)".

**Answer 1:**

```javascript
let book = {
  title: "The Lord of the Rings",
  author: "J.R.R. Tolkien",
  publicationYear: 1954,
  getSummary: function() {
    return `${this.title} by ${this.author} (${this.publicationYear})`;
  }
};

console.log(book.getSummary());
```

**Question 2:**
Using a constructor function, create a `Circle` object with a `radius` property and a `getArea()` method that calculates and returns the area of the circle (Area = π * radius²).

**Answer 2:**

```javascript
function Circle(radius) {
  this.radius = radius;
  this.getArea = function() {
    return Math.PI * this.radius * this.radius;
  };
}

let myCircle = new Circle(5);
console.log(myCircle.getArea());
```

**Question 3:**
What will be the output of the following code?

```javascript
let user = {
  name: "Alice",
  age: 25,
  details: function() {
    console.log(this.name + " is " + this.age);
  }
};

let newUser = user;
newUser.age = 30;
user.details();
```

**Answer 3:**
`Alice is 30`
**Explanation:** `newUser` is not a new object, but a reference to the original `user` object. When `newUser.age` is changed, it's the same `age` property of the `user` object that gets updated.

**Question 4:**
Explain the difference between dot notation and bracket notation for accessing object properties. Provide an example where bracket notation is necessary.

**Answer 4:**
Dot notation (`object.propertyName`) is used for accessing properties whose names are valid JavaScript identifiers. Bracket notation (`object['propertyName']`) can be used for any property name and is essential when the property name contains spaces, hyphens, starts with a number, or when the property name is stored in a variable.

**Example where bracket notation is necessary:**

```javascript
let config = {
  "user-name": "admin",
  "max-connections": 10
};

let propertyToGet = "user-name";

// Cannot use dot notation for "user-name" or "max-connections"
// console.log(config.user-name); // Error

// Using bracket notation
console.log(config["user-name"]);        // Output: admin
console.log(config[propertyToGet]);      // Output: admin
console.log(config["max-connections"]);  // Output: 10
```

**Question 5:**
Given the following `Student` class, what will be printed to the console?

```javascript
class Student {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }

  displayId() {
    console.log(`Student ID: ${this.id}`);
  }
}

const student1 = new Student("Bob", "S123");
const student2 = { name: "Charlie", id: "S456", displayId: student1.displayId };

student2.displayId();
```

**Answer 5:**
`Student ID: S123`
**Explanation:** Although `student2` is an object literal, it directly assigns the `displayId` method from `student1`. When `student2.displayId()` is called, `this` inside the `displayId` function refers to `student2`. However, the `displayId` function itself was copied from `student1`, and its internal `this` context might not be what's expected if not handled carefully.

**Corrected Example for better demonstration:**
Let's consider a scenario where the method is attached to the prototype or passed correctly.

```javascript
class Student {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }

  displayId() {
    console.log(`Student ID: ${this.id}`);
  }
}

const student1 = new Student("Bob", "S123");
const student2 = { name: "Charlie", id: "S456" };

// Explicitly binding the method to student2
student2.displayId = student1.displayId.bind(student2);

student2.displayId(); // Now prints: Student ID: S456
```

In the *original* Question 5, `student1.displayId` is a function whose `this` context is `student1`. When assigned to `student2.displayId`, calling `student2.displayId()` executes the function, but `this` inside it still refers to the original `student1` because `bind` or `call`/`apply` was not used. This highlights the importance of `this` context. The provided answer `Student ID: S123` is correct based on the original (slightly flawed) question's logic where the `this` context is not explicitly changed.

**Let's re-evaluate the original Question 5's output:**
When `student2.displayId()` is called, the function `student1.displayId` is executed. Inside that function, `this` refers to the object that the method was invoked on. Since `student2.displayId` is a direct assignment of the function object, and not a reference to a method that is automatically bound, `this` inside `student1.displayId` when called as `student2.displayId()` will refer to `student2`. Therefore, it should correctly print `Student ID: S456`. My apologies for the initial misinterpretation.

**Revised Answer 5 (Correct):**
`Student ID: S456`

---
