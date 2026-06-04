---
title: "Agile development techniques"
subject: "SOFTWARE ENGINEERING"
module: "Module 1: Introduction to Software Engineering "
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f36334"
status: "completed"
scrapedAt: "2026-05-23T16:24:08.317Z"
---
# Module 1: Introduction to Software Engineering - Agile Development Techniques

## 1. Introduction to Agile Development

Agile development is a set of principles and practices for software development that emphasizes **iterative and incremental delivery**, **collaboration**, and **flexibility** in response to change. It emerged as a reaction to the perceived limitations of traditional, plan-driven (often referred to as Waterfall) methodologies, which could be rigid and slow to adapt to evolving requirements.

**Key Concepts:**

*   **Iterative Development:** Software is developed in a series of small, repeated cycles. Each cycle builds upon the previous one, delivering a working version of the software.
*   **Incremental Delivery:** The software is delivered in small, usable increments, allowing stakeholders to provide feedback early and often.
*   **Adaptability/Flexibility:** Agile embraces change. Requirements can evolve throughout the development process, and the team is expected to respond quickly and effectively.
*   **Customer Collaboration:** Close collaboration with customers and stakeholders is crucial to ensure the software meets their needs.
*   **Individuals and Interactions:** Agile values people and their ability to collaborate over processes and tools.
*   **Working Software:** Delivering functional software is prioritized over comprehensive documentation.
*   **Responding to Change:** Agile teams are designed to be responsive to changes in requirements, market conditions, or technology.
*   **Continuous Improvement:** Agile encourages reflection and adaptation of the development process itself.

**Inspiration from Textbooks:**

*   **Sommerville (Tenth Edition, 2015):** Chapter 2, "Introduction to Software Engineering," and Chapter 3, "Software Processes," discuss iterative development models and contrast them with traditional approaches. It highlights the increasing importance of agile methods in modern software development.
*   **Pressman (Eighth Edition, 2014):** Chapter 2, "Software Engineering: A Practitioner's Approach," introduces the concept of evolutionary development and lays the groundwork for understanding agile principles by discussing incremental and iterative models.
*   **Sommerville (First Edition, 2020):** This newer edition likely provides even more contemporary coverage of agile methodologies, their variations, and their application in the context of modern software engineering challenges.

**Course Outcome Alignment:**

*   **CO1 (K2):** Agile techniques are fundamentally about handling changes with incremental delivery and iterative approaches.
*   **CO2 (K2):** This entire section is dedicated to describing agile methods and their core principles.

---

## 2. The Agile Manifesto and Principles

The **Agile Manifesto** is a foundational document that outlines the core values and principles of agile software development. It was created by a group of software developers in 2001.

**The Four Core Values of the Agile Manifesto:**

1.  **Individuals and interactions** over processes and tools
    *   *Meaning:* Prioritizing communication and collaboration among team members and with stakeholders over strict adherence to rigid processes or reliance solely on tools.
    *   *Example:* A quick face-to-face conversation to resolve a misunderstanding is more valuable than documenting every detail in a ticket.
2.  **Working software** over comprehensive documentation
    *   *Meaning:* While documentation is important, the primary measure of progress is the delivery of functional software that provides value to the customer.
    *   *Example:* Demonstrating a working feature is more important than having a lengthy, detailed specification document that doesn't yet translate into a functional product.
3.  **Customer collaboration** over contract negotiation
    *   *Meaning:* Building a strong, ongoing relationship with the customer for continuous feedback and partnership is more beneficial than relying solely on fixed contracts.
    *   *Example:* Regularly involving the product owner in sprint reviews and planning meetings to refine features and prioritize work.
4.  **Responding to change** over following a plan
    *   *Meaning:* Embracing changes in requirements, market conditions, or technology as opportunities to improve the product, rather than resisting them.
    *   *Example:* If a customer realizes a new feature is needed mid-project, the team can quickly reprioritize and incorporate it.

