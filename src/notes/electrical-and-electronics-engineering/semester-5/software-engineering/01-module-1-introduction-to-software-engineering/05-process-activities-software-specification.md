---
title: "Process activities - Software specification"
subject: "SOFTWARE ENGINEERING"
module: "Module 1: Introduction to Software Engineering "
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f3632b"
status: "completed"
scrapedAt: "2026-05-23T16:24:01.983Z"
---
# Software Engineering: Module 1 - Introduction to Software Engineering

## Topic: Process Activities - Software Specification

### 1. Introduction to Software Specification

Software specification is the process of defining what the software system should do. It is a crucial phase in the software development lifecycle as it lays the foundation for all subsequent activities. Inaccurate or incomplete specifications can lead to costly rework, missed deadlines, and ultimately, a product that does not meet user needs.

**Key Concepts:**

*   **Requirements:** Statements that describe what the system should do, its services, and constraints on the services.
*   **Specification Document:** A formal document that captures the requirements of a software system.
*   **Stakeholders:** Individuals or groups who have an interest in the software system. This includes users, customers, developers, managers, etc.
*   **User Needs:** The general goals and objectives of the users for the system.
*   **System Requirements:** Detailed descriptions of the system's functions, services, and operating constraints.
*   **Functional Requirements:** Describe the services that the system provides. They specify the relationship between inputs and outputs.
*   **Non-Functional Requirements:** Specify constraints on the system's services or on the development process. These include performance, security, usability, reliability, maintainability, etc.

**Textbook References:**

*   **Sommerville (2015), Chapter 3:** "Requirements Engineering: Eliciting, analysing and specifying requirements."
*   **Pressman (2014), Chapter 4:** "Requirements Engineering."
*   **Sommerville (2020), Chapter 4:** "Requirements Engineering."

### 2. The Requirements Engineering Process

The process of defining software requirements is often referred to as **Requirements Engineering**. It's an iterative process that involves several key activities.

**Key Activities in Requirements Engineering:**

*   **Requirements Elicitation (or Discovery):** The process of gathering requirements from stakeholders. This is often the most challenging part of the process as stakeholders may not know what they want, or may express their needs in vague or conflicting terms.
*   **Requirements Analysis:** The process of clarifying and refining the elicited requirements, identifying inconsistencies, and prioritizing them.
*   **Requirements Specification:** The process of documenting the requirements in a clear, unambiguous, and complete manner. This often results in a formal Software Requirements Specification (SRS) document.
*   **Requirements Validation:** The process of ensuring that the specified requirements are correct, complete, and consistent, and that they accurately reflect the stakeholder's needs.
*   **Requirements Management:** The process of managing changes to the requirements throughout the software development lifecycle.

**Textbook References:**

*   **Sommerville (2015), Chapter 3:** Covers all these activities in detail.
*   **Pressman (2014), Chapter 4:** Discusses requirements elicitation, analysis, specification, and validation.
*   **Sommerville (2020), Chapter 4:** Provides a comprehensive overview of the requirements engineering process.

### 3. Requirements Elicitation Techniques

As highlighted by Sommerville (2015), effective elicitation is critical. Various techniques are used to gather requirements:

*   **Interviews:** Direct conversations with stakeholders to understand their needs.
    *   **Structured Interviews:** Predefined questions are asked.
    *   **Unstructured Interviews:** More conversational and open-ended.
*   **Scenarios/Use Cases:** Describing how users will interact with the system to achieve specific goals. Use cases are particularly useful for defining functional requirements and are a core component of many object-oriented methodologies.
    *   **Example:** A "Place Order" use case for an e-commerce system would detail the steps a customer takes from adding items to their cart to confirming the order.
*   **Prototypes:** Building a working model of the system or parts of it to get feedback from stakeholders. This is particularly useful when user needs are unclear.
    *   **Types:** Evolutionary prototypes, throwaway prototypes.
*   **Workshops/Brainstorming:** Bringing together stakeholders for collaborative discussions and idea generation.
*   **Surveys/Questionnaires:** Collecting information from a large number of stakeholders.
*   **Observation:** Observing users performing their tasks in their natural environment.
*   **Document Analysis:** Reviewing existing documentation, such as business process models, user manuals, and system specifications.

**Textbook References:**

*   **Sommerville (2015), Chapter 3.2:** "Eliciting requirements."
*   **Pressman (2014), Chapter 4.2:** "Eliciting Requirements."
*   **Sommerville (2020), Chapter 4.2:** "Eliciting Requirements."

**CO Alignment:** CO1 (Interpret software process models and core activities, including handling changes with techniques like prototyping and incremental delivery.) - Elicitation techniques directly support understanding core activities. Prototyping is explicitly mentioned.

