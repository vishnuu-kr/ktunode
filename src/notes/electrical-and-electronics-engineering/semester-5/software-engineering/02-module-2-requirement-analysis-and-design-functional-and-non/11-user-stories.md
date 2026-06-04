---
title: "User stories"
subject: "SOFTWARE ENGINEERING"
module: "Module 2: Requirement Analysis and Design: Functional and non"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f36343"
status: "completed"
scrapedAt: "2026-05-23T16:24:18.268Z"
---
## Module 2: Requirement Analysis and Design - User Stories

This module focuses on understanding and defining the requirements for a software system, with a particular emphasis on user-centric approaches. This topic will delve into User Stories, a fundamental tool in agile software development.

### 1. Introduction to User Stories

**1.1 What are User Stories?**

User Stories are short, simple descriptions of a feature told from the perspective of the person who desires the new capability, usually a user or customer of the system. They are a key artifact in Agile software development methodologies.

*   **Purpose:** To articulate how a software feature will provide value to the customer.
*   **Focus:** Delivering value to the user, not just listing technical specifications.
*   **Agile Context:** User stories are central to frameworks like Scrum and Kanban, facilitating incremental development and continuous feedback. (CO2)

**1.2 The "3 Cs" of User Stories:**

The "3 Cs" (Card, Conversation, Confirmation) provide a framework for understanding and managing user stories.

*   **Card:** The written user story itself, typically on an index card or digital equivalent. It's a brief, concise statement.
    *   **Common Format:** "As a [type of user], I want [some goal] so that [some reason/benefit]."
    *   **Example:** "As a registered customer, I want to add items to my shopping cart so that I can purchase them later."
*   **Conversation:** The ongoing dialogue between the development team and the product owner (or stakeholders) to clarify the details and understand the intent behind the story. This is where the true understanding of the requirement is built.
    *   **Importance:** This collaborative discussion ensures everyone shares a common understanding and helps uncover hidden assumptions or nuances. (CO2)
*   **Confirmation:** The acceptance criteria that define when the story is considered "done" and meets the user's needs. These are specific, testable conditions.
    *   **Example (for the above story):**
        *   The user can select an "Add to Cart" button for an item.
        *   The item is displayed in the user's shopping cart.
        *   The shopping cart count updates correctly.
        *   The user can add multiple instances of the same item.

**1.3 Why Use User Stories?**

User stories offer several advantages over traditional requirements documentation:

*   **User-Centric:** They keep the focus on the user's needs and the value they receive.
*   **Encourage Conversation:** They facilitate communication and collaboration.
*   **Promote Iterative Development:** They are small enough to be completed within a single iteration (sprint).
*   **Flexible and Adaptable:** They are easy to change and refine as understanding evolves. (CO1)
*   **Prioritization:** Their value-oriented nature makes them easy to prioritize.
*   **Testability:** Acceptance criteria make them directly testable.

**1.4 Characteristics of Good User Stories (INVEST):**

The INVEST acronym is a helpful mnemonic for evaluating the quality of user stories.

*   **I - Independent:** Stories should ideally be independent of each other, allowing them to be developed and deployed in any order. While complete independence is rare, aim for minimal dependencies.
*   **N - Negotiable:** Stories are not detailed contracts but rather placeholders for conversation. The details can be refined through discussion.
*   **V - Valuable:** Each story should deliver tangible value to the end-user or the business.
*   **E - Estimable:** The team should be able to estimate the effort required to implement the story.
*   **S - Small:** Stories should be small enough to be completed within a single iteration or sprint. Large stories are often called "epics" and need to be broken down.
*   **T - Testable:** Stories must have clear acceptance criteria that can be used to verify their completion.

### 2. Creating and Writing User Stories

**2.1 The User Story Template:**

As mentioned, the standard template is:

**"As a <type of user>, I want <some goal> so that <some reason/benefit>."**

