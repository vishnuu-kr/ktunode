---
title: "Project Control"
subject: "SOFTWARE PROJECT MANAGEMENT"
module: "Module 2: Cost Control and Scheduling "
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162760fc9aa1fdbc8b689"
status: "completed"
scrapedAt: "2026-05-20T16:49:08.484Z"
---
# Software Project Management: Module 2 - Cost Control and Scheduling - Project Control

## Learning Outcomes:

Upon completion of this topic, you will be able to:

*   Understand the importance of project control.
*   Identify key elements and techniques used in project control.
*   Apply Earned Value Management (EVM) for project control.
*   Analyze project performance using variance analysis.
*   Implement corrective actions to address deviations from the project plan.
*   Understand change control processes and their impact on project control.

## 1. Introduction to Project Control

*   **Definition:** Project control is the process of monitoring project progress, comparing it to the project plan, and taking corrective actions when deviations occur. It ensures that the project stays on track in terms of scope, schedule, and cost.

*   **Importance:**
    *   **Early Problem Detection:** Identifies issues early, allowing for timely corrective actions.
    *   **Improved Decision-Making:** Provides data-driven insights for informed decision-making.
    *   **Reduced Risk:** Minimizes the impact of risks by proactive monitoring and mitigation.
    *   **Increased Project Success:** Enhances the likelihood of delivering the project within budget, on schedule, and to the required quality.
    *   **Stakeholder Communication:** Provides stakeholders with regular updates on project performance.

*   **Key Components of Project Control:**
    *   **Planning:** Establishing a baseline for scope, schedule, and cost.
    *   **Monitoring:** Tracking actual progress against the baseline plan.
    *   **Comparing:** Analyzing variances between planned and actual performance.
    *   **Corrective Action:** Implementing changes to bring the project back on track.
    *   **Reporting:** Communicating project status to stakeholders.

## 2. Key Elements and Techniques in Project Control

*   **Work Breakdown Structure (WBS):**
    *   **Definition:** A hierarchical decomposition of the project scope into manageable components.
    *   **Purpose:** Facilitates detailed planning, task assignment, and progress tracking.
    *   **Example:**
        ```
        1.0 Project: Develop New Mobile App
            1.1 Requirements Gathering
                1.1.1 Conduct User Interviews
                1.1.2 Document Requirements
            1.2 Design
                1.2.1 Create Wireframes
                1.2.2 Develop UI Design
            1.3 Development
                1.3.1 Front-End Development
                1.3.2 Back-End Development
            1.4 Testing
                1.4.1 Unit Testing
                1.4.2 Integration Testing
        ```

