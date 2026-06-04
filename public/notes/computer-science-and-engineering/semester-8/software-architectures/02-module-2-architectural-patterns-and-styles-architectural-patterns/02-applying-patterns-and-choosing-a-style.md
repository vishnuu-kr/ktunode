---
title: "Applying Patterns and Choosing a Style"
subject: "SOFTWARE ARCHITECTURES"
module: "Module 2: Architectural Patterns and Styles:   Architectural Patterns"
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8c9b7"
status: "completed"
scrapedAt: "2026-05-20T17:26:17.022Z"
---
# Software Architectures: Module 2 - Architectural Patterns and Styles

## Topic: Applying Patterns and Choosing a Style

### Learning Outcomes:

*   **LO1:** Understand the role of architectural patterns in guiding the design of software systems.
*   **LO2:** Identify and describe common architectural patterns and their characteristics.
*   **LO3:** Evaluate the suitability of different architectural styles for specific problem domains.
*   **LO4:** Understand the process of selecting and applying appropriate architectural patterns and styles.

---

### 1. The Role of Architectural Patterns in Guiding Software Design (LO1)

Architectural patterns are **reusable solutions to commonly occurring problems within a given context in software architecture**. They provide a blueprint or template for organizing the structure and behavior of a software system.

*   **Why are patterns important?**
    *   **Reusability:** Avoid reinventing the wheel. Leverage proven solutions that have been tested and refined over time.
    *   **Common Vocabulary:** Facilitate communication among developers, architects, and stakeholders. A shared understanding of patterns simplifies discussions about design choices.
    *   **Guidance for Design:** Provide a structured approach to tackling complex design challenges.
    *   **Maintainability and Evolution:** Well-chosen patterns can lead to systems that are easier to understand, modify, and extend.
    *   **Quality Attributes:** Patterns often directly address and promote specific quality attributes like performance, scalability, reliability, and maintainability.
    *   **Risk Mitigation:** By using established patterns, you reduce the risk of making poor design decisions.

*   **Key characteristics of a pattern:**
    *   **Name:** A descriptive name that represents the pattern.
    *   **Problem:** The context or situation where the pattern applies.
    *   **Solution:** The core elements of the pattern and how they are organized. This includes components, their responsibilities, and their relationships.
    *   **Consequences:** The trade-offs and implications of using the pattern (both positive and negative). This helps in evaluating its suitability.

---

### 2. Common Architectural Patterns and Their Characteristics (LO2)

Here are some fundamental architectural patterns:

#### 2.1. Layered Architecture

*   **Problem:** How to organize a system into logical layers to promote separation of concerns and improve maintainability.
*   **Solution:** Divide the system into horizontal layers, each with a specific responsibility. Higher layers call services provided by lower layers.
    *   **Typical Layers:**
        *   **Presentation Layer (UI):** Handles user interaction and displays information.
        *   **Application/Business Logic Layer:** Contains the core business rules and functionality.
        *   **Data Access Layer:** Manages interactions with the data storage.
        *   **Database Layer:** The actual data storage.
*   **Characteristics:**
    *   **Separation of Concerns:** Each layer focuses on a specific aspect of the system.
    *   **Abstraction:** Lower layers abstract away complexity from higher layers.
    *   **Maintainability:** Changes in one layer have minimal impact on other layers, as long as the interfaces are maintained.
    *   **Testability:** Layers can be tested independently.
*   **Consequences:**
    *   **Performance Overhead:** Requests might need to pass through multiple layers, introducing latency.
    *   **Can be rigid:** Strict layering can sometimes make it difficult to implement cross-cutting concerns.
    *   **Complexity for simple applications:** Might be overkill for very small or straightforward systems.
*   **Example:** A typical web application with a browser (Presentation), web server (Application Logic), and database.

#### 2.2. Client-Server Architecture

*   **Problem:** How to distribute functionality between two or more parties where one party (the client) requests a service from another party (the server).
*   **Solution:**
    *   **Client:** Initiates requests for services. Typically deals with the user interface.
    *   **Server:** Provides services and responds to client requests. Manages resources.
*   **Characteristics:**
    *   **Centralized Resource Management:** Servers manage shared resources.
    *   **Scalability:** Can scale by adding more clients or enhancing server capacity.
    *   **Accessibility:** Clients can access services from anywhere.
*   **Consequences:**
    *   **Server Bottleneck:** If the server cannot handle the load, performance degrades for all clients.
    *   **Single Point of Failure:** If the server goes down, clients cannot access services.
    *   **Network Dependency:** Relies heavily on network connectivity.
