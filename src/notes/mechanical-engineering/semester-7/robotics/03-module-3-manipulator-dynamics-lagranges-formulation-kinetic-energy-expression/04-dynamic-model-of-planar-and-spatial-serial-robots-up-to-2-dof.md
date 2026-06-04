---
title: "Dynamic model of planar and spatial serial robots up to 2 DOF"
subject: "ROBOTICS"
module: "Module 3: Manipulator Dynamics: Lagrange’s formulation – Kinetic Energy expression"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804464252"
status: "completed"
scrapedAt: "2026-05-20T18:18:48.086Z"
---
# ROBOTICS: Module 3: Manipulator Dynamics: Lagrange’s Formulation – Kinetic Energy Expression

## Topic: Dynamic Model of Planar and Spatial Serial Robots up to 2 DOF

This module delves into the dynamics of robotic manipulators, focusing on deriving their dynamic models using Lagrange's formulation, with a specific emphasis on the kinetic energy expression. We will explore this for both planar and spatial serial robots with up to two degrees of freedom (DOF).

---

### 1. Introduction to Manipulator Dynamics

**Understanding Dynamics:**
Manipulator dynamics describes the relationship between the forces/torques applied to a robot's joints and the resulting motion (position, velocity, acceleration). This is crucial for:
*   **Control Design:** To command the robot to move accurately and efficiently.
*   **Simulation:** To predict robot behavior under various conditions.
*   **Motion Planning:** To understand the forces required for specific movements.

**Key Concepts:**
*   **Degrees of Freedom (DOF):** The minimum number of independent parameters required to specify the configuration of the robot. For a planar robot, each revolute joint adds 1 DOF, and each prismatic joint adds 1 DOF. For a spatial robot, each revolute joint adds 1 DOF, and each prismatic joint adds 1 DOF.
*   **Joint Variables:** The parameters that define the configuration of the robot (e.g., joint angles for revolute joints, joint displacements for prismatic joints).
*   **Generalized Coordinates:** A minimal set of independent variables that completely describe the configuration of the system. For a 2-DOF robot, these are typically the joint variables.

**Reference:**
*   Craig, J. J. (2002). *Introduction to Robotics: Mechanics and Control*. Pearson Education Asia. (Chapter 8: Robot Dynamics)
*   Saha, S. K. (n.d.). *Introduction to Robotics*. McGraw Hill Education. (Chapters on Robot Dynamics)

---

### 2. Lagrange's Formulation

**Overview:**
Lagrange's formulation is a powerful method for deriving the equations of motion for mechanical systems. It is based on the concept of energy. The fundamental principle is that the difference between the kinetic energy (T) and potential energy (V) of the system, known as the Lagrangian (L), evolves over time according to the Euler-Lagrange equations.

**The Lagrangian (L):**
$L = T - V$

Where:
*   $T$ is the kinetic energy of the system.
*   $V$ is the potential energy of the system.

**Euler-Lagrange Equations:**
For a system with $n$ generalized coordinates $q_1, q_2, ..., q_n$, the equations of motion are given by:

$\frac{d}{dt}\left(\frac{\partial L}{\partial \dot{q}_i}\right) - \frac{\partial L}{\partial q_i} = Q_i \quad \text{for } i = 1, 2, ..., n$

Where:
*   $q_i$ is the $i$-th generalized coordinate.
*   $\dot{q}_i$ is the time derivative of the $i$-th generalized coordinate (generalized velocity).
*   $Q_i$ is the generalized force or torque acting on the $i$-th generalized coordinate. For torque-controlled joints, $Q_i$ represents the applied torque or force.

**Importance in Robotics:**
Lagrange's formulation directly yields the equations of motion in terms of joint torques and accelerations, which is ideal for deriving the dynamic model of a robot manipulator. It also naturally accounts for inertia, Coriolis, centrifugal, and gravitational forces.

**Reference:**
*   Ghosal, A. (n.d.). *Robotics-Fundamental Concepts and Analysis*. Oxford University Press. (Chapters on Lagrangian Dynamics)
*   Mittal, R. K. (2003). *Robotics and Control*. Tata McGraw Hill. (Chapters on Robot Dynamics using Lagrangian approach)

