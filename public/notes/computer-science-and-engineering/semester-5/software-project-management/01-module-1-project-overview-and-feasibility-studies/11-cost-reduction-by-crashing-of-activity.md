---
title: "Cost reduction by Crashing of activity"
subject: "SOFTWARE PROJECT MANAGEMENT"
module: "Module 1: Project Overview and Feasibility Studies "
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162760fc9aa1fdbc8b684"
status: "completed"
scrapedAt: "2026-05-20T16:49:05.676Z"
---
# SOFTWARE PROJECT MANAGEMENT - Module 1: Project Overview & Feasibility Studies
## Topic: Cost Reduction by Crashing of Activity

**Introduction:**
This module focuses on cost reduction techniques in software project management, specifically the method of "crashing" activities.  Crashing aims to shorten the overall project duration by allocating more resources to specific activities, thereby reducing the project's indirect costs. However, this often increases the direct costs associated with those activities. The goal is to find the optimal balance between direct and indirect costs to minimize the total project cost.

**Learning Outcomes:**

*   Understand the concept of project crashing.
*   Identify activities suitable for crashing.
*   Calculate the cost slope of an activity.
*   Determine the optimal crashing strategy to minimize total project cost.
*   Recognize the limitations and risks associated with crashing.

**1. Key Concepts and Definitions**

*   **Project Crashing:** A technique used to shorten the project duration by allocating additional resources (e.g., manpower, equipment, or overtime) to specific activities on the critical path.

*   **Critical Path:** The longest sequence of activities in a project schedule that determines the shortest possible project duration.  Any delay in activities on the critical path will delay the entire project.

*   **Normal Time:** The standard time required to complete an activity under normal conditions with normal resource allocation.

*   **Normal Cost:** The cost associated with completing an activity within its normal time.

*   **Crash Time:** The shortest possible time required to complete an activity if additional resources are allocated. Crashing an activity will usually result in a higher direct cost.

*   **Crash Cost:** The cost associated with completing an activity within its crash time.

*   **Cost Slope:** The cost per unit of time saved by crashing an activity.  It represents the increase in cost for each day (or week, month, etc.) the activity is shortened.

    *   **Formula:**  Cost Slope = (Crash Cost - Normal Cost) / (Normal Time - Crash Time)

*   **Indirect Costs:**  Costs that are not directly associated with individual activities but are incurred for the project as a whole (e.g., project manager salary, office rent, utilities).  These costs typically decrease as project duration is shortened.

*   **Direct Costs:** Costs that are directly attributable to specific activities (e.g., labor costs, materials, equipment rental).  Crashing activities often increases direct costs.

*   **Total Project Cost:** Direct Costs + Indirect Costs.  The goal of crashing is to minimize this total cost.

**2. Identifying Activities Suitable for Crashing**

*   **Critical Path Activities:**  Only activities on the critical path can shorten the overall project duration.  Crashing activities off the critical path will not impact the project completion date.
*   **Activities with a Reasonable Cost Slope:**  Prioritize activities with lower cost slopes.  Crashing an activity with a very high cost slope will quickly outweigh the savings in indirect costs.
*   **Technically Feasible Activities:**  Some activities may be physically or technically impossible to crash beyond a certain point.  Consider constraints related to technology, regulations, or resources.
*   **Activities with Available Resources:** Ensure that additional resources are available to be allocated to the activities being crashed.

**3. Calculating the Cost Slope**

**Example:**

Let's say an activity has the following characteristics:

*   Normal Time: 10 days
*   Normal Cost: $2,000
*   Crash Time: 6 days
*   Crash Cost: $3,200

The cost slope would be calculated as follows:

Cost Slope = ($3,200 - $2,000) / (10 - 6) = $1,200 / 4 = $300 per day

This means that for every day the activity is shortened, the cost increases by $300.

**4. Determining the Optimal Crashing Strategy**

The process for determining the optimal crashing strategy is iterative:

1.  **Identify the Critical Path(s):** Use a project network diagram and critical path method (CPM) to determine the critical path(s).
2.  **Calculate Cost Slopes:** Calculate the cost slope for each activity on the critical path(s).
3.  **Select the Activity to Crash:** Choose the activity on the critical path(s) with the *lowest* cost slope that can be crashed.
4.  **Crash the Activity:** Reduce the activity's duration by one time unit (e.g., day, week).
5.  **Update the Project Schedule:** Recalculate the critical path(s) after crashing the activity.
6.  **Calculate Total Project Cost:** Determine the new direct costs (considering the crashing cost) and the new indirect costs (based on the reduced project duration).  Calculate the total project cost (Direct + Indirect).
7.  **Repeat Steps 3-6:** Continue crashing activities until:
    *   The desired project duration is reached.
    *   The total project cost starts to increase (meaning further crashing is no longer cost-effective).
    *   No more activities can be crashed on the critical path(s).

**Example:**

Let's assume we have a simplified project with the following activities:

| Activity | Predecessor | Normal Time (Days) | Normal Cost ($) | Crash Time (Days) | Crash Cost ($) | Cost Slope ($/Day) |
|---|---|---|---|---|---|---|
| A | - | 5 | 1000 | 3 | 1600 | 300 |
| B | - | 8 | 1600 | 6 | 2200 | 300 |
| C | A | 6 | 1200 | 4 | 2000 | 400 |
| D | B | 4 | 800 | 2 | 1400 | 300 |
| E | C, D | 7 | 1400 | 5 | 2000 | 300 |

