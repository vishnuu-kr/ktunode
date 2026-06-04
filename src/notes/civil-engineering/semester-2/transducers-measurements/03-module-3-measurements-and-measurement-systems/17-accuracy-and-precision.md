---
title: "Accuracy and Precision"
subject: "TRANSDUCERS & MEASUREMENTS"
module: "Module 3: Measurements  and Measurement  Systems"
branch: "Civil Engineering"
semester: 2
topicId: "68b54567d74ec52cc09130b5"
status: "completed"
scrapedAt: "2026-05-20T18:38:47.486Z"
---
# TRANSDUCERS & MEASUREMENTS

## Module 3: Measurements and Measurement Systems

### Topic: Accuracy and Precision

Welcome, everyone! Today, we're diving into a really fundamental aspect of measurements and measurement systems: **Accuracy and Precision**. These two terms, while often used interchangeably in everyday language, have very distinct meanings in the world of instrumentation. Understanding this difference is absolutely crucial for anyone working with measurements, whether it's designing a system, taking readings, or analyzing data. It's also a concept that frequently pops up in exams, so let's get a solid grasp on it.

Think about it: when we measure something, what are we *really* trying to achieve? We want to know the "true" value of a physical quantity. But how close are we to that true value? And if we measure it multiple times, do we get consistent results? That's where accuracy and precision come into play.

This topic directly supports our **Course Outcome 3 (CO3)**: "Illustrate the working principles of electronic measuring instruments and identify various types of errors in measuring systems and choose methods for minimization of the errors." Accuracy and precision are directly related to understanding and minimizing errors in our measurements.

Let's start by defining these terms, drawing from concepts discussed in texts like Sawhney's "A Course in Electronic Measurements and Instrumentation" and Bell's "Electronic Instrumentation and Measurements."

---

### Defining Accuracy

**Accuracy** refers to how close a measured value is to the *true* or *accepted* value of the quantity being measured. In simpler terms, it's about the correctness of the measurement.

Imagine you're trying to hit a bullseye on a dartboard. If your darts are all clustered around the center, you're demonstrating good accuracy.

*   **Formal Definition:** Accuracy is the degree of closeness of measurements of a quantity to that quantity's actual (true) value.
*   **How we express it:** Accuracy is often expressed as a percentage of the full scale reading, or as a percentage of the true value, or in terms of the minimum significant figure. For example, a voltmeter might be specified as having an accuracy of ±1% of full scale. This means that if its full scale is 100V, it can be off by ±1V.

**Relatable Example:** Let's say the true length of a table is exactly 1.500 meters.
*   If you measure it as 1.502 meters, that's a pretty accurate measurement.
*   If you measure it as 1.750 meters, that's not very accurate.

**Key takeaway:** Accuracy is about hitting the target. It's about how close you are to the bullseye (the true value).

---

### Defining Precision

**Precision**, on the other hand, refers to the degree of agreement among several measurements of the same quantity. It's about the reproducibility or repeatability of the measurements. Precision tells you how close the repeated measurements are to *each other*, regardless of whether they are close to the true value.

Back to our dartboard analogy, if all your darts are clustered very tightly together, even if they are far from the bullseye, you are demonstrating high precision.

*   **Formal Definition:** Precision is the degree to which several measurements, taken under unchanged conditions from the same source, agree with each other.
*   **How we express it:** Precision is often related to the number of significant figures in a measurement. A measurement taken with more significant figures is generally considered more precise. For instance, measuring a length as 1.52 meters is more precise than measuring it as 1.5 meters.

**Relatable Example:** Continuing with the table that's truly 1.500 meters long:
*   If you measure it three times and get 1.510m, 1.512m, and 1.511m, these measurements are very close to each other, indicating high precision. However, they might not be very accurate if the true value is indeed 1.500m.
*   If you measure it and get 1.450m, 1.600m, and 1.520m, these are not precise because they are spread out.

**Key takeaway:** Precision is about consistency. It's about whether your shots are clustered together, even if that cluster isn't on the bullseye.

---

### The Relationship Between Accuracy and Precision

