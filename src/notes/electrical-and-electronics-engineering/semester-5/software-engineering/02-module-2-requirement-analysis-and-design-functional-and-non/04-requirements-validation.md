---
title: "Requirements validation"
subject: "SOFTWARE ENGINEERING"
module: "Module 2: Requirement Analysis and Design: Functional and non"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f3633c"
status: "completed"
scrapedAt: "2026-05-23T16:24:13.336Z"
---
# Software Engineering: Module 2 - Requirement Analysis and Design: Functional and Non-Functional Requirements

## Topic: Requirements Validation

### 1. Introduction to Requirements Validation

Requirements validation is a critical activity in the software development lifecycle. It aims to ensure that the developed software meets the actual needs of the users and stakeholders. It is about checking that we are building the **right system**.

**Key Concept:** **Building the right system** vs. **Building the system right**.
*   **Building the right system:** Focuses on understanding and fulfilling the user's needs and expectations (addressed by requirements validation).
*   **Building the system right:** Focuses on the quality of the implementation, adherence to design principles, and coding standards (addressed by verification activities like testing).

**Importance of Requirements Validation:**
*   **Reduces rework and costs:** Identifying errors early in the lifecycle is significantly cheaper than fixing them later in the development or post-deployment phases.
*   **Increases customer satisfaction:** Ensures the delivered software actually solves the intended problem and meets user expectations.
*   **Minimizes project risks:** Unmet or misunderstood requirements are a major cause of project failure.
*   **Improves overall software quality:** A well-validated set of requirements forms a solid foundation for the entire development process.

**(Reference: Sommerville, Chapter 6 - Requirements Validation; Pressman, Chapter 6 - Requirements Modeling, Sub-section: Verification and Validation)**

---

### 2. Activities in Requirements Validation

Requirements validation involves a set of techniques and activities to confirm that the requirements are:

*   **Correct:** Accurately reflect the user's needs.
*   **Complete:** All necessary functionalities and constraints are captured.
*   **Consistent:** No contradictions exist within or between requirements.
*   **Unambiguous:** Clearly stated and have only one interpretation.
*   **Verifiable:** Can be tested or demonstrated to be met.
*   **Traceable:** Can be traced back to their origin and forward to design and implementation.
*   **Feasible:** Achievable within the given constraints (time, budget, technology).
*   **Relevant:** Necessary for the system's intended purpose.

**(Reference: Sommerville, Chapter 6 - Requirements Validation)**

---

### 3. Techniques for Requirements Validation

Several techniques are employed for validating requirements. These can be broadly categorized into:

#### 3.1. Reviews (Inspection & Walkthroughs)

This is a manual process where stakeholders and development team members examine the requirements documentation to identify errors, omissions, and inconsistencies.

*   **Key Concepts:**
    *   **Inspections:** Formal, structured reviews with a defined process, roles (moderator, reader, recorder, inspector), and checklists. The goal is to find defects.
    *   **Walkthroughs:** Less formal, often led by the author, where the requirements are presented to a group for feedback. The goal is to improve the quality of the document and gain understanding.
    *   **Peer Reviews:** Informal reviews conducted by team members.
*   **Process:**
    1.  **Preparation:** Reviewers study the requirements document.
    2.  **Meeting:** Reviewers discuss the document, highlighting issues.
    3.  **Rework:** The author addresses the identified issues.
    4.  **Follow-up:** The moderator ensures all issues are resolved.
*   **Benefits:**
    *   Identifies a wide range of errors, including inconsistencies, missing requirements, and ambiguous statements.
    *   Promotes shared understanding among team members.
    *   Can detect logical errors and deviations from standards.
*   **Example:** A functional requirement states, "The system shall allow users to log in." During a review, a team member might point out that it's unclear what constitutes valid login credentials (username/password, biometrics, etc.) and what happens upon a failed login attempt. This leads to the refinement of the requirement.
*   **Alignment:** Supports **CO1** (interpreting requirements), **CO3** (preparing SRS), and **CO5** (software review techniques).

**(Reference: Sommerville, Chapter 6.2 - Reviews; Pressman, Chapter 7 - Requirements Analysis, Sub-section: Requirements Validation Techniques, focusing on Inspections and Walkthroughs)**

---

#### 3.2. Prototyping

Building a working model (prototype) of the system or its key features to get feedback from users.

