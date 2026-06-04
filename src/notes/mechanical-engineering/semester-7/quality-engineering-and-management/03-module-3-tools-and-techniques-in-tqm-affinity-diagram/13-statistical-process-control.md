---
title: "Statistical Process Control"
subject: "QUALITY ENGINEERING AND MANAGEMENT"
module: "Module 3: Tools and Techniques in TQM : Affinity diagram"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf480446417b"
status: "completed"
scrapedAt: "2026-05-20T18:16:49.167Z"
---
Here are comprehensive study notes on Statistical Process Control (SPC) within the context of TQM, designed to align with the provided learning outcomes, course outcomes, and textbook references.

---

# QUALITY ENGINEERING AND MANAGEMENT

## Module 3: Tools and Techniques in TQM

### Topic: Statistical Process Control (SPC)

---

### 1. Introduction to Statistical Process Control (SPC)

**1.1 What is Statistical Process Control?**

*   **Definition:** Statistical Process Control (SPC) is a method of quality control which uses statistical methods to monitor and control a process. It is a set of tools and techniques used to understand and manage a process to ensure it operates efficiently and produces conforming products or services.
*   **Core Principle:** SPC is based on the concept of **statistical thinking** – understanding that variation is inherent in any process and that by understanding and controlling this variation, we can improve process performance and product quality.
*   **Goal:** To identify and eliminate the root causes of problems, thereby reducing variation and improving quality.

**1.2 Key Concepts in SPC:**

*   **Variation:** The natural fluctuation in the output of a process.
    *   **Common Cause Variation (Chance Variation):** Also known as **natural variation**. This is the inherent variation that exists in any process due to common factors affecting all outputs. It is predictable within limits.
        *   *Example:* Slight variations in raw material composition, minor fluctuations in machine speed, or environmental factors like temperature.
    *   **Special Cause Variation (Assignable Cause Variation):** This variation arises from specific, identifiable causes that are outside the normal operation of the process. These are unpredictable and can often be eliminated.
        *   *Example:* A worn-out tool, a faulty component, operator error due to inadequate training, or a sudden change in raw material supplier.
*   **Process Capability:** The ability of a process to meet specified requirements or tolerances. A capable process consistently produces output within the desired limits.
*   **Control Limits:** These are the upper and lower boundaries on a control chart that define the expected range of variation for a process when it is operating under control. They are statistically derived and **different** from specification limits.
    *   **Upper Control Limit (UCL):** The upper boundary.
    *   **Lower Control Limit (LCL):** The lower boundary.
*   **Center Line (CL):** The average value of the process characteristic being monitored.
*   **Specification Limits (USL & LSL):** These are the limits defined by the customer or design that dictate the acceptable range of product or service characteristics. These are **external** to the process control.

**1.3 Why Use SPC?**

*   **Proactive Quality:** Moves from detecting defects to preventing them.
*   **Process Understanding:** Provides deep insights into how a process is performing.
*   **Reduced Waste:** Minimizes scrap, rework, and customer complaints by preventing out-of-specification products.
*   **Improved Efficiency:** Stabilizes processes, leading to more predictable and consistent outcomes.
*   **Data-Driven Decisions:** Supports fact-based decision-making rather than relying on intuition.
*   **Customer Satisfaction:** Leads to more reliable products and services.

**Reference:**
*   Montgomery, D. C. (Third Edition). *Introduction to Statistical Quality Control.* This book is a foundational text for SPC and covers these concepts in detail, including the statistical theory behind control charts.
*   Besterfield et al. (Fifth Edition). *Total Quality Management(TQM)*. Provides a good overview of SPC as a TQM tool and its role in achieving quality objectives.

---

### 2. Tools of SPC: Control Charts

**2.1 What are Control Charts?**

