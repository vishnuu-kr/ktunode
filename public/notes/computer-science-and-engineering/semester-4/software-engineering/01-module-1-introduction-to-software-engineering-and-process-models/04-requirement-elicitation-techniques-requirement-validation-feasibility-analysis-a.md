---
title: "Requirement elicitation techniques, Requirement validation, Feasibility analysis and its types, SRS document characteristics and its structure."
subject: "SOFTWARE ENGINEERING"
module: "Module 1: Introduction to Software Engineering and Process Models "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162750fc9aa1fdbc8b07f"
status: "completed"
scrapedAt: "2026-05-20T16:16:42.064Z"
---
# SOFTWARE ENGINEERING - Module 1: Requirement Engineering and SRS

## I. Introduction to Software Engineering and Requirement Engineering

**Key Concepts:**

*   **What is Requirement Engineering?** The process of defining, documenting, and maintaining requirements in the software development lifecycle.
*   **Importance of Requirements:** A well-defined set of requirements serves as a blueprint for the software system, reducing misunderstandings, rework, and project failures.
*   **Phases of Requirement Engineering:**
    *   Elicitation
    *   Analysis
    *   Specification
    *   Validation
    *   Management

## II. Requirement Elicitation Techniques

**Definition:** Requirement elicitation is the process of discovering, acquiring, and understanding the needs of stakeholders for a software system.

**Techniques:**

*   **Interviews:**
    *   **Description:**  Directly questioning stakeholders to understand their needs and expectations.
    *   **Types:** Structured (predetermined questions), Unstructured (free-flowing conversation), Semi-structured (combination of both).
    *   **Pros:**  Provides in-depth understanding, uncovers hidden needs.
    *   **Cons:** Time-consuming, reliant on interviewer skills, can be biased.
    *   **Example:** Interviewing a hospital administrator to understand the needs of a new patient management system.
*   **Questionnaires:**
    *   **Description:** Distributing a set of written questions to a large group of stakeholders.
    *   **Pros:**  Efficient for gathering data from many people, cost-effective.
    *   **Cons:**  Limited depth, requires careful design to avoid ambiguity, low response rate.
    *   **Example:**  Sending a survey to bank customers to gather feedback on the online banking experience.
*   **Brainstorming:**
    *   **Description:**  A group activity where participants generate a large number of ideas without initial criticism.
    *   **Pros:** Encourages creativity, generates diverse perspectives.
    *   **Cons:**  Can be dominated by a few individuals, requires skilled facilitation.
    *   **Example:** A team brainstorming session to generate new features for an e-commerce platform.
*   **Use Cases:**
    *   **Description:**  Describes the interaction between a user (actor) and the system to achieve a specific goal.
    *   **Pros:** Clear and structured way to define functionality, easy to understand for non-technical stakeholders.
    *   **Cons:**  Can be time-consuming to create, may not cover all requirements.
    *   **Example:**  A use case describing the scenario of a customer placing an order on an online store, including steps like browsing products, adding to cart, and completing checkout.
*   **Prototyping:**
    *   **Description:** Creating a preliminary version of the software system to demonstrate functionality and gather feedback.
    *   **Types:** Throwaway prototypes (used for exploration and discarded), Evolutionary prototypes (gradually refined into the final product).
    *   **Pros:**  Visual representation of the system, identifies usability issues early, clarifies requirements.
    *   **Cons:**  Can be expensive and time-consuming, may create unrealistic expectations.
    *   **Example:** Developing a clickable wireframe of a mobile app to get user feedback on the layout and navigation.
*   **Observation:**
    *   **Description:**  Observing users in their natural environment to understand their current workflows and identify needs.
    *   **Pros:**  Provides insights into real-world usage, uncovers hidden needs, less reliance on stakeholder recall.
    *   **Cons:**  Can be intrusive, may influence user behavior, time-consuming to analyze data.
    *   **Example:** Observing nurses using existing software to identify bottlenecks and inefficiencies in their workflow.
