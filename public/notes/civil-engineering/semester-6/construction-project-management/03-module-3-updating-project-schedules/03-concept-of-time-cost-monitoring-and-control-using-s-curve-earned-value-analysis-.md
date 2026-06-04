---
title: "Concept of Time-cost monitoring and control using S-curve, Earned value analysis – measures of performance."
subject: "CONSTRUCTION PROJECT MANAGEMENT"
module: "Module 3: Updating project schedules."
branch: "Civil Engineering"
semester: 6
topicId: "689f15ce56b5e963ba811248"
status: "completed"
scrapedAt: "2026-05-20T18:52:39.209Z"
---
# CONSTRUCTION PROJECT MANAGEMENT

## Module 3: Updating Project Schedules

### Topic: Time-Cost Monitoring and Control Using S-Curve and Earned Value Analysis

---

### Learning Outcomes:

*   Understand the concept of time-cost monitoring and control.
*   Explain the purpose and interpretation of an S-curve in project management.
*   Define and explain the key components of Earned Value Analysis (EVA).
*   Calculate and interpret common Earned Value Analysis performance measures (CV, SV, SPI, CPI).
*   Apply EVA to monitor and control project time and cost performance.

---

### 1. Introduction to Time-Cost Monitoring and Control

Effective project management requires constant monitoring and control of both the project's schedule and its budget. This ensures the project stays on track and within its allocated resources.

*   **Time Monitoring:** Tracking the progress of activities against the planned schedule to identify delays or accelerations.
*   **Cost Monitoring:** Tracking actual expenditures against the planned budget to identify cost overruns or underruns.
*   **Time-Cost Control:** The integrated process of managing both time and cost to achieve project objectives. This involves comparing planned performance with actual performance and taking corrective actions when deviations occur.

---

### 2. The S-Curve: Visualizing Project Progress

The S-curve is a graphical representation of cumulative planned cost or progress against time. It gets its name from the characteristic "S" shape it typically forms.

#### 2.1. Key Concepts and Definitions:

*   **Planned Value (PV):** The budgeted cost for the work scheduled to be completed by a certain point in time. This is the cumulative cost planned in the project baseline.
*   **Actual Cost (AC):** The actual cost incurred for the work completed by a certain point in time.
*   **Earned Value (EV):** The budgeted cost for the work actually completed by a certain point in time. This represents the value of the work performed.

#### 2.2. Construction of an S-Curve:

1.  **Develop the Project Baseline:** This includes the detailed work breakdown structure (WBS), activity durations, dependencies, and the allocated budget for each activity.
2.  **Calculate Cumulative Planned Cost:** Sum the budgeted costs for all activities planned to be completed up to each point in time.
3.  **Plot the S-Curve:**
    *   The **X-axis** represents time (e.g., weeks, months).
    *   The **Y-axis** represents cumulative cost.
    *   Plot the cumulative planned cost at various points in time. This forms the **Planned Value (PV) curve**.
4.  **Update with Actual Data:** As the project progresses, actual costs and completed work are recorded.
    *   Plot the **Actual Cost (AC)** curve, representing cumulative expenditures at various points in time.
    *   Determine the **Earned Value (EV)** for the work actually completed at various points in time and plot the **EV curve**.

#### 2.3. Interpretation of the S-Curve:

*   **PV Curve:** Shows the planned trajectory of costs over the project lifecycle.
*   **EV Curve:** Shows the value of the work actually accomplished.
*   **AC Curve:** Shows the actual money spent.

| Comparison           | Interpretation                                                                                                 |
| :------------------- | :------------------------------------------------------------------------------------------------------------- |
| **EV > PV**          | Project is ahead of schedule (more work done than planned for that time).                                     |
| **EV < PV**          | Project is behind schedule (less work done than planned for that time).                                       |
| **EV = PV**          | Project is on schedule.                                                                                        |
| **EV > AC**          | Project is under budget (the value of work done is more than the cost incurred).                               |
| **EV < AC**          | Project is over budget (the value of work done is less than the cost incurred).                                |
| **EV = AC**          | Project is on budget.                                                                                          |
| **AC > PV**          | Project is both behind schedule and over budget (spending more than planned for less work than planned).       |
| **AC < PV**          | Project is both ahead of schedule and under budget (spending less than planned for more work than planned).    |

#### 2.4. Example:

Imagine a small construction project with a total budget of $100,000.

*   **Week 1 Planned:** $10,000 cumulative PV.
*   **Week 1 Actual:** $12,000 AC.
*   **Week 1 Earned Value:** $9,000 EV (meaning $9,000 worth of work was completed, valued at the planned cost).

