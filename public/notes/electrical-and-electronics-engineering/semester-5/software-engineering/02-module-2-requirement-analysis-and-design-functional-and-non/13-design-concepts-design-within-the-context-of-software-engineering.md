---
title: "Design concepts - Design within the context of software engineering"
subject: "SOFTWARE ENGINEERING"
module: "Module 2: Requirement Analysis and Design: Functional and non"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f36345"
status: "completed"
scrapedAt: "2026-05-23T16:24:19.693Z"
---
# Software Engineering: Module 2 - Requirement Analysis and Design

## Topic: Design Concepts - Design within the Context of Software Engineering

**Module Goal:** To understand the foundational concepts of software design, its importance, and its relationship with requirement analysis.

**Module Learning Outcomes:**

*   **LO1:** Explain the importance of software design and its relationship with requirements.
*   **LO2:** Differentiate between architectural, high-level, and detailed design.
*   **LO3:** Identify and describe key design principles (e.g., modularity, abstraction, cohesion, coupling).
*   **LO4:** Understand the concept of design patterns and their role in software development.
*   **LO5:** Discuss the impact of quality attributes on design decisions.
*   **LO6:** Explain the iterative and evolutionary nature of the design process.

---

### 1. Introduction to Software Design

**1.1 What is Software Design?**

Software design is the process of defining a software solution that meets the specified requirements and is ready for implementation. It involves making a set of decisions about how a software system will be built.

*   **Key Idea:** Design bridges the gap between what the system *should do* (requirements) and how it *will do it* (implementation).
*   **Importance:**
    *   **Complexity Management:** Breaks down a complex system into smaller, manageable components.
    *   **Quality Improvement:** Facilitates the creation of robust, maintainable, and efficient software.
    *   **Cost Reduction:** Early identification of design flaws reduces costly rework later in the development lifecycle.
    *   **Reusability:** Well-designed systems are easier to adapt and reuse components.
    *   **Maintainability:** A clear design makes it easier to understand, modify, and debug the system.

*   **Sommerville (Tenth Edition):** "Design is the process of defining the architecture, components, modules, interfaces, and other characteristics of a system or component." (Chapter 7)
*   **Pressman (Eighth Edition):** "Software design is the process of establishing the architecture, components, modules, interfaces, and other characteristics of a system or a component." (Chapter 7)

**1.2 Design within the Context of the Software Development Lifecycle**

Design follows requirement analysis and precedes implementation. It is an iterative process, meaning that decisions made during design can lead to refinements in the requirements, and vice-versa.

```
Requirement Analysis -> Design -> Implementation -> Testing -> Deployment -> Maintenance
```

*   **Relationship with Requirements:** Design translates functional and non-functional requirements into a blueprint for building the system.
    *   **Functional Requirements:** What the system *does* (e.g., "The system shall allow users to log in"). These guide the functional decomposition of the system.
    *   **Non-Functional Requirements (Quality Attributes):** How well the system performs (e.g., performance, security, usability, maintainability). These heavily influence architectural and detailed design decisions.

*   **CO1 Alignment:** Interpret software process models and core activities, including handling changes with techniques like prototyping and incremental delivery. Design is a core activity, and its iterative nature often involves techniques like prototyping to validate design choices.

---

### 2. Levels of Design

Software design can be viewed at different levels of abstraction, from the high-level structure of the entire system to the specifics of individual modules.

**2.1 Architectural Design**

*   **Definition:** Defines the overall structure of the software system. It identifies the main components, their responsibilities, and the relationships and interactions between them.
*   **Focus:** High-level view, system organization, major subsystems, and their interactions.
*   **Key Concerns:**
    *   **System decomposition:** Breaking the system into major components.
    *   **Component interaction:** How these components communicate.
    *   **Technology selection:** Choosing appropriate programming languages, databases, etc.
    *   **Handling non-functional requirements:** Architectural decisions have a significant impact on performance, scalability, security, etc.
*   **Examples of Architectural Styles:**
    *   **Client-Server:** A central server provides resources to multiple clients.
    *   **Layered Architecture:** The system is organized into horizontal layers, each providing services to the layer above.
    *   **Microservices:** The system is built as a collection of small, independent services.
    *   **Model-View-Controller (MVC):** Separates application logic into data (Model), user interface (View), and input handling (Controller).
*   **Sommerville (Tenth Edition):** "The architecture of a system is the set of the most important structures of the system, those structures that are hardest to change, those that have the greatest impact on the system." (Chapter 7)

**2.2 High-Level Design (Subsystem Design)**