---

### 3. Kinetic Energy Expression (T)

The kinetic energy of a rigid body is the energy it possesses due to its motion. For a robotic manipulator, which is a serial chain of links, the total kinetic energy is the sum of the kinetic energies of each individual link.

**Kinetic Energy of a Single Link:**
The kinetic energy of a single rigid link $k$ can be expressed as:

$T_k = \frac{1}{2} m_k \mathbf{v}_{ck}^T \mathbf{v}_{ck} + \frac{1}{2} \boldsymbol{\omega}_k^T \mathbf{I}_k \boldsymbol{\omega}_k$

Where:
*   $m_k$ is the mass of link $k$.
*   $\mathbf{v}_{ck}$ is the linear velocity of the center of mass (CM) of link $k$.
*   $\boldsymbol{\omega}_k$ is the angular velocity of link $k$.
*   $\mathbf{I}_k$ is the inertia tensor of link $k$ about its CM.
*   $^T$ denotes the transpose.

**Important Considerations for Deriving T:**
1.  **Kinematics:** The velocities ($\mathbf{v}_{ck}$ and $\boldsymbol{\omega}_k$) of each link's CM are functions of the robot's joint variables ($q_i$) and their time derivatives ($\dot{q}_i$). This requires the use of forward kinematics to determine the position and orientation of each link.
2.  **Reference Frames:** It's crucial to define consistent reference frames for each link and for the base of the robot. Transformations between these frames are used to express velocities in a common frame.
3.  **Center of Mass (CM):** The location of the CM for each link must be known.

**Types of Kinetic Energy:**
*   **Translational Kinetic Energy:** $\frac{1}{2} m_k |\mathbf{v}_{ck}|^2$
*   **Rotational Kinetic Energy:** $\frac{1}{2} \boldsymbol{\omega}_k^T \mathbf{I}_k \boldsymbol{\omega}_k$

**Reference:**
*   Schilling, R. J. (1996). *Fundamentals of Robotics – Analysis and Control*. Prentice Hall of India. (Chapter on Robot Dynamics)
*   Lynch, K. M., Park, F. C. (2015). *Modern Robotics Mechanics, Planning and Control*. Cambridge University Press. (Chapter 3: Robot Kinematics - Velocity Kinematics)

---

### 4. Dynamic Model of Planar Serial Robots up to 2 DOF

Let's consider a planar serial robot with two links and two revolute joints.
*   **Link 1:** Mass $m_1$, CM position $\mathbf{r}_{c1}$, Inertia $I_1$.
*   **Link 2:** Mass $m_2$, CM position $\mathbf{r}_{c2}$, Inertia $I_2$.
*   **Joint Variables:** $q_1$ (angle of link 1 w.r.t. base), $q_2$ (angle of link 2 w.r.t. link 1).
*   **Applied Torques:** $\tau_1$, $\tau_2$.

**Step 1: Forward Kinematics (for Velocity Calculation)**
We need to find the position and orientation of the CM of each link. Assuming the base frame is at the base of the first joint:
*   **Link 1 CM:** Position $\mathbf{r}_{c1}$, Velocity $\mathbf{v}_{c1} = \dot{\mathbf{r}}_{c1}$, Angular Velocity $\boldsymbol{\omega}_1 = \dot{q}_1 \hat{k}$.
*   **Link 2 CM:** Position $\mathbf{r}_{c2}$, Velocity $\mathbf{v}_{c2} = \dot{\mathbf{r}}_{c2}$, Angular Velocity $\boldsymbol{\omega}_2 = (\dot{q}_1 + \dot{q}_2) \hat{k}$.

The position vectors $\mathbf{r}_{c1}$ and $\mathbf{r}_{c2}$ are functions of $q_1$ and $q_2$ (and link lengths, CM distances).

