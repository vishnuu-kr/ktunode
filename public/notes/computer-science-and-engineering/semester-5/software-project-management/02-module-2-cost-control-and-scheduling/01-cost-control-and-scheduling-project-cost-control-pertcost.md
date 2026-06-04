---
title: "Cost Control and Scheduling - Project Cost Control (PERT/Cost)"
subject: "SOFTWARE PROJECT MANAGEMENT"
module: "Module 2: Cost Control and Scheduling "
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162760fc9aa1fdbc8b686"
status: "completed"
scrapedAt: "2026-05-20T16:49:06.382Z"
---
# Software Project Management: Cost Control and Scheduling - Project Cost Control (PERT/Cost)

**Module:** 2: Cost Control and Scheduling
**Topic:** Cost Control and Scheduling - Project Cost Control (PERT/Cost)

## Learning Outcomes:

By the end of this topic, you will be able to:

*   Understand the purpose and principles of PERT/Cost.
*   Explain how PERT/Cost integrates cost and schedule information.
*   Calculate Earned Value metrics within the PERT/Cost framework.
*   Identify cost and schedule variances using PERT/Cost.
*   Use PERT/Cost for project forecasting and decision-making.
*   Apply PERT/Cost to real-world software project scenarios.

---

## 1. Introduction to PERT/Cost

*   **Definition:** PERT/Cost (Program Evaluation and Review Technique/Cost) is a project management technique used to control project costs by integrating cost and schedule information. It extends the PERT methodology (focused on time) by incorporating cost data.
*   **Purpose:**
    *   Monitor project costs against the planned budget.
    *   Track project progress against the planned schedule.
    *   Identify cost and schedule variances early in the project lifecycle.
    *   Forecast project completion costs and dates.
    *   Make informed decisions to bring projects back on track.
*   **Key Concepts:**
    *   **Work Breakdown Structure (WBS):** A hierarchical decomposition of the project into smaller, manageable tasks or work packages.  PERT/Cost requires a well-defined WBS to accurately allocate costs and track progress.
    *   **Activities:** Individual tasks within the WBS that consume time and resources.
    *   **Resources:** People, equipment, materials, etc., required to complete activities.
    *   **Costs:** Expenses associated with using resources.  These can be direct costs (directly attributable to the project) or indirect costs (overhead).
    *   **Schedule:** The planned start and finish dates for each activity.
    *   **Baseline:**  The initial approved plan (schedule and budget) against which project performance is measured.

## 2. Integrating Cost and Schedule Information

*   **Cost Accounting System:** PERT/Cost relies on an effective cost accounting system to collect and track actual costs associated with each activity.  This system needs to be integrated with the project schedule.
*   **Work Packages:** Costs are typically tracked at the work package level. This allows for more accurate monitoring and control.
*   **Assigning Costs to Activities:** Each activity in the project schedule is assigned a budget, which represents the planned cost for completing that activity. This is often referred to as the *Budgeted Cost for Work Scheduled (BCWS)*.
*   **Periodic Reporting:** PERT/Cost requires regular reporting to track project performance. This involves comparing planned costs and schedule with actual costs and progress.

## 3. Earned Value Management (EVM) Metrics within PERT/Cost

*   **Earned Value (EV) / Budgeted Cost for Work Performed (BCWP):**  The value of the work actually completed to date. It represents the amount of the budget that *should* have been spent based on the percentage of work completed.
    *   **Calculation:** EV = (Percentage of Work Completed) x (Total Budgeted Cost)
    *   **Example:** If an activity has a budget of $10,000 and is 50% complete, the EV is $5,000.
*   **Actual Cost (AC) / Actual Cost of Work Performed (ACWP):** The actual cost incurred for the work completed to date.
    *   **Tracking:**  Requires a robust cost accounting system.
    *   **Example:** If the activity from the previous example has actually cost $6,000 to complete 50% of the work, the AC is $6,000.
*   **Planned Value (PV) / Budgeted Cost for Work Scheduled (BCWS):** The planned cost of work scheduled to be completed to date. This is essentially the budgeted cost for the activities that were planned to be finished by the reporting date.
    *   **Example:** If the activity from the previous example was scheduled to be 50% complete by the reporting date, the PV is $5,000.