*   **Project Schedule:**
    *   **Definition:** A timeline that outlines the start and end dates for each project task.
    *   **Tools:** Gantt charts, PERT charts, Critical Path Method (CPM).
    *   **Purpose:** Provides a visual representation of project progress and helps identify critical tasks.
    *   **Gantt Chart Example:** [Visual representation showing tasks, duration, start/end dates. You'll need to create this visually with a tool like Mermaid, or draw it by hand.]

*   **Cost Baseline:**
    *   **Definition:** An approved budget that serves as a reference point for tracking actual costs.
    *   **Purpose:** Helps monitor cost performance and identify potential budget overruns.

*   **Performance Measurement:**
    *   **Definition:**  The process of collecting and analyzing data to assess project performance against the baseline plan.
    *   **Techniques:** Earned Value Management (EVM), Variance Analysis.

*   **Configuration Management:**
    *   **Definition:** The process of identifying, controlling, and tracking changes to project deliverables.
    *   **Purpose:** Ensures that only approved changes are implemented and that all stakeholders are aware of the current project configuration.

*   **Risk Management:**
    *   **Definition:** The process of identifying, assessing, and responding to project risks.
    *   **Purpose:** Minimizes the impact of risks on project objectives.
    *   **Example:** Identifying the risk of key personnel leaving the project and developing a mitigation plan (e.g., cross-training).

## 3. Earned Value Management (EVM)

*   **Definition:** A project management technique that integrates scope, schedule, and cost data to assess project performance.

*   **Key Metrics:**
    *   **Planned Value (PV):** The authorized budget assigned to scheduled work. (Also known as Budgeted Cost of Work Scheduled - BCWS)
    *   **Actual Cost (AC):** The actual costs incurred for the work completed. (Also known as Actual Cost of Work Performed - ACWP)
    *   **Earned Value (EV):** The value of the work actually completed. (Also known as Budgeted Cost of Work Performed - BCWP)

*   **EVM Formulas:**
    *   **Schedule Variance (SV):** EV - PV
        *   SV > 0: Project is ahead of schedule.
        *   SV < 0: Project is behind schedule.
    *   **Cost Variance (CV):** EV - AC
        *   CV > 0: Project is under budget.
        *   CV < 0: Project is over budget.
    *   **Schedule Performance Index (SPI):** EV / PV
        *   SPI > 1: Project is ahead of schedule.
        *   SPI < 1: Project is behind schedule.
    *   **Cost Performance Index (CPI):** EV / AC
        *   CPI > 1: Project is under budget.
        *   CPI < 1: Project is over budget.
    *   **Estimate at Completion (EAC):**  A forecast of the total cost of the project at its completion. Several formulas exist, choose the most appropriate:
        *   **EAC (Typical):** BAC / CPI (Budget at Completion divided by Cost Performance Index) - Assumes future cost performance will be similar to past performance.
        *   **EAC (Atypical):** AC + (BAC - EV) - Assumes future work will be performed at the budgeted rate.
    *   **Variance at Completion (VAC):** BAC - EAC (Budget at Completion minus Estimate at Completion)

*   **Example:**

    *   Planned Value (PV) = $100,000
    *   Actual Cost (AC) = $120,000
    *   Earned Value (EV) = $90,000

    *   SV = $90,000 - $100,000 = -$10,000 (Behind schedule)
    *   CV = $90,000 - $120,000 = -$30,000 (Over budget)
    *   SPI = $90,000 / $100,000 = 0.9 (Behind schedule)
    *   CPI = $90,000 / $120,000 = 0.75 (Over budget)
    *   Assume BAC = $500,000
    *   EAC = $500,000 / 0.75 = $666,666.67 (using typical formula)
    *   VAC = $500,000 - $666,666.67 = -$166,666.67

*   **Benefits of EVM:**
    *   Provides objective measures of project performance.
    *   Facilitates early identification of potential problems.
    *   Supports data-driven decision-making.
    *   Improves project forecasting.

## 4. Variance Analysis

*   **Definition:** The process of comparing planned performance to actual performance and identifying significant deviations.

*   **Types of Variance:**
    *   **Schedule Variance (SV):** Deviation from the planned schedule.
    *   **Cost Variance (CV):** Deviation from the planned budget.
    *   **Scope Variance:** Deviation from the defined project scope (requires a different form of analysis, often comparing deliverables against requirements).

*   **Analyzing Variances:**
    *   Determine the root cause of the variance.
    *   Assess the impact of the variance on project objectives.
    *   Develop corrective actions to address the variance.

*   **Example:**

    *   **Scenario:** A software development team is behind schedule in completing the user interface design.
    *   **Analysis:**
        *   **Root Cause:** Unexpected complexity in implementing a specific design element.
        *   **Impact:** Delay in the development phase, potential impact on project deadline.
        *   **Corrective Action:** Simplify the design element, allocate additional resources, extend the deadline (if necessary).

## 5. Corrective Actions

*   **Definition:** Actions taken to bring the project back on track when deviations occur.

*   **Types of Corrective Actions:**
    *   **Schedule Compression:** Techniques like crashing (adding resources) or fast-tracking (overlapping activities).
    *   **Cost Reduction:** Negotiating lower prices with suppliers, reducing scope, improving efficiency.
    *   **Scope Change:** Adjusting the project scope (requires a formal change request).
    *   **Resource Reallocation:** Moving resources from less critical tasks to more critical tasks.

*   **Implementing Corrective Actions:**
    *   Evaluate the impact of the corrective action on other project areas.
    *   Obtain approval for the corrective action (through change control).
    *   Document the corrective action.
    *   Monitor the effectiveness of the corrective action.

*   **Example:**

    *   **Problem:** Project is over budget due to increased material costs.
    *   **Corrective Action:** Negotiate with suppliers to reduce material costs, explore alternative materials, or reduce the scope of the project by removing non-essential features.

## 6. Change Control Process

*   **Definition:** A formal process for managing changes to the project scope, schedule, or cost.

*   **Steps in the Change Control Process:**
    1.  **Initiate Change Request:** A stakeholder identifies a need for a change and submits a formal change request.
    2.  **Assess Impact:** The project team analyzes the potential impact of the change on scope, schedule, cost, and quality.
    3.  **Review and Approve/Reject:** The change control board (CCB) reviews the change request and approves or rejects it based on its impact and feasibility.
    4.  **Implement Change:** If approved, the project team implements the change according to the approved plan.
    5.  **Validate Change:** Verify that the change has been implemented correctly and meets the required specifications.
    6.  **Update Project Documentation:** Update project plans, schedules, budgets, and other relevant documents to reflect the approved change.

*   **Change Control Board (CCB):**  A group of stakeholders responsible for reviewing and approving or rejecting change requests.

*   **Importance of Change Control:**
    *   Ensures that changes are properly evaluated and approved.
    *   Prevents scope creep (uncontrolled expansion of the project scope).
    *   Maintains the integrity of the project plan.
    *   Provides a clear audit trail of all changes made to the project.

## Practice Questions/Exercises:

1.  **Question:** What are the key benefits of implementing project control?

    *   **Answer:**  Early problem detection, improved decision-making, reduced risk, increased project success, and improved stakeholder communication.

2.  **Question:** Explain the difference between Planned Value (PV), Actual Cost (AC), and Earned Value (EV).

    *   **Answer:** PV is the budgeted cost of the work scheduled, AC is the actual cost incurred for the work completed, and EV is the value of the work actually completed.

3.  **Question:** A project has a PV of $50,000, an AC of $60,000, and an EV of $40,000. Calculate the CV, SV, CPI, and SPI.  What does this indicate about the project’s performance?

    *   **Answer:**
        *   CV = EV - AC = $40,000 - $60,000 = -$20,000 (Over budget)
        *   SV = EV - PV = $40,000 - $50,000 = -$10,000 (Behind schedule)
        *   CPI = EV / AC = $40,000 / $60,000 = 0.67 (Over budget)
        *   SPI = EV / PV = $40,000 / $50,000 = 0.8 (Behind schedule)
        *   **Interpretation:** The project is significantly over budget and behind schedule.

4.  **Question:** Describe the steps in the change control process.

    *   **Answer:** (See section 6 above for detailed explanation)  Initiate Change Request, Assess Impact, Review and Approve/Reject, Implement Change, Validate Change, Update Project Documentation.

5.  **Question:** What are some common corrective actions that can be taken when a project is behind schedule?

    *   **Answer:** Schedule compression (crashing or fast-tracking), resource reallocation, scope reduction, negotiation with stakeholders.

## Important Points to Remember:

*   Project control is a continuous process throughout the project lifecycle.
*   Early detection of problems is crucial for effective project control.
*   Earned Value Management (EVM) is a powerful tool for measuring project performance.
*   Variance analysis helps identify the root causes of deviations from the project plan.
*   Corrective actions should be carefully evaluated before implementation.
*   The change control process is essential for managing changes to the project.
*   Stakeholder communication is vital for effective project control.
*   Project control is not about blame; it's about identifying issues and working collaboratively to find solutions.
