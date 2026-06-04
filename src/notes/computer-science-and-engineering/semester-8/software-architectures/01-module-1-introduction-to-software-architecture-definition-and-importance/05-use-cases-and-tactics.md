---
title: "Use Cases and Tactics"
subject: "SOFTWARE ARCHITECTURES"
module: "Module 1: Introduction to Software Architecture:  Definition and Importance"
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8c9b4"
status: "completed"
scrapedAt: "2026-05-20T17:26:15.685Z"
---
# Software Architectures: Module 1 - Introduction: Definition and Importance

## Topic: Use Cases and Tactics

---

### 1. Use Cases

#### 1.1. Definition

A **use case** describes a sequence of actions performed by an actor (a user or another system) interacting with a software system to achieve a specific goal. In essence, it defines how a user *uses* the system. Use cases are a fundamental tool for understanding and documenting the functional requirements of a software system from an external perspective.

#### 1.2. Importance in Software Architecture

*   **Capturing Functional Requirements:** Use cases provide a clear, user-centric view of what the system needs to do. This is crucial for architects to understand the desired functionality and how it will be realized.
*   **Driving Design Decisions:** By understanding the goals and interactions described in use cases, architects can make informed decisions about the system's structure, components, and their responsibilities.
*   **Basis for Architecture Evaluation:** Use cases can be used as a basis for evaluating the quality of an architecture. For example, can the proposed architecture support the critical use cases efficiently and reliably?
*   **Communication Tool:** Use cases serve as a common language between stakeholders (users, business analysts, developers, and architects) to ensure everyone has a shared understanding of the system's purpose and behavior.

#### 1.3. Key Elements of a Use Case

While the exact format can vary, typical use case elements include:

*   **Use Case Name:** A concise, action-oriented name (e.g., "Place Order", "Search Products").
*   **Actor(s):** The entities (users, other systems) that interact with the system.
*   **Goal:** The objective the actor aims to achieve by performing the use case.
*   **Preconditions:** Conditions that must be true before the use case can begin.
*   **Postconditions:** Conditions that are true after the use case has successfully completed.
*   **Basic Flow (Happy Path):** The primary, successful sequence of steps performed by the actor and the system.
*   **Alternative Flows:** Variations of the basic flow that lead to a successful outcome but involve different steps or decisions.
*   **Exception Flows:** Sequences of steps that describe how the system handles errors or unexpected situations.
*   **Optional Features:** Features that can be included or excluded depending on specific circumstances.

#### 1.4. Example: "Place Order" Use Case for an E-commerce System

*   **Use Case Name:** Place Order
*   **Actor(s):** Customer
*   **Goal:** To purchase items from the online store and have them added to their order.
*   **Preconditions:**
    *   Customer is logged into the system.
    *   Customer has items in their shopping cart.
*   **Postconditions:**
    *   A new order is created in the system.
    *   The customer's shopping cart is emptied.
    *   Inventory is updated.
*   **Basic Flow:**
    1.  Customer navigates to the shopping cart.
    2.  Customer clicks "Checkout".
    3.  System displays shipping information for confirmation.
    4.  Customer confirms shipping information.
    5.  System displays payment options.
    6.  Customer selects a payment method.
    7.  Customer enters payment details.
    8.  System processes the payment.
    9.  System confirms the order.
    10. System displays an order confirmation page.
*   **Alternative Flow (Add New Item During Checkout):**
    *   At step 5, Customer decides to add another item.
    *   Customer searches for and adds a new item.
    *   System updates the shopping cart and returns to step 5.
*   **Exception Flow (Payment Declined):**
    *   At step 8, if the payment is declined:
        *   System informs the customer that the payment failed.
        *   System prompts the customer to try a different payment method.
        *   Flow returns to step 5.

---

### 2. Tactics

#### 2.1. Definition

**Tactics** are specific design decisions or techniques that achieve a quality attribute (e.g., performance, security, availability) for a particular part of the system. They are the building blocks of a software architecture, employed to satisfy the "ilities" (non-functional requirements) that are critical to the system's success.

#### 2.2. Importance in Software Architecture

*   **Achieving Quality Attributes:** Tactics are the concrete means by which architects address non-functional requirements. Without them, quality attributes remain abstract goals.
*   **Guiding Design Choices:** They provide specific, actionable approaches for developers to implement, ensuring that desired qualities are built into the system.
*   **Measuring and Evaluating Architecture:** The presence and effective application of tactics can be used to evaluate the architecture's ability to meet its quality goals.
*   **Component Design:** Tactics often influence the design of individual components, dictating how they should be structured, interact, and manage resources.

