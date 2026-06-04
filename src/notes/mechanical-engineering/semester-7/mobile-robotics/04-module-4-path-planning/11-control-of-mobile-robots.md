---
title: "Control of mobile robots"
subject: "MOBILE ROBOTICS"
module: "Module 4: Path Planning"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf48044640cf"
status: "completed"
scrapedAt: "2026-05-20T18:15:33.868Z"
---
# Module 4: Path Planning - Topic: Control of Mobile Robots

## 1. Introduction to Mobile Robot Control

This topic delves into how to make a mobile robot execute the planned path accurately and efficiently. It bridges the gap between the theoretical path and the physical movement of the robot. Control systems are essential for translating desired trajectories into actual actuator commands.

**Key Concept:** **Control System** - A system that manages, commands, directs, or regulates the behavior of other devices or systems. In mobile robotics, it's about controlling the robot's motion (velocity, steering) to follow a planned path.

**Alignment with Course Outcomes:**
*   **CO6: Control the mobile robots to follow different paths (Knowledge Level: K3)** - This is the core focus of this topic.

**Reference:**
*   Siegwart & Nourbakhsh, Chapter 9: Control of Mobile Robots
*   Corke, Chapter 3: Kinematics, Chapter 7: Trajectory Generation and Tracking

---

### 1.1 Levels of Control in Mobile Robotics

Control in mobile robotics is often hierarchical, with different levels of abstraction addressing specific aspects of the robot's behavior.

*   **High-Level Control (Path Planning):** Determines the overall sequence of waypoints or a continuous path from a start to a goal, avoiding obstacles. (Covered in earlier parts of Module 4).
*   **Mid-Level Control (Trajectory Generation):** Converts the planned path into a time-parameterized sequence of states (position, orientation, velocities). This defines *how* the robot should move along the path and *when*.
*   **Low-Level Control (Motion Control/Actuator Control):** Generates the actual commands (e.g., motor voltages, wheel speeds) to execute the desired trajectory, taking into account the robot's dynamics and disturbances.

**Key Concepts:**
*   **Trajectory:** A path with a time component, specifying the desired state (position, orientation, velocity) at each point in time.
*   **Waypoints:** Discrete points along a path that the robot is expected to reach.

---

## 2. Kinematic Control

Kinematic control focuses on controlling the robot's motion without considering the forces and torques involved. It's about satisfying the robot's kinematic constraints.

**Key Concept:** **Kinematic Model** - A mathematical description of how the robot's configuration (position and orientation) changes with respect to its joint velocities or wheel velocities. This was likely covered in previous modules but is crucial for control.

**Alignment with Course Outcomes:**
*   **CO2: Derive the kinematic model of mobile robots (Knowledge Level: K4)** - Understanding the kinematic model is a prerequisite for kinematic control.
*   **CO6: Control the mobile robots to follow different paths (Knowledge Level: K3)** - Kinematic controllers use the kinematic model to achieve path following.

---

### 2.1 Path Following vs. Trajectory Following

*   **Path Following:** The robot aims to stay as close as possible to a given geometric path, regardless of the time taken to traverse it. The robot can move forward or backward along the path.
*   **Trajectory Following:** The robot aims to follow a path that is explicitly parameterized by time. This implies a specific velocity profile along the path.

**Example:** A robot might be programmed to follow a circular path. Path following could mean just staying on the circle. Trajectory following would mean completing the circle in a specified time, implying a constant angular velocity.

---

### 2.2 Control Strategies for Path Following

The goal is to drive the robot's current state towards a desired state on the path. This is often framed as a **feedback control problem**.

**2.2.1 Pure Pursuit Controller**

*   **Concept:** The robot aims to reach a "lookahead" point on the path. The steering command is calculated based on the distance and angle to this lookahead point.
*   **How it works:**
    1.  Select a lookahead point on the planned path. The distance to this point can be fixed or vary.
    2.  Calculate the curvature required to steer towards the lookahead point from the robot's current position.
    3.  Convert this curvature into steering commands for the robot's actuators.
*   **Kinematic Model Requirement:** Typically requires the kinematic model to relate steering angle to path curvature.
*   **Advantages:** Simple to implement, robust to path shapes.
*   **Disadvantages:** Can exhibit oscillations, especially with aggressive lookahead distances. May not perform well on highly curved paths.
*   **Reference:** Siegwart & Nourbakhsh, Chapter 9.1

