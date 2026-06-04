---
title: "Statistical Quality Control - Process capability - Causes of variation in quality- Control charts for 
  and R – Acceptance sampling."
subject: "INDUSTRIAL AND SYSTEMS ENGINEERING"
module: "Module 4: Quality Management: Quality, quality planning, quality control, quality assurance, quality management – TQM, ISO, Six Sigma and Quality circle (Brief description only)."
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1551d0cf4804463744"
status: "completed"
scrapedAt: "2026-05-20T18:04:20.829Z"
---
# Industrial and Systems Engineering: Module 4 - Quality Management

## Topic: Statistical Quality Control (SQC)

This module focuses on understanding and implementing statistical methods to ensure and improve product and process quality. We will delve into process capability, the sources of variation, the use of control charts for monitoring processes, and acceptance sampling for incoming or outgoing goods.

---

### 1. Causes of Variation in Quality

Understanding the sources of variation is fundamental to controlling and improving quality. Variation is inherent in any process.

*   **Definition:** Variation refers to the differences observed in measurements of a product or process over time or across different units.
*   **Types of Variation:**
    *   **Chance (or Common) Cause Variation:**
        *   These are random variations that are inherent to the process. They are predictable within statistical limits.
        *   They are usually due to the complex interaction of many factors.
        *   **Example:** Slight variations in raw material composition, minor fluctuations in machine speed, or small changes in ambient temperature.
        *   **Management Action:** Reducing chance cause variation typically requires fundamental changes to the process, equipment, or materials.
    *   **Assignable (or Special) Cause Variation:**
        *   These variations are caused by specific, identifiable factors that are not inherent to the process. They are unpredictable and indicate that the process is "out of control."
        *   **Example:** A worn-out tool, a machine malfunction, a new operator on duty, improper setup, or a change in raw material supplier.
        *   **Management Action:** Assignable causes can be identified and eliminated, bringing the process back into statistical control.

*   **Reference:** Telsang (2018) discusses these variations in Chapter 11, highlighting their impact on process stability. Montgomery (2010) dedicates significant attention to distinguishing between these two types of variation as a prerequisite for effective SQC.

---

### 2. Process Capability

Process capability measures how well a process can consistently produce output within specified limits.

*   **Definition:** Process capability is the extent to which a process is able to meet or exceed its specified requirements (tolerance limits). It compares the actual variation in a process to the allowable variation defined by specifications.
*   **Key Concepts:**
    *   **Specification Limits (SL):** The upper and lower limits defined by the customer or engineering design for a particular characteristic. These are not related to the process itself.
        *   **Upper Specification Limit (USL):** The maximum acceptable value.
        *   **Lower Specification Limit (LSL):** The minimum acceptable value.
    *   **Process Variation:** Typically measured by the process standard deviation ($\sigma$). For a stable process, it's often estimated from control charts.
*   **Process Capability Indices:**
    *   **Cp (Process Capability):**
        *   Measures the ratio of the specification width to the process width (assuming the process is centered between the specification limits).
        *   **Formula:** $C_p = \frac{USL - LSL}{6\sigma}$ (where $\sigma$ is the process standard deviation)
        *   **Interpretation:**
            *   $C_p \ge 1.33$: Process is considered capable (often referred to as "six sigma capable" if the process is centered and $\sigma$ is estimated using the process standard deviation).
            *   $1.00 \le C_p < 1.33$: Process is marginally capable.
            *   $C_p < 1.00$: Process is not capable.
        *   **Important Note:** $C_p$ does not consider the centering of the process. A process can have a high $C_p$ but still produce many defective parts if it's not centered.
    *   **Cpk (Process Capability Index):**
        *   Measures the ratio of the nearest specification limit to the process variation. It accounts for process centering.
        *   **Formula:** $C_{pk} = \min\left(\frac{USL - \mu}{3\sigma}, \frac{\mu - LSL}{3\sigma}\right)$ (where $\mu$ is the process mean)
        *   **Interpretation:**
            *   $C_{pk} \ge 1.33$: Process is capable and centered.
            *   $1.00 \le C_{pk} < 1.33$: Process is marginally capable or not centered.
            *   $C_{pk} < 1.00$: Process is not capable.
        *   **Important Note:** If the process is perfectly centered, $C_{pk} = C_p$.

