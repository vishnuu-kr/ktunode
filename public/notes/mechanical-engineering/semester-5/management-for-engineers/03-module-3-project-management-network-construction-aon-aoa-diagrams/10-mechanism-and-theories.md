---
title: "mechanism and theories"
subject: "MANAGEMENT FOR ENGINEERS"
module: "Module 3: Project Management: Network construction, AON, AOA diagrams"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1451d0cf48044633e9"
status: "completed"
scrapedAt: "2026-05-20T18:01:13.068Z"
---
# MANAGEMENT FOR ENGINEERS

## Module 3: Project Management: Network Construction, AON, AOA Diagrams

### Topic: Mechanism and Theories

This module focuses on the foundational techniques of project management, specifically how to represent project workflows and identify critical paths for effective planning and execution. We will explore the underlying mechanisms and theories that drive these graphical representations.

---

### Learning Outcomes

By the end of this topic, you will be able to:

*   Understand the fundamental principles of project network construction.
*   Differentiate between Activity-on-Node (AON) and Activity-on-Arrow (AOA) diagramming techniques.
*   Explain the mechanism and theories behind constructing these network diagrams.
*   Analyze project schedules using network diagrams to identify critical activities and potential delays.
*   Apply project management techniques to manage projects, as per CO4.
*   Critically analyze project management practices in the contemporary context, as per CO1.

---

### Key Concepts and Definitions

**Project Management:** The application of knowledge, skills, tools, and techniques to project activities to meet project requirements. (Koontz, Weihrich, & Cannice, 2020, p. 281)

**Project Network:** A graphical representation of the activities in a project, showing their interrelationships and dependencies. It serves as a roadmap for project execution.

**Activity:** A specific task or unit of work that must be performed as part of a project. Each activity has a duration, resources, and dependencies on other activities.

**Event:** A significant point in the project timeline, usually marking the completion of one or more activities.

**Predecessor Activity:** An activity that must be completed before another activity can begin.

**Successor Activity:** An activity that can only begin after a predecessor activity is completed.

**Dependency:** The relationship between two activities where one cannot start or finish without the other starting or finishing.

**Critical Path:** The longest sequence of activities in a project network that determines the shortest possible project completion time. Any delay in a critical path activity will delay the entire project.

**Critical Activity:** An activity that lies on the critical path.

**Duration:** The estimated time required to complete an activity.

**Float (or Slack):** The amount of time an activity can be delayed without delaying the project completion date.

**Network Construction:** The process of systematically identifying all project activities, their sequences, and durations to create a visual representation of the project workflow.

---

### Underlying Theories and Mechanisms

The construction and analysis of project networks are rooted in fundamental project management principles aimed at optimizing resource allocation, identifying risks, and ensuring timely project completion.

**1. Work Breakdown Structure (WBS) as the Foundation:**
*   **Mechanism:** Before any network can be built, a comprehensive WBS is essential. The WBS breaks down the project into smaller, manageable tasks (activities). This hierarchical decomposition ensures that no significant work is overlooked.
*   **Theory:** This aligns with the **Principle of Decomposition**, a core concept in management that simplifies complex systems into their constituent parts. (Tripathi & Reddy, 2017, p. 150)
*   **Relevance:** The activities identified in the WBS become the nodes or arrows in the network diagram.

**2. Sequencing and Dependencies (Logic):**
*   **Mechanism:** The core of network construction involves determining the logical order of activities. This involves identifying which activities must precede others.
*   **Theory:** This is based on the **Principle of Sequential Interdependence**, where the completion of one task is a prerequisite for the commencement of another. (Koontz, Weihrich, & Cannice, 2020, p. 282)
*   **Relevance:** Correctly mapping these dependencies ensures that the project flows logically and resource allocation is efficient.

**3. Duration Estimation:**
*   **Mechanism:** Each identified activity is assigned an estimated duration. This can be based on historical data, expert judgment, or specific calculations.
*   **Theory:** This relates to **Resource Allocation and Planning**, where understanding the time commitment for each task is crucial for overall project scheduling. (Mahadevan, 2018, p. 55)
*   **Relevance:** Durations are critical for calculating the critical path and identifying potential bottlenecks.

**4. Critical Path Method (CPM) and Program Evaluation and Review Technique (PERT):**
*   **Mechanism:** These are the primary analytical tools used with network diagrams.
    *   **CPM:** Assumes deterministic durations and focuses on identifying the critical path.
    *   **PERT:** Uses probabilistic duration estimates (optimistic, most likely, pessimistic) to account for uncertainty, often providing a more realistic schedule.