This is where things often get confused, and it's a vital point for understanding. You can have:

1.  **High Accuracy and High Precision:** This is the ideal scenario. Your measurements are both close to the true value *and* close to each other. (Darts are clustered tightly around the bullseye).
2.  **Low Accuracy and High Precision:** Your measurements are consistent with each other, but they are all far from the true value. (Darts are clustered tightly, but far from the bullseye). This often indicates a systematic error or a poorly calibrated instrument.
3.  **High Accuracy and Low Precision:** Your measurements are scattered, but their average is close to the true value. (Darts are scattered all over the board, but their average position might be near the bullseye). This often indicates the presence of random errors.
4.  **Low Accuracy and Low Precision:** This is the worst-case scenario. Your measurements are inconsistent with each other *and* far from the true value. (Darts are scattered widely and not near the bullseye).

**Let's visualize this:**

Imagine a target.
*   **High Accuracy, High Precision:** All shots land in a tight cluster right on the bullseye. Perfect!
*   **Low Accuracy, High Precision:** All shots land in a tight cluster, but it's off to the side, far from the bullseye. Your shots are consistent, but consistently wrong.
*   **High Accuracy, Low Precision:** Shots are scattered all over the board, but if you draw a circle encompassing them, the center of that circle is near the bullseye. The average is good, but individual shots are unpredictable.
*   **Low Accuracy, Low Precision:** Shots are scattered everywhere, and nowhere near the bullseye.

This distinction is crucial for **CO3** as it helps us identify the *type* of error we might be dealing with. High precision but low accuracy points to systematic errors (offset, calibration issues), while low precision (even if average accuracy is okay) suggests random errors.

---

### Errors in Measurement Systems

Now, if accuracy is about closeness to the true value, then anything that causes a deviation from the true value is an **error**. Understanding errors is fundamental to improving our measurements. As per **CO3**, we need to identify these errors and know how to minimize them.

Errors in measurement systems can be broadly categorized into three main types:

#### 1. Gross Errors (or Blunders)

These are mistakes made by the experimenter. They are usually obvious and avoidable.
*   **Examples:** Reading an instrument incorrectly (e.g., parallax error, misreading a scale), incorrect setting of a switch, connecting a circuit incorrectly, forgetting to turn on a device.
*   **How to minimize:** Careful observation, proper training, reading instructions, using checklists, and having a second person check the setup. These are "human errors."

#### 2. Systematic Errors

These errors are consistent in magnitude and direction or proportional to the true value. They are often due to the characteristics of the instrument or the measurement environment. If you measure the same thing multiple times under the same conditions, a systematic error will occur each time in the same way.
*   **Types of Systematic Errors:**
    *   **Instrumental Errors:** These arise from the inherent characteristics of the instrument itself. For example, a voltmeter that always reads 0.5V higher than the actual voltage (offset error), or a spring balance that doesn't read zero when unloaded (zero error). These are often due to wear and tear, improper calibration, or design limitations. Sawhney's book discusses these extensively when detailing different measuring instruments.
    *   **Environmental Errors:** These are due to external conditions affecting the measurement. For example, temperature changes affecting the resistance of a wire, humidity affecting insulation, or air pressure changes.
    *   **Observational Errors:** These are errors made by the observer when reading or recording a measurement. Parallax error (looking at a scale from an angle) is a classic example, though sometimes categorized under gross errors.

*   **Characteristics:** They are predictable and often repeatable. If you measure a quantity of 10V with an instrument that has a +0.5V offset, you'll measure 10.5V. If you measure 20V, you'll measure 20.5V. The error is consistent.
*   **How to minimize:**
    *   **Calibration:** Regularly calibrating instruments against standards. This directly addresses instrumental errors.
    *   **Correction Factors:** Applying known correction factors to the readings.
    *   **Environmental Control:** Performing measurements in a stable environment or accounting for environmental changes.
    *   **Proper Instrument Selection:** Choosing instruments with specifications that are suitable for the measurement task.
    *   **Careful Observation:** Paying attention to how the measurement is being taken.

