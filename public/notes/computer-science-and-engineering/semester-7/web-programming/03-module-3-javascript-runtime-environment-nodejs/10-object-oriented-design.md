---
title: "Object-Oriented Design"
subject: "WEB PROGRAMMING"
module: "Module 3: JavaScript runtime environment : Node.js "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162780fc9aa1fdbc8c0e2"
status: "completed"
scrapedAt: "2026-05-20T17:13:09.992Z"
---
# WEB PROGRAMMING: Module 3 - JavaScript Runtime Environment: Node.js

## Topic: Object-Oriented Design (OOD)

This module explores Object-Oriented Design principles within the context of Node.js. Understanding OOD is crucial for building scalable, maintainable, and reusable JavaScript applications.

---

### Learning Outcomes:

*   **Understand the core principles of Object-Oriented Design (OOD) and their relevance to JavaScript.**
*   **Differentiate between classes and objects in JavaScript, and how they are used in Node.js development.**
*   **Explain the concepts of encapsulation, abstraction, inheritance, and polymorphism, and demonstrate their application in Node.js.**
*   **Apply OOD principles to design and implement Node.js applications.**
*   **Analyze and refactor existing Node.js code to improve its adherence to OOD principles.**

---

### 1. Core Principles of Object-Oriented Design (OOD)

OOD is a programming paradigm based on the concept of "objects," which can contain data in the form of fields (often known as attributes or properties) and code in the form of procedures (often known as methods).

#### Key Concepts:

*   **Objects:** The fundamental building blocks in OOD. They represent real-world entities or concepts and encapsulate both data (state) and behavior (methods).
*   **Classes:** Blueprints or templates for creating objects. A class defines the properties and methods that all objects of that type will have.
*   **Modularity:** Breaking down a complex system into smaller, independent, and interchangeable modules (objects).
*   **Reusability:** Designing components (classes) that can be reused in different parts of the application or in other applications.
*   **Maintainability:** OOD makes code easier to understand, modify, and debug due to its structured nature.
*   **Scalability:** OOD facilitates the growth of applications by allowing for the addition of new features and modules without significantly impacting existing ones.

#### Relevance to JavaScript/Node.js:

While JavaScript is often considered a multi-paradigm language, it strongly supports Object-Oriented Programming, especially with the introduction of ES6 classes. Node.js, being built on JavaScript, benefits greatly from applying OOD principles to manage complexity and build robust applications.

---

### 2. Classes and Objects in JavaScript

JavaScript's approach to object-oriented programming has evolved. Historically, it relied on prototype-based inheritance. ES6 introduced the `class` syntax, which provides a more familiar and structured way to define object blueprints.

#### Key Concepts:

*   **Classes (ES6 `class` syntax):** A syntactic sugar over JavaScript's existing prototype-based inheritance. It defines a template for creating objects.

    ```javascript
    // Defining a class
    class Person {
      constructor(name, age) {
        this.name = name;
        this.age = age;
      }

      // Method
      greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
      }
    }
    ```

*   **Objects (Instances):** Created from classes using the `new` keyword. Each object is an instance of its class and has its own unique state.

    ```javascript
    // Creating objects (instances) from the Person class
    const person1 = new Person('Alice', 30);
    const person2 = new Person('Bob', 25);

    // Accessing properties and calling methods
    console.log(person1.name); // Output: Alice
    person1.greet();         // Output: Hello, my name is Alice and I am 30 years old.
    person2.greet();         // Output: Hello, my name is Bob and I am 25 years old.
    ```

*   **Constructor:** A special method within a class that is automatically called when a new object is created. It's used to initialize the object's properties.

#### Importance in Node.js:

*   **Structuring Modules:** Classes can be used to define reusable components for server logic, data models, utility functions, etc.
*   **Managing State:** Objects are perfect for representing entities like users, database connections, request handlers, etc., each with its own state.
*   **Creating APIs:** Classes can be used to model the structure of your API endpoints or services.

---

### 3. Pillars of Object-Oriented Design

These four pillars are fundamental to OOD and contribute to well-structured and maintainable code.

#### 3.1. Encapsulation

**Definition:** Encapsulation is the bundling of data (properties) and the methods that operate on that data within a single unit (an object). It hides the internal implementation details of an object and exposes only what is necessary.

**Key Concepts:**

