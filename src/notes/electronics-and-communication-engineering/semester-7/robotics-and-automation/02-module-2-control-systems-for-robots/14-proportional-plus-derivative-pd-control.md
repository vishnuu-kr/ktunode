---
title: "Proportional plus derivative (PD) control."
subject: "ROBOTICS AND AUTOMATION"
module: "Module 2: Control Systems for Robots"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff195"
status: "completed"
scrapedAt: "2026-05-23T18:09:49.223Z"
---
# ROBOTICS AND AUTOMATION: Module 2 - Control Systems for Robots

## Topic: Proportional-Derivative (PD) Control

---

### Introduction to PD Control

PD control is a fundamental feedback control strategy widely used in robotics to regulate the position, velocity, or other states of a robotic system. It aims to improve the system's response by considering both the current error and the rate of change of the error. This helps to reduce overshoot and oscillations, leading to faster and more stable convergence to the desired setpoint.

This topic aligns with **Course Outcome 3 (CO3)**: *Implement various types of controllers and explain their impact on robot motion control (Knowledge Level: K2)*. Understanding PD control is crucial for comprehending how robotic systems achieve precise and stable movements.

---

### 1. Fundamentals of Feedback Control

Before delving into PD control, it's essential to understand the basics of feedback control in robotics.

*   **Goal:** To make a robotic system's output (e.g., joint angle, end-effector position) follow a desired reference input (setpoint) despite disturbances and system uncertainties.
*   **Basic Feedback Loop:**
    *   **Reference Input ($r(t)$):** The desired state (e.g., target joint angle).
    *   **System Output ($y(t)$):** The actual state of the robot (e.g., current joint angle).
    *   **Error ($e(t)$):** The difference between the reference input and the system output: $e(t) = r(t) - y(t)$.
    *   **Controller:** Processes the error signal and generates a control signal ($u(t)$).
    *   **Actuator:** Receives the control signal and applies a force or torque to the robot's joints.
    *   **Robot System:** The physical robot arm and its dynamics.
    *   **Sensor:** Measures the system's output and feeds it back to the controller.

*   **Importance of Feedback:** Feedback allows the controller to continuously monitor the system's performance and make adjustments to correct deviations from the desired state. This is vital for achieving accurate and robust robot motion.

**Reference:** *Groover, M.P. (1987). Industrial Robotics. McGraw Hill.* Chapter on feedback control systems.
**Reference:** *Spong, S.H., Hutchinson, S., & Vidyasagar, M. (2006). Robot Modeling and Control. Wiley.* Chapter on feedback control principles.

---

### 2. Proportional (P) Control

Proportional control is the simplest form of feedback control. The control signal is directly proportional to the current error.

*   **Control Signal:** $u_p(t) = K_p \cdot e(t)$
    *   $K_p$: Proportional Gain (a tunable parameter).
*   **Effect:**
    *   Larger $K_p$ leads to a stronger corrective action for a given error.
    *   Reduces the magnitude of the error.
    *   Can significantly improve the speed of response.
*   **Limitations:**
    *   **Steady-State Error (Offset):** P control alone cannot eliminate steady-state error. For a constant non-zero error, the control signal will be constant, and if this constant control signal is not enough to overcome friction or gravity, the system will settle at a position slightly off the target. This is illustrated in many examples in Craig's textbook when discussing PID control.
    *   **Overshoot and Oscillations:** If $K_p$ is too high, the system may overshoot the target and oscillate.

**Example:** Imagine a robot arm trying to reach a specific angle. If the arm is 5 degrees away from the target, P control will apply a torque proportional to these 5 degrees. If it's 10 degrees away, it applies twice the torque.

**Reference:** *Craig, J.J. (2005). Introduction to Robotics: Mechanics and Control. Pearson Education.* Sections discussing basic control laws.

---

### 3. Derivative (D) Control

Derivative control aims to anticipate future error by considering the rate of change of the error.

*   **Control Signal:** $u_d(t) = K_d \cdot \frac{de(t)}{dt}$
    *   $K_d$: Derivative Gain (a tunable parameter).
*   **Effect:**
    *   **Dampens Oscillations and Overshoot:** When the error is decreasing rapidly (approaching the setpoint), the derivative term becomes negative, effectively slowing down the system and preventing it from overshooting. Conversely, if the error is increasing, the derivative term is positive, providing an accelerating force.
    *   **Improves Stability:** By adding damping, derivative control can make the system more stable.
    *   **Reduces Settling Time:** Helps the system settle faster.