*   **Connection to Precision:** Systematic errors are a primary reason for **low accuracy with high precision**. The measurement is consistently off the mark because of the systematic bias.

#### 3. Random Errors (or Irregular Errors)

These errors are due to causes that are not immediately obvious, vary from one measurement to the next, and tend to average out over a large number of measurements. They cannot be predicted or corrected for directly.
*   **Examples:** Fluctuations in voltage supply, electrical noise in circuits, variations in friction in moving parts, unpredictable environmental changes that are not accounted for. Even subtle variations in the way an observer handles an instrument can contribute.
*   **Characteristics:** They are unpredictable and change in magnitude and sign.
*   **How to minimize:**
    *   **Increasing the number of readings:** Taking many measurements and averaging them. The average of a set of random errors tends towards zero, as positive and negative errors cancel out. This is a key technique for improving accuracy when random errors are dominant.
    *   **Using more sensitive instruments:** Instruments with higher resolution can sometimes reduce the impact of rounding errors.
    *   **Improving the stability of conditions:** Minimizing environmental fluctuations or power supply variations.

*   **Connection to Precision:** Random errors directly impact **precision**. If random errors are large, your readings will be scattered, leading to low precision. By averaging multiple readings, we can reduce the *effect* of random errors and improve the *accuracy* of the estimated true value.

---

### Quantifying Accuracy and Precision

In practice, we often need to quantify these concepts.

*   **Accuracy:**
    *   **Absolute Error:** The difference between the measured value and the true value.
        *   Absolute Error = Measured Value - True Value
    *   **Relative Error:** The absolute error expressed as a fraction of the true value.
        *   Relative Error = (Absolute Error / True Value) * 100%
    *   **Percentage of Full Scale Error:** This is commonly used for analog instruments. If an instrument has a full-scale value $F$ and its accuracy is specified as $\pm A\%$ of full scale, then the maximum absolute error is $\pm (A/100) \times F$.

*   **Precision:**
    *   While not always quantified with a single metric like accuracy, precision is often discussed in terms of **standard deviation** or **variance** of a set of measurements. A smaller standard deviation indicates higher precision.
    *   **Significant Figures:** As mentioned earlier, the number of significant figures is a good indicator of precision. For example, 12.34 m has four significant figures and is more precise than 12.3 m (three significant figures).

---

### Example Scenario: Measuring Resistance

Let's say we want to measure a resistor that has a true value of 100 $\Omega$. We use an ohmmeter.

*   **Scenario A (High Accuracy, High Precision):**
    *   We measure: 99.9 $\Omega$, 100.1 $\Omega$, 100.0 $\Omega$.
    *   These readings are very close to the true value (100 $\Omega$) and very close to each other.

*   **Scenario B (Low Accuracy, High Precision):**
    *   We measure: 105.0 $\Omega$, 105.2 $\Omega$, 105.1 $\Omega$.
    *   These readings are very close to each other (high precision), but all are significantly higher than the true value (100 $\Omega$), indicating low accuracy. This could be due to a systematic offset in the ohmmeter.

*   **Scenario C (High Accuracy, Low Precision):**
    *   We measure: 98 $\Omega$, 103 $\Omega$, 101 $\Omega$.
    *   These readings are spread out (low precision), but their average ( (98+103+101)/3 = 100.67 $\Omega$) is close to the true value. This suggests random errors are present. If we take more readings and average them, our accuracy might improve.

*   **Scenario D (Low Accuracy, Low Precision):**
    *   We measure: 95 $\Omega$, 108 $\Omega$, 102 $\Omega$.
    *   These readings are not close to the true value and also not close to each other.

---

### Why Does This Matter for Measurement Systems? (CO5)

Understanding accuracy and precision is fundamental to **CO5**: "Understand and utilize various measurement systems, enhancing their capability to apply theoretical knowledge in practical scenarios."

When we design or use a measurement system, our goal is always to achieve the best possible accuracy and precision for the specific application.

