---
title: "Proportional plus integral plus derivative (PID) control."
subject: "ROBOTICS AND AUTOMATION"
module: "Module 2: Control Systems for Robots"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff196"
status: "completed"
scrapedAt: "2026-05-23T18:09:50.024Z"
---
# ROBOTICS AND AUTOMATION: Module 2 - Control Systems for Robots

## Topic: Proportional-Integral-Derivative (PID) Control

---

### 1. Introduction to Control Systems in Robotics

Control systems are fundamental to the operation of robots. They are responsible for ensuring that a robot's actions are performed accurately, efficiently, and safely according to a desired trajectory or setpoint. In Module 2, we explore various control strategies, with a particular focus on PID control, a widely used and effective method for regulating robot motion.

**Relevant Course Outcome:**
*   **CO3:** Implement various types of controllers and explain their impact on robot motion control (Knowledge Level: K2)

---

### 2. The Need for Robot Control

Robots operate in dynamic environments and are subject to various disturbances. Without effective control, a robot's actual output (e.g., joint position, end-effector velocity) will deviate significantly from its desired output. This deviation, known as **error**, needs to be minimized and eliminated.

**Key Concepts:**
*   **System:** The robot itself, including its actuators, sensors, and mechanical structure.
*   **Controller:** The algorithm or device that dictates how the actuators should respond.
*   **SetPoint (Reference):** The desired value for a particular robot variable (e.g., desired joint angle).
*   **Process Variable (Output):** The actual measured value of the robot variable (e.g., actual joint angle).
*   **Error:** The difference between the setpoint and the process variable ($e(t) = \text{Setpoint} - \text{Process Variable}$).
*   **Disturbances:** External factors that affect the robot's behavior (e.g., friction, payload variations, external forces).

**Example:** Imagine a robot arm trying to reach a specific joint angle. Without a controller, it might overshoot, oscillate, or simply not reach the target due to inertia and friction.

---

### 3. Proportional-Integral-Derivative (PID) Control Explained

PID control is a feedback control loop mechanism widely employed in industrial automation and robotics. It continuously calculates an **error value** as the difference between a desired setpoint and a measured process variable. The controller attempts to minimize the error by adjusting the control output.

The PID controller algorithm produces a control signal, $u(t)$, which is a weighted sum of three terms: Proportional, Integral, and Derivative.

$u(t) = K_p e(t) + K_i \int_0^t e(\tau) d\tau + K_d \frac{de(t)}{dt}$

Where:
*   $u(t)$ is the control output (e.g., voltage to a motor, force applied).
*   $e(t)$ is the error at time $t$.
*   $K_p$ is the **Proportional Gain**.
*   $K_i$ is the **Integral Gain**.
*   $K_d$ is the **Derivative Gain**.

**Textbook Reference:**
*   Craig, "Introduction to Robotics: Mechanics and Control," Chapter 7 (Feedback Control). This chapter likely discusses feedback control concepts and may introduce PID as a common implementation.
*   Spong, Hutchinson, & Vidyasagar, "Robot Modeling and Control," Chapter 5 (Control of Robot Manipulators). This chapter will delve deeper into control strategies for robotic systems, including PID.

---

### 4. Components of PID Control

#### 4.1. Proportional (P) Term

The proportional term is directly proportional to the current error. As the error increases, the control output from this term also increases proportionally.

*   **Function:** Reacts to the current error.
*   **Effect:**
    *   Provides a control output that is proportional to the current error.
    *   Reduces the error magnitude.
    *   Can lead to **steady-state error** (also known as offset) if used alone, meaning the system may not reach the exact setpoint.
    *   Faster response.

$P(t) = K_p e(t)$

**Example:** If a joint is 10 degrees away from the setpoint, and $K_p = 2$, the proportional term will contribute $2 \times 10 = 20$ units to the control output. If the error becomes 5 degrees, the contribution drops to $2 \times 5 = 10$ units.

#### 4.2. Integral (I) Term

The integral term is proportional to the integral of the error over time. This term accumulates past errors.

