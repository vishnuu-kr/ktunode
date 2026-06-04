---
title: "Time-Cost trade-off on construction projects – Classification of costs, compression of networks, cost optimization through the crashing of a network."
subject: "CONSTRUCTION PROJECT MANAGEMENT"
module: "Module 2: Handling resources on projects, resource constraints and conflicts, resource allocation and resource levelling. Concept only"
branch: "Civil Engineering"
semester: 6
topicId: "689f15ce56b5e963ba811244"
status: "completed"
scrapedAt: "2026-05-20T18:52:36.802Z"
---
# CONSTRUCTION PROJECT MANAGEMENT
## Module 2: Handling Resources on Projects, Resource Constraints and Conflicts, Resource Allocation and Resource Levelling

### Topic: Time-Cost Trade-off on Construction Projects – Classification of Costs, Compression of Networks, Cost Optimization Through the Crashing of a Network

This module explores the critical concept of the time-cost trade-off in construction projects. We'll delve into understanding different cost classifications, how to manipulate project schedules to reduce time, and the economic implications of these adjustments.

---

## 1. Understanding Costs in Construction Projects

To effectively manage the time-cost trade-off, a clear understanding of cost components is essential.

### 1.1 Classification of Costs

Costs on construction projects can be broadly categorized in several ways:

*   **Direct Costs:** Costs directly attributable to the execution of project activities.
    *   **Labor Costs:** Wages and benefits paid to workers on-site (e.g., carpenters, masons, electricians).
    *   **Material Costs:** Expenses for raw materials and components used in construction (e.g., concrete, steel, bricks, fixtures).
    *   **Equipment Costs:** Costs associated with using machinery and equipment (e.g., rental fees, fuel, operator wages, depreciation).
*   **Indirect Costs (Overhead Costs):** Costs not directly tied to specific activities but necessary for project execution and overall company operations.
    *   **Project Site Overhead:** Costs incurred at the project site but not directly for an activity (e.g., site supervision salaries, site office rental, utilities for the site office, temporary facilities, safety personnel).
    *   **General Overhead:** Costs incurred by the construction company for running its business, allocated across multiple projects (e.g., head office salaries, rent for head office, marketing, accounting, insurance).
*   **Fixed Costs:** Costs that remain relatively constant regardless of the project's duration or the amount of work performed (e.g., project manager's salary, site office rent).
*   **Variable Costs:** Costs that fluctuate with the project's duration or the volume of work (e.g., material costs for ongoing work, labor costs for extended duration).
*   **Total Project Cost:** The sum of all direct and indirect costs incurred for the project.

### 1.2 Cost Components in Time-Cost Trade-off

When considering time-cost trade-offs, we primarily focus on how expediting activities impacts specific cost elements:

*   **Normal Cost:** The cost incurred when an activity is performed at its normal duration, using standard resources and methods. This is typically the most cost-effective way to complete an activity.
*   **Crash Cost:** The cost incurred when an activity is accelerated to its minimum possible duration, often by adding more resources, working overtime, or using more expensive methods. This is almost always higher than the normal cost.
*   **Normal Duration:** The typical or expected time to complete an activity.
*   **Crash Duration:** The shortest possible time to complete an activity.

---

## 2. Compression of Project Networks

Project network compression is the process of reducing the total duration of a project, usually by shortening the duration of critical path activities.

### 2.1 Types of Network Compression

There are two primary methods for compressing a project network:

*   **Crashing:** This involves shortening the duration of specific activities, especially those on the critical path, by adding resources or working overtime.
    *   **Concept:** Adding more labor, working overtime, or using more efficient equipment to complete an activity faster.
    *   **Impact:** Increases the direct costs of the affected activities.
*   **Fast-Tracking:** This involves performing activities in parallel that would normally be done sequentially.
    *   **Concept:** Overlapping phases or tasks that are typically done one after another (e.g., starting foundation work for a floor while the structure for the floor below is still being erected).
    *   **Impact:** Increases the risk of rework, potential for conflicts, and often requires better coordination and communication, which can indirectly lead to increased costs.

### 2.2 Identifying Activities for Compression

To effectively compress a project, it's crucial to focus on activities that lie on the **critical path**.

*   **Critical Path:** The sequence of project activities that determines the shortest possible project duration. Any delay in a critical path activity will directly delay the entire project.
*   **Non-Critical Activities:** Activities not on the critical path that have "float" or "slack." These activities can be delayed to some extent without affecting the project completion date.

**Important Point:** Compressing non-critical activities is generally ineffective in reducing the overall project duration unless they become critical due to other compressions.

---

## 3. Cost Optimization Through Crashing of a Network

The goal of crashing is to reduce the project duration at the lowest possible additional cost. This involves a systematic approach to identify which critical activities to crash and by how much.

### 3.1 The Crashing Process

