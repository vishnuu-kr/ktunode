---
title: "𝑥̅ and R chart problems"
subject: "QUALITY ENGINEERING AND MANAGEMENT"
module: "Module 3: Tools and Techniques in TQM : Affinity diagram"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf480446417d"
status: "completed"
scrapedAt: "2026-05-20T18:16:50.564Z"
---
# QUALITY ENGINEERING AND MANAGEMENT - Module 3: Tools and Techniques in TQM

## Topic: 𝑥̅ and R Chart Problems

This module delves into the practical application of tools and techniques in Total Quality Management (TQM). While the primary focus of Module 3 is often on qualitative tools like the Affinity Diagram, this specific topic, "𝑥̅ and R Chart Problems," bridges into the realm of Statistical Quality Control (SQC) techniques. This aligns with Course Outcome CO4: "Implement different statistical quality control techniques (Knowledge Level: K3)."

### 1. Introduction to 𝑥̅ and R Charts (Control Charts)

Control charts are graphical tools used in SQC to monitor a process over time and determine if it is operating within statistical control. They help distinguish between variation that is inherent to the process (common cause variation) and variation that is due to specific assignable causes (special cause variation).

*   **Purpose:** To detect shifts or changes in a process that may indicate a problem.
*   **Key Concept:** Statistical Control - A process is in statistical control when it exhibits only common cause variation and no special cause variation.
*   **Types of Variation:**
    *   **Common Cause Variation (Chance Variation):** Inherent variation present in any process. It is random and cannot be eliminated without changing the process itself.
    *   **Special Cause Variation (Assignable Cause Variation):** Variation caused by specific, identifiable factors that are not part of the normal process. These can usually be detected and eliminated.

#### 1.1. 𝑥̅ (X-bar) Chart

*   **Purpose:** To monitor the **average** of a process characteristic. It tracks the central tendency of the data.
*   **What it Monitors:** The mean value of the samples taken over time.
*   **How it Works:** It plots the average of subgroups of data (e.g., measurements from 5 consecutive units) against time or sample number.

#### 1.2. R Chart (Range Chart)

*   **Purpose:** To monitor the **variability** or dispersion of a process characteristic within subgroups.
*   **What it Monitors:** The range (difference between the highest and lowest value) within each subgroup.
*   **How it Works:** It plots the range of subgroups against time or sample number.

#### 1.3. Relationship between 𝑥̅ and R Charts

*   The 𝑥̅ chart tells us if the process average is changing.
*   The R chart tells us if the process variability is changing.
*   **Important Point:** Both charts should be analyzed together. A process can have a stable average but increasing variability, or vice versa, which would not be fully captured by looking at only one chart.

### 2. Construction of 𝑥̅ and R Charts

To construct these charts, we need to collect data in subgroups.

#### 2.1. Data Collection

*   **Subgroup Size (n):** Typically between 2 and 10. A larger subgroup size makes the 𝑥̅ chart more sensitive to shifts in the process mean, but increases the time between samples.
*   **Number of Subgroups (k):** Usually 20-25 subgroups are recommended for initial setup to establish a stable baseline.

#### 2.2. Calculations for Initial Setup (Phase I)

Once data is collected, the following calculations are made:

*   **Calculate the average for each subgroup (𝑥̅ᵢ):**
    $$ \bar{x}_i = \frac{\sum_{j=1}^{n} x_{ij}}{n} $$
    where $x_{ij}$ is the $j^{th}$ measurement in the $i^{th}$ subgroup.

*   **Calculate the range for each subgroup (Rᵢ):**
    $$ R_i = X_{max,i} - X_{min,i} $$
    where $X_{max,i}$ and $X_{min,i}$ are the maximum and minimum values in the $i^{th}$ subgroup.

*   **Calculate the overall average of the subgroup averages (𝑥̅̅):**
    $$ \bar{\bar{x}} = \frac{\sum_{i=1}^{k} \bar{x}_i}{k} $$

*   **Calculate the average of the subgroup ranges (R̄):**
    $$ \bar{R} = \frac{\sum_{i=1}^{k} R_i}{k} $$

#### 2.3. Calculating Control Limits

Control limits are used to define the boundaries of expected variation.

*   **For the 𝑥̅ Chart:**
    *   **Center Line (CL):** $\bar{\bar{x}}$
    *   **Upper Control Limit (UCL):** $\bar{\bar{x}} + A_2 \bar{R}$
    *   **Lower Control Limit (LCL):** $\bar{\bar{x}} - A_2 \bar{R}$

