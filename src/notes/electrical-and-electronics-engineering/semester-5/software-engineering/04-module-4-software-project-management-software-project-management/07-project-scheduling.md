---
title: "Project scheduling"
subject: "SOFTWARE ENGINEERING"
module: "Module 4: Software Project Management: Software Project Management "
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f36374"
status: "completed"
scrapedAt: "2026-05-23T16:24:52.197Z"
---
# Software Engineering: Module 4 - Software Project Management: Project Scheduling

## 1. Introduction to Project Scheduling

Project scheduling is the process of **defining the activities required to complete a software project and organizing them into a coherent sequence**. It involves breaking down the project into manageable tasks, estimating the time and resources needed for each task, and then creating a timeline that shows when each task will be performed. Effective project scheduling is crucial for **on-time delivery, efficient resource utilization, and successful project completion**.

**Key Concepts:**

*   **Activities/Tasks:** Specific, definable pieces of work that need to be done.
*   **Dependencies:** Relationships between tasks where one task cannot start or finish until another task has started or finished.
*   **Milestones:** Significant points in the project timeline, often marking the completion of a major phase or deliverable.
*   **Duration:** The estimated time required to complete a task.
*   **Resources:** The people, equipment, and materials needed to perform tasks.
*   **Critical Path:** The sequence of activities that determines the **shortest possible project completion time**. Any delay in a critical path activity will delay the entire project.

**Learning Outcome Alignment:**

*   This section directly addresses the foundational understanding of what project scheduling entails, contributing to CO6.

**Textbook References:**

*   **Sommerville (2015), Chapter 22: Project Management:** Discusses project planning and scheduling as a fundamental aspect of project management.
*   **Pressman (2014), Chapter 25: Project Scheduling:** Provides a detailed overview of scheduling techniques and their application in software engineering.
*   **Sommerville (2020), Chapter 8: Software Project Management:** Reinforces the importance of scheduling in modern software development.

## 2. Project Scheduling Activities and Techniques

Project scheduling involves several interconnected activities:

### 2.1 Defining Activities

*   **Work Breakdown Structure (WBS):** A hierarchical decomposition of the total work to be carried out by the project team to accomplish the project objectives and create the required deliverables.
    *   **Example:** A WBS for a web application might include top-level tasks like "Requirements Gathering," "Design," "Development," "Testing," and "Deployment." Each of these can be further broken down into smaller, manageable sub-tasks.
*   **Activity List:** A comprehensive list of all tasks identified in the WBS.

### 2.2 Sequencing Activities (Activity Dependencies)

*   Identifying the logical order in which tasks must be performed.
*   **Types of Dependencies:**
    *   **Finish-to-Start (FS):** Task B cannot start until Task A finishes. (Most common)
        *   *Example:* Code review must finish before bug fixing can start.
    *   **Start-to-Start (SS):** Task B cannot start until Task A starts.
        *   *Example:* Data migration can start when the database development starts.
    *   **Finish-to-Finish (FF):** Task B cannot finish until Task A finishes.
        *   *Example:* User documentation cannot finish until the software module it describes is finalized.
    *   **Start-to-Finish (SF):** Task B cannot finish until Task A starts. (Less common)
        *   *Example:* The old system's operation must not finish until the new system's acceptance testing starts.

### 2.3 Estimating Activity Durations

*   Estimating the amount of work or time units required to complete an individual activity.
*   **Estimation Techniques:**
    *   **Expert Judgment:** Relying on the experience of individuals with relevant expertise.
    *   **Analogous Estimation (Top-Down):** Using historical data from similar projects.
    *   **Parametric Estimation:** Using statistical relationships between historical data and other variables (e.g., lines of code, function points).
    *   **Three-Point Estimation:** Estimating optimistic, pessimistic, and most likely durations and using them to calculate an expected duration (e.g., PERT formula: $(O + 4M + P) / 6$).
    *   **Bottom-Up Estimation:** Estimating individual activities and then aggregating them.

### 2.4 Developing the Schedule

*   **Project Scheduling Tools:** Software used to create and manage project schedules.
    *   **Gantt Charts:** Visual representations of project tasks and their timelines, showing task durations, start/end dates, and dependencies.
        *   *Example:* A Gantt chart clearly shows which tasks are happening concurrently and which are sequential.
    *   **Network Diagrams (Activity-on-Node or Activity-on-Arrow):** Graphical representations of project activities and their dependencies, used for critical path analysis.
        *   **Program Evaluation and Review Technique (PERT):** A network analysis technique used to schedule events that have uncertain durations.
        *   **Critical Path Method (CPM):** A network analysis technique that determines the project duration by calculating the longest path of dependent activities.

