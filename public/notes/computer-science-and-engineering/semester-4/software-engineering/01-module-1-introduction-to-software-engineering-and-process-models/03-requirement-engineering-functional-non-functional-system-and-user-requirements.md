---
title: "Requirement engineering - Functional, Non-functional, System and User requirements."
subject: "SOFTWARE ENGINEERING"
module: "Module 1: Introduction to Software Engineering and Process Models "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162750fc9aa1fdbc8b07e"
status: "completed"
scrapedAt: "2026-05-20T16:16:41.350Z"
---
# SOFTWARE ENGINEERING - MODULE 1: Requirement Engineering

## Topic: Requirement Engineering - Functional, Non-functional, System and User Requirements

**Learning Outcomes:**

*   Understand the importance of requirements engineering in software development.
*   Define and differentiate between functional and non-functional requirements.
*   Distinguish between system and user requirements.
*   Identify different techniques for eliciting requirements.
*   Learn how to document and manage requirements effectively.

---

### 1. Introduction to Requirement Engineering

*   **Definition:** Requirement Engineering (RE) is the process of defining, documenting, and maintaining requirements in the software development lifecycle. It involves all activities related to discovering, analyzing, specifying, and verifying that a software system meets the needs of its users and stakeholders.

*   **Importance:**
    *   Foundation for successful software development.
    *   Reduces development costs (fixes are cheaper early).
    *   Ensures user satisfaction.
    *   Minimizes project risks and failures.
    *   Provides a clear understanding of the system's purpose.

*   **Key Activities:**
    *   **Elicitation:** Gathering requirements from stakeholders.
    *   **Analysis:** Understanding, classifying, and resolving conflicts in requirements.
    *   **Specification:** Documenting the requirements in a clear and precise manner.
    *   **Validation:** Checking that the requirements are correct, complete, and consistent.
    *   **Management:** Controlling changes to requirements throughout the project lifecycle.

---

### 2. Types of Requirements

#### 2.1 Functional Requirements

*   **Definition:**  Describe what the software *should do*. They specify the functions or services the system is expected to provide. They detail the system's behavior under specific conditions.

*   **Characteristics:**
    *   Describe specific actions.
    *   Focus on features and functionality.
    *   Are often expressed as "The system shall..." statements.
    *   Are verifiable through testing.

*   **Examples:**
    *   "The system shall allow users to log in with a valid username and password."
    *   "The system shall calculate the total price of items in the shopping cart."
    *   "The system shall generate a report of sales data for a specified period."

*   **Key Questions to Ask:**
    *   What functionalities should the system provide?
    *   How should the system respond to specific user inputs?
    *   What data transformations should the system perform?

#### 2.2 Non-Functional Requirements

*   **Definition:** Describe how well the software *should do it*. They specify the qualities or constraints that the system must satisfy. These requirements are often related to the system's performance, security, usability, reliability, and maintainability.

*   **Characteristics:**
    *   Describe qualities or attributes.
    *   Focus on the system's operation and constraints.
    *   Are often expressed as "The system should be..." statements.
    *   Can be difficult to test directly, often involving performance benchmarks and user feedback.

*   **Categories:**
    *   **Performance:** Response time, throughput, resource utilization.
    *   **Security:** Authentication, authorization, data encryption.
    *   **Usability:** Ease of use, learnability, accessibility.
    *   **Reliability:** Availability, fault tolerance, recovery.
    *   **Maintainability:** Modularity, code quality, testability.
    *   **Portability:** Ability to run on different platforms.

*   **Examples:**
    *   "The system shall respond to user requests within 2 seconds." (Performance)
    *   "The system shall encrypt all sensitive data stored in the database." (Security)
    *   "The system shall be easy to use for users with limited technical skills." (Usability)
    *   "The system shall be available 99.99% of the time." (Reliability)
    *   "The system shall be easily modifiable to accommodate future changes." (Maintainability)

*   **Key Questions to Ask:**
    *   How fast should the system respond?
    *   How secure should the system be?
    *   How easy should the system be to use?
    *   How reliable should the system be?

#### 2.3 System Requirements

*   **Definition:** Detailed specifications of the system's functionalities and characteristics. They are derived from user requirements and provide a comprehensive description of what the system must do.  Often documented in a Software Requirements Specification (SRS).

*   **Characteristics:**
    *   Technical description of the system.
    *   Includes both functional and non-functional details.
    *   Serve as a basis for design and implementation.
    *   May specify hardware and software dependencies.

*   **Example:**  A system requirement for an online bookstore might be "The system shall use a relational database management system (RDBMS) to store customer and book information." This stems from a user requirement to securely store their information and allows the system to perform searching, sorting and more.

#### 2.4 User Requirements

*   **Definition:** High-level descriptions of the system's functionalities and characteristics from the perspective of the users.  They describe what the users need the system to do, often in natural language.

*   **Characteristics:**
    *   Expressed in user-friendly terms.
    *   Focus on user goals and tasks.
    *   Serve as a basis for system requirements.
    *   Often documented in a user story or use case format.