*   **Definition:** Control charts are graphical tools used to monitor a process over time. They plot data points representing a process characteristic against time, with a center line and upper and lower control limits.
*   **Purpose:** To distinguish between common cause variation and special cause variation.
    *   **In Control:** When all data points fall within the control limits and show no non-random patterns, the process is considered "in statistical control." This doesn't necessarily mean it's meeting specifications, but that its variation is predictable.
    *   **Out of Control:** When data points fall outside the control limits or exhibit non-random patterns, it indicates the presence of special causes that need to be investigated and eliminated.

**2.2 Types of Control Charts:**

Control charts are broadly categorized based on the type of data being monitored:

*   **Variables Data Charts:** Used for measurable data that can be expressed on a continuous scale (e.g., length, weight, temperature, time).
    *   **X-bar ($\bar{X}$) and R Charts:**
        *   **$\bar{X}$ Chart (Average Chart):** Monitors the **central tendency** of the process. It plots the average of subgroups of measurements taken over time.
        *   **R Chart (Range Chart):** Monitors the **variability** or spread of the process within subgroups. It plots the range (highest value - lowest value) of subgroups.
        *   *Example:* Monitoring the average fill volume and the variation in fill volume for beverage bottles.
    *   **$\bar{X}$ and S Charts:**
        *   **S Chart (Standard Deviation Chart):** Similar to the R chart but uses the **standard deviation** of subgroups to monitor variability. It is generally preferred for larger subgroup sizes (typically n > 10) as it uses more of the data.
        *   *Example:* Monitoring the average tensile strength and the variation in tensile strength of steel rods.
    *   **Individuals (I) and Moving Range (MR) Charts:**
        *   **I Chart (Individuals Chart):** Used when only a single observation is taken at a time, or when subgroup sizes are very small (n=1).
        *   **MR Chart (Moving Range Chart):** Used in conjunction with the I chart to monitor the **variability** between consecutive individual measurements.
        *   *Example:* Monitoring the time it takes for a complex medical procedure to be completed for individual patients.

*   **Attributes Data Charts:** Used for data that are countable or categorical (e.g., number of defects, proportion of non-conforming items).
    *   **p-Chart (Proportion Non-conforming Chart):** Monitors the proportion of non-conforming items in a sample. The sample size can vary.
        *   *Example:* Monitoring the percentage of defective components found in batches of manufactured parts.
    *   **np-Chart (Number Non-conforming Chart):** Monitors the actual number of non-conforming items in a sample. This chart requires a constant sample size.
        *   *Example:* Tracking the number of customer complaints received each day, assuming a constant number of customer interactions.
    *   **c-Chart (Number of Defects Chart):** Monitors the number of defects per unit or area of opportunity. The unit size or area must be constant.
        *   *Example:* Counting the number of blemishes on a painted surface of a car.
    *   **u-Chart (Defects per Unit Chart):** Monitors the average number of defects per unit. This chart is used when the unit size or area of opportunity can vary.
        *   *Example:* Tracking the average number of errors found in different length customer service call transcripts.

**2.3 How to Construct and Use Control Charts:**

1.  **Define the Process Characteristic:** Identify what you want to measure or count.
2.  **Collect Data:** Gather data in rational subgroups over a period.
    *   **Rational Subgrouping:** The principle of taking subgroups so that the variation within a subgroup is due to common causes, while variation between subgroups might reflect special causes.
3.  **Calculate Control Limits:** Based on the collected data, calculate the center line (average) and the upper/lower control limits (typically mean ± 3 standard deviations).
    *   *Formula (General):*
        *   CL = Process Average
        *   UCL = Process Average + 3 * (Process Standard Deviation)
        *   LCL = Process Average - 3 * (Process Standard Deviation)
    *   *Note:* Specific formulas vary for different chart types. Montgomery's book provides these detailed formulas.
