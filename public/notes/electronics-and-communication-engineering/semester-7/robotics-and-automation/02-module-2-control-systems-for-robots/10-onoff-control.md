---
title: "On/off control."
subject: "ROBOTICS AND AUTOMATION"
module: "Module 2: Control Systems for Robots"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff191"
status: "completed"
scrapedAt: "2026-05-23T18:09:46.281Z"
---
# ROBOTICS AND AUTOMATION - Module 2: Control Systems for Robots

## Topic: On/Off Control

---

### 1. Introduction to Control Systems in Robotics

**Key Concept:** Control systems are the "brains" of a robot, responsible for making decisions and actuating the robot's movements to achieve desired tasks. They regulate the robot's behavior based on sensor feedback and internal programming.

**Relevance to Course Outcomes:**
*   **CO3 (Knowledge Level: K2):** Implement various types of controllers and explain their impact on robot motion control. On/off control is a fundamental controller type that forms the basis for understanding more complex control strategies.

**Overview of Control Strategies:**
Robotic control systems can be broadly categorized into:
*   **Open-Loop Control:** The control action is independent of the output. The system operates based on pre-programmed commands without considering the actual state of the robot or its environment.
*   **Closed-Loop Control (Feedback Control):** The control action is dependent on the output. Sensor feedback is used to measure the actual state of the robot and compare it with the desired state. Any difference (error) is used to adjust the control action.

**Important Point to Remember:** On/off control, while simple, is a form of closed-loop control because it relies on sensing the current state to make a decision.

---

### 2. Understanding On/Off Control (Two-Position Control)

**Key Concept:** On/off control, also known as two-position control or bang-bang control, is the simplest form of feedback control. The actuator (e.g., a motor, heater) is either fully ON or fully OFF. There is no proportional or intermediate state.

**Definition:** In on/off control, the controller output switches between two extreme states based on whether the measured variable (e.g., position, temperature) crosses a specific threshold.

**How it Works:**
1.  **Desired Setpoint (SP):** The target value for the controlled variable.
2.  **Measured Variable (PV - Process Variable):** The actual current value of the variable being controlled, measured by a sensor.
3.  **Error (e):** The difference between the setpoint and the measured variable (e = SP - PV).
4.  **Switching Logic:**
    *   If the PV goes above a certain threshold (often related to the SP), the controller turns the actuator OFF.
    *   If the PV goes below a certain threshold (often related to the SP), the controller turns the actuator ON.

**Hysteresis (Deadband):**
**Key Concept:** To prevent rapid switching (chattering) of the actuator when the measured variable hovers around the setpoint, a hysteresis band (or deadband) is often introduced.

**Definition:** Hysteresis is the difference between the upper and lower switching points.

**Mechanism:**
*   **Upper Switching Point (SP + Hysteresis/2):** If the PV crosses this point (from below), the actuator turns OFF.
*   **Lower Switching Point (SP - Hysteresis/2):** If the PV crosses this point (from above), the actuator turns ON.

**Benefits of Hysteresis:**
*   Reduces wear and tear on the actuator by preventing frequent switching.
*   Improves system stability by avoiding oscillations around the setpoint.

**Example:** Imagine controlling the temperature of a simple robot gripper.
*   **Setpoint:** 40°C
*   **Hysteresis:** 2°C
*   **Switching ON temperature:** 39°C
*   **Switching OFF temperature:** 41°C

If the gripper temperature drops to 39°C, the heating element turns ON. It stays ON until the temperature reaches 41°C, at which point it turns OFF. The temperature will then fluctuate between 39°C and 41°C.

**Textbook Reference:**
*   **Groover, MP (1987) - Industrial Robotics:** While not explicitly detailing on/off control as a core chapter, Groover's discussion on actuators and simple control loops in industrial robots implies the use of such basic control for binary states (e.g., gripper open/closed).

---

### 3. Application of On/Off Control in Robotics

**Key Concept:** On/off control is suitable for simple tasks where precise control is not critical, or for controlling binary states of robotic components.

**Examples:**

