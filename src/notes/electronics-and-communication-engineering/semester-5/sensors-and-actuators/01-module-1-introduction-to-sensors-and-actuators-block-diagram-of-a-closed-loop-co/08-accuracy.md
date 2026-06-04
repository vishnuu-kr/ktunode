---
title: "Accuracy"
subject: "SENSORS AND ACTUATORS"
module: "Module 1: Introduction to Sensors and actuators : Block diagram of a closed loop control System"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fea62"
status: "completed"
scrapedAt: "2026-05-23T17:57:43.822Z"
---
# Sensors and Actuators: Module 1 - Introduction to Sensors and Actuators

## Topic: Accuracy

### Learning Outcomes Covered:

*   **LO 1:** Understand the fundamental characteristics of sensors and actuators, including accuracy.
*   **LO 2:** Relate accuracy to the overall performance of a closed-loop control system.

### Course Outcomes Addressed:

*   **CO1:** Describe Sensor Fundamentals (Knowledge Level: K2) - *Accuracy is a fundamental sensor characteristic.*

---

### 1. Understanding Accuracy

**Definition:**

Accuracy is the degree of closeness of a measurement to the true or accepted value. In the context of sensors, it refers to how closely the sensor's output signal represents the actual physical quantity it is measuring.

**Importance in Closed-Loop Control Systems:**

In a closed-loop control system, the sensor's role is to provide feedback about the process variable. The controller uses this feedback to make adjustments to the actuator, aiming to maintain the process variable at a desired setpoint.

*   **High Accuracy:** A sensor with high accuracy provides the controller with a reliable and true representation of the process variable. This leads to more precise control, minimizing deviations from the setpoint.
*   **Low Accuracy:** A sensor with low accuracy provides incorrect or misleading information to the controller. This can result in:
    *   **Erroneous control actions:** The controller might overreact or underreact to a situation.
    *   **System instability:** The system might oscillate or become uncontrollable.
    *   **Poor performance:** The system will struggle to achieve or maintain the desired setpoint.

**[Textbook Reference (Fraden):]** Jacob Fraden's "Handbook of Modern Sensors" emphasizes that accuracy is a critical parameter for sensor selection. He states that "The accuracy of a sensor is defined as the maximum allowable error between the measured value and the true value." (Fraden, 2010, p. 34).

---

### 2. Quantifying Accuracy

Accuracy is not a binary property (either accurate or not accurate). It is a quantifiable characteristic that can be expressed in various ways.

#### 2.1. Types of Errors Contributing to Inaccuracy

Understanding the sources of error is crucial for addressing inaccuracy. Common errors include:

*   **Systematic Errors:** These errors are consistent and repeatable. They are often due to limitations in the sensor's design, calibration, or the measurement environment.
    *   **Zero Offset (Bias):** The sensor output is consistently offset from the true value even when the input is zero.
        *   *Example:* A pressure sensor consistently reads 0.1 bar higher than the actual pressure.
    *   **Scale Error (Gain Error):** The sensor's output changes by a consistent factor relative to the true value.
        *   *Example:* A temperature sensor reads 5% higher than the actual temperature across its entire range.
    *   **Linearity Error:** The deviation of the sensor's output from a perfect straight line when plotted against the input.
        *   *Example:* A strain gauge's output might not be perfectly linear with applied force.
*   **Random Errors:** These errors are unpredictable and vary from one measurement to another. They are often due to environmental noise or inherent limitations of electronic components.
    *   **Noise:** Unwanted random fluctuations in the sensor's output signal.
        *   *Example:* A microphone picking up background hiss.

#### 2.2. Expressions of Accuracy

Accuracy is typically expressed as a percentage or in units of the measured quantity.

*   **Percentage of Full-Scale Output:** The maximum allowable error is expressed as a percentage of the sensor's maximum possible output.
    *   *Formula:* `Accuracy = (Maximum Error / Full Scale Output) * 100%`
    *   *Example:* A thermometer with a range of 0-100°C and an accuracy of ±0.5% of full scale has a maximum error of ±0.5°C.
*   **Percentage of Reading:** The maximum allowable error is expressed as a percentage of the measured value. This is often more meaningful for sensors whose output varies significantly.
    *   *Formula:* `Accuracy = (Maximum Error / Measured Reading) * 100%`
    *   *Example:* A speed sensor with an accuracy of ±2% of reading. If the speed is 100 km/h, the error is ±2 km/h. If the speed is 50 km/h, the error is ±1 km/h.
*   **Absolute Error:** The error is expressed in the same units as the measured quantity.
    *   *Formula:* `Absolute Error = Measured Value - True Value`
    *   *Example:* A voltage meter reading 4.9V when the true voltage is 5.0V has an absolute error of -0.1V.

**[Textbook Reference (Johnson):]** Curtis D. Johnson, in "Process Control Instrumentation Technology," discusses how accuracy specifications are often given as a percentage of the instrument's span or as a percentage of the reading. He highlights the importance of understanding which specification is being used to avoid misinterpretations. (Johnson, 2019, p. 55).

---

### 3. Accuracy vs. Precision

It is crucial to distinguish between accuracy and precision.

*   **Accuracy:** How close a measurement is to the true value.
*   **Precision:** How close multiple measurements are to each other (repeatability or reproducibility).

**Analogy: Target Shooting**

