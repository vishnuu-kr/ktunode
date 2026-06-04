---
title: "Requirements elicitation"
subject: "SOFTWARE ENGINEERING"
module: "Module 2: Requirement Analysis and Design: Functional and non"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f3633b"
status: "completed"
scrapedAt: "2026-05-23T16:24:12.614Z"
---
# Software Engineering: Module 2 - Requirement Analysis and Design

## Topic: Requirements Elicitation

### Introduction

Requirements elicitation is the process of discovering, gathering, and understanding the needs and constraints for a software system. It is a crucial first step in software development, as incorrect or incomplete requirements can lead to costly rework and project failure. This process involves interacting with stakeholders to identify what the system should do, how it should perform, and what limitations it must adhere to.

**Key Concept:** Requirements elicitation aims to identify the "what" of the system from the perspective of the stakeholders.

### Learning Outcomes Covered

This topic directly addresses:

*   **Understanding the "what" and "how" of system functionality:** Essential for preparing SRS (CO3).
*   **Interacting with stakeholders:** Aligns with understanding user needs and adapting to changes (CO1).
*   **Foundation for subsequent design activities:** Elicited requirements drive design choices.

### Key Concepts and Definitions

*   **Requirements:** A statement of what the system must do or a quality or constraint on the system.
    *   **Functional Requirements:** Describe the services the system should provide. They define what the system *does*.
        *   *Example:* "The system shall allow users to log in with their username and password."
    *   **Non-Functional Requirements:** Describe constraints on the system or quality attributes. They define how the system *performs*.
        *   *Example:* "The system shall respond to user queries within 2 seconds." (Performance)
        *   *Example:* "The system shall be available 99.9% of the time." (Reliability)
        *   *Example:* "The system shall comply with GDPR regulations." (Security/Legal)
*   **Stakeholders:** Individuals or organizations who have an interest in the system. This includes users, customers, developers, managers, and domain experts.
*   **Elicitation:** The process of discovering, gathering, and documenting requirements. This is often an iterative process.
*   **User Requirements:** Statements in natural language of the services the system provides and the constraints on its operation.
*   **System Requirements:** A more detailed description of the system's functions, services, and operational constraints. This forms the basis for the Software Requirements Specification (SRS).

### Requirements Elicitation Process

The process of requirements elicitation is not a single event but an ongoing activity. It typically involves:

1.  **Stakeholder Identification:** Identifying all individuals and groups who have a stake in the system.
2.  **Elicitation Activities:** Using various techniques to gather information from stakeholders.
3.  **Requirements Analysis:** Understanding, organizing, and resolving conflicts among requirements.
4.  **Requirements Documentation:** Recording the identified requirements in a structured format (e.g., SRS).
5.  **Requirements Validation:** Ensuring that the documented requirements are correct, complete, and consistent.

**Important Point to Remember:** Requirements elicitation is inherently challenging due to communication barriers, differing perspectives, and the dynamic nature of needs.

### Requirements Elicitation Techniques

Several techniques can be employed, often in combination, to effectively elicit requirements.

#### 1. Interviews

*   **Description:** Direct questioning of stakeholders to gather information about their needs and expectations.
*   **Types:**
    *   **Structured Interviews:** Predefined set of questions.
    *   **Unstructured Interviews:** Open-ended questions with no predefined script.
    *   **Semi-structured Interviews:** A mix of both.
*   **Pros:**
    *   Can gather detailed information.
    *   Allows for clarification and follow-up questions.
    *   Builds rapport with stakeholders.
*   **Cons:**
    *   Can be time-consuming.
    *   May be biased by the interviewer or interviewee.
    *   Information can be anecdotal.
*   **Sommerville (Tenth Edition):** Emphasizes the importance of skilled interviewers who can ask open-ended questions and actively listen.
*   **Pressman (Eighth Edition):** Suggests conducting a series of interviews with different stakeholders to gain a comprehensive view.

#### 2. Questionnaires/Surveys

*   **Description:** A set of written questions distributed to a larger group of stakeholders.
*   **Pros:**
    *   Efficient for gathering data from many people.
    *   Can be standardized for easier analysis.
*   **Cons:**
    *   Less flexibility for clarification.
    *   Response rates can be low.
    *   Ambiguous questions can lead to misinterpretation.
*   **Example:** A survey sent to all potential users of a new online banking system asking about their preferred features and security concerns.

#### 3. Workshops/Focus Groups

*   **Description:** Bringing together a group of stakeholders in a facilitated session to discuss and define requirements.
*   **Pros:**
    *   Facilitates interaction and collaboration.
    *   Can quickly uncover conflicts and dependencies.
    *   Promotes consensus building.
*   **Cons:**
    *   Requires careful facilitation to manage diverse opinions.
    *   Can be difficult to schedule.
