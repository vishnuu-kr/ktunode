---
title: "Conducting Component level design"
subject: "SOFTWARE ENGINEERING"
module: "Module 2: Requirement Analysis and Design: Functional and non"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f3634e"
status: "completed"
scrapedAt: "2026-05-23T16:24:26.075Z"
---
## Software Engineering: Module 2 - Requirement Analysis and Design: Functional and Non-Functional

### Topic: Conducting Component-Level Design

**Learning Outcomes Covered:**

*   Understanding the purpose and process of component-level design.
*   Identifying and defining software components.
*   Specifying component interfaces.
*   Considering different component design strategies (e.g., procedural, object-oriented, data-driven).
*   Evaluating component cohesion and coupling.
*   Applying design principles to component design.
*   Understanding the relationship between component design and system architecture.

---

### 1. Introduction to Component-Level Design

Component-level design, also known as **module-level design** or **low-level design**, is the process of transforming the architectural design of a system into a set of detailed specifications for individual software components. It focuses on defining the internal structure and behavior of each component and how they interact with each other.

**Key Concepts:**

*   **Component:** A modular, self-contained unit of software that performs a specific function or set of functions. Components can be implemented as procedures, functions, classes, objects, or services.
*   **Interface:** The set of operations (methods, functions, APIs) that a component exposes to the outside world. It defines what services a component provides and how other components can access them.
*   **Abstraction:** The process of hiding complex implementation details and exposing only essential features. This is crucial for managing complexity in component design.
*   **Encapsulation:** Bundling data and the methods that operate on that data within a single unit (the component), preventing direct access to the internal state.
*   **Cohesion:** The degree to which the elements within a single component belong together. High cohesion is desirable.
*   **Coupling:** The degree to which components are dependent on each other. Low coupling is desirable.

**Importance of Component-Level Design:**

*   **Manageability:** Breaks down a complex system into smaller, manageable units.
*   **Reusability:** Well-designed components can be reused in other projects.
*   **Maintainability:** Easier to understand, debug, and modify individual components.
*   **Testability:** Allows for independent testing of components.
*   **Parallel Development:** Different components can be developed by different teams simultaneously.

**Textbook References:**

*   **Sommerville (Tenth Edition, 2015):** Discusses detailed design and modularity, emphasizing structured design techniques.
*   **Pressman (Eighth Edition, 2014):** Covers the transition from architectural design to component design, focusing on modularity, information hiding, and design principles.
*   **Sommerville (First Edition, 2020):** Likely reinforces modern approaches to component design within the context of software product engineering.

---

### 2. Identifying and Defining Software Components

The process of identifying components is directly related to the architectural design. High-level architectural decisions dictate the initial breakdown of the system into major components.

**Steps:**

1.  **Decompose the System:** Based on the architectural design (e.g., layered architecture, client-server architecture, microservices architecture), identify the major functional blocks or modules.
2.  **Map Requirements to Components:** Assign specific functional and non-functional requirements to the identified components.
3.  **Define Component Responsibilities:** Clearly articulate the purpose and function of each component. What problem does it solve? What data does it manage?
4.  **Identify Interactions:** Determine how components will interact with each other to fulfill system-level requirements.

**Example (Online Bookstore):**

Consider an online bookstore system. Architectural design might identify components like:

*   **User Interface (UI) Component:** Handles user interaction, displays information.
*   **Product Catalog Component:** Manages book information (title, author, price, description).
*   **Shopping Cart Component:** Manages items added by users.
*   **Order Processing Component:** Handles placing and managing orders.
*   **Payment Gateway Component:** Integrates with external payment providers.
*   **Database Component:** Stores all system data.

**Course Outcome Alignment:**

*   **CO3 (Prepare Software Requirement Specification and Software Design):** Component-level design is a crucial part of the software design phase.

---

### 3. Specifying Component Interfaces

A well-defined interface is critical for a component's reusability and for managing dependencies between components.

**Key Aspects of Interface Specification:**

