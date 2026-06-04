---
title: "System Modeling- Open loop and closed loop control systems"
subject: "INSTRUMENTATION AND CONTROL SYSTEMS"
module: "Module 3: System Modeling"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1551d0cf4804463674"
status: "completed"
scrapedAt: "2026-05-20T18:00:39.902Z"
---
# INSTRUMENTATION AND CONTROL SYSTEMS - MODULE 3: SYSTEM MODELING

## Topic: System Modeling - Open Loop and Closed Loop Control Systems

---

### **Introduction**

System modeling is a fundamental aspect of understanding and designing control systems. It involves representing a real-world system using mathematical equations or block diagrams that capture its behavior. This allows engineers to analyze, predict, and modify the system's performance without physically interacting with it. Module 3 focuses on two primary types of control systems: **Open Loop Control Systems** and **Closed Loop Control Systems**. Understanding the differences, advantages, and disadvantages of each is crucial for selecting the appropriate control strategy for a given application.

---

### **1. Fundamentals of Control Systems**

Before diving into open and closed loop systems, let's establish some basic terminology:

*   **Control System:** A system that manages, commands, directs, or regulates the behavior of other devices or systems.
*   **Controlled Variable (Output):** The variable that is to be maintained at a desired value.
*   **Manipulated Variable (Input):** The variable that is adjusted by the controller to maintain the controlled variable at its setpoint.
*   **Setpoint (Reference Input):** The desired value for the controlled variable.
*   **Disturbance:** An unwanted input signal that affects the controlled variable.
*   **Plant:** The physical system or process to be controlled.
*   **Controller:** The component that generates the control signal based on the desired input and the system's output.
*   **Actuator:** The component that converts the control signal into a physical action to manipulate the plant.
*   **Sensor:** The component that measures the actual value of the controlled variable.

---

### **2. Open Loop Control Systems**

#### **2.1. Definition**

An **open loop control system** is a system where the control action is independent of the output of the system. The output has no influence on the control action.

#### **2.2. Block Diagram Representation**

```
+-----------------+      +-----------------+      +-----------------+
| Reference Input |----->| Controller      |----->| Actuator        |-----> Plant ----> Output
+-----------------+      +-----------------+      +-----------------+      |
                                                                             |
                                                                             V
                                                                        Disturbance
```

#### **2.3. Working Principle**

In an open loop system, the controller generates a control signal based solely on the reference input. This control signal is then fed to the actuator, which manipulates the plant. The system operates without any feedback mechanism to check if the output matches the desired setpoint.

#### **2.4. Key Characteristics**

*   **No Feedback:** The most defining characteristic. The output is not measured or used to adjust the control action.
*   **Simplicity:** Generally simpler in design and construction.
*   **Lower Cost:** Often less expensive due to fewer components.
*   **Susceptible to Disturbances:** Highly affected by external disturbances that can deviate the output from the desired value.
*   **Accuracy Depends on Calibration:** Accuracy relies heavily on the proper calibration of the controller and the predictability of the plant's behavior.
*   **Cannot Compensate for Variations:** Cannot automatically adjust for changes in the plant's characteristics or operating conditions.

#### **2.5. Examples**

*   **Automatic Toaster:** You set the toasting time. The toaster heats for that duration, regardless of how brown the toast actually is. (If the bread is thicker or has more moisture, the result will differ).
*   **Washing Machine (Timer Controlled):** The machine follows a pre-set sequence and timing for washing, rinsing, and spinning, irrespective of how clean the clothes are.
*   **Traffic Lights (Fixed Timer):** Lights change at fixed intervals, not based on the actual traffic flow.
*   **Sprinkler System on a Timer:** Waters the lawn for a set duration, regardless of whether it has rained recently or the soil is already moist.
*   **Electric Fan with Speed Setting:** The fan rotates at a selected speed, but it doesn't measure the actual room temperature to adjust its speed accordingly.

#### **2.6. Advantages**

*   Simple design and construction.
*   Lower cost.
*   Generally stable.

#### **2.7. Disadvantages**

*   Inaccurate and unreliable if there are disturbances or changes in the plant characteristics.
*   Cannot compensate for variations in the output.
*   Output must be manually calibrated for accuracy.

---

### **3. Closed Loop Control Systems (Feedback Control Systems)**

#### **3.1. Definition**

A **closed loop control system**, also known as a **feedback control system**, is a system where the control action is dependent on the output of the system. The output is measured and compared with the desired setpoint, and the difference (error) is used to adjust the control action.

#### **3.2. Block Diagram Representation**

