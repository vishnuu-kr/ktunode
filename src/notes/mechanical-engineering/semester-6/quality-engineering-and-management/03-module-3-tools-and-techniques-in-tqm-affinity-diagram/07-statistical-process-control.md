---
title: "Statistical Process Control"
subject: "QUALITY ENGINEERING AND MANAGEMENT"
module: "Module 3: Tools and Techniques in TQM : Affinity diagram "
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1751d0cf4804463b12"
status: "completed"
scrapedAt: "2026-05-20T18:07:05.502Z"
---
# Quality Engineering and Management: Module 3 - Tools and Techniques in TQM

## Topic: Statistical Process Control (SPC)

---

### 1. Introduction to Statistical Process Control (SPC)

Statistical Process Control (SPC) is a methodology used to monitor, control, and improve processes through statistical methods. It aims to identify and eliminate the root causes of variation in processes, leading to improved quality, reduced waste, and increased efficiency. SPC is a proactive approach to quality management, focusing on preventing defects rather than detecting them.

**Key Concepts:**

*   **Variation:** The natural fluctuation in any process. There are two types of variation:
    *   **Common Cause Variation (Random Variation):** Inherent variation that exists in any process due to the combined effect of many small, unidentifiable causes. It is predictable within limits.
    *   **Special Cause Variation (Assignable Cause Variation):** Variation that arises from specific, identifiable causes that are not part of the normal process. These causes are usually sporadic and can be corrected.
*   **Process Capability:** The ability of a process to consistently produce output that meets specifications.
*   **Control Limits:** The upper and lower limits on a control chart that define the expected range of common cause variation.
*   **Specification Limits:** The limits imposed by the customer or design that define acceptable product or service characteristics.

**Textbook References:**

*   **Besterfield et al., *Total Quality Management* (Fifth Edition, 2018):** Likely provides a foundational understanding of SPC as a key tool in TQM, emphasizing its role in process improvement and defect prevention.
*   **Montgomery, *Introduction to Statistical Quality Control* (Third Edition):** This is a cornerstone text for SPC, offering in-depth explanations of statistical principles, control charting techniques, and process capability analysis.
*   **Mitra, *Fundamentals of Quality Control and Improvement* (Second Edition, 1998):** Will likely cover SPC from a practical improvement perspective, highlighting its application in various quality control scenarios.

**Alignment with Course Outcomes:**

*   **CO4: Implement different statistical quality control techniques (Knowledge Level: K3):** This module directly addresses this outcome by introducing the core concepts and tools of SPC.

---

### 2. The Purpose and Principles of SPC

The primary purpose of SPC is to achieve and maintain a state of **statistical control** within a process. A process is in statistical control when only common causes of variation are present, and special causes have been eliminated.

**Key Principles:**

*   **Understand the Process:** Thoroughly understand the process being monitored, including its inputs, outputs, and the factors that influence it.
*   **Identify and Eliminate Special Causes:** Actively search for and remove special causes of variation.
*   **Reduce Common Causes:** Once special causes are eliminated, focus on reducing common cause variation to improve process capability.
*   **Monitor Continuously:** Use statistical tools to continuously monitor process performance.
*   **Make Data-Driven Decisions:** Base decisions on data and statistical analysis rather than intuition or guesswork.

**Textbook References:**

*   **SubburajRamasamy, *Total Quality Management* (First Edition, 2017):** May present SPC as a critical element for achieving operational excellence within a TQM framework.
*   **Juran & Gryna, *Quality Planning and Analysis* (Third Edition, 2004):** Will likely discuss SPC in the context of quality planning and control, emphasizing its role in problem-solving and continuous improvement.

**Alignment with Course Outcomes:**

*   **CO4: Implement different statistical quality control techniques (Knowledge Level: K3):** Understanding these principles is crucial for effective implementation of SPC.

---

### 3. Tools of SPC: Control Charts

Control charts are graphical tools used in SPC to distinguish between common cause and special cause variation. They plot process data over time, along with calculated control limits.

**Key Components of a Control Chart:**

*   **Center Line (CL):** Represents the average value of the process characteristic when it is in statistical control.
*   **Upper Control Limit (UCL):** The upper boundary of the expected variation due to common causes.
*   **Lower Control Limit (LCL):** The lower boundary of the expected variation due to common causes.
*   **Data Points:** Individual measurements or subgroup averages plotted chronologically.

**Types of Control Charts:**

The choice of control chart depends on the type of data being collected (variable or attribute).

**A. Control Charts for Variables Data (Measurements):**

Variable data are quantitative measurements that can be expressed on a continuous scale.

