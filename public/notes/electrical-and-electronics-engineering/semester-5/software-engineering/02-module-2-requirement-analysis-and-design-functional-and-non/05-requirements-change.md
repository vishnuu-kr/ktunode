---
title: "Requirements change"
subject: "SOFTWARE ENGINEERING"
module: "Module 2: Requirement Analysis and Design: Functional and non"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f3633d"
status: "completed"
scrapedAt: "2026-05-23T16:24:14.037Z"
---
# Module 2: Requirement Analysis and Design - Requirements Change

## 1. Introduction to Requirements Change

### 1.1 Why Do Requirements Change?

Requirements are rarely static. They evolve throughout the software development lifecycle for various reasons:

*   **Business Changes:** Market conditions, competitive landscape, organizational goals, and economic factors can necessitate changes.
    *   *Example:* A startup might find its initial product-market fit is different than anticipated, requiring a pivot in its features.
*   **User Understanding:** As users interact with prototypes or early versions of the software, they gain a deeper understanding of their needs and identify new requirements or refine existing ones.
    *   *Example:* Users of a new mobile app might realize they need a "dark mode" feature after experiencing eye strain with the default bright theme.
*   **Technological Advancements:** New technologies or improved hardware can offer new possibilities or make existing solutions obsolete.
    *   *Example:* The advent of faster processors might enable a previously computationally intensive feature to be implemented efficiently.
*   **New Insights & Discoveries:** During development, the team might uncover technical constraints or opportunities that lead to requirement adjustments.
    *   *Example:* During database design, the team might discover that a particular data structure is inefficient, leading to a change in how certain information is stored and accessed.
*   **Errors in Initial Requirements:** Incomplete, ambiguous, or incorrect initial requirements are a common source of change.
    *   *Example:* A requirement to "handle all user inputs" might be too vague, leading to a need for clarification and specification of error handling for invalid inputs.
*   **External Factors:** Regulations, legal requirements, or security vulnerabilities can mandate changes.
    *   *Example:* A new data privacy law might require modifications to how user data is collected and stored.

**(Sommerville, Tenth Edition, Chapter 4: Requirements Engineering Processes - Understanding and Managing Requirements)**
**(Pressman, Eighth Edition, Chapter 6: Requirements Modeling - Analysis Modeling)**

### 1.2 The Impact of Requirements Change

Uncontrolled requirements changes can have significant negative impacts:

*   **Increased Costs:** Re-designing, re-coding, re-testing, and re-documenting due to changes all add to project expenses.
*   **Schedule Delays:** Changes disrupt planned work, requiring tasks to be revisited and potentially delaying the overall project timeline.
*   **Reduced Quality:** Rushed changes, inadequate testing after changes, or architectural compromises can lead to bugs and lower software quality.
*   **Scope Creep:** Unmanaged changes can lead to a continuous expansion of the project scope beyond the original objectives.
*   **Team Morale:** Constant disruption and rework can be demotivating for the development team.

**(Royce, "Software Project Management: A unified framework", Chapter 8: Project Planning - Scope Management)**

## 2. Managing Requirements Change

The key to successful software development is not to avoid change, but to manage it effectively.

### 2.1 Change Management Process

A structured approach to handling requirements changes is crucial. This typically involves:

*   **Change Request Submission:** A formal process for documenting and submitting proposed changes. This includes describing the change, its justification, and its perceived impact.
*   **Impact Analysis:** Evaluating the proposed change's effect on:
    *   **Scope:** Will it add or remove functionality?
    *   **Schedule:** How will it affect the timeline?
    *   **Cost:** What are the estimated resource implications?
    *   **Resources:** What additional personnel or equipment are needed?
    *   **Technical Design:** Will it necessitate changes to the architecture or design?
    *   **Other Requirements:** Will it conflict with or impact other existing requirements?
*   **Change Approval/Rejection:** A decision-making body (e.g., Change Control Board - CCB) reviews the change request and impact analysis to approve, reject, or defer the change.
*   **Change Implementation:** If approved, the change is incorporated into the project plan, design, code, and documentation.
*   **Re-testing and Verification:** Thorough testing is performed to ensure the implemented change works as expected and doesn't introduce new defects.
*   **Communication:** All stakeholders are informed about the approved changes and their implications.

**(Sommerville, Tenth Edition, Chapter 4: Requirements Engineering Processes - Change Management)**
**(Pressman, Eighth Edition, Chapter 6: Requirements Modeling - Analysis Modeling)**