*   **Document Analysis:**
    *   **Description:** Reviewing existing documents (e.g., business plans, reports, user manuals) to identify relevant requirements.
    *   **Pros:**  Cost-effective, provides a baseline for requirements, uncovers existing constraints.
    *   **Cons:**  Documents may be outdated or incomplete, requires domain expertise.
    *   **Example:** Reviewing a company's business plan to understand its strategic goals and how the software system can support them.
*   **Joint Application Development (JAD):**
    *   **Description:** A workshop where stakeholders and developers work together to define requirements.
    *   **Pros:** Improved communication, faster requirements gathering, increased stakeholder ownership.
    *   **Cons:** Requires careful planning and facilitation, can be difficult to manage large groups.
    *   **Example:** Hosting a JAD session with representatives from different departments to gather requirements for a new enterprise resource planning (ERP) system.

## III. Requirement Validation

**Definition:** Requirement validation is the process of ensuring that the elicited requirements accurately reflect the needs of the stakeholders and that the software system built to those requirements will meet their expectations.  It aims to answer the question: "Are we building the *right* product?"

**Techniques:**

*   **Reviews:**
    *   **Description:**  A systematic examination of the requirements document by stakeholders and developers.
    *   **Pros:** Identifies errors, inconsistencies, and ambiguities early.
    *   **Cons:** Can be time-consuming, requires careful planning and execution.
    *   **Example:** Conducting a peer review of the SRS document to check for clarity and completeness.
*   **Prototyping (again!):** Showing stakeholders the current state of the prototype helps them visualize the requirements, uncover misunderstandings, and validate assumptions.
*   **Test Case Generation:**
    *   **Description:**  Developing test cases based on the requirements.
    *   **Pros:**  Identifies missing or ambiguous requirements, ensures testability.
    *   **Cons:**  Requires a good understanding of testing principles.
    *   **Example:** Creating test cases for a login feature to verify that it handles valid and invalid credentials correctly.
*   **Formal Verification:**
    *   **Description:**  Using mathematical techniques to prove that the requirements are consistent and complete.
    *   **Pros:**  Provides high confidence in the correctness of the requirements.
    *   **Cons:**  Complex and time-consuming, requires specialized expertise.
    *   **Example:** Using formal methods to verify the safety requirements of a critical system, such as an aircraft control system.
*   **Traceability Matrix:**
    *   **Description:** A document that maps requirements to design elements, code, and test cases.
    *   **Pros:** Ensures that all requirements are addressed, facilitates impact analysis.
    *   **Cons:** Can be time-consuming to create and maintain.
    *   **Example:** Creating a traceability matrix to link user stories to specific features, code modules, and test cases.

**Common Validation Checks:**

*   **Completeness:** Are all the necessary requirements specified?
*   **Consistency:** Are the requirements free from contradictions?
*   **Correctness:** Do the requirements accurately reflect stakeholder needs?
*   **Clarity:** Are the requirements easy to understand?
*   **Verifiability:** Can the requirements be tested?
*   **Traceability:** Can the requirements be traced back to their origin?
*   **Feasibility:** Are the requirements technically and economically feasible?

## IV. Feasibility Analysis

**Definition:** Feasibility analysis is the evaluation of the practicality and viability of a proposed software project. It helps to determine whether the project is worth pursuing.

**Types of Feasibility:**

*   **Technical Feasibility:**
    *   **Description:**  Evaluates whether the required technology and expertise are available to develop the system.
    *   **Factors:** Availability of hardware, software, and skills; potential technical risks; compatibility with existing systems.
    *   **Example:**  Assessing whether the development team has the skills and experience to implement a machine learning algorithm for a new feature.
*   **Economic Feasibility:**
    *   **Description:**  Evaluates whether the project's benefits outweigh its costs.
    *   **Factors:**  Development costs, operational costs, estimated revenue, return on investment (ROI), payback period.
    *   **Example:**  Calculating the costs of developing and maintaining a new e-commerce platform and comparing them to the expected revenue from online sales.