### 4. Requirements Analysis and Specification

Once requirements are elicited, they need to be analyzed, clarified, and documented.

**Key Activities in Analysis and Specification:**

*   **Requirements Classification and Organization:** Grouping requirements by type (functional, non-functional), by stakeholder, or by system feature.
*   **Identifying and Resolving Conflicts:** Detecting contradictory requirements and working with stakeholders to resolve them.
*   **Modeling:** Creating abstract representations of the requirements to help understand and communicate them. Common modeling techniques include:
    *   **Use Case Diagrams:** Visualizing system interactions from an external perspective.
    *   **Data Flow Diagrams (DFDs):** Showing how data moves through the system.
    *   **Class Diagrams:** Representing the static structure of the system in terms of objects, attributes, and relationships (especially in OO design).
    *   **State Machine Diagrams:** Describing the behavior of the system in response to events.
*   **Writing the Software Requirements Specification (SRS) Document:** A comprehensive document that details all the requirements for the system. A well-written SRS is crucial for CO3.

**Contents of a Typical SRS:**

*   **Introduction:** Purpose, scope, definitions, references, overview.
*   **Overall Description:** Product perspective, product functions, user characteristics, constraints, assumptions, dependencies.
*   **Specific Requirements:**
    *   **Functional Requirements:** Detailed description of system functions.
    *   **Non-Functional Requirements:** Performance, security, reliability, maintainability, usability, etc.
    *   **External Interface Requirements:** User interfaces, hardware interfaces, software interfaces, communication interfaces.
    *   **System Features:** Grouping of functionalities.
*   **Appendices:** Glossary, supporting information.

**Textbook References:**

*   **Sommerville (2015), Chapter 3.3:** "Analyzing requirements" and Chapter 3.4: "Specifying requirements."
*   **Pressman (2014), Chapter 4.3:** "Analyzing Requirements" and Chapter 4.4: "Specifying Requirements."
*   **Sommerville (2020), Chapter 4.3:** "Analyzing Requirements" and Chapter 4.4: "Specifying Requirements."

**CO Alignment:**

*   **CO1:** Prototyping and incremental delivery are often used to refine requirements during analysis.
*   **CO3:** "Prepare Software Requirement Specification and Software Design for a given problem." This activity directly addresses the preparation of an SRS.

### 5. Requirements Validation

Ensuring the accuracy and completeness of the requirements is essential.

**Key Validation Techniques:**

*   **Reviews:** Formal or informal examinations of the SRS document by stakeholders, developers, and quality assurance personnel.
    *   **Walkthroughs:** The author leads the review team through the document.
    *   **Inspections:** A more structured approach with defined roles and checklists.
*   **Prototyping:** As mentioned earlier, prototypes can be used to validate requirements by allowing users to interact with a preliminary version of the system.
*   **Test Case Generation:** Developing test cases based on the requirements can help identify ambiguities, omissions, and inconsistencies. If a requirement cannot be tested, it's often a sign of a problem.
*   **User Feedback:** Directly soliciting feedback from end-users on the proposed requirements.

**Textbook References:**

*   **Sommerville (2015), Chapter 3.5:** "Validating requirements."
*   **Pressman (2014), Chapter 4.5:** "Validating Requirements."
*   **Sommerville (2020), Chapter 4.5:** "Validating Requirements."

**CO Alignment:**

*   **CO1:** Validation is a core activity in ensuring that requirements are correctly interpreted.
*   **CO3:** Validation is a necessary step before finalizing the SRS and moving to design.

### 6. Requirements Management

Requirements are not static; they evolve over time due to changes in user needs, technology, or the business environment.

**Key Aspects of Requirements Management:**

*   **Change Management:** Establishing a process for managing changes to requirements, including:
    *   **Change Request:** A formal proposal for a change.
    *   **Impact Analysis:** Assessing the effect of the proposed change on the system, schedule, and cost.
    *   **Change Approval:** Decision-making process for approving or rejecting changes.
    *   **Change Implementation:** Incorporating approved changes into the system.
*   **Traceability:** Maintaining links between requirements and other project artifacts (e.g., design documents, code, test cases). This helps in understanding the impact of changes and ensuring that all requirements are implemented and tested.
    *   **Forward Traceability:** Links requirements to design elements, code, and tests.
    *   **Backward Traceability:** Links design elements, code, and tests back to the original requirements.
*   **Version Control:** Managing different versions of the requirements document.

**Textbook References:**

