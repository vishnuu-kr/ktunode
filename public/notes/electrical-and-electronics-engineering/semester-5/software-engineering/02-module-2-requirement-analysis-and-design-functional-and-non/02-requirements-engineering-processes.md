---
title: "Requirements engineering processes"
subject: "SOFTWARE ENGINEERING"
module: "Module 2: Requirement Analysis and Design: Functional and non"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f3633a"
status: "completed"
scrapedAt: "2026-05-23T16:24:11.904Z"
---
# Module 2: Requirement Analysis and Design - Requirements Engineering Processes

## Introduction

Requirements Engineering (RE) is the process of defining, documenting, and maintaining requirements for a software system. It is a crucial phase in the software development lifecycle, as errors or omissions in requirements can lead to costly rework and project failure. This module focuses on the processes involved in effectively eliciting, analyzing, specifying, and validating these requirements.

**Key Concept:** Requirements Engineering is the bridge between the needs of stakeholders and the software system that will fulfill those needs.

---

## 1. The Requirements Engineering Process

The requirements engineering process is a set of activities that help us understand and define what the software system should do. While specific models may vary, the core activities remain consistent.

### 1.1 Overview of Requirements Engineering Activities

*   **Requirements Elicitation (or Requirements Gathering):** Discovering the requirements of users and customers. This involves understanding their needs, goals, and constraints.
    *   **Sources:** Stakeholders (users, customers, domain experts), existing systems, documentation.
    *   **Techniques:** Interviews, workshops, questionnaires, observation, use cases, scenarios.
*   **Requirements Analysis:** Helping to uncover the underlying needs and to identify inconsistencies, omissions, and errors in the requirements. This involves understanding and refining the elicited requirements.
    *   **Techniques:** Modeling (e.g., Data Flow Diagrams, Entity-Relationship Diagrams, UML diagrams), prototyping, brainstorming.
*   **Requirements Specification:** Documenting the requirements in a clear, concise, and unambiguous manner. This document serves as a contract between the development team and the customer.
    *   **Outputs:** Software Requirements Specification (SRS) document.
*   **Requirements Validation:** Ensuring that the specified requirements accurately reflect the needs of the stakeholders and are feasible to implement.
    *   **Techniques:** Reviews (walkthroughs, inspections), prototyping, testing.
*   **Requirements Management:** Managing changes to requirements throughout the software development lifecycle. This includes version control, impact analysis, and change tracking.

**Important Point:** Requirements engineering is an iterative process. Feedback from later stages often leads to revisions in earlier stages.

**Reference:**
*   **Sommerville (2015, Ch. 4):** "Requirements engineering is concerned with the process of discovering, documenting, and maintaining a set of requirements for a software system."
*   **Pressman (2014, Ch. 5):** Outlines RE as a systematic approach that begins with elicitation and moves through analysis, specification, and validation.

---

## 2. Requirements Elicitation

This is often considered the most challenging phase as it involves understanding human needs and translating them into technical specifications.

### 2.1 Elicitation Techniques

*   **Interviews:**
    *   **Structured:** Predefined questions, consistent answers.
    *   **Unstructured:** Open-ended questions, exploratory.
    *   **Pros:** Direct interaction, can uncover hidden needs.
    *   **Cons:** Time-consuming, can be biased by interviewer/interviewee.
    *   **Example:** Interviewing a librarian about how patrons check out books to understand the requirements for a library management system.
*   **Workshops/Focus Groups:**
    *   Bring together stakeholders from different groups.
    *   Facilitated discussions to reach consensus.
    *   **Pros:** Efficient for gathering diverse perspectives, promotes collaboration.
    *   **Cons:** Requires skilled facilitation, can be dominated by some participants.
    *   **Example:** A workshop with marketing, sales, and customer support teams to define features for a new CRM system.
*   **Questionnaires/Surveys:**
    *   Distributed to a larger group of stakeholders.
    *   Good for gathering quantitative data or opinions on specific aspects.
    *   **Pros:** Scalable, efficient for large user bases.
    *   **Cons:** Limited depth, can suffer from low response rates.
    *   **Example:** A survey sent to users of a web application asking about their satisfaction with different features.
*   **Observation (Ethnographic Studies):**
    *   Observing users in their natural work environment.
    *   Helps understand actual user behavior and workflows.
    *   **Pros:** Reveals tacit knowledge and actual practices, not just stated ones.
    *   **Cons:** Time-consuming, users may alter behavior when observed.
    *   **Example:** Observing how air traffic controllers manage flight information in their control room.
