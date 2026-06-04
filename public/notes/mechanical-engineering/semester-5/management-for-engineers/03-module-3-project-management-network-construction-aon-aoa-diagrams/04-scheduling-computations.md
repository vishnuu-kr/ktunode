---
title: "Scheduling computations"
subject: "MANAGEMENT FOR ENGINEERS"
module: "Module 3: Project Management: Network construction, AON, AOA diagrams"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1451d0cf48044633e3"
status: "completed"
scrapedAt: "2026-05-20T18:01:08.880Z"
---
# MANAGEMENT FOR ENGINEERS - MODULE 3: PROJECT MANAGEMENT: NETWORK CONSTRUCTION, AON, AOA DIAGRAMS

## Topic: Scheduling Computations

---

### 1. Introduction to Project Scheduling and Network Diagrams

Project scheduling is a critical component of project management, focusing on planning, sequencing, and timing project activities to achieve project objectives within defined constraints. Network construction diagrams, such as Activity-on-Arrow (AOA) and Activity-on-Node (AON), are fundamental tools for visualizing project dependencies and facilitating scheduling computations.

**Key Concepts:**

*   **Activity:** A specific task or operation within a project.
*   **Event:** A point in time that marks the beginning or end of one or more activities.
*   **Dependency:** The relationship between activities where one activity must be completed before another can begin.
*   **Critical Path:** The longest sequence of activities in a project that determines the shortest possible project duration. Any delay in a critical path activity will delay the entire project.

**Textbook References:**

*   **Koontz, Weihrich, & Cannice (2020), Chapter 16: Controlling:** Discusses controlling the project execution, which heavily relies on effective scheduling.
*   **Mahadevan (2018), Chapter 11: Project Management:** Provides a foundational understanding of project management principles, including scheduling techniques.
*   **Tripathi & Reddy (2017), Chapter 15: Project Management:** Elaborates on project planning and control, highlighting the importance of network analysis.

**Course Outcome Alignment:**

*   **CO4 (K3): Apply project management techniques to manage projects.** Scheduling computations are a core project management technique.
*   **CO1 (K4): Critically analyse a variety of management practices in the contemporary context.** Understanding scheduling computations allows for a critical analysis of project timelines and resource allocation.

---

### 2. Activity-on-Arrow (AOA) Diagrams

AOA diagrams represent activities as arrows and events as nodes (circles or boxes). The sequence of activities and their dependencies are clearly depicted.

**Key Concepts & Definitions:**

*   **Nodes (Events):** Represent the start or end of an activity.
*   **Arrows (Activities):** Represent the actual work or tasks.
*   **Dummy Activity:** A dashed arrow used to represent a dependency between activities without consuming time or resources. It's crucial for maintaining logical relationships in AOA diagrams when direct dependencies don't align perfectly.

**Example:**

Consider a simple construction project with the following activities:

| Activity | Description        | Predecessor | Duration (Days) |
| :------- | :----------------- | :---------- | :-------------- |
| A        | Site Preparation   | -           | 5               |
| B        | Foundation Laying  | A           | 10              |
| C        | Framing            | B           | 15              |
| D        | Roofing            | C           | 7               |
| E        | Electrical Wiring  | B           | 8               |
| F        | Plumbing           | B           | 6               |
| G        | Interior Finishing | C, E, F     | 12              |

**AOA Diagram Construction:**

*   Start Node (Event 1)
*   Activity A (Arrow from Event 1 to Event 2) - Duration 5
*   Activity B (Arrow from Event 2 to Event 3) - Duration 10
*   Activity C (Arrow from Event 3 to Event 4) - Duration 15
*   Activity E (Arrow from Event 3 to Event 5) - Duration 8
*   Activity F (Arrow from Event 3 to Event 6) - Duration 6
*   **Dummy Activity 1:** (Arrow from Event 5 to Event 7) - Represents dependency of G on F without direct connection.
*   **Dummy Activity 2:** (Arrow from Event 6 to Event 7) - Represents dependency of G on F and E.
*   Activity G (Arrow from Event 4 to Event 7, and from Event 7 to Event 8) - Duration 12
*   End Node (Event 8)

**Important Points to Remember (AOA):**

