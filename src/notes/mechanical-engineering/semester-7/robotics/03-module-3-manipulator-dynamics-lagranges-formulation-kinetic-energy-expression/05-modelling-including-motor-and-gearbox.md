---
title: "modelling including motor and gearbox"
subject: "ROBOTICS"
module: "Module 3: Manipulator Dynamics: Lagrange’s formulation – Kinetic Energy expression"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804464253"
status: "completed"
scrapedAt: "2026-05-20T18:18:48.786Z"
---
# ROBOTICS: Module 3: Manipulator Dynamics - Kinetic Energy Expression

## Topic: Modelling Including Motor and Gearbox

### 1. Introduction to Manipulator Dynamics

**Objective:** To understand the forces and torques required to move a robotic manipulator and to develop mathematical models that describe this behavior. This is crucial for control design and simulation.

**Key Concept:** Dynamics describes the relationship between forces/torques and the resulting motion (acceleration).

**Relevance to Course Outcomes:**
*   **CO4: Develop a dynamic model and design the controller for robotic manipulators (Knowledge Level: K4, K6)**: This entire module directly contributes to developing the dynamic model, a prerequisite for controller design.

### 2. Lagrange's Formulation for Manipulator Dynamics

**Objective:** To derive the equations of motion for a robotic manipulator using a systematic and generalizable method.

**Key Concept:** Lagrange's formulation is based on the principle of energy. It relates the kinetic energy ($T$) and potential energy ($V$) of a system to derive its equations of motion. The core equation is:

$ \frac{d}{dt}\left(\frac{\partial L}{\partial \dot{q}_i}\right) - \frac{\partial L}{\partial q_i} = Q_i $

where:
*   $L = T - V$ is the Lagrangian of the system.
*   $q_i$ are the generalized coordinates (e.g., joint angles).
*   $\dot{q}_i$ are the generalized velocities.
*   $Q_i$ are the generalized forces/torques (non-conservative forces, including applied torques, friction, etc.).

**Reference:** Schilling, Chapter 7 (Dynamics of Manipulators); Craig, Chapter 6 (Dynamics of Articulated Robots); Saha, Chapter 4 (Dynamics of Robot Manipulators).

**How it applies to robots:** Robotic manipulators are systems of interconnected rigid bodies (links) that move relative to each other at joints. Their dynamics can be derived by considering the kinetic and potential energy of each link.

### 3. Kinetic Energy Expression of a Manipulator

**Objective:** To understand how to calculate the total kinetic energy of a robotic manipulator, which is a key component in Lagrange's formulation.

**Key Concept:** The kinetic energy of a rigid body is the energy it possesses due to its motion. For a robotic manipulator, this includes the translational and rotational kinetic energy of each link.

**For a single rigid link:**
The kinetic energy ($T_{link}$) of a single link is given by the sum of its translational kinetic energy ($T_{trans}$) and rotational kinetic energy ($T_{rot}$).

$ T_{link} = T_{trans} + T_{rot} $

*   **Translational Kinetic Energy ($T_{trans}$):** This is the energy due to the motion of the link's center of mass (CoM).

    $ T_{trans} = \frac{1}{2} m |\mathbf{v}_{CoM}|^2 $

    where:
    *   $m$ is the mass of the link.
    *   $\mathbf{v}_{CoM}$ is the linear velocity of the link's CoM.

*   **Rotational Kinetic Energy ($T_{rot}$):** This is the energy due to the rotation of the link about its CoM.

    $ T_{rot} = \frac{1}{2} \boldsymbol{\omega}^T \mathbf{I}_{CoM} \boldsymbol{\omega} $

    where:
    *   $\boldsymbol{\omega}$ is the angular velocity vector of the link.
    *   $\mathbf{I}_{CoM}$ is the inertia tensor of the link about its CoM, expressed in a suitable coordinate frame.

**For a multi-link manipulator:**
The total kinetic energy ($T$) of the manipulator is the sum of the kinetic energies of all its links.

$ T = \sum_{i=1}^{n} T_{link_i} $

where $n$ is the number of links.

**Coordinate Frames:** To compute these velocities and inertia tensors, it's essential to define coordinate frames for each link and a base frame. Transformations between these frames (using Denavit-Hartenberg parameters or similar conventions) are crucial.

