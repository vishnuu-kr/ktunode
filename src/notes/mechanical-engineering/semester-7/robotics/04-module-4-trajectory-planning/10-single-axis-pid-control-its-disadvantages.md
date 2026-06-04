---
title: "Single axis PID control-its disadvantages"
subject: "ROBOTICS"
module: "Module 4: Trajectory Planning"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf480446425e"
status: "completed"
scrapedAt: "2026-05-20T18:18:55.867Z"
---
# Module 4: Trajectory Planning - Single Axis PID Control: Disadvantages

## 1. Introduction to PID Control in Robotics

Proportional-Integral-Derivative (PID) control is a ubiquitous feedback control loop mechanism widely used in robotics for achieving desired motion or position. It calculates an error value as the difference between a desired setpoint and a measured process variable and applies a correction based on proportional, integral, and derivative terms.

**Key Concepts:**

*   **Setpoint (Desired Value):** The target position or velocity for the robot's joint or end-effector.
*   **Process Variable (Measured Value):** The actual current position or velocity of the robot's joint or end-effector.
*   **Error ($e(t)$):** The difference between the setpoint and the process variable: $e(t) = \text{Setpoint} - \text{Process Variable}$.
*   **Proportional Term (P):** Proportional to the current error. A larger error results in a larger control output.
    *   $P(t) = K_p \cdot e(t)$
*   **Integral Term (I):** Proportional to the integral of the error over time. This term helps eliminate steady-state errors.
    *   $I(t) = K_i \int_0^t e(\tau) d\tau$
*   **Derivative Term (D):** Proportional to the rate of change of the error. This term anticipates future errors and dampens oscillations.
    *   $D(t) = K_d \frac{de(t)}{dt}$
*   **Control Output ($u(t)$):** The sum of the P, I, and D terms, which is applied to the robot actuator.
    *   $u(t) = P(t) + I(t) + D(t) = K_p e(t) + K_i \int_0^t e(\tau) d\tau + K_d \frac{de(t)}{dt}$

**Textbook References:**

*   **Schilling (1996):** Likely discusses PID control as a fundamental control strategy for robot actuators, focusing on its principles and basic implementation.
*   **Craig (2002):** Might present PID control in the context of joint-space control, explaining how it's used to achieve desired joint angles.
*   **Saha (n.d.):** Could offer a detailed mathematical derivation of PID control and its application in robotic manipulators.
*   **Mittal (2003):** Likely covers PID control as a common method for regulating robot joint torques or velocities.
*   **Ghosal (n.d.):** May discuss PID controllers in relation to robot dynamics and force control.

## 2. Understanding Single Axis PID Control

Single axis PID control focuses on controlling the motion of a single degree of freedom (DOF) of a robot, such as a single joint. This is often the first step in understanding more complex multi-axis control.

**Example:** Controlling the angle of a robot's shoulder joint. The setpoint is the desired shoulder angle, and the process variable is the actual measured shoulder angle from an encoder. The PID controller then calculates the necessary motor torque or voltage to move the shoulder to the desired angle.

**Alignment with Course Outcomes:**

*   **CO4 (Knowledge Level: K4, K6):** Understanding single axis PID control is foundational for developing dynamic models and designing controllers for robotic manipulators. It directly relates to how we achieve the desired motion described by the dynamic model.

## 3. Disadvantages of Single Axis PID Control

While PID control is powerful and widely used, it has several limitations, particularly when dealing with the complexities of robotic systems, even at a single-axis level.

### 3.1. Sensitivity to Parameter Tuning

*   **The Problem:** The performance of a PID controller is highly dependent on the correct tuning of the proportional ($K_p$), integral ($K_i$), and derivative ($K_d$) gains. Improper tuning can lead to instability, excessive oscillations, slow response, or steady-state errors.
*   **Tuning Methods:** Manual tuning, Ziegler-Nichols methods, and auto-tuning algorithms exist, but finding optimal gains for varying operating conditions can be challenging.
*   **Impact on Robotics:** Robot joints can have varying dynamics (e.g., due to gravity, payload changes, friction), making fixed PID gains suboptimal across the entire operating range.
*   **Textbook Reference:**
    *   **Schilling (1996):** Discusses the importance of tuning and the challenges associated with it.
    *   **Craig (2002):** Might highlight that PID tuning is an empirical process, and achieving robust performance requires careful consideration.

### 3.2. Inability to Handle Significant System Nonlinearities

