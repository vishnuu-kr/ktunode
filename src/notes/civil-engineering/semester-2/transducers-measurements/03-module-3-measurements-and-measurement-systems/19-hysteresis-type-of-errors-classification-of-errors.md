---
title: "Hysteresis-type of errors- classification of errors"
subject: "TRANSDUCERS & MEASUREMENTS"
module: "Module 3: Measurements  and Measurement  Systems"
branch: "Civil Engineering"
semester: 2
topicId: "68b54567d74ec52cc09130b7"
status: "completed"
scrapedAt: "2026-05-20T18:38:48.875Z"
---
# TRANSDUCERS & MEASUREMENTS

## Module 3: Measurements and Measurement Systems

### Topic: Hysteresis-type of Errors and Classification of Errors

Welcome, everyone! Today, we're diving deep into a crucial aspect of accurate measurements: **errors**. In our pursuit of precise readings, understanding *why* our instruments might deviate from the true value is paramount. We'll start by exploring a specific type of error that often pops up in systems with memory or feedback – **hysteresis-type errors**. Then, we'll broaden our perspective to understand how all errors are broadly classified. This is vital for our Course Outcome 3, where we aim to identify various types of errors and choose methods for minimizing them.

### Understanding the Concept of Error

Before we get into specific error types, let's quickly recap what an "error" is in measurement. Simply put, it's the difference between the measured value and the true value of the quantity being measured.

$$ \text{Error} = \text{Measured Value} - \text{True Value} $$

We often talk about "error" as a negative thing, something to be eliminated. However, in the study of measurement systems, understanding the *nature* and *sources* of errors is the first step towards controlling or compensating for them. This is key to improving the **accuracy** and **precision** of our measurements, which directly ties into our CO1 and CO2 objectives as we learn about the behavior of transducers and measurement systems.

### Hysteresis-Type Errors: When the Past Matters

Now, let's talk about **hysteresis**. Have you ever noticed how a thermostat in your home sometimes feels like it's "lagging"? You set it to 22°C, and the heating clicks off a bit later, then the room might cool down slightly before it kicks back on. Or think about a magnetic material: if you increase the magnetic field strength, you get a certain magnetization. But if you then decrease the field strength from a higher value, the magnetization doesn't necessarily follow the exact same path. This "lagging" or "memory" effect is hysteresis.

In measurement systems, **hysteresis error** occurs when the output of a transducer or instrument depends not only on the current input but also on the **previous history** of the input. This means that for the same input value, you might get a different output reading depending on whether the input is increasing or decreasing.

**Analogy:** Imagine you're trying to measure the weight of a bag of flour. If you add flour gradually until it reaches 1 kg, the scale shows 1 kg. Now, if you have a 1.5 kg bag and remove flour until it reaches 1 kg, the scale might show a slightly different reading than before – perhaps 0.99 kg or 1.01 kg. This difference, caused by the previous state of the scale (having a heavier load on it), is an example of hysteresis.

**Why does it happen?** Hysteresis is often associated with:

*   **Mechanical Friction:** In systems with moving parts, like linkages, gears, or even the needle in an analog meter, friction can resist motion. This resistance means a certain amount of force (or input) is needed to overcome the static friction before movement begins. Once moving, the friction might be lower, but the initial "stick" to get it moving leaves a trace. David A. Bell, in his book "Electronic Instrumentation and Measurements," often highlights friction in mechanical components as a significant contributor to hysteresis.
*   **Magnetic Materials:** As mentioned, ferromagnetic materials exhibit hysteresis in their magnetization curves. If a sensor relies on the magnetic properties of a material, this can introduce hysteresis.
*   **Non-linearities in Electronic Components:** Certain electronic components, like diodes or transistors operating in specific regimes, can also exhibit hysteresis-like behavior.
*   **Backlash in Gears:** If gears are slightly worn, there can be a small amount of play or "backlash" between the teeth. This means you might need to turn the input shaft a little before the output shaft starts moving, leading to a different reading for the same input depending on the direction of rotation.

