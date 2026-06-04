---
title: "Design concepts"
subject: "SOFTWARE ENGINEERING"
module: "Module 2: Requirement Analysis and Design: Functional and non"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f36347"
status: "completed"
scrapedAt: "2026-05-23T16:24:21.121Z"
---
# Software Engineering: Module 2 - Requirement Analysis and Design: Functional and Non-Functional | Design Concepts

---

## 1. Introduction to Software Design

Software design is a critical phase in the software development lifecycle, bridging the gap between requirements and implementation. It involves defining the architecture, components, modules, interfaces, and data for a software system to satisfy specified requirements.

**Key Concepts:**

*   **Design Process:** A systematic process of defining the structure and behavior of a software system. It involves making choices about how to organize the software to meet requirements.
*   **Design Goals:**
    *   **Maintainability:** Ease of modifying, correcting, and enhancing the software.
    *   **Understandability:** Clarity and ease of comprehension for developers.
    *   **Reusability:** Ability to use software components in different contexts.
    *   **Efficiency:** Optimal use of system resources (CPU, memory, network).
    *   **Reliability:** Probability of failure-free operation for a specified period.
    *   **Testability:** Ease of verifying the software's correctness.
    *   **Scalability:** Ability to handle increasing workloads by adding resources.
    *   **Portability:** Ease of transferring software to different environments.
*   **Design Levels:**
    *   **High-level Design (Architectural Design):** Focuses on the overall structure of the system, its major components, their relationships, and the principles guiding its organization.
    *   **Low-level Design (Detailed Design):** Focuses on the internal logic of individual components, including data structures, algorithms, and interfaces.

**Textbook References:**

*   **Sommerville (2015):** Chapters on architectural design and detailed design.
*   **Pressman (2014):** Chapters on design process, quality attributes, and design principles.

---

## 2. Design Principles

These principles guide the creation of well-structured, maintainable, and understandable software.

**Key Concepts:**

*   **Abstraction:** Hiding complex implementation details and exposing only essential features. This simplifies the system and allows for focus on higher-level concepts.
    *   **Example:** A user interacts with a `File` object to read data without needing to know the underlying disk I/O mechanisms.
*   **Encapsulation:** Bundling data (attributes) and methods (functions) that operate on that data within a single unit (e.g., a class). It also involves controlling access to the data.
    *   **Example:** A `BankAccount` class encapsulates `accountNumber`, `balance`, and methods like `deposit()` and `withdraw()`. The `balance` is typically private, accessed only through the methods.
*   **Modularity:** Dividing a software system into smaller, independent, and interchangeable modules. Each module performs a specific function.
    *   **Benefits:** Easier to develop, test, debug, and maintain.
    *   **Example:** A e-commerce system can be divided into modules like User Management, Product Catalog, Order Processing, and Payment Gateway.
*   **Information Hiding:** The principle of hiding the internal implementation details of a module from other modules. This prevents direct access to internal data and logic, promoting encapsulation and reducing dependencies.
    *   **Example:** A library’s internal data structures and algorithms for sorting are hidden; users only interact with public sorting functions.
*   **Separation of Concerns (SoC):** Dividing a program into distinct sections, each addressing a separate concern or functionality. This makes the code more organized and manageable.
    *   **Example:** In web development, separating presentation (HTML/CSS), business logic (JavaScript/backend code), and data storage.
*   **Coupling:** The degree of interdependence between software modules. Low coupling is desirable, meaning modules are independent and changes in one module have minimal impact on others.
    *   **Types of Coupling (from highest to lowest):**
        *   **Content Coupling:** One module modifies or relies on the internal workings of another. (Worst)
        *   **Common Coupling:** Modules share global data.
        *   **Stamp Coupling:** Modules share the same data structure, passing it around even if they don't use all its elements.
        *   **Control Coupling:** One module passes a flag or control variable to another module to direct its logic.
        *   **Data Coupling:** Modules communicate by passing simple data parameters. (Best)