*   **Example:** A machine is supposed to produce bolts with a diameter between 10 mm and 12 mm (USL=12, LSL=10). The process mean is 11 mm, and the process standard deviation ($\sigma$) is 0.3 mm.
    *   $C_p = \frac{12 - 10}{6 \times 0.3} = \frac{2}{1.8} \approx 1.11$
    *   $C_{pk} = \min\left(\frac{12 - 11}{3 \times 0.3}, \frac{11 - 10}{3 \times 0.3}\right) = \min\left(\frac{1}{0.9}, \frac{1}{0.9}\right) \approx 1.11$
    *   In this case, the process is marginally capable ($C_p \approx 1.11$) and centered. However, a $C_{pk}$ of 1.11 is often considered acceptable for many applications, but for critical applications, a higher value (like 1.33 or 1.67) might be desired.

*   **Reference:** Telsang (2018) provides detailed calculations and interpretations of $C_p$ and $C_{pk}$ in Chapter 11. Paneerselvam (2012) also covers these indices as part of his discussion on quality control tools. Mahadevan (2018) links process capability to achieving Six Sigma goals.

---

### 3. Control Charts for $\bar{x}$ and R

Control charts are graphical tools used to monitor a process over time and detect the presence of assignable causes of variation.

*   **Definition:** A control chart is a graphical display of a quality characteristic measured over time, with a center line (CL) representing the process average and upper and lower control limits (UCL and LCL) representing the statistical limits of expected variation.
*   **Purpose:**
    *   To distinguish between common and special cause variation.
    *   To provide a visual indication of process stability and capability.
    *   To signal when the process is out of control and requires investigation.
*   **Types of Control Charts:**
    *   **Charts for Variables Data (Continuous Data):** Used for measurements like length, weight, temperature, etc.
        *   **$\bar{x}$ (X-bar) Chart:** Monitors the **process average** or central tendency.
        *   **R (Range) Chart:** Monitors the **process variability** or dispersion.

*   **Control Charts for $\bar{x}$ and R:**
    *   **Data Collection:** Data is collected in subgroups of size $n$ at regular intervals.
    *   **Calculating $\bar{x}$:** For each subgroup, calculate the average ($\bar{x}$).
    *   **Calculating R:** For each subgroup, calculate the range ($R = X_{max} - X_{min}$).
    *   **Constructing the Charts:**
        *   **Center Lines (CL):**
            *   For $\bar{x}$ chart: $CL_{\bar{x}} = \bar{\bar{x}}$ (the grand average of all subgroup averages).
            *   For R chart: $CL_R = \bar{R}$ (the average of all subgroup ranges).
        *   **Control Limits (UCL & LCL):**
            *   **$\bar{x}$ Chart:**
                *   $UCL_{\bar{x}} = \bar{\bar{x}} + A_3 \bar{R}$
                *   $LCL_{\bar{x}} = \bar{\bar{x}} - A_3 \bar{R}$
                *   Where $A_3$ is a control chart constant that depends on the subgroup size ($n$).
            *   **R Chart:**
                *   $UCL_R = D_4 \bar{R}$
                *   $LCL_R = D_3 \bar{R}$
                *   Where $D_3$ and $D_4$ are control chart constants that depend on the subgroup size ($n$).
    *   **Control Chart Constants (Example values for common subgroup sizes):**

        | Subgroup Size (n) | $A_3$ | $D_3$ | $D_4$ |
        | :---------------- | :---- | :---- | :---- |
        | 2                 | 1.023 | 0     | 3.072 |
        | 3                 | 0.577 | 0     | 2.574 |
        | 4                 | 0.415 | 0     | 2.282 |
        | 5                 | 0.308 | 0     | 2.114 |
        | 6                 | 0.246 | 0     | 2.004 |
        | ...               | ...   | ...   | ...   |
        *Note: $D_3=0$ for $n \le 4$. Source: Montgomery (2010), Telsang (2018)*

    *   **Interpretation Rules (Out-of-Control Signals):**
        *   A point falling outside the control limits (UCL or LCL).
        *   A run of consecutive points on one side of the center line (e.g., 7 points in a row above the CL).
        *   A trend of increasing or decreasing points (e.g., 6 points in a row steadily increasing).
        *   Many other patterns indicate non-randomness (e.g., cycles, hugging the center line).

