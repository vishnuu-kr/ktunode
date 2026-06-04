---
title: "CPM and PERT networks"
subject: "MANAGEMENT FOR ENGINEERS"
module: "Module 3: Project Management: Network construction, AON, AOA diagrams"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1451d0cf48044633e2"
status: "completed"
scrapedAt: "2026-05-20T18:01:08.182Z"
---
# MANAGEMENT FOR ENGINEERS - Module 3: Project Management: Network Construction, AON, AOA Diagrams

## Topic: CPM and PERT Networks

This module delves into the fundamental techniques of project management, specifically focusing on network construction methods like Activity-on-Node (AON) and Activity-on-Arrow (AOA) diagrams, and the critical path method (CPM) and Program Evaluation and Review Technique (PERT) for scheduling and controlling projects. These tools are essential for engineers to plan, execute, and monitor complex projects effectively, ensuring timely completion within budget and resource constraints.

---

### 1. Introduction to Project Management and Network Techniques

**Key Concept:** Project management is the application of knowledge, skills, tools, and techniques to project activities to meet project requirements. Network techniques are visual tools used to represent the sequence of activities in a project and their interdependencies.

**Learning Outcome Alignment:**
*   **CO2 (K2):** Examine the broad functions of management (planning and controlling are core to project management).
*   **CO4 (K3):** Apply project management techniques to manage projects.

**Textbook/Reference Integration:**
*   **Koontz, Weihrich & Cannice (2020):** Emphasizes the planning function of management, which directly relates to project planning using network techniques. Chapter on Planning and Control would be relevant.
*   **Mahadevan (2018):** Likely covers project management as a part of operations management, detailing scheduling and control methods. Chapters on Project Management or Production Planning and Control.
*   **Tripathi & Reddy (2017):** Similar to Koontz, will cover planning and organizing, which are foundational to project management.

**Definition:**
*   **Project:** A temporary endeavor undertaken to create a unique product, service, or result.
*   **Activity:** A distinct task or unit of work that must be performed to complete a project.
*   **Event:** A point in time that marks the beginning or end of one or more activities.