*   **Operations/Methods:** List of functions or methods the component offers, including their names, parameters, and return types.
*   **Data Structures:** Define the data formats that are passed to or returned by the component's operations.
*   **Preconditions and Postconditions:** Specify conditions that must be true before an operation can be executed (preconditions) and conditions that will be true after successful execution (postconditions).
*   **Exceptions:** Define potential error conditions or exceptions that a component might raise.
*   **Visibility:** Specify which parts of the component are accessible from the outside (public interface) and which are internal (private implementation details).

**Example (Product Catalog Component Interface):**

```
Component: ProductCatalog

Interface:
    // Retrieves details for a specific book
    getBookDetails(bookID: String): BookDetails
        Preconditions: bookID is valid.
        Postconditions: Returns a BookDetails object or null if not found.

    // Searches for books based on a query
    searchBooks(query: String): List<BookSummary>
        Preconditions: query is not empty.
        Postconditions: Returns a list of BookSummary objects matching the query.

    // Adds a new book to the catalog
    addBook(bookData: BookDetails): Boolean
        Preconditions: bookData is valid and bookID does not already exist.
        Postconditions: Returns true if book added successfully, false otherwise.

Data Structures:
    BookDetails {
        String bookID;
        String title;
        String author;
        Float price;
        String description;
        // ... other book attributes
    }

    BookSummary {
        String bookID;
        String title;
        String author;
        Float price;
    }
```

**Textbook References:**

*   **Pressman (Eighth Edition, 2014):** Emphasizes the importance of information hiding and defining clear interfaces for components.

---

### 4. Component Design Strategies and Paradigms

The choice of design strategy significantly influences the structure and behavior of a component.

**Common Paradigms:**

*   **Procedural Design:** Focuses on sequences of processing steps. Components are often procedures or functions.
    *   **Pros:** Simple for sequential tasks.
    *   **Cons:** Can lead to high coupling if data is shared globally.
*   **Object-Oriented Design (OOD):** Organizes software around objects, which encapsulate data and behavior. Components are typically classes or objects.
    *   **Key Principles:** Encapsulation, Inheritance, Polymorphism, Abstraction.
    *   **Pros:** Promotes modularity, reusability, and maintainability.
    *   **Cons:** Can be more complex to design initially.
*   **Data-Driven Design:** Emphasizes the data structures and the transformations applied to them. Components might be focused on data manipulation and validation.
    *   **Pros:** Useful for systems with complex data models and transformations.
    *   **Cons:** Can sometimes obscure control flow.

**Specific Design Techniques:**

*   **Structured Design:** A top-down approach that decomposes a system into a hierarchy of modules. Focuses on data flow and control flow. (Sommerville)
*   **Object-Oriented Analysis and Design (OOAD):** A methodology that uses objects as the primary building blocks. Tools like UML (Unified Modeling Language) are used for modeling. (Pressman)

**Example (Implementing a Search Function):**

*   **Procedural:** A `search(query)` function that takes a search string and iterates through a global list of books.
*   **Object-Oriented:** A `ProductCatalog` class with a `searchBooks(query)` method. The `ProductCatalog` object internally manages a collection of `Book` objects, each with its own attributes.

**Course Outcome Alignment:**

*   **CO4 (Interpret object-oriented design principles):** Understanding OOD is crucial for modern component design.

---

### 5. Evaluating Component Cohesion and Coupling

These are fundamental metrics for assessing the quality of component design.

#### 5.1. Cohesion

*   **Definition:** The degree to which the elements within a single component are related and focused on a single task or purpose.
*   **Types of Cohesion (from weakest to strongest):**
    1.  **Coincidental Cohesion:** Elements are grouped together arbitrarily (e.g., a utility module with unrelated functions).
    2.  **Logical Cohesion:** Elements are grouped together because they perform a similar type of operation (e.g., a module that handles all input operations, regardless of the type of input).
    3.  **Temporal Cohesion:** Elements are grouped together because they are executed around the same time (e.g., an initialization module).
    4.  **Procedural Cohesion:** Elements are grouped because they form a sequence of steps in a process.
    5.  **Communicational Cohesion:** Elements are grouped because they operate on the same data.
    6.  **Sequential Cohesion:** Elements are grouped because the output of one element is the input to the next.
    7.  **Functional Cohesion:** Elements are grouped because they all contribute to a single, well-defined function (e.g., a module that calculates the square root). **This is the most desirable type.**