Indirect Costs: $200 per day

**Initial Analysis:**

*   Possible Paths: A-C-E (5+6+7 = 18 days), B-D-E (8+4+7 = 19 days)
*   Critical Path: B-D-E (19 days)
*   Total Direct Cost: 1000 + 1600 + 1200 + 800 + 1400 = $6000
*   Total Indirect Cost: 19 * $200 = $3800
*   Total Project Cost: $6000 + $3800 = $9800

**Crashing Strategy:**

1.  **Iteration 1:** The critical path is B-D-E.  All three activities have the same cost slope ($300/day). We can arbitrarily select one, say 'D'. Crash D by 2 days (its maximum crashable duration).
    *   New Duration of D: 2 days
    *   New Cost of D: $1400
    *   New Project Duration: 19 - 2 = 17 days
    *   New Direct Cost: $1000 + $1600 + $1200 + $1400 + $1400 = $6600
    *   New Indirect Cost: 17 * $200 = $3400
    *   New Total Project Cost: $6600 + $3400 = $10000

2.  **Iteration 2:** The critical path is now A-C-E (5+6+7 = 18) and B-D-E (8+2+7 = 17). Both paths are now critical. Since we need to shorten BOTH paths, we should try to crash activity that is present in both paths. However in our case that is not possible and thus we need to crash at least one activity from each critical path. B-D-E has the activity B with the lowest Cost slope of $300/day while A-C-E has the activity A with the lowest cost slope of $300/day. Let's crash both A and B by 2 days.
    *   New Duration of A: 3 days
    *   New Duration of B: 6 days
    *   New Cost of A: $1600
    *   New Cost of B: $2200
    *   New Project Duration: 16 days
    *   New Direct Cost: $1600 + $2200 + $1200 + $1400 + $1400 = $7800
    *   New Indirect Cost: 16 * $200 = $3200
    *   New Total Project Cost: $7800 + $3200 = $11000

We stop here since the overall cost is increasing. Thus, our best project duration is 17 days achieved in the first iteration, resulting in a total project cost of $10000.

**5. Limitations and Risks of Project Crashing**

*   **Increased Direct Costs:** Crashing always increases direct costs, which may outweigh the savings in indirect costs.
*   **Quality Issues:** Rushing activities can lead to errors, rework, and reduced quality.
*   **Reduced Morale:** Overtime and increased workload can negatively impact team morale and productivity.
*   **Increased Risk:** Compressed schedules leave less room for error and increase the likelihood of unforeseen problems.
*   **Assumptions:** Crashing calculations rely on accurate estimates of normal time, normal cost, crash time, and crash cost. Inaccurate estimates can lead to suboptimal decisions.
*   **Multiple Critical Paths:** When a project has multiple critical paths, crashing becomes more complex, as you may need to crash activities on multiple paths simultaneously.
*   **Practical Limitations:** Some activities may have physical or contractual constraints that prevent them from being crashed beyond a certain point.

**6. Important Points to Remember**

*   Crashing should only be considered after a thorough analysis of the project schedule and costs.
*   Prioritize activities with the lowest cost slopes for crashing.
*   Consider the impact of crashing on quality and team morale.
*   Regularly update the project schedule and cost estimates to reflect the impact of crashing.
*   Be aware of the limitations and risks associated with crashing.
*   Crashing is not always the best solution; sometimes, it's better to accept a longer project duration than to significantly increase costs or compromise quality.

**7. Practice Questions and Exercises**

**Question 1:** What is the primary goal of project crashing?
*   a) To increase project scope
*   b) To reduce project duration
*   c) To increase project quality
*   d) To reduce project risk

**Answer:** b) To reduce project duration

**Question 2:** What is the cost slope of an activity with a normal time of 8 days, a normal cost of $1,000, a crash time of 5 days, and a crash cost of $1,900?

**Answer:** Cost Slope = ($1900 - $1000) / (8 - 5) = $900 / 3 = $300 per day

**Question 3:** Why are only critical path activities considered for crashing?

**Answer:** Only activities on the critical path can shorten the overall project duration. Crashing non-critical activities will not impact the project completion date.

**Question 4:** A project manager is considering crashing an activity to reduce project duration. The crashing cost is expected to be $500 per day, while the daily indirect cost savings is $400. Should the project manager crash the activity? Explain.

**Answer:** No, the project manager should not crash the activity. The crashing cost ($500/day) is higher than the indirect cost savings ($400/day). This means that for every day the activity is crashed, the total project cost will increase by $100.

**Question 5:** Discuss the potential negative impacts of crashing a software development project.

**Answer:** Potential negative impacts include:
*   **Decreased Code Quality:**  Rushed development may lead to bugs and less efficient code.
*   **Increased Defect Rate:**  Less thorough testing due to time constraints.
*   **Team Burnout:**  Overtime and pressure can lead to fatigue and decreased productivity.
*   **Scope Creep (indirectly):**  Attempting to cut corners might lead to unplanned workarounds, potentially expanding the project scope in unexpected ways.

These notes provide a comprehensive overview of cost reduction by crashing of activity in software project management. Understanding these concepts is crucial for effectively managing project costs and schedules.
