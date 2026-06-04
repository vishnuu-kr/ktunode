---
title: "Break down, preventive and predictive maintenance."
subject: "INDUSTRIAL AND SYSTEMS ENGINEERING"
module: "Module 2: Production Planning and Control: Aggregate production planning, materials requirement planning "
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1551d0cf480446373d"
status: "completed"
scrapedAt: "2026-05-20T18:04:17.327Z"
---
# Industrial and Systems Engineering: Module 2 - Production Planning and Control

## Topic: Break Down, Preventive, and Predictive Maintenance

This section delves into crucial aspects of maintaining production machinery and systems to ensure smooth operations, minimize downtime, and optimize resource utilization. Understanding these maintenance strategies is vital for effective production planning and control.

---

### 1. Introduction to Maintenance

*   **Definition:** Maintenance refers to the activities performed to keep equipment and facilities in good working order, preventing breakdowns and ensuring operational efficiency. It's an integral part of production planning and control as it directly impacts capacity, lead times, and costs.
*   **Importance:**
    *   Minimizes unexpected breakdowns and associated production losses.
    *   Ensures product quality by maintaining machinery accuracy.
    *   Extends the lifespan of equipment.
    *   Improves safety for personnel.
    *   Optimizes resource allocation (labor, spare parts).
    *   Supports consistent aggregate production planning by providing reliable capacity estimates.
    *   Crucial for Materials Requirement Planning (MRP) as reliable equipment availability is a prerequisite for accurate production schedules.

---

### 2. Types of Maintenance Strategies

The choice of maintenance strategy significantly influences production planning and control. We will explore the common approaches:

#### 2.1. Breakdown Maintenance (Reactive Maintenance)

*   **Definition:** This is the strategy of repairing equipment only after it has failed or broken down. It's often referred to as "run-to-failure" maintenance.
*   **Characteristics:**
    *   **Reactive:** Actions are taken only in response to a failure.
    *   **Simple to administer:** Requires minimal planning and scheduling.
    *   **Potentially high costs:** Unplanned downtime, emergency repairs, and potential secondary damage can be very expensive.
    *   **Unpredictable:** Makes production planning extremely difficult due to uncertain availability.
*   **When it might be used:**
    *   For non-critical equipment where failure has minimal impact on overall production.
    *   For equipment with very low repair costs and short repair times.
    *   For equipment where the cost of preventive maintenance outweighs the potential cost of failure.
*   **Reference:** Telsang (2018) discusses breakdown maintenance as the most basic form, often leading to higher overall costs in the long run due to lost production. Paneerselvam (2012) also highlights its reactive nature and the difficulties it poses for planning.
*   **Example:** A minor conveyor belt pulley that is easily accessible and can be replaced quickly without stopping the entire production line.

#### 2.2. Preventive Maintenance (PM)

*   **Definition:** This strategy involves performing maintenance activities on a scheduled basis to prevent failures. It aims to identify and rectify potential problems before they lead to breakdowns.
*   **Characteristics:**
    *   **Proactive:** Maintenance is scheduled based on time or usage.
    *   **Reduces unexpected downtime:** Leads to more predictable production schedules.
    *   **Lower repair costs:** Routine checks and minor adjustments are cheaper than major repairs.
    *   **Requires planning and scheduling:** Involves dedicated maintenance personnel, spare parts inventory, and a maintenance calendar.
    *   **Potential for over-maintenance:** Performing maintenance too frequently can be wasteful.
