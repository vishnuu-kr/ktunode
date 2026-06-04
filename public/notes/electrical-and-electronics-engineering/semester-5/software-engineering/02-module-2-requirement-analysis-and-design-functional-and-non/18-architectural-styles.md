---
title: "Architectural Styles"
subject: "SOFTWARE ENGINEERING"
module: "Module 2: Requirement Analysis and Design: Functional and non"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f3634a"
status: "completed"
scrapedAt: "2026-05-23T16:24:23.252Z"
---
# Module 2: Requirement Analysis and Design: Functional and Non-functional Requirements

## Topic: Architectural Styles

### Introduction

Software architecture defines the fundamental organization of a software system, embodying its structure, behavior, and the relationships between its components. Architectural styles are predefined, reusable architectural designs that provide a vocabulary for describing and reasoning about software architectures. They represent a family of systems that share common structural and behavioral characteristics. Choosing an appropriate architectural style is crucial for system quality attributes like performance, scalability, maintainability, and security.

---

### 1. Key Concepts and Definitions

*   **Software Architecture:** The highest-level view of a system's structure. It encompasses the significant decisions about the organization of a software system, the selection of structural elements and their interfaces, and the composition of these elements into a framework. (Sommerville, 10th ed.)
*   **Architectural Style:** A set of design decisions that constrain the solutions to a given problem, embodying a family of systems. They offer a set of architectural building blocks and a set of rules governing how they can be composed. (Pressman, 8th ed.)
*   **Architectural Pattern:** Similar to architectural styles but often more specific and applicable to a narrower range of problems or components.
*   **Quality Attributes (Non-functional Requirements):** Characteristics of a system that are not related to its specific functions, such as performance, reliability, security, maintainability, usability, etc. Architectural styles significantly influence these attributes.
*   **Top-Down Design:** Starting with the overall system structure and progressively refining it into smaller components. Architectural styles are often a starting point for top-down design.
*   **Bottom-Up Design:** Starting with individual components and then integrating them to form the system. While architectural styles guide the integration, the focus is often on ensuring components adhere to the style's principles.
*   **Separation of Concerns:** A design principle where different aspects of a system are isolated into distinct modules or components, making them easier to manage, understand, and modify. Architectural styles often enforce this.

---

### 2. Learning Outcomes Addressed

This topic primarily addresses:

*   **CO3: Prepare Software Requirement Specification and Software Design for a given problem.** Understanding architectural styles is fundamental to designing a software system that meets both functional and non-functional requirements.
*   **Implicitly addresses other COs:** By understanding architectural styles, one can better interpret how process models (CO1), agile practices (CO2), design principles (CO4), and project management concepts (CO6) are applied.

---

### 3. Common Architectural Styles

Architectural styles are often categorized based on how they structure the system's components and their interactions.

#### 3.1. Layered Architecture

*   **Description:** Organizes the system into horizontal layers, with each layer providing services to the layer above it and consuming services from the layer below. The layers are typically arranged in a hierarchy.
*   **Key Concepts:**
    *   **Abstraction:** Each layer provides an abstract view of the services it offers.
    *   **Encapsulation:** Layers hide their internal workings from other layers.
    *   **Single Responsibility:** Each layer has a specific responsibility.
    *   **Open/Closed Principle:** Layers can be extended without modification, but their interface remains closed.
*   **Typical Layers:**
    *   **Presentation Layer (UI):** Handles user interaction.
    *   **Application/Business Logic Layer:** Implements core business rules and processes.
    *   **Data Access Layer:** Manages interactions with the data storage.
    *   **Database Layer:** The actual data store.
*   **Advantages:**
    *   **Maintainability:** Changes in one layer often don't affect others, promoting modularity.
    *   **Reusability:** Layers can be reused across different applications.
    *   **Testability:** Layers can be tested independently.
    *   **Abstraction:** Hides complexity, making the system easier to understand.
*   **Disadvantages:**
    *   **Performance Overhead:** Calls between layers can introduce latency.
    *   **"Leaky Abstractions":** Sometimes, the underlying implementation details of a lower layer can leak through to higher layers.
    *   **Cascading Changes:** Inefficient design can lead to changes rippling through many layers.
*   **Example:**
    *   **Web Applications:**
        *   Presentation: HTML, CSS, JavaScript (Browser)
        *   Application Logic: Java Servlets, Spring MVC, .NET Controllers
        *   Data Access: JDBC, Hibernate, Entity Framework
        *   Database: MySQL, PostgreSQL, SQL Server