**Visualizing Hysteresis Error:** If you plot the output reading versus the input value for a system with hysteresis, you'll typically see two curves – one for increasing input and one for decreasing input. These curves do not coincide, and the vertical distance between them at any given input value represents the hysteresis error.

**(Imagine a graph here: X-axis is Input, Y-axis is Output. Two slightly separated curves, forming a loop or a gap, especially around the center.)**

**Impact:** Hysteresis error leads to **non-repeatability** in measurements. If you measure the same quantity multiple times, but approach that value from different directions (increasing or decreasing input), you'll get slightly different readings. This directly impacts the accuracy of the measurement system. For instance, if a pressure sensor shows 10 bar at 10 bar input when the pressure is rising, but 9.8 bar at 10 bar input when the pressure is falling, that's a hysteresis error of 0.2 bar. This is a common challenge discussed in Kalsi's "Electronic Instrumentation and Measurements."

**CO Alignment:** This directly relates to CO3. By understanding hysteresis, we can identify it as a source of error and then work on minimizing it. For example, selecting instruments with minimal mechanical parts or using advanced signal processing techniques can help.

### Classification of Errors in Measurement Systems

Errors, in general, can manifest in many ways. To systematically address them, we classify them into broad categories. This classification helps us understand their origin and develop strategies for correction or minimization. Think of it like diagnosing a problem: you first categorize the symptoms before prescribing a solution. This is fundamental to CO3.

Errors can be broadly classified as:

1.  **Gross Errors (Blunders):**
    *   **What they are:** These are significant deviations from the true value, usually caused by human mistakes. Think of misreading a scale, incorrect recording of data, using the wrong instrument, or making a wiring mistake. These are often the largest errors and, thankfully, the easiest to spot if you're careful.
    *   **Example:** Imagine measuring a voltage and accidentally writing down "5V" when the actual reading was "50V". Or perhaps you set a digital multimeter to the wrong range.
    *   **Minimization:** Careful observation, repeating measurements, using multiple observers, and double-checking calculations are key to avoiding gross errors.
    *   **Exam Focus:** Gross errors are usually easy to understand conceptually, but in exams, you might be asked to identify scenarios that lead to gross errors.

2.  **Systematic Errors:**
    *   **What they are:** These errors are consistent and predictable. They occur in the same way each time the measurement is made under the same conditions. They tend to shift the measured value in a particular direction (either always higher or always lower than the true value). Systematic errors are often the most insidious because they don't make a measurement look "wrong"; they just make it consistently wrong.
    *   **Sub-types of Systematic Errors:**
        *   **Instrumental Errors:** These arise from the inherent limitations of the measuring instrument itself. For instance, a voltmeter might have a finite internal resistance, causing it to draw some current from the circuit, thus affecting the voltage it's trying to measure. Calibration errors also fall here – if an instrument isn't properly calibrated, it will consistently read incorrectly. Sawhney's "A Course in Electronic Measurements and Instrumentation" details many such instrumental limitations.
            *   *Example:* A spring balance that consistently reads 5 grams higher due to a slight stretching of its spring over time, even when unloaded. This is a zero error.
        *   **Environmental Errors:** These errors are caused by external conditions affecting the measurement. Factors like temperature, humidity, pressure, magnetic fields, or vibrations can influence instrument readings.
            *   *Example:* An electronic circuit whose resistance changes significantly with ambient temperature fluctuations. If your measurement is taken in a warmer room than when the instrument was calibrated, you might get a systematic error.
        *   **Personal Errors:** These are similar to gross errors but are more subtle and arise from personal habits or biases of the observer. For instance, consistently parallax error (not looking perpendicular to the scale) when reading an analog meter.
            *   *Example:* An operator who always rounds down a reading slightly, even when the needle is a hair above the next mark.
        *   **Adaptation Errors (or Cumulative Errors):** This is when an instrument takes time to adapt to a new measurement condition, and the reading is taken before the instrument has fully settled. This is closely related to dynamic response characteristics.
            *   *Example:* A thermometer that takes time to reach the true temperature of the substance. Taking the reading too early would be an adaptation error.
    *   **Minimization:** Systematic errors can often be minimized or corrected for.
        *   **Calibration:** Regularly calibrating instruments against known standards.
        *   **Compensation:** Designing circuits or using correction factors to counteract known systematic errors (e.g., temperature compensation in electronic circuits).
        *   **Control of Environment:** Conducting measurements in a stable, controlled environment.
        *   **Careful Procedure:** Following precise measurement protocols.
    *   **Exam Focus:** This is a very important category. You'll often be asked to identify the *type* of systematic error (instrumental, environmental, etc.) given a scenario, or how to minimize them.