*   Each activity must have a distinct starting and ending event.
*   Only one activity can be represented by any given arrow.
*   An event can be the start or end of multiple activities.
*   Dummy activities are essential to maintain the logical flow and avoid ambiguity, especially when multiple activities share a common predecessor but have different successors.

---

### 3. Activity-on-Node (AON) Diagrams (Precedence Diagrams)

AON diagrams represent activities as nodes (boxes) and dependencies as arrows connecting these nodes. This is a more common and intuitive representation.

**Key Concepts & Definitions:**

*   **Nodes (Activities):** Represent the actual tasks.
*   **Arrows (Dependencies):** Show the relationship between activities (e.g., Finish-to-Start, Start-to-Start, Finish-to-Finish, Start-to-Finish). The most common is Finish-to-Start.
*   **Precedence Relationships:** Define how activities relate to each other:
    *   **Finish-to-Start (FS):** The successor activity can start only after the predecessor activity finishes. (Most common)
    *   **Start-to-Start (SS):** The successor activity can start only after the predecessor activity starts.
    *   **Finish-to-Finish (FF):** The successor activity can finish only after the predecessor activity finishes.
    *   **Start-to-Finish (SF):** The successor activity can finish only after the predecessor activity starts. (Rarely used)

**Example (using the same project activities):**

**AON Diagram Construction (FS Relationship assumed for simplicity):**

*   **Node A:** Site Preparation (Duration 5)
*   **Node B:** Foundation Laying (Duration 10) - Arrow from A to B
*   **Node C:** Framing (Duration 15) - Arrow from B to C
*   **Node E:** Electrical Wiring (Duration 8) - Arrow from B to E
*   **Node F:** Plumbing (Duration 6) - Arrow from B to F
*   **Node G:** Interior Finishing (Duration 12) - Arrows from C to G, E to G, F to G

**Important Points to Remember (AON):**

*   More flexible and easier to draw than AOA diagrams, especially for complex projects.
*   Can represent different types of precedence relationships.
*   No need for dummy activities, simplifying the diagram.

**Textbook References:**

*   **Mahadevan (2018), Chapter 11: Project Management:** Covers network diagrams and their applications, including AON.
*   **Tripathi & Reddy (2017), Chapter 15: Project Management:** Discusses various project modeling techniques, including precedence diagrams.

**Course Outcome Alignment:**

*   **CO4 (K3): Apply project management techniques to manage projects.** AON diagrams are a direct application of project management techniques.
*   **CO3 (K3): Demonstrate ability in decision making and productivity analysis.** Understanding AON helps in making decisions regarding project sequencing and analyzing productivity.

---

### 4. Scheduling Computations: Forward Pass and Backward Pass

These computations are used to determine the earliest and latest start/finish times for each activity, essential for identifying the critical path and managing project timelines.

#### 4.1 Forward Pass (Calculating Earliest Times)

The forward pass starts from the project's beginning and moves towards the end, calculating the earliest possible start and finish times for each activity.

**Key Concepts:**

*   **Earliest Start Time (ES):** The earliest an activity can begin, assuming all its predecessors are completed as early as possible.
*   **Earliest Finish Time (EF):** The earliest an activity can be completed.
    *   **EF = ES + Duration**

**Calculation Rules:**

1.  **For the first activity (with no predecessors):** ES = 0, EF = Duration.
2.  **For subsequent activities:**
    *   **ES = Maximum (EF of all immediate predecessors)**
    *   **EF = ES + Duration**

**Example (Continuing with the AON diagram for the construction project):**

| Activity | Duration | Predecessors | ES | EF |
| :------- | :------- | :----------- | :- | :- |
| A        | 5        | -            | 0  | 5  |
| B        | 10       | A            | 5  | 15 |
| C        | 15       | B            | 15 | 30 |
| E        | 8        | B            | 15 | 23 |
| F        | 6        | B            | 15 | 21 |
| G        | 12       | C, E, F      | max(30, 23, 21) = 30 | 30 + 12 = 42 |

**Project Completion Time (from Forward Pass):** The EF of the last activity in the project (Activity G in this case) is 42 days.

#### 4.2 Backward Pass (Calculating Latest Times)

