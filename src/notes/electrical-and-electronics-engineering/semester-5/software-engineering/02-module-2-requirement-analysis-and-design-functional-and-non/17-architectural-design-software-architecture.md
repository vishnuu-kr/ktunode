---
title: "Architectural Design - Software Architecture"
subject: "SOFTWARE ENGINEERING"
module: "Module 2: Requirement Analysis and Design: Functional and non"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f36349"
status: "completed"
scrapedAt: "2026-05-23T16:24:22.535Z"
---
# Module 2: Requirement Analysis and Design - Architectural Design: Software Architecture

## 1. Introduction to Software Architecture

### 1.1 What is Software Architecture?

*   **Definition:** Software architecture is the fundamental structure of a software system. It is concerned with the high-level structure of the system, the way that structure is realized in components and their interfaces, and the principles governing its design and evolution. (Sommerville, *Engineering Software Products*, 2020)
*   **Key Idea:** It's the blueprint of the system, defining the building blocks and how they interact. It’s about making critical design decisions early in the lifecycle that are hard to change later.
*   **Analogy:** Like the architectural design of a building, which dictates the foundation, structural elements, room layout, and utilities, software architecture defines the fundamental components, their relationships, and the system's overall organization.

### 1.2 Importance of Software Architecture

*   **Facilitates Communication:** Provides a common understanding for stakeholders (developers, managers, clients). (Pressman, *A Practitioner's Approach*, 2014)
*   **Enables Reuse:** Well-defined architectural components can be reused across different projects.
*   **Manages Complexity:** Breaks down a large, complex system into manageable parts.
*   **Impacts Quality Attributes:** Directly influences non-functional requirements like performance, security, maintainability, scalability, and reliability.
*   **Cost-Effectiveness:** Early architectural decisions can prevent costly rework later.
*   **System Stakeholders:** Architecture is important to different stakeholders for different reasons:
    *   **Developers:** Understand how to build the system, modularity.
    *   **Managers:** Understand progress, identify risks, estimate costs.
    *   **Clients:** Understand how the system meets their requirements, potential for future expansion.

### 1.3 Architectural Design Decisions

*   **Nature of Decisions:** Architectural decisions are high-level, strategic, and have a long-term impact. They are difficult and expensive to change once implemented.
*   **Key Decision Areas:**
    *   **System Organization:** How the system is divided into subsystems.
    *   **Component Identification:** Defining the key components and their responsibilities.
    *   **Component Interaction:** How components communicate and exchange data.
    *   **Architectural Patterns:** Choosing established solutions for recurring design problems.
    *   **Technology Choices:** Selecting programming languages, frameworks, databases, etc.
    *   **Deployment Strategy:** How the system will be deployed and run.

## 2. Software Architectural Design Process

### 2.1 Overview

*   The architectural design process is iterative and closely tied to the requirements analysis and detailed design phases.
*   It involves understanding requirements, identifying architectural styles, defining components, and documenting the architecture.

### 2.2 Key Activities

1.  **Identify Stakeholder Needs and Requirements:** Understand both functional and non-functional requirements. Non-functional requirements (quality attributes) are particularly crucial for architectural decisions.
2.  **Define Architectural Goals and Constraints:** What are the primary objectives the architecture must achieve? What are the limitations (budget, time, existing systems)?
3.  **Select an Architectural Style/Pattern:** Choose an appropriate high-level structure based on the system's requirements.
4.  **Decompose the System:** Divide the system into subsystems and components.
5.  **Define Interfaces:** Specify how components interact with each other.
6.  **Identify Key Components:** Detail the core functionalities and responsibilities of major components.
7.  **Evaluate the Architecture:** Assess the architecture against quality attributes and constraints.
8.  **Document the Architecture:** Create clear and comprehensive documentation.

*(Sommerville, *Software Engineering*, 2015, Chapter 7)*

## 3. Architectural Styles and Patterns

### 3.1 What are Architectural Styles?

*   **Definition:** An architectural style is a set of design principles, properties, and constraints that define a family of systems. It provides a vocabulary of components and rules for composing them. (Sommerville, *Engineering Software Products*, 2020)
*   **Purpose:** They offer proven solutions to common design problems and help achieve specific quality attributes.
*   **Key Idea:** Think of them as design templates or blueprints that have been refined over time.

### 3.2 Common Architectural Styles and Patterns

*   **Layered Architecture:**
    *   **Concept:** Organizes the system into horizontal layers, each performing a specific role or set of responsibilities. Layers interact only with the layer directly below them.
    *   **Example:** A typical web application might have layers for Presentation, Business Logic, Data Access, and Database.
    *   **Quality Attributes:** Promotes separation of concerns, maintainability. Can impact performance if too many layers are involved.
    *   *(Pressman, *A Practitioner's Approach*, 2014, Chapter 11)*

*   **Client-Server Architecture:**
    *   **Concept:** Divides the system into two main types of components: clients (requesting services) and servers (providing services).
    *   **Example:** Web browsers (clients) requesting web pages from web servers.
    *   **Quality Attributes:** Scalability (can add more servers), reliability (if servers are redundant). Can be a bottleneck if the server is overloaded.

*   **Model-View-Controller (MVC):**
    *   **Concept:** Separates an application into three interconnected components:
        *   **Model:** Represents the data and business logic.
        *   **View:** Represents the user interface and displays the model's data.
        *   **Controller:** Handles user input, interacts with the Model, and selects a View to render.
    *   **Example:** Many web frameworks (like Ruby on Rails, Spring MVC) use this pattern.
    *   **Quality Attributes:** Promotes separation of concerns, maintainability, testability.

*   **Event-Driven Architecture:**
    *   **Concept:** Systems respond to events (changes in state, messages). Components communicate by emitting and reacting to events.
    *   **Example:** A notification system where an event (e.g., "new message") triggers actions in other components (e.g., sending an email, displaying a popup).
    *   **Quality Attributes:** Highly decoupled, can be scalable. Can be complex to manage event flow and ensure delivery.
    *   *(Sommerville, *Software Engineering*, 2015, Chapter 7)*

*   **Microservices Architecture:**
    *   **Concept:** Structures an application as a collection of small, independent services, each running in its own process and communicating over a network.
    *   **Example:** Netflix, Amazon are well-known examples of systems built with microservices.
    *   **Quality Attributes:** High scalability, resilience, independent deployment. Can introduce operational complexity, distributed transaction challenges.
    *   *(Sommerville, *Engineering Software Products*, 2020, Chapter 6)*

*   **Pipe and Filter Architecture:**
    *   **Concept:** Data flows through a sequence of processing steps (filters), connected by pipes. Each filter transforms the data it receives and passes it to the next filter.
    *   **Example:** Unix command-line tools (e.g., `ls | grep ".txt" | wc -l`).
    *   **Quality Attributes:** Good for processing streams of data, easy to add new filters. Performance can be an issue if filters are slow.

### 3.3 Choosing the Right Style

*   **Consideration Factors:**
    *   **System Requirements:** What are the primary goals? (e.g., performance, security, usability)
    *   **Quality Attributes:** Which non-functional requirements are most critical?
    *   **Organizational Capabilities:** Does the team have the expertise to implement and manage a particular style?
    *   **Existing Systems:** Integration with legacy systems.

*(Pressman, *A Practitioner's Approach*, 2014, Chapter 11)*

## 4. Quality Attributes and Architecture

### 4.1 Impact of Architecture on Quality Attributes

*   Architectural decisions have a profound impact on how well a system meets its quality attributes (non-functional requirements).
*   **Key Quality Attributes Influenced by Architecture:**
    *   **Performance:** Response time, throughput, resource utilization. (e.g., Layered architecture might add overhead)
    *   **Scalability:** Ability to handle increased load. (e.g., Client-Server and Microservices are good for scalability)
    *   **Reliability:** Availability, fault tolerance, robustness. (e.g., Redundant servers in Client-Server)
    *   **Security:** Protection against unauthorized access, data integrity.
    *   **Maintainability:** Ease of modifying, fixing bugs, adding features. (e.g., Layered and MVC promote maintainability)
    *   **Usability:** Ease of use for end-users.
    *   **Testability:** Ease of testing components and the system. (e.g., MVC and Microservices can improve testability)

### 4.2 Architectural Trade-offs

*   It's rare to achieve all quality attributes perfectly. Architectural decisions often involve trade-offs.
*   **Example:** To achieve high performance, you might sacrifice some degree of maintainability by tightly coupling components. To achieve high availability, you might increase complexity and cost.

*(Sommerville, *Software Engineering*, 2015, Chapter 7)*

## 5. Architectural Design Documentation

### 5.1 Importance of Documentation

*   **Communicating the Design:** Ensures everyone involved understands the system's structure.
*   **Guiding Implementation:** Provides a roadmap for developers.
*   **Facilitating Evolution:** Helps in understanding and modifying the system later.
*   **Basis for Evaluation:** Allows for review and assessment of the design.

### 5.2 Key Elements of Architectural Documentation

*   **Views:** Presenting the architecture from different perspectives (e.g., logical view, process view, development view, physical view). (Sommerville, *Engineering Software Products*, 2020)
*   **Component Descriptions:** Detailing the responsibilities, interfaces, and dependencies of each component.
*   **Interfaces:** Defining how components interact, including protocols, data formats, and expected behavior.
*   **Rationale:** Explaining the reasons behind key architectural decisions and trade-offs.
*   **Constraints:** Listing any design or implementation constraints.

*(Pressman, *A Practitioner's Approach*, 2014, Chapter 11)*

## 6. Connection to Course Outcomes

*   **CO1 (Interpret software process models and core activities, including handling changes with techniques like prototyping and incremental delivery):** Architectural design is a core activity in many process models. Understanding architecture helps in planning for changes and incremental delivery by defining modular components.
*   **CO3 (Prepare Software Requirement Specification and Software Design for a given problem):** Architectural design is the first step in software design. This module directly addresses how to design the high-level structure of a software system.
*   **CO4 (Interpret object-oriented design principles, design patterns, software testing methods...):** Architectural patterns (like MVC) are high-level design patterns. The architectural style chosen directly impacts how well the system can be tested and designed using OO principles.
*   **CO5 (Describe software review techniques and code management principles, and software evolution processes and maintenance strategies):** Architectural design significantly impacts maintainability and evolution. Reviews are crucial for validating the architectural design.
*   **CO6 (Make use of software project management concepts... with proper application of SCRUM, Kanban and Lean frameworks):** Architectural decisions need to be made in conjunction with project management aspects like estimation and planning. Agile frameworks emphasize iterative architectural development.

## 7. Key Points to Remember

*   **Architecture is about the "big picture" and fundamental structure.**
*   **Architectural decisions are high-impact and hard to change.**
*   **Quality attributes (non-functional requirements) are heavily influenced by architecture.**
*   **Architectural styles provide reusable solutions to common design problems.**
*   **Clear documentation is essential for communicating and evolving the architecture.**
*   **Trade-offs are inevitable in architectural design.**

## 8. Practice Questions

**Question 1:** Define software architecture and explain its significance in the software development lifecycle.
**Answer:** Software architecture is the fundamental structure of a software system, encompassing its components, their relationships, and the principles governing its design and evolution. Its significance lies in its ability to facilitate communication among stakeholders, manage complexity, enable reuse, and crucially, impact critical quality attributes such as performance, scalability, and maintainability. Early architectural decisions are vital as they are difficult and costly to change later in the lifecycle.

**Question 2:** Describe the Layered Architecture style. What are its primary advantages and disadvantages?
**Answer:** The Layered Architecture style organizes a system into horizontal layers, where each layer performs a specific role and typically only interacts with the layer directly below it.
*   **Advantages:** Promotes separation of concerns, making the system easier to understand, develop, and maintain. Changes in one layer have minimal impact on other layers, provided the interfaces remain stable.
*   **Disadvantages:** Can introduce performance overhead due to the multiple layers of communication. Can also lead to inefficient data transfer if layers do not expose the necessary information at their interfaces.

**Question 3:** How does architectural design influence the scalability of a software system? Provide an example of an architectural style that supports scalability.
**Answer:** Architectural design directly impacts scalability by determining how the system can handle increased load or data volume. For instance, a monolithic architecture might be difficult to scale horizontally, whereas a microservices architecture, where the system is broken down into independently deployable services, is inherently designed for scalability. Each service can be scaled independently based on demand. The Client-Server architecture also supports scalability by allowing more server instances to be added to handle increased client requests.

**Question 4:** What is the role of architectural patterns? Give an example of a pattern and explain its purpose.
**Answer:** Architectural patterns are proven, reusable solutions to recurring design problems within a given context. They provide a template or blueprint for designing system structures.
*   **Example: Model-View-Controller (MVC)**
    *   **Purpose:** MVC separates the application logic into three interconnected components:
        *   **Model:** Manages data and business logic.
        *   **View:** Presents the data to the user.
        *   **Controller:** Handles user input and orchestrates interactions between the Model and View.
    *   MVC promotes separation of concerns, making the application more maintainable, testable, and adaptable to changes in the user interface.

**Question 5:** Why is documenting the software architecture important? What key elements should be included in architectural documentation?
**Answer:** Documenting software architecture is crucial for communicating the system's structure to all stakeholders, guiding developers during implementation, facilitating future maintenance and evolution, and serving as a basis for architectural reviews and evaluations.
Key elements that should be included are:
*   **Views:** Different perspectives of the architecture (e.g., logical, physical, process).
*   **Component Descriptions:** Details of each component's responsibilities, interfaces, and dependencies.
*   **Interfaces:** Specifications of how components interact.
*   **Rationale:** Justification for key design decisions and trade-offs.
*   **Constraints:** Any limitations or guidelines that must be followed.

---

This module provides a foundational understanding of how to structure software systems at a high level, which is critical for building robust, maintainable, and scalable applications. It directly supports CO3 by detailing the design phase and informs CO1, CO4, CO5, and CO6 by showing how architectural choices impact various aspects of the software engineering process and project management.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
