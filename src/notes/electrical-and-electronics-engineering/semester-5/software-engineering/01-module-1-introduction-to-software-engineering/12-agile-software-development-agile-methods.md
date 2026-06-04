---
title: "Agile software development - Agile methods"
subject: "SOFTWARE ENGINEERING"
module: "Module 1: Introduction to Software Engineering "
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f36332"
status: "completed"
scrapedAt: "2026-05-23T16:24:06.889Z"
---
# SOFTWARE ENGINEERING - Module 1: Introduction to Software Engineering

## Topic: Agile Software Development - Agile Methods

---

### 1. Introduction to Agile Software Development

**1.1 What is Agile Software Development?**

Agile software development is an iterative and incremental approach to software engineering that emphasizes collaboration, customer feedback, and rapid delivery of working software. It stands in contrast to traditional, sequential methodologies like Waterfall, which can be rigid and slow to adapt to changing requirements.

**Key Concepts:**

*   **Iterative:** Development is broken down into small, repeatable cycles (iterations or sprints).
*   **Incremental:** Each iteration delivers a potentially shippable increment of working software.
*   **Adaptive:** Agile embraces change and responds quickly to evolving requirements.
*   **Collaborative:** Strong emphasis on teamwork, communication, and customer involvement.
*   **Customer-centric:** Focus on delivering value to the customer throughout the development process.

**1.2 The Agile Manifesto**

The Agile Manifesto, created in 2001 by a group of software developers, outlines the core values and principles of agile development. It emphasizes a shift in mindset from traditional approaches.

**The Four Core Values:**

*   **Individuals and interactions** over processes and tools
    *   *Emphasis:* Valuing people and how they work together is more important than strictly adhering to predefined processes or relying solely on tools.
    *   *Example:* Face-to-face conversations between developers and stakeholders are preferred over lengthy documentation or email chains.
*   **Working software** over comprehensive documentation
    *   *Emphasis:* Delivering functional software that meets customer needs is the primary measure of progress, rather than creating extensive but potentially outdated documentation.
    *   *Example:* A feature that works and is demonstrable is more valuable than a detailed specification document for a feature that may never be implemented.
*   **Customer collaboration** over contract negotiation
    *   *Emphasis:* Continuous engagement and collaboration with the customer are crucial for understanding and adapting to their evolving needs, rather than relying on rigid, upfront contracts.
    *   *Example:* Regular demos and feedback sessions with the product owner to ensure the software being built aligns with their vision.
*   **Responding to change** over following a plan
    *   *Emphasis:* Agile methodologies are designed to be flexible and accommodate changes in requirements, market conditions, or technology, rather than rigidly sticking to an initial plan.
    *   *Example:* If a customer realizes a new feature is needed after the first iteration, the team can adapt and incorporate it in the next iteration.

**The Twelve Principles (Summarized):**

1.  **Highest priority is to satisfy the customer** through early and continuous delivery of valuable software.
2.  **Welcome changing requirements**, even late in development. Agile processes harness change for the customer's competitive advantage.
3.  **Deliver working software frequently**, from a couple of weeks to a couple of months, with a preference for the shorter timescale.
4.  **Business people and developers must work together daily** throughout the project.
5.  **Build projects around motivated individuals.** Give them the environment and support they need, and trust them to get the job done.
6.  **The most efficient and effective method of conveying information** to and within a development team is face-to-face conversation.
7.  **Working software is the primary measure of progress.**
8.  **Agile processes promote sustainable development.** The sponsors, developers, and users should be able to maintain a constant pace indefinitely.
9.  **Continuous attention to technical excellence and good design** enhances agility.
10. **Simplicity**—the art of maximizing the amount of work not done—is essential.
11. **The best architectures, requirements, and designs emerge from self-organizing teams.**
12. **At regular intervals, the team reflects on how to become more effective, then adjusts and refines its behavior accordingly.**

**Important Point to Remember:** The Agile Manifesto doesn't reject the items on the right side of the valuations; it simply values the items on the left more.

---

### 2. Agile Methods and Frameworks

Agile software development is an umbrella term for various methodologies that adhere to the Agile Manifesto. Some of the most prominent include Scrum, Kanban, eXtreme Programming (XP), and Lean.

**2.1 Scrum**

Scrum is a lightweight, iterative and incremental framework for managing product development. It is designed to help teams work together and deliver value to customers incrementally.

**Key Concepts:**

