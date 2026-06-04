---
title: "Requirement Analysis and Design: Functional and non-functional requirements"
subject: "SOFTWARE ENGINEERING"
module: "Module 2: Requirement Analysis and Design: Functional and non"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f36339"
status: "completed"
scrapedAt: "2026-05-23T16:24:11.191Z"
---
# Software Engineering: Module 2 - Requirement Analysis and Design: Functional and Non-Functional Requirements

## Introduction to Requirement Analysis and Design

This module delves into the crucial initial phases of software development: **Requirement Analysis** and **Design**. Understanding what the software *should do* (functional requirements) and *how well it should do it* (non-functional requirements) is paramount for building successful software products. This forms the foundation for all subsequent development activities.

**Key Concept:** The quality of the requirements directly impacts the quality of the final software product. Inaccurate or incomplete requirements lead to costly rework, missed deadlines, and dissatisfied users.

**Textbook References:**
*   **Sommerville (2015), Chapter 4: Requirements elicitation, Chapter 5: Requirements specification, Chapter 6: Requirements validation, Chapter 7: Requirements management**
*   **Pressman (2014), Chapter 5: Requirements Engineering, Chapter 6: System Modeling**
*   **Sommerville (2020), Chapter 4: Requirements Engineering**

**Course Outcomes addressed in this module:**
*   **CO1:** Interpret software process models and core activities, including handling changes with techniques like prototyping and incremental delivery. (This module covers the initial "core activity" of understanding requirements.)
*   **CO3:** Prepare Software Requirement Specification and Software Design for a given problem. (This module lays the groundwork for creating SRS and Design documents.)

---

## 1. Understanding Requirements

### 1.1 What are Software Requirements?

Software requirements are statements of services the system should provide and the constraints under which it should operate. They define the *what* of the system, not the *how*.

**Key Concepts:**
*   **Stakeholders:** Individuals or organizations who have an interest in the software system. This can include users, customers, developers, managers, and regulators.
*   **User Needs:** High-level statements of what the system should do for users.
*   **System Requirements:** More detailed descriptions of the functions, services, and operational constraints of the system.

**Sommerville (2015):** Requirements are "a description of the services a system provides and the constraints under which it operates." (p. 75)

---

### 1.2 Types of Requirements

There are two primary categories of requirements:

#### 1.2.1 Functional Requirements

Functional requirements define the **specific behaviors or functions** that a system must perform. They describe *what the system does*. These are typically expressed as verbs or actions.

**Key Concepts:**
*   **System Functionality:** The actions the system performs.
*   **Inputs and Outputs:** What data the system receives and what it produces.
*   **Processing Logic:** How the system transforms inputs into outputs.
*   **Data Storage:** How data is managed and retrieved.

**Examples:**
*   **User Login:** The system shall allow registered users to log in using their username and password.
*   **Order Processing:** The system shall allow users to add items to a shopping cart, proceed to checkout, and submit an order.
*   **Report Generation:** The system shall generate a monthly sales report, including total revenue and sales by product category.
*   **Data Validation:** The system shall validate user input to ensure it conforms to specified formats.

**Pressman (2014):** "Functional requirements specify the essential functions that the system must perform. They describe *what* the system does, not *how* it does it." (p. 132)

#### 1.2.2 Non-Functional Requirements (NFRs)

Non-functional requirements define the **qualities or characteristics** of the system, rather than specific functions. They describe *how well the system performs its functions*. These are often expressed as adjectives or adverbs.

**Key Concepts:**
*   **Quality Attributes:** Measurable characteristics of the software.
*   **Constraints:** Restrictions on the design or implementation.

**Categories of Non-Functional Requirements:**

*   **Performance:** How quickly and efficiently the system operates.
    *   **Examples:**
        *   Response Time: The system shall respond to user queries within 2 seconds.
        *   Throughput: The system shall be able to process at least 100 transactions per second.
        *   Resource Utilization: The system shall use no more than 500MB of memory during peak operation.

*   **Reliability:** The probability of failure-free operation for a specified period.
    *   **Examples:**
        *   Availability: The system shall be available 99.9% of the time.
        *   Mean Time Between Failures (MTBF): The system shall have an MTBF of at least 1000 hours.
        *   Fault Tolerance: The system shall continue to operate even if one server fails.

*   **Usability:** How easy the system is to learn, use, and understand.
    *   **Examples:**
        *   Learnability: A new user shall be able to complete a basic task within 10 minutes without training.
        *   Efficiency: Experienced users shall be able to perform tasks 50% faster than novice users.
        *   User Satisfaction: User satisfaction scores shall average at least 4 out of 5.