*   **Function:** Eliminates steady-state error.
*   **Effect:**
    *   Integrates the error over time, summing up past errors.
    *   If there's a persistent error (even a small one), the integral term will continue to grow, increasing the control output until the error is eliminated.
    *   Can lead to **overshoot** and **oscillations** if $K_i$ is too high.
    *   Slows down the response compared to P-only control.

$I(t) = K_i \int_0^t e(\tau) d\tau$

**Example:** If a joint is consistently 1 degree off the target for a prolonged period, the integral term will gradually increase the control output to push the joint towards the setpoint, eventually eliminating that persistent 1-degree error.

#### 4.3. Derivative (D) Term

The derivative term is proportional to the rate of change of the error. It anticipates future error by looking at how fast the error is changing.

*   **Function:** Dampens oscillations and improves stability.
*   **Effect:**
    *   Reacts to the rate of change of the error.
    *   If the error is decreasing rapidly (meaning the system is approaching the setpoint quickly), the derivative term will oppose this motion, slowing down the response.
    *   Helps to reduce overshoot and oscillations.
    *   Can amplify **noise** in the system if the error signal is noisy.
    *   Can make the system more sensitive to disturbances.

$D(t) = K_d \frac{de(t)}{dt}$

**Example:** If the joint is moving rapidly towards the setpoint and the error is shrinking fast, the derivative term will apply a counteracting force, preventing it from overshooting the target. Conversely, if the error is increasing rapidly, it will add to the control output to correct it.

---

### 5. How PID Gains ($K_p, K_i, K_d$) Affect Robot Motion Control

Tuning the PID gains is crucial for achieving desired robot performance. Different combinations of gains result in different responses.

| Gain   | Effect on Rise Time | Effect on Settling Time | Effect on Overshoot | Effect on Steady-State Error |
| :----- | :------------------ | :---------------------- | :------------------ | :--------------------------- |
| $K_p$  | Decrease            | Increase                | Increase            | Decrease                     |
| $K_i$  | Increase            | Increase                | Increase            | Eliminate                    |
| $K_d$  | Decrease            | Decrease                | Decrease            | No effect                    |

**Important Note:** These effects are general guidelines. The actual impact can be complex and interdependent.

**Textbook Reference:**
*   Groover, "Industrial Robotics," likely discusses control methods for robot manipulators and the tuning of control parameters.
*   Ghoshal, "Robotics Fundamental Concepts & Analysis," may cover control architectures and performance metrics relevant to PID.

---

### 6. PID Control in Robot Joints (Example Scenario)

Consider controlling a single joint of a robotic arm, aiming to move it to a specific angle.

1.  **Setpoint:** Desired joint angle ($\theta_{desired}$).
2.  **Process Variable:** Actual measured joint angle ($\theta_{actual}$) from a joint encoder.
3.  **Error:** $e(t) = \theta_{desired} - \theta_{actual}$.
4.  **Controller:** PID controller calculates $u(t)$.
5.  **Actuator:** Motor applies torque or force based on $u(t)$.

**Tuning Scenarios:**

*   **Only $K_p$:** The joint will move towards the setpoint, but likely will not reach it precisely (steady-state error) and might oscillate.
*   **$K_p$ and $K_i$:** The steady-state error will be eliminated. However, increasing $K_i$ might cause more overshoot and oscillations.
*   **$K_p$, $K_i$, and $K_d$:** The derivative term helps to dampen oscillations and reduce overshoot, leading to a more stable and accurate response, provided $K_d$ is not too high (which can amplify noise).

---

### 7. PID Tuning Methods

Tuning PID controllers can be done manually or using automated methods. The goal is to find values of $K_p$, $K_i$, and $K_d$ that provide the best performance for the specific robot system.

#### 7.1. Manual Tuning (Trial and Error)

A common approach:

1.  **Set $K_i$ and $K_d$ to zero.** Increase $K_p$ until the system starts to oscillate with a steady amplitude.
2.  **Increase $K_i$.** This will usually eliminate steady-state error but might introduce more oscillation.
3.  **Increase $K_d$.** This will dampen oscillations and reduce overshoot.
4.  **Iterate.** Fine-tune all three parameters to achieve the desired performance (e.g., fast response, minimal overshoot, no oscillations).