#### 2.3. Categorization of Tactics

Tactics are often categorized based on the quality attribute they aim to improve. Common categories include:

*   **Availability Tactics:** To ensure the system is accessible and operational when needed.
*   **Performance Tactics:** To ensure the system responds quickly and efficiently.
*   **Security Tactics:** To protect the system from unauthorized access and data breaches.
*   **Modifiability Tactics:** To make it easy to change the system over time.
*   **Testability Tactics:** To make it easy to test the system.

#### 2.4. Examples of Tactics by Quality Attribute

**2.4.1. Availability Tactics**

*   **Redundancy:** Having backup components or systems ready to take over if a primary one fails.
    *   *Example:* Implementing a hot standby for a critical database server.
*   **Replication:** Maintaining multiple copies of data or services across different locations.
    *   *Example:* Using database replication to have several identical copies of the customer database.
*   **Failover:** Automatically switching to a redundant component when a failure is detected.
    *   *Example:* A load balancer detecting a failed web server and rerouting traffic to healthy servers.
*   **Health Monitoring:** Continuously checking the status of components and the system.
    *   *Example:* Using a monitoring tool to check if web servers are responding to requests.

**2.4.2. Performance Tactics**

*   **Increase Resources:** Adding more hardware resources (CPU, memory, network bandwidth).
    *   *Example:* Upgrading server hardware to handle more concurrent users.
*   **Optimize Resource Utilization:** Making better use of existing resources.
    *   *Example:* Efficiently managing database connections.
*   **Reduce Latency:** Minimizing the time it takes for a request to be processed and a response to be returned.
    *   *Example:* Caching frequently accessed data.
*   **Increase Throughput:** Maximizing the number of requests the system can handle per unit of time.
    *   *Example:* Batch processing of non-time-sensitive requests.
*   **Load Balancing:** Distributing incoming traffic across multiple servers.
    *   *Example:* Using a load balancer to spread user requests across several web servers.
*   **Caching:** Storing frequently accessed data in a temporary, fast-access location.
    *   *Example:* Storing user session data in memory instead of fetching it from the database every time.

**2.4.3. Security Tactics**

*   **Authentication:** Verifying the identity of users or systems.
    *   *Example:* Requiring a username and password to log in.
*   **Authorization:** Granting or denying access to specific resources or actions based on the authenticated identity.
    *   *Example:* Allowing only administrators to access user management functions.
*   **Encryption:** Scrambling data so it cannot be read without a decryption key.
    *   *Example:* Encrypting sensitive user data stored in the database.
*   **Secure Communication:** Protecting data in transit.
    *   *Example:* Using HTTPS for all web traffic.
*   **Data Integrity:** Ensuring data is accurate and has not been tampered with.
    *   *Example:* Using checksums or digital signatures.

**2.4.4. Modifiability Tactics**

*   **Encapsulation:** Hiding internal implementation details of a component and exposing a well-defined interface.
    *   *Example:* A `UserService` class that exposes methods like `getUserById` without revealing its internal data structures.
*   **Abstraction:** Defining a simplified view of a complex system or component.
    *   *Example:* An abstract `PaymentGateway` interface that different payment providers implement.
*   **Information Hiding:** Similar to encapsulation, preventing access to internal state.
*   **Separation of Concerns:** Dividing a system into distinct sections, each addressing a specific concern.
    *   *Example:* Separating presentation logic, business logic, and data access logic into different layers.
*   **Deferred Binding (Late Binding):** Delaying decisions until runtime.
    *   *Example:* Using a plugin architecture where specific implementations are loaded at startup.

**2.4.5. Testability Tactics**

*   **Isolation:** Designing components so they can be tested independently.
    *   *Example:* Creating mock objects for dependencies.
*   **Observability:** Making it possible to monitor the internal state of the system.
    *   *Example:* Adding logging statements at critical points.
*   **Controllability:** Making it possible to control the state of the system or its components during testing.
    *   *Example:* Providing methods to set specific internal states for testing purposes.
*   **Record/Playback:** Capturing interactions and replaying them for testing.
    *   *Example:* Recording user interface interactions to replay them as automated tests.

---

### 3. Relationship between Use Cases and Tactics