*   **Cohesion:** The degree to which the elements within a module belong together. High cohesion is desirable, meaning a module performs a single, well-defined task.
    *   **Types of Cohesion (from lowest to highest):**
        *   **Coincidental Cohesion:** Elements are grouped together arbitrarily.
        *   **Logical Cohesion:** Elements are grouped because they perform similar functions, but are not necessarily related at the same time (e.g., a module for all input/output operations).
        *   **Temporal Cohesion:** Elements are grouped because they are executed at the same time (e.g., initialization module).
        *   **Procedural Cohesion:** Elements are grouped because they follow a sequence of operations.
        *   **Communicational Cohesion:** Elements are grouped because they operate on the same data.
        *   **Sequential Cohesion:** Elements are grouped because the output of one element is the input for the next.
        *   **Functional Cohesion:** All elements contribute to a single, well-defined function. (Best)

**Textbook References:**

*   **Pressman (2014):** Chapters on design principles (e.g., modularity, coupling, cohesion).
*   **Sommerville (2015):** Chapters on design principles and modularity.

---

## 3. Architectural Design

Architectural design is about defining the high-level structure of a software system. It involves identifying major components, their responsibilities, and how they interact.

**Key Concepts:**

*   **Software Architecture:** The fundamental organization of a system, embodied in its components, their relationships to each other and the environment, and the principles guiding its design and evolution. (IEEE standard definition)
*   **Architectural Styles/Patterns:** Predefined, reusable solutions to commonly occurring design problems within a given context. They provide a vocabulary for describing architectures and a set of best practices.
    *   **Examples:**
        *   **Layered Architecture:** Organizes the system into horizontal layers, each providing services to the layer above and consuming services from the layer below.
            *   *Use Case:* Multi-tier web applications (Presentation, Business Logic, Data Access).
        *   **Client-Server Architecture:** Divides the system into clients (requesting services) and servers (providing services).
            *   *Use Case:* Web browsers and web servers, email clients and mail servers.
        *   **Model-View-Controller (MVC):** Separates the application into three interconnected components: Model (data and business logic), View (user interface), and Controller (handles user input and updates Model/View).
            *   *Use Case:* Many web frameworks (e.g., Ruby on Rails, Spring MVC).
        *   **Microservices Architecture:** Structures an application as a collection of small, independent services, each running in its own process and communicating via lightweight mechanisms.
            *   *Use Case:* Large, complex applications requiring agility and scalability.
        *   **Event-Driven Architecture:** Based on the production, detection, consumption of, and reaction to events.
            *   *Use Case:* Real-time systems, IoT platforms.
        *   **Pipe and Filter Architecture:** Processes data through a series of sequential processing steps (filters) connected by pipes.
            *   *Use Case:* Data processing pipelines, Unix shell commands.
*   **Architectural Design Process:**
    1.  **Identify Architectural Constraints:** Factors that limit design choices (e.g., hardware, existing systems, performance requirements).
    2.  **Define Architectural Goals and Quality Attributes:** What are the most important non-functional requirements (performance, security, availability)?
    3.  **Choose an Architectural Style:** Select a style that best meets the goals.
    4.  **Decompose the System:** Divide the system into components based on the chosen style.
    5.  **Identify Components and their Relationships:** Define responsibilities and interfaces.
    6.  **Describe Architectures:** Document the architecture using diagrams and descriptions.
    7.  **Evaluate Architectures:** Assess how well the architecture meets the quality attributes.

**Textbook References:**

*   **Sommerville (2015):** Chapters on architectural design and architectural styles.
*   **Pressman (2014):** Chapters on architectural design and architectural patterns.

---

## 4. Detailed Design

Detailed design focuses on the internal logic of individual components identified during architectural design.

**Key Concepts:**

*   **Data Design:** How data is structured and managed within the system. This includes defining data structures, databases, and data flows.
    *   **Entity-Relationship Diagrams (ERDs):** Visual representation of data entities and their relationships.
    *   **UML Class Diagrams:** Used to model the static structure of a system, including classes, attributes, operations, and relationships.
*   **Procedural Design (Algorithm Design):** Designing the algorithms and logic for each component's operations.
    *   **Flowcharts:** Graphical representation of the sequence of operations.
    *   **Pseudocode:** A high-level description of an algorithm that uses natural language combined with programming language elements.
    *   **Decision Trees/Tables:** Used to represent complex conditional logic.
