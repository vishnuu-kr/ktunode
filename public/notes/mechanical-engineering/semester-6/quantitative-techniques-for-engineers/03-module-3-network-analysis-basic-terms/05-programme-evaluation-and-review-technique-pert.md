---
title: "Programme Evaluation and Review Technique (PERT)"
subject: "QUANTITATIVE TECHNIQUES FOR ENGINEERS"
module: "Module 3: Network analysis – Basic terms"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1751d0cf4804463a79"
status: "completed"
scrapedAt: "2026-05-20T18:07:36.775Z"
---
# QUANTITATIVE TECHNIQUES FOR ENGINEERS

## Module 3: Network Analysis – Basic Terms

### Topic: Programme Evaluation and Review Technique (PERT)

This topic introduces the Programme Evaluation and Review Technique (PERT), a project management tool used to plan, schedule, and manage complex projects. It focuses on handling uncertainty in activity durations.

---

### Learning Outcomes:

By the end of this topic, you will be able to:

*   Understand the fundamental concepts of PERT.
*   Identify the key components of a PERT network.
*   Calculate expected activity durations and variances using probability distributions.
*   Determine the critical path in a PERT network and its implications.
*   Estimate project completion times and probabilities.
*   Understand the role of PERT in project planning and risk management.

---

### Course Outcomes Alignment:

*   **CO3: To sequence and schedule jobs and projects (Knowledge Level: K3)**
    *   PERT directly addresses the sequencing and scheduling of project activities. This module helps in determining the order of activities, their durations, and overall project timelines, which is crucial for effective project management.

---

### Introduction to PERT

PERT (Programme Evaluation and Review Technique) is a statistical tool used in project management for analyzing and representing the tasks involved in completing a given project. It is a network analysis technique that allows for the estimation of project duration when there is considerable uncertainty in the individual activity durations.

**Key Idea:** Unlike Critical Path Method (CPM), which assumes deterministic activity durations, PERT acknowledges that activity durations can vary. It uses a probabilistic approach to estimate these durations and the overall project completion time.

**Origin:** PERT was developed in the late 1950s by the U.S. Navy's Special Projects Office for the Polaris missile program. It was designed to manage the complex development and deployment of this advanced weapons system.

---

### Key Concepts and Definitions

#### 1. Activity

*   An activity is a task or operation that must be performed as part of the project.
*   Activities consume time and resources.
*   Examples: "Design engine", "Manufacture prototype", "Test software".

#### 2. Event

*   An event is a milestone or a point in time that signifies the completion of one or more activities and the potential start of others.
*   Events do not consume time or resources.
*   Examples: "Design completed", "Prototype ready", "Software tested".
*   Events are typically represented by nodes (circles or rectangles) in a PERT network.

#### 3. Network Diagram (Activity-on-Node or Activity-on-Arrow)

*   A graphical representation of the project, showing the sequence of activities and events.
*   **Activity-on-Arrow (AOA):** Activities are represented by arrows, and events are represented by nodes. (Less common in modern software but fundamental to understanding).
*   **Activity-on-Node (AON) / Precedence Diagramming Method (PDM):** Activities are represented by nodes, and arrows show the dependencies between them. This is more commonly used in project management software.
*   **Dependencies:** The relationships between activities, indicating that one activity must be completed before another can begin (e.g., Finish-to-Start).

#### 4. Duration

*   The amount of time required to complete an activity.
*   In PERT, activity durations are treated as random variables.

#### 5. Expected Duration ($t_e$)

*   The weighted average of the three possible activity duration estimates (optimistic, most likely, pessimistic).
*   Formula: $t_e = \frac{t_o + 4t_m + t_p}{6}$
    *   $t_o$: **Optimistic Time** - The shortest possible time an activity can be completed. Assumes ideal conditions.
    *   $t_m$: **Most Likely Time** - The time an activity will take under normal conditions.
    *   $t_p$: **Pessimistic Time** - The longest possible time an activity can take. Assumes adverse conditions.

#### 6. Variance ($\sigma^2$)

*   A measure of the dispersion or variability of the activity duration.
*   Formula: $\sigma^2 = \left(\frac{t_p - t_o}{6}\right)^2$
    *   This formula is derived from the assumption that activity durations follow a Beta distribution.

#### 7. Standard Deviation ($\sigma$)

*   The square root of the variance.
*   Formula: $\sigma = \frac{t_p - t_o}{6}$
    *   This is also the standard deviation of the Beta distribution.

#### 8. Critical Path

*   The sequence of activities that determines the shortest possible total time to complete the project.
*   Activities on the critical path have **zero float** (or slack).
*   Any delay in an activity on the critical path will delay the entire project.

