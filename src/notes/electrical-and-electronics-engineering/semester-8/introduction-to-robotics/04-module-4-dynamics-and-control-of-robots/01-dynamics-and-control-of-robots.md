---
title: "Dynamics and Control of Robots"
subject: "INTRODUCTION TO ROBOTICS"
module: "Module 4: Dynamics and Control of Robots"
branch: "Electrical and Electronics Engineering"
semester: 8
topicId: "68a200872b85456187f36c5a"
status: "completed"
scrapedAt: "2026-05-23T16:41:49.571Z"
---
# Introduction to Robotics: Module 4 - Dynamics and Control of Robots

This module delves into the crucial aspects of how robots move and how we can make them move in a desired and predictable manner. Understanding dynamics allows us to model the forces and torques involved in robot motion, while control theory provides the tools to manage and achieve specific robot behaviors.

## Module Overview

This module will cover:

*   **Robot Dynamics:** The study of forces and torques acting on a robot and their effect on its motion. This includes understanding the relationship between joint forces/torques and joint accelerations.
*   **Robot Control:** The design of algorithms and systems to command robot actuators to achieve desired motion, tasks, and to compensate for disturbances.

## 1. Robot Dynamics: Modeling the Forces of Motion

Robot dynamics is essential for understanding how a robot's actuators generate the necessary forces and torques to move its links and end-effector. It allows us to predict a robot's motion given actuator inputs and, conversely, to determine the required actuator inputs for a desired motion.

### 1.1 Importance of Robot Dynamics

*   **Controller Design:** Dynamic models are the foundation for designing effective controllers. Without knowing how forces relate to motion, we cannot precisely control a robot's movement. (Aligns with CO6)
*   **Trajectory Generation:** Understanding dynamics helps in generating efficient and feasible trajectories by considering the inertia, gravity, and friction of the robot. (Supports CO5 indirectly)
*   **Simulation and Analysis:** Dynamic models are crucial for simulating robot behavior, analyzing performance, and identifying potential issues before physical implementation.
*   **System Identification:** Dynamic models can be used to identify unknown parameters of a robot, such as mass, inertia, and friction.

### 1.2 Mathematical Formulation of Robot Dynamics

The dynamic equations of an n-degree-of-freedom (DOF) manipulator can be generally expressed as:

**$\tau = M(q) \ddot{q} + C(q, \dot{q}) \dot{q} + G(q) + F(\dot{q})$**

Where:

*   **$\tau$**: A vector of generalized forces/torques applied at each joint (n x 1).
*   **$q$**: A vector of generalized joint positions (n x 1).
*   **$\dot{q}$**: A vector of generalized joint velocities (n x 1).
*   **$\ddot{q}$**: A vector of generalized joint accelerations (n x 1).
*   **$M(q)$**: The **mass (or inertia) matrix** (n x n), which is symmetric and positive-definite. It represents the inertia of the robot as a function of its configuration.
*   **$C(q, \dot{q})$**: The **Coriolis and centrifugal forces matrix** (n x n). It accounts for the forces arising from the rotational motion of the links, which depend on both position and velocity.
*   **$G(q)$**: The **gravity vector** (n x 1). It represents the forces/torques due to gravity acting on the robot's links.
*   **$F(\dot{q})$**: The **friction vector** (n x 1). It represents the forces/torques due to friction in the joints.

*(Referenced from: Saha, Chapter 7; Craig, Chapter 5; Mittal & Nagrath, Chapter 6; Ghosal, Chapter 5)*

#### 1.2.1 Derivation Methods

There are several methods to derive the dynamic equations of a robot:

*   **Lagrangian Mechanics:** This is the most common and systematic approach. It is based on the principle of energy conservation and uses the Lagrangian function ($\mathcal{L} = T - V$, where T is kinetic energy and V is potential energy). The Euler-Lagrange equations are then applied to derive the dynamic equations.
    *   **Key Concept:** Virtual Work. The work done by all forces (active and passive) during a virtual displacement is zero.
    *   *(Referenced from: Saha, Chapter 7; Craig, Chapter 5; Mittal & Nagrath, Chapter 6; Ghosal, Chapter 5)*