4.  **Plot Data:** Plot the collected data points on the control chart.
5.  **Interpret the Chart:**
    *   **Points within Control Limits, No Patterns:** Process is in statistical control.
    *   **Points outside Control Limits:** Indicates special causes. Investigate and eliminate them.
    *   **Non-random Patterns:** Even if points are within limits, certain patterns suggest special causes (e.g., runs of points above or below the center line, trends, cycles).
        *   *Common rules for detecting special causes (e.g., Nelson rules or Western Electric rules):*
            *   One or more points outside the 3-sigma control limits.
            *   Two out of three consecutive points near the center line are on the same side of the center line (within 2 sigma limits).
            *   Four out of five consecutive points are on the same side of the center line (within 1 sigma limits).
            *   Seven or more consecutive points are on the same side of the center line.
            *   Six or more consecutive points are steadily increasing or decreasing.
            *   Fifteen or more consecutive points are within 1 sigma of the center line.
            *   Fourteen or more consecutive points alternating up and down.
6.  **Take Action:** If special causes are detected, investigate the cause, take corrective action, and then recalculate control limits if necessary.
7.  **Monitor Continuously:** Continue to plot data to ensure the process remains in control.

**Reference:**
*   Montgomery, D. C. (Third Edition). *Introduction to Statistical Quality Control.* This is the definitive reference for the construction and interpretation of various control charts. It includes detailed formulas and examples.
*   Besterfield et al. (Fifth Edition). *Total Quality Management(TQM)*. Explains the practical application of control charts in TQM initiatives and their role in continuous improvement.

---

### 3. Process Capability Analysis

**3.1 What is Process Capability?**

*   **Definition:** Process capability measures how well a process is able to meet the requirements (specifications) of its customers. It compares the actual variation of a process (as measured by control charts and standard deviation) to the specified tolerance limits.
*   **Goal:** To determine if a process is capable of consistently producing output that meets specifications.

**3.2 Key Capability Indices:**

*   **Process Capability Ratio (Cp):**
    *   **Formula:** $Cp = \frac{USL - LSL}{6\sigma}$
    *   **Meaning:** Measures the potential capability of the process if it were centered within the specification limits. It indicates how wide the specification tolerance is relative to the process spread (assuming the process is centered).
    *   **Interpretation:**
        *   $Cp > 1$: Process is potentially capable.
        *   $Cp = 1$: Process spread exactly matches the specification width.
        *   $Cp < 1$: Process is not capable; spread is wider than specification.
    *   **Limitation:** Cp does not account for whether the process is centered within the specification limits.

*   **Process Capability Index (Cpk):**
    *   **Formula:** $Cpk = \min\left(\frac{USL - \mu}{3\sigma}, \frac{\mu - LSL}{3\sigma}\right)$
    *   **Meaning:** Measures the actual capability of the process, taking into account its centering within the specification limits. It is the minimum of the distance from the process mean to the nearest specification limit, divided by three standard deviations.
    *   **Interpretation:**
        *   $Cpk > 1$: Process is capable and centered within specifications.
        *   $Cpk = 1$: Process is capable but may be close to one of the limits.
        *   $Cpk < 1$: Process is not capable, either due to excessive variation or poor centering.
        *   A perfectly centered process has $Cp = Cpk$. If $Cpk < Cp$, the process is not centered.

*   **Other Indices (Less common but worth noting):**
    *   **Pp and Ppk:** Similar to Cp and Cpk, but they use the **overall process standard deviation** (calculated from all data, not just within-subgroup variation) rather than the short-term process standard deviation. They represent the potential capability of the process over the long run.

**3.3 Interpreting Capability Indices:**

Generally accepted guidelines (though these can vary by industry and customer requirements):

*   **$Cpk < 1.0$:** Process is not capable. Significant improvement is needed.
*   **$1.0 \le Cpk < 1.33$:** Process is marginally capable. It meets minimum requirements but may still produce some non-conforming items.
*   **$Cpk \ge 1.33$:** Process is capable. This is often considered a benchmark for good performance (e.g., the "four sigma" quality level).
*   **$Cpk \ge 1.67$:** Process is highly capable (e.g., the "six sigma" quality level).