*   **Example:** A machine filling bottles with juice. Subgroups of 5 bottles are taken every hour.
    *   We collect data for 20 subgroups.
    *   Calculate the $\bar{x}$ and $R$ for each subgroup.
    *   Calculate the grand average $\bar{\bar{x}}$ and the average range $\bar{R}$.
    *   Using $n=5$, find $A_3=0.308$, $D_3=0$, $D_4=2.114$.
    *   Calculate $CL_{\bar{x}} = \bar{\bar{x}}$, $UCL_{\bar{x}} = \bar{\bar{x}} + 0.308 \bar{R}$, $LCL_{\bar{x}} = \bar{\bar{x}} - 0.308 \bar{R}$.
    *   Calculate $CL_R = \bar{R}$, $UCL_R = 2.114 \bar{R}$, $LCL_R = 0 \bar{R}$ (since $D_3=0$).
    *   Plot the $\bar{x}$ and $R$ values for each subgroup. Examine the plots for any points outside the limits or non-random patterns.

*   **Reference:** Montgomery (2010) is considered a definitive source for control charts, covering their construction, interpretation, and applications in detail. Telsang (2018) and Paneerselvam (2012) also provide good introductions and practical examples.

---

### 4. Acceptance Sampling

Acceptance sampling is a method of quality control where a sample of items from a batch is inspected to decide whether to accept or reject the entire batch.

*   **Definition:** Acceptance sampling is a statistical method used in quality control to determine whether a batch of manufactured goods meets certain quality standards. It involves inspecting a random sample from a lot and making a decision about the entire lot based on the sample's results.
*   **Purpose:**
    *   To avoid inspecting 100% of the items, which can be time-consuming, costly, or destructive.
    *   To protect the customer from receiving substandard products.
    *   To provide the producer with an indication of the quality level of their production.
*   **Types of Acceptance Sampling:**
    *   **Sampling by Attributes:** The inspector classifies each item as either conforming or non-conforming (defective). This is often used for go/no-go type inspections.
    *   **Sampling by Variables:** The inspector measures a characteristic of each item (e.g., length, weight) and uses the measurements to make a decision about the lot.
*   **Key Concepts for Attributes Sampling:**
    *   **Lot:** A defined quantity of items produced under similar conditions.
    *   **Sample Size (n):** The number of items inspected from the lot.
    *   **Acceptance Number (c):** The maximum number of defects allowed in the sample for the lot to be accepted. If the number of defects is greater than $c$, the lot is rejected.
    *   **Rejection Number:** The minimum number of defects that leads to rejection of the lot (often $c+1$).
    *   **Producer's Risk ($\alpha$):** The probability of rejecting a lot that is actually of acceptable quality. Also known as the Type I error.
    *   **Consumer's Risk ($\beta$):** The probability of accepting a lot that is actually of unacceptable quality. Also known as the Type II error.
    *   **Acceptable Quality Limit (AQL):** The maximum percent defective that is considered acceptable as a process average.
    *   **Lot Tolerance Percent Defective (LTPD):** The maximum percent defective that is considered unacceptable.
*   **Operating Characteristic (OC) Curve:**
    *   **Definition:** A graph that shows the probability of accepting a lot for different levels of lot quality (percent defective).
    *   **Purpose:** Helps visualize the risks associated with a sampling plan.
    *   **Shape:** An ideal OC curve would be a step function, with 100% acceptance up to a certain quality level and 0% thereafter. Real OC curves are S-shaped.
*   **Single Sampling Plan (n, c):**
    *   A plan where a single sample of size $n$ is drawn from the lot.
    *   The lot is accepted if the number of defects in the sample is less than or equal to $c$.
    *   The lot is rejected if the number of defects is greater than $c$.
*   **Example:** A company receives a shipment of 1000 electronic components. A single sampling plan $(n=50, c=2)$ is used.
    *   A sample of 50 components is randomly selected from the 1000.
    *   The components are inspected for defects.
    *   If 0, 1, or 2 defects are found in the sample, the entire lot of 1000 components is accepted.
    *   If 3 or more defects are found, the lot is rejected.

*   **Reference:** Montgomery (2010) provides an extensive treatment of acceptance sampling plans, including OC curves and the design of sampling plans. Telsang (2018) and Paneerselvam (2012) also cover the basics of acceptance sampling.

---

### Alignment with Course Outcomes (COs) and Knowledge Levels (KLs):

*   **CO1: Implement various tools and techniques in industrial engineering (K3)**
    *   This topic directly addresses K3 by requiring the application of control charts for process monitoring and interpretation, and the selection/application of acceptance sampling plans. Understanding process capability indices also involves applying formulas and interpreting results.