**Step 2: Derive Kinetic Energy (T)**
$T = T_1 + T_2$
$T_1 = \frac{1}{2} m_1 \mathbf{v}_{c1}^T \mathbf{v}_{c1} + \frac{1}{2} \boldsymbol{\omega}_1^T \mathbf{I}_1 \boldsymbol{\omega}_1$
$T_2 = \frac{1}{2} m_2 \mathbf{v}_{c2}^T \mathbf{v}_{c2} + \frac{1}{2} \boldsymbol{\omega}_2^T \mathbf{I}_2 \boldsymbol{\omega}_2$

Let's express this in terms of $q_1, \dot{q}_1, q_2, \dot{q}_2$.
Assume link lengths are $l_1$ and $l_2$, and CMs are at $l_{c1}$ and $l_{c2}$ from the joint axes.

*   **Link 1:**
    *   $\mathbf{r}_{c1} = l_{c1} [\cos q_1 \hat{i} + \sin q_1 \hat{j}]$
    *   $\mathbf{v}_{c1} = \dot{\mathbf{r}}_{c1} = l_{c1} [-\sin q_1 \dot{q}_1 \hat{i} + \cos q_1 \dot{q}_1 \hat{j}]$
    *   $|\mathbf{v}_{c1}|^2 = l_{c1}^2 \dot{q}_1^2$
    *   $\boldsymbol{\omega}_1 = \dot{q}_1 \hat{k}$
    *   $T_1 = \frac{1}{2} m_1 l_{c1}^2 \dot{q}_1^2 + \frac{1}{2} I_1 \dot{q}_1^2 = \frac{1}{2} (m_1 l_{c1}^2 + I_1) \dot{q}_1^2$

*   **Link 2:**
    *   $\mathbf{r}_{c2} = \mathbf{r}_{j2} + \mathbf{r}_{c2/j2}$ where $\mathbf{r}_{j2}$ is the position of joint 2 and $\mathbf{r}_{c2/j2}$ is the position of CM of link 2 relative to joint 2.
    *   $\mathbf{r}_{j2} = l_1 [\cos q_1 \hat{i} + \sin q_1 \hat{j}]$
    *   $\mathbf{r}_{c2/j2} = l_{c2} [\cos(q_1+q_2) \hat{i} + \sin(q_1+q_2) \hat{j}]$
    *   $\mathbf{r}_{c2} = (l_1 \cos q_1 + l_{c2} \cos(q_1+q_2)) \hat{i} + (l_1 \sin q_1 + l_{c2} \sin(q_1+q_2)) \hat{j}$
    *   $\mathbf{v}_{c2} = \dot{\mathbf{r}}_{c2} = [(-l_1 \sin q_1 \dot{q}_1 - l_{c2} \sin(q_1+q_2)(\dot{q}_1+\dot{q}_2)) \hat{i} + (l_1 \cos q_1 \dot{q}_1 + l_{c2} \cos(q_1+q_2)(\dot{q}_1+\dot{q}_2)) \hat{j}]$
    *   $|\mathbf{v}_{c2}|^2 = (l_1 \dot{q}_1 + l_{c2}(\dot{q}_1+\dot{q}_2))^2 = (l_1 \dot{q}_1 + l_{c2}\dot{q}_{12})^2$ where $\dot{q}_{12} = \dot{q}_1+\dot{q}_2$
    *   $\boldsymbol{\omega}_2 = (\dot{q}_1 + \dot{q}_2) \hat{k} = \dot{q}_{12} \hat{k}$
    *   $T_2 = \frac{1}{2} m_2 (l_1 \dot{q}_1 + l_{c2}(\dot{q}_1+\dot{q}_2))^2 + \frac{1}{2} I_2 (\dot{q}_1+\dot{q}_2)^2$

**Total Kinetic Energy (T):**
$T = \frac{1}{2} (m_1 l_{c1}^2 + I_1) \dot{q}_1^2 + \frac{1}{2} m_2 (l_1 \dot{q}_1 + l_{c2}(\dot{q}_1+\dot{q}_2))^2 + \frac{1}{2} I_2 (\dot{q}_1+\dot{q}_2)^2$

This expression for $T$ needs to be simplified and then used in the Euler-Lagrange equations.

