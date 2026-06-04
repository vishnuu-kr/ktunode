---
title: "𝑥̅ and R chart problems"
subject: "QUALITY ENGINEERING AND MANAGEMENT"
module: "Module 3: Tools and Techniques in TQM : Affinity diagram "
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1751d0cf4804463b14"
status: "completed"
scrapedAt: "2026-05-20T18:07:06.940Z"
---
## Study Notes: 𝑥̅ and R Chart Problems in TQM

**Subject:** QUALITY ENGINEERING AND MANAGEMENT
**Module:** Module 3: Tools and Techniques in TQM
**Topic:** 𝑥̅ and R Chart Problems

---

### 1. Introduction to Control Charts

**1.1 What are Control Charts?**

Control charts are graphical tools used to monitor a process over time. They help distinguish between common cause (random) variation and special cause (assignable) variation. This allows for proactive process improvement and helps maintain a stable, predictable process.

**1.2 Purpose of Control Charts**

*   **Monitor Process Stability:** Determine if a process is in statistical control (only common cause variation present).
*   **Detect Special Causes:** Identify when a process has shifted or is exhibiting unusual behavior.
*   **Process Improvement:** Provide data-driven insights for identifying root causes of problems and implementing corrective actions.
*   **Decision Making:** Aid in making informed decisions about process adjustments or acceptance of output.

**1.3 Types of Control Charts**

Control charts are broadly categorized based on the type of data they monitor:

*   **Variables Charts:** Used for continuous data (measurements) that can be quantified.
    *   **𝑥̅ (X-bar) Chart:** Monitors the average of subgroups over time. It tracks the central tendency of the process.
    *   **R (Range) Chart:** Monitors the variability within subgroups over time. It tracks the spread or dispersion of the data.
*   **Attributes Charts:** Used for discrete data (counts or proportions) that can be categorized. (e.g., p-chart, np-chart, c-chart, u-chart).

**This module focuses on 𝑥̅ and R charts, which are used for variables data.**

---

### 2. 𝑥̅ Chart (X-bar Chart)

**2.1 Purpose of the 𝑥̅ Chart**

The 𝑥̅ chart is used to monitor the **central tendency** or **average** of a process. It helps answer the question: "Is the average of our process stable and on target?"

**2.2 Construction of an 𝑥̅ Chart**

An 𝑥̅ chart consists of:

*   **Center Line (CL):** Represents the average of the subgroup averages. If the process is in control, this is the estimated process mean.
*   **Upper Control Limit (UCL):** The upper boundary for acceptable variation.
*   **Lower Control Limit (LCL):** The lower boundary for acceptable variation.

The formula for the control limits is generally:

$$ \text{UCL/LCL} = \bar{\bar{x}} \pm 3 \sigma_{\bar{x}} $$

Where:
*   $\bar{\bar{x}}$ (X-double-bar) is the **grand average** of all subgroup averages.
*   $\sigma_{\bar{x}}$ is the **standard deviation of the sampling distribution of the mean**.

**2.3 Estimating Process Parameters**

In practice, we usually don't know the true process mean ($\mu$) and standard deviation ($\sigma$). We estimate these from historical data collected from subgroups.

*   **Estimating $\bar{\bar{x}}$:** The grand average ($\bar{\bar{x}}$) is calculated by averaging all the subgroup averages:
    $$ \bar{\bar{x}} = \frac{\sum_{i=1}^{k} \bar{x}_i}{k} $$
    Where:
    *   $k$ is the number of subgroups.
    *   $\bar{x}_i$ is the average of the $i$-th subgroup.

*   **Estimating $\sigma$ (using R chart):** The standard deviation of the process ($\sigma$) is often estimated using the average range ($\bar{R}$) from the subgroups. The relationship is:
    $$ \sigma \approx \frac{\bar{R}}{d_2} $$
    Where:
    *   $\bar{R}$ is the average of the subgroup ranges.
    *   $d_2$ is a constant from control chart tables that depends on the subgroup size ($n$).

**2.4 Formulas for 𝑥̅ Chart Control Limits**

Using the estimated process standard deviation, the control limits for the 𝑥̅ chart are:

*   **Center Line (CL):** $ \bar{\bar{x}} $
*   **Upper Control Limit (UCL):** $ \bar{\bar{x}} + A_3 \bar{R} $
*   **Lower Control Limit (LCL):** $ \bar{\bar{x}} - A_3 \bar{R} $