*   **Newton-Euler Method:** This is an iterative method that applies Newton's second law to each link of the robot. It's often computationally more efficient for real-time control.
    *   **Key Concept:** Force and Torque Balance. The sum of forces and torques acting on a link equals its mass times acceleration.
    *   *(Referenced from: Saha, Chapter 7; Craig, Chapter 5; Mittal & Nagrath, Chapter 6; Ghosal, Chapter 5)*

#### 1.2.2 Components of the Dynamic Equation

*   **Mass Matrix ($M(q)$):**
    *   Represents the inertia of the robot.
    *   It's a function of the robot's configuration ($q$).
    *   **Example:** A heavier link will contribute more to the inertia matrix, making it harder to accelerate.
    *   *(Referenced from: Saha, Chapter 7; Craig, Chapter 5)*

*   **Coriolis and Centrifugal Forces ($C(q, \dot{q})\dot{q}$):**
    *   **Coriolis Forces:** Arise from the interaction between linear and rotational motion. They are proportional to the product of velocities.
    *   **Centrifugal Forces:** Arise from the inertia of the links as they rotate. They are proportional to the square of velocities.
    *   **Example:** When a robot arm moves quickly, you feel a "centrifugal" push outwards.
    *   *(Referenced from: Saha, Chapter 7; Craig, Chapter 5)*

*   **Gravity Vector ($G(q)$):**
    *   Accounts for the gravitational forces acting on each link.
    *   This term is configuration-dependent and can significantly affect robot motion, especially in the vertical plane.
    *   **Example:** To hold a robot arm horizontally, actuators must generate torques to counteract gravity.
    *   *(Referenced from: Saha, Chapter 7; Craig, Chapter 5)*

*   **Friction Vector ($F(\dot{q})$):**
    *   Includes various types of friction, such as viscous friction, Coulomb friction, and stiction.
    *   These forces oppose motion and can reduce control accuracy.
    *   **Example:** A robot arm might feel "sluggish" if there's significant friction in its joints.
    *   *(Referenced from: Saha, Chapter 7; Craig, Chapter 5)*

### 1.3 Dynamic Parameters

These are the physical properties of the robot that appear in the dynamic equations:

*   **Mass of each link:** Affects inertia and gravity terms.
*   **Center of mass of each link:** Crucial for calculating gravity torques.
*   **Inertia tensor of each link:** Describes how mass is distributed around the center of mass.
*   **Friction coefficients:** Quantify the frictional forces in the joints.

*(Referenced from: Saha, Chapter 7; Craig, Chapter 5)*

### 1.4 Recursive Newton-Euler Algorithm

This is an efficient method for computing the inverse dynamics (i.e., finding the required joint torques for a given joint acceleration, velocity, and position). It's a two-step process:

1.  **Forward Iteration:** Propagate joint accelerations, velocities, and positions from the base to the end-effector.
2.  **Backward Iteration:** Calculate the forces and torques required at each joint, starting from the end-effector and working back to the base.

*(Referenced from: Saha, Chapter 7; Craig, Chapter 5)*

---

## 2. Robot Control: Making Robots Move

Robot control is about designing strategies and algorithms to command the robot's actuators (motors) to achieve desired motion, interact with its environment, and perform tasks accurately and robustly.

### 2.1 Control Objectives

*   **Tracking Desired Trajectories:** Ensuring the robot's joints follow a specified path in joint space or Cartesian space. (Aligns with CO5, CO6)
*   **Regulation:** Maintaining the robot at a specific desired position or orientation.
*   **Force Control:** Controlling the interaction forces between the robot and its environment. (Supports CO2 implicitly through actuator choice)
*   **Disturbance Rejection:** Compensating for external forces (e.g., gravity, friction, impacts) that might deviate the robot from its desired path.
*   **Stability:** Ensuring the robot's motion is stable and does not diverge uncontrollably.

### 2.2 Control Architectures

