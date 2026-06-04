---
title: "Design Process"
subject: "SOFTWARE ENGINEERING"
module: "Module 2: Requirement Analysis and Design: Functional and non"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f36346"
status: "completed"
scrapedAt: "2026-05-23T16:24:20.402Z"
---
## Module 2: Requirement Analysis and Design: Functional and Non-functional Requirements

### Topic: Design Process

This module delves into the crucial phase of software engineering: the **Design Process**. It's where we translate the "what" (requirements) into the "how" (a blueprint for building the software). This topic focuses on understanding the various stages and principles involved in creating a robust and effective software design.

---

### Learning Outcomes Covered in this Topic:

*   **Interpreting software process models and core activities, including handling changes with techniques like prototyping and incremental delivery.** (CO1)
*   **Preparing Software Requirement Specification and Software Design for a given problem.** (CO3)
*   **Interpreting object-oriented design principles, design patterns, software testing methods...** (CO4 - **Design Principles and Patterns are key to this topic**)

---

### 1. Introduction to Software Design

**Definition:** Software design is the process of defining the architecture, components, interfaces, and other characteristics of a software system. It's a creative and iterative process that aims to produce a blueprint for implementing the software, ensuring it meets functional and non-functional requirements.

**Key Goals of Software Design:**

*   **Meet Requirements:** Ensure the design accurately reflects both functional (what the system does) and non-functional (how the system performs) requirements.
*   **Maintainability:** Create a design that is easy to understand, modify, and extend in the future.
*   **Reusability:** Design components that can be reused in other projects.
*   **Understandability:** Produce a design that is clear and comprehensible to developers and other stakeholders.
*   **Efficiency:** Optimize the design for performance, resource utilization, and cost.
*   **Reliability and Robustness:** Design a system that is less prone to errors and can handle unexpected situations gracefully.

**Sources:**
*   **Sommerville (2015):** Emphasizes design as a process of problem-solving and transformation from requirements to a specification.
*   **Pressman (2014):** Highlights design as a structured approach to problem-solving, involving a series of activities that lead to a detailed technical solution.

---

### 2. The Software Design Process: An Overview

The design process is typically iterative and can be broken down into several key stages. While different methodologies might structure these stages slightly differently, the core activities remain consistent.

**General Stages of the Design Process:**

1.  **System Design / High-Level Design (Architectural Design):**
    *   **Focus:** Defining the overall structure of the system, its major components, their relationships, and the data flow between them.
    *   **Activities:**
        *   **Decomposition:** Breaking down the system into smaller, manageable modules or subsystems.
        *   **Architecture Definition:** Choosing an architectural style (e.g., layered, client-server, microservices) that best suits the system's needs.
        *   **Data Design:** Identifying and structuring the data that the system will process and store.
        *   **Interface Design:** Defining how different modules interact with each other and with external systems.
        *   **Technology Selection:** Choosing appropriate programming languages, databases, frameworks, and other tools.
    *   **Output:** Architectural design document, preliminary data models, interface specifications.

2.  **Detailed Design / Low-Level Design:**
    *   **Focus:** Elaborating on the modules identified in high-level design, defining the internal logic, data structures, and algorithms for each module.
    *   **Activities:**
        *   **Module Design:** Specifying the detailed functionality of each module, including its inputs, outputs, and behavior.
        *   **Algorithm Design:** Developing algorithms to implement specific functions.
        *   **Data Structure Design:** Selecting and defining appropriate data structures for efficient data manipulation.
        *   **Interface Specification:** Detailing the parameters and protocols for module interactions.
    *   **Output:** Detailed design specifications for each module, data structure definitions, pseudocode or flowcharts.

3.  **User Interface (UI) / User Experience (UX) Design:**
    *   **Focus:** Designing how users will interact with the system. This involves creating intuitive and user-friendly interfaces.
    *   **Activities:**
        *   **Wireframing:** Creating basic visual guides for the layout and structure of screens.
        *   **Prototyping:** Developing interactive models to simulate user flows and gather feedback.
        *   **User Flow Design:** Mapping out the steps a user takes to complete tasks.
        *   **Usability Testing:** Evaluating the ease of use and efficiency of the interface.
    *   **Output:** UI mockups, interactive prototypes, usability reports.