**The Twelve Principles Behind the Agile Manifesto:**

These principles elaborate on the four core values:

1.  Our highest priority is to satisfy the customer through early and continuous delivery of valuable software.
2.  Welcome changing requirements, even late in development. Agile processes harness change for the customer's competitive advantage.
3.  Deliver working software frequently, from a couple of weeks to a couple of months, with a preference to the shorter timescale.
4.  Business people and developers must work together daily throughout the project.
5.  Build projects around motivated individuals. Give them the environment and support they need, and trust them to get the job done.
6.  The most efficient and effective method of conveying information to and within a development team is face-to-face conversation.
7.  Working software is the primary measure of progress.
8.  Agile processes promote sustainable development. The sponsors, developers, and users should be able to maintain a constant pace indefinitely.
9.  Continuous attention to technical excellence and good design enhances agility.
10. Simplicity—the art of maximizing the amount of work not done—is essential.
11. The best architectures, requirements, and designs emerge from self-organizing teams.
12. At regular intervals, the team reflects on how to become more effective, then tunes and adjusts its behavior accordingly.

**Reference Books:**

*   **Anderson (2003) Agile Management for Software Engineering:** This book provides practical guidance on applying agile principles to project management.
*   **Poppendieck (2006) Implementing Lean Software Development:** While focusing on Lean, it shares many underlying principles with Agile, particularly emphasizing efficiency, reducing waste, and delivering value.

**Course Outcome Alignment:**

*   **CO2 (K2):** This section directly addresses the Agile Manifesto and its principles.
*   **CO6 (K2):** Understanding these principles is foundational for applying frameworks like Scrum and Kanban.

**Important Point to Remember:** The Agile Manifesto is not a prescriptive methodology but rather a set of values and principles that guide how software development should be approached.

---

## 3. Popular Agile Development Techniques

Several methodologies and frameworks embody the principles of agile development. Here are some of the most prominent ones:

### 3.1. Scrum

Scrum is a lightweight framework for managing complex product development. It is **iterative and incremental**, focusing on **team collaboration** and **adaptability**.

**Key Scrum Concepts:**

*   **Scrum Team:**
    *   **Product Owner:** Represents the customer and stakeholders, responsible for maximizing the value of the product by defining and prioritizing backlog items.
    *   **Scrum Master:** Facilitates the Scrum process, removes impediments, and coaches the team.
    *   **Development Team:** A cross-functional, self-organizing team responsible for delivering a potentially shippable increment of the product.
*   **Scrum Artifacts:**
    *   **Product Backlog:** A prioritized list of all the work to be done on the product.
    *   **Sprint Backlog:** The set of Product Backlog items selected for the Sprint, plus a plan for delivering them.
    *   **Increment:** The sum of all the Product Backlog items completed during a Sprint and the value of the increments of all previous Sprints.
*   **Scrum Events (Ceremonies):**
    *   **Sprint:** A time-boxed period (typically 1-4 weeks) during which a "done," usable, and potentially releasable product increment is created.
    *   **Sprint Planning:** The team plans the work to be performed in the Sprint.
    *   **Daily Scrum (Stand-up):** A short daily meeting where the Development Team synchronizes its activities and plans for the next 24 hours.
    *   **Sprint Review:** The team and stakeholders inspect the Increment and adapt the Product Backlog if needed.
    *   **Sprint Retrospective:** The team inspects itself and creates a plan for improvements to be enacted during the next Sprint.

**Example Scenario:**

A team is developing a new e-commerce website.
*   The **Product Owner** prioritizes "User Login" and "Product Search" in the Product Backlog.
*   In **Sprint Planning**, the team selects these items and estimates the effort.
*   During the 2-week **Sprint**, the **Development Team** works on implementing user login and product search.
*   Each **Daily Scrum** involves team members discussing what they did yesterday, what they will do today, and any impediments.
*   At the **Sprint Review**, the team demonstrates the working login and search functionality to stakeholders.
*   In the **Sprint Retrospective**, the team discusses how they can improve their estimation process for the next Sprint.

