---
title: "Design patterns"
subject: "SOFTWARE ENGINEERING"
module: "Module 3: Implementation and Testing"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f36353"
status: "completed"
scrapedAt: "2026-05-23T16:24:28.917Z"
---
## Software Engineering: Module 3 - Implementation and Testing

### Topic: Design Patterns

This topic delves into the crucial concept of Design Patterns, a cornerstone of effective software design and implementation. Understanding and applying design patterns helps us build robust, maintainable, and reusable software systems. This aligns with **CO3** (Prepare Software Design) and **CO4** (Interpret object-oriented design principles, design patterns).

---

### 1. Introduction to Design Patterns

*   **Definition:** Design patterns are proven, reusable solutions to commonly occurring problems within a given context in software design. They are not specific pieces of code, but rather descriptions or templates for how to solve a problem that can be used in many different situations. (Sommerville, 2015; Pressman, 2014)
*   **Purpose:**
    *   **Promote Reusability:** Patterns offer pre-tested solutions, reducing the need to reinvent the wheel.
    *   **Improve Maintainability:** Consistent use of patterns makes code easier to understand and modify.
    *   **Enhance Communication:** Patterns provide a shared vocabulary among developers, facilitating discussions about design.
    *   **Reduce Complexity:** By abstracting common solutions, patterns help manage the inherent complexity of software.
    *   **Support Object-Oriented Principles:** Many patterns leverage and reinforce principles like encapsulation, inheritance, and polymorphism. (Pressman, 2014)

*   **Key Concept:** A design pattern is a solution to a problem within a system of relationships. It has a name, describes a problem, explains a solution, and outlines the consequences of applying the pattern. (Pressman, 2014, "Gang of Four" patterns)

---

### 2. Classification of Design Patterns

Design patterns are often categorized based on their purpose. The most common categorization is from the "Gang of Four" (GoF) book: "Design Patterns: Elements of Reusable Object-Oriented Software."

#### 2.1. Creational Patterns

These patterns deal with object creation mechanisms, aiming to increase flexibility and reuse of existing code.

*   **Singleton Pattern:**
    *   **Problem:** Ensures that a class has only one instance and provides a global point of access to it.
    *   **Solution:** A class with a private constructor and a static method that returns the single instance.
    *   **Example:** A logging utility, a configuration manager, or a database connection pool.
    *   **When to Use:** When exactly one object is needed to coordinate actions across the system.
    *   **Important Point:** Be cautious with singletons in multi-threaded environments as careful synchronization is required.

*   **Factory Method Pattern:**
    *   **Problem:** Defines an interface for creating an object, but lets subclasses decide which class to instantiate.
    *   **Solution:** A superclass declares the factory method, which returns an object of a supertype. Subclasses override this method to return instances of specific subclasses.
    *   **Example:** A document creation system where you have different document types (e.g., PDFDocument, WordDocument) and a DocumentManager class that uses a factory method to create the appropriate document based on user input.
    *   **When to Use:** When a class cannot anticipate the class of objects it must create.

*   **Abstract Factory Pattern:**
    *   **Problem:** Provides an interface for creating families of related or dependent objects without specifying their concrete classes.
    *   **Solution:** An abstract factory interface declares methods for creating abstract products. Concrete factories implement these methods to create concrete products.
    *   **Example:** Creating UI elements for different operating systems (e.g., WindowsUIFactory, MacUIFactory), each producing its own set of buttons, checkboxes, and windows.
    *   **When to Use:** When a system should be independent of how its products are created, composed, and represented.

*   **Builder Pattern:**
    *   **Problem:** Separates the construction of a complex object from its representation so that the same construction process can create different representations.
    *   **Solution:** A builder class constructs the object step by step. A director class uses the builder to construct the object.
    *   **Example:** Building a complex computer configuration, where different parts (CPU, RAM, GPU) are assembled by a builder.
    *   **When to Use:** When the process of creating a complex object is time-consuming and needs to be separated into multiple steps.

*   **Prototype Pattern:**
    *   **Problem:** Specifies the kinds of objects to create using a prototypical instance, and creates new objects by copying this prototype.
    *   **Solution:** An object that implements a cloning interface. New objects are created by cloning existing instances.
    *   **Example:** Creating copies of a complex configuration object or a graphical element.
    *   **When to Use:** When you need to create new objects from an existing object, especially if object creation is expensive or complex.