*   **Reference:** Sommerville (10th ed.) discusses layered architectures as a common way to structure complex systems for maintainability. Pressman (8th ed.) also covers layered architectures in the context of structured design.

#### 3.2. Client-Server Architecture

*   **Description:** Divides the system into two main types of components: clients, which request services, and servers, which provide services. The server is typically a powerful, centralized machine, and clients are often less powerful machines that access the server's resources.
*   **Key Concepts:**
    *   **Request-Response:** Clients initiate communication by sending requests to servers.
    *   **Centralized Control:** Servers often manage resources and business logic.
    *   **Distribution:** Components are distributed across different machines.
*   **Advantages:**
    *   **Centralized Data Management:** Easier to manage and update data.
    *   **Scalability:** Can scale by adding more clients or upgrading the server.
    *   **Security:** Centralized control can enhance security.
*   **Disadvantages:**
    *   **Single Point of Failure:** If the server fails, the entire system becomes unavailable.
    *   **Bottlenecks:** The server can become a bottleneck if it cannot handle all requests.
    *   **Network Dependency:** Requires reliable network connectivity.
*   **Example:**
    *   **Web Browsing:** Your web browser (client) requests a web page from a web server.
    *   **Email:** Your email client (e.g., Outlook, Gmail app) connects to an email server to send and receive emails.
*   **Reference:** Pressman (8th ed.) details client-server architecture as a fundamental model for distributed systems.

#### 3.3. Model-View-Controller (MVC) Architecture

*   **Description:** A design pattern that separates an application into three interconnected components:
    *   **Model:** Represents the data and business logic of the application. It is independent of the UI.
    *   **View:** Represents the user interface. It displays data from the Model and sends user input to the Controller.
    *   **Controller:** Acts as an intermediary between the Model and the View. It handles user input, updates the Model, and selects the appropriate View to display.
*   **Key Concepts:**
    *   **Separation of Concerns:** Distinct responsibilities for data, presentation, and user input handling.
    *   **Observer Pattern:** The View often "observes" the Model for changes and updates itself.
*   **Advantages:**
    *   **Modularity:** Promotes code organization and maintainability.
    *   **Parallel Development:** Different developers can work on the Model, View, and Controller simultaneously.
    *   **Testability:** Components can be tested more easily in isolation.
    *   **Reusability:** Models can be reused with different Views.
*   **Disadvantages:**
    *   **Complexity:** Can introduce complexity for simple applications.
    *   **Learning Curve:** Developers need to understand the interaction between the three components.
*   **Example:**
    *   **Web Frameworks:** Ruby on Rails, Django (Python), Spring MVC (Java), ASP.NET MVC (.NET) are all based on the MVC pattern.
    *   **Scenario:** A user clicks a button to view their profile.
        *   **View:** Displays the profile form.
        *   **Controller:** Receives the button click event, tells the Model to fetch the user's data.
        *   **Model:** Fetches the user's data from the database and returns it to the Controller.
        *   **Controller:** Updates the View with the user's data.
*   **Reference:** While not a core architectural *style* in the same sense as Layered or Client-Server, MVC is a crucial architectural *pattern* often used within those styles. Sommerville (10th ed.) discusses design patterns and their role in architectural design.

#### 3.4. Microservices Architecture

*   **Description:** Structures an application as a collection of small, independent, and loosely coupled services. Each service runs in its own process and communicates with other services over a network, often using lightweight protocols like HTTP.
*   **Key Concepts:**
    *   **Single Responsibility:** Each service focuses on a specific business capability.
    *   **Autonomy:** Services can be developed, deployed, and scaled independently.
    *   **Decentralized Governance:** Teams can choose the best technology for their specific service.
    *   **Resilience:** Failure in one service doesn't necessarily bring down the entire system.
    *   **Communication:** Often uses REST APIs, message queues (e.g., Kafka, RabbitMQ).
*   **Advantages:**
    *   **Scalability:** Individual services can be scaled based on demand.
    *   **Agility:** Faster development and deployment cycles.
    *   **Technology Diversity:** Teams can use different technologies for different services.
    *   **Fault Isolation:** A failure in one service is less likely to affect others.
