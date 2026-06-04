---
title: "typical elements of open and closed loop control systems."
subject: "MECHATRONICS"
module: "Module 3: Control of mechanical systems : System modeling "
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804463f17"
status: "completed"
scrapedAt: "2026-05-20T18:14:47.632Z"
---
# MECHATRONICS: Module 3: Control of Mechanical Systems - System Modeling

## Topic: Typical Elements of Open and Closed Loop Control Systems

**Module Learning Outcomes Addressed:**

*   Understanding the fundamental principles of control systems.
*   Differentiating between open-loop and closed-loop control strategies.
*   Identifying the key components within both types of control systems.
*   Analyzing the advantages and disadvantages of each control approach.

**Course Outcomes Addressed:**

*   **CO3 (K2):** Understand the basics of mathematical modelling of the given real systems and to predict its behaviour. (Understanding system components is foundational to modeling).
*   **CO7 (K2):** Understand the use of mechatronic concepts in modern applications. (Open and closed-loop control are fundamental mechatronic concepts).

---

### 1. Introduction to Control Systems

A **control system** is a system that manages, commands, directs, or regulates the behavior of other devices or systems. In mechatronics, control systems are essential for automating mechanical processes and achieving desired performance.

**Key Concepts:**

*   **System:** A collection of interconnected components that work together to achieve a specific objective.
*   **Input:** The signal or command given to the control system to initiate an action.
*   **Output:** The actual response or behavior of the system.
*   **Controller:** The "brain" of the control system that processes the input and generates commands for the actuator.
*   **Actuator:** A component that converts control signals into physical actions to influence the system.
*   **Plant/Process:** The actual physical system being controlled.

---

### 2. Open-Loop Control Systems

**Definition:** An open-loop control system is a system where the control action from the controller is independent of the system's output. There is no feedback mechanism to inform the controller about the actual output.

**Block Diagram:**

```
      +-----------+       +----------+       +-----------+
--->|  Input    |------>| Controller|------>|  Actuator |------>+
      +-----------+       +----------+       +----------+       |
                                                                 v
                                                               +------+
                                                               | Plant|
                                                               +------+
```

**Typical Elements of an Open-Loop System:**

1.  **Input (Reference Input/Setpoint):** The desired value or command.
    *   **Example:** Setting the timer on a toaster for a specific toasting time.
2.  **Controller:** Processes the input and generates a control signal.
    *   **Example:** The timer mechanism in the toaster.
3.  **Actuator:** Converts the control signal into a physical action.
    *   **Example:** The heating elements in the toaster.
4.  **Plant/Process:** The system being controlled.
    *   **Example:** The bread in the toaster undergoing the toasting process.
5.  **Output:** The result of the process.
    *   **Example:** The toasted bread.

**Characteristics of Open-Loop Systems:**

*   **Simplicity:** Generally simpler in design and implementation.
*   **Lower Cost:** Typically less expensive due to the absence of feedback components.
*   **No Self-Correction:** Cannot compensate for disturbances or variations in the system or environment.
*   **Accuracy Dependent on Calibration:** Accuracy relies heavily on the precise calibration of all components and predictable environmental conditions.
*   **Suitable for:** Well-defined processes where disturbances are minimal and predictable.

**Examples:**

*   **Automatic Washing Machine:** Based on fixed timer settings for different wash cycles, regardless of how clean the clothes actually are.
*   **Toaster:** Operates for a set time, irrespective of the actual browning level of the toast.
*   **Sprinkler System on a Timer:** Waters the lawn for a predetermined duration, regardless of whether it has rained.
*   **Traffic Lights on a Fixed Schedule:** Changes lights based on a pre-set timing, not actual traffic flow.

**Textbook Reference:**

*   **Bolton, W. (7th ed.).** *Mechatronics: Electronic Control Systems in Mechanical and Electrical Engineering.* Likely discusses open-loop systems in the introductory chapters on control systems, explaining their basic operation and limitations (Chapter 2, "Control Systems").
*   **Onwubolu, G. C.** *Mechatronics: Principles and Applications.* Will likely cover open-loop control as a foundational concept in control theory within the context of mechatronic systems (Chapter 3, "Fundamentals of Control Systems").

---

### 3. Closed-Loop Control Systems (Feedback Control Systems)

**Definition:** A closed-loop control system is a system where the control action is dependent on the system's output. It uses a feedback mechanism to compare the actual output with the desired output and adjust the control action accordingly.

**Block Diagram:**