#### 7.2. Ziegler-Nichols Method

A more systematic approach:

*   **Closed-Loop Method:**
    1.  Set $K_i$ and $K_d$ to zero.
    2.  Increase $K_p$ until the system reaches a sustained oscillation (ultimate gain, $K_u$). Note the period of oscillation ($T_u$).
    3.  Calculate PID gains using the following table:

        | Controller | $K_p$     | $T_i$     | $T_d$     |
        | :--------- | :-------- | :-------- | :-------- |
        | P          | $0.5 K_u$ | N/A       | N/A       |
        | PI         | $0.45 K_u$| $T_u/1.2$ | N/A       |
        | PID        | $0.6 K_u$ | $T_u/2$   | $T_u/8$   |

    Where $K_i = K_p / T_i$ and $K_d = K_p \times T_d$.

*   **Open-Loop Method (Reaction Curve):** This method is less common for robots and more suited for systems with a clear "S-shaped" reaction curve.

**Caution:** Ziegler-Nichols provides a starting point and often requires further fine-tuning.

---

### 8. PID Implementation in Robotic Systems

*   **Joint-Space Control:** PID is typically applied independently to each joint of a robot manipulator. The controller for each joint calculates the required motor torque/force based on the joint's error.
*   **End-Effector Control:** While PID can be applied directly to end-effector position/orientation, this usually involves more complex transformations (e.g., Jacobian) to relate end-effector errors to joint errors. Often, the joint-space PID is used, and the robot's trajectory is planned in joint space to achieve the desired end-effector motion.

**Textbook Reference:**
*   Craig, "Introduction to Robotics: Mechanics and Control," Chapter 7 likely details how feedback control is implemented in robotic manipulators, including the role of sensors and actuators.
*   Spong, Hutchinson, & Vidyasagar, "Robot Modeling and Control," Chapter 5 will provide detailed mathematical formulations for controlling robot manipulators, which could include PID implementations.

---

### 9. Advantages and Disadvantages of PID Control

#### 9.1. Advantages

*   **Simplicity:** Relatively easy to understand and implement.
*   **Widespread Use:** Proven effectiveness in many industrial applications.
*   **Robustness:** Can handle a range of system dynamics and disturbances to some extent.
*   **Effectiveness:** Can achieve good performance with proper tuning.
*   **No Model Required (for basic tuning):** Manual tuning can be done without a precise mathematical model of the robot.

#### 9.2. Disadvantages

*   **Tuning:** Finding optimal $K_p$, $K_i$, and $K_d$ can be time-consuming and challenging, especially for complex systems.
*   **Performance Limitations:** May not be optimal for highly nonlinear systems or systems with significant time delays.
*   **Sensitivity to Noise:** The derivative term can amplify noise in the sensor readings, leading to erratic control signals.
*   **Integral Windup:** If the error remains large for an extended period (e.g., actuator saturation), the integral term can grow very large, leading to excessive overshoot when the error eventually decreases. Techniques like anti-windup are used to mitigate this.

---

### 10. Advanced PID Concepts (Brief Mention)

*   **Derivative Filtering:** To combat the noise amplification from the derivative term.
*   **Anti-Windup:** To prevent integral windup when the actuator is saturated.
*   **Gain Scheduling:** Varying PID gains based on the operating point of the robot (e.g., joint velocity or position).
*   **Cascade Control:** Using multiple PID controllers in a hierarchical structure.

---

### 11. Key Points to Remember

*   PID control is a closed-loop feedback mechanism used to minimize error.
*   The three terms are Proportional (present error), Integral (past error), and Derivative (future error).
*   $K_p$ affects response speed and steady-state error.
*   $K_i$ eliminates steady-state error but can cause overshoot.
*   $K_d$ reduces overshoot and oscillations but can amplify noise.
*   Tuning PID gains is crucial for optimal robot performance.
*   PID is widely used for controlling individual robot joints.

---

### 12. Practice Questions and Exercises

**Question 1 (CO3, K2):**
Explain the role of each term (Proportional, Integral, Derivative) in a PID controller for robot motion control. What is the primary benefit of adding each term?

