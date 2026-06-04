---
title: "Designing Class-Based Components"
subject: "SOFTWARE ENGINEERING"
module: "Module 2: Requirement Analysis and Design: Functional and non"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f3634d"
status: "completed"
scrapedAt: "2026-05-23T16:24:25.364Z"
---
# Software Engineering: Module 2 - Requirement Analysis and Design

## Topic: Designing Class-Based Components

This topic focuses on the principles and practices of designing software using a class-based, object-oriented approach. We will explore how to translate requirements into well-structured classes and their relationships.

---

### Learning Outcomes Covered:

*   **CO4: Interpret object-oriented design principles, design patterns, software testing methods (including unit testing, integration testing, and test automation), and open-source licensing models (such as GPL, LGPL, and BSD).** (Knowledge Level: K2)

---

### 1. Introduction to Class-Based Components in Object-Oriented Design

Object-Oriented Design (OOD) is a paradigm that structures a software system as a collection of interacting objects. Each object is an instance of a class, which serves as a blueprint for creating objects. Class-based components are the fundamental building blocks of such systems.

**Key Concepts:**

*   **Class:** A blueprint or template that defines the properties (attributes or data members) and behaviors (methods or member functions) that objects of that class will have.
    *   **Example:** A `Car` class might have attributes like `color`, `make`, `model`, and methods like `startEngine()`, `accelerate()`, `brake()`.
*   **Object:** An instance of a class. It represents a specific entity with its own state (values of attributes) and behavior.
    *   **Example:** `myRedFerrari` is an object of the `Car` class, with `color` set to "red", `make` set to "Ferrari", and `model` set to "California".
*   **Encapsulation:** The bundling of data (attributes) and methods that operate on the data within a single unit (the class). It hides the internal implementation details and exposes only necessary functionalities.
    *   **Purpose:** Protects data from unintended modification, promotes modularity.
    *   **Sommerville (2015):** Emphasizes encapsulation as a key principle for managing complexity.
*   **Abstraction:** The process of representing essential features of an entity while hiding unnecessary details. It allows us to focus on *what* an object does rather than *how* it does it.
    *   **Example:** When you drive a car, you interact with the steering wheel, accelerator, and brake. You don't need to know the complex mechanical processes happening under the hood.
*   **Inheritance:** A mechanism that allows a new class (subclass or derived class) to inherit properties and behaviors from an existing class (superclass or base class).
    *   **Purpose:** Promotes code reusability and establishes an "is-a" relationship.
    *   **Example:** A `SportsCar` class can inherit from the `Car` class. It will have all the attributes and methods of a `Car` plus additional specific features like `turboBoost()`.
*   **Polymorphism:** The ability of an object to take on many forms. In a class-based system, it often refers to the ability of different classes to respond to the same method call in their own specific ways.
    *   **Purpose:** Enhances flexibility and allows for extensibility.
    *   **Example:** If both `Car` and `Bicycle` classes have a `move()` method, calling `move()` on a `Car` object might accelerate it, while calling `move()` on a `Bicycle` object might involve pedaling.

---

### 2. Identifying Classes and Their Responsibilities

The first step in designing class-based components is to identify the key entities or concepts in the problem domain that can be represented as classes. This is often derived from the requirements specification.

**Techniques for Identifying Classes:**

*   **Noun Identification:** Look for nouns in the requirements specification. These often represent potential classes.
    *   **Pressman (2014):** Suggests this as a starting point, but warns against simply creating a class for every noun.
    *   **Example:** In a library management system requirements, nouns like "Book", "Member", "Librarian", "Loan" are strong candidates for classes.
*   **Use Case Driven Approach:** Analyze use cases to identify actors, entities that interact with the system, and objects that manage data or perform actions.
    *   **Example:** A "Borrow Book" use case might involve `Member`, `Book`, and `Loan` objects.
*   **CRC Cards (Class-Responsibility-Collaboration):** A manual technique where designers brainstorm classes, their responsibilities (what they know and do), and how they collaborate with other classes.
    *   **Sommerville (2020):** Mentions CRC cards as a useful collaborative design tool for identifying objects and their roles.
    *   **How it works:**
        1.  Create a card for each identified class.
        2.  On the card, list the class's responsibilities (e.g., "manage borrower information", "search for books").
        3.  List the classes it collaborates with (e.g., "collaborates with `Book` to check availability").
        *   **Example CRC Card for `Book`:**
            *   **Class:** Book
            *   **Responsibilities:**
                *   Store title, author, ISBN, status (available/borrowed)
                *   Check if available
                *   Mark as borrowed
                *   Mark as returned
            *   **Collaborators:** `Loan`, `LibraryCatalog`

