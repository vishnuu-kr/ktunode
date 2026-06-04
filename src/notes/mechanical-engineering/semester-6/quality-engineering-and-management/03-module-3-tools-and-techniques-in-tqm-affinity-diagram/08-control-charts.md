---
title: "control charts"
subject: "QUALITY ENGINEERING AND MANAGEMENT"
module: "Module 3: Tools and Techniques in TQM : Affinity diagram "
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1751d0cf4804463b13"
status: "completed"
scrapedAt: "2026-05-20T18:07:06.225Z"
---
# Quality Engineering and Management: Module 3 - Tools and Techniques in TQM

## Topic: Control Charts

---

**Module Context:** This topic falls under Module 3, focusing on the tools and techniques used in Total Quality Management (TQM). Control charts are a fundamental statistical tool for monitoring and controlling processes, ensuring they remain within acceptable limits and identifying deviations from the norm.

**Alignment with Course Outcomes:**

*   **CO3: Implement different tools and techniques in TQM (Knowledge Level: K3)** - Understanding and applying control charts directly contributes to this outcome.
*   **CO4: Implement different statistical quality control techniques (Knowledge Level: K3)** - Control charts are a cornerstone of Statistical Quality Control (SQC).

---

### 1. Introduction to Control Charts

**1.1 What are Control Charts?**

*   **Definition:** A control chart is a graphical tool used to monitor a process over time. It displays process data plotted in chronological order against time, along with a central line (CL) for the average, an upper control limit (UCL), and a lower control limit (LCL).
*   **Purpose:**
    *   To determine if a process is in a state of **statistical control**.
    *   To distinguish between **common cause variation** (random, inherent to the process) and **special cause variation** (assignable, indicative of a problem).
    *   To signal when a process has gone **out of control**, requiring investigation and corrective action.
    *   To provide a basis for process improvement by understanding the sources of variation.

**1.2 Types of Variation:**

*   **Common Cause Variation (Chance Variation):**
    *   Also known as **natural variation** or **random variation**.
    *   It's inherent in the process due to the combined effect of many small, unavoidable factors.
    *   A process exhibiting only common cause variation is considered to be **in statistical control**.
    *   *Example:* Slight variations in the temperature of an oven, minor fluctuations in the speed of a conveyor belt.
    *   *Textbook Reference:* Besterfield et al. (2018) discusses common cause variation as the baseline variation present in any stable process.
*   **Special Cause Variation (Assignable Cause Variation):**
    *   Also known as **assignable variation**.
    *   It arises from specific, identifiable sources that are not part of the normal process.
    *   These causes are usually sporadic and can be investigated and eliminated.
    *   A process exhibiting special cause variation is considered **out of statistical control**.
    *   *Example:* A worn-out machine part, a new operator making a mistake, a sudden change in raw material quality.
    *   *Textbook Reference:* Montgomery (2007) emphasizes that identifying and removing special causes is the primary goal of using control charts.

**1.3 The Goal of Control Charts:**

*   **Achieve and maintain process stability:** A process is stable when only common causes of variation are present.
*   **Improve process capability:** By identifying and eliminating special causes, the process variation can be reduced, leading to better performance.
*   **Prevent defects:** By monitoring and controlling the process, the likelihood of producing non-conforming products or services is minimized.

---

### 2. Structure of a Control Chart

*   **Central Line (CL):** Represents the average or target value of the characteristic being monitored. It is typically calculated from historical data or a known standard.
*   **Upper Control Limit (UCL):** The upper boundary of the control region. If a data point falls above the UCL, it indicates a special cause of variation.
*   **Lower Control Limit (LCL):** The lower boundary of the control region. If a data point falls below the LCL, it indicates a special cause of variation.

**Calculating Control Limits (General Principles):**

*   Control limits are typically set at **±3 standard deviations** from the central line. This range is chosen because for a process in statistical control (following a normal distribution), approximately 99.73% of the data points will fall within this range.
*   The standard deviation used in these calculations is the **process standard deviation**, which reflects the common cause variation.
*   **Formula:**
    *   UCL = Central Line + 3 * (Standard Deviation of the statistic)
    *   LCL = Central Line - 3 * (Standard Deviation of the statistic)

---

### 3. Types of Control Charts

Control charts are broadly classified based on the type of data being monitored:

**3.1 Variables Control Charts (For Measurable Data):**

These charts are used when the quality characteristic can be measured on a continuous scale (e.g., length, weight, temperature, time).

