---
title: "time analysis"
subject: "QUANTITATIVE TECHNIQUES FOR ENGINEERS"
module: "Module 3: Network analysis – Basic terms"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1751d0cf4804463a77"
status: "completed"
scrapedAt: "2026-05-20T18:07:35.350Z"
---
# QUANTITATIVE TECHNIQUES FOR ENGINEERS

## Module 3: Network Analysis – Basic Terms

### Topic: Time Analysis

---

**Introduction to Time Analysis in Network Projects:**

In project management, understanding the time dimension is crucial for successful planning, execution, and control. Time analysis in network diagrams helps us to determine the project duration, identify critical activities, and allocate resources effectively. This topic focuses on various time-related calculations and concepts associated with project networks, building upon the fundamental understanding of network diagrams.

---

### Learning Outcomes:

Upon completion of this topic, you will be able to:

*   Calculate the earliest and latest times for the start and finish of each activity.
*   Determine the total float (or slack) for each activity.
*   Identify the critical path of a project.
*   Understand the concept of project duration and its significance.
*   Analyze the impact of delays on the project completion time.
*   Apply time analysis techniques to real-world engineering project scenarios.

---

### Key Concepts and Definitions:

**1. Activity:**
An individual task or operation that must be performed to complete a project. Activities are typically represented by arrows in a network diagram.

**2. Event/Node:**
A milestone or a point in time marking the beginning or end of one or more activities. Events do not consume time or resources. They are represented by circles or nodes in a network diagram.

**3. Predecessor Activity:**
An activity that must be completed before another activity can begin.

**4. Successor Activity:**
An activity that can only begin after one or more predecessor activities are completed.

**5. Duration (d):**
The time required to complete an activity. This is usually estimated and is a critical input for time analysis.

**6. Earliest Occurrence Time:**
The earliest possible time an event can occur or an activity can start/finish.

**7. Latest Occurrence Time:**
The latest possible time an event can occur or an activity can start/finish without delaying the overall project completion.

**8. Total Float (TF) / Slack:**
The amount of time an activity can be delayed without delaying the project completion date. It is the difference between the latest finish time and the earliest finish time, or the latest start time and the earliest start time.

**9. Critical Path:**
The sequence of activities that determines the shortest possible project duration. Any delay in a critical activity will directly delay the entire project. Activities on the critical path have zero total float.

**10. Project Duration:**
The total time required to complete the entire project. This is determined by the completion time of the last activity on the critical path.

---

### Time Analysis Calculations:

Time analysis involves two main passes through the network:

**A. Forward Pass (Calculating Earliest Times):**

The forward pass determines the earliest possible start and finish times for each activity and event. It proceeds from the project's start event to its end event.

*   **Earliest Start Time (ES):** The earliest time an activity can begin. For the first activity in a sequence (with no predecessors), ES = 0. For subsequent activities, ES is the maximum of the earliest finish times of all its predecessor activities.
    *   $ES_{activity} = \max(EF_{predecessor})$

*   **Earliest Finish Time (EF):** The earliest time an activity can be completed. It is calculated by adding the activity's duration to its earliest start time.
    *   $EF_{activity} = ES_{activity} + d_{activity}$

*   **Earliest Event Time (EET):** The earliest time an event can occur. It is the maximum of the earliest finish times of all activities that *conclude* at that event. For the initial event, EET = 0.
    *   $EET_{event} = \max(EF_{activity \rightarrow event})$

**B. Backward Pass (Calculating Latest Times):**

The backward pass determines the latest possible start and finish times for each activity without delaying the project. It proceeds from the project's end event back to its start event.

*   **Latest Finish Time (LF):** The latest time an activity can be completed without delaying the project. For the last activity in the project (or activities ending at the final event), LF is equal to the project's earliest finish time (which is the EET of the final event). For other activities, LF is the minimum of the latest start times of all its successor activities.
    *   $LF_{activity} = \min(LS_{successor})$

*   **Latest Start Time (LS):** The latest time an activity can begin without delaying the project. It is calculated by subtracting the activity's duration from its latest finish time.
    *   $LS_{activity} = LF_{activity} - d_{activity}$