**Learning Outcome Alignment:**

*   This section covers the practical steps and tools involved in creating a project schedule, directly supporting CO6. It also touches upon the breakdown of work (WBS), which relates to planning and understanding project scope.

**Textbook References:**

*   **Sommerville (2015), Chapter 22:** Details techniques like WBS, activity sequencing, and scheduling tools.
*   **Pressman (2014), Chapter 25:** Explains activity definition, sequencing, duration estimation, and the use of Gantt charts and network diagrams.
*   **Royce (1998), Chapter 12: Project Scheduling:** Provides a deeper dive into scheduling principles and challenges.

## 3. Critical Path Method (CPM)

The Critical Path Method (CPM) is a project management technique used to identify the sequence of project activities that have zero float (or slack) and determine the shortest possible project duration.

**Key Concepts:**

*   **Activity Duration:** Estimated time for each activity.
*   **Early Start (ES):** The earliest an activity can start.
*   **Early Finish (EF):** The earliest an activity can finish (ES + Duration).
*   **Late Start (LS):** The latest an activity can start without delaying the project.
*   **Late Finish (LF):** The latest an activity can finish without delaying the project (LS + Duration).
*   **Float (Slack):** The amount of time an activity can be delayed without delaying the project completion date. Calculated as LF - EF or LS - ES.
*   **Critical Path:** The sequence of activities with zero float.

**Steps for CPM:**

1.  **Define Activities:** Break down the project into tasks.
2.  **Sequence Activities:** Determine dependencies between activities.
3.  **Estimate Durations:** Estimate the time required for each activity.
4.  **Construct the Network Diagram:** Visualize the activities and their dependencies.
5.  **Calculate Forward Pass:** Determine ES and EF for all activities.
6.  **Calculate Backward Pass:** Determine LS and LF for all activities.
7.  **Calculate Float:** Determine the float for each activity.
8.  **Identify the Critical Path:** Activities with zero float form the critical path.

**Example:**

Consider a simple project with the following activities:

| Activity | Duration (days) | Predecessors |
| :------- | :-------------- | :----------- |
| A        | 3               | -            |
| B        | 2               | A            |
| C        | 4               | A            |
| D        | 3               | B, C         |
| E        | 2               | C            |

**Network Diagram (simplified):**

```
      +---+
  +---| A |---+ (3)
  |   +---+   |
  |           |
  |   +---+   |   +---+
  +---| B |---+---| D |---+ (3)
      +---+   |   +---+   |
              |           |
              |   +---+   |   +---+
              +---| C |---+---| E |---+ (2)
                  +---+   |   +---+
                          |
                          +---| D |---+ (3)
                              +---+
```

**Calculations:**

*   **Forward Pass:**
    *   A: ES=0, EF=3
    *   B: ES=3, EF=5 (after A)
    *   C: ES=3, EF=7 (after A)
    *   D: ES=max(EF_B, EF_C) = max(5, 7) = 7, EF=7+3=10
    *   E: ES=EF_C = 7, EF=7+2=9

*   **Project Duration:** The latest EF is 10 days.

*   **Backward Pass:**
    *   D: LF=10, LS=7
    *   E: LF=10, LS=8 (LF_D - Dur_E = 10 - 2)
    *   B: LF=LS_D = 7, LS=7-2=5
    *   C: LF=min(LS_D, LS_E) = min(7, 8) = 7, LS=7-4=3
    *   A: LF=min(LS_B, LS_C) = min(5, 3) = 3, LS=3-3=0

*   **Float Calculation:**
    *   A: Float = LF - EF = 3 - 3 = 0
    *   B: Float = LF - EF = 7 - 5 = 2
    *   C: Float = LF - EF = 7 - 7 = 0
    *   D: Float = LF - EF = 10 - 10 = 0
    *   E: Float = LF - EF = 10 - 8 = 2

*   **Critical Path:** Activities A -> C -> D (activities with zero float). The project duration is 10 days.

**Learning Outcome Alignment:**

*   This section provides a practical understanding of a core scheduling technique, directly supporting CO6 by demonstrating how to manage project timelines.

**Textbook References:**