*   **Example:** Web browsing (browser is client, web server is server), email systems.

#### 2.3. Model-View-Controller (MVC) Pattern

*   **Problem:** How to effectively separate the concerns of data, presentation, and user input in interactive applications.
*   **Solution:** Divides an application into three interconnected components:
    *   **Model:** Represents the data and the business logic. It's responsible for managing the application's state.
    *   **View:** Responsible for presenting the Model to the user. It's typically passive and receives data from the Model.
    *   **Controller:** Handles user input, interacts with the Model to update its state, and selects the appropriate View to display.
*   **Characteristics:**
    *   **Separation of Concerns:** Clearly separates data, presentation, and logic.
    *   **Maintainability:** Easier to maintain and update individual components.
    *   **Reusability:** Views and Models can be reused.
*   **Consequences:**
    *   **Complexity:** Can introduce complexity for simple applications.
    *   **Inter-component communication:** Managing the communication between M, V, and C can be challenging.
*   **Example:** Web frameworks like Ruby on Rails, Django, and many desktop GUI applications.

#### 2.4. Microkernel Architecture (Plugin Architecture)

*   **Problem:** How to design a system that can be extended with new functionality without modifying the core system.
*   **Solution:** Consists of a minimal core system (microkernel) that provides essential, low-level services. Additional features are implemented as plug-ins that can be dynamically loaded and unloaded.
*   **Characteristics:**
    *   **Extensibility:** Easy to add new functionality through plugins.
    *   **Modularity:** The system is highly modular.
    *   **Flexibility:** Can adapt to changing requirements by adding or removing plugins.
*   **Consequences:**
    *   **Complexity of the core:** The microkernel needs to be well-designed to support extensibility.
    *   **Plugin management:** Managing dependencies and interactions between plugins can be challenging.
    *   **Performance:** Plugin execution might introduce overhead.
*   **Example:** Eclipse IDE (core IDE is microkernel, plugins add support for different languages/tools), operating systems.

#### 2.5. Pipe and Filter Architecture

*   **Problem:** How to build a system that processes a stream of data through a sequence of independent processing steps.
*   **Solution:** Data flows through a series of components called "filters," connected by "pipes." Each filter performs a specific transformation on the data and passes it to the next filter via a pipe.
*   **Characteristics:**
    *   **Simplicity:** Easy to understand and implement.
    *   **Reusability:** Filters can be reused in different pipelines.
    *   **Concurrency:** Filters can be run in parallel if the processing steps are independent.
    *   **Maintainability:** New filters can be added or existing ones modified easily.
*   **Consequences:**
    *   **Performance:** Can be inefficient if the data transformation is complex or if there are many filters.
    *   **Not suitable for interactive systems:** Primarily for batch processing or data streaming.
    *   **Error handling:** Managing errors across a pipeline can be complex.
*   **Example:** Unix command-line utilities (e.g., `ls | grep ".txt" | sort`), data processing pipelines in ETL (Extract, Transform, Load) systems.

#### 2.6. Broker Architecture

*   **Problem:** How to manage communication between distributed components that might have different communication protocols or reside on different platforms.
*   **Solution:** A central broker component acts as an intermediary. Clients send requests to the broker, which then routes them to the appropriate server(s). Servers register their services with the broker.
*   **Characteristics:**
    *   **Decoupling:** Clients and servers are decoupled; they don't need to know about each other directly.
    *   **Interoperability:** Facilitates communication between heterogeneous systems.
    *   **Scalability:** Can scale by adding more brokers or servers.
*   **Consequences:**
    *   **Broker as bottleneck:** The broker can become a single point of failure or a performance bottleneck.
    *   **Complexity:** Implementing and managing a broker can be complex.
*   **Example:** Message queues (e.g., RabbitMQ, Kafka), distributed object request brokers (ORBs).

#### 2.7. Peer-to-Peer (P2P) Architecture

*   **Problem:** How to distribute computation and data among network participants without a central server.
*   **Solution:** Each participant (peer) acts as both a client and a server. Peers can initiate requests and provide services to other peers.
*   **Characteristics:**
    *   **Decentralization:** No central point of control or failure.
    *   **Scalability:** Scales well as more peers join the network.
    *   **Resilience:** System can continue to function even if some peers fail.
*   **Consequences:**
    *   **Discovery:** Finding other peers and services can be challenging.
    *   **Security:** Ensuring security and trust among peers can be difficult.
    *   **Resource management:** Peers might have varying resources, affecting performance.
