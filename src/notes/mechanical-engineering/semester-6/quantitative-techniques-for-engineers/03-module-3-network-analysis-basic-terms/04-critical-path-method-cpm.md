---
title: "Critical Path Method (CPM)"
subject: "QUANTITATIVE TECHNIQUES FOR ENGINEERS"
module: "Module 3: Network analysis – Basic terms"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1751d0cf4804463a78"
status: "completed"
scrapedAt: "2026-05-20T18:07:36.064Z"
---
# QUANTITATIVE TECHNIQUES FOR ENGINEERS

## Module 3: Network Analysis – Basic Terms

### Topic: Critical Path Method (CPM)

---

### Introduction to CPM

The Critical Path Method (CPM) is a project management technique used to identify and schedule the essential tasks required to complete a project. It helps in determining the shortest possible time to complete a project by analyzing the dependencies between tasks and identifying the critical path, which is the sequence of tasks that directly impacts the project's completion time. CPM is a deterministic technique, meaning it assumes task durations are known and fixed.

**Relevance to Course Outcomes:**

*   **CO3: To sequence and schedule jobs and projects (Knowledge Level: K3)** - CPM directly addresses the sequencing and scheduling of project activities to determine the overall project duration and identify critical tasks.

**Key Textbooks/References:**

*   **Paneerselvam R., *Operations Research*** (PHI, Third edition, 2023) - Likely provides a foundational explanation of CPM and its components.
*   **Taha, H. A., *Operations Research*** (Pearson, Tenth edition, 2019) - Offers a comprehensive treatment of network analysis techniques, including CPM.
*   **Hillier & Lieberman, *Introduction to Operations Research*** (McGraw Hill, Tenth edition, 2017) - Discusses project management tools and techniques, where CPM is a central topic.

---

### 1. Basic Terms in Network Analysis

Before delving into CPM, understanding fundamental network analysis terms is crucial. A project network diagram visually represents the sequence of activities and their interdependencies.

*   **Activity:** A task or operation that needs to be performed to complete the project. Activities are the building blocks of a project network.
    *   *Example:* "Construct foundation," "Install electrical wiring," "Paint walls."
*   **Event (or Milestone):** A point in time marking the completion of one or more activities and the beginning of others. Events do not consume time or resources.
    *   *Example:* "Foundation complete," "Electrical wiring inspected," "Project completion."
*   **Network Diagram:** A graphical representation of project activities and their logical dependencies. Two common types are:
    *   **Activity-on-Arrow (AOA):** Arrows represent activities, and nodes (circles) represent events.
    *   **Activity-on-Node (AON):** Nodes represent activities, and arrows represent the dependencies between them. AON is generally preferred for its simplicity and clarity.
*   **Predecessor Activity:** An activity that must be completed before another activity can begin.
*   **Successor Activity:** An activity that can begin only after a predecessor activity is completed.
*   **Merge Activity:** An activity that has more than one immediate predecessor.
*   **Burst Activity:** An activity that has more than one immediate successor.
*   **Dangling Activity:** An activity that has been completed but its completion event is not connected to any subsequent activity's start. This usually indicates an error in network construction.
*   **Dummy Activity:** An activity with zero duration and zero resource consumption, used in AOA diagrams to maintain the correct logical dependencies and distinguish between activities that share the same predecessor and successor events.

---

### 2. Critical Path Method (CPM) - Core Concepts

CPM focuses on identifying the longest path through the project network, which determines the minimum project completion time.

**Key Steps in CPM:**

1.  **Define Project Activities:** Break down the project into a series of distinct activities.
2.  **Sequence Activities:** Determine the order in which activities must be performed, identifying predecessors and successors.
3.  **Develop Network Diagram:** Visually represent the activities and their dependencies.
4.  **Estimate Activity Durations:** Assign a specific duration (time to complete) to each activity.
5.  **Identify the Critical Path:** Determine the sequence of activities that have zero float (slack) and thus dictate the project's total duration.
6.  **Perform Time Calculations (Forward and Backward Pass):** Calculate the earliest and latest start/finish times for each activity.
7.  **Calculate Float (Slack):** Determine the amount of time an activity can be delayed without affecting the project's overall completion time.

---

### 3. Activity Durations and Time Calculations

CPM assumes deterministic activity durations.

