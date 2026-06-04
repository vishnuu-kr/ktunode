---
title: "process capability"
subject: "QUALITY ENGINEERING AND MANAGEMENT"
module: "Module 3: Tools and Techniques in TQM : Affinity diagram"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf480446417e"
status: "completed"
scrapedAt: "2026-05-20T18:16:51.261Z"
---
## QUALITY ENGINEERING AND MANAGEMENT: Module 3: Tools and Techniques in TQM - Process Capability

**Topic:** Process Capability

**Introduction:**

Process capability is a fundamental concept in Quality Engineering and Management that helps us understand how well a process is able to produce output that conforms to specifications. It goes beyond simply measuring the variation within a process; it assesses whether the process's natural variation is small enough to consistently meet customer or design requirements. This topic is crucial for ensuring that processes are not only stable but also capable of delivering quality products or services.

**Learning Outcomes:**

Upon completion of this topic, you should be able to:

*   Understand the concept of process capability and its importance in TQM.
*   Differentiate between process control and process capability.
*   Explain the key metrics used to measure process capability (Cp, Cpk, Pp, Ppk).
*   Calculate and interpret process capability indices.
*   Apply process capability analysis to identify areas for process improvement.
*   Understand the limitations and assumptions of process capability analysis.

**Course Outcomes Alignment:**

*   **CO3:** Implement different tools and techniques in TQM (Knowledge Level: K3) - *Process capability analysis is a key statistical tool used in TQM for process improvement.*
*   **CO4:** Implement different statistical quality control techniques (Knowledge Level: K3) - *This topic directly deals with statistical quality control techniques.*

---

### 1. Understanding Process Capability

**Definition:**

Process capability refers to the ability of a process to consistently produce output that meets specified limits or requirements. It answers the question: "Can this process produce what we need it to produce, within the given specifications?"

**Importance in TQM:**

*   **Customer Satisfaction:** Ensures products/services meet customer expectations and specifications.
*   **Reduced Waste:** Identifies processes that are incapable, leading to reduced scrap, rework, and warranty claims.
*   **Process Improvement:** Provides a quantitative measure to identify and prioritize areas for improvement.
*   **Decision Making:** Supports informed decisions regarding process adjustments, design changes, or supplier selection.
*   **Continuous Improvement:** Forms the basis for benchmarking and tracking progress towards quality goals.

**(Referenced in: Besterfield et al., 2018, Chapter 12: Process Control and Capability; Montgomery, 2007, Chapter 8: Process Control and Process Capability)**

---

### 2. Process Control vs. Process Capability

It's essential to distinguish between process control and process capability:

| Feature           | Process Control                                  | Process Capability                                      |
| :---------------- | :----------------------------------------------- | :------------------------------------------------------ |
| **Focus**         | Stability of the process over time               | Ability of the process to meet specifications           |
| **Tool**          | Control Charts (e.g., X-bar and R, p-charts)     | Capability Indices (Cp, Cpk, Pp, Ppk)                   |
| **Question Asked** | "Is the process stable/predictable?"             | "Can the process meet the requirements?"                |
| **Assumption**    | Assumes the process is in statistical control    | Does not assume the process is in statistical control   |
| **Goal**          | Maintain a stable process                        | Improve a process to meet specifications                |

**Key Takeaway:** A process can be in statistical control but still be incapable of meeting specifications. Conversely, a process that is not in statistical control is definitely incapable.

**(Referenced in: Besterfield et al., 2018, Chapter 12; Montgomery, 2007, Chapter 8)**

---

### 3. Key Metrics for Process Capability

To quantify process capability, we use capability indices. These indices compare the spread of the process output to the spread allowed by the specifications.

**A. Short-Term Capability (Based on Process Variation):**

These indices assess the capability of the process based on its *current* short-term variation, typically measured by the standard deviation of subgroup means or individual data points. They assume the process is in statistical control.

