---
title: "Architectural considerations"
subject: "SOFTWARE ENGINEERING"
module: "Module 2: Requirement Analysis and Design: Functional and non"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f3634b"
status: "completed"
scrapedAt: "2026-05-23T16:24:23.964Z"
---
# Software Engineering: Module 2 - Requirement Analysis and Design: Architectural Considerations

## Introduction

This module delves into the critical phase of software development where the blueprint for the entire system is created. **Architectural considerations** are paramount as they lay the foundation for the system's structure, influencing its quality attributes, maintainability, scalability, and overall success. We will explore how architectural decisions are made, the various factors that influence them, and common architectural styles.

---

## Learning Outcomes

By the end of this topic, you will be able to:

*   Understand the fundamental principles of software architecture.
*   Identify key factors influencing architectural decisions.
*   Recognize and explain common architectural styles and patterns.
*   Appreciate the trade-offs involved in architectural design.
*   Relate architectural considerations to non-functional requirements.

---

## Course Outcomes Alignment

This topic directly contributes to the following Course Outcomes:

*   **CO3: Prepare Software Requirement Specification and Software Design for a given problem (Knowledge Level: K3)** - Architectural considerations are a core part of software design.
*   **CO4: Interpret object-oriented design principles, design patterns, software testing methods... (Knowledge Level: K2)** - Architectural styles are essentially high-level design patterns.
*   **CO1: Interpret software process models and core activities, including handling changes with techniques like prototyping and incremental delivery. (Knowledge Level: K2)** - Architectural decisions often need to accommodate change and can be evolved through incremental delivery.

---

## 1. What is Software Architecture?

**Definition:** Software architecture is the set of significant decisions about the organization of a software system, the selection of structural elements and their interfaces, and the behavior that these elements exhibit, as expressed in the structure of a system, the relationships between its constituents, the principles governing their design and evolution. (Pressman, 8th Ed., p. 464)

**Key Concepts:**

*   **High-level structure:** It's about the overall organization of the software, not the detailed design of individual components.
*   **Significant decisions:** These are decisions that are hard to change later and have a broad impact.
*   **Structural elements:** These are the major components of the system (e.g., databases, user interfaces, business logic modules).
*   **Interfaces:** How these components interact with each other.
*   **Behavior:** The overall observable behavior of the system.
*   **Principles:** Guiding rules and constraints that shape the architecture.

**Analogy:** Think of a building's architecture. It defines the number of floors, the placement of rooms, the structural support systems, and the overall aesthetic. It's the blueprint before the detailed interior design and construction.

**Why is Architecture Important?**

*   **Communication:** Provides a common understanding of the system for stakeholders.
*   **Quality Attributes:** Directly influences non-functional requirements like performance, security, reliability, and maintainability.
*   **Constraints:** Defines the boundaries and limitations within which development will occur.
*   **Reusability:** Well-defined architectural components can be reused across projects.
*   **Manageability:** Simplifies the management of complexity in large systems.
*   **Early Decisions:** Critical decisions made early in the lifecycle are less costly to change than those made later. (Sommerville, 10th Ed., p. 232)

---

## 2. Factors Influencing Architectural Decisions

Architectural decisions are not made in a vacuum. They are influenced by a variety of factors:

### 2.1. Quality Attributes (Non-Functional Requirements)

These are arguably the most significant drivers of architectural choices.

*   **Performance:** How responsive is the system? (e.g., response times, throughput). Architectures that favor speed might use distributed processing, caching, or asynchronous operations.
*   **Scalability:** How well can the system handle increasing loads? (e.g., number of users, data volume). Architectures supporting scalability often involve modularity, stateless components, and distributed systems.
*   **Reliability:** How likely is the system to fail? Architectures might incorporate redundancy, fault tolerance, and robust error handling.
*   **Availability:** What percentage of the time is the system operational? Architectures might involve failover mechanisms and hot-swapping of components.
*   **Security:** How resistant is the system to threats? Architectural choices related to authentication, authorization, data encryption, and secure communication protocols are crucial.
*   **Maintainability:** How easy is it to modify or fix the system? Modular architectures with clear separation of concerns are more maintainable.
*   **Usability:** How easy is the system for users to learn and operate? While often tied to UI design, the underlying architecture can impact the responsiveness and intuitiveness of the user experience.
*   **Modifiability:** How easy is it to introduce changes or new features? Architectures that are flexible and loosely coupled facilitate easier modifications.
*   **Testability:** How easy is it to test the system? Architectures that expose well-defined interfaces and allow for isolated testing of components are more testable.