**Example:** Imagine driving a car. You look a short distance ahead and steer your wheels to point towards that spot. As you move, you continuously update your target spot.

**2.2.2 Stanley Controller**

*   **Concept:** Designed for car-like robots, it minimizes both the cross-track error (perpendicular distance to the path) and the heading error (difference in orientation between the robot and the path).
*   **How it works:**
    1.  Determine the closest point on the path to the robot's current position.
    2.  Calculate the cross-track error ($e_\perp$).
    3.  Calculate the heading error ($\psi_e$).
    4.  The steering command is a combination of a term proportional to the cross-track error (to correct lateral deviation) and a term proportional to the heading error (to align the robot with the path).
*   **Kinematic Model Requirement:** Relies on the kinematic model to relate steering angle to the robot's velocity and turning radius.
*   **Advantages:** Achieves zero cross-track and heading errors asymptotically. Particularly effective for car-like robots.
*   **Disadvantages:** Can be sensitive to noise in position and orientation estimation.
*   **Reference:** Siegwart & Nourbakhsh, Chapter 9.1.2

**Mathematical Formulation (Simplified Stanley):**
Let $\delta$ be the steering angle, $e_\perp$ be the cross-track error, and $\psi_e$ be the heading error.
The steering command can be approximated as:
$\delta = \psi_e + \arctan\left(\frac{k \cdot e_\perp}{v + \epsilon}\right)$
where:
*   $k$ is a controller gain for cross-track error.
*   $v$ is the robot's forward velocity.
*   $\epsilon$ is a small positive constant to avoid division by zero.

---

### 2.3 Control for Specific Robot Configurations

The control strategy must account for the robot's specific kinematic structure.

*   **Differential Drive Robots:**
    *   Control is achieved by independently controlling the velocities of the left and right wheels.
    *   The robot's forward velocity ($v$) and angular velocity ($\omega$) are derived from wheel velocities.
    *   Kinematic model is crucial here to map desired $v$ and $\omega$ to wheel commands.
    *   **Example:** A differential drive robot can be controlled to follow a straight line by setting equal wheel velocities, or to turn by setting different wheel velocities.
    *   **Reference:** Siegwart & Nourbakhsh, Chapter 3: Kinematics of Mobile Robots

*   **Ackermann Steering Robots (Car-like robots):**
    *   Control is achieved by steering the front wheels and controlling the forward velocity.
    *   The steering angle of the front wheels determines the robot's turning radius and thus its path.
    *   **Example:** The Stanley controller is specifically designed for this type of robot.
    *   **Reference:** Siegwart & Nourbakhsh, Chapter 3: Kinematics of Mobile Robots

*   **Omnidirectional Robots:**
    *   Can move in any direction (translation and rotation) instantaneously.
    *   Control involves controlling the velocities of their omni-wheels (or mecanum wheels).
    *   **Example:** An omnidirectional robot can sidestep or rotate in place, offering more flexibility in path following compared to differential drive robots.
    *   **Reference:** Siegwart & Nourbakhsh, Chapter 3: Kinematics of Mobile Robots

---

## 3. Dynamic Control

Dynamic control considers the forces and torques required to achieve the desired motion. This is crucial for achieving high-speed or precise movements, or when dealing with non-holonomic constraints that affect forces.

**Key Concept:** **Dynamic Model** - A mathematical description of how forces and torques affect the robot's motion (acceleration). It relates actuator torques/forces to the robot's linear and angular accelerations.

**Alignment with Course Outcomes:**
*   **CO3: Derive dynamic model of mobile robots (Knowledge Level: K4)** - Understanding the dynamic model is a prerequisite for dynamic control.
*   **CO6: Control the mobile robots to follow different paths (Knowledge Level: K3)** - Dynamic controllers use the dynamic model to achieve accurate path following, especially under dynamic conditions.

---

### 3.1 The Need for Dynamic Control

*   **Inertia:** Robots have mass, and accelerating that mass requires forces.
*   **Friction:** Friction in joints and wheels opposes motion.
*   **Gravity:** For robots on inclines or with articulated arms.
*   **Actuator Limits:** Motors have limited torque and speed.
*   **Precise Trajectory Tracking:** For high-speed maneuvers or when dealing with precise positioning requirements, ignoring dynamics can lead to significant errors.

---

### 3.2 Model-Based Control (Feedback-Linearization)