*   **Latest Event Time (LET):** The latest time an event can occur without delaying the project. It is the minimum of the latest start times of all activities that *originate* from that event. For the final event, LET is equal to the project's earliest finish time.
    *   $LET_{event} = \min(LS_{event \rightarrow activity})$

**C. Calculating Float (Slack):**

Once ES, EF, LS, and LF are calculated, the float for each activity can be determined.

*   **Total Float (TF):** The total amount of time an activity can be delayed without affecting the project completion date.
    *   $TF = LF - EF$
    *   $TF = LS - ES$

*   **Free Float (FF):** The amount of time an activity can be delayed without affecting the earliest start time of its immediate successor. Free float is generally less than or equal to total float.
    *   $FF = \min(ES_{successor}) - EF_{activity}$

*   **Independent Float (IF):** The amount of time an activity can be delayed without affecting the earliest start time of any successor activity, considering the latest finish times of its predecessors. This is the most restrictive type of float.
    *   $IF = ES_{successor} - LF_{predecessor} - d_{activity}$
    *(Note: While important, Total Float is the most commonly used and directly relates to identifying the critical path).*

---

### Identifying the Critical Path:

The critical path is the sequence of activities where the total float is zero. These are the activities that have no room for delay.

*   **How to find it:**
    1.  Perform the forward pass to calculate ES and EF for all activities.
    2.  Determine the project duration (which is the EF of the last activity).
    3.  Perform the backward pass to calculate LS and LF for all activities, setting the LF of the last activity to the project duration.
    4.  Calculate the total float (TF) for each activity using $TF = LF - EF$ or $TF = LS - ES$.
    5.  All activities with $TF = 0$ are on the critical path.
    6.  The critical path is the sequence of these activities from the project start to the project end.

---

### Project Duration:

The project duration is the total time required to complete the project. It is determined by the earliest finish time of the last activity in the project. If there are multiple final activities, it's the maximum of their earliest finish times.

*   **Significance:** The project duration is the baseline for project planning and scheduling. Any deviation from this duration can have significant implications for deadlines, costs, and stakeholder expectations.

---

### Impact of Delays:

*   **On Critical Path Activities:** Any delay in an activity on the critical path will directly delay the project completion by the same amount of time.
*   **On Non-Critical Path Activities:** A delay in a non-critical activity will only delay the project if the delay exceeds its total float.

---

### Examples:

**Example 1: Simple Project Network**

Consider a project with the following activities, durations, and precedence relationships:

| Activity | Duration (d) | Predecessor |
| :------- | :----------- | :---------- |
| A        | 3            | -           |
| B        | 5            | A           |
| C        | 2            | A           |
| D        | 4            | B           |
| E        | 6            | C           |
| F        | 3            | D, E        |

**Network Diagram (Activity-on-Arrow):**

```
      (A,3) --------> (B,5) --------> (D,4)
       /                 /                 \
      /                 /                   \
     /                 /                     \
    /                 /                       \
   /                 /                         \
(Start) --------> (C,2) --------> (E,6) --------> (F,3) --------> (End)
```

**Forward Pass Calculation:**

| Activity | Duration (d) | Predecessor(s) | ES  | EF  |
| :------- | :----------- | :------------- | :-- | :-- |
| A        | 3            | -              | 0   | 3   |
| B        | 5            | A              | 3   | 8   |
| C        | 2            | A              | 3   | 5   |
| D        | 4            | B              | 8   | 12  |
| E        | 6            | C              | 5   | 11  |
| F        | 3            | D, E           | max(12, 11) = 12 | 15  |

*   **Project Duration = 15**

**Backward Pass Calculation:**

*   Set LF of F = Project Duration = 15.
*   LS of F = LF(F) - d(F) = 15 - 3 = 12.

| Activity | Duration (d) | Successor(s) | LF  | LS  |
| :------- | :----------- | :----------- | :-- | :-- |
| F        | 3            | -            | 15  | 12  |
| D        | 4            | F            | LS(F) = 12 | 12 - 4 = 8 |
| E        | 6            | F            | LS(F) = 12 | 12 - 6 = 6 |
| B        | 5            | D            | LS(D) = 8  | 8 - 5 = 3  |
| C        | 2            | E            | LS(E) = 6  | 6 - 2 = 4  |
| A        | 3            | B, C         | min(LS(B), LS(C)) = min(3, 4) = 3 | 3 - 3 = 0  |