*   **Operational Feasibility:**
    *   **Description:**  Evaluates whether the system will be usable and maintainable after it is developed.
    *   **Factors:**  Usability, reliability, maintainability, security, supportability, scalability.
    *   **Example:**  Assessing whether the proposed software will integrate seamlessly with existing business processes and whether the support team has the capacity to handle user inquiries.
*   **Schedule Feasibility:**
    *   **Description:**  Evaluates whether the project can be completed within a reasonable timeframe.
    *   **Factors:**  Project duration, availability of resources, critical deadlines, potential delays.
    *   **Example:**  Determining whether a new feature can be developed and released before a key competitor launches a similar feature.
*   **Legal Feasibility:**
    *   **Description:**  Evaluates whether the project complies with all applicable laws and regulations.
    *   **Factors:**  Data privacy, security, intellectual property, accessibility.
    *   **Example:**  Ensuring that a new online platform complies with GDPR regulations regarding the handling of user data.

**Process of Feasibility Analysis:**

1.  **Define the project scope and objectives.**
2.  **Identify potential alternatives.**
3.  **Evaluate each alternative based on the feasibility factors.**
4.  **Select the most feasible alternative.**
5.  **Document the findings in a feasibility study report.**

## V. SRS Document: Characteristics and Structure

**Definition:** The Software Requirements Specification (SRS) document is a comprehensive description of the intended purpose and environment for the software being developed. It acts as a contract between the development team and the stakeholders.

**Characteristics of a Good SRS Document:**

*   **Complete:** All requirements are included, covering all aspects of the system.
*   **Consistent:** No conflicting requirements exist.
*   **Unambiguous:** Requirements are clearly defined and easily understood.
*   **Verifiable:** Requirements can be tested and validated.
*   **Modifiable:** The SRS can be easily updated to reflect changes in requirements.
*   **Traceable:** Requirements can be traced back to their origin and forward to design, code, and test.
*   **Prioritized:** Requirements are ranked based on their importance.
*   **Understandable:** Written in a language accessible to both technical and non-technical stakeholders.

**Typical SRS Document Structure (IEEE 830 standard):**

1.  **Introduction:**
    *   1.1 Purpose:  Briefly explain the purpose of the SRS.
    *   1.2 Scope:  Define the scope of the software product.
    *   1.3 Definitions, Acronyms, and Abbreviations: Define all terms and abbreviations used in the document.
    *   1.4 References:  List any documents referenced in the SRS.
    *   1.5 Overview:  Describe the organization of the rest of the SRS.
2.  **Overall Description:**
    *   2.1 Product Perspective: Describe the software's relationship to other systems.
    *   2.2 Product Functions: Summarize the major functions the software will perform.
    *   2.3 User Characteristics: Describe the intended users of the software and their characteristics.
    *   2.4 General Constraints: Identify any constraints that will limit the development or operation of the software (e.g., performance, security, reliability).
    *   2.5 Assumptions and Dependencies: List any assumptions made during requirements gathering and any dependencies on external factors.
3.  **Specific Requirements:** This is the most important part of the SRS.
    *   3.1 Functional Requirements: Describe the specific functions the software must perform. Organized by feature or use case.  Each requirement should be uniquely identified, clearly stated, and verifiable.
    *   3.2 Non-Functional Requirements: Describe the quality attributes of the software, such as performance, security, usability, reliability, maintainability, and portability.  These are often described using metrics.
        *   *Performance Requirements*: Specify response times, throughput, and resource utilization.
        *   *Security Requirements*: Specify access control, data protection, and authentication.
        *   *Usability Requirements*: Specify ease of use, learnability, and user satisfaction.
        *   *Reliability Requirements*: Specify availability, fault tolerance, and recovery time.
    *   3.3 Interface Requirements:
        *   *User Interfaces*:  Describe the appearance and behavior of the user interface.
        *   *Hardware Interfaces*:  Describe the interaction between the software and hardware components.
        *   *Software Interfaces*: Describe the interaction between the software and other software systems.
        *   *Communications Interfaces*: Describe the communication protocols used by the software.
4.  **Supporting Information (Appendices):**
    *   Glossary
    *   Use Case Diagrams
    *   Data Flow Diagrams
    *   State Transition Diagrams
    *   Prototypes
    *   Traceability Matrix