*   **X-bar ( $\bar{X}$ ) and R Charts:**
    *   **Purpose:** Used to monitor the **average** ($\bar{X}$) and the **range** (R) of a quality characteristic in a process.
    *   **Data Type:** Subgroups of size *n* (typically 2 to 10) taken from the process at regular intervals.
    *   **$\bar{X}$ Chart:** Monitors the central tendency of the process.
        *   CL = $\bar{\bar{X}}$ (average of subgroup averages)
        *   UCL = $\bar{\bar{X}}$ + A$_3$ $\bar{R}$
        *   LCL = $\bar{\bar{X}}$ - A$_3$ $\bar{R}$
        *   (Where $\bar{R}$ is the average of subgroup ranges, and A$_3$ is a control chart constant depending on subgroup size *n*).
    *   **R Chart:** Monitors the variability within subgroups.
        *   CL = $\bar{R}$
        *   UCL = D$_4$ $\bar{R}$
        *   LCL = D$_3$ $\bar{R}$
        *   (Where D$_4$ and D$_3$ are control chart constants depending on subgroup size *n*).
    *   **When to Use:** When monitoring both the process average and its variability is important.
    *   *Textbook Reference:* Montgomery (2007) provides detailed formulas and constants for X-bar and R charts, emphasizing their importance for monitoring process location and spread.
    *   *Example:* Monitoring the average and variation in the length of machined parts.

*   **X-bar ( $\bar{X}$ ) and S Charts:**
    *   **Purpose:** Similar to X-bar and R charts, but uses the **standard deviation** (S) to monitor process variability.
    *   **Data Type:** Subgroups of size *n*.
    *   **$\bar{X}$ Chart:** Same as above.
    *   **S Chart:** Monitors the variability within subgroups using the standard deviation.
        *   CL = $\bar{S}$ (average of subgroup standard deviations)
        *   UCL = B$_4$ $\bar{S}$
        *   LCL = B$_3$ $\bar{S}$
        *   (Where B$_4$ and B$_3$ are control chart constants depending on subgroup size *n*).
    *   **When to Use:** Preferred for larger subgroup sizes (n > 10) as the standard deviation is a more statistically efficient measure of variability than the range.
    *   *Example:* Monitoring the average and variation in the fill volume of bottles, where large batches are filled.

*   **Individuals (I) and Moving Range (MR) Charts:**
    *   **Purpose:** Used when data can only be collected one observation at a time, or for very large subgroups where calculating R or S is impractical.
    *   **Data Type:** Single observations over time.
    *   **I Chart (or X Chart):** Monitors individual observations.
        *   CL = $\bar{X}$ (average of individual observations)
        *   UCL = $\bar{X}$ + 3 * $\bar{MR}$
        *   LCL = $\bar{X}$ - 3 * $\bar{MR}$
    *   **MR Chart:** Monitors the variability between consecutive individual observations (moving range).
        *   CL = $\bar{MR}$ (average of moving ranges)
        *   UCL = 3 * $\bar{MR}$
        *   LCL = 0
    *   *Textbook Reference:* SubburajRamasamy (2017) highlights the utility of I-MR charts for processes where individual measurements are the norm.
    *   *Example:* Monitoring the daily production output per worker, where each worker's output is a single data point.

**3.2 Attributes Control Charts (For Countable Data):**

These charts are used when the quality characteristic is a count of occurrences or a proportion (e.g., number of defects, proportion of non-conforming items).

*   **p-Chart (for Proportion Defective):**
    *   **Purpose:** Monitors the proportion of non-conforming items in a sample.
    *   **Data Type:** Count of non-conforming items out of a total number of items inspected. Sample size can vary.
    *   CL = $\bar{p}$ (average proportion defective)
    *   UCL = $\bar{p}$ + 3 * $\sqrt{\frac{\bar{p}(1-\bar{p})}{n}}$
    *   LCL = $\bar{p}$ - 3 * $\sqrt{\frac{\bar{p}(1-\bar{p})}{n}}$
    *   (Where $\bar{p}$ is the average proportion defective over all samples, and *n* is the sample size. If sample size varies, use specific *n* for each calculation or a constant *n* if the variation is small).
    *   *Textbook Reference:* Besterfield et al. (2018) provides a comprehensive explanation of p-charts for tracking defect rates.
    *   *Example:* Monitoring the proportion of defective screws in batches of 100.

*   **np-Chart (for Number of Defectives):**
    *   **Purpose:** Monitors the number of non-conforming items in a sample.
    *   **Data Type:** Count of non-conforming items. Requires a constant sample size.
    *   CL = $n\bar{p}$ (expected number of defectives)
    *   UCL = $n\bar{p}$ + 3 * $\sqrt{n\bar{p}(1-\bar{p})}$
    *   LCL = $n\bar{p}$ - 3 * $\sqrt{n\bar{p}(1-\bar{p})}$
    *   (Where *n* is the constant sample size and $\bar{p}$ is the average proportion defective).
    *   *When to Use:* When the sample size is constant, and it's more convenient to work with counts rather than proportions.
    *   *Example:* Monitoring the number of scratched mobile phone screens in daily inspections of 50 phones.

