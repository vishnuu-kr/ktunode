---
title: "Object Oriented Design"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 1: Introduction:"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe66c"
status: "completed"
scrapedAt: "2026-05-23T17:51:12.430Z"
---
# OBJECT ORIENTED PROGRAMMING - Module 1: Introduction
## Topic: Object Oriented Design

This module introduces the fundamental principles of Object-Oriented Design (OOD), laying the groundwork for understanding how to structure and build software using object-oriented paradigms.

---

### Learning Outcomes

Upon completion of this topic, you will be able to:

*   **Understand the basic principles of Object-Oriented Design (OOD).**
*   **Explain the core concepts of OOD and their significance in software development.**
*   **Differentiate between traditional procedural design and object-oriented design.**
*   **Recognize the benefits and drawbacks of adopting OOD.**
*   **Identify the key activities involved in the OOD process.**
*   **Relate OOD principles to the foundational concepts of Object-Oriented Programming (OOP).**

---

### Course Outcomes Alignment

This topic directly contributes to the following Course Outcomes:

*   **CO1 (K2): Summarize the object-oriented concepts - classes, objects, constructors, data hiding, inheritance and polymorphism and to illustrate it using UML diagrams.**
    *   This topic will introduce you to the foundational concepts (classes, objects) that are essential for understanding the rest of CO1. While UML diagrams are not the primary focus here, the design principles discussed will guide how these concepts are applied and represented.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


### Textbooks and Reference Books Incorporated

This section draws upon insights from the provided textbooks and reference books, particularly in establishing the foundational principles of OOD.

*   **Java: The Complete Reference by Herbert Schildt:** Provides a strong foundation in object-oriented concepts as they apply to Java, which is crucial for understanding OOD.
*   **Fundamentals of Software Engineering by Rajib Mall:** Offers a broader perspective on software development methodologies, including design principles.
*   **Java How to Program, Early Objects by Paul Deitel, Harvey Deitel:** Excellent for early exposure to object-oriented thinking and basic class/object structures.
*   **Object Oriented Systems Development using the Unified Modeling Language by Ali Bahrami:** Directly relevant for understanding OOD and its visual representation with UML.
*   **Introduction to Java Programming by Y. Daniel Liang:** Another valuable resource for understanding object-oriented concepts in Java.

---

## 1. What is Object-Oriented Design (OOD)?

Object-Oriented Design (OOD) is a software design approach that models a system as a collection of interacting objects. Each object is an instance of a class, which encapsulates data (attributes or properties) and behavior (methods or operations). OOD focuses on "what" objects are needed and "how" they interact to solve a problem.

### 1.1 Contrast with Procedural Design

| Feature          | Procedural Design                                     | Object-Oriented Design                                 |
| :--------------- | :---------------------------------------------------- | :----------------------------------------------------- |
| **Focus**        | Procedures/Functions, sequential execution of steps.  | Data and the operations that act on that data (Objects). |
| **Data**         | Often global or passed explicitly between functions.  | Encapsulated within objects.                           |
| **Modularity**   | Based on functions.                                   | Based on objects/classes.                              |
| **Reusability**  | Limited to functions.                                 | High reusability through classes (inheritance, composition). |
| **Maintainability** | Can be complex due to data scattering.                | Easier to maintain due to encapsulated logic.          |
| **Real-world mapping** | Less direct mapping to real-world entities.           | Stronger mapping to real-world entities.               |
| **Example**      | A recipe with steps to prepare a meal.                | A "Chef" object with methods like `prepareMeal()`, `cook()`, `serve()`. |

**Key Takeaway:** OOD aims to create software that is more modular, flexible, reusable, and easier to maintain by organizing code around real-world or conceptual "objects."

---

## 2. Core Concepts of OOD

OOD is built upon several fundamental principles that are also central to Object-Oriented Programming (OOP). Understanding these concepts is crucial for designing effective object-oriented systems.

### 2.1 Objects

*   **Definition:** An object is a fundamental unit in OOD. It represents a real-world entity or a concept and has a state and behavior.
*   **State:** Refers to the data or attributes an object holds. For example, a `Car` object might have attributes like `color`, `make`, `model`, and `speed`.
*   **Behavior:** Refers to the actions or operations an object can perform. The `Car` object might have behaviors like `startEngine()`, `accelerate()`, `brake()`, and `changeGear()`.
*   **Example (Deitel & Deitel):** In a university system, a `Student` object might have attributes like `studentId`, `name`, `major`, and behaviors like `enrollCourse()`, `dropCourse()`, `getGPA()`.