*   **Disadvantages:**
    *   **Operational Complexity:** Managing many small services can be challenging (deployment, monitoring, logging).
    *   **Distributed System Complexity:** Debugging and testing distributed transactions can be difficult.
    *   **Inter-service Communication Overhead:** Network latency and serialization can impact performance.
    *   **Data Consistency:** Maintaining data consistency across multiple services can be challenging (e.g., using sagas).
*   **Example:**
    *   An e-commerce platform:
        *   User Service: Manages user accounts.
        *   Product Service: Manages product catalog.
        *   Order Service: Manages order processing.
        *   Payment Service: Handles payment transactions.
        *   Shipping Service: Manages shipping logistics.
*   **Reference:** While not explicitly detailed as a primary style in older editions of Sommerville or Pressman, modern software engineering discussions, especially in agile contexts (referencing Poppendieck, 2006 on Lean Software Development for agility), embrace microservices. Sommerville's "Engineering Software Products" (2020) would likely cover more modern architectural styles.

#### 3.5. Pipe and Filter Architecture

*   **Description:** Organizes the system as a sequence of processing steps (filters) connected by pipes. Data flows through the pipes, and each filter transforms the data before passing it to the next filter.
*   **Key Concepts:**
    *   **Data Transformation:** Each filter performs a specific transformation on the data.
    *   **Sequential Processing:** Filters are connected in a pipeline.
    *   **Reusability:** Filters can be easily reused in different pipelines.
*   **Advantages:**
    *   **Reusability:** Filters are often independent and can be reused.
    *   **Concurrency:** Filters can run in parallel, improving performance.
    *   **Simplicity:** Easy to understand and implement for specific problem domains.
    *   **Maintainability:** Adding or removing filters is straightforward.
*   **Disadvantages:**
    *   **Not suitable for interactive systems:** Data must flow through the entire pipeline.
    *   **Performance Overhead:** Data can be transformed multiple times, potentially impacting performance if transformations are complex.
    *   **Data Structure:** All filters must agree on the data format passed between them.
*   **Example:**
    *   **Unix Shell Commands:** `ls | grep ".txt" | sort > output.txt`
        *   `ls`: Lists files.
        *   `grep ".txt"`: Filters for files ending with ".txt".
        *   `sort`: Sorts the filtered list.
        *   `>`: Redirects the output.
    *   **Batch Processing Systems:** Compiling code, image processing pipelines.
*   **Reference:** Sommerville (10th ed.) and Pressman (8th ed.) both cover pipe and filter architecture as a classic style for data processing.

#### 3.6. Event-Driven Architecture (EDA)

*   **Description:** A software architecture pattern where the generation, detection, consumption, and reaction to events are treated as the primary means of communication and integration between different software components.
*   **Key Concepts:**
    *   **Event:** A significant change in state.
    *   **Event Producer (Publisher):** Generates and emits events.
    *   **Event Consumer (Subscriber):** Reacts to specific events.
    *   **Event Channel/Broker/Bus:** The medium through which events are transmitted.
*   **Types of EDA:**
    *   **Mediator Topology:** A central event channel (broker) that mediates communication between producers and consumers.
    *   **Broker Topology:** Producers send events to brokers, and consumers subscribe to specific topics or queues on brokers.
*   **Advantages:**
    *   **Loose Coupling:** Producers and consumers are not directly dependent on each other.
    *   **Asynchronous Communication:** Allows for better responsiveness and scalability.
    *   **Extensibility:** New consumers can be added without affecting existing producers.
    *   **Real-time Responsiveness:** Enables systems to react quickly to changes.
*   **Disadvantages:**
    *   **Complexity:** Debugging and tracing events can be difficult.
    *   **Event Ordering:** Guaranteeing event order can be challenging.
    *   **Data Consistency:** Maintaining consistency across different event consumers can be complex.
    *   **Error Handling:** Managing failures in event processing requires careful design.
*   **Example:**
    *   **E-commerce Order Placement:**
        *   **Order Service:** Publishes an `OrderPlacedEvent`.
        *   **Payment Service:** Subscribes to `OrderPlacedEvent`, processes payment.
        *   **Inventory Service:** Subscribes to `OrderPlacedEvent`, updates inventory.
        *   **Notification Service:** Subscribes to `OrderPlacedEvent`, sends confirmation email.
*   **Reference:** Modern software development, influenced by agile principles and the need for scalable and reactive systems (Poppendieck, 2006), heavily utilizes EDA. Sommerville's later editions and specialized texts on distributed systems would delve deeper into EDA.