*   **Limitations:**
    *   **Sensitive to Noise:** The derivative of noisy sensor readings can be very large, leading to erratic control signals. This is a significant practical challenge.
    *   **Doesn't Affect Steady-State Error:** The derivative of a constant error is zero, so derivative control alone doesn't eliminate steady-state error.

**Example:** If the robot arm is moving towards the target and the error is decreasing rapidly, the derivative term will be negative, acting as a brake to slow down the arm as it gets close. If it's moving away from the target, the derivative term will be positive, pushing it back.

**Reference:** *Spong, S.H., Hutchinson, S., & Vidyasagar, M. (2006). Robot Modeling and Control. Wiley.* Discusses the role of derivative action in reducing transient response.

---

### 4. Proportional-Derivative (PD) Control

PD control combines the benefits of proportional and derivative control.

*   **Control Signal:** $u_{pd}(t) = K_p \cdot e(t) + K_d \cdot \frac{de(t)}{dt}$
    *   $K_p$: Proportional Gain.
    *   $K_d$: Derivative Gain.

*   **How it Works:**
    *   The **proportional term** provides a control action proportional to the current error, driving the system towards the setpoint.
    *   The **derivative term** senses the rate of change of the error. If the error is decreasing quickly, it acts to dampen the motion, reducing overshoot and oscillations. If the error is increasing, it acts to accelerate the system back towards the setpoint.

*   **Benefits:**
    *   **Faster Response:** Inherits the speed improvement from the P term.
    *   **Reduced Overshoot:** The D term actively combats overshoot.
    *   **Improved Stability:** The damping effect of the D term enhances stability.
    *   **Faster Settling Time:** The combination leads to quicker convergence.

*   **Limitations:**
    *   **Still may have Steady-State Error:** PD control alone does not eliminate steady-state error. The P term is responsible for reducing the steady-state error, but it's the D term that helps with the transient response.
    *   **Sensitivity to Noise (from D term):** The derivative component remains susceptible to sensor noise.

**Impact on Robot Motion Control (CO3):** PD controllers are commonly used for controlling individual robot joints. By tuning $K_p$ and $K_d$, engineers can achieve desired performance characteristics such as quick movement to a target angle with minimal overshoot. For example, when a robot arm needs to move to a specific pose, PD control on each joint can ensure smooth and accurate execution of the trajectory.

**Reference:** *Craig, J.J. (2005). Introduction to Robotics: Mechanics and Control. Pearson Education.* Chapter 3 provides detailed analysis of PD control and its effects on system dynamics.
**Reference:** *Ghoshal, A. (2006). Robotics: Fundamental Concepts & Analysis. Oxford University Press.* Discusses feedback control mechanisms for robot joints.

---

### 5. Tuning PD Controllers

Tuning the $K_p$ and $K_d$ gains is crucial for achieving optimal performance. This is often an iterative process.

*   **Tuning Strategy (General):**
    1.  **Start with $K_d = 0$:** Tune $K_p$. Increase $K_p$ until the system responds quickly but starts to oscillate around the setpoint. Then, reduce $K_p$ slightly.
    2.  **Introduce $K_d$:** With a reasonable $K_p$, gradually increase $K_d$. The derivative term should reduce the oscillations and overshoot observed with just P control.
    3.  **Refine:** Adjust both $K_p$ and $K_d$ to achieve the desired balance between speed of response, overshoot, and settling time.

*   ** Ziegler-Nichols Method (Mentioned in some control texts for PID, but principles apply):** While more formally used for PID, the spirit of tuning involves observing the system's response to step inputs and making adjustments based on overshoot and oscillations.

**Important Point:** The optimal tuning parameters are dependent on the specific robot dynamics (mass, inertia, friction, etc.) and the desired performance.

---

### 6. Applications of PD Control in Robotics

*   **Joint Position Control:** PD controllers are very common for controlling individual robot joint angles. A DC motor driving a joint can be controlled by a PD controller that aims to keep the joint at a desired angle.
*   **End-Effector Position/Orientation Control (Indirectly):** By controlling individual joints, the overall end-effector position and orientation can be indirectly controlled.
*   **Velocity Control:** PD controllers can also be used to control the velocity of a joint.

**Example (Joint Position Control):** Consider a SCARA robot arm. A PD controller can be implemented for each revolute joint to ensure that the end-effector can reach a desired $(x, y)$ position accurately and quickly. The controller would take the error between the desired joint angle and the actual joint angle, compute the control torque using the PD law, and apply it to the motor.

**Reference:** *Groover, M.P. (1987). Industrial Robotics. McGraw Hill.* Provides examples of servo control for robot joints.

---

### 7. Practical Considerations and Limitations