#### 2.2. Structural Patterns

These patterns deal with object composition, defining ways to compose objects to obtain new functionalities.

*   **Adapter Pattern:**
    *   **Problem:** Allows objects with incompatible interfaces to collaborate.
    *   **Solution:** An adapter class wraps an existing class with a different interface.
    *   **Example:** Integrating a legacy system with a new API that expects a different data format.
    *   **When to Use:** When you want to use an existing class but its interface is incompatible with the rest of your system.

*   **Bridge Pattern:**
    *   **Problem:** Decouples an abstraction from its implementation so that the two can vary independently.
    *   **Solution:** Uses two layers of abstraction: an "abstraction" and an "implementation." The abstraction class holds a reference to an implementation object.
    *   **Example:** A drawing program that can draw various shapes (circle, square) using different rendering systems (vector, raster).
    *   **When to Use:** When you have a large number of classes that can be combined in different ways, or when you want to avoid a permanent binding between an abstraction and its implementation.

*   **Composite Pattern:**
    *   **Problem:** Composes objects into tree structures to represent part-whole hierarchies. It allows clients to treat individual objects and compositions of objects uniformly.
    *   **Solution:** A common interface for both individual objects (leaves) and composite objects (composites).
    *   **Example:** A file system where files and directories can be treated similarly.
    *   **When to Use:** When you want to represent part-whole hierarchies and need to treat individual objects and compositions of objects uniformly.

*   **Decorator Pattern:**
    *   **Problem:** Attaches additional responsibilities to an object dynamically. Decorators provide a flexible alternative to subclassing for extending functionality.
    *   **Solution:** A decorator class wraps the original object and adds new behavior before or after delegating the call to the wrapped object.
    *   **Example:** Adding scrolling or borders to a text view component without modifying the original text view class.
    *   **When to Use:** To add responsibilities to individual objects dynamically and transparently, without affecting other objects.

*   **Facade Pattern:**
    *   **Problem:** Provides a unified interface to a set of interfaces in a subsystem. It defines a higher-level interface that makes the subsystem easier to use.
    *   **Solution:** A facade class provides a simplified interface to a complex subsystem.
    *   **Example:** A multimedia conversion system that hides the complexities of different codecs and file formats behind a single `convertFile` method.
    *   **When to Use:** To simplify the interface to a complex subsystem.

*   **Flyweight Pattern:**
    *   **Problem:** Uses sharing to support large numbers of fine-grained objects efficiently.
    *   **Solution:** Objects are divided into intrinsic (shared, context-independent) and extrinsic (unique, context-dependent) states. The flyweight object stores the intrinsic state.
    *   **Example:** Rendering many similar graphical objects where sharing common properties like color or font can save memory.
    *   **When to Use:** When you have many objects that share common intrinsic state, and the extrinsic state can be passed to methods.

*   **Proxy Pattern:**
    *   **Problem:** Provides a surrogate or placeholder for another object to control access to it.
    *   **Solution:** A proxy object has the same interface as the real subject and forwards requests to the real subject.
    *   **Example:** A remote proxy for accessing an object on a remote server, a virtual proxy for lazy loading large objects, or a protection proxy for controlling access.
    *   **When to Use:** To control access to an object, to provide a local representative for a remote object, or to create a virtual copy of an object.

#### 2.3. Behavioral Patterns

These patterns deal with algorithms and the assignment of responsibilities between objects.

*   **Observer Pattern:**
    *   **Problem:** Defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.
    *   **Solution:** A subject maintains a list of observers and notifies them of state changes. Observers register with the subject to receive notifications.
    *   **Example:** A stock ticker where multiple display windows (observers) update when the stock price (subject) changes.
    *   **When to Use:** When a change to one object requires changing others, and you don't know in advance how many objects will be affected.

*   **Strategy Pattern:**
    *   **Problem:** Defines a family of algorithms, encapsulates each one, and makes them interchangeable. Strategy lets the algorithm vary independently from clients that use it.
    *   **Solution:** Define an interface for the algorithm, and concrete classes implement the interface. The context class holds a reference to a strategy object.
    *   **Example:** A sorting algorithm where you can switch between different sorting strategies (e.g., Bubble Sort, Quick Sort) dynamically.
    *   **When to Use:** When you have multiple variations of an algorithm, or when you want to switch algorithms at runtime.

