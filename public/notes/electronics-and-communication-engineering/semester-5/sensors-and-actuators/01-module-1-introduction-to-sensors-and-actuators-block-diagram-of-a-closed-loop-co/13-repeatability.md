---
title: "Repeatability"
subject: "SENSORS AND ACTUATORS"
module: "Module 1: Introduction to Sensors and actuators : Block diagram of a closed loop control System"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fea67"
status: "completed"
scrapedAt: "2026-05-23T17:57:47.241Z"
---
# Module 1: Introduction to Sensors and Actuators

## Topic: Repeatability

**Course Outcomes Addressed:** CO1 (Describe Sensor Fundamentals)

**Knowledge Level:** K2 (Understand)

---

### 1. Introduction to Repeatability

Repeatability is a fundamental characteristic of a sensor that describes its ability to produce the *same output reading* for the *same input stimulus*, applied under the *same conditions*, over a specified period. In simpler terms, if you give a sensor the exact same signal multiple times, a repeatable sensor will consistently give you the same measurement.

This concept is crucial for the reliable operation of any control system, as it directly impacts the accuracy and predictability of the measurements being fed back into the system.

---

### 2. Key Concepts and Definitions

*   **Repeatability:** The closeness of agreement between successive measurements of the same measurand carried out under the same conditions of measurement.
    *   **"Same conditions of measurement"** implies:
        *   The same measurement procedure.
        *   The same observer.
        *   The same measuring instrument.
        *   The same reference standard.
        *   The same environment (e.g., temperature, pressure, humidity).
        *   The same location.
        *   Repetition over a short interval of time.
*   **Precision:** Repeatability is often used interchangeably with precision in everyday language. However, in metrology (the science of measurement), precision is a broader term that encompasses other aspects like reproducibility. For this module, we focus on the definition as it relates to sensor performance.
*   **Measurand:** The quantity subjected to measurement (e.g., temperature, pressure, voltage).
*   **Output Reading:** The value displayed or recorded by the sensor.

---

### 3. Why is Repeatability Important?

In a **closed-loop control system** (as typically depicted in a block diagram), the sensor's role is to provide feedback about the system's current state.

*   **Accurate Control:** If a sensor is not repeatable, the control system will receive fluctuating readings even when the actual physical quantity it's measuring hasn't changed. This can lead to:
    *   **Oscillations:** The controller might overreact to the perceived changes, causing the system to oscillate around the desired setpoint.
    *   **Instability:** In extreme cases, poor repeatability can make a stable system unstable.
    *   **Poor Performance:** The system will struggle to maintain the desired output due to unreliable feedback.
*   **Data Analysis:** For data logging and analysis, repeatability ensures that collected data points are comparable and meaningful.
*   **Calibration:** Repeatability is a key factor in determining how often a sensor needs to be recalibrated.

---

### 4. Factors Affecting Repeatability

Several factors can influence a sensor's repeatability:

*   **Environmental Changes:** Even slight variations in temperature, humidity, or atmospheric pressure can affect sensor readings.
*   **Mechanical Stress/Drift:** Physical stress on the sensor or its mounting can cause subtle changes in its behavior over time.
*   **Electronic Noise:** Random electrical noise within the sensor's circuitry or the measurement system can introduce variability.
*   **Hysteresis:** This is a related but distinct characteristic where the sensor's output depends not only on the current input but also on its previous inputs. However, if not accounted for, hysteresis can manifest as a form of non-repeatability.
*   **Aging:** As sensors age, their internal components can degrade, leading to a decrease in repeatability.
*   **Power Supply Fluctuations:** Inconsistent power to the sensor can cause variations in its output.

---

### 5. Measuring and Expressing Repeatability

Repeatability is typically quantified as a statistical measure derived from multiple measurements under identical conditions.

*   **Standard Deviation:** The most common method is to calculate the standard deviation of the output readings obtained from repeated measurements of the same input. A lower standard deviation indicates better repeatability.
*   **Range:** The difference between the maximum and minimum readings in a set of measurements.
*   **Percentage of Full Scale:** Repeatability is often expressed as a percentage of the sensor's full measurement range. For example, "repeatability of ±0.1% of FS".

**Formula for Standard Deviation (Sample):**

$\sigma = \sqrt{\frac{\sum_{i=1}^{n} (x_i - \bar{x})^2}{n-1}}$

Where:
*   $\sigma$ (sigma) = Sample standard deviation
*   $x_i$ = Each individual measurement
*   $\bar{x}$ = The mean (average) of all measurements
*   $n$ = The number of measurements

---

### 6. Example Scenario

Consider a **temperature sensor** in a thermostat controlling an oven.

*   **Scenario 1 (Good Repeatability):** The thermostat is set to 180°C. The temperature sensor measures 180.1°C, then 180.0°C, then 180.2°C. The readings are very close to each other. This suggests good repeatability. The oven controller can reliably maintain the temperature.
*   **Scenario 2 (Poor Repeatability):** The thermostat is set to 180°C. The temperature sensor measures 180.5°C, then 179.2°C, then 181.0°C. The readings are spread widely. This indicates poor repeatability. The oven controller will struggle to maintain a stable temperature, leading to fluctuations and potentially uneven cooking.