*   **Example:** File sharing networks (e.g., BitTorrent), blockchain technologies.

---

### 3. Evaluating Suitability of Architectural Styles (LO3)

Architectural **styles** are broader classifications or families of patterns that share common characteristics and constraints. They often represent a high-level organizational principle.

#### 3.1. What is an Architectural Style?

*   A named collection of architectural design decisions that are applicable in a given context, constraining architectural design decisions for a particular system.
*   Styles define a vocabulary of components, connectors, and configurations.
*   Examples: Layered, Client-Server, Event-Driven, Microservices, Service-Oriented Architecture (SOA).

#### 3.2. Factors to Consider When Evaluating Styles:

*   **Quality Attributes (Non-Functional Requirements):** This is the most critical factor.
    *   **Performance:** Does the style support the required response times and throughput? (e.g., Layered might have overhead, P2P might be variable).
    *   **Scalability:** Can the system handle increasing load? (e.g., Microservices, P2P are often good for scalability).
    *   **Availability/Reliability:** How tolerant is the system to failures? (e.g., P2P, Broker with replication).
    *   **Maintainability/Modifiability:** How easy is it to change and update the system? (e.g., Microkernel, Layered, Microservices).
    *   **Security:** Does the style inherently support the required security mechanisms?
    *   **Testability:** How easy is it to test the system? (e.g., MVC is generally good).
    *   **Usability:** How does the style impact user experience?

*   **Problem Domain:**
    *   **Data Processing:** Pipe and Filter is excellent for batch processing.
    *   **User Interaction:** MVC is ideal for GUI applications.
    *   **Distributed Systems:** Client-Server, Broker, P2P are relevant.
    *   **Extensible Systems:** Microkernel is designed for extensibility.

*   **Organizational Constraints:**
    *   **Team Size and Skills:** Some styles (e.g., Microservices) require larger, more experienced teams.
    *   **Development Methodology:** Agile vs. Waterfall might favor different styles.
    *   **Existing Infrastructure:** What technologies and platforms are already in place?

*   **Project Goals and Constraints:**
    *   **Time to Market:** Simpler styles might lead to faster initial development.
    *   **Budget:** Some styles require more investment in infrastructure or tooling.

#### 3.3. Examples of Styles and Their Suitability:

*   **Layered:**
    *   **Good for:** Traditional enterprise applications, systems with clear separation of concerns.
    *   **Less suitable for:** Highly interactive, real-time systems that require very low latency.
*   **Client-Server:**
    *   **Good for:** Web applications, distributed services.
    *   **Less suitable for:** Systems requiring high resilience against server failure without failover mechanisms.
*   **Event-Driven:** (Components react to events rather than direct requests)
    *   **Good for:** Real-time systems, systems with loosely coupled components, asynchronous processing.
    *   **Less suitable for:** Systems requiring synchronous, tight control over interactions.
*   **Microservices:** (System built as a suite of small, independent services)
    *   **Good for:** Large, complex systems, organizations with multiple teams, enabling independent deployment and scalability of services.
    *   **Less suitable for:** Small, simple applications; teams with limited operational expertise.
*   **SOA (Service-Oriented Architecture):** (System built as a collection of services that communicate over a network, often with a focus on enterprise-wide integration)
    *   **Good for:** Large enterprises needing to integrate diverse applications, promoting reusability of business functions.
    *   **Less suitable for:** Simple applications where the overhead of service discovery and communication is unnecessary.

---

### 4. Process of Selecting and Applying Patterns and Styles (LO4)

Choosing the right architectural pattern and style is an iterative process that involves understanding the problem and its context.

#### 4.1. Key Steps in the Selection Process:

1.  **Understand Requirements and Constraints:**
    *   **Functional Requirements:** What the system *does*.
    *   **Non-Functional Requirements (Quality Attributes):** This is paramount. Identify the most critical quality attributes (e.g., performance, scalability, security, maintainability). Quantify them if possible (e.g., "response time must be less than 200ms").
    *   **Domain Characteristics:** What kind of problem are you solving? (e.g., data processing, user interaction, real-time control).
    *   **Organizational and Technical Constraints:** Team skills, budget, existing infrastructure, deadlines.

2.  **Identify Candidate Patterns and Styles:**
    *   Based on the requirements and domain, brainstorm or research potential architectural patterns and styles that could address the problem.
    *   Consider common solutions for similar problems.

