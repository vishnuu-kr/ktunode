---
title: "Developing use cases"
subject: "SOFTWARE ENGINEERING"
module: "Module 2: Requirement Analysis and Design: Functional and non"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f3633f"
status: "completed"
scrapedAt: "2026-05-23T16:24:15.455Z"
---
# Module 2: Requirement Analysis and Design - Developing Use Cases

## 1. Introduction to Use Cases

Use cases are a fundamental technique for capturing functional requirements. They describe how a system interacts with its environment, particularly with external entities called *actors*, to achieve a specific goal. They focus on the *what* rather than the *how*.

**Key Concepts:**

*   **Use Case:** A description of a sequence of actions a system performs to produce an observable result of value to an actor.
*   **Actor:** An entity (person, another system, a device) that interacts with the system. Actors are outside the system boundary.
*   **System:** The software system being developed.
*   **Goal:** The objective an actor wants to achieve by interacting with the system.

**Importance of Use Cases (Pressman, 8th Ed., Ch. 6):**

*   **Captures functional requirements:** Clearly defines what the system *must* do.
*   **Facilitates communication:** Provides a common understanding between stakeholders (customers, developers, testers).
*   **Supports design and testing:** Serves as a basis for designing system behavior and creating test cases.
*   **Manages complexity:** Breaks down system functionality into manageable units.

**When to use Use Cases:**

*   Primarily during requirement analysis and design (CO3).
*   Especially useful in agile methodologies for defining user stories and feature sets (CO2, CO6).

## 2. Components of a Use Case

A typical use case description includes several key components:

*   **Use Case Name:** A concise, action-oriented name (e.g., "Place Order," "Register User").
*   **Goal:** A clear statement of what the actor wants to achieve.
*   **Actors:** The primary and secondary actors involved.
*   **Preconditions:** Conditions that must be true before the use case can start.
*   **Postconditions (Success):** The state of the system after the use case completes successfully.
*   **Postconditions (Failure):** The state of the system if the use case fails.
*   **Main Success Scenario (Basic Flow):** A step-by-step description of the typical, successful interaction between the actor and the system.
*   **Alternative Flows:** Variations from the basic flow that still result in successful completion.
*   **Exception Flows:** Descriptions of errors or abnormal conditions and how the system handles them.

**Example:**

**Use Case Name:** Login to System

*   **Goal:** To allow a registered user to access the system.
*   **Primary Actor:** Registered User
*   **Preconditions:** The user has a valid account with a username and password.
*   **Postconditions (Success):** The user is authenticated and granted access to the system.
*   **Postconditions (Failure):** The user remains unauthenticated and is shown an error message.
*   **Main Success Scenario:**
    1.  The User enters their username.
    2.  The User enters their password.
    3.  The User clicks the "Login" button.
    4.  The System verifies the username and password against its records.
    5.  The System displays the user's dashboard.
*   **Alternative Flows:**
    *   3a. If the user clicks "Forgot Password" instead of "Login":
        1.  The System initiates the password recovery process.
*   **Exception Flows:**
    *   4a. If the username is not found:
        1.  The System displays an "Invalid username or password" error message.
    *   4b. If the password does not match the username:
        1.  The System displays an "Invalid username or password" error message.

## 3. Developing Use Cases: The Process

Developing use cases is an iterative process involving several steps.

**Sommerville, 10th Ed., Ch. 4 & Pressman, 8th Ed., Ch. 6:**

1.  **Identify Actors:** Determine all external entities that interact with the system.
    *   *Example:* For an e-commerce system, actors might include "Customer," "Administrator," "Payment Gateway."
2.  **Identify Use Cases:** For each actor, identify the goals they want to achieve by interacting with the system.
    *   *Example:* For "Customer": "Browse Products," "Add to Cart," "Place Order," "View Order History."
3.  **Write Use Case Descriptions:** Detail the interactions for each use case. This can be done in various formats:
    *   **Brief Description:** A short summary of the use case.
    *   **Free-form Text:** A narrative description.
    *   **Formal Use Case Specification:** A structured document with all components (as described above).
4.  **Identify Relationships Between Use Cases:** Use cases can be related to each other:
    *   **Include (`<<include>>`):** One use case *always* includes the functionality of another. This is for common, reusable functionality.
        *   *Example:* "Place Order" might include "Process Payment."
    *   **Extend (`<<extend>>`):** One use case *may* extend the functionality of another under certain conditions. This is for optional or exceptional behavior.
        *   *Example:* "Place Order" might be extended by "Apply Discount Code."
    *   **Generalization (`<<generalization>>`):** One use case is a specialized version of another (inheritance).
        *   *Example:* "Pay by Credit Card" could be a generalization of "Pay by Visa" and "Pay by Mastercard."
