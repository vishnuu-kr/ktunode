---
title: "control charts"
subject: "QUALITY ENGINEERING AND MANAGEMENT"
module: "Module 3: Tools and Techniques in TQM : Affinity diagram"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf480446417c"
status: "completed"
scrapedAt: "2026-05-20T18:16:49.871Z"
---
## Module 3: Tools and Techniques in TQM - Control Charts

### Introduction to Control Charts

Control charts are a fundamental tool in Statistical Quality Control (SQC) and Total Quality Management (TQM) for monitoring and controlling processes over time. They help distinguish between common causes (random variations inherent in the process) and special causes (assignable variations due to specific, identifiable factors). By understanding and eliminating special causes, organizations can achieve process stability and improvement.

**Key Concept:** The primary goal of a control chart is to provide a visual representation of process performance, enabling early detection of deviations from expected behavior.

**References:**
*   **Montgomery, D. C. (Third Edition).** *Introduction to Statistical Quality Control.* (Chapter 3 covers the fundamentals of control charts).
*   **Besterfield et al. (Fifth Edition).** *Total Quality Management.* (Likely covers control charts in a chapter dedicated to SQC tools).

---

### 1. Purpose and Importance of Control Charts

Control charts serve several critical purposes in TQM:

*   **Process Monitoring:** To observe the behavior of a process over time and identify trends, shifts, or unusual patterns.
*   **Process Stability Determination:** To determine if a process is in a state of statistical control, meaning it is predictable and only influenced by common causes of variation.
*   **Detecting Special Causes of Variation:** To signal when a process has gone out of control due to specific, identifiable factors (e.g., equipment malfunction, operator error, material defect).
*   **Process Improvement:** By identifying and eliminating special causes, organizations can take corrective actions to improve process capability and reduce defects.
*   **Decision Making:** To provide data-driven insights for making informed decisions about process adjustments, product quality, and resource allocation.

**Importance in TQM:**
Control charts are crucial for achieving TQM's objectives of continuous improvement and customer satisfaction by ensuring consistent product or service quality. They empower teams to proactively manage and improve their processes.

**Alignment with Course Outcomes:**
*   **CO3: Implement different tools and techniques in TQM (Knowledge Level: K3):** Understanding and using control charts directly addresses this outcome.
*   **CO4: Implement different statistical quality control techniques (Knowledge Level: K3):** Control charts are a cornerstone of SQC.

---

### 2. Key Components of a Control Chart

A typical control chart consists of the following elements:

*   **Center Line (CL):** Represents the average or expected value of the process when it is in statistical control.
*   **Upper Control Limit (UCL):** The upper boundary of the acceptable variation for the process.
*   **Lower Control Limit (LCL):** The lower boundary of the acceptable variation for the process.

**Important Point to Remember:** The UCL and LCL are not specifications. They are statistically derived limits based on the process's historical data.

**References:**
*   **Mitra, A. (Second Edition).** *Fundamentals of Quality Control and Improvement.* (Provides detailed explanations of control chart components).

---

### 3. Types of Control Charts

Control charts are broadly categorized based on the type of data being monitored:

#### 3.1. Variables Control Charts (For Continuous Data)

These charts are used when the quality characteristic can be measured on a continuous scale (e.g., length, weight, temperature, time).

*   **X-bar and R Charts:**
    *   **X-bar Chart:** Monitors the *average* of subgroups over time. It is sensitive to shifts in the process mean.
        *   **Purpose:** To track the central tendency of the process.
        *   **Calculation:** The center line is the average of all subgroup averages. Control limits are calculated based on the average range and a control chart constant.
    *   **R Chart (Range Chart):** Monitors the *variation* within subgroups over time. It is sensitive to changes in process variability.
        *   **Purpose:** To track the dispersion or spread of the process.
        *   **Calculation:** The center line is the average of all subgroup ranges. Control limits are calculated using the average range and control chart constants.
    *   **When to Use:** Typically used when subgroup sizes are small (e.g., 2-5).
*   **X-bar and S Charts:**
    *   **X-bar Chart:** Similar to the R chart, it monitors the process mean.
    *   **S Chart (Standard Deviation Chart):** Monitors the *standard deviation* of subgroups over time. It is more statistically efficient than the R chart for detecting changes in variability, especially with larger subgroup sizes.
        *   **Purpose:** To track process variability using standard deviation.
        *   **Calculation:** The center line is the average of all subgroup standard deviations. Control limits are calculated using the average standard deviation and control chart constants.
    *   **When to Use:** Generally preferred over X-bar and R charts when subgroup sizes are larger (e.g., 6 or more) due to its greater sensitivity to changes in variability.
