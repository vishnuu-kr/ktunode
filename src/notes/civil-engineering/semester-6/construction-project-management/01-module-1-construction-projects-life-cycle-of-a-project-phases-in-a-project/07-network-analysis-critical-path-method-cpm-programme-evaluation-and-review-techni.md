---
title: "Network analysis – Critical Path Method (CPM), Programme Evaluation and Review Technique (PERT) – concepts and problems."
subject: "CONSTRUCTION PROJECT MANAGEMENT"
module: "Module 1: Construction projects, life cycle of a project – phases in a project."
branch: "Civil Engineering"
semester: 6
topicId: "689f15ce56b5e963ba811240"
status: "completed"
scrapedAt: "2026-05-20T18:52:34.279Z"
---
# CONSTRUCTION PROJECT MANAGEMENT - Module 1: Construction Projects, Life Cycle, and Network Analysis

## Topic: Network Analysis – Critical Path Method (CPM) & Programme Evaluation and Review Technique (PERT)

---

### 1. Introduction to Network Analysis

Network analysis is a powerful technique used in project management to plan, schedule, and control complex projects. It visually represents the tasks of a project and their interdependencies, allowing managers to identify critical activities, potential bottlenecks, and the overall project duration.

**Key Concepts:**

*   **Activity:** A specific task or action that must be performed within a project.
*   **Event:** A point in time that marks the completion of one or more activities and the start of others.
*   **Predecessor:** An activity that must be completed before another activity can begin.
*   **Successor:** An activity that can only begin after a predecessor activity is completed.
*   **Network Diagram:** A graphical representation of project activities and their relationships.

---

### 2. Critical Path Method (CPM)

CPM is a deterministic project scheduling technique that focuses on identifying the sequence of activities that determine the shortest possible project duration. It assumes that the duration of each activity is known and fixed.

**Learning Outcomes Covered:**

*   Understanding the concept of CPM.
*   Identifying critical activities and the critical path.
*   Calculating project duration and float.
*   Analyzing the impact of delays on project completion.

**Key Concepts and Definitions:**

*   **Activity List:** A comprehensive list of all tasks required to complete the project.
*   **Activity Durations:** The estimated time required to complete each activity.
*   **Precedence Relationships:** The logical sequence in which activities must be performed.

**Steps in CPM:**

1.  **Define Activities:** Break down the project into a series of manageable activities.
2.  **Sequence Activities:** Determine the logical order of these activities, identifying predecessors and successors.
3.  **Develop the Network Diagram:** Visually represent the activities and their relationships using a graphical diagram (e.g., Activity-on-Node or Activity-on-Arrow).
4.  **Estimate Activity Durations:** Assign a specific, estimated duration to each activity.
5.  **Identify the Critical Path:** The longest path through the network diagram, which determines the minimum project completion time. Any delay in an activity on the critical path will delay the entire project.
6.  **Calculate Float (Slack):** The amount of time an activity can be delayed without delaying the project completion date.
    *   **Early Start (ES):** The earliest possible time an activity can begin.
    *   **Early Finish (EF):** The earliest possible time an activity can be completed (ES + Duration).
    *   **Late Start (LS):** The latest possible time an activity can begin without delaying the project.
    *   **Late Finish (LF):** The latest possible time an activity can be completed without delaying the project (LS + Duration).
    *   **Total Float (TF):** The total amount of time an activity can be delayed (LF - EF or LS - ES).
    *   **Free Float (FF):** The amount of time an activity can be delayed without delaying the start of its immediate successor.

**Calculations:**