#### 9. Earliest Finish Time ($EF$)

*   The earliest possible time an activity can be completed.
*   Calculated by summing the expected durations of activities along the longest path from the project start to the activity's completion.

#### 10. Latest Finish Time ($LF$)

*   The latest possible time an activity can be completed without delaying the project completion date.
*   Calculated by working backward from the project's latest completion time.

#### 11. Float (or Slack)

*   The amount of time an activity can be delayed without delaying the project completion date.
*   **Total Float ($TF$):** $TF = LF - EF$ or $TF = LT - ET$ (using Latest Start and Earliest Start)
*   **Free Float (FF):** The amount of time an activity can be delayed without delaying the earliest start of any immediately following activity.

#### 12. Project Completion Time Probability

*   PERT allows estimation of the probability that the project will be completed by a certain date.
*   This is typically done using the normal distribution, assuming the total project duration follows a normal distribution (a common approximation due to the Central Limit Theorem).
*   **Project Mean Completion Time:** Sum of the expected durations of activities on the critical path.
*   **Project Variance:** Sum of the variances of the activities on the critical path.
*   **Project Standard Deviation:** Square root of the project variance.
*   **Z-score:** Used to find the probability associated with a particular completion time. $Z = \frac{\text{Target Completion Time} - \text{Project Mean Completion Time}}{\text{Project Standard Deviation}}$

---

### PERT Calculations and Steps

**Step 1: Identify Activities and Events**
List all activities required for the project and the events that mark their start and end.

**Step 2: Determine Activity Dependencies**
Establish the logical sequence of activities. Which activity must finish before another can start?

**Step 3: Estimate Activity Durations (Optimistic, Most Likely, Pessimistic)**
For each activity, obtain the three time estimates ($t_o, t_m, t_p$). This is a crucial step requiring expert judgment.

**Step 4: Calculate Expected Duration ($t_e$) and Variance ($\sigma^2$) for Each Activity**
Use the formulas:
*   $t_e = \frac{t_o + 4t_m + t_p}{6}$
*   $\sigma^2 = \left(\frac{t_p - t_o}{6}\right)^2$

**Step 5: Construct the PERT Network Diagram**
Represent activities and their dependencies graphically. Typically, activities are nodes, and dependencies are arrows.

**Step 6: Calculate Earliest Start (ES) and Earliest Finish (EF) Times**
*   **Forward Pass:**
    *   For the first activity, $ES = 0$.
    *   $EF = ES + t_e$.
    *   For subsequent activities, the $ES$ is the maximum $EF$ of all preceding activities.
    *   The project's earliest completion time is the maximum $EF$ of the last activity.

**Step 7: Calculate Latest Start (LS) and Latest Finish (LF) Times**
*   **Backward Pass:**
    *   Set the $LF$ of the last activity to its $EF$ (or a specified project deadline).
    *   $LS = LF - t_e$.
    *   For preceding activities, the $LF$ is the minimum $LS$ of all succeeding activities.

**Step 8: Calculate Float (Slack) for Each Activity**
*   $Float = LF - EF$ (or $LS - ES$).

**Step 9: Identify the Critical Path**
*   The critical path consists of all activities with zero float.

**Step 10: Calculate Project Completion Probability (Optional but key PERT feature)**
*   Sum the variances of activities on the critical path to get the project variance ($\sigma^2_{project}$).
*   Calculate the project standard deviation ($\sigma_{project} = \sqrt{\sigma^2_{project}}$).
*   Use the Z-score formula to find the probability of completing the project by a target date.

---

### Example: PERT Calculation

Let's consider a simple project with three activities: A, B, and C.

| Activity | $t_o$ (days) | $t_m$ (days) | $t_p$ (days) |
| :------- | :----------- | :----------- | :----------- |
| A        | 2            | 4            | 6            |
| B        | 3            | 5            | 7            |
| C        | 4            | 7            | 10           |

Assume:
*   Activity A must be completed before B can start.
*   Activity A must be completed before C can start.
*   B and C are parallel and must both be completed before the project finishes.

**Step 1 & 2:** Activities identified, dependencies are A -> B and A -> C.

**Step 3:** Durations provided.

**Step 4: Calculate $t_e$ and $\sigma^2$**

*   **Activity A:**
    *   $t_e(A) = (2 + 4*4 + 6) / 6 = (2 + 16 + 6) / 6 = 24 / 6 = 4$ days
    *   $\sigma^2(A) = ((6 - 2) / 6)^2 = (4 / 6)^2 = (2/3)^2 = 4/9 \approx 0.44$

