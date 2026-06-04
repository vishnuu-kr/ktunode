---
title: "Use case diagram"
subject: "SOFTWARE ENGINEERING"
module: "Module 2: Software design "
branch: "Computer Science and Engineering"
semester: 7
topicId: "6841627a0fc9aa1fdbc8c897"
status: "completed"
scrapedAt: "2026-05-20T17:11:09.467Z"
---
# Software Engineering: Module 2 - Software Design

## Topic: Use Case Diagrams

---

### 1. Introduction to Use Case Diagrams

Use case diagrams are a fundamental part of **Unified Modeling Language (UML)** and are used to represent the **functional requirements** of a system from the **user's perspective**. They illustrate how different **actors** interact with a system to achieve specific **goals**.

**Key Concepts:**

*   **Use Case:** A description of a sequence of actions performed by a system in response to a request from an actor. It represents a specific functionality or a goal that a user (or another system) wants to achieve.
*   **Actor:** An entity that interacts with the system. Actors can be human users, other systems, or external devices. They are typically represented by stick figures.
*   **System Boundary:** An imaginary box that encloses all the use cases belonging to the system being modeled. It separates the system from its environment (actors).

---

### 2. Purpose and Benefits of Use Case Diagrams

**Purpose:**

*   To **visualize the scope** and **functionality** of a system.
*   To **identify and understand the needs** of various users or external systems.
*   To serve as a **blueprint** for developing the system's functionality.
*   To facilitate **communication** between stakeholders, developers, and testers.

**Benefits:**

*   **Clarity and Simplicity:** Easy to understand for both technical and non-technical audiences.
*   **Early Requirement Gathering:** Helps in identifying functional requirements from the outset.
*   **Scope Definition:** Clearly defines what the system will and will not do.
*   **Test Case Generation:** Provides a basis for creating test cases.
*   **Traceability:** Links requirements to system behavior.

---

### 3. Key Components of a Use Case Diagram

#### 3.1. Actors

*   **Definition:** An actor represents a role that a user or another system plays when interacting with the system.
*   **Representation:** Typically depicted as a stick figure.
*   **Types:**
    *   **Primary Actor:** Initiates the interaction with the system to achieve a goal.
    *   **Secondary Actor:** Participates in the interaction but does not initiate it. It often provides services to the system.
*   **Example:** In an online banking system, `Customer` is a primary actor, and `Payment Gateway` might be a secondary actor.

#### 3.2. Use Cases

*   **Definition:** A specific functionality or a goal that an actor can achieve by interacting with the system.
*   **Representation:** Depicted as an oval.
*   **Naming:** Use case names should be descriptive and typically start with a verb (e.g., "Place Order," "Withdraw Cash," "Generate Report").
*   **Example:**
    *   `Login`
    *   `View Account Balance`
    *   `Transfer Funds`
    *   `Logout`

#### 3.3. System Boundary

*   **Definition:** A rectangular box that encloses all the use cases related to a specific system.
*   **Purpose:** To clearly delineate the system being modeled from its external environment (actors).
*   **Representation:** A rectangle with the system name at the top.

#### 3.4. Relationships

Use case diagrams use specific relationships to connect actors and use cases, and to relate use cases to each other.

*   **Association:**
    *   **Definition:** Represents a relationship between an actor and a use case, indicating that the actor participates in the use case.
    *   **Representation:** A solid line connecting an actor to a use case.
    *   **Example:** A `Customer` is associated with the `Place Order` use case.

*   **Include (<<include>>):**
    *   **Definition:** Used when a use case's behavior is **always** incorporated into another use case. It signifies that one use case's functionality is a subset of another's.
    *   **Representation:** A dashed arrow with the stereotype `<<include>>` pointing from the base use case (that includes the functionality) to the included use case.
    *   **Purpose:** To avoid repetition and promote reuse of functionality.
    *   **Example:** The `Process Payment` use case might be included by `Place Order` and `Purchase Subscription`.

*   **Extend (<<extend>>):**
    *   **Definition:** Used when a use case's behavior is **conditionally** incorporated into another use case. It signifies that one use case adds behavior to another under specific conditions.
    *   **Representation:** A dashed arrow with the stereotype `<<extend>>` pointing from the extending use case to the extended use case.
    *   **Purpose:** To model optional behavior or exceptions.
    *   **Example:** The `Apply Discount Code` use case might extend the `Place Order` use case. It only happens if the customer has a discount code.

*   **Generalization (Inheritance):**
    *   **Definition:** Used to show inheritance between actors or between use cases. A specialized actor/use case inherits the behavior of a general actor/use case.
    *   **Representation:** A solid arrow with a hollow arrowhead pointing from the specialized element to the general element.
    *   **Example:** A `Registered User` actor might generalize from a `User` actor. A `Premium Order` use case might generalize from an `Order` use case.

---

### 4. How to Create a Use Case Diagram

1.  **Identify Actors:** Determine all the entities (users, systems) that will interact with the system.
2.  **Identify Use Cases:** For each actor, identify the specific goals or functionalities they want to achieve using the system.
3.  **Define the System Boundary:** Draw a rectangle to represent the system and place all identified use cases inside it.
4.  **Establish Associations:** Connect actors to the use cases they interact with using association lines.
5.  **Identify Include/Extend Relationships:** Look for common functionality that can be extracted into separate use cases (<<include>>) or for optional behavior that can be added conditionally (<<extend>>).
6.  **Identify Generalization Relationships:** If there are hierarchical relationships between actors or use cases, represent them using generalization arrows.
7.  **Refine and Review:** Ensure the diagram is clear, consistent, and accurately reflects the system's functional requirements.

---

### 5. Example: Online Bookstore