The backward pass starts from the project's end and moves towards the beginning, calculating the latest possible start and finish times for each activity without delaying the overall project completion.

**Key Concepts:**

*   **Latest Finish Time (LF):** The latest an activity can be completed without delaying the project.
*   **Latest Start Time (LS):** The latest an activity can begin without delaying the project.
    *   **LS = LF - Duration**

**Calculation Rules:**

1.  **For the last activity (with no successors):** LF = Project Completion Time (from Forward Pass).
2.  **For preceding activities:**
    *   **LF = Minimum (LS of all immediate successors)**
    *   **LS = LF - Duration**

**Example (Continuing the calculations):**

Project Completion Time = 42 days

| Activity | Duration | Successors | LF | LS |
| :------- | :------- | :--------- | :- | :- |
| G        | 12       | -          | 42 | 30 |
| C        | 15       | G          | 30 | 15 |
| E        | 8        | G          | 30 | 22 |
| F        | 6        | G          | 30 | 24 |
| B        | 10       | C, E, F    | min(LS of C, LS of E, LS of F) = min(15, 22, 24) = 15 | 15 - 10 = 5 |
| A        | 5        | B          | 5  | 0  |

**Important Points to Remember (Forward & Backward Pass):**

*   The forward pass determines the *earliest* an activity can happen.
*   The backward pass determines the *latest* an activity can happen without affecting the project end date.
*   These calculations are crucial for determining slack.

**Textbook References:**

*   **Koontz, Weihrich, & Cannice (2020), Chapter 16: Controlling:** Discusses the monitoring and control aspects of projects, which depend on these time calculations.
*   **Mahadevan (2018), Chapter 11: Project Management:** Provides detailed explanations and examples of forward and backward pass calculations.

**Course Outcome Alignment:**

*   **CO4 (K3): Apply project management techniques to manage projects.** Forward and backward pass are core techniques for project scheduling.
*   **CO3 (K3): Demonstrate ability in decision making and productivity analysis.** Understanding these calculations allows for informed decisions about resource allocation and identifying potential bottlenecks.

---

### 5. Calculating Slack (Float)

Slack, or float, is the amount of time an activity can be delayed without delaying the project's overall completion. Activities with zero slack are on the critical path.

**Key Concepts:**

*   **Total Slack (TS) / Float:** The amount of time an activity can be delayed without delaying the project's end date.
    *   **TS = LF - EF** or **TS = LS - ES**

**Identifying the Critical Path:**

The critical path consists of all activities with zero total slack.

**Example (Continuing the calculations):**

| Activity | ES | EF | LS | LF | Duration | Total Slack (LF - EF) | Total Slack (LS - ES) | Critical Path? |
| :------- | :- | :- | :- | :- | :------- | :-------------------- | :-------------------- | :------------- |
| A        | 0  | 5  | 0  | 5  | 5        | 5 - 5 = 0             | 0 - 0 = 0             | Yes            |
| B        | 5  | 15 | 5  | 15 | 10       | 15 - 15 = 0           | 5 - 5 = 0             | Yes            |
| C        | 15 | 30 | 15 | 30 | 15       | 30 - 30 = 0           | 15 - 15 = 0           | Yes            |
| E        | 15 | 23 | 22 | 30 | 8        | 30 - 23 = 7           | 22 - 15 = 7           | No             |
| F        | 15 | 21 | 24 | 30 | 6        | 30 - 21 = 9           | 24 - 15 = 9           | No             |
| G        | 30 | 42 | 30 | 42 | 12       | 42 - 42 = 0           | 30 - 30 = 0           | Yes            |

**Critical Path:** A -> B -> C -> G

**Important Points to Remember (Slack):**

*   Activities with zero slack are critical.
*   Activities with positive slack have some flexibility in their scheduling.
*   Managing slack is crucial for efficient project resource allocation and risk management.

**Textbook References:**

*   **Mahadevan (2018), Chapter 11: Project Management:** Explains the concept and calculation of slack.
*   **Tripathi & Reddy (2017), Chapter 15: Project Management:** Discusses slack analysis for project control.

**Course Outcome Alignment:**

*   **CO4 (K3): Apply project management techniques to manage projects.** Calculating and interpreting slack is a direct application of project management.
*   **CO1 (K4): Critically analyse a variety of management practices in the contemporary context.** Understanding slack allows for critical analysis of project schedules and potential delays.