*   **The Problem:** PID controllers are inherently linear controllers. They assume a linear relationship between the control input and the system output. Robotic systems, however, are rife with nonlinearities.
*   **Examples of Nonlinearities:**
    *   **Friction:** Static and kinetic friction in joints are highly nonlinear and velocity-dependent.
    *   **Gravity:** The gravitational torque on a robot arm depends on the arm's configuration (joint angles), creating a nonlinear torque requirement.
    *   **Inertia:** The effective inertia of a link can change with its orientation.
    *   **Backlash:** Mechanical play in gears introduces dead zones and nonlinear behavior.
*   **Impact on Robotics:** For a single axis, even friction and gravity can significantly affect performance. If not accounted for, a PID controller might struggle to maintain accuracy, especially at low velocities or when holding a position against gravity.
*   **Textbook Reference:**
    *   **Ghosal (n.d.):** Likely emphasizes the nonlinear nature of robot dynamics and how linear controllers like PID might struggle with these effects.
    *   **Lynch & Park (n.d.):** In their "Modern Robotics," they would definitely cover the nonlinear dynamics of robots, making it clear why purely linear controllers are limited.

### 3.3. Poor Performance with Time-Varying Dynamics

*   **The Problem:** If the robot's dynamics change significantly over time (e.g., due to payload variations, changing inertia as the arm moves), a fixed-gain PID controller will perform poorly. The controller gains that were optimal for one configuration might be far from optimal for another.
*   **Example:** A robot picking up a heavy object. The increased inertia and potential for gravitational torques require different control gains than when the robot is moving an empty end-effector.
*   **Impact on Robotics:** This necessitates re-tuning the PID controller for different tasks or operating conditions, which is not always practical in real-time applications.
*   **Textbook Reference:**
    *   **Saha (n.d.):** Might discuss adaptive control techniques as a way to overcome the limitations of fixed-gain controllers in the face of changing dynamics.

### 3.4. Integral Windup

*   **The Problem:** When the actuator reaches its saturation limit (e.g., maximum voltage or torque), the integral term can continue to accumulate error. This "integral windup" can cause a large overshoot and slow recovery once the error starts to decrease.
*   **Impact on Robotics:** If a robot joint is commanded to move beyond its physical limits or the motor is commanded to produce more torque than it can deliver, the integral term can build up significantly. When the command finally becomes feasible, the large accumulated integral term can drive the joint far past the setpoint.
*   **Textbook Reference:**
    *   **Schilling (1996):** Likely mentions integral windup as a common issue and suggests anti-windup strategies.
    *   **Craig (2002):** May briefly touch upon this practical limitation of integral control.

### 3.5. Limited Bandwidth and Response Speed

*   **The Problem:** While the derivative term can improve transient response, PID controllers can struggle to achieve very high bandwidths and fast responses without becoming unstable. There's a trade-off between responsiveness and stability.
*   **Impact on Robotics:** For high-speed robot movements or precise trajectory tracking at high velocities, a standard PID controller might not be sufficient. It can lead to sluggish performance or oscillations.
*   **Textbook Reference:**
    *   **Mittal (2003):** Could discuss the frequency domain analysis of PID controllers, illustrating the bandwidth limitations.

### 3.6. Ignores System Dynamics and Coupling Effects