**3.4 Using SPC and Capability Analysis Together:**

*   **Step 1:** Use control charts to bring the process into statistical control. This removes special causes and makes the variation predictable.
*   **Step 2:** Once the process is stable (in control), collect data to calculate capability indices (Cp and Cpk).
*   **Step 3:** If the process is not capable ($Cpk < 1.33$), identify the root causes of variation and implement improvements to reduce it or improve centering.
*   **Step 4:** Continue monitoring with control charts to ensure the improvements are sustained.

**Reference:**
*   Montgomery, D. C. (Third Edition). *Introduction to Statistical Quality Control.* Provides detailed explanations and calculations for capability indices.
*   Besterfield et al. (Fifth Edition). *Total Quality Management(TQM)*. Discusses capability analysis as a key component of TQM for assessing process performance against customer needs.
*   Mitra A. (Second Edition). *Fundamentals of Quality Control and Improvement*. Also covers process capability and its importance in improving quality.

---

### 4. Benefits of Implementing SPC

*   **Improved Product Quality:** Reduced defects, less scrap and rework.
*   **Increased Customer Satisfaction:** More reliable and consistent products/services.
*   **Reduced Costs:** Lower costs associated with poor quality (scrap, rework, warranty, customer complaints).
*   **Enhanced Process Understanding:** Provides data-driven insights into process behavior.
*   **Data-Driven Decision Making:** Empowers teams to make informed decisions.
*   **Continuous Improvement:** Fosters a culture of ongoing process enhancement.
*   **Early Warning System:** Detects potential problems before they lead to significant issues.

**Important Point to Remember:** SPC focuses on controlling the **process** to prevent defects, rather than inspecting for defects after they occur.

---

### 5. Alignment with Course Outcomes

*   **CO1: Develop knowledge of quality management and contributions of quality gurus. (K2)**
    *   SPC is a fundamental tool in quality management, applied by many quality gurus like Deming and Juran who emphasized process control and variation reduction. Understanding SPC contributes to this knowledge.
*   **CO2: Identify various human dimensions of TQM (K2)**
    *   While not directly about human dimensions, SPC requires teamwork, problem-solving skills, and a commitment to data-driven improvements, which are all human dimensions of TQM. Training employees to use SPC charts and act on their results involves these dimensions.
*   **CO3: Implement different tools and techniques in TQM (K3)**
    *   Control charts and capability analysis are key tools of TQM. This section directly addresses how to implement and use them.
*   **CO4: Implement different statistical quality control techniques (K3)**
    *   This entire topic is dedicated to SPC, which is a core statistical quality control technique.
*   **CO5: Demonstrate knowledge of the underlying principles of strategic quality management (K2)**
    *   SPC supports strategic quality objectives by focusing on process stability, predictability, and capability, which are essential for achieving long-term quality goals and competitive advantage.

---

### 6. Practice Questions and Exercises

**Question 1 (Conceptual):**
Differentiate between common cause variation and special cause variation. Why is it crucial to distinguish between them in SPC?

**Answer:**
*   **Common Cause Variation:** Inherent, random variation present in every process. Predictable within limits. Examples: minor machine fluctuations, environmental factors.
*   **Special Cause Variation:** Variation caused by specific, identifiable factors outside the normal process. Unpredictable and assignable. Examples: worn tool, operator error, power surge.
*   **Crucial Distinction:** Identifying special causes allows us to remove them, stabilizing the process. If we try to correct common cause variation by adjusting the process, we are more likely to *increase* variation and instability. SPC charts help make this distinction.

---

**Question 2 (Application):**
A manufacturing plant produces bolts. The diameter of the bolts is critical. They collect the diameter of 5 bolts every hour for 20 hours. They want to monitor the process.

*   **Subgroup Size (n):** 5 bolts
*   **Number of Subgroups:** 20 hours
*   **Data:** (Assume you are given actual diameter data for 20 subgroups).