#### 3.7. Repository/Blackboard Architecture

*   **Description:** A shared data repository (blackboard) where components can store and retrieve information. A central controller manages the flow of data, or components interact directly with the repository. Often used in AI and expert systems.
*   **Key Concepts:**
    *   **Centralized Data Store:** A single point for all system data.
    *   **Knowledge Sources/Expert Modules:** Independent components that process data from the repository.
    *   **Control Module:** Manages which knowledge source is activated based on the data in the repository.
*   **Advantages:**
    *   **Flexibility:** New knowledge sources can be added easily.
    *   **Decoupling:** Knowledge sources are independent of each other.
    *   **Good for problems with no deterministic solution:** Can explore multiple possibilities.
*   **Disadvantages:**
    *   **Performance:** Can be slow due to constant repository access.
    *   **Scalability:** The repository can become a bottleneck.
    *   **Complexity:** Managing the control logic can be challenging.
*   **Example:**
    *   **Speech Recognition Systems:** Different knowledge sources handle phonetics, acoustics, syntax, and semantics, contributing to the blackboard.
    *   **Medical Diagnosis Systems:** Expert modules for different diseases contribute hypotheses and evidence to a central case file.
*   **Reference:** Sommerville (10th ed.) mentions this as a style often used in AI systems.

#### 3.8. Peer-to-Peer (P2P) Architecture

*   **Description:** All components (peers) have equal capabilities and responsibilities. Each peer can act as both a client and a server, sharing resources and services directly with other peers.
*   **Key Concepts:**
    *   **Decentralization:** No central server.
    *   **Resource Sharing:** Peers share files, processing power, etc.
    *   **Direct Communication:** Peers communicate directly with each other.
*   **Advantages:**
    *   **Resilience:** No single point of failure.
    *   **Scalability:** Scales well as more peers join the network.
    *   **Cost-Effective:** Reduces reliance on expensive central servers.
*   **Disadvantages:**
    *   **Security:** Can be difficult to secure effectively.
    *   **Management:** Difficult to manage and control.
    *   **Finding Resources:** Discovering specific resources can be challenging.
    *   **Data Consistency:** Maintaining consistency across distributed data can be hard.
*   **Example:**
    *   **File Sharing Networks:** BitTorrent.
    *   **Cryptocurrencies:** Bitcoin, Ethereum.
    *   **Some Instant Messaging Clients:** Early versions of Skype.
*   **Reference:** Pressman (8th ed.) discusses distributed systems and network architectures, which would encompass P2P.

---

### 4. Selecting an Architectural Style

The choice of architectural style depends on:

*   **System Requirements:**
    *   **Functional Requirements:** What the system *does*.
    *   **Non-functional Requirements (Quality Attributes):** How well the system performs these functions (performance, security, scalability, maintainability, availability, reliability, usability, etc.).
*   **Organizational Constraints:**
    *   **Team Skills:** Familiarity with certain technologies or architectural patterns.
    *   **Budget:** Cost of development, deployment, and maintenance.
    *   **Time to Market:** Faster development cycles might favor certain styles (e.g., microservices).
*   **Domain Knowledge:** Some styles are more suited to specific problem domains (e.g., Pipe and Filter for data processing).

**Key considerations when choosing:**

*   **Scalability:** Will the system need to handle a growing number of users or data?
*   **Performance:** Are there strict response time requirements?
*   **Maintainability:** How easy should it be to modify or extend the system?
*   **Availability:** How critical is it for the system to be operational at all times?
*   **Security:** What are the security implications of the chosen style?
*   **Team Expertise:** Does the team have the necessary skills to implement and manage the chosen style?

**Pressman (8th ed.)** emphasizes that architectural design is a critical activity that influences all subsequent development phases and the ultimate success of the software. Sommerville (10th ed.) highlights that architectural decisions have long-term consequences.

---

### 5. Importance of Architectural Styles

*   **Facilitates Communication:** Provides a common vocabulary for discussing system design.
*   **Guides Design Decisions:** Offers proven solutions to recurring design problems.
*   **Improves System Qualities:** Directly impacts non-functional requirements like performance, scalability, and maintainability.
*   **Reduces Development Time:** Reusing established styles can speed up the design and implementation process.
*   **Enhances Understandability:** Well-chosen styles make complex systems easier to grasp.

---