**Example (A Single Revolute Joint):**
Consider a single rigid link of mass $m$ and inertia $\mathbf{I}_{CoM}$ rotating with angular velocity $\boldsymbol{\omega}$ about a revolute joint. Let the CoM be at a distance $r_{CoM}$ from the joint axis.

*   If the rotation is about the z-axis, $\boldsymbol{\omega} = [0, 0, \dot{\theta}]^T$.
*   The velocity of the CoM will be $\mathbf{v}_{CoM} = \boldsymbol{\omega} \times \mathbf{r}_{CoM}$. If $\mathbf{r}_{CoM} = [r_{CoM}, 0, 0]^T$ in the link frame and rotation is about z, then $\mathbf{v}_{CoM} = [0, \dot{\theta} r_{CoM}, 0]^T$.
*   $T_{trans} = \frac{1}{2} m (\dot{\theta} r_{CoM})^2$.
*   $T_{rot} = \frac{1}{2} \dot{\theta}^2 I_{zz}$, where $I_{zz}$ is the moment of inertia about the axis of rotation.

**Important Point to Remember:** When calculating kinetic energy for a multi-DOF manipulator, the velocities of each link are dependent on the joint velocities of all preceding joints.

**Reference:** Ghosal, Chapter 5 (Kinematics and Dynamics); Siciliano et al. (Springer), Chapter 4 (Dynamics of Robot Manipulators).

### 4. Modelling Including Motor and Gearbox

**Objective:** To incorporate the effects of motors and gearboxes into the manipulator's dynamic model, as these are the actuators that drive the joints.

**Why Model Motors and Gearboxes?**
*   **Actuation Torque/Force:** Motors and gearboxes are responsible for generating the torques/forces applied at the joints.
*   **Inertia:** Motors and gearboxes have their own inertia, which adds to the total inertia of the system.
*   **Efficiency/Losses:** Gearboxes are not perfectly efficient and can introduce friction and backlash, which affect the actual torque delivered.

#### 4.1 Motor Dynamics

**Objective:** To represent the behavior of an electric motor.

**Key Concept:** DC motors are commonly used in robotics. Their behavior can be modeled using electrical and mechanical equations.

**DC Motor Model:**
Consider a DC motor with armature resistance $R_a$, armature inductance $L_a$, back EMF constant $K_e$, and torque constant $K_t$. The motor drives a joint with inertia $J_m$ and angular velocity $\dot{\theta}_m$.

*   **Electrical Equation:**
    $ V_a = R_a i_a + L_a \frac{di_a}{dt} + K_e \dot{\theta}_m $
    where $V_a$ is the armature voltage and $i_a$ is the armature current.

*   **Torque Equation:**
    $ \tau_m = K_t i_a $
    The torque generated by the motor is proportional to the armature current.

*   **Mechanical Equation (Motor Rotor):**
    $ \tau_m - \tau_{load} = J_m \ddot{\theta}_m $
    where $\tau_{load}$ is the torque applied by the load (e.g., gearbox or robot link), and $J_m$ is the inertia of the motor rotor.

**Combining for Torque and Velocity:**
We can express the motor torque as a function of voltage and joint velocity:
From the electrical equation, assuming $L_a$ is small or steady-state: $i_a \approx \frac{V_a - K_e \dot{\theta}_m}{R_a}$.
Then, $\tau_m = K_t i_a \approx \frac{K_t}{R_a} (V_a - K_e \dot{\theta}_m)$.

This shows that motor torque is proportional to applied voltage and inversely related to motor speed (due to back EMF).

**Reference:** Schilling, Chapter 5 (Actuators); Craig, Chapter 6 (in the context of control inputs); Saha, Chapter 3 (Actuators).

#### 4.2 Gearbox Dynamics

**Objective:** To model the effect of a gearbox on torque transmission and inertia.

**Key Concept:** Gearboxes are used to:
1.  **Increase Torque:** Reduce speed and increase torque.
2.  **Reduce Speed:** Match motor speed to desired joint speed.
3.  **Increase Inertia:** The reflected inertia of the motor and gearbox components at the output shaft.

**Ideal Gearbox Model:**
For a simple planetary or spur gearbox with a gear ratio $N$ (output speed / input speed):