*   **Key Concepts:**
    *   **Throwaway Prototyping:** The prototype is built to understand requirements, and then discarded.
    *   **Evolutionary Prototyping:** The prototype is iteratively developed and refined to become the final system.
*   **Process:**
    1.  **Identify requirements to be prototyped:** Focus on areas of uncertainty or high user interaction.
    2.  **Develop a prototype:** Can be a paper prototype, screen mock-ups, or a simple executable version.
    3.  **Demonstrate and collect feedback:** Users interact with the prototype and provide input.
    4.  **Refine requirements:** Based on feedback, requirements are adjusted.
*   **Benefits:**
    *   Provides a tangible representation of the system, making it easier for users to understand and validate.
    *   Helps uncover missing or misunderstood requirements.
    *   Improves user involvement and buy-in.
*   **Example:** For a new e-commerce website, a clickable wireframe prototype can be built to demonstrate the checkout process. Users can click through the steps, and developers can observe their interactions and gather feedback on usability and missing features.
*   **Alignment:** Directly supports **CO1** (handling changes with prototyping).

**(Reference: Sommerville, Chapter 6.3 - Prototyping; Pressman, Chapter 6 - Requirements Modeling, Sub-section: Prototyping)**

---

#### 3.3. Scenario-Based Validation (Use Case Analysis)

Using use cases or user stories to simulate typical user interactions with the system and validate the requirements.

*   **Key Concepts:**
    *   **Use Cases:** Describe how an actor interacts with the system to achieve a specific goal.
    *   **User Stories:** Short, simple descriptions of a feature told from the perspective of the person who desires the new capability, usually a user or customer.
    *   **Scenarios:** Specific instances of a use case or user story.
*   **Process:**
    1.  **Define scenarios:** Create sequences of user actions and system responses for typical and exceptional cases.
    2.  **Execute scenarios:** Mentally or manually "run" these scenarios against the requirements specification.
    3.  **Identify issues:** Look for gaps, inconsistencies, or ambiguities in the requirements that prevent the scenario from being fully described or executed.
*   **Benefits:**
    *   Focuses validation on how users actually interact with the system.
    *   Helps uncover functional requirements, but also non-functional aspects like performance or usability.
    *   Provides a more concrete context for validating requirements.
*   **Example:** For a banking system, a scenario could be: "A customer wants to check their account balance. The customer logs in, selects 'Check Balance', and the system displays the current balance." Validating this scenario ensures that login, balance display, and the associated navigation are correctly specified.
*   **Alignment:** Supports **CO1** (interpreting requirements), **CO3** (preparing SRS), and **CO2** (agile methods, often using user stories).

**(Reference: Sommerville, Chapter 6.4 - Scenario-Based Validation; Pressman, Chapter 6 - Requirements Modeling, Sub-section: Requirements Validation Techniques, focusing on Use Cases)**

---

#### 3.4. Automated Static Analysis

Using tools to automatically analyze the requirements specification for potential issues like inconsistencies, undefined terms, or deviations from standards.

*   **Key Concepts:**
    *   **Static Analysis:** Analysis of software artifacts without executing them.
    *   **Natural Language Processing (NLP):** Techniques used by tools to understand and process human language in requirement documents.
*   **Process:**
    1.  **Tool Selection:** Choose a static analysis tool suitable for requirements specifications.
    2.  **Configuration:** Configure the tool with relevant rules and standards.
    3.  **Execution:** Run the tool on the requirements document.
    4.  **Review Results:** Analyze the reports generated by the tool to identify potential issues.
*   **Benefits:**
    *   Efficiently detects common errors that might be missed in manual reviews.
    *   Ensures adherence to predefined quality standards.
    *   Can be integrated into the development workflow for continuous checking.
*   **Example:** A static analysis tool might flag a sentence like "The system should be fast" as ambiguous because "fast" is not quantifiable. It might also flag duplicate requirements or requirements with conflicting constraints.
*   **Alignment:** Supports **CO3** (preparing SRS) and indirectly **CO5** (code management principles, as similar principles apply to requirements).

**(Reference: Sommerville, Chapter 6.2 - Reviews (mentions tools can assist))**

---

#### 3.5. Formal Methods (Less Common for General Validation, More for Verification)

Using mathematical notations to specify and analyze requirements. While primarily used for verification, their rigorous nature can uncover ambiguities in specifications.

*   **Key Concepts:**
    *   **Formal Specification:** Mathematical description of system behavior.
    *   **Formal Verification:** Proving that a specification or implementation meets its formal requirements.