**Reference Books:**

*   **Sommerville (Tenth Edition, 2015):** Likely discusses Scrum in the context of iterative and agile process models.
*   **Pressman (Eighth Edition, 2014):** Also covers Scrum as a prominent agile methodology.
*   **Royce (1998) Software Project Management: A unified framework:** While older, it might discuss principles that influenced Scrum, especially in its iterative and evolutionary aspects.

**Course Outcome Alignment:**

*   **CO2 (K2):** Understanding Scrum is a key aspect of agile project management.
*   **CO6 (K2):** Scrum is directly applied in planning, tracking, and managing software projects.

---

### 3.2. Kanban

Kanban is a visual workflow management method that focuses on **limiting work in progress (WIP)**, **visualizing the workflow**, and **continuous flow**. It is often used in conjunction with other agile practices.

**Key Kanban Concepts:**

*   **Visualize the Workflow:** Use a Kanban board to represent the stages of the development process (e.g., To Do, In Progress, Testing, Done).
*   **Limit Work in Progress (WIP):** Set explicit limits on how many items can be in each stage of the workflow at any given time. This helps prevent bottlenecks and improves focus.
*   **Manage Flow:** Monitor and measure the progress of work through the system, identifying and resolving bottlenecks.
*   **Make Policies Explicit:** Clearly define the rules for how work moves through the system.
*   **Implement Feedback Loops:** Regularly review the process and make improvements.
*   **Improve Collaboratively, Evolve Experimentally:** Encourage continuous process improvement through collaborative efforts and data-driven experimentation.

**Example Scenario:**

A support team uses Kanban to manage incoming bug reports.
*   The **Kanban board** has columns like "New Request," "Analysis," "In Progress," "Testing," "Resolved," and "Closed."
*   **WIP Limits** are set for "Analysis" (e.g., max 2 requests) and "In Progress" (e.g., max 3 requests).
*   When a new bug report arrives, it goes into "New Request."
*   An analyst picks up a request from "New Request" to "Analysis" (respecting the WIP limit).
*   Once analyzed, it moves to "In Progress" for development.
*   After development, it goes to "Testing," and finally to "Resolved" and "Closed."
*   If "Analysis" is full, no new requests can be picked up for analysis until one is moved out.

**Reference Books:**

*   **Anderson (2010) Kanban:** This is the primary reference for Kanban, offering deep insights into its principles and application.

**Course Outcome Alignment:**

*   **CO2 (K2):** Kanban is a recognized agile technique.
*   **CO6 (K2):** Kanban is a framework for managing and tracking projects, especially in terms of workflow and efficiency.

---

### 3.3. Extreme Programming (XP)

Extreme Programming (XP) is an agile software development framework that aims to produce high-quality software and high quality of life for the development team. It emphasizes **technical practices** and **continuous feedback**.

**Key XP Practices:**

*   **Pair Programming:** Two programmers work together at one workstation. One writes code while the other reviews it, offering suggestions and spotting errors.
*   **Test-Driven Development (TDD):** Developers write automated tests *before* writing the code that fulfills those tests.
*   **Continuous Integration (CI):** Developers integrate their work frequently (often multiple times a day) into a shared repository.
*   **Simple Design:** The design should be as simple as possible to meet the current requirements, avoiding over-engineering.
*   **Refactoring:** Continuously improving the internal structure of the code without changing its external behavior.
*   **Small Releases:** Deliver working software in small, frequent releases to get feedback.
*   **Customer Tests:** Customers define acceptance tests that the software must pass.
*   **On-site Customer:** A customer representative is available to the team full-time to answer questions and provide feedback.

**Example Scenario:**

