---
title: "FDD"
subject: "SOFTWARE PROJECT MANAGEMENT"
module: "Module 3: Agile Project Management "
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162760fc9aa1fdbc8b693"
status: "completed"
scrapedAt: "2026-05-20T16:49:14.893Z"
---
## Software Project Management: Module 3 - Agile Project Management: Feature-Driven Development (FDD)

**Module:** Module 3: Agile Project Management
**Topic:** Feature-Driven Development (FDD)

**Learning Outcomes:**

*   Understand the core principles and processes of Feature-Driven Development (FDD).
*   Describe the five basic activities in the FDD process.
*   Explain the roles and responsibilities within an FDD team.
*   Apply the FDD methodology to a software development project.
*   Identify the benefits and drawbacks of using FDD compared to other Agile methodologies.

---

### 1. Introduction to Feature-Driven Development (FDD)

*   **Definition:** Feature-Driven Development (FDD) is an iterative and incremental software development methodology that focuses on designing and building features. It's a model-driven, short-iteration process.
*   **Key Principles:**
    *   **Domain Object Modeling:** Central to FDD, focusing on creating a comprehensive domain model.
    *   **Developing by Feature:** Projects are broken down into small, client-valued features.
    *   **Individual Class Ownership:** Each class or component is owned by a single developer.
    *   **Feature Teams:** Small, dynamic teams are formed to develop features.
    *   **Inspections:** Emphasizes thorough code and design inspections.
    *   **Configuration Management:** Strict configuration management practices are followed.
    *   **Regular Build Schedule:** Frequent builds ensure continuous integration.
    *   **Visibility of Progress & Results:** Progress is tracked and made visible to stakeholders.

### 2. The Five Basic Activities of FDD

FDD follows a specific process consisting of five key activities:

1.  **Develop an Overall Model:**
    *   **Goal:** To establish a high-level domain object model of the system.
    *   **Process:**
        *   Gather subject matter experts (SMEs).
        *   Conduct domain walkthroughs and discussions.
        *   Develop initial class diagrams representing the system's entities and relationships.
    *   **Output:** A high-level domain object model that serves as the foundation for the project.
    *   **Example:** Creating an initial class diagram for an e-commerce system including classes like `Customer`, `Product`, `Order`, and `Payment`.

2.  **Build a Features List:**
    *   **Goal:** To identify and define all the features to be included in the software.
    *   **Process:**
        *   Break down the high-level domain into smaller areas.
        *   For each area, identify the specific features that need to be developed.
        *   Features are typically expressed in the format: `<action> the <result> [by/for/of <object>]`.
    *   **Output:** A hierarchical list of features, organized by domain area.
    *   **Example:**  Features for an e-commerce system might include:
        *   "Add a product to the shopping cart"
        *   "Calculate the total cost of the order"
        *   "Process the payment using credit card"

3.  **Plan by Feature:**
    *   **Goal:** To create a high-level plan for developing the features.
    *   **Process:**
        *   Assign features to feature teams or individual developers.
        *   Estimate the time and effort required for each feature.
        *   Develop a schedule based on feature dependencies and priorities.
    *   **Output:** A high-level project schedule that outlines the order in which features will be developed.
    *   **Example:** Creating a Gantt chart showing the planned start and end dates for each feature, considering dependencies between features.

4.  **Design by Feature:**
    *   **Goal:** To create detailed design specifications for each feature.
    *   **Process:**
        *   The Chief Programmer identifies the classes involved in the feature.
        *   The Chief Programmer and the developers involved in the feature conduct a design inspection.
        *   The feature team refines the domain object model to incorporate the new functionality.
        *   Sequence diagrams are often used to visualize the interactions between objects.
    *   **Output:** A detailed design document that describes how the feature will be implemented.
    *   **Example:** Developing a sequence diagram illustrating the interaction between the `Customer`, `ShoppingCart`, and `Product` classes when adding a product to the shopping cart.

5.  **Build by Feature:**
    *   **Goal:** To implement the feature and integrate it into the system.
    *   **Process:**
        *   Developers implement the feature based on the design specifications.
        *   Unit tests are written to ensure the feature functions correctly.
        *   Code is inspected and integrated into the main codebase.
    *   **Output:** A working, tested, and integrated feature.
    *   **Example:** Writing Java code to implement the "Add a product to the shopping cart" feature and creating JUnit tests to verify that the feature works as expected.

### 3. Roles and Responsibilities in FDD

FDD defines specific roles with clear responsibilities:

*   **Project Manager:** Oversees the project, manages resources, and ensures the project stays on track.
*   **Chief Architect:** Responsible for the overall system architecture and technical direction.
*   **Development Manager:** Manages the development team, provides guidance, and removes impediments.
*   **Chief Programmer:** Leads the design and development of individual features. They are experienced developers who mentor other team members.
*   **Domain Experts:** Provide knowledge about the business domain and requirements.
*   **Class Owner:** Responsible for the implementation and maintenance of one or more classes or components.
*   **Testers:**  Responsible for testing the features and ensuring they meet the requirements.