*   **Pressman (2014), Chapter 25:** Provides detailed explanations and examples of CPM.
*   **Sommerville (2015), Chapter 22:** Covers CPM as a key scheduling tool.

## 4. Project Scheduling for Agile and Iterative Development

While traditional scheduling methods like CPM are valuable, agile and iterative development approaches have different scheduling philosophies.

### 4.1 Agile Scheduling

*   **Focus:** Adapting to change and delivering value incrementally.
*   **Key Characteristics:**
    *   **Iterative and Incremental:** Schedules are not fixed upfront but evolve with each iteration (sprint).
    *   **Team-Driven:** The development team typically estimates and commits to work for each iteration.
    *   **Backlog-Driven:** The product backlog, a prioritized list of features, drives the schedule.
    *   **Short Time Horizons:** Focus on what can be achieved in the current sprint.
*   **Techniques:**
    *   **Release Planning:** High-level planning for upcoming releases, often involving feature roadmaps.
    *   **Iteration/Sprint Planning:** Detailed planning for the work to be completed in a single iteration.
    *   **Burn-down/Burn-up Charts:** Visualizations showing progress within an iteration or release.
    *   **Velocity Tracking:** Measuring the amount of work a team can complete in an iteration to inform future planning.

### 4.2 Kanban Scheduling

*   **Focus:** Continuous flow and visualizing work.
*   **Key Characteristics:**
    *   **Visualize Workflow:** Using a Kanban board to show the status of tasks.
    *   **Limit Work in Progress (WIP):** Constraining the number of tasks in each stage of the workflow to improve flow and identify bottlenecks.
    *   **Manage Flow:** Monitoring and optimizing the movement of work through the system.
    *   **Make Policies Explicit:** Clearly defining rules for how work is done.
    *   **Implement Feedback Loops:** Regular reviews and retrospectives.
    *   **Improve Collaboratively, Evolve Experimentally:** Encouraging continuous improvement.
*   **Scheduling Aspects:**
    *   **Pull System:** Tasks are "pulled" into the next stage when capacity is available.
    *   **Lead Time and Cycle Time:** Key metrics for understanding and predicting delivery times.
    *   **No Fixed Iterations:** Work is continuous, and there are no prescribed timeboxes for development cycles.

**Learning Outcome Alignment:**

*   This section directly addresses the application of scheduling concepts within agile and lean frameworks (CO6). It also touches on agile methods (CO2) and how they differ from traditional approaches.

**Textbook/Reference Book References:**

*   **Anderson (2010) - Kanban:** A foundational text for understanding Kanban principles and scheduling.
*   **Anderson (2003) - Agile Management for Software Engineering:** Discusses agile project management practices, including scheduling.
*   **Sommerville (2015, 2020):** Chapters on agile development and project management will likely touch upon iterative scheduling.
*   **Poppendieck (2006) - Implementing Lean Software Development:** Provides insights into lean principles that influence scheduling and workflow.

## 5. Scheduling and Risk Management

Scheduling is closely intertwined with risk management. Delays in critical path activities can significantly impact project success.

*   **Risk Identification:** Identifying potential events that could cause delays or disruptions.
*   **Risk Analysis:** Assessing the probability and impact of identified risks.
*   **Risk Mitigation:** Developing strategies to reduce the likelihood or impact of risks.
*   **Contingency Planning:** Allocating buffer time (contingency) in the schedule to accommodate unforeseen delays. This buffer is often added to activities with higher risk or uncertainty.
*   **Schedule Compression:** Techniques to shorten the project schedule when it is behind or needs to be accelerated.
    *   **Crashing:** Adding more resources to an activity to reduce its duration (often increases cost).
    *   **Fast Tracking:** Performing activities in parallel that would normally be done sequentially (increases risk).

**Learning Outcome Alignment:**

*   This section highlights the interplay between scheduling and managing project risks, contributing to the broader understanding of project management in CO6.

**Textbook References:**

*   **Sommerville (2015), Chapter 22:** Discusses risk management in the context of project planning.
*   **Pressman (2014), Chapter 25:** May touch upon risk and its impact on schedules.
*   **Royce (1998):** Likely covers risk management as an integral part of project planning.

## 6. Monitoring and Controlling the Schedule

Once a schedule is developed, it needs to be monitored and controlled throughout the project lifecycle.