*   **Use Cases and Scenarios:**
    *   **Use Cases:** Describe interactions between an actor (user or external system) and the system to achieve a specific goal.
    *   **Scenarios:** Specific instances of a use case, outlining a sequence of steps.
    *   **Pros:** Stakeholder-friendly, good for understanding functional requirements.
    *   **Cons:** Can be difficult to capture non-functional requirements.
    *   **Example:** **Use Case:** "Place an Order". **Scenario:** "Customer adds item to cart, proceeds to checkout, enters shipping and payment details, and confirms order."
*   **Prototyping:**
    *   Building a preliminary version of the system or parts of it.
    *   Allows stakeholders to interact with a working model.
    *   **Pros:** Concrete feedback, helps clarify requirements and usability.
    *   **Cons:** Can create false expectations if not managed properly, can be costly.
    *   **Reference:** **Sommerville (2020)** emphasizes prototyping as a valuable technique for requirements elicitation.
    *   **Example:** A UI prototype for an e-commerce website, allowing users to click through the shopping process.

### 2.2 Challenges in Elicitation

*   **Incomplete or Incorrect Information:** Stakeholders may not know what they want or may not be able to articulate it.
*   **Conflicting Requirements:** Different stakeholders may have competing needs.
*   **Changing Requirements:** Business environments and user needs evolve.
*   **Tacit Knowledge:** Users may have knowledge they don't explicitly state.
*   **Ambiguity:** Natural language can be imprecise.

---

## 3. Requirements Analysis

This phase involves making sense of the elicited requirements, identifying their relationships, and resolving conflicts.

### 3.1 Analysis Techniques

*   **Modeling:** Creating visual representations of the system to understand its structure, behavior, and data.
    *   **Data Flow Diagrams (DFDs):** Show how data flows through a system.
    *   **Entity-Relationship Diagrams (ERDs):** Model the relationships between data entities.
    *   **Unified Modeling Language (UML):** A comprehensive suite of diagrams for modeling various aspects of a software system.
        *   **Use Case Diagrams:** (Already mentioned) Represent system functionality from an external actor's perspective.
        *   **Class Diagrams:** Show the static structure of the system, including classes, attributes, and relationships.
        *   **Sequence Diagrams:** Illustrate the interaction between objects over time, showing the sequence of messages passed.
        *   **Activity Diagrams:** Model the flow of activities or work processes.
    *   **Reference:** **Pressman (2014)** provides detailed coverage of various modeling techniques, including UML.
    *   **Example:** A Class Diagram for a banking system showing `Account` and `Customer` classes with relationships.
*   **Prototyping:** (As mentioned in elicitation) Also useful for analysis by allowing stakeholders to validate the understanding of requirements.
*   **Domain Analysis:** Studying the problem domain to understand the concepts, rules, and constraints relevant to the software.
    *   **Example:** Understanding banking regulations and financial transaction rules for a banking application.
