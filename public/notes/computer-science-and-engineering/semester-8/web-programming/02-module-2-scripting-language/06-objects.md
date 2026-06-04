---
title: "Objects"
subject: "WEB PROGRAMMING"
module: "Module 2: Scripting language  "
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8cc28"
status: "completed"
scrapedAt: "2026-05-20T17:28:16.663Z"
---
# WEB PROGRAMMING: Module 2 - Scripting Languages: Objects

## Learning Outcomes:

Upon successful completion of this topic, you will be able to:

*   **Understand the fundamental concept of objects** in programming.
*   **Differentiate between primitive data types and objects.**
*   **Explain the characteristics of objects**, including properties and methods.
*   **Create and manipulate objects** in a scripting language.
*   **Identify and utilize built-in objects** provided by scripting languages.
*   **Understand the concept of object-oriented programming (OOP)** and its basic principles in relation to objects.

---

## 1. What are Objects?

In the context of scripting languages (and programming in general), an **object** is a fundamental building block that represents a real-world entity or a logical concept. Think of it as a container that bundles together data (attributes or properties) and the operations that can be performed on that data (behaviors or methods).

### Key Concepts and Definitions:

*   **Entity/Concept Representation:** Objects allow us to model complex ideas or real-world items in a structured way within our programs.
*   **Data + Behavior:** The core idea is that objects combine data (what they *have*) with behavior (what they *can do*).
*   **Encapsulation:** This principle means that an object's data and the methods that operate on that data are bundled together, hiding the internal complexities from the outside world.

### Analogy: A Car

Let's consider a **Car** as an object:

*   **Properties (Data):**
    *   `color` (e.g., "red", "blue")
    *   `make` (e.g., "Toyota", "Ford")
    *   `model` (e.g., "Camry", "Mustang")
    *   `year` (e.g., 2023)
    *   `speed` (e.g., 0 km/h)
*   **Methods (Behavior):**
    *   `start()` (e.g., turn on the engine)
    *   `accelerate(amount)` (e.g., increase speed)
    *   `brake()` (e.g., decrease speed)
    *   `turn(direction)` (e.g., steer left or right)

---

## 2. Primitive Data Types vs. Objects

Scripting languages typically have two main categories of data: primitive data types and objects.

### Primitive Data Types:

These are the most basic data types and represent single, simple values. They do not have properties or methods associated with them directly.

**Examples of Primitive Data Types (common across many scripting languages like JavaScript, Python):**

*   **Numbers:** `10`, `3.14`, `-5`
*   **Strings:** `"Hello"`, `'World'`
*   **Booleans:** `true`, `false`
*   **Null:** `null` (represents the intentional absence of any object value)
*   **Undefined:** `undefined` (represents a variable that has been declared but not assigned a value)

### Objects:

As discussed, objects are more complex. They are instances of a **class** (a blueprint for creating objects) and contain properties and methods.

**Key Differences:**

