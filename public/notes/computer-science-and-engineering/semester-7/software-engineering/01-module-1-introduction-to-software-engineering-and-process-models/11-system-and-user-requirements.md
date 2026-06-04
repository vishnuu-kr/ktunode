---
title: "System and User requirements."
subject: "SOFTWARE ENGINEERING"
module: "Module 1: Introduction to Software Engineering and Process Models "
branch: "Computer Science and Engineering"
semester: 7
topicId: "6841627a0fc9aa1fdbc8c885"
status: "completed"
scrapedAt: "2026-05-20T17:10:55.896Z"
---
# Software Engineering: Module 1 - Introduction to Software Engineering and Process Models

## Topic: System and User Requirements

This module introduces the fundamental concepts of Software Engineering, focusing on understanding and defining what a software system needs to do from both a user's and a system's perspective.

---

### 1. What are Software Requirements?

**Definition:** Software requirements are a description of the services a system should provide and the constraints under which it must operate. They are the foundation of any successful software development project.

**Key Aspects:**

*   **What the system *does* (functionality):** The specific tasks and operations the software must perform.
*   **How well it does it (non-functional aspects):** Performance, usability, reliability, security, maintainability, etc.
*   **Constraints on its operation:** Environmental limitations, legal requirements, hardware dependencies, etc.

---

### 2. Types of Requirements

There are generally two main categories of software requirements:

#### 2.1 User Requirements

**Definition:** User requirements are statements in natural language, supplemented with diagrams, that describe what the system should do for the user and the system's services from the *user's point of view*. They are understandable by the end-users who may not have a technical background.

**Characteristics:**

*   Written in natural language (e.g., English).
*   Focus on *what* the user wants to achieve.
*   Often less detailed and more abstract than system requirements.
*   Can be expressed as user stories or use cases.

**Examples:**

*   "The system shall allow users to register for an account."
*   "As a customer, I want to be able to search for products by name or category, so I can find what I'm looking for quickly."
*   "The system should display a confirmation message after a successful booking."

#### 2.2 System Requirements

**Definition:** System requirements are detailed descriptions of the system's functions, services, and operational constraints. They are intended for software engineers and designers to implement the system. They can be further categorized into functional and non-functional requirements.

**Characteristics:**

*   Written in a more formal and precise language, often using structured specifications.
*   Focus on *how* the system will achieve the user's goals.
*   Provide detailed specifications for implementation.

**Sub-categories of System Requirements:**

##### 2.2.1 Functional Requirements

**Definition:** Functional requirements specify *what* the system should do. They define the specific behaviors, functions, and interactions of the software.

**Examples:**

*   **User Login:**
    *   "The system shall authenticate users based on their provided username and password."
    *   "The system shall display an error message if the username or password is incorrect."
    *   "The system shall redirect the user to their dashboard upon successful login."
*   **Product Search:**
    *   "The system shall allow users to search for products by keyword."
    *   "The search results shall be displayed in a tabular format, showing product name, price, and availability."
    *   "The system shall handle cases where no products match the search criteria by displaying a 'No results found' message."
*   **Order Processing:**
    *   "The system shall calculate the total cost of items in the shopping cart, including applicable taxes and shipping fees."
    *   "The system shall allow users to select their preferred shipping address."

##### 2.2.2 Non-Functional Requirements (NFRs)

**Definition:** Non-functional requirements specify *how* the system should perform its functions. They define quality attributes and constraints on the system's operation.

**Key Characteristics:**

*   **Often more difficult to define and measure than functional requirements.**
*   **Critical for user satisfaction and system success.**
*   **Can be a source of project failure if not properly addressed.**

**Common Types of Non-Functional Requirements:**

*   **Performance:**
    *   **Definition:** How quickly and efficiently the system responds to user input or processes data.
    *   **Examples:**
        *   "The system shall load the product catalog page within 3 seconds under normal network conditions."
        *   "The system shall process a single transaction in less than 500 milliseconds."
        *   "The system should be able to handle 100 concurrent user requests without degradation in performance."
*   **Usability:**
    *   **Definition:** How easy the system is to learn, operate, and understand for its intended users.
    *   **Examples:**
        *   "A new user shall be able to complete the registration process with minimal training."
        *   "The interface shall follow established design guidelines (e.g., Material Design)."
        *   "Error messages shall be clear, concise, and provide actionable advice."