*   **For the R Chart:**
    *   **Center Line (CL):** $\bar{R}$
    *   **Upper Control Limit (UCL):** $D_4 \bar{R}$
    *   **Lower Control Limit (LCL):** $D_3 \bar{R}$

**Note:** The constants $A_2$, $D_3$, and $D_4$ depend on the subgroup size ($n$) and are found in standard statistical tables (e.g., Appendix C in Montgomery's "Introduction to Statistical Quality Control").

#### 2.4. Factors for Control Charts (Example for common subgroup sizes)

| Subgroup Size (n) | $A_2$ | $D_3$ | $D_4$ |
| :---------------- | :---- | :---- | :---- |
| 2                 | 1.880 | 0     | 3.267 |
| 3                 | 1.023 | 0     | 2.574 |
| 4                 | 0.729 | 0     | 2.282 |
| 5                 | 0.577 | 0     | 2.114 |
| 6                 | 0.483 | 0     | 2.004 |
| 7                 | 0.419 | 0.076 | 1.924 |
| 8                 | 0.371 | 0.136 | 1.864 |
| 9                 | 0.337 | 0.184 | 1.816 |
| 10                | 0.308 | 0.223 | 1.777 |

**Important Point:** The values of $D_3$ are 0 for $n \le 6$. This means the LCL for the R chart is 0 when the subgroup size is 6 or less.

### 3. Interpreting Control Charts (Phase II)

Once the control limits are established, the process is monitored by plotting subsequent subgroup data.

#### 3.1. Rules for Detecting Out-of-Control Conditions

A process is considered out of statistical control if any of the following conditions occur:

*   **Rule 1: A single point outside the control limits.**
    *   A point on the 𝑥̅ chart is above the UCL or below the LCL.
    *   A point on the R chart is above the UCL or below the LCL.

*   **Rule 2: Three consecutive points on the same side of the center line.**
    *   Three consecutive points on the 𝑥̅ chart are above the center line.
    *   Three consecutive points on the 𝑥̅ chart are below the center line.
    *   Similarly for the R chart.

*   **Rule 3: Six consecutive points steadily increasing or decreasing.**
    *   A trend of increasing values for six consecutive points on the 𝑥̅ chart.
    *   A trend of decreasing values for six consecutive points on the 𝑥̅ chart.
    *   Similarly for the R chart.

*   **Rule 4: Fourteen consecutive points alternating up and down.**
    *   A pattern of alternating points above and below the center line for fourteen consecutive points on the 𝑥̅ chart.
    *   Similarly for the R chart.

*   **Rule 5: Two out of three consecutive points near the control limits.**
    *   Two out of three consecutive points on the 𝑥̅ chart fall in the outer one-third of the chart (i.e., between the center line and the control limits, but closer to the control limits). This rule is sometimes more sensitive than Rule 1.

**Important Point:** These rules are designed to detect patterns that suggest a change in the process, even if no single point is outside the limits.

#### 3.2. What to do when Out-of-Control Conditions are Detected?

*   **Investigate:** Identify the potential assignable cause(s). This might involve checking equipment, raw materials, operator practices, environmental conditions, etc.
*   **Correct:** Once the cause is identified, take corrective action to eliminate it.
*   **Re-evaluate Control Limits:** After making changes to the process, it's often necessary to recalculate the control limits based on new data to ensure the process has truly improved and is stable.

### 4. Problems and Examples

This section provides practical examples of how to calculate and interpret 𝑥̅ and R charts.

**Example 1: Setting up the Charts**

A manufacturer of bolts is monitoring the length of the bolts produced. They take subgroups of 5 bolts every hour. After 25 hours, they have the following data:

| Hour | Subgroup Averages ($\bar{x}_i$) | Subgroup Ranges (Rᵢ) |
| :--- | :----------------------------- | :------------------- |
| 1    | 50.2                           | 0.8                  |
| 2    | 50.0                           | 0.6                  |
| 3    | 50.5                           | 1.0                  |
| 4    | 50.3                           | 0.7                  |
| 5    | 49.9                           | 0.9                  |
| 6    | 50.1                           | 0.7                  |
| 7    | 50.4                           | 1.1                  |
| 8    | 50.2                           | 0.8                  |
| 9    | 49.8                           | 0.9                  |
| 10   | 50.3                           | 0.7                  |
| 11   | 50.6                           | 1.2                  |
| 12   | 50.1                           | 0.8                  |
| 13   | 50.0                           | 0.9                  |
| 14   | 50.5                           | 1.0                  |
| 15   | 50.2                           | 0.8                  |
| 16   | 50.4                           | 1.1                  |
| 17   | 50.3                           | 0.7                  |
| 18   | 49.9                           | 0.9                  |
| 19   | 50.7                           | 1.3                  |
| 20   | 50.2                           | 0.8                  |
| 21   | 50.0                           | 0.9                  |
| 22   | 50.6                           | 1.0                  |
| 23   | 50.4                           | 1.1                  |
| 24   | 50.3                           | 0.7                  |
| 25   | 50.1                           | 0.8                  |

**Calculations:**

*   Subgroup size ($n$) = 5
*   Number of subgroups ($k$) = 25

1.  **Calculate $\bar{\bar{x}}$:**
    Sum of $\bar{x}_i = 50.2 + 50.0 + ... + 50.1 = 1255.0$
    $\bar{\bar{x}} = 1255.0 / 25 = 50.2$

2.  **Calculate $\bar{R}$:**
    Sum of $R_i = 0.8 + 0.6 + ... + 0.8 = 20.9$
    $\bar{R} = 20.9 / 25 = 0.836$

3.  **Find Control Limit Constants:**
    For $n=5$, $A_2 = 0.577$, $D_3 = 0$, $D_4 = 2.114$.

4.  **Calculate Control Limits:**
    *   **𝑥̅ Chart:**
        *   CL = $\bar{\bar{x}} = 50.2$
        *   UCL = $\bar{\bar{x}} + A_2 \bar{R} = 50.2 + (0.577 \times 0.836) = 50.2 + 0.482 = 50.682$
        *   LCL = $\bar{\bar{x}} - A_2 \bar{R} = 50.2 - (0.577 \times 0.836) = 50.2 - 0.482 = 49.718$

    *   **R Chart:**
        *   CL = $\bar{R} = 0.836$
        *   UCL = $D_4 \bar{R} = 2.114 \times 0.836 = 1.767$
        *   LCL = $D_3 \bar{R} = 0 \times 0.836 = 0$

**Interpretation (Phase I):**
Plot these values for each hour. If all points fall within the control limits and there are no specific patterns indicating out-of-control conditions, the process is considered stable during this initial period. The calculated limits can then be used for ongoing monitoring (Phase II).

**Example 2: Monitoring a Process (Phase II)**

Suppose the following data is collected after the control limits from Example 1 have been established ($\bar{\bar{x}} = 50.2$, UCL$_{\bar{x}} = 50.682$, LCL$_{\bar{x}} = 49.718$, $\bar{R} = 0.836$, UCL$_R = 1.767$, LCL$_R = 0$).

| Hour | Subgroup Averages ($\bar{x}_i$) | Subgroup Ranges (Rᵢ) |
| :--- | :----------------------------- | :------------------- |
| 26   | 50.3                           | 0.8                  |
| 27   | 50.5                           | 0.9                  |
| 28   | 50.7                           | 1.0                  |
| 29   | 50.8                           | 1.1                  |
| 30   | 50.9                           | 1.2                  |
| 31   | 50.8                           | 1.0                  |
| 32   | 50.7                           | 0.9                  |
| 33   | 50.6                           | 0.8                  |
| 34   | 50.5                           | 0.7                  |
| 35   | 50.4                           | 0.8                  |

**Analysis:**

*   **R Chart:** All points (0.8, 0.9, 1.0, 1.1, 1.2, 1.0, 0.9, 0.8, 0.7, 0.8) are within the control limits (0 to 1.767). There are no runs or patterns indicating an out-of-control condition on the R chart.
*   **𝑥̅ Chart:**
    *   Hour 26: 50.3 (Within limits)
    *   Hour 27: 50.5 (Within limits)
    *   Hour 28: 50.7 (This is above the UCL of 50.682!)

**Conclusion:**
The 𝑥̅ chart shows a point at Hour 28 that is above the Upper Control Limit. This indicates that the process average length of the bolts has shifted. An investigation should be launched to determine the cause of this shift. For example, a machine might have been set incorrectly, or a batch of raw material with slightly different properties might have been used. Corrective action should be taken.

### 5. Practice Questions

**Question 1:**
A process is monitored using 𝑥̅ and R charts with a subgroup size of 4. After collecting 20 subgroups, the following summary statistics are calculated:
$\bar{\bar{x}} = 25.5$
$\bar{R} = 3.0$
The constants for $n=4$ are $A_2 = 0.729$, $D_3 = 0$, $D_4 = 2.282$.
Calculate the control limits for the 𝑥̅ and R charts.

**Question 2:**
The following data points are plotted on an 𝑥̅ chart. The center line is at 50, the UCL is at 53, and the LCL is at 47.

| Sample | Value | Sample | Value |
| :----- | :---- | :----- | :---- |
| 1      | 51    | 11     | 52    |
| 2      | 52    | 12     | 53    |
| 3      | 53    | 13     | 51    |
| 4      | 51    | 14     | 50    |
| 5      | 52    | 15     | 49    |
| 6      | 53    | 16     | 48    |
| 7      | 51    | 17     | 47    |
| 8      | 50    | 18     | 48    |
| 9      | 51    | 19     | 49    |
| 10     | 52    | 20     | 50    |

Which rules for detecting out-of-control conditions are violated, if any?

**Question 3:**
Explain the difference between common cause variation and special cause variation in the context of control charts. Why is it important to distinguish between them?

### 6. Answers to Practice Questions

**Answer 1:**

*   **For the 𝑥̅ Chart:**
    *   CL = $\bar{\bar{x}} = 25.5$
    *   UCL = $\bar{\bar{x}} + A_2 \bar{R} = 25.5 + (0.729 \times 3.0) = 25.5 + 2.187 = 27.687$
    *   LCL = $\bar{\bar{x}} - A_2 \bar{R} = 25.5 - (0.729 \times 3.0) = 25.5 - 2.187 = 23.313$

*   **For the R Chart:**
    *   CL = $\bar{R} = 3.0$
    *   UCL = $D_4 \bar{R} = 2.282 \times 3.0 = 6.846$
    *   LCL = $D_3 \bar{R} = 0 \times 3.0 = 0$

**Answer 2:**

Let's analyze the data against the control limits (CL=50, UCL=53, LCL=47):

*   **Sample 3:** 53 (On the UCL - not technically *outside*)
*   **Sample 12:** 53 (On the UCL - not technically *outside*)

Now let's check for runs:

*   **Rule 2 (Three consecutive points on the same side of the center line):**
    *   Samples 2, 3, 12: 52, 53, 53 (All on or above the center line. Consecutive points: 2, 3, 12. Samples 2 and 3 are above CL. Sample 12 is above CL. This isn't a strict violation of rule 2 as points 2 and 3 are consecutive and above CL. Point 12 is above CL too. Let's consider the sequence of points *relative to the center line*.
    *   Points 51, 52, 53 (Samples 2-4): All on or above the center line. Not 3 consecutive above.
    *   Points 53, 51, 52 (Samples 11-13): Mixed.
    *   Points 50, 49, 48, 47, 48, 49, 50 (Samples 14-20): We have a downward trend.
        *   Samples 17, 18, 19, 20 (47, 48, 49, 50) are all above the LCL. Let's check rule 3.

*   **Rule 3 (Six consecutive points steadily increasing or decreasing):**
    *   Consider the sequence from Sample 14: 50, 49, 48, 47, 48, 49, 50.
    *   There is a decreasing sequence from sample 14 (50) to sample 17 (47). That's 4 points: 50, 49, 48, 47.
    *   Then it increases: 48, 49, 50.
    *   Let's re-examine for *runs*.
    *   Points 47, 48, 49, 50 (Samples 17-20) are all above the LCL.
    *   Let's look at the sequence of 50, 49, 48, 47, 48, 49, 50 (samples 14-20).
    *   Consider samples 14-19: 50, 49, 48, 47, 48, 49. This is not a steady increase or decrease.
    *   Let's look at samples 14-19 for *rule 2*:
        *   Samples 14-16: 50, 49, 48 (mixed relative to CL)
        *   Samples 15-17: 49, 48, 47 (all below CL) - **Violation of Rule 2 (samples 15, 16, 17 are consecutive and below CL).**
        *   Samples 16-18: 48, 47, 48 (mixed relative to CL)
        *   Samples 17-19: 47, 48, 49 (all above LCL and below CL) - Not a violation of rule 2.
        *   Samples 18-20: 48, 49, 50 (all above LCL and below CL) - Not a violation of rule 2.

    *   **Rule 3 (Six consecutive points steadily increasing or decreasing):**
        *   Consider samples 14 through 19: 50, 49, 48, 47, 48, 49. Not a steady decrease.
        *   Consider samples 15 through 20: 49, 48, 47, 48, 49, 50. Not a steady decrease.
        *   However, consider samples 14-19: 50, 49, 48, 47, 48, 49. This shows a trend toward decreasing then increasing.

    *   **Revisiting Rule 2 for a Clear Violation:**
        Samples 15, 16, 17 (values 49, 48, 47) are all below the center line (50) and are consecutive. This violates Rule 2.

**Answer 3:**

*   **Common Cause Variation:** This is the inherent, natural variation present in any process. It's random and unpredictable. Think of the slight variations in measurement due to the sensitivity of a caliper or the natural inconsistencies in raw materials. Common cause variation is always present and is reduced by improving the process itself (e.g., better machinery, better training, higher quality materials).
*   **Special Cause Variation:** This variation arises from specific, identifiable factors that are not part of the normal process. These are also known as assignable causes. Examples include a machine malfunction, a worn tool, a change in operator procedure, or an environmental disturbance (e.g., power surge). Special cause variation is erratic and can be detected and eliminated by identifying and removing the cause.

**Importance of Distinguishing:**
It is crucial to distinguish between these two types of variation for effective quality improvement.
*   If you try to fix common cause variation by making individual adjustments, you will likely introduce more variation and make the process worse. It's like trying to adjust a perfectly tuned engine for every minor fluctuation in sound.
*   If you ignore special cause variation, the process will continue to produce defects or drift out of control. Control charts help identify when special causes are present.
*   The goal of SQC is to identify and eliminate special causes of variation, bringing the process into a state of statistical control. Once the process is stable (only common cause variation remains), efforts can focus on reducing common cause variation by systematically improving the process itself.

### 7. Important Points to Remember

*   **Control charts are tools for *monitoring* and *detecting* changes, not for *making* changes.** Once a problem is detected, investigation and corrective action are required.
*   **Subgroup size is critical.** A larger subgroup size makes the 𝑥̅ chart more sensitive to shifts in the mean, but reduces the frequency of monitoring.
*   **Phase I vs. Phase II:** Phase I is for establishing control limits using historical data. Phase II is for ongoing monitoring of the process.
*   **Control charts help prevent over-adjustment.** They provide a statistical basis for deciding when a process change is significant enough to warrant intervention.
*   **Always analyze both the 𝑥̅ and R charts together.** A process may appear stable on one chart but be out of control on the other.
*   **Understand the rules for out-of-control conditions.** These rules are crucial for correctly interpreting the charts.

### 8. Alignment with Course Outcomes

*   **CO1: Develop knowledge of quality management and contributions of quality gurus.** (While not directly about gurus, understanding control charts is fundamental to quality management principles advocated by many gurus like Deming).
*   **CO2: Identify various human dimensions of TQM.** (Control charts can highlight the impact of human factors like operator error or training deficiencies on process variation).
*   **CO3: Implement different tools and techniques in TQM.** (This topic directly addresses the implementation of a key statistical tool).
*   **CO4: Implement different statistical quality control techniques.** (This is the primary focus of 𝑥̅ and R charts).
*   **CO5: Demonstrate knowledge of the underlying principles of strategic quality management.** (Statistical control is a cornerstone of strategic quality management, enabling stable, predictable, and improving processes).

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


### 9. References and Further Reading

*   **Montgomery, D. C. (2007). *Introduction to Statistical Quality Control* (6th ed.). John Wiley & Sons.** (This is a definitive text for control charts, providing detailed explanations, tables, and examples.)
*   **Besterfield, D. H., et al. (2018). *Total Quality Management* (5th ed.). Pearson Education.** (This textbook will likely cover control charts as part of the broader TQM framework, perhaps in a chapter on SQC tools.)
*   **Mitra, A. (1998). *Fundamentals of Quality Control and Improvement* (2nd ed.). PHI.** (Another strong resource for understanding the fundamentals of statistical quality control.)

This detailed note covers the theoretical and practical aspects of 𝑥̅ and R charts, equipping you with the knowledge to understand, construct, and interpret these vital tools in Quality Engineering and Management.