*   **c-Chart (for Number of Defects):**
    *   **Purpose:** Monitors the number of defects on a single unit or item.
    *   **Data Type:** Count of defects found on an item (where the item itself is not classified as conforming/non-conforming, but rather the number of faults on it). Requires a constant inspection area or unit size.
    *   CL = $\bar{c}$ (average number of defects)
    *   UCL = $\bar{c}$ + 3 * $\sqrt{\bar{c}}$
    *   LCL = $\bar{c}$ - 3 * $\sqrt{\bar{c}}$
    *   *Textbook Reference:* Mitra (1998) explains the c-chart's application for counting defects, like flaws on a surface.
    *   *Example:* Monitoring the number of blemishes on a painted car door.

*   **u-Chart (for Defects per Unit):**
    *   **Purpose:** Monitors the number of defects per unit when the number of defects can vary and the unit size/inspection area is not constant.
    *   **Data Type:** Count of defects divided by the unit size or inspection area.
    *   CL = $\bar{u}$ (average number of defects per unit)
    *   UCL = $\bar{u}$ + 3 * $\sqrt{\frac{\bar{u}}{n}}$
    *   LCL = $\bar{u}$ - 3 * $\sqrt{\frac{\bar{u}}{n}}$
    *   (Where $\bar{u}$ is the average number of defects per unit, and *n* is the size of the unit or inspection area. Similar to p-charts, the value of *n* can vary).
    *   *When to Use:* When the size of the inspected unit varies, and the interest is in the rate of defects.
    *   *Example:* Monitoring the number of typing errors per page in a document, where pages may have different lengths.

---

### 4. Interpreting Control Charts: Rules for Detecting Special Causes

A process is considered out of statistical control if any of the following conditions are met:

1.  **A single point outside the control limits:**
    *   A point falling above the UCL or below the LCL.
    *   *Significance:* This is the most direct indicator of a special cause.

2.  **Run of points on one side of the central line:**
    *   Seven or more consecutive points falling on the same side of the central line.
    *   *Significance:* Suggests a shift in the process average.

3.  **Trends:**
    *   Six or more consecutive points steadily increasing or decreasing.
    *   *Significance:* Indicates a systematic drift or change in the process.

4.  **Cycles:**
    *   Unusual patterns or oscillations, such as repeated upward and downward movements.
    *   *Significance:* May point to periodic changes or influences.

5.  **Too many points near the control limits:**
    *   Two or more consecutive points falling in the outer one-third of the control chart (i.e., within 3 standard deviations but beyond 2 standard deviations from the CL).
    *   *Significance:* Suggests increasing variability or a tendency towards the limits.

6.  **Too few points near the central line:**
    *   One or more consecutive points falling within the middle one-third of the control chart (i.e., within 1 standard deviation of the CL).
    *   *Significance:* May indicate a process that is too tightly controlled or a lack of expected variation.

*   **Textbook Reference:** Juran & Gryna (2004) emphasizes the importance of these rules for sensitive detection of process deviations, going beyond just points outside the limits.

---

### 5. Steps in Constructing and Using Control Charts

1.  **Identify the characteristic to be monitored:** What quality aspect is critical to control?
2.  **Determine the type of data:** Is it variable or attribute data?
3.  **Choose the appropriate control chart:** Based on the data type and subgrouping strategy.
4.  **Collect data:** Gather data in subgroups at regular intervals.
5.  **Calculate control limits:** Use the collected data to calculate the CL, UCL, and LCL.
6.  **Plot the data:** Plot the collected data points on the control chart.
7.  **Interpret the chart:** Check for any out-of-control signals using the rules for detecting special causes.
8.  **Investigate and act:** If the process is out of control, investigate the special cause and implement corrective actions.
9.  **Monitor continuously:** Continue monitoring the process to ensure stability and identify further improvements.

---

### 6. Benefits of Using Control Charts

*   **Early detection of problems:** Identify deviations before they result in a large number of defects.
*   **Process understanding:** Provide insights into process performance and sources of variation.
*   **Reduced scrap and rework:** By controlling processes, the need for costly rework or scrap is minimized.
*   **Improved product/service quality:** Consistent process performance leads to more predictable and higher quality outputs.
*   **Basis for continuous improvement:** Data from control charts guides improvement efforts.
*   **Objective decision-making:** Provide data-driven evidence for process adjustments.
*   **Cost reduction:** Overall reduction in quality-related costs.
*   *Textbook Reference:* Crosby (1979) advocates for prevention, and control charts are a key tool for proactive quality management.