*   **Theory:** These methods are grounded in **Operations Research** principles, aiming for optimal resource utilization and time management. They embody the proactive approach to management, identifying potential issues before they occur. (Mahadevan, 2018, p. 68)
*   **Relevance:** CPM and PERT enable project managers to understand project timelines, identify critical activities, manage float, and make informed decisions about resource allocation and risk mitigation.

---

### Network Construction Techniques

Two primary methods are used for constructing project networks:

#### 1. Activity-on-Arrow (AOA) Diagrams

*   **Mechanism:**
    *   **Activities are represented by Arrows.** The arrowheads indicate the direction of the flow of work.
    *   **Events (Nodes) are represented by Circles.** Events signify the start or completion of activities.
    *   An event can only occur after all preceding activities leading to it are completed.
    *   An activity can only start after its preceding event has occurred.
*   **Theories:**
    *   **Event-driven logic:** Emphasizes the completion of milestones (events).
    *   **Sequential flow:** Clearly depicts the linear progression of tasks.
*   **Rules for AOA Diagrams:**
    *   Two distinct activities cannot be represented by the same arrow (i.e., have the same start and end events).
    *   A single event cannot be the start or end point for more than two identical arrows.
    *   Dummies: Special arrows used to maintain logical relationships and prevent ambiguity without representing actual work. They have zero duration and are used to show dependencies.
*   **Example:**
    Consider a simple project with three activities:
    *   Activity A: Start project (Duration 0)
    *   Activity B: Design (Duration 5 days), depends on A
    *   Activity C: Build (Duration 10 days), depends on B
    *   Activity D: Test (Duration 3 days), depends on C
    *   Activity E: Finish project (Duration 0), depends on D

    *AOA Representation:*
    ```
    (Start) ----A----> (Event 1) ----B----> (Event 2) ----C----> (Event 3) ----D----> (End)
                       |                       |                       |
                       -------------------------                         -----------------
    ```
    *(Note: This is a simplified text representation. Actual diagrams use circles for events and arrows for activities. The dependencies would be visually clearer in a graphical format.)*

*   **Pros:**
    *   Clearly shows the sequence of activities.
    *   Events are well-defined milestones.
*   **Cons:**
    *   Can become complex with many interdependencies.
    *   Dummies can be confusing and add clutter.
    *   Difficult to represent parallel activities easily without dummies.

#### 2. Activity-on-Node (AON) Diagrams (also known as Precedence Diagramming Method - PDM)

*   **Mechanism:**
    *   **Activities are represented by Nodes (Boxes).** The name and duration of the activity are usually inside the node.
    *   **Arrows represent the dependencies (relationships) between activities.** Arrows show the direction of the flow of work from one activity to another.
*   **Theories:**
    *   **Activity-centric logic:** Focuses on the tasks themselves and their relationships.
    *   **Versatile dependency types:** Allows for more sophisticated relationships beyond simple finish-to-start.
*   **Types of Dependencies in AON Diagrams:**
    *   **Finish-to-Start (FS):** The most common. Activity B cannot start until Activity A finishes. (e.g., Building the foundation before starting the walls).
    *   **Start-to-Start (SS):** Activity B cannot start until Activity A starts. (e.g., Beginning to write the report after starting the research).
    *   **Finish-to-Finish (FF):** Activity B cannot finish until Activity A finishes. (e.g., The final review cannot finish until the documentation is complete).
    *   **Start-to-Finish (SF):** Activity B cannot finish until Activity A starts. (Rarely used, e.g., The night shift cannot finish until the day shift starts).
*   **Example (using the same activities as above):**

    *AON Representation:*
    ```
    [ Activity A ] ---> [ Activity B ] ---> [ Activity C ] ---> [ Activity D ]
       (Start)          (Design)           (Build)            (Test)
                        Duration: 5        Duration: 10       Duration: 3

    [ Activity D ] ---> [ Activity E ]
                                          (End)
    ```
    *(Note: In a graphical AON, each activity is a box. Arrows connect the boxes to show FS dependencies.)*

*   **Pros:**
    *   Easier to understand and read, especially for complex projects.
    *   More intuitive for project managers.
    *   Can represent multiple types of dependencies (FS, SS, FF, SF).
    *   Dummies are not required.
*   **Cons:**
    *   Less explicit representation of events as milestones compared to AOA.

---

### Network Analysis (Critical Path Method - CPM)

Once a network diagram is constructed, the next step is to analyze it to determine the project timeline and identify critical activities. This is typically done using the Critical Path Method (CPM).

**Mechanism of CPM:**

