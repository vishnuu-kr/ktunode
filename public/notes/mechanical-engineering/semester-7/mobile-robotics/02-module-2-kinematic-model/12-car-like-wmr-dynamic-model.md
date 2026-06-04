---
title: "Car-Like WMR Dynamic Model"
subject: "MOBILE ROBOTICS"
module: "Module 2: Kinematic model"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf48044640b0"
status: "completed"
scrapedAt: "2026-05-20T18:15:13.261Z"
---
# Mobile Robotics: Module 2 - Kinematic Model

## Topic: Car-Like WMR Dynamic Model

This module delves into the dynamic modeling of Car-Like Wheeled Mobile Robots (WMRs). While kinematic models describe how a robot moves (its configurations and velocities), dynamic models incorporate the forces and torques that cause these movements, taking into account mass, inertia, friction, and external forces. Understanding the dynamic model is crucial for realistic motion control, force estimation, and simulation.

---

### Learning Outcomes Covered:

*   Derive the dynamic model of mobile robots (CO3, K4)

---

### Course Outcomes Alignment:

*   **CO3: Derive dynamic model of mobile robots (Knowledge Level: K4)**
    This entire topic is dedicated to achieving this outcome. We will explore the fundamental principles and equations governing the forces and torques that drive a car-like WMR.

---

### 1. Introduction to Dynamics in Mobile Robotics

**Key Concept:** Dynamics deals with the *causes* of motion, not just the motion itself. It considers forces, torques, mass, inertia, and energy.

**Why is Dynamic Modeling Important for Car-Like WMRs?**

*   **Accurate Control:** For precise trajectory tracking, especially at higher speeds or under varying loads, understanding the forces involved is essential.
*   **Simulation:** Realistic simulations require accurate dynamic models to predict robot behavior.
*   **Force Control:** If the robot needs to interact with its environment (e.g., pushing an object), its dynamic capabilities must be modeled.
*   **Parameter Estimation:** Dynamic models help in identifying unknown parameters like friction coefficients or motor characteristics.
*   **Energy Efficiency:** Designing control strategies to minimize energy consumption benefits from dynamic insights.

**Textbook Reference:**
*   **Siegwart & Nourbakhsh (2011):** While Chapter 4 focuses on Kinematics, the transition to dynamics is often a natural progression. Dynamics builds upon the velocity descriptions from kinematics.
*   **Corke (2011):** Chapter 7 ("Robot Dynamics") would be a key reference, explaining general principles of rigid-body dynamics often applied to robot manipulators, but adaptable to WMRs.

---

### 2. Modeling the Car-Like WMR for Dynamics

**2.1. Generalized Coordinates and Configuration Space**

*   **Configuration:** The state of the robot, defined by its position and orientation in the workspace. For a car-like WMR, this is typically $(x, y, \theta)$.
*   **Generalized Coordinates:** The minimum set of independent variables needed to describe the robot's configuration. For a WMR, these are the same as the configuration variables: $q = [x, y, \theta]^T$.

**2.2. Velocity and Acceleration**

*   **Generalized Velocity:** $\dot{q} = [\dot{x}, \dot{y}, \dot{\theta}]^T$. This represents the linear velocity of the robot's reference point (e.g., the center of the rear axle) and its angular velocity.
*   **Generalized Acceleration:** $\ddot{q} = [\ddot{x}, \ddot{y}, \ddot{\ddot{\theta}}]^T$.

**2.3. Forces and Torques**

In a dynamic model, we relate generalized forces and torques to the accelerations of the generalized coordinates.

---

### 3. Lagrangian Dynamics for Car-Like WMRs

**Key Concept:** The Lagrangian formulation is a powerful method for deriving the equations of motion for mechanical systems. It is based on the system's kinetic and potential energies.

*   **Lagrangian ($L$)**: Defined as $L = T - P$, where $T$ is the kinetic energy and $P$ is the potential energy.
*   **Euler-Lagrange Equations**: For a system with generalized coordinates $q_i$, the equations of motion are:
    $$ \frac{d}{dt}\left(\frac{\partial L}{\partial \dot{q}_i}\right) - \frac{\partial L}{\partial q_i} = Q_i $$
    where $Q_i$ are the generalized non-conservative forces (e.g., forces due to motors, friction, external forces).