**Total Float Calculation:**

| Activity | ES | EF | LS | LF | TF = LF - EF |
| :------- | :- | :- | :- | :- | :----------- |
| A        | 0  | 3  | 0  | 3  | 0            |
| B        | 3  | 8  | 3  | 12 | 4            |
| C        | 3  | 5  | 4  | 6  | 1            |
| D        | 8  | 12 | 8  | 12 | 0            |
| E        | 5  | 11 | 6  | 12 | 1            |
| F        | 12 | 15 | 12 | 15 | 0            |

**Critical Path:** Activities with TF = 0 are A, D, and F.
Therefore, the critical path is **A -> D -> F**.

**Example 2: Using Activity-on-Node (AON) / Precedence Diagramming Method (PDM)**

The same project can be represented using AON, where nodes represent activities and arrows represent precedence.

```
      [A,3]
      /   \
     /     \
 [B,5]   [C,2]
   \       /
    \     /
    [D,4] [E,6]
      \   /
       \ /
       [F,3]
```

**Forward Pass (AON):**

*   ES(A) = 0, EF(A) = 0 + 3 = 3
*   ES(B) = EF(A) = 3, EF(B) = 3 + 5 = 8
*   ES(C) = EF(A) = 3, EF(C) = 3 + 2 = 5
*   ES(D) = EF(B) = 8, EF(D) = 8 + 4 = 12
*   ES(E) = EF(C) = 5, EF(E) = 5 + 6 = 11
*   ES(F) = max(EF(D), EF(E)) = max(12, 11) = 12
*   EF(F) = 12 + 3 = 15

**Project Duration = 15**

**Backward Pass (AON):**

*   LF(F) = 15, LS(F) = 15 - 3 = 12
*   LF(D) = LS(F) = 12, LS(D) = 12 - 4 = 8
*   LF(E) = LS(F) = 12, LS(E) = 12 - 6 = 6
*   LF(B) = LS(D) = 8, LS(B) = 8 - 5 = 3
*   LF(C) = LS(E) = 6, LS(C) = 6 - 2 = 4
*   LF(A) = min(LS(B), LS(C)) = min(3, 4) = 3, LS(A) = 3 - 3 = 0

**Total Float Calculation (AON):**

| Activity | ES | EF | LS | LF | TF = LF - EF |
| :------- | :- | :- | :- | :- | :----------- |
| A        | 0  | 3  | 0  | 3  | 0            |
| B        | 3  | 8  | 3  | 12 | 4            |
| C        | 3  | 5  | 4  | 6  | 1            |
| D        | 8  | 12 | 8  | 12 | 0            |
| E        | 5  | 11 | 6  | 12 | 1            |
| F        | 12 | 15 | 12 | 15 | 0            |

**Critical Path:** A -> D -> F.

---

### Important Points to Remember:

*   **Network Diagrams:** Choose the appropriate diagramming method (Activity-on-Arrow or Activity-on-Node) and be consistent.
*   **Dummy Activities:** In Activity-on-Arrow (AOA) diagrams, dummy activities (with zero duration) are used to maintain correct precedence relationships and to ensure each activity has a unique starting and ending event. They do not affect time calculations.
*   **Forward Pass is Sequential:** Always start the forward pass from the initial event and move towards the final event.
*   **Backward Pass is Sequential:** Always start the backward pass from the final event and move towards the initial event.
*   **Max for ES/EET, Min for LS/LET:** Remember to use the maximum of predecessor finish times for ES and the minimum of successor start times for LF.
*   **Critical Path Activities have Zero Float:** This is the defining characteristic.
*   **Project Duration is determined by the Critical Path:** Any delay on the critical path directly impacts the project completion.
*   **Float is a Buffer:** Non-critical activities have float, which provides flexibility in scheduling.

---

### Relation to Course Outcomes:

*   **CO1: To formulate and solve linear programming and transportation problems (Knowledge Level: K4)**
    *   While this topic doesn't directly involve LP or transportation, the systematic calculation and optimization of project schedules using time analysis techniques share the underlying principle of finding optimal solutions for resource allocation (time, in this case) within constraints. Understanding critical path analysis can inform resource leveling and project scheduling problems that might later be modeled with optimization techniques.
*   **CO3: To sequence and schedule jobs and projects (Knowledge Level: K3)**
    *   This topic is **directly aligned** with CO3. Time analysis, including forward/backward pass, float calculation, and critical path identification, are fundamental techniques for sequencing and scheduling project activities to determine project duration and identify critical tasks.

---

### Practice Questions:

**Question 1:**

A project consists of the following activities:

| Activity | Duration (days) | Predecessors |
| :------- | :-------------- | :----------- |
| 1        | 4               | -            |
| 2        | 2               | 1            |
| 3        | 5               | 1            |
| 4        | 3               | 2            |
| 5        | 4               | 3            |
| 6        | 2               | 4, 5         |

a) Draw an Activity-on-Arrow (AOA) network diagram for this project, using dummy activities where necessary.
b) Perform a forward pass to determine the Earliest Start (ES) and Earliest Finish (EF) times for each activity.
c) Perform a backward pass to determine the Latest Start (LS) and Latest Finish (LF) times for each activity.
d) Calculate the Total Float (TF) for each activity.
e) Identify the critical path and the total project duration.

**Question 2:**

Consider the following project activities with their durations:

| Activity | Duration | Predecessors |
| :------- | :------- | :----------- |
| A        | 5        | -            |
| B        | 7        | A            |
| C        | 3        | A            |
| D        | 4        | B            |
| E        | 6        | C            |
| F        | 2        | D, E         |
| G        | 3        | F            |

a) Construct an Activity-on-Node (AON) diagram for this project.
b) Calculate the ES, EF, LS, and LF times for all activities.
c) Determine the Total Float for each activity.
d) What is the project duration?
e) Which activities are on the critical path?

---

### Answers to Practice Questions:

**Answer to Question 1:**

a) **AOA Network Diagram:**

```
      (1,4) --------> (2,2) --------> (4,3)
       /                 /                 \
      /                 /                   \
     /                 /                     \
    /                 /                       \
   /                 /                         \
(Start) --------> (3,5) --------> (5,4) --------> (6,2) --------> (End)
       \                                           /
        \___________________________________________/
                                 (Dummy)
```
*Note: A dummy activity from event 4 to event 6 is shown to correctly represent that activity 6 depends on both 4 and 5. If using a simpler diagram without explicitly drawing dummies for AOA, the relationships would be implied.*

Let's represent the diagram more clearly with nodes for events:
Event 1 --(A,4)--> Event 2 --(B,2)--> Event 3
Event 1 --(C,5)--> Event 4
Event 2 --(D,3)--> Event 5
Event 4 --(E,4)--> Event 5
Event 3 --(F,2)--> Event 6
Event 5 --(F,2)--> Event 6

b) **Forward Pass:**

| Activity | Duration | Predecessors | ES  | EF  |
| :------- | :------- | :----------- | :-- | :-- |
| 1        | 4        | -            | 0   | 4   |
| 2        | 2        | 1            | 4   | 6   |
| 3        | 5        | 1            | 4   | 9   |
| 4        | 3        | 2            | 6   | 9   |
| 5        | 4        | 3            | 9   | 13  |
| 6        | 2        | 4, 5         | max(9, 13) = 13 | 15  |

c) **Backward Pass:**

*   LF of activity 6 = 15. LS of activity 6 = 15 - 2 = 13.

| Activity | Duration | Successors | LF  | LS  |
| :------- | :------- | :--------- | :-- | :-- |
| 6        | 2        | -          | 15  | 13  |
| 4        | 3        | 6          | LS(6) = 13 | 13 - 3 = 10 |
| 5        | 4        | 6          | LS(6) = 13 | 13 - 4 = 9  |
| 2        | 2        | 4          | LS(4) = 10 | 10 - 2 = 8  |
| 3        | 5        | 5          | LS(5) = 9  | 9 - 5 = 4   |
| 1        | 4        | 2, 3       | min(LS(2), LS(3)) = min(8, 4) = 4 | 4 - 4 = 0   |