**Step 3: Derive Potential Energy (V)**
The potential energy is primarily due to gravity. Assuming gravity acts in the $-\hat{j}$ direction:
$V_k = m_k g y_{ck}$ where $y_{ck}$ is the vertical position of the CM of link $k$.

*   **Link 1:** $V_1 = m_1 g (l_{c1} \sin q_1)$
*   **Link 2:** $V_2 = m_2 g (l_1 \sin q_1 + l_{c2} \sin(q_1+q_2))$

**Total Potential Energy (V):**
$V = V_1 + V_2 = m_1 g l_{c1} \sin q_1 + m_2 g (l_1 \sin q_1 + l_{c2} \sin(q_1+q_2))$

**Step 4: Formulate the Lagrangian (L)**
$L = T - V$

**Step 5: Apply Euler-Lagrange Equations**
For $i=1$ (joint 1):
$\frac{d}{dt}\left(\frac{\partial L}{\partial \dot{q}_1}\right) - \frac{\partial L}{\partial q_1} = \tau_1$

For $i=2$ (joint 2):
$\frac{d}{dt}\left(\frac{\partial L}{\partial \dot{q}_2}\right) - \frac{\partial L}{\partial q_2} = \tau_2$

**Important Point:** After calculating the partial derivatives and time derivatives, the resulting equations will be in the form:
$M(q) \ddot{q} + C(q, \dot{q}) \dot{q} + G(q) = \tau$
where:
*   $M(q)$ is the mass matrix (symmetric, positive-definite).
*   $C(q, \dot{q})$ is the Coriolis and centrifugal forces matrix.
*   $G(q)$ is the gravity vector.
*   $q = [q_1, q_2]^T$ is the joint position vector.
*   $\dot{q} = [\dot{q}_1, \dot{q}_2]^T$ is the joint velocity vector.
*   $\ddot{q} = [\ddot{q}_1, \ddot{q}_2]^T$ is the joint acceleration vector.
*   $\tau = [\tau_1, \tau_2]^T$ is the joint torque vector.

**Example Calculation Snippet (for $\tau_1$):**
Let's look at the term $\frac{\partial L}{\partial \dot{q}_1}$:
From $T = \frac{1}{2} (m_1 l_{c1}^2 + I_1) \dot{q}_1^2 + \frac{1}{2} m_2 (l_1 \dot{q}_1 + l_{c2}(\dot{q}_1+\dot{q}_2))^2 + \frac{1}{2} I_2 (\dot{q}_1+\dot{q}_2)^2$
$\frac{\partial T}{\partial \dot{q}_1} = (m_1 l_{c1}^2 + I_1) \dot{q}_1 + m_2 (l_1 \dot{q}_1 + l_{c2}(\dot{q}_1+\dot{q}_2)) (l_1 + l_{c2})$
And $\frac{\partial V}{\partial \dot{q}_1} = 0$ as $V$ does not depend on $\dot{q}_1$.
So, $\frac{\partial L}{\partial \dot{q}_1} = \frac{\partial T}{\partial \dot{q}_1}$.

Then, $\frac{d}{dt}\left(\frac{\partial L}{\partial \dot{q}_1}\right)$ will involve differentiating the above with respect to time, which will yield terms with $\ddot{q}_1$, $\ddot{q}_2$, $\dot{q}_1^2$, $\dot{q}_2^2$, and $\dot{q}_1\dot{q}_2$.

And $\frac{\partial L}{\partial q_1} = \frac{\partial T}{\partial q_1} - \frac{\partial V}{\partial q_1}$.
$\frac{\partial V}{\partial q_1} = m_1 g l_{c1} \cos q_1 + m_2 g l_1 \cos q_1 + m_2 g l_{c2} \cos(q_1+q_2)$.

Combining these will give the equation for $\tau_1$. The process for $\tau_2$ is similar.

**Reference:**
*   Craig, J. J. (2002). *Introduction to Robotics: Mechanics and Control*. Pearson Education Asia. (Chapter 8)
*   Schilling, R. J. (1996). *Fundamentals of Robotics – Analysis and Control*. Prentice Hall of India. (Chapter on Robot Dynamics)