*   **Independent Joint Control:** Each joint is controlled independently, ignoring the coupling between them. Simpler to implement but less effective for complex robots.
*   **Computed Torque Control (Decoupling Control):** A model-based control strategy that uses the robot's dynamic model to compute the required actuator torques to achieve the desired motion, effectively decoupling the joints. This is a fundamental concept in advanced robot control.
    *   **Key Idea:** By calculating the necessary torques based on the dynamic equations, we can make the robot behave as if it were a simple set of independent joints.
    *   **Equation:** $\tau = M(q_{des}) \ddot{q}_{des} + C(q_{des}, \dot{q}_{des}) \dot{q}_{des} + G(q_{des}) + F(\dot{q}_{des})$ (for perfect tracking)
    *   **Practical Implementation:** Often combined with feedback control (e.g., PID) to compensate for modeling errors and disturbances.
    *   *(Referenced from: Saha, Chapter 8; Craig, Chapter 6; Mittal & Nagrath, Chapter 7; Ghosal, Chapter 6)*

### 2.3 Basic Control Strategies

*   **PID (Proportional-Integral-Derivative) Control:** A widely used feedback control loop that calculates an error value as the difference between a desired setpoint and a measured process variable. The controller attempts to minimize the error by adjusting the control output.
    *   **Proportional (P):** Output is proportional to the current error.
    *   **Integral (I):** Output is proportional to the integral of the error over time (eliminates steady-state error).
    *   **Derivative (D):** Output is proportional to the rate of change of the error (dampens oscillations and improves transient response).
    *   **Application:** Can be applied to each joint independently.
    *   *(Referenced from: Saha, Chapter 8; Mittal & Nagrath, Chapter 7)*

*   **Feedforward Control:** This strategy uses knowledge of the system's dynamics to anticipate and compensate for known disturbances or desired motion characteristics. In robot control, it's often used to provide the baseline torque required for motion, with feedback control handling residual errors.
    *   **Example:** In computed torque control, the dynamic model provides the feedforward component.

### 2.4 Advanced Control Techniques

*   **Adaptive Control:** Control strategies that adjust their parameters automatically based on changes in the robot's dynamics or environment. This is useful for robots with significant variations in payload or joint friction.
    *   *(Referenced from: Saha, Chapter 8; Craig, Chapter 6)*

*   **Robust Control:** Designed to maintain performance and stability even in the presence of uncertainties and disturbances.

*   **Force Control:** Techniques that allow robots to interact with their environment with controlled forces.
    *   **Compliance:** The ability of the robot to yield to external forces.
    *   **Impedance Control:** Controls the dynamic relationship between force and motion.
    *   *(Referenced from: Saha, Chapter 9; Craig, Chapter 6)*

### 2.5 Implementation Aspects

*   **Actuators:** Understanding the dynamics and control of actuators (motors, servos) is crucial. The choice of actuator directly impacts the robot's performance and control capabilities. (Aligns with CO2)
    *   **Types:** DC motors, servo motors, stepper motors.
    *   **Considerations:** Torque, speed, precision, efficiency, cost.

*   **Sensors:** Sensors provide feedback to the controller about the robot's state (e.g., joint positions, velocities, forces).
    *   **Types:** Encoders, potentiometers, tachometers, force sensors.
    *   **Role:** Essential for closed-loop control. (Aligns with CO2)

*   **Digital Control:** Most robot controllers are digital, meaning they operate on discrete time steps. This involves discretization of continuous-time control laws and sampling of sensor data.

---

## 3. Trajectory Tracking and Control

Once a trajectory is planned (e.g., in joint space or Cartesian space, as covered in Module 3), the controller's job is to make the robot follow it accurately.

### 3.1 Joint Space Trajectory Tracking

*   The controller aims to make the actual joint positions $q(t)$ follow the desired joint positions $q_d(t)$.
*   This is typically achieved using feedback control like PID applied to each joint.
*   Computed torque control can also be used in joint space, directly using the joint-space dynamic model.

### 3.2 Cartesian Space Trajectory Tracking

*   The desired path is specified in the Cartesian workspace (e.g., a straight line for the end-effector).
*   This requires **inverse kinematics** to convert the Cartesian trajectory into a joint-space trajectory.
*   The control system then tries to track this derived joint-space trajectory.
*   **Challenges:** Singularities in the robot's workspace can make tracking difficult.

### 3.3 Control for Specified Tasks