3.  **Evaluate Candidates Against Requirements:**
    *   For each candidate style/pattern, analyze how well it addresses the identified quality attributes and domain needs.
    *   Document the pros and cons of each candidate in the context of your specific project.
    *   **Prototyping and Proofs of Concept (PoCs):** For critical quality attributes, consider building small prototypes to test how a particular style or pattern performs.

4.  **Select the Best Fit (or Combination):**
    *   Choose the pattern(s) and style(s) that offer the best balance of meeting requirements and managing trade-offs.
    *   It's common to use a primary style and then apply specific patterns within that style or to address particular sub-problems.

5.  **Refine and Document:**
    *   Once a choice is made, elaborate on the chosen architecture.
    *   Clearly document the selected style, the patterns used, the components, their responsibilities, and their interactions.
    *   Explain the rationale behind the choices, especially how they address key quality attributes.

6.  **Iterate and Adapt:**
    *   Architecture is not static. Be prepared to revisit and adapt your architectural decisions as the system evolves and new requirements emerge.

#### 4.2. Important Considerations During Application:

*   **Don't Force Patterns:** A pattern should solve a problem, not create new ones. If a pattern doesn't fit, don't force it.
*   **Hybrid Architectures:** Real-world systems often combine multiple patterns and styles. For example, a web application might use a Layered style, with MVC within the presentation layer, and a Client-Server interaction between the browser and the backend.
*   **Granularity Matters:** Patterns can be applied at different levels of granularity, from the overall system architecture to specific modules or components.
*   **Trade-offs are Inevitable:** Every architectural decision involves trade-offs. Understand these trade-offs and choose the ones that align with your project's priorities.
*   **Communication is Key:** Ensure that the architectural decisions are clearly communicated to the development team.

---

### Practice Questions/Exercises

**Question 1 (LO1, LO2):**
You are designing an e-commerce application. One of your key requirements is to ensure that user requests for product information are handled efficiently, and that product data can be updated independently of the user interface.
Which architectural pattern would be most suitable for structuring the core application logic and data handling, and why?

**Question 2 (LO3):**
Consider a system that needs to process a continuous stream of sensor data for real-time analysis and anomaly detection. The processing involves several sequential steps: data sanitization, feature extraction, and anomaly scoring.
Which architectural style would you recommend, and why? What are the potential drawbacks of this style in this context?

**Question 3 (LO4):**
Your team is tasked with building a new messaging platform. Key requirements include high availability, low latency messaging, and the ability for users to discover and connect with each other.
Outline a process for selecting an appropriate architectural style and at least two architectural patterns that could be employed, justifying your choices based on the requirements.

**Question 4 (LO2):**
Explain the concept of "Separation of Concerns" and how it is achieved in the Layered Architecture and the MVC pattern.

**Question 5 (LO3):**
Compare and contrast the Microkernel Architecture and the Microservices Architecture in terms of their primary goals, strengths, and weaknesses. When might you choose one over the other?

---

### Answers to Practice Questions

**Answer 1 (LO1, LO2):**
The **Layered Architecture** would be highly suitable.
*   **Why:**
    *   **Separation of Concerns:** It allows you to separate the product data management (Data Access Layer) from the logic that serves it to the user (Application/Business Logic Layer), and from the user interface itself (Presentation Layer).
    *   **Independent Updates:** Changes to the UI (Presentation Layer) would have minimal impact on the product data handling (Data Access Layer), and vice-versa, as long as the interfaces between layers remain consistent.
    *   **Efficiency:** The Application Layer can efficiently query and manage product data from the Data Access Layer.

**Answer 2 (LO3):**
The **Pipe and Filter Architecture** would be highly recommended.
*   **Why:**
    *   **Stream Processing:** It's designed for processing data streams sequentially through a series of independent filters.
    *   **Modularity and Reusability:** Each processing step (sanitization, feature extraction, anomaly scoring) can be implemented as a separate filter, making them reusable and easier to maintain or replace.
    *   **Concurrency:** Some filters could potentially run in parallel if the data flow allows, improving processing throughput.
*   **Potential Drawbacks:**
    *   **Latency:** If there are many filters or complex transformations, the overall latency of processing a single data point might increase.
    *   **Data Format:** All filters must agree on the data format passed between them, which can sometimes be restrictive.
    *   **Error Handling:** Managing errors gracefully across a long pipeline can be challenging.

**Answer 3 (LO4):**
**Process for Selection:**

