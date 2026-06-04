---
title: "Design Model"
subject: "SOFTWARE ENGINEERING"
module: "Module 2: Requirement Analysis and Design: Functional and non"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f36348"
status: "completed"
scrapedAt: "2026-05-23T16:24:21.831Z"
---
# Module 2: Requirement Analysis and Design - Design Model

## 1. Introduction to Design Model

**Learning Outcomes:**
* Understand the purpose and importance of a design model in software engineering.
* Differentiate between functional and non-functional requirements and how they influence the design.
* Interpret software process models and core activities, including handling changes with techniques like prototyping and incremental delivery (CO1).

**Key Concepts:**

*   **Design Model:** A representation of the software system at various levels of abstraction, guiding the implementation process. It translates requirements into a blueprint for building the software.
*   **Purpose of Design Models:**
    *   Facilitate communication among stakeholders (developers, clients, testers).
    *   Reduce complexity by breaking down the system into manageable components.
    *   Enable early detection of design flaws and inconsistencies.
    *   Provide a basis for understanding, maintenance, and evolution of the system.
*   **Levels of Abstraction:** Design models can exist at different levels, from high-level architectural views to detailed component-level designs.
*   **Functional Requirements:** Describe what the system *should do* (e.g., user login, data processing).
*   **Non-Functional Requirements:** Describe *how* the system should perform (e.g., performance, security, usability, reliability).

**Textbook References:**
*   **Sommerville (Tenth Edition):** Chapter 11 covers "Design" and discusses the importance of design as a bridge between requirements and implementation.
*   **Pressman (Eighth Edition):** Chapter 7, "Design Process and Principles," highlights the role of design in transforming requirements into a structured plan.

**Important Points to Remember:**
*   The design model is a critical artifact that directly impacts the quality, maintainability, and success of the software.
*   Both functional and non-functional requirements must be considered during the design process.

---

## 2. Types of Design Models

**Learning Outcomes:**
* Interpret software process models and core activities, including handling changes with techniques like prototyping and incremental delivery (CO1).
* Prepare Software Requirement Specification and Software Design for a given problem (CO3).
* Interpret object-oriented design principles, design patterns, software testing methods (including unit testing, integration testing, and test automation), and open-source licensing models (such as GPL, LGPL, and BSD). (CO4).

**Key Concepts:**

Design models can be broadly categorized based on the perspective they offer:

### 2.1. Structural Models

Describe the static structure of the system.

*   **Class Diagrams (UML):**
    *   **Definition:** Represent the classes in a system, their attributes, operations, and the relationships between them (association, aggregation, composition, inheritance).
    *   **Example:** A `Customer` class with attributes like `name`, `email`, and operations like `placeOrder()`. A `Order` class with attributes like `orderID`, `orderDate`. A relationship between `Customer` and `Order` showing a customer can have multiple orders.
    *   **Textbook Reference:** Pressman (Eighth Edition), Chapter 9 covers "Design for Object-Oriented Systems" and extensively details UML class diagrams.
*   **Object Diagrams (UML):**
    *   **Definition:** Show a snapshot of the objects in a system at a particular point in time, illustrating instances of classes and their relationships.
    *   **Example:** An instance of the `Customer` class named `johnDoe` and an instance of the `Order` class named `order123`, showing how `johnDoe` is associated with `order123`.
*   **Component Diagrams (UML):**
    *   **Definition:** Illustrate the organization and dependencies among software components.
    *   **Example:** A `User Interface` component that depends on a `Business Logic` component, which in turn depends on a `Database Access` component.
*   **Deployment Diagrams (UML):**
    *   **Definition:** Show the physical deployment of software artifacts onto hardware nodes, illustrating the system's architecture in terms of runtime components.
    *   **Example:** Deploying the `User Interface` component on a web server, the `Business Logic` component on an application server, and the `Database Access` component and data on a database server.
*   **Package Diagrams (UML):**
    *   **Definition:** Organize the model elements (classes, components) into groups or packages, showing dependencies between packages.
    *   **Example:** Grouping all database-related classes into a `DataAccess` package and all user interface classes into a `UI` package.

### 2.2. Behavioral Models

Describe the dynamic behavior of the system.

*   **Use Case Diagrams (UML):**
    *   **Definition:** Depict the interactions between users (actors) and the system, showing the system's functionality from an external perspective.
    *   **Example:** An `Online Shopper` actor using the system to `Browse Products`, `Add to Cart`, and `Checkout`.
    *   **Textbook Reference:** Sommerville (Tenth Edition), Chapter 3 "System Modeling" and Chapter 11 "Design" discuss use cases as a means of capturing functional requirements and guiding design.