**Why Network Techniques?**
*   Visualize project scope and dependencies.
*   Determine the critical path (the longest sequence of activities that determines the project's shortest possible completion time).
*   Estimate project duration.
*   Identify critical activities that, if delayed, will delay the entire project.
*   Allocate resources efficiently.
*   Monitor and control project progress.

---

### 2. Network Construction Diagrams: AON vs. AOA

Two primary methods are used to construct project network diagrams: Activity-on-Node (AON) and Activity-on-Arrow (AOA).

**Key Concepts:**
*   **Activity-on-Node (AON):** Also known as Precedence Diagramming Method (PDM). Activities are represented by nodes (boxes or circles), and dependencies are represented by arrows connecting these nodes.
*   **Activity-on-Arrow (AOA):** Activities are represented by arrows, and events (start/finish points) are represented by nodes (circles).

**Learning Outcome Alignment:**
*   **CO4 (K3):** Apply project management techniques to manage projects (understanding these diagram types is foundational).

**Textbook/Reference Integration:**
*   **Mahadevan (2018):** Will likely provide detailed explanations and diagrams for both AON and AOA.
*   **Tripathi & Reddy (2017):** May focus more on the conceptual understanding and application of these diagrams in project planning.

**AON Diagrams (PDM)**

*   **Structure:**
    *   Nodes represent activities.
    *   Arrows represent the dependencies (precedence relationships) between activities.
*   **Advantages:**
    *   More intuitive and easier to understand for complex projects.
    *   Easier to represent different types of dependencies (finish-to-start, start-to-start, finish-to-finish, start-to-finish).
    *   Less prone to errors compared to AOA due to the absence of "dummy activities" for logical relationships.
*   **Disadvantages:**
    *   May require more space on the diagram.
*   **Common Dependency Types:**
    *   **Finish-to-Start (FS):** Activity B can start only after Activity A finishes. (Most common)
    *   **Start-to-Start (SS):** Activity B can start only after Activity A starts.
    *   **Finish-to-Finish (FF):** Activity B can finish only after Activity A finishes.
    *   **Start-to-Finish (SF):** Activity B can finish only after Activity A starts. (Least common)

**AOA Diagrams**

*   **Structure:**
    *   Arrows represent activities.
    *   Nodes (circles) represent events (start or completion of activities).
*   **Advantages:**
    *   Can be more compact for simpler projects.
    *   Clearly shows the events that trigger activities.
*   **Disadvantages:**
    *   Requires "dummy activities" (zero-duration activities represented by dashed arrows) to maintain logical dependencies and to ensure each activity is uniquely identified. This can make them cumbersome and harder to interpret.
    *   Limited in representing complex dependency types.
*   **Dummy Activities:**
    *   Used to represent a dependency where no work is done.
    *   Must be used to maintain the uniqueness of an activity's start and end events.
    *   Do not consume time or resources.

**Example (AON vs. AOA for a simple scenario):**

Consider a project with three activities:
*   Activity A: Design (2 days)
*   Activity B: Build (3 days)
*   Activity C: Test (1 day)

**Dependencies:**
*   B depends on A (B can start after A finishes).
*   C depends on B (C can start after B finishes).

**AON Diagram Representation:**

```
+-------+     +-------+     +-------+
|       | --> |       | --> |       |
|   A   |     |   B   |     |   C   |
| (2d)  |     | (3d)  |     | (1d)  |
+-------+     +-------+     +-------+
```
*Arrows indicate the FS dependency.*

**AOA Diagram Representation:**

```
(1) --A(2d)--> (2) --B(3d)--> (3) --C(1d)--> (4)
```
*Nodes (1), (2), (3), (4) represent events (start/completion). Arrows A, B, C represent activities.*

---

### 3. Critical Path Method (CPM)

**Key Concept:** CPM is a project management technique used to identify the sequence of project activities that determines the earliest possible completion time for the project.

**Learning Outcome Alignment:**
*   **CO1 (K4):** Develop ability to critically analyze a different management practices (CPM is a key analytical tool).
*   **CO2 (K2):** Examine the broad functions of management (planning, scheduling, and controlling).
*   **CO4 (K3):** Apply project management techniques to manage projects.

**Textbook/Reference Integration:**
*   **Koontz, Weihrich & Cannice (2020):** Chapter on Planning and Control will cover scheduling and resource allocation, where CPM is crucial.
*   **Mahadevan (2018):** Will likely have a dedicated section on CPM, explaining its calculations and applications.
*   **Tripathi & Reddy (2017):** Will cover project planning and control mechanisms, including CPM.

**Core Components of CPM:**

1.  **Activity List:** All tasks required for the project.
2.  **Activity Durations:** Estimated time to complete each activity.
3.  **Activity Dependencies:** The order in which activities must be performed.
4.  **Network Diagram:** A visual representation of activities and their dependencies (usually AON).

**CPM Calculations:**

For each activity, the following times are calculated:

*   **Earliest Start (ES):** The earliest possible time an activity can begin, assuming all preceding activities are completed at their earliest possible times.
*   **Earliest Finish (EF):** The earliest possible time an activity can be completed (ES + Duration).
*   **Latest Finish (LF):** The latest possible time an activity can be completed without delaying the project's overall completion date.
*   **Latest Start (LS):** The latest possible time an activity can begin without delaying the project's overall completion date (LF - Duration).
*   **Slack (or Float):** The amount of time an activity can be delayed without delaying the project's overall completion date (LF - EF or LS - ES).

**Calculating ES and EF (Forward Pass):**

*   Start with the first activity: ES = 0.
*   EF = ES + Duration.
*   For subsequent activities, ES is the maximum EF of all its immediate predecessors.

**Calculating LF and LS (Backward Pass):**

*   Start with the last activity: LF is the project's earliest completion time (determined by the forward pass).
*   LS = LF - Duration.
*   For preceding activities, LF is the minimum LS of all immediate successors.

**Identifying the Critical Path:**

The critical path consists of all activities with **zero slack**. Any delay in these activities directly impacts the project's completion time.

**Example Calculation (using AON diagram):**

Project with activities A, B, C, D, E, F:

| Activity | Duration (days) | Predecessors |
| :------- | :-------------- | :----------- |
| A        | 4               | -            |
| B        | 5               | A            |
| C        | 7               | A            |
| D        | 6               | B            |
| E        | 4               | C            |
| F        | 3               | D, E         |

**1. Forward Pass (ES, EF):**

*   **A:** ES = 0, EF = 0 + 4 = 4
*   **B:** ES = EF(A) = 4, EF = 4 + 5 = 9
*   **C:** ES = EF(A) = 4, EF = 4 + 7 = 11
*   **D:** ES = EF(B) = 9, EF = 9 + 6 = 15
*   **E:** ES = EF(C) = 11, EF = 11 + 4 = 15
*   **F:** ES = max(EF(D), EF(E)) = max(15, 15) = 15, EF = 15 + 3 = 18

**Project Completion Time = 18 days.**

**2. Backward Pass (LF, LS):**

*   **F:** LF = 18, LS = 18 - 3 = 15
*   **D:** LF = LS(F) = 15, LS = 15 - 6 = 9
*   **E:** LF = LS(F) = 15, LS = 15 - 4 = 11
*   **B:** LF = LS(D) = 9, LS = 9 - 5 = 4
*   **C:** LF = LS(E) = 11, LS = 11 - 7 = 4
*   **A:** LF = min(LS(B), LS(C)) = min(4, 4) = 4, LS = 4 - 4 = 0

**3. Calculate Slack:**

| Activity | Duration | ES | EF | LS | LF | Slack (LF-EF or LS-ES) |
| :------- | :------- | :- | :- | :- | :- | :--------------------- |
| A        | 4        | 0  | 4  | 0  | 4  | 0                      |
| B        | 5        | 4  | 9  | 4  | 9  | 0                      |
| C        | 7        | 4  | 11 | 4  | 11 | 0                      |
| D        | 6        | 9  | 15 | 9  | 15 | 0                      |
| E        | 4        | 11 | 15 | 11 | 15 | 0                      |
| F        | 3        | 15 | 18 | 15 | 18 | 0                      |

**Critical Path:** In this example, all activities have zero slack, meaning the critical path is A -> B -> D -> F *and* A -> C -> E -> F. This indicates two parallel critical paths.

**Important Point to Remember:** If an activity has slack, it means it's not on the critical path. Delays in non-critical activities up to their slack amount will not affect the project's overall completion date.

**Resource Leveling and Crashing (Brief Mention):**
*   **Resource Leveling:** Adjusting activity start/finish times within their slack to resolve resource conflicts.
*   **Crashing:** Shortening the duration of critical activities (usually by adding more resources) to shorten the project completion time, often at an increased cost.

---

### 4. Program Evaluation and Review Technique (PERT)

**Key Concept:** PERT is a project management technique used for projects with uncertain activity durations. It uses a probabilistic approach to estimate activity times and project duration.

**Learning Outcome Alignment:**
*   **CO1 (K4):** Develop ability to critically analyze a different management practices (PERT addresses uncertainty).
*   **CO2 (K2):** Examine the broad functions of management (planning and risk assessment).
*   **CO4 (K3):** Apply project management techniques to manage projects.

**Textbook/Reference Integration:**
*   **Mahadevan (2018):** Likely to provide detailed explanations of PERT, including the three-point estimation and probability calculations.
*   **Tripathi & Reddy (2017):** May introduce PERT as an extension of network techniques, especially when dealing with R&D projects or those with high uncertainty.

**Core Differences from CPM:**

*   **Activity Durations:** CPM assumes deterministic durations (known with certainty). PERT uses probabilistic durations based on three estimates.
*   **Focus:** CPM is deterministic and focuses on finding the critical path. PERT is probabilistic and focuses on the probability of completing the project by a certain date.

**PERT Time Estimates:**

For each activity, three time estimates are made:

*   **Optimistic Time (t_o):** The shortest possible time the activity can be completed, assuming everything goes perfectly.
*   **Most Likely Time (t_m):** The most realistic time the activity will take, considering normal circumstances.
*   **Pessimistic Time (t_p):** The longest possible time the activity can be completed, assuming everything goes wrong.

**Calculating Expected Activity Duration (t_e):**

The expected duration is calculated using a weighted average:
$t_e = (t_o + 4t_m + t_p) / 6$

**Calculating Variance and Standard Deviation:**

*   **Variance ($\sigma^2$):** Measures the uncertainty in the activity duration.
    $\sigma^2 = ((t_p - t_o) / 6)^2$
*   **Standard Deviation ($\sigma$):** The square root of the variance. It indicates the dispersion of the actual duration around the expected duration.

**Calculating Project Completion Time and Probability:**

1.  **Calculate expected durations ($t_e$) for all activities.**
2.  **Construct the network diagram and perform a forward pass to find the expected project completion time.** This is done similarly to CPM, using $t_e$ values.
3.  **Identify the critical path** based on the expected durations.
4.  **Calculate the variance of the project** by summing the variances of all activities *on the critical path*.
    Project Variance ($\sigma_{proj}^2$) = Sum of variances of critical path activities.
5.  **Calculate the standard deviation of the project.**
    Project Standard Deviation ($\sigma_{proj}$) = $\sqrt{\sigma_{proj}^2}$

**Probability of Project Completion:**

Using the normal distribution, we can estimate the probability of completing the project by a specific target date (T_d).

*   **Z-score:** $Z = (T_d - Expected Project Duration) / \sigma_{proj}$
*   Look up the Z-score in a standard normal distribution table (or use a calculator) to find the probability of completion by $T_d$.

**Example PERT Calculation:**

Consider an activity with:
*   $t_o$ = 2 days
*   $t_m$ = 4 days
*   $t_p$ = 10 days

**1. Calculate Expected Duration ($t_e$):**
$t_e = (2 + 4*4 + 10) / 6 = (2 + 16 + 10) / 6 = 28 / 6 = 4.67$ days

**2. Calculate Variance ($\sigma^2$):**
$\sigma^2 = ((10 - 2) / 6)^2 = (8 / 6)^2 = (1.33)^2 = 1.78$

**3. Project Example:**
Assume a project with two critical path activities, A and B:

| Activity | $t_o$ | $t_m$ | $t_p$ | $t_e$ (days) | $\sigma^2$ |
| :------- | :---- | :---- | :---- | :----------- | :--------- |
| A        | 2     | 5     | 8     | (2+4*5+8)/6 = 5.33 | ((8-2)/6)^2 = 1 |
| B        | 3     | 6     | 9     | (3+4*6+9)/6 = 6 | ((9-3)/6)^2 = 1 |

*   Expected Project Duration = $t_e(A) + t_e(B)$ = 5.33 + 6 = 11.33 days
*   Project Variance = $\sigma^2(A) + \sigma^2(B)$ = 1 + 1 = 2
*   Project Standard Deviation = $\sqrt{2} \approx 1.41$ days

**Question:** What is the probability of completing this project within 13 days?

*   $T_d$ = 13 days
*   Expected Project Duration = 11.33 days
*   $\sigma_{proj}$ = 1.41 days

*   $Z = (13 - 11.33) / 1.41 = 1.67 / 1.41 \approx 1.18$

Using a Z-table, a Z-score of 1.18 corresponds to a probability of approximately **88.10%**.

**Important Points to Remember for PERT:**
*   PERT is best suited for R&D projects or projects where future events are highly uncertain.
*   The formula for $t_e$ assumes a Beta distribution for activity durations, which is a reasonable approximation for many project activities.
*   The Z-score calculation assumes the project duration follows a normal distribution, which is generally true for projects with many activities on the critical path due to the Central Limit Theorem.

---

### 5. Applications and Limitations of CPM and PERT

**Learning Outcome Alignment:**
*   **CO1 (K4):** Develop ability to critically analyze a different management practices (understanding strengths and weaknesses).
*   **CO3 (K3):** Demonstrate ability in decision making and productivity analysis (choosing the right technique).
*   **CO4 (K3):** Apply project management techniques to manage projects.

**Textbook/Reference Integration:**
*   **Koontz, Weihrich & Cannice (2020):** Discusses the managerial implications of planning tools and their effectiveness.
*   **Mahadevan (2018):** Will likely have sections on the comparative advantages and disadvantages of CPM and PERT.
*   **Griffin (2017):** May touch upon the practical implementation and challenges of project management tools.

**Applications:**

*   **Construction Projects:** Scheduling of tasks, material delivery, and labor deployment.
*   **Research and Development (R&D):** Planning complex experimental phases and managing uncertainties.
*   **Software Development:** Tracking milestones, coding phases, and testing cycles.
*   **Manufacturing:** Production scheduling, assembly line balancing, and new product launches.
*   **Event Management:** Planning and executing large-scale events like conferences or product launches.

**Limitations:**

*   **Assumption of Independence:** Both CPM and PERT assume that the duration of one activity does not affect the duration of another (except through defined dependencies). This is not always true in practice.
*   **Activity Duration Estimates:** The accuracy of the entire schedule relies heavily on the accuracy of the duration estimates. This is particularly true for CPM.
*   **Resource Constraints:** Basic CPM and PERT do not explicitly account for resource limitations. If resources are constrained, the critical path and project duration may change significantly. (Extensions like Resource Constrained Project Scheduling are needed).
*   **AOA Dummy Activities:** AOA diagrams can become complex and error-prone due to the need for dummy activities. AON is generally preferred.
*   **Task Splitting:** CPM and PERT assume tasks are performed continuously. In reality, tasks might be split and resumed.
*   **Human Factors:** Neither method directly accounts for motivation, team dynamics, or unforeseen human errors.

---

### 6. Practice Questions and Answers

**Question 1:**
An engineer is managing a project with the following activities:

| Activity | Duration (days) | Predecessors |
| :------- | :-------------- | :----------- |
| 1        | 3               | -            |
| 2        | 4               | 1            |
| 3        | 2               | 1            |
| 4        | 5               | 2, 3         |
| 5        | 3               | 3            |

a) Construct an AON network diagram for this project.
b) Calculate the Earliest Start (ES) and Earliest Finish (EF) for each activity.
c) Determine the project's earliest completion time.
d) Identify the critical path.