---

### 5. Dynamic Model of Spatial Serial Robots up to 2 DOF

The principles are the same as for planar robots, but the complexity increases significantly due to the additional dimension and the ability to rotate about any axis. We will consider a spatial robot with two revolute joints (RR configuration).

*   **Link 1:** Mass $m_1$, CM position $\mathbf{r}_{c1}$, Inertia tensor $\mathbf{I}_1$.
*   **Link 2:** Mass $m_2$, CM position $\mathbf{r}_{c2}$, Inertia tensor $\mathbf{I}_2$.
*   **Joint Variables:** $q_1$ (rotation about axis $\hat{z}_0$), $q_2$ (rotation about axis $\hat{z}_1$).
*   **Applied Torques:** $\tau_1$, $\tau_2$.

**Step 1: Forward Kinematics (for Velocity Calculation)**
This involves Denavit-Hartenberg (D-H) parameters to define the transformation between link frames. We need the velocity of the CM of each link, which requires calculating the spatial velocity.

*   **Spatial Velocity:** A spatial velocity $\mathbf{V}$ is a 6-vector combining angular velocity $\boldsymbol{\omega}$ and linear velocity $\mathbf{v}$: $\mathbf{V} = [\boldsymbol{\omega}^T, \mathbf{v}^T]^T$.
*   **Link 1:** $\boldsymbol{\omega}_1$ is determined by $\dot{q}_1$ and the joint axis $\hat{z}_0$. $\mathbf{v}_{c1}$ is the velocity of CM of link 1.
*   **Link 2:** $\boldsymbol{\omega}_2$ is the sum of the angular velocity of link 1 and the relative angular velocity of link 2. $\mathbf{v}_{c2}$ is the velocity of CM of link 2.

The velocity of a point $\mathbf{p}$ on link $k$ is given by $\dot{\mathbf{p}} = \mathbf{V}_k = \boldsymbol{\omega}_k \times \mathbf{p}_k + \mathbf{v}_k$, where $\mathbf{V}_k = [\boldsymbol{\omega}_k^T, \mathbf{v}_k^T]^T$ is the spatial velocity of link $k$ in its frame.

**Step 2: Derive Kinetic Energy (T)**
$T = T_1 + T_2$
$T_k = \frac{1}{2} m_k \mathbf{v}_{ck}^T \mathbf{v}_{ck} + \frac{1}{2} \boldsymbol{\omega}_k^T \mathbf{I}_k \boldsymbol{\omega}_k$

The $\boldsymbol{\omega}_k$ and $\mathbf{v}_{ck}$ terms will be functions of $q_1, \dot{q}_1, q_2, \dot{q}_2$. The inertia tensors $\mathbf{I}_k$ need to be transformed into a common frame (e.g., the base frame) and expressed in terms of joint variables. This often involves the use of transformation matrices.

**Example for Spatial Velocity (simplistic):**
For an RR robot:
*   Joint 1 axis: $\hat{z}_0$
*   Joint 2 axis: $\hat{z}_1$
*   $\boldsymbol{\omega}_1 = \dot{q}_1 \hat{z}_0$
*   $\boldsymbol{\omega}_2 = \dot{q}_1 \hat{z}_0 + \dot{q}_2 \hat{z}_1$

The linear velocity of the CM of link $k$ ($\mathbf{v}_{ck}$) will be $\mathbf{v}_{ck} = \boldsymbol{\omega}_{k-1} \times \mathbf{r}_{ck} + \mathbf{v}_{k-1}$, where $\mathbf{r}_{ck}$ is the vector from the joint $k$ to the CM of link $k$. This recursive calculation is essential.

**Step 3: Derive Potential Energy (V)**
$V = V_1 + V_2$
$V_k = m_k g h_{ck}$, where $h_{ck}$ is the vertical height of the CM of link $k$. This involves the gravity vector and the position of the CM.

**Step 4: Formulate the Lagrangian (L)**
$L = T - V$