*   **Speed Relationship:** $\dot{\theta}_{out} = \frac{1}{N} \dot{\theta}_{in}$
*   **Torque Relationship:** $\tau_{out} = N \tau_{in}$ (assuming 100% efficiency)

**Reflected Inertia:**
The inertia of the motor rotor ($J_m$) when viewed from the output shaft of the gearbox is reflected as:

$ J_{m,reflected} = J_m N^2 $

If the gearbox itself has inertia $J_g$ (at the input shaft), then the total inertia at the output shaft due to the motor and gearbox input is approximately:

$ J_{total\_reflected\_input} = (J_m + J_g) N^2 $

**Inertia at the Output:**
The inertia of the load connected to the output shaft ($J_{load}$) is the inertia of the robot link. The total inertia at the output shaft ($J_{out}$) is the sum of the reflected motor/gearbox inertia and the load inertia:

$ J_{out} = J_{load} + J_{m,reflected} $ (simplified if $J_g$ is small or at output)

**Non-Ideal Gearbox Effects:**
*   **Efficiency ($\eta$):** The actual output torque is $\tau_{out} = \eta N \tau_{in}$. Efficiency is usually less than 1 and can be load-dependent.
*   **Friction:** Static and dynamic friction in the gearbox.
*   **Backlash:** Small gaps between gear teeth, leading to lost motion and imprecise positioning. This is a significant non-linearity.

**Reference:** Mittal, Chapter 7 (Drive Train Dynamics); Ghosal, Chapter 5 (in the context of actuators); Craig, Chapter 6.

#### 4.3 Combined Dynamic Model

**Objective:** To integrate motor and gearbox dynamics into the overall manipulator equations of motion.

**Lagrange's Equation with Actuation:**
The generalized forces $Q_i$ in Lagrange's equation will include the torques generated by the motors, after being modified by the gearbox.

Let $q_i$ be the joint angle of the $i$-th joint, and $\tau_{joint_i}$ be the torque applied at that joint.
If the $i$-th joint is driven by a motor with gearbox:
*   Motor torque: $\tau_{m_i}$
*   Gear ratio: $N_i$
*   Gearbox efficiency: $\eta_i$

The torque applied to the joint from the motor and gearbox is:
$ \tau_{joint_i} = \eta_i N_i \tau_{m_i} $

The motor torque $\tau_{m_i}$ can be expressed in terms of motor voltage $V_{a_i}$ and motor speed $\dot{\theta}_{m_i}$:
$ \tau_{m_i} = K_{t_i} i_{a_i} \approx \frac{K_{t_i}}{R_{a_i}} (V_{a_i} - K_{e_i} \dot{\theta}_{m_i}) $

The motor speed is related to the joint speed by the gear ratio: $\dot{\theta}_{m_i} = N_i \dot{q}_i$.
Substituting this:
$ \tau_{m_i} \approx \frac{K_{t_i}}{R_{a_i}} (V_{a_i} - K_{e_i} N_i \dot{q}_i) $

So, the torque at the joint is:
$ \tau_{joint_i} = \eta_i N_i \left( \frac{K_{t_i}}{R_{a_i}} (V_{a_i} - K_{e_i} N_i \dot{q}_i) \right) $
$ \tau_{joint_i} = \frac{\eta_i K_{t_i} N_i}{R_{a_i}} V_{a_i} - \frac{\eta_i K_{t_i} K_{e_i} N_i^2}{R_{a_i}} \dot{q}_i $

This equation shows the effective torque applied to the joint as a function of control voltage and joint velocity (which includes viscous friction from the motor).

The full dynamic equation for the $i$-th joint (ignoring coupling terms for simplicity here, but they are present in the full Lagrange derivation) becomes:

$ M_{ii}(q) \ddot{q}_i + \sum_{j \neq i} M_{ij}(q) \ddot{q}_j + C_i(q, \dot{q}) + G_i(q) = \tau_{joint_i} $

Substituting the motor/gearbox torque:

$ M_{ii}(q) \ddot{q}_i + \sum_{j \neq i} M_{ij}(q) \ddot{q}_j + C_i(q, \dot{q}) + G_i(q) = \frac{\eta_i K_{t_i} N_i}{R_{a_i}} V_{a_i} - \frac{\eta_i K_{t_i} K_{e_i} N_i^2}{R_{a_i}} \dot{q}_i $