*   **Object-Oriented Design (OOD):** A design paradigm that models the system as a collection of interacting objects.
    *   **Key Principles:** Encapsulation, Abstraction, Inheritance, Polymorphism.
    *   **Design Patterns:** Reusable solutions to common OOD problems (discussed in later sections).
    *   **UML (Unified Modeling Language):** A standardized graphical modeling language for visualizing, specifying, constructing, and documenting the artifacts of a software-intensive system.
        *   **Key UML Diagrams for Design:**
            *   **Class Diagrams:** Structure of the system.
            *   **Sequence Diagrams:** Interaction between objects over time.
            *   **Activity Diagrams:** Workflow and process flows.
            *   **State Machine Diagrams:** Behavior of an object over time.
*   **Interface Design:** Defining how different components interact with each other and with external systems or users.
    *   **API (Application Programming Interface):** A set of definitions and protocols for building and integrating application software.
    *   **User Interface (UI) Design:** Designing the visual layout and interactivity of the system for the user.

**Textbook References:**

*   **Sommerville (2015):** Chapters on detailed design, data design, and procedural design.
*   **Pressman (2014):** Chapters on detailed design, object-oriented design, and UML.
*   **Sommerville (2020):** May offer contemporary perspectives on design practices.

---

## 5. Design Patterns

Design patterns are proven, reusable solutions to recurring problems in software design. They provide a common vocabulary for designers and help create more flexible, maintainable, and understandable code.

**Key Concepts:**

*   **Creational Patterns:** Concerned with mechanisms of object creation, trying to create objects in a manner suitable to the situation.
    *   **Singleton:** Ensures a class only has one instance and provides a global point of access to it.
        *   *Example:* A single logging instance for an application.
    *   **Factory Method:** Defines an interface for creating an object, but lets subclasses decide which class to instantiate.
        *   *Example:* A document editor that can create different types of documents (e.g., text, spreadsheet).
    *   **Abstract Factory:** Provides an interface for creating families of related or dependent objects without specifying their concrete classes.
        *   *Example:* Creating UI elements for different operating systems (e.g., Windows button, Mac button).
    *   **Builder:** Separates the construction of a complex object from its representation, so that the same construction process can create different representations.
        *   *Example:* Building a complex configuration object step-by-step.
*   **Structural Patterns:** Concerned with composition of classes or objects.
    *   **Adapter:** Converts the interface of a class into another interface clients expect. Allows classes with incompatible interfaces to work together.
        *   *Example:* Adapting an old legacy component to a new system's interface.
    *   **Decorator:** Attaches additional responsibilities to an object dynamically. Decorators provide a flexible alternative to subclassing for extending functionality.
        *   *Example:* Adding scrolling or borders to a text view.
    *   **Proxy:** Provides a surrogate or placeholder for another object to control access to it.
        *   *Example:* A remote proxy for accessing an object over a network.
    *   **Facade:** Provides a simplified interface to a complex subsystem.
        *   *Example:* A `Computer` facade that hides the complexity of booting up the CPU, memory, and disk.
*   **Behavioral Patterns:** Concerned with algorithms and the assignment of responsibilities between objects.
    *   **Observer:** Defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.
        *   *Example:* A stock price display updating when the price changes.
    *   **Strategy:** Defines a family of algorithms, encapsulates each one, and makes them interchangeable. Strategy lets the algorithm vary independently from clients that use it.
        *   *Example:* Different sorting algorithms that can be chosen at runtime.
    *   **Template Method:** Defines the skeleton of an algorithm in an operation, deferring some steps to subclasses. Template Method lets subclasses redefine certain steps of an algorithm without changing the algorithm's structure.
        *   *Example:* A `processFile()` method that defines the overall file processing steps, with subclasses implementing specific parsing or transformation logic.
    *   **Iterator:** Provides a way to access the elements of an aggregate object sequentially without exposing its underlying representation.
        *   *Example:* Traversing elements in a list or collection.

**Textbook References:**

*   **Pressman (2014):** Chapters on design patterns (often referred to as "Architectural Patterns" or "Design Paradigms" in this context).
*   **Sommerville (2015):** May include sections on reusable design components or common design approaches.
*   **Course Outcome Alignment:** CO4 specifically mentions interpreting object-oriented design principles and design patterns.