### 2.2 Change Control Board (CCB)

A CCB is a group of individuals responsible for evaluating and approving or rejecting change requests. Its composition can vary but typically includes:

*   Project Manager
*   Lead Developer/Architect
*   Key Stakeholders (e.g., Product Owner, Business Analyst)
*   Quality Assurance Lead

**Key Functions of a CCB:**

*   Reviewing change requests and their associated impact analyses.
*   Prioritizing approved changes.
*   Ensuring changes are consistent with project goals and constraints.
*   Maintaining a history of all changes.

**(Royce, "Software Project Management: A unified framework", Chapter 10: Project Organization and Management - Change Control)**

## 3. Techniques for Handling Requirements Change

Different methodologies and techniques offer various ways to accommodate and manage change.

### 3.1 Prototyping

*   **Definition:** Building a working model (prototype) of the software system to demonstrate functionality and gather user feedback.
*   **How it helps with change:**
    *   **Early Feedback:** Users can see and interact with the system early on, identifying misunderstandings and clarifying requirements before extensive development.
    *   **Reduced Ambiguity:** Prototypes make abstract requirements concrete, reducing the likelihood of misinterpretations that lead to changes later.
    *   **Iterative Refinement:** Changes can be incorporated into the prototype iteratively, making them less disruptive than changes to a fully developed system.
*   **Types:**
    *   **Exploratory Prototyping:** Used to explore different options and discover requirements.
    *   **Evolutionary Prototyping:** The prototype is gradually refined and becomes the final system.
    *   **Throwaway Prototyping:** The prototype is built to understand requirements but is discarded once the final system is designed.

**(Sommerville, Tenth Edition, Chapter 12: Prototyping)**
**(Pressman, Eighth Edition, Chapter 7: Requirements Modeling - Prototyping)**

### 3.2 Incremental Delivery

*   **Definition:** Developing and delivering the software in small, usable increments. Each increment builds upon the previous ones, adding new functionality.
*   **How it helps with change:**
    *   **Early Delivery of Value:** Working software is delivered to users sooner, allowing for feedback and adaptation.
    *   **Reduced Risk:** Problems and changing requirements are identified and addressed in smaller chunks, making them easier to manage.
    *   **Flexibility:** The scope of later increments can be adjusted based on feedback and changing priorities.
*   **Example:** A project to build an e-commerce platform might deliver an initial increment with basic product browsing and a shopping cart, followed by increments for user accounts, payment processing, and order history.

**(Sommerville, Tenth Edition, Chapter 3: Software Process Models - Incremental Development)**
**(Royce, "Software Project Management: A unified framework", Chapter 3: Project Planning - Incremental Planning)**

### 3.3 Agile Methods

Agile methodologies are fundamentally designed to embrace and manage change.

*   **Key Principles (Agile Manifesto):**
    *   Individuals and interactions over processes and tools
    *   Working software over comprehensive documentation
    *   Customer collaboration over contract negotiation
    *   Responding to change over following a plan

*   **How Agile Helps with Change:**
    *   **Iterative and Incremental Development:** Agile practices inherently use short development cycles (sprints) where requirements are refined and prioritized for each iteration.
    *   **Continuous Feedback:** Regular interaction with stakeholders ensures that changes are identified and incorporated early and often.
    *   **Flexibility in Planning:** Agile plans are adaptive, allowing for changes to be incorporated without derailing the entire project.
    *   **Cross-functional Teams:** Teams can respond quickly to changing requirements.

**(Anderson, "Agile Management for Software Engineering", Chapters 1-3)**
**(Poppendieck, "Implementing Lean Software Development: From Concept to Cash", Chapter 5: Iterate and Increment)**

#### 3.3.1 Scrum

*   **Definition:** An agile framework for managing product development.
*   **How it handles change:**
    *   **Product Backlog:** A prioritized list of features and requirements that can be dynamically reordered and refined.
    *   **Sprint Backlog:** The set of Product Backlog items selected for a Sprint, along with the plan for delivering them. This is largely fixed within a Sprint but can be changed between Sprints.
    *   **Sprint Review:** A meeting at the end of each Sprint to inspect the increment and adapt the Product Backlog. This is a key point for incorporating new requirements or modifying existing ones.

**(Anderson, "Kanban", Chapter 4: The Kanban Method - Principles and Practices)**
**(CO2, CO6)**

#### 3.3.2 Kanban