A developer is implementing a new sorting algorithm in XP.
*   They first write a **test** that defines how the sorting should work for a small, unsorted array.
*   They then write the minimum amount of **code** to make that test pass.
*   This process is repeated with another test case, and the code is **refactored** as needed.
*   Another developer **pairs** with them, offering suggestions and ensuring adherence to XP practices.
*   The new code is **continuously integrated** into the main codebase.

**Reference Books:**

*   **Pressman (Eighth Edition, 2014):** Discusses XP as one of the influential agile methodologies.
*   **Sommerville (Tenth Edition, 2015):** Likely covers XP as a significant agile approach.

**Course Outcome Alignment:**

*   **CO2 (K2):** XP is a core agile development technique.
*   **CO4 (K2):** Practices like TDD and CI are directly related to software testing and design quality.

---

## 4. Agile Project Management Practices

Agile project management is about orchestrating agile development to deliver value effectively. It's less about rigid planning and more about **adaptive planning** and **empowerment**.

**Key Agile Project Management Practices:**

*   **Adaptive Planning:** Instead of detailed upfront plans, agile uses rolling-wave planning, where near-term plans are detailed, and long-term plans are more general and subject to change.
*   **Empowered Teams:** Project managers or Scrum Masters empower teams to self-organize and make decisions about how to achieve their goals.
*   **Iterative Planning:** Plans are revisited and updated at the beginning of each iteration (e.g., Sprint Planning in Scrum).
*   **Frequent Feedback:** Regular feedback loops from stakeholders are incorporated into the planning and execution process.
*   **Transparency:** Making progress, impediments, and plans visible to everyone involved.
*   **Continuous Improvement:** Regularly inspecting and adapting the process to become more effective.

**Reference Books:**

*   **Anderson (2003) Agile Management for Software Engineering:** Provides in-depth strategies for managing agile projects.
*   **Royce (1998) Software Project Management: A unified framework:** While from a traditional perspective, it discusses key project management functions (planning, estimation, tracking) that are adapted in agile approaches.

**Course Outcome Alignment:**

*   **CO2 (K2):** Describes agile project management practices.
*   **CO6 (K2):** Directly relates to planning, estimation, scheduling, tracking, and change management using agile frameworks.

---

## 5. Agile vs. Traditional (Waterfall) Development

Understanding agile is often best done by contrasting it with traditional approaches like Waterfall.

| Feature             | Traditional (Waterfall)                                   | Agile Development                                          |
| :------------------ | :-------------------------------------------------------- | :--------------------------------------------------------- |
| **Approach**        | Sequential, linear phases (Requirements, Design, etc.)    | Iterative and incremental cycles                           |
| **Flexibility**     | Low; change is difficult and costly once a phase is done. | High; embraces change as a natural part of development.    |
| **Requirements**    | Defined upfront and largely fixed.                        | Evolve throughout the project; prioritized continuously.   |
| **Customer Input**  | Primarily at the beginning (requirements) and end (acceptance). | Continuous collaboration and feedback throughout.        |
| **Delivery**        | Single, large delivery at the end of the project.         | Frequent, small deliveries of working software.            |
| **Documentation**   | Comprehensive and detailed upfront.                       | Sufficient to enable working software; often just-in-time. |
| **Team Structure**  | Often specialized roles, hierarchical.                    | Cross-functional, self-organizing teams.                   |
| **Risk Management** | Attempts to mitigate risks upfront through planning.        | Mitigates risks through early and frequent delivery and feedback. |
| **Focus**           | Following the plan and documentation.                     | Delivering working software and responding to change.      |

**Example:**

*   **Waterfall:** A company wants to build a new operating system. They spend a year writing detailed specifications for every component, then a year designing, then several years coding, and finally a year testing. If a major technological shift happens mid-way, the entire plan might be invalidated.
*   **Agile:** The same company builds the OS in 3-week sprints. They deliver a basic booting system in the first few sprints, then add networking capabilities, then graphical interfaces, gathering feedback at each step. If a new processor architecture is released, they can adapt their plan to support it in an upcoming sprint.

