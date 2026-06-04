---
title: "Object-Oriented Design"
subject: "WEB PROGRAMMING"
module: "Module 3: JavaScript runtime environment : Node.js "
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8cc41"
status: "completed"
scrapedAt: "2026-05-20T17:28:33.057Z"
---
# WEB PROGRAMMING: Module 3: JavaScript Runtime Environment: Node.js

## Topic: Object-Oriented Design (OOD)

### Learning Outcomes:

*   Understand the fundamental principles of Object-Oriented Design (OOD).
*   Recognize how OOD concepts apply to JavaScript, particularly within the Node.js environment.
*   Differentiate between classes and objects.
*   Explain the core pillars of OOD: Encapsulation, Abstraction, Inheritance, and Polymorphism.
*   Demonstrate how to implement OOD principles in JavaScript using constructors, prototypes, and ES6 classes.
*   Discuss the benefits of using OOD in Node.js development for building modular, maintainable, and scalable applications.

---

### 1. Introduction to Object-Oriented Design (OOD)

Object-Oriented Design (OOD) is a programming paradigm that organizes software design around data, or objects, rather than functions and logic. It aims to model real-world entities and their relationships, leading to more organized, reusable, and maintainable code.

#### Key Concepts:

*   **Object:** A fundamental building block in OOD. It represents a real-world entity or concept and encapsulates both **data (properties/attributes)** and **behavior (methods/functions)**.
    *   *Example:* A `Car` object might have properties like `color`, `make`, `model` and methods like `startEngine()`, `accelerate()`.
*   **Class:** A blueprint or template for creating objects. It defines the properties and methods that all objects of that type will possess.
    *   *Example:* A `Car` class would define the structure and behavior for any car object.
*   **Instance:** A specific object created from a class. Each instance is unique, even though it shares the same structure and behavior as other instances of the same class.
    *   *Example:* `myCar` could be an instance of the `Car` class, with `myCar.color` set to "red".

---

### 2. Pillars of Object-Oriented Design

These four pillars are the cornerstones of OOD and provide the framework for effective object-oriented programming.

#### 2.1. Encapsulation

**Definition:** Encapsulation is the bundling of data (properties) and the methods that operate on that data within a single unit (an object or class). It also involves restricting direct access to some of the object's components, which is known as **data hiding**.

**Purpose:**
*   **Data Protection:** Prevents accidental or intentional modification of an object's internal state from outside the object.
*   **Modularity:** Keeps related data and behavior together, making the code easier to understand and manage.
*   **Flexibility:** Allows the internal implementation of an object to be changed without affecting other parts of the program that use it, as long as the public interface remains the same.

**Implementation in JavaScript:**
*   **Private Fields (using `#` prefix in ES6 classes):** The most direct way to achieve data hiding.
*   **Convention (using underscore `_` prefix):** A widely adopted convention to indicate that a property or method is intended for internal use. It doesn't enforce privacy but signals intent to other developers.

**Example (using ES6 classes with private fields):**

```javascript
class BankAccount {
  #balance; // Private field

  constructor(initialBalance) {
    if (initialBalance < 0) {
      throw new Error("Initial balance cannot be negative.");
    }
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (amount <= 0) {
      throw new Error("Deposit amount must be positive.");
    }
    this.#balance += amount;
    console.log(`Deposited: ${amount}. New balance: ${this.#balance}`);
  }

  withdraw(amount) {
    if (amount <= 0) {
      throw new Error("Withdrawal amount must be positive.");
    }
    if (amount > this.#balance) {
      throw new Error("Insufficient funds.");
    }
    this.#balance -= amount;
    console.log(`Withdrew: ${amount}. New balance: ${this.#balance}`);
    return amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount(1000);
// console.log(account.#balance); // Error: Private field '#balance' must be declared in an enclosing class
account.deposit(500);
account.withdraw(200);
console.log("Current balance:", account.getBalance());
```

**Important Point to Remember:** Encapsulation is about bundling and controlled access, not just hiding.

#### 2.2. Abstraction

**Definition:** Abstraction is the process of hiding complex implementation details and exposing only the essential features or functionality of an object to the outside world. It focuses on *what* an object does rather than *how* it does it.

**Purpose:**
*   **Simplicity:** Reduces complexity by hiding unnecessary details.
*   **Manageability:** Makes code easier to understand and use by providing a clean interface.
*   **Focus:** Allows developers to concentrate on the essential interactions with an object.

**Implementation in JavaScript:**
*   **Public Methods:** Providing well-defined public methods that interact with the object's internal state.
*   **Interfaces (conceptual in JS):** While JavaScript doesn't have formal interfaces like some other languages, you can achieve similar results by agreeing on a set of methods that objects should expose.

**Example:**

In the `BankAccount` example above, the `deposit` and `withdraw` methods provide an abstract interface to interact with the `balance`. The user of the `BankAccount` class doesn't need to know the internal mechanics of how the balance is updated, only that calling `deposit(amount)` will increase the balance.

```javascript
// Think of a remote control for a TV
// You interact with buttons like 'power', 'volumeUp', 'channelDown' (Abstraction)
// You don't need to know the complex circuitry inside the remote or the TV (Hiding Implementation Details)
```

**Important Point to Remember:** Abstraction is about providing a simplified view of complex reality.

#### 2.3. Inheritance

**Definition:** Inheritance is a mechanism that allows a new class (subclass or derived class) to inherit properties and methods from an existing class (superclass or base class). This promotes code reuse and establishes a hierarchical relationship between classes.

**Purpose:**
*   **Code Reusability:** Avoids duplicating code by inheriting common functionality.
*   **Establish Relationships:** Creates "is-a" relationships between classes (e.g., a `Dog` **is a** `Animal`).
*   **Extensibility:** Allows new classes to extend existing ones with additional features.

**Implementation in JavaScript:**
*   **Prototype-based Inheritance (Traditional):** Objects inherit directly from other objects. `Object.create()` and the prototype chain are key.
*   **ES6 `class` syntax with `extends`:** Provides a more familiar, class-based syntax for inheritance.

**Example (using ES6 classes):**

```javascript
// Base Class (Superclass)
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }

  eat() {
    console.log(`${this.name} is eating.`);
  }
}