```
      +-----------+       +----------+       +----------+
--->|  Input    |------>| Controller|------>| Actuator |------>+
      +-----------+       +----------+       +----------+       |
          ^                                                     v
          |                                                   +------+
          |                                                   | Plant|
          |                                                   +------+
          |                                                     |
          |     +-----------+       +----------+                |
          +-----| Comparator|-------| Feedback |----------------+
                +-----------+       +----------+
```

**Typical Elements of a Closed-Loop System:**

1.  **Input (Reference Input/Setpoint):** The desired value or target.
    *   **Example:** The desired temperature set on a thermostat.
2.  **Comparator (Summing Junction):** Compares the reference input with the feedback signal to generate an error signal.
    *   **Example:** The component within the thermostat that compares the set temperature with the room temperature.
3.  **Error Signal:** The difference between the reference input and the feedback signal ($Error = Reference - Feedback$).
4.  **Controller:** Receives the error signal and generates a control signal to the actuator.
    *   **Example:** The logic circuit or processor within the thermostat that decides how to adjust the heating or cooling.
5.  **Actuator:** Converts the control signal into a physical action that affects the plant.
    *   **Example:** The furnace or air conditioner compressor.
6.  **Plant/Process:** The system being controlled.
    *   **Example:** The room whose temperature is being regulated.
7.  **Sensor:** Measures the actual output of the plant and converts it into a feedback signal.
    *   **Example:** The temperature sensor (thermometer) in the room.
8.  **Feedback Signal:** The signal representing the actual output of the plant, fed back to the comparator.
    *   **Example:** The reading from the room temperature sensor.
9.  **Output:** The actual response of the system.
    *   **Example:** The actual temperature of the room.

**Characteristics of Closed-Loop Systems:**

*   **Accuracy:** Generally more accurate due to the ability to correct for errors.
*   **Self-Correction:** Can automatically compensate for disturbances and variations.
*   **Stability:** Can be made stable, but improper design can lead to instability (oscillations).
*   **Complexity:** More complex and expensive due to the addition of feedback components (sensors, comparators).
*   **Faster Response (potentially):** Can achieve desired outputs more quickly and reliably.
*   **Suitable for:** Systems where precision, accuracy, and disturbance rejection are critical.

**Examples:**

*   **Thermostat Controlling Room Temperature:** Measures room temperature (feedback), compares it to the setpoint, and turns the heating/cooling on or off to maintain the desired temperature. (CO3, CO7)
*   **Cruise Control in a Car:** Measures the car's speed (feedback), compares it to the set speed, and adjusts the engine throttle to maintain the speed. (CO7)
*   **Robot Arm Position Control:** Uses sensors (e.g., encoders) to determine the arm's current position, compares it to the desired position, and adjusts motor commands. (CO2, CO7)
*   **Autopilot System:** Maintains aircraft altitude, heading, and speed by using sensors and adjusting control surfaces.

**Textbook Reference:**

*   **Bolton, W. (7th ed.).** *Mechatronics: Electronic Control Systems in Mechanical and Electrical Engineering.* Provides detailed coverage of closed-loop systems, including feedback mechanisms, error detection, and various control strategies like PID control (Chapter 2, "Control Systems" and potentially later chapters on controller design).
*   **Onwubolu, G. C.** *Mechatronics: Principles and Applications.* Discusses the importance of feedback in achieving precise control and the components involved in closed-loop systems (Chapter 3, "Fundamentals of Control Systems").
*   **Shetty, D., & Kolk, R.** *Mechatronics System Design.* Will likely delve into the design aspects of closed-loop systems, including the selection of sensors and actuators for feedback, and the mathematical modeling of these systems (Chapters related to System Modeling and Control System Design).
*   **Rajput, R. K.** *A Text Book of Mechatronics.* Offers a foundational understanding of closed-loop systems, emphasizing the role of feedback in achieving desired performance and accuracy (Chapter 1, "Introduction to Mechatronics" and Chapter 2, "Sensors and Transducers").

---

### 4. Comparison: Open-Loop vs. Closed-Loop Control

| Feature        | Open-Loop Control System                  | Closed-Loop Control System                     |
| :------------- | :---------------------------------------- | :--------------------------------------------- |
| **Feedback**   | No feedback                               | Uses feedback                                  |
| **Accuracy**   | Lower, susceptible to disturbances        | Higher, can correct errors                     |
| **Complexity** | Simple                                    | Complex                                        |
| **Cost**       | Lower                                     | Higher                                         |
| **Reliability**| Less reliable for precise tasks           | More reliable for precise tasks                |
| **Calibration**| Heavily dependent on calibration          | Less dependent on calibration                  |
| **Stability**  | Generally stable                          | Can become unstable if not designed properly |
| **Example**    | Simple timer, toaster                     | Thermostat, cruise control, robot arm          |