The crashing process involves the following steps:

1.  **Develop the Project Network:** Construct a network diagram (e.g., Activity-on-Node or Precedence Diagramming Method) showing all activities, their dependencies, normal durations, and normal costs.
2.  **Identify the Critical Path:** Determine the critical path and the total project duration based on normal durations.
3.  **Calculate the Crash Cost per Time Unit:** For each activity that can be crashed (i.e., has a crash duration and crash cost):
    *   `Crash Cost per Time Unit = (Crash Cost - Normal Cost) / (Normal Duration - Crash Duration)`
    *   This represents the additional cost incurred for each unit of time (e.g., day, week) by which the activity's duration is reduced.
4.  **Select Activities to Crash:**
    *   Start by crashing the activity on the **critical path** with the **lowest crash cost per time unit**.
    *   Crash this activity by one time unit.
    *   **Re-calculate the project duration and identify the new critical path(s).** It's common for the critical path to change as activities are compressed.
    *   Continue this process, always selecting the activity on the *current* critical path(s) with the lowest crash cost per time unit.
5.  **Consider Limiting Factors:**
    *   **Crash Duration Limit:** An activity cannot be crashed beyond its defined crash duration.
    *   **Activity Limits:** Some activities may not be crashable at all.
    *   **Resource Availability:** Crashing may be limited by the availability of resources (labor, equipment).
    *   **Parallel Paths:** When crashing leads to multiple critical paths, you must crash an activity on *each* critical path simultaneously to reduce the overall project duration.
6.  **Stop When Target Duration is Reached or Further Crashing is Prohibitive:** Continue until the desired project duration is achieved, or the cost of further crashing exceeds the value of the time saved (e.g., avoiding penalties, gaining early completion bonuses).

### 3.2 Cost Optimization Goal

The objective is to find the optimal balance between time and cost.

*   **Normal Project Duration:** The project duration achieved with normal effort and cost.
*   **Target Project Duration:** A shorter duration required for specific project objectives.
*   **Cost vs. Duration Curve:** Graphically, plotting the total project cost against project duration (with duration decreasing as cost increases) will often show a curve. The lowest point on this curve represents the minimum cost, but this might not be the desired duration. The time-cost trade-off involves moving up this curve to a desired shorter duration, accepting the associated higher cost.

**Important Point:** The optimal cost for a *shorter* project duration is achieved by systematically crashing the most cost-effective activities on the critical path.

---

## Examples

Let's consider a simplified project with activities A, B, and C.

| Activity | Normal Duration (days) | Normal Cost ($) | Crash Duration (days) | Crash Cost ($) | Crash Cost per Day ($) |
| :------- | :--------------------- | :-------------- | :-------------------- | :------------- | :--------------------- |
| A        | 5                      | 1000            | 3                     | 1600           | (1600-1000)/(5-3) = 300 |
| B        | 7                      | 1500            | 5                     | 2500           | (2500-1500)/(7-5) = 500 |
| C        | 4                      | 800             | 4                     | 800            | N/A (cannot be crashed) |

**Scenario:** Assume A precedes B, and B precedes C.

**Step 1 & 2: Initial Network and Critical Path**

*   A (5 days) -> B (7 days) -> C (4 days)
*   Total Normal Duration = 5 + 7 + 4 = 16 days
*   Critical Path: A -> B -> C

**Step 3: Calculate Crash Cost per Day**

*   Activity A: $300/day
*   Activity B: $500/day
*   Activity C: Not crashable

**Step 4: Crashing Process**

*   **Goal:** Reduce project duration.
*   **First Crash:** The critical path is A->B->C. Activity A has the lowest crash cost per day ($300).
    *   Crash A by 1 day.
    *   New duration for A = 4 days.
    *   New cost for A = 1000 + 300 = $1300.
    *   Total project duration = 4 + 7 + 4 = 15 days.
    *   New critical path: Still A->B->C.
*   **Second Crash:** The critical path is still A->B->C. Activity A can be crashed further.
    *   Crash A by 1 day (to its minimum of 3 days).
    *   New duration for A = 3 days.
    *   New cost for A = 1300 + 300 = $1600.
    *   Total project duration = 3 + 7 + 4 = 14 days.
    *   New critical path: Still A->B->C.
*   **Third Crash:** The critical path is still A->B->C. Activity A is at its crash duration. Now consider the next lowest crash cost on the critical path, which is Activity B ($500/day).
    *   Crash B by 1 day.
    *   New duration for B = 6 days.
    *   New cost for B = 1500 + 500 = $2000.
    *   Total project duration = 3 + 6 + 4 = 13 days.
    *   New critical path: Still A->B->C.