*   **Cp (Process Capability Index):**

    *   **Definition:** Measures the ratio of the specification width to the process width (six standard deviations). It indicates how well the process *could* perform if centered between the specification limits.
    *   **Formula:**
        $$Cp = \frac{\text{Upper Specification Limit (USL) - Lower Specification Limit (LSL)}}{6\sigma}$$
        Where:
        *   $\sigma$ is the process standard deviation (often estimated from the average range of subgroups or the standard deviation of individual data points).

    *   **Interpretation:**
        *   `Cp = 1`: The process variation is exactly equal to the specification width.
        *   `Cp > 1`: The process variation is less than the specification width, meaning the process *can* meet specifications.
        *   `Cp < 1`: The process variation is greater than the specification width, meaning the process *cannot* meet specifications.

    *   **Limitation:** Cp does not consider process centering. A high Cp value can be misleading if the process is not centered within the specification limits.

*   **Cpk (Process Capability Index - Minimum):**

    *   **Definition:** Measures the ratio of the distance from the process mean to the nearest specification limit to half the specification width (three standard deviations). It accounts for both process variation and centering.
    *   **Formula:**
        $$Cpk = \min \left( \frac{\text{USL} - \mu}{3\sigma}, \frac{\mu - \text{LSL}}{3\sigma} \right)$$
        Where:
        *   $\mu$ is the process mean.
        *   $\sigma$ is the process standard deviation.

    *   **Interpretation:**
        *   `Cpk = 1`: The process mean is exactly halfway between the specification limits, and the process variation is such that it barely meets the limits.
        *   `Cpk > 1`: The process is capable of meeting specifications, with a buffer between the mean and the nearest limit.
        *   `Cpk < 1`: The process is incapable of meeting specifications because either the variation is too large or the mean is too close to one of the limits.
        *   If `Cpk` is close to `Cp`, the process is well-centered. If `Cpk` is significantly less than `Cp`, the process is off-center.

**(Referenced in: Besterfield et al., 2018, Chapter 12; Montgomery, 2007, Chapter 8; Mitra, 1998, Chapter 4: Process Capability)**

**B. Long-Term Capability (Based on Overall Variation):**

These indices assess the capability of the process based on its overall variation, including potential shifts or drifts that may occur over time. They do not assume the process is in statistical control.

*   **Pp (Process Performance Index):**

    *   **Definition:** Similar to Cp, but uses the *overall* standard deviation ($s$) of the data, which includes both within-subgroup and between-subgroup variation.
    *   **Formula:**
        $$Pp = \frac{\text{USL} - \text{LSL}}{6s}$$
        Where:
        *   $s$ is the overall standard deviation of the data.

    *   **Interpretation:** Similar to Cp, but reflects the actual performance over a longer period.

*   **Ppk (Process Performance Index - Minimum):**

    *   **Definition:** Similar to Cpk, but uses the *overall* standard deviation ($s$) and compares the process mean to the specification limits.
    *   **Formula:**
        $$Ppk = \min \left( \frac{\text{USL} - \mu}{3s}, \frac{\mu - \text{LSL}}{3s} \right)$$
        Where:
        *   $\mu$ is the process mean.
        *   $s$ is the overall standard deviation.

    *   **Interpretation:** Similar to Cpk, but reflects the actual performance over a longer period and accounts for process centering.

**(Referenced in: Montgomery, 2007, Chapter 8; Subburaj Ramasamy, 2017, Chapter 10: Statistical Process Control)**

---

### 4. Calculating and Interpreting Capability Indices

**Estimating Standard Deviation ($\sigma$ or $s$):**

*   **For Cp and Cpk:**
    *   **Using Average Range ($\bar{R}$):** If you are using X-bar and R charts, $\sigma$ can be estimated as $\bar{R} / d_2$, where $d_2$ is a constant from control chart tables.
    *   **Using Moving Range ($MR$):** For individual data points (I-MR charts), $\sigma$ can be estimated from the average moving range ($\overline{MR}$) as $\overline{MR} / d_2'$, where $d_2'$ is a constant for moving ranges.
    *   **Using Standard Deviation of Individual Data:** The standard deviation ($s$) of the entire dataset can be directly calculated.