*   **Activity Duration:** The time required to complete a specific activity. This is typically estimated by project managers based on experience, historical data, or expert opinion. (Paneerselvam, 2023; Taha, 2019)

**Time Calculations:**

To find the critical path and analyze activity timings, we perform two passes through the network:

#### 3.1. Forward Pass (Calculating Earliest Times)

The forward pass determines the earliest possible start and finish times for each activity.

*   **Earliest Start Time (ES):** The earliest time an activity can begin, which is the earliest finish time of its immediate predecessor.
    *   For the first activity in a project (no predecessors), ES = 0.
    *   For any other activity, ES = Maximum (EF of all its predecessors).
*   **Earliest Finish Time (EF):** The earliest time an activity can be completed.
    *   **EF = ES + Duration**

**How to perform the Forward Pass:**

1.  Start with the first activity (or activities) at time 0.
2.  For each activity, calculate its EF using the formula EF = ES + Duration.
3.  For subsequent activities, their ES is the maximum EF of all their immediate predecessors.
4.  Continue this process until the EF of the last activity (or activities) is determined. This EF of the final activity represents the **earliest project completion time**.

#### 3.2. Backward Pass (Calculating Latest Times)

The backward pass determines the latest possible start and finish times for each activity, working backward from the project's earliest completion time.

*   **Latest Finish Time (LF):** The latest time an activity can be completed without delaying the project's overall completion.
    *   For the last activity in a project, LF = EF of the last activity (earliest project completion time).
    *   For any other activity, LF = Minimum (LS of all its successors).
*   **Latest Start Time (LS):** The latest time an activity can begin without delaying the project's overall completion.
    *   **LS = LF - Duration**

**How to perform the Backward Pass:**

1.  Start with the last activity (or activities) in the project. Set its LF to the earliest project completion time calculated in the forward pass.
2.  For each activity, calculate its LS using the formula LS = LF - Duration.
3.  For preceding activities, their LF is the minimum LS of all their immediate successors.
4.  Continue this process until the LS of the first activity (or activities) is determined. This LS should ideally be 0 for the project to start at time 0.

---

### 4. Calculating Float (Slack)

Float (or slack) is the amount of time an activity can be delayed without affecting the project's overall completion time.

*   **Total Float (TF):** The total amount of time an activity can be delayed from its earliest start without delaying the project completion.
    *   **TF = LF - EF**
    *   **TF = LS - ES** (Both formulas should yield the same result)

*   **Free Float (FF):** The amount of time an activity can be delayed without delaying the earliest start of any of its immediate successor activities.
    *   **FF = Minimum (ES of successors) - EF of the activity**
    *   *Note: Free float is a more restrictive measure than total float.*

**Importance of Float:**

*   Activities with zero float are **critical activities**.
*   A sequence of critical activities forms the **critical path**.
*   Any delay in critical activities will directly delay the project completion.
*   Activities with positive float have some flexibility in their scheduling.

---

### 5. Identifying the Critical Path

The critical path is the longest sequence of activities in the project network, which defines the minimum time required to complete the project.

**How to Identify the Critical Path:**

The critical path consists of all activities with **zero total float (TF = 0)**.

**Steps to find the critical path:**

1.  Construct the network diagram.
2.  Perform the forward pass to calculate ES and EF for all activities. Determine the earliest project completion time.
3.  Perform the backward pass to calculate LS and LF for all activities, starting from the earliest project completion time.
4.  Calculate the total float (TF) for each activity using TF = LF - EF or TF = LS - ES.
5.  Identify all activities where TF = 0. These are the critical activities.
6.  Connect the critical activities in sequence, following their dependencies, to form the critical path.

---

### 6. Example Problem

Let's consider a simple project with the following activities, their durations, and predecessors:

| Activity | Description           | Duration (days) | Predecessors |
| :------- | :-------------------- | :-------------- | :----------- |
| A        | Design                | 4               | -            |
| B        | Procure materials     | 5               | A            |
| C        | Prepare site          | 3               | A            |
| D        | Construct foundation  | 6               | C            |
| E        | Install electrical    | 4               | B, D         |
| F        | Install plumbing      | 3               | B, D         |
| G        | Interior finishing    | 5               | E, F         |
| H        | Exterior finishing    | 2               | D            |
| I        | Final inspection      | 1               | G, H         |