*   **Path Following:** Ensuring the robot's end-effector follows a predefined path.
*   **Point-to-Point Motion:** Moving the robot from an initial configuration to a final configuration.
*   **Task-Space Control:** Directly controlling the end-effector's position and orientation in Cartesian space, often using the Jacobian matrix.

    **$\dot{X} = J(q) \dot{q}$**  (Relationship between end-effector velocity $\dot{X}$ and joint velocity $\dot{q}$)

    *   **Key Concept:** Jacobian matrix ($J(q)$) relates joint velocities to end-effector velocities.
    *   *(Referenced from: Craig, Chapter 3; Saha, Chapter 3)*

---

## 4. Key Concepts and Important Points to Remember

*   **Dynamic Model:** The mathematical representation of a robot's motion based on forces and torques ( $\tau = M(q) \ddot{q} + C(q, \dot{q}) \dot{q} + G(q) + F(\dot{q})$ ).
*   **Lagrangian and Newton-Euler Methods:** Primary techniques for deriving dynamic models.
*   **Mass Matrix ($M(q)$), Coriolis/Centrifugal Matrix ($C(q, \dot{q})$), Gravity Vector ($G(q)$), Friction Vector ($F(\dot{q})$):** Key components of the dynamic equation.
*   **Inverse Dynamics:** Calculating the required torques given desired accelerations, velocities, and positions.
*   **Feedforward Control:** Using the dynamic model to provide anticipatory control signals.
*   **Feedback Control (PID):** Correcting for errors and disturbances based on sensor feedback.
*   **Computed Torque Control:** A model-based approach that achieves decoupling and improved tracking by using the inverse dynamics.
*   **Jacobian Matrix:** Relates joint velocities to end-effector velocities, crucial for Cartesian space control.
*   **Actuator and Sensor Selection:** Critical for effective robot control. (CO2)
*   **Controller Design:** The process of creating algorithms to make robots perform desired tasks. (CO6)

---

## 5. Practice Questions and Exercises

**Question 1:**
Consider a simple 1-DOF robot arm with a single link of mass 'm' and length 'l', rotating in a vertical plane about a fixed pivot.
(a) Derive the dynamic equation for this system, considering gravity and viscous friction proportional to velocity ($\dot{q}$).
(b) If the arm is at an angle $\theta$ from the horizontal, what is the torque required to counteract gravity alone?
(c) If we want to achieve a desired angular acceleration $\ddot{q}_d$ and angular velocity $\dot{q}_d$, and the arm is at angle $\theta$, what would the computed torque control command look like (ignoring friction for simplicity)?

**Answer 1:**
Let $q = \theta$ be the joint angle.
The kinetic energy $T = \frac{1}{2} I \dot{q}^2$, where $I$ is the moment of inertia. For a uniform rod rotating about one end, $I = \frac{1}{3}ml^2$.
The potential energy due to gravity, assuming the pivot is at the origin and gravity acts downwards, is $V = -mg(\frac{l}{2})\sin(q)$.

Using Lagrangian mechanics: $\mathcal{L} = T - V = \frac{1}{2} I \dot{q}^2 + mg\frac{l}{2}\sin(q)$.
The equation of motion is $\frac{d}{dt}(\frac{\partial \mathcal{L}}{\partial \dot{q}}) - \frac{\partial \mathcal{L}}{\partial q} = \tau - \tau_{friction}$.

$\frac{\partial \mathcal{L}}{\partial \dot{q}} = I \dot{q}$
$\frac{d}{dt}(\frac{\partial \mathcal{L}}{\partial \dot{q}}) = I \ddot{q}$
$\frac{\partial \mathcal{L}}{\partial q} = mg\frac{l}{2}\cos(q)$

Assuming viscous friction $\tau_{friction} = b\dot{q}$, the dynamic equation is:
$I \ddot{q} + b\dot{q} = \tau + mg\frac{l}{2}\cos(q)$

Rearranging to the standard form $\tau = M(q) \ddot{q} + C(q, \dot{q}) \dot{q} + G(q)$:
$\tau = I \ddot{q} + b\dot{q} - mg\frac{l}{2}\cos(q)$