*   **Concept:** Aims to cancel out the nonlinearities of the robot's dynamic model, effectively transforming the robot into a linear system that can be controlled using standard linear control techniques (e.g., PID).
*   **How it works:**
    1.  Obtain a precise dynamic model of the robot.
    2.  The control law is designed such that when applied to the robot, the nonlinear terms in the dynamic equations cancel out.
    3.  The remaining system is a simple linear system, which can be controlled to follow a desired trajectory.
*   **Reference:** Siegwart & Nourbakhsh, Chapter 9.2

**Example:** For a differential drive robot, the dynamic model might include terms related to wheel inertia and friction. A feedback-linearizing controller would calculate the required motor torques to counteract these effects and ensure the robot's actual velocity matches the desired velocity.

---

### 3.3 Proportional-Integral-Derivative (PID) Control

*   **Concept:** A widely used feedback control loop mechanism that calculates an "error" value as the difference between a desired setpoint (e.g., desired velocity) and a measured process variable (e.g., actual velocity). The controller attempts to minimize the error by adjusting the control output (e.g., motor command).
*   **Components:**
    *   **Proportional (P):** Output is proportional to the current error. Acts to reduce the error. `P_term = Kp * error`
    *   **Integral (I):** Output is proportional to the integral of the error over time. Eliminates steady-state errors. `I_term = Ki * integral(error) dt`
    *   **Derivative (D):** Output is proportional to the rate of change of the error. Dampens oscillations and improves response time. `D_term = Kd * d(error)/dt`
*   **Control Output:** `Output = P_term + I_term + D_term`
*   **Application:** PID controllers are commonly used to control the individual wheel velocities of a mobile robot to follow a trajectory. The desired velocity is the setpoint, and the actual wheel velocity is the measured variable.
*   **Reference:** Corke, Chapter 7.3 (Feedback Control). Siegwart & Nourbakhsh also discusses PID control in Chapter 9.

**Example:** To make a differential drive robot move at a constant forward speed, a PID controller can be used for each wheel motor. The setpoint is the desired wheel speed. The controller measures the actual wheel speed (e.g., using encoders) and adjusts the motor's voltage or current to reduce the error.

---

### 3.4 Velocity Control

*   **Concept:** Directly controlling the linear and angular velocities of the robot. This is a common approach for path following.
*   **How it works:**
    1.  From the planned path and desired traversal speed, determine the target linear velocity ($v_{target}$) and angular velocity ($\omega_{target}$) at the robot's current position or for the next time step.
    2.  Use kinematic or dynamic controllers to command the robot's actuators to achieve these target velocities.
*   **Implementation:** Often involves a cascade of controllers: an outer-loop controller that calculates desired velocities based on the path, and an inner-loop controller (like PID) that drives the actuators to achieve those velocities.
*   **Reference:** Siegwart & Nourbakhsh, Chapter 9

---

## 4. Trajectory Tracking Control

This is the process of making the robot follow a time-parameterized trajectory. It combines path following with specific timing requirements.

**Key Concepts:**
*   **Tracking Error:** The difference between the robot's current state (position, orientation, velocity) and the desired state specified by the trajectory.
*   **Feedback Control:** Essential for correcting deviations from the trajectory.

**Alignment with Course Outcomes:**
*   **CO6: Control the mobile robots to follow different paths (Knowledge Level: K3)** - This is the direct application of trajectory tracking.

---

### 4.1 Feedforward Control

*   **Concept:** Using the robot's model to predict the required actuator commands to achieve the desired trajectory without relying solely on feedback. This is often used *in addition* to feedback control.
*   **How it works:**
    1.  The desired trajectory (position, velocity, acceleration) is known.
    2.  The robot's dynamic or kinematic model is used to calculate the ideal actuator commands (e.g., torques, velocities) that would produce this trajectory if the model were perfect and there were no disturbances.
*   **Advantages:** Can significantly improve tracking performance, especially for fast motions, by anticipating the required forces/torques.
*   **Disadvantages:** Highly dependent on the accuracy of the robot's model.
*   **Reference:** Corke, Chapter 7.2 (Feedforward Control)

**Example:** If a robot needs to follow a sinusoidal path at a certain speed, a feedforward controller would calculate the varying motor commands needed to produce that smooth sinusoidal motion based on the robot's inertia and dynamics.

---

### 4.2 Combined Feedforward and Feedback Control

*   **Concept:** The most effective approach often combines feedforward and feedback control. Feedforward handles the bulk of the control effort based on the known model, while feedback corrects for modeling errors, disturbances, and unexpected events.
*   **How it works:**
    `Total Control Output = Feedforward Term + Feedback Term`