3.  **Random Errors (Indeterminate Errors):**
    *   **What they are:** These errors are unpredictable and vary randomly from one measurement to another, even when the conditions are the same. They don't have a consistent pattern of being too high or too low. Instead, they fluctuate around the true value. Hysteresis, while often discussed separately, can sometimes contribute to what appears as random error if not carefully analyzed.
    *   **Causes:** Random errors are often due to factors that are difficult to control or identify, such as:
        *   Noise in electronic circuits.
        *   Vibrations that are not consistent.
        *   Fluctuations in power supply voltage.
        *   Subjective judgment in interpolation of readings on analog scales.
        *   Unpredictable variations in environmental factors that are too rapid to be classified as systematic.
    *   **Example:** Imagine measuring the same resistor with a digital multimeter multiple times in quick succession. You might get readings like 9.98Ω, 10.01Ω, 9.99Ω, 10.02Ω. The slight variations are random errors.
    *   **Minimization:** Random errors cannot be eliminated but can be reduced by averaging multiple readings. The more readings you take, the closer the average value is likely to be to the true value (based on the Law of Large Numbers). Statistical methods are used to analyze random errors.
        *   *Example:* Taking 100 readings of the resistor and calculating the average. This average will be a much better estimate of the true resistance than any single reading.
    *   **CO Alignment:** CO3 is directly addressed here by understanding random errors and methods of minimization (averaging).

### Relating Errors to Learning Outcomes and Course Objectives

Let's see how these error concepts connect with our broader course objectives:

*   **CO1 (Summarize concepts of sensors, transducers, classify transducers):** Understanding error types is crucial for characterizing the performance of any transducer or sensor. We need to know if a sensor is prone to hysteresis, or if it has a systematic offset, to classify its overall accuracy and suitability for a particular application.
*   **CO2 (Apply principles and functions of transducers in measuring systems):** When you apply a transducer, you must consider its potential errors. For instance, if you're using a strain gauge, you'd need to be aware of temperature-related systematic errors and potential hysteresis in the bonding material.
*   **CO3 (Illustrate working principles of electronic measuring instruments and identify various types of errors... choose methods for minimization):** This entire topic is the heart of CO3! We've learned about hysteresis as a specific error type and then categorized errors into gross, systematic (instrumental, environmental, personal, adaptation), and random. We've also touched upon minimization techniques like calibration, averaging, and environmental control.
*   **CO5 (Understand and utilize various measurement systems, enhancing capability to apply theoretical knowledge in practical scenarios):** In practical scenarios, no measurement is perfect. Knowing about these errors allows you to select the right instrument, set it up correctly, perform the measurement process carefully, and interpret the results with a proper understanding of their potential inaccuracies. This makes your application of theoretical knowledge much more robust.

### Important Points to Remember