### 2.2 Classes

*   **Definition:** A class is a blueprint or a template for creating objects. It defines the common attributes and behaviors that all objects of that class will share.
*   **Encapsulation:** A class bundles data (attributes) and methods (behaviors) together. This "hiding" of internal data and exposing only necessary interfaces is a key aspect of encapsulation.
*   **Example (Schildt):** A `Dog` class could define attributes like `breed`, `age`, `color` and methods like `bark()`, `wagTail()`, `eat()`. Each individual `Dog` object (e.g., `myDog`, `yourDog`) will be an instance of this `Dog` class, each with its own specific values for `breed`, `age`, and `color`.

### 2.3 Abstraction

*   **Definition:** Abstraction involves hiding complex implementation details and showing only the essential features of an object. It allows us to focus on *what* an object does rather than *how* it does it.
*   **Purpose:** Simplifies the design and makes systems easier to understand and use.
*   **Example (Mall):** When you drive a car, you interact with the steering wheel, accelerator, and brakes. You don't need to know the intricate details of the engine's combustion process or the transmission's gear ratios. The car's interface provides an abstraction of its functionality. Similarly, a `Car` class might expose a `accelerate()` method without revealing the complex internal mechanics of how that acceleration is achieved.

### 2.4 Encapsulation (Data Hiding)

*   **Definition:** Encapsulation is the mechanism of bundling data (attributes) and the methods that operate on that data within a single unit (a class). It also involves controlling access to the data, typically by making attributes `private` and providing `public` methods (getters and setters) to access and modify them.
*   **Benefits:**
    *   **Data Protection:** Prevents external code from directly manipulating an object's internal state, which can lead to inconsistencies or errors.
    *   **Modularity:** Objects are self-contained units, making it easier to modify or replace their implementation without affecting other parts of the system.
    *   **Flexibility:** Changes to the internal implementation of a class do not affect other classes that use it, as long as the public interface remains the same.
*   **Example (Schildt):** In a `BankAccount` class, the `balance` attribute would be `private`. You would use public methods like `deposit(amount)` and `withdraw(amount)` to interact with the balance. This prevents someone from directly setting the balance to an invalid value.

### 2.5 Inheritance

*   **Definition:** Inheritance is a mechanism where a new class (subclass or derived class) can inherit properties and behaviors from an existing class (superclass or base class). This promotes code reusability and establishes an "is-a" relationship.
*   **"Is-a" Relationship:** If Class B inherits from Class A, then Class B "is a" type of Class A. For example, a `SportsCar` "is a" `Car`.
*   **Benefits:**
    *   **Code Reusability:** Avoids redundant code by defining common attributes and methods in a base class.
    *   **Hierarchical Structure:** Creates a natural hierarchy of classes, reflecting real-world relationships.
*   **Example (Liang):**
    ```java
    class Vehicle {
        String brand;
        void start() {
            System.out.println("Vehicle starting...");
        }
    }

    class Car extends Vehicle { // Car inherits from Vehicle
        int numberOfDoors;
        void drive() {
            System.out.println("Car is driving...");
        }
    }

    // A SportsCar further inherits from Car
    class SportsCar extends Car {
        String spoilerType;
        void race() {
            System.out.println("SportsCar is racing...");
        }
    }
    ```
    Here, `Car` inherits `brand` and `start()` from `Vehicle`. `SportsCar` inherits `brand`, `start()`, `numberOfDoors`, and `drive()` from `Car` and `Vehicle`.

### 2.6 Polymorphism

*   **Definition:** Polymorphism (meaning "many forms") allows objects of different classes to be treated as objects of a common superclass. It enables a single interface to represent different underlying forms (implementations).
*   **Types of Polymorphism:**
    *   **Compile-time Polymorphism (Method Overloading):** The same method name can be used with different parameter lists within the same class. The compiler determines which method to call based on the arguments provided.
        *   *Example:* A `Calculator` class might have multiple `add()` methods: `add(int a, int b)` and `add(double a, double b)`.
    *   **Run-time Polymorphism (Method Overriding):** A subclass provides a specific implementation for a method that is already defined in its superclass. The method to be executed is determined at runtime based on the actual type of the object.
        *   *Example (Schildt):* If `Car` and `Motorcycle` both inherit from `Vehicle`, and `Vehicle` has a `start()` method, `Car` might override `start()` to print "Car starting..." and `Motorcycle` to print "Motorcycle starting...". If you have a `Vehicle` reference pointing to a `Car` object, calling `start()` will execute the `Car`'s `start()` method.