// Derived Class (Subclass)
class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Call the constructor of the parent class
    this.breed = breed;
  }

  // Overriding the speak method
  speak() {
    console.log(`${this.name} barks.`);
  }

  // New method specific to Dog
  fetch() {
    console.log(`${this.name} is fetching.`);
  }
}

const genericAnimal = new Animal("Leo");
genericAnimal.speak(); // Output: Leo makes a sound.
genericAnimal.eat();   // Output: Leo is eating.

const myDog = new Dog("Buddy", "Golden Retriever");
myDog.speak(); // Output: Buddy barks. (Overridden method)
myDog.eat();   // Output: Buddy is eating. (Inherited method)
myDog.fetch(); // Output: Buddy is fetching. (Dog-specific method)

console.log(myDog.name);  // Output: Buddy
console.log(myDog.breed); // Output: Golden Retriever
```

**Important Point to Remember:** Inheritance models "is-a" relationships and is a powerful tool for code reuse.

#### 2.4. Polymorphism

**Definition:** Polymorphism (meaning "many forms") is the ability of an object or method to take on many forms. In OOD, it typically refers to the ability of different objects to respond to the same method call in their own specific ways.

**Purpose:**
*   **Flexibility:** Allows for writing code that can work with objects of different types without needing to know their specific class at compile time.
*   **Extensibility:** New classes can be added that conform to a common interface without modifying existing code that uses that interface.

**Types of Polymorphism:**
*   **Method Overriding:** A subclass provides a specific implementation for a method that is already defined in its superclass. (As seen in the `Dog.speak()` example above).
*   **Method Overloading:** (Less common and not directly supported in JavaScript in the same way as Java/C++). This involves defining multiple methods with the same name but different parameter lists. In JS, you'd typically handle this with conditional logic within a single method.

**Example (Method Overriding):**

The `speak()` method in the `Dog` class overrides the `speak()` method in the `Animal` class. When `myDog.speak()` is called, the `Dog`'s version of `speak()` is executed, demonstrating polymorphism.

```javascript
// Example showcasing polymorphism with different animal types

class Cat extends Animal {
  speak() {
    console.log(`${this.name} meows.`);
  }
}

class Cow extends Animal {
  speak() {
    console.log(`${this.name} moos.`);
  }
}

function makeAnimalSpeak(animal) {
  animal.speak(); // This single line works for any Animal, Dog, Cat, or Cow object
}

const fluffy = new Cat("Fluffy");
const daisy = new Cow("Daisy");