**Step 5: Apply Euler-Lagrange Equations**
$\frac{d}{dt}\left(\frac{\partial L}{\partial \dot{q}_i}\right) - \frac{\partial L}{\partial q_i} = \tau_i \quad \text{for } i = 1, 2$

The resulting dynamic model will again be in the form:
$M(q) \ddot{q} + C(q, \dot{q}) \dot{q} + G(q) = \tau$

However, the terms in $M, C, G$ will be more complex due to the 3D nature and the specific joint axes.

**Important Tools for Spatial Robots:**
*   **Denavit-Hartenberg (D-H) Parameters:** To define link transformations and joint axes.
*   **Transformation Matrices (e.g., $A_{i-1}^i$):** To relate frames between consecutive links.
*   **Spatial Velocity Representation:** Using twists or $6 \times 6$ matrices for transformations.

**Reference:**
*   Craig, J. J. (2002). *Introduction to Robotics: Mechanics and Control*. Pearson Education Asia. (Chapter 8)
*   Lynch, K. M., Park, F. C. (2015). *Modern Robotics Mechanics, Planning and Control*. Cambridge University Press. (Chapter 10: Robot Dynamics)
*   Siciliano, B., Sciavicco, L., Villani, L., Oriolo, G. (2009). *Robotics Modelling, Planning and Control*. Springer. (Chapters on Dynamics)

---

### 6. Key Concepts and Definitions Review

*   **Lagrangian:** $L = T - V$. The state function used in Lagrange's formulation.
*   **Kinetic Energy (T):** Energy of motion. For a rigid body, it's the sum of translational and rotational kinetic energy.
*   **Potential Energy (V):** Energy due to position (e.g., gravitational potential energy).
*   **Generalized Coordinates:** Minimal set of variables describing system configuration (e.g., joint angles $q_i$).
*   **Generalized Velocities:** Time derivatives of generalized coordinates ($\dot{q}_i$).
*   **Generalized Forces/Torques:** Forces/torques applied corresponding to generalized coordinates ($\tau_i$).
*   **Dynamic Model:** Mathematical representation relating forces/torques to accelerations ($M\ddot{q} + C\dot{q} + G = \tau$).
*   **Inertia Matrix (M):** Represents the inertial properties of the robot. It's a function of joint positions.
*   **Coriolis and Centrifugal Matrix (C):** Represents forces arising from the robot's motion (velocity-dependent).
*   **Gravity Vector (G):** Represents the influence of gravity on the robot.

---

### 7. Alignment with Course Outcomes (COs)