*   **Accurate and Precise:** Shots are clustered tightly together and in the bullseye.
*   **Precise but Not Accurate:** Shots are clustered tightly together, but far from the bullseye.
*   **Accurate but Not Precise:** Shots are scattered but centered around the bullseye.
*   **Neither Accurate nor Precise:** Shots are scattered randomly all over the target.

**[Textbook Reference (Patranabis):]** D. Patranabis defines precision as "the closeness of agreement between independent measurements obtained under stipulated conditions." He further explains that "accuracy is the degree of conformity of a measured value to a true value, whereas precision is the degree of reproducibility of measurements." (Patranabis, 2021, p. 42).

---

### 4. Factors Affecting Accuracy

Several factors can influence a sensor's accuracy:

*   **Environmental Conditions:**
    *   **Temperature:** Changes in ambient temperature can affect sensor characteristics.
    *   **Humidity:** Can impact the performance of certain sensing elements.
    *   **Vibration and Shock:** Can introduce temporary or permanent errors.
    *   **Electromagnetic Interference (EMI):** Can corrupt sensor signals.
*   **Sensor Design and Manufacturing:**
    *   **Quality of components:** The inherent quality of the sensing element and associated electronics.
    *   **Manufacturing tolerances:** Variations in the production process.
*   **Calibration:**
    *   **Drift:** Over time, sensor characteristics can change, leading to calibration drift.
    *   **Calibration interval:** Regular recalibration is essential to maintain accuracy.
*   **Aging:** Components can degrade over time, affecting their performance.
*   **Loading Effects:** The sensor's presence can sometimes alter the system it is measuring.

**[Textbook Reference (Parr):]** Andrew Parr, in "Hydraulics and Pneumatics," notes that environmental factors like temperature and contamination significantly affect the accuracy of hydraulic and pneumatic sensors, often leading to calibration drift. (Parr, 1999, p. 78).

---

### 5. Implications of Accuracy for System Performance

The accuracy of sensors directly impacts the performance of the entire closed-loop control system.

*   **Setpoint Tracking:** A system with accurate sensors will more closely follow the desired setpoint.
*   **Disturbance Rejection:** Accurate feedback allows the controller to respond more effectively to external disturbances.
*   **Efficiency and Resource Utilization:** Accurate measurements can lead to more efficient operation, reducing waste of energy or materials.
*   **Safety:** In critical applications, inaccurate sensor readings can lead to unsafe operating conditions.

**[Course Outcome Alignment (CO1 - Knowledge Level K2):]** Understanding accuracy as a fundamental sensor characteristic is essential for describing sensors. This knowledge enables students to explain *why* certain sensors are chosen for specific applications based on their accuracy requirements.

---

### 6. Key Points to Remember

*   **Accuracy is the closeness of a measurement to the true value.**
*   **Low sensor accuracy leads to poor control system performance.**
*   **Accuracy can be expressed as a percentage of full-scale output, percentage of reading, or in absolute units.**
*   **Distinguish between accuracy (closeness to true value) and precision (repeatability).**
*   **Errors contributing to inaccuracy include systematic (zero offset, scale, linearity) and random errors (noise).**
*   **Environmental conditions, sensor design, calibration, and aging all affect accuracy.**
*   **Accurate sensors are vital for effective setpoint tracking, disturbance rejection, and overall system efficiency and safety.**

---

### 7. Practice Questions

1.  **Define accuracy in the context of sensors.**
    *   **Answer:** Accuracy is the degree of closeness of a sensor's measurement to the true or accepted value of the quantity being measured.
2.  **Explain how the accuracy of a sensor impacts the performance of a closed-loop control system.**
    *   **Answer:** A highly accurate sensor provides reliable feedback to the controller, enabling precise control actions and minimizing deviations from the setpoint. Conversely, an inaccurate sensor can lead to erroneous control decisions, system instability, and poor overall performance.
3.  **A temperature sensor has a range of -20°C to 120°C and is specified with an accuracy of ±0.2% of full scale. Calculate the maximum error in °C.**
    *   **Answer:**
        *   Full Scale Range = 120°C - (-20°C) = 140°C
        *   Maximum Error = 0.2% of 140°C = (0.2 / 100) * 140°C = 0.28°C
        *   The maximum error is ±0.28°C.
4.  **Differentiate between accuracy and precision.**
    *   **Answer:** Accuracy refers to how close a measurement is to the true value, while precision refers to how close multiple measurements are to each other (repeatability).
5.  **List three factors that can affect the accuracy of a sensor.**
    *   **Answer:** Any three from: Temperature, humidity, vibration, EMI, sensor design, manufacturing tolerances, calibration drift, aging.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### 8. Further Reading and References

*   **Handbook of Modern Sensors by Jacob Fraden (Springer, Fourth Edition, 2010):** Chapter 2, "Sensor Parameters," provides a detailed discussion on accuracy and its various specifications.
*   **Process Control Instrumentation Technology by Curtis D. Johnson (Pearson/Prentice Hall, 8/e, 2019):** Chapter 3, "Instrumentation Characteristics," explains performance parameters including accuracy, precision, and linearity with practical examples.
*   **Sensors and Transducers by D. Patranabis (PHI Learning, 4/e, 2021):** Chapter 1, "Introduction to Transducers," covers fundamental transducer characteristics, including accuracy and its comparison with precision.