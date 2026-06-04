---
title: "Introduction"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 1: Introduction"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f36001"
status: "completed"
scrapedAt: "2026-05-23T16:17:26.124Z"
---
# OBJECT ORIENTED PROGRAMMING: Module 1: Introduction

## Topic: Introduction to Object-Oriented Programming (OOP)

### Learning Outcomes

*   **Understanding the fundamental concepts of Object-Oriented Programming (OOP).**
*   **Distinguishing between procedural and object-oriented programming paradigms.**
*   **Identifying the benefits of adopting an object-oriented approach.**
*   **Recognizing the role of objects and classes in OOP.**

---

### 1. What is Object-Oriented Programming (OOP)?

OOP is a programming paradigm that organizes software design around **data**, or **objects**, rather than functions and logic. It's a model that mimics the real world, where everything can be represented as an object with its own attributes (data) and behaviors (methods/functions).

**Key Concept:** The core idea is to bundle data and the operations that act on that data together into a single unit called an **object**.

*   **Real-world analogy:** Think of a "Car".
    *   **Attributes (Data):** Color, Make, Model, Year, Speed, Fuel Level
    *   **Behaviors (Methods):** Start(), Stop(), Accelerate(), Brake(), Turn()

---

### 2. Procedural vs. Object-Oriented Programming

This section contrasts OOP with the older, procedural programming paradigm.

#### 2.1. Procedural Programming

*   **Focus:** On the sequence of steps (procedures or functions) to be performed to solve a problem.
*   **Data Handling:** Data is often separated from the functions that operate on it. This can lead to data being passed around between functions, making it harder to manage and potentially vulnerable to unintended modifications.
*   **Structure:** Programs are built as a series of instructions executed sequentially or based on control flow statements (if-else, loops).
*   **Examples:** C, Pascal, FORTRAN.

**Example (Procedural approach to calculating area of a circle):**

```c
// Assuming 'radius' is a global or passed variable
float calculateCircleArea(float r) {
    return 3.14159 * r * r;
}

// In main function:
// float radius = 5.0;
// float area = calculateCircleArea(radius);
```

*   **Problem:** The `calculateCircleArea` function operates on `radius`, but `radius` is external to the function's definition itself.

#### 2.2. Object-Oriented Programming (OOP)

*   **Focus:** On **objects** that encapsulate both data and behavior.
*   **Data Handling:** Data is tightly bound with the methods that operate on it within an object. This enhances data security and modularity.
*   **Structure:** Programs are built as a collection of interacting objects.
*   **Examples:** Java, C++, Python, C#.

**Example (Object-Oriented approach to calculating area of a circle):**

```java
class Circle {
    double radius; // Attribute

    // Constructor
    public Circle(double r) {
        this.radius = r;
    }

    // Method (Behavior)
    public double calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
}

// In main method:
// Circle myCircle = new Circle(5.0);
// double area = myCircle.calculateArea();
```

*   **Advantage:** The `radius` data is part of the `Circle` object, and the `calculateArea()` method operates directly on its own data.

---

### 3. Key Concepts in OOP

OOP is built upon several fundamental principles that define its power and flexibility. While this introduction focuses on the basics, these are the cornerstones that will be explored further in subsequent modules.

#### 3.1. Classes

*   **Definition:** A blueprint or a template for creating objects. It defines the properties (attributes) and behaviors (methods) that all objects of that type will have.
*   **Analogy:** A "cookie cutter" is a class; the cookies produced from it are objects.
*   **Key Components:**
    *   **Attributes (Data Members/Instance Variables):** Variables that store the state of an object.
    *   **Methods (Member Functions/Behaviors):** Functions that define the actions an object can perform.

**Reference:** Herbert Schildt's "Java: The Complete Reference" (8th ed.) extensively covers classes as the fundamental building blocks of Java programs. Chapter 5, "Classes," is particularly relevant here.

#### 3.2. Objects

*   **Definition:** An instance of a class. It is a concrete entity created from the class blueprint, possessing its own unique state (values of attributes) and behavior.
*   **Analogy:** A specific "cookie" made using the cookie cutter.
*   **Key Characteristics:**
    *   **State:** The current values of its attributes.
    *   **Behavior:** The operations it can perform, defined by its methods.
    *   **Identity:** Each object has a unique identity that distinguishes it from other objects, even if they have the same state.

**Reference:** Deitel & Deitel's "Java How to Program, Early Objects" (11th ed.) emphasizes the "objects first" approach, starting with classes and objects from the very beginning. Chapter 2, "Introduction to Object-Oriented Programming," will introduce these concepts.

#### 3.3. Encapsulation

*   **Definition:** The bundling of data (attributes) and methods (behaviors) that operate on that data into a single unit (a class). It also involves restricting direct access to some of an object's components, which is known as **data hiding**.
*   **Purpose:**
    *   **Data Protection:** Prevents external code from directly manipulating an object's internal state in unexpected ways.
    *   **Modularity:** Creates self-contained units, making code easier to manage, update, and debug.
    *   **Flexibility:** Allows the internal implementation of a class to change without affecting the code that uses the class, as long as the interface (public methods) remains the same.