*   **Sequence Diagrams (UML):**
    *   **Definition:** Show the interactions between objects in a time-ordered manner, illustrating the sequence of messages exchanged.
    *   **Example:** A sequence diagram for `Checkout` showing the `Online Shopper` interacting with `Shopping Cart` and `Payment Gateway` objects.
    *   **Textbook Reference:** Pressman (Eighth Edition), Chapter 9.
*   **Activity Diagrams (UML):**
    *   **Definition:** Model the flow of control in a system, similar to flowcharts, showing activities, decisions, and concurrent flows.
    *   **Example:** An activity diagram for the `Checkout` process, illustrating steps like "Enter Payment Details," "Verify Payment," "Confirm Order," and the decision points involved.
*   **State Machine Diagrams (UML):**
    *   **Definition:** Describe the behavior of an object by showing its states, transitions between states, and the events that trigger these transitions.
    *   **Example:** A `ShoppingCart` object transitioning from `Empty` to `Active` when an item is added, and from `Active` to `CheckedOut` when the checkout process is complete.
*   **Communication Diagrams (UML):**
    *   **Definition:** Similar to sequence diagrams but emphasize the relationships and message passing between objects rather than the strict temporal order.

**Important Points to Remember:**
*   The choice of diagram type depends on the aspect of the system being modeled and the audience.
*   UML (Unified Modeling Language) is a standard language for visualizing, specifying, constructing, and documenting the artifacts of a software-intensive system.

---

## 3. Design Principles and Concepts

**Learning Outcomes:**
* Interpret object-oriented design principles, design patterns, software testing methods (including unit testing, integration testing, and test automation), and open-source licensing models (such as GPL, LGPL, and BSD). (CO4).
* Prepare Software Requirement Specification and Software Design for a given problem (CO3).

**Key Concepts:**

These principles guide the creation of well-structured, maintainable, and robust software designs.

### 3.1. SOLID Principles (Object-Oriented Design)

*   **Single Responsibility Principle (SRP):**
    *   **Definition:** A class should have only one reason to change. It should have one, and only one, job.
    *   **Example:** A `Report` class that both generates a report and sends it via email violates SRP. It should be split into a `ReportGenerator` class and a `ReportSender` class.
    *   **Textbook Reference:** Pressman (Eighth Edition), Chapter 9.
*   **Open/Closed Principle (OCP):**
    *   **Definition:** Software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification.
    *   **Example:** Using an interface for different payment methods. To add a new payment method (e.g., cryptocurrency), you create a new implementation of the interface without modifying existing code.
*   **Liskov Substitution Principle (LSP):**
    *   **Definition:** Objects of a superclass should be replaceable with objects of its subclasses without altering the correctness of the program.
    *   **Example:** If `Square` is a subclass of `Rectangle`, and `Rectangle` has a `setWidth` and `setHeight` method, then `Square` must behave correctly when these methods are called, which might not be possible if setting height changes width in a square. This suggests `Square` might not be a direct subtype of `Rectangle` in some contexts.
*   **Interface Segregation Principle (ISP):**
    *   **Definition:** Clients should not be forced to depend on interfaces they do not use.
    *   **Example:** Instead of a large `Worker` interface with methods like `work()`, `eat()`, `sleep()`, `manage()`, it's better to have smaller interfaces like `Workable`, `Eatable`, `Sleepable`, `Manageable`, and let specific worker classes implement only the interfaces they need.
*   **Dependency Inversion Principle (DIP):**
    *   **Definition:** High-level modules should not depend on low-level modules. Both should depend on abstractions. Abstractions should not depend on details. Details should depend on abstractions.
    *   **Example:** A `ReportGenerator` (high-level) should depend on an `IDataSource` interface (abstraction) rather than directly on a `DatabaseDataSource` (low-level) implementation.

### 3.2. Design Patterns

*   **Definition:** Reusable solutions to commonly occurring problems within a given context in software design.
*   **Categories:**
    *   **Creational Patterns:** Deal with object creation mechanisms, trying to create objects in a manner suitable to the situation.
        *   **Examples:** Factory Method, Abstract Factory, Singleton, Builder, Prototype.
        *   **Singleton:** Ensures a class only has one instance and provides a global point of access to it.
    *   **Structural Patterns:** Deal with object composition in order to find a solution to realize new functionalities.
        *   **Examples:** Adapter, Bridge, Composite, Decorator, Facade, Flyweight, Proxy.
        *   **Adapter:** Allows objects with incompatible interfaces to collaborate.
    *   **Behavioral Patterns:** Deal with algorithms and the assignment of responsibilities between objects.
        *   **Examples:** Observer, Strategy, Command, Template Method, Iterator, Visitor.
        *   **Observer:** Defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.