*   **Types of Preventive Maintenance:**
    *   **Time-based maintenance:** Maintenance is performed at fixed intervals (e.g., daily, weekly, monthly, annually).
    *   **Usage-based maintenance:** Maintenance is performed based on usage metrics like operating hours, mileage, or production cycles.
    *   **Condition-based maintenance (related but distinct):** Maintenance is performed based on the actual condition of the equipment, as determined by inspections or monitoring. (We'll cover this more in Predictive Maintenance).
*   **Reference:** Mahadevan (2018) emphasizes that PM is a proactive approach to minimize disruptions. Telsang (2018) provides detailed insights into planning and scheduling PM activities. Montgomery (2010) might touch upon statistical methods for determining optimal PM schedules, particularly in the context of quality.
*   **Example:** Changing the oil and filters in a machine every 500 operating hours, or lubricating bearings every quarter. Regularly inspecting electrical connections for wear and tear.

#### 2.3. Predictive Maintenance (PdM)

*   **Definition:** This is a more advanced maintenance strategy that uses condition-monitoring techniques to predict when equipment is likely to fail and then schedule maintenance just before that predicted failure.
*   **Characteristics:**
    *   **Proactive and data-driven:** Relies on ongoing monitoring of equipment condition.
    *   **Optimizes maintenance timing:** Reduces both unexpected breakdowns and unnecessary preventive maintenance.
    *   **Requires specialized tools and expertise:** Involves sensors, data analysis, and skilled technicians.
    *   **Higher initial investment:** Due to monitoring equipment and training.
    *   **Provides early warning:** Allows for planned interventions, minimizing disruption.
*   **Common Predictive Maintenance Techniques:**
    *   **Vibration Analysis:** Detecting abnormal vibrations can indicate bearing wear, imbalance, or misalignment.
    *   **Thermography (Infrared Imaging):** Identifying hot spots can reveal electrical issues, friction problems, or insulation failures.
    *   **Oil Analysis:** Analyzing lubricant properties can detect wear particles, contamination, or degradation.
    *   **Ultrasonic Testing:** Detecting leaks, electrical discharge, or internal flaws.
    *   **Motor Current Signature Analysis (MCSA):** Analyzing the electrical current of motors to detect developing faults.
*   **Reference:** Hicks (1994) likely discusses the evolution of maintenance strategies, including the emergence of predictive approaches. Krajewski et al. (2019) might link PdM to capacity planning and reliability of operations. Montgomery (2010) could offer statistical methods for interpreting condition monitoring data.
*   **Example:** Using a vibration sensor on a critical pump. If the sensor data shows a gradual increase in specific vibration frequencies over time, it might predict a bearing failure in the next two weeks, allowing maintenance to be scheduled during a planned shutdown.

---

### 3. Comparison of Maintenance Strategies

| Feature            | Breakdown Maintenance | Preventive Maintenance | Predictive Maintenance |
| :----------------- | :-------------------- | :--------------------- | :--------------------- |
| **Approach**       | Reactive              | Proactive (Scheduled)  | Proactive (Condition-based) |
| **Downtime**       | High & Unpredictable  | Low & Predictable      | Very Low & Predictable |
| **Repair Cost**    | High                  | Moderate               | Low (preventative)     |
| **Maintenance Cost** | Low (initially)       | Moderate               | High (initially, then lower) |
| **Planning Effort**| Low                   | Moderate               | High                   |
| **Equipment Lifespan** | Potentially Reduced   | Extended               | Optimized              |
| **Expertise Required** | Low                   | Moderate               | High                   |
| **Investment**     | Low                   | Moderate               | High                   |

---

### 4. Role of Maintenance in Production Planning and Control

*   **Aggregate Production Planning (APP):** Reliable equipment availability due to effective maintenance directly influences the achievable production capacity. Maintenance schedules must be integrated into APP to create realistic production plans. Unexpected breakdowns can force significant revisions to APP.
*   **Materials Requirement Planning (MRP):** Accurate production schedules generated by MRP depend on the availability of machinery. If machines are prone to breakdowns or undergo frequent unscheduled maintenance, MRP plans will be disrupted, leading to shortages of raw materials or finished goods. Scheduled preventive or predictive maintenance can be incorporated into MRP as planned downtime events.
*   **Capacity Planning:** Maintenance strategies directly impact the effective capacity of a production system. Breakdown maintenance leads to a highly variable and unreliable capacity. Preventive and predictive maintenance aim to stabilize and maximize effective capacity.
*   **Inventory Management:** Breakdown maintenance can lead to unplanned rush orders for spare parts, increasing inventory holding costs and the risk of obsolescence. Well-planned PM/PdM allows for better forecasting and purchasing of spare parts, supporting lean inventory principles (CO2).

---

### 5. Implementing Maintenance Strategies

*   **Maintenance Program Development:**
    *   **Identify Critical Equipment:** Prioritize equipment based on its impact on production, safety, and cost.
    *   **Determine Appropriate Strategy:** Select the best maintenance strategy (Breakdown, PM, PdM) for each piece of equipment.
    *   **Develop Maintenance Schedules:** For PM, create detailed schedules. For PdM, establish monitoring protocols and trigger points.
    *   **Allocate Resources:** Ensure sufficient skilled personnel, tools, and budget.
    *   **Maintain Spare Parts Inventory:** Stock critical spare parts based on lead times and failure probabilities.
*   **Record Keeping and Analysis:**
    *   Maintain detailed logs of all maintenance activities, including date, time, tasks performed, parts used, and personnel involved.
    *   Analyze maintenance data to identify recurring problems, assess the effectiveness of different strategies, and refine schedules. This aligns with CO6 (implementing quality control techniques by analyzing data).
*   **Continuous Improvement:** Regularly review and update maintenance procedures and strategies based on performance data and technological advancements.

---

### 6. Connecting to Course Outcomes

*   **CO1 (Implement tools and techniques):** Implementing PM/PdM involves using specific tools for monitoring, scheduling, and data analysis, which are core IE techniques. Understanding and applying the logic behind these strategies allows for their implementation.
*   **CO2 (Apply inventory control techniques):** Effective maintenance planning informs the stocking of spare parts, directly linking to inventory control principles for managing spare parts efficiently.
*   **CO3 (Identify lean and agile frameworks):** Minimizing downtime and ensuring reliable production through effective maintenance is a cornerstone of lean manufacturing (reducing waste, improving flow). Agile manufacturing requires flexibility and responsiveness, which is hampered by unpredictable equipment failures.
*   **CO4 (Identify ERP modules):** Maintenance management is often a module within Enterprise Resource Planning (ERP) systems, allowing for integrated planning and tracking of maintenance activities alongside production and inventory.
*   **CO5 (Conversant with quality management terms):** Equipment reliability directly impacts product quality. Maintenance is a key factor in ensuring machines operate within specified tolerances.
*   **CO6 (Implement quality control techniques):** Analyzing maintenance records and condition monitoring data to identify root causes of equipment degradation or failure utilizes statistical and quality control principles.

---

### 7. Key Points to Remember

*   **No single best strategy:** The optimal maintenance strategy depends on the criticality of the equipment, cost-benefit analysis, and the production environment.
*   **Cost of maintenance:** Consider both direct maintenance costs (labor, parts) and indirect costs (lost production, quality issues).
*   **Data is crucial:** Effective maintenance, especially predictive maintenance, relies heavily on accurate data collection and analysis.
*   **Maintenance is an investment:** Investing in effective maintenance reduces overall costs and improves competitiveness.
*   **Integration is key:** Maintenance planning must be integrated with overall production planning and control systems (APP, MRP).

---

### 8. Practice Questions & Exercises

**Question 1:**
Describe the fundamental difference between Preventive Maintenance and Predictive Maintenance. In what scenario would a company favor Predictive Maintenance over Preventive Maintenance?

**Answer 1:**
The fundamental difference lies in the basis for scheduling maintenance. Preventive Maintenance (PM) is scheduled based on fixed time intervals or usage cycles (e.g., every 500 hours of operation). Predictive Maintenance (PdM), on the other hand, uses condition-monitoring techniques to assess the actual state of equipment and predict when maintenance is needed, ideally just before failure is likely to occur.

A company would favor Predictive Maintenance when:
*   The equipment is critical, and unexpected breakdowns would lead to significant production losses or safety hazards.
*   The cost of over-maintenance (performing PM too frequently) for a particular piece of equipment is high.
*   There are cost-effective and reliable condition-monitoring techniques available for the equipment.
*   The cost of implementing PdM (sensors, analysis software, training) is justified by the potential savings from reduced downtime and fewer unnecessary maintenance interventions.

**Question 2:**
A manufacturing plant produces 1000 units per day. They are currently using breakdown maintenance for all their machinery. They are considering implementing a preventive maintenance schedule for their critical stamping machines, which account for 30% of their total production capacity.
*   Assume that on average, each stamping machine breaks down once every two months, resulting in an average downtime of 2 days per breakdown.
*   Assume the cost of lost production is $500 per day per machine.
*   Assume the cost of a scheduled preventive maintenance activity for a stamping machine is $200, and this takes 1 day of downtime per machine every three months.

Calculate the annual cost saving (or increase) if they switch to preventive maintenance for these stamping machines. Assume there are 10 stamping machines.

**Answer 2:**
**Current Situation (Breakdown Maintenance):**
*   Number of stamping machines = 10
*   Breakdowns per machine per year = 12 months / 2 months = 6 breakdowns
*   Total breakdowns per year for all machines = 10 machines * 6 breakdowns/machine = 60 breakdowns
*   Downtime per breakdown = 2 days
*   Total downtime due to breakdowns per year = 60 breakdowns * 2 days/breakdown = 120 days
*   Cost of lost production per year = 120 days * $500/day = $60,000

**Proposed Situation (Preventive Maintenance):**
*   Number of stamping machines = 10
*   Frequency of PM = every 3 months
*   PM activities per machine per year = 12 months / 3 months = 4 activities
*   Total PM activities per year for all machines = 10 machines * 4 activities/machine = 40 activities
*   Downtime per PM activity = 1 day
*   Total downtime due to PM per year = 40 activities * 1 day/activity = 40 days
*   Cost of PM per activity = $200
*   Total cost of PM per year = 40 activities * $200/activity = $8,000
*   Cost of lost production due to PM per year = 40 days * $500/day = $20,000
*   **Total annual cost for PM = Cost of PM + Cost of Lost Production = $8,000 + $20,000 = $28,000**

**Cost Comparison:**
*   Cost with Breakdown Maintenance = $60,000
*   Cost with Preventive Maintenance = $28,000

**Annual Saving:**
*   Saving = Cost (Breakdown) - Cost (Preventive)
*   Saving = $60,000 - $28,000 = **$32,000**

**Conclusion:** Switching to preventive maintenance would result in an annual saving of $32,000.

---

This concludes the notes on Breakdown, Preventive, and Predictive Maintenance. Understanding these strategies is crucial for effective production planning and control, impacting capacity, cost, and overall operational efficiency.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