*   **Benefits:**
    *   Can provide a very high level of assurance about the correctness of requirements.
    *   Excellent for critical systems where errors can have severe consequences.
*   **Limitations:**
    *   Requires specialized expertise.
    *   Can be expensive and time-consuming.
    *   Not always practical for all types of requirements.
*   **Alignment:** Relates to the broader concept of ensuring correctness, but less directly a primary validation technique in most contexts compared to reviews or prototyping.

**(Reference: Sommerville, Chapter 6.5 - Formal Methods (as a validation technique, though more prominent in verification))**

---

### 4. Validating Non-Functional Requirements

Non-functional requirements (NFRs) are often harder to validate than functional requirements because they describe qualities rather than specific actions.

**Key Concepts:**
*   **Performance:** Response time, throughput, resource utilization.
*   **Usability:** Ease of use, learnability, user satisfaction.
*   **Reliability:** Mean Time Between Failures (MTBF), availability.
*   **Security:** Access control, data protection, vulnerability to attacks.
*   **Maintainability:** Ease of modification, bug fixing.
*   **Portability:** Ability to run on different platforms.

**Validation Techniques for NFRs:**
*   **Performance:**
    *   **Benchmarking:** Comparing system performance against industry standards or similar systems.
    *   **Load Testing/Stress Testing:** Simulating high user loads or resource constraints to measure performance under stress.
    *   **Performance Modeling:** Using mathematical models to predict performance.
*   **Usability:**
    *   **User Surveys and Questionnaires:** Gathering subjective feedback on ease of use.
    *   **Usability Testing:** Observing users performing tasks with the system (can be done with prototypes or early versions).
    *   **Heuristic Evaluation:** Expert review against established usability principles.
*   **Reliability:**
    *   **Failure Analysis:** Analyzing past failures to estimate future failure rates.
    *   **Availability Modeling:** Calculating system uptime.
    *   **Fault Injection Testing:** Intentionally introducing faults to observe system behavior.
*   **Security:**
    *   **Penetration Testing:** Simulating attacks to identify vulnerabilities.
    *   **Security Audits:** Reviewing security policies and controls.
    *   **Vulnerability Scanning:** Using tools to identify known security flaws.
*   **General NFR Validation:**
    *   **Checklists:** Using predefined lists of questions related to NFRs during reviews.
    *   **Metrics:** Defining measurable metrics for NFRs (e.g., "Login response time must be less than 2 seconds").
    *   **Traceability:** Ensuring NFRs are traced to design decisions and test cases that verify them.

**Example:** For a security requirement "The system must protect user passwords," validation might involve a penetration test to see if passwords can be easily accessed or cracked. For a performance requirement "The system must load product catalogs within 3 seconds," load testing would be used to confirm this.

**Alignment:** Crucial for **CO1** (interpreting non-functional requirements) and **CO3** (preparing SRS with NFRs). Also relates to **CO4** (testing methods for verifying NFRs).

**(Reference: Sommerville, Chapter 6.1 - Requirements Validation and Verification, Chapter 7 - System Modelling (for context on NFRs), Pressman, Chapter 7 - Requirements Analysis, Sub-section: Requirements Validation Techniques, may touch upon NFRs)**

---

### 5. The Role of Agile in Requirements Validation

In Agile methodologies, requirements validation is an ongoing and integrated part of the development process.

**Key Concepts:**
*   **Continuous Feedback:** Regular demos of working software to stakeholders.
*   **User Stories and Acceptance Criteria:** Each user story has defined acceptance criteria that serve as validation points.
*   **Sprint Reviews:** Formal sessions at the end of each sprint where the team demonstrates completed work to stakeholders and gathers feedback.
*   **Customer Collaboration:** Close and continuous collaboration with the customer or product owner.

**Agile Practices for Validation:**
*   **Test-Driven Development (TDD):** Writing tests *before* writing the code, which inherently validates requirements at a granular level.
*   **Acceptance Test-Driven Development (ATDD) / Behavior-Driven Development (BDD):** Collaborating with stakeholders to define acceptance criteria as executable tests.
*   **Frequent Demos:** Showcasing working features regularly to ensure alignment with expectations.

**Example:** In Scrum, at the end of each sprint, the development team presents the completed user stories to the product owner and other stakeholders. This demo is a form of validation, where stakeholders can confirm that the delivered increment meets their needs. If not, feedback is incorporated into the backlog for future sprints.