## 4. Cost and Schedule Variances

*   **Cost Variance (CV):** The difference between the earned value (EV) and the actual cost (AC). It indicates whether the project is over or under budget.
    *   **Formula:** CV = EV - AC
    *   **Interpretation:**
        *   CV > 0: Under Budget (Favorable)
        *   CV < 0: Over Budget (Unfavorable)
        *   CV = 0: On Budget
    *   **Example:** Using the previous examples, CV = $5,000 - $6,000 = -$1,000. The project is $1,000 over budget.
*   **Schedule Variance (SV):** The difference between the earned value (EV) and the planned value (PV). It indicates whether the project is ahead or behind schedule.
    *   **Formula:** SV = EV - PV
    *   **Interpretation:**
        *   SV > 0: Ahead of Schedule (Favorable)
        *   SV < 0: Behind Schedule (Unfavorable)
        *   SV = 0: On Schedule
    *   **Example:** Using the previous examples, SV = $5,000 - $5,000 = $0. The project is on schedule.
*   **Variance Analysis:** Understanding the *reasons* behind the variances is crucial. Investigate the root causes (e.g., poor estimates, scope creep, resource issues).

## 5. Project Forecasting and Decision-Making

*   **Cost Performance Index (CPI):**  A measure of the cost efficiency of the project.
    *   **Formula:** CPI = EV / AC
    *   **Interpretation:**
        *   CPI > 1: Project is performing under budget.
        *   CPI < 1: Project is performing over budget.
        *   CPI = 1: Project is performing on budget.
    *   **Example:** Using the previous examples, CPI = $5,000 / $6,000 = 0.83.  For every dollar spent, the project is only earning 83 cents worth of value.
*   **Schedule Performance Index (SPI):**  A measure of the schedule efficiency of the project.
    *   **Formula:** SPI = EV / PV
    *   **Interpretation:**
        *   SPI > 1: Project is ahead of schedule.
        *   SPI < 1: Project is behind schedule.
        *   SPI = 1: Project is on schedule.
    *   **Example:** Using the previous examples, SPI = $5,000 / $5,000 = 1.  The project is on schedule.
*   **Estimate at Completion (EAC):**  A forecast of the total cost of the project at completion.  There are several methods for calculating EAC:
    *   **EAC (Typical):** EAC = AC + (BAC - EV)  (Assumes future performance will be similar to past performance)
    *   **EAC (Atypical):** EAC = AC + ((BAC - EV) / CPI) (Assumes future performance will be impacted by the same cost inefficiencies)
    *   **EAC (New Estimate):** Requires a completely new bottom-up estimate.
    *   Where:
        *   AC = Actual Cost
        *   BAC = Budget at Completion (total budgeted cost)
        *   EV = Earned Value
        *   CPI = Cost Performance Index
    *   **Example (Atypical):** Assuming BAC = $10,000, EAC = $6,000 + (($10,000 - $5,000) / 0.83) = $12,024. The project is now expected to cost $12,024 in total.
*   **Estimate to Complete (ETC):**  The estimated cost to complete the remaining work.
    *   **Formula:** ETC = EAC - AC
    *   **Example (Atypical):**  ETC = $12,024 - $6,000 = $6,024. It is estimated to cost an additional $6,024 to complete the remaining work.
*   **Variance at Completion (VAC):** The difference between the budget at completion (BAC) and the estimate at completion (EAC).
    *   **Formula:** VAC = BAC - EAC
    *   **Example (Atypical):** VAC = $10,000 - $12,024 = -$2,024. The project is now expected to be $2,024 over budget at completion.
*   **Decision-Making:**
    *   **Corrective Actions:** If variances are significant, take corrective actions to bring the project back on track (e.g., resource reallocation, scope reduction, improved efficiency).
    *   **Re-Baselining:**  In extreme cases, it may be necessary to re-baseline the project, which involves creating a new plan and budget. This should be done with careful consideration and approval.

## 6. Applying PERT/Cost to Software Project Scenarios