(a) The dynamic equation is: $I \ddot{q} + b\dot{q} = \tau - mg\frac{l}{2}\cos(q)$.
(b) To counteract gravity alone, $\tau_{gravity} = -mg\frac{l}{2}\cos(q)$. The torque needed from the actuator to keep it at $\theta$ (so $\ddot{q}=\dot{q}=0$) is $\tau_{gravity}$.
(c) For computed torque control to achieve $\ddot{q}_d$ and $\dot{q}_d$:
$\tau = I \ddot{q}_d + b\dot{q}_d - mg\frac{l}{2}\cos(q)$.
*Note: In a practical computed torque controller, you'd usually have feedback as well, e.g., $\tau = M(q) (\ddot{q}_d + K_d \dot{e} + K_p e) + C(q, \dot{q}) (\dot{q}_d + K_d e) + G(q)$ where $e = q_d - q$. However, the question asks for the command, which in its simplest feedforward form is the dynamic equation evaluated at the desired states.*

**Question 2:**
Explain the difference between feedforward and feedback control in the context of robot manipulators. Give an example of each.

**Answer 2:**
*   **Feedforward Control:**
    *   **Concept:** Uses a model of the system (in this case, the robot's dynamic model) to predict and compensate for known inputs or effects *before* they occur. It aims to provide the "correct" output without waiting for an error signal.
    *   **Example:** In computed torque control, the terms $M(q) \ddot{q}_d + C(q, \dot{q}_d) \dot{q}_d + G(q)$ are calculated using the robot's dynamic model to generate the base torque needed to follow the desired trajectory. This preemptively counteracts inertia, Coriolis forces, and gravity.

*   **Feedback Control:**
    *   **Concept:** Uses sensor measurements of the system's actual output to compare it with the desired output, calculates the error, and adjusts the input to reduce this error. It's reactive.
    *   **Example:** A PID controller for a single joint. If the joint angle is slightly lower than desired due to unmodeled friction or external disturbances, the PID controller will detect this error and increase the motor torque to bring it back to the desired position.

**Question 3:**
What is the role of the Jacobian matrix in robot control?

**Answer 3:**
The Jacobian matrix $J(q)$ is fundamental for controlling robot manipulators in Cartesian space. It describes the instantaneous relationship between the joint velocities ($\dot{q}$) and the end-effector's linear and angular velocities ($\dot{X}$).
**$\dot{X} = J(q) \dot{q}$**
In control, this relationship is used for:
1.  **Task-Space Control:** To control the end-effector's motion directly, we need to know how joint commands translate to end-effector motion. By inverting the Jacobian (or using its pseudo-inverse), we can find the required joint velocities to achieve a desired end-effector velocity.
2.  **Trajectory Generation:** If a Cartesian trajectory is defined, the Jacobian is used to convert it into a joint-space trajectory.
3.  **Singularity Analysis:** The Jacobian helps identify singular configurations where the robot loses degrees of freedom or its ability to move in certain directions, which is critical for control design to avoid problematic configurations.

---

## 6. Self-Reflection and Alignment with Course Outcomes

This module directly addresses **CO6: Develop dynamic model and design the controller for robotic manipulators**.

*   **Dynamic Model Development:** The study of robot dynamics, including the formulation of equations of motion using Lagrangian or Newton-Euler methods, is central to this outcome. Understanding the components like the mass matrix, Coriolis forces, and gravity vectors is essential.
*   **Controller Design:** The module covers various control strategies (PID, computed torque) and their implementation for robot manipulators. This includes understanding how to use the dynamic model for control (e.g., computed torque control).

The module also implicitly supports other course outcomes:

*   **CO4 & CO5 (Kinematic Model & Trajectory Planning):** Understanding dynamics is crucial for realistically planning trajectories. Dynamic constraints often limit the achievable speeds and accelerations, influencing trajectory generation. While not directly creating kinematic models, dynamics builds upon them.
*   **CO2 & CO3 (Sensors & Actuators, Configuration & Gripper):** The choice of actuators and sensors significantly impacts the effectiveness of robot control and the parameters used in the dynamic model. The performance of the control system relies heavily on the quality of sensor feedback and the power/precision of actuators.

---

This concludes Module 4. The ability to model and control robot motion is fundamental to making robots useful in real-world applications. The interplay between accurate dynamic modeling and sophisticated control algorithms is what enables robots to perform complex tasks with precision and efficiency.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