d) **Total Float (TF):**

| Activity | ES | EF | LS | LF | TF = LF - EF |
| :------- | :- | :- | :- | :- | :----------- |
| 1        | 0  | 4  | 0  | 4  | 0            |
| 2        | 4  | 6  | 8  | 10 | 4            |
| 3        | 4  | 9  | 4  | 9  | 0            |
| 4        | 6  | 9  | 10 | 13 | 4            |
| 5        | 9  | 13 | 9  | 13 | 0            |
| 6        | 13 | 15 | 13 | 15 | 0            |

e) **Critical Path and Project Duration:**
Critical Path Activities (TF=0): 1, 3, 5, 6
Critical Path: **1 -> 3 -> 5 -> 6**
Project Duration: **15 days**

---

**Answer to Question 2:**

a) **AON Diagram:**

```
      [A,5]
      /   \
     /     \
 [B,7]   [C,3]
   \       /
    \     /
    [D,4] [E,6]
      \   /
       \ /
       [F,2]
        |
        |
       [G,3]
```

b) **ES, EF, LS, LF Calculations:**

| Activity | Duration | Predecessors | ES  | EF  | LS  | LF  |
| :------- | :------- | :----------- | :-- | :-- | :-- | :-- |
| A        | 5        | -            | 0   | 5   | 0   | 5   |
| B        | 7        | A            | 5   | 12  | 5   | 12  |
| C        | 3        | A            | 5   | 8   | 9   | 12  |
| D        | 4        | B            | 12  | 16  | 12  | 16  |
| E        | 6        | C            | 8   | 14  | 14  | 20  |
| F        | 2        | D, E         | max(16, 14) = 16 | 18  | 18  | 20  |
| G        | 3        | F            | 18  | 21  | 21  | 24  |

*   **Project Duration = 24** (from EF of G)

c) **Total Float (TF):**

| Activity | ES | EF | LS | LF | TF = LF - EF |
| :------- | :- | :- | :- | :- | :----------- |
| A        | 0  | 5  | 0  | 5  | 0            |
| B        | 5  | 12 | 5  | 12 | 0            |
| C        | 5  | 8  | 9  | 12 | 4            |
| D        | 12 | 16 | 12 | 16 | 0            |
| E        | 8  | 14 | 14 | 20 | 6            |
| F        | 16 | 18 | 18 | 20 | 2            |
| G        | 18 | 21 | 21 | 24 | 3            |

d) Project Duration: **24 units of time** (e.g., days, weeks).

e) Critical Path Activities (TF=0): A, B, D
Critical Path: **A -> B -> D**

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |


### Textbook and Reference Material Integration:

*   **Paneerselvam R. (Operations Research, Third edition, 2023):** Chapters on Project Management/Network Analysis (likely covering PERT/CPM) would detail the forward and backward pass calculations, float computation, and critical path identification with examples. The emphasis on systematic computation and definitions aligns with the learning outcomes.
*   **Taha (Operations Research, Tenth edition, 2019):** Similar to Paneerselvam, Taha's text will provide a rigorous treatment of network models. His explanations of earliest/latest times and float will form the backbone of these notes, likely with illustrations of how to apply these concepts to project scheduling.
*   **Hillier and Lieberman (Introduction to Operations Research, Tenth edition, 2017):** This reference would offer another perspective on network analysis, possibly with a focus on the mathematical underpinnings or case studies illustrating the practical application of time analysis in engineering projects.
*   **Banks, Carson, Nelson, and Nicol (Discrete Event System Simulation, Fifth edition, 2013):** While this book focuses on simulation, the underlying concepts of event times, activity durations, and sequencing are relevant. Understanding how these elements form a system's timeline in simulation can reinforce the importance of accurate time analysis in deterministic project scheduling.

The notes are structured to cover the core concepts of time analysis as required by the learning outcomes, drawing upon the fundamental methodologies presented in these standard Operations Research textbooks. The emphasis on calculations and identifying the critical path directly supports CO3.