### 2.7 Association, Aggregation, and Composition

These are terms used to describe relationships between objects.

*   **Association:** A general "uses-a" or "has-a" relationship between two classes. It's a weak link.
    *   *Example:* A `Student` `has-a` `Address` object. A `Course` can be taught by a `Teacher`.

*   **Aggregation:** A stronger "has-a" relationship, representing a "whole-part" relationship where the part can exist independently of the whole.
    *   *Example:* A `Department` `has-a` collection of `Teacher` objects. A `Teacher` can exist even if the `Department` is dissolved.

*   **Composition:** The strongest form of "has-a" relationship. It represents a "whole-part" relationship where the part cannot exist independently of the whole. If the whole is destroyed, the parts are also destroyed.
    *   *Example:* A `House` `has-a` `Room`. If the `House` is destroyed, its `Rooms` also cease to exist as part of that house. A `Car` `has-a` `Engine`. If the `Car` is scrapped, the `Engine` (as part of that specific car) is also gone.

---

## 3. Benefits of OOD

*   **Improved Modularity:** Systems are broken down into smaller, self-contained objects, making them easier to manage and understand.
*   **Increased Reusability:** Classes can be reused across different projects through inheritance and composition, saving development time.
*   **Enhanced Maintainability:** Encapsulation and modularity make it easier to fix bugs or update functionality without affecting unrelated parts of the system.
*   **Better Real-world Mapping:** OOD often maps more closely to real-world entities and their interactions, leading to more intuitive designs.
*   **Easier Collaboration:** Well-defined object interfaces facilitate teamwork, as different developers can work on different objects concurrently.
*   **Flexibility and Extensibility:** OOD principles like inheritance allow for easy extension of existing functionality without modifying the original code.

---

## 4. Object-Oriented Design Process

OOD is an iterative process that typically involves the following key activities:

1.  **Identifying Objects and Classes:**
    *   This is the most crucial step. It involves analyzing the problem domain and identifying the key entities that will become objects or classes.
    *   **Techniques:**
        *   **Noun Identification:** Look for nouns in the problem description that represent potential objects or concepts (e.g., `Customer`, `Order`, `Product`, `Account`).
        *   **Use Case Analysis:** Understand how users interact with the system to identify objects involved in those interactions.
        *   **Domain Knowledge:** Leverage domain expertise to identify relevant entities.

2.  **Defining Attributes and Methods:**
    *   For each identified object/class, determine its state (attributes) and behaviors (methods).
    *   **Responsibilities:** Assign responsibilities to objects. What data does an object need? What actions can it perform?

3.  **Establishing Relationships:**
    *   Define how objects interact with each other. This involves identifying associations, aggregations, and compositions.
    *   **Inheritance:** Determine if any classes can inherit from others to create hierarchies and promote code reuse.

4.  **Designing Object Interfaces:**
    *   Define the public methods (the interface) that objects will expose for interaction. This is where encapsulation is applied.
    *   **Abstraction:** Focus on what needs to be exposed, hiding unnecessary implementation details.

5.  **Refinement and Iteration:**
    *   The design process is iterative. Review and refine the identified objects, attributes, methods, and relationships as the understanding of the problem evolves.
    *   **UML Diagrams (Bahrami):** Tools like the Unified Modeling Language (UML) are invaluable for visually representing the design, including class diagrams, sequence diagrams, etc.

---

## 5. Important Points to Remember

*   **OOD is about modeling the problem domain.** Think in terms of "things" and their interactions.
*   **Classes are blueprints, objects are instances.**
*   **Encapsulation is key for data protection and modularity.**
*   **Inheritance promotes code reuse and establishes "is-a" relationships.**
*   **Polymorphism allows for flexible and dynamic behavior.**
*   **Abstraction hides complexity.**
*   **Design is iterative.** Don't expect to get it perfect on the first try.
*   **Focus on responsibilities:** What should each object be responsible for?

---

## 6. Practice Questions

**Multiple Choice Questions:**

1.  Which of the following best describes the primary focus of Object-Oriented Design?
    a) Sequential execution of instructions.
    b) Designing efficient algorithms.
    c) Modeling the system as a collection of interacting objects.
    d) Managing database schemas.

2.  The "blueprint" for creating objects is called a:
    a) Method
    b) Attribute
    c) Class
    d) Object