**Solution:**

**1. Network Diagram (AON - Activity-on-Node):**

```
       +---+      +---+      +---+      +---+
   ----| A |------| B |------| E |------| G |------
   |   +---+  4   +---+  5   +---+  4   +---+  5   |
   |            /|\        /|\        /|\        |
   |           / | \      / | \      / | \       |
   |          /  |  \    /  |  \    /  |  \      |
   |   +---+  /   |   \  /   |   \  /   |   \     |
   ----| C |------| D |------| F |------| I |------
       +---+  3   +---+  6   +---+  3   +---+  1   |
              |\       |\       |\       |\       |
              | \      | \      | \      | \      |
              |  \     |  \     |  \     |  \     |
              |   +---+  2  +---+     +---+     +---+
              -------------------| H |----------------
                                 +---+

```
*(Note: This is a simplified textual representation. A proper AON diagram would use nodes for activities and arrows for dependencies.)*

**2. Forward Pass (Calculate ES and EF):**

*   **A:** ES=0, EF=0+4=4
*   **B:** ES=EF(A)=4, EF=4+5=9
*   **C:** ES=EF(A)=4, EF=4+3=7
*   **D:** ES=EF(C)=7, EF=7+6=13
*   **E:** ES=max(EF(B), EF(D)) = max(9, 13) = 13, EF=13+4=17
*   **F:** ES=max(EF(B), EF(D)) = max(9, 13) = 13, EF=13+3=16
*   **G:** ES=max(EF(E), EF(F)) = max(17, 16) = 17, EF=17+5=22
*   **H:** ES=EF(D)=13, EF=13+2=15
*   **I:** ES=max(EF(G), EF(H)) = max(22, 15) = 22, EF=22+1=23

**Earliest Project Completion Time = 23 days**

**3. Backward Pass (Calculate LS and LF):**

*   **I:** LF=23, LS=23-1=22
*   **G:** LF=LS(I)=22, LS=22-5=17
*   **H:** LF=LS(I)=22, LS=22-2=20
*   **E:** LF=LS(G)=17, LS=17-4=13
*   **F:** LF=LS(G)=17, LS=17-3=14
*   **D:** LF=min(LS(E), LS(F), LS(H)) = min(13, 14, 20) = 13, LS=13-6=7
*   **B:** LF=min(LS(E), LS(F)) = min(13, 14) = 13, LS=13-5=8
*   **C:** LF=LS(D)=7, LS=7-3=4
*   **A:** LF=min(LS(B), LS(C)) = min(8, 4) = 4, LS=4-4=0

**4. Calculate Total Float (TF = LF - EF):**

| Activity | ES | EF | LS | LF | Duration | TF (LF-EF) | TF (LS-ES) |
| :------- | :- | :- | :- | :- | :------- | :--------- | :--------- |
| A        | 0  | 4  | 0  | 4  | 4        | 0          | 0          |
| B        | 4  | 9  | 8  | 13 | 5        | 4          | 4          |
| C        | 4  | 7  | 4  | 7  | 3        | 0          | 0          |
| D        | 7  | 13 | 7  | 13 | 6        | 0          | 0          |
| E        | 13 | 17 | 13 | 17 | 4        | 0          | 0          |
| F        | 13 | 16 | 14 | 17 | 3        | 1          | 1          |
| G        | 17 | 22 | 17 | 22 | 5        | 0          | 0          |
| H        | 13 | 15 | 20 | 22 | 2        | 7          | 7          |
| I        | 22 | 23 | 22 | 23 | 1        | 0          | 0          |

**5. Identify the Critical Path:**

Activities with TF = 0 are: A, C, D, E, G, I.

The critical path is **A → C → D → E → G → I**.
The length of the critical path is 4 + 3 + 6 + 4 + 5 + 1 = **23 days**.

---

### 7. Important Points to Remember