**Alignment:** Directly supports **CO2** (describing agile methods) and **CO6** (applying SCRUM/Kanban). It also underpins the continuous validation aspects of **CO1**.

**(Reference: Anderson, "Kanban", "Agile Management for Software Engineering"; Poppendieck, "Implementing Lean Software Development" - these books emphasize continuous feedback and validation inherent in Lean/Agile practices.)**

---

### 6. Important Points to Remember

*   **Validation is about correctness, not quality of implementation.**
*   **Early validation is significantly cheaper than late validation.**
*   **A combination of techniques is often most effective.**
*   **User involvement is crucial for effective validation.**
*   **Non-functional requirements require specific validation approaches.**
*   **Agile methodologies embed validation throughout the development process.**
*   **The goal is to ensure you are building the *right* system.**

---

### 7. Practice Questions and Answers

**Question 1:**
What is the primary goal of requirements validation?
a) To ensure the software is built efficiently.
b) To verify that the software meets user needs and expectations.
c) To identify and fix coding errors.
d) To optimize the system's performance.

**Answer 1:**
b) To verify that the software meets user needs and expectations.
*Explanation: Requirements validation focuses on ensuring that the *requirements themselves* accurately reflect what the user wants, thereby guiding the development of the *right system*. Building efficiently and fixing coding errors are verification activities or relate to development quality, while performance optimization is a specific non-functional aspect.*

**Question 2:**
Which validation technique involves creating a working model of the system to gather user feedback?
a) Formal Methods
b) Automated Static Analysis
c) Prototyping
d) Scenario-Based Validation

**Answer 2:**
c) Prototyping
*Explanation: Prototyping directly involves building a model for user interaction and feedback to validate requirements.*

**Question 3:**
In Agile methodologies, what is a common event where requirements validation occurs through demonstrating working software?
a) Daily Stand-up
b) Sprint Planning
c) Sprint Review
d) Retrospective

**Answer 3:**
c) Sprint Review
*Explanation: The Sprint Review is specifically designed for the team to demonstrate the increment of work completed during the sprint to stakeholders, gathering feedback and validating that the developed features meet expectations.*

**Question 4:**
Why is validating non-functional requirements often more challenging than validating functional requirements?
a) Non-functional requirements are always incorrect.
b) Non-functional requirements describe qualities that are subjective and harder to measure.
c) Functional requirements are always written in formal language.
d) Non-functional requirements do not need to be validated.

**Answer 4:**
b) Non-functional requirements describe qualities that are subjective and harder to measure.
*Explanation: While functional requirements describe specific actions, non-functional requirements (like performance, usability, security) describe qualities, which can be abstract, subjective, and require specific metrics or tests for validation.*

**Question 5 (Short Answer):**
Describe the key difference between requirements validation and requirements verification.

**Answer 5:**
Requirements validation ensures that the system being built is the *right system* (i.e., it meets user needs and fulfills business objectives). Requirements verification ensures that the system is built *right* (i.e., it is correctly implemented according to the specifications and free of defects). Validation typically happens during the analysis phase and involves stakeholders, while verification often involves testing and reviews during the design and implementation phases.

---

### 8. Learning Outcomes Covered

*   **CO1: Interpret software process models and core activities, including handling changes with techniques like prototyping and incremental delivery.**
    *   Covered through discussions on validation as a core activity, and specific techniques like prototyping.
*   **CO2: Describe agile methods, including the Agile Manifesto and agile project management practices.**
    *   Covered in the section on the Role of Agile in Requirements Validation.
*   **CO3: Prepare Software Requirement Specification and Software Design for a given problem.**
    *   Understanding validation techniques is crucial for preparing a high-quality SRS.
*   **CO4: Interpret object-oriented design principles, design patterns, software testing methods (including unit testing, integration testing, and test automation), and open-source licensing models (such as GPL, LGPL, and BSD).**
    *   Validation of non-functional requirements often involves testing methods.
*   **CO5: Describe software review techniques, DevOps practices and code management principles, and software evolution processes and maintenance strategies.**
    *   Review techniques are a primary validation method.
*   **CO6: Make use of software project management concepts while planning, estimation, scheduling, tracking and change management of a project, with proper application of SCRUM, Kanban and Lean frameworks.**
    *   Agile validation practices directly relate to Scrum and Lean frameworks.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