5.  **Create Use Case Diagrams (UML):** A visual representation of actors and use cases, showing their relationships.
    *   **Actors** are represented by stick figures.
    *   **Use Cases** are represented by ovals.
    *   **Relationships** are represented by lines (associations, include, extend, generalization).

**Example Use Case Diagram (Conceptual):**

```
      +-------------+
      |             |
      |  Customer   |
      |             |
      +-------------+
           |
           |
           o-----------------+
           |                 |
           |                 |
      +----------+      +----------+
      |          |      |          |
      | Browse   |      | Place    |
      | Products |      | Order    |
      |          |      |          |
      +----------+      +----------+
                           ^
                           | <<include>>
                           |
                      +----------+
                      |          |
                      | Process  |
                      | Payment  |
                      |          |
                      +----------+
```

**Sommerville (2020) - Engineering Software Products:** Focuses on use cases as a key element of requirements elicitation and specification, particularly in the context of agile and iterative development. He emphasizes their role in understanding user needs and driving the development process.

**Pressman (2014) - Software Engineering: A Practitioner's Approach:** Reinforces the use of use cases as a powerful tool for modeling system behavior and a bridge between functional requirements and object-oriented design. He highlights their utility in identifying potential design elements and test scenarios.

## 4. Benefits and Limitations of Use Cases

**Benefits:**

*   **Customer Focus:** Emphasizes the goals of the users.
*   **Completeness:** Helps ensure all essential functionality is captured.
*   **Clarity:** Provides a clear, understandable description of system behavior.
*   **Basis for Design and Testing:** Directly informs the creation of design models and test cases (CO3, CO4).
*   **Adaptability:** Can be used in both traditional and agile methodologies (CO2).
*   **Traceability:** Enables tracing requirements from user goals to design and test cases.

**Limitations:**

*   **Focus on Functional Requirements:** Less effective for non-functional requirements (performance, security, usability). These need to be captured separately.
*   **Granularity:** Can become overwhelming if too detailed or too broad. Requires careful balancing.
*   **Complexity of Relationships:** Complex `<<include>>` and `<<extend>>` relationships can become hard to manage.
*   **Potential for Ambiguity:** Free-form text descriptions can sometimes be ambiguous.
*   **Not a complete specification:** Needs to be supplemented with other documentation.

## 5. Use Cases in Agile and Iterative Development

Use cases are highly compatible with agile development methodologies.

**CO2: Describe agile methods, including the Agile Manifesto and agile project management practices.**
**CO6: Make use of software project management concepts while planning, estimation, scheduling, tracking and change management of a project, with proper application of SCRUM, Kanban and Lean frameworks.**

*   **User Stories:** Use cases can serve as a foundation for creating user stories, which are short, simple descriptions of a feature told from the perspective of the person who desires the new capability, usually a user or customer.
    *   *Example Use Case:* "Place Order"
    *   *Example User Stories:*
        *   "As a customer, I want to add items to my shopping cart so that I can purchase them later."
        *   "As a customer, I want to enter my shipping address so that my order can be delivered."
        *   "As a customer, I want to pay for my order so that I can receive the items."
*   **Incremental Development:** Use cases can be prioritized and implemented in iterations or sprints, allowing for early delivery of valuable functionality (CO1).
*   **Iterative Refinement:** Use case descriptions can be refined as development progresses and understanding deepens.
*   **Kanban/Lean:** Use cases can help define the "work items" or "tasks" on a Kanban board or within a Lean workflow, providing context for what needs to be done (CO6).

**Reference Books (Agile & Lean):**

*   **Kanban by David J. Anderson (2010):** While not directly about use cases, understanding Kanban's focus on flow and visualizing work can help in prioritizing and managing use case implementation.
*   **Agile Management for Software Engineering by David J. Anderson (2003):** Discusses how to manage software development in an agile manner, where user-centric requirements like those captured in use cases are paramount.
*   **Implementing Lean Software Development by Mary Poppendieck (2006):** Emphasizes principles like "deliver fast" and "eliminate waste," which align well with breaking down large systems into manageable use cases and delivering them incrementally.

## 6. Non-Functional Requirements and Use Cases

**CO3: Prepare Software Requirement Specification and Software Design for a given problem.**

While use cases excel at capturing functional requirements, they are generally not the primary mechanism for documenting non-functional requirements (NFRs) like performance, security, reliability, or usability.

**How NFRs relate to Use Cases:**

*   **Constraints:** NFRs can act as constraints on the execution of use cases.
    *   *Example:* For the "Place Order" use case, an NFR might be: "The payment processing step must complete within 3 seconds." This is a performance constraint on a specific part of the use case.