4.  **Database Design:**
    *   **Focus:** Designing the structure and organization of the database to store and retrieve data efficiently and effectively.
    *   **Activities:**
        *   **Conceptual Design:** Defining the entities and relationships at a high level.
        *   **Logical Design:** Translating the conceptual model into a specific database model (e.g., relational, NoSQL).
        *   **Physical Design:** Specifying how the database will be implemented, including tables, indexes, and storage structures.
    *   **Output:** Entity-Relationship Diagrams (ERDs), database schemas.

**Important Point:** These stages are not strictly sequential. There's often overlap and iteration between them. For example, feedback from detailed design might lead to adjustments in the architectural design.

**Example (CO1, CO3):**
Imagine designing a simple online bookstore.

*   **System Design:** You might decide on a client-server architecture. The system could be decomposed into modules like User Management, Product Catalog, Shopping Cart, Order Processing, and Payment Gateway. The main data entities would be Users, Products, and Orders.
*   **Detailed Design:** For the "Shopping Cart" module, you would detail how items are added, removed, quantities updated, and how the total price is calculated. You might choose a list or array data structure to represent the cart items.
*   **UI Design:** You'd design the layout of the product listing page, the "Add to Cart" button, and the shopping cart view itself, focusing on ease of navigation and clarity.
*   **Database Design:** You'd design tables for `Users`, `Products`, `Orders`, and `OrderItems`, defining their columns and relationships (e.g., an `Order` belongs to a `User`, an `Order` can have multiple `OrderItems`).

---

### 3. Design Principles

These are fundamental guidelines that help engineers create high-quality, maintainable, and adaptable software.

*   **Modularity:**
    *   **Definition:** Breaking down a complex system into smaller, independent, and self-contained modules.
    *   **Benefits:** Easier to understand, develop, test, debug, and maintain. Promotes reusability.
    *   **Key Concepts:**
        *   **Cohesion:** The degree to which the elements within a module belong together. High cohesion is desirable. (e.g., a module that handles only file I/O).
        *   **Coupling:** The degree of interdependence between modules. Low coupling is desirable, meaning modules should have minimal reliance on each other. (e.g., modules communicating through well-defined interfaces).
    *   **Sommerville (2015):** Discusses modularity in terms of information hiding and interface design.
    *   **Example:** Instead of one large program, breaking it into modules for database access, UI handling, and business logic.

*   **Abstraction:**
    *   **Definition:** Hiding complex implementation details and exposing only the essential features of a component or system.
    *   **Benefits:** Simplifies understanding, reduces complexity, allows for changes in implementation without affecting users of the abstraction.
    *   **Example:** A `Car` object might expose methods like `startEngine()`, `accelerate()`, `brake()`. The user doesn't need to know the intricate details of how the engine works or how the braking system functions.

*   **Information Hiding:**
    *   **Definition:** Concealing the internal state and implementation details of a module or object from the outside world. Only a well-defined interface is exposed.
    *   **Benefits:** Protects the integrity of the data, allows internal changes without affecting other parts of the system, promotes modularity.
    *   **Pressman (2014):** Highlights information hiding as a key principle for achieving modularity and maintainability.
    *   **Example:** A `BankAccount` class might hide the `balance` variable and provide `deposit()` and `withdraw()` methods to modify it, ensuring that the balance cannot be directly manipulated externally.

*   **Separation of Concerns (SoC):**
    *   **Definition:** Dividing a system into distinct sections, each addressing a specific concern or responsibility.
    *   **Benefits:** Improves organization, reduces complexity, enhances maintainability and reusability.
    *   **Example:** In a web application, separating presentation (HTML/CSS), business logic (Java/Python), and data access (SQL) into different layers or modules.

*   **Simplicity:**
    *   **Definition:** Designing the system in the simplest way possible that meets the requirements. Avoiding unnecessary complexity.
    *   **Benefits:** Easier to understand, develop, test, and maintain. Reduces the likelihood of errors.
    *   **Example:** Choosing a straightforward algorithm over a complex one if it achieves the same result efficiently.

*   **High Level of Abstraction:**
    *   **Definition:** Presenting information at a level that is relevant to the audience, without overwhelming them with low-level details.
    *   **Benefits:** Facilitates communication and understanding between different stakeholders.
    *   **Example:** An architectural diagram showing major components and their interactions vs. a detailed flowchart of a single function.

*   **Uniformity:**
    *   **Definition:** Using consistent naming conventions, design patterns, and implementation styles throughout the system.
    *   **Benefits:** Improves readability and maintainability, reduces cognitive load for developers.
    *   **Example:** Consistently naming variables, functions, and classes according to a predefined standard.