**Defining Class Responsibilities:**

*   **What information does the class need to maintain?** (Attributes)
*   **What actions can the class perform?** (Methods)
*   **What messages can it send to other objects?** (Collaborations)

---

### 3. Designing Class Relationships

Once classes are identified, the next step is to define how they relate to each other. These relationships dictate how objects interact and form the overall system structure.

**Types of Relationships:**

*   **Association:** A general relationship between two classes, indicating that objects of one class are connected to objects of another class. This is typically an "uses-a" or "has-a" relationship.
    *   **Types of Association:**
        *   **One-to-One:** One object of class A is related to one object of class B. (e.g., `Person` and `Passport`)
        *   **One-to-Many:** One object of class A is related to many objects of class B. (e.g., `Customer` and `Order`)
        *   **Many-to-Many:** Many objects of class A are related to many objects of class B. (e.g., `Student` and `Course`)
    *   **Example:** A `Customer` class might have an association with an `Order` class, indicating that a customer can place multiple orders.
*   **Aggregation:** A "has-a" relationship where one class is composed of other classes, but the composed classes can exist independently. It represents a whole-part relationship.
    *   **Example:** A `Car` has an `Engine`. The `Engine` can exist even if the `Car` is dismantled.
*   **Composition:** A stronger form of aggregation where the part cannot exist independently of the whole. If the whole is destroyed, the parts are also destroyed.
    *   **Example:** A `House` is composed of `Rooms`. If the `House` is demolished, the `Rooms` cease to exist as parts of that house.
*   **Inheritance (Generalization/Specialization):** An "is-a" relationship where a subclass inherits properties and behaviors from a superclass.
    *   **Example:** `Dog` is-a `Animal`, `Cat` is-a `Animal`.

**UML Class Diagrams:**

*   Unified Modeling Language (UML) provides a visual language for modeling software systems. Class diagrams are a core part of UML, used to depict classes, their attributes, methods, and relationships.
    *   **Pressman (2014):** Strongly advocates for the use of UML in design.
    *   **Key elements in a UML Class Diagram:**
        *   **Class Box:** Divided into three sections: Class Name, Attributes, Methods.
        *   **Relationships:** Lines connecting classes with specific symbols for association, aggregation, composition, and inheritance.
            *   Association: Solid line.
            *   Aggregation: Diamond at the "whole" end (hollow diamond).
            *   Composition: Filled diamond at the "whole" end (solid diamond).
            *   Inheritance: Solid line with a hollow arrowhead pointing to the superclass.
    *   **Example:**
        ```
        +-----------------+        +-----------------+
        |     Customer    |------->|      Order      |
        +-----------------+  1..*  +-----------------+
        | - customerId    |        | - orderId       |
        | - name          |        | - orderDate     |
        | - address       |        | - totalAmount   |
        +-----------------+        +-----------------+
        | + placeOrder()  |        | + calculateTotal()|
        | + viewOrderHistory()|    | + addItem()     |
        +-----------------+        +-----------------+
        ```
        *   This diagram shows a one-to-many association between `Customer` and `Order`. A `Customer` can have many `Orders`.

---

### 4. Applying Object-Oriented Design Principles

Effective class-based design adheres to several core principles that promote maintainability, flexibility, and extensibility.

**SOLID Principles (a mnemonic for five key design principles):**

*   **S - Single Responsibility Principle (SRP):** A class should have only one reason to change. This means a class should have a single, well-defined purpose.
    *   **Sommerville (2015):** Highlights SRP for promoting modularity and reducing the impact of changes.
    *   **Example:** Instead of a `Customer` class that handles customer data, order processing, and sending emails, it's better to have separate classes: `Customer` (data), `OrderProcessor` (processing), and `EmailService` (sending emails).
*   **O - Open/Closed Principle (OCP):** Software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification.
    *   **How to achieve:** Use inheritance and polymorphism. When new functionality is needed, create a new subclass that extends the existing behavior without altering the original class.
    *   **Example:** If you have a `Shape` class with a `calculateArea()` method, and you want to add a `Triangle` shape, you would create a `Triangle` class that inherits from `Shape` and overrides `calculateArea()`, rather than modifying the original `Shape` class to include triangle-specific logic.
*   **L - Liskov Substitution Principle (LSP):** Objects of a superclass should be replaceable with objects of its subclasses without altering the correctness of the program.
    *   **Pressman (2014):** Emphasizes that subtypes must be substitutable for their base types.
    *   **Example:** If you have a `Bird` class with a `fly()` method, a `Penguin` class inheriting from `Bird` should not break the system if a `Penguin` object is used where a `Bird` object is expected. Since penguins cannot fly, the `fly()` method in `Penguin` should either do nothing or throw an exception, or the design might need rethinking (e.g., a `CanFly` interface).