*   **Data Hiding:** Protecting an object's internal state from direct external access.
*   **Information Hiding:** The principle behind encapsulation, where implementation details are concealed.
*   **Public Interface:** The methods and properties that are intentionally made accessible from outside the object.

**Application in Node.js/JavaScript:**

In JavaScript, encapsulation is achieved through:

*   **Closures:** Functions can retain access to variables from their outer scope, even after the outer function has finished executing. This can be used to create private variables.
*   **ES6 Private Class Fields (`#`):** The `#` prefix makes a property or method truly private, inaccessible from outside the class.

**Example:**

```javascript
class BankAccount {
  #balance; // Private field

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  // Public method to deposit
  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Deposited: ${amount}. New balance: ${this.#balance}`);
    } else {
      console.log('Deposit amount must be positive.');
    }
  }

  // Public method to withdraw
  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      console.log(`Withdrew: ${amount}. New balance: ${this.#balance}`);
      return true;
    } else {
      console.log('Insufficient funds or invalid amount.');
      return false;
    }
  }

  // Public method to get balance (read-only access)
  getBalance() {
    return this.#balance;
  }
}

const myAccount = new BankAccount(1000);
// console.log(myAccount.#balance); // ERROR: Private field '#balance' must be declared in an enclosing class
myAccount.deposit(500);          // Output: Deposited: 500. New balance: 1500
myAccount.withdraw(200);         // Output: Withdrew: 200. New balance: 1300
console.log(myAccount.getBalance()); // Output: 1300
```

**Important Point:** Encapsulation helps prevent unintended side effects by controlling how an object's data is accessed and modified.

#### 3.2. Abstraction

**Definition:** Abstraction is the process of simplifying complex reality by modeling classes based on essential features of objects relevant to the problem at hand. It focuses on *what* an object does rather than *how* it does it.

**Key Concepts:**

*   **Focus on Essential Features:** Hiding unnecessary details and exposing only the relevant functionalities.
*   **Abstract Data Types (ADTs):** A mathematical model of data structures that specify the operations that can be performed on the data, but not their implementation.
*   **Interfaces (Conceptual in JS):** While JavaScript doesn't have formal interfaces like Java or C#, the concept is achieved through consistent method signatures.

**Application in Node.js/JavaScript:**

*   **Defining APIs:** A class can represent a service with methods like `getUser()`, `createUser()`, `updateProduct()`, abstracting away the underlying database queries or network calls.
*   **Abstracting Complex Logic:** Create classes that encapsulate complex algorithms or processes, exposing simple methods for interaction.

**Example:**

Imagine a `DatabaseService` that handles interactions with a database.

```javascript
class DatabaseService {
  constructor(dbConnection) {
    this.connection = dbConnection; // Assumes a database connection object
  }

  // Abstracted method to fetch data
  async fetchData(query) {
    console.log(`Executing query: ${query}`);
    // In a real scenario, this would interact with this.connection
    // For demonstration, we'll simulate a response
    return new Promise(resolve => setTimeout(() => resolve([{ id: 1, name: 'Item A' }]), 100));
  }

  // Abstracted method to save data
  async saveData(data) {
    console.log(`Saving data:`, data);
    // In a real scenario, this would interact with this.connection
    return new Promise(resolve => setTimeout(() => resolve({ success: true }), 100));
  }
}

// --- Usage ---
// Imagine 'myDbConnection' is a valid database connection object
const myDbConnection = {}; // Placeholder for a real connection

const userService = new DatabaseService(myDbConnection);

async function displayUsers() {
  try {
    const users = await userService.fetchData('SELECT * FROM users');
    console.log('Fetched users:', users);
  } catch (error) {
    console.error('Error fetching users:', error);
  }
}