*   **Textbook Reference:** Pressman (Eighth Edition), Chapter 10 covers "Design Patterns."

### 3.3. Architectural Styles/Patterns

*   **Definition:** High-level descriptions of system organization and the principles governing it.
*   **Examples:**
    *   **Client-Server:** A clear separation between client (requesting services) and server (providing services).
    *   **Layered Architecture:** Organizes the system into layers, each performing a specific role (e.g., Presentation, Business Logic, Data Access).
    *   **Microservices:** Structuring an application as a collection of loosely coupled, independently deployable services.
    *   **Model-View-Controller (MVC):** Separates application logic into three interconnected components: Model (data and business logic), View (user interface), and Controller (handles input and updates Model/View).
    *   **Peer-to-Peer:** All nodes act as both clients and servers.
*   **Textbook Reference:** Sommerville (Tenth Edition), Chapter 11.

**Important Points to Remember:**
*   Adhering to design principles leads to more maintainable, flexible, and understandable code.
*   Design patterns provide proven solutions to recurring design problems, promoting code reuse and consistency.
*   Architectural styles define the overall structure of the system.

---

## 4. Design Process and Activities

**Learning Outcomes:**
* Interpret software process models and core activities, including handling changes with techniques like prototyping and incremental delivery (CO1).
* Prepare Software Requirement Specification and Software Design for a given problem (CO3).
* Make use of software project management concepts while planning, estimation, scheduling, tracking and change management of a project, with proper application of SCRUM, Kanban and Lean frameworks. (CO6).

**Key Concepts:**

The design process involves a series of activities that transform requirements into a detailed design.

### 4.1. Levels of Design

*   **Architectural Design:** High-level design that defines the overall structure of the system, its components, and their relationships. It addresses non-functional requirements like performance and scalability.
    *   **Example:** Deciding on a microservices architecture for a large e-commerce platform.
    *   **Textbook Reference:** Sommerville (Tenth Edition), Chapter 11.
*   **High-Level Design (HLD):** Breaks down the system into major modules and defines the interfaces between them.
*   **Low-Level Design (LLD):** Detailed design of each module, including algorithms, data structures, and interface specifications. This leads to the actual code.
    *   **Example:** Designing the specific algorithms and data structures for the `ShoppingCart` module.

### 4.2. Design Activities

*   **Partitioning the System:** Dividing the system into smaller, manageable modules or components. This can be done using functional decomposition or object-oriented decomposition.
*   **Identifying Design Constraints:** Understanding limitations such as hardware, performance, or security requirements that influence the design choices.
*   **Designing for Reusability:** Creating components that can be reused in different parts of the system or in future projects.
*   **Designing for Maintainability:** Ensuring the system is easy to modify, fix, and enhance over time. This involves clear modularity, good documentation, and adherence to design principles.
*   **Designing for Testability:** Creating a system that is easy to test at various levels (unit, integration, system).
*   **Designing for Security:** Incorporating security measures from the outset to protect the system and its data.
*   **Designing for Performance:** Optimizing the system to meet performance requirements (response time, throughput).
*   **User Interface (UI) Design:** Designing the look and feel of the system and how users interact with it. This often involves creating wireframes, mockups, and prototypes.
    *   **Reference Book:** While not explicitly a design book, user experience (UX) is deeply intertwined with UI design. Concepts from Agile Management for Software Engineering (Anderson) might touch upon user-centric approaches.
*   **Database Design:** Designing the structure of the database, including tables, relationships, and data types.

### 4.3. Handling Changes with Prototyping and Incremental Delivery

*   **Prototyping:**
    *   **Definition:** Building a working model (prototype) of the system or parts of it to gather user feedback and clarify requirements.
    *   **Purpose:** Helps validate design choices, identify missing requirements, and improve the user interface.
    *   **Types:** Evolutionary Prototyping (evolves into the final system), Throwaway Prototyping (used for understanding and then discarded).
    *   **Textbook Reference:** Sommerville (Tenth Edition), Chapter 3 "System Modeling" discusses prototyping as a technique.
    *   **Course Outcome Alignment:** CO1 (handling changes with techniques like prototyping).
*   **Incremental Delivery:**
    *   **Definition:** Delivering the system in small, functional increments, allowing for early feedback and adaptation.
    *   **Purpose:** Reduces risk, allows for continuous integration and testing, and provides value to the customer sooner.
    *   **Textbook Reference:** Sommerville (Tenth Edition), Chapter 4 "Process Models" discusses iterative and incremental development.
    *   **Course Outcome Alignment:** CO1 (handling changes with techniques like incremental delivery).