*   **Reliability:**
    *   **Definition:** The probability that the system will perform its intended functions without failure for a specified period under given conditions.
    *   **Examples:**
        *   "The system shall have an uptime of 99.9%."
        *   "The system shall recover from a network failure within 5 minutes."
        *   "Data integrity shall be maintained during system crashes."
*   **Security:**
    *   **Definition:** The measures taken to protect the system and its data from unauthorized access, use, disclosure, disruption, modification, or destruction.
    *   **Examples:**
        *   "All user passwords shall be stored securely using industry-standard encryption techniques."
        *   "The system shall prevent SQL injection attacks."
        *   "Access to sensitive user data shall be restricted based on user roles."
*   **Maintainability:**
    *   **Definition:** The ease with which the software can be modified to correct defects, improve performance, or adapt to a changing environment.
    *   **Examples:**
        *   "The codebase shall adhere to coding standards and be well-documented."
        *   "Changes to the pricing module should not affect the user authentication module."
        *   "The system should be designed for ease of deployment of new versions."
*   **Portability:**
    *   **Definition:** The ease with which the software can be transferred from one environment to another.
    *   **Examples:**
        *   "The system shall be deployable on both Windows and Linux operating systems."
        *   "The database schema shall be compatible with MySQL and PostgreSQL."
*   **Scalability:**
    *   **Definition:** The ability of the system to handle an increasing amount of work or its potential to be enlarged to accommodate that growth.
    *   **Examples:**
        *   "The system shall be able to support up to 10,000 registered users."
        *   "The system should scale to handle a 50% increase in transaction volume within 1 year."

---

### 3. The Requirements Engineering Process

**Definition:** Requirements engineering is the process of eliciting, analyzing, specifying, and validating requirements for a software system. It's an iterative and ongoing process throughout the software development lifecycle.

**Key Activities:**

*   **Requirements Elicitation (Gathering):**
    *   **Definition:** Discovering the needs of users and stakeholders.
    *   **Techniques:** Interviews, questionnaires, workshops, brainstorming, observation, studying existing systems, prototyping.
    *   **Challenges:** Stakeholder availability, communication barriers, unclear objectives, conflicting requirements, discovering implicit needs.

*   **Requirements Analysis:**
    *   **Definition:** Understanding and refining elicited requirements, identifying inconsistencies, ambiguities, and incompleteness.
    *   **Activities:** Classifying requirements, identifying dependencies, modeling requirements (e.g., data flow diagrams, state charts), prioritizing requirements.

*   **Requirements Specification (Documentation):**
    *   **Definition:** Documenting the requirements in a clear, concise, and unambiguous manner.
    *   **Output:** Software Requirements Specification (SRS) document.
    *   **Key Document:** The SRS is a crucial artifact that serves as a contract between the developers and the customer.

*   **Requirements Validation:**
    *   **Definition:** Ensuring that the specified requirements are correct, complete, consistent, and meet the actual needs of the stakeholders.
    *   **Techniques:** Reviews (walkthroughs, inspections), prototyping, testing (though testing primarily validates implementation against requirements).

---

### 4. The Software Requirements Specification (SRS) Document

**Definition:** An SRS document is a comprehensive description of what the software system will do. It serves as the primary communication tool between stakeholders and the development team.

**Key Sections/Content of an SRS:**

*   **Introduction:**
    *   Purpose of the document.
    *   Scope of the software.
    *   Definitions, acronyms, and abbreviations.
    *   References.
    *   Overview of the rest of the document.
*   **Overall Description:**
    *   Product perspective (how it fits into a larger system).
    *   Product functions (summary of capabilities).
    *   User characteristics.
    *   Constraints (e.g., hardware, regulatory).
    *   Assumptions and dependencies.
*   **Specific Requirements:**
    *   **Functional Requirements:** Detailed description of each function.
    *   **Non-Functional Requirements:** Performance, usability, reliability, security, etc.
    *   **Interface Requirements:** User interfaces, hardware interfaces, software interfaces, communication interfaces.
    *   **Data Requirements:** Data models, data formats.
*   **Appendices (Optional):**
    *   Glossary.
    *   Analysis models.
    *   Issues list.

---

### 5. Importance of Good Requirements

**Why are well-defined requirements crucial?**

*   **Reduce development cost and time:** Clear requirements minimize rework due to misunderstandings or changes.
*   **Improve product quality:** Ensures the software meets user needs and quality standards.
*   **Facilitate better communication:** A common understanding among stakeholders.
*   **Provide a basis for testing:** Requirements guide the creation of test cases.
*   **Aid in project management:** Helps in planning, estimation, and progress tracking.
*   **Reduce project risk:** Addresses potential issues early in the development cycle.