*   **X-bar and R Charts:**
    *   **Purpose:** Monitor the process average ($\bar{x}$) and the process variation (Range, R).
    *   **X-bar Chart:** Plots the average of subgroups over time.
    *   **R Chart:** Plots the range (difference between the highest and lowest values) within subgroups over time.
    *   **When to use:** When subgroups of data (typically 2-10 observations) are collected regularly.
    *   **Example:** Monitoring the average length and variation in the length of manufactured bolts.

*   **X-bar and S Charts:**
    *   **Purpose:** Similar to X-bar and R charts, but uses the standard deviation (S) to monitor variation.
    *   **When to use:** When subgroups are larger (typically more than 10 observations) as the standard deviation is a more sensitive measure of variation for larger sample sizes.
    *   **Example:** Monitoring the average viscosity of a chemical solution and its standard deviation in production batches.

*   **Individuals (I) and Moving Range (MR) Charts:**
    *   **Purpose:** Monitor individual process measurements when subgroups are not feasible or practical.
    *   **I Chart:** Plots individual data points.
    *   **MR Chart:** Plots the moving range, which is the difference between consecutive individual measurements.
    *   **When to use:** When only one observation is taken at a time, or when the cost of taking multiple samples is high.
    *   **Example:** Monitoring the daily temperature of a critical industrial process or the time between customer service calls.

**B. Control Charts for Attributes Data (Counts or Classifications):**

Attribute data are qualitative characteristics that can be counted or classified into categories.

*   **p-Chart:**
    *   **Purpose:** Monitor the proportion of defective units in a sample.
    *   **When to use:** When the sample size is constant or varies, and the data is binomial (defective/non-defective).
    *   **Example:** Monitoring the percentage of defective products found in a daily inspection of 100 items.

*   **np-Chart:**
    *   **Purpose:** Monitor the number of defective units in a sample.
    *   **When to use:** When the sample size is constant. It's often preferred over the p-chart for simplicity when sample size is fixed.
    *   **Example:** Monitoring the number of customer complaints received per 100 service interactions.

*   **c-Chart:**
    *   **Purpose:** Monitor the number of defects per unit or per area of opportunity.
    *   **When to use:** When counting the number of defects on a single unit or a fixed area.
    *   **Example:** Monitoring the number of blemishes on a painted car surface or the number of errors in a printed page.

*   **u-Chart:**
    *   **Purpose:** Monitor the number of defects per unit when the sample size (area of opportunity) varies.
    *   **When to use:** When the number of defects is counted, but the size of the unit or area inspected changes.
    *   **Example:** Monitoring the number of scratches on different sizes of machined parts or the number of errors found in reports of varying lengths.

**Textbook References:**

*   **Montgomery, *Introduction to Statistical Quality Control* (Third Edition):** This book is the definitive source for detailed calculations, formulas, and interpretations of all types of control charts. It will explain how to set up and use these charts effectively.
*   **Besterfield et al., *Total Quality Management* (Fifth Edition, 2018):** Will likely provide practical guidance on selecting and using appropriate control charts for various quality improvement scenarios.
*   **Mitra, *Fundamentals of Quality Control and Improvement* (Second Edition, 1998):** Will offer practical insights into the application of control charts in real-world quality improvement projects.

**Alignment with Course Outcomes:**

*   **CO3: Implement different tools and techniques in TQM (Knowledge Level: K3):** Control charts are fundamental tools within TQM.
*   **CO4: Implement different statistical quality control techniques (Knowledge Level: K3):** This section directly addresses the implementation of SPC tools.

---

### 4. Interpreting Control Charts and Identifying Special Causes

A process is considered out of statistical control if the data points on the control chart exhibit patterns that indicate the presence of special causes of variation.

**Rules for Detecting Special Causes:**

*   **One or more points outside the control limits:** A point falling above the UCL or below the LCL indicates a special cause.
*   **Runs:**
    *   **Seven consecutive points on one side of the center line:** Suggests a shift in the process average.
    *   **Six consecutive points steadily increasing or decreasing:** Indicates a trend or drift.
*   **Runs of 7:** Seven consecutive points on one side of the center line.
*   **Runs of 8:** Eight consecutive points on one side of the center line.
*   **Two out of three consecutive points near an upper/lower control limit:** Suggests increasing variation.
*   **Four out of five consecutive points near an upper/lower control limit:** Also suggests increasing variation.
*   **All points within +/- 1 standard deviation of the center line:** Indicates a highly stable process, but if it occurs unusually, it might signal a change in the process or control limits.
*   **Cyclic Patterns:** Repeating patterns that are not random.

**Action when Special Causes are Detected:**

When a special cause is detected, the process should be stopped, the cause investigated, and corrective action taken to eliminate or control the special cause.

**Textbook References:**

*   **Montgomery, *Introduction to Statistical Quality Control* (Third Edition):** Provides detailed statistical reasoning behind these interpretation rules and offers methods for calculating control limits.
*   **Besterfield et al., *Total Quality Management* (Fifth Edition, 2018):** Will likely present these interpretation rules in a practical, easy-to-understand manner for quality practitioners.