Let's consider an online bookstore system.

**Actors:**

*   `Customer` (Primary)
*   `Administrator` (Primary)
*   `Payment Gateway` (Secondary)

**Use Cases:**

*   `Search Books`
*   `View Book Details`
*   `Add to Cart`
*   `Place Order`
*   `Process Payment`
*   `View Order History`
*   `Manage Inventory`
*   `Add New Book`
*   `Remove Book`

**Relationships:**

*   **Associations:**
    *   `Customer` -> `Search Books`
    *   `Customer` -> `View Book Details`
    *   `Customer` -> `Add to Cart`
    *   `Customer` -> `Place Order`
    *   `Customer` -> `View Order History`
    *   `Administrator` -> `Manage Inventory`
    *   `Administrator` -> `Add New Book`
    *   `Administrator` -> `Remove Book`
    *   `Place Order` -> `Payment Gateway` (The system interacts with the Payment Gateway)

*   **<<include>>:**
    *   `Place Order` <<include>> `Process Payment` (Placing an order always involves processing payment)

*   **<<extend>>:**
    *   `Place Order` <<extend>> `Apply Discount Code` (Applying a discount code is an optional step during checkout)

*   **Generalization:**
    *   `Administrator` generalizes `User` (assuming there's a base `User` actor for common functionalities like login, though not explicitly modeled here for simplicity).

**Visual Representation:**

```
+---------------------------------+
|        Online Bookstore         |
|                                 |
|  +-------------------+          |
|  |   Search Books    |          |
|  +-------------------+----------+---+
|                                 |   |
|  +-------------------+          |   |
|  | View Book Details |          |   |
|  +-------------------+          |   |
|                                 |   |
|  +-------------------+          |   |
|  |     Add to Cart   |----------+   |
|  +-------------------+          |   |
|                                 |   |
|  +-------------------+          |   |
|  |    Place Order    |--------->|<<include>>|-----| Process Payment |
|  +-------------------+          |   |       +-------------------+
|       ^                         |   |
|       | <<extend>>              |   |
|       |                         |   |
|  +-------------------+          |   |
|  |Apply Discount Code|          |   |
|  +-------------------+          |   |
|                                 |   |
|  +-------------------+          |   |
|  | View Order History|----------+   |
|  +-------------------+              |
|                                     |
|  +-------------------+              |
|  |  Manage Inventory |              |
|  +-------------------+--------------+---+
|                                     |   |
|  +-------------------+              |   |
|  |   Add New Book    |--------------+   |
|  +-------------------+                  |
|                                         |
|  +-------------------+                  |
|  |    Remove Book    |------------------+
|  +-------------------+
|
+---------------------------------+
        /|\           /|\
         |             |
       Customer      Administrator
        (User)
```

**(Note:** This is a simplified text-based representation. In practice, you would use UML diagramming tools.)

---

### 6. Best Practices for Use Case Diagrams

*   **Keep it Simple:** Avoid overly complex diagrams with too many actors or use cases. Break down large systems into smaller, manageable parts.
*   **Use Consistent Naming:** Use clear, concise, and consistent naming conventions for actors and use cases.
*   **Focus on Functionality:** Use case diagrams should primarily illustrate functional requirements, not non-functional ones.
*   **Document Use Case Descriptions:** Each use case should be accompanied by a detailed textual description that elaborates on the steps, preconditions, postconditions, and alternative flows.
*   **Avoid UI Details:** Do not include user interface elements in the use case diagram.
*   **Review Regularly:** Get feedback from stakeholders and revise the diagram as needed.

---

### 7. Practice Questions and Answers

**Question 1:** What is the primary purpose of a use case diagram in software engineering?

**Answer:** The primary purpose of a use case diagram is to visualize the functional requirements of a system and show how different actors interact with it to achieve specific goals.

**Question 2:** An actor can be a person, but what else can it be?

**Answer:** An actor can also be another system, a hardware device, or any entity external to the system that interacts with it.

**Question 3:** What does the `<<include>>` relationship signify in a use case diagram?

**Answer:** The `<<include>>` relationship signifies that the behavior of one use case (the included use case) is always incorporated into another use case (the base use case). It represents reusable functionality.

**Question 4:** Explain the difference between `<<include>>` and `<<extend>>`.

**Answer:**
*   **`<<include>>`:** Represents mandatory inclusion of functionality. The included use case's behavior is *always* a part of the base use case's execution.
*   **`<<extend>>`:** Represents optional or conditional inclusion of functionality. The extending use case's behavior is added to the extended use case *only* under specific conditions.

**Question 5:** Consider a library management system. Identify at least two actors and three use cases for this system.

**Answer:**
*   **Actors:** `Librarian`, `Member`
*   **Use Cases:** `Search Books`, `Borrow Book`, `Return Book`, `Add New Book` (Librarian), `Renew Membership` (Member).

---

### 8. Important Points to Remember

*   **User-Centric:** Use case diagrams focus on what the system *does* for its users.
*   **Functional Requirements:** They are a powerful tool for capturing and communicating functional requirements.
*   **Actors are Roles:** An actor represents a role, not a specific individual.
*   **`<<include>>` vs. `<<extend>>`:** Understand the crucial difference in their meaning and usage.
*   **Not for UI:** Do not confuse use case diagrams with wireframes or UI mockups.
*   **Start Simple:** Begin with the core functionalities and actors, then refine the diagram.
*   **Accompany with Descriptions:** Always provide detailed textual descriptions for each use case to fully capture its behavior.

---

This concludes the study notes for Use Case Diagrams in Module 2: Software Design. Remember to practice creating your own diagrams for different scenarios to solidify your understanding.
