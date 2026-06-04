---
title: "Static and Dynamic characteristics of measuring instruments."
subject: "INSTRUMENTATION"
module: "Module 1: Introduction to measuring instruments"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe5b9"
status: "completed"
scrapedAt: "2026-05-23T17:49:19.515Z"
---
# Module 1: Introduction to Measuring Instruments

## Topic: Static and Dynamic Characteristics of Measuring Instruments

This module introduces the fundamental concepts of measuring instruments, their classification, and the criteria for their selection. A crucial aspect of understanding measuring instruments is to analyze their performance based on their **static** and **dynamic** characteristics. These characteristics help us determine how accurately and reliably an instrument can measure a physical quantity under various conditions.

---

### 1.1 Introduction to Measuring Instruments

*   **What is a Measuring Instrument?**
    *   A device used to measure the magnitude of a physical quantity.
    *   It provides a quantitative output that represents the value of the quantity being measured.
    *   Examples: Thermometer, voltmeter, pressure gauge, scale.

*   **Purpose of Measurement:**
    *   Monitoring physical processes.
    *   Controlling systems.
    *   Ensuring quality and safety.
    *   Scientific research and development.

*   **Classification of Measuring Instruments:**
    *   **Based on Input Quantity:** Electrical, Mechanical, Thermal, Optical, etc.
    *   **Based on Output:** Analog, Digital.
    *   **Based on Principle of Operation:** Indicating, Recording, Integrating.
    *   **Based on Energy Consumption:** Active, Passive.

---

### 1.2 Static Characteristics of Measuring Instruments

Static characteristics describe the performance of a measuring instrument when the input quantity being measured is **constant or changes very slowly**. These characteristics are important for instruments used in steady-state conditions.

**Key Concepts and Definitions:**

*   **Accuracy:**
    *   The closeness of the measured value to the true value of the quantity.
    *   Expressed as a percentage of the true value, full-scale reading, or a combination.
    *   *Formula:* Accuracy = (Measured Value / True Value) × 100% (This is a conceptual representation; actual accuracy is usually specified as a tolerance).
    *   **Example:** A voltmeter with an accuracy of ±1% of full scale means that for a full-scale reading of 100V, the measurement can be off by ±1V.

*   **Precision:**
    *   The degree of agreement among several measurements of the same quantity, when the same procedure is followed.
    *   It refers to the reproducibility or repeatability of measurements.
    *   A precise instrument may not be accurate if its readings are consistently offset from the true value.
    *   **Example:** If a scale consistently reads 5.0 kg for a true weight of 5.1 kg, it is precise but not accurate. If another scale gives readings of 5.0 kg, 5.05 kg, and 5.1 kg for the same weight, it is less precise.

*   **Resolution:**
    *   The smallest change in the input quantity that can be detected by the instrument.
    *   For digital instruments, it's the smallest difference between two successive readings.
    *   For analog instruments, it's the smallest division on the scale.
    *   **Example:** A digital thermometer that displays temperature to two decimal places (e.g., 25.34°C) has a resolution of 0.01°C.

*   **Sensitivity:**
    *   The ratio of the change in the output reading to the change in the input quantity.
    *   It indicates how much the output changes for a given change in the input.
    *   *Formula:* Sensitivity (S) = ΔOutput / ΔInput
    *   **Example:** If a pressure gauge shows a deflection of 10 mm for a pressure change of 1 kPa, its sensitivity is 10 mm/kPa. A higher sensitivity means the instrument is more responsive to small changes.

*   **Linearity:**
    *   The degree to which the output reading of an instrument is directly proportional to the input quantity.
    *   An instrument is perfectly linear if its calibration curve is a straight line.
    *   Deviations from linearity are often expressed as **non-linearity**.
    *   **Example:** A strain gauge where the output voltage is directly proportional to the applied strain is considered linear.

*   **Range:**
    *   The minimum and maximum values of a quantity that an instrument can measure.
    *   **Example:** A thermometer with a range of -10°C to 110°C.