*   **Forward Pass (to calculate ES and EF):** Start from the beginning of the project and move forward, summing durations. ES of the first activity is 0. EF = ES + Duration. ES of a successor activity is the maximum EF of its predecessors.
*   **Backward Pass (to calculate LS and LF):** Start from the end of the project (the project's EF) and move backward, subtracting durations. LF of the last activity is the project's EF. LS = LF - Duration. LF of a predecessor activity is the minimum LS of its successors.

**Example:**

Consider a simple construction project with the following activities:

| Activity | Description          | Predecessors | Duration (Days) |
| :------- | :------------------- | :----------- | :-------------- |
| A        | Site Preparation     | -            | 5               |
| B        | Foundation           | A            | 10              |
| C        | Framing              | B            | 15              |
| D        | Roofing              | C            | 5               |
| E        | Electrical           | C            | 8               |
| F        | Plumbing             | C            | 7               |
| G        | Interior Finishing   | D, E, F      | 12              |

**Network Diagram (Simplified):**

```
(Start) --> A (5) --> B (10) --> C (15) --> D (5) --+
                                                 |
                                                 +--> E (8) --+
                                                 |           |
                                                 +--> F (7) --+
                                                               |
                                                               V
                                                               G (12) --> (End)
```

**Forward Pass:**

*   A: ES=0, EF=5
*   B: ES=5, EF=15
*   C: ES=15, EF=30
*   D: ES=30, EF=35
*   E: ES=30, EF=38
*   F: ES=30, EF=37
*   G: ES=max(35, 38, 37) = 38, EF=38+12 = 50

**Project Duration = 50 Days**

**Backward Pass:**

*   G: LF=50, LS=50-12=38
*   D: LF=LS of G = 38, LS=38-5=33
*   E: LF=LS of G = 38, LS=38-8=30
*   F: LF=LS of G = 38, LS=38-7=31
*   C: LF=min(LS of D, LS of E, LS of F) = min(33, 30, 31) = 30, LS=30-15=15
*   B: LF=LS of C = 15, LS=15-10=5
*   A: LF=LS of B = 5, LS=5-5=0

**Calculating Total Float (TF = LF - EF):**

*   A: TF = 5 - 5 = 0
*   B: TF = 15 - 15 = 0
*   C: TF = 30 - 30 = 0
*   D: TF = 38 - 35 = 3
*   E: TF = 38 - 38 = 0
*   F: TF = 38 - 37 = 1
*   G: TF = 50 - 50 = 0

**Critical Path:** Activities with zero float are on the critical path.
**Critical Path: A -> B -> C -> E -> G**

**Important Points to Remember:**

*   The critical path is the longest path in the project network.
*   Any delay in a critical activity directly impacts the project completion date.
*   Float allows for flexibility in scheduling non-critical activities.
*   CPM is effective for projects with well-defined activities and durations.

---

### 3. Programme Evaluation and Review Technique (PERT)

PERT is a probabilistic project scheduling technique used when activity durations are uncertain. It uses three-time estimates for each activity: optimistic, most likely, and pessimistic.

**Learning Outcomes Covered:**

*   Understanding the concept of PERT.
*   Calculating expected activity durations and variances.
*   Estimating project completion probabilities.
*   Comparing PERT with CPM.

**Key Concepts and Definitions:**

*   **Optimistic Time (O):** The shortest possible time an activity can be completed, assuming ideal conditions.
*   **Most Likely Time (M):** The most realistic estimate of the time required to complete an activity.
*   **Pessimistic Time (P):** The longest possible time an activity can take, assuming all possible setbacks.
*   **Expected Activity Duration (Te):** The average estimated time for an activity, calculated using a weighted average.
    *   **Formula:** $Te = (O + 4M + P) / 6$
*   **Variance (σ²):** A measure of the uncertainty or variability in the activity's duration.
    *   **Formula:** $\sigma^2 = ((P - O) / 6)^2$
*   **Standard Deviation (σ):** The square root of the variance. It indicates the spread of possible durations around the expected duration.
*   **Project Variance:** The sum of the variances of all activities on the critical path.
*   **Project Standard Deviation:** The square root of the project variance.
*   **Z-score:** A statistical measure used to determine the probability of completing the project by a certain date.
    *   **Formula:** $Z = (TD - TP) / \sigma_p$, where TD is the target date and TP is the project's expected duration.

**Steps in PERT:**

1.  **Define Activities and Precedence:** Similar to CPM.
2.  **Estimate Three Time Durations:** For each activity, estimate O, M, and P.
3.  **Calculate Expected Duration (Te) and Variance (σ²):** Apply the formulas for Te and σ².
4.  **Construct the Network Diagram:** Same as CPM.
5.  **Determine the Critical Path and Expected Project Duration:** Use the calculated Te values to perform forward and backward passes, similar to CPM. The longest path using Te is the critical path.
6.  **Calculate Project Variance and Standard Deviation:** Sum the variances of activities on the critical path and take the square root.
7.  **Determine Probability of Completion:** Use the Z-score and standard normal distribution tables to find the probability of completing the project by a target date.

**Example:**

Consider the following PERT data for a few activities:

| Activity | Optimistic (O) | Most Likely (M) | Pessimistic (P) |
| :------- | :------------- | :-------------- | :-------------- |
| A        | 3              | 5               | 9               |
| B        | 7              | 10              | 17              |
| C        | 12             | 15              | 24              |

**Calculations:**

*   **Activity A:**
    *   $Te_A = (3 + 4*5 + 9) / 6 = (3 + 20 + 9) / 6 = 32 / 6 = 5.33$ days
    *   $\sigma^2_A = ((9 - 3) / 6)^2 = (6 / 6)^2 = 1^2 = 1$
*   **Activity B:**
    *   $Te_B = (7 + 4*10 + 17) / 6 = (7 + 40 + 17) / 6 = 64 / 6 = 10.67$ days
    *   $\sigma^2_B = ((17 - 7) / 6)^2 = (10 / 6)^2 = (1.67)^2 = 2.78$
*   **Activity C:**
    *   $Te_C = (12 + 4*15 + 24) / 6 = (12 + 60 + 24) / 6 = 96 / 6 = 16$ days
    *   $\sigma^2_C = ((24 - 12) / 6)^2 = (12 / 6)^2 = 2^2 = 4$

Assume A is a predecessor to B, and B is a predecessor to C, and this sequence forms the critical path.

*   **Project Expected Duration (TP):** $Te_A + Te_B + Te_C = 5.33 + 10.67 + 16 = 32$ days
*   **Project Variance (σ²p):** $\sigma^2_A + \sigma^2_B + \sigma^2_C = 1 + 2.78 + 4 = 7.78$
*   **Project Standard Deviation (σp):** $\sqrt{7.78} \approx 2.8$ days

**Probability Calculation:**

If the target completion date (TD) is 35 days:

*   $Z = (TD - TP) / \sigma_p = (35 - 32) / 2.8 = 3 / 2.8 \approx 1.07$

Using a standard normal distribution table, a Z-score of 1.07 corresponds to a probability of approximately 0.8577 (or 85.77%). This means there is about an 85.77% chance of completing the project within 35 days.

**Comparison of CPM and PERT:**

| Feature         | CPM (Critical Path Method)                  | PERT (Program Evaluation and Review Technique) |
| :-------------- | :------------------------------------------ | :--------------------------------------------- |
| **Time Estimates** | Deterministic (single, fixed duration)      | Probabilistic (three estimates: O, M, P)       |
| **Activity Duration** | Known and certain                           | Uncertain and variable                         |
| **Focus**       | Identifying the critical path and minimum duration | Estimating project duration and probabilities |
| **Complexity**  | Simpler calculations                        | More complex calculations                      |
| **Application** | Projects with well-defined tasks and durations | Projects with R&D, innovation, or uncertainty |
| **Output**      | Critical path, float, project duration      | Expected duration, variance, probabilities     |

**Important Points to Remember:**

*   PERT accounts for uncertainty in activity durations.
*   The expected duration is a weighted average.
*   Variance helps measure the risk or uncertainty of the project.
*   PERT is useful when making decisions about project timelines and resource allocation under uncertainty.

---

### 4. Practice Questions & Exercises

**Question 1 (CPM):**

A construction project has the following activities, their durations, and predecessor relationships:

| Activity | Description        | Predecessors | Duration (Days) |
| :------- | :----------------- | :----------- | :-------------- |
| 1        | Design             | -            | 7               |
| 2        | Permits            | 1            | 5               |
| 3        | Excavation         | 2            | 8               |
| 4        | Foundation         | 3            | 12              |
| 5        | Framing            | 4            | 15              |
| 6        | Electrical & Plumbing | 5            | 10              |
| 7        | Interior Finishing | 6            | 14              |
| 8        | Landscaping        | 5            | 6               |
| 9        | Final Inspection   | 7, 8         | 3               |

a) Draw the Activity-on-Node (AON) network diagram for this project.
b) Perform a forward pass and backward pass to determine the Early Start (ES), Early Finish (EF), Late Start (LS), and Late Finish (LF) for each activity.
c) Calculate the Total Float (TF) for each activity.
d) Identify the critical path and the total project duration.