**Example:** A banking system needs high reliability and security, influencing architectural decisions to use robust transaction management, encryption, and potentially distributed databases for fault tolerance. A simple online game might prioritize performance and scalability.

### 2.2. Business Requirements

*   **Cost:** Budget constraints can dictate the complexity and technology choices.
*   **Time to Market:** A need for rapid deployment might favor simpler architectures or proven technologies.
*   **Business Goals:** The overall strategic objectives of the organization can shape the architecture.
*   **Organizational Structure:** The way development teams are organized can influence how the architecture is decomposed.

### 2.3. Technical Constraints

*   **Hardware:** Available hardware resources (CPU, memory, network).
*   **Software:** Existing systems, operating systems, databases, and programming languages.
*   **Third-Party Integrations:** Requirements to integrate with external services or legacy systems.
*   **Development Team Skills:** The expertise of the development team can influence technology and architectural style choices.

### 2.4. Other Factors

*   **Standards and Regulations:** Compliance with industry standards or legal requirements.
*   **Project Size and Complexity:** Larger and more complex projects often require more sophisticated architectural approaches.

**Important Point:** There are often trade-offs between different quality attributes. Optimizing for one might negatively impact another. For instance, increasing security measures can sometimes decrease performance.

---

## 3. Architectural Design Process

The architectural design process is iterative and involves several activities:

1.  **Identify Architectural Requirements:** Elicit and prioritize quality attributes and other constraints.
2.  **Architectural Representation:** Document the architecture using diagrams and descriptions.
3.  **Architectural Styles and Patterns:** Select appropriate architectural styles and patterns to address the identified requirements.
4.  **Architecture Evaluation:** Assess the architecture against the requirements, often through reviews and prototyping.
5.  **Architecture Refinement:** Modify the architecture based on evaluation feedback.

**Reference:** Pressman (8th Ed., Chapter 19) discusses the architectural design process in detail, emphasizing the importance of understanding quality attributes. Sommerville (10th Ed., Chapter 8) also covers architectural design and introduces architectural styles.

---

## 4. Architectural Styles (Architectural Patterns)

Architectural styles are predefined solutions to common design problems, providing a vocabulary for describing and organizing software systems. They represent a high-level strategy for structuring a software system.

**Key Concepts:**

*   **Style:** A set of architectural design decisions that constrain design choices for a system.
*   **Pattern:** A reusable solution to a commonly occurring problem within a given context in software design. Architectural styles can be seen as a collection of related architectural patterns.

Here are some common architectural styles:

### 4.1. Layered Architecture

*   **Description:** Organizes the system into horizontal layers, each providing a service to the layer above it and consuming services from the layer below.
*   **Structure:** Typically includes Presentation Layer, Application/Business Logic Layer, Data Access Layer, and Database Layer.
*   **Advantages:**
    *   Separation of concerns.
    *   Easier maintenance and evolution of layers.
    *   Supports reusability of services.
*   **Disadvantages:**
    *   Can introduce performance overhead due to inter-layer communication.
    *   Can be difficult to manage dependencies between layers.
    *   Not ideal for systems where performance is extremely critical.
*   **Example:** Most web applications follow a layered architecture: client-side UI (presentation), server-side business logic, and database.

    ```
    +-------------------+
    | Presentation Layer|
    +-------------------+
            |
            v
    +-------------------+
    | Business Logic L. |
    +-------------------+
            |
            v
    +-------------------+
    | Data Access Layer |
    +-------------------+
            |
            v
    +-------------------+
    |     Database      |
    +-------------------+
    ```

### 4.2. Client-Server Architecture

*   **Description:** Divides the system into two main parts: clients that request services and servers that provide services.
*   **Structure:** Clients initiate requests, and servers respond to these requests.
*   **Advantages:**
    *   Centralized data and logic management on the server.
    *   Easier to update and maintain on the server side.
    *   Scalability can be achieved by adding more servers or clients.
*   **Disadvantages:**
    *   Server can become a bottleneck if overloaded.
    *   Requires network communication, which can introduce latency.
    *   If the server fails, the entire system may become unavailable.
*   **Example:** Web browsers (clients) requesting web pages from web servers. Email clients connecting to email servers.