*   **Definition:** Focuses on designing the individual subsystems identified in the architectural design. It details the modules within each subsystem, their interfaces, and their relationships.
*   **Focus:** Breaking down subsystems into modules, defining module interfaces, and specifying the data structures and algorithms used.
*   **Key Concepts:**
    *   **Modularization:** Dividing the system into independent modules with specific responsibilities.
    *   **Interface design:** Defining how modules interact with each other.
    *   **Data design:** Structuring and managing data.

**2.3 Detailed Design (Component Design)**

*   **Definition:** Deals with the design of individual modules. This level involves specifying the algorithms, data structures, and control flows within each module.
*   **Focus:** Implementation details of each module, including data structures, algorithms, and logic.
*   **Key Concepts:**
    *   **Algorithm design:** Choosing efficient algorithms for specific tasks.
    *   **Data structure selection:** Selecting appropriate data structures for storing and manipulating data.
    *   **Logic design:** Defining the step-by-step execution of a module.

*   **CO3 Alignment:** Prepare Software Requirement Specification and Software Design for a given problem. Understanding these levels is crucial for creating design documents.

---

### 3. Key Design Principles

These principles guide developers in creating well-structured, maintainable, and understandable software.

**3.1 Modularity**

*   **Definition:** The process of dividing a system into a set of independent modules, each with a specific responsibility.
*   **Goal:** Reduce complexity, improve understandability, and facilitate reuse and maintenance.
*   **Benefits:**
    *   Easier to develop, test, and debug individual modules.
    *   Changes in one module have less impact on others.
    *   Modules can be reused in different parts of the system or in other projects.
*   **Pressman (Eighth Edition):** "The primary goal of modular design is to maintain a balance between the 'span of control' and the 'span of attention'." (Chapter 8)

**3.2 Abstraction**

*   **Definition:** Hiding the complex implementation details and exposing only the essential features of a component or system.
*   **Types of Abstraction:**
    *   **Data Abstraction:** Defining data types and operations on them, without revealing how the data is stored or how operations are implemented.
    *   **Control Abstraction:** Hiding the sequence of control flow and exposing a higher-level operation.
*   **Goal:** Simplify the system by focusing on what a component does rather than how it does it.
*   **Example:** A `Stack` data structure provides `push()` and `pop()` operations. The user doesn't need to know if it's implemented using an array or a linked list.

**3.3 Encapsulation**

*   **Definition:** Bundling data (attributes) and the methods that operate on that data within a single unit (e.g., a class in object-oriented programming). It also involves controlling access to these data members.
*   **Goal:** Protect data integrity and reduce dependencies between modules.
*   **Benefits:**
    *   Data hiding: Internal data can be modified without affecting other parts of the system, as long as the interface remains the same.
    *   Maintainability: Changes within a module are less likely to break other modules.
*   **Example:** In a `BankAccount` class, the `balance` attribute might be private, and accessible only through public methods like `deposit()` and `withdraw()`.

**3.4 Cohesion**

*   **Definition:** A measure of how closely related and focused the responsibilities of a single module are.
*   **Goal:** High cohesion is desirable, meaning a module should do one thing and do it well.
*   **Types of Cohesion (from low to high):**
    *   **Coincidental Cohesion:** Modules are grouped together arbitrarily.
    *   **Logical Cohesion:** Modules are grouped because they perform similar logical functions (e.g., all input processing routines).
    *   **Temporal Cohesion:** Modules are grouped because they are executed at the same time (e.g., initialization routines).
    *   **Procedural Cohesion:** Modules are grouped because they perform a sequence of operations.
    *   **Communicational Cohesion:** Modules are grouped because they operate on the same data.
    *   **Sequential Cohesion:** Modules are grouped because the output of one is the input to the next.
    *   **Functional Cohesion:** Modules are grouped because they all contribute to a single well-defined function. (Most desirable)
*   **Sommerville (Tenth Edition):** "A module with high cohesion is a module that has a limited set of responsibilities." (Chapter 7)

**3.5 Coupling**

*   **Definition:** A measure of the degree of interdependence between modules.
*   **Goal:** Low coupling is desirable, meaning modules should be as independent as possible.
*   **Types of Coupling (from high to low):**
    *   **Content Coupling:** One module modifies or relies on the internal workings of another. (Worst)
    *   **Common Coupling:** Modules share access to the same global data.
    *   **Control Coupling:** One module controls the logic of another by passing flags or control information.
    *   **Stamp Coupling:** Modules share access to the same composite data structure, but only use parts of it.
    *   **Data Coupling:** Modules communicate by passing simple data items. (Most desirable)
