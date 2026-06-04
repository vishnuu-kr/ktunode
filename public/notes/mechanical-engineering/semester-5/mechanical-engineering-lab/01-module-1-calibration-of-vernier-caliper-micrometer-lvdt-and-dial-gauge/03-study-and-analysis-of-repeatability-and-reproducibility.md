---
title: "Study and analysis of repeatability and reproducibility"
subject: "MECHANICAL ENGINEERING LAB"
module: "Module 1: Calibration of vernier caliper, micrometer, LVDT and dial gauge."
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1551d0cf4804463700"
status: "completed"
scrapedAt: "2026-05-20T18:01:24.339Z"
---
# Mechanical Engineering Lab - Module 1: Calibration & Measurement Analysis

## Topic: Study and Analysis of Repeatability and Reproducibility

---

### 1. Introduction to Measurement Accuracy and Reliability

In metrology and engineering measurements, simply obtaining a reading is not enough. The reliability and consistency of these readings are paramount. This module focuses on understanding two crucial aspects of measurement reliability: **Repeatability** and **Reproducibility**. These concepts are fundamental to ensuring the quality and trustworthiness of measurements made using instruments like vernier calipers, micrometers, LVDTs, and dial gauges.

**Key Concepts:**

*   **Measurement:** The process of assigning a numerical value to a physical quantity.
*   **Accuracy:** The closeness of a measurement to the true value of the quantity being measured.
*   **Precision:** The closeness of agreement between a series of measurements of the same quantity under the same conditions. Repeatability and Reproducibility are key indicators of precision.
*   **Error:** The difference between the measured value and the true value. Errors can be systematic (consistent) or random (unpredictable).

---

### 2. Understanding Repeatability

**Definition:**
**Repeatability** refers to the closeness of agreement between successive measurements of the same quantity, performed under the **same measurement conditions**. These conditions include:
    *   The same measuring instrument.
    *   The same operator.
    *   The same measurement procedure.
    *   The same location.
    *   The same time interval.

**Key Aspects:**
*   It is primarily concerned with the **short-term variability** of the measurement system.
*   It highlights the consistency of the instrument and the operator's technique under identical circumstances.
*   It is often expressed as a standard deviation or a range of measurements.

**In the context of Module 1 Instruments:**

*   **Vernier Caliper/Micrometer:** If an operator measures the same object multiple times with the same vernier caliper, without changing their grip, lighting, or the object's position, the resulting readings should be very close to each other.
*   **LVDT (Linear Variable Differential Transformer):** When an LVDT is used to measure a fixed displacement repeatedly, the output signal should consistently indicate the same displacement.
*   **Dial Gauge:** Repeatedly bringing the stylus of a dial gauge into contact with a fixed surface at the same point should yield the same reading.

**Example:**
An engineer measures the diameter of a precision shaft using the same micrometer, by the same operator, in the same workshop, at 10-minute intervals, five times. The readings are: 25.01 mm, 25.02 mm, 25.01 mm, 25.02 mm, 25.01 mm. The variation in these readings is a measure of repeatability.

**Factors Affecting Repeatability:**
*   **Instrument Resolution and Calibration:** A poorly calibrated instrument or one with insufficient resolution will exhibit poor repeatability.
*   **Operator Skill and Technique:** Inconsistent handling or positioning can lead to variations.
*   **Environmental Factors:** Minor temperature fluctuations or vibrations might affect readings, especially with sensitive instruments.
*   **Wear and Tear on the Instrument:** Loose parts or worn components can introduce variability.

---

### 3. Understanding Reproducibility

**Definition:**
**Reproducibility** refers to the closeness of agreement between successive measurements of the same quantity, performed under **different measurement conditions**. These different conditions can include:
    *   Different measuring instruments of the same type.
    *   Different operators.
    *   Different measurement procedures.
    *   Different locations.
    *   Different times.

**Key Aspects:**
*   It assesses the **long-term variability** and the **generalizability** of the measurement process.
*   It helps determine if the measurement results are consistent across different users and equipment.
*   It is generally a broader measure of variability than repeatability.

**In the context of Module 1 Instruments:**