### 4.3. Model-View-Controller (MVC)

*   **Description:** A popular architectural pattern for user interfaces that separates an application into three interconnected components.
    *   **Model:** Represents the data and business logic of the application.
    *   **View:** Displays the data from the Model to the user and handles user input.
    *   **Controller:** Acts as an intermediary, handling user input, updating the Model, and selecting the appropriate View to display.
*   **Advantages:**
    *   Promotes separation of concerns between data, presentation, and control flow.
    *   Enhances code reusability and maintainability.
    *   Facilitates parallel development (UI designers work on View, developers on Model/Controller).
*   **Disadvantages:**
    *   Can be overly complex for very simple applications.
    *   The Controller can become bloated if not managed carefully.
*   **Example:** Web frameworks like Ruby on Rails, Django (Python), and Spring MVC (Java) are built around the MVC pattern.

### 4.4. Microservices Architecture

*   **Description:** Structures an application as a collection of small, independent services, each running in its own process and communicating over a network, often using lightweight protocols like HTTP.
*   **Structure:** Each service is responsible for a specific business capability and can be developed, deployed, and scaled independently.
*   **Advantages:**
    *   **High Scalability:** Individual services can be scaled independently.
    *   **Technology Diversity:** Different services can use different technologies.
    *   **Resilience:** Failure in one service is less likely to affect the entire application.
    *   **Agility:** Easier to update and deploy individual services without impacting the whole system.
*   **Disadvantages:**
    *   **Increased Complexity:** Managing many distributed services.
    *   **Inter-service Communication Overhead:** Network latency and complexity of distributed transactions.
    *   **Operational Overhead:** Requires sophisticated deployment and monitoring tools.
*   **Example:** Netflix's architecture is a well-known example of a microservices-based system.

### 4.5. Event-Driven Architecture

*   **Description:** Systems designed around the production, detection, consumption of, and reaction to events. An event is a significant change in state.
*   **Structure:** Components communicate by emitting and reacting to events, often asynchronously. This can involve event buses, message queues, or event streams.
*   **Advantages:**
    *   **Loose Coupling:** Components are not directly aware of each other.
    *   **Scalability:** Easy to add new consumers of events.
    *   **Responsiveness:** Systems can react to changes in real-time.
*   **Disadvantages:**
    *   **Complexity in debugging and tracking:** Following the flow of events can be challenging.
    *   **Eventual Consistency:** Data might not be immediately consistent across all components.
*   **Example:** E-commerce platforms where an "order placed" event triggers fulfillment, notification, and inventory updates.

### 4.6. Peer-to-Peer Architecture

*   **Description:** All participants (peers) in the system have equal capabilities and responsibilities. They can act as both clients and servers.
*   **Structure:** No central server; nodes directly communicate with each other.
*   **Advantages:**
    *   **No Single Point of Failure:** If one peer fails, the system can continue to operate.
    *   **Scalability:** Adding more peers increases capacity.
    *   **Cost-Effective:** Can leverage distributed resources.
*   **Disadvantages:**
    *   **Complexity in management and coordination:** Discovering peers and managing data consistency.
    *   **Security challenges:** Ensuring trust and data integrity.
*   **Example:** File-sharing networks (like BitTorrent) and some blockchain technologies.

---

## 5. Architectural Trade-offs

Making architectural decisions often involves balancing competing concerns. There is rarely a "perfect" architecture; instead, we aim for the best fit given the constraints and priorities.

*   **Performance vs. Maintainability:** Highly optimized, tightly coupled code might be fast but difficult to maintain.
*   **Scalability vs. Simplicity:** Microservices offer scalability but are more complex to manage than a monolithic application.
*   **Security vs. Usability:** Strict security measures might make the system harder for users to interact with.
*   **Cost vs. Features:** Implementing advanced architectural features can increase development and operational costs.

**Reference:** Sommerville (2020, Chapter 6) discusses the importance of considering trade-offs when designing software architectures.

---

## 6. Documenting Architecture

Architectural decisions must be documented clearly. Common methods include:

*   **Architectural Views:** Different perspectives on the architecture (e.g., logical view, process view, development view, physical view).
*   **Architecture Description Language (ADL):** Formal languages for describing architecture.
*   **UML Diagrams:** Component diagrams, deployment diagrams, and package diagrams can represent architectural elements.
*   **Architecture Decision Records (ADRs):** Concise records of significant architectural decisions, their context, and consequences. This is particularly useful in agile environments. (Pressman, 8th Ed., p. 470)