1.  **Forward Pass:**
    *   **Objective:** To calculate the earliest possible start and finish times for each activity and the project as a whole.
    *   **Process:**
        *   Start with the first activity (which has an earliest start time of 0).
        *   Earliest Start (ES) of an activity = Latest Earliest Finish (EF) of its predecessor.
        *   Earliest Finish (EF) of an activity = ES + Duration.
        *   If an activity has multiple predecessors, its ES is the *maximum* of the EF of its predecessors.
        *   The EF of the last activity represents the earliest possible project completion time.

2.  **Backward Pass:**
    *   **Objective:** To calculate the latest possible start and finish times for each activity without delaying the project completion.
    *   **Process:**
        *   Start with the last activity. Its Latest Finish (LF) is typically set to its Earliest Finish (EF) calculated during the forward pass (assuming no float for the final activity).
        *   Latest Start (LS) of an activity = LF - Duration.
        *   Latest Finish (LF) of an activity = Minimum Latest Start (LS) of its successors.
        *   If an activity has multiple successors, its LF is the *minimum* of the LS of its successors.

3.  **Calculating Float (Slack):**
    *   **Total Float (TF):** The amount of time an activity can be delayed without delaying the project completion date.
        *   `TF = LF - EF` (or `TF = LS - ES`)
    *   **Free Float (FF):** The amount of time an activity can be delayed without delaying the start of any successor activity.
        *   `FF = Minimum ES of successors - EF of the activity`

4.  **Identifying the Critical Path:**
    *   The critical path consists of all activities with **zero total float (TF = 0)**.
    *   These are the activities that, if delayed, will directly delay the entire project.

#### Example Calculation (AON Diagram - FS Dependencies)

Let's analyze an AON network:

| Activity | Duration | Predecessors |
| :------- | :------- | :----------- |
| A        | 4        | -            |
| B        | 3        | A            |
| C        | 5        | A            |
| D        | 6        | B            |
| E        | 2        | C            |
| F        | 4        | D, E         |

**Forward Pass:**

*   **A:** ES = 0, EF = 0 + 4 = 4
*   **B:** ES = EF(A) = 4, EF = 4 + 3 = 7
*   **C:** ES = EF(A) = 4, EF = 4 + 5 = 9
*   **D:** ES = EF(B) = 7, EF = 7 + 6 = 13
*   **E:** ES = EF(C) = 9, EF = 9 + 2 = 11
*   **F:** ES = max(EF(D), EF(E)) = max(13, 11) = 13, EF = 13 + 4 = 17

**Project Completion Time = 17 days.**

**Backward Pass:**

*   **F:** LF = 17, LS = 17 - 4 = 13
*   **D:** LF = LS(F) = 13, LS = 13 - 6 = 7
*   **E:** LF = LS(F) = 13, LS = 13 - 2 = 11
*   **B:** LF = LS(D) = 7, LS = 7 - 3 = 4
*   **C:** LF = LS(E) = 11, LS = 11 - 5 = 6
*   **A:** LF = min(LS(B), LS(C)) = min(4, 6) = 4, LS = 4 - 4 = 0

**Calculating Float:**

| Activity | ES | EF | LS | LF | TF = LF - EF | Critical? |
| :------- | :- | :- | :- | :- | :----------- | :-------- |
| A        | 0  | 4  | 0  | 4  | 0            | Yes       |
| B        | 4  | 7  | 4  | 7  | 0            | Yes       |
| C        | 4  | 9  | 6  | 11 | 2            | No        |
| D        | 7  | 13 | 7  | 13 | 0            | Yes       |
| E        | 9  | 11 | 11 | 13 | 2            | No        |
| F        | 13 | 17 | 13 | 17 | 0            | Yes       |

**Critical Path:** A -> B -> D -> F

---

### Relevance to Course Outcomes

*   **CO1 (Critically analyse management practices):** Understanding network construction helps analyze the efficiency and effectiveness of project scheduling techniques and how they are applied in real-world engineering projects. Managers can critically assess whether the chosen method (AON vs. AOA) and the resulting schedule are robust.
*   **CO2 (Examine broad functions of management):** Network construction directly relates to the **Planning and Controlling** functions of management. It allows for detailed planning of tasks, resource allocation (implicitly, as durations depend on resources), and control by monitoring progress against the schedule. (Koontz, Weihrich, & Cannice, 2020, p. 235, p. 250)
*   **CO3 (Decision making and productivity analysis):** Identifying the critical path and float empowers managers to make informed decisions about resource prioritization and where to focus efforts to prevent delays. Analyzing float helps in productivity by highlighting activities that can be accelerated or that have some flexibility. (Mahadevan, 2018, p. 60)
*   **CO4 (Apply project management techniques):** This module is directly about applying project management techniques (AON, AOA, CPM) for effective project management.
*   **CO5 (Understand functional areas of management):** Project management is a crucial functional area within overall management, encompassing technical, human, and conceptual skills. (Tripathi & Reddy, 2017, p. 78)
*   **CO6 (Market, marketing, marketing strategies):** While not directly about marketing, efficient project management (enabled by network analysis) contributes to timely delivery of products or services, which is crucial for market competitiveness and customer satisfaction. This indirectly supports marketing strategies by ensuring reliable project outcomes. (Kotler et al., 2018, Chapter 1)