*   **Hysteresis:** It's a memory effect where the output depends on the input's history. It leads to different readings for the same input depending on whether the input is increasing or decreasing.
*   **Classification is Key:** Always think about errors in terms of Gross, Systematic, and Random. Each has different causes and requires different mitigation strategies.
*   **Systematic Errors are Persistent:** They are consistent and can often be corrected through calibration or compensation.
*   **Random Errors are Fluctuating:** They can be reduced by averaging multiple readings.
*   **Minimization is the Goal:** The ultimate aim is to reduce the impact of these errors to achieve the required level of accuracy.

**Textbook References:** As you delve deeper, refer to Sawhney for a detailed look at instrumental errors, Bell for general principles of electronic instrumentation and error analysis, and Fowler for design considerations that might introduce or mitigate these errors. Kalsi and Patranabis offer excellent practical insights and specific examples relevant to transducers. Golding & Widdis provide a foundational understanding of electrical measurements where these error concepts are first introduced.

Let's consolidate our understanding with some questions.

---

### Sample Questions and Answers

**Q1. Explain the phenomenon of hysteresis in measurement systems and provide a real-world example.**

**Answer:** Hysteresis is a phenomenon where the output of a system depends not only on the current input value but also on its past history. This means that for the same input value, the output can be different depending on whether the input is increasing or decreasing.

**Real-world example:** Consider a simple mechanical relay used as a switch. When the input current increases, the magnetic field in the coil pulls the armature to close the contacts. However, when the input current decreases, the magnetic field strength must drop below a certain threshold (lower than the pull-in threshold) before the spring can pull the armature back to open the contacts. This difference in current levels required to close and open the contacts is a manifestation of hysteresis. If this relay were part of a measurement system, it would introduce a hysteresis error.

**Q2. Classify the following errors into Gross, Systematic, or Random error, and briefly explain why:**

*   **(a) A student misreads the tens digit on an analog ammeter.**
*   **(b) A resistance thermometer's reading consistently shifts by +0.5°C due to its inherent calibration drift.**
*   **(c) Multiple readings of a voltage fluctuate around the true value by ±0.02V due to electronic noise.**

**Answer:**

*   **(a) Gross Error:** This is a human mistake in reading the instrument. The student is directly misinterpreting the displayed value, leading to a significant and likely incorrect reading.
*   **(b) Systematic Error (Instrumental Error - Calibration Drift):** The error is consistent and predictable. The thermometer's reading is *consistently* higher by 0.5°C due to a drift in its calibration. This is not a random fluctuation but a predictable offset.
*   **(c) Random Error:** The fluctuations (±0.02V) are unpredictable and vary with each measurement due to electronic noise. While they are small and tend to average out, they cannot be predicted for any single measurement.

**Q3. How can systematic errors be minimized or corrected in a measurement system? Provide at least two methods.**

**Answer:** Systematic errors can be minimized or corrected through several methods:

1.  **Calibration:** Regularly calibrating the measuring instrument against a known, accurate standard. If the instrument is found to have a consistent offset or scale error, this can be corrected through adjustment or by applying a correction factor to the measured readings. For example, if a voltmeter consistently reads 1% high, a correction factor of 0.99 can be applied to all readings.
2.  **Compensation:** For errors caused by environmental factors (like temperature), compensation techniques can be employed. This might involve using materials with opposing thermal expansion coefficients, or using electronic circuits designed to counteract the effect of temperature changes. For example, using a Wheatstone bridge with temperature-sensitive resistors arranged to cancel out each other's temperature variations.

**Q4. What is the primary method used to reduce the effect of random errors, and why is it effective?**

**Answer:** The primary method to reduce the effect of random errors is **averaging multiple readings**.

**Reason for Effectiveness:** Random errors, by their nature, fluctuate unpredictably around the true value. This means that some measurements will be slightly higher than the true value, and some will be slightly lower. By taking a large number of measurements and calculating their average, the positive and negative deviations tend to cancel each other out. As the number of readings increases, the average value converges towards the true value, as dictated by statistical principles like the Law of Large Numbers. While individual readings might be inaccurate, the average provides a more reliable estimate of the true value.