*   **I - Interface Segregation Principle (ISP):** Clients should not be forced to depend on interfaces they do not use. Large interfaces should be broken down into smaller, more specific interfaces.
    *   **Example:** If you have a large `Worker` interface with methods like `work()`, `eat()`, `sleep()`, and `manage()`, a `Robot` class might only need `work()`, while a `Human` class needs all of them. It's better to have separate interfaces like `IWorkable`, `IEatable`, `ISleepable`, `IManageable`.
*   **D - Dependency Inversion Principle (DIP):** High-level modules should not depend on low-level modules. Both should depend on abstractions. Abstractions should not depend on details. Details should depend on abstractions.
    *   **How to achieve:** Use interfaces or abstract classes. High-level modules depend on abstract interfaces, and low-level modules implement these interfaces. This decouples the modules.
    *   **Example:** A `ReportGenerator` (high-level) should not directly depend on a `DatabaseConnection` (low-level). Instead, both should depend on an `IDataSource` interface. `DatabaseConnection` would implement `IDataSource`.

**Other Important Principles:**

*   **Cohesion:** The degree to which the elements within a module (or class) belong together. High cohesion is desirable, meaning a class should focus on a single task or a closely related set of tasks.
    *   **Sommerville (2020):** Links high cohesion to easier understanding and maintenance.
*   **Coupling:** The degree of interdependence between modules (or classes). Low coupling is desirable, meaning classes should be as independent as possible.
    *   **Pressman (2014):** Discusses reducing coupling as a key design goal for enhancing maintainability.
    *   **Example:** Classes that are tightly coupled (e.g., one class directly manipulates the internal state of another) are harder to change without affecting other parts of the system.

---

### 5. Designing for Reusability and Extensibility

A good class-based design emphasizes creating components that can be reused in different parts of the system or in future projects, and that can be easily extended to accommodate new requirements.

**Techniques:**

*   **Abstraction:** As discussed earlier, hiding details allows for different implementations to be plugged in.
*   **Inheritance:** Allows for creating specialized versions of existing classes.
*   **Composition/Aggregation:** Building complex objects from simpler, reusable components.
*   **Design Patterns:** Proven, reusable solutions to common software design problems. They provide a vocabulary for design and offer best practices for structuring code.
    *   **Sommerville (2015):** Discusses design patterns as established solutions to recurring design problems.
    *   **Pressman (2014):** Identifies design patterns as crucial for creating robust and maintainable systems.
    *   **Examples of Design Patterns:**
        *   **Creational Patterns:** Singleton, Factory Method, Abstract Factory (deal with object creation).
        *   **Structural Patterns:** Adapter, Decorator, Facade (deal with object composition and relationships).
        *   **Behavioral Patterns:** Observer, Strategy, Template Method (deal with algorithms and object interactions).
    *   **Example (Strategy Pattern):** Define a family of algorithms, encapsulate each one, and make them interchangeable. This allows the algorithm to vary independently from clients that use it.
        *   Imagine a `Payment` system. Instead of hardcoding the payment method, you can use the Strategy pattern:
            ```
            interface PaymentStrategy {
                void pay(int amount);
            }

            class CreditCardPayment implements PaymentStrategy {
                // ... credit card details ...
                @Override
                public void pay(int amount) { /* pay with credit card */ }
            }

            class PayPalPayment implements PaymentStrategy {
                // ... paypal details ...
                @Override
                public void pay(int amount) { /* pay with PayPal */ }
            }

            class ShoppingCart {
                private PaymentStrategy paymentStrategy;

                public void setPaymentStrategy(PaymentStrategy paymentStrategy) {
                    this.paymentStrategy = paymentStrategy;
                }

                public void checkout(int amount) {
                    paymentStrategy.pay(amount);
                }
            }
            ```
        *   This design allows the `ShoppingCart` to use different payment methods (CreditCard, PayPal) without changing its own code. It's open for extension (add new payment methods) but closed for modification (the `ShoppingCart` class itself doesn't need to change). This aligns with OCP and DIP.

---

### 6. Considerations for Non-Functional Requirements in Class Design

While functional requirements define what the system should do, non-functional requirements (NFRs) define how it should do it (e.g., performance, security, usability). These also influence class design.