*   **Choosing the Right Instrument:** A precise but inaccurate instrument might be acceptable if we can calibrate it (correcting the systematic error). However, an imprecise instrument will yield unreliable results no matter how well calibrated it is.
*   **Interpreting Results:** Knowing if your measurements are precise but inaccurate tells you to look for systematic errors. If they are accurate on average but imprecise, you know random errors are an issue and averaging more readings is a good strategy.
*   **Setting Specifications:** Instrument manufacturers specify accuracy and precision. Users need to understand these specs to select an instrument that meets the requirements of their task. For critical applications, you need high accuracy and high precision. For less critical tasks, lower specifications might be acceptable.

The textbooks by Fowler (Electronic Instrument Design) often delve into the design considerations that affect these parameters. For instance, the quality of components, shielding, and circuit design all influence the inherent accuracy and precision of an electronic instrument.

---

### Quick Recap & Exam Tips

*   **Accuracy:** Closeness to the TRUE value.
*   **Precision:** Closeness of repeated measurements to EACH OTHER.
*   **High Precision, Low Accuracy:** Suggests SYSTEMATIC ERROR.
*   **Low Precision, High Accuracy (on average):** Suggests RANDOM ERROR.
*   **Ideal:** High Accuracy AND High Precision.
*   **Gross Errors:** Human mistakes, usually obvious.
*   **Systematic Errors:** Consistent, predictable (instrumental, environmental, observational). Minimize by calibration, correction factors, stable environment.
*   **Random Errors:** Unpredictable, variable. Minimize by averaging multiple readings, improving stability.

**Common exam pitfall:** Confusing the two terms. Always remember the target analogy: accuracy is hitting the bullseye, precision is hitting the same spot repeatedly.

---

### Sample Questions and Answers

**Q1. A measurement is described as "precise but not accurate." Explain what this means and provide a real-world example.**

**Answer:**
"Precise but not accurate" means that repeated measurements of the same quantity are very close to each other (high precision), but they are consistently far from the true value of the quantity being measured (low accuracy).

**Real-world example:**
Imagine using a digital scale to weigh a standard 1kg calibration weight. If the scale consistently shows 1.05 kg every time you weigh it, it is precise (always reads 1.05 kg) but not accurate (the true value is 1.00 kg). This typically indicates a systematic error, such as the scale needing to be recalibrated or having an offset.

**Q2. What are the three main types of errors in measurement systems, and how would you minimize each?**

**Answer:**
The three main types of errors are:

1.  **Gross Errors (Blunders):** These are mistakes made by the operator, like misreading an instrument or incorrect wiring.
    *   **Minimization:** Careful observation, proper training, reading instructions, double-checking setups, and having a peer review.

2.  **Systematic Errors:** These are consistent errors that affect measurements in the same way each time. They can be instrumental (e.g., a faulty component), environmental (e.g., temperature drift), or observational (e.g., parallax).
    *   **Minimization:** Regular calibration of instruments against known standards, using correction factors, controlling environmental conditions (e.g., stable temperature), and selecting appropriate instruments for the task.

3.  **Random Errors:** These are unpredictable fluctuations that vary from one measurement to the next, causing readings to scatter.
    *   **Minimization:** Taking a large number of measurements and calculating the average. The average of random errors tends to zero. Improving the stability of the measurement system and the environment can also help.

**Q3. Differentiate between accuracy and precision with the help of a dartboard analogy.**

**Answer:**
**Accuracy** refers to how close a dart throw is to the bullseye (the true value). **Precision** refers to how close the dart throws are to each other, regardless of whether they hit the bullseye.

*   **High Accuracy, High Precision:** All darts land in a tight cluster right on the bullseye.
*   **Low Accuracy, High Precision:** All darts land in a tight cluster, but this cluster is off to the side, far from the bullseye. The throws are consistent but consistently wrong.
*   **High Accuracy, Low Precision:** Darts are scattered widely, but the average position of all the darts is close to the bullseye. Individual shots are unpredictable, but on average, they are correct.
*   **Low Accuracy, Low Precision:** Darts are scattered widely and not near the bullseye. The throws are neither consistent nor correct.

This helps illustrate that a measurement can be repeatable (precise) without being correct (accurate), and vice-versa, although the ideal is to be both.