*   **Span:**
    *   The difference between the maximum and minimum values of the range.
    *   *Formula:* Span = Maximum Value - Minimum Value
    *   **Example:** For a thermometer with a range of -10°C to 110°C, the span is 110°C - (-10°C) = 120°C.

*   **Zero Drift (or Zero Offset):**
    *   A change in the output reading when the input quantity is zero.
    *   This can be due to temperature changes or aging of components.
    *   **Example:** A scale showing a reading of 0.1 kg even when nothing is placed on it.

*   **Threshold:**
    *   The minimum input quantity that must be applied to produce a detectable output.
    *   Below the threshold, the instrument does not respond.
    *   **Example:** A very sensitive electronic balance might require a minimum weight before its display registers any change.

*   **Dead Zone (or Dead Space):**
    *   The range of input values for which the instrument shows no output or a constant output.
    *   It is the range of input over which the instrument fails to respond.
    *   **Example:** A bimetallic strip thermometer might not start bending until the temperature changes by a small amount.

*   **Hysteresis:**
    *   The difference in output readings for the same input value when the input is increasing compared to when it is decreasing.
    *   This is due to internal friction or magnetic effects in the instrument.
    *   **Example:** A spring that doesn't return to its original position immediately after being stretched, showing different readings for the same load depending on whether the load is increasing or decreasing.

*   **Backlash:**
    *   A form of hysteresis occurring in mechanical systems with gears or linkages, where there is play or looseness between mating parts.
    *   **Example:** In a mechanical voltmeter with a pointer, if you move the pointer up and down slightly, there might be a small range where the pointer moves without the actual measuring mechanism changing.

**Referencing Textbooks:**

*   **Doebelin's Measurement Systems (6/e):** Chapter 2, "Static Calibration and Characteristics of Measuring Instruments," provides detailed explanations of accuracy, precision, sensitivity, linearity, hysteresis, and other static parameters.
*   **Kalsi H S's Electronic Instrumentation (4/e):** Chapters 1 and 2 often cover the basic definitions and static characteristics of various electronic measuring instruments.
*   **Sawhney AK's Electrical and Electronics Measurements and Instrumentation (2023):** Similar to Doebelin, Sawhney extensively covers static characteristics in its initial chapters, defining terms like accuracy, precision, errors, and calibration.

---

### 1.3 Dynamic Characteristics of Measuring Instruments

Dynamic characteristics describe the performance of an instrument when the input quantity being measured is **changing with time**. These characteristics are crucial for instruments used in transient conditions or for monitoring rapidly changing processes.

**Key Concepts and Definitions:**

Dynamic characteristics are often analyzed using **mathematical models** that represent the instrument's response to time-varying inputs. Common models are based on differential equations.

*   **Zero-Order Instrument:**
    *   An instrument whose output is directly proportional to the input, with no time delay.
    *   Its response is instantaneous.
    *   *Mathematical Model:* $y(t) = Kx(t)$
    *   Where: $y(t)$ is the output, $x(t)$ is the input, and $K$ is the static sensitivity.
    *   **Example:** A simple force transducer where the output voltage is directly and instantly proportional to the applied force.

*   **First-Order Instrument:**
    *   An instrument whose response to a step input is an exponential rise to its final steady-state value.
    *   It is characterized by a **time constant ($\tau$)**.
    *   *Mathematical Model:* $\tau \frac{dy(t)}{dt} + y(t) = Kx(t)$
    *   **Time Constant ($\tau$):** The time it takes for the instrument output to reach 63.2% of its final steady-state value after a step input is applied.
    *   **Example:** A thermocouple measuring temperature. When subjected to a sudden temperature change, it takes some time to reach the new temperature, and its response follows an exponential curve.