---

### 4. Design Patterns (CO4)

**Definition:** Design patterns are reusable solutions to commonly occurring problems within a given context in software design. They are not specific pieces of code but rather templates or blueprints for how to solve a problem.

**Key Benefits of Design Patterns:**

*   **Proven Solutions:** They represent well-tested and effective solutions to recurring design challenges.
*   **Common Vocabulary:** Provide a shared language for developers to discuss design issues.
*   **Reusability:** Promote code reuse and reduce development time.
*   **Maintainability:** Well-designed systems using patterns are often easier to understand and modify.

**Categorization of Design Patterns (Gang of Four - GoF):**

*   **Creational Patterns:** Deal with object creation mechanisms, trying to create objects in a manner suitable to the situation.
    *   **Examples:**
        *   **Factory Method:** Defines an interface for creating an object, but lets subclasses decide which class to instantiate.
        *   **Abstract Factory:** Provides an interface for creating families of related or dependent objects without specifying their concrete classes.
        *   **Singleton:** Ensures a class only has one instance and provides a global point of access to it.
    *   **Example (Singleton):** A logging system that needs to ensure only one logger instance exists across the application.

*   **Structural Patterns:** Deal with object composition and how classes and objects can be combined to form larger structures.
    *   **Examples:**
        *   **Adapter:** Allows objects with incompatible interfaces to collaborate.
        *   **Decorator:** Attaches additional responsibilities to an object dynamically.
        *   **Facade:** Provides a simplified interface to a complex subsystem.
    *   **Example (Adapter):** Allowing a legacy system with an old data format to be used by a new system that expects a different format.

*   **Behavioral Patterns:** Deal with algorithms and the assignment of responsibilities between objects, as well as how they communicate.
    *   **Examples:**
        *   **Observer:** Defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.
        *   **Strategy:** Defines a family of algorithms, encapsulates each one, and makes them interchangeable.
        *   **Command:** Encapsulates a request as an object, allowing for parameterization of clients with different requests, queuing or logging of requests, and support for undoable operations.
    *   **Example (Observer):** A stock ticker application where multiple display panels (observers) update automatically when the stock price (subject) changes.

**Pressman (2014):** Discusses design patterns as a mechanism for capturing design expertise and promoting reusable design solutions.

---

### 5. Architectural Styles and Patterns

Beyond individual design patterns, there are broader architectural styles that define the overall structure and organization of a system.

*   **Layered Architecture:**
    *   **Description:** Organizes the system into horizontal layers, with each layer providing services to the layer above it and consuming services from the layer below.
    *   **Example:** Presentation Layer, Business Logic Layer, Data Access Layer, Database Layer.
    *   **Benefits:** Promotes separation of concerns, maintainability.

*   **Client-Server Architecture:**
    *   **Description:** Divides the system into clients that request services and servers that provide those services.
    *   **Example:** Web applications where the browser (client) requests pages from a web server.
    *   **Benefits:** Centralized control, easy scalability of servers.

*   **Microservices Architecture:**
    *   **Description:** Structures an application as a collection of small, autonomous services, each responsible for a specific business capability.
    *   **Benefits:** Scalability, resilience, technology diversity, easier to develop and deploy individual services.
    *   **Reference:** Related to modern agile and DevOps practices.

*   **Model-View-Controller (MVC):**
    *   **Description:** A popular architectural pattern for user interfaces, separating the application into three interconnected components: Model (data and business logic), View (user interface), and Controller (handles user input and updates Model/View).
    *   **Benefits:** Separation of concerns, improved maintainability, testability.

**Sommerville (2015, 2020):** Explores various architectural styles and their implications for system design and evolution.

---

### 6. Prototyping and Incremental Delivery in Design (CO1)

These techniques are not just for requirements gathering; they significantly influence the design process itself.

*   **Prototyping in Design:**
    *   **Description:** Creating early, incomplete versions of the system to explore design choices and gather feedback. Prototypes can be:
        *   **Throwaway Prototypes:** Built to understand requirements or explore design options, then discarded.
        *   **Evolutionary Prototypes:** Evolve into the final system, allowing for iterative refinement of the design.
    *   **Benefits:** Helps validate design ideas, identifies usability issues early, reduces the risk of incorrect design decisions.
    *   **Example:** Creating interactive wireframes or mockups for a new mobile app to test the user flow and interface layout before committing to full development.