*   **Template Method Pattern:**
    *   **Problem:** Defines the skeleton of an algorithm in an operation, deferring some steps to subclasses. Template Method lets subclasses redefine certain steps of an algorithm without changing the algorithm's structure.
    *   **Solution:** A base class defines a template method that outlines the algorithm. Abstract methods within the template method are implemented by subclasses.
    *   **Example:** A data processing framework where subclasses define specific steps like data loading, transformation, and saving.
    *   **When to Use:** When you want to define the general structure of an algorithm but allow subclasses to provide specific implementations of certain steps.

*   **Iterator Pattern:**
    *   **Problem:** Provides a way to access the elements of an aggregate object (like a list or collection) sequentially without exposing its underlying representation.
    *   **Solution:** An iterator interface defines methods for traversing an aggregate. Concrete iterators implement these methods for specific aggregate types.
    *   **Example:** Traversing through a collection of items in a shopping cart.
    *   **When to Use:** When you want to traverse a collection of objects without exposing the internal structure of the collection.

*   **State Pattern:**
    *   **Problem:** Allows an object to alter its behavior when its internal state changes. The object will appear to change its class.
    *   **Solution:** A context object delegates behavior to state objects, each representing a particular state. The context object transitions between states by changing the state object it refers to.
    *   **Example:** A document editor that can be in different states like "editing," "read-only," or "saving," with different behaviors for each state.
    *   **When to Use:** When an object's behavior changes significantly based on its internal state.

*   **Command Pattern:**
    *   **Problem:** Encapsulates a request as an object, thereby letting you parameterize clients with different requests, queue or log requests, and support undoable operations.
    *   **Solution:** Define an interface for commands. Concrete command classes implement this interface. An invoker object holds a command object and executes it.
    *   **Example:** A GUI application where menu items or buttons execute specific commands, potentially with undo functionality.
    *   **When to Use:** When you want to decouple the sender of a request from the receiver of the request, or when you need to support undo/redo operations.

*   **Mediator Pattern:**
    *   **Problem:** Defines an object that encapsulates how a set of objects interact. Mediator promotes loose coupling by keeping objects from referring to each other explicitly, and it lets you vary their interaction independently.
    *   **Solution:** A mediator object manages the interactions between other objects (colleagues).
    *   **Example:** A chat room where users (colleagues) communicate through a chat room (mediator) rather than directly with each other.
    *   **When to Use:** When a set of objects communicate in complex ways, or when you want to avoid tight coupling between objects.

*   **Visitor Pattern:**
    *   **Problem:** Represents an operation to be performed on the elements of an object structure. Visitor lets you define a new operation without changing the classes of the elements on which it operates.
    *   **Solution:** A visitor interface declares a `visit` method for each type of concrete element. Concrete visitor classes implement the `visit` methods to perform operations.
    *   **Example:** A reporting tool that can generate reports in different formats (PDF, HTML, XML) from a document structure without modifying the document classes.
    *   **When to Use:** When you have an object structure with many different classes of objects, and you want to perform operations on them that are likely to change or be extended.

---

### 3. Benefits and Drawbacks of Using Design Patterns

#### 3.1. Benefits

*   **Proven Solutions:** Patterns offer solutions that have been tested and refined over time by experienced developers. (Sommerville, 2015)
*   **Readability and Understanding:** Code that uses well-known design patterns is often easier for other developers to understand.
*   **Maintainability and Extensibility:** Patterns promote modularity and loose coupling, making the system easier to modify and extend.
*   **Reduced Development Time:** By leveraging existing solutions, developers can reduce the time spent on designing and implementing common problems.
*   **Shared Vocabulary:** Patterns provide a common language for developers to discuss design choices, improving team collaboration.

#### 3.2. Drawbacks

*   **Over-Engineering:** Developers might overuse patterns, leading to unnecessary complexity and abstraction, especially for simple problems. (Pressman, 2014)
*   **Learning Curve:** Understanding and applying patterns effectively requires time and practice.
*   **Performance Overhead:** Some patterns, particularly those involving indirection or excessive object creation, can introduce minor performance overhead.
*   **Misapplication:** Applying the wrong pattern to a problem can lead to more issues than it solves.

