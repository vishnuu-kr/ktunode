---
title: "Span (Full Scale Input)"
subject: "SENSORS AND ACTUATORS"
module: "Module 1: Introduction to Sensors and actuators : Block diagram of a closed loop control System"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fea60"
status: "completed"
scrapedAt: "2026-05-23T17:57:42.536Z"
---
# Sensors and Actuators: Module 1 - Introduction to Sensors and Actuators

## Topic: Span (Full Scale Input)

### 1. Introduction to Sensors and Actuators: Context within a Closed-Loop Control System

Before delving into "Span," it's crucial to understand its role within a broader control system. A **closed-loop control system** (also known as a feedback control system) is a system that automatically adjusts its output based on the difference between the desired output (setpoint) and the actual output (measured variable).

**Block Diagram of a Closed-Loop Control System:**

```
+-----------------+       +-----------------+       +-----------------+
|   Setpoint      | ----> |   Comparator    | ----> |  Controller     |
| (Desired Value) |       | (Error Detector)|       |                 |
+-----------------+       +-----------------+       +-----------------+
       ^                                                      |
       |                                                      |
       |                                                      v
+-----------------+       +-----------------+       +-----------------+
|  Feedback Signal| <---- |     Sensor      | <---- |    Process      |
| (Measured Value)|       |                 |       |    (Plant)      |
+-----------------+       +-----------------+       +-----------------+
                                                             |
                                                             v
                                                     +-----------------+
                                                     |    Actuator     |
                                                     +-----------------+
```

**Key Components and their Roles:**

*   **Setpoint:** The desired value or target for the controlled variable.
*   **Comparator:** Compares the setpoint with the feedback signal to generate an error signal.
*   **Controller:** Processes the error signal and generates a control signal to influence the actuator.
*   **Actuator:** A device that converts the control signal into a physical action that manipulates the process.
*   **Process (Plant):** The system or phenomenon being controlled.
*   **Sensor:** A device that measures a physical quantity (the measured variable) from the process and converts it into a signal that can be understood by the controller (usually an electrical signal).
*   **Feedback Signal:** The signal produced by the sensor, representing the current state of the measured variable.

**Importance of Sensors in a Closed-Loop System:**
Sensors are the "eyes" of the control system. They provide the crucial information about the process that allows the system to adjust its output and maintain the desired state. The accuracy and range of a sensor directly impact the performance and effectiveness of the entire control system.

### 2. Understanding Span (Full Scale Input)

#### 2.1 Definition of Span

The **Span** of a sensor, often referred to as the **Full Scale Input (FSI)**, is the **maximum difference between the upper and lower limits of the input range** for which the sensor is designed to operate. It represents the total range of physical values that the sensor can measure.

*   **Span = Upper Input Limit - Lower Input Limit**

**Example:** If a temperature sensor is designed to measure temperatures between -10°C and 100°C, its span is:
Span = 100°C - (-10°C) = 110°C

#### 2.2 Key Concepts Related to Span

*   **Input Range:** The span defines the input range of the sensor. The input range is the set of all possible values of the physical quantity that the sensor can measure.
*   **Measurement Capability:** The span dictates the total extent of measurement the sensor can cover. A wider span means the sensor can measure a larger variation in the physical quantity.
*   **Sensitivity vs. Span:** While span defines the *total range*, sensitivity defines *how much the output changes for a given change in input*. A sensor with a large span might have a lower sensitivity if the output signal change is distributed over a wide input range.

#### 2.3 Significance of Span in Sensor Selection and System Design

The span of a sensor is a critical parameter when selecting a sensor for a particular application and designing a control system.

*   **Matching Sensor to Application:** The sensor's span must be chosen to encompass the expected range of the physical variable being measured in the process.
    *   **If the span is too narrow:** The sensor will not be able to detect or measure values outside its range, leading to inaccurate feedback and potential system failure.
    *   **If the span is too wide:** While the sensor can measure the required range, it might lead to a loss of resolution. The sensor's output signal might be spread over a larger range, making it harder to detect small variations within the desired operating region. This can also affect the sensor's sensitivity.

*   **Impact on Resolution:** The resolution of a sensor is the smallest change in the input quantity that the sensor can detect. For a given number of output bits or levels, a wider span will result in a lower resolution (larger steps between detectable input values). Conversely, a narrower span for the same output resolution will provide finer measurement capabilities.

*   **Dynamic Range:** The span is closely related to the dynamic range of the sensor, which is the ratio of the maximum measurable value to the minimum measurable value.

#### 2.4 Examples of Span in Different Sensor Types

*   **Pressure Sensor:**
    *   A pressure sensor for measuring tire pressure might have an input range of 0 psi to 100 psi.
    *   **Span = 100 psi - 0 psi = 100 psi.**