---

### Important Points to Remember

*   **WBS is paramount:** A well-defined Work Breakdown Structure is the prerequisite for accurate network construction.
*   **AON is generally preferred:** For its clarity, flexibility, and ability to represent different dependency types without dummies.
*   **Dependencies dictate the flow:** Incorrectly identified dependencies are a common source of scheduling errors.
*   **Critical path is the backbone:** Any delay on the critical path delays the entire project.
*   **Float is flexibility:** Use float analysis to optimize resource allocation and manage risks.
*   **CPM is a dynamic tool:** Network analysis should be revisited and updated as project progress unfolds.

---

### Practice Questions

**Question 1:**
Which of the following statements is TRUE regarding the Critical Path Method (CPM)?
a) CPM assumes all activity durations are uncertain.
b) The critical path is the shortest path through the network diagram.
c) Activities on the critical path have zero total float.
d) CPM uses dummy activities to show relationships.

**Question 2:**
In an AON diagram, what is the most common type of dependency?
a) Start-to-Start (SS)
b) Finish-to-Start (FS)
c) Finish-to-Finish (FF)
d) Start-to-Finish (SF)

**Question 3:**
Given the following activities and their durations:
*   Activity X: Duration 5 days, no predecessors.
*   Activity Y: Duration 3 days, predecessor X.
*   Activity Z: Duration 4 days, predecessor X.
*   Activity W: Duration 2 days, predecessor Y.
*   Activity V: Duration 6 days, predecessor Z.
*   Activity U: Duration 3 days, predecessors W and V.

Construct an AON diagram and determine the critical path and project completion time.

---

### Answers to Practice Questions

**Answer 1:**
c) Activities on the critical path have zero total float.
*   **Explanation:** CPM typically assumes deterministic durations. The critical path is the *longest* path, not the shortest. While AOA uses dummies, AON does not require them.

**Answer 2:**
b) Finish-to-Start (FS)
*   **Explanation:** Finish-to-Start (FS) is the most intuitive and commonly used dependency, where one task must finish before the next can begin.

**Answer 3:**

**AON Diagram Representation (Conceptual):**

```
[ X (5) ] ---> [ Y (3) ] ---> [ W (2) ] ---> [ U (3) ]
   |            |            |
   +---------> [ Z (4) ] ---> [ V (6) ] ---> |
```

**Network Analysis:**

**Forward Pass:**

*   **X:** ES = 0, EF = 0 + 5 = 5
*   **Y:** ES = EF(X) = 5, EF = 5 + 3 = 8
*   **Z:** ES = EF(X) = 5, EF = 5 + 4 = 9
*   **W:** ES = EF(Y) = 8, EF = 8 + 2 = 10
*   **V:** ES = EF(Z) = 9, EF = 9 + 6 = 15
*   **U:** ES = max(EF(W), EF(V)) = max(10, 15) = 15, EF = 15 + 3 = 18

**Project Completion Time = 18 days.**

**Backward Pass:**

*   **U:** LF = 18, LS = 18 - 3 = 15
*   **W:** LF = LS(U) = 15, LS = 15 - 2 = 13
*   **V:** LF = LS(U) = 15, LS = 15 - 6 = 9
*   **Y:** LF = LS(W) = 13, LS = 13 - 3 = 10
*   **Z:** LF = LS(V) = 9, LS = 9 - 4 = 5
*   **X:** LF = min(LS(Y), LS(Z)) = min(10, 5) = 5, LS = 5 - 5 = 0

**Calculating Float:**

| Activity | ES | EF | LS | LF | TF = LF - EF | Critical? |
| :------- | :- | :- | :- | :- | :----------- | :-------- |
| X        | 0  | 5  | 0  | 5  | 0            | Yes       |
| Y        | 5  | 8  | 10 | 13 | 5            | No        |
| Z        | 5  | 9  | 5  | 9  | 0            | Yes       |
| W        | 8  | 10 | 13 | 15 | 5            | No        |
| V        | 9  | 15 | 9  | 15 | 0            | Yes       |
| U        | 15 | 18 | 15 | 18 | 0            | Yes       |

**Critical Path:** X -> Z -> V -> U

**Project Completion Time:** 18 days.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