**Inertial Terms:** The mass matrix $M(q)$ will include the inertias of the links, as well as the reflected inertias of the motor rotors and gearboxes.

**Reference:** Craig, Chapter 6 (Equations of Motion); Saha, Chapter 4 (Dynamics of Robot Manipulators, including actuators).

### 5. Key Concepts and Definitions

*   **Lagrangian (L):** $L = T - V$.
*   **Kinetic Energy (T):** Energy of motion, sum of translational and rotational.
*   **Translational Kinetic Energy:** $\frac{1}{2} m |\mathbf{v}_{CoM}|^2$.
*   **Rotational Kinetic Energy:** $\frac{1}{2} \boldsymbol{\omega}^T \mathbf{I}_{CoM} \boldsymbol{\omega}$.
*   **Inertia Tensor (I):** Describes how mass is distributed around an axis of rotation.
*   **Motor Torque Constant ($K_t$):** Torque produced per unit armature current.
*   **Back EMF Constant ($K_e$):** Voltage generated per unit angular velocity.
*   **Gear Ratio (N):** Ratio of input speed to output speed.
*   **Reflected Inertia:** Inertia of a component viewed from a different point in the system due to a gearbox.
*   **Generalized Coordinates:** Independent variables describing the configuration of a system (e.g., joint angles).
*   **Generalized Forces:** Forces or torques acting on the system that are not derivable from a potential energy function (e.g., motor torques, friction).

### 6. Practice Questions and Exercises

**Question 1:**
Consider a single robotic link that is a uniform slender rod of mass $m$ and length $L$. The rod is rotating about its base joint with angular velocity $\dot{\theta}$. The center of mass is at $L/2$.
(a) Calculate the translational kinetic energy of the link.
(b) Calculate the rotational kinetic energy of the link, assuming the rotation is about an axis perpendicular to the rod and passing through the base joint. The moment of inertia of the rod about its center of mass is $\frac{1}{12}mL^2$.

**Answer 1:**
Let the base joint be at the origin, and the rod lie along the x-axis. Rotation is about the z-axis.
Angular velocity $\boldsymbol{\omega} = [0, 0, \dot{\theta}]^T$.
Center of mass $\mathbf{r}_{CoM} = [L/2, 0, 0]^T$ in the link frame.
(a) Velocity of CoM: $\mathbf{v}_{CoM} = \boldsymbol{\omega} \times \mathbf{r}_{CoM} = [0, 0, \dot{\theta}]^T \times [L/2, 0, 0]^T = [0, \dot{\theta}(L/2), 0]^T$.
$|\mathbf{v}_{CoM}|^2 = (\dot{\theta} L/2)^2$.
$T_{trans} = \frac{1}{2} m (\dot{\theta} L/2)^2 = \frac{1}{8} mL^2 \dot{\theta}^2$.

(b) Moment of inertia of the rod about its center of mass (about z-axis): $I_{CoM, zz} = \frac{1}{12}mL^2$.
The inertia tensor for a rod rotated about the z-axis through its CoM (if rod is along x) would have $I_{zz} = \frac{1}{12}mL^2$.
However, we need the inertia of rotation *about the axis of rotation*, which is the z-axis at the base. The moment of inertia of a rod of mass $m$ about one end is $I_{end} = \frac{1}{3}mL^2$.
So, $T_{rot} = \frac{1}{2} I_{end} \dot{\theta}^2 = \frac{1}{2} (\frac{1}{3}mL^2) \dot{\theta}^2 = \frac{1}{6}mL^2 \dot{\theta}^2$.

**Question 2:**
A DC motor with parameters $K_t = 0.1 \, Nm/A$, $K_e = 0.1 \, Vs/rad$, $R_a = 1 \, \Omega$, $J_m = 0.01 \, kgm^2$ is connected to a robot joint. The motor drives the joint through a gearbox with a ratio $N=50$. The joint is loaded with an inertia $J_{load} = 0.1 \, kgm^2$. Assume 100% gearbox efficiency.
(a) What is the torque applied to the joint if the motor armature current is $2 \, A$?
(b) What is the speed of the motor rotor if a voltage of $10 \, V$ is applied and the joint is stationary ($J_{load}$ is not moving)?
(c) What is the total inertia of the joint as seen from the output shaft of the gearbox?