| Feature         | Primitive Data Types                       | Objects                                                              |
| :-------------- | :----------------------------------------- | :------------------------------------------------------------------- |
| **Nature**      | Simple, individual values                  | Complex, structured data bundles                                     |
| **Properties**  | No inherent properties or methods          | Have properties (data) and methods (behavior)                        |
| **Mutability**  | Generally immutable (cannot be changed)    | Can be mutable (their properties can be changed)                   |
| **Storage**     | Stored directly by value                   | Stored by reference (a pointer to the object's location in memory) |
| **Creation**    | Declared with a value                      | Created using constructors or literal syntax                         |
| **Example**     | `let count = 5;`                           | `let myCar = { make: "Honda", model: "Civic" };`                   |

---

## 3. Characteristics of Objects: Properties and Methods

Every object has two primary components:

### Properties:

Properties are the data or attributes associated with an object. They describe the state or characteristics of the object.

*   **Definition:** A property is a key-value pair. The **key** is the name of the property, and the **value** is the data associated with that key.
*   **Data Types of Properties:** Property values can be any data type, including other objects, arrays, functions, primitives, etc.

### Methods:

Methods are functions that are associated with an object. They define the behaviors or actions that an object can perform.

*   **Definition:** A method is a function stored as a property of an object.
*   **Accessing Properties and Methods:** You typically access properties and methods using dot notation (`object.property` or `object.method()`) or bracket notation (`object['property']` or `object['method']()`).

**Example (JavaScript):**

```javascript
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  // Method: a function that belongs to the object
  greet: function() {
    console.log("Hello, my name is " + this.firstName + " " + this.lastName);
  }
};

// Accessing properties
console.log(person.firstName); // Output: John
console.log(person.age);       // Output: 30

// Calling a method
person.greet();              // Output: Hello, my name is John Doe
```

**Important Note on `this`:**
The keyword `this` within a method refers to the object that the method is called upon. In the `greet` method, `this.firstName` refers to `person.firstName`.

---

## 4. Creating and Manipulating Objects

Scripting languages offer various ways to create and work with objects.

### 4.1 Creating Objects:

#### Object Literal Syntax:

This is a common and concise way to create objects.

**Example (JavaScript):**

```javascript
// Creating an object using object literal
let book = {
  title: "The Hitchhiker's Guide to the Galaxy",
  author: "Douglas Adams",
  pages: 224,
  isFiction: true
};

console.log(book.title); // Output: The Hitchhiker's Guide to the Galaxy
```

#### Constructor Functions (and Classes):

Constructor functions (or classes in modern JavaScript) are blueprints for creating multiple objects with similar structures.

**Example (JavaScript - Constructor Function):**

```javascript
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.speed = 0;

  this.accelerate = function(amount) {
    this.speed += amount;
    console.log(`Speed increased to ${this.speed} km/h`);
  };
}

// Creating new objects (instances) using the constructor
let myCar1 = new Car("Toyota", "Camry", 2022);
let myCar2 = new Car("Honda", "Civic", 2023);

console.log(myCar1.make); // Output: Toyota
myCar1.accelerate(50);    // Output: Speed increased to 50 km/h
console.log(myCar2.model); // Output: Civic
```

**Example (JavaScript - Class Syntax - more modern):**

```javascript
class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }

  speak() {
    console.log(`${this.name} the ${this.species} makes a sound.`);
  }
}

// Creating instances of the class
let dog = new Animal("Buddy", "dog");
let cat = new Animal("Whiskers", "cat");

dog.speak(); // Output: Buddy the dog makes a sound.
console.log(cat.name); // Output: Whiskers
```

#### Using `Object.create()`:

This method creates a new object, using an existing object as the prototype of the newly created object. This is a more advanced way to achieve inheritance.

**Example (JavaScript):**

```javascript
const vehiclePrototype = {
  start: function() {
    console.log("Engine started.");
  }
};

const electricCar = Object.create(vehiclePrototype);
electricCar.make = "Tesla";
electricCar.model = "Model 3";

electricCar.start(); // Output: Engine started.
console.log(electricCar.make); // Output: Tesla
```

### 4.2 Manipulating Objects:

#### Accessing Properties:

*   **Dot Notation:** `object.propertyName`
*   **Bracket Notation:** `object['propertyName']` (useful when property names are dynamic or contain spaces/special characters)

**Example (JavaScript):**

```javascript
let user = {
  name: "Alice",
  "user-id": 12345
};

console.log(user.name);       // Output: Alice
console.log(user["user-id"]); // Output: 12345
```

#### Modifying Properties:

You can change the value of existing properties or add new ones.

**Example (JavaScript):**

```javascript
let product = {
  id: 101,
  price: 50
};

// Modify existing property
product.price = 55;
console.log(product.price); // Output: 55

// Add a new property
product.inStock = true;
console.log(product.inStock); // Output: true
```

#### Deleting Properties:

You can remove properties from an object using the `delete` operator.

**Example (JavaScript):**

```javascript
let config = {
  timeout: 5000,
  retry: 3
};

delete config.retry;
console.log(config.retry); // Output: undefined
```

#### Iterating Through Object Properties:

You can loop through an object's properties using `for...in` loops or `Object.keys()`, `Object.values()`, `Object.entries()`.

**Example (JavaScript - `for...in`):**

```javascript
let student = {
  name: "Bob",
  major: "Computer Science",
  gpa: 3.8
};

for (let key in student) {
  console.log(`${key}: ${student[key]}`);
}
// Output:
// name: Bob
// major: Computer Science
// gpa: 3.8
```

**Example (JavaScript - `Object.keys()`):**

```javascript
let keys = Object.keys(student); // ['name', 'major', 'gpa']
console.log(keys);
```

---

## 5. Built-in Objects

Scripting languages provide a rich set of built-in objects that offer predefined functionality for common tasks. These objects are readily available for use without needing to define them yourself.

### Common Examples:

*   **JavaScript:**
    *   **`Math`:** Provides mathematical constants and functions (e.g., `Math.PI`, `Math.random()`, `Math.floor()`).
    *   **`Date`:** For working with dates and times.
    *   **`Array`:** For creating and manipulating arrays (though arrays themselves can be considered objects with methods like `push()`, `pop()`, `slice()`).
    *   **`String`:** String objects have methods for manipulation (e.g., `toUpperCase()`, `substring()`, `length` property).
    *   **`RegExp`:** For regular expression operations.
    *   **`JSON`:** For parsing and stringifying JSON data.
    *   **DOM Objects (Browser Environment):** `document`, `window`, `element` objects are crucial for web page manipulation.

*   **Python:**
    *   **`str`:** String objects with methods.
    *   **`list`:** List objects with methods.
    *   **`dict`:** Dictionary objects (key-value pairs, similar to JavaScript objects).
    *   **`int`**, **`float`**, **`bool`**: Even Python's primitive types are implemented as objects.
    *   **`math` module:** Provides mathematical functions.
    *   **`datetime` module:** For date and time operations.

**Example (JavaScript - using built-in `Math` and `Date` objects):**

```javascript
// Using Math object
console.log(Math.PI); // Output: 3.141592653589793
console.log(Math.sqrt(16)); // Output: 4

// Using Date object
let currentDate = new Date();
console.log(currentDate.getFullYear()); // Output: Current Year (e.g., 2023)
console.log(currentDate.toLocaleDateString()); // Output: Current Date (e.g., 10/27/2023)
```

---

## 6. Objects and Object-Oriented Programming (OOP)

Objects are the cornerstone of Object-Oriented Programming (OOP), a programming paradigm that structures code around data, or objects, rather than functions and logic.

### Basic OOP Principles Related to Objects:

*   **Encapsulation:** Bundling data (properties) and methods that operate on that data within a single unit (the object). This hides the internal state and requires interaction through defined interfaces (methods).
*   **Abstraction:** Hiding complex implementation details and exposing only the necessary features to the user. For example, when you call `car.accelerate()`, you don't need to know the intricate mechanics of how the engine responds.
*   **Inheritance:** The ability for a new class (and its objects) to inherit properties and methods from an existing class. This promotes code reusability. For example, a `SportsCar` class could inherit from a general `Car` class and add its own unique properties (like `turbo`).
*   **Polymorphism:** The ability for objects of different classes to respond to the same method call in their own specific ways. For example, a `Dog` object and a `Cat` object might both have a `makeSound()` method, but they would produce different sounds.

**How Objects Relate to OOP:**
Objects are the instances created from classes, which are the blueprints that define the structure and behavior based on OOP principles.

---

## Practice Questions and Exercises:

**Instructions:** Answer the following questions or complete the exercises.

---

### Question 1:
What is the fundamental difference between a primitive data type and an object in scripting languages?

**Answer:**
Primitive data types represent single, simple values (like numbers, strings, booleans) and do not have properties or methods. Objects are complex data structures that bundle together data (properties) and behaviors (methods).

---

### Question 2:
Given the following JavaScript object:

```javascript
let computer = {
  brand: "Dell",
  ram: "16GB",
  processor: "Intel i7",
  bootUp: function() {
    console.log("The computer is booting up...");
  }
};
```

a) How would you access the `brand` of the computer?
b) How would you call the `bootUp` method?
c) Add a new property called `storage` with a value of `"512GB SSD"`.
d) Change the `ram` property to `"32GB"`.