**Interpretation:**
*   **Time:** EV ($9,000) < PV ($10,000) means the project is **behind schedule**.
*   **Cost:** EV ($9,000) < AC ($12,000) means the project is **over budget**.

**Visual Representation:**

```
Cumulative Cost ($)
       ^
       |      / EV
       |     /
       |    /
       |   /----- PV
       |  /
       | /
       |/
-------+----------------> Time (Weeks)
       1
```

In this example, the EV point at Week 1 would be below the PV line, indicating a schedule delay. The AC point at Week 1 would be above the EV line, indicating a cost overrun.

---

### 3. Earned Value Analysis (EVA): A Powerful Performance Measurement Tool

Earned Value Analysis (EVA), also known as Earned Value Management (EVM), is a project management technique that integrates project scope, cost, and schedule to measure project performance. It answers the critical question: "Are we getting what we paid for?"

#### 3.1. Key Components (Building Blocks of EVA):

*   **Planned Value (PV):** The budgeted cost for the work scheduled to be accomplished by a specific point in time. (Also known as Budgeted Cost of Work Scheduled - BCWS).
*   **Earned Value (EV):** The budgeted cost of the work actually performed by a specific point in time. (Also known as Budgeted Cost of Work Performed - BCWP).
*   **Actual Cost (AC):** The actual cost incurred for the work performed by a specific point in time. (Also known as Actual Cost of Work Performed - ACWP).

#### 3.2. Measures of Performance:

EVA uses variances and indices to quantify performance.

##### 3.2.1. Schedule Variance (SV):

*   **Definition:** The difference between the Earned Value (value of work done) and the Planned Value (value of work scheduled).
*   **Formula:** `SV = EV - PV`
*   **Interpretation:**
    *   **SV > 0 (Positive):** The project is ahead of schedule. (More work has been completed than planned for this point in time).
    *   **SV < 0 (Negative):** The project is behind schedule. (Less work has been completed than planned for this point in time).
    *   **SV = 0:** The project is on schedule.

##### 3.2.2. Schedule Performance Index (SPI):

*   **Definition:** A ratio of Earned Value to Planned Value, indicating the efficiency of the project's schedule.
*   **Formula:** `SPI = EV / PV`
*   **Interpretation:**
    *   **SPI > 1:** The project is ahead of schedule (progressing at a faster rate than planned).
    *   **SPI < 1:** The project is behind schedule (progressing at a slower rate than planned).
    *   **SPI = 1:** The project is on schedule.

##### 3.2.3. Cost Variance (CV):

*   **Definition:** The difference between the Earned Value (value of work done) and the Actual Cost (cost incurred for that work).
*   **Formula:** `CV = EV - AC`
*   **Interpretation:**
    *   **CV > 0 (Positive):** The project is under budget. (The value of work performed is greater than the cost incurred).
    *   **CV < 0 (Negative):** The project is over budget. (The cost incurred is greater than the value of work performed).
    *   **CV = 0:** The project is on budget.

##### 3.2.4. Cost Performance Index (CPI):

*   **Definition:** A ratio of Earned Value to Actual Cost, indicating the efficiency of the project's spending.
*   **Formula:** `CPI = EV / AC`
*   **Interpretation:**
    *   **CPI > 1:** The project is under budget (achieving more value for every dollar spent than planned).
    *   **CPI < 1:** The project is over budget (achieving less value for every dollar spent than planned).
    *   **CPI = 1:** The project is on budget.

#### 3.3. Summary Table of EVA Measures:

| Measure                     | Formula   | Interpretation (if > 0) | Interpretation (if < 0) | Interpretation (if = 0) |
| :-------------------------- | :-------- | :---------------------- | :---------------------- | :---------------------- |
| **Schedule Variance (SV)**  | `EV - PV` | Ahead of Schedule       | Behind Schedule         | On Schedule             |
| **Schedule Performance Index (SPI)** | `EV / PV` | Ahead of Schedule       | Behind Schedule         | On Schedule             |
| **Cost Variance (CV)**      | `EV - AC` | Under Budget            | Over Budget             | On Budget               |
| **Cost Performance Index (CPI)** | `EV / AC` | Under Budget            | Over Budget             | On Budget               |

---

### 4. Applying EVA for Time-Cost Monitoring and Control

EVA provides early warning signals and helps identify problems before they become critical.

#### 4.1. Steps for Application:

1.  **Establish a Baseline Plan:** Define the project scope, schedule, and budget. This becomes the reference point.
2.  **Collect Data:** Regularly collect actual costs and track the physical progress of work (percentage complete).
3.  **Calculate PV, EV, and AC:** At regular intervals (e.g., weekly, monthly), calculate these values.
4.  **Calculate Performance Measures:** Compute SV, SPI, CV, and CPI.
5.  **Analyze Results:** Interpret the variances and indices to understand the project's status.
6.  **Take Corrective Actions:** If performance is not as expected, implement corrective actions to bring the project back on track.
    *   **Behind Schedule (SV < 0 or SPI < 1):** Consider crashing (adding resources to accelerate activities), fast-tracking (performing activities in parallel that were originally sequential), or re-planning.
    *   **Over Budget (CV < 0 or CPI < 1):** Analyze cost drivers, seek cost reductions, improve efficiency, or revise the budget if necessary and approved.
7.  **Forecast Future Performance:** Use current performance trends to predict the likely completion cost and time (e.g., Estimate at Completion - EAC, Estimate to Complete - ETC).

#### 4.2. Decision Making with EVA:

*   **Low SPI:** Indicates schedule slippage. Need to expedite work or re-sequence activities.
*   **Low CPI:** Indicates cost overruns. Need to investigate the causes of overspending and implement cost-saving measures.
*   **Both SPI and CPI are low:** The project is in serious trouble and requires significant intervention.

---

### 5. Practice Questions and Exercises:

**Question 1:**

At the end of week 10, a project has the following status:

*   Planned Value (PV): $50,000
*   Earned Value (EV): $45,000
*   Actual Cost (AC): $52,000

Calculate:
a) Schedule Variance (SV)
b) Schedule Performance Index (SPI)
c) Cost Variance (CV)
d) Cost Performance Index (CPI)
e) Interpret the project's performance in terms of time and cost.

**Answer 1:**

a) `SV = EV - PV = $45,000 - $50,000 = -$5,000`
b) `SPI = EV / PV = $45,000 / $50,000 = 0.9`
c) `CV = EV - AC = $45,000 - $52,000 = -$7,000`
d) `CPI = EV / AC = $45,000 / $52,000 = 0.865` (approximately)

e) **Interpretation:**
    *   **Time:** SV is negative (-$5,000) and SPI is less than 1 (0.9). The project is **behind schedule**.
    *   **Cost:** CV is negative (-$7,000) and CPI is less than 1 (0.865). The project is **over budget**.
    The project is performing poorly in both schedule and cost aspects.

**Question 2:**

Which of the following statements is TRUE regarding Earned Value Analysis (EVA)?

A. A positive Cost Variance (CV) indicates the project is over budget.
B. An SPI greater than 1 means the project is behind schedule.
C. A CPI less than 1 means the project is under budget.
D. A positive Schedule Variance (SV) indicates the project is ahead of schedule.

**Answer 2:**

D. A positive Schedule Variance (SV) indicates the project is ahead of schedule.

*   **Explanation:**
    *   A positive CV means the project is under budget.
    *   An SPI greater than 1 means the project is ahead of schedule.
    *   A CPI less than 1 means the project is over budget.

**Question 3:**

You are managing a construction project. At a progress review, you find that your SPI is 1.2 and your CPI is 0.8. What can you conclude about the project's performance?

A. The project is ahead of schedule and under budget.
B. The project is behind schedule and under budget.
C. The project is ahead of schedule and over budget.
D. The project is behind schedule and over budget.

**Answer 3:**

C. The project is ahead of schedule and over budget.

*   **Explanation:**
    *   SPI = 1.2 (greater than 1) indicates the project is ahead of schedule.
    *   CPI = 0.8 (less than 1) indicates the project is over budget.

---

### 6. Important Points to Remember:

*   **S-curves provide a visual snapshot** of project progress and are useful for trend analysis.
*   **Earned Value Analysis (EVA) is a powerful, integrated method** for measuring project performance against the baseline.
*   **PV, EV, and AC are the fundamental components** of EVA.
*   **SV and SPI focus on schedule performance**, while **CV and CPI focus on cost performance.**
*   **Indices (SPI, CPI) are often more useful than variances** as they represent efficiency ratios that can be compared across projects or against benchmarks.
*   **Consistent and accurate data collection is crucial** for effective EVA.
*   **EVA helps in proactive decision-making** and timely corrective actions.
*   **Always interpret variances and indices in conjunction** – a project might be ahead of schedule but significantly over budget, requiring careful consideration.
*   The **goal of time-cost control is to achieve project objectives within the planned scope, schedule, and budget.**