---

### 6. Types of Slack

While Total Slack is the most commonly used, other types of slack are also important for detailed analysis.

**Key Concepts:**

*   **Free Slack (FS):** The amount of time an activity can be delayed without delaying the Earliest Start time of any immediate successor.
    *   **FS = Minimum (ES of immediate successors) - EF of the current activity**
    *   If an activity has no successors, FS is undefined or infinite.

**Example (Continuing the calculations):**

| Activity | EF | Successors | ES of Successors | Minimum ES of Successors | Free Slack |
| :------- | :- | :--------- | :--------------- | :----------------------- | :--------- |
| A        | 5  | B          | 5                | 5                        | 5 - 5 = 0  |
| B        | 15 | C, E, F    | 15 (C), 15 (E), 15 (F) | 15                       | 15 - 15 = 0 |
| C        | 30 | G          | 30               | 30                       | 30 - 30 = 0 |
| E        | 23 | G          | 30               | 30                       | 30 - 23 = 7 |
| F        | 21 | G          | 30               | 30                       | 30 - 21 = 9 |

**Important Points to Remember (Types of Slack):**

*   **Total Slack** is the overall flexibility of an activity.
*   **Free Slack** is a more restrictive measure of flexibility, focusing on the immediate successors.
*   If Total Slack is positive, Free Slack will always be greater than or equal to Total Slack.

**Textbook References:**

*   **Mahadevan (2018), Chapter 11: Project Management:** May briefly touch upon different types of float.

**Course Outcome Alignment:**

*   **CO4 (K3): Apply project management techniques to manage projects.** Understanding different types of slack enhances the application of scheduling techniques.

---

### 7. Practice Questions & Exercises

**Question 1 (AON Diagram and Scheduling Computations):**

Consider the following project activities and their durations:

| Activity | Description       | Predecessor | Duration (Days) |
| :------- | :---------------- | :---------- | :-------------- |
| P        | Design Plan       | -           | 7               |
| Q        | Material Ordering | P           | 5               |
| R        | Excavation        | P           | 10              |
| S        | Frame Assembly    | Q           | 8               |
| T        | Foundation Pouring| R           | 6               |
| U        | Wall Construction | S, T        | 12              |
| V        | Interior Work     | U           | 9               |

a) Draw an AON diagram for this project, assuming Finish-to-Start dependencies.
b) Perform a forward pass to calculate the Earliest Start (ES) and Earliest Finish (EF) for each activity. Determine the total project duration.
c) Perform a backward pass to calculate the Latest Start (LS) and Latest Finish (LF) for each activity.
d) Calculate the Total Slack for each activity.
e) Identify the critical path(s) for this project.

**Answer 1:**

**a) AON Diagram:**

```
    +-------+
    |   P   | (7)
    +-------+
       | \
       |  \
       v   v
    +-------+   +-------+
    |   Q   |---|   S   | (8)
    +-------+   +-------+
       |           |
       v           |
    +-------+     |
    |   R   |-----|
    +-------+     |
       |          |
       v          |
    +-------+     |
    |   T   |-----|
    +-------+     |
       | \        |
       |  \       |
       v   v      v
    +-------+   +-------+
    |   U   |---|   V   | (9)
    +-------+   +-------+
```

**b) Forward Pass:**

| Activity | Duration | ES | EF |
| :------- | :------- | :- | :- |
| P        | 7        | 0  | 7  |
| Q        | 5        | 7  | 12 |
| R        | 10       | 7  | 17 |
| S        | 8        | 12 | 20 |
| T        | 6        | 17 | 23 |
| U        | 12       | max(20, 23) = 23 | 23 + 12 = 35 |
| V        | 9        | 35 | 35 + 9 = 44 |

Project Duration = **44 days**

**c) Backward Pass:**

| Activity | LF | LS |
| :------- | :- | :- |
| V        | 44 | 35 |
| U        | 35 | 23 |
| S        | 23 | 15 |
| T        | 23 | 17 |
| Q        | 15 | 10 |
| R        | 17 | 7  |
| P        | min(LS of Q, LS of R) = min(10, 7) = 7 | 7 - 7 = 0 |