**Alignment with Course Outcomes:**

*   **CO4: Implement different statistical quality control techniques (Knowledge Level: K3):** This is critical for actually *using* SPC effectively.

---

### 5. Process Capability Analysis

Process capability analysis assesses whether a process is capable of consistently producing output that meets customer or design specifications. It compares the actual variation of the process (controlled by control limits) with the allowable variation (defined by specification limits).

**Key Concepts:**

*   **Specification Limits (SL):**
    *   **Upper Specification Limit (USL):** The maximum acceptable value for a process characteristic.
    *   **Lower Specification Limit (LSL):** The minimum acceptable value for a process characteristic.
*   **Process Spread:** The range of variation in a process, typically represented by 6 standard deviations (6σ) of the process.
*   **Capability Indices:**
    *   **Cp (Process Capability):** Measures the potential capability of a process relative to specification limits, assuming the process is centered.
        *   Formula: $C_p = \frac{USL - LSL}{6 \sigma}$
        *   Interpretation: A higher Cp indicates a more capable process. A Cp of 1.33 is often considered acceptable for capable processes.
    *   **Cpk (Process Capability Index):** Measures the actual capability of a process, taking into account whether the process is centered between the specification limits. It is the minimum of $C_{pu}$ and $C_{pl}$.
        *   $C_{pu} = \frac{USL - \mu}{3 \sigma}$ (Capability above the mean)
        *   $C_{pl} = \frac{\mu - LSL}{3 \sigma}$ (Capability below the mean)
        *   $C_{pk} = \min(C_{pu}, C_{pl})$
        *   Interpretation: A higher Cpk indicates a more capable and centered process. A Cpk value close to Cp suggests good centering.

**When to Use Process Capability Analysis:**

*   After a process has been brought into statistical control.
*   To determine if a process can meet customer specifications.
*   To identify opportunities for process improvement.

**Textbook References:**

*   **Montgomery, *Introduction to Statistical Quality Control* (Third Edition):** Provides a rigorous treatment of process capability, including detailed formulas, assumptions, and interpretations of Cp and Cpk.
*   **Mitra, *Fundamentals of Quality Control and Improvement* (Second Edition, 1998):** Will offer practical guidance on calculating and interpreting capability indices for process improvement.
*   **Besterfield et al., *Total Quality Management* (Fifth Edition, 2018):** Will likely present these concepts in a user-friendly way, highlighting their importance in customer satisfaction.

**Alignment with Course Outcomes:**

*   **CO4: Implement different statistical quality control techniques (Knowledge Level: K3):** Process capability analysis is a core SPC technique.

---

### 6. SPC and Continuous Improvement

SPC is not just a monitoring tool; it's a driver of continuous improvement. By identifying and eliminating special causes, and then working to reduce common causes, SPC leads to processes that are more stable, predictable, and capable.

**Role of SPC in Continuous Improvement:**

*   **Provides early warning:** Identifies deviations before they lead to significant problems or customer complaints.
*   **Facilitates problem-solving:** Helps pinpoint when and where problems occur, guiding corrective actions.
*   **Measures improvement:** Tracks the impact of changes made to the process.
*   **Drives a data-driven culture:** Encourages a reliance on facts and data for decision-making.

**Textbook References:**

*   **Crosby, *Quality is Free* (1979):** While not directly focused on SPC, Crosby's philosophy strongly aligns with the proactive and preventive nature of SPC as a means to reduce costs associated with poor quality.
*   **Besterfield et al., *Total Quality Management* (Fifth Edition, 2018):** Will likely integrate SPC as a fundamental element of a TQM system focused on continuous improvement.

**Alignment with Course Outcomes:**

*   **CO1: Develop knowledge of quality management and contributions of quality gurus. (Knowledge Level: K2):** SPC exemplifies the principles advocated by quality gurus for process control and improvement.
*   **CO3: Implement different tools and techniques in TQM (Knowledge Level: K3):** SPC is a powerful TQM technique for achieving improvement.

---

### **Important Points to Remember:**

*   **Distinguish between common and special causes of variation.** This is the fundamental concept of SPC.
*   **Control charts are for *control*, not *judgment*.** They help determine if a process is stable, not necessarily if it's meeting specifications.
*   **A process in statistical control is not necessarily capable.** It means variation is predictable, but the range of that variation might still be too wide for specifications.
*   **SPC is a proactive tool.** It's about preventing defects and improving processes, not just reacting to problems.
*   **Correct interpretation of control charts is crucial.** Misinterpreting patterns can lead to unnecessary process adjustments.
*   **Process capability analysis should be performed on a process that is already in statistical control.**

---

### **Practice Questions:**