**3.1. Kinetic Energy ($T$)**

For a rigid body with mass $m$ and inertia $I$ (about its center of mass), and assuming motion in the $xy$-plane, the kinetic energy is:

$T = \frac{1}{2} m v_{cm}^2 + \frac{1}{2} I_{cm} \dot{\phi}^2$

where:
*   $v_{cm}$ is the velocity of the center of mass.
*   $I_{cm}$ is the moment of inertia about the center of mass.
*   $\dot{\phi}$ is the angular velocity of the body.

For a car-like WMR, we can simplify by considering the kinetic energy associated with the generalized coordinates $(x, y, \theta)$.
Let the robot be represented as a rigid body with mass $m$ and inertia $I$ (about its center of mass, CM).
Assume the reference point for $(x, y, \theta)$ is the center of the rear axle.

*   **Velocity of the reference point:** $(\dot{x}, \dot{y})$.
*   **Angular velocity:** $\dot{\theta}$.
*   **Position of the CM relative to the rear axle:** Let this be $(x_{cm/RA}, y_{cm/RA})$. If the rear axle is at the origin of the robot frame, and the CM is at $(x_{cm}, y_{cm})$ in this frame, and the steering angle is $\alpha$ (relative to the robot's body frame), then the CM's global position is:
    $x_{cm} = x + x_{cm/RA} \cos\theta - y_{cm/RA} \sin\theta$
    $y_{cm} = y + x_{cm/RA} \sin\theta + y_{cm/RA} \cos\theta$

The velocity of the CM is then $(\dot{x}_{cm}, \dot{y}_{cm})$.
The kinetic energy can be written in terms of generalized velocities:

$T = \frac{1}{2} m (\dot{x}_{cm}^2 + \dot{y}_{cm}^2) + \frac{1}{2} I_{cm} \dot{\theta}^2$

**Important Simplification (Commonly Used):** Often, the robot is simplified to have its mass concentrated at a single point, and inertia is either neglected or considered separately. If we consider the reference point $(x, y)$ to be the CM, then:

$T = \frac{1}{2} m (\dot{x}^2 + \dot{y}^2) + \frac{1}{2} I \dot{\theta}^2$

where $I$ is the moment of inertia about the robot's CM.

**3.2. Potential Energy ($P$)**

For a planar robot on a flat surface, the potential energy due to gravity is constant and can be set to zero if height does not change. We typically ignore potential energy in this context. $P = 0$.

**3.3. Lagrangian ($L$)**

$L = T - P = T = \frac{1}{2} m (\dot{x}^2 + \dot{y}^2) + \frac{1}{2} I \dot{\theta}^2$

**3.4. Applying Euler-Lagrange Equations**

Let's apply the equations for each generalized coordinate: $q_1 = x$, $q_2 = y$, $q_3 = \theta$.

*   **For $x$:**
    $\frac{\partial L}{\partial \dot{x}} = m\dot{x}$
    $\frac{d}{dt}\left(\frac{\partial L}{\partial \dot{x}}\right) = m\ddot{x}$
    $\frac{\partial L}{\partial x} = 0$
    So, $m\ddot{x} = Q_x$

*   **For $y$:**
    $\frac{\partial L}{\partial \dot{y}} = m\dot{y}$
    $\frac{d}{dt}\left(\frac{\partial L}{\partial \dot{y}}\right) = m\ddot{y}$
    $\frac{\partial L}{\partial y} = 0$
    So, $m\ddot{y} = Q_y$

*   **For $\theta$:**
    $\frac{\partial L}{\partial \dot{\theta}} = I\dot{\theta}$
    $\frac{d}{dt}\left(\frac{\partial L}{\partial \dot{\theta}}\right) = I\ddot{\theta}$
    $\frac{\partial L}{\partial \theta} = 0$
    So, $I\ddot{\theta} = Q_\theta$

**Observation:** This simple Lagrangian formulation results in decoupled equations $m\ddot{x} = Q_x$, $m\ddot{y} = Q_y$, $I\ddot{\theta} = Q_\theta$. This is *not* representative of a car-like WMR because it doesn't account for the *non-holonomic constraints* imposed by the steering mechanism. The velocity $(\dot{x}, \dot{y})$ is not independently controllable; it's linked to the steering angle.

**Textbook Reference:**
*   **Corke (2011):** Chapter 7 provides the general framework for Lagrangian dynamics. Applying it directly to WMRs without considering constraints leads to oversimplification.

---

### 4. Non-Holonomic Constraints and Generalized Forces

**Key Concept:** Non-holonomic constraints are relationships between velocities that cannot be integrated to relationships between positions. For a car-like WMR, the primary constraint is that the wheels roll without slipping and the steering wheel is perpendicular to the direction of motion of the front wheels.

**4.1. Kinematic Constraints for Car-Like WMRs**

From Module 2 (Kinematic Model), the unicycle-like kinematic model (assuming rear-wheel drive) is:
$\dot{x} = v \cos\theta$
$\dot{y} = v \sin\theta$
$\dot{\theta} = \omega$

Here, $v$ is the forward velocity (controlled by the driving wheels) and $\omega$ is the angular velocity (controlled by the steering mechanism and possibly drive).

These equations *are* the non-holonomic constraints. They limit the velocity space the robot can occupy.

**4.2. Dynamic Modeling with Non-Holonomic Constraints**

To incorporate dynamics, we need to consider the forces and torques acting on the robot and how they affect its acceleration, while respecting the kinematic constraints. Two common approaches are:

1.  **Lagrangian Mechanics with Lagrange Multipliers:** This method introduces multipliers to enforce the constraints.
2.  **Newton-Euler Formulation:** This approach directly applies Newton's second law and Euler's equation of motion, then uses the kinematic model to relate forces to generalized inputs.

Let's focus on a more practical approach often used in robotics literature: **modeling the forces at the wheels and relating them to the robot's motion.**

**4.3. Forces and Torques in a Car-Like WMR**

Consider the WMR as a rigid body with mass $m$ and moment of inertia $I$ about its CM. The primary inputs are the longitudinal force/velocity of the driving wheels and the steering angle/torque of the steering wheels.

Let's consider the driving force $F_d$ applied at the rear axle (or distributed).
Let the steering angle be $\delta$ (angle of the front wheels relative to the robot's body).
Let $v$ be the forward velocity of the robot's reference point (e.g., rear axle center).
Let $\omega$ be the angular velocity of the robot.

The forces acting on the robot are:
*   **Driving Force ($F_d$):** Applied by the driven wheels, primarily along the robot's longitudinal axis.
*   **Steering Force ($F_s$):** Acts at the front wheels, perpendicular to the wheel's direction of motion, to change the robot's orientation. This is related to steering torque.
*   **Friction Forces ($F_f$):** Resist motion, acting at the contact points of the wheels with the ground.
*   **External Forces ($F_{ext}$):** Any forces applied by the environment.

**Simplified Dynamic Model (Focusing on Control Inputs):**

We often directly model the relationship between control inputs (e.g., motor torques, steering angle) and the resulting accelerations, considering the system's inertia and friction.

Let the robot's state be $(x, y, \theta, v, \omega)$. However, $v$ and $\omega$ are often treated as control outputs derived from motor commands. A more direct dynamic approach relates forces to accelerations.

Consider the forces and torques on the WMR in its body frame.
Let:
*   $F_x$: Total longitudinal force acting on the robot's CM.
*   $F_y$: Total lateral force acting on the robot's CM.
*   $\tau$: Total torque about the robot's CM.

Newton-Euler equations in the body frame:
$m (\dot{v}_{body} - v_{body} \dot{\theta}_{body}) = F_x$  (This is actually complex as $v_{body}$ is velocity in body frame)
A better approach: Use the generalized velocities $(\dot{x}, \dot{y}, \dot{\theta})$ and relate forces to them.

Let's consider the forces contributing to the motion:
The driving force $F_d$ at the rear axle contributes to the robot's longitudinal acceleration.
The steering angle $\delta$ at the front wheels contributes to the robot's angular acceleration $\omega$.

A common dynamic model for a differential drive robot (a simpler case, but illustrates principles) is:
$m \ddot{x} = F_L + F_R$ (not quite, needs transformation)
$I \ddot{\theta} = R(F_R - F_L)$

For a car-like WMR, it's more complex due to steering.
Let's focus on the relationship between the *control inputs* and the resulting accelerations, considering the inertia and friction.

**Model based on Wheel Velocities and Forces:**

Let the velocities of the rear wheels be $v_r$ and the front wheels be $v_f$.
The steering angle is $\delta$.
The robot's longitudinal velocity is $v$, and angular velocity is $\omega$.

The kinematics are:
$\dot{x} = v \cos\theta$
$\dot{y} = v \sin\theta$
$\dot{\theta} = \frac{v}{L} \tan\delta$ (where $L$ is the wheelbase)

To get dynamics, we need to relate $v$ and $\omega$ to forces and torques.
$v$ is related to the force/torque of the driven wheels.
$\omega$ is related to the steering torque and the forces at the front wheels.

Consider the forces:
*   **Driving Force ($F_d$)**: Let this be the force at the rear axle contributing to $v$.
*   **Steering Torque ($\tau_s$)**: Applied to the front wheels.

**Dynamic Equations (Simplified):**

We can express the acceleration of the generalized coordinates $(\ddot{x}, \ddot{y}, \ddot{\theta})$ based on the robot's mass, inertia, and applied forces/torques.

$m\ddot{x} = F_{total\_x}$
$m\ddot{y} = F_{total\_y}$
$I\ddot{\theta} = \tau_{total}$

However, $F_{total\_x}$ and $F_{total\_y}$ are not directly controllable inputs. The inputs are typically motor torques and steering commands.

**Let's use a model derived from considering the forces at the wheels and their effect on the robot's body.**

Assume:
*   Mass $m$, Inertia $I$ about CM.
*   Rear wheels are driven, front wheels are steered.
*   Wheelbase $L$.
*   Control inputs: $u_v$ (related to longitudinal acceleration) and $u_\omega$ (related to angular acceleration, via steering torque).

A common simplified dynamic model, often used for control design, relates the robot's linear and angular acceleration to control inputs:

$\ddot{x} = u_v \cos\theta - \frac{v^2}{L} \sin\theta \tan\delta + \text{friction terms}$
$\ddot{y} = u_v \sin\theta + \frac{v^2}{L} \cos\theta \tan\delta + \text{friction terms}$
$\ddot{\theta} = \frac{u_v}{L} \tan\delta + \frac{v^2}{L^2} \sin\delta \cos\delta + \text{friction terms}$

This is still derived from kinematics and adding forces.

**A More Rigorous Approach (Newton-Euler on the Body):**

Consider the forces and torques in the robot's body frame.
Let $v_{body}$ be the forward velocity, and $\omega_{body}$ be the angular velocity.
Let the CM be at $(x_{cm}, y_{cm})$ in the body frame relative to the rear axle.

In the body frame, the acceleration of the CM is:
$a_{cm, x_{body}} = \ddot{v}_{body} - v_{body} \omega_{body}^2$ (centripetal term)
$a_{cm, y_{body}} = \ddot{\omega}_{body} v_{body} + \omega_{body} v_{body}$ (This is incorrect, should be acceleration in y-direction from steering)

Let's simplify the body frame forces:
*   Longitudinal force $F_x$: Primarily from the drive motor.
*   Lateral force $F_y$: From the steered wheels, creating the turning moment.
*   Torque $\tau$: From the steering mechanism and forces.

The equations of motion for the robot's body in its own frame are:
$m (a_{x, body} - v_{body} \omega_{body}) = F_x + F_{friction\_x}$
$m (a_{y, body} + v_{body} \omega_{body}) = F_y + F_{friction\_y}$
$I \dot{\omega}_{body} = \tau + \tau_{friction}$

Where:
*   $a_{x, body}$ and $a_{y, body}$ are accelerations of the CM in the body frame, which are related to the robot's forward and lateral accelerations.
*   $v_{body}$ is the forward velocity in the body frame (same as $v$ if CM is at rear axle).
*   $\omega_{body}$ is the angular velocity (same as $\omega$).

The challenge is relating $F_x, F_y, \tau$ to control inputs ($u_v, u_\omega$) and the kinematic state $(v, \theta, \delta)$.

**Textbook Reference:**
*   **Siegwart & Nourbakhsh (2011):** Chapter 4 mentions that dynamics are more complex than kinematics due to forces and inertia. They might provide simplified dynamic models or refer to external works.
*   **Tzafestas (2011):** Likely to have detailed coverage of robot dynamics, including formulations for different robot types.

---

### 5. Parameterizing the Dynamic Model

To use a dynamic model for control or simulation, we need to identify its parameters.

**Key Parameters:**

*   **Mass ($m$)**: Total mass of the robot.
*   **Inertia ($I$)**: Moment of inertia about the robot's center of mass. This is crucial for rotational dynamics.
*   **Wheelbase ($L$)**: Distance between the front and rear axles.
*   **Wheel Radius ($r$)**: Radius of the driving wheels.
*   **Friction Coefficients**:
    *   **Rolling Resistance**: Opposes forward motion.
    *   **Coulomb Friction**: Opposes motion when there's contact.
    *   **Viscous Friction**: Proportional to velocity.
    *   **Stiction**: Friction that must be overcome to start motion.
*   **Motor Characteristics**: Torque constants, back-EMF constants, gear ratios, motor inertia.
*   **Steering System Parameters**: Steering ratio, motor torque for steering.

**How to Identify Parameters:**

*   **Direct Measurement**: Measure mass. Estimate inertia through experiments (e.g., swinging the robot).
*   **System Identification**: Apply known forces/torques and measure resulting accelerations to estimate parameters.
*   **Model Fitting**: Tune model parameters to match observed robot behavior in experiments.

**Reference Books:**
*   **Probabilistic Robotics (Thrun, Burgard, Fox, 2005):** This book is excellent for understanding how models are used in practice, including dealing with parameter uncertainty and using data for parameter estimation (system identification).

---

### 6. Practical Dynamic Models for Car-Like WMRs

Given the complexity of full physics-based models, simpler, yet effective, dynamic models are often used for control.

**6.1. Simplified Model with Control Inputs:**

A common approach is to directly relate the robot's linear velocity $v$ and angular velocity $\omega$ to control inputs applied to the motors and steering.

Let the control inputs be:
*   $u_1$: Command for longitudinal acceleration (e.g., motor torque scaled appropriately).
*   $u_2$: Command for angular acceleration (e.g., steering torque scaled appropriately).

However, the relationship is not always linear and involves many parameters. A more practical model might look at the dynamics of $v$ and $\omega$:

$\dot{v} = \frac{1}{m_{eff}} (F_{drive} - F_{friction\_v}) + \text{terms from steering}$
$\dot{\omega} = \frac{1}{I_{eff}} (\tau_{steering} - \tau_{friction\_v}) + \text{terms from } v$

Where $m_{eff}$ and $I_{eff}$ are effective mass and inertia, which can include contributions from the motors and drivetrain.

**6.2. Model for Control (e.g., Feedback Linearization):**

For control design techniques like feedback linearization, the dynamic model is often expressed in a form that separates nonlinearities and control inputs.

Using the unicycle-like kinematics:
$\dot{x} = v \cos\theta$
$\dot{y} = v \sin\theta$
$\dot{\theta} = \omega$

And assuming $v$ and $\omega$ can be controlled (though their dynamics aren't explicitly stated):

$\dot{v} = u_v$ (This assumes $u_v$ directly controls $v$'s acceleration)
$\dot{\omega} = u_\omega$ (This assumes $u_\omega$ directly controls $\omega$'s acceleration)

Then, the accelerations of $x, y, \theta$ are:
$\ddot{x} = \dot{v} \cos\theta - v \dot{\theta} \sin\theta = u_v \cos\theta - v \omega \sin\theta$
$\ddot{y} = \dot{v} \sin\theta + v \dot{\theta} \cos\theta = u_v \sin\theta + v \omega \cos\theta$
$\ddot{\theta} = \dot{\omega} = u_\omega$

This is a simplified dynamic model where $u_v$ and $u_\omega$ are the *control accelerations*. These control accelerations are generated by the underlying physics (motor torques, etc.).

**Example: Car-like WMR Dynamics with Control Inputs $u_1$ (drive) and $u_2$ (steer):**

Let's consider the forward velocity $v$ and steering angle $\delta$ as the controlled outputs, whose dynamics we can model.

*   **Drive Dynamics:**
    $m_{eff} \dot{v} = u_1 - k_v v - F_{ground\_resistance}$
    where $u_1$ is related to motor torque, $m_{eff}$ is effective mass, $k_v$ is viscous friction coefficient.

*   **Steering Dynamics:**
    $I_{steering} \dot{\omega} = u_2 - k_\omega \omega - \text{damping}$
    where $u_2$ is related to steering motor torque, $I_{steering}$ is inertia of steering mechanism, $k_\omega$ is steering friction/damping.

And the kinematic relations:
$\dot{x} = v \cos\theta$
$\dot{y} = v \sin\theta$
$\dot{\theta} = \omega = \frac{v}{L} \tan\delta$

This highlights that the dynamics of $v$ and $\omega$ are often modeled separately and then fed into the kinematic equations.

**Important Note:** The precise form of the dynamic model depends on the robot's architecture (rear-wheel drive, front-wheel drive, all-wheel drive) and the level of detail required. For many control applications, the simplified model focusing on $v$ and $\omega$ dynamics is sufficient.

**Textbook Reference:**
*   **Siegwart & Nourbakhsh (2011):** Might discuss different types of WMRs and their associated dynamic considerations.
*   **Corke (2011):** Provides foundational dynamics that can be adapted.

---

### 7. Practice Questions

**Question 1:**
Which of the following best describes what a dynamic model of a mobile robot aims to capture?
a) The robot's current position and orientation in the environment.
b) The relationship between the robot's forces/torques and its accelerations.
c) The robot's velocity and angular velocity without considering their causes.
d) The types of sensors the robot uses for navigation.

**Answer 1:**
b) The relationship between the robot's forces/torques and its accelerations.