*   **Example Scenario:**  Developing a new mobile application.
    *   **WBS:**  Requirements gathering, design, coding, testing, deployment.
    *   **Activities:**  Each WBS element is broken down into smaller activities (e.g., "Design User Interface," "Develop Login Module").
    *   **Resource Allocation:** Assign developers, testers, designers, etc., to each activity.
    *   **Cost Estimation:** Estimate the labor costs, software licenses, hardware costs, etc., for each activity.
    *   **Scheduling:**  Create a project schedule with start and finish dates for each activity.
    *   **Earned Value Tracking:**  Regularly track the percentage of work completed for each activity and compare it to the planned schedule and budget.
    *   **Variance Analysis:** Analyze cost and schedule variances to identify potential problems and take corrective actions.

## 7. Important Points to Remember

*   **Accuracy of Estimates:** The accuracy of PERT/Cost depends on the accuracy of the initial cost and schedule estimates.
*   **Data Collection:** A reliable cost accounting system is essential for collecting accurate actual cost data.
*   **Regular Monitoring:**  PERT/Cost requires regular monitoring and reporting to identify problems early.
*   **Communication:**  Effective communication with stakeholders is crucial for sharing project status and making informed decisions.
*   **Integration with Project Management Software:** Many project management software tools support PERT/Cost functionality, making it easier to track and analyze project performance.

## Practice Questions and Exercises:

**Question 1:**

A software development project has a total budget of $50,000. After two months, the project manager reports that 40% of the work is completed (EV = $20,000). The actual cost incurred is $25,000 (AC = $25,000), and the planned value (PV) for the work scheduled to be completed by this point was $18,000.

Calculate the Cost Variance (CV), Schedule Variance (SV), Cost Performance Index (CPI), and Schedule Performance Index (SPI).  Is the project over or under budget? Is the project ahead or behind schedule?

**Answer:**

*   CV = EV - AC = $20,000 - $25,000 = -$5,000
*   SV = EV - PV = $20,000 - $18,000 = $2,000
*   CPI = EV / AC = $20,000 / $25,000 = 0.8
*   SPI = EV / PV = $20,000 / $18,000 = 1.11

The project is $5,000 **over budget** and **ahead of schedule**.  The project is only earning 80 cents for every dollar spent.

**Question 2:**

Using the information from Question 1, and assuming future cost performance will reflect past cost performance, calculate the Estimate at Completion (EAC) using the atypical EAC formula:  EAC = AC + ((BAC - EV) / CPI)

**Answer:**

EAC = $25,000 + (($50,000 - $20,000) / 0.8) = $25,000 + ($30,000 / 0.8) = $25,000 + $37,500 = $62,500

The estimated cost at completion is $62,500.

**Question 3:**

What are some potential corrective actions that a project manager could take if a project is significantly over budget based on PERT/Cost analysis?

**Answer:**

*   **Scope Reduction:** Eliminate or postpone non-essential features or functionality.
*   **Resource Reallocation:**  Move resources from less critical tasks to more critical tasks.
*   **Improved Efficiency:**  Identify and address inefficiencies in the development process (e.g., better tools, training, process improvements).
*   **Negotiate with Vendors:**  Seek discounts or better payment terms from vendors.
*   **Cost Cutting Measures:**  Identify areas where costs can be reduced without impacting quality (e.g., travel, training).
*   **Change Request Review:**  Strictly review all change requests to ensure they are essential and cost-effective.

**Question 4:**

Explain the difference between Planned Value (PV) and Earned Value (EV).

**Answer:**

*   **Planned Value (PV):**  The budgeted cost of work *scheduled* to be completed at a specific point in time. It represents what *should* have been spent up to that point.
*   **Earned Value (EV):** The value of work *actually* completed at a specific point in time. It represents the amount of the budget that *should* have been spent based on the work performed, regardless of whether it was on schedule or not. EV measures the accomplishment of project tasks.

These notes provide a detailed overview of PERT/Cost and its application in software project management. By understanding these concepts and practicing the calculations, you will be well-equipped to effectively control project costs and schedules. Remember to focus on accurate estimates, regular monitoring, and proactive decision-making to maximize project success.