---

### 7. Key Points to Remember

*   **Control charts are NOT specifications:** Control limits are based on actual process performance (common cause variation), while specifications are customer requirements or design targets.
*   **3-sigma limits:** The 3-sigma limits are chosen for their balance between detecting special causes and avoiding false alarms (Type I errors).
*   **Subgrouping:** The way subgroups are formed is critical. Subgroups should be formed from items produced under similar conditions, minimizing variation *within* a subgroup and maximizing variation *between* subgroups (due to potential shifts).
*   **Process Capability:** Control charts indicate if a process is in statistical control. Process capability studies (e.g., Cp, Cpk) are needed to determine if an in-control process meets specification limits.
*   **Regular updates:** As a process improves, the control limits may need to be recalculated to reflect the new, more stable performance.

---

### 8. Practice Questions and Exercises

**Question 1:**
A manufacturing process produces bolts. The diameter of the bolts is measured. You collect 5 subgroups of 4 bolts each. The average diameter for the subgroups are 10.1, 10.3, 9.9, 10.2, 10.0 mm. The ranges for these subgroups are 0.2, 0.3, 0.1, 0.2, 0.1 mm.
Calculate the Central Line, Upper Control Limit, and Lower Control Limit for an $\bar{X}$ chart. (Use A$_3$ = 1.023 for n=4).

**Answer 1:**
*   **Average of subgroup averages ($\bar{\bar{X}}$):**
    (10.1 + 10.3 + 9.9 + 10.2 + 10.0) / 5 = 50.5 / 5 = 10.1 mm
*   **Average of subgroup ranges ($\bar{R}$):**
    (0.2 + 0.3 + 0.1 + 0.2 + 0.1) / 5 = 0.9 / 5 = 0.18 mm
*   **Control Limits for $\bar{X}$ chart (n=4, A$_3$ = 1.023):**
    *   CL = $\bar{\bar{X}}$ = 10.1 mm
    *   UCL = $\bar{\bar{X}}$ + A$_3$ $\bar{R}$ = 10.1 + (1.023 * 0.18) = 10.1 + 0.18414 = 10.284 mm
    *   LCL = $\bar{\bar{X}}$ - A$_3$ $\bar{R}$ = 10.1 - (1.023 * 0.18) = 10.1 - 0.18414 = 9.916 mm

**Question 2:**
In inspecting mobile phones for scratches, you inspect 100 phones each day for 5 days. The number of scratched phones found each day was 3, 5, 2, 4, 3.
Which control chart would be most appropriate, and what are its control limits?

**Answer 2:**
*   **Appropriate Chart:** Since we are counting the number of non-conforming items (scratched phones) and the sample size (100 phones) is constant, an **np-Chart** is most appropriate.
*   **Calculations:**
    *   **Average proportion defective ($\bar{p}$):**
        Total number of scratched phones = 3 + 5 + 2 + 4 + 3 = 17
        Total number of phones inspected = 5 days * 100 phones/day = 500
        $\bar{p}$ = 17 / 500 = 0.034
    *   **Sample size (n):** 100
    *   **Control Limits for np-Chart:**
        *   CL = $n\bar{p}$ = 100 * 0.034 = 3.4
        *   UCL = $n\bar{p}$ + 3 * $\sqrt{n\bar{p}(1-\bar{p})}$ = 3.4 + 3 * $\sqrt{100 * 0.034 * (1 - 0.034)}$
            = 3.4 + 3 * $\sqrt{3.4 * 0.966}$
            = 3.4 + 3 * $\sqrt{3.2844}$
            = 3.4 + 3 * 1.8123
            = 3.4 + 5.4369 = 8.837
        *   LCL = $n\bar{p}$ - 3 * $\sqrt{n\bar{p}(1-\bar{p})}$ = 3.4 - 5.4369 = -2.037
        *   **Note:** Control limits cannot be negative. If the LCL is negative, it is typically set to zero. So, LCL = 0.

**Question 3:**
Consider an X-bar chart with UCL=50, CL=45, and LCL=40. If you observe the following sequence of points: 46, 47, 45, 46, 48, 47, 49.
Is this sequence indicative of a special cause of variation? Explain.

**Answer 3:**
Yes, this sequence is indicative of a special cause of variation. The rule states that if there are seven or more consecutive points on the same side of the central line, it indicates a problem. In this case, all seven points (46, 47, 45, 46, 48, 47, 49) are above the central line of 45. This suggests a shift in the process average upwards.

---

This concludes the study notes for control charts. Remember to practice applying these concepts and be familiar with the different types of charts and their interpretation for successful quality management.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