*   **Sommerville (2015), Chapter 3.6:** "Managing requirements."
*   **Pressman (2014), Chapter 4.6:** "Managing Requirements."
*   **Sommerville (2020), Chapter 4.6:** "Managing Requirements."
*   **Royce (1998):** While not directly about specification, his work on project management emphasizes the need for managing change throughout the lifecycle.

**CO Alignment:**

*   **CO1:** Handling changes is a core part of managing requirements.
*   **CO6:** "Make use of software project management concepts while planning, estimation, scheduling, tracking and **change management** of a project..." Requirements management is a critical component of change management in project management.

### 7. Types of Requirements

Understanding the different types of requirements is crucial for effective specification.

*   **Functional Requirements:**
    *   Describe specific behaviors or functions of the system.
    *   What the system *does*.
    *   Often expressed as inputs, processing, and outputs.
    *   **Example:** "The system shall allow users to register by providing a username, email, and password." (Pressman, 2014)
*   **Non-Functional Requirements (Quality Attributes):**
    *   Describe constraints or quality attributes of the system.
    *   How the system *performs* or its characteristics.
    *   **Categories:**
        *   **Performance:** Response time, throughput, resource utilization.
            *   *Example:* "The system shall respond to search queries within 2 seconds."
        *   **Security:** Authentication, authorization, data protection.
            *   *Example:* "All user passwords must be stored using industry-standard encryption."
        *   **Usability:** Ease of use, learnability, user interface design.
            *   *Example:* "A new user should be able to complete a purchase in under 5 minutes without referring to a manual."
        *   **Reliability:** Mean Time Between Failures (MTBF), availability.
            *   *Example:* "The system shall have an availability of 99.9%."
        *   **Maintainability:** Ease of modification, debugging, and enhancement.
            *   *Example:* "The system should be designed with modularity to allow for easy replacement of components."
        *   **Portability:** Ability to run on different platforms.
        *   **Scalability:** Ability to handle increasing load.
*   **User Requirements:**
    *   High-level statements of what the system should do, often in natural language.
    *   Typically written from the perspective of the user.
    *   Often the starting point for more detailed system requirements.
*   **System Requirements:**
    *   More detailed and structured descriptions of the system's functionality and constraints.
    *   Can be further divided into functional and non-functional requirements.

**Textbook References:**

*   **Sommerville (2015), Chapter 3.1:** "What is a requirements specification?"
*   **Pressman (2014), Chapter 4.1:** "What is Requirements Engineering?" and Chapter 4.5: "Specifying Requirements" (discusses functional and non-functional requirements).
*   **Sommerville (2020), Chapter 4.1:** "What is Requirements Engineering?"

**CO Alignment:**

*   **CO3:** "Prepare Software Requirement Specification..." This requires understanding and categorizing different types of requirements.

### 8. Important Points to Remember

*   **Clarity and Unambiguity:** Requirements must be stated clearly and without ambiguity to avoid misinterpretations.
*   **Completeness:** All necessary requirements should be captured.
*   **Consistency:** Requirements should not contradict each other.
*   **Verifiability:** Requirements should be stated in a way that allows for testing and verification.
*   **Traceability:** Maintain links between requirements and other artifacts.
*   **Prioritization:** Not all requirements are equally important; they should be prioritized.
*   **User Involvement:** Continuous involvement of stakeholders is crucial for success.
*   **Iterative Process:** Requirements engineering is an iterative process, with feedback loops and refinement.
*   **Agile vs. Traditional:** While traditional approaches emphasize comprehensive upfront specification, agile methods like Scrum often handle requirements in a more iterative and evolving manner, often captured in user stories and backlogs. (Relates to CO2 and CO6).

### 9. Practice Questions and Exercises

**Question 1 (CO3, K3):**
Imagine you are tasked with specifying requirements for a simple online library system. List at least three functional requirements and two non-functional requirements for such a system.

**Answer 1:**

*   **Functional Requirements:**
    1.  The system shall allow users to search for books by title, author, or ISBN.
    2.  The system shall allow registered users to borrow up to three books at a time.
    3.  The system shall allow librarians to add new books to the catalog, including details like title, author, ISBN, and quantity.
*   **Non-Functional Requirements:**
    1.  **Performance:** The book search function shall return results within 3 seconds for a catalog of up to 10,000 books.
    2.  **Usability:** The user interface for borrowing and returning books should be intuitive and require minimal training for new users.

---

**Question 2 (CO1, K2):**
Explain the role of **prototyping** in requirements elicitation and validation. Provide a scenario where prototyping would be particularly beneficial.

**Answer 2:**