*   **CO2: Apply inventory control techniques for materials management (K3)**
    *   While not directly inventory control, SQC (especially acceptance sampling) impacts material management by ensuring the quality of incoming materials, which influences inventory levels and rework.
*   **CO3: Identify the framework of lean and agile manufacturing (K2)**
    *   SQC tools are foundational to Lean manufacturing, as a stable and capable process is essential for reducing waste (defects, rework) and improving flow.
*   **CO4: Identify core and extended modules of enterprise resource planning (K2)**
    *   Quality management, supported by SQC, is often integrated within ERP systems for production planning and control.
*   **CO5: To be conversant with important terms for quality management in organizations (K2)**
    *   This topic introduces key terms like variation, process capability indices ($C_p, C_{pk}$), control limits, acceptance number, producer's risk, consumer's risk, AQL, LTPD, which are vital for understanding quality management.
*   **CO6: Implement different quality control techniques (K3)**
    *   This topic is a core component of implementing quality control techniques, specifically focusing on statistical methods like control charts and acceptance sampling.

---

### Important Points to Remember:

*   **Distinguish clearly between common and assignable causes of variation.** Control charts are designed to detect assignable causes.
*   **Process capability ($C_p, C_{pk}$) measures how well a process *can* meet specifications, while control charts measure how well a process *is* performing.** A process must be in statistical control (stable) before its capability can be meaningfully assessed.
*   **Control charts help prevent defects by signaling problems early.** They are a proactive tool.
*   **Acceptance sampling is a decision-making tool, not a defect elimination tool.** It's used when 100% inspection is impractical or uneconomical.
*   **The choice of sampling plan involves balancing producer's and consumer's risks.**

---

### Practice Questions:

**Question 1:**
Differentiate between common cause variation and assignable cause variation. Provide an example for each in a manufacturing context.

**Answer:**
*   **Common Cause Variation:** Inherent, random variations present in any stable process. **Example:** Minor fluctuations in the voltage of a power supply affecting a machine's performance.
*   **Assignable Cause Variation:** Variations due to specific, identifiable factors that are not part of the normal process. **Example:** A worn-out cutting tool causing parts to be out of tolerance.

**Question 2:**
A manufacturing process for producing shafts has a mean diameter of 25.0 mm and a standard deviation of 0.1 mm. The specification limits are 24.8 mm to 25.2 mm.
Calculate the process capability index ($C_p$) and the process capability index ($C_{pk}$), assuming the process is centered. Interpret the results.

**Answer:**
*   USL = 25.2 mm, LSL = 24.8 mm
*   $\mu = 25.0$ mm, $\sigma = 0.1$ mm
*   $C_p = \frac{USL - LSL}{6\sigma} = \frac{25.2 - 24.8}{6 \times 0.1} = \frac{0.4}{0.6} \approx 0.67$
*   Since the process is centered, $C_{pk} = C_p \approx 0.67$.
*   **Interpretation:** The $C_p$ and $C_{pk}$ values are significantly less than 1.00. This indicates that the process is **not capable** of meeting the specified requirements. The process variation is much larger than the allowable specification range.

**Question 3:**
For an $\bar{x}$ and R chart with subgroup size $n=4$, what are the control chart constants $A_3$, $D_3$, and $D_4$? If the average range $\bar{R}$ is 2.5 and the grand average $\bar{\bar{x}}$ is 50, what are the control limits for the R chart?

**Answer:**
*   For $n=4$:
    *   $A_3 = 0.415$
    *   $D_3 = 0$
    *   $D_4 = 2.282$
*   **R Chart Control Limits:**
    *   $CL_R = \bar{R} = 2.5$
    *   $UCL_R = D_4 \bar{R} = 2.282 \times 2.5 = 5.705$
    *   $LCL_R = D_3 \bar{R} = 0 \times 2.5 = 0$

**Question 4:**
Describe the purpose of an Operating Characteristic (OC) curve in acceptance sampling. What do the Producer's Risk ($\alpha$) and Consumer's Risk ($\beta$) represent?

**Answer:**
*   **OC Curve Purpose:** An OC curve plots the probability of accepting a lot against the actual quality level of the lot (e.g., percent defective). It helps in understanding the risks associated with a particular acceptance sampling plan.
*   **Producer's Risk ($\alpha$):** The probability of rejecting a lot that is actually of acceptable quality (i.e., a "good" lot is rejected).
*   **Consumer's Risk ($\beta$):** The probability of accepting a lot that is actually of unacceptable quality (i.e., a "bad" lot is accepted).

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