*   **CPM is deterministic:** Assumes activity durations are fixed and known.
*   **Focus on the longest path:** The critical path determines the minimum project duration.
*   **Zero float activities are critical:** Delays in these activities directly impact the project completion.
*   **Network diagrams are essential:** Proper construction is key to accurate analysis.
*   **Forward pass:** Calculates earliest start and finish times.
*   **Backward pass:** Calculates latest start and finish times.
*   **Float:** Measures the flexibility in scheduling an activity.
*   **Dummy activities:** Used in AOA to maintain logic but not in AON. AON is generally preferred.
*   **Resource leveling:** CPM doesn't inherently consider resource constraints. Resource leveling techniques are often applied to critical path schedules to smooth resource usage. (Refer to Paneerselvam, 2023 for more on this).
*   **Project monitoring:** CPM provides a baseline for tracking project progress. Deviations from the planned schedule can be identified by comparing actual progress to the calculated times.

---

### 8. Practice Questions

**Question 1:**

List the key steps involved in the Critical Path Method (CPM).

**Answer:**
1. Define Project Activities.
2. Sequence Activities and determine dependencies.
3. Develop Network Diagram.
4. Estimate Activity Durations.
5. Perform Forward Pass (ES, EF).
6. Perform Backward Pass (LS, LF).
7. Calculate Total Float (TF).
8. Identify the Critical Path (activities with TF=0).

---

**Question 2:**

Consider the following project activities:

| Activity | Duration (weeks) | Predecessors |
| :------- | :--------------- | :----------- |
| P        | 3                | -            |
| Q        | 5                | P            |
| R        | 2                | P            |
| S        | 4                | Q            |
| T        | 6                | Q, R         |
| U        | 3                | S, T         |

a) Draw the Activity-on-Node (AON) network diagram for this project.
b) Determine the earliest project completion time.
c) Identify the critical path and its length.
d) Calculate the total float for activities Q and R.

**Answer:**

**a) AON Network Diagram:**

```
       +---+      +---+      +---+
   ----| P |------| Q |------| S |------
   |   +---+  3   +---+  5   +---+  4   |
   |            /|\        /|\        |
   |           / | \      / | \       |
   |          /  |  \    /  |  \      |
   |   +---+  /   |   \  /   |   \     |
   ----| R |------| T |------| U |------
       +---+  2   +---+  6   +---+  3   |
```

**b) Earliest Project Completion Time:**

*   **Forward Pass:**
    *   P: ES=0, EF=3
    *   Q: ES=3, EF=3+5=8
    *   R: ES=3, EF=3+2=5
    *   S: ES=EF(Q)=8, EF=8+4=12
    *   T: ES=max(EF(Q), EF(R)) = max(8, 5) = 8, EF=8+6=14
    *   U: ES=max(EF(S), EF(T)) = max(12, 14) = 14, EF=14+3=17

    **Earliest Project Completion Time = 17 weeks**

**c) Critical Path and Length:**

*   **Backward Pass:**
    *   U: LF=17, LS=17-3=14
    *   S: LF=LS(U)=14, LS=14-4=10
    *   T: LF=LS(U)=14, LS=14-6=8
    *   Q: LF=min(LS(S), LS(T)) = min(10, 8) = 8, LS=8-5=3
    *   R: LF=LS(T)=8, LS=8-2=6
    *   P: LF=min(LS(Q), LS(R)) = min(3, 6) = 3, LS=3-3=0

*   **Total Float (TF = LF - EF):**
    *   P: TF = 3 - 3 = 0
    *   Q: TF = 8 - 8 = 0
    *   R: TF = 8 - 5 = 3
    *   S: TF = 14 - 12 = 2
    *   T: TF = 14 - 14 = 0
    *   U: TF = 17 - 17 = 0

*   **Critical Path:** Activities with TF=0 are P, Q, T, U.
    The critical path is **P → Q → T → U**.
    The length of the critical path is 3 + 5 + 6 + 3 = **17 weeks**.

**d) Total Float for activities Q and R:**

*   Total Float for Q: **0 weeks** (Q is on the critical path).
*   Total Float for R: **3 weeks** (R is not on the critical path).

---

### 9. Connection to Course Outcomes

*   **CO3: To sequence and schedule jobs and projects (Knowledge Level: K3)**
    *   CPM directly addresses this outcome by providing a systematic method for sequencing activities, estimating durations, and scheduling them to determine the overall project timeline and identify critical tasks. The ability to perform forward/backward passes and calculate float demonstrates the application of scheduling principles.

---

This concludes the study notes on the Critical Path Method (CPM). For further details and advanced applications, refer to the suggested textbooks: Paneerselvam R. (2023) and Taha (2019).

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