---

### 5. Importance in Mechatronics

Understanding the distinction and elements of open-loop and closed-loop control is crucial in mechatronics because:

*   **System Design:** It dictates how a mechatronic system will be designed, including the selection of sensors, actuators, and controllers.
*   **Performance:** The choice between open and closed-loop control directly impacts the system's accuracy, responsiveness, and robustness.
*   **Automation:** Most sophisticated automation tasks in mechatronics require closed-loop control to achieve desired precision and adapt to changing conditions. (CO7)
*   **Mathematical Modeling:** The structure of the control system (open or closed-loop) forms the basis for mathematical modeling and analysis, allowing prediction of system behavior. (CO3)

---

### 6. Practice Questions

**Question 1:**

Identify the type of control system (open-loop or closed-loop) for each of the following scenarios and explain your reasoning.

a) A washing machine that runs for a fixed 30-minute cycle.
b) A self-driving car maintaining a set speed.
c) A coffee maker that stops brewing when a specific amount of water has passed through the coffee grounds.
d) A robot arm that moves to a predefined position without checking if it reached it.

**Answer 1:**

a) **Open-loop:** The washing machine runs for a fixed time regardless of how clean the clothes are. There is no feedback mechanism to check the cleanliness.
b) **Closed-loop:** The car's speed is continuously monitored by a sensor, compared to the set speed, and the engine throttle is adjusted accordingly.
c) **Closed-loop:** A sensor measures the amount of water brewed, providing feedback to stop the brewing process.
d) **Open-loop:** The robot arm moves to a position based on motor commands alone, without verifying its actual location via sensors.

---

**Question 2:**

A thermostat-controlled heating system for a room has the following components. Classify each component and determine if this is likely an open-loop or closed-loop system.

*   Room temperature sensor
*   Thermostat (setpoint and comparison logic)
*   Furnace
*   Fan to circulate air

**Answer 2:**

*   **Room temperature sensor:** Sensor (provides feedback)
*   **Thermostat:** Controller and Comparator
*   **Furnace:** Actuator
*   **Fan:** Actuator (part of the system being controlled)

This is a **closed-loop system**. The room temperature sensor provides feedback to the thermostat, which compares it to the setpoint and controls the furnace to maintain the desired temperature.

---

**Question 3:**

List two advantages and two disadvantages of a closed-loop control system compared to an open-loop control system.

**Answer 3:**

**Advantages of Closed-Loop:**

1.  **Higher Accuracy:** Can achieve and maintain the desired output with greater precision by compensating for errors and disturbances.
2.  **Reduced Sensitivity to Disturbances:** Can automatically counteract external factors that might affect the system's output.

**Disadvantages of Closed-Loop:**

1.  **Increased Complexity:** Requires additional components like sensors and comparators, making the system design more intricate.
2.  **Higher Cost:** The added components and complexity typically lead to a higher overall cost of the system.

---

**Question 4:**

Explain the role of the "error signal" in a closed-loop control system and how it is generated.

**Answer 4:**

The **error signal** represents the difference between the desired output (reference input or setpoint) and the actual output of the system (measured by the sensor and fed back). It is generated by a **comparator** (often a summing junction) where the reference input and the feedback signal are subtracted:

$Error = Reference\ Input - Feedback\ Signal$

The error signal is crucial because it drives the controller. The controller uses this error signal to calculate the appropriate control action to send to the actuator, aiming to reduce the error to zero or a very small value.

---

### 7. Important Points to Remember

*   **Open-loop systems are "blind" to their output.** They act based on a predefined sequence or timing.
*   **Closed-loop systems "see" their output** and use this information to adjust their actions.
*   **Feedback is the defining characteristic of closed-loop systems.**
*   **Accuracy and disturbance rejection are the primary benefits of closed-loop control.**
*   **Simplicity and cost are the primary benefits of open-loop control.**
*   **The choice between open and closed-loop depends on the application's requirements for accuracy, cost, and complexity.**
*   Understanding these system types is fundamental to modeling and designing effective mechatronic systems. (CO3)

---

This concludes the study notes for "Typical Elements of Open and Closed Loop Control Systems." Remember to consult your textbooks for more detailed explanations and examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