Where:
*   $A_3$ is a control chart constant that depends on the subgroup size ($n$).
*   $\bar{R}$ is the average of the subgroup ranges.

**Key Point:** The values of $A_3$ and $d_2$ are found in standard statistical quality control tables (e.g., Montgomery, Besterfield).

---

### 3. R Chart (Range Chart)

**3.1 Purpose of the R Chart**

The R chart is used to monitor the **variability** or **spread** of a process within subgroups. It helps answer the question: "Is the variation within our samples consistent and predictable?"

**3.2 Construction of an R Chart**

An R chart also consists of:

*   **Center Line (CL):** Represents the average range of the subgroups.
*   **Upper Control Limit (UCL):** The upper boundary for acceptable subgroup variability.
*   **Lower Control Limit (LCL):** The lower boundary for acceptable subgroup variability.

The formula for the control limits is generally:

$$ \text{UCL/LCL} = \bar{R} \pm 3 \frac{\sigma_{\bar{R}}}{\sigma} \times \sigma $$

However, the standard form using constants is:

*   **Center Line (CL):** $ \bar{R} $
*   **Upper Control Limit (UCL):** $ D_4 \bar{R} $
*   **Lower Control Limit (LCL):** $ D_3 \bar{R} $

Where:
*   $\bar{R}$ is the average of the subgroup ranges.
*   $D_4$ and $D_3$ are control chart constants that depend on the subgroup size ($n$).

**3.3 Calculating Subgroup Ranges**

The range ($R_i$) for each subgroup is the difference between the maximum and minimum values in that subgroup:

$$ R_i = \text{Maximum value in subgroup} - \text{Minimum value in subgroup} $$

**3.4 Calculating the Average Range ($\bar{R}$)**

The average range ($\bar{R}$) is the average of all the subgroup ranges:

$$ \bar{R} = \frac{\sum_{i=1}^{k} R_i}{k} $$
Where:
*   $k$ is the number of subgroups.
*   $R_i$ is the range of the $i$-th subgroup.

**Important Note on LCL for R Chart:** For subgroup sizes $n \le 4$, the $D_3$ constant is 0. This means the LCL for the R chart is 0 for small subgroups. A process is considered out of control if any subgroup range is negative (which is impossible by definition) or if any point falls below a positive LCL (if it exists). However, if the LCL is 0, points falling at 0 are considered in control.

---

### 4. Using 𝑥̅ and R Charts Together

**4.1 Why use both?**

The 𝑥̅ chart monitors the process average, while the R chart monitors the process variability. A process can be in control for the average but out of control for variability, or vice versa.

*   **If the R chart is out of control (upper limit breached):** This indicates increased variability within subgroups. The process is unstable, and the 𝑥̅ chart's control limits may not be reliable. Corrective action should focus on reducing variation.
*   **If the 𝑥̅ chart is out of control (upper or lower limit breached):** This indicates the process average has shifted. The variability within subgroups might still be in control. Corrective action should focus on bringing the average back to the target.
*   **If both are out of control:** Address both issues, often starting with reducing variability.

**4.2 Steps to Construct and Analyze 𝑥̅ and R Charts**

1.  **Define the process and the characteristic to be measured.**
2.  **Collect data in rational subgroups.** Rational subgroups are samples taken over time under similar conditions.
3.  **Determine the subgroup size ($n$) and number of subgroups ($k$).** A common starting point is $n=5$ and $k=20-25$ subgroups.
4.  **Calculate the average ($\bar{x}_i$) and range ($R_i$) for each subgroup.**
5.  **Calculate the grand average ($\bar{\bar{x}}$) and the average range ($\bar{R}$).**
6.  **Find the appropriate control chart constants ($A_3$, $D_3$, $D_4$) based on the subgroup size ($n$) from statistical tables.**
7.  **Calculate the control limits for the 𝑥̅ chart:**
    *   $ \text{CL}_{\bar{x}} = \bar{\bar{x}} $
    *   $ \text{UCL}_{\bar{x}} = \bar{\bar{x}} + A_3 \bar{R} $
    *   $ \text{LCL}_{\bar{x}} = \bar{\bar{x}} - A_3 \bar{R} $