### 6. Practice Questions and Exercises

**Question 1:**
You are designing a system that processes large volumes of data from multiple sensors in real-time, performs transformations on this data, and then stores the results. The system needs to be highly scalable and allow for easy addition of new processing steps. Which architectural style would be most suitable, and why?

**Answer:**
A **Pipe and Filter** architecture would be most suitable.
*   **Reasoning:**
    *   **Data Processing:** The sequential nature of filters processing data fits the requirement of transforming sensor data.
    *   **Scalability & Reusability:** Filters can be independently developed, scaled, and easily added or modified to introduce new processing steps. Pipes enable data flow between these independent units.
    *   **Concurrency:** Filters can potentially run in parallel, improving real-time processing.

**Question 2:**
Consider a web application where users can browse products, add them to a cart, and place orders. The development team wants to ensure that the data management, business logic, and user interface can be developed and maintained independently. Which architectural style or pattern would be highly beneficial here? Explain the role of each component.

**Answer:**
The **Model-View-Controller (MVC)** architectural pattern is highly beneficial.
*   **Explanation:**
    *   **Model:** Would represent the product data, user accounts, and order information. It handles data retrieval from a database and enforces business rules (e.g., checking product availability, calculating order totals).
    *   **View:** Would be the user interface that displays product listings, the shopping cart, and the order form (e.g., HTML pages rendered by a web framework). It receives data from the Model and presents it to the user.
    *   **Controller:** Would handle user interactions (e.g., clicking "Add to Cart," submitting an order). It receives requests, interacts with the Model to update data or retrieve information, and then selects the appropriate View to render the response. This separation allows developers to focus on different aspects independently.

**Question 3:**
A startup is building a new social media platform. They anticipate rapid user growth and need to be able to deploy new features quickly and independently. They also want to allow different teams to use the best technology for their specific feature. Which architectural style would you recommend, and what are the main challenges they might face?

**Answer:**
The **Microservices Architecture** is recommended.
*   **Reasoning:**
    *   **Rapid User Growth & Scalability:** Microservices allow individual services (e.g., user profiles, feed, messaging) to be scaled independently based on demand, addressing anticipated growth.
    *   **Independent Feature Deployment & Agility:** Teams can develop, test, and deploy their services without impacting others, enabling rapid feature delivery.
    *   **Technology Diversity:** Different teams can choose the most suitable technologies for their services, fostering innovation.
*   **Main Challenges:**
    *   **Operational Complexity:** Managing a large number of small services (deployment, monitoring, logging, tracing) is significantly more complex than a monolith.
    *   **Distributed System Complexity:** Debugging, handling transactions across services, and ensuring data consistency can be difficult.
    *   **Inter-service Communication:** Network latency and the need for robust communication protocols (e.g., REST, gRPC, message queues) add complexity.
    *   **DevOps Maturity:** Requires a strong DevOps culture and tooling for automated deployment, monitoring, and management.

---

### 7. Important Points to Remember

*   **Architectural styles are blueprints:** They provide a foundational structure and a set of design principles.
*   **No one-size-fits-all:** The best style depends on the specific project requirements and constraints.
*   **Styles influence quality attributes:** Choose a style that supports the desired non-functional requirements (performance, scalability, maintainability, etc.).
*   **Styles can be combined:** Many complex systems use a hybrid approach, combining elements of different styles.
*   **Understanding the trade-offs:** Each style has advantages and disadvantages; be aware of these when making a choice.
*   **Styles are a starting point:** They provide a framework, but detailed design is still required.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


### 8. References and Further Reading

*   **Software Engineering by Ian Sommerville (Pearson Education, Tenth edition, 2015):** Chapters on Architectural Design, Architectural Styles.
*   **Software Engineering: A Practitioner's Approach by Roger S. Pressman (McGraw Hill publication, Eighth edition, 2014):** Chapters on Architectural Design, Design Patterns.
*   **Engineering Software Products: An Introduction to Modern Software Engineering by Ian Sommerville (Pearson Education, First Edition, 2020):** Likely covers more contemporary architectural styles and practices.
*   **Agile Software Development, Principles, Patterns, and Practices by Robert C. Martin:** Discusses design principles and patterns that are often embodied within architectural styles.
*   **Designing Data-Intensive Applications by Martin Kleppmann:** Provides deep insights into various distributed system architectural styles and their challenges, highly relevant for microservices and event-driven architectures.

---