*   **For Pp and Ppk:**
    *   The overall standard deviation ($s$) of the entire dataset is used.

**Benchmarking Capability Indices:**

These are general guidelines and can vary by industry:

| Capability Index | Interpretation of Capability                               | Target for World-Class Performance |
| :--------------- | :--------------------------------------------------------- | :--------------------------------- |
| **Cp/Cpk < 1.00**  | **Incapable:** Process output is outside specifications.   | N/A                                |
| **1.00 ≤ Cp/Cpk ≤ 1.33** | **Potentially Capable:** Process may meet specifications. |                                    |
| **1.33 < Cp/Cpk < 1.67** | **Capable:** Process meets specifications with some margin. | **1.33 (3-sigma capability)**      |
| **1.67 ≤ Cp/Cpk < 2.00** | **Highly Capable:** Process meets specifications with a good margin. |                                    |
| **Cp/Cpk ≥ 2.00**  | **Very Highly Capable (6-sigma capability):** Process is well within specifications. | **2.00 (6-sigma capability)**      |

**Important Note:** The target of 1.33 for Cp/Cpk is often cited as a minimum for acceptable performance in many industries, aiming for a "3-sigma" capability. The ultimate goal in many quality initiatives is "6-sigma" capability, requiring indices of 2.00.

**(Referenced in: Besterfield et al., 2018, Chapter 12; Montgomery, 2007, Chapter 8; Mitra, 1998, Chapter 4)**

---

### 5. Applying Process Capability Analysis

**Steps:**

1.  **Define Specifications:** Clearly identify the Upper Specification Limit (USL) and Lower Specification Limit (LSL) for the characteristic being measured.
2.  **Collect Data:** Gather data from the process. It's recommended to collect data in rational subgroups if possible.
3.  **Check for Statistical Control:** Construct control charts (e.g., X-bar and R, or I-MR charts) for the collected data. If the process is *not* in statistical control, address the assignable causes of variation first before performing capability analysis.
4.  **Estimate Process Standard Deviation:** Calculate $\sigma$ (for Cp/Cpk) or $s$ (for Pp/Ppk) based on the appropriate method.
5.  **Calculate Capability Indices:** Compute Cp, Cpk, Pp, and Ppk.
6.  **Interpret the Indices:** Compare the calculated indices to the benchmarking guidelines.
7.  **Identify Areas for Improvement:**
    *   If `Cp` or `Pp` is less than 1.33 (or the desired target), the process spread is too wide.
    *   If `Cpk` or `Ppk` is significantly less than `Cp` or `Pp`, the process is not centered.
    *   Low indices indicate a need to reduce process variation, center the process, or both.

**Example:**

A machine produces bolts with a specified diameter of 10 mm ± 0.5 mm. This means USL = 10.5 mm and LSL = 9.5 mm.
Data from 20 subgroups of 5 bolts each yields:
*   Average of subgroup means ($\bar{\bar{x}}$) = 10.1 mm
*   Average range ($\bar{R}$) = 0.4 mm

**Calculations:**

1.  **Estimate $\sigma$:** Using $\bar{R}$, $\sigma \approx \bar{R} / d_2$. For subgroup size 5, $d_2 = 2.326$.
    $\sigma \approx 0.4 / 2.326 \approx 0.1719$ mm

2.  **Calculate Specification Width:** USL - LSL = 10.5 - 9.5 = 1.0 mm

3.  **Calculate Cp:**
    $$Cp = \frac{1.0}{6 \times 0.1719} = \frac{1.0}{1.0314} \approx 0.97$$