3.  Hiding complex implementation details and exposing only essential features is known as:
    a) Encapsulation
    b) Inheritance
    c) Polymorphism
    d) Abstraction

4.  A "has-a" relationship where the part cannot exist independently of the whole is:
    a) Association
    b) Aggregation
    c) Composition
    d) Inheritance

**Short Answer Questions:**

5.  Differentiate between an object and a class with a simple example.
6.  Explain the concept of data hiding and why it is important in OOD.
7.  Describe the "is-a" relationship and how inheritance supports it.
8.  What is the main benefit of polymorphism in OOD?

**Programming/Design Questions:**

9.  Consider a system for managing a library. Identify at least three potential classes, their key attributes, and their primary behaviors.
10. If a `Car` class has an `Engine` object, what kind of relationship is this, and why? If the `Car` is destroyed, what happens to the `Engine` in this relationship?

---

## 7. Answers to Practice Questions

**Multiple Choice Answers:**

1.  c) Modeling the system as a collection of interacting objects.
2.  c) Class
3.  d) Abstraction
4.  c) Composition

**Short Answer Answers:**

5.  **Class:** A class is a template or blueprint that defines the common properties (attributes) and behaviors (methods) that objects of that type will have.
    **Object:** An object is an instance of a class. It is a concrete entity with its own state (values for attributes) and can perform actions (methods).
    *   **Example:**
        *   **Class:** `Book` (Blueprint)
        *   **Attributes:** `title`, `author`, `isbn`, `pages`
        *   **Methods:** `borrowBook()`, `returnBook()`
        *   **Objects:**
            *   `myBook` (an instance of `Book` with title="The Lord of the Rings", author="J.R.R. Tolkien", ...)
            *   `yourBook` (another instance of `Book` with title="Pride and Prejudice", author="Jane Austen", ...)

6.  **Data Hiding:** Data hiding (a core part of encapsulation) means restricting direct access to an object's internal data (attributes) from outside the object. This is typically achieved by declaring attributes as `private` and providing `public` methods (getters and setters) to access or modify them.
    **Importance:**
    *   **Data Integrity:** Prevents accidental or malicious modification of data, ensuring the object's state remains valid.
    *   **Flexibility:** Allows the internal implementation of an object to be changed without affecting other parts of the system, as long as the public interface remains consistent.
    *   **Maintainability:** Makes the code easier to understand and debug by localizing data and its manipulation.

7.  **"Is-a" Relationship:** This relationship signifies that one entity is a specialized version of another. For example, a `Dog` "is a" `Animal`.
    **Inheritance:** Inheritance is the mechanism that allows a new class (subclass) to inherit properties and behaviors from an existing class (superclass). This directly supports the "is-a" relationship, enabling code reuse and the creation of hierarchical class structures.

8.  The main benefit of polymorphism in OOD is **flexibility and extensibility**. It allows systems to be more adaptable to change. For instance, you can write code that operates on a superclass type, and it will automatically work with any subclass objects without needing to know their specific types at compile time. This makes it easier to add new types of objects to the system later on.

**Programming/Design Answers:**

9.  **Library System Example:**

    *   **Class:** `Book`
        *   **Attributes:** `title` (String), `author` (String), `isbn` (String), `publicationYear` (int), `isBorrowed` (boolean)
        *   **Behaviors:** `borrowBook()`, `returnBook()`, `displayDetails()`

    *   **Class:** `Member`
        *   **Attributes:** `memberId` (String), `name` (String), `borrowedBooks` (List of Book objects)
        *   **Behaviors:** `borrowBook(Book book)`, `returnBook(Book book)`, `displayBorrowedBooks()`

    *   **Class:** `Library`
        *   **Attributes:** `catalog` (List of Book objects), `members` (List of Member objects)
        *   **Behaviors:** `addBook(Book book)`, `removeBook(Book book)`, `addMember(Member member)`, `findBookByTitle(String title)`, `findMemberById(String memberId)`

10. This is a **Composition** relationship.
    *   **Reason:** An `Engine` is a critical part of a `Car`, and its existence as "the engine of *that* car" is tied to the `Car` itself. If the `Car` is scrapped (destroyed), the `Engine` that belonged to it is also effectively gone or no longer functional as part of that specific car. Therefore, the `Engine` object cannot exist independently of the `Car` object in this context. This implies that when the `Car` object is destroyed, the `Engine` object it composed should also be destroyed or deallocated.