8.  **Calculate the control limits for the R chart:**
    *   $ \text{CL}_R = \bar{R} $
    *   $ \text{UCL}_R = D_4 \bar{R} $
    *   $ \text{LCL}_R = D_3 \bar{R} $
9.  **Plot the data:** Plot the subgroup averages on the 𝑥̅ chart and the subgroup ranges on the R chart.
10. **Interpret the charts:**
    *   Look for points outside the control limits.
    *   Look for non-random patterns (trends, cycles, runs of points above/below the center line).
11. **Investigate out-of-control signals:** Identify the root cause of special variation and implement corrective actions.
12. **Recalculate control limits (optional but recommended):** After implementing changes, recalculate control limits using data from the improved process to assess effectiveness.

---

### 5. Affinity Diagram (Brief Mention of its Role in TQM)

While this module focuses on 𝑥̅ and R charts, it's part of the "Tools and Techniques in TQM." The **Affinity Diagram** (also known as KJ method) is a TQM tool used to organize a large number of ideas or data points into natural groupings.

**How it relates to 𝑥̅ and R Charts:**

*   If initial data analysis from 𝑥̅ and R charts reveals issues (out-of-control points, patterns), the **causes** of these issues might be numerous and diverse.
*   An Affinity Diagram can be used to **organize the potential causes** identified through brainstorming or root cause analysis related to the out-of-control signals. This helps in focusing improvement efforts on the most impactful areas.

**(CO3: Implement different tools and techniques in TQM - Affinity Diagram as a complementary tool)**

---

### 6. Example Problem and Solution

**Problem:**

A company is monitoring the diameter of manufactured bolts. They collect data from 5 subgroups, with each subgroup containing 5 bolts ($n=5$). The data is as follows:

| Subgroup No. ($i$) | Bolt 1 | Bolt 2 | Bolt 3 | Bolt 4 | Bolt 5 | $\bar{x}_i$ | $R_i$ |
| :----------------- | :----- | :----- | :----- | :----- | :----- | :---------- | :---- |
| 1                  | 10.1   | 10.2   | 10.0   | 10.3   | 10.1   | 10.14       | 0.3   |
| 2                  | 10.2   | 10.3   | 10.1   | 10.4   | 10.2   | 10.24       | 0.3   |
| 3                  | 10.3   | 10.4   | 10.5   | 10.3   | 10.4   | 10.36       | 0.2   |
| 4                  | 10.4   | 10.5   | 10.4   | 10.6   | 10.5   | 10.48       | 0.2   |
| 5                  | 10.5   | 10.6   | 10.5   | 10.7   | 10.6   | 10.58       | 0.2   |

**Assume the required control chart constants for n=5 are:**
*   $A_3 = 1.463$
*   $D_3 = 0$
*   $D_4 = 2.089$

**Task:**
a) Calculate the control limits for the 𝑥̅ chart.
b) Calculate the control limits for the R chart.
c) Plot the data on the charts and determine if the process is in statistical control.

**Solution:**

**Step 1: Calculate $\bar{\bar{x}}$ and $\bar{R}$**

*   **Subgroup Averages ($\bar{x}_i$):**
    *   $\bar{x}_1 = (10.1 + 10.2 + 10.0 + 10.3 + 10.1) / 5 = 10.14$
    *   $\bar{x}_2 = (10.2 + 10.3 + 10.1 + 10.4 + 10.2) / 5 = 10.24$
    *   $\bar{x}_3 = (10.3 + 10.4 + 10.5 + 10.3 + 10.4) / 5 = 10.36$
    *   $\bar{x}_4 = (10.4 + 10.5 + 10.4 + 10.6 + 10.5) / 5 = 10.48$
    *   $\bar{x}_5 = (10.5 + 10.6 + 10.5 + 10.7 + 10.6) / 5 = 10.58$

*   **Subgroup Ranges ($R_i$):**
    *   $R_1 = 10.3 - 10.0 = 0.3$
    *   $R_2 = 10.4 - 10.1 = 0.3$
    *   $R_3 = 10.5 - 10.3 = 0.2$
    *   $R_4 = 10.6 - 10.4 = 0.2$
    *   $R_5 = 10.7 - 10.5 = 0.2$