*   **Type of User:** Clearly identifies who the story is for (e.g., "registered user," "administrator," "guest shopper").
*   **Goal:** Describes the action the user wants to perform or the feature they need.
*   **Reason/Benefit:** Explains *why* the user wants this, highlighting the value. This is crucial for understanding the context and making informed decisions.

**2.2 Identifying User Roles:**

Understanding the different types of users who will interact with the system is essential for writing relevant user stories.

*   **Brainstorming:** Identify all potential actors who will use or interact with the software.
*   **Personas:** Consider creating user personas, which are semi-fictional representations of your ideal customers, to gain deeper insights into their motivations and needs. (Mentioned implicitly in user-centric design principles in Sommerville and Pressman).

**2.3 Writing Effective Goals and Reasons:**

*   **Goals:** Should be actionable and specific. Avoid vague statements.
    *   *Weak:* "I want to manage my profile."
    *   *Strong:* "I want to update my email address and password."
*   **Reasons:** Should articulate the business value or user benefit.
    *   *Weak:* "So that I can use the system."
    *   *Strong:* "So that I can receive important system notifications."

**2.4 Breaking Down Epics:**

Epics are large user stories that are too big to be completed in a single iteration. They need to be broken down into smaller, manageable user stories.

*   **How to Break Down:**
    *   **Workflow Steps:** Decompose the epic based on the steps involved in a user's workflow.
    *   **User Interface Variations:** Create separate stories for different user interface views or functionalities.
    *   **Business Rules:** Separate stories for distinct business rules or constraints.
    *   **Scenarios:** Break down by different scenarios or edge cases.

*   **Example:**
    *   **Epic:** "As a user, I want to manage my account."
    *   **Breakdown:**
        *   "As a registered user, I want to change my password so that I can maintain account security."
        *   "As a registered user, I want to update my contact information so that I receive relevant updates."
        *   "As a registered user, I want to view my account history so that I can track my activity."

**2.5 Acceptance Criteria:**

Acceptance criteria are the conditions that must be met for a user story to be considered complete and acceptable.

*   **Format:** Typically written as a bulleted list.
*   **Characteristics:**
    *   Clear and unambiguous.
    *   Testable.
    *   Concise.
    *   Focus on *what* needs to be done, not *how* it should be implemented.

*   **Example:** For the "change password" story:
    *   Given I am logged in and on the change password page,
    *   When I enter my current password correctly,
    *   And I enter a new password that meets the complexity requirements (e.g., at least 8 characters, contains uppercase, lowercase, and a number),
    *   And I confirm the new password correctly,
    *   Then my password should be updated successfully.
    *   And I should be redirected to the account settings page with a confirmation message.

### 3. User Stories in Agile Practices

**3.1 Role in Sprint Planning:**

User stories are the primary input for sprint planning in Scrum. The team selects stories from the product backlog that they commit to completing in the upcoming sprint.

*   **Estimation:** Teams estimate the effort for each story (often using story points). (CO6)
*   **Prioritization:** The Product Owner prioritizes stories, and the team pulls them into the sprint based on capacity.

**3.2 User Stories and Backlog Management:**

The product backlog is a dynamic, ordered list of everything that might be needed in the product. User stories are the building blocks of the product backlog.

*   **Product Backlog Refinement:** This ongoing process involves adding detail to user stories, estimating them, and ordering them based on priority and dependencies. (CO6)
*   **Story Mapping:** A visual technique that arranges user stories to represent the user's journey through the product, helping to identify the minimum viable product (MVP) and subsequent releases. (Mentioned in the context of agile planning in Anderson's references).

**3.3 User Stories vs. Traditional Requirements (e.g., SRS):**

While traditional Software Requirements Specifications (SRS) are detailed and comprehensive, user stories are more lightweight and iterative.