*   **Agile Approach:**
    *   Agile methodologies (Scrum, Kanban) inherently support adaptability and change. Design in agile is often emergent and iterative, responding to feedback and evolving requirements.
    *   **Reference Book:** Kanban by David J. Anderson, Agile Management for Software Engineering by David J. Anderson.
    *   **Course Outcome Alignment:** CO2 (Describe agile methods), CO6 (Make use of software project management concepts... SCRUM, Kanban and Lean frameworks).

**Important Points to Remember:**
*   Design is an iterative process, not a one-time event.
*   Good design is crucial for successful software development, impacting cost, schedule, and quality.

---

## 5. Connecting Design to Requirements

**Learning Outcomes:**
* Interpret software process models and core activities, including handling changes with techniques like prototyping and incremental delivery (CO1).
* Prepare Software Requirement Specification and Software Design for a given problem (CO3).

**Key Concepts:**

The design model must directly address the requirements identified in the earlier stages.

### 5.1. Functional Requirements to Design

*   **Traceability:** Ensure that every functional requirement is addressed by a specific design element. Use traceability matrices to link requirements to design components.
*   **Use Cases to Class/Sequence Diagrams:** Use cases can be directly translated into class diagrams (identifying objects involved) and sequence diagrams (showing the interaction flow).
*   **Example:** A functional requirement "User can log in" translates to a `User` class with `login(username, password)` method, and a sequence diagram showing interaction between the UI, `AuthenticationService`, and `UserDatabase`.

### 5.2. Non-Functional Requirements to Design

*   **Performance:** Design choices like algorithm selection, data structure optimization, caching, and distributed systems impact performance.
    *   **Example:** For a requirement "System should respond within 2 seconds," consider database indexing, efficient algorithms, and load balancing.
*   **Security:** Design for authentication, authorization, data encryption, and secure coding practices.
    *   **Example:** For a requirement "All user passwords must be stored securely," design to use strong hashing algorithms (like bcrypt) instead of plain text.
*   **Reliability:** Design for fault tolerance, error handling, and redundancy.
    *   **Example:** For a requirement "System must be available 99.9% of the time," design with redundant servers and failover mechanisms.
*   **Usability:** UI design, ease of navigation, and error prevention are key.
    *   **Example:** For a requirement "Users should be able to complete checkout in 3 steps," design the UI to guide users through a clear, concise checkout process.
*   **Maintainability:** Adherence to design principles (SOLID), modularity, and clear documentation.
    *   **Example:** For a requirement "The system should be easy to update," design with loosely coupled components that can be modified independently.

**Important Points to Remember:**
*   Non-functional requirements often drive architectural decisions.
*   The design model serves as a bridge, translating abstract requirements into concrete system structures and behaviors.

---

## 6. Design Documentation

**Learning Outcomes:**
* Prepare Software Requirement Specification and Software Design for a given problem (CO3).
* Interpret object-oriented design principles, design patterns, software testing methods (including unit testing, integration testing, and test automation), and open-source licensing models (such as GPL, LGPL, and BSD). (CO4).

**Key Concepts:**

Effective design documentation is crucial for communicating the design to developers, testers, and future maintainers.

*   **Software Design Document (SDD):** A comprehensive document detailing the design of the software system.
    *   **Contents:**
        *   **Introduction:** Overview of the system, purpose, scope.
        *   **Overall Design:** Architectural style, major components, interfaces.
        *   **Detailed Design:** Class diagrams, sequence diagrams, algorithms, data structures for each module.
        *   **User Interface Design:** Wireframes, mockups, UI specifications.
        *   **Database Design:** Schema, ER diagrams, data dictionaries.
        *   **Non-Functional Requirements:** How they are addressed in the design.
        *   **Design Rationale:** Justification for key design decisions.
*   **UML Diagrams:** As discussed earlier, UML diagrams are a standard way to document design.
*   **Interface Specifications:** Detailed description of how modules or components interact.
*   **Data Dictionaries:** Definitions and descriptions of all data elements used in the system.
*   **Comments in Code:** While not a formal document, well-placed comments explaining complex logic are essential.
*   **Documentation for Open-Source:**
    *   **Course Outcome Alignment:** CO4 (interpret open-source licensing models). Understanding these models is crucial for projects that use or contribute to open-source, as it impacts design decisions regarding libraries and frameworks.
    *   **GPL (GNU General Public License):** A "copyleft" license that requires derivative works to also be licensed under the GPL.
    *   **LGPL (GNU Lesser General Public License):** A more permissive version of GPL, allowing proprietary software to link to LGPL-licensed libraries without being forced to open-source their own code.
    *   **BSD (Berkeley Software Distribution) License:** A very permissive license that allows reuse of code with minimal restrictions, often requiring only attribution.