```
+-----------------+      +-----------------+      +-----------------+
| Reference Input |----->| Summing/        |----->| Controller      |-----> Actuator ----> Plant ----> Output
+-----------------+      | Comparator      |<-----|                 |
                         +-----------------+      +-----------------+      |
                                ^   |                                        |
                                |   |                                        V
                                |   | Error                              Disturbance
                                |   |
                         +-----------------+
                         | Sensor          |
                         +-----------------+
```

*   **Summing/Comparator:** This block typically performs subtraction. The reference input is compared with the measured output (feedback signal).
*   **Error Signal:** The difference between the reference input and the measured output ($e = r - y$).

#### **3.3. Working Principle**

1.  The **reference input** (setpoint) is the desired value for the controlled variable.
2.  The **sensor** measures the actual value of the controlled variable (output).
3.  The measured output is fed back to the **summing junction** (comparator).
4.  At the summing junction, the measured output is subtracted from the reference input to generate an **error signal**.
5.  The **controller** receives the error signal and generates a control signal.
6.  The **actuator** receives the control signal and applies it to the **plant** to adjust the controlled variable.
7.  This process continues, with the system constantly trying to minimize the error signal.

#### **3.4. Key Characteristics**

*   **Feedback Mechanism:** The presence of a feedback loop is the defining characteristic.
*   **Error Correction:** Actively works to reduce the difference between the desired output and the actual output.
*   **Improved Accuracy:** Generally more accurate due to the error correction capability.
*   **Reduced Sensitivity to Disturbances:** Can effectively reject or minimize the impact of external disturbances.
*   **Can Compensate for Variations:** Can adapt to changes in the plant's characteristics or operating conditions.
*   **Increased Complexity:** More complex design, requiring additional components like sensors and comparators.
*   **Higher Cost:** Typically more expensive due to the added components.
*   **Potential for Instability:** The feedback loop can introduce instability if not designed properly.

#### **3.5. Examples**

*   **Thermostat Controlling Room Temperature:**
    *   **Reference Input:** Desired room temperature.
    *   **Sensor:** Thermometer measuring actual room temperature.
    *   **Controller:** Thermostat logic.
    *   **Actuator:** Furnace or air conditioner.
    *   **Plant:** The room.
    *   The thermostat compares the desired temperature with the actual temperature. If there's a difference (error), it turns the furnace or AC on/off to correct it.
*   **Cruise Control in a Car:**
    *   **Reference Input:** Desired speed.
    *   **Sensor:** Speedometer.
    *   **Controller:** Cruise control module.
    *   **Actuator:** Throttle.
    *   **Plant:** The car and engine.
    *   The system maintains the set speed by adjusting the throttle based on the actual speed measured.
*   **Human Body Temperature Regulation:** Our bodies have a built-in feedback system to maintain a constant internal temperature.
*   **Robot Arm Positioning:** A robotic arm uses sensors to determine its actual position and adjusts its motors to reach the target position.
*   **Automatic Toilet Flush:** A sensor detects presence, and after a certain time or departure, the flush mechanism is activated. (Though simpler, the presence detection is a form of feedback).

#### **3.6. Advantages**

*   High accuracy and reliability.
*   Reduces the effect of disturbances.
*   Can compensate for variations in system parameters.
*   Can be used for stabilizing unstable systems.

#### **3.7. Disadvantages**

*   Increased complexity and cost.
*   Potential for instability.
*   Requires a sensor, which might not always be available or accurate.
*   The feedback loop introduces a delay in response.

---

### **4. Comparison of Open Loop and Closed Loop Systems**

| Feature          | Open Loop Control System                               | Closed Loop Control System                                 |
| :--------------- | :----------------------------------------------------- | :--------------------------------------------------------- |
| **Feedback**     | No feedback                                            | Feedback is present                                        |
| **Accuracy**     | Less accurate, depends on calibration                  | More accurate, self-correcting                             |
| **Disturbances** | Highly affected by disturbances                        | Less affected by disturbances                              |
| **Reliability**  | Less reliable in the presence of variations          | More reliable                                              |
| **Complexity**   | Simple                                                 | Complex                                                    |
| **Cost**         | Lower                                                  | Higher                                                     |
| **Stability**    | Generally stable                                       | Can be unstable if not designed properly                   |
| **Response**     | Depends on calibration, may not reach desired output   | Tends to reach and maintain the desired output             |
| **Examples**     | Toaster, Timer-based washing machine, Fixed traffic lights | Thermostat, Cruise control, Human body temperature regulation |

---

### **5. System Modeling Aspects (Relating to Course Outcomes)**

