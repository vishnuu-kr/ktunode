---
title: "Hysteresis"
subject: "SENSORS AND ACTUATORS"
module: "Module 1: Introduction to Sensors and actuators : Block diagram of a closed loop control System"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fea64"
status: "completed"
scrapedAt: "2026-05-23T17:57:45.177Z"
---
# SENSORS AND ACTUATORS: Module 1 - Introduction to Sensors and Actuators: Block Diagram of a Closed-Loop Control System

## Topic: Hysteresis

### Learning Outcomes Covered:

*   Understanding the concept of hysteresis in the context of sensors and actuators.
*   Identifying the causes and effects of hysteresis.
*   Recognizing how hysteresis impacts the performance of control systems.

### Course Outcomes Addressed:

*   **CO1: Describe Sensor Fundamentals (K2)** - This topic directly contributes to understanding fundamental sensor behavior and limitations.
*   **CO2: Explain the basic principles and concepts of commonly used different types of sensors, including their purpose, how they work, and the various types of sensors available. (K2)** - Understanding hysteresis is crucial for explaining the operational characteristics and limitations of many sensor types.

---

### 1. What is Hysteresis?

**Definition:** Hysteresis, in the context of sensors and actuators, is a phenomenon where the output of a device depends not only on the current input but also on its past history. This means that for the same input value, the output can be different depending on whether the input is increasing or decreasing.

**Key Concept:** Hysteresis introduces a **dead band** or a **lag** in the system's response.

---

### 2. Visualizing Hysteresis: The Hysteresis Loop

Hysteresis is often visualized by plotting the output of a sensor or actuator against its input.

*   **Rising Input:** As the input increases from a lower value, the output follows a specific path.
*   **Falling Input:** As the input decreases from a higher value, the output follows a different path, typically lagging behind the rising path.

The region between these two paths is the **hysteresis loop**.

**Diagrammatic Representation (Conceptual):**

```
      ^ Output
      |
      |     /-------
      |    /
      |   /
      |  /
      | /
      +----------------> Input
       \
        \
         \
          \
           \-------
```

---

### 3. Causes of Hysteresis in Sensors and Actuators

Hysteresis can arise from various physical phenomena within the sensor or actuator. Common causes include:

*   **Friction:**
    *   **Mechanical Components:** In actuators with moving parts (e.g., valves, relays), static friction (stiction) needs to be overcome before movement occurs. This requires a higher input signal to initiate motion than to maintain it.
    *   **Reference:** Parr, Andrew. *Hydraulics and Pneumatics*. (Second edition, 1999) discusses friction extensively in the context of pneumatic and hydraulic actuators.
*   **Magnetic Effects:**
    *   **Ferromagnetic Materials:** In sensors and actuators utilizing magnetic principles (e.g., Hall effect sensors, solenoid actuators), the magnetization and demagnetization of ferromagnetic materials exhibit hysteresis.
    *   **Reference:** Fraden, Jacob. *Handbook of Modern Sensors*. (Fourth Edition, 2010) often delves into the material properties that contribute to sensor performance, including magnetic hysteresis.
*   **Material Properties:**
    *   **Elasticity and Plasticity:** In materials that undergo deformation, the stress-strain relationship can exhibit hysteresis due to internal damping or irreversible changes.
    *   **Phase Transitions:** Some sensors utilize materials that undergo phase changes, which can involve energy storage and release, leading to hysteresis.
*   **Electronic Components:**
    *   **Schmitt Triggers:** While often intentionally designed to introduce hysteresis for noise immunity, certain electronic components can exhibit unintended hysteresis.
    *   **Reference:** Johnson, Curtis D. *Process Control Instrumentation Technology*. (8/e, 2019) often covers electronic circuit behavior in control systems.
*   **Mechanical Backlash:**
    *   **Gears and Linkages:** In systems with gears or other mechanical linkages, play or "backlash" between mating components can cause hysteresis. The input must move to take up this slack before any output movement is generated.

---

### 4. Effects of Hysteresis on Control Systems

Hysteresis can significantly impact the performance and accuracy of a closed-loop control system.

*   **Reduced Accuracy and Precision:**
    *   The system may not be able to accurately achieve or maintain a specific setpoint because the output will oscillate around it due to the dead band.
    *   **Example:** A temperature control system with a thermostat exhibiting hysteresis might cause the heater to turn on at 20°C and off at 22°C, creating a ±1°C error band even when the desired temperature is 21°C.
*   **Oscillations and Instability:**
    *   If not accounted for, hysteresis can lead to continuous oscillations around the setpoint as the control signal repeatedly crosses the hysteresis threshold.
    *   **Reference:** Krishnaswamy, K. *Process Control*. (Second edition, 2009) would discuss how such non-linearities affect system stability.
*   **Increased Wear and Tear:**
    *   In systems with mechanical hysteresis (e.g., due to friction), frequent switching or overshooting can lead to increased wear on moving parts.
*   **Difficulty in Fine Control:**
    *   Achieving very precise control becomes challenging as small adjustments to the input may not produce a proportional change in the output within the hysteresis band.