*   **How it's achieved:** Typically through access modifiers (like `private`, `public`, `protected`) in languages like Java.

**Example (Encapsulation):**

```java
class BankAccount {
    private double balance; // Data is private

    public BankAccount(double initialBalance) {
        if (initialBalance >= 0) {
            this.balance = initialBalance;
        } else {
            this.balance = 0;
            System.out.println("Initial balance cannot be negative. Set to 0.");
        }
    }

    // Public method to access balance (getter)
    public double getBalance() {
        return this.balance;
    }

    // Public methods to modify balance (mutators/setters)
    public void deposit(double amount) {
        if (amount > 0) {
            this.balance += amount;
            System.out.println("Deposited: " + amount);
        } else {
            System.out.println("Deposit amount must be positive.");
        }
    }

    public void withdraw(double amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            System.out.println("Withdrew: " + amount);
        } else if (amount <= 0) {
            System.out.println("Withdrawal amount must be positive.");
        } else {
            System.out.println("Insufficient balance.");
        }
    }
}
```

*   **Observation:** The `balance` variable is `private`. It can only be accessed or modified through the public methods `getBalance()`, `deposit()`, and `withdraw()`, which contain validation logic.

**Reference:** Ali Bahrami's "Object Oriented Systems Development using the Unified Modeling Language" (2017) discusses encapsulation as a foundational principle for building robust systems. Chapter 3, "Object-Oriented Concepts," will likely cover this.

#### 3.4. Inheritance

*   **Definition:** A mechanism that allows a new class (subclass or derived class) to inherit properties (attributes) and behaviors (methods) from an existing class (superclass or base class).
*   **Purpose:**
    *   **Code Reusability:** Avoids redundant code by creating a hierarchy of classes where common features are defined in a base class.
    *   **"Is-a" Relationship:** Represents a specialization or generalization relationship (e.g., a "Car" *is a* "Vehicle").
*   **Example:** A `Car` class could inherit from a `Vehicle` class. The `Vehicle` class might have attributes like `speed`, `color` and methods like `startEngine()`, `stopEngine()`. The `Car` class would automatically have these attributes and methods, and could also define its own specific attributes (e.g., `numberOfDoors`) and methods (e.g., `openTrunk()`).

**Reference:** Herbert Schildt's "Java: The Complete Reference" (8th ed.), Chapter 14, "Inheritance," provides a comprehensive explanation of this concept and its applications.

#### 3.5. Polymorphism

*   **Definition:** The ability of an object to take on many forms. In OOP, it allows objects of different classes to be treated as objects of a common superclass. It means "many forms."
*   **Purpose:**
    *   **Flexibility and Extensibility:** Allows for writing code that can work with objects of various types without knowing their specific class at compile time.
    *   **Dynamic Method Binding:** The actual method to be executed is determined at runtime based on the object's actual type.
*   **Types:**
    *   **Compile-time Polymorphism (Method Overloading):** Defining multiple methods with the same name but different parameter lists within the same class.
    *   **Runtime Polymorphism (Method Overriding):** A subclass provides a specific implementation for a method that is already defined in its superclass.

**Example (Runtime Polymorphism):**

```java
class Animal {
    public void makeSound() {
        System.out.println("Some generic animal sound");
    }
}

class Dog extends Animal {
    @Override // Annotation indicating method overriding
    public void makeSound() {
        System.out.println("Woof woof");
    }
}

class Cat extends Animal {
    @Override
    public void makeSound() {
        System.out.println("Meow");
    }
}

// In main method:
// Animal myAnimal;
// myAnimal = new Dog();
// myAnimal.makeSound(); // Output: Woof woof

// myAnimal = new Cat();
// myAnimal.makeSound(); // Output: Meow
```

*   **Observation:** The `makeSound()` method is called on an `Animal` reference. Depending on the actual object (Dog or Cat) that the reference points to, the appropriate `makeSound()` method is executed.

**Reference:** Deitel & Deitel's "Java How to Program, Early Objects" (11th ed.), Chapter 10, "Object-Oriented Programming: Polymorphism, Method Overriding and Method Overloading," is dedicated to this topic.

#### 3.6. Abstraction

*   **Definition:** The process of hiding complex implementation details and exposing only the essential features or functionality. It focuses on "what" an object does rather than "how" it does it.
*   **Purpose:**
    *   **Simplicity:** Reduces complexity by providing a simplified view of an object.
    *   **Focus on Relevance:** Allows users to interact with objects at a higher level of abstraction without needing to understand the underlying mechanics.
*   **Achieved via:** Abstract classes and interfaces in Java.

**Example:** When you drive a car, you use the steering wheel, accelerator, and brake. You don't need to know the intricate details of how the engine works, how the fuel is injected, or how the braking system operates. The car's interface (controls) provides an abstraction of its functionality.