*   **Fourth Crash:** The critical path is still A->B->C. Activity B can be crashed further.
    *   Crash B by 1 day (to its minimum of 5 days).
    *   New duration for B = 5 days.
    *   New cost for B = 2000 + 500 = $2500.
    *   Total project duration = 3 + 5 + 4 = 12 days.
    *   New critical path: Still A->B->C.

**Summary of Crashing Results:**

| Project Duration (days) | Activity A Cost ($) | Activity B Cost ($) | Activity C Cost ($) | Total Project Cost ($) |
| :---------------------- | :------------------ | :------------------ | :------------------ | :--------------------- |
| 16                      | 1000                | 1500                | 800                 | 3300                   |
| 15                      | 1300                | 1500                | 800                 | 3600                   |
| 14                      | 1600                | 1500                | 800                 | 3900                   |
| 13                      | 1600                | 2000                | 800                 | 4400                   |
| 12                      | 1600                | 2500                | 800                 | 4900                   |

This table shows how the project duration decreases, but the total cost increases with each day of crashing. The project manager would choose a duration based on project needs and the associated cost.

---

## Practice Questions and Answers

**Question 1:** Define the term "critical path" in project management.

**Answer 1:** The critical path is the sequence of project activities that determines the shortest possible project duration. Any delay in an activity on the critical path will directly delay the project's completion date.

**Question 2:** Differentiate between "normal cost" and "crash cost" for an activity.

**Answer 2:**
*   **Normal Cost:** The cost incurred when an activity is performed at its normal duration using standard resources and methods.
*   **Crash Cost:** The cost incurred when an activity is accelerated to its minimum possible duration, often by employing additional resources or working overtime, which typically increases direct costs.

**Question 3:** A project has three activities: X, Y, and Z.
*   Activity X: Normal Duration = 6 days, Normal Cost = $1200, Crash Duration = 4 days, Crash Cost = $2000.
*   Activity Y: Normal Duration = 8 days, Normal Cost = $1800, Crash Duration = 5 days, Crash Cost = $3000.
*   Activity Z: Normal Duration = 5 days, Normal Cost = $1000, Crash Duration = 5 days, Crash Cost = $1000 (cannot be crashed).

Assume the sequence is X -> Y -> Z. Calculate the crash cost per time unit for activities X and Y.

**Answer 3:**
*   **Activity X Crash Cost per Time Unit:**
    *   `(Crash Cost - Normal Cost) / (Normal Duration - Crash Duration)`
    *   `($2000 - $1200) / (6 days - 4 days)`
    *   `$800 / 2 days = $400 per day`
*   **Activity Y Crash Cost per Time Unit:**
    *   `(Crash Cost - Normal Cost) / (Normal Duration - Crash Duration)`
    *   `($3000 - $1800) / (8 days - 5 days)`
    *   `$1200 / 3 days = $400 per day`

**Question 4:** If the project in Question 3 has a normal duration of 19 days (6+8+5), and you need to reduce the project duration by one day at the lowest possible additional cost, which activity would you crash and by how much?

**Answer 4:**
*   The normal project duration is 19 days. The critical path is X -> Y -> Z.
*   Both Activity X and Activity Y have a crash cost per time unit of $400.
*   Since both critical activities have the same lowest crash cost per day, you can choose to crash either X or Y by one day.
*   **Option A:** Crash X by 1 day.
    *   New duration for X = 5 days.
    *   New cost for X = $1200 + $400 = $1600.
    *   New project duration = 5 + 8 + 5 = 18 days.
    *   Total project cost = $1600 + $1800 + $1000 = $4400.
*   **Option B:** Crash Y by 1 day.
    *   New duration for Y = 7 days.
    *   New cost for Y = $1800 + $400 = $2200.
    *   New project duration = 6 + 7 + 5 = 18 days.
    *   Total project cost = $1200 + $2200 + $1000 = $4400.
*   Both options result in an 18-day project duration and an additional cost of $400. The project manager can choose either.

---

## Highlight Important Points to Remember

*   **Direct Costs vs. Indirect Costs:** Understand the difference as indirect costs (like site overhead) can increase with longer project durations.
*   **Critical Path is Key:** Always focus compression efforts on activities on the critical path.
*   **Crashing Cost per Time Unit:** This metric is crucial for making cost-effective decisions during crashing.
*   **Minimum Crash Duration:** An activity cannot be crashed beyond its specified minimum duration.
*   **Multiple Critical Paths:** If crashing creates parallel critical paths, you may need to crash activities on multiple paths to shorten the overall project duration.
*   **Trade-off:** Crashing *always* increases direct costs. The decision to crash is based on whether the cost increase is justified by the benefits of a shorter project duration (e.g., avoiding penalties, earning bonuses).
*   **Risk:** Fast-tracking increases risk, while crashing increases direct costs.
*   **Iterative Process:** Crashing is an iterative process. The critical path can change after each crashing step, requiring re-evaluation.