**Answer 1:**

a) **AON Diagram:**
```
      +---+
      | 1 | (3)
      +---+
       / \
      /   \
     /     \
  +---+   +---+
  | 2 |   | 3 | (2)
  |(4)|   +---+
  +---+     / \
    |      /   \
    |     /     \
  +---+ +---+   +---+
  | 4 | | 5 |   |   | (Not explicitly defined, but 5 depends on 3)
  |(5)| |(3)|   |   |
  +---+ +---+   +---+
```
*Note: This is a simplified textual representation. A proper diagram would show arrows.*

b) **ES and EF Calculation:**

| Activity | Duration | Predecessors | ES | EF (ES+Dur) |
| :------- | :------- | :----------- | :- | :---------- |
| 1        | 3        | -            | 0  | 3           |
| 2        | 4        | 1            | 3  | 7           |
| 3        | 2        | 1            | 3  | 5           |
| 4        | 5        | 2, 3         | max(EF(2), EF(3)) = max(7, 5) = 7 | 12 |
| 5        | 3        | 3            | EF(3) = 5 | 8           |

c) **Earliest Completion Time:** The EF of the last activity (Activity 4) is **12 days**.

d) **Critical Path:** To find the critical path, we need the backward pass and slack calculation.

**Backward Pass (LF, LS):**