*   **Impact on System Response Time:**
    *   The system's response time can be effectively increased because the control action might be delayed until the input signal overcomes the hysteresis threshold.

---

### 5. Types of Hysteresis (Conceptual Classification)

While the underlying causes vary, hysteresis can be broadly categorized by its behavior:

*   **Symmetric Hysteresis:** The magnitude of the hysteresis loop is the same for both increasing and decreasing inputs.
*   **Asymmetric Hysteresis:** The magnitude of the hysteresis loop differs for increasing and decreasing inputs. This is less common in basic sensor descriptions but can occur in complex systems.

---

### 6. Minimizing or Managing Hysteresis

While eliminating hysteresis entirely can be difficult, several strategies can be employed to minimize its impact or manage its effects:

*   **Component Selection:** Choosing sensors and actuators with inherently low hysteresis.
*   **Lubrication:** For mechanical systems, proper lubrication can reduce friction and hence hysteresis.
*   **Pre-tensioning:** Applying a small, constant force to mechanical components can help reduce backlash.
*   **Software Compensation:**
    *   **Dead Band Elimination:** Implementing algorithms in the controller to adjust the setpoint slightly based on the direction of change.
    *   **Hysteresis-Based Control (e.g., PID with Hysteresis):** For some applications, hysteresis is intentionally introduced into the control logic (like in a thermostat) to prevent rapid switching, but this is a controlled form of hysteresis.
    *   **Reference:** Bishop, Robert H. *Mechatronic Systems, Sensors and Actuators Fundamentals and Modelling*. (3/e, 2022) might discuss advanced control strategies for dealing with sensor nonlinearities.
*   **Using Non-Contact Sensors:** Where possible, using sensors that avoid physical contact (e.g., optical, capacitive) can reduce friction-related hysteresis.

---

### 7. Hysteresis in the Context of the Closed-Loop Control System Block Diagram

Consider a generic closed-loop control system:

**Input (Desired Value) -> Comparator -> Controller -> Actuator -> System -> Sensor -> Comparator**

*   **Sensor Hysteresis:** If the sensor exhibits hysteresis, the feedback signal (from the sensor) will lag behind the actual system output. This means the comparator receives an inaccurate representation of the system's state, leading to errors in the controller's decision-making.
*   **Actuator Hysteresis:** If the actuator exhibits hysteresis, a certain change in the controller's output signal might be required to overcome the actuator's internal resistance (friction, stiction) before any output movement occurs. This directly affects the system's response to the control signal.

**Example Application:**

*   **Hydraulic Valve Control:** A hydraulic valve controlling the flow of fluid in an industrial process. The valve spool might experience friction. To open the valve, the control signal needs to overcome static friction. Once moving, less force is needed to keep it open. When closing, the process repeats. This can lead to a "stick-slip" motion or inaccurate positioning of the valve.
    *   **Reference:** Parr, Andrew. *Hydraulics and Pneumatics*. (Second edition, 1999) is a primary resource for understanding actuator behavior in hydraulic systems, including friction.

---

### 8. Important Points to Remember

*   **Hysteresis is a memory effect:** The output depends on the past history of the input.
*   **It creates a dead band:** A range of input where the output doesn't change or changes non-linearly.
*   **Common causes:** Friction, magnetic effects, material properties, mechanical backlash.
*   **Impacts:** Reduced accuracy, oscillations, increased wear.
*   **Management:** Component selection, lubrication, software compensation.
*   **Crucial for sensor and actuator selection:** Understanding hysteresis is vital for choosing appropriate components for a given application.

---

### 9. Practice Questions

**Question 1:** Define hysteresis in the context of sensors and actuators.

**Answer:** Hysteresis is a phenomenon where the output of a device depends not only on the current input but also on its past history. This results in different output values for the same input depending on whether the input is increasing or decreasing.

**Question 2:** List three common causes of hysteresis in sensors or actuators.

**Answer:**
1.  Friction (e.g., stiction in mechanical actuators)
2.  Magnetic effects in ferromagnetic materials
3.  Mechanical backlash in gear systems

**Question 3:** How does hysteresis in a sensor affect the performance of a closed-loop control system?

**Answer:** Hysteresis in a sensor leads to an inaccurate feedback signal. This can cause the controller to make incorrect decisions, resulting in reduced system accuracy, potential oscillations around the setpoint, and an overall degradation of control performance.

**Question 4:** Imagine a temperature sensor that exhibits hysteresis. If the desired temperature is 25°C, and the sensor turns on the heater at 24°C (as temperature drops) and turns it off at 26°C (as temperature rises), what is the magnitude of the hysteresis in °C?

**Answer:** The magnitude of the hysteresis is the difference between the turn-off point and the turn-on point: 26°C - 24°C = 2°C.

**Question 5:** Describe one method to minimize the effect of hysteresis in a mechanical actuator.

**Answer:** One method is to ensure proper lubrication of moving parts, which helps reduce friction (stiction), a primary cause of mechanical hysteresis. Alternatively, if backlash is the issue, pre-tensioning mechanical components can help.

---

This concludes the study notes on Hysteresis for Module 1. Remember to consult the provided textbooks and reference books for deeper insights and examples specific to different types of sensors and actuators.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