*   **Context:** NFRs provide the context within which use cases operate.
    *   *Example:* A security NFR might dictate that all user authentication steps (like in the "Login to System" use case) must use encrypted credentials.
*   **Separate Documentation:** NFRs are typically documented in a separate section of the Software Requirements Specification (SRS) or as specific attributes attached to relevant use cases.

**Sommerville (2015) and Pressman (2014) both acknowledge the need for separate NFR documentation alongside functional requirements captured by use cases.**

## 7. Practice Questions and Exercises

**Question 1:**
Define "actor" in the context of use cases and provide an example for an online banking system.

**Answer 1:**
An actor is an external entity that interacts with a software system to achieve a specific goal. It can be a human user, another software system, or a hardware device.
*   **Example for Online Banking System:**
    *   **Human User:** Customer
    *   **Another System:** ATM Machine, Credit Bureau
    *   **Hardware Device:** Security Token

**Question 2:**
Differentiate between `<<include>>` and `<<extend>>` relationships in use cases. Provide a brief example for each.

**Answer 2:**
*   **`<<include>>`:** Represents a mandatory relationship where one use case (the base use case) incorporates the behavior of another use case (the included use case) as part of its execution. This is used for common, reusable functionality.
    *   *Example:* A "Process Payment" use case might be `<<include>>`d by both "Place Order" and "Refund Order" use cases.
*   **`<<extend>>`:** Represents an optional relationship where one use case (the extending use case) adds behavior to another use case (the base use case) under certain conditions. This is used for optional or exceptional functionality.
    *   *Example:* A "Apply Discount Code" use case might `<<extend>>` the "Place Order" use case, but only if the customer has a valid discount code.

**Question 3:**
Consider a library management system. Identify potential actors and at least three use cases for the "Librarian" actor.

**Answer 3:**
*   **Potential Actors:**
    *   Librarian
    *   Member (Borrower)
    *   System Administrator
    *   External Cataloguing Service

*   **Use Cases for Librarian:**
    1.  **Add New Book:** The Librarian adds new books to the library's catalog.
    2.  **Manage Member Accounts:** The Librarian can register new members, update member details, or deactivate accounts.
    3.  **Issue Book:** The Librarian checks out books to members.
    4.  **Return Book:** The Librarian checks in returned books.
    5.  **Search Catalog:** The Librarian searches for books by title, author, or ISBN.

**Exercise 1:**
For the "Add New Book" use case in the library system, outline its main success scenario, a possible alternative flow, and an exception flow.

**Answer to Exercise 1:**

**Use Case Name:** Add New Book

*   **Primary Actor:** Librarian
*   **Goal:** To add a new book record to the library catalog.
*   **Preconditions:** The Librarian is logged into the system with appropriate permissions.
*   **Postconditions (Success):** A new book record is created and accessible in the library catalog.

*   **Main Success Scenario:**
    1.  Librarian selects the "Add Book" option.
    2.  System presents a form for book details.
    3.  Librarian enters Book Title, Author(s), ISBN, Publisher, Publication Year, Genre, and number of copies.
    4.  Librarian clicks "Save."
    5.  System validates the entered data.
    6.  System creates a new book record and assigns unique library identifiers to each copy.
    7.  System confirms successful addition of the book.

*   **Alternative Flow:**
    *   3a. If the book is part of a series:
        1.  Librarian enters Series Name and Series Number.

*   **Exception Flow:**
    *   5a. If ISBN is already in the system:
        1.  System displays a message: "This ISBN already exists. Do you want to add more copies to the existing record?"
        2.  Librarian can choose to "Add Copies" or "Cancel."
    *   5b. If required fields are missing:
        1.  System highlights the missing fields and prompts the Librarian to fill them.

## 8. Important Points to Remember

*   Use cases focus on **functional requirements** and user goals.
*   They describe the **interaction** between actors and the system.
*   Clearly distinguish between **actors** (outside the system) and **users** (can be inside or outside, but typically refers to human interaction).
*   **Actors** are roles, not specific individuals.
*   Use cases should be written from the **user's perspective**.
*   **Preconditions** and **postconditions** are crucial for defining the context and outcome of a use case.
*   Use case diagrams provide a **visual overview** of system functionality.
*   While use cases are powerful for functional requirements, **non-functional requirements** need separate documentation.
*   They are highly adaptable and valuable in **agile development** for defining user stories and planning iterations (CO2, CO6).
*   They support **CO3 (Prepare SRS and Design)** by providing a clear basis for both.

This comprehensive set of notes covers the essential aspects of developing use cases, aligning with the provided learning outcomes and course outcomes by integrating concepts from the specified textbooks and reference materials.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