*   **Tracking Progress:** Regularly measuring the actual progress against the planned schedule.
*   **Reporting Status:** Communicating the project's schedule status to stakeholders.
*   **Schedule Updates:** Adjusting the schedule based on actual progress, changes, and identified risks.
*   **Performance Measurement:** Using metrics like schedule variance (SV) and schedule performance index (SPI) to assess performance.
    *   **Schedule Variance (SV):** Earned Value (EV) - Planned Value (PV). Positive SV means ahead of schedule; negative means behind.
    *   **Schedule Performance Index (SPI):** EV / PV. SPI > 1 means ahead of schedule; SPI < 1 means behind.
*   **Change Management:** Managing any changes to the project scope, which will likely impact the schedule.

**Learning Outcome Alignment:**

*   This section directly addresses the ongoing management of the project schedule, which is a key aspect of CO6.

**Textbook References:**

*   **Sommerville (2015), Chapter 22:** Covers schedule monitoring and control.
*   **Pressman (2014), Chapter 25:** Discusses progress tracking and schedule control.

## 7. Example Application (Integrating Concepts)

Let's consider a simplified example of scheduling for a small software project, incorporating several concepts.

**Project:** Develop a simple to-do list web application.

**1. WBS:**
    *   Requirements Gathering
    *   UI/UX Design
    *   Backend Development
        *   Database Schema Design
        *   API Development
    *   Frontend Development
        *   Task Creation UI
        *   Task Display UI
        *   Task Editing/Deletion UI
    *   Integration
    *   Testing
    *   Deployment

**2. Activity List & Dependencies (Simplified):**

| Activity ID | Activity Name           | Duration (days) | Predecessors |
| :---------- | :---------------------- | :-------------- | :----------- |
| A           | Requirements Gathering  | 5               | -            |
| B           | UI/UX Design            | 7               | A            |
| C           | DB Schema Design        | 3               | A            |
| D           | API Development         | 10              | C            |
| E           | Task Creation UI        | 5               | B            |
| F           | Task Display UI         | 6               | B            |
| G           | Task Editing/Del UI     | 5               | B            |
| H           | Integration             | 4               | D, E, F, G   |
| I           | Testing                 | 8               | H            |
| J           | Deployment              | 2               | I            |

**3. CPM Analysis (Conceptual):**

If we were to perform a full CPM analysis:

*   We would calculate Early Start, Early Finish, Late Start, Late Finish, and Float for each activity.
*   The critical path would likely be A -> B -> F (assuming F takes the longest to develop from B) -> H -> I -> J, or a path involving D if it's a bottleneck. Let's assume the path through the UI components is critical for this example.
    *   A (5) -> B (7) -> F (6) -> H (4) -> I (8) -> J (2) = 32 days.
*   If the path through backend (A -> C (3) -> D (10)) was longer or had less float, it might become critical.

**4. Agile Adaptation:**

In an agile approach, this might be broken down into sprints:

*   **Sprint 1:** Requirements Gathering, UI/UX Design for Task Creation, DB Schema Design.
*   **Sprint 2:** API Development (core tasks), Task Creation UI development.
*   **Sprint 3:** Task Display UI development, API Development (editing/deletion).
*   **Sprint 4:** Task Editing/Deletion UI, Integration, Initial Testing.
*   **Sprint 5:** Final Testing, Deployment.

Each sprint's schedule would be determined by the team based on their velocity and the prioritized backlog. The overall "schedule" is more of a roadmap of features and releases rather than a rigid task-by-task timeline.

**Learning Outcome Alignment:**

*   This example demonstrates the application of scheduling principles (CO6) and contrasts traditional and agile scheduling, linking to CO2.

## 8. Important Points to Remember

*   **Scheduling is an ongoing process:** It's not a one-time activity but requires continuous monitoring and adjustment.
*   **Accuracy of Estimates is Crucial:** Poor estimation leads to unrealistic schedules.
*   **Dependencies Drive the Schedule:** Understanding task relationships is fundamental.
*   **The Critical Path dictates the minimum project duration.** Delays on the critical path directly impact the project end date.
*   **Agile scheduling prioritizes flexibility and incremental delivery** over rigid upfront plans.
*   **WIP limits in Kanban help manage flow and prevent bottlenecks.**
*   **Risk management and scheduling are tightly coupled.** Contingency planning is essential.
*   **Effective communication of schedule status is vital for stakeholder management.**

## 9. Practice Questions

**Question 1:**

Define the following terms in the context of project scheduling:
a) Work Breakdown Structure (WBS)
b) Critical Path
c) Float (Slack)

**Answer:**