displayUsers();
```

**Important Point:** Abstraction allows you to work with objects at a higher level of conceptualization, making your code more readable and easier to manage. When the underlying implementation changes (e.g., switching database drivers), only the `DatabaseService` class needs to be modified, not all the code that uses it.

#### 3.3. Inheritance

**Definition:** Inheritance is a mechanism where a new class (subclass or derived class) derives properties and methods from an existing class (superclass or base class). This promotes code reuse and establishes "is-a" relationships.

**Key Concepts:**

*   **Base Class/Superclass:** The class from which properties and methods are inherited.
*   **Derived Class/Subclass:** The class that inherits from another class.
*   **`extends` Keyword:** Used in JavaScript ES6 to establish inheritance.
*   **`super()` Keyword:** Used in the constructor of a derived class to call the constructor of its superclass.
*   **Method Overriding:** A subclass can provide its own implementation of a method inherited from its superclass.

**Application in Node.js/JavaScript:**

*   **Creating Specialized Versions:** A `AdminUser` class could inherit from a `User` class and add specific administrative permissions.
*   **Building Hierarchies:** Representing different types of entities that share common characteristics.
*   **Extending Frameworks:** Node.js frameworks often use inheritance to extend built-in functionalities or create custom components.

**Example:**

```javascript
// Base Class
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

// Derived Class
class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Call the parent class constructor
    this.breed = breed;
  }

  // Overriding the speak method
  speak() {
    console.log(`${this.name} barks.`);
  }

  fetch() {
    console.log(`${this.name} is fetching.`);
  }
}

const genericAnimal = new Animal('Leo');
genericAnimal.speak(); // Output: Leo makes a sound.

const myDog = new Dog('Buddy', 'Golden Retriever');
myDog.speak();      // Output: Buddy barks. (Overridden method)
console.log(myDog.name); // Output: Buddy (Inherited property)
myDog.fetch();      // Output: Buddy is fetching. (Specific method)
```

**Important Point:** Inheritance promotes code reuse by allowing you to define common behavior in a base class and then extend it for more specific types.

#### 3.4. Polymorphism

**Definition:** Polymorphism means "many forms." In OOD, it refers to the ability of objects of different classes to respond to the same method call in their own specific ways.

**Key Concepts:**

*   **Method Overriding:** As seen in inheritance, a subclass provides a specific implementation of a method that is already defined in its superclass.
*   **Method Overloading (Not directly supported in JS ES6 classes):** Defining multiple methods with the same name but different parameter lists. JavaScript achieves a similar effect through conditional logic or optional parameters.
*   **Duck Typing:** "If it walks like a duck and quacks like a duck, it's a duck." In JavaScript, an object's type is less important than whether it has the methods and properties required by the code.

**Application in Node.js/JavaScript:**

*   **Uniform Interfaces:** Allows you to treat objects of different types in a consistent manner, as long as they implement the same methods.
*   **Event Handling:** Different event listeners can be registered for the same event type, each handling it uniquely.
*   **Data Processing:** You can process a collection of objects, calling a common method on each, without needing to know their specific types.

**Example:**

Consider a system that needs to process different types of shapes.

```javascript
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  // Specific implementation of area calculation
  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }
}

class Square {
  constructor(side) {
    this.side = side;
  }

  // Specific implementation of area calculation
  calculateArea() {
    return this.side * this.side;
  }
}

class Triangle {
  constructor(base, height) {
    this.base = base;
    this.height = height;
  }

  // Specific implementation of area calculation
  calculateArea() {
    return 0.5 * this.base * this.height;
  }
}

// Function that demonstrates polymorphism
function printShapeAreas(shapes) {
  shapes.forEach(shape => {
    // Calling the same method on different object types
    console.log(`Area: ${shape.calculateArea()}`);
  });
}

const shapes = [
  new Circle(5),
  new Square(4),
  new Triangle(3, 6)
];