You are asked to:
a) What type of control chart would be most appropriate for monitoring the average diameter?
b) What type of control chart would be most appropriate for monitoring the variation in diameter within each subgroup?
c) Briefly describe how you would interpret these charts to determine if the process is in statistical control.

**Answer:**
a) An **$\bar{X}$ (Average) Chart** would be most appropriate for monitoring the average diameter of the bolts.
b) An **R (Range) Chart** would be most appropriate for monitoring the variation in diameter within each subgroup.
c) **Interpretation:**
    *   **In Statistical Control:** The $\bar{X}$ chart would be considered in control if all plotted points fall between the Upper Control Limit (UCL) and Lower Control Limit (LCL) on the $\bar{X}$ chart and exhibit no non-random patterns (like trends or runs). Similarly, the R chart would be in control if all its points fall within its UCL and LCL and show no non-random patterns.
    *   **Out of Statistical Control:** If any points fall outside the control limits on either chart, or if specific non-random patterns are observed (e.g., a run of points above or below the center line), it indicates the presence of special causes. These causes need to be investigated and eliminated to bring the process back into control.

---

**Question 3 (Calculation - Conceptual):**
A process has a specification range for a certain dimension of $30 \text{ mm} \pm 0.5 \text{ mm}$ (USL = 30.5 mm, LSL = 29.5 mm). After bringing the process into statistical control, the process mean ($\mu$) is found to be 30.2 mm, and the process standard deviation ($\sigma$) is 0.1 mm.

Calculate:
a) The Process Capability Ratio (Cp).
b) The Process Capability Index (Cpk).
c) Interpret the values of Cp and Cpk.

**Answer:**
Given:
USL = 30.5 mm
LSL = 29.5 mm
$\mu$ = 30.2 mm
$\sigma$ = 0.1 mm

a) **Calculate Cp:**
   $Cp = \frac{USL - LSL}{6\sigma}$
   $Cp = \frac{30.5 - 29.5}{6 \times 0.1}$
   $Cp = \frac{1.0}{0.6}$
   $Cp \approx 1.67$

b) **Calculate Cpk:**
   Distance to USL = $\frac{USL - \mu}{3\sigma} = \frac{30.5 - 30.2}{3 \times 0.1} = \frac{0.3}{0.3} = 1.0$
   Distance to LSL = $\frac{\mu - LSL}{3\sigma} = \frac{30.2 - 29.5}{3 \times 0.1} = \frac{0.7}{0.3} \approx 2.33$
   $Cpk = \min(1.0, 2.33)$
   $Cpk = 1.0$

c) **Interpretation:**
   *   **Cp ($\approx 1.67$):** This indicates that the potential capability of the process (its spread relative to the specification width) is good. The process spread is significantly narrower than the specification tolerance, suggesting it *could* be capable if centered properly.
   *   **Cpk ($1.0$):** This indicates that the actual capability of the process, considering its centering, is borderline. The process is capable of meeting the *nearest* specification limit (the USL in this case) but is not optimally centered. A Cpk of 1.0 means that the process mean is exactly 3 standard deviations away from the nearest specification limit (USL). While it meets minimum capability standards, there is little room for error, and any shift closer to the USL would result in out-of-specification product. Improvement efforts should focus on centering the process (moving the mean closer to the center of the specification range) to increase Cpk and reduce the risk of producing non-conforming parts.

---

### 7. Important Points to Remember

*   **SPC is about controlling processes, not inspecting products.**
*   **Control limits are derived from the process data and are statistical boundaries, NOT specification limits.**
*   **The goal of SPC is to reduce variation.**
*   **Distinguish clearly between common cause and special cause variation.**
*   **Process stability (being "in control") is a prerequisite for meaningful capability analysis.**
*   **A capable process is one that is both in statistical control AND meets specification limits (high Cpk).**
*   **SPC is a team effort and requires commitment from all levels.**

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