4.  **Calculate Cpk:**
    *   Distance to USL: USL - $\mu = 10.5 - 10.1 = 0.4$ mm
    *   Distance to LSL: $\mu$ - LSL = $10.1 - 9.5 = 0.6$ mm
    *   Half-width of specification: (USL - LSL) / 2 = 1.0 / 2 = 0.5 mm

    *   Calculate scaled distances from mean to limits:
        *   $(\text{USL} - \mu) / 3\sigma = 0.4 / (3 \times 0.1719) = 0.4 / 0.5157 \approx 0.776$
        *   $(\mu - \text{LSL}) / 3\sigma = 0.6 / (3 \times 0.1719) = 0.6 / 0.5157 \approx 1.163$

    $$Cpk = \min(0.776, 1.163) = 0.776$$

**Interpretation:**

*   `Cp = 0.97`: The process width (6 sigma) is slightly larger than the specification width. The process is potentially incapable.
*   `Cpk = 0.776`: This is significantly less than Cp, indicating the process is not centered. The mean (10.1 mm) is closer to the USL (10.5 mm) than to the LSL (9.5 mm). The process is definitely incapable of consistently meeting the lower specification limit.

**Actions:** The company needs to address both the process spread and the centering. They might need to:
*   Investigate machine adjustments or maintenance to reduce variation.
*   Recalibrate the machine to center the output around 10.0 mm.

**(Referenced in: Montgomery, 2007, Chapter 8; Mitra, 1998, Chapter 4)**

---

### 6. Assumptions and Limitations of Process Capability Analysis

**Assumptions:**

1.  **Statistical Control:** Cp and Cpk assume the process is in statistical control (i.e., only common causes of variation are present). If the process is out of control, these indices are not meaningful.
2.  **Normal Distribution:** The standard indices (Cp, Cpk) assume that the process output is normally distributed. If the data is non-normal, adjustments (e.g., using percentiles or non-parametric methods) or transformations are needed.
3.  **Rational Subgrouping:** For calculating $\sigma$ from $\bar{R}$ or $\overline{MR}$, the data must be collected in rational subgroups.
4.  **Adequate Data:** A sufficient amount of data is required to get reliable estimates of the process mean and standard deviation.

**Limitations:**

1.  **Non-Normal Data:** The standard formulas are not directly applicable to non-normally distributed data. Specialized techniques are required.
2.  **Short vs. Long Term:** Cp/Cpk reflect short-term capability based on subgroup variation, while Pp/Ppk reflect long-term performance. It's crucial to understand which is being used.
3.  **Specification Limits:** Assumes that the USL and LSL are accurately defined and appropriate for the product or service.
4.  **One Characteristic at a Time:** Capability analysis is typically performed on a single characteristic. For multi-characteristic products, multivariate capability analysis is needed.
5.  **Capability is Not Improvement:** A high capability index indicates the *potential* to meet specifications. It doesn't guarantee that the process *is* meeting them, nor does it automatically lead to improvement without further action.

**(Referenced in: Montgomery, 2007, Chapter 8; Mitra, 1998, Chapter 4)**

---

### 7. Connecting to Other TQM Concepts

*   **Plan-Do-Check-Act (PDCA):** Process capability analysis fits into the "Check" phase, providing data to assess if the process is performing as intended.
*   **Statistical Process Control (SPC):** Capability analysis builds upon SPC. Control charts are used to establish control, and capability indices are used to assess performance against specifications.
*   **Continuous Improvement:** Capability analysis helps identify areas where efforts for reduction of variation (e.g., Taguchi methods, Design of Experiments) should be focused.
*   **Quality Gurus:** Concepts like "fitness for use" (Juran) are directly addressed by process capability. Crosby's emphasis on "doing things right the first time" is supported by ensuring processes are capable.

**(Referenced in: Besterfield et al., 2018; Subburaj Ramasamy, 2017; Juran & Gryna, 2004)**

---

### Practice Questions

**Question 1:**

