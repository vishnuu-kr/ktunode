---
title: "Introduction to Sensors and actuators : Block diagram of a closed loop control System"
subject: "SENSORS AND ACTUATORS"
module: "Module 1: Introduction to Sensors and actuators : Block diagram of a closed loop control System"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fea5b"
status: "completed"
scrapedAt: "2026-05-23T17:57:39.182Z"
---
# SENSORS AND ACTUATORS - Module 1: Introduction to Sensors and Actuators

## Topic: Introduction to Sensors and Actuators: Block Diagram of a Closed-Loop Control System

---

### 1. Introduction to Sensors and Actuators

This module introduces the fundamental building blocks of automated systems: sensors and actuators. We will explore their definitions, roles, and how they integrate into a typical control system.

**Key Concepts & Definitions:**

*   **Sensor:** A device that detects and responds to some type of input from the physical environment. The physical environment being changed can be light, heat, motion, moisture, pressure, or any one of a great many other environmental phenomena.
    *   **Input:** The physical quantity being measured (e.g., temperature, pressure, light intensity).
    *   **Output:** A signal (usually electrical) that represents the measured input.
    *   **Purpose:** To convert a physical phenomenon into a signal that can be understood and processed by a control system.
    *   *(Reference: Fraden, Handbook of Modern Sensors)*

*   **Actuator:** A device that converts a control signal into a physical action. Actuators are the "muscles" of a control system, enabling it to interact with the physical world.
    *   **Input:** A control signal (usually electrical).
    *   **Output:** A physical action (e.g., movement, force, flow, heating).
    *   **Purpose:** To affect or control the physical environment based on the processed signals from the control system.
    *   *(Reference: Parr, Hydraulics and Pneumatics)*

*   **Control System:** A system designed to manage, command, direct, or regulate the behavior of other devices or systems.

---

### 2. Block Diagram of a Closed-Loop Control System

A closed-loop control system, also known as a feedback control system, is a system where the output is monitored and used to adjust the input to achieve a desired outcome. Sensors and actuators are integral components of such systems.

**Components of a Closed-Loop Control System:**

Let's break down the essential blocks in a typical closed-loop control system block diagram:

*   **Desired Value (Set Point):**
    *   **Definition:** The target value or reference level that the system aims to maintain or achieve. This is the desired state of the controlled variable.
    *   **Example:** In a thermostat controlling room temperature, the desired value is the temperature you set (e.g., 22°C).
    *   *(Reference: Krishnaswamy, Process Control)*

*   **Comparator (Error Detector):**
    *   **Definition:** This block compares the desired value with the actual measured value of the controlled variable.
    *   **Function:** It calculates the "error signal," which is the difference between the desired value and the measured value.
        *   **Error Signal = Desired Value - Measured Value**
    *   **Example:** If the desired temperature is 22°C and the measured temperature is 20°C, the error signal is +2°C. If the measured temperature is 24°C, the error signal is -2°C.
    *   *(Reference: Bishop, Mechatronic systems, Sensors and Actuators Fundamentals and Modelling)*

*   **Controller:**
    *   **Definition:** The "brain" of the control system. It receives the error signal and determines what action needs to be taken to reduce the error.
    *   **Function:** Processes the error signal and generates a control signal for the actuator. Different control strategies (e.g., PID control) are implemented here.
    *   **Example:** A thermostat's controller analyzes the error signal and decides whether to turn the heater on, turn it off, or keep it as is.
    *   *(Reference: Krishnaswamy, Process Control)*

*   **Actuator:**
    *   **Definition:** As defined earlier, it receives the control signal from the controller and converts it into a physical action that influences the process.
    *   **Function:** To manipulate the process variable directly or indirectly to bring it closer to the desired value.
    *   **Example:** In the thermostat example, the actuator could be a switch that turns the heating element or fan on/off, or a valve that controls the flow of hot water.
    *   *(Reference: Parr, Hydraulics and Pneumatics)*

*   **Process (Controlled System):**
    *   **Definition:** The physical system or phenomenon that is being controlled.
    *   **Function:** The process responds to the action of the actuator, changing its state.
    *   **Example:** The room whose temperature is being controlled. The heater (actuator) increases or decreases the room temperature (process).
    *   *(Reference: Krishnaswamy, Process Control)*

*   **Sensor:**
    *   **Definition:** As defined earlier, it measures the current state of the process variable.
    *   **Function:** To convert the physical quantity (e.g., temperature, pressure) into a signal that the comparator can use. This signal is then fed back to the comparator.
    *   **Example:** A temperature sensor (thermometer, thermistor) in the room measures the actual temperature and sends this value back.
    *   *(Reference: Fraden, Handbook of Modern Sensors)*

*   **Feedback Path:**
    *   **Definition:** The path through which the measured output (from the sensor) is returned to the comparator. This is what makes it a "closed-loop" system.
    *   **Function:** To provide information about the actual state of the process to the controller, enabling it to make corrections.

**Visual Representation (Block Diagram):**

```
                                      +----------------+
                                      | Desired Value  |
                                      |   (Set Point)  |
                                      +-------+--------+
                                              |
                                              v
      +--------------------+      +-------------------+      +------------+      +---------+      +-----------------+
      |                    |----->|    Comparator     |----->| Controller |----->| Actuator|----->|     Process     |
      |       Sensor       |<-----|   (Error Detector)|      |            |      |         |      | (Controlled      |
      |                    |      +---------+---------+      +------+-----+      +----+----+      |     System)     |
      | (Measures Actual   |                ^                       |               |           +--------+--------+
      |     Value)         |                |                       |               |                    |
      +--------------------+                |                       |               |                    |
                                            |                       |               |                    |
                                            +-----------------------+---------------+--------------------+
                                                    Feedback Path
```