printShapeAreas(shapes);
// Output:
// Area: 78.53981633974483
// Area: 16
// Area: 9
```

**Important Point:** Polymorphism makes your code more flexible and extensible. You can add new types of shapes to the `shapes` array without modifying the `printShapeAreas` function.

---

### 4. Applying OOD Principles in Node.js

#### Designing Node.js Applications with OOD:

*   **Model-View-Controller (MVC) Pattern:** A common architectural pattern that uses objects to represent data (Model), presentation (View), and user input/logic (Controller).
*   **Service Layer:** Create classes that encapsulate business logic and interact with data sources.
*   **Repository Pattern:** Abstract data access logic into dedicated classes.
*   **Component-Based Architecture:** Break down your application into reusable components (classes) that handle specific functionalities.
*   **Error Handling:** Encapsulate error management logic within dedicated classes.
*   **Configuration Management:** Use classes to manage application configurations.

#### Refactoring Existing Node.js Code:

When analyzing existing Node.js code, look for opportunities to apply OOD principles:

*   **Identify Duplicated Code:** Can this be extracted into a base class or a utility class?
*   **Look for Large Functions/Modules:** Can they be broken down into smaller, more focused classes with specific responsibilities?
*   **Examine Data Structures:** Are they being tightly coupled with the logic that manipulates them? Consider encapsulating them within objects.
*   **Check for Tight Coupling:** Can you reduce dependencies between modules by introducing abstraction or inheritance?
*   **Improve Readability and Maintainability:** Does the code clearly represent the entities and their behaviors?

---

### Practice Questions & Exercises

**Question 1:**
Which OOD principle involves bundling data and methods that operate on that data into a single unit, hiding internal implementation details?
a) Abstraction
b) Inheritance
c) Polymorphism
d) Encapsulation

**Question 2:**
What is the purpose of the `super()` keyword in JavaScript ES6 classes when using inheritance?
a) To create a new instance of the class.
b) To call the constructor of the parent class.
c) To define a private property.
d) To override a method from the parent class.

**Question 3:**
Consider the following JavaScript code snippet:

```javascript
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  startEngine() {
    console.log(`${this.make} ${this.model}: Engine started.`);
  }
}

class ElectricCar extends Car {
  constructor(make, model, batteryCapacity) {
    super(make, model);
    this.batteryCapacity = batteryCapacity;
  }

  charge() {
    console.log(`${this.make} ${this.model}: Charging with ${this.batteryCapacity} kWh.`);
  }
}

const myElectricCar = new ElectricCar('Tesla', 'Model 3', 75);
myElectricCar.startEngine();
myElectricCar.charge();
```

Which OOD principle is primarily demonstrated when `myElectricCar.startEngine()` is called?
a) Abstraction
b) Inheritance
c) Encapsulation
d) Polymorphism

**Question 4:**
Write a JavaScript class `Book` with properties `title` and `author`. Include a method `displayInfo()` that prints the title and author to the console. Then, create an instance of `Book` and call its `displayInfo()` method.

**Question 5:**
Explain the difference between Encapsulation and Abstraction in your own words, using an example relevant to Node.js development (e.g., managing user authentication).

---

### Answers to Practice Questions

**Answer 1:**
d) Encapsulation

**Answer 2:**
b) To call the constructor of the parent class.

**Answer 3:**
b) Inheritance. The `ElectricCar` class inherits the `startEngine()` method from the `Car` class.

**Answer 4:**

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

const myBook = new Book('The Hitchhiker\'s Guide to the Galaxy', 'Douglas Adams');
myBook.displayInfo(); // Output: Title: The Hitchhiker's Guide to the Galaxy, Author: Douglas Adams
```

**Answer 5:**

*   **Encapsulation:** Bundles data (e.g., username, password hash, session token) and the methods that operate on them (e.g., `login()`, `logout()`, `isValidToken()`) within a single `UserAuthenticator` class. It hides the internal workings (like how the password hash is stored or the JWT signing algorithm) and only exposes necessary methods for interaction, preventing direct manipulation of sensitive data.

*   **Abstraction:** Provides a simplified interface to a complex process. For example, instead of directly dealing with OAuth tokens, API calls, and token validation logic, you might have an `OAuthService` class with a method like `authenticateUser(provider)`. This method abstracts away all the underlying complexities of the OAuth flow, allowing the calling code to simply request authentication without needing to know the intricate details of how it's performed.

---

### Important Points to Remember:

*   **JavaScript is Multi-Paradigm:** While it supports OOP, it also supports functional and imperative styles. Choose the paradigm that best suits the problem.
*   **ES6 Classes are Syntactic Sugar:** They build upon JavaScript's prototype-based inheritance, making OOP more accessible.
*   **Private Fields (`#`):** Use private fields for true data encapsulation and to prevent unintended modifications.
*   **"is-a" vs. "has-a":** Inheritance represents an "is-a" relationship (e.g., a `Dog` *is an* `Animal`), while composition represents a "has-a" relationship (e.g., a `Car` *has an* `Engine`). Favor composition over inheritance when appropriate, as it often leads to more flexible designs.
*   **SOLID Principles:** While not explicitly covered in detail here, principles like Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, and Dependency Inversion are valuable extensions to OOD that promote robust and maintainable code.
*   **Node.js Module System:** Leverage Node.js modules to organize your OOD designs into reusable and manageable units.

---