*   **Sommerville (Tenth Edition):** Recommends using workshops for rapidly exploring requirements when stakeholders are co-located.
*   **Pressman (Eighth Edition):** Advocates for facilitated application specification techniques (FAST) which are structured workshops.

#### 4. Brainstorming

*   **Description:** A free-form approach where participants generate ideas without criticism.
*   **Pros:**
    *   Encourages creativity and a wide range of ideas.
    *   Quickly generates many potential requirements.
*   **Cons:**
    *   May produce a large number of unfeasible ideas.
    *   Requires subsequent filtering and analysis.

#### 5. Observation/Ethnography

*   **Description:** Observing users in their natural work environment to understand their processes, challenges, and needs.
*   **Pros:**
    *   Reveals implicit or unstated requirements that users may not articulate.
    *   Provides a realistic understanding of the workflow.
*   **Cons:**
    *   Time-consuming and resource-intensive.
    *   The act of observation can alter user behavior (Hawthorne effect).
*   **Sommerville (Tenth Edition):** Highlights the value of ethnographic studies for understanding user context.
*   **Reference:** While not directly a textbook for elicitation, books like **"Kanban" by David J. Anderson** indirectly emphasize understanding the actual workflow of teams, which observation can support.

#### 6. Document Analysis

*   **Description:** Reviewing existing documents (e.g., manuals, reports, specifications) related to the current system or domain.
*   **Pros:**
    *   Provides background information and existing rules.
    *   Can identify current problems and areas for improvement.
*   **Cons:**
    *   Documents may be outdated or incomplete.
    *   Information might not be directly relevant to the new system.
*   **Example:** Analyzing the user manual of an existing accounting software to understand current reporting features.

#### 7. Prototyping

*   **Description:** Creating a preliminary version of the system or its interface to allow stakeholders to interact with it and provide feedback.
*   **Types:**
    *   **Throwaway Prototyping:** The prototype is discarded after requirements are clarified.
    *   **Evolutionary Prototyping:** The prototype is developed incrementally and evolves into the final system.
*   **Pros:**
    *   Provides a tangible representation of the system.
    *   Facilitates early user feedback and validation.
    *   Helps in discovering missing or misunderstood requirements.
*   **Cons:**
    *   Stakeholders may expect the prototype to be fully functional.
    *   Can lead to scope creep if not managed carefully.
*   **Sommerville (Tenth Edition) & Pressman (Eighth Edition):** Both heavily advocate for prototyping as a key technique for requirements elicitation and validation.
*   **CO1 Alignment:** Directly supports handling changes with techniques like prototyping.

#### 8. Use Cases and User Stories

*   **Description:**
    *   **Use Cases:** Describe a sequence of actions that a system performs to produce an observable result of value to a particular actor. They focus on system interactions.
    *   **User Stories:** Short, simple descriptions of a feature told from the perspective of the person who desires the new capability, usually a user or customer. They typically follow the format: "As a [type of user], I want [some goal] so that [some reason]."
*   **Pros:**
    *   User-centric and easy to understand.
    *   Focus on value delivered to the user.
    *   Good for iterative development.
*   **Cons:**
    *   May lack detail for complex functional requirements.
    *   Can be difficult to capture non-functional requirements directly.
*   **CO3 Alignment:** User stories are a core artifact for preparing Software Requirement Specifications (SRS) in agile contexts.
*   **Agile Context (Reference Books):** **"Agile Management for Software Engineering" by David J. Anderson** and **"Implementing Lean Software Development" by Mary Poppendieck** both highlight the importance of user stories and delivering value incrementally.

### Challenges in Requirements Elicitation

*   **Incomplete Information:** Stakeholders may not know or express all their needs.
*   **Conflicting Requirements:** Different stakeholders may have opposing needs.
*   **Changing Requirements:** Stakeholders' needs can evolve over time.
*   **Vagueness and Ambiguity:** Natural language can be imprecise.
*   **Assumptions:** Stakeholders may make implicit assumptions that are not shared by developers.
*   **Communication Barriers:** Differences in technical knowledge, jargon, and perspectives.
*   **Unstated Requirements:** Users may not realize certain functionalities are needed or taken for granted.

**Important Point to Remember:** Overcoming these challenges requires effective communication, active listening, and the use of multiple elicitation techniques.

### Requirements Validation

Once requirements are elicited and documented, they must be validated to ensure they are correct, complete, consistent, and unambiguous.

*   **Techniques:**
    *   **Reviews:** Stakeholders and the development team review the requirements document.
    *   **Prototyping:** Users interact with a prototype and provide feedback.
    *   **Test Case Generation:** Attempting to write test cases based on the requirements can uncover ambiguities or incompleteness.
    *   **Checklists:** Using predefined lists of common errors or omissions.

**CO3 Alignment:** Validation is a critical step in preparing a robust Software Requirement Specification.

### Connection to Course Outcomes