**Answer 1:**

**(a) Network Diagram (AON):**

```
(Start) --> 1 (7) --> 2 (5) --> 3 (8) --> 4 (12) --> 5 (15) --> 6 (10) --> 7 (14) --> 9 (3) --> (End)
                                          |                                     ^
                                          +------------------> 8 (6) -----------+
```

**(b) ES, EF, LS, LF Calculations:**

| Activity | Duration | ES | EF | LS | LF | TF |
| :------- | :------- | :- | :- | :- | :- | :- |
| 1        | 7        | 0  | 7  | 0  | 7  | 0  |
| 2        | 5        | 7  | 12 | 7  | 12 | 0  |
| 3        | 8        | 12 | 20 | 12 | 20 | 0  |
| 4        | 12       | 20 | 32 | 20 | 32 | 0  |
| 5        | 15       | 32 | 47 | 32 | 47 | 0  |
| 6        | 10       | 47 | 57 | 47 | 57 | 0  |
| 7        | 14       | 57 | 71 | 57 | 71 | 0  |
| 8        | 6        | 47 | 53 | 50 | 56 | 3  |
| 9        | 3        | 71 | 74 | 71 | 74 | 0  |

*   **Forward Pass:**
    *   1: ES=0, EF=7
    *   2: ES=7, EF=12
    *   3: ES=12, EF=20
    *   4: ES=20, EF=32
    *   5: ES=32, EF=47
    *   6: ES=47, EF=57
    *   7: ES=57, EF=71
    *   8: ES=47, EF=53
    *   9: ES=max(71, 53) = 71, EF=74