*   **Noise Sensitivity:** As mentioned, the derivative term is highly sensitive to noise. Filtering the error signal before differentiation or using a "derivative on measurement" approach can mitigate this.
    *   **Derivative on Measurement:** Instead of $\frac{d}{dt}(r-y)$, use $-\frac{d y}{dt}$. This is often preferred as the reference input ($r$) is usually smooth or a step, making its derivative zero or infinite (not useful), while the output ($y$) is what has noisy dynamics. The derivative of $y$ is then taken.
*   **Tuning Complexity:** Finding optimal $K_p$ and $K_d$ values can be challenging and may require extensive testing.
*   **System Dynamics:** PD control assumes a relatively linear and time-invariant system. For highly nonlinear robots, PD control alone might not be sufficient.
*   **Steady-State Error:** PD control does not address steady-state error. To eliminate steady-state error for constant disturbances or setpoints, an Integral (I) term is typically added, resulting in PID control.

**Important Point:** While powerful, PD control is often a building block. For more complex robotic tasks and improved performance, PID controllers or more advanced control strategies are often employed.

---

### Practice Questions and Answers

**Question 1:** What is the primary advantage of adding a derivative term to a proportional controller?
    *   (a) To eliminate steady-state error.
    *   (b) To increase the system's speed of response.
    *   (c) To dampen oscillations and reduce overshoot.
    *   (d) To make the system more robust to external disturbances.

**Answer 1:** (c) To dampen oscillations and reduce overshoot.

---

**Question 2:** Explain the formula for a PD control law and identify the role of each term.

**Answer 2:** The PD control law is given by:
    $u_{pd}(t) = K_p \cdot e(t) + K_d \cdot \frac{de(t)}{dt}$
    *   **Proportional Term ($K_p \cdot e(t)$):** This term generates a control output proportional to the current error ($e(t)$). It helps to reduce the magnitude of the error and speed up the system's response.
    *   **Derivative Term ($K_d \cdot \frac{de(t)}{dt}$):** This term generates a control output proportional to the rate of change of the error ($\frac{de(t)}{dt}$). It acts as a damping force, anticipating future error and reducing overshoot and oscillations, thereby improving stability.

---

**Question 3:** A robot joint controlled by a PD controller is oscillating and overshooting the target position. What action would you likely take regarding the $K_d$ gain?
    *   (a) Increase $K_d$.
    *   (b) Decrease $K_d$.
    *   (c) Increase $K_p$.
    *   (d) Decrease $K_p$.

**Answer 3:** (a) Increase $K_d$. An increase in the derivative gain ($K_d$) provides more damping, which should reduce oscillations and overshoot.

---

**Question 4:** What is a major practical challenge when implementing derivative control in robotics, and how can it be partially addressed?

**Answer 4:** A major challenge is the sensitivity of the derivative term to sensor noise. Noise in the measured output can lead to large, erratic changes in the derivative calculation, resulting in unpredictable control signals. This can be partially addressed by:
    *   **Filtering:** Applying a low-pass filter to the error signal before differentiation.
    *   **Derivative on Measurement:** Calculating the derivative of the measured output ($y$) instead of the error ($e$). This is often preferred because the reference input ($r$) is typically smoother than the output measurement which is affected by dynamics and noise.

---

### Summary of Key Concepts

*   **Feedback Control:** Essential for robot regulation, using sensor feedback to correct errors.
*   **Proportional (P) Control:** $u(t) = K_p e(t)$. Reduces error magnitude but can lead to steady-state error and oscillations.
*   **Derivative (D) Control:** $u(t) = K_d \frac{de(t)}{dt}$. Dampens oscillations, reduces overshoot, and improves stability by considering the rate of error change.
*   **Proportional-Derivative (PD) Control:** $u(t) = K_p e(t) + K_d \frac{de(t)}{dt}$. Combines P and D actions for faster response with reduced overshoot and improved stability.
*   **Limitations of PD:** Does not eliminate steady-state error and is sensitive to noise (due to the D term).
*   **Tuning:** Adjusting $K_p$ and $K_d$ is critical for desired performance.

---

### Important Points to Remember

*   **PD control addresses both the current error (P) and the trend of the error (D).**
*   **The D term is crucial for damping oscillations and preventing overshoot.**
*   **While PD control improves transient response, it does not eliminate steady-state error.**
*   **Sensor noise is a significant concern for the derivative component.**
*   **Tuning PD gains is an empirical process requiring careful observation of the robot's behavior.**
*   **PD control is a foundational element in understanding more complex control strategies like PID.**

---

This concludes the study notes for PD control in robotic systems. Further exploration can involve understanding PID control, which adds an integral term to address steady-state error, as discussed in more advanced chapters of the recommended textbooks.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