*   **Relationship with Cohesion:** Generally, high cohesion within modules leads to low coupling between modules.
*   **Pressman (Eighth Edition):** "Coupling is a measure of the interdependence of the system’s modules." (Chapter 8)

*   **LO3 Alignment:** Identify and describe key design principles (e.g., modularity, abstraction, cohesion, coupling).
*   **CO4 Alignment:** Interpret object-oriented design principles, design patterns, software testing methods... Object-oriented design heavily relies on principles like encapsulation and abstraction, and good design practices (high cohesion, low coupling) are foundational to using design patterns effectively.

---

### 4. Design Patterns

**4.1 What are Design Patterns?**

*   **Definition:** Reusable solutions to commonly occurring problems within a given context in software design. They are not specific code snippets but rather templates or descriptions of how to solve a problem.
*   **Origin:** Popularized by the book "Design Patterns: Elements of Reusable Object-Oriented Software" by the "Gang of Four" (GoF).
*   **Purpose:**
    *   Provide a common vocabulary for designers.
    *   Capture proven solutions to recurring design problems.
    *   Improve the maintainability, flexibility, and understandability of code.
    *   Promote good design practices.

**4.2 Categories of Design Patterns (GoF)**

*   **Creational Patterns:** Deal with mechanisms of object creation, trying to create objects in a manner suitable to the situation.
    *   *Examples:* Singleton, Factory Method, Abstract Factory, Builder, Prototype.
*   **Structural Patterns:** Deal with composition of classes and objects. They help to compose larger structures from smaller ones.
    *   *Examples:* Adapter, Bridge, Composite, Decorator, Facade, Flyweight, Proxy.
*   **Behavioral Patterns:** Deal with algorithms and the assignment of responsibilities between objects. They characterize complex control flow that cannot be captured by simple structural or creational mechanisms.
    *   *Examples:* Chain of Responsibility, Command, Interpreter, Iterator, Mediator, Memento, Observer, State, Strategy, Template Method, Visitor.

**4.3 Example: The Observer Pattern**

*   **Problem:** How can an object (the "subject") notify multiple other objects (the "observers") when its state changes, without being tightly coupled to them?
*   **Solution:** The Subject maintains a list of Observers. When the Subject's state changes, it iterates through its list and calls a `notify()` method on each Observer. Each Observer implements an `update()` method that is called by the Subject.
*   **Benefits:** Decouples the Subject from its Observers, allowing new Observers to be added or removed dynamically without modifying the Subject.

*   **LO4 Alignment:** Understand the concept of design patterns and their role in software development.
*   **CO4 Alignment:** Interpret object-oriented design principles, design patterns...

---

### 5. Impact of Quality Attributes on Design Decisions

Non-functional requirements (quality attributes) have a profound impact on design choices, particularly at the architectural level.

*   **Performance:**
    *   **Design Considerations:** Efficient algorithms, optimized data structures, avoiding unnecessary processing, choosing fast communication mechanisms, caching.
    *   **Example:** For a system requiring low latency, a monolithic architecture with direct in-memory communication might be preferred over a distributed microservices architecture that introduces network overhead.
*   **Scalability:**
    *   **Design Considerations:** Ability to handle increased load by adding resources (horizontal/vertical scaling), stateless components, load balancing, distributed databases.
    *   **Example:** A web application designed for high traffic might use a microservices architecture with auto-scaling capabilities.
*   **Security:**
    *   **Design Considerations:** Access control mechanisms, authentication, authorization, data encryption, secure communication protocols, input validation.
    *   **Example:** Designing an e-commerce system requires robust security measures for handling payment information and user credentials.
*   **Maintainability:**
    *   **Design Considerations:** Modularity, high cohesion, low coupling, clear interfaces, good documentation, adherence to coding standards.
    *   **Example:** A system designed with clear separation of concerns (e.g., MVC pattern) will be easier to maintain and update than a tightly coupled "spaghetti code" system.
*   **Reliability/Availability:**
    *   **Design Considerations:** Redundancy, fault tolerance, error handling, backup mechanisms, robust testing.
    *   **Example:** Designing a critical financial system might involve redundant servers and automatic failover mechanisms to ensure continuous availability.
*   **Usability:**
    *   **Design Considerations:** User-friendly interfaces, intuitive navigation, consistent design elements. This is often more of a concern for UI/UX design but impacts the overall system architecture (e.g., how data is presented to the user).