---

## Practice Questions

**Question 1:**

Which of the following is NOT a primary driver for architectural decisions?

a) Performance requirements
b) User interface color schemes
c) Security constraints
d) Business objectives

**Answer:** b) User interface color schemes. While UI design is important, specific color schemes are typically considered a detail of the presentation layer and not a fundamental driver of the overall system architecture. Architectural decisions focus on higher-level concerns that impact the system's fundamental structure and quality attributes.

**Question 2:**

In a Layered Architecture, what is the primary purpose of the Data Access Layer?

a) To present information to the user.
b) To handle business logic and complex computations.
c) To interact with the database and manage data persistence.
d) To define the overall system structure.

**Answer:** c) To interact with the database and manage data persistence. The Data Access Layer is responsible for abstracting the details of data storage and retrieval, allowing other layers to interact with data through a defined interface.

**Question 3:**

What is a key advantage of the Microservices Architecture?

a) Simplicity of deployment and management.
b) Reduced complexity in inter-service communication.
c) Independent scalability of individual services.
d) Eliminates the need for APIs.

**Answer:** c) Independent scalability of individual services. Microservices allow specific services that experience high load to be scaled up without affecting other parts of the system, contributing to overall resilience and performance.

**Question 4:**

Describe the trade-off between performance and maintainability in software architecture, providing an example.

**Answer:**

The trade-off between performance and maintainability arises when optimizing for one can negatively impact the other.

*   **Performance Optimization:** Often involves tightly coupling components, using low-level optimizations, or embedding logic directly where it's needed for speed. This can lead to code that is difficult to understand, modify, or extend without introducing unintended side effects.
*   **Maintainability:** Favors modularity, clear interfaces, loose coupling, and separation of concerns. This makes the code easier to read, test, and change, but might introduce slight performance overhead due to inter-component communication or abstractions.

**Example:**
Consider a system processing a high volume of financial transactions. To maximize performance, a developer might write highly optimized, intertwined code within a single large module. This might achieve excellent transaction throughput. However, if a new regulatory requirement necessitates a change in how certain transactions are logged, modifying this tightly coupled code could be very difficult, time-consuming, and error-prone, thus impacting maintainability.

In contrast, an architecture that separates transaction processing, logging, and reporting into distinct, loosely coupled services might have a slightly higher per-transaction processing cost due to inter-service communication. However, if the logging requirement changes, only the logging service needs to be modified and redeployed, demonstrating high maintainability.

**Question 5:**

What are Architectural Decision Records (ADRs) and why are they useful, especially in Agile contexts?

**Answer:**

Architectural Decision Records (ADRs) are short, plain text files that capture a single, significant architectural decision, the context surrounding the decision, and its consequences.

**Usefulness in Agile Contexts:**

*   **Capturing Evolving Decisions:** Agile development is iterative, and architectural decisions can evolve. ADRs provide a lightweight way to document these decisions as they are made, rather than waiting for a large, formal design document.
*   **Communicating Rationale:** They explain *why* a decision was made, which is crucial for onboarding new team members and for understanding the system's evolution. This aligns with the Agile principle of "responding to change over following a plan."
*   **Context for Future Decisions:** ADRs provide historical context, helping teams avoid repeating past mistakes and understand the reasoning behind current architectural choices.
*   **Lightweight Documentation:** They are easy to create, store (often alongside the code in version control), and maintain, fitting well with agile practices that prioritize working software over comprehensive documentation.

---

## Important Points to Remember

*   **Architecture is about "what matters most"**: Focus on decisions that are difficult to change later and have a significant impact on the system's quality attributes.
*   **Quality Attributes are key drivers**: Always consider performance, scalability, reliability, security, maintainability, etc., when making architectural choices.
*   **Trade-offs are inevitable**: No architecture is perfect. Understand the compromises you are making.
*   **Styles are starting points**: Architectural styles provide useful patterns, but they may need to be adapted or combined to suit specific project needs.
*   **Documentation is crucial**: Clearly document architectural decisions and rationale for effective communication and future maintenance.
*   **Architecture is not static**: It evolves as the system and its requirements change.

---

This concludes our overview of architectural considerations. Understanding these principles is fundamental to building robust, scalable, and maintainable software systems.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