*   **Temperature Sensor:**
    *   An industrial temperature sensor for a furnace might have an input range of 0°C to 1200°C.
    *   **Span = 1200°C - 0°C = 1200°C.**
    *   A medical thermometer might have an input range of 35°C to 42°C.
    *   **Span = 42°C - 35°C = 7°C.**

*   **Position Sensor (Linear Potentiometer):**
    *   A linear potentiometer designed to measure displacement over 0.5 meters might have an input range of 0 to 0.5 meters.
    *   **Span = 0.5 m - 0 m = 0.5 m.**

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


#### 2.5 Textbook and Reference Book Insights

*   **Handbook of Modern Sensors by Jacob Fraden:** Fraden emphasizes that the "full scale" is a critical specification that defines the limits of the input signal the sensor is intended to measure. He discusses how span affects the signal-to-noise ratio and the overall accuracy. (Chapter on Sensor Fundamentals and Specifications)
*   **Process Control by K. Krishnaswamy:** Krishnaswamy highlights that the choice of sensor span is directly linked to the operating range of the controlled variable. Selecting an appropriate span ensures that the sensor provides meaningful data for effective control. (Chapter on Instrumentation and Measurement)
*   **Process Control Instrumentation Technology by Curtis D. Johnson:** Johnson explains that the span, along with the zero (offset), defines the linear operating region of many sensors. He also points out that operating a sensor outside its specified span can lead to errors, saturation, or damage. (Chapter on Pressure Measurement, Temperature Measurement, etc.)
*   **Sensors and Transducers by D. Patranabis:** Patranabis often uses the term "range" interchangeably with "span" and discusses how the span influences the required signal conditioning circuitry. (Chapter on Transducer Characteristics)

### 3. Relating Span to Learning Outcomes and Course Outcomes

This topic directly contributes to the following:

*   **Learning Outcomes:**
    *   Understanding the fundamental characteristics of sensors, including their operating limits.
    *   Appreciating how sensor specifications like span influence their application in measurement.

*   **Course Outcomes:**
    *   **CO1: Describe Sensor Fundamentals (Knowledge Level: K2):** Understanding the definition and significance of span is a fundamental aspect of sensor knowledge.
    *   **CO2: Explain the basic principles and concepts of commonly used different types of sensors, including their purpose, how they work, and the various types of sensors available (Knowledge Level: K2):** When discussing different sensor types, understanding their typical spans is crucial for explaining their purpose and application. For instance, a wide-span temperature sensor is for industrial furnaces, while a narrow-span one is for medical applications.

### 4. Practice Questions and Exercises

**Question 1:**
A load cell is designed to measure forces ranging from 0 N to 500 N. What is the span of this load cell?

**Answer 1:**
Span = Upper Input Limit - Lower Input Limit
Span = 500 N - 0 N = 500 N

**Question 2:**
A sensor has an operating input range of -50°C to 150°C.
a) What is the span of this sensor?
b) If this sensor has 10-bit digital output (representing 1024 discrete levels), what is the resolution in °C per level? (Assume the output is linear over the span).

**Answer 2:**
a) Span = 150°C - (-50°C) = 200°C
b) Resolution = Span / Number of Levels
   Resolution = 200°C / 1024 levels
   Resolution ≈ 0.195°C/level

**Question 3:**
Consider a flow meter with a specified span of 0 to 100 liters per minute (LPM). If the process requires measuring flow rates that typically range from 5 to 95 LPM, would this sensor be a suitable choice? Explain why or why not.

**Answer 3:**
Yes, this sensor would be a suitable choice.
**Reasoning:** The required operating range (5-95 LPM) is fully contained within the sensor's span (0-100 LPM). This means the sensor can accurately measure all expected flow rates without going out of its designed operating limits. If the flow rates exceeded 100 LPM, the sensor would saturate or provide incorrect readings. If the sensor's span was significantly larger (e.g., 0-1000 LPM), it might still work, but the resolution for the 5-95 LPM range might be lower compared to a sensor with a more specifically matched narrow span.

**Question 4:**
What is the primary implication of selecting a sensor with a span that is too wide for the application?

**Answer 4:**
The primary implication is a potential loss of **resolution**. The total range of measurement is spread over more output levels, making it harder to detect small changes or variations within the actual operating range of the process. This can impact the precision of the measurement.

### 5. Important Points to Remember

*   **Span is the difference between the upper and lower limits of a sensor's input range.**
*   It defines the **total measurement capability** of the sensor.
*   Selecting the correct span is crucial for **matching the sensor to the application's measurement requirements.**
*   An **incorrect span** (too narrow or too wide) can lead to inaccurate measurements, loss of resolution, or failure to detect critical values.
*   Span, along with zero (offset), defines the **linear operating region** of many sensors.
*   The span directly influences the **resolution** of a sensor for a given number of output steps.

---
This concludes the notes on Span (Full Scale Input) for Module 1. Ensure you understand how span relates to other sensor specifications like range, sensitivity, and resolution when designing or analyzing control systems.