1.  **Define the two types of variation encountered in a process and explain how Statistical Process Control (SPC) aims to manage them.**
    *   **Answer:** The two types of variation are common cause (random) variation and special (assignable) cause variation. Common cause variation is inherent to the process and predictable within limits. Special cause variation arises from specific, identifiable sources that are not part of the normal process. SPC aims to identify and eliminate special causes, and then reduce common causes to improve process stability and capability.

2.  **What is the primary purpose of a control chart? Describe the key components of any control chart.**
    *   **Answer:** The primary purpose of a control chart is to monitor a process over time to detect the presence of special causes of variation, thereby determining if the process is in statistical control. The key components are the Center Line (CL), Upper Control Limit (UCL), and Lower Control Limit (LCL), along with the plotted data points representing process measurements over time.

3.  **When would you choose to use an Individuals (I) and Moving Range (MR) chart over an X-bar and R chart? Provide an example.**
    *   **Answer:** You would choose an I-MR chart when individual data points are measured one at a time, and it is impractical or impossible to collect subgroups. An X-bar and R chart is used when data is collected in subgroups (typically 2-10 observations).
    *   **Example:** Monitoring the diameter of a pipe where each pipe is measured individually as it comes off the production line (I-MR chart). This is unlike monitoring the average weight and variation of 5 randomly selected apples from each batch of 100 (X-bar and R chart).

4.  **Explain the difference between Cp and Cpk. When is Cpk a more informative measure than Cp?**
    *   **Answer:** Cp measures the potential capability of a process relative to specification limits, assuming the process is centered. Cpk measures the actual capability, accounting for whether the process is centered. Cpk is more informative when the process is not centered between the specification limits, as it reflects the minimum distance of the process mean from the nearest specification limit. A process with a high Cp but a low Cpk indicates a significant centering problem.

5.  **List at least three rules that indicate a process is likely out of statistical control based on patterns observed on a control chart.**
    *   **Answer:**
        *   One or more points falling outside the control limits (above UCL or below LCL).
        *   Seven consecutive points falling on one side of the center line.
        *   Six consecutive points steadily increasing or decreasing (a trend).

---

### **Exercises:**

**Exercise 1 (Conceptual):**

Imagine you are monitoring the fill level of bottles on a beverage production line. You are taking subgroups of 5 bottles every hour.

*   What type of control chart would you primarily use to monitor the average fill level? Why?
*   What additional control chart would you use with it to monitor the variation in fill levels within each subgroup? Why?

**Answer:**
*   You would use an **X-bar chart** to monitor the average fill level. This is because you are collecting data in subgroups (of 5 bottles), and the X-bar chart tracks the process average.
*   You would use an **R chart** (Range chart) alongside the X-bar chart. The R chart monitors the variation within each subgroup (the difference between the highest and lowest fill level in the subgroup of 5 bottles). This helps detect shifts in process variation.

**Exercise 2 (Application - Calculation Concept):**

A process has a specification of 100 ± 10 mm (USL = 110 mm, LSL = 90 mm). You have calculated the process standard deviation ($\sigma$) to be 2 mm. The process mean ($\mu$) is currently 103 mm.

*   Calculate Cp.
*   Calculate Cpk.
*   Comment on the process capability.

**Answer:**
*   **Calculate Cp:**
    $C_p = \frac{USL - LSL}{6 \sigma} = \frac{110 - 90}{6 \times 2} = \frac{20}{12} \approx 1.67$
*   **Calculate Cpk:**
    $C_{pu} = \frac{USL - \mu}{3 \sigma} = \frac{110 - 103}{3 \times 2} = \frac{7}{6} \approx 1.17$
    $C_{pl} = \frac{\mu - LSL}{3 \sigma} = \frac{103 - 90}{3 \times 2} = \frac{13}{6} \approx 2.17$
    $C_{pk} = \min(C_{pu}, C_{pl}) = \min(1.17, 2.17) = 1.17$
*   **Comment on process capability:**
    The Cp of 1.67 suggests that the process has the potential to meet specifications if it were perfectly centered. However, the Cpk of 1.17 indicates that the actual capability, considering the current process mean of 103 mm, is lower. While 1.17 is generally considered acceptable (often Cpk > 1.33 is desired for robust capability), the significant difference between Cp and Cpk highlights that the process is not centered within the specification limits, and it is closer to the upper specification limit. This indicates a need for process adjustment to center it, which would likely improve Cpk and reduce the risk of producing non-conforming product.

---

This study material provides a comprehensive overview of Statistical Process Control (SPC) within the context of Quality Engineering and Management. It aligns with the learning outcomes by explaining the core concepts, tools, and applications of SPC, enabling students to implement these techniques (CO3, CO4). The references to key textbooks ensure the content is grounded in established quality management literature.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