**Answer 2:**
(a) Motor torque: $\tau_m = K_t i_a = 0.1 \, Nm/A \times 2 \, A = 0.2 \, Nm$.
Joint torque (with 100% efficiency): $\tau_{joint} = N \tau_m = 50 \times 0.2 \, Nm = 10 \, Nm$.

(b) Motor speed relation from voltage: $V_a = R_a i_a + K_e \dot{\theta}_m$.
If joint is stationary, load torque is 0. Assume $L_a$ is negligible, so $V_a \approx R_a i_a + K_e \dot{\theta}_m$.
When joint is stationary, the load is not moving, so $J_{load} \ddot{\theta}_{joint} = 0$.
Since $\dot{\theta}_{joint} = \dot{\theta}_m / N$, if $\dot{\theta}_{joint}=0$, then $\dot{\theta}_m=0$.
So, $10 \, V = 1 \, \Omega \times i_a + 0.1 \, Vs/rad \times 0 \, rad/s$.
$10 \, V = 1 \, \Omega \times i_a \implies i_a = 10 \, A$.
Motor speed $\dot{\theta}_m = 0 \, rad/s$. (This is a bit of a trick question if not carefully read - the back-EMF term is zero when speed is zero.)
Let's rephrase: what is the motor speed if the joint is held stationary by an external force, but the motor is allowed to spin? This is still $0$.
Let's assume the question meant: what is the motor speed if the joint is *free to move* and the motor voltage is 10V, and we want to find $\dot{\theta}_m$ if the joint torque is zero (free motion)? In that case, $\tau_{joint}=0$, $\tau_m=0$, $i_a=0$. $10V = 1 \Omega \times 0 A + 0.1 Vs/rad \times \dot{\theta}_m \implies \dot{\theta}_m = 100 \, rad/s$.
Given the wording, "joint is stationary," it implies $\dot{\theta}_{joint}=0$, hence $\dot{\theta}_m=0$.

(c) Reflected inertia of motor rotor: $J_{m,reflected} = J_m N^2 = 0.01 \, kgm^2 \times (50)^2 = 0.01 \times 2500 = 25 \, kgm^2$.
Total inertia at the output shaft: $J_{out} = J_{load} + J_{m,reflected} = 0.1 \, kgm^2 + 25 \, kgm^2 = 25.1 \, kgm^2$.

**Question 3:**
Discuss the impact of gearbox backlash on the dynamic model of a manipulator.

**Answer 3:**
Gearbox backlash introduces a non-linearity into the system. It represents a dead zone where input motion does not immediately translate to output motion.
*   **Modeling Difficulty:** Backlash is challenging to model precisely with simple linear differential equations. It requires more advanced techniques like state-dependent parameters or specific non-linear models.
*   **Hysteresis:** It causes hysteresis in the torque-angle relationship.
*   **Positioning Errors:** During motion reversal, there's a period of no output movement, leading to position errors.
*   **Control Issues:** It can destabilize controllers if not accounted for, especially high-gain controllers.
*   **Vibration and Noise:** It can contribute to vibrations and noise during operation.

### 7. Important Points to Remember

*   **Total Kinetic Energy:** Sum of kinetic energies of all links.
*   **Coordinate Frames:** Essential for correctly calculating velocities and applying transformations.
*   **Motor-Gearbox Integration:** Model the reflected inertia and torque transmission accurately.
*   **Lagrange's Formulation:** A powerful, systematic way to derive equations of motion for complex mechanical systems like robots.
*   **Non-linearities:** Be aware of non-ideal effects like friction, backlash, and motor efficiency, which make the actual system dynamics more complex than ideal models.
*   **CO4 Alignment:** The ability to derive these dynamic models is a direct step towards designing effective controllers for robotic manipulators.

---

This study material provides a foundational understanding of deriving manipulator kinetic energy and incorporating motor and gearbox dynamics using Lagrange's formulation, aligning with the objectives of CO4 in understanding and developing dynamic models.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