*   **Grand Average ($\bar{\bar{x}}$):**
    $ \bar{\bar{x}} = (10.14 + 10.24 + 10.36 + 10.48 + 10.58) / 5 = 10.36 $

*   **Average Range ($\bar{R}$):**
    $ \bar{R} = (0.3 + 0.3 + 0.2 + 0.2 + 0.2) / 5 = 0.24 $

**Step 2: Calculate Control Limits**

a) **𝑥̅ Chart Control Limits (n=5, $A_3 = 1.463$):**
    *   $ \text{CL}_{\bar{x}} = \bar{\bar{x}} = 10.36 $
    *   $ \text{UCL}_{\bar{x}} = \bar{\bar{x}} + A_3 \bar{R} = 10.36 + (1.463 \times 0.24) = 10.36 + 0.351 = 10.711 $
    *   $ \text{LCL}_{\bar{x}} = \bar{\bar{x}} - A_3 \bar{R} = 10.36 - (1.463 \times 0.24) = 10.36 - 0.351 = 10.009 $

b) **R Chart Control Limits (n=5, $D_3 = 0$, $D_4 = 2.089$):**
    *   $ \text{CL}_R = \bar{R} = 0.24 $
    *   $ \text{UCL}_R = D_4 \bar{R} = 2.089 \times 0.24 = 0.501 $
    *   $ \text{LCL}_R = D_3 \bar{R} = 0 \times 0.24 = 0 $

**Step 3: Plot and Interpret**

*   **Plotting:**
    *   On the 𝑥̅ chart, plot the subgroup averages (10.14, 10.24, 10.36, 10.48, 10.58) against the center line (10.36) and control limits (UCL=10.711, LCL=10.009).
    *   On the R chart, plot the subgroup ranges (0.3, 0.3, 0.2, 0.2, 0.2) against the center line (0.24) and control limits (UCL=0.501, LCL=0).

*   **Interpretation:**
    *   **R Chart:** All plotted ranges (0.3, 0.3, 0.2, 0.2, 0.2) are within the control limits (UCL=0.501, LCL=0). There are no points above the UCL or below the LCL, and no obvious non-random patterns. Thus, the **variability of the process is in statistical control.**
    *   **𝑥̅ Chart:** All plotted subgroup averages (10.14, 10.24, 10.36, 10.48, 10.58) are within the control limits (UCL=10.711, LCL=10.009). There are no points outside the limits. There might be a slight trend upwards, but with only 5 points, it's not definitively out of control based on common rules (e.g., 7 points in a row on one side of the center line).

**Conclusion:** Based on this data, the process for manufacturing bolts is considered to be **in statistical control** for both the average diameter and the variation in diameter.

**(CO4: Implement different statistical quality control techniques - Demonstrated through this example)**

---

### 7. Practice Questions

**Question 1:**
What is the primary purpose of an 𝑥̅ chart?
a) To monitor the range of subgroups.
b) To monitor the average of subgroups and detect shifts in the process mean.
c) To monitor the proportion of defects.
d) To monitor the standard deviation of the process.

**Question 2:**
If the LCL for an R chart is 0, and a subgroup range is calculated as 0, is this point in or out of control?

**Question 3:**
Given the following data for 3 subgroups (n=4):
Subgroup 1: 5, 6, 5, 7 (Average = 5.75, Range = 2)
Subgroup 2: 6, 7, 8, 7 (Average = 7.00, Range = 2)
Subgroup 3: 5, 6, 7, 6 (Average = 6.00, Range = 2)

Control chart constants for n=4 are: $A_3 = 1.023$, $D_3 = 0$, $D_4 = 2.282$.

Calculate:
a) Grand Average ($\bar{\bar{x}}$)
b) Average Range ($\bar{R}$)
c) Control limits for the 𝑥̅ chart.
d) Control limits for the R chart.
e) Is the process in statistical control based on this limited data?

---

### 8. Answers to Practice Questions

**Answer 1:**
b) To monitor the average of subgroups and detect shifts in the process mean.

**Answer 2:**
If the LCL for an R chart is 0, a subgroup range of 0 is **in control**. It indicates no variation within that subgroup, which is desirable.

**Answer 3:**

a) **Grand Average ($\bar{\bar{x}}$):**
   $ \bar{\bar{x}} = (5.75 + 7.00 + 6.00) / 3 = 18.75 / 3 = 6.25 $