| Feature          | User Stories                                     | Traditional SRS                                    |
| :--------------- | :----------------------------------------------- | :------------------------------------------------- |
| **Format**       | Short, informal, conversation-driven             | Formal, detailed, structured document              |
| **Focus**        | User value, functionality from user perspective | System requirements, technical specifications      |
| **Scope**        | Small, often a single feature or capability      | Comprehensive, covers the entire system            |
| **Flexibility**  | High, easy to change and evolve                  | Low, changes are often costly and time-consuming   |
| **Development**  | Agile, iterative                                 | Often Waterfall or other plan-driven methodologies |
| **Collaboration**| High, involves active stakeholder participation  | Can be more siloed, with analysts gathering specs  |

*   **Sommerville (2015, 2020):** Emphasizes the shift towards agile methods and the benefits of user-centric approaches, where user stories fit naturally.
*   **Pressman (2014):** Discusses different requirement elicitation techniques and highlights the value of user stories in enabling agile development.

**3.4 User Stories and Testing:**

Acceptance criteria directly inform the creation of test cases.

*   **Test-Driven Development (TDD):** User stories and their acceptance criteria can be used to define tests *before* writing the code. (CO4)
*   **Verification and Validation:** Ensure that the developed software meets the user's needs and the defined criteria.

### 4. Advanced Concepts and Considerations

**4.1 Story Points and Estimation:**

Story points are a relative measure of the effort required to implement a user story, taking into account complexity, risk, and uncertainty.

*   **Relative Estimation:** Instead of absolute time (hours/days), teams compare stories to each other.
*   **Planning Poker:** A common technique for estimating story points, where team members use cards to assign estimates. (CO6)
*   **Why Story Points?** They are less prone to the anchoring bias associated with time-based estimates and focus on the inherent difficulty of the work.

**4.2 Themes and Epics:**

*   **Themes:** A collection of related user stories that represent a larger business objective or area of functionality.
    *   **Example:** "Payment Processing," "User Authentication."
*   **Epics:** As discussed, large stories that need to be broken down.

**4.3 Spikes:**

A spike is a time-boxed investigation or research activity to reduce uncertainty or learn more about a technical approach.

*   **Purpose:** To gain knowledge before committing to a user story.
*   **Outcome:** Can result in new user stories, modified user stories, or a decision to proceed differently.

**4.4 Non-Functional Requirements (NFRs) and User Stories:**

While user stories primarily focus on functional requirements, NFRs (e.g., performance, security, usability) also need to be captured.

*   **How to Capture NFRs with User Stories:**
    *   **"As a..." phrasing:** "As a user, I want the search results to appear within 2 seconds so that I don't have to wait."
    *   **Separate Stories:** "As a system administrator, I want to monitor system performance so that I can ensure it meets our uptime goals."
    *   **Acceptance Criteria:** Include NFRs as acceptance criteria for relevant functional stories.
*   **Sommerville (2015, 2020):** Discusses the importance of NFRs and how they need to be considered throughout the development lifecycle, even in agile.
*   **Pressman (2014):** Also covers NFRs and their impact on design and architecture.

**4.5 Technical Stories:**

These are stories focused on technical tasks that don't directly deliver user-facing functionality but are necessary for the system's health, architecture, or stability.

*   **Examples:** "Refactor the database schema," "Set up continuous integration."
*   **Important:** These should still deliver value, perhaps by improving maintainability, reducing technical debt, or enabling future feature development.

### 5. Practice Questions and Answers

**Question 1:** What are the three key components of a user story as defined by the "3 Cs"?

**Answer:** The three Cs are: Card, Conversation, and Confirmation.

**Question 2:** Explain the INVEST acronym and what each letter represents in the context of user stories.

**Answer:**
*   **I**ndependent: Stories can be developed and deployed in any order.
*   **N**egotiable: Stories are not rigid contracts and can be refined through discussion.
*   **V**aluable: Each story delivers tangible value to the user or business.
*   **E**stimable: The effort required to implement the story can be estimated.
*   **S**mall: Stories are small enough to be completed within an iteration.
*   **T**estable: Stories have clear acceptance criteria for verification.

**Question 3:** Write a user story for an online banking system where a user wants to view their transaction history. Include acceptance criteria.