*   **Use Cases Define *What*:** Use cases describe the functional behavior of the system – *what* the system should do from an actor's perspective.
*   **Tactics Define *How*:** Tactics describe the architectural decisions that enable the system to meet its quality attribute requirements – *how* the system will achieve certain non-functional goals while supporting the use cases.
*   **Synergy:** Architects use use cases to understand the functional requirements and then select and apply appropriate tactics to ensure that the system's architecture can support these use cases while also meeting performance, security, availability, and other quality attribute goals. For instance, a "Place Order" use case might require a high degree of availability, leading the architect to employ replication and failover tactics for the order processing component.

---

### 4. Practice Questions/Exercises

**Question 1:**
Describe the primary purpose of a use case in software architecture.
A) To define the user interface design.
B) To detail the database schema.
C) To outline the sequences of actions an actor performs to achieve a goal.
D) To specify the algorithms for complex calculations.

**Question 2:**
Which of the following is an example of a tactic to improve system **availability**?
A) Implementing robust input validation.
B) Encrypting sensitive data.
C) Using a load balancer to distribute traffic.
D) Adding more RAM to the server.

**Question 3:**
Consider an e-commerce website. Which of the following is a **use case**?
A) Load balancing
B) User authentication
C) Browse Products
D) Data encryption

**Question 4:**
A tactic that involves having backup components ready to take over if a primary one fails is known as:
A) Replication
B) Failover
C) Redundancy
D) Health Monitoring

**Question 5:**
Explain how a specific use case (e.g., "Process Payment") might influence the selection of tactics for a financial system.

---

### 5. Answers to Practice Questions

**Answer 1:**
**C) To outline the sequences of actions an actor performs to achieve a goal.**
*   *Explanation:* Use cases focus on the functional interaction between actors and the system to achieve a specific outcome.

**Answer 2:**
**C) Using a load balancer to distribute traffic.**
*   *Explanation:* Load balancing helps prevent a single server from becoming overloaded, thus improving the system's ability to remain available. Input validation and encryption are security tactics, and adding RAM is a resource optimization tactic.

**Answer 3:**
**C) Browse Products**
*   *Explanation:* "Browse Products" describes an action a user performs to achieve a goal (finding products), which is the definition of a use case. Load balancing and data encryption are architectural tactics. User authentication is a functional requirement that can be achieved by various tactics.

**Answer 4:**
**C) Redundancy**
*   *Explanation:* Redundancy is the principle of having duplicate components. Failover is the *action* of switching to a redundant component when failure occurs. Replication is about having multiple copies, often for different purposes. Health monitoring is about detecting failures.

**Answer 5:**
**Example Explanation for "Process Payment" Use Case:**
The "Process Payment" use case for a financial system typically involves several critical factors:
*   **High Availability:** Payments must be processed reliably and without interruption. This would lead the architect to consider **redundancy** (e.g., redundant payment gateways, backup payment processing servers) and **failover** tactics to ensure that if one payment processing channel or server fails, another can immediately take over, preventing transaction loss.
*   **Security:** Payment information is highly sensitive. The architect would implement **authentication** (verifying the user's identity), **authorization** (ensuring only authorized actions can occur), **encryption** (for data in transit and at rest), and potentially **audit trails** to track all payment-related activities for security and compliance.
*   **Performance:** Payments need to be processed relatively quickly to provide a good user experience. Tactics like **efficient data access** (optimizing database queries for transaction data), **caching** (if applicable, for things like currency exchange rates), and **asynchronous processing** (for non-critical follow-up actions like sending receipts) might be considered.
*   **Integrity:** The accuracy of financial transactions is paramount. Tactics like **transactional integrity** (ensuring atomicity of operations) and **data integrity checks** would be crucial.

---

### 6. Important Points to Remember

*   **Use Cases are Functional:** They describe *what* the system does from an external perspective.
*   **Tactics are for Non-Functional Requirements:** They describe *how* the system will achieve quality attributes.
*   **No Single Tactic is a Silver Bullet:** Achieving complex quality attributes often requires a combination of multiple tactics.
*   **Context Matters:** The choice of use cases and tactics is highly dependent on the specific system being built and its business domain.
*   **Balancing Act:** Architects must balance different quality attributes, as tactics that improve one attribute might negatively impact another (e.g., heavy encryption can sometimes impact performance).
*   **Use Cases Drive the Need for Tactics:** Understanding the functional requirements from use cases helps architects identify which quality attributes are most important and thus which tactics are most relevant.