*   **Vernier Caliper/Micrometer:** If multiple engineers, using different but identical models of vernier calipers, measure the same shaft, their readings should be comparable.
*   **LVDT:** If the same displacement is measured by different LVDTs of the same model, or by different operators setting up the same LVDT, the results should be consistent.
*   **Dial Gauge:** If different technicians use different dial gauges to measure the same workpiece feature, the results should be similar.

**Example:**
Three different engineers, using three separate vernier calipers from the lab, measure the length of a standard gauge block. The readings obtained by Engineer A are 25.01, 25.02 mm. Engineer B's readings are 25.03, 25.02 mm. Engineer C's readings are 25.02, 25.03 mm. The variation across these engineers and instruments is a measure of reproducibility.

**Factors Affecting Reproducibility:**
*   **Differences in Instrument Calibration:** Even within the same model, slight calibration differences between instruments can occur.
*   **Variations in Operator Training and Experience:** Different operators may have different levels of skill.
*   **Differences in Measurement Setups:** Variations in how the instrument is mounted or how the workpiece is held.
*   **Environmental Conditions Over Time:** Significant temperature, humidity, or vibration changes over extended periods.
*   **Interchangeability of Components:** For instruments with interchangeable parts, differences in these parts can affect reproducibility.

---

### 4. Quantifying Repeatability and Reproducibility

Both repeatability and reproducibility are typically quantified using **statistical methods**, most commonly by calculating the **standard deviation**.

**Standard Deviation (σ):**
The standard deviation measures the dispersion of a dataset around its mean. A lower standard deviation indicates higher precision (better repeatability or reproducibility).

**Formula for Sample Standard Deviation (s):**
$s = \sqrt{\frac{\sum_{i=1}^{n} (x_i - \bar{x})^2}{n-1}}$

Where:
*   $x_i$ is each individual measurement.
*   $\bar{x}$ is the mean of all measurements.
*   $n$ is the number of measurements.

**Repeatability (r):**
Often expressed as 2 times the standard deviation ($2\sigma_r$) or 3 times the standard deviation ($3\sigma_r$) to cover a certain percentage of the expected variation (e.g., 95% for $2\sigma$). This is sometimes referred to as the **range**.

**Reproducibility (R):**
Similarly, reproducibility can be expressed as 2 or 3 times the standard deviation of measurements taken under different conditions ($2\sigma_R$ or $3\sigma_R$).

**Analysis Example:**

Suppose we measure a gauge block's length multiple times using the same micrometer by the same operator.
Measurements: 10.01, 10.02, 10.01, 10.03, 10.02 mm.

1.  **Calculate the Mean ($\bar{x}$):**
    $\bar{x} = (10.01 + 10.02 + 10.01 + 10.03 + 10.02) / 5 = 10.018$ mm

2.  **Calculate the Standard Deviation ($s_r$ for repeatability):**
    *   $(10.01 - 10.018)^2 = (-0.008)^2 = 0.000064$
    *   $(10.02 - 10.018)^2 = (0.002)^2 = 0.000004$
    *   $(10.01 - 10.018)^2 = (-0.008)^2 = 0.000064$
    *   $(10.03 - 10.018)^2 = (0.012)^2 = 0.000144$
    *   $(10.02 - 10.018)^2 = (0.002)^2 = 0.000004$
    Sum of squares = $0.000064 + 0.000004 + 0.000064 + 0.000144 + 0.000004 = 0.000280$
    $s_r = \sqrt{0.000280 / (5-1)} = \sqrt{0.00007} \approx 0.0084$ mm

3.  **Repeatability:** The repeatability of the measurement process can be stated as $\pm 2s_r$ or $\pm 3s_r$.
    *   $\pm 2 \times 0.0084 = \pm 0.0168$ mm (covering ~95% of variation)
    *   $\pm 3 \times 0.0084 = \pm 0.0252$ mm (covering ~99.7% of variation)

Now, suppose another operator uses a different micrometer and gets similar readings, but with a slightly wider spread: 10.00, 10.03, 10.01, 10.04, 10.02 mm.
Mean ($\bar{x}_{Rep}$)= 10.02 mm
Standard Deviation ($s_R$) $\approx 0.013$ mm.

The reproducibility ($R$) could be expressed as $\pm 2s_R = \pm 0.026$ mm.