*   **Performance:**
    *   **Example:** If performance is critical, you might choose data structures and algorithms within classes that are known for their efficiency (e.g., using `HashMap` for fast lookups instead of `ArrayList` if that's a bottleneck). Encapsulating efficient logic can be key.
*   **Security:**
    *   **Example:** Sensitive data should be strongly encapsulated. Access to methods that perform critical operations (e.g., `deleteUser()`) might require authentication and authorization checks within the class itself or through a dedicated security service.
*   **Maintainability:**
    *   **Example:** Following SOLID principles, keeping classes cohesive, and minimizing coupling directly contribute to maintainability, making it easier to fix bugs or add new features.
*   **Scalability:**
    *   **Example:** Designing classes to be stateless where possible or to effectively manage resources can help in scaling the application horizontally. Using design patterns that support distributed systems becomes important.

---

### Practice Questions:

1.  **Define and differentiate between Aggregation and Composition. Provide a real-world example for each.**
    *   **Answer:**
        *   **Aggregation:** A "has-a" relationship where the part can exist independently of the whole.
            *   *Example:* A `Department` "has-a" `Employee`. Employees can exist even if the department is dissolved.
        *   **Composition:** A "has-a" relationship where the part cannot exist independently of the whole; it's a stronger form of aggregation. If the whole is destroyed, the parts are also destroyed.
            *   *Example:* A `Car` "is composed of" an `Engine`. If the `Car` is destroyed, the `Engine` in that context ceases to exist as part of the car.
2.  **Explain the Single Responsibility Principle (SRP) and why it's important in class design. Give an example of how you might refactor a class to adhere to SRP.**
    *   **Answer:** SRP states that a class should have only one reason to change. It's important because it leads to more maintainable, understandable, and less brittle code. If a class has multiple responsibilities, a change in one responsibility can inadvertently affect another.
    *   *Refactoring Example:*
        *   **Before SRP:** A `Report` class that not only generates report data but also formats it for HTML and sends it via email.
        *   **After SRP:** Refactor into three classes: `ReportDataGenerator` (generates data), `ReportFormatter` (formats data to HTML), and `EmailSender` (sends the formatted report).
3.  **What is the Open/Closed Principle (OCP)? How can you design a class that is open for extension but closed for modification?**
    *   **Answer:** OCP states that software entities should be open for extension, but closed for modification. This means you should be able to add new functionality without changing existing code. This is often achieved through inheritance and polymorphism.
    *   *Design Example:* Using abstract base classes or interfaces. If you have an abstract `Shape` class with an abstract `draw()` method, you can extend it by creating new concrete `Circle` and `Square` classes without modifying the `Shape` class.
4.  **Consider the following scenario: A school needs to manage its students and courses. Each student can enroll in multiple courses, and each course can have multiple students.**
    *   **Identify potential classes.**
    *   **What type of relationship exists between students and courses?**
    *   **Draw a simple UML class diagram illustrating this relationship.**
    *   **Answer:**
        *   **Potential Classes:** `Student`, `Course`, `Enrollment` (or a linking class).
        *   **Relationship:** Many-to-Many association between `Student` and `Course`. This is often modeled explicitly with a third class, `Enrollment`, which represents the act of a student enrolling in a course and might hold additional attributes like grade or enrollment date.
        *   **UML Diagram:**
            ```
            +---------------+      +-------------+      +---------------+
            |    Student    |----->| Enrollment  |<-----|     Course    |
            +---------------+      +-------------+      +---------------+
            | - studentId   |      | - enrollmentId|      | - courseId    |
            | - name        |      | - studentId   |      | - courseName  |
            | - ...         |      | - courseId    |      | - credits     |
            +---------------+      | - grade       |      +---------------+
            | + enroll(Course)|    +-------------+      | + addStudent(Student)|
            | + viewCourses() |    | + getStudent()|      | + getStudents() |
            +---------------+      | + getCourse() |      +---------------+
                                   +-------------+
            ```
            *(Note: The diagram shows a many-to-many relationship between Student and Course, mediated by the Enrollment class. The arrows indicate navigation.)*

---

### Important Points to Remember:

*   **Start with requirements:** Class design is driven by understanding the problem domain and its requirements.
*   **Nouns are clues, not dictates:** While nouns from requirements can suggest classes, careful analysis is needed to identify true responsibilities.
*   **Focus on responsibilities:** Classes should encapsulate cohesive sets of responsibilities.
*   **Relationships matter:** Understanding and correctly modeling associations, aggregations, and compositions is crucial for system structure.
*   **SOLID principles are your guide:** Adhering to SOLID principles leads to more robust, flexible, and maintainable object-oriented designs.
*   **Design Patterns offer solutions:** Learn and apply common design patterns to solve recurring problems effectively.
*   **UML is a powerful tool:** Use UML class diagrams to visualize and communicate your design.
*   **Consider NFRs:** Non-functional requirements significantly influence design decisions at the class level.

---

This concludes our notes on Designing Class-Based Components. The next steps in software design involve detailing the interactions between classes and the internal structure of each class.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