*   **Individuals and Moving Range (I-MR) Charts:**
    *   **I Chart (Individuals Chart):** Monitors individual data points when subgrouping is not practical or possible (e.g., when measuring each unit is too costly or time-consuming, or when the process naturally produces single units).
        *   **Purpose:** To track individual process measurements.
        *   **Calculation:** The center line is the average of all individual measurements. Control limits are based on the average moving range.
    *   **MR Chart (Moving Range Chart):** Monitors the variation between consecutive individual measurements.
        *   **Purpose:** To track the variability of individual measurements.
        *   **Calculation:** The center line is the average of the moving ranges. Control limits are calculated based on the average moving range.
    *   **When to Use:** When subgrouping is not feasible or when the process produces items individually.

**Example:**
*   **X-bar and R Chart:** Monitoring the average fill volume of soda bottles and the range of fill volumes within each sample of 5 bottles collected every hour.
*   **I-MR Chart:** Monitoring the diameter of machined shafts produced one at a time, and the range between consecutive shaft diameters.

**References:**
*   **Montgomery, D. C. (Third Edition).** *Introduction to Statistical Quality Control.* (Chapters 4 and 5 cover variables control charts).
*   **Besterfield et al. (Fifth Edition).** *Total Quality Management.* (Likely has a section on variables control charts).

---

#### 3.2. Attributes Control Charts (For Discrete Data)

These charts are used when the quality characteristic is measured by counting or classifying (e.g., number of defects, proportion of nonconforming items).

*   **p-Chart (Proportion Defective):**
    *   **Purpose:** Monitors the proportion of nonconforming units in a sample.
    *   **Data Type:** Attribute data (pass/fail, conforming/nonconforming).
    *   **Sample Size:** Can be constant or variable. Control limits are adjusted for variable sample sizes.
    *   **When to Use:** When you are interested in the percentage or proportion of defective items.
*   **np-Chart (Number of Defective Units):**
    *   **Purpose:** Monitors the actual number of nonconforming units in a sample.
    *   **Data Type:** Attribute data.
    *   **Sample Size:** Must be *constant*.
    *   **When to Use:** When the sample size is constant and you want to track the number of defects directly.
*   **c-Chart (Number of Defects):**
    *   **Purpose:** Monitors the number of defects per unit or area of opportunity.
    *   **Data Type:** Attribute data (counting the number of defects, not the number of nonconforming units).
    *   **Sample Size:** Must be *constant* in terms of the area of opportunity.
    *   **When to Use:** When each item can have multiple defects, and you want to count the total number of defects.
*   **u-Chart (Defects Per Unit):**
    *   **Purpose:** Monitors the average number of defects per unit when the area of opportunity can vary.
    *   **Data Type:** Attribute data.
    *   **Sample Size:** Can be constant or variable (area of opportunity varies).
    *   **When to Use:** Similar to the c-chart but used when the area of opportunity for defects varies.

**Example:**
*   **p-Chart:** Monitoring the proportion of customer complaints received each week.
*   **np-Chart:** Monitoring the number of faulty circuits in batches of 100 electronic boards produced daily.
*   **c-Chart:** Monitoring the number of scratches on the surface of glass panels inspected each hour.
*   **u-Chart:** Monitoring the average number of errors per page in documents, where the number of pages in each document varies.

**References:**
*   **Montgomery, D. C. (Third Edition).** *Introduction to Statistical Quality Control.* (Chapter 2 covers attributes control charts).
*   **SubburajRamasamy (First Edition).** *Total Quality Management.* (Likely includes a section on attribute charts).

---

### 4. Constructing and Using Control Charts

The process of constructing and using control charts involves several steps:

#### 4.1. Data Collection

*   Decide on the quality characteristic to be monitored.
*   Determine the appropriate type of control chart.
*   Define subgroup size and sampling frequency.
*   Collect data systematically over a period.

#### 4.2. Calculating Control Limits

*   **For Variables Charts:**
    *   Calculate the process average (e.g., average of X-bars or individual values).
    *   Calculate the average range or standard deviation.
    *   Use control chart constants (e.g., A2, D3, D4 for R charts; A3, B3, B4 for S charts) from statistical tables based on subgroup size.
    *   **UCL = Center Line + (Constant * Measure of Variation)**
    *   **LCL = Center Line - (Constant * Measure of Variation)**
*   **For Attributes Charts:**
    *   Calculate the overall proportion defective, number of defectives, or defects per unit.
    *   Control limits are calculated based on these overall measures and the sampling plan. For p-charts with variable sample sizes, the limits are adjusted for each subgroup.