**Comparison:** In this hypothetical example, reproducibility ($s_R \approx 0.013$ mm) is worse than repeatability ($s_r \approx 0.0084$ mm), indicating that the differences in operators or micrometers introduced more variability than the inherent inconsistencies of a single measurement session.

---

### 5. Relationship Between Repeatability, Reproducibility, and Total Variability

**Total Variability** of a measurement process is the overall spread observed in the measurements. It's a combination of:
*   **Repeatability (within-unit variation):** The variation from the same instrument, same operator, same conditions.
*   **Reproducibility (between-unit variation):** The variation due to differences in instruments, operators, locations, etc.

**Important Point:** The total variability is *not* simply the sum of repeatability and reproducibility. They are related through their variances:

$Variance_{Total} = Variance_{Repeatability} + Variance_{Reproducibility}$

$s_{Total}^2 = s_r^2 + s_R^2$

Therefore, $s_{Total} = \sqrt{s_r^2 + s_R^2}$

A measurement system with good repeatability and reproducibility will have a low total variability, making the measurements more reliable.

---

### 6. Importance in Calibration and Measurement Analysis

Understanding and quantifying repeatability and reproducibility is crucial for:

*   **Instrument Selection (CO1):** Knowing the typical repeatability and reproducibility of different instruments helps in choosing the most suitable one for a specific measurement task. For example, a high-precision manufacturing process requiring tight tolerances will need an instrument with very high repeatability and reproducibility.
*   **Process Capability Analysis (CO2):** These metrics are inputs for determining if a manufacturing process can consistently produce parts within specified tolerances. If the measurement system's variability (repeatability + reproducibility) is too large compared to the part's tolerance, the process capability will be poor.
*   **Identifying Sources of Error:** Analyzing the difference between repeatability and reproducibility helps pinpoint whether the primary source of measurement variation is the instrument itself, the operator, or the overall process setup.
*   **Setting Measurement Standards:** Establishing acceptable limits for repeatability and reproducibility for specific measurement tasks.
*   **Calibration Procedures:** Ensuring that the calibration process itself is repeatable and reproducible.
*   **Quality Control:** Validating measurement systems used in quality control to ensure they provide trustworthy data.

---

### 7. Practical Exercises and Analysis

**Scenario:** You are tasked with measuring the outer diameter of a cylindrical workpiece using a vernier caliper.

**Task 1: Assessing Repeatability**
1.  Take the same vernier caliper.
2.  Measure the outer diameter of the workpiece five times.
3.  Ensure you use the exact same method and grip each time.
4.  Record your readings.
5.  Calculate the mean and the sample standard deviation of your readings.
6.  State the repeatability of your measurement process in the form of $\pm 2s_r$.

**Task 2: Assessing Reproducibility (Hypothetical)**
Imagine three other students, each using a different vernier caliper from the lab, measure the same workpiece using their preferred method.
Student A Readings: 20.05, 20.06 mm
Student B Readings: 20.04, 20.07 mm
Student C Readings: 20.06, 20.05 mm

1.  For each student, calculate the mean and standard deviation.
2.  Assume the standard deviation for each student represents their individual repeatability.
3.  Calculate the overall mean and standard deviation across all students' readings to estimate reproducibility.
4.  Compare the estimated reproducibility with your own repeatability.

**Sample Answers (Illustrative):**

Let's assume your readings for Task 1 were: 20.05 mm, 20.06 mm, 20.05 mm, 20.07 mm, 20.06 mm.

1.  **Mean:** $\bar{x} = (20.05 + 20.06 + 20.05 + 20.07 + 20.06) / 5 = 20.058$ mm
2.  **Standard Deviation ($s_r$):**
    Sum of squares $= (20.05-20.058)^2 + (20.06-20.058)^2 + (20.05-20.058)^2 + (20.07-20.058)^2 + (20.06-20.058)^2$
    $= (-0.008)^2 + (0.002)^2 + (-0.008)^2 + (0.012)^2 + (0.002)^2$
    $= 0.000064 + 0.000004 + 0.000064 + 0.000144 + 0.000004 = 0.00028$
    $s_r = \sqrt{0.00028 / (5-1)} = \sqrt{0.00007} \approx 0.0084$ mm