### 4. Applying FDD to a Software Development Project

Applying FDD involves a series of iterations, each focused on delivering a specific set of features.

*   **Iteration Length:** Typically 2 weeks or less.
*   **Focus:** Each iteration focuses on delivering a small set of features.
*   **Progress Tracking:** Progress is measured by the number of features completed.
*   **Continuous Integration:** Features are integrated into the system on a regular basis.

**Example: Online Bookstore Project**

1.  **Develop an Overall Model:** Create a domain model showing entities like `Book`, `Author`, `Customer`, `Order`, `Payment`, etc.
2.  **Build a Features List:** Break down the project into features like:
    *   "Search for a book by title"
    *   "Browse books by genre"
    *   "Add a book to the shopping cart"
    *   "Process credit card payment"
3.  **Plan by Feature:** Estimate the effort for each feature and assign them to feature teams. Create a schedule.
4.  **Design by Feature:** For the "Search for a book by title" feature, design the classes and methods involved, possibly using a sequence diagram to illustrate the search process.
5.  **Build by Feature:**  Implement the "Search for a book by title" feature, write unit tests, and integrate it into the bookstore application.

### 5. Benefits and Drawbacks of FDD

**Benefits:**

*   **Simple and Understandable:** The FDD process is relatively straightforward and easy to understand.
*   **Scalable:**  Can be used on projects of various sizes.
*   **Focus on Deliverable Features:**  Ensures that the project delivers valuable functionality to the customer.
*   **Visibility of Progress:**  Progress is tracked by the number of features completed, providing clear visibility to stakeholders.
*   **Code Quality:**  Emphasis on code and design inspections helps to improve code quality.

**Drawbacks:**

*   **Requires Experienced Developers:**  Relies heavily on experienced developers, particularly the Chief Programmer.
*   **Less Flexible Than Other Agile Methods:**  FDD is more structured and less adaptable to changing requirements compared to Scrum or Kanban.
*   **Can Be Overly Process-Oriented:**  The emphasis on process can be seen as bureaucratic by some teams.
*   **Domain Model Knowledge is Crucial:** Requires strong domain knowledge.

### 6. FDD vs. Other Agile Methodologies

*   **FDD vs. Scrum:**
    *   **Scrum:** Focuses on short sprints with a product backlog.
    *   **FDD:** Focuses on features and uses a more structured process.
    *   **Difference:** Scrum is more flexible and adaptable to change, while FDD is more structured and predictable.
*   **FDD vs. XP (Extreme Programming):**
    *   **XP:** Emphasizes practices like pair programming and test-driven development.
    *   **FDD:** Focuses on feature development and uses inspections to improve code quality.
    *   **Difference:** XP is more extreme in its practices, while FDD is more practical for larger projects.

### 7. Important Points to Remember

*   FDD is feature-centric.  Everything revolves around delivering valuable features.
*   A strong domain model is essential for success.
*   Code inspections are crucial for maintaining quality.
*   FDD is best suited for projects with well-defined requirements and a need for structure.
*   The Chief Programmer role is critical.
*   Feature Teams are small and focused.

### 8. Practice Questions and Exercises

**Question 1:** What are the five basic activities in the FDD process? Briefly describe each activity.

**Answer:** The five basic activities are:

1.  **Develop an Overall Model:** Create a high-level domain object model of the system.
2.  **Build a Features List:** Identify and define all the features to be included in the software.
3.  **Plan by Feature:** Create a high-level plan for developing the features.
4.  **Design by Feature:** Create detailed design specifications for each feature.
5.  **Build by Feature:** Implement the feature and integrate it into the system.

**Question 2:** What is the typical format for expressing a feature in FDD? Provide an example.

**Answer:** The typical format is: `<action> the <result> [by/for/of <object>]`.  Example: "Calculate the total cost of the order"

**Question 3:** What are the advantages of using FDD compared to other Agile methodologies?

**Answer:** Advantages include its simplicity, scalability, focus on deliverable features, visibility of progress, and emphasis on code quality.

**Question 4:** What are the disadvantages of using FDD compared to other Agile methodologies?

**Answer:** Disadvantages include its reliance on experienced developers, reduced flexibility, potential for being overly process-oriented, and its dependence on strong domain knowledge.

**Exercise:**

Consider a project to develop a simple online library system. Create a list of at least 5 features that would be developed using FDD.  Express each feature using the standard FDD format.

**Answer:**

1.  "Search for a book by ISBN"
2.  "Borrow a book for a user"
3.  "Return a book by a user"
4.  "Add a new book to the library"
5.  "Generate a report of overdue books"
---
This comprehensive set of notes covers the key aspects of Feature-Driven Development (FDD) as a software project management methodology, specifically within the context of Agile project management. It provides detailed explanations, examples, and practice exercises to facilitate a strong understanding of the topic. Remember to review and practice applying these concepts to real-world scenarios for a more in-depth understanding. Good luck with your studies!