**Consequences of Poor Requirements:**

*   **Rework and cost overruns.**
*   **Project delays.**
*   **Dissatisfied users/customers.**
*   **Software that doesn't meet needs.**
*   **Increased maintenance costs.**
*   **Project failure.**

---

### 6. Process Models and Requirements

**Understanding the link between process models and requirements:**

*   **Waterfall Model:** Requirements are gathered and finalized upfront before design and coding begin. This is a sequential approach, making it crucial to get requirements right in the first phase.
*   **Agile Models (e.g., Scrum, Kanban):** Requirements are managed and evolved iteratively. User stories and backlogs are central. Requirements are refined and prioritized in short cycles, allowing for flexibility and adaptation to change.

**Key takeaway:** Regardless of the process model, understanding and managing requirements effectively is paramount.

---

### 7. Practice Questions and Exercises

**Question 1:** Differentiate between user requirements and system requirements. Provide an example for each for an online banking system.

**Question 2:** List at least five types of non-functional requirements and give a specific example for each, related to a video streaming service.

**Question 3:** Briefly explain the four main activities involved in the requirements engineering process.

**Question 4:** What is the purpose of a Software Requirements Specification (SRS) document?

**Question 5:** Why is it important to have well-defined software requirements?

---

### Answers to Practice Questions

**Answer 1:**
*   **User Requirements:** Statements in natural language describing what the system should do from the *user's point of view*. They are easy for non-technical users to understand.
    *   **Example (Online Banking):** "As a customer, I want to be able to view my account balance and transaction history, so I can track my spending."
*   **System Requirements:** Detailed descriptions of the system's functions, services, and constraints, intended for developers. They include functional and non-functional requirements.
    *   **Example (Online Banking - Functional):** "The system shall display the current balance of the selected account to the authenticated user."
    *   **Example (Online Banking - Non-functional):** "The transaction history page shall load within 2 seconds."

**Answer 2:**
1.  **Performance:** How quickly the system responds.
    *   **Example (Video Streaming):** "The video shall start playing within 5 seconds of clicking the play button."
2.  **Usability:** How easy the system is to use.
    *   **Example (Video Streaming):** "The playback controls (play, pause, volume) shall be easily accessible and intuitive."
3.  **Reliability:** The system's dependability.
    *   **Example (Video Streaming):** "The streaming service shall maintain a playback buffer to minimize interruptions during playback."
4.  **Security:** Protection of data and access.
    *   **Example (Video Streaming):** "User payment information shall be encrypted during transmission and stored securely."
5.  **Maintainability:** Ease of modification.
    *   **Example (Video Streaming):** "The system should allow for the easy addition of new video codecs without requiring significant code changes."

**Answer 3:** The four main activities are:
1.  **Requirements Elicitation:** Discovering user needs.
2.  **Requirements Analysis:** Understanding and refining needs, identifying conflicts.
3.  **Requirements Specification:** Documenting requirements (e.g., in an SRS).
4.  **Requirements Validation:** Ensuring the documented requirements are correct and meet stakeholder needs.

**Answer 4:** The purpose of an SRS document is to provide a comprehensive and unambiguous description of what the software system is intended to do. It serves as a contract and a primary communication tool between stakeholders and the development team, guiding the design, implementation, and testing phases.

**Answer 5:** Well-defined requirements are important because they:
*   Reduce development costs and time by minimizing rework.
*   Improve product quality by ensuring the software meets user needs.
*   Facilitate better communication and understanding among all parties involved.
*   Provide a solid basis for testing and validation.
*   Help in accurate project planning and estimation.
*   Mitigate project risks by identifying and addressing issues early.

---

### Important Points to Remember

*   **Requirements are the foundation of software development.** Get them wrong, and the whole project is at risk.
*   **User requirements focus on *what* users want to achieve, while system requirements detail *how* the system will achieve it.**
*   **Non-functional requirements are as critical as functional requirements for user satisfaction and system success.** Don't neglect them!
*   **Requirements engineering is an iterative process.** It's rare to get requirements perfectly right the first time.
*   **Clear, concise, and unambiguous documentation (like the SRS) is vital for effective communication.**
*   **Stakeholder involvement is crucial throughout the requirements process.**

---