b) **Average Range ($\bar{R}$):**
   $ \bar{R} = (2 + 2 + 2) / 3 = 6 / 3 = 2.00 $

c) **𝑥̅ Chart Control Limits (n=4, $A_3 = 1.023$):**
    *   $ \text{CL}_{\bar{x}} = \bar{\bar{x}} = 6.25 $
    *   $ \text{UCL}_{\bar{x}} = \bar{\bar{x}} + A_3 \bar{R} = 6.25 + (1.023 \times 2.00) = 6.25 + 2.046 = 8.296 $
    *   $ \text{LCL}_{\bar{x}} = \bar{\bar{x}} - A_3 \bar{R} = 6.25 - (1.023 \times 2.00) = 6.25 - 2.046 = 4.204 $

d) **R Chart Control Limits (n=4, $D_3 = 0$, $D_4 = 2.282$):**
    *   $ \text{CL}_R = \bar{R} = 2.00 $
    *   $ \text{UCL}_R = D_4 \bar{R} = 2.282 \times 2.00 = 4.564 $
    *   $ \text{LCL}_R = D_3 \bar{R} = 0 \times 2.00 = 0 $

e) **Is the process in statistical control?**
    *   **R Chart:** The subgroup ranges are 2, 2, 2. All are within the control limits (UCL=4.564, LCL=0). The process variability appears to be in control.
    *   **𝑥̅ Chart:** The subgroup averages are 5.75, 7.00, 6.00. All are within the control limits (UCL=8.296, LCL=4.204). Based on this limited data, there are no points outside the limits.

    **Conclusion:** Based on this very limited data (only 3 subgroups), the process appears to be in statistical control. However, with more data, other patterns might emerge that could indicate a loss of control.

---

### 9. Important Points to Remember

*   **Rational Subgroups:** Data must be collected in rational subgroups for 𝑥̅ and R charts to be meaningful.
*   **Subgroup Size:** The choice of subgroup size ($n$) affects the sensitivity of the charts. Smaller subgroups ($n<5$) make the 𝑥̅ chart more sensitive to small shifts, while larger subgroups ($n=5$ to $10$) make the R chart more sensitive to changes in variability.
*   **Constants ($A_3, D_3, D_4$):** Always use the correct constants based on the subgroup size ($n$) from reliable statistical tables.
*   **Interpreting Together:** Always interpret the 𝑥̅ and R charts in conjunction with each other. An out-of-control signal on the R chart often invalidates the limits on the 𝑥̅ chart.
*   **Non-Random Patterns:** Beyond points outside limits, look for trends, cycles, runs, and hugging the center line, which can also indicate a loss of control.
*   **Continuous Improvement:** Control charts are not just for monitoring; they are a tool for identifying opportunities for improvement.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


### 10. Textbook References and Alignment with Course Outcomes

This module's content directly supports several course outcomes:

*   **CO1: Develop knowledge of quality management and contributions of quality gurus. (Knowledge Level: K2)**
    *   Understanding control charts is fundamental to statistical quality control, a key pillar of modern quality management, often attributed to pioneers like Shewhart.
*   **CO3: Implement different tools and techniques in TQM (Knowledge Level: K3)**
    *   The construction, calculation, and interpretation of 𝑥̅ and R charts are practical skills that fall under implementing TQM tools.
*   **CO4: Implement different statistical quality control techniques (Knowledge Level: K3)**
    *   This module is a core component of statistical quality control (SQC) techniques.

**Textbook Alignment:**

*   **Besterfield D. H., et al. (2018) - Total Quality Management (Fifth Edition):** Likely covers control charts extensively in sections related to Statistical Process Control (SPC) and quality tools. Chapters on process control will detail the construction and application of 𝑥̅ and R charts.
*   **Montgomery D. C. (Third Edition) - Introduction to Statistical Quality Control:** This is a primary reference for control charts. Chapters 3 and 4 will provide detailed explanations, formulas, constants, and examples for 𝑥̅ and R charts.
*   **Mitra A. (1998) - Fundamentals of Quality Control and Improvement (Second Edition):** Will offer a practical approach to control charts, including their application and interpretation.

These notes are structured to provide the foundational knowledge and practical application required to understand and use 𝑥̅ and R charts, aligning with the learning objectives and course outcomes.