1.  **Requirement Analysis:**
    *   **High Availability:** The system must remain operational even if some components fail.
    *   **Low Latency Messaging:** Messages should be delivered quickly.
    *   **Discoverability:** Users should be able to find and connect with each other easily.
    *   **Scalability:** The system should handle a growing number of users and messages.
    *   **Maintainability:** The system should be easy to update and manage.

2.  **Identify Candidate Styles/Patterns:**
    *   **Styles:** Microservices, Event-Driven Architecture.
    *   **Patterns:** Client-Server (for user-backend interaction), Broker (for message routing), Publish-Subscribe (for efficient message distribution).

3.  **Evaluate Candidates:**
    *   **Microservices:** Excellent for independent deployment, scalability, and fault isolation (supporting high availability). Different services can manage different aspects (user profiles, messaging).
    *   **Event-Driven Architecture (with Pub/Sub):** Fits well with low-latency messaging. A central messaging bus (Broker) can route events efficiently. Users publishing messages and other users subscribing to topics aligns with this.
    *   **Broker Pattern:** Essential for routing messages between services and potentially for user-to-user communication orchestration.
    *   **Client-Server:** The user's device will act as a client to various backend services.

4.  **Select Best Fit:** A **Microservices Architecture** combined with an **Event-Driven style** leveraging **Broker** and **Publish-Subscribe** patterns seems most appropriate.

    *   **Justification:**
        *   **High Availability:** Microservices allow for fault isolation; if one service goes down, others can continue. Redundancy can be built into services and the broker.
        *   **Low Latency Messaging:** A well-tuned message broker and pub/sub model can achieve low latency for message delivery.
        *   **Discoverability:** Services within the microservices ecosystem can register with a service registry, and users can interact with specific services (e.g., a "friend-finding" service).
        *   **Scalability:** Individual microservices can be scaled independently based on their load.
        *   **Maintainability:** Smaller, focused services are easier to manage and update.

**Answer 4 (LO2):**
**Separation of Concerns** is the principle of dividing a system into distinct sections, where each section addresses a specific concern or functionality.

*   **Layered Architecture:** Achieves separation of concerns by dividing the system into horizontal layers (e.g., Presentation, Application, Data Access). Each layer has a specific responsibility and only interacts with the layer directly below it. For example, the Presentation layer is solely concerned with UI, while the Data Access layer is concerned only with database interactions.
*   **MVC Pattern:** Achieves separation of concerns by dividing the application into three distinct parts:
    *   **Model:** Manages the data and business logic.
    *   **View:** Handles the presentation of data to the user.
    *   **Controller:** Manages user input and orchestrates interactions between the Model and View.
    This separation allows UI logic to be independent of business logic and data.

**Answer 5 (LO3):**
*   **Microkernel Architecture:**
    *   **Primary Goal:** To create a system that is highly extensible and can be extended with new functionality through plug-ins without modifying the core system.
    *   **Strengths:** Excellent extensibility, modularity, flexibility.
    *   **Weaknesses:** The microkernel itself can become complex, plugin management can be difficult, potential performance overhead from plugin execution.
    *   **When to Choose:** When the system's core functionality is stable, but you anticipate frequent addition of new, diverse features or customization needs (e.g., IDEs, specialized software platforms).

*   **Microservices Architecture:**
    *   **Primary Goal:** To build a complex application as a suite of small, independent, and loosely coupled services that can be developed, deployed, and scaled independently.
    *   **Strengths:** High scalability, resilience, technology diversity, faster development cycles, independent deployment, better fault isolation.
    *   **Weaknesses:** Increased operational complexity (managing many services), distributed system challenges (communication, consistency), potential for higher infrastructure costs.
    *   **When to Choose:** For large, complex applications where agility, scalability, and independent team development are critical. It's less suitable for very small, simple applications due to the overhead.

---

### Important Points to Remember:

*   **Quality Attributes Drive Architectural Decisions:** Always prioritize non-functional requirements when choosing styles and patterns.
*   **Patterns are Solutions, Not Dogmas:** Apply patterns where they solve a problem effectively. Don't force them.
*   **Trade-offs are Inevitable:** Understand the pros and cons of each choice.
*   **Communication:** Clearly document and communicate architectural decisions to the team.
*   **Evolution:** Architecture is not static; be prepared to adapt as the system grows.
*   **Hybrid Approaches:** Real-world systems often combine multiple patterns and styles.
*   **Context is King:** The best architecture depends entirely on the specific problem, domain, and constraints.