**Answer 1:**
*   **Proportional (P):** Reacts to the current error. Its benefit is to provide a control output proportional to the error, speeding up the response and reducing the magnitude of the error.
*   **Integral (I):** Accumulates past errors. Its primary benefit is to eliminate steady-state error, ensuring the robot reaches the exact setpoint over time.
*   **Derivative (D):** Reacts to the rate of change of the error. Its primary benefit is to dampen oscillations and reduce overshoot by anticipating future errors.

**Question 2 (CO3, K2):**
If a robot joint is consistently stopping slightly short of its target position, which component of the PID controller is likely insufficient, and why? How would you adjust the corresponding gain?

**Answer 2:**
The **Integral (I) term** is likely insufficient or its gain ($K_i$) is too low. This is because the integral term accumulates past errors, and a consistent stop short of the target represents a steady-state error. To address this, you would **increase the integral gain ($K_i$)**.

**Question 3 (CO3, K2):**
Describe a scenario where a high derivative gain ($K_d$) in a robot's joint controller might be detrimental, and suggest a way to mitigate this issue.

**Answer 3:**
A high derivative gain ($K_d$) can be detrimental if the sensor readings for the joint position are noisy. The derivative term amplifies the rate of change of the error. If the error signal is noisy, its rate of change will be very erratic, leading to large, fluctuating control signals that can cause jerky motion or even instability.
**Mitigation:** To mitigate this, you can **implement a derivative filter** to smooth out the error signal before calculating the derivative, or **reduce the value of $K_d$**.

**Question 4 (CO1, CO3, K2):**
You are controlling a robotic arm to pick up an object. The arm needs to move to a precise position. Briefly explain how a PID controller would be used to ensure the arm's joints reach their target angles accurately. Mention the role of sensors.

**Answer 4:**
A PID controller would be used for each joint of the robotic arm.
1.  **Setpoint:** The desired joint angle for the arm to reach the pickup position.
2.  **Process Variable:** The actual joint angle, measured by a **joint encoder (a type of sensor)**.
3.  **Error Calculation:** The controller calculates the difference between the desired and actual joint angle.
4.  **PID Calculation:** Based on this error, the PID controller computes a control signal (e.g., torque or voltage for the joint's motor actuator).
    *   The **P term** reacts to the current angular error.
    *   The **I term** integrates past errors to eliminate any consistent deviation from the target angle.
    *   The **D term** anticipates how quickly the joint is approaching the target and dampens any overshoot or oscillations.
5.  **Actuation:** The motor uses the control signal to adjust the joint's position. This feedback loop continues until the error is minimized, ensuring the joint reaches its target angle accurately.

---

### 13. Connection to Course Outcomes

*   **CO1: Describe the basic components, structural configurations, and degrees of freedom (DOF) of robots. (Knowledge Level: K2)**
    *   While PID control itself doesn't directly describe these, understanding how PID controls joint motion implies knowledge of joints, actuators, and sensors (components) and how they work together in a configuration.
*   **CO2: Apply forward and inverse kinematics for different types of robotic manipulators. (Knowledge Level: K3)**
    *   PID control is often used in conjunction with kinematic calculations. For instance, to move the end-effector to a specific pose, inverse kinematics calculates the required joint angles. PID controllers then ensure each joint reaches these calculated angles.
*   **CO3: Implement various types of controllers and explain their impact on robot motion control (Knowledge Level: K2)**
    *   This entire topic is directly aligned with CO3, focusing on the implementation and impact of PID controllers.
*   **CO4: Identify and compare different types of sensors and actuators used in robotic systems (Knowledge Level: K2)**
    *   PID control relies heavily on sensors (like encoders) to measure the process variable (joint position) and actuators (like motors) to implement the control action. This topic implicitly highlights their role.
*   **CO5: Describe the basics of robot cell layouts considering multiple robots and machine interfaces. (Knowledge Level: K2)**
    *   While not a direct focus, effective control systems like PID are essential for robots to perform tasks within a cell and interact with other machines reliably.

---

This concludes Module 2, Topic: PID Control. Understanding these concepts is crucial for developing robust and accurate robot control systems.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