*   **LO3 Alignment:** Identify and describe key design principles (which contribute to maintainability and other quality attributes).
*   **LO5 Alignment:** Discuss the impact of quality attributes on design decisions.
*   **CO1 Alignment:** ...handling changes with techniques like prototyping... Prototyping can be used to evaluate how well a design meets certain quality attributes like usability.

---

### 6. The Iterative and Evolutionary Nature of Design

Software design is rarely a one-time, linear activity. It's an ongoing process that evolves throughout the project.

**6.1 Iterative Design**

*   **Definition:** Design is performed in cycles or iterations. Each iteration builds upon the previous one, refining the design based on feedback, testing, and new insights.
*   **Process:**
    1.  Define a set of requirements for the current iteration.
    2.  Design solutions for those requirements.
    3.  Implement and test the design.
    4.  Gather feedback and evaluate.
    5.  Refine the design and requirements for the next iteration.
*   **Benefits:**
    *   Allows for early feedback and validation.
    *   Reduces the risk of building the wrong system.
    *   Adaptable to changing requirements.

**6.2 Evolutionary Design**

*   **Definition:** The design of the software evolves over time as the system is built and maintained. It focuses on making small, incremental design improvements rather than trying to get the perfect design upfront.
*   **Key Practices:**
    *   **Refactoring:** Improving the internal structure of code without changing its external behavior.
    *   **"You Ain't Gonna Need It" (YAGNI):** Avoid building functionality or designing for scenarios that are not currently required.
    *   **Simplicity:** Strive for the simplest design that meets current needs.
*   **Agile Context:** Evolutionary design is a cornerstone of agile methodologies, where rapid iteration and adaptation are key.

*   **Sommerville (First Edition, 2020):** "Good design is an evolutionary process. Rather than trying to design the system perfectly at the beginning, it's often better to develop an initial design and then to refine and improve it iteratively." (Chapter 8)
*   **Reference Book (Royce - Software Project Management):** Emphasizes iterative development and the importance of managing change, which inherently applies to design.
*   **Reference Book (Anderson - Kanban):** Kanban emphasizes flow and continuous improvement, which aligns with the evolutionary nature of design by focusing on delivering value incrementally and adapting based on feedback.
*   **CO1 Alignment:** Interpret software process models and core activities, including handling changes with techniques like prototyping and incremental delivery. Both iterative and evolutionary design support incremental delivery and adapting to change.
*   **CO2 Alignment:** Describe agile methods, including the Agile Manifesto and agile project management practices. Agile methods strongly advocate for iterative and evolutionary design.

---

### Important Points to Remember

*   **Design is a bridge:** It connects requirements to implementation.
*   **Quality attributes drive design:** Performance, security, maintainability, etc., are critical considerations.
*   **Abstraction and modularity are key:** They help manage complexity.
*   **High cohesion, low coupling:** Aim for modules that do one thing well and are independent.
*   **Design patterns offer reusable solutions:** Learn and apply them wisely.
*   **Design is iterative and evolutionary:** Embrace change and refinement.
*   **No single "best" design:** The optimal design depends on project context, requirements, and constraints.

---

### Practice Questions and Exercises

**1. Multiple Choice Questions:**

    a) The process of defining the architecture, components, modules, interfaces, and other characteristics of a system is known as:
        i) Requirement Analysis
        ii) Implementation
        iii) Software Design
        iv) Testing

    b) Which design principle aims to hide complex implementation details and expose only essential features?
        i) Modularity
        ii) Abstraction
        iii) Encapsulation
        iv) Cohesion

    c) Which of the following is considered the most desirable form of cohesion?
        i) Coincidental Cohesion
        ii) Logical Cohesion
        iii) Temporal Cohesion
        iv) Functional Cohesion

    d) Which of the following is a category of design patterns?
        i) Structural Patterns
        ii) Validation Patterns
        iii) Testing Patterns
        iv) Deployment Patterns

    e) Low coupling between modules is generally:
        i) Undesirable, as it makes modules dependent.
        ii) Desirable, as it increases independence.
        iii) Irrelevant to software quality.
        iv) Only important for large systems.

**2. Short Answer Questions:**

    a) Explain the relationship between software design and requirement analysis.
    b) Differentiate between architectural design and detailed design.
    c) Briefly describe the importance of abstraction in software design, providing an example.
    d) What is the difference between cohesion and coupling? Why is high cohesion and low coupling preferred?
    e) How do quality attributes like performance and security influence software design decisions?
    f) What is the advantage of an iterative approach to software design?