*   **Example:** A user requirement for an online bookstore might be "As a user, I want to be able to search for books by title, author, or ISBN." This would then be used to define the system requirements.

*   **Relationship to System Requirements:** System requirements provide a more detailed and technical specification of the system, derived from the high-level user requirements.

*   **Comparison Table:**

| Feature        | User Requirements                       | System Requirements                                    |
|----------------|------------------------------------------|-------------------------------------------------------|
| Perspective    | User's view                             | Developer's view                                     |
| Level of Detail | High-level                              | Detailed and technical                               |
| Language       | Natural language                        | Technical language, often formal specifications     |
| Purpose       | Define user needs                       | Provide a basis for design and implementation         |
| Examples       | "Search for books easily"               | "Implement a search function using Elasticsearch"      |

---

### 3. Requirement Elicitation Techniques

*   **Interviews:** Talking to stakeholders to gather information.
*   **Questionnaires:** Distributing surveys to collect feedback from a large group.
*   **Workshops:** Facilitating group discussions to identify requirements.
*   **Brainstorming:** Generating ideas and requirements in a collaborative setting.
*   **Use Cases:** Describing how users will interact with the system.
*   **User Stories:** Short, simple descriptions of a feature told from the perspective of the end-user.
*   **Prototyping:** Creating a preliminary version of the system to gather feedback.
*   **Document Analysis:** Reviewing existing documents and systems.
*   **Observation:** Watching users perform their tasks to understand their needs.

---

### 4. Requirement Documentation

*   **Software Requirements Specification (SRS):** A comprehensive document that describes all of the functional and non-functional requirements of a software system. It serves as a contract between the development team and the stakeholders.
    *   **Key Components:**
        *   Introduction: Purpose, scope, definitions.
        *   Overall Description: System perspective, functions, assumptions.
        *   External Interfaces: User interfaces, hardware interfaces, software interfaces, communication interfaces.
        *   System Features: Detailed descriptions of functionalities.
        *   Non-functional Requirements: Performance, security, usability, etc.
        *   Other Requirements: Data requirements, legal/regulatory requirements.

*   **User Stories:**  A common way to capture user requirements, especially in Agile development.  Format: "As a [user role], I want [goal] so that [benefit]".

*   **Use Case Diagrams:**  Visual representations of how actors interact with the system.

---

### 5. Requirement Management

*   **Change Management:**  Controlling and tracking changes to requirements.
*   **Traceability:**  Linking requirements to design, code, and tests.  Ensures all requirements are implemented and tested.
*   **Version Control:**  Managing different versions of requirements documents.
*   **Prioritization:**  Ranking requirements based on their importance.

---

### Practice Questions/Exercises:

1.  **Identify whether the following are Functional (F) or Non-Functional (NF) requirements:**
    *   ( ) The system shall allow users to reset their passwords.
    *   ( ) The system shall be compatible with Chrome, Firefox, and Safari browsers.
    *   ( ) The system shall process transactions within 1 second.
    *   ( ) The system shall provide a user-friendly interface.
    *   ( ) The system shall generate a monthly sales report.

2.  **Provide an example of a User Requirement and a corresponding System Requirement for an online banking application.**

3.  **List three requirement elicitation techniques and describe a situation where each would be most effective.**

4.  **Why is traceability important in requirements management?**

---

### Answers to Practice Questions/Exercises:

1.  *   (F) The system shall allow users to reset their passwords.
    *   (NF) The system shall be compatible with Chrome, Firefox, and Safari browsers.
    *   (NF) The system shall process transactions within 1 second.
    *   (NF) The system shall provide a user-friendly interface.
    *   (F) The system shall generate a monthly sales report.

2.  *   **User Requirement:** "As a user, I want to be able to transfer funds between my accounts."
    *   **System Requirement:** "The system shall provide a 'Transfer Funds' feature that allows users to transfer funds between their linked accounts.  The system shall validate the account balances and prevent overdrafts.  A log of all transfer transactions shall be created and maintained."

3.  *   **Interviews:** Best used when you need in-depth information from key stakeholders and want to explore their needs in detail.
    *   **Workshops:** Best used when you need to gather requirements from a group of stakeholders with conflicting needs and want to reach a consensus.
    *   **Prototyping:** Best used when the requirements are unclear or when you want to get early feedback on the system's design.

4.  Traceability is important because it ensures that all requirements are implemented and tested.  It allows developers to easily track how each requirement is translated into design elements and code. It also helps testers verify that all requirements have been adequately addressed in the testing process.  Traceability helps to manage changes, understand the impact of modifications, and reduce the risk of overlooking important aspects of the system.

---

### Important Points to Remember:

*   Requirement engineering is a crucial phase in the software development lifecycle.
*   Clearly defined and well-managed requirements are essential for project success.
*   Understanding the different types of requirements (functional, non-functional, user, system) is vital.
*   Appropriate requirement elicitation techniques should be chosen based on the project context.
*   Effective documentation and management of requirements are essential for controlling changes and ensuring traceability.