**Answer:**
**User Story:** "As a bank customer, I want to view my transaction history for a selected date range so that I can track my spending and balance."

**Acceptance Criteria:**
*   Given I am logged into my online banking account,
*   When I navigate to the 'Account Activity' page,
*   Then I should see a calendar or date range selection tool.
*   When I select a start date and an end date,
*   Then the system should display all transactions within that period.
*   The displayed transactions should include the date, description, and amount.
*   If there are no transactions for the selected period, a message indicating this should be displayed.

**Question 4:** Differentiate between an Epic and a User Story.

**Answer:** An Epic is a large, overarching user story that is too broad to be completed in a single iteration. It needs to be broken down into smaller, more manageable user stories. User stories are small, granular pieces of functionality that can be delivered within an iteration.

**Question 5:** How can Non-Functional Requirements (NFRs) be incorporated into a user story-driven development process?

**Answer:** NFRs can be incorporated by:
*   Writing user stories specifically for NFRs (e.g., "As a user, I want pages to load within 3 seconds...").
*   Including NFRs as part of the acceptance criteria for functional user stories (e.g., a story for displaying search results might have an acceptance criterion like "Search results must be displayed within 1 second.").
*   Having discussions during backlog refinement and sprint planning to ensure NFRs are considered alongside functional requirements.

### 6. Important Points to Remember

*   **User stories are about the *what* and the *why*, not the *how*.** The development team figures out the "how."
*   **The "Conversation" is as important as the "Card."** User stories are starting points for dialogue.
*   **Focus on delivering value to the user.** This is the core principle.
*   **The INVEST criteria are a guide for quality.** Strive to meet them.
*   **User stories are an agile tool.** They are best used within agile methodologies like Scrum and Kanban. (CO2, CO6)
*   **Break down large tasks (Epics) into smaller, manageable user stories.** This aids estimation and progress tracking.
*   **Acceptance criteria are crucial for defining "done."** They also form the basis for testing. (CO4)
*   **NFRs must be considered.** They can be captured via specific stories or acceptance criteria.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### 7. References

*   **Software Engineering by Ian Sommerville (Pearson Education, Tenth edition, 2015; First Edition, 2020):** Chapters on agile methods, requirements engineering, and software process models will provide context for the role of user stories in modern software development. (CO1, CO2)
*   **Software Engineering: A Practitioner’s Approach by Roger S. Pressman (McGraw Hill publication, Eighth edition, 2014):** Sections on agile processes, requirements elicitation, and software design will cover user stories as a key technique. (CO3)
*   **Kanban by David J. Anderson (Blue Hole Press, 2010) & Agile Management for Software Engineering by David J. Anderson (Pearson, 2003):** These provide practical insights into how user stories are used in agile project management and workflow management. (CO2, CO6)
*   **Software Project Management: A Unified Framework by Walker Royce (Pearson Education, 1998):** While an older text, it provides foundational principles of project management that are adapted by agile methodologies.
*   **Implementing Lean Software Development: From Concept to Cash by Mary Poppendieck (Addison-Wesley Signature Series, 2006):** Offers perspectives on value delivery and customer focus, aligning with the philosophy behind user stories.

### 8. Alignment with Course Outcomes

*   **CO1:** User stories help interpret software process models by focusing on incremental delivery and handling changes through iterative refinement.
*   **CO2:** User stories are a cornerstone of agile methods, embodying the principles of the Agile Manifesto (customer collaboration, responding to change).
*   **CO3:** User stories are a primary tool for preparing software requirements, forming the basis of a Software Requirement Specification in agile contexts.
*   **CO4:** Acceptance criteria derived from user stories directly inform test case creation, particularly for unit and integration testing.
*   **CO5:** User stories facilitate a continuous feedback loop, important for evolutionary processes and understanding software maintenance needs.
*   **CO6:** User stories are integral to SCRUM and Kanban frameworks for planning, estimation, and managing work.