*   **4:** LF = 12, LS = 12 - 5 = 7
*   **5:** LF = LS(Not defined, assume end of project or completion of successor if any. If 4 is the only successor, then LF=LS(4)=7. If we consider the path to project completion, LF=LS(4)=7. Let's assume 5 is the last activity on its own branch) LF = 7, LS = 7 - 3 = 4 (This is incorrect if 5 is not on the critical path to the project end. Let's re-evaluate based on project end.)
    *   Let's assume the project ends after all activities are done. The last activity is 4.
    *   **4:** LF = 12, LS = 12 - 5 = 7
    *   **2:** LF = LS(4) = 7, LS = 7 - 4 = 3
    *   **3:** LF = min(LS(4), LS(5)). We need LS for 5.
        *   **5:** LF = 12 (assuming project end is 12, and no subsequent task for 5), LS = 12 - 3 = 9.
        *   *Correction:* If 4 and 5 are the only activities that *could* be the end, then we need to consider their impact. The project finishes at 12.
        *   Let's trace backward from the project completion time (12):
            *   **4:** LF = 12, LS = 12 - 5 = 7
            *   **2:** LF = LS(4) = 7, LS = 7 - 4 = 3
            *   **3:** LF = min(LS(4), LS(5)). We need to consider all paths to the end. Path through 4 is dependent on LS(4)=7. Path through 5, if it exists as a final path, would be LF=12.
            *   Let's assume the project formally ends when *all* activities are completed. The latest EF is 12 for activity 4.
            *   So, LF for 4 = 12, LS = 7.
            *   LF for 2 = LS(4) = 7, LS = 3.
            *   LF for 5 = 12 (assuming it finishes at project end), LS = 12 - 3 = 9.
            *   LF for 3 = min(LS(4), LS(5)) = min(7, 9) = 7. LS = 7 - 2 = 5.
            *   LF for 1 = min(LS(2), LS(3)) = min(3, 5) = 3. LS = 3 - 3 = 0.