**d) Total Slack:**

| Activity | LF | EF | Total Slack (LF - EF) |
| :------- | :- | :- | :-------------------- |
| P        | 7  | 7  | 0                     |
| Q        | 15 | 12 | 3                     |
| R        | 17 | 17 | 0                     |
| S        | 23 | 20 | 3                     |
| T        | 23 | 23 | 0                     |
| U        | 35 | 35 | 0                     |
| V        | 44 | 44 | 0                     |

**e) Critical Path:**

Activities with zero slack are P, R, T, U, V.
Critical Path: **P -> R -> T -> U -> V**

---

**Question 2 (Interpreting Slack):**

In a project, Activity X has an ES of 10, EF of 15, LS of 12, and LF of 17.

a) Calculate the Total Slack for Activity X.
b) Is Activity X on the critical path? Explain why or why not.
c) What does the slack for Activity X imply for project scheduling?

**Answer 2:**

a) Total Slack = LF - EF = 17 - 15 = **2 days**.
   Alternatively, Total Slack = LS - ES = 12 - 10 = **2 days**.

b) No, Activity X is **not** on the critical path because its Total Slack is 2 days, which is greater than zero. Activities on the critical path have zero slack.

c) The slack of 2 days for Activity X implies that this activity can be delayed by up to 2 days without affecting the overall project completion date, assuming all other activities are also completed on schedule. This provides flexibility in scheduling resources for Activity X or accommodating minor unforeseen delays.

---

### 8. Management Implications and Course Outcome Links

*   **CO1 (K4): Critically analyse a variety of management practices in the contemporary context.** Understanding scheduling computations allows engineers to critically assess project timelines, identify potential risks related to schedule overruns, and evaluate the efficiency of different project management approaches. For instance, a project manager might analyze the impact of a delay in a non-critical activity versus a critical activity.
*   **CO2 (K2): Examine the broad functions of management.** Scheduling computations directly support the **planning** and **controlling** functions of management. Planning involves setting timelines, and controlling involves monitoring progress against the schedule and taking corrective actions.
*   **CO3 (K3): Demonstrate ability in decision making and productivity analysis.** By identifying the critical path and calculating slack, engineers can make informed decisions about resource allocation, prioritize tasks, and analyze the productivity of different project phases. They can decide where to focus efforts to ensure timely completion.
*   **CO4 (K3): Apply project management techniques to manage projects.** This entire topic is a direct application of project management techniques, equipping engineers with practical skills to manage engineering projects effectively.
*   **CO5 (K2): Understand the functional areas of management.** Project management is a cross-functional area that relies on inputs and coordination from various functional areas like operations, finance, and human resources. Scheduling computations help in coordinating these efforts.
*   **CO6 (K2): Introduce the concept of market, marketing and marketing strategies.** While not directly related, efficient project management, facilitated by effective scheduling, contributes to a company's ability to deliver products and services to market on time, impacting its competitive positioning and customer satisfaction.

**Reference to Textbooks & Management Principles:**

*   **Koontz, Weihrich, & Cannice (2020):** Their emphasis on the controlling function (Chapter 16) directly relates to monitoring project progress against the schedule calculated through these methods. The importance of organizing and leading project teams also relies on clear timelines.
*   **Mahadevan (2018):** The detailed coverage of project management in Chapter 11 provides the theoretical underpinnings for these calculations.
*   **Tripathi & Reddy (2017):** Their focus on project planning and control reinforces the value of network diagrams and scheduling computations for achieving project objectives.

---

### 9. Conclusion and Key Takeaways

Scheduling computations, facilitated by AON and AOA diagrams, are indispensable tools for engineers involved in project management. They provide a visual representation of project activities and their dependencies, enabling the calculation of critical paths and slack. Mastering these techniques allows for:

*   **Accurate project duration estimation.**
*   **Identification of critical activities that require close monitoring.**
*   **Flexibility in managing non-critical activities.**
*   **Efficient resource allocation and risk management.**
*   **Effective communication of project timelines to stakeholders.**

By applying forward and backward pass analysis, engineers can gain a comprehensive understanding of project timelines, ensuring projects are completed efficiently and successfully.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