**Reference Books:**

*   **Sommerville (Tenth Edition, 2015):** Chapter 3 discusses process models, contrasting Waterfall with iterative and agile approaches.
*   **Pressman (Eighth Edition, 2014):** Chapter 2 likely provides a good overview of evolutionary models versus sequential ones.

**Course Outcome Alignment:**

*   **CO1 (K2):** Understanding agile as an alternative to traditional methods that handle change differently.
*   **CO2 (K2):** This comparison highlights the core differences and the rationale behind agile.

---

## 6. Practice Questions and Exercises

**Question 1:**
According to the Agile Manifesto, which of the following is valued more?
a) Comprehensive documentation
b) Working software
c) Following a plan
d) Processes and tools

**Answer:** b) Working software

**Question 2:**
What is the primary role of the Product Owner in Scrum?
a) To manage the development team's tasks.
b) To ensure the Scrum process is followed.
c) To represent the customer and maximize product value.
d) To write all the code for the project.

**Answer:** c) To represent the customer and maximize product value.

**Question 3:**
Name the three core components of a Scrum team.

**Answer:** Product Owner, Scrum Master, Development Team.

**Question 4:**
What is a key principle of Kanban that helps prevent bottlenecks?

**Answer:** Limiting Work in Progress (WIP).

**Question 5:**
Describe two advantages of agile development over traditional Waterfall methods.

**Answer:**
1.  **Flexibility to change:** Agile can readily adapt to evolving requirements.
2.  **Early and continuous delivery of value:** Stakeholders see working software sooner and can provide feedback.
3.  **Improved customer satisfaction:** Close collaboration ensures the product meets customer needs.

**Exercise 1:**
Imagine you are part of a team developing a mobile banking app. The Product Owner has prioritized "View Account Balance" and "Transfer Funds" as the most important features for the first release.
*   Describe how you would approach developing these features using Scrum.
*   What would be the key activities in a Sprint Planning meeting for this scenario?
*   What would you expect to see in a Sprint Review?

**Exercise 2:**
A small startup is building a new social media platform. They are struggling with managing the influx of new ideas and bug reports.
*   How could Kanban help them visualize and manage their workflow?
*   What are some potential WIP limits you might suggest for different stages of their development process (e.g., "Idea Backlog," "In Development," "In Testing," "Deployed")?

---

## 7. Important Points to Remember

*   **Agile is a mindset:** It's about values and principles, not just a set of rules.
*   **Embrace Change:** Agile thrives on adapting to new information and requirements.
*   **Collaboration is Key:** Success hinges on strong communication and teamwork.
*   **Deliver Value Early and Often:** Working software is the primary measure of progress.
*   **Continuous Improvement:** Regularly reflect on and refine your process.
*   **No One-Size-Fits-All:** While Scrum and Kanban are popular, the specific implementation might need to be tailored to the team and project context.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


## 8. Further Reading and References

*   **Sommerville, Ian. *Software Engineering* (Tenth Edition). Pearson Education, 2015.**
*   **Pressman, Roger S. *Software Engineering: A Practitioner’s Approach* (Eighth Edition). McGraw Hill, 2014.**
*   **Sommerville, Ian. *Engineering Software Products: An Introduction to Modern Software Engineering*. Pearson Education, 2020.**
*   **Anderson, David J. *Kanban*. Blue Hole Press, 2010.**
*   **Anderson, David J. *Agile Management for Software Engineering*. Pearson, 2003.**
*   **Poppendieck, Mary. *Implementing Lean Software Development: From Concept to Cash*. Addison-Wesley Signature Series, 2006.**
*   **Royce, Walker. *Software Project Management: A unified framework*. Pearson Education, 1998.**

This concludes the study notes on Agile Development Techniques for Module 1. Remember to revisit the core values and principles as you explore different agile frameworks.