*   **Activity B:**
    *   $t_e(B) = (3 + 4*5 + 7) / 6 = (3 + 20 + 7) / 6 = 30 / 6 = 5$ days
    *   $\sigma^2(B) = ((7 - 3) / 6)^2 = (4 / 6)^2 = (2/3)^2 = 4/9 \approx 0.44$

*   **Activity C:**
    *   $t_e(C) = (4 + 4*7 + 10) / 6 = (4 + 28 + 10) / 6 = 42 / 6 = 7$ days
    *   $\sigma^2(C) = ((10 - 4) / 6)^2 = (6 / 6)^2 = 1^2 = 1$

**Step 5: Construct Network Diagram**

```
      [A] --(4 days)--> [B] --(5 days)--> [END]
       |                                    ^
       |                                    |
       +--(4 days)---------------------> [C] --(7 days)-->
```

*Note: In AON diagrams, nodes represent activities.*

**Step 6: Forward Pass (Calculate ES and EF)**

*   **Activity A:**
    *   $ES(A) = 0$
    *   $EF(A) = ES(A) + t_e(A) = 0 + 4 = 4$ days

*   **Activity B:** (Depends on A)
    *   $ES(B) = EF(A) = 4$ days
    *   $EF(B) = ES(B) + t_e(B) = 4 + 5 = 9$ days

*   **Activity C:** (Depends on A)
    *   $ES(C) = EF(A) = 4$ days
    *   $EF(C) = ES(C) + t_e(C) = 4 + 7 = 11$ days

*   **Project Earliest Completion Time:** Max($EF(B)$, $EF(C)$) = Max(9, 11) = 11 days.

**Step 7: Backward Pass (Calculate LF and LS)**
Assume the project deadline is the earliest completion time, so $LF_{project} = 11$.

*   **Activity B:** (Precedes END)
    *   $LF(B) = EF_{project} = 11$ days
    *   $LS(B) = LF(B) - t_e(B) = 11 - 5 = 6$ days

*   **Activity C:** (Precedes END)
    *   $LF(C) = EF_{project} = 11$ days
    *   $LS(C) = LF(C) - t_e(C) = 11 - 7 = 4$ days

*   **Activity A:** (Precedes B and C)
    *   $LF(A) = Min(LS(B), LS(C)) = Min(6, 4) = 4$ days
    *   $LS(A) = LF(A) - t_e(A) = 4 - 4 = 0$ days

**Step 8: Calculate Float**

*   **Activity A:**
    *   $Float(A) = LF(A) - EF(A) = 4 - 4 = 0$ days
    *   $Float(A) = LS(A) - ES(A) = 0 - 0 = 0$ days

*   **Activity B:**
    *   $Float(B) = LF(B) - EF(B) = 11 - 9 = 2$ days
    *   $Float(B) = LS(B) - ES(B) = 6 - 4 = 2$ days

*   **Activity C:**
    *   $Float(C) = LF(C) - EF(C) = 11 - 11 = 0$ days
    *   $Float(C) = LS(C) - ES(C) = 4 - 4 = 0$ days

**Step 9: Identify Critical Path**
Activities with zero float are A and C.
The critical path is **A -> C**. The total expected duration is $t_e(A) + t_e(C) = 4 + 7 = 11$ days.

**Step 10: Calculate Project Completion Probability**

*   Critical path activities are A and C.
*   Project Mean Completion Time = $t_e(A) + t_e(C) = 4 + 7 = 11$ days.
*   Project Variance = $\sigma^2(A) + \sigma^2(C) = 4/9 + 1 = 13/9 \approx 1.44$.
*   Project Standard Deviation = $\sigma_{project} = \sqrt{13/9} = \frac{\sqrt{13}}{3} \approx 1.20$ days.

**Question:** What is the probability that the project will be completed within 12 days?

*   Target Completion Time = 12 days.
*   Project Mean Completion Time = 11 days.
*   Project Standard Deviation = 1.20 days.

*   Calculate Z-score:
    $Z = \frac{12 - 11}{1.20} = \frac{1}{1.20} \approx 0.833$

*   Using a standard normal distribution table (or calculator), the probability $P(Z \le 0.833)$ is approximately 0.7977.

*   **Answer:** The probability that the project will be completed within 12 days is approximately 79.77%.

---

### PERT vs. CPM