*   **Security:** How well the system protects data and prevents unauthorized access.
    *   **Examples:**
        *   Authentication: Users shall be authenticated using strong password policies and multi-factor authentication.
        *   Authorization: Users shall only have access to the data and functions they are authorized to use.
        *   Data Encryption: Sensitive data shall be encrypted at rest and in transit.

*   **Maintainability:** How easy it is to modify, correct, and enhance the system.
    *   **Examples:**
        *   Modularity: Code shall be structured into reusable modules with low coupling.
        *   Readability: Code shall follow established coding standards for clarity.
        *   Testability: Unit tests shall cover at least 80% of the code.

*   **Portability:** How easy it is to transfer the system from one environment to another.
    *   **Examples:**
        *   Platform Independence: The system shall run on both Windows and Linux operating systems.
        *   Browser Compatibility: The web application shall be compatible with Chrome, Firefox, and Safari.

*   **Scalability:** The system's ability to handle an increasing amount of work by adding resources.
    *   **Examples:**
        *   User Load: The system shall support up to 10,000 concurrent users.
        *   Data Volume: The system shall be able to store and process 1 terabyte of data without performance degradation.

**Sommerville (2015):** "Non-functional requirements are requirements that do not directly relate to the specific functions delivered by the system. They are often called quality attributes." (p. 101)

---

## 2. Requirements Engineering Process

Requirements engineering is a systematic process of discovering, documenting, and maintaining software requirements.

**Key Activities:**
1.  **Requirements Elicitation (Discovery):** Gathering requirements from stakeholders.
2.  **Requirements Analysis:** Understanding and clarifying requirements, identifying conflicts, and negotiating.
3.  **Requirements Specification:** Documenting the requirements in a clear and unambiguous manner.
4.  **Requirements Validation:** Verifying that the specified requirements are correct and meet stakeholder needs.
5.  **Requirements Management:** Handling changes to requirements throughout the software development lifecycle.

**Textbook References:**
*   **Sommerville (2015), Chapters 4-7**
*   **Pressman (2014), Chapters 5**

**Course Outcomes addressed in this module:**
*   **CO1:** Interpret software process models and core activities, including handling changes with techniques like prototyping and incremental delivery. (This section covers the core activities of requirements engineering.)
*   **CO3:** Prepare Software Requirement Specification and Software Design for a given problem. (This section explains how to gather and document requirements, a prerequisite for SRS.)

---

### 2.1 Requirements Elicitation

This is the process of gathering information about what the system should do and the constraints it must operate under.

**Techniques for Elicitation:**
*   **Interviews:** Direct conversations with stakeholders.
    *   **Types:** Structured (predefined questions), Unstructured (open-ended discussion).
    *   **Sommerville (2015):** "Interviews are a common technique for requirements elicitation. They can be structured or unstructured, open or closed." (p. 79)
*   **Workshops/Focus Groups:** Bringing together multiple stakeholders to discuss requirements.
*   **Brainstorming:** Generating a wide range of ideas.
*   **Questionnaires/Surveys:** Collecting information from a large number of stakeholders.
*   **User Observation (Ethnography):** Observing users in their natural work environment to understand their tasks and needs.
    *   **Sommerville (2015):** "Ethnography is a technique where the analyst observes users in their work environment to understand their tasks and how they actually do them." (p. 83)
*   **Prototyping:** Creating a working model of the system to get feedback from users.
    *   **Sommerville (2015):** "Prototyping is an effective technique for requirements elicitation, especially when user requirements are unclear or when there is a need to demonstrate a potential system." (p. 85)
    *   **Relevance to CO1:** Prototyping is a key technique for handling changes and clarifying requirements.

**Challenges in Elicitation:**
*   **Stakeholders don't know what they want.**
*   **Conflicting requirements from different stakeholders.**
*   **Unstated (tacit) requirements.**
*   **Changes in requirements during the development process.**

---

### 2.2 Requirements Analysis

Once requirements are elicited, they need to be analyzed to ensure they are clear, consistent, complete, and feasible.

**Activities:**
*   **Identifying functional and non-functional requirements.**
*   **Resolving conflicts between requirements.**
*   **Prioritizing requirements.**
*   **Modeling requirements** (e.g., use cases, data flow diagrams).
    *   **Pressman (2014):** "System modeling, including data flow diagrams, entity-relationship diagrams, and UML diagrams, is crucial for analyzing requirements and communicating them effectively." (p. 160)

---

### 2.3 Requirements Specification