*   **CO1 (K2 - Knowledge):** This module provides fundamental knowledge about robot dynamics and the theoretical basis (Lagrange's formulation) for deriving these models.
*   **CO2 (K3 - Understanding):** Understanding how to use forward kinematics to express link velocities, which is a prerequisite for calculating kinetic energy, relates to CO2.
*   **CO3 (K4, K5 - Application, Analysis):** While trajectory planning is a separate topic, understanding the dynamic model (derived here) is essential for planning trajectories that respect robot dynamics and limits.
*   **CO4 (K4, K6 - Application, Synthesis):** This module directly addresses the development of a dynamic model, which is a core part of CO4. The ability to derive the $M\ddot{q} + C\dot{q} + G = \tau$ equation is the foundation for designing controllers.
*   **CO5 (K4 - Application):** Understanding the dynamics helps in choosing appropriate robot configurations by considering their inertial properties and how they will respond to control inputs.

---

### 8. Important Points to Remember

*   **Consistent Reference Frames:** Crucial for all calculations, especially when dealing with spatial velocities and inertia tensors.
*   **Kinematics First:** The velocity of each link's CM is a direct result of the robot's kinematics (joint positions and velocities).
*   **Lagrangian is Scalar:** $L=T-V$ is a scalar quantity, making calculations more manageable than Newtonian mechanics in many cases.
*   **Chain Rule for Differentiation:** Be meticulous when taking time derivatives of terms involving $q_i(t)$ and $\dot{q}_i(t)$.
*   **Inertia Tensor Transformation:** For spatial robots, the inertia tensor of a link must be transformed into a common frame before being used in kinetic energy calculations.
*   **D-H Convention:** Essential for systematically deriving kinematic and dynamic models for spatial robots.

---

### 9. Practice Questions/Exercises

**Question 1 (Planar Robot):**
Consider a 1-DOF planar robot link with mass $m$, length $l$, and its center of mass at $l_c$. The link rotates with angular velocity $\dot{q}$. The link has a moment of inertia $I$ about its center of mass.
(a) Derive the kinetic energy ($T$) of this link.
(b) If the link rotates with angular velocity $\dot{q} = 5$ rad/s, $m = 2$ kg, $l = 0.5$ m, $l_c = 0.25$ m, $I = 0.01$ kg-m², calculate its kinetic energy.

**Answer 1:**
(a) Using the formula $T = \frac{1}{2} m v_{cm}^2 + \frac{1}{2} I \omega^2$:
$v_{cm} = l_c \dot{q}$ (tangential velocity)
$\omega = \dot{q}$
$T = \frac{1}{2} m (l_c \dot{q})^2 + \frac{1}{2} I \dot{q}^2 = \frac{1}{2} (m l_c^2 + I) \dot{q}^2$

(b) $T = \frac{1}{2} (2 \times (0.25)^2 + 0.01) \times (5)^2$
$T = \frac{1}{2} (2 \times 0.0625 + 0.01) \times 25$
$T = \frac{1}{2} (0.125 + 0.01) \times 25$
$T = \frac{1}{2} (0.135) \times 25$
$T = 0.0675 \times 25 = 1.6875$ Joules

**Question 2 (Conceptual - Lagrange's Formulation):**
Explain why Lagrange's formulation is particularly useful for deriving the dynamic models of robotic manipulators.

**Answer 2:**
Lagrange's formulation is useful because:
1.  **Energy-Based:** It directly uses kinetic and potential energies, which are fundamental properties of mechanical systems.
2.  **Systematic Approach:** It provides a structured way to derive the equations of motion, reducing the chances of missing forces compared to Newtonian methods.
3.  **Coordinate Independence:** The form of the Euler-Lagrange equations is independent of the choice of generalized coordinates, as long as they are independent.
4.  **Direct Torque Relation:** It directly relates the generalized forces (which are the joint torques in robotics) to the accelerations and velocities of the system, yielding the $M\ddot{q} + C\dot{q} + G = \tau$ form.
5.  **Accounts for Constraints:** Implicitly handles constraint forces in many formulations.

**Question 3 (Planar Robot - Conceptual):**
For a 2-DOF planar manipulator in the horizontal plane (no gravity), how would the kinetic energy expression change if you considered the inertia of the motors at the joints as part of the link's inertia?

**Answer 3:**
If the inertia of the motors at the joints is considered:
*   **Joint 1 Motor:** Its inertia would directly contribute to the term involving $\dot{q}_1^2$ in the kinetic energy expression. If the motor's inertia about the first joint axis is $I_{m1}$, it would be added to the inertia of link 1 ($I_1$).
*   **Joint 2 Motor:** Its inertia would directly contribute to the term involving $\dot{q}_2^2$ (or $(\dot{q}_1+\dot{q}_2)^2$ depending on how it's framed). If the motor's inertia about the second joint axis is $I_{m2}$, it would be added to the inertia of link 2 ($I_2$).

The kinetic energy formula $T = \frac{1}{2} (m_1 l_{c1}^2 + I_1') \dot{q}_1^2 + \frac{1}{2} m_2 (l_1 \dot{q}_1 + l_{c2}(\dot{q}_1+\dot{q}_2))^2 + \frac{1}{2} I_2' (\dot{q}_1+\dot{q}_2)^2$ would be used, where $I_1' = I_1 + I_{m1}$ and $I_2' = I_2 + I_{m2}$ (assuming motor inertia is referred to the joint axis). If the motor is mounted "in-line" with the joint, the addition is straightforward. If it's geared, the reflected inertia would need to be calculated.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