**References:**
*   **Montgomery, D. C. (Third Edition).** *Introduction to Statistical Quality Control.* (Provides formulas and constants for calculating control limits).
*   **Besterfield et al. (Fifth Edition).** *Total Quality Management.* (Details the steps for constructing various control charts).

#### 4.3. Plotting the Data

*   Plot the calculated statistics (subgroup averages, ranges, individual values, proportions, etc.) on the chart against time or sample number.
*   Draw the Center Line (CL), Upper Control Limit (UCL), and Lower Control Limit (LCL).

#### 4.4. Interpreting Control Charts and Identifying Out-of-Control Signals

A process is considered "in control" if all plotted points fall within the control limits and there are no non-random patterns. Out-of-control signals indicate the presence of special causes of variation. Common rules for detecting these signals (often referred to as Western Electric rules or Nelson rules) include:

*   **Rule 1: A single point outside the control limits (UCL or LCL).** This is the most obvious sign of an out-of-control condition.
*   **Rule 2: Two consecutive points near the same control limit.** (e.g., two out of three consecutive points are above the CL, or two out of three consecutive points are below the CL). This suggests a shift in the process mean.
*   **Rule 3: Five consecutive points on one side of the center line.** This indicates a sustained shift in the process average.
*   **Rule 4: Six consecutive points steadily increasing or decreasing.** This suggests a trend or drift in the process.
*   **Rule 5: Fourteen consecutive points alternating up and down.** This indicates excessive oscillation around the center line.
*   **Rule 6: Any unusual or non-random pattern.** This includes clusters or patterns that don't fit the above rules but appear non-random.

**Important Point to Remember:** The control limits are set at +/- 3 standard deviations from the center line. Points outside these limits are highly unlikely to occur by chance if the process is in control.

**Example of Interpretation:**
If an X-bar chart for a manufacturing process shows a point above the UCL, it signifies that the average of that subgroup's measurement was unusually high, suggesting a problem that needs investigation (e.g., a tool setting changed). If the R chart shows a point above the UCL, it means the variation within that subgroup was unusually large, pointing to potential issues with consistency.

**References:**
*   **Montgomery, D. C. (Third Edition).** *Introduction to Statistical Quality Control.* (Chapter 3 details rules for detecting special causes).
*   **Mitra, A. (Second Edition).** *Fundamentals of Quality Control and Improvement.* (Provides examples of interpreting control charts).

#### 4.5. Taking Action

*   When an out-of-control signal is detected, the process should be investigated immediately.
*   Identify the root cause of the special variation.
*   Implement corrective actions to eliminate or control the special cause.
*   Once corrective actions are taken, continue monitoring the process to ensure it has returned to a stable state.
*   If the process is stable, use the current control limits for ongoing monitoring. If significant changes have been made, re-establish new control limits based on a new set of data.

**Alignment with Course Outcomes:**
*   **CO3: Implement different tools and techniques in TQM (Knowledge Level: K3):** This section covers the implementation aspects.
*   **CO4: Implement different statistical quality control techniques (Knowledge Level: K3):** The steps outlined are key to implementing SQC.

---

### 5. Capability Analysis vs. Control Charts

It's crucial to differentiate control charts from process capability analysis.

*   **Control Charts:** Determine if a process is **stable** (in statistical control) and whether variations are due to common or special causes. They tell us *how the process is performing*.
*   **Process Capability Analysis:** Assesses whether a **stable** process is capable of meeting **specification limits** (customer requirements). It tells us *how well the process meets requirements*.

**Important Point to Remember:** A process must be in statistical control *before* its capability can be meaningfully assessed. If a process is out of control, its capability is uncertain and likely unacceptable.

**References:**
*   **Montgomery, D. C. (Third Edition).** *Introduction to Statistical Quality Control.* (Chapter 6 likely covers process capability).
*   **Besterfield et al. (Fifth Edition).** *Total Quality Management.* (Will probably highlight this distinction).

---

### 6. Benefits of Using Control Charts

*   **Early Warning System:** Detects process deviations before they lead to significant defects or nonconforming products.
*   **Process Understanding:** Provides insights into the sources and nature of process variation.
*   **Reduced Waste and Rework:** By controlling variation and preventing defects, costs associated with scrap, rework, and inspection are reduced.
*   **Improved Product Quality:** Leads to more consistent and reliable products or services.
*   **Foundation for Improvement:** Identifying and eliminating special causes is the first step in continuous process improvement.
*   **Data-Driven Decisions:** Supports objective decision-making regarding process adjustments.
*   **Enhanced Communication:** Provides a clear visual representation of process performance for all stakeholders.