*   **Gripper Control:**
    *   **Scenario:** A robotic arm needs to pick up an object. The gripper has a simple actuator (e.g., pneumatic cylinder, DC motor with limit switches).
    *   **On/Off Logic:**
        *   **Close Gripper:** Send a "ON" signal to the closing actuator.
        *   **Open Gripper:** Send a "ON" signal to the opening actuator.
    *   **Feedback:** Limit switches can provide feedback. A "gripper closed" limit switch signals when the jaws have made contact and stopped moving, allowing the closing actuator to be turned OFF. Similarly, an "open limit switch" can be used.
    *   **Reference:** **Craig, JJ (2005) - Introduction to Robotics:** Craig often discusses actuators and end-effectors. Simple gripper mechanisms often rely on this on/off actuation principle.

*   **Simple Position Control (e.g., End-Stop):**
    *   **Scenario:** A robotic joint needs to move to a specific position and stop. A limit switch can be used as the sensor.
    *   **On/Off Logic:**
        *   **Motor ON:** When the joint is away from the target position.
        *   **Motor OFF:** When the limit switch is triggered, indicating the desired position is reached (or an end-stop is hit).
    *   **Limitations:** This is very crude control. The robot will likely overshoot the desired position slightly before the limit switch is hit due to momentum.

*   **Actuator Enable/Disable:**
    *   **Scenario:** To prevent a motor from being powered when it's not needed or when a safety condition is met.
    *   **On/Off Logic:** A digital signal from a higher-level controller can simply enable or disable the power to the actuator.

**Relation to Course Outcomes:**
*   **CO1 (Knowledge Level: K2):** Describe the basic components, structural configurations, and degrees of freedom (DOF) of robots. On/off control is often used to operate the basic components like grippers and simple actuators.
*   **CO4 (Knowledge Level: K2):** Identify and compare different types of sensors and actuators used in robotic systems. Limit switches, proximity sensors, and simple ON/OFF actuators (like solenoids or relays) are key components in on/off control systems.

---

### 4. Advantages and Disadvantages of On/Off Control

**Advantages:**

*   **Simplicity:** Easy to design, implement, and understand.
*   **Low Cost:** Requires less complex hardware compared to proportional or PID controllers.
*   **Robustness to Noise:** Less susceptible to minor sensor noise around the setpoint due to hysteresis.
*   **Suitable for Binary Tasks:** Effective for controlling devices that have only two states (e.g., on/off valves, grippers).

**Disadvantages:**

*   **Oscillations (Limit Cycling):** The system will continuously cycle around the setpoint, causing fluctuations in the controlled variable. This is inherent in on/off control, even with hysteresis.
*   **Overshoot and Undershoot:** The system often overshoots the desired setpoint when turning OFF and undershoots when turning ON, especially without proper hysteresis tuning.
*   **Poor Precision:** Not suitable for applications requiring high accuracy or smooth control.
*   **Wear and Tear:** Frequent switching, even with hysteresis, can lead to wear on mechanical components like relays and contactors.
*   **Limited Adaptability:** Cannot adapt to changing system dynamics or disturbances effectively.

**Textbook Reference:**
*   **Spong, Hutchinson, Vidyasagar (2005) - Robot Modeling and Control:** This book, while focusing on advanced control, often implicitly contrasts simpler methods with more sophisticated ones. The limitations of on/off control (like oscillations) are a common starting point for introducing more advanced control techniques.

---

### 5. Comparison with Other Control Techniques

**Key Concept:** On/off control is the most basic feedback controller. More advanced controllers offer better performance in terms of precision, speed, and stability.