*   **Definition:** A method for managing the flow of work in a way that is visual, efficient, and predictable.
*   **How it handles change:**
    *   **Visual Workflow:** Kanban boards make work visible, highlighting bottlenecks and areas for improvement, which can indirectly facilitate change management.
    *   **Limit Work in Progress (WIP):** Limiting WIP helps maintain a smooth flow, making it easier to slot in new, high-priority items without disrupting the entire system.
    *   **Pull System:** Work is pulled into the next stage only when there is capacity, allowing for prioritization and adaptation of the workflow.

**(Anderson, "Kanban", Chapters 5-7)**
**(CO2, CO6)**

## 4. Software Evolution and Maintenance

Requirements change even after the initial release of the software. This ongoing change is often referred to as software evolution or maintenance.

### 4.1 Types of Maintenance

*   **Corrective Maintenance:** Fixing bugs and defects discovered after deployment.
*   **Adaptive Maintenance:** Modifying the software to adapt to changes in the environment (e.g., new operating systems, hardware, or regulations).
*   **Perfective Maintenance:** Improving the software's performance, maintainability, or adding new features based on user feedback.
*   **Preventive Maintenance:** Making changes to prevent future problems, such as refactoring code or updating documentation.

**(Sommerville, Tenth Edition, Chapter 21: Software Evolution)**
**(CO5)**

### 4.2 Strategies for Managing Evolution

*   **Proactive Change Management:** Implementing robust change management processes from the outset.
*   **Configuration Management:** Tracking and controlling changes to software artifacts (code, documentation, requirements).
*   **Modular Design:** Designing software in a modular way makes it easier to change one part without affecting others.
*   **Automated Testing:** Having a comprehensive suite of automated tests allows for rapid verification of changes.
*   **Continuous Integration/Continuous Delivery (CI/CD):** Automating the build, test, and deployment process facilitates more frequent and less risky updates.

**(CO5, CO6)**

## 5. Requirements Change in Different Contexts

### 5.1 Waterfall Model vs. Agile Models

*   **Waterfall:** In traditional Waterfall models, changes are difficult and expensive to implement once a phase is completed. Change requests are typically handled through a formal, often bureaucratic, change control process. The emphasis is on minimizing change.
*   **Agile:** Agile models embrace change as a natural part of development. They are designed to be flexible and adaptive, allowing for frequent changes to requirements based on feedback and evolving priorities.

**(Sommerville, Tenth Edition, Chapter 3: Software Process Models)**
**(Pressman, Eighth Edition, Chapter 2: Software Process Models - The Waterfall Model)**
**(CO1, CO2)**

## 6. Key Concepts and Definitions Recap

*   **Requirements Change:** Modifications to the specified needs and constraints of a software system.
*   **Change Request:** A formal proposal to alter a requirement.
*   **Impact Analysis:** The process of evaluating the consequences of a proposed change.
*   **Change Control Board (CCB):** A committee responsible for approving or rejecting change requests.
*   **Prototyping:** Building a working model to explore requirements and gather feedback.
*   **Incremental Delivery:** Delivering software in small, usable pieces.
*   **Agile Methods:** A set of practices and principles that prioritize flexibility and rapid response to change.
*   **Software Evolution/Maintenance:** The process of modifying software after its initial release to correct errors, adapt to new environments, or improve performance.

## 7. Important Points to Remember

*   **Change is inevitable:** Do not try to prevent change; focus on managing it effectively.
*   **Early detection is key:** The earlier a change is identified, the cheaper and easier it is to implement.
*   **Communication is vital:** Keep all stakeholders informed about proposed and approved changes.
*   **Impact analysis is essential:** Understand the full consequences of a change before approving it.
*   **Agile methods are designed for change:** If your project environment anticipates frequent changes, consider adopting agile approaches.
*   **Documentation is important, but adapt it:** While documentation is crucial, ensure it reflects the current state of the software, especially after changes.

## 8. Practice Questions and Exercises

**Question 1:**

Explain why requirements change throughout the software development lifecycle. Provide at least three common reasons for requirements change.

**Answer:**
Requirements change due to:
1.  **Business Changes:** Shifts in market conditions, company strategy, or competition.
2.  **User Understanding:** Users discovering new needs or clarifying existing ones after interacting with the system or prototypes.
3.  **Technological Advancements:** New technologies enabling new features or making old ones obsolete.
4.  **New Insights:** Technical discoveries or constraints encountered during development.
5.  **Errors in Initial Requirements:** Incomplete, ambiguous, or incorrect initial specifications.