makeAnimalSpeak(myDog);   // Output: Buddy barks.
makeAnimalSpeak(fluffy);  // Output: Fluffy meows.
makeAnimalSpeak(daisy);   // Output: Daisy moos.
```

**Important Point to Remember:** Polymorphism allows you to treat objects of different classes uniformly as long as they share a common interface.

---

### 3. OOD in JavaScript (Beyond ES6 Classes)

While ES6 classes provide a clean syntax, it's crucial to understand how OOD principles were traditionally implemented in JavaScript, as this knowledge is still relevant.

#### 3.1. Constructor Functions and Prototypes

Before ES6 classes, constructor functions and the prototype chain were the primary ways to achieve object-oriented patterns.

*   **Constructor Function:** A function that, when called with the `new` keyword, creates and initializes an object.
*   **Prototype (`.prototype`):** Every JavaScript function has a `prototype` property, which is an object. Objects created using a constructor function inherit properties and methods from its prototype.
*   **Prototype Chain:** When you try to access a property or method on an object, JavaScript first looks on the object itself. If it's not found, it looks on the object's prototype, and then on that prototype's prototype, and so on, until it reaches `Object.prototype`.

**Example (Constructor Function and Prototype):**

```javascript
// Constructor Function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Adding methods to the prototype
Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

Person.prototype.celebrateBirthday = function() {
  this.age++;
  console.log(`Happy birthday! ${this.name} is now ${this.age}.`);
};

// Creating objects (instances)
const person1 = new Person("Alice", 30);
const person2 = new Person("Bob", 25);

person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.
person2.greet(); // Output: Hello, my name is Bob and I am 25 years old.

person1.celebrateBirthday(); // Output: Happy birthday! Alice is now 31.

// Checking the prototype chain
console.log(person1.__proto__ === Person.prototype); // true
console.log(Person.prototype.__proto__ === Object.prototype); // true
```

**Encapsulation using Closures (Pre-ES6 Private Fields):**

```javascript
function SecretAgent(name) {
  let secretId = Math.random().toString(36).substring(7); // Private variable

  this.name = name;

  this.getSecretId = function() { // Public method to access private variable
    return secretId;
  };

  this.revealSecret = function() {
    console.log(`Agent ${this.name}'s secret ID is ${secretId}`);
  };
}

SecretAgent.prototype.missionBriefing = function() {
  console.log(`Mission brief for agent ${this.name}.`);
};

const agent007 = new SecretAgent("Bond");
agent007.missionBriefing(); // Output: Mission brief for agent Bond.
agent007.revealSecret();   // Output: Agent Bond's secret ID is [some random string]
// console.log(agent007.secretId); // undefined (cannot access directly)
```

---

### 4. Benefits of OOD in Node.js Development

Object-Oriented Design brings significant advantages to Node.js projects, especially as they grow in complexity.

*   **Modularity:** Code is broken down into smaller, self-contained objects, making it easier to manage and understand. This is crucial for Node.js's asynchronous and event-driven nature.
*   **Reusability:** Inheritance and composition allow you to reuse existing code, reducing development time and effort. This is beneficial for building common utilities or API components.
*   **Maintainability:** Well-encapsulated and abstracted code is easier to debug and update. Changes within one object are less likely to break other parts of the application.
*   **Scalability:** OOD principles help in building applications that can grow without becoming unmanageable. You can add new features or modify existing ones with greater confidence.
*   **Readability:** A clear object-oriented structure can make the codebase more intuitive for developers to read and understand.
*   **Testability:** Encapsulated objects with well-defined interfaces are easier to unit test in isolation.

#### Example Scenario in Node.js: Building an API Service

Imagine building an API service that interacts with a database.

*   **`DatabaseConnector` Class:** Encapsulates database connection logic, credentials, and connection pooling. It exposes methods like `connect()`, `query(sql)`, and `disconnect()`. This hides the complexities of the specific database driver.
*   **`UserService` Class:** Depends on `DatabaseConnector`. It might have methods like `getUserById(id)` and `createUser(userData)`. These methods use the `DatabaseConnector`'s `query()` method internally.
*   **`ProductService` Class:** Similar to `UserService`, it would also depend on `DatabaseConnector` for its operations.

This approach adheres to OOD principles:
*   **Encapsulation:** `DatabaseConnector` hides connection details.
*   **Abstraction:** Services expose simple methods (`getUserById`) without revealing how the data is fetched.
*   **Inheritance/Composition:** Services might inherit from a common base service or use composition to leverage shared functionality.
*   **Modularity:** Each service is a distinct module.

---

### 5. Practice Questions and Exercises

**Question 1:**
Explain the difference between a Class and an Object in the context of OOD. Provide a JavaScript example using ES6 classes.

**Answer 1:**
A **Class** is a blueprint or template for creating objects. It defines the properties (data) and methods (behavior) that objects of that type will have. An **Object** is an instance of a class, a concrete realization of the blueprint.

```javascript
// Class: Blueprint for a Book
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.isAvailable = true; // Property
  }

  borrowBook() { // Method
    if (this.isAvailable) {
      this.isAvailable = false;
      console.log(`'${this.title}' by ${this.author} has been borrowed.`);
      return true;
    } else {
      console.log(`'${this.title}' is currently unavailable.`);
      return false;
    }
  }

  returnBook() { // Method
    this.isAvailable = true;
    console.log(`'${this.title}' has been returned.`);
  }
}