This involves documenting the requirements in a formal and structured way. The primary output is a **Software Requirements Specification (SRS) document**.

**Key Components of an SRS:**
*   **Introduction:** Purpose, scope, definitions, references, overview.
*   **Overall Description:** Product perspective, product functions, user characteristics, constraints, assumptions, dependencies.
*   **Specific Requirements:**
    *   **Functional Requirements:** Detailed description of each function.
    *   **Non-Functional Requirements:** Performance, security, usability, etc.
    *   **External Interface Requirements:** User interfaces, hardware interfaces, software interfaces, communication interfaces.
    *   **Design Constraints:** Hardware constraints, programming language constraints, etc.
    *   **System Features:** Grouping requirements by feature.

**Sommerville (2015):** "The SRS document is a complete and consistent description of the system to be developed. It serves as a contract between the customer and the developer." (p. 95)

**Pressman (2014):** "The SRS should be a clear, unambiguous, and complete document that serves as the foundation for design, implementation, and testing." (p. 131)

**Relevance to CO3:** This is the core activity for preparing an SRS.

---

### 2.4 Requirements Validation

This process ensures that the specified requirements accurately reflect the needs of the stakeholders and that the system, if built according to these requirements, will meet those needs.

**Techniques for Validation:**
*   **Reviews:** Formal inspections and walkthroughs of the SRS document by stakeholders and technical experts.
*   **Prototyping:** Demonstrating a working version to users for feedback.
*   **Test Case Generation:** Deriving test cases from the requirements. If test cases can be derived, it's a good indicator of clarity and completeness.
*   **User Acceptance Testing (UAT):** Users test the system to verify it meets their needs.

**Sommerville (2015):** "Requirements validation aims to detect errors in the requirements specification, ensuring that the system specified meets the customer's needs." (p. 98)

---

### 2.5 Requirements Management

As software evolves, requirements often change. Requirements management involves identifying, documenting, and controlling changes to requirements.

**Key Concepts:**
*   **Change Control:** A formal process for managing and approving changes.
*   **Baseline:** A version of the requirements that has been formally reviewed and agreed upon.
*   **Traceability:** The ability to trace the history of requirements, from their origin to their implementation and testing.

**Reference Books:**
*   **Royce (1998):** Emphasizes the importance of managing change throughout the software lifecycle. (Chapter 8: Requirements Management)
*   **Anderson (2010) - Kanban:** While not directly about requirements, Kanban's focus on visualizing workflow and limiting work-in-progress can help manage the flow of requirement changes.
*   **Poppendieck (2006) - Lean:** Lean principles like minimizing waste and continuous improvement are relevant to efficient requirements management.

**Relevance to CO1:** Handling changes is a key aspect of software process models.

---

## 3. Designing for Requirements

Once requirements are well-defined, the next step is to design the software architecture and detailed design that will satisfy these requirements.

**Key Concepts:**
*   **Software Design:** The process of defining the architecture, components, interfaces, and other characteristics of a software system.
*   **Architecture Design:** The highest level of design, defining the overall structure of the system.
*   **Detailed Design:** Designing individual modules and components.

**Textbook References:**
*   **Pressman (2014), Chapter 6: System Modeling, Chapter 7: Architectural Design, Chapter 8: Design Model**
*   **Sommerville (2015), Chapter 8: System Design, Chapter 9: Architectural Design, Chapter 10: Detailed Design**
*   **Sommerville (2020), Chapter 6: Software Architecture, Chapter 7: Design**

**Course Outcomes addressed in this module:**
*   **CO3:** Prepare Software Requirement Specification and Software Design for a given problem. (This section introduces the link between requirements and design.)
*   **CO4:** Interpret object-oriented design principles, design patterns, software testing methods (including unit testing, integration testing, and test automation), and open-source licensing models (such as GPL, LGPL, and BSD). (The subsequent design phase will heavily rely on these principles and patterns.)

---

### 3.1 Design Considerations Based on Requirements

*   **Functional Requirements:** Drive the definition of system functionalities, user interfaces, and data structures.
*   **Non-Functional Requirements:** Heavily influence architectural choices, technology selection, and design patterns.
    *   **Performance NFRs:** Might lead to choosing distributed systems, efficient algorithms, or caching mechanisms.
    *   **Security NFRs:** Dictate the need for authentication, authorization, encryption, and secure coding practices.
    *   **Usability NFRs:** Guide the design of user interfaces and interaction flows.
    *   **Reliability NFRs:** Influence the design for fault tolerance and error handling.

**Example:** If a requirement is "The system shall handle 10,000 concurrent users" (performance NFR), the design team must consider scalable architectures like microservices, load balancing, and robust database solutions.