*   **Backward Pass:**
    *   9: LF=74, LS=71
    *   7: LF=71, LS=57
    *   8: LF=71, LS=65 (Corrected: LF of 8 is LS of 9 which is 71, not LS of 7) -> LF=71, LS=65
    *   6: LF=57, LS=47
    *   5: LF=min(LS of 6, LS of 8) = min(47, 65) = 47, LS=32
    *   4: LF=32, LS=20
    *   3: LF=20, LS=12
    *   2: LF=12, LS=7
    *   1: LF=7, LS=0

**(c) Total Float (TF = LF - EF):**

*   1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 71-53 = 18, 9: 0

**(d) Critical Path and Project Duration:**

*   **Critical Path:** 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 9
*   **Project Duration:** 74 Days

**Correction to Answer 1 (b) and (c):**

Revisiting the backward pass for Activity 8. The predecessor of 9 is both 7 and 8.
*   LS of 7 is 57.
*   LS of 8 is calculated as LF of 8 - Duration of 8.
*   LF of 8 is determined by the successor activity that has the earliest LS.
*   Successors of 8 are only activity 9. So, LF of 8 = LS of 9 = 71.
*   LS of 8 = LF of 8 - Duration of 8 = 71 - 6 = 65.

Let's re-calculate TF for Activity 8:
*   LF of 8 = 71
*   EF of 8 = 53
*   TF of 8 = 71 - 53 = 18.