// Objects: Instances of the Book class
const book1 = new Book("The Hobbit", "J.R.R. Tolkien");
const book2 = new Book("1984", "George Orwell");

book1.borrowBook(); // Calling a method on an object
console.log(book1.isAvailable); // Accessing a property of an object
```

**Question 2:**
Which OOD pillar focuses on hiding complex implementation details and exposing only essential functionalities?
a) Encapsulation
b) Abstraction
c) Inheritance
d) Polymorphism

**Answer 2:**
b) Abstraction

**Question 3:**
Consider the following JavaScript code:

```javascript
class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  startEngine() {
    console.log(`${this.make} ${this.model} engine starts.`);
  }
}

class Car extends Vehicle {
  constructor(make, model, numDoors) {
    super(make, model);
    this.numDoors = numDoors;
  }

  honk() {
    console.log("Beep beep!");
  }
}

const myCar = new Car("Toyota", "Camry", 4);
```

Identify which OOD principles are demonstrated in this code snippet.

**Answer 3:**
*   **Class and Object:** `Vehicle` and `Car` are classes, and `myCar` is an object (instance of `Car`).
*   **Inheritance:** `Car` class `extends` `Vehicle`, inheriting its `constructor` and `startEngine` method.
*   **Encapsulation (Implicit):** Properties like `make`, `model`, and `numDoors` are bundled within the `Car` object.
*   **Abstraction (Implicit):** Methods like `startEngine()` and `honk()` provide an interface to interact with the vehicle's behavior.

**Question 4 (Exercise):**
Create a JavaScript class called `Rectangle` that has properties for `width` and `height`.
1.  Implement a constructor that accepts `width` and `height`.
2.  Add a method called `getArea()` that calculates and returns the area of the rectangle.
3.  Add a method called `getPerimeter()` that calculates and returns the perimeter of the rectangle.
4.  Create an instance of `Rectangle` and call both `getArea()` and `getPerimeter()`.
5.  (Optional) Modify `Rectangle` to use a private field for `width` and `height` and provide public getter methods.

**Answer 4:**

```javascript
// Basic Rectangle class
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }

  getPerimeter() {
    return 2 * (this.width + this.height);
  }
}

// Create an instance and call methods
const myRectangle = new Rectangle(10, 5);
console.log("Area:", myRectangle.getArea());       // Output: Area: 50
console.log("Perimeter:", myRectangle.getPerimeter()); // Output: Perimeter: 30

// Optional: Rectangle with private fields
class PrivateRectangle {
  #width; // Private field
  #height; // Private field

  constructor(width, height) {
    if (width <= 0 || height <= 0) {
      throw new Error("Width and height must be positive.");
    }
    this.#width = width;
    this.#height = height;
  }

  getArea() {
    return this.#width * this.#height;
  }

  getPerimeter() {
    return 2 * (this.#width + this.#height);
  }

  // Getter methods
  getWidth() {
    return this.#width;
  }

  getHeight() {
    return this.#height;
  }
}

const privateRect = new PrivateRectangle(8, 4);
console.log("Private Rect Area:", privateRect.getArea());       // Output: Private Rect Area: 32
console.log("Private Rect Perimeter:", privateRect.getPerimeter()); // Output: Private Rect Perimeter: 24
console.log("Private Rect Width:", privateRect.getWidth());     // Output: Private Rect Width: 8
// console.log(privateRect.#width); // Error: Private field '#width' must be declared in an enclosing class
```

---

### 6. Important Points to Remember

*   **OOD is a Design Philosophy:** It's about how you structure your code to be more organized and manageable.
*   **Classes are Blueprints, Objects are Instances:** Think of a cookie cutter (class) and the cookies you make with it (objects).
*   **The Four Pillars are Interconnected:** Encapsulation supports abstraction, inheritance enables polymorphism, etc.
*   **JavaScript's OO Nature:** JavaScript is prototype-based, but ES6 classes offer a more familiar syntax that still leverages prototypes under the hood.
*   **Benefits in Node.js:** OOD is crucial for building robust, scalable, and maintainable Node.js applications, especially for server-side logic, APIs, and complex modules.
*   **Choose the Right Tool:** While ES6 classes are modern, understanding constructor functions and prototypes can be helpful for legacy code or deeper JavaScript understanding.
*   **Data Hiding vs. Data Protection:** Encapsulation is about bundling and controlled access, not just making things "private." Private fields in ES6 classes provide true data hiding.