**Textbook References:**
*   Pressman (Eighth Edition) emphasizes the importance of design documentation.
*   Sommerville (Tenth Edition) also covers the documentation aspects of the software development process.

**Important Points to Remember:**
*   The level of detail in design documentation depends on the project's complexity and methodology.
*   Up-to-date documentation is vital for effective collaboration and long-term project success.

---

## 7. Practice Questions and Answers

**Question 1:**
What is the primary purpose of a design model in software engineering?

**Answer:**
The primary purpose of a design model is to translate the software requirements into a blueprint or plan for building the system. It acts as a bridge between requirements and implementation, guiding developers, facilitating communication, reducing complexity, and enabling early detection of design flaws.

**Question 2:**
Differentiate between structural and behavioral models in software design, providing an example for each.

**Answer:**
*   **Structural Models:** Describe the static structure of the system, focusing on components, their relationships, and attributes.
    *   **Example:** A **Class Diagram** showing the `Customer` class with its attributes (name, address) and methods (placeOrder).
*   **Behavioral Models:** Describe the dynamic behavior of the system, focusing on interactions, workflows, and state changes.
    *   **Example:** A **Sequence Diagram** illustrating the step-by-step interaction between objects when a user adds an item to their shopping cart.

**Question 3:**
Explain the Single Responsibility Principle (SRP) and provide a scenario where it is violated.

**Answer:**
The Single Responsibility Principle (SRP) states that a class should have only one reason to change. This means a class should be responsible for only one piece of functionality.
**Scenario Violation:** Consider a `UserAuthenticator` class that is responsible for both validating user credentials (e.g., checking username and password against a database) and also logging the authentication attempts into an audit log file. If the requirement for how authentication is performed changes, or if the logging mechanism changes, this class would need to be modified for two separate reasons, thus violating SRP. A better design would be to separate these concerns into two classes: `UserAuthenticator` for validation and `AuditLogger` for logging.

**Question 4:**
How does an Adapter design pattern help in software design, and when might you use it?

**Answer:**
An **Adapter** design pattern allows objects with incompatible interfaces to collaborate. It acts as a wrapper or intermediary that converts one interface into another that the client expects.
You would use an Adapter pattern when you need to integrate with existing code that has a different interface, or when you want to create a flexible system where clients can work with different implementations of a service without modification. For example, if you have an old `LegacyPaymentProcessor` class and your new system expects an `IPaymentGateway` interface, you can create an `LegacyPaymentProcessorAdapter` that implements `IPaymentGateway` and uses the `LegacyPaymentProcessor` internally.

**Question 5:**
Describe how prototyping can be used to handle changes in software requirements.

**Answer:**
Prototyping is a technique where a preliminary working model of the system or a part of it is built. This prototype is then shown to stakeholders (clients, users) for feedback. By gathering feedback early on a tangible representation of the system, potential misunderstandings about requirements or design flaws can be identified and corrected before significant development effort is invested. This iterative process of building, demonstrating, and refining allows for effective handling of changes by clarifying requirements and validating design decisions early in the lifecycle.

**Question 6:**
Which non-functional requirement is primarily addressed by designing for fault tolerance and redundancy?

**Answer:**
**Reliability**. Fault tolerance and redundancy are key strategies to ensure that the system continues to operate correctly even when components fail, thus enhancing its reliability.

**Question 7:**
What is the key characteristic of the GPL license in relation to derivative works?

**Answer:**
The key characteristic of the GPL (GNU General Public License) is its "copyleft" nature. If you use GPL-licensed code in your project, your entire project must also be licensed under the GPL, meaning you must make your source code available to others.

**Question 8:**
If a project needs to use a third-party library that is licensed under LGPL, what is the implication for the project's own source code?

**Answer:**
If a project uses a library licensed under LGPL (GNU Lesser General Public License), it can link to that library without being forced to open-source its own proprietary code. However, modifications to the LGPL-licensed library itself must still be shared under the LGPL.

---

## Conclusion

The design model is a fundamental artifact in software engineering, bridging the gap between abstract requirements and concrete implementation. By employing various modeling techniques (UML), adhering to sound design principles (SOLID), leveraging design patterns, and considering architectural styles, we can create robust, maintainable, and high-quality software systems. The iterative nature of design, supported by techniques like prototyping and incremental delivery, is crucial for managing change and ensuring that the final product meets user needs. Effective design documentation is paramount for communicating these intricate plans to all stakeholders.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