| Feature         | PERT (Programme Evaluation and Review Technique) | CPM (Critical Path Method)             |
| :-------------- | :--------------------------------------------- | :------------------------------------- |
| **Durations**   | Probabilistic (3 estimates: $t_o, t_m, t_p$)   | Deterministic (single estimate)        |
| **Focus**       | Managing uncertainty, probability analysis     | Minimizing project time, critical path |
| **Applications**| R&D projects, projects with high uncertainty   | Construction, manufacturing, routine projects |
| **Calculations**| Expected duration, variance, standard deviation| Earliest/Latest times, float           |
| **Complexity**  | More complex due to statistical calculations  | Simpler calculations                   |
| **Key Output**  | Critical path, project duration distribution   | Critical path, project completion time |

---

### Advantages of PERT

*   **Handles Uncertainty:** Effectively manages projects where activity durations are not precisely known.
*   **Probability Estimates:** Provides an understanding of the likelihood of completing the project by a specific date.
*   **Identifies Critical Activities:** Clearly shows which activities are critical and require close monitoring.
*   **Resource Allocation:** Helps in allocating resources to critical activities to ensure timely completion.
*   **Communication Tool:** Provides a visual representation of the project plan, facilitating communication among stakeholders.
*   **Project Monitoring:** Allows for tracking progress and identifying potential delays early on.

---

### Disadvantages of PERT

*   **Subjectivity of Estimates:** The accuracy of PERT depends heavily on the quality of the time estimates ($t_o, t_m, t_p$), which can be subjective.
*   **Complexity:** Can be more complex to understand and implement compared to CPM, especially for smaller projects.
*   **Assumption of Beta Distribution:** The formulas for $t_e$ and $\sigma^2$ assume activity durations follow a Beta distribution, which may not always be accurate.
*   **Independence Assumption:** Assumes activity durations are independent, which might not be true in real-world scenarios.
*   **Ignores Resource Constraints:** Basic PERT does not explicitly consider resource limitations, which can affect activity scheduling.

---

### Important Points to Remember

*   **Differentiate PERT from CPM:** PERT uses probabilistic durations, while CPM uses deterministic durations.
*   **The 3 Time Estimates:** $t_o$ (optimistic), $t_m$ (most likely), $t_p$ (pessimistic) are crucial for PERT.
*   **Expected Duration Formula:** $t_e = \frac{t_o + 4t_m + t_p}{6}$
*   **Variance Formula:** $\sigma^2 = \left(\frac{t_p - t_o}{6}\right)^2$
*   **Critical Path:** Activities with zero float. Delays on the critical path delay the entire project.
*   **Forward Pass:** Determines earliest start and finish times.
*   **Backward Pass:** Determines latest start and finish times.
*   **Float:** The flexibility in an activity's schedule.
*   **Project Probability:** Use Z-scores for estimating the probability of completing the project by a certain time.
*   **Textbook References:**
    *   Paneerselvam R. (PHI, Third edition, 2023) provides detailed explanations and examples of PERT and its application in project management.
    *   Taha (Pearson, Tenth edition, 2019) offers a comprehensive treatment of network analysis techniques, including PERT.
    *   Hillier & Lieberman (McGraw Hill, Tenth edition, 2017) also covers PERT as a key network analysis method.

---

### Practice Questions/Exercises

**Question 1:**
For a particular activity in a PERT network, the optimistic time ($t_o$) is 3 days, the most likely time ($t_m$) is 5 days, and the pessimistic time ($t_p$) is 15 days.
a) Calculate the expected duration ($t_e$) of the activity.
b) Calculate the variance ($\sigma^2$) of the activity.
c) Calculate the standard deviation ($\sigma$) of the activity.

**Question 2:**
Consider the following project activities:

| Activity | Predecessors | $t_o$ | $t_m$ | $t_p$ |
| :------- | :----------- | :---- | :---- | :---- |
| A        | -            | 1     | 2     | 3     |
| B        | A            | 2     | 4     | 6     |
| C        | A            | 3     | 3     | 9     |
| D        | B            | 1     | 2     | 3     |
| E        | C            | 2     | 5     | 8     |
| F        | D, E         | 1     | 3     | 5     |

a) Calculate the expected duration ($t_e$) for each activity.
b) Construct the PERT network diagram.
c) Determine the critical path and the project's expected completion time.
d) Calculate the variance for each activity and the total variance for the critical path.
e) What is the probability that the project will be completed within 15 days?

---

### Answers

**Answer 1:**
a) $t_e = \frac{t_o + 4t_m + t_p}{6} = \frac{3 + 4(5) + 15}{6} = \frac{3 + 20 + 15}{6} = \frac{38}{6} \approx 6.33$ days.
b) $\sigma^2 = \left(\frac{t_p - t_o}{6}\right)^2 = \left(\frac{15 - 3}{6}\right)^2 = \left(\frac{12}{6}\right)^2 = 2^2 = 4$.
c) $\sigma = \sqrt{\sigma^2} = \sqrt{4} = 2$ days.