**Answer:**
a) `computer.brand` or `computer['brand']`
b) `computer.bootUp()`
c) `computer.storage = "512GB SSD";`
d) `computer.ram = "32GB";`

---

### Question 3:
Write a constructor function (or class) in JavaScript called `Book` that takes `title` and `author` as arguments. It should have a method called `displayInfo` that prints the title and author to the console. Then, create two `Book` objects and call their `displayInfo` methods.

**Answer:**

**Using Constructor Function:**
```javascript
function Book(title, author) {
  this.title = title;
  this.author = author;
  this.displayInfo = function() {
    console.log(`Title: ${this.title}, Author: ${this.author}`);
  };
}

let book1 = new Book("1984", "George Orwell");
let book2 = new Book("Brave New World", "Aldous Huxley");

book1.displayInfo(); // Output: Title: 1984, Author: George Orwell
book2.displayInfo(); // Output: Title: Brave New World, Author: Aldous Huxley
```

**Using Class Syntax:**
```javascript
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  displayInfo() {
    console.log(`Title: ${this.title}, Author: ${this.author}`);
  }
}

let book1 = new Book("1984", "George Orwell");
let book2 = new Book("Brave New World", "Aldous Huxley");

book1.displayInfo(); // Output: Title: 1984, Author: George Orwell
book2.displayInfo(); // Output: Title: Brave New World, Author: Aldous Huxley
```

---

### Question 4:
Name two built-in objects you might use in JavaScript for web programming and briefly describe their purpose.

**Answer:**
1.  **`document`:** Represents the HTML document loaded in the browser window. It's used to access and manipulate the DOM (Document Object Model), change HTML content, attributes, and CSS styles.
2.  **`Date`:** Used for creating, reading, and manipulating date and time values. It allows for operations like getting the current date, formatting dates, and performing calculations with dates.

---

### Question 5:
Explain the concept of encapsulation in the context of objects.

**Answer:**
Encapsulation is an OOP principle where an object bundles its data (properties) and the methods that operate on that data together. It often involves hiding the internal details of how the object works (data hiding or information hiding) and controlling access to its data through its methods. This creates a self-contained unit and protects the object's internal state from unintended external modification.

---

## Important Points to Remember:

*   **Objects are fundamental:** They are the building blocks for structured data and behavior in scripting languages.
*   **Properties store data, methods perform actions.**
*   **`this` keyword:** Crucial for referring to the current object within its methods.
*   **Built-in objects save time:** Utilize them for common tasks like math, dates, and string manipulation.
*   **Objects are key to OOP:** Understanding objects is essential for grasping OOP principles like encapsulation, abstraction, inheritance, and polymorphism.
*   **Dot vs. Bracket Notation:** Both are used to access object members, with bracket notation being more flexible for dynamic property names.