---

### 7. Relation to the Closed-Loop Control System Block Diagram

Let's revisit the typical block diagram of a closed-loop control system:

```
      +--------------+       +------------+       +-----------+
      |              |------>|            |------>|           |
      | Setpoint (R) |       | Comparator |       | Controller|
      |              |------>|            |------>|           |
      +--------------+       +------------+       +-----------+
             ^                                          |
             |                                          |
      +--------------+                                  |
      |  Summing     |<----------------------------------+
      |  Point       |
      +--------------+
             ^
             |
      +--------------+
      |              |
      | Sensor/      |
      | Transducer   |
      |              |
      +--------------+
             ^
             |
      +--------------+
      |              |
      | Plant/       |
      | Process      |
      | (Controlled  |
      | Variable)    |
      +--------------+
```

*   **Sensor/Transducer Block:** This is where repeatability is critical. If the sensor's output (which is the feedback signal) varies for the same input (the actual process variable), the **Summing Point** will receive inconsistent feedback.
*   **Comparator:** Compares the setpoint (desired value) with the feedback signal. If the feedback is erratic due to poor repeatability, the comparator will generate an erroneous error signal.
*   **Controller:** Based on the error signal, the controller decides how to adjust the **Actuator**. Unreliable feedback will lead to incorrect control actions.

**Impact of Poor Repeatability:** Imagine the sensor is supposed to measure a stable temperature of 50°C.
*   **Good Repeatability:** Sensor outputs 50.1°C, 49.9°C, 50.0°C. The error signal is small and consistent.
*   **Poor Repeatability:** Sensor outputs 51.5°C, 48.0°C, 50.5°C. The error signal is large and fluctuating, causing the controller to act erratically.

---

### 8. Important Points to Remember

*   **Repeatability is about consistency of output for a consistent input.**
*   It is measured under identical conditions.
*   Poor repeatability leads to unreliable measurements and can destabilize control systems.
*   It is often expressed using statistical measures like standard deviation.
*   Always refer to the sensor's datasheet for its specified repeatability.

---

### 9. Practice Questions and Exercises

**Question 1:**
Define repeatability in the context of sensors.

**Answer 1:**
Repeatability is the closeness of agreement between successive measurements of the same measurand carried out under the same conditions of measurement, resulting in very similar output readings.

**Question 2:**
List three factors that can affect the repeatability of a sensor.

**Answer 2:**
Any three of the following:
*   Environmental changes (temperature, humidity)
*   Mechanical stress/drift
*   Electronic noise
*   Hysteresis (if not accounted for)
*   Aging of components
*   Power supply fluctuations

**Question 3:**
In a closed-loop control system, how does poor repeatability of the sensor affect the system's performance?

**Answer 3:**
Poor repeatability leads to inconsistent feedback signals. This can cause the controller to generate erroneous control actions, resulting in system oscillations, instability, or inability to maintain the desired setpoint accurately.

**Question 4 (Applied):**
A pressure sensor is tested by applying a constant pressure of 50 psi multiple times. The readings obtained are: 50.2 psi, 50.0 psi, 50.3 psi, 49.9 psi, 50.1 psi. Calculate the standard deviation of these readings. (Assume these are the only measurements taken.)

**Answer 4:**
First, calculate the mean ($\bar{x}$):
$\bar{x} = (50.2 + 50.0 + 50.3 + 49.9 + 50.1) / 5 = 250.5 / 5 = 50.1$ psi

Next, calculate the squared differences from the mean:
*   $(50.2 - 50.1)^2 = (0.1)^2 = 0.01$
*   $(50.0 - 50.1)^2 = (-0.1)^2 = 0.01$
*   $(50.3 - 50.1)^2 = (0.2)^2 = 0.04$
*   $(49.9 - 50.1)^2 = (-0.2)^2 = 0.04$
*   $(50.1 - 50.1)^2 = (0.0)^2 = 0.00$

Sum of squared differences = $0.01 + 0.01 + 0.04 + 0.04 + 0.00 = 0.10$

Calculate the variance:
Variance = Sum of squared differences / (n - 1)
Variance = $0.10 / (5 - 1) = 0.10 / 4 = 0.025$

Calculate the standard deviation ($\sigma$):
$\sigma = \sqrt{\text{Variance}} = \sqrt{0.025} \approx 0.158$ psi

The standard deviation of the readings is approximately 0.158 psi, indicating a degree of repeatability.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### 10. References and Further Reading

*   **Handbook of Modern Sensors by Jacob Fraden:** This book likely discusses sensor performance characteristics, including repeatability, in detail when introducing various sensor types. Look for sections on sensor metrology and performance specifications.
*   **Process Control by K. Krishnaswamy:** Given its focus on process control, this text will undoubtedly cover the importance of sensor accuracy and consistency (repeatability) for effective control loop operation.
*   **Sensors and Transducers by D. Patranabis:** Similar to Fraden, Patranabis's work is a foundational text that will cover the fundamental properties and specifications of sensors, including repeatability.

---
This concludes the study notes on Repeatability for Module 1. Understanding this concept is vital for selecting and utilizing sensors effectively in any control system.