| Feature           | On/Off Control                                    | Proportional (P) Control                         | Proportional-Integral-Derivative (PID) Control     |
| :---------------- | :------------------------------------------------ | :----------------------------------------------- | :------------------------------------------------- |
| **Controller Output** | Two states: Fully ON or Fully OFF.              | Proportional to the error (e). Output = Kp * e.  | Combination of proportional, integral, and derivative of the error. |
| **Precision**     | Low. Constant oscillations around setpoint.       | Better than on/off, but can have steady-state error. | High. Can eliminate steady-state error and provide fast response. |
| **Response Speed**| Can be fast to react, but may overshoot/undershoot. | Generally faster than on/off with proper tuning. | Can be very fast and stable with proper tuning.    |
| **Complexity**    | Very Low.                                         | Low to Medium.                                   | Medium to High.                                    |
| **Stability**     | Can be stable with hysteresis, but oscillates.   | Can be unstable if Kp is too high.               | Can achieve good stability with proper tuning.     |
| **Actuator Wear** | High (potential for frequent switching).          | Lower than on/off.                               | Can be managed through tuning.                     |
| **Applications**  | Simple tasks, binary functions (e.g., gripper).   | Temperature control, simple motor speed control. | Motor control, process control, robotics (most common). |

**Relevance to Course Outcomes:**
*   **CO3 (Knowledge Level: K2):** Implement various types of controllers and explain their impact on robot motion control. Understanding on/off control helps appreciate why other controllers (like PID) are necessary for more demanding robotic applications.

---

### 6. Practice Questions and Exercises

**Question 1:**
What is the primary characteristic of on/off control?
a) Proportional response to error
b) Continuous adjustment of output
c) Two discrete states of output
d) Reliance on future error prediction

**Answer:** c) Two discrete states of output

**Question 2:**
Why is hysteresis introduced into an on/off control system?
a) To increase the speed of response.
b) To prevent rapid switching (chattering) of the actuator.
c) To improve the accuracy of the setpoint.
d) To eliminate the need for sensors.

**Answer:** b) To prevent rapid switching (chattering) of the actuator.

**Question 3:**
Consider a simple robotic arm gripper controlled by on/off actuation. The gripper needs to close to a specific force. If you used only a simple on/off control without any force feedback, what would be a likely problem?

**Answer:** The gripper would either not close enough to securely hold an object (under-actuation) or would crush the object if it's fragile (over-actuation), as there's no way to regulate the applied force to an intermediate level.

**Question 4 (Conceptual):**
For which of the following robotic tasks would on/off control be *least* suitable?
a) Turning a robotic vacuum cleaner's suction motor on or off.
b) Controlling the angle of a robot arm's shoulder joint for precise trajectory following.
c) Activating a simple pneumatic gripper to pick up a block.
d) Turning a light on a workbench on or off.

**Answer:** b) Controlling the angle of a robot arm's shoulder joint for precise trajectory following. (This requires smooth, accurate control, which on/off control cannot provide.)

**Question 5 (Design Scenario):**
You are designing a simple robot that needs to maintain a minimum distance from a wall. You have an ultrasonic sensor and a single DC motor that can drive a wheel. Describe how you might use on/off control to achieve this. What are the potential drawbacks of this approach?

**Answer:**
*   **Control Logic:**
    *   If the distance measured by the ultrasonic sensor is **less than** a desired minimum distance (e.g., 10 cm), turn the motor **ON** to move the robot away from the wall.
    *   If the distance measured is **greater than or equal to** the desired minimum distance, turn the motor **OFF**.
*   **Hysteresis (Optional but recommended):** To avoid constant switching, you could introduce a small deadband. For example, turn ON at 10 cm, and turn OFF at 12 cm.
*   **Potential Drawbacks:**
    *   **Oscillations:** The robot will likely oscillate back and forth around the minimum distance. It will move away, stop, drift closer due to inertia, and then move away again.
    *   **Poor Accuracy:** The robot will never maintain an *exact* distance; it will always fluctuate.
    *   **Jerky Motion:** The movement will be stop-and-go rather than smooth.

---

### 7. Important Points to Remember

*   **On/off control (two-position control) is the simplest form of feedback control.**
*   **It switches an actuator between fully ON and fully OFF states.**
*   **Hysteresis (or deadband) is crucial to prevent rapid switching and reduce wear.**
*   **It is suitable for tasks requiring binary actions or where precision is not critical.**
*   **Key limitations include oscillations (limit cycling) and poor precision.**
*   **It's a foundational concept for understanding more advanced control strategies in robotics.**

---
This concludes the study notes for On/Off Control in Module 2. Please refer to the textbooks for more in-depth theoretical background and mathematical formulations.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