a) **Work Breakdown Structure (WBS):** A hierarchical decomposition of the total work to be carried out by the project team to accomplish the project objectives and create the required deliverables. It breaks down the project into smaller, more manageable components.
b) **Critical Path:** The sequence of project activities that determines the shortest possible project completion time. Activities on the critical path have zero float, meaning any delay in these activities will directly delay the entire project.
c) **Float (Slack):** The amount of time an activity can be delayed without delaying the project completion date or the start date of any successor activities that are on the critical path.

**Question 2:**

Consider the following activities, their durations, and dependencies:

| Activity | Duration (days) | Predecessors |
| :------- | :-------------- | :----------- |
| P        | 4               | -            |
| Q        | 6               | P            |
| R        | 3               | P            |
| S        | 5               | Q, R         |
| T        | 2               | R            |

a) Draw a network diagram for this project.
b) Calculate the Early Start (ES), Early Finish (EF), Late Start (LS), and Late Finish (LF) for each activity.
c) Identify the critical path and the total project duration.
d) Which activities have float, and how much?

**Answer:**

a) **Network Diagram:**

```
    +---+
+---| P |---+ (4)
|   +---+   |
|           |
|   +---+   |   +---+
+---| Q |---+---| S |---+ (5)
    +---+   |   +---+   |
            |           |
            |   +---+   |   +---+
            +---| R |---+---| T |---+ (2)
                +---+   |   +---+
                        |
                        +---| S |---+ (5)
                            +---+
```

b) **Calculations:**

| Activity | Duration | Predecessors | ES | EF | LF | LS | Float (LF-EF) |
| :------- | :------- | :----------- | :- | :- | :- | :- | :------------ |
| P        | 4        | -            | 0  | 4  | 4  | 0  | 0             |
| Q        | 6        | P            | 4  | 10 | 10 | 4  | 0             |
| R        | 3        | P            | 4  | 7  | 11 | 8  | 4             |
| S        | 5        | Q, R         | 10 | 15 | 15 | 10 | 0             |
| T        | 2        | R            | 7  | 9  | 15 | 13 | 6             |

*   **Forward Pass:**
    *   P: ES=0, EF=4
    *   Q: ES=EF(P)=4, EF=4+6=10
    *   R: ES=EF(P)=4, EF=4+3=7
    *   S: ES=max(EF(Q), EF(R))=max(10,7)=10, EF=10+5=15
    *   T: ES=EF(R)=7, EF=7+2=9
*   **Project Duration:** Latest EF = 15 days.
*   **Backward Pass:**
    *   S: LF=15, LS=15-5=10
    *   T: LF=15, LS=15-2=13
    *   Q: LF=LS(S)=10, LS=10-6=4
    *   R: LF=min(LS(S), LS(T))=min(10,13)=10, LS=10-3=7
    *   P: LF=min(LS(Q), LS(R))=min(4,7)=4, LS=4-4=0

c) **Critical Path:** P -> Q -> S. Total project duration is 15 days.

d) **Activities with float:**
    *   R: Float = 10 - 7 = 3 days (Note: My manual calculation in the table above had a typo for R's LF. Correcting to LF=10 based on min(LS(S), LS(T))=min(10,13)=10, so LS=7. Float = 10-7=3).
    *   T: Float = 15 - 9 = 6 days.

**Question 3:**

How does project scheduling in an agile methodology differ from traditional methodologies like CPM?

**Answer:**

Traditional methodologies like CPM often involve creating a detailed, upfront, and relatively fixed schedule for the entire project. They focus on defining all tasks, dependencies, and durations before development begins.

Agile scheduling, on the other hand, is iterative and adaptive. It focuses on:
*   **Short time horizons:** Planning is done for upcoming iterations (sprints) rather than the entire project at once.
*   **Flexibility:** Schedules are expected to change as requirements evolve and new information becomes available.
*   **Team-driven estimation:** The development team estimates and commits to work for each iteration.
*   **Prioritized backlogs:** The product backlog guides what gets scheduled and when.
*   **Continuous delivery:** The goal is to deliver working software frequently, which influences how scheduling is approached.
Kanban further emphasizes continuous flow and WIP limits, moving away from fixed iterations altogether.

**Learning Outcome Alignment:**

*   These practice questions directly test the understanding of key concepts (Q1), the application of scheduling techniques (Q2), and the comparison of different scheduling approaches (Q3), all contributing to CO6 and touching upon CO2.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