**Example of Functional Requirement (in SRS):**

*   **Requirement ID:** FR-001
*   **Description:** The system shall allow a user to log in using a valid username and password.
*   **Priority:** High
*   **Verification Method:** Test the login functionality with valid and invalid credentials.

**Example of Non-Functional Requirement (in SRS):**

*   **Requirement ID:** NFR-001
*   **Description:** The system shall respond to user requests within 2 seconds.
*   **Priority:** High
*   **Verification Method:** Measure the response time using load testing.

## VI. Practice Questions/Exercises

1.  **Question:**  Describe three requirement elicitation techniques and provide an example of when each technique would be most appropriate.
    **Answer:**
    *   *Interviews:*  Appropriate when detailed, in-depth understanding of stakeholder needs is required.  Example: Understanding the specific needs of doctors for a new Electronic Health Record (EHR) system.
    *   *Questionnaires:*  Appropriate when gathering data from a large group of stakeholders efficiently. Example: Gathering feedback from a large customer base on their experience with a mobile app.
    *   *Prototyping:* Appropriate when stakeholders have difficulty articulating their needs or when exploring potential user interface designs. Example: Developing a wireframe prototype of a new website to get user feedback on the layout and navigation.

2.  **Question:** Explain the importance of requirement validation and provide two techniques used for validation.
    **Answer:**
    *   *Importance:* Requirement validation ensures that the elicited requirements accurately reflect stakeholder needs, preventing costly errors and rework later in the development lifecycle.  It ensures we're building the *right* product.
    *   *Techniques:*
        *   *Reviews:* A systematic examination of the requirements document by stakeholders and developers to identify errors and inconsistencies.
        *   *Test Case Generation:* Developing test cases based on the requirements to identify missing or ambiguous requirements and ensure testability.

3.  **Question:**  Describe the different types of feasibility analysis and provide an example of a scenario where each type of analysis would be critical.
    **Answer:**
    *   *Technical Feasibility:* Critical when considering using new or unproven technologies.  Example: Evaluating whether the development team has the skills to implement a blockchain solution.
    *   *Economic Feasibility:* Critical when assessing the potential return on investment.  Example: Determining whether the cost of developing a new mobile app will be justified by the expected revenue.
    *   *Operational Feasibility:* Critical when assessing the impact of the new system on existing business processes. Example: Determining whether the introduction of a new CRM system will require significant changes to sales and marketing workflows.
    *   *Schedule Feasibility:* Critical when deadlines are tight. Example: Deciding if a new feature can be released before a competitor launches a similar feature.

4.  **Question:** What are the key characteristics of a good SRS document?
    **Answer:**  A good SRS document should be Complete, Consistent, Unambiguous, Verifiable, Modifiable, Traceable, Prioritized, and Understandable.

5.  **Question:**  Describe the typical structure of an SRS document and why each section is important.
    **Answer:** The structure includes the Introduction (defining purpose and scope), Overall Description (product perspective, functions, and user characteristics), Specific Requirements (functional, non-functional, and interface requirements), and Supporting Information (appendices like glossary, use case diagrams, and data flow diagrams).  Each section is vital to ensure clarity, completeness, and understanding between stakeholders and the development team.

## VII. Important Points to Remember

*   Requirement engineering is a critical activity in software development and lays the foundation for a successful project.
*   The SRS document serves as a contract between the development team and the stakeholders.
*   Involving stakeholders throughout the requirements engineering process is crucial to ensure that the software meets their needs.
*   Continuously validating and managing requirements is essential to adapt to changing needs and avoid costly errors.
*   Always prioritize requirements based on their importance to ensure that the most critical features are delivered first.
*   Feasibility analysis should be performed early in the project to identify potential risks and ensure that the project is viable.

This detailed set of notes covers all the aspects of Module 1, providing clear definitions, examples, and practice questions to aid in learning and understanding. Remember to actively engage with these notes, attempt the exercises, and seek further clarification on any concepts you find challenging. Good luck!