**Alignment with Course Outcomes:**
*   **CO1: Develop knowledge of quality management and contributions of quality gurus. (Knowledge Level: K2):** Understanding these benefits connects to the overall philosophy of quality management championed by gurus.
*   **CO3: Implement different tools and techniques in TQM (Knowledge Level: K3):** Realizing these benefits is a result of effective implementation.

---

### 7. Practice Questions and Exercises

**Question 1:**
A manufacturing company is monitoring the length of a critical component. They collect samples of 5 components every hour. What type of control chart would be most appropriate for monitoring the average length of these components, and what chart would be used to monitor the variability within each sample?
**(a) p-chart and c-chart**
**(b) X-bar chart and R chart**
**(c) I-chart and MR chart**
**(d) u-chart and p-chart**

**Answer:** (b) X-bar chart and R chart. The X-bar chart monitors the average, and the R chart monitors the variation within samples of continuous data.

**Question 2:**
Which of the following is NOT a rule used to detect an out-of-control signal on a control chart?
**(a) A single point outside the control limits.**
**(b) Seven consecutive points on one side of the center line.**
**(c) Six consecutive points steadily increasing or decreasing.**
**(d) Two out of three consecutive points near the same control limit.**

**Answer:** (b) Seven consecutive points on one side of the center line. The common rule is typically five or six consecutive points on one side of the center line.

**Question 3:**
Explain the difference between control limits and specification limits. Why is it important to establish control charts *before* assessing process capability?

**Answer:**
*   **Control Limits:** These are statistically derived boundaries based on the inherent variation of a process when it is in statistical control. They are used to detect special causes of variation.
*   **Specification Limits:** These are limits set by the customer or designer that define the acceptable range for a product's characteristics. They represent the required performance.

It is important to establish control charts before assessing process capability because process capability analysis assumes that the process is stable and predictable (i.e., in statistical control). If a process is out of control, the variation is not solely due to common causes, and any calculation of capability would be misleading and unlikely to reflect the true long-term performance or potential. A process must be brought into statistical control first to ensure that the variation observed is inherent to the process and can be reliably managed or reduced.

**Question 4:**
A quality inspector monitors the number of defects found on each aircraft wing inspected. The number of defects varies from wing to wing. Which control chart should be used?
**(a) p-chart**
**(b) np-chart**
**(c) c-chart**
**(d) u-chart**

**Answer:** (d) u-chart. The u-chart is used to monitor the average number of defects per unit when the "unit" (in this case, an aircraft wing) can have a varying number of defects, and we are counting defects, not non-conforming units. If the number of defects was counted on a constant area or sample size, a c-chart would be appropriate.

**Exercise 1:**
Consider the following data for a process monitored with an X-bar chart. Calculate the Center Line (CL) and control limits (UCL, LCL) if the average of the subgroup means is 50.5 and the average range (R-bar) is 2.5. Assume a subgroup size of 5.

*   **Relevant Constants for n=5:**
    *   A2 = 0.577
    *   D3 = 0
    *   D4 = 2.114

**Solution:**
*   **Center Line (CL) for X-bar:**  CL = $\bar{\bar{X}}$ = 50.5
*   **UCL for X-bar:** UCL = $\bar{\bar{X}}$ + A2 * $\bar{R}$ = 50.5 + (0.577 * 2.5) = 50.5 + 1.4425 = **51.9425**
*   **LCL for X-bar:** LCL = $\bar{\bar{X}}$ - A2 * $\bar{R}$ = 50.5 - (0.577 * 2.5) = 50.5 - 1.4425 = **49.0575**

---

### 8. Important Points to Remember

*   **Control charts are diagnostic, not prescriptive.** They tell you *what* is happening, not necessarily *why* or *how* to fix it. Root cause analysis is still needed.
*   **They require accurate and consistent data collection.**
*   **Subgrouping is critical.** The way data is grouped can affect the sensitivity of the chart.
*   **Control limits are dynamic.** They should be recalculated periodically as the process improves or changes.
*   **Always distinguish between control limits and specification limits.**
*   **Continuous improvement is the goal.** Use control charts as a tool for ongoing monitoring and improvement, not just for detecting problems.

---

This comprehensive set of notes covers the fundamental aspects of control charts within the context of TQM, aligning with the provided learning outcomes and course outcomes. The references to textbooks suggest that these concepts are core to the subject matter.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