**Reference:** Herbert Schildt's "Java: The Complete Reference" (8th ed.) will cover abstraction in the context of abstract classes and interfaces, likely in chapters related to inheritance and advanced class features.

---

### 4. Benefits of OOP

Adopting an object-oriented approach offers significant advantages in software development:

1.  **Modularity:** Programs are divided into objects, making them easier to understand, develop, and maintain. Each object is a self-contained unit. (Relates to **CO1**)
2.  **Reusability:** Inheritance and the ability to create reusable classes (objects) reduce the need to write code from scratch, saving development time and effort. (Relates to **CO1**)
3.  **Maintainability:** Due to modularity and encapsulation, changes in one part of the system are less likely to affect other parts. Debugging becomes simpler as issues can often be isolated to specific objects. (Relates to **CO1**, **CO3**)
4.  **Flexibility and Extensibility:** Polymorphism and inheritance make it easier to add new features or modify existing ones without drastically altering the existing codebase. (Relates to **CO1**)
5.  **Data Security:** Encapsulation protects data from unauthorized access, enhancing the robustness and integrity of the program. (Relates to **CO1**, **CO2**)
6.  **Improved Productivity:** Reusable components and a more organized structure lead to faster development cycles.

**Reference:** Rajib Mall's "Fundamentals of Software Engineering" (4th ed.) likely discusses software design principles and paradigms, including the benefits of OOP in the context of software engineering. Chapter 2 or 3 might cover software development methodologies and paradigms.

---

### 5. Important Points to Remember

*   **OOP is about Objects:** Real-world entities modeled as software objects.
*   **Class is the Blueprint:** Objects are instances of classes.
*   **Encapsulation is Key:** Bundle data and methods, hide internal details.
*   **Inheritance for Reusability:** "Is-a" relationships for code sharing.
*   **Polymorphism for Flexibility:** "Many forms" to handle different object types.
*   **Abstraction for Simplicity:** Hide complexity, expose essential features.
*   **OOP helps manage complexity** in large software systems.

---

### 6. Practice Questions

**Question 1:**
What is the fundamental difference between a class and an object?

**Answer:**
A **class** is a blueprint or template that defines the properties (attributes) and behaviors (methods) that objects of that type will have. An **object** is an instance of a class, meaning it's a concrete entity created from the class blueprint, possessing its own unique state (values of attributes) and behavior.

**Question 2:**
Explain the concept of encapsulation in OOP and why it's important.

**Answer:**
Encapsulation is the bundling of data (attributes) and the methods that operate on that data into a single unit called a class. It also involves data hiding, where access to the data is restricted. It's important because it:
*   **Protects data** from unauthorized access or modification.
*   **Increases modularity**, making code easier to manage and debug.
*   **Provides flexibility**, allowing internal implementation changes without affecting external code.

**Question 3:**
Give a real-world example of inheritance.

**Answer:**
A **Car** is a type of **Vehicle**. The `Vehicle` class could have attributes like `speed`, `color` and methods like `startEngine()`, `stopEngine()`. The `Car` class can inherit these properties and add its own specific attributes like `numberOfDoors` and methods like `openTrunk()`. This illustrates the "is-a" relationship and code reusability.

**Question 4:**
What does the term "polymorphism" mean in the context of OOP?

**Answer:**
Polymorphism means "many forms." In OOP, it refers to the ability of an object to take on many forms, or more specifically, the ability for a single interface to represent different underlying forms (data types). It allows objects of different classes to respond to the same method call in their own specific ways, often achieved through method overriding.

**Question 5:**
Which of the following is a benefit of OOP?
a) Reduced code readability
b) Increased complexity
c) Code reusability
d) Poor data security

**Answer:**
c) Code reusability

---

### 7. Alignment with Course Outcomes (COs)

*   **CO1:** Write Java programs using the object-oriented concepts - classes, objects, constructors, data hiding, inheritance and polymorphism. (Knowledge Level: K2)
    *   This introductory module lays the foundation for understanding classes, objects, encapsulation (data hiding), inheritance, and polymorphism, which are directly required for CO1. The examples provided illustrate these concepts.
*   **CO2:** Utilise datatypes, operators, control statements, object-oriented class, concepts, I/O basics in Java to develop programs. (Knowledge Level: K3)
    *   While this module primarily introduces OOP concepts, it sets the stage for understanding how to utilize classes and objects (OOP concepts) in conjunction with data types, operators, and control statements in later modules to develop programs.
*   **CO3:** Illustrate how robust programs can be written in Java using packages, exception handling mechanism and Multithreaded programming. (Knowledge Level: K3)
    *   The benefits of OOP discussed, such as modularity and data security through encapsulation, directly contribute to writing more robust programs, which is the essence of CO3.
*   **CO4:** Write Graphical User Interface based application programs by utilising Swing in Java and database connectivity. (Knowledge Level: K3)
    *   OOP principles learned in this module are fundamental to building complex GUI applications and managing data, as required by CO4. Objects and classes are the building blocks of GUI components and data models.

---