**Question 2:**

Describe the role of a Change Control Board (CCB) in managing requirements changes.

**Answer:**
A Change Control Board (CCB) is a committee responsible for reviewing, evaluating, and approving or rejecting proposed changes to software requirements. Its role includes:
*   Assessing the feasibility and impact of a change request (on scope, schedule, cost, resources, and technical design).
*   Prioritizing approved changes.
*   Ensuring that changes align with project objectives and constraints.
*   Maintaining a record of all change requests and their disposition.

**Question 3:**

How does the practice of **Incremental Delivery** help in managing requirements change? Give a brief example.

**Answer:**
Incremental Delivery helps manage requirements change by:
*   **Early Feedback:** Delivering working software in small increments allows users to provide feedback early and often, identifying requirement issues or new needs sooner.
*   **Reduced Risk:** Changes are implemented in smaller, manageable chunks, making them less disruptive and easier to control compared to a single large delivery.
*   **Flexibility:** The scope of future increments can be adjusted based on feedback and evolving priorities, accommodating new or changed requirements.

*Example:* Building an online library system. The first increment could be for book cataloging and searching. Feedback from librarians might reveal a need for author biography sections, which can then be incorporated into the next increment without redoing the entire system.

**Question 4:**

Contrast the approach to handling requirements change in the Waterfall model versus Agile methodologies.

**Answer:**
*   **Waterfall:** Treats change as an anomaly that should be minimized. Changes are typically handled through a formal, often rigid, change control process that can be time-consuming and costly. The focus is on upfront, detailed planning and adherence to the initial plan.
*   **Agile:** Embraces change as a natural and valuable part of development. Agile methodologies use short development iterations (sprints), continuous feedback, and adaptive planning to readily incorporate changes. Requirements are often refined just-in-time for each iteration, making them highly responsive to evolving needs.

**Question 5 (Practical Exercise):**

Imagine you are working on a project to develop a new customer relationship management (CRM) system. The initial requirements specified a feature for "exporting customer data to CSV format." During user acceptance testing (UAT), users request the ability to export data to Excel (.xlsx) format as well.

1.  **Identify the type of change request this represents.**
2.  **Outline the steps you would take to manage this change request, assuming you have a formal change management process.**
3.  **How might an agile approach differ in handling this request?**

**Answer:**

1.  **Type of Change Request:** This is likely a **perfective** or **enhancement** change, as it adds new functionality requested by users to improve the system's usability and utility. It could also be considered an **adaptive** change if the need arises from a change in user tools or workflows.

2.  **Managing the Change Request (Formal Process):**
    *   **Submission:** The user group or a representative submits a formal change request detailing the need for .xlsx export.
    *   **Impact Analysis:** The project team analyzes:
        *   **Scope:** Adds functionality to export to .xlsx.
        *   **Schedule:** Requires additional development time for implementing the .xlsx export logic, potentially affecting the release date.
        *   **Cost:** Requires developer hours, possibly QA time for testing.
        *   **Technical Design:** May involve using an Excel library or specific API for .xlsx generation.
        *   **Other Requirements:** Ensure compatibility with existing data structures and the CSV export functionality.
    *   **Approval/Rejection:** The CCB reviews the request and impact analysis. If approved, it's prioritized.
    *   **Implementation:** Developers implement the .xlsx export feature.
    *   **Testing:** Thorough unit, integration, and regression testing is performed on the new feature and existing CSV export. UAT might be repeated for this specific feature.
    *   **Documentation Update:** Requirements documentation, user manuals, and technical design documents are updated.

3.  **Agile Approach:**
    *   **Product Backlog:** The request would be added as a new item to the Product Backlog.
    *   **Prioritization:** The Product Owner would prioritize this new backlog item based on its value to users and business goals.
    *   **Iteration Planning:** If prioritized highly enough, it would be pulled into an upcoming Sprint.
    *   **Development:** The team would develop the .xlsx export feature within the Sprint, potentially alongside other prioritized items.
    *   **Continuous Feedback:** The feature would be demonstrated during the Sprint Review, allowing for immediate feedback.
    *   **Adaptability:** The team can easily adapt the plan for the next Sprint based on this feedback or new requests.

---
This concludes the study notes for "Requirements Change." Remember to refer to your textbooks for more in-depth coverage of these topics.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