---

## 6. Non-Functional Requirements in Design

While functional requirements specify *what* the system should do, non-functional requirements (NFRs) specify *how well* it should do it. These are critical for a successful system and heavily influence design decisions.

**Key Concepts:**

*   **Quality Attributes:** Measurable characteristics of the software that are important to its users and developers.
    *   **Performance:** Response time, throughput, resource utilization.
        *   *Design Impact:* Choice of algorithms, data structures, efficient coding practices, caching strategies, distributed systems.
    *   **Security:** Confidentiality, integrity, availability, authentication, authorization.
        *   *Design Impact:* Encryption, access control mechanisms, secure coding practices, input validation, secure communication protocols.
    *   **Reliability:** Availability, fault tolerance, robustness.
        *   *Design Impact:* Redundancy, error handling, recovery mechanisms, failover strategies.
    *   **Usability:** Ease of use, learnability, user satisfaction.
        *   *Design Impact:* User interface design, clear navigation, feedback mechanisms, context-sensitive help.
    *   **Maintainability:** Ease of understanding, modification, and testing.
        *   *Design Impact:* Modularity, low coupling, high cohesion, clear documentation, consistent coding style, using design patterns.
    *   **Scalability:** Ability to handle increasing load by adding resources.
        *   *Design Impact:* Stateless components, distributed architectures, efficient database design, load balancing.
    *   **Portability:** Ease of transferring software to different environments.
        *   *Design Impact:* Avoiding platform-specific code, using standard APIs, configurable parameters.
*   **Integrating NFRs into Design:**
    *   **Trade-offs:** Often, improving one NFR might negatively impact another (e.g., increased security might reduce performance). Design involves making informed trade-offs.
    *   **Architectural Decisions:** NFRs are often primary drivers for architectural style selection (e.g., microservices for scalability and independent deployment, layered for maintainability).
    *   **Component-Level Design:** NFRs influence specific design choices within modules (e.g., choosing an efficient algorithm for a performance-critical operation).

**Textbook References:**

*   **Pressman (2014):** Chapters dedicated to quality attributes and their impact on design.
*   **Sommerville (2015):** Chapters discussing NFRs and their influence on the design process.
*   **Sommerville (2020):** Likely emphasizes modern approaches to quality attribute design.

---

## 7. Bridging Design and Requirements

The design phase directly implements the requirements gathered during the analysis phase.

**Key Concepts:**

*   **Traceability:** The ability to trace requirements to design components and then to code. This ensures that all requirements are addressed and helps in impact analysis during changes.
*   **Design Specification:** A document that details the architecture, components, interfaces, data structures, and algorithms of the software system.
*   **Software Design Document (SDD):** A formal document that describes the design of the software system. It typically includes:
    *   Overall Architecture
    *   Detailed design of modules/components
    *   Data structures and database design
    *   User interface design
    *   Error handling strategies
    *   Security considerations
    *   Traceability matrix (linking requirements to design elements)
*   **Iterative Refinement:** Design is often an iterative process. Initial designs are refined as more is understood about the requirements or as technical challenges arise.
*   **Impact of Requirements Changes:** Changes in requirements during the design phase necessitate modifications to the design. Understanding the impact of these changes is crucial.

**Textbook References:**

*   **Sommerville (2015):** Chapters on design process, documentation, and handling changes.
*   **Pressman (2014):** Chapters on design documentation and the relationship between requirements and design.
*   **Course Outcome Alignment:** CO3 mentions preparing Software Design for a given problem, which implies translating requirements into design.

---

## 8. Connecting to Course Outcomes

This module's content directly addresses several course outcomes:

*   **CO1:** While this topic focuses on design, understanding design principles helps interpret how to handle changes with techniques like prototyping (by creating design prototypes) and incremental delivery (by designing modules that can be delivered incrementally).
*   **CO3:** This is a core outcome. The entire topic of design concepts is about preparing the Software Design for a given problem based on analyzed requirements.
*   **CO4:** Directly covers interpreting object-oriented design principles and design patterns.
*   **CO5:** Concepts like modularity, information hiding, and separation of concerns contribute to maintainability and are relevant to understanding software evolution and maintenance strategies.
*   **CO6:** While not directly about project management frameworks, good design is foundational for effective planning, estimation, and tracking in projects using SCRUM, Kanban, or Lean. A well-designed system is easier to manage.