This means Activity 8 can be delayed by 18 days without affecting the project completion. This is a significant amount of float.

**Let's re-evaluate the critical path with the corrected float.**

The activities with zero float are: 1, 2, 3, 4, 5, 6, 7, 9.
The critical path remains: **1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 9**
Project Duration: **74 Days**

---

**Question 2 (PERT):**

A project has a critical path consisting of three activities: X, Y, and Z. The time estimates for these activities are as follows:

| Activity | Optimistic (O) | Most Likely (M) | Pessimistic (P) |
| :------- | :------------- | :-------------- | :-------------- |
| X        | 4              | 6               | 14              |
| Y        | 8              | 10              | 16              |
| Z        | 5              | 7               | 19              |

a) Calculate the expected duration ($Te$) and variance ($\sigma^2$) for each activity.
b) Calculate the expected project duration ($TP$) and project variance ($\sigma^2p$).
c) Calculate the project standard deviation ($\sigma p$).
d) If the project manager wants to know the probability of completing the project within 30 days, what would it be?

**Answer 2:**

**(a) Expected Duration ($Te$) and Variance ($\sigma^2$):**

*   **Activity X:**
    *   $Te_X = (4 + 4*6 + 14) / 6 = (4 + 24 + 14) / 6 = 42 / 6 = 7$ days
    *   $\sigma^2_X = ((14 - 4) / 6)^2 = (10 / 6)^2 = (1.67)^2 = 2.78$
*   **Activity Y:**
    *   $Te_Y = (8 + 4*10 + 16) / 6 = (8 + 40 + 16) / 6 = 64 / 6 = 10.67$ days
    *   $\sigma^2_Y = ((16 - 8) / 6)^2 = (8 / 6)^2 = (1.33)^2 = 1.78$
*   **Activity Z:**
    *   $Te_Z = (5 + 4*7 + 19) / 6 = (5 + 28 + 19) / 6 = 52 / 6 = 8.67$ days
    *   $\sigma^2_Z = ((19 - 5) / 6)^2 = (14 / 6)^2 = (2.33)^2 = 5.43$

**(b) Expected Project Duration ($TP$) and Project Variance ($\sigma^2p$):**

*   $TP = Te_X + Te_Y + Te_Z = 7 + 10.67 + 8.67 = 26.34$ days
*   $\sigma^2p = \sigma^2_X + \sigma^2_Y + \sigma^2_Z = 2.78 + 1.78 + 5.43 = 10$

**(c) Project Standard Deviation ($\sigma p$):**

*   $\sigma p = \sqrt{10} \approx 3.16$ days

**(d) Probability of Completing within 30 Days:**

*   Target Date (TD) = 30 days
*   Expected Project Duration (TP) = 26.34 days
*   Project Standard Deviation ($\sigma p$) = 3.16 days

*   $Z = (TD - TP) / \sigma p = (30 - 26.34) / 3.16 = 3.66 / 3.16 \approx 1.16$

Using a standard normal distribution table, a Z-score of 1.16 corresponds to a probability of approximately **0.8770** or **87.70%**.

---

### 5. Summary and Key Takeaways

*   **Network analysis** is crucial for project planning and control, visualizing tasks and dependencies.
*   **CPM** provides a deterministic approach to identify the critical path and project duration, assuming fixed activity times. It is essential for understanding task criticality and float.
*   **PERT** is a probabilistic approach that accounts for uncertainty in activity durations, using three-time estimates (O, M, P). It allows for calculating expected durations, variances, and project completion probabilities.
*   The **critical path** is the longest path in the network diagram and dictates the minimum project duration.
*   **Float (slack)** is the amount of time an activity can be delayed without affecting the project completion date.
*   Understanding both CPM and PERT equips project managers to handle diverse project scenarios, from highly predictable to highly uncertain ones.

---