*   **The Problem:** Single-axis PID control treats each joint as an independent system. It doesn't explicitly account for the robot's overall dynamic model (e.g., the influence of one joint's motion on another through inertial coupling) or external disturbances that might be correlated across axes.
*   **Impact on Robotics:** In a multi-joint robot, actuating one joint can cause unintended motion in others due to inertial coupling. A single-axis PID controller on each joint will not compensate for these cross-coupling effects.
*   **Textbook Reference:**
    *   **Craig (2002), Ghosal (n.d.), Lynch & Park (n.d.), Siciliano et al. (n.d.):** All these texts would emphasize the importance of considering coupled dynamics in advanced robot control, highlighting the limitations of decoupled, single-axis approaches.

### 3.7. Difficulty with High-Friction or Stiction Systems

*   **The Problem:** Stiction (static friction) is a nonlinear phenomenon where a higher force is required to initiate motion than to maintain it. A simple PID controller can struggle to overcome stiction, leading to jerky movements or failure to reach the setpoint.
*   **Impact on Robotics:** Robots with gearboxes, lead screws, or other mechanisms prone to stiction will exhibit poor performance with standard PID control.
*   **Textbook Reference:**
    *   **Ghosal (n.d.):** Might discuss friction compensation techniques needed for such systems.

## 4. Advanced Control Strategies to Overcome PID Limitations

Many advanced control techniques build upon or replace PID control to address its shortcomings:

*   **Feedforward Control:** Using a model of the robot's dynamics to predict and compensate for known forces (like gravity and inertia) before they affect the motion.
*   **Computed Torque Control:** A model-based control strategy that uses the full dynamic model to calculate the required torques.
*   **Adaptive Control:** Controllers that adjust their parameters online based on the robot's changing dynamics.
*   **Friction Compensation:** Adding specific terms to the control law to counteract friction.
*   **Cascade Control:** Using a fast inner PID loop for motor velocity and a slower outer PID loop for position.

**Alignment with Course Outcomes:**

*   **CO4 (Knowledge Level: K4, K6):** Understanding these advanced strategies is crucial for designing robust and high-performance robot controllers, directly addressing the limitations of basic PID.
*   **CO3 (Knowledge Level: K4, K5):** Trajectory planning often needs to consider the robot's dynamic capabilities and limitations, which are influenced by the chosen control strategy.

## 5. Summary of Disadvantages

| Disadvantage                    | Description                                                              | Robotic Implication                                                                                                       |
| :----------------------------- | :----------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------ |
| **Parameter Tuning**           | Sensitive to $K_p, K_i, K_d$ values; difficult for varying conditions.  | Suboptimal performance, instability, or sluggishness if not tuned for the specific task/payload.                        |
| **Nonlinearities**             | Assumes linear system; struggles with friction, gravity, backlash.     | Inaccurate positioning, jerky motion, failure to hold position against gravity.                                           |
| **Time-Varying Dynamics**      | Fixed gains are poor for changing inertia, payloads.                     | Requires re-tuning, leading to degraded performance as the robot operates.                                                |
| **Integral Windup**            | Integral term accumulates excessively during saturation.                 | Large overshoot and slow recovery after saturation.                                                                       |
| **Limited Bandwidth/Speed**    | Struggles with very fast responses without instability.                | Sluggishness in high-speed maneuvers.                                                                                     |
| **Ignores Coupling**           | Treats axes independently; misses inter-joint influences.              | Unintended cross-axis motion, reduced overall system performance.                                                         |
| **High Friction/Stiction**     | Difficulty overcoming static friction to initiate movement.              | Jerky movements, failure to reach setpoint, poor precision.                                                               |

## 6. Practice Questions

1.  **Explain the concept of integral windup in a single-axis PID controller and how it can negatively impact a robot's motion.**
    *   **Answer:** Integral windup occurs when the actuator saturates (e.g., reaches maximum torque) and the error persists. The integral term, being a sum of past errors, continues to grow. This large accumulated integral term can cause significant overshoot and slow settling time once the system is no longer saturated, as the integral term needs to "unwind." For a robot arm, this could mean overshooting a target joint angle or applying excessive torque in the wrong direction for an extended period.
2.  **Why is a standard single-axis PID controller often insufficient for controlling a robot joint that is subject to varying payloads?**
    *   **Answer:** A varying payload changes the robot's inertia and potentially the gravitational torques acting on the joint. These changes alter the system's dynamics. A PID controller with fixed gains is tuned for a specific dynamic scenario. When the payload changes, the relationship between the control output and the actual motion deviates from the tuned model, leading to suboptimal performance (e.g., slower response, overshoot, or instability).
3.  **Identify three specific nonlinearities present in robotic systems that can degrade the performance of a single-axis PID controller.**
    *   **Answer:**
        1.  **Friction (static and kinetic):** Friction is highly nonlinear with respect to velocity and can be difficult for a linear controller to predict and compensate for, especially stiction.
        2.  **Gravity:** The torque required to counteract gravity is a nonlinear function of the joint angle.
        3.  **Backlash:** Mechanical play in gears creates a dead zone where input changes do not result in output changes, leading to inaccuracy and hysteresis.
4.  **Which course outcome does understanding the limitations of single-axis PID control directly support, and why?**
    *   **Answer:** This topic directly supports **CO4: Develop a dynamic model and design the controller for robotic manipulators (Knowledge Level: K4, K6)**. Understanding the limitations of a basic controller like PID highlights the need for more sophisticated control strategies that can handle the complexities (nonlinearities, coupling, time-varying dynamics) inherent in robotic manipulators, which are often addressed after developing a dynamic model.

## 7. Important Points to Remember

*   Single-axis PID is a foundational but often insufficient control strategy for robots.
*   Its main weaknesses stem from its linearity in inherently nonlinear systems.
*   Parameter tuning is crucial but difficult, especially for dynamic robotic systems.
*   Nonlinearities like friction and gravity are major challenges.
*   Time-varying dynamics necessitate adaptive or model-based control.
*   Integral windup is a practical issue that needs mitigation.
*   Single-axis PID ignores important coupling effects between robot joints.
*   Advanced control techniques are often required to achieve robust and high-performance robot control.

---

This study material is designed to cover the disadvantages of single-axis PID control in robotics, aligning with the learning objectives and course outcomes provided, and referencing the suggested textbooks where applicable.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