*   **Product Backlog:** A prioritized list of features, requirements, enhancements, and fixes that constitute the work to be done on the product.
*   **Sprint:** A fixed-length iteration (typically 1-4 weeks) during which a potentially shippable product increment is created.
*   **Sprint Planning:** A meeting at the beginning of a sprint to plan the work to be done.
*   **Daily Scrum (Stand-up):** A short, daily meeting (typically 15 minutes) where the team synchronizes activities and creates a plan for the next 24 hours.
*   **Sprint Review:** A meeting at the end of a sprint to inspect the increment and adapt the product backlog if needed.
*   **Sprint Retrospective:** A meeting at the end of a sprint to inspect the sprint and identify improvements for the next sprint.
*   **Product Owner:** The person responsible for maximizing the value of the product resulting from the work of the Development Team. They manage the Product Backlog.
*   **Scrum Master:** A servant-leader who helps the Scrum Team perform at its highest level. They facilitate Scrum events and remove impediments.
*   **Development Team:** A self-organizing, cross-functional team that delivers a potentially releasable increment of "Done" product at the end of each Sprint.
*   **Definition of Done (DoD):** A shared understanding of what it means for work to be complete, ensuring quality and consistency.

**Example:** A team building a mobile banking app might have a sprint focused on implementing the "fund transfer" feature. During the sprint, they'll have daily stand-ups, a review to demonstrate the working transfer feature, and a retrospective to discuss what went well and what could be improved.

**Reference:**
*   *Software Engineering by Ian Sommerville (Tenth edition)* discusses Scrum as a popular agile framework (Chapter 3.3.2).
*   *Software Engineering: A Practitioner's Approach by Roger S. Pressman (Eighth edition)* also covers Scrum in its discussion of agile methodologies (Chapter 4.4).

**2.2 Kanban**

Kanban is a method for managing knowledge work with an emphasis on visualizing workflow, limiting work in progress (WIP), and maximizing flow.

**Key Concepts:**

*   **Kanban Board:** A visual representation of the workflow, typically divided into columns representing different stages of development (e.g., To Do, In Progress, Testing, Done).
*   **Work in Progress (WIP) Limits:** Setting a maximum number of tasks that can be in a particular stage of the workflow at any given time. This helps prevent bottlenecks and improves flow.
*   **Visualize Workflow:** Making all work visible to the team.
*   **Limit WIP:** Reducing the amount of concurrent work to improve focus and throughput.
*   **Manage Flow:** Monitoring and improving the movement of work through the system.
*   **Make Policies Explicit:** Defining clear rules for how work is done.
*   **Implement Feedback Loops:** Establishing regular reviews and discussions.
*   **Improve Collaboratively, Evolve Experimentally:** Encouraging continuous improvement through shared learning.

**Example:** A support team using Kanban might have columns for "New Tickets," "Assigned," "In Progress," "Awaiting Customer Reply," and "Resolved." By limiting the number of tickets in "In Progress" and "Assigned," they ensure that no single agent is overloaded and that tickets move efficiently through the system.

**Reference:**
*   *Kanban by David J. Anderson* is the foundational text for this method.
*   *Engineering Software Products by Ian Sommerville (First Edition)* may touch upon Kanban as a lean-based approach for managing workflow.

**2.3 eXtreme Programming (XP)**

XP is an agile software development framework that aims to produce high-quality software and improve the development team's quality of life. It emphasizes technical practices.

**Key Concepts:**

*   **Pair Programming:** Two programmers work together at one workstation. One "drives" (writes code) while the other "navigates" (reviews code, thinks about the next step).
*   **Test-Driven Development (TDD):** Writing automated tests before writing the actual code. The code is then written to pass the tests.
*   **Continuous Integration (CI):** Developers integrate their work frequently, usually multiple times a day. Each integration is then verified by an automated build and automated tests.
*   **Simple Design:** Designing the simplest solution that works.
*   **Refactoring:** Improving the internal structure of code without changing its external behavior.
*   **Small Releases:** Delivering working software in small, frequent increments.
*   **Customer Involvement:** Having a customer representative actively involved in the development process.
*   **On-site Customer:** Ideally, a customer representative is available to the team full-time.

**Example:** An XP team would have developers pair up to write code, write unit tests before implementing features, and integrate their code frequently into a shared repository. The customer would provide feedback on small, working releases.

**Reference:**
*   *Software Engineering by Ian Sommerville (Tenth edition)* covers XP practices like pair programming and TDD (Chapter 3.3.3).
*   *Software Engineering: A Practitioner's Approach by Roger S. Pressman (Eighth edition)* also details XP principles and practices (Chapter 4.5).