**Answer 2:**

a) **Expected Durations ($t_e$):**
*   A: $(1 + 4*2 + 3) / 6 = 12 / 6 = 2$ days
*   B: $(2 + 4*4 + 6) / 6 = 24 / 6 = 4$ days
*   C: $(3 + 4*3 + 9) / 6 = 24 / 6 = 4$ days
*   D: $(1 + 4*2 + 3) / 6 = 12 / 6 = 2$ days
*   E: $(2 + 4*5 + 8) / 6 = 30 / 6 = 5$ days
*   F: $(1 + 4*3 + 5) / 6 = 18 / 6 = 3$ days

b) **PERT Network Diagram (AON):**

```
    [A](2) --> [B](4) --> [D](2) --> [F](3)
     |         ^         ^         ^
     |         |         |         |
     +-------> [C](4) --> [E](5) ----+
```
(Numbers in parentheses are expected durations $t_e$)

c) **Critical Path and Project Completion Time:**

*   **Forward Pass (ES, EF):**
    *   A: ES=0, EF=0+2=2
    *   B: ES=EF(A)=2, EF=2+4=6
    *   C: ES=EF(A)=2, EF=2+4=6
    *   D: ES=EF(B)=6, EF=6+2=8
    *   E: ES=EF(C)=6, EF=6+5=11
    *   F: ES=max(EF(D), EF(E)) = max(8, 11) = 11, EF=11+3=14

*   **Project Expected Completion Time = 14 days.**

*   **Backward Pass (LS, LF):** (Assuming LF_project = 14)
    *   F: LF=14, LS=14-3=11
    *   D: LF=LS(F)=11, LS=11-2=9
    *   E: LF=LS(F)=11, LS=11-5=6
    *   B: LF=LS(D)=9, LS=9-4=5
    *   C: LF=LS(E)=6, LS=6-4=2
    *   A: LF=min(LS(B), LS(C)) = min(5, 2) = 2, LS=2-2=0

*   **Float:**
    *   A: Float = LS(A)-ES(A) = 0-0 = 0
    *   B: Float = LS(B)-ES(B) = 5-2 = 3
    *   C: Float = LS(C)-ES(C) = 2-2 = 0
    *   D: Float = LS(D)-ES(D) = 9-6 = 3
    *   E: Float = LS(E)-ES(E) = 6-6 = 0
    *   F: Float = LS(F)-ES(F) = 11-11 = 0

*   **Critical Path:** Activities with zero float are A, C, E, F.
    **Critical Path: A -> C -> E -> F**

d) **Variance for each activity and total variance:**

*   **Variance ($\sigma^2$) Calculation:** $\sigma^2 = \left(\frac{t_p - t_o}{6}\right)^2$
    *   A: $((3-1)/6)^2 = (2/6)^2 = (1/3)^2 = 1/9$
    *   B: $((6-2)/6)^2 = (4/6)^2 = (2/3)^2 = 4/9$
    *   C: $((9-3)/6)^2 = (6/6)^2 = 1^2 = 1$
    *   D: $((3-1)/6)^2 = (2/6)^2 = (1/3)^2 = 1/9$
    *   E: $((8-2)/6)^2 = (6/6)^2 = 1^2 = 1$
    *   F: $((5-1)/6)^2 = (4/6)^2 = (2/3)^2 = 4/9$

*   **Total Variance for Critical Path (A, C, E, F):**
    $\sigma^2_{project} = \sigma^2(A) + \sigma^2(C) + \sigma^2(E) + \sigma^2(F)$
    $\sigma^2_{project} = 1/9 + 1 + 1 + 4/9 = 2 + 5/9 = 18/9 + 5/9 = 23/9 \approx 2.56$

e) **Probability of completion within 15 days:**
*   Project Mean Completion Time = 14 days.
*   Project Standard Deviation = $\sigma_{project} = \sqrt{23/9} = \frac{\sqrt{23}}{3} \approx 1.60$ days.
*   Target Completion Time = 15 days.

*   $Z = \frac{\text{Target Time} - \text{Mean Time}}{\text{Standard Deviation}} = \frac{15 - 14}{1.60} = \frac{1}{1.60} \approx 0.625$

*   Using a Z-table, $P(Z \le 0.625) \approx 0.734$.

*   **Answer:** The probability that the project will be completed within 15 days is approximately 73.4%.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