---

## 9. Important Points to Remember

*   **Design bridges Requirements and Implementation.**
*   **Key Design Goals:** Maintainability, Understandability, Reusability, Efficiency, Reliability.
*   **Principles:** Abstraction, Encapsulation, Modularity, Information Hiding are fundamental.
*   **Coupling (Low) and Cohesion (High) are desirable.**
*   **Architectural Styles** provide blueprints for system structure.
*   **Design Patterns** offer reusable solutions to common design problems.
*   **Non-Functional Requirements (NFRs) heavily influence design decisions.**
*   **Traceability** ensures that design elements map back to requirements.

---

## 10. Practice Questions and Answers

**Question 1:** Explain the difference between coupling and cohesion. Why is low coupling and high cohesion desirable in software design?

**Answer:**
*   **Coupling:** Measures the degree of interdependence between modules. Low coupling means modules are independent.
*   **Cohesion:** Measures how closely related the elements within a single module are. High cohesion means a module performs a single, well-defined task.

It is desirable to have **low coupling** because:
    *   **Reduced Impact of Changes:** Changes in one module have minimal effect on other modules.
    *   **Improved Understandability:** Independent modules are easier to understand in isolation.
    *   **Enhanced Reusability:** Modules can be reused more easily in different contexts.
    *   **Easier Testing:** Modules can be tested independently.

It is desirable to have **high cohesion** because:
    *   **Improved Understandability:** A module with a single responsibility is easier to grasp.
    *   **Increased Maintainability:** Changes related to a specific function are localized within one module.
    *   **Reduced Complexity:** Modules are focused and less prone to unintended side effects.
    *   **Better Reusability:** A module performing a specific, well-defined task is more likely to be reusable.

**Question 2:** Name and briefly describe three common architectural styles. For each, mention a typical use case.

**Answer:**
1.  **Layered Architecture:**
    *   **Description:** Organizes the system into horizontal layers, where each layer provides services to the layer above and consumes services from the layer below. Common layers include Presentation, Business Logic, and Data Access.
    *   **Use Case:** Multi-tier web applications, operating systems.

2.  **Model-View-Controller (MVC):**
    *   **Description:** Separates the application into three interconnected components: Model (data and business logic), View (user interface), and Controller (handles user input and updates Model/View). This promotes separation of concerns.
    *   **Use Case:** Web applications (e.g., Spring MVC, Ruby on Rails), GUI applications.

3.  **Microservices Architecture:**
    *   **Description:** Structures an application as a collection of small, independent services, each responsible for a specific business capability. Services communicate over a network, typically using lightweight protocols like HTTP.
    *   **Use Case:** Large-scale, complex applications requiring high agility, scalability, and independent deployment of features.

**Question 3:** What is the purpose of the Decorator design pattern? Provide a simple conceptual example.

**Answer:**
*   **Purpose:** The Decorator pattern allows responsibilities to be added to an object dynamically and transparently. It provides a flexible alternative to subclassing for extending functionality. Decorators wrap the original object, adding their own behavior before or after delegating to the wrapped object.

*   **Conceptual Example:** Imagine a `Coffee` class. We can have decorators like `MilkDecorator` and `SugarDecorator`.
    *   A `SimpleCoffee` object might cost $2.
    *   A `CoffeeWithMilk` (a `SimpleCoffee` wrapped in `MilkDecorator`) would add the cost of milk and perhaps alter the description.
    *   A `CoffeeWithMilkAndSugar` (a `SimpleCoffee` wrapped in `MilkDecorator` and then in `SugarDecorator`) would add costs and descriptions for both.
    This allows us to create many combinations of coffee without needing a separate class for each (e.g., `CoffeeWithMilk`, `CoffeeWithSugar`, `CoffeeWithMilkAndSugar`, `CoffeeWithSyrup`, etc.).

---

This concludes the study notes for Design Concepts within Module 2. Remember to refer to your textbooks for more in-depth explanations and examples. Good luck with your studies!

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