**3. Scenario-Based Question:**

    Imagine you are designing a system for an online library. The system needs to handle a large number of concurrent users accessing the catalog, borrowing books, and returning books.

    a) What are some key quality attributes you would need to consider for this system?
    b) How might these quality attributes influence your architectural design choices (e.g., choice of architecture style)?
    c) Discuss how principles like modularity, cohesion, and coupling would be applied in designing the "Book" module and its interactions with other modules like "User" or "Catalog."

---

### Answers

**1. Multiple Choice Questions:**

    a) iii) Software Design
    b) ii) Abstraction
    c) iv) Functional Cohesion
    d) i) Structural Patterns
    e) ii) Desirable, as it increases independence.

**2. Short Answer Questions:**

    a) **Relationship between Design and Requirements:** Software design translates the "what" (functional and non-functional requirements) into the "how" (a blueprint for building the system). Design decisions are directly driven by the requirements, and feedback loops often lead to refinements in requirements based on design possibilities or constraints.

    b) **Architectural Design vs. Detailed Design:**
        *   **Architectural Design:** Focuses on the high-level structure of the system, identifying major components, their responsibilities, and their interrelationships. It sets the overall framework.
        *   **Detailed Design:** Focuses on the internal logic and implementation of individual modules, including algorithms, data structures, and control flow. It provides the specifics for building components.

    c) **Importance of Abstraction:** Abstraction simplifies complexity by hiding unnecessary details and exposing only essential features. This makes the system easier to understand, use, and maintain.
        *   **Example:** A `DatabaseManager` class could provide methods like `save(data)` and `load(id)` without revealing the specific SQL queries or database connection details. The user of `DatabaseManager` only needs to know what these methods do.

    d) **Cohesion vs. Coupling:**
        *   **Cohesion:** Measures how well the elements within a single module belong together and focus on a single task. High cohesion is good.
        *   **Coupling:** Measures the degree of interdependence between modules. Low coupling is good.
        *   **Preference:** High cohesion means a module is focused and does one thing well, reducing internal complexity. Low coupling means modules are independent, reducing the impact of changes and making them easier to integrate and reuse.

    e) **Influence of Quality Attributes on Design:**
        *   **Performance:** May lead to choosing efficient algorithms, caching strategies, or optimized data structures.
        *   **Security:** Requires incorporating access control, encryption, and secure communication protocols into the design from the outset.
        *   **Scalability:** Might dictate a distributed architecture, stateless components, or load balancing mechanisms.
        *   **Maintainability:** Emphasizes modularity, clear interfaces, and low coupling.

    f) **Advantage of Iterative Design:** Iterative design allows for early feedback, risk reduction, and adaptability to changing requirements. Each iteration builds on the previous, refining the design and providing opportunities to correct course before significant investment in flawed design.

**3. Scenario-Based Question:**

    a) **Key Quality Attributes for Online Library:**
        *   **Performance:** Fast catalog searches, quick book borrowing/returning.
        *   **Scalability:** Ability to handle a growing number of users and books.
        *   **Availability:** System should be accessible most of the time, even during peak hours.
        *   **Usability:** Easy for users to find books, manage their accounts, and borrow/return.
        *   **Maintainability:** Easy to update book records, add new features, or fix bugs.
        *   **Security:** Protecting user account information and borrowing history.

    b) **Architectural Design Choices:**
        *   Given the need for scalability and potentially independent development of features (catalog, user management, borrowing), a **microservices architecture** could be suitable. Each service (e.g., Catalog Service, User Service, Borrowing Service) can scale independently.
        *   Alternatively, a **layered architecture** could be used, with distinct layers for presentation, business logic, and data access.
        *   Consideration of **caching mechanisms** for the catalog to improve read performance.
        *   **Database design** will be crucial for efficient querying and managing relationships between books and users.

    c) **Applying Design Principles:**
        *   **Modularity:** The "Book" module would be responsible solely for managing book data (title, author, ISBN, availability status). It would be separate from user management or borrowing transaction logic.
        *   **Cohesion:** The "Book" module should have high cohesion, meaning all its functions relate directly to book information (e.g., `getBookDetails()`, `updateAvailability()`, `checkIfAvailable()`). It shouldn't handle user login or loan calculations.
        *   **Coupling:** The "Book" module should have low coupling with other modules. It might receive requests from a "Catalog" module to retrieve book details, passing only necessary data (like a book ID) as a parameter (data coupling). It shouldn't directly manipulate user data or borrowing states. The "Borrowing" module might interact with the "Book" module to decrement availability but should do so through a defined interface.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