*   **Second-Order Instrument:**
    *   An instrument whose response to a step input can exhibit overshoot, oscillations, and damping.
    *   It is characterized by **natural frequency ($\omega_n$)**, **damping ratio ($\zeta$)**, and **damping coefficient (c)**.
    *   *Mathematical Model:* $\frac{d^2y(t)}{dt^2} + 2\zeta\omega_n \frac{dy(t)}{dt} + \omega_n^2 y(t) = K\omega_n^2 x(t)$
    *   **Natural Frequency ($\omega_n$):** The frequency at which the system would oscillate if there were no damping.
    *   **Damping Ratio ($\zeta$):** A dimensionless parameter that describes how oscillations in a system decay after a disturbance.
        *   $\zeta < 1$: Underdamped (oscillatory response)
        *   $\zeta = 1$: Critically damped (fastest non-oscillatory response)
        *   $\zeta > 1$: Overdamped (slow, non-oscillatory response)
    *   **Rise Time ($t_r$):** The time taken for the output to rise from 10% to 90% of its final value.
    *   **Peak Time ($t_p$):** The time taken for the output to reach its first peak.
    *   **Overshoot (%OS):** The maximum deviation of the output from its final steady-state value, expressed as a percentage of the final value.
    *   **Settling Time ($t_s$):** The time taken for the output to settle within a certain tolerance band (usually ±2% or ±5%) of its final value.
    *   **Example:** A high-quality accelerometer or a spring-mass-damper system used for vibration measurement.

**Other Dynamic Characteristics:**

*   **Dynamic Error:** The difference between the true dynamic value of the quantity and the value indicated by the instrument.
*   **Speed of Response:** How quickly an instrument can respond to a change in the measured quantity. This is directly related to the time constant for first-order systems and settling time for second-order systems.
*   **Frequency Response:** Describes how an instrument's output relates to the input for various frequencies of the input signal. It's often represented by a **Bode plot**.
    *   A good frequency response means the instrument can accurately measure signals over a wide range of frequencies without significant distortion or attenuation.
    *   The **bandwidth** of an instrument is the range of frequencies over which it can operate effectively (often defined as the frequency at which the output magnitude drops by 3 dB or to 70.7% of its low-frequency value).

**Referencing Textbooks:**

*   **Doebelin's Measurement Systems (6/e):** Chapter 3, "Dynamic Characteristics of Measuring Instruments," is dedicated to this topic, covering system models (zero, first, second order), time response, and frequency response.
*   **Kalsi H S's Electronic Instrumentation (4/e):** Sections related to specific instrument types (e.g., oscilloscopes, recorders) will discuss their dynamic performance, bandwidth, and response times.
*   **Sawhney AK's Electrical and Electronics Measurements and Instrumentation (2023):** Similar to Doebelin, Sawhney covers dynamic analysis of measurement systems, particularly when discussing instruments used for transient phenomena or AC measurements.

---

### 1.4 Static vs. Dynamic Characteristics

| Feature            | Static Characteristics                                | Dynamic Characteristics                                        |
| :----------------- | :---------------------------------------------------- | :----------------------------------------------------------- |
| **Input Change**   | Input quantity is constant or changes very slowly.    | Input quantity is changing rapidly with time.                |
| **Focus**          | Accuracy, precision, linearity, range, span, etc.     | Speed of response, time constant, damping ratio, frequency response. |
| **Application**    | Steady-state measurements.                            | Transient measurements, monitoring dynamic processes.        |
| **Mathematical Models** | Primarily algebraic equations (e.g., sensitivity). | Differential equations (zero, first, second-order systems). |
| **Error Analysis** | Errors due to calibration, drift, loading effects.   | Errors due to lag, acceleration, frequency distortion.       |

---

### 1.5 Importance and Application

Understanding these characteristics is crucial for:

1.  **Instrument Selection:** Choosing the right instrument for a specific application depends on whether the measurement is static or dynamic, and the required performance level.
2.  **Performance Evaluation:** Quantifying how well an instrument performs under various conditions.
3.  **Error Estimation:** Predicting and minimizing errors in measurement.
4.  **System Design:** Designing measurement systems that can accurately capture the behavior of dynamic processes.

**CO1 Alignment:** This entire section directly addresses CO1, "Interpret the basic concepts of measuring instruments, its classification, and selection criteria." Understanding static and dynamic characteristics is fundamental to classifying and selecting appropriate instruments.