**Explanation of the Flow:**

1.  The **Desired Value** is the target.
2.  The **Sensor** measures the **Actual Value** of the process variable.
3.  This **Actual Value** is fed back to the **Comparator**, which compares it with the **Desired Value**.
4.  The **Comparator** generates an **Error Signal** (Desired Value - Actual Value).
5.  The **Controller** receives the **Error Signal** and processes it.
6.  Based on the error, the **Controller** sends a **Control Signal** to the **Actuator**.
7.  The **Actuator** takes action to influence the **Process**.
8.  The **Process**'s state changes, and this change is then measured by the **Sensor**, closing the loop.

---

### 3. Learning Outcomes Coverage

This section details how the provided notes address the learning outcomes for this module.

*   **CO1: Describe Sensor Fundamentals (Knowledge Level: K2)**
    *   Covered in Section 1, where sensors are defined, their purpose, input, and output are explained. The role of sensors in a feedback loop is elaborated in Section 2.

*   **CO2: Explain the basic principles and concepts of commonly used different types of sensors, including their purpose, how they work, and the various types of sensors available.**
    *   While this specific module focuses on the *introduction* and the *block diagram*, it lays the groundwork for understanding how *different types* of sensors would fit into this structure. Section 1 defines what a sensor is, and Section 2 shows its universal role in the feedback loop. Future modules will likely delve into specific sensor types. The core concept of sensing a physical parameter and converting it into a signal is established here.

*   **CO3: Illustrate the working principles of smart sensors (Knowledge Level: K2)**
    *   The concept of smart sensors is not explicitly detailed in this introductory block diagram module. However, the block diagram represents the fundamental architecture where a sensor fits. Smart sensors would typically integrate sensing elements with processing capabilities (microcontrollers) to provide more than just a raw analog signal, but their output would still represent a measured physical quantity fed back into the control loop. This topic would likely be covered in later modules.

*   **CO4: Explain the working principle of different types of actuators.**
    *   Similar to CO2, this module introduces the *role* of actuators in a control system. Section 1 defines actuators and their function. Section 2 places them within the closed-loop diagram, showing how they receive a control signal and influence the process. Specific types of actuators (e.g., motors, solenoids, hydraulic cylinders) and their working principles will be covered in subsequent modules.

---

### 4. Practice Questions and Exercises

**Question 1:**

In a closed-loop control system, what is the primary function of a sensor?

**Answer:**
The primary function of a sensor is to detect a physical quantity from the environment and convert it into a signal that can be understood and processed by the control system.

**Question 2:**

What is the "error signal" in a closed-loop control system, and how is it generated?

**Answer:**
The error signal is the difference between the desired value (set point) and the actual measured value of the process variable. It is generated by the comparator block.
*Formula:* Error Signal = Desired Value - Measured Value

**Question 3:**

Identify the main components in the block diagram of a closed-loop control system and briefly describe the role of each.

**Answer:**
The main components are:
*   **Desired Value (Set Point):** The target value for the system.
*   **Comparator:** Compares desired and actual values to find the error.
*   **Controller:** Processes the error signal and generates a control command.
*   **Actuator:** Converts the control command into a physical action.
*   **Process:** The system being controlled, which is affected by the actuator.
*   **Sensor:** Measures the actual state of the process.
*   **Feedback Path:** Returns the measured value to the comparator.

**Question 4:**

Consider a home heating system controlled by a thermostat.
a) Identify the "Desired Value."
b) Identify the "Sensor."
c) Identify the "Actuator."
d) Identify the "Process."

**Answer:**
a) **Desired Value:** The temperature set on the thermostat (e.g., 21°C).
b) **Sensor:** The thermometer or temperature-sensing element within the thermostat.
c) **Actuator:** The switch or mechanism that turns the furnace (or boiler) on or off.
d) **Process:** The room or building whose temperature is being controlled.

---

### 5. Important Points to Remember

*   **Closed-loop systems use feedback:** The output of the system is measured and used to influence the input.
*   **Sensors measure:** They detect physical quantities and convert them into signals.
*   **Actuators act:** They convert control signals into physical actions.
*   **Error signal is key:** It drives the control action in a closed-loop system.
*   **Interdependence:** Sensors and actuators are fundamental pairs in many automated systems, working together to maintain a desired state.
*   **Block diagrams simplify complex systems:** They provide a clear visual representation of the flow of information and control signals.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### 6. References and Further Reading

*   **Textbooks:**
    *   Fraden, Jacob. *Handbook of Modern Sensors*. Springer, Fourth Edition, 2010. (Crucial for sensor fundamentals)
    *   Parr, Andrew. *Hydraulics and Pneumatics*. Elsevier Science, Second edition, 1999. (Essential for understanding pneumatic and hydraulic actuators)
    *   Krishnaswamy, K. *Process Control*. New Age International, Second edition, 2009. (Provides context for control systems and their components)

*   **Reference Books:**
    *   Pawlak, Andrzej M. *Sensors and Actuators in Mechatronics, Design and Applications*. Taylor & Francis Group, 1/e, 2016.
    *   Bishop, Robert H. *Mechatronic systems, Sensors and Actuators Fundamentals and Modelling*. Taylor & Francis Group, 3/e, 2022. (Good for a broader mechatronics perspective)
    *   Johnson, Curtis D. *Process Control Instrumentation Technology*. Pearson/Prentice Hall, 8/e, 2019. (Detailed instrumentation aspects)
    *   Patranabis, D. *Sensors and Transducers*. PHI Learning, 4/e, 2021. (Comprehensive sensor coverage)

---

This concludes the introductory notes for Module 1, focusing on the fundamental concepts of sensors, actuators, and the block diagram of a closed-loop control system. The subsequent modules will build upon this foundation to explore specific types and applications of these crucial components.