**2.4 Lean Software Development**

Lean software development applies principles from lean manufacturing to software development, focusing on eliminating waste and maximizing customer value.

**Key Concepts:**

*   **Eliminate Waste:** Identifying and removing activities that do not add value from the customer's perspective. Types of waste include:
    *   Partially done work
    *   Extra features
    *   Task switching
    *   Waiting
    *   Motion
    *   Defects
    *   Overprocessing
*   **Amplify Learning:** Encouraging experimentation, feedback, and iteration.
*   **Decide as Late as Possible:** Deferring decisions until they are necessary to avoid premature commitment and allow for more information.
*   **Deliver as Fast as Possible:** Reducing cycle times to get value to customers quickly.
*   **Empower the Team:** Giving autonomy and responsibility to the people doing the work.
*   **Build Integrity In:** Ensuring quality is built into the product from the start.
*   **See the Whole:** Optimizing the entire value stream, not just individual parts.

**Example:** A lean team might focus on reducing the time spent waiting for code reviews (a form of waste) by implementing pair programming and automated tests. They would also prioritize features that provide the most value to customers and avoid building features that are not requested.

**Reference:**
*   *Implementing Lean Software Development: From Concept to Cash by Mary Poppendieck* is a key text on this topic.
*   *Software Engineering by Ian Sommerville* may discuss lean principles in the context of optimizing software development processes.

---

### 3. Agile Project Management Practices

Agile project management adapts traditional project management concepts to the agile philosophy. It focuses on collaboration, flexibility, and delivering value.

**Key Concepts:**

*   **Empirical Process Control:** Based on experience, observation, and experimentation, rather than rigid planning.
*   **Self-Organizing Teams:** Teams are empowered to decide how best to accomplish their work.
*   **Cross-Functional Teams:** Teams possess all the skills necessary to produce working software without relying on external groups.
*   **Continuous Improvement:** Regularly reflecting on processes and making adjustments.
*   **Customer Collaboration:** Active involvement of stakeholders throughout the development lifecycle.
*   **Adaptive Planning:** Plans are updated frequently based on feedback and new information.
*   **Iterative Development:** Work is broken down into small, manageable iterations.
*   **Face-to-face Communication:** Emphasizing direct, real-time communication.

**Example:** Instead of a detailed upfront project plan with fixed deadlines for every task, an agile project manager might facilitate sprint planning, track progress using burn-down charts, and facilitate regular team retrospectives to identify and address any project impediments.

**Reference:**
*   *Software Project Management: A unified framework by Walker Royce* can provide a comparative perspective on traditional vs. agile project management approaches.
*   *Agile Management for Software Engineering by David J. Anderson* is a direct reference for agile project management practices.

---

### 4. Handling Changes with Agile Techniques

Agile methods are inherently designed to manage change effectively. This is a core differentiator from traditional methodologies.

**4.1 Prototyping**

Prototyping involves creating a preliminary version of the software to demonstrate functionality and gather user feedback.

*   **Types:**
    *   **Throwaway prototypes:** Built to understand requirements and then discarded.
    *   **Evolutionary prototypes:** Evolve into the final system.
*   **Benefits:**
    *   Helps in understanding user needs.
    *   Allows for early feedback on UI/UX.
    *   Reduces the risk of building the wrong product.
    *   Can be used to explore technical feasibility.
*   **Agile Context:** Prototypes can be delivered as early increments of working software, facilitating customer collaboration and feedback.

**4.2 Incremental Delivery**

Incremental delivery involves delivering the software in small, functional pieces (increments) over time.

*   **Process:** Each increment builds upon the previous one, adding new features or functionality.
*   **Benefits:**
    *   Faster delivery of value to users.
    *   Allows for early feedback and course correction.
    *   Reduces the risk of large-scale project failure.
    *   Provides opportunities for continuous learning.
*   **Agile Context:** This is a fundamental practice in agile, where each sprint aims to deliver a working increment of the product.

**4.3 Adaptive Planning**

Agile teams do not create a rigid, long-term plan. Instead, they plan iteratively.

*   **Process:**
    *   **Release Planning:** High-level plan for multiple iterations.
    *   **Iteration Planning:** Detailed plan for the current iteration.