---

### 1.6 Practice Questions

**Multiple Choice Questions (MCQ):**

1.  Which of the following is a static characteristic of a measuring instrument?
    a) Time constant
    b) Bandwidth
    c) Hysteresis
    d) Settling time

2.  A measuring instrument that responds instantaneously to any change in the measured quantity is called a:
    a) First-order instrument
    b) Second-order instrument
    c) Zero-order instrument
    d) Dynamic instrument

3.  The time it takes for a first-order instrument to reach 63.2% of its final steady-state value after a step input is known as its:
    a) Rise time
    b) Settling time
    c) Peak time
    d) Time constant

4.  An instrument that exhibits overshoot and oscillations when subjected to a step input is likely a:
    a) Zero-order instrument
    b) First-order instrument
    c) Critically damped second-order instrument
    d) Underdamped second-order instrument

5.  Which characteristic describes the degree of agreement among several measurements of the same quantity?
    a) Accuracy
    b) Precision
    c) Resolution
    d) Sensitivity

**Short Answer Questions:**

6.  Define "accuracy" and "precision" in the context of measurement instruments. Provide an example that differentiates between them.
7.  Explain the concept of "time constant" for a first-order instrument. How is it related to the speed of response?
8.  What are the key parameters that characterize a second-order instrument? Briefly describe each.
9.  Differentiate between static and dynamic characteristics of measuring instruments.
10. What is hysteresis, and in what types of instruments is it commonly observed?

---

### 1.7 Answers to Practice Questions

**MCQ Answers:**

1.  **c) Hysteresis**
2.  **c) Zero-order instrument**
3.  **d) Time constant**
4.  **d) Underdamped second-order instrument**
5.  **b) Precision**

**Short Answer Answers:**

6.  **Accuracy:** The closeness of a measured value to the true value. **Precision:** The degree of agreement among several measurements of the same quantity.
    *   *Example:* A weighing scale that consistently reads 5.1 kg for an object that actually weighs 5.0 kg is precise but inaccurate. A scale that reads 5.05 kg, 4.95 kg, and 5.02 kg for the same object is less precise but potentially more accurate than the first one if its average reading is closer to 5.0 kg.

7.  The **time constant ($\tau$)** is the time taken for a first-order instrument's output to reach 63.2% of its final steady-state value after a step input. A smaller time constant indicates a faster response, meaning the instrument reaches its final value more quickly.

8.  The key parameters for a second-order instrument are:
    *   **Natural Frequency ($\omega_n$):** The frequency of oscillation without damping.
    *   **Damping Ratio ($\zeta$):** Determines the nature of the response (underdamped, critically damped, overdamped).
    *   **Static Sensitivity (K):** The ratio of the change in output to the change in input in the steady state.

9.  **Static characteristics** describe instrument performance when the input is constant or changes slowly, focusing on accuracy, linearity, etc. **Dynamic characteristics** describe performance when the input changes rapidly, focusing on speed of response, time constant, frequency response, etc.

10. **Hysteresis** is the phenomenon where the output reading for a given input value depends on whether the input is increasing or decreasing. It is commonly observed in instruments with mechanical components, magnetic materials, or systems with internal friction.

---

### 1.8 Important Points to Remember

*   **Static characteristics are for steady-state conditions; dynamic characteristics are for time-varying inputs.**
*   **Accuracy** is about closeness to the true value, while **precision** is about repeatability.
*   **Sensitivity** indicates how much the output changes for a unit change in input.
*   A **zero-order instrument** has an instantaneous response.
*   A **first-order instrument** is characterized by a **time constant ($\tau$)**.
*   A **second-order instrument** is characterized by **natural frequency ($\omega_n$)** and **damping ratio ($\zeta$)**, and its response can be oscillatory.
*   The choice of instrument and the interpretation of its readings depend heavily on understanding these characteristics.

---

This concludes Module 1's topic on Static and Dynamic Characteristics of Measuring Instruments. These foundational concepts will be vital as we explore specific transducers and electronic measuring instruments in subsequent modules.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