---

## 4. Practice Questions and Exercises

**Instructions:** Answer the following questions to test your understanding of functional and non-functional requirements.

**Question 1 (Definition):**
What is the primary difference between a functional requirement and a non-functional requirement?

**Question 2 (Identification):**
For a banking application, identify at least three functional requirements and three non-functional requirements.

**Question 3 (Scenario Analysis):**
Consider a website that allows users to book flight tickets.
a) List two functional requirements.
b) List two non-functional requirements and explain why they are important for this application.

**Question 4 (Impact of NFRs):**
A new e-commerce platform has a requirement: "The system must be available 99.99% of the time."
What are the potential design implications of this non-functional requirement?

**Question 5 (Process):**
Describe the key activities involved in the requirements engineering process.

---

## 5. Answers to Practice Questions

**Answer 1:**
*   **Functional Requirements** define *what* the system does (its behaviors, functions, services).
*   **Non-Functional Requirements** define *how well* the system performs its functions (its qualities, constraints, attributes).

**Answer 2:**
**Banking Application:**

*   **Functional Requirements:**
    1.  The system shall allow users to check their account balance.
    2.  The system shall allow users to transfer funds between their accounts.
    3.  The system shall allow users to view their transaction history for the last 90 days.
*   **Non-Functional Requirements:**
    1.  **Security:** All financial transactions must be encrypted using industry-standard protocols (e.g., TLS 1.2 or higher).
    2.  **Performance:** The system shall display the account balance within 1 second of the user's request.
    3.  **Usability:** The interface for fund transfers must be intuitive enough for a first-time user to complete a transfer within 2 minutes without assistance.

**Answer 3:**
**Flight Booking Website:**

a) **Functional Requirements:**
    1.  The system shall allow users to search for flights based on origin, destination, departure date, and return date.
    2.  The system shall allow users to select seats during the booking process.

b) **Non-Functional Requirements:**
    1.  **Performance:** The flight search results page must load within 3 seconds for users with a standard internet connection. (Importance: Users will abandon the site if searches are slow, directly impacting revenue.)
    2.  **Reliability:** The system must be available 24/7, with a maximum downtime of 15 minutes per month for scheduled maintenance. (Importance: Flights are booked at all hours, and downtime means lost bookings and customer frustration.)

**Answer 4:**
The requirement "The system must be available 99.99% of the time" (which translates to roughly 52 minutes of downtime per year) has significant design implications:

*   **Redundancy:** Implement redundant hardware (servers, network devices, power supplies).
*   **Failover Mechanisms:** Design automatic failover systems so if one component fails, another takes over seamlessly.
*   **Clustering:** Use server clusters to ensure continuous operation.
*   **Load Balancing:** Distribute incoming traffic across multiple servers.
*   **Disaster Recovery:** Plan for data backups and recovery in case of catastrophic failures or natural disasters.
*   **Monitoring and Alerting:** Implement robust monitoring to detect failures quickly and alert administrators.
*   **Deployment Strategies:** Employ zero-downtime deployment strategies for updates and patches.
*   **Architecture:** A highly available architecture, possibly distributed or microservices-based, would be necessary.

**Answer 5:**
The key activities in the requirements engineering process are:

1.  **Requirements Elicitation:** Gathering information from stakeholders about their needs and constraints.
2.  **Requirements Analysis:** Understanding, clarifying, resolving conflicts, and modeling the elicited requirements.
3.  **Requirements Specification:** Documenting the requirements in a formal document (like an SRS).
4.  **Requirements Validation:** Verifying that the specified requirements are correct, complete, and meet stakeholder needs.
5.  **Requirements Management:** Planning for, identifying, documenting, and controlling changes to requirements throughout the lifecycle.

---

## 6. Important Points to Remember

*   **Distinguish clearly between functional (what) and non-functional (how well) requirements.**
*   **NFRs are often more critical than functional requirements for user satisfaction and system success.**
*   **Well-defined requirements are the bedrock of successful software development.**
*   **Involve all relevant stakeholders in the requirements process.**
*   **Requirements evolve; have a robust process for managing changes.**
*   **Prototyping is a powerful technique for clarifying ambiguous requirements.**
*   **An SRS document is a formal contract and should be precise, complete, and unambiguous.**
*   **Non-functional requirements directly influence architectural and design decisions.**

---

This concludes the notes for Module 2, Topic: Requirement Analysis and Design: Functional and Non-Functional Requirements. This module provides the essential foundation for understanding what needs to be built before we proceed to design and implementation.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