*   **Benefits:** Allows the team to adapt to changing priorities, market shifts, or new insights gained during development.
*   **Agile Context:** The Product Backlog is continuously refined, and the plan is adapted based on what is learned in each iteration.

**Example:** A startup developing a new e-commerce platform might initially plan to deliver a basic shopping cart functionality in the first release. After receiving feedback on this increment, they might decide to prioritize a "wishlist" feature in the next release instead of the initially planned "advanced search" if customer feedback indicates higher demand for the wishlist.

**Alignment with Course Outcome CO1:** This section directly addresses interpreting software process models and core activities, including handling changes with techniques like prototyping and incremental delivery.

---

### 5. Key Takeaways and Important Points to Remember

*   **Agile is a mindset, not just a set of practices.** The values and principles are paramount.
*   **Embrace change.** Agile thrives on adapting to evolving requirements.
*   **Customer collaboration is continuous.** It's not a one-time event.
*   **Deliver working software frequently.** This is the primary measure of progress.
*   **Self-organizing teams are crucial.** Empower your team.
*   **Continuous improvement is key.** Regularly reflect and adapt.
*   **Different agile methods exist (Scrum, Kanban, XP, Lean).** Choose and adapt them based on your project's needs.
*   **WIP limits in Kanban are essential for flow.**
*   **TDD and Pair Programming in XP improve code quality.**

---

### 6. Practice Questions and Exercises

**Question 1:**
According to the Agile Manifesto, which of the following is valued *more*?
a) Processes and tools
b) Working software
c) Comprehensive documentation
d) Contract negotiation

**Answer:** b) Working software. The manifesto states "Working software over comprehensive documentation."

**Question 2:**
What is the primary purpose of a Daily Scrum meeting?
a) To plan the entire sprint
b) To review the sprint backlog and identify blockers
c) To synchronize team activities and plan for the next 24 hours
d) To demonstrate completed work to stakeholders

**Answer:** c) To synchronize team activities and plan for the next 24 hours. This is the core purpose of the daily stand-up.

**Question 3:**
In Kanban, what is the purpose of setting Work in Progress (WIP) limits?
a) To increase the speed of individual tasks
b) To prevent bottlenecks, improve flow, and increase focus
c) To ensure all tasks are completed simultaneously
d) To provide detailed documentation for each task

**Answer:** b) To prevent bottlenecks, improve flow, and increase focus. WIP limits are central to Kanban's philosophy of managing flow.

**Question 4:**
Explain the difference between iterative and incremental development in the context of agile software development.

**Answer:**
*   **Iterative development** involves repeating cycles of design, implementation, and testing, refining the product in each cycle. It's about building something in steps, improving it each time.
*   **Incremental development** involves delivering the software in small, functional pieces (increments). Each increment adds new functionality to the existing product.
Agile methods typically combine both: they are **iterative** because each cycle refines the product, and **incremental** because each cycle delivers a working piece of the product.

**Question 5:**
Imagine you are part of an agile team developing a new feature for a popular social media platform. The initial requirement was to implement a "like" button. Midway through the sprint, user research indicates that a "reaction" feature (like, love, sad, angry) would be much more valuable. How would an agile approach handle this change?

**Answer:**
An agile approach would welcome this change. The Product Owner would discuss the new research with the development team. The team would assess the impact on the current sprint's goals. If the change is deemed critical and can be accommodated without jeopardizing the sprint's "Definition of Done" for other tasks, it might be incorporated. More likely, the "reaction" feature would be added to the Product Backlog, prioritized, and planned for a future sprint. This demonstrates the agile principle of "responding to change" and "customer collaboration."

---

### 7. Alignment with Course Outcomes

*   **CO1: Interpret software process models and core activities, including handling changes with techniques like prototyping and incremental delivery.**
    *   This module covers agile as a process model, its iterative and incremental nature, and techniques like prototyping and adaptive planning for change handling.
*   **CO2: Describe agile methods, including the Agile Manifesto and agile project management practices.**
    *   This entire topic is dedicated to describing agile methods (Scrum, Kanban, XP, Lean), the Agile Manifesto's values and principles, and agile project management practices.
*   **CO6: Make use of software project management concepts while planning, estimation, scheduling, tracking and change management of a project, with proper application of SCRUM, Kanban and Lean frameworks.**
    *   Understanding these frameworks is the foundational step for applying their concepts in project management, particularly for planning, tracking, and change management within an agile context.

---
This concludes the study notes for Agile Software Development - Agile Methods. Remember to consult your textbooks for deeper insights and examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