*   **CO1 (Software Process Models, Prototyping):** Requirements elicitation is the starting point for all process models. Prototyping, as an elicitation technique, is explicitly mentioned.
*   **CO2 (Agile Methods):** User stories and iterative elicitation are fundamental to agile methodologies.
*   **CO3 (Prepare SRS):** Elicitation directly feeds into the creation of the SRS. Understanding functional and non-functional requirements is key.
*   **CO6 (Project Management Concepts, SCRUM, Kanban, Lean):** Effective requirements elicitation and management are crucial for successful project planning, estimation, and change management, especially within agile frameworks like Scrum and Kanban. Understanding user needs early is vital for Lean principles of waste reduction.

### Example Scenario: Online Bookstore

Let's consider eliciting requirements for a new online bookstore.

1.  **Stakeholder Identification:** Customers, bookstore administrators, marketing team, inventory managers.
2.  **Elicitation Techniques Used:**
    *   **Interviews:** Interviewing existing customers about their online shopping habits and pain points with current sites. Interviewing bookstore administrators about managing inventory and orders.
    *   **Workshops:** Holding a workshop with the marketing team to discuss features that will attract new customers (e.g., personalized recommendations, promotions).
    *   **Document Analysis:** Reviewing the requirements and user manuals of existing successful online bookstores.
    *   **Prototyping:** Developing a clickable prototype of the book browsing and checkout process for customers to test and provide feedback.
    *   **User Stories:**
        *   "As a customer, I want to search for books by title, author, or ISBN so that I can quickly find what I'm looking for."
        *   "As a bookstore administrator, I want to add new book titles to the inventory with their details so that customers can purchase them."
        *   "As a customer, I want to see customer reviews for each book so that I can make informed purchase decisions."
    *   **Non-functional Requirements Elicited:**
        *   "The website must load within 3 seconds on a standard broadband connection." (Performance)
        *   "The system must securely process credit card payments." (Security)
        *   "The website must be accessible to users with visual impairments (WCAG 2.1 AA compliance)." (Accessibility)

### Practice Questions

1.  What is the primary goal of requirements elicitation?
2.  Differentiate between functional and non-functional requirements, providing an example for each in the context of a library management system.
3.  List and briefly describe three common techniques used for requirements elicitation.
4.  What are the advantages of using prototyping in the requirements elicitation process?
5.  Explain the structure of a user story and provide one example for a mobile banking application.
6.  Identify two common challenges encountered during requirements elicitation and suggest a strategy for addressing each.

### Answers to Practice Questions

1.  **Primary Goal:** The primary goal of requirements elicitation is to discover, gather, and understand the needs and constraints of stakeholders for a software system.
2.  **Functional vs. Non-functional:**
    *   **Functional Requirement (Library System):** "The system shall allow users to borrow a book."
    *   **Non-functional Requirement (Library System):** "The system shall be available to users 24/7."
3.  **Three Common Techniques:**
    *   **Interviews:** Direct questioning of stakeholders to gather information.
    *   **Workshops:** Facilitated sessions with multiple stakeholders to discuss and define requirements collaboratively.
    *   **User Stories:** Short, user-centric descriptions of desired functionality, often following the "As a [user], I want [goal] so that [reason]" format.
4.  **Advantages of Prototyping:** Prototyping provides a tangible, interactive model of the system, allowing stakeholders to give concrete feedback early. This helps in identifying missing requirements, clarifying ambiguities, and validating user expectations before significant development investment.
5.  **User Story Structure:** "As a [type of user], I want [some goal] so that [some reason]."
    *   **Example (Mobile Banking):** "As a customer, I want to view my account balance so that I know how much money I have."
6.  **Challenges and Strategies:**
    *   **Challenge:** **Conflicting Requirements** (e.g., one department wants a feature that another deems unnecessary or too costly).
        *   **Strategy:** Use facilitated workshops with all involved stakeholders to discuss the conflicts, understand the rationale behind each requirement, and negotiate a compromise or prioritize based on business value. Document the resolution clearly.
    *   **Challenge:** **Unstated Requirements** (e.g., users assuming certain security measures are in place without explicitly stating them).
        *   **Strategy:** Employ observation techniques (ethnography) to understand the user's context and implicit needs. Also, utilize structured interviews with follow-up questions that probe for assumptions and unstated expectations.

### Important Points to Remember

*   Requirements elicitation is an **iterative process**, not a one-off activity.
*   Effective **communication and stakeholder engagement** are paramount.
*   A **combination of techniques** is usually more effective than relying on a single method.
*   Understanding both **functional and non-functional requirements** is crucial for a complete system specification.
*   **Early validation** of requirements can prevent significant rework later in the development lifecycle.
*   **User stories** are a valuable tool, especially in agile development, for capturing requirements from the user's perspective.
*   The insights from requirements elicitation form the **foundation for all subsequent software engineering activities**, including design, implementation, and testing.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