*   **Benefits:** Achieves superior tracking performance compared to either method alone.
*   **Reference:** Corke, Chapter 7.4 (Combined Feedforward and Feedback Control)

**Example:** For a differential drive robot following a curved trajectory, the feedforward term would provide the motor commands needed to achieve the desired angular velocity based on the curvature. A PID feedback controller would then adjust these commands based on the actual tracking error.

---

## 5. Error Metrics for Control Performance

To evaluate how well the robot is tracking a path or trajectory, we need metrics.

*   **Cross-Track Error:** The perpendicular distance from the robot's current position to the nearest point on the path.
*   **Heading Error:** The difference between the robot's current orientation and the orientation of the path at the closest point.
*   **Distance Along Path:** How far the robot has progressed along the planned path.
*   **Time Error:** The difference between the robot's current time and the time at which it is supposed to be at a certain point on the trajectory.

**Reference:** Siegwart & Nourbakhsh, Chapter 9.1

---

## 6. Practical Considerations and Implementation

*   **Sensing:** Accurate odometry (wheel encoders) and potentially other sensors (IMUs, visual odometry) are crucial for providing the robot's current state to the controller. (Links to CO4).
*   **Actuator Dynamics:** Real motors have delays, saturation, and nonlinearities that must be considered.
*   **Sampling Rate:** The control loop must run at a sufficiently high frequency to respond to errors and track the trajectory effectively.
*   **Tuning:** PID gains (Kp, Ki, Kd) and lookahead parameters need to be carefully tuned for optimal performance. This often involves experimentation.
*   **Computational Load:** Complex controllers can be computationally intensive.

**Reference:** Corke, Chapter 7 (discusses practical aspects of implementing control algorithms).

---

## Practice Questions and Answers

**Question 1:**
What is the primary difference between path following and trajectory following?
**Answer:** Path following aims to stay on a geometric path regardless of time, while trajectory following aims to follow a path with a specific time parameterization, dictating the velocity profile.

**Question 2:**
A differential drive robot needs to turn left. How would you adjust the wheel velocities to achieve this?
**Answer:** To turn left, the right wheel needs to move faster than the left wheel. If the robot is to rotate in place (zero forward velocity), the right wheel moves forward and the left wheel moves backward with equal magnitudes.

**Question 3:**
Which control approach is more suitable for high-speed maneuvers where inertial effects are significant: kinematic control or dynamic control? Explain why.
**Answer:** Dynamic control is more suitable. Kinematic control ignores forces and torques, which are crucial for overcoming inertia and achieving accurate motion at high speeds. Dynamic control incorporates the robot's mass and inertia into the control law to ensure accurate acceleration and velocity tracking.

**Question 4:**
Briefly explain the role of the "Integral" term in a PID controller.
**Answer:** The Integral term sums up past errors. It helps to eliminate steady-state errors, meaning it drives the system to the desired setpoint even if there are small persistent biases or disturbances.

**Question 5:**
Imagine you are using a Pure Pursuit controller. What happens if you choose a very short lookahead distance? What if you choose a very long lookahead distance?
**Answer:**
*   **Short Lookahead:** The robot will try to react very quickly to changes in the path. This can lead to jerky movements and oscillations, as the robot constantly corrects its heading.
*   **Long Lookahead:** The robot will react slowly to path changes. It might overshoot curves or lag behind sharp turns, potentially leading to larger cross-track errors before it can correct.

---

## Important Points to Remember

*   **Control bridges planning and execution.** The best path planner is useless without effective control to follow the planned path.
*   **Kinematic control** is simpler and often sufficient for slow, smooth motions, focusing on geometric constraints.
*   **Dynamic control** is necessary for accurate high-speed motion, accounting for forces, torques, and inertia.
*   **PID controllers** are a workhorse for low-level velocity control of individual actuators.
*   **Feedforward control** significantly improves trajectory tracking by anticipating required actions based on the robot's model.
*   **Combined Feedforward + Feedback** is often the most robust and high-performance approach.
*   **Accurate sensing** (odometry, IMU) is fundamental to any feedback control system.
*   The **specific kinematic configuration** of the robot dictates the achievable velocities and control strategies.

---
This concludes the notes on the Control of Mobile Robots. This topic builds directly on the path planning concepts and is essential for the practical realization of autonomous navigation.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