*   **Negotiation:** Resolving conflicts between stakeholders by finding mutually agreeable solutions.
*   **Prioritization:** Ranking requirements based on their importance, urgency, or business value.
    *   **Techniques:** MoSCoW (Must have, Should have, Could have, Won't have), Kano Model, Weighted Scoring.
    *   **Example:** Prioritizing a feature for a new e-commerce site based on its potential to increase sales.

### 3.2 Types of Requirements

*   **Functional Requirements:** Describe what the system *should do*. These are the actions or behaviors the system will perform.
    *   **Examples:**
        *   "The system shall allow users to log in with their username and password."
        *   "The system shall calculate the total cost of items in the shopping cart."
        *   "The system shall generate a monthly sales report."
*   **Non-Functional Requirements (NFRs):** Describe *how* the system performs its functions. These relate to quality attributes, constraints, and operational characteristics. They are often called "quality attributes" or "non-functional characteristics."
    *   **Categories of NFRs:**
        *   **Performance:** Speed, response time, throughput.
            *   *Example:* "The system shall respond to user login requests within 2 seconds."
        *   **Security:** Authentication, authorization, data protection.
            *   *Example:* "All sensitive user data shall be encrypted."
        *   **Usability:** Ease of use, learnability, user interface.
            *   *Example:* "New users should be able to complete a basic transaction within 5 minutes of first use."
        *   **Reliability:** Availability, mean time between failures (MTBF).
            *   *Example:* "The system shall have an uptime of 99.9%."
        *   **Maintainability:** Ease of modification, debugging, and enhancement.
            *   *Example:* "The system code shall adhere to defined coding standards."
        *   **Portability:** Ability to run on different environments.
            *   *Example:* "The application shall be compatible with Windows 10 and macOS Monterey."
        *   **Scalability:** Ability to handle increasing workload.
            *   *Example:* "The system must support up to 10,000 concurrent users."
        *   **Legal/Regulatory:** Compliance with laws and standards.
            *   *Example:* "The system must comply with GDPR regulations."

**Important Point:** Non-functional requirements are as critical as functional requirements. Neglecting them can lead to a system that functions correctly but is unusable or fails to meet business objectives.

**Reference:**
*   **Sommerville (2015, Ch. 4):** Clearly distinguishes between functional and non-functional requirements and provides examples.
*   **Pressman (2014, Ch. 5):** Discusses various types of non-functional requirements.

---

## 4. Requirements Specification

This phase is about creating a formal document that captures all the agreed-upon requirements.

### 4.1 The Software Requirements Specification (SRS) Document

The SRS is a comprehensive document that describes the intended behavior and constraints of a software system.

### 4.2 Contents of an SRS (Typical Structure)

1.  **Introduction:**
    *   Purpose of the SRS.
    *   Scope of the software product.
    *   Definitions, acronyms, and abbreviations.
    *   References.
    *   Overview of the rest of the SRS.
2.  **Overall Description:**
    *   Product perspective (how the system relates to other systems).
    *   Product functions (summary of major functions).
    *   User characteristics (types of users and their skills).
    *   Constraints (e.g., hardware, software, performance, regulatory).
    *   Assumptions and dependencies.
3.  **Specific Requirements:**
    *   **Functional Requirements:** Detailed descriptions of each function. Often organized by feature or use case.
    *   **Non-Functional Requirements:** Detailed specifications for performance, security, usability, reliability, etc.
    *   **Interface Requirements:** User interfaces, hardware interfaces, software interfaces.
    *   **Data Requirements:** Database design considerations, data formats.
4.  **Appendices (Optional):**
    *   Glossary.
    *   Analysis models (e.g., UML diagrams).
    *   Issues list.

### 4.3 Characteristics of a Good SRS

*   **Correct:** Each requirement accurately reflects the stakeholder's need.
*   **Unambiguous:** Each requirement has only one interpretation.
*   **Complete:** All significant requirements are stated.
*   **Consistent:** No requirement contradicts another.
*   **Verifiable:** It is possible to check if the system meets the requirement.
*   **Modifiable:** The SRS can be easily updated without extensive rework.
*   **Traceable:** Requirements can be traced back to their source and forward to design and test cases.

**Reference:**
*   **Pressman (2014, Ch. 6):** Provides a detailed guide on creating SRS documents, including structure and content.
*   **Sommerville (2015, Ch. 4):** Discusses the importance and structure of SRS documents.

### 4.4 Requirements in Agile Development

In agile methodologies, the SRS is often replaced or supplemented by other artifacts, such as user stories and product backlogs.

*   **User Stories:** Short, simple descriptions of a feature told from the perspective of the person who desires the new capability, usually a user or customer of the system. They follow the format: "As a [type of user], I want [some goal] so that [some reason]."
    *   **Example:** "As a registered user, I want to view my order history so that I can track my past purchases."
*   **Product Backlog:** A prioritized list of features, functionalities, and requirements for the product.
*   **Agile Manifesto:** Emphasizes "Working software over comprehensive documentation." This means that while documentation is important, it should not hinder the development of working software.
    *   **Reference:** **Anderson (2003)** and **Anderson (2010)** discuss principles that align with agile practices, focusing on flexibility and rapid delivery, which influences how requirements are handled.
    *   **CO2 Alignment:** Understanding agile methods directly relates to this.

**Important Point:** Agile requirements are typically emergent, meaning they are refined and detailed as the project progresses, rather than being fully defined upfront.

---

## 5. Requirements Validation

Ensuring that the documented requirements are correct and meet the stakeholders' needs.

### 5.1 Validation Techniques

*   **Reviews:**
    *   **Walkthroughs:** Author leads a team through the requirements document, explaining each part.
    *   **Inspections:** Formal review process with defined roles and checklist-driven analysis. Aims to find defects.
    *   **Peer Reviews:** Other team members examine the requirements.
    *   **Pros:** Effective at finding errors and inconsistencies early.
    *   **Cons:** Can be time-consuming if not well-organized.
*   **Prototyping:** As discussed, allows users to interact with a model and provide feedback.
*   **Test Case Generation:** Writing test cases based on the requirements. If test cases cannot be written, it indicates a problem with the requirement's clarity or completeness.
*   **Simulation:** Running a model of the system to observe its behavior under different conditions.

**Reference:**
*   **Sommerville (2015, Ch. 4):** Discusses various validation techniques, including reviews and prototyping.
*   **Pressman (2014, Ch. 6):** Covers validation strategies for ensuring requirements quality.

---

## 6. Requirements Management

Handling changes to requirements throughout the software development lifecycle.

### 6.1 Change Management Process

*   **Change Identification:** Recognizing the need for a change.
*   **Change Analysis:** Assessing the impact of the proposed change on the system, schedule, and cost.
    *   **Impact Analysis:** Determining which parts of the system, design, code, and tests are affected by a change.
*   **Change Implementation:** Incorporating the approved change into the system.
*   **Change Tracking:** Recording and monitoring the status of all changes.

### 6.2 Tools and Techniques

*   **Configuration Management Tools:** Tools like Git for version control of requirement documents.
*   **Issue Tracking Systems:** Tools like Jira, Bugzilla for managing change requests.
*   **Traceability Matrices:** Documents that link requirements to design elements, code, and test cases, allowing for impact analysis.
    *   **Example:** A matrix showing that Requirement R1 is implemented by module M1, designed by class C1, and tested by test case T1. If R1 needs to change, the matrix helps identify M1, C1, and T1 for modification.

### 6.3 Requirements Traceability

Maintaining links between requirements and other development artifacts.

*   **Forward Traceability:** Tracing a requirement to the design, code, and test cases that implement it.
*   **Backward Traceability:** Tracing a design element, code, or test case back to the requirement it satisfies.
*   **CO1 Alignment:** Handling changes with techniques like prototyping and incremental delivery is part of managing evolving requirements.

**Reference:**
*   **Sommerville (2015, Ch. 4):** Discusses requirements management and traceability.
*   **Pressman (2014, Ch. 7):** Covers aspects of configuration management and change control.
*   **Royce (1998):** Discusses project management frameworks, which include managing changes as a core activity.

---

## 7. Requirements Engineering in Different Development Models

*   **Plan-Driven (e.g., Waterfall):** Requirements are gathered and frozen early in the lifecycle. Rigorous documentation and change control are emphasized.
*   **Agile:** Requirements are emergent and evolve throughout the project. Focus on flexibility, collaboration, and delivering working software incrementally. User stories and backlogs are key.
    *   **CO1, CO2, CO6 Alignment:** Understanding how requirements engineering differs in these models is crucial for interpreting process models and agile practices.
    *   **Reference:** **Poppendieck (2006)** and **Anderson (2003, 2010)** provide insights into agile and lean practices that influence requirements handling.

---

## Practice Questions

1.  **Identify and describe three different techniques used for requirements elicitation.**
    *   **Answer:**
        *   **Interviews:** Direct conversations with stakeholders to gather their needs. Can be structured or unstructured.
        *   **Workshops:** Facilitated group sessions bringing together multiple stakeholders to define requirements and resolve conflicts.
        *   **Observation:** Watching users perform their tasks in their natural environment to understand their workflow and identify implicit needs.
2.  **What is the primary difference between functional and non-functional requirements? Provide one example of each.**
    *   **Answer:**
        *   **Functional Requirements:** Define what the system *does*. Example: "The system shall allow users to reset their password."
        *   **Non-Functional Requirements:** Define *how* the system performs its functions or its quality attributes. Example: "The password reset process shall take no more than 30 seconds."
3.  **Explain the purpose of a traceability matrix in requirements management.**
    *   **Answer:** A traceability matrix establishes and maintains links between requirements and other development artifacts (e.g., design elements, code, test cases). This allows for impact analysis of changes, ensuring that all related components are considered when a requirement is modified or deleted. It also helps verify that all requirements have been implemented and tested.
4.  **In an agile development context, how might requirements be documented and managed differently compared to a traditional waterfall model?**
    *   **Answer:** In agile, requirements are often documented as user stories and managed in a product backlog. They are considered "emergent," meaning they are refined and elaborated over time, rather than being fully specified upfront. This contrasts with waterfall, where a comprehensive SRS is typically created and "frozen" early in the project, with a more formal change control process. Agile prioritizes working software and adaptability over exhaustive upfront documentation.
5.  **List at least four essential characteristics of a good Software Requirements Specification (SRS) document.**
    *   **Answer:** Correct, Unambiguous, Complete, Consistent, Verifiable, Modifiable, Traceable. (Any four are acceptable).

---

## Important Points to Remember

*   **Requirements Engineering is Iterative:** It's not a one-time activity; feedback and changes are expected.
*   **Stakeholder Collaboration is Key:** Successful RE relies heavily on effective communication and engagement with all stakeholders.
*   **Ambiguity is the Enemy:** Clear, precise language is crucial to avoid misunderstandings.
*   **Non-Functional Requirements Matter:** They significantly impact the user experience and system viability.
*   **Traceability is Vital:** It helps manage complexity and ensure quality.
*   **Adaptability in Agile:** Requirements are treated as evolving and are managed through continuous feedback and prioritization.

---

This concludes the study notes for Requirements Engineering Processes. Ensure you refer to the specified textbooks for deeper understanding and more detailed examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