**Slack Calculation:**

| Activity | ES | EF | LS | LF | Slack (LS-ES or LF-EF) |
| :------- | :- | :- | :- | :- | :--------------------- |
| 1        | 0  | 3  | 0  | 3  | 0                      |
| 2        | 3  | 7  | 3  | 7  | 0                      |
| 3        | 3  | 5  | 5  | 7  | 2                      |
| 4        | 7  | 12 | 7  | 12 | 0                      |
| 5        | 5  | 8  | 9  | 12 | 4 (12-8 or 9-5)        |

**Critical Path:** Activities with zero slack: **1 -> 2 -> 4**.

---

**Question 2:**
A project activity has the following time estimates: Optimistic (t_o) = 5 days, Most Likely (t_m) = 8 days, Pessimistic (t_p) = 20 days.
Calculate the expected activity duration and the activity's variance.

**Answer 2:**
*   **Expected Duration ($t_e$):**
    $t_e = (t_o + 4t_m + t_p) / 6$
    $t_e = (5 + 4*8 + 20) / 6$
    $t_e = (5 + 32 + 20) / 6$
    $t_e = 57 / 6 = 9.5$ days

*   **Variance ($\sigma^2$):**
    $\sigma^2 = ((t_p - t_o) / 6)^2$
    $\sigma^2 = ((20 - 5) / 6)^2$
    $\sigma^2 = (15 / 6)^2$
    $\sigma^2 = (2.5)^2 = 6.25$

---

### 7. Key Takeaways and Important Points to Remember

*   **Network diagrams (AON and AOA)** are crucial for visualizing project sequences and dependencies. AON is generally preferred due to its clarity and avoidance of dummy activities.
*   **CPM** is deterministic and focuses on finding the **critical path**, which highlights activities that directly impact project completion time.
*   **Slack (Float)** indicates the flexibility of an activity; zero slack means it's on the critical path.
*   **PERT** is probabilistic, used when activity durations are uncertain. It estimates **expected duration** and assesses the **probability** of project completion.
*   The accuracy of CPM/PERT analyses depends heavily on the accuracy of **activity duration estimates**.
*   Both techniques have limitations, particularly regarding **resource constraints** and the assumption of activity independence.
*   Understanding these techniques allows engineers to effectively plan, schedule, monitor, and control projects, contributing to successful project outcomes.
*   **CO4 (K3)** is directly addressed by practicing these techniques. **CO1 (K4)** is addressed by critically evaluating their application and limitations.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