A manufacturing process has a Lower Specification Limit (LSL) of 50 and an Upper Specification Limit (USL) of 70. The process mean is 62, and the process standard deviation ($\sigma$) is estimated to be 3. Calculate the Cp and Cpk for this process.

**Question 2:**

Explain the difference between Cp and Cpk. When would Cpk be a more appropriate measure than Cp?

**Question 3:**

If a process has a Cp of 1.20 and a Cpk of 0.90, what does this tell you about the process's centering? Is the process capable of meeting specifications?

**Question 4:**

What is the primary assumption of Cp and Cpk that is NOT necessarily assumed for Pp and Ppk?

**Question 5:**

A company aims for "6-sigma" capability. What are the target values for Cp and Cpk?

---

### Answers to Practice Questions

**Answer 1:**

*   **Specification Width:** USL - LSL = 70 - 50 = 20
*   **Cp Calculation:**
    $$Cp = \frac{\text{USL} - \text{LSL}}{6\sigma} = \frac{20}{6 \times 3} = \frac{20}{18} \approx 1.11$$
*   **Cpk Calculation:**
    *   Distance to USL: USL - $\mu = 70 - 62 = 8$
    *   Distance to LSL: $\mu$ - LSL = $62 - 50 = 12$
    *   $(\text{USL} - \mu) / 3\sigma = 8 / (3 \times 3) = 8 / 9 \approx 0.89$
    *   $(\mu - \text{LSL}) / 3\sigma = 12 / (3 \times 3) = 12 / 9 \approx 1.33$
    $$Cpk = \min(0.89, 1.33) = 0.89$$

**Answer 2:**

*   **Cp (Process Capability Index):** Measures the ratio of the specification width to the process width (six standard deviations) without considering the process mean's location. It indicates the *potential* capability if the process were centered.
*   **Cpk (Process Capability Index - Minimum):** Measures the ratio of the distance from the process mean to the nearest specification limit to half the specification width (three standard deviations). It accounts for both process variation and centering.
*   **When Cpk is more appropriate:** Cpk is always a more realistic measure than Cp because it accounts for the process mean's position relative to the specification limits. If a process is off-center, Cpk will be lower than Cp, highlighting the actual incapability due to centering, even if Cp is high.

**Answer 3:**

*   **Centering:** If Cp (1.20) is significantly greater than Cpk (0.90), it indicates that the process mean is not centered within the specification limits. The process is closer to one of the limits than it could be if it were perfectly centered.
*   **Capability:** The Cpk of 0.90 is less than 1.00, meaning the process is **incapable** of consistently meeting specifications, likely due to the off-center mean, even though the overall process spread (reflected in Cp) is somewhat acceptable.

**Answer 4:**

The primary assumption that Cp and Cpk make, which Pp and Ppk do not necessarily assume, is that the process is in **statistical control**. Pp and Ppk use the overall standard deviation, which reflects the total variation over a period, including potential shifts or assignable causes.

**Answer 5:**

For "6-sigma" capability, the target values for both Cp and Cpk are **2.00**. This signifies that the process spread (six standard deviations) is one-third of the specification width, allowing for substantial centering and minimal risk of producing non-conforming output.

---

### Important Points to Remember

*   **Control vs. Capability:** A process must be in statistical control *before* you can meaningfully assess its capability.
*   **Cpk is Key:** Cpk is generally a more informative metric than Cp because it includes process centering.
*   **Indices < 1:** A capability index less than 1.00 indicates a process is incapable of meeting specifications.
*   **Indices > 1.33:** Generally considered the minimum acceptable level for capable processes, with 2.00 being the target for world-class "6-sigma" performance.
*   **Assumptions Matter:** Be aware of the assumptions (especially normality and statistical control) when interpreting capability indices.
*   **Data is Crucial:** Accurate and sufficient data are essential for reliable capability analysis.

This comprehensive set of notes should provide a strong foundation for understanding process capability within the context of Total Quality Management. Remember to practice the calculations and interpretations with real-world data whenever possible.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
