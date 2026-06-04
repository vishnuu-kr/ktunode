---
title: "Full-Scale Output"
subject: "SENSORS AND ACTUATORS"
module: "Module 1: Introduction to Sensors and actuators : Block diagram of a closed loop control System"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fea61"
status: "completed"
scrapedAt: "2026-05-23T17:57:43.180Z"
---
# Sensors and Actuators: Module 1 - Introduction to Sensors and Actuators

## Topic: Full-Scale Output

This topic delves into a critical characteristic of sensors: their **Full-Scale Output (FSO)**. Understanding FSO is crucial for interpreting sensor readings accurately and for designing effective closed-loop control systems.

### Learning Outcomes Addressed:

*   **CO1: Describe Sensor Fundamentals:** FSO is a fundamental parameter used to characterize a sensor's performance and output range.
*   **CO2: Explain the basic principles and concepts of commonly used different types of sensors, including their purpose, how they work, and the various types of sensors available:** Understanding FSO is key to understanding how sensors operate and their limitations.

---

### 1. Introduction to Full-Scale Output (FSO)

The **Full-Scale Output (FSO)** of a sensor represents the **maximum or minimum output signal** that the sensor can produce within its specified operating range. It's essentially the range of electrical or physical signals a sensor is designed to generate when exposed to the full spectrum of the physical quantity it is measuring.

*   **Key Concept:** FSO defines the **span** of the sensor's output.

**Definition of Full-Scale Output:**

FSO is typically expressed in units corresponding to the sensor's output signal, such as volts (V), milliamperes (mA), or digital counts. It represents the difference between the maximum and minimum output values.

$$ \text{FSO} = \text{Maximum Output} - \text{Minimum Output} $$

**Why is FSO Important?**

*   **Signal Interpretation:** Knowing the FSO allows engineers to correctly translate the sensor's raw output signal into a meaningful measurement of the physical quantity.
*   **System Design:** It's crucial for selecting the appropriate data acquisition systems (e.g., Analog-to-Digital Converters - ADCs) and for determining the resolution and precision required.
*   **Calibration:** FSO plays a role in the calibration process, ensuring the sensor's output aligns with the expected range.
*   **System Performance:** The FSO directly impacts the dynamic range of the system. A larger FSO generally implies a wider measurable range for the physical quantity.

---

### 2. Understanding FSO in the Context of a Closed-Loop Control System

In a closed-loop control system, sensors are the eyes and ears, providing feedback about the system's state. The FSO of the sensor directly influences how this feedback is processed and used.

**Block Diagram of a Closed-Loop Control System (Simplified):**

```
+-----------------+      +-----------------+      +-----------------+
|  Input Signal   |----->|  Controller     |----->|   Actuator      |
+-----------------+      +-----------------+      +-----------------+
        ^                                                |
        |                                                |
        |                                                |
+-----------------+      +-----------------+      +-----------------+
|  Feedback Signal|      |     Sensor      |<-----|   Process/      |
+-----------------+      +-----------------+      |   Environment   |
        ^                                                |
        |                                                |
        +------------------------------------------------+
```

*   **Sensor Role:** The sensor measures a process variable (e.g., temperature, pressure, position) and converts it into an electrical signal.
*   **FSO and Feedback:** The range of this electrical signal is determined by the sensor's FSO. For instance, a temperature sensor might have an FSO of 0-5V, where 0V corresponds to the minimum temperature and 5V to the maximum temperature in its range.
*   **Controller Interpretation:** The controller receives this analog signal (after potential amplification or conditioning) and compares it to the desired setpoint. The FSO dictates the range of values the controller expects from the sensor.

**Example:**

Consider a temperature control system for an oven.

*   **Sensor:** A thermocouple designed to measure temperatures between 0°C and 300°C.
*   **FSO:** The thermocouple's associated electronics might output a voltage signal ranging from 0V (at 0°C) to 5V (at 300°C). Therefore, the FSO for the voltage output is 5V - 0V = 5V.
*   **Controller:** The controller receives this 0-5V signal. If it receives 2.5V, it knows (based on the FSO and calibration) that the current oven temperature is approximately 150°C. If the FSO were different (e.g., 0-10V), the interpretation of 2.5V would change.

---

### 3. Types of FSO and How They Are Specified

The way FSO is specified can vary depending on the sensor type and its manufacturer.

**Common Ways FSO is Expressed:**

1.  **Absolute Output Values:** Stating the minimum and maximum output values directly.
    *   *Example:* "Output range: 0-5V" or "Current output: 4-20 mA".

2.  **Span:** The difference between the maximum and minimum output values.
    *   *Example:* "Span: 5V" for a 0-5V output.