**Role of Prototyping:**
*   **Elicitation:** Prototyping helps users visualize and interact with a preliminary version of the system, making it easier for them to articulate their needs and identify missing or incorrect requirements. It bridges the gap between abstract ideas and a concrete system.
*   **Validation:** By allowing stakeholders to "try out" the system, prototypes enable them to confirm whether the developed features meet their expectations. It's a powerful way to get early feedback and ensure that the system being built aligns with user needs.

**Scenario:**
Prototyping would be particularly beneficial when developing a new mobile application for a user group that is not tech-savvy, or when the intended user interface involves complex interactions or novel design elements. For instance, if a company is developing a new banking app with a completely redesigned user interface for managing investments, a prototype would allow potential users to interact with the new navigation and feature layout, providing crucial feedback before full development begins. This helps ensure the final product is usable and meets user expectations, fulfilling CO1's aspect of handling changes with techniques like prototyping.

---

**Question 3 (CO3, K3):**
What are the main sections you would expect to find in a Software Requirements Specification (SRS) document? Briefly describe the purpose of each section.

**Answer 3:**

A typical SRS document, as described by Sommerville and Pressman, would include the following main sections:

1.  **Introduction:**
    *   **Purpose:** Explains the intent of the SRS document and its intended audience.
    *   **Scope:** Defines the product to be developed and what it will and will not do.
    *   **Definitions, Acronyms, and Abbreviations:** Provides a glossary of terms used in the document to ensure clarity.
    *   **References:** Lists any documents that are referenced within the SRS.
    *   **Overview:** Outlines the rest of the SRS document, describing its organization.

2.  **Overall Description:**
    *   **Product Perspective:** Describes how the proposed system relates to other existing systems or the overall business context.
    *   **Product Functions:** Summarizes the major functions the system will perform at a high level.
    *   **User Characteristics:** Describes the typical users of the system and their expected skill levels.
    *   **Constraints:** Lists any limitations or restrictions on design or implementation (e.g., hardware limitations, programming language, security regulations).
    *   **Assumptions and Dependencies:** States any assumptions made during requirements analysis and external dependencies that may affect the system.

3.  **Specific Requirements:**
    *   This is the core of the SRS, detailing all functional and non-functional requirements.
    *   **Functional Requirements:** Detailed descriptions of the services the system will provide, often organized by feature or use case.
    *   **Non-Functional Requirements:** Specific requirements related to performance, security, reliability, usability, maintainability, etc.
    *   **External Interface Requirements:** Describes interfaces with hardware, software, and users.

4.  **Appendices (Optional):**
    *   Includes supplementary information like models, diagrams, or any other supporting material that helps clarify the requirements.

---

**Question 4 (CO1, K2; CO6, K2):**
How does the concept of requirements management relate to **change management** in software projects, and how might this differ between traditional and agile methodologies?

**Answer 4:**

**Requirements Management and Change Management:**
Requirements management is the ongoing process of identifying, documenting, analyzing, and controlling changes to the software requirements throughout the development lifecycle. **Change management** is a broader concept within project management that specifically deals with how changes are handled, assessed, approved, and implemented. Therefore, managing changes to requirements is a critical subset of overall project change management.

*   **Impact Analysis:** Requirements management facilitates change management by enabling thorough impact analysis. If a requirement needs to change, understanding its traceability to design, code, and test cases (through requirements management) allows project managers to assess the ripple effect on the schedule, cost, and other system components.
*   **Controlled Evolution:** Effective requirements management ensures that changes are not made haphazardly but are formally requested, evaluated, and documented, providing a controlled evolution of the product.

**Differences between Traditional and Agile Methodologies:**
*   **Traditional (e.g., Waterfall):** In traditional models, requirements are typically defined comprehensively upfront in a detailed SRS. Changes are generally discouraged and managed through a formal change control board (CCB). The process is often rigid, and changes can be costly and time-consuming to implement, as they might require significant rework of already completed phases. Requirements management here is about *preventing* changes where possible and managing the few that are unavoidable in a structured way.
*   **Agile (e.g., Scrum):** Agile methodologies embrace change as a natural part of software development. Requirements are often expressed as user stories in a product backlog, which is continuously refined. Requirements management in Agile is about being flexible and responsive to evolving needs. Change management is integrated into the iterative cycles (sprints). New requirements or modifications can be easily incorporated into future sprints if they align with the project's direction and value. The emphasis is on rapid feedback and adaptation rather than rigid adherence to an initial plan. This aligns with CO1 (handling changes) and CO6 (change management within frameworks like SCRUM).

This understanding is vital for CO1 and CO6, as it highlights how the "handling changes" and "change management" aspects are fundamental to the software development process, regardless of methodology.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