This topic is foundational for understanding how to model systems, which directly contributes to several course outcomes:

*   **CO1: Basic knowledge about industrial measurement systems and elements:** Understanding the role of sensors and actuators in both open and closed-loop systems is essential. Closed-loop systems specifically highlight the measurement aspect.
*   **CO2: Knowledge about sensors and transducers:** The necessity of sensors in closed-loop systems emphasizes their importance.
*   **CO4: Describe the role of various control blocks and components in feedback systems:** This topic directly introduces the fundamental blocks (Controller, Actuator, Plant, Sensor, Summing Junction) and their roles within a feedback system.
*   **CO5 & CO6: Analysis of system responses and stability:** While this topic introduces the types of systems, subsequent modules will build upon these models to perform detailed time-domain analysis, root locus techniques, and stability assessments for closed-loop systems.

---

### **6. Important Points to Remember**

*   **Feedback is the key differentiator.** If the output influences the control action, it's closed-loop; otherwise, it's open-loop.
*   Open-loop systems are simpler and cheaper but less accurate and more prone to disturbances.
*   Closed-loop systems are more complex and costly but offer better accuracy, stability, and disturbance rejection.
*   The choice between open-loop and closed-loop depends on the application's requirements for accuracy, cost, and the expected level of disturbances.
*   Understanding these basic system structures is crucial before delving into mathematical modeling and analysis techniques.

---

### **7. Practice Questions & Exercises**

**Question 1:**
Which type of control system is inherently more accurate and less sensitive to external disturbances?
a) Open Loop Control System
b) Closed Loop Control System
c) Both are equally accurate
d) Depends on the specific system

**Question 2:**
In a washing machine controlled by a timer, what type of control system is it?
a) Open Loop
b) Closed Loop
c) Adaptive Control
d) Optimal Control

**Question 3:**
A thermostat used to control room temperature is an example of:
a) Open Loop Control System
b) Closed Loop Control System
c) Manual Control System
d) None of the above

**Question 4:**
What is the primary disadvantage of a closed-loop control system compared to an open-loop system?
a) Lower accuracy
b) Higher cost and complexity
c) Increased sensitivity to disturbances
d) Simpler design

**Question 5:**
Identify the components in a typical closed-loop control system block diagram.

---

### **Answers to Practice Questions**

**Answer 1:**
b) Closed Loop Control System

**Answer 2:**
a) Open Loop (The timer operates independently of how clean the clothes are.)

**Answer 3:**
b) Closed Loop Control System (The thermostat measures the temperature and adjusts heating/cooling accordingly.)

**Answer 4:**
b) Higher cost and complexity

**Answer 5:**
The typical components in a closed-loop control system block diagram are:
*   **Reference Input (Setpoint):** The desired value.
*   **Summing Junction (Comparator):** Compares reference input with feedback signal.
*   **Controller:** Processes the error signal to generate a control signal.
*   **Actuator:** Converts the control signal into a physical action.
*   **Plant:** The system or process being controlled.
*   **Sensor:** Measures the output of the plant.
*   **Feedback Signal:** The measured output, fed back to the summing junction.

---

### **8. Referencing Textbooks and Course Outcomes Alignment**

This module content aligns with the fundamental concepts introduced in the foundational chapters of the specified textbooks, particularly concerning system representation and the basic types of control strategies.

*   **Industrial Instrumentation by K Krishnaswamy:** Provides a good overview of measurement elements, which are key components in closed-loop systems.
*   **Measurement systems applications and design by Ernest O. Doebelin:** Offers insights into how systems are measured and controlled, directly relating to sensor roles and system feedback.
*   **Control Systems Engineering by Nise N.S. / Modern Control Engineering by Ogata K:** These texts are comprehensive resources for control systems. They will extensively cover the block diagram representations, definitions, and comparisons of open and closed-loop systems in their introductory chapters. They lay the groundwork for the analysis techniques mentioned in CO5 and CO6.
*   **Control Systems by K R Varmah / Principles of Industrial Instrumentation by Patranabis D / Industrial Instrumentation and Control by Singh, S.K / Control Systems Principles and Design by Gopal M / Automatic Control Systems by Kuo B. C:** All these reference books will provide similar foundational material on open and closed-loop systems, reinforcing the concepts presented here and supporting CO1, CO2, and CO4.

The direct alignment with **CO1, CO2, and CO4** is evident as the core of this topic deals with system elements (sensors, actuators, controllers), their roles, and the structure of feedback systems. Understanding these distinctions is a prerequisite for the analysis tasks outlined in **CO5 and CO6**.

---
---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