3.  **Repeatability:** $\pm 2s_r = \pm 2 \times 0.0084 = \pm 0.0168$ mm. This means you can be reasonably confident that the true value lies within $\pm 0.0168$ mm of your average reading, assuming your measurement conditions are perfectly controlled.

**For Task 2 (Hypothetical Analysis):**

*   **Student A:** Mean = 20.055 mm, $s_A \approx 0.0071$ mm
*   **Student B:** Mean = 20.055 mm, $s_B \approx 0.0150$ mm
*   **Student C:** Mean = 20.055 mm, $s_C \approx 0.0071$ mm

*   **Overall Mean:** (20.055 + 20.055 + 20.055) / 3 = 20.055 mm

To estimate reproducibility, we'd look at the variation *between* the students' average measurements. If the individual standard deviations ($s_A, s_B, s_C$) are taken as representative of repeatability for each student/caliper combination, the combined variance would be:
$s_{Total}^2 = (s_A^2 + s_B^2 + s_C^2) / 3$ (simplified approach for illustration)
$s_{Total}^2 \approx (0.0071^2 + 0.0150^2 + 0.0071^2) / 3 \approx (0.0000504 + 0.000225 + 0.0000504) / 3 \approx 0.0003254 / 3 \approx 0.0001085$
$s_{Total} \approx \sqrt{0.0001085} \approx 0.0104$ mm

This $s_{Total}$ includes both within-student repeatability and between-student reproducibility. A more formal Gage R&R study would separate these. However, for a basic understanding, comparing $s_r$ (your repeatability, 0.0084 mm) with the overall variation ($s_{Total} \approx 0.0104$ mm) suggests that there is some additional variability introduced by different operators or calipers.

**Interpretation:** If your repeatability was 0.0084 mm and the overall variability (including other operators/instruments) was 0.0104 mm, it implies that using different instruments or operators introduced a noticeable, though not drastically large, amount of additional error.

---

### 8. Key Points to Remember

*   **Repeatability:** Same instrument, same operator, same conditions. Focuses on short-term variability.
*   **Reproducibility:** Different instruments, different operators, different conditions. Focuses on long-term and generalizability.
*   Both are measures of **precision**, not accuracy.
*   Quantified using **standard deviation**.
*   Crucial for selecting instruments, analyzing process capability, and ensuring reliable measurements.
*   Total variability is a combination of repeatability and reproducibility variances.
*   The goal in measurement system design is to minimize both repeatability and reproducibility.

---

### 9. Alignment with Course Outcomes (COs)

*   **CO1: Choose the appropriate instruments for different measurements (K3):** Understanding the inherent repeatability and reproducibility of instruments like vernier calipers, micrometers, LVDTs, and dial gauges allows for informed selection based on the required precision of the measurement. For example, a high-precision bearing assembly requires an instrument with much better repeatability and reproducibility than measuring the diameter of a wooden dowel.
*   **CO2: Determine dimensional and form accuracies of various components (K3):** Repeatability and reproducibility are fundamental to accurately determining dimensional and form accuracies. If the measurement system itself is inconsistent, any conclusions about the component's accuracy will be flawed. A component might appear to be within tolerance simply due to measurement variability.
*   **CO3 & CO4 (Indirectly):** While CO3 and CO4 focus on mechanisms and mechatronic systems, the foundational understanding of measurement reliability (repeatability/reproducibility) is essential for any engineering application involving measurement, which is ubiquitous in machinery and automation. For instance, feedback from an LVDT (CO4) used in a mechatronic system (CO3) needs to be repeatable and reproducible for the system to function correctly.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


### 10. References

*   **Metrology for Engineers** by Shotbolt C.R. and Gayler J.F.W: Likely discusses precision, variability, and statistical analysis of measurements, including concepts of repeatability and reproducibility.
*   **Practical Engineering Metrology** by Sharp K.W.B. and Hume Sir Isaac: This book would provide practical guidance on performing measurements and analyzing their consistency using various metrology tools.
*   **Mechatronics: Electronic Control Systems in Mechanical and Electrical Engineering** by W.Bolton: Relevant for understanding how LVDTs (as mentioned in the calibration list) function and how measurement uncertainty impacts the control systems in mechatronic applications. The reliability of sensor readings is critical.

---