3.  **Percentage of Span:** Sometimes, the FSO is expressed as a percentage of the total span. This is often used in conjunction with non-zero minimum outputs.
    *   *Example:* A pressure sensor might have a range of 0 to 100 psi, with an output of 0.5V to 4.5V. The FSO is 4.0V. If the output were 0.5V at 0 psi and 4.5V at 100 psi, the FSO is 4.0V. If the output were specified as 10% to 90% of a 0-5V range, the FSO would be 4V (90% - 10% of 5V).

**Important Considerations:**

*   **Linear vs. Non-linear Sensors:** FSO is most straightforward for linear sensors, where the output changes proportionally to the input. For non-linear sensors, the FSO still defines the overall output range, but the relationship between input and output is more complex.
*   **Offset:** Many sensors have an **offset**, which is the output signal when the input is zero or at its minimum. The FSO is the *difference* between the maximum and minimum outputs, not just the maximum output.
    *   *Example:* A sensor measuring strain might output 1V at zero strain and 6V at maximum strain. The FSO is 6V - 1V = 5V.

---

### 4. Factors Affecting Full-Scale Output

While FSO is a designed characteristic, several factors can influence it in practice:

*   **Environmental Conditions:** Temperature, humidity, and pressure can sometimes cause slight variations in the sensor's actual output range. Manufacturers often specify operating ranges and conditions for optimal performance.
*   **Aging and Wear:** Over time, sensor components can degrade, potentially affecting the FSO.
*   **Excitation Voltage/Current:** For sensors that require external excitation, variations in the excitation level can alter the output signal, including the FSO.
*   **Calibration:** Regular calibration ensures that the sensor's output consistently matches its intended FSO and the measured physical quantity.

**Reference:**

*   **Handbook of Modern Sensors by Jacob Fraden (Springer, Fourth Edition, 2010):** Fraden's book provides a comprehensive overview of various sensor technologies and their electrical characteristics. It discusses signal conditioning and output ranges, implicitly covering the concept of FSO when detailing sensor specifications.
*   **Process Control by K. Krishnaswamy (New Age International, Second edition, 2009):** Krishnaswamy's text is highly relevant for understanding sensor outputs within the context of process control loops. It would detail how sensor output ranges (FSO) are utilized by controllers for accurate regulation.

---

### 5. Practice Questions and Exercises

**Question 1:**

A pressure sensor is specified to measure pressures from 0 to 100 psi. Its electrical output is a voltage that varies from 1V at 0 psi to 6V at 100 psi. What is the Full-Scale Output (FSO) of this sensor's voltage signal?

**Answer 1:**
The FSO is the difference between the maximum and minimum output voltage.
FSO = Maximum Output - Minimum Output
FSO = 6V - 1V = **5V**

---

**Question 2:**

In a closed-loop control system, a temperature sensor with an FSO of 0-5V is used. If the controller receives an input voltage of 3V from the sensor, what can you infer about the measured temperature relative to the sensor's operating range?

**Answer 2:**
Since the FSO is 0-5V, a 3V input signal represents a value roughly 60% of the way through the sensor's measurement range (3V / 5V = 0.6 or 60%). This implies that the measured temperature is approximately 60% of the maximum temperature the sensor is designed to measure. For example, if the sensor measures 0-200°C, 3V would correspond to around 120°C.

---

**Question 3:**

True or False: The Full-Scale Output (FSO) of a sensor is always the maximum voltage it can produce.

**Answer 3:**
**False.** The FSO is the *difference* between the maximum and minimum output signals, not just the maximum output. It defines the span of the output.

---

### 6. Important Points to Remember

*   **FSO = Max Output - Min Output.** It defines the *span* of the sensor's electrical signal.
*   FSO is crucial for **interpreting sensor readings** and for **system design** (e.g., ADC selection).
*   It directly impacts the **dynamic range** of the measured quantity.
*   Sensors can have **offsets**, meaning the minimum output may not be zero.
*   Always refer to the sensor's datasheet for its specified FSO and operating conditions.

---

### 7. Connections to Course Outcomes

*   **CO1 (Describe Sensor Fundamentals):** FSO is a fundamental parameter that helps define a sensor's characteristics, performance, and limitations.
*   **CO2 (Explain principles of sensors):** Understanding FSO is essential for comprehending how a sensor's physical measurement is translated into an electrical signal that can be processed by a control system. It informs how we interpret the "how they work" aspect of a sensor's function.

---

This concludes the topic on Full-Scale Output for Module 1. Further exploration in subsequent modules will build upon these foundational concepts as we examine specific sensor types and their applications.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