*   **Incremental Delivery in Design:**
    *   **Description:** Designing and developing the system in small, manageable increments, with each increment delivering a working piece of functionality. The design evolves with each increment.
    *   **Benefits:** Allows for early feedback, adaptation to changing requirements, and continuous delivery of value.
    *   **Example:** Designing and implementing user authentication in the first increment, followed by product browsing in the second, and the shopping cart in the third. The design decisions made for authentication inform the design of subsequent features.

**Sommerville (2015, 2020):** Discusses how these approaches facilitate managing complexity and handling evolving requirements within the design phase.

---

### 7. Design for Non-functional Requirements

While functional requirements dictate *what* the system does, non-functional requirements (NFRs) dictate *how well* it does it. Design must actively address NFRs.

*   **Performance:**
    *   **Design considerations:** Efficient algorithms, optimized data structures, judicious use of caching, appropriate hardware allocation, asynchronous operations.
    *   **Example:** Choosing a database index strategy that minimizes query response times.

*   **Security:**
    *   **Design considerations:** Input validation, secure authentication and authorization mechanisms, data encryption, secure communication protocols (e.g., HTTPS), least privilege principle.
    *   **Example:** Implementing role-based access control to restrict user actions based on their permissions.

*   **Reliability/Availability:**
    *   **Design considerations:** Redundancy, fault tolerance, error handling and recovery mechanisms, graceful degradation.
    *   **Example:** Designing a system with load balancing and failover mechanisms to ensure continuous availability even if one server fails.

*   **Maintainability:**
    *   **Design considerations:** Modularity, clear code structure, comprehensive documentation, use of design patterns, adherence to coding standards.
    *   **Example:** Following the SOLID principles for object-oriented design to create more maintainable and flexible code.

*   **Scalability:**
    *   **Design considerations:** Decoupled components, horizontal scaling strategies (adding more machines), efficient database design, stateless services.
    *   **Example:** Designing a web application to be stateless so that any server instance can handle any user request, allowing for easy addition of new servers.

**Pressman (2014):** Emphasizes that NFRs must be considered from the outset of the design process, as addressing them late can be costly.

---

### 8. Practice Questions

**Question 1 (K2):**
Define the terms cohesion and coupling in the context of software design. Which is generally preferred to be high, and which is preferred to be low?

**Answer:**
*   **Cohesion:** The degree to which elements within a single module belong together and focus on a single task. High cohesion is preferred.
*   **Coupling:** The degree of interdependence between different modules. Low coupling is preferred.

**Question 2 (K3):**
Describe the main difference between System Design (High-Level Design) and Detailed Design (Low-Level Design). Provide a brief example for each.

**Answer:**
*   **System Design:** Focuses on the overall structure, major components, and their interactions. It defines the "what" at a macro level.
    *   **Example:** Deciding on a client-server architecture and identifying modules like User Management and Product Catalog.
*   **Detailed Design:** Focuses on the internal logic, data structures, and algorithms of individual modules. It defines the "how" at a micro level.
    *   **Example:** Designing the specific data structures and algorithms for searching products within the Product Catalog module.

**Question 3 (K2):**
Explain the purpose of the Adapter design pattern.

**Answer:**
The Adapter pattern allows objects with incompatible interfaces to collaborate. It acts as a bridge between two interfaces, converting the interface of one class into another interface clients expect.

**Question 4 (K2):**
Why is it important to consider non-functional requirements during the software design process?

**Answer:**
Non-functional requirements (like performance, security, and reliability) are critical to the overall success and usability of a software system. Addressing them early in the design phase ensures that the system is built with these qualities in mind from the start, which is more efficient and cost-effective than trying to retrofit them later. Ignoring them can lead to systems that are slow, insecure, or unreliable.

---

### 9. Important Points to Remember

*   **Design is iterative:** It's not a one-time activity; expect to revisit and refine designs as development progresses.
*   **Balance competing concerns:** Often, you'll need to make trade-offs between different design principles or non-functional requirements.
*   **Understand the problem:** A good design starts with a thorough understanding of the requirements.
*   **Communication is key:** Design documents and discussions should be clear and accessible to the entire development team.
*   **Tools and techniques evolve:** Stay updated on modern design practices, patterns, and architectural styles.
*   **Non-functional requirements have a significant impact on design:** Don't overlook them!

---

This comprehensive overview of the Design Process provides a foundational understanding for translating requirements into actionable plans for software construction. Remember to consult the recommended textbooks for deeper dives into specific concepts and methodologies.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