---

### 4. Design Patterns in Agile Development

While design patterns are fundamental to object-oriented design, their application in agile contexts is also important. Agile principles, as discussed in **CO2**, emphasize adaptability and responding to change.

*   **YAGNI (You Ain't Gonna Need It):** This agile principle suggests not to implement functionality until it's actually needed. When using design patterns, it's crucial to apply them judiciously and not preemptively, to avoid over-engineering. (Anderson, 2010; Poppendieck, 2006)
*   **Refactoring:** As the software evolves and new requirements emerge, agile developers continuously refactor their code. Design patterns can guide this refactoring process, helping to improve the design as the system grows. (Sommerville, 2020)
*   **Emergent Design:** Design patterns can be part of an "emergent design" approach in agile, where the design evolves organically as the system is built and tested, rather than being fully defined upfront.

---

### 5. Important Points to Remember

*   **Patterns are not Code:** They are templates or descriptions that guide implementation.
*   **Context is Key:** Choose patterns that are appropriate for the specific problem and its context.
*   **Don't Overuse Patterns:** Apply them judiciously to avoid unnecessary complexity.
*   **Understand the "Why":** Know the problem a pattern solves and its consequences.
*   **Learn from Experience:** The best way to master design patterns is through practice and observing their application in existing codebases.

---

### 6. Practice Questions and Exercises

**Question 1:**
Which design pattern is used to ensure that a class has only one instance and provide a global point of access to it?
a) Factory Method
b) Singleton
c) Adapter
d) Observer

**Question 2:**
You are designing a system that needs to create various types of documents (e.g., PDF, Word, Text). You want to allow the system to be extended with new document types in the future without modifying the core document creation logic. Which creational design pattern would be most suitable?
a) Abstract Factory
b) Builder
c) Factory Method
d) Prototype

**Question 3:**
You have a class `LegacyUserAPI` with a `getUserDetails(userId)` method. Your new application expects a `getUser(userId)` method with a different signature. How can you make these two classes compatible without modifying `LegacyUserAPI`?
a) Decorator Pattern
b) Composite Pattern
c) Adapter Pattern
d) Facade Pattern

**Question 4:**
Describe a scenario where the Observer pattern would be beneficial.

**Question 5:**
Discuss the potential risks of overusing design patterns in an agile development environment.

---

### 7. Answers to Practice Questions

**Answer 1:**
b) Singleton

**Answer 2:**
c) Factory Method. The Factory Method pattern allows subclasses to decide which class to instantiate, making it easy to add new document types by creating new subclasses of the document creator. While Abstract Factory could also work, Factory Method is more direct for this specific problem of creating one type of object based on subclasses.

**Answer 3:**
c) Adapter Pattern. An Adapter pattern would allow you to create an adapter class that wraps the `LegacyUserAPI` and exposes the `getUser(userId)` method, translating the calls to the `LegacyUserAPI`'s `getUserDetails` method.

**Answer 4:**
The Observer pattern is beneficial in scenarios where multiple objects need to be updated when a single object's state changes. For example, in a weather station application, several display units (like a temperature display, humidity display, and pressure display) can observe a central weather data object. When the weather data object updates with new readings, all subscribed display units are notified and update themselves accordingly.

**Answer 5:**
Overusing design patterns in an agile environment can lead to:
*   **Unnecessary Complexity:** Applying patterns when they are not truly needed can make the code more complex and harder to understand than a simpler, direct solution. This violates the YAGNI principle.
*   **Increased Development Time:** While patterns can speed up development in the long run, premature or unnecessary application of complex patterns can initially slow down development cycles.
*   **Rigidity:** Over-abstracted designs might make it harder to respond to genuine changes in requirements, which is counter to the agile philosophy.
*   **Technical Debt:** If patterns are not well understood or applied, they can introduce subtle bugs or make future refactoring more difficult, leading to technical debt.

---

This concludes the study notes on Design Patterns. Remember that understanding the core problem and the intent behind each pattern is crucial for effective application. Good luck with your studies!

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