*   **Goal:** Aim for **high cohesion**, ideally functional cohesion. This means each component should do one thing and do it well.

#### 5.2. Coupling

*   **Definition:** The degree of interdependence between software modules.
*   **Types of Coupling (from strongest/worst to weakest/best):**
    1.  **Content Coupling (Pathological Coupling):** One component modifies or relies on the internal workings of another component (e.g., altering another component's data). Highly undesirable.
    2.  **Common Coupling:** Multiple components share access to the same global data. Changes to the global data can affect many components.
    3.  **Control Coupling:** One component controls the logic of another component by passing flags or control information.
    4.  **Stamp Coupling (Data Structure Coupling):** Components share a composite data structure (like a record or object) but only use parts of it.
    5.  **Data Coupling:** Components communicate by passing simple data items (parameters) to each other. This is the most desirable form of coupling.
    6.  **Message Coupling:** Components interact by sending messages to each other, often asynchronously, with minimal knowledge of each other's internal structure. (Common in distributed systems/microservices).
    7.  **No Coupling:** Components are completely independent. (Rarely achievable in practice for interacting systems).

*   **Goal:** Aim for **low coupling**. This makes components easier to understand, modify, and reuse independently.

**Example (Online Bookstore):**

*   **High Cohesion Example:** A `ShoppingCart` component that only handles adding, removing, and updating items in the user's cart.
*   **Low Coupling Example:** The `OrderProcessing` component calls the `getCartItems()` method on the `ShoppingCart` component interface, passing no sensitive internal data.

**Textbook References:**

*   **Sommerville (Tenth Edition, 2015):** Discusses modularity, cohesion, and coupling as key design quality attributes.
*   **Pressman (Eighth Edition, 2014):** Provides detailed explanations of various types of cohesion and coupling and their impact on software quality.

---

### 6. Applying Design Principles to Component Design

Several design principles guide the creation of high-quality components.

*   **Information Hiding (Parnas):** Each module should encapsulate a design decision that is likely to change. Other modules should not know about these internal details. Interfaces hide these changes. (Pressman)
*   **The Single Responsibility Principle (SRP) (Part of SOLID principles):** A class (or component) should have only one reason to change. This promotes high cohesion. (Pressman discusses SOLID principles in later editions).
*   **The Open/Closed Principle (OCP):** Software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification. Components should be designed to allow new functionality to be added without altering existing code.
*   **The Liskov Substitution Principle (LSP):** Objects of a superclass should be replaceable with objects of its subclasses without altering the correctness of the program. Important for inheritance in OOD.
*   **The Interface Segregation Principle (ISP):** Clients should not be forced to depend upon interfaces that they do not use. Break down large interfaces into smaller, more specific ones.
*   **The Dependency Inversion Principle (DIP):** High-level modules should not depend on low-level modules. Both should depend on abstractions. Abstractions should not depend on details. Details should depend on abstractions.

**Example:**

Imagine a `PaymentProcessor` component.

*   **Following SRP and ISP:** Instead of one large `PaymentProcessor` handling all payment types (Credit Card, PayPal, etc.), create separate components for `CreditCardProcessor`, `PayPalProcessor`, and a common `PaymentGateway` interface they all implement. The `OrderProcessing` component interacts with the `PaymentGateway` interface, adhering to DIP.

**Course Outcome Alignment:**

*   **CO4 (Interpret object-oriented design principles):** These principles are core to good OOD and thus component design.

---

### 7. Component Design and System Architecture

Component-level design is not done in isolation. It must align with and realize the system's architectural design.

**Key Relationships:**

*   **Architectural Style and Component Structure:** The chosen architectural style (e.g., microservices, layered, client-server) will heavily influence how the system is decomposed into components.
    *   **Microservices:** Each microservice is a component, often designed with its own database and API.
    *   **Layered Architecture:** Each layer can be considered a component or a set of related components.
*   **Component Interfaces and Architectural Contracts:** Component interfaces serve as the "contracts" that fulfill the overall architectural vision. They define how components interact at a higher level.
*   **Non-Functional Requirements (NFRs) and Component Design:** NFRs (performance, security, scalability) must be considered at the component level. For example, a high-performance requirement might dictate a specific implementation strategy for a data-intensive component.

**Example:**

If the system architecture dictates a **microservices architecture** for an e-commerce platform, then each service (e.g., `ProductService`, `OrderService`, `UserService`) is a component. The component-level design for `ProductService` would define its internal operations for managing products, its data model, and its API for other services to interact with.

**Course Outcome Alignment:**

*   **CO3 (Prepare Software Requirement Specification and Software Design):** Component design bridges the gap between high-level architecture and detailed implementation.

---

### 8. Practice Questions and Exercises

**Question 1:**

Define "cohesion" and "coupling" in the context of component-level design. Explain why high cohesion and low coupling are desirable. Provide an example of each.

**Answer:**

*   **Cohesion:** The degree to which the elements within a single component belong together and focus on a single purpose. High cohesion is desirable because it leads to components that are more understandable, maintainable, and reusable.
    *   **Example:** A `Calculator` component with functions like `add()`, `subtract()`, `multiply()`, and `divide()` exhibits functional cohesion.
*   **Coupling:** The degree of interdependence between software components. Low coupling is desirable because it makes components more independent, easier to modify and test without affecting other parts of the system.
    *   **Example:** Two components interacting solely through the exchange of simple data parameters via method calls exhibits data coupling, which is a low form of coupling.

**Question 2:**

Consider a component responsible for validating user input in a web application. Describe two different approaches to designing this component (e.g., procedural vs. object-oriented) and discuss the potential cohesion and coupling characteristics of each.

**Answer:**

1.  **Procedural Approach:**
    *   **Design:** A single large `InputValidation` module with numerous functions like `validateEmail(email)`, `validatePassword(password)`, `validateUsername(username)`, etc. These functions might operate on global or passed-in data structures.
    *   **Cohesion:** Could be logical cohesion if all input validation logic is grouped, but might lean towards coincidental cohesion if the set of validation rules changes frequently, requiring modifications to this single module for unrelated reasons.
    *   **Coupling:** If validation functions rely on global configurations or shared data structures, it could lead to common or stamp coupling. If they simply return boolean results based on input parameters, it's data coupling.

2.  **Object-Oriented Approach:**
    *   **Design:** Create an abstract `Validator` interface with concrete implementations for each validation type: `EmailValidator`, `PasswordValidator`, `UsernameValidator`. Each concrete validator would have a `validate(input)` method. A `InputValidatorFactory` could be used to get the appropriate validator.
    *   **Cohesion:** High functional cohesion for each concrete validator (e.g., `EmailValidator` only validates email formats).
    *   **Coupling:** Low coupling. The main application component depends on the `Validator` interface and uses a factory, decoupling it from specific validator implementations. Each validator is largely independent.

**Question 3:**

What is the purpose of defining preconditions and postconditions for component interfaces?

**Answer:**

Preconditions and postconditions specify the contract of a component's operations.
*   **Preconditions:** State the conditions that must be met *before* an operation can be invoked successfully. This helps the calling component ensure it's providing valid input and a correct state.
*   **Postconditions:** State the conditions that will be true *after* an operation has completed successfully. This guarantees the expected outcome for the calling component.

Together, they ensure clarity, prevent errors, and facilitate correct usage of the component.

---

### 9. Important Points to Remember

*   Component-level design is about detailing the internal structure and behavior of individual software units.
*   Well-defined interfaces are crucial for modularity, reusability, and managing dependencies.
*   Strive for **high cohesion** within components (functional cohesion is ideal) and **low coupling** between components (data coupling is ideal).
*   Design principles like information hiding, SRP, OCP, LSP, ISP, and DIP are guides for creating robust and maintainable components.
*   Component design must align with and realize the system's overall architectural design.
*   Consider non-functional requirements during component design, as they can influence implementation choices.
*   Different design paradigms (procedural, OO, data-driven) offer different ways to structure components.
*   Tools like UML can be very helpful for modeling component interfaces and interactions.

---

This concludes the study notes for Conducting Component-Level Design. Remember to practice applying these concepts to real-world or hypothetical problems to solidify your understanding.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