**Question 2:**
For a car-like WMR, what is the primary type of constraint that makes its dynamic modeling different from a simple point mass?
a) Holonomic constraint
b) Non-holonomic constraint
c) Kinematic constraint
d) Dynamic constraint

**Answer 2:**
b) Non-holonomic constraint. The fact that wheels roll without slipping and are constrained to move in a specific direction (perpendicular to their axis for unsteered wheels) is a non-holonomic constraint.

**Question 3:**
If you were to use the Lagrangian formulation to derive the dynamic model of a car-like WMR, which components would you need to define?
a) Kinetic energy and potential energy only.
b) Kinetic energy, potential energy, and generalized forces.
c) Only generalized forces and accelerations.
d) Only the robot's mass and inertia.

**Answer 3:**
b) Kinetic energy, potential energy, and generalized forces. The Euler-Lagrange equations require these components.

**Question 4:**
List at least three key parameters that would be essential to identify for a dynamic model of a car-like WMR.

**Answer 4:**
Any three of the following:
*   Mass ($m$)
*   Moment of Inertia ($I$)
*   Wheelbase ($L$)
*   Wheel Radius ($r$)
*   Friction coefficients (e.g., rolling resistance, viscous friction)
*   Motor torque constants

---

### 8. Important Points to Remember

*   **Dynamics vs. Kinematics:** Kinematics describes *how* a robot moves (position, velocity), while dynamics describes *why* it moves (forces, torques, inertia).
*   **Non-Holonomic Constraints:** These are critical for WMRs and significantly complicate their dynamic modeling compared to simpler robots like differential drives (which can be viewed as holonomic in certain contexts).
*   **Lagrangian Formulation:** A powerful tool for deriving equations of motion, but needs careful handling of constraints.
*   **Newton-Euler:** An alternative formulation based on force and torque balance.
*   **Parameter Identification:** A crucial step for making dynamic models practical. This involves understanding the robot's physical properties.
*   **Simplified Models:** For control purposes, simplified dynamic models (often relating control inputs to $v$ and $\omega$ dynamics) are frequently used.
*   **Coupling:** The dynamics of linear and angular motion are coupled in car-like WMRs due to steering.

---

This concludes Module 2's topic on the Car-Like WMR Dynamic Model. Understanding these principles is foundational for advanced control and simulation of these ubiquitous robots.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
