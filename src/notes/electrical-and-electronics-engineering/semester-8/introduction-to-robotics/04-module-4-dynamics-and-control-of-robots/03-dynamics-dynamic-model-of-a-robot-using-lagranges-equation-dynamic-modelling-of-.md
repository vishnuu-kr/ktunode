---
title: "Dynamics- Dynamic model of a robot using Lagrange’s equation, dynamic modelling of 1DOF robot, including motor and gearbox, 2R planar manipulator."
subject: "INTRODUCTION TO ROBOTICS"
module: "Module 4: Dynamics and Control of Robots"
branch: "Electrical and Electronics Engineering"
semester: 8
topicId: "68a200872b85456187f36c5c"
status: "completed"
scrapedAt: "2026-05-23T16:41:52.223Z"
---
# Introduction to Robotics: Module 4 - Dynamics and Control of Robots

## Topic: Dynamics

### 1. Introduction to Robot Dynamics

**Definition:** Robot dynamics is the study of the motion of robots considering the forces and torques acting on them. It involves understanding how applied forces and torques translate into the motion of robot links and joints, and conversely, how the motion of the robot generates forces and torques.

**Importance:**
*   **Control System Design:** Accurate dynamic models are crucial for designing effective control strategies that ensure precise and stable robot movements.
*   **Trajectory Generation:** Understanding dynamics allows for the generation of computationally efficient and dynamically feasible trajectories.
*   **Force Control:** Dynamics is fundamental for robots that need to interact with their environment with controlled forces.
*   **Simulation and Analysis:** Dynamic models enable the simulation of robot behavior under various conditions, aiding in design and testing.

**Course Outcome Alignment:** CO6: Develop dynamic model and design the controller for robotic manipulators (Knowledge Level: K3) - This topic directly addresses the development of dynamic models.

**Key Concepts:**
*   **Inertia:** Resistance to changes in motion.
*   **Coriolis Forces:** Apparent forces arising from the rotation of the reference frame.
*   **Centrifugal Forces:** Apparent forces acting outward from the axis of rotation.
*   **Gravity:** Force due to the Earth's gravitational pull.
*   **Friction:** Forces opposing motion.
*   **Torque/Force:** The inputs that cause motion.
*   **Joint Variables:** Position, velocity, and acceleration of the robot's joints.

**Reference:**
*   *Introduction to Robotics* by S. K. Saha (Chapter on Dynamics)
*   *Robotics and Control* by R. K. Mittal and I. J. Nagrath (Chapter on Dynamics)

### 2. Dynamic Model of a Robot Using Lagrange's Equation

**Lagrange's Equation:** A fundamental method for deriving the equations of motion for mechanical systems. It is based on the principle of energy. For a system with generalized coordinates $q_1, q_2, ..., q_n$, the Lagrange's equation is given by:

$$ \frac{d}{dt}\left(\frac{\partial L}{\partial \dot{q}_i}\right) - \frac{\partial L}{\partial q_i} = Q_i $$

where:
*   $L$ is the Lagrangian of the system, defined as $L = T - V$.
    *   $T$ is the total kinetic energy of the system.
    *   $V$ is the total potential energy of the system.
*   $q_i$ is the $i$-th generalized coordinate.
*   $\dot{q}_i$ is the time derivative of the $i$-th generalized coordinate (generalized velocity).
*   $Q_i$ is the generalized force (or torque for revolute joints) corresponding to the generalized coordinate $q_i$, which accounts for non-conservative forces (e.g., friction, applied torques/forces).

**Steps to Derive Dynamic Model using Lagrange's Equation:**

1.  **Define Generalized Coordinates:** Identify the minimum number of independent variables required to describe the configuration of the robot (e.g., joint angles for a manipulator).
2.  **Calculate Kinetic Energy (T):**
    *   Express the position, velocity, and angular velocity of each link and mass element in terms of the generalized coordinates and their time derivatives.
    *   Calculate the kinetic energy of each link (translational and rotational) and sum them up.
    *   $T = \sum_i \left( \frac{1}{2} m_i \mathbf{v}_i^T \mathbf{v}_i + \frac{1}{2} \boldsymbol{\omega}_i^T \mathbf{I}_i \boldsymbol{\omega}_i \right)$
3.  **Calculate Potential Energy (V):**
    *   Define a reference point for potential energy (usually the base frame).
    *   Calculate the gravitational potential energy for each link based on its mass and the height of its center of mass.
    *   $V = \sum_i m_i g h_i$
4.  **Formulate the Lagrangian (L = T - V):** Combine the kinetic and potential energy expressions.
5.  **Calculate Partial Derivatives:**
    *   $\frac{\partial L}{\partial q_i}$
    *   $\frac{\partial L}{\partial \dot{q}_i}$
    *   $\frac{d}{dt}\left(\frac{\partial L}{\partial \dot{q}_i}\right)$
6.  **Define Generalized Forces (Q_i):** These are the applied torques/forces at the joints and any other non-conservative forces like friction.
7.  **Apply Lagrange's Equation:** Substitute the calculated derivatives and generalized forces into the Lagrange's equation for each generalized coordinate.
8.  **Rearrange into Matrix Form:** The resulting equations can typically be written in the form:
    $$ \mathbf{M}(\mathbf{q})\ddot{\mathbf{q}} + \mathbf{C}(\mathbf{q}, \dot{\mathbf{q}})\dot{\mathbf{q}} + \mathbf{G}(\mathbf{q}) = \boldsymbol{\tau} $$
    where:
    *   $\mathbf{M}(\mathbf{q})$ is the mass matrix (symmetric and positive definite, depends on joint positions).
    *   $\mathbf{C}(\mathbf{q}, \dot{\mathbf{q}})\dot{\mathbf{q}}$ represents Coriolis and centrifugal forces (depends on joint positions and velocities).
    *   $\mathbf{G}(\mathbf{q})$ is the gravity vector (depends on joint positions).
    *   $\boldsymbol{\tau}$ is the vector of applied joint torques/forces.

**Important Points to Remember:**
*   Lagrange's equation is a powerful tool for deriving dynamic equations, especially for complex systems where Newtonian methods become cumbersome.
*   It requires a good understanding of kinetic and potential energy calculations.
*   The resulting equations of motion are typically second-order nonlinear differential equations.
*   The mass matrix $\mathbf{M}(\mathbf{q})$ is always symmetric and positive definite.
*   The terms $\mathbf{C}(\mathbf{q}, \dot{\mathbf{q}})\dot{\mathbf{q}}$ and $\mathbf{G}(\mathbf{q})$ can be grouped into "non-linear terms."

**Reference:**
*   *Introduction to Robotics: Mechanics and Control* by John J. Craig (Chapter 8: Dynamics)
*   *Fundamentals of Robotics – Analysis and Control* by Robert J. Schilling (Chapter 7: Dynamics)

### 3. Dynamic Modelling of a 1-DOF Robot (Including Motor and Gearbox)

Consider a single-DOF robot arm with a revolute joint.

**System Components:**
*   **Robot Link:** Mass ($m$), inertia ($I_{link}$), length ($l$).
*   **Motor:** Inertia ($I_m$), torque constant ($K_t$), back-EMF constant ($K_e$), resistance ($R$), inductance ($L$).
*   **Gearbox:** Gear ratio ($N$), efficiency ($\eta$).

**Generalized Coordinate:** Joint angle, $\theta$.

**Kinematics (Simplified):** Assume the link is a uniform rod of length $l$, and its mass is concentrated at the end, or consider its distributed mass. For simplicity, let's consider a point mass $m$ at the end of a massless link of length $l$.

**Lagrangian Approach:**

1.  **Kinetic Energy (T):**
    *   **Link Kinetic Energy:** $T_{link} = \frac{1}{2} I_{link} \dot{\theta}^2$. If we treat the link as a uniform rod, $I_{link} = \frac{1}{3}ml^2$ about the base. If mass is at the end, $I_{link} = ml^2$.
    *   **Motor Kinetic Energy:** $T_m = \frac{1}{2} I_m \dot{\theta}_m^2$, where $\dot{\theta}_m$ is the motor angular velocity.
    *   **Gearbox Relationship:** $\theta = \theta_m / N$. Therefore, $\dot{\theta} = \dot{\theta}_m / N$, or $\dot{\theta}_m = N \dot{\theta}$.
    *   Substituting: $T_m = \frac{1}{2} I_m (N\dot{\theta})^2 = \frac{1}{2} (N^2 I_m) \dot{\theta}^2$.
    *   **Total Kinetic Energy:** $T = T_{link} + T_m = \frac{1}{2} (I_{link} + N^2 I_m) \dot{\theta}^2$.
    *   Let $I_{eq} = I_{link} + N^2 I_m$ be the equivalent inertia at the joint.
    *   $T = \frac{1}{2} I_{eq} \dot{\theta}^2$.

2.  **Potential Energy (V):**
    *   Assume the link is moving in a vertical plane, and gravity acts on its center of mass.
    *   If the link is a uniform rod of length $l$, its center of mass is at $l/2$.
    *   $V = m g \frac{l}{2} \cos(\theta)$ (assuming $\theta=0$ is the horizontal position, and potential energy is zero at $\theta=\pi/2$).
    *   More generally, let $h(\theta)$ be the height of the center of mass. $V = mgh(\theta)$. If $\theta$ is the angle with the horizontal, $h(\theta) = (l/2) \sin(\theta)$ (with $\theta=0$ being vertical down). Let's use the common convention where $\theta$ is the angle from the horizontal, and $V = -m g (l/2) \sin(\theta)$ if $\theta=0$ is horizontal and angle increases upwards.
    *   Let's assume $\theta$ is the angle from the downward vertical. Then $V = -mg(l/2)\cos(\theta)$.
    *   $V = -m g \frac{l}{2} \cos(\theta)$ (assuming $\theta=0$ is the lowest point, vertical down).

3.  **Lagrangian (L = T - V):**
    *   $L = \frac{1}{2} I_{eq} \dot{\theta}^2 - (-m g \frac{l}{2} \cos(\theta))$
    *   $L = \frac{1}{2} I_{eq} \dot{\theta}^2 + m g \frac{l}{2} \cos(\theta)$

4.  **Partial Derivatives:**
    *   $\frac{\partial L}{\partial \dot{\theta}} = I_{eq} \dot{\theta}$
    *   $\frac{d}{dt}\left(\frac{\partial L}{\partial \dot{\theta}}\right) = I_{eq} \ddot{\theta}$
    *   $\frac{\partial L}{\partial \theta} = -m g \frac{l}{2} \sin(\theta)$

5.  **Generalized Force (Q_θ):**
    *   This is the torque applied by the motor at the joint, $\tau_{motor}$, reduced by the gearbox efficiency $\eta$.
    *   Torque delivered to the load: $\tau_{load} = \eta N \tau_{motor\_shaft}$ (assuming efficiency reduces output torque). If efficiency is on the motor shaft, it's often $\tau_{load} = \eta N \tau_{motor}$. Let's assume $\tau$ is the torque delivered to the joint.
    *   $Q_\theta = \tau$.

6.  **Lagrange's Equation:**
    *   $\frac{d}{dt}\left(\frac{\partial L}{\partial \dot{\theta}}\right) - \frac{\partial L}{\partial \theta} = Q_\theta$
    *   $I_{eq} \ddot{\theta} - (-m g \frac{l}{2} \sin(\theta)) = \tau$
    *   $I_{eq} \ddot{\theta} + m g \frac{l}{2} \sin(\theta) = \tau$

7.  **Including Motor Dynamics (Electrical Side):**
    *   The motor torque is related to the armature current $i_a$ by $\tau_{motor\_shaft} = K_t i_a$.
    *   The gearbox transmits this torque to the joint: $\tau = \eta N (K_t i_a)$.
    *   The voltage equation for the motor armature is: $V_a = i_a R + L \frac{di_a}{dt} + K_e \dot{\theta}_m$.
    *   Substituting $\dot{\theta}_m = N \dot{\theta}$: $V_a = i_a R + L \frac{di_a}{dt} + K_e N \dot{\theta}$.
    *   From the torque equation: $i_a = \frac{\tau}{\eta N K_t}$.
    *   Differentiating to get $\frac{di_a}{dt}$: $\frac{di_a}{dt} = \frac{1}{\eta N K_t} \frac{d\tau}{dt}$.
    *   Substitute $i_a$ and $\frac{di_a}{dt}$ into the voltage equation:
        $$ V_a = \left(\frac{\tau}{\eta N K_t}\right) R + L \left(\frac{1}{\eta N K_t} \frac{d\tau}{dt}\right) + K_e N \dot{\theta} $$
        $$ V_a = \frac{R}{\eta N K_t} \tau + \frac{L}{\eta N K_t} \frac{d\tau}{dt} + K_e N \dot{\theta} $$

    *   The full dynamic model combines the mechanical and electrical equations:
        $$ I_{eq} \ddot{\theta} + m g \frac{l}{2} \sin(\theta) = \tau $$
        $$ V_a = \frac{R}{\eta N K_t} \tau + \frac{L}{\eta N K_t} \frac{d\tau}{dt} + K_e N \dot{\theta} $$

    *   Often, the electrical time constant $L/R$ is much smaller than the mechanical time constant, so we can simplify by assuming $L \approx 0$ (purely resistive load).
        $$ V_a \approx \frac{R}{\eta N K_t} \tau + K_e N \dot{\theta} $$
        $$ \tau \approx \frac{\eta N K_t}{R} (V_a - K_e N \dot{\theta}) $$
        Let $K_{gain} = \frac{\eta N K_t}{R}$ and $K_{back} = \frac{K_e N}{R}$. Then $\tau \approx K_{gain} V_a - K_{back} \dot{\theta}$.

    *   Substituting this simplified torque into the mechanical equation:
        $$ I_{eq} \ddot{\theta} + m g \frac{l}{2} \sin(\theta) = K_{gain} V_a - K_{back} \dot{\theta} $$
        $$ I_{eq} \ddot{\theta} + K_{back} \dot{\theta} + m g \frac{l}{2} \sin(\theta) = K_{gain} V_a $$

    This is the dynamic model of a 1-DOF robot with a DC motor and gearbox.

**Reference:**
*   *Introduction to Robotics: Mechanics and Control* by John J. Craig (Chapter 8.3: Dynamics of Manipulators)
*   *Robotics Technology and Flexible Automation* by S. R. Deb (Chapter on Dynamics)

### 4. Dynamic Modelling of a 2R Planar Manipulator

Consider a 2-DOF planar manipulator with two revolute joints and two links.

**System:**
*   **Link 1:** Length $l_1$, mass $m_1$, inertia $I_1$ about its base.
*   **Link 2:** Length $l_2$, mass $m_2$, inertia $I_2$ about its own base.
*   **Joint 1:** Controlled by motor 1, gearbox 1. Torque $\tau_1$.
*   **Joint 2:** Controlled by motor 2, gearbox 2. Torque $\tau_2$.

**Generalized Coordinates:**
*   $\theta_1$: Angle of link 1 with respect to the base frame (e.g., horizontal).
*   $\theta_2$: Angle of link 2 with respect to link 1.

**Kinematics:**
*   Position of the end of link 1 (base of link 2):
    *   $x_1 = l_1 \cos(\theta_1)$
    *   $y_1 = l_1 \sin(\theta_1)$
*   Velocity of the end of link 1:
    *   $\dot{x}_1 = -l_1 \sin(\theta_1) \dot{\theta}_1$
    *   $\dot{y}_1 = l_1 \cos(\theta_1) \dot{\theta}_1$
*   Velocity squared of the end of link 1: $\dot{s}_1^2 = \dot{x}_1^2 + \dot{y}_1^2 = (l_1 \dot{\theta}_1)^2$.
*   Angular velocity of link 1: $\omega_1 = \dot{\theta}_1$.
*   Position of the end effector (end of link 2):
    *   $x_2 = x_1 + l_2 \cos(\theta_1 + \theta_2) = l_1 \cos(\theta_1) + l_2 \cos(\theta_1 + \theta_2)$
    *   $y_2 = y_1 + l_2 \sin(\theta_1 + \theta_2) = l_1 \sin(\theta_1) + l_2 \sin(\theta_1 + \theta_2)$
*   Velocity of the end effector:
    *   $\dot{x}_2 = -l_1 \sin(\theta_1)\dot{\theta}_1 - l_2 \sin(\theta_1+\theta_2)(\dot{\theta}_1+\dot{\theta}_2)$
    *   $\dot{y}_2 = l_1 \cos(\theta_1)\dot{\theta}_1 + l_2 \cos(\theta_1+\theta_2)(\dot{\theta}_1+\dot{\theta}_2)$
*   Angular velocity of link 2: $\omega_2 = \dot{\theta}_1 + \dot{\theta}_2$.

**Lagrangian Approach (Simplified):**
We will ignore motor and gearbox for this example and focus on the mechanical dynamics. We'll assume the links are uniform rods.

1.  **Kinetic Energy (T):**
    *   **Link 1:**
        *   Center of mass of link 1 is at $(l_1/2, 0)$ relative to its own start, or $(l_1/2 \cos(\theta_1), l_1/2 \sin(\theta_1))$ in base frame.
        *   Velocity of CM of link 1: $v_{cm1}$. Magnitude squared: $v_{cm1}^2 = (l_1/2 \dot{\theta}_1)^2$.
        *   $T_1 = \frac{1}{2} m_1 v_{cm1}^2 + \frac{1}{2} I_1 \omega_1^2 = \frac{1}{2} m_1 (l_1/2 \dot{\theta}_1)^2 + \frac{1}{2} I_1 \dot{\theta}_1^2$
        *   $T_1 = \frac{1}{2} (m_1 \frac{l_1^2}{4} + I_1) \dot{\theta}_1^2$. Let $I'_{1} = m_1 \frac{l_1^2}{4} + I_1$.
        *   $T_1 = \frac{1}{2} I'_{1} \dot{\theta}_1^2$.
    *   **Link 2:**
        *   Center of mass of link 2 is at $(l_1 + l_2/2 \cos(\theta_1+\theta_2), l_2/2 \sin(\theta_1+\theta_2))$ in base frame.
        *   Velocity of CM of link 2: $v_{cm2}$.
        *   Using the velocities of the end effector: $\dot{x}_2 = \dot{x}_{cm2}$, $\dot{y}_2 = \dot{y}_{cm2}$ if CM is at the end. This is not accurate.
        *   It's easier to calculate the kinetic energy using the velocities of the center of mass of each link.
        *   For link 2, let its CM be at a distance $l_{c2}$ from its joint.
        *   $T_2 = \frac{1}{2} m_2 (l_1^2 \dot{\theta}_1^2 + l_{c2}^2 (\dot{\theta}_1+\dot{\theta}_2)^2 + 2 l_1 l_{c2} \dot{\theta}_1 (\dot{\theta}_1+\dot{\theta}_2) \cos(\theta_2)) + \frac{1}{2} I_2 (\dot{\theta}_1+\dot{\theta}_2)^2$.
        *   This becomes very tedious. A more direct approach using velocities of CMs:
        *   $v_{cm1}^2 = (l_1/2 \dot{\theta}_1)^2$
        *   $v_{cm2}^2 = (l_1 \dot{\theta}_1 + l_2/2 (\dot{\theta}_1+\dot{\theta}_2) \cos(\theta_2))^2 + (l_2/2 (\dot{\theta}_1+\dot{\theta}_2) \sin(\theta_2))^2$
        *   $v_{cm2}^2 = l_1^2 \dot{\theta}_1^2 + (l_2/2)^2 (\dot{\theta}_1+\dot{\theta}_2)^2 + l_1 l_2 (\dot{\theta}_1+\dot{\theta}_2) \cos(\theta_2) \times 2$  -- mistake here in derivation
        *   **Correct approach using velocities:**
            *   Velocity of CM of Link 1: $v_{c1}$. Angular velocity of Link 1: $\omega_1 = \dot{\theta}_1$.
            *   $T_1 = \frac{1}{2} m_1 v_{c1}^2 + \frac{1}{2} I_1 \omega_1^2$. Assume link 1 CM is at $l_1/2$ from joint 1.
            *   $v_{c1}^2 = (l_1/2 \dot{\theta}_1)^2$.
            *   $T_1 = \frac{1}{2} m_1 (l_1/2 \dot{\theta}_1)^2 + \frac{1}{2} I_1 \dot{\theta}_1^2$.
            *   Velocity of CM of Link 2: $v_{c2}$. Angular velocity of Link 2: $\omega_2 = \dot{\theta}_1 + \dot{\theta}_2$. Assume link 2 CM is at $l_2/2$ from joint 2.
            *   The velocity of CM of Link 2 is the sum of the velocity of joint 2 and the velocity of its CM relative to joint 2.
            *   $v_{c2} = v_{joint2} + \omega_2 \times r_{c2\_rel\_joint2}$
            *   $v_{joint2}$ has magnitude $l_1 \dot{\theta}_1$.
            *   This is where Jacobians are useful, but for Lagrange, we need energies.
            *   Let's use the direct calculation for $T_2$:
                *   $T_2 = \frac{1}{2} m_2 (l_1^2 \dot{\theta}_1^2 + l_{c2}^2 (\dot{\theta}_1+\dot{\theta}_2)^2 + 2 l_1 l_{c2} \dot{\theta}_1 (\dot{\theta}_1+\dot{\theta}_2) \cos(\theta_2)) + \frac{1}{2} I_2 (\dot{\theta}_1+\dot{\theta}_2)^2$
                *   Assuming CM is at $l_2/2$: $l_{c2} = l_2/2$.
                *   $T_2 = \frac{1}{2} m_2 (l_1^2 \dot{\theta}_1^2 + \frac{l_2^2}{4} (\dot{\theta}_1+\dot{\theta}_2)^2 + l_1 \frac{l_2}{2} (\dot{\theta}_1+\dot{\theta}_2) \cos(\theta_2)) + \frac{1}{2} I_2 (\dot{\theta}_1+\dot{\theta}_2)^2$
                *   This form is incorrect. The cross term involves velocities.
                *   A commonly cited form for the kinetic energy of a 2R planar manipulator:
                    *   $T_1 = \frac{1}{2} (m_1 l_{c1}^2 + I_1) \dot{\theta}_1^2$
                    *   $T_2 = \frac{1}{2} (m_2 l_2^2 + I_2) (\dot{\theta}_1 + \dot{\theta}_2)^2 + \frac{1}{2} m_2 l_1 l_2 \cos(\theta_2) (\dot{\theta}_1^2 + (\dot{\theta}_1 + \dot{\theta}_2)^2) \times \textbf{Mistake in formula. There's a product term.} $
                    *   **Correct Kinetic Energy Terms:**
                        *   $T_1 = \frac{1}{2} m_1 v_{c1}^2 + \frac{1}{2} I_1 \dot{\theta}_1^2$ where $v_{c1}$ is velocity of CM of link 1.
                        *   $T_2 = \frac{1}{2} m_2 v_{c2}^2 + \frac{1}{2} I_2 (\dot{\theta}_1 + \dot{\theta}_2)^2$ where $v_{c2}$ is velocity of CM of link 2.
                        *   $v_{c1} = l_1/2 \dot{\theta}_1$.
                        *   $v_{c2}$ is more complex.
                        *   A compact form for $T$ for a 2R manipulator is often presented as:
                            $$ T = \frac{1}{2} D_{11}(\theta_2)\dot{\theta}_1^2 + \frac{1}{2} D_{22}(\theta_2)\dot{\theta}_2^2 + D_{12}(\theta_2)\dot{\theta}_1\dot{\theta}_2 $$
                            where
                            $D_{11}(\theta_2) = m_1 l_{c1}^2 + m_2 (l_1^2 + l_{c2}^2 + 2 l_1 l_{c2} \cos(\theta_2)) + I_1 + I_2$
                            $D_{22}(\theta_2) = m_2 l_{c2}^2 + I_2$
                            $D_{12}(\theta_2) = m_2 (l_{c2}^2 + l_1 l_{c2} \cos(\theta_2)) + I_2$
                            This form already includes Coriolis and centrifugal terms when derived carefully.
                            Let's stick to the simpler form of summing $T_1$ and $T_2$ separately first.
                            Assume uniform links: $l_{c1} = l_1/2$, $l_{c2} = l_2/2$.
                            $T_1 = \frac{1}{2} (m_1 \frac{l_1^2}{4} + I_1) \dot{\theta}_1^2$
                            $T_2 = \frac{1}{2} m_2 ( (l_1 \dot{\theta}_1)^2 + (\frac{l_2}{2}(\dot{\theta}_1+\dot{\theta}_2))^2 + 2 l_1 \dot{\theta}_1 \frac{l_2}{2} (\dot{\theta}_1+\dot{\theta}_2) \cos(\theta_2) ) + \frac{1}{2} I_2 (\dot{\theta}_1+\dot{\theta}_2)^2$
                            This is still not quite right. The kinetic energy of link 2 is derived from its own motion relative to its joint, and the motion of its joint.

                            **Let's use the definition of velocity of CM of link 2:**
                            CM of link 1 is at $(l_1/2 \cos\theta_1, l_1/2 \sin\theta_1)$.
                            CM of link 2 is at $(l_1 \cos\theta_1 + l_2/2 \cos(\theta_1+\theta_2), l_1 \sin\theta_1 + l_2/2 \sin(\theta_1+\theta_2))$.
                            $v_{c1} = \begin{pmatrix} -l_1/2 \sin\theta_1 \dot{\theta}_1 \\ l_1/2 \cos\theta_1 \dot{\theta}_1 \end{pmatrix}$, so $v_{c1}^2 = (l_1/2 \dot{\theta}_1)^2$.
                            $v_{c2} = \begin{pmatrix} -l_1 \sin\theta_1 \dot{\theta}_1 - l_2/2 \sin(\theta_1+\theta_2)(\dot{\theta}_1+\dot{\theta}_2) \\ l_1 \cos\theta_1 \dot{\theta}_1 + l_2/2 \cos(\theta_1+\theta_2)(\dot{\theta}_1+\dot{\theta}_2) \end{pmatrix}$
                            $v_{c2}^2 = (-l_1 \sin\theta_1 \dot{\theta}_1 - \frac{l_2}{2} \sin(\theta_1+\theta_2)(\dot{\theta}_1+\dot{\theta}_2))^2 + (l_1 \cos\theta_1 \dot{\theta}_1 + \frac{l_2}{2} \cos(\theta_1+\theta_2)(\dot{\theta}_1+\dot{\theta}_2))^2$
                            $v_{c2}^2 = l_1^2 \dot{\theta}_1^2 + (\frac{l_2}{2}(\dot{\theta}_1+\dot{\theta}_2))^2 + 2 l_1 \dot{\theta}_1 \frac{l_2}{2} (\dot{\theta}_1+\dot{\theta}_2) (\cos\theta_1 \cos(\theta_1+\theta_2) + \sin\theta_1 \sin(\theta_1+\theta_2))$
                            $v_{c2}^2 = l_1^2 \dot{\theta}_1^2 + \frac{l_2^2}{4}(\dot{\theta}_1+\dot{\theta}_2)^2 + l_1 l_2 (\dot{\theta}_1+\dot{\theta}_2) \dot{\theta}_1 \cos(\theta_2)$

                            Total Kinetic Energy:
                            $T = T_1 + T_2$
                            $T_1 = \frac{1}{2} m_1 (l_1/2 \dot{\theta}_1)^2 + \frac{1}{2} I_1 \dot{\theta}_1^2$
                            $T_2 = \frac{1}{2} m_2 [ l_1^2 \dot{\theta}_1^2 + \frac{l_2^2}{4}(\dot{\theta}_1+\dot{\theta}_2)^2 + l_1 l_2 (\dot{\theta}_1+\dot{\theta}_2) \dot{\theta}_1 \cos(\theta_2) ] + \frac{1}{2} I_2 (\dot{\theta}_1+\dot{\theta}_2)^2$

                            Rearranging $T$ into the form $\frac{1}{2} \dot{\mathbf{q}}^T \mathbf{M}(\mathbf{q}) \dot{\mathbf{q}}$:
                            $\mathbf{q} = \begin{pmatrix} \theta_1 \\ \theta_2 \end{pmatrix}$, $\dot{\mathbf{q}} = \begin{pmatrix} \dot{\theta}_1 \\ \dot{\theta}_2 \end{pmatrix}$
                            $T = \frac{1}{2} \begin{pmatrix} \dot{\theta}_1 & \dot{\theta}_2 \end{pmatrix} \begin{pmatrix} M_{11} & M_{12} \\ M_{21} & M_{22} \end{pmatrix} \begin{pmatrix} \dot{\theta}_1 \\ \dot{\theta}_2 \end{pmatrix}$

                            $M_{11} = m_1 \frac{l_1^2}{4} + I_1 + m_2 l_1^2 + m_2 \frac{l_2^2}{4} + m_2 l_1 l_2 \cos(\theta_2) + I_2$
                            $M_{12} = m_2 \frac{l_2^2}{4} + m_2 l_1 l_2 \cos(\theta_2) + I_2$
                            $M_{21} = M_{12}$
                            $M_{22} = m_2 \frac{l_2^2}{4} + I_2$

                            So,
                            $T = \frac{1}{2} (m_1 \frac{l_1^2}{4} + I_1 + m_2 l_1^2 + m_2 \frac{l_2^2}{4} + m_2 l_1 l_2 \cos(\theta_2) + I_2) \dot{\theta}_1^2$
                              $+ \frac{1}{2} (m_2 \frac{l_2^2}{4} + m_2 l_1 l_2 \cos(\theta_2) + I_2) \dot{\theta}_2^2$
                              $+ (m_2 \frac{l_2^2}{4} + m_2 l_1 l_2 \cos(\theta_2) + I_2) \dot{\theta}_1 \dot{\theta}_2$

                            Let's redefine based on the standard compact form:
                            $M_{11}(\theta_2) = m_1 l_{c1}^2 + m_2 (l_1^2 + l_{c2}^2 + 2 l_1 l_{c2} \cos(\theta_2)) + I_1 + I_2$
                            $M_{12}(\theta_2) = m_2 (l_{c2}^2 + l_1 l_{c2} \cos(\theta_2)) + I_2$
                            $M_{22}(\theta_2) = m_2 l_{c2}^2 + I_2$
                            With $l_{c1}=l_1/2$, $l_{c2}=l_2/2$:
                            $M_{11}(\theta_2) = m_1 \frac{l_1^2}{4} + m_2 (\frac{l_1^2}{1} + \frac{l_2^2}{4} + 2 l_1 \frac{l_2}{2} \cos(\theta_2)) + I_1 + I_2 = m_1 \frac{l_1^2}{4} + m_2 l_1^2 + m_2 \frac{l_2^2}{4} + m_2 l_1 l_2 \cos(\theta_2) + I_1 + I_2$
                            $M_{12}(\theta_2) = m_2 (\frac{l_2^2}{4} + l_1 \frac{l_2}{2} \cos(\theta_2)) + I_2$
                            $M_{22}(\theta_2) = m_2 \frac{l_2^2}{4} + I_2$
                            This matches our earlier result.

2.  **Potential Energy (V):**
    *   Assuming $\theta_1$ and $\theta_2$ are angles from the horizontal, and potential energy is zero at the horizontal:
    *   $V_1 = m_1 g (l_1/2) \sin(\theta_1)$
    *   $V_2 = m_2 g (l_1 \sin(\theta_1) + l_2/2 \sin(\theta_1+\theta_2))$
    *   $V = V_1 + V_2 = g [ m_1 \frac{l_1}{2} \sin(\theta_1) + m_2 l_1 \sin(\theta_1) + m_2 \frac{l_2}{2} \sin(\theta_1+\theta_2) ]$

3.  **Lagrangian (L = T - V):**
    *   $L = \frac{1}{2} M_{11}(\theta_2)\dot{\theta}_1^2 + \frac{1}{2} M_{22}(\theta_2)\dot{\theta}_2^2 + M_{12}(\theta_2)\dot{\theta}_1\dot{\theta}_2 - g [ m_1 \frac{l_1}{2} \sin(\theta_1) + m_2 l_1 \sin(\theta_1) + m_2 \frac{l_2}{2} \sin(\theta_1+\theta_2) ]$

4.  **Apply Lagrange's Equations:**
    *   For $\theta_1$: $\frac{d}{dt}\left(\frac{\partial L}{\partial \dot{\theta}_1}\right) - \frac{\partial L}{\partial \theta_1} = \tau_1$
        *   $\frac{\partial L}{\partial \dot{\theta}_1} = M_{11}\dot{\theta}_1 + M_{12}\dot{\theta}_2$
        *   $\frac{d}{dt}\left(\frac{\partial L}{\partial \dot{\theta}_1}\right) = M_{11}\ddot{\theta}_1 + \dot{M}_{11}\dot{\theta}_1 + \dot{M}_{12}\dot{\theta}_2 + M_{12}\ddot{\theta}_2$
            *   $\dot{M}_{11} = -m_2 l_1 l_2 \sin(\theta_2) \dot{\theta}_2$
            *   $\dot{M}_{12} = -m_2 (\frac{l_2^2}{4} \sin(\theta_2) \dot{\theta}_2 + l_1 \frac{l_2}{2} \sin(\theta_2) \dot{\theta}_2) = -m_2 (\frac{l_2^2}{4} + \frac{l_1 l_2}{2}) \sin(\theta_2) \dot{\theta}_2$
        *   $\frac{\partial L}{\partial \theta_1} = g [ m_1 \frac{l_1}{2} \cos(\theta_1) + m_2 l_1 \cos(\theta_1) + m_2 \frac{l_2}{2} \cos(\theta_1+\theta_2) ]$

    *   For $\theta_2$: $\frac{d}{dt}\left(\frac{\partial L}{\partial \dot{\theta}_2}\right) - \frac{\partial L}{\partial \theta_2} = \tau_2$
        *   $\frac{\partial L}{\partial \dot{\theta}_2} = M_{22}\dot{\theta}_2 + M_{12}\dot{\theta}_1$
        *   $\frac{d}{dt}\left(\frac{\partial L}{\partial \dot{\theta}_2}\right) = M_{22}\ddot{\theta}_2 + \dot{M}_{22}\dot{\theta}_2 + \dot{M}_{12}\dot{\theta}_1 + M_{12}\ddot{\theta}_1$
            *   $\dot{M}_{22} = 0$
            *   $\dot{M}_{12}$ is as above.
        *   $\frac{\partial L}{\partial \theta_2} = \frac{1}{2} \frac{\partial M_{11}}{\partial \theta_2}\dot{\theta}_1^2 + \frac{1}{2} \frac{\partial M_{22}}{\partial \theta_2}\dot{\theta}_2^2 + \frac{\partial M_{12}}{\partial \theta_2}\dot{\theta}_1\dot{\theta}_2 - g m_2 \frac{l_2}{2} \cos(\theta_1+\theta_2)$
            *   $\frac{\partial M_{11}}{\partial \theta_2} = -m_2 l_1 l_2 \sin(\theta_2)$
            *   $\frac{\partial M_{22}}{\partial \theta_2} = 0$
            *   $\frac{\partial M_{12}}{\partial \theta_2} = m_2 (-\frac{l_2^2}{4} \sin(\theta_2) - l_1 \frac{l_2}{2} \sin(\theta_2)) = -m_2 (\frac{l_2^2}{4} + \frac{l_1 l_2}{2}) \sin(\theta_2)$

5.  **Resulting Equations:** After substituting and simplifying, the equations of motion will be in the form:
    $$ \mathbf{M}(\mathbf{q})\ddot{\mathbf{q}} + \mathbf{C}(\mathbf{q}, \dot{\mathbf{q}})\dot{\mathbf{q}} + \mathbf{G}(\mathbf{q}) = \boldsymbol{\tau} $$

    The terms in $\mathbf{C}(\mathbf{q}, \dot{\mathbf{q}})$ arise from the time derivative of the mass matrix terms ($\dot{M}_{ij}$) and the partial derivatives of the Lagrangian with respect to joint positions. For example, the term $M_{12}\dot{\theta}_1\dot{\theta}_2$ in T, when differentiated with respect to $\dot{\theta}_1$ and then time, contributes to the $\ddot{\theta}_2$ term in the first equation. The $M_{12}\dot{\theta}_1\dot{\theta}_2$ term from the Lagrangian itself contributes to the $\tau_2$ equation. The Coriolis terms arise from $\dot{M}_{ij}$.

    A typical formulation for the Coriolis and centrifugal terms for a 2R manipulator:
    $C_{11} = 0$
    $C_{12} = -m_2 l_1 l_{c2} \sin(\theta_2)$
    $C_{21} = m_2 l_1 l_{c2} \sin(\theta_2)$
    $C_{22} = 0$
    (These are simplified terms often presented; a full derivation using Christoffel symbols is more rigorous).

    Gravity terms are derived from $\frac{\partial V}{\partial q_i}$.
    $G_1 = -(m_1 \frac{l_1}{2} + m_2 l_1) g \cos(\theta_1) - m_2 \frac{l_2}{2} g \cos(\theta_1+\theta_2)$
    $G_2 = -m_2 \frac{l_2}{2} g \cos(\theta_1+\theta_2)$

    The final dynamic model for a 2R planar manipulator is:
    $$ \begin{bmatrix} M_{11} & M_{12} \\ M_{21} & M_{22} \end{bmatrix} \begin{bmatrix} \ddot{\theta}_1 \\ \ddot{\theta}_2 \end{bmatrix} + \begin{bmatrix} C_{11} & C_{12} \\ C_{21} & C_{22} \end{bmatrix} \begin{bmatrix} \dot{\theta}_1 \\ \dot{\theta}_2 \end{bmatrix} + \begin{bmatrix} G_1 \\ G_2 \end{bmatrix} = \begin{bmatrix} \tau_1 \\ \tau_2 \end{bmatrix} $$
    where the $M_{ij}$, $C_{ij}$, $G_i$ terms depend on $\theta_1$, $\theta_2$, $\dot{\theta}_1$, $\dot{\theta}_2$, robot link parameters ($m_i, l_i, I_i$).

**Reference:**
*   *Introduction to Robotics* by S. K. Saha (Chapter 5: Dynamics of Manipulators)
*   *Fundamentals of Robotics – Analysis and Control* by Robert J. Schilling (Chapter 7: Robot Dynamics)
*   *Introduction to Robotics: Mechanics and Control* by John J. Craig (Chapter 8.3: Dynamics of Manipulators)

### 5. Practice Questions and Answers

**Question 1:**
For a simple pendulum of length $l$ and mass $m$ at the end, what is its kinetic energy $T$ and potential energy $V$ in terms of its angle $\theta$ from the vertical and angular velocity $\dot{\theta}$? Derive the equation of motion using Lagrange's equation.

**Answer 1:**
*   **Kinetic Energy (T):** The velocity of the mass is $v = l\dot{\theta}$.
    $T = \frac{1}{2} m v^2 = \frac{1}{2} m (l\dot{\theta})^2 = \frac{1}{2} ml^2 \dot{\theta}^2$.
*   **Potential Energy (V):** Assuming the potential energy is zero at the pivot point and the pendulum is hanging down. Let the angle $\theta$ be from the vertical downward direction. The height of the mass is $h = -l \cos(\theta)$ (if the pivot is at y=0). Or, if we measure height from the lowest point, $h = l(1-\cos(\theta))$. Let's use the convention where $\theta=0$ is the vertical downward position, and V is zero at this point. Then the height relative to this point is $-l \cos(\theta)$.
    $V = mgh = -mgl \cos(\theta)$.
*   **Lagrangian (L):** $L = T - V = \frac{1}{2} ml^2 \dot{\theta}^2 - (-mgl \cos(\theta)) = \frac{1}{2} ml^2 \dot{\theta}^2 + mgl \cos(\theta)$.
*   **Lagrange's Equation:** $\frac{d}{dt}\left(\frac{\partial L}{\partial \dot{\theta}}\right) - \frac{\partial L}{\partial \theta} = Q_\theta$.
    *   $\frac{\partial L}{\partial \dot{\theta}} = ml^2 \dot{\theta}$
    *   $\frac{d}{dt}\left(\frac{\partial L}{\partial \dot{\theta}}\right) = ml^2 \ddot{\theta}$
    *   $\frac{\partial L}{\partial \theta} = -mgl \sin(\theta)$
*   **Equation of Motion:** $ml^2 \ddot{\theta} - (-mgl \sin(\theta)) = Q_\theta$.
    If $Q_\theta$ is the applied torque $\tau$, then $ml^2 \ddot{\theta} + mgl \sin(\theta) = \tau$.
    This can be written as $I \ddot{\theta} + mgl \sin(\theta) = \tau$, where $I = ml^2$ is the moment of inertia of the mass about the pivot.

**Question 2:**
A robot arm has a single joint with an equivalent inertia $I_{eq}$ at the joint. The joint is driven by a DC motor with inertia $I_m$ and a gearbox with ratio $N$. The motor torque is $\tau_m$. What is the equivalent inertia seen at the joint, $I_{joint}$, in terms of $I_m$, $N$, and any other relevant inertia (like the link's inertia, $I_{link}$)?

**Answer 2:**
The inertia of the motor $I_m$ when referred to the output shaft of the gearbox is $I_m' = I_m / N^2$.
The inertia of the link about the joint is $I_{link}$.
The total equivalent inertia at the joint is the sum of the inertia of the link and the referred inertia of the motor:
$I_{joint} = I_{link} + I_m'$.
$I_{joint} = I_{link} + \frac{I_m}{N^2}$.

If the problem statement implies $I_{eq}$ is the total inertia excluding the motor, then $I_{joint} = I_{eq} + \frac{I_m}{N^2}$.
However, the term $I_{eq}$ in the 1-DOF example already incorporated the link's inertia and motor inertia referred to the joint. So, if $I_{eq} = I_{link} + N^2 I_m$, then this $I_{eq}$ is the inertia at the joint *as seen by the motor shaft*. This is a bit confusingly worded.

Let's clarify:
*   Inertia of the motor rotor: $I_m$.
*   Inertia of the link about the joint: $I_{link}$.
*   Motor speed: $\dot{\theta}_m$. Joint speed: $\dot{\theta}$.
*   Gear ratio: $N = \frac{\dot{\theta}_m}{\dot{\theta}}$.
*   Torque relation: $\tau_{joint} = \eta N \tau_{motor\_shaft}$.
*   Kinetic energy at motor shaft: $T_m = \frac{1}{2} I_m \dot{\theta}_m^2 = \frac{1}{2} I_m (N\dot{\theta})^2 = \frac{1}{2} (N^2 I_m) \dot{\theta}^2$.
*   Kinetic energy of the link: $T_{link} = \frac{1}{2} I_{link} \dot{\theta}^2$.
*   Total kinetic energy at the joint: $T = T_{link} + T_m = \frac{1}{2} (I_{link} + N^2 I_m) \dot{\theta}^2$.
*   The "equivalent inertia at the joint" is $(I_{link} + N^2 I_m)$. If $I_{eq}$ in the example was indeed $I_{link} + N^2 I_m$, then the question is asking for the definition of $I_{eq}$ used.

**Question 3:**
Explain the physical meaning of the terms in the dynamic equation of a robot: $\mathbf{M}(\mathbf{q})\ddot{\mathbf{q}} + \mathbf{C}(\mathbf{q}, \dot{\mathbf{q}})\dot{\mathbf{q}} + \mathbf{G}(\mathbf{q}) = \boldsymbol{\tau}$.

**Answer 3:**
*   $\mathbf{M}(\mathbf{q})\ddot{\mathbf{q}}$: This term represents the **inertial forces**. It describes how the inertia of the robot links, which changes with the robot's configuration $\mathbf{q}$, resists the acceleration $\ddot{\mathbf{q}}$ of the joints. $\mathbf{M}(\mathbf{q})$ is the mass matrix.
*   $\mathbf{C}(\mathbf{q}, \dot{\mathbf{q}})\dot{\mathbf{q}}$: This term represents **Coriolis and centrifugal forces**.
    *   **Centrifugal forces** arise due to the rotation of the robot links themselves (e.g., a mass rotating in a circle experiences an outward centrifugal force).
    *   **Coriolis forces** arise when a mass moves in a rotating frame of reference (e.g., an object moving radially on a spinning disk experiences a Coriolis force perpendicular to its velocity and the axis of rotation). These forces are significant in robot arms with multiple moving links. They depend on both the position and velocity of the joints.
*   $\mathbf{G}(\mathbf{q})$: This term represents the **gravity forces**. It accounts for the torque generated by gravity acting on the mass of the robot links, which depends on the robot's configuration $\mathbf{q}$ (i.e., the orientation of the links).
*   $\boldsymbol{\tau}$: This is the vector of **applied torques or forces** at the joints, which are the inputs to the robot that cause it to move.

### 6. Important Points to Remember

*   **Lagrange's Equation:** $L = T - V$. The fundamental tool for deriving robot dynamics.
*   **Dynamic Equation Form:** $\mathbf{M}(\mathbf{q})\ddot{\mathbf{q}} + \mathbf{C}(\mathbf{q}, \dot{\mathbf{q}})\dot{\mathbf{q}} + \mathbf{G}(\mathbf{q}) = \boldsymbol{\tau}$.
*   **Mass Matrix $\mathbf{M}(\mathbf{q})$:** Symmetric, positive definite, configuration-dependent.
*   **Coriolis/Centrifugal Terms $\mathbf{C}(\mathbf{q}, \dot{\mathbf{q}})\dot{\mathbf{q}}$:** Represent forces due to motion in a rotating frame and are velocity-dependent.
*   **Gravity Terms $\mathbf{G}(\mathbf{q})$:** Represent forces due to gravity, configuration-dependent.
*   **Motor and Gearbox:** Inertia and torque are transformed across a gearbox by the square of the gear ratio ($N^2$) for inertia and by ($N$) for torque (ignoring efficiency for simplicity).
*   **Complexity:** The dynamic equations for robots with more than one DOF become coupled and highly nonlinear.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### 7. Textbook References for Further Study

*   **Introduction to Robotics** by S. K. Saha (McGraw Hill Education (India) Private Limited, 2014) - Excellent for conceptual understanding and derivations.
*   **Fundamentals of robotics – Analysis and control** by Robert. J. Schilling (Prentice Hall of India, 1996.) - Provides a good balance of theory and practical application.
*   **Robotics and Control** by R K Mittal and I J Nagrath (Tata McGraw Hill, New Delhi, 2003) - Comprehensive coverage of robotic systems including dynamics.
*   **Introduction to Robotics: Mechanics and Control** by John. J. Craig (Pearson Education Asia, 4th Edition, 2018) - A classic text with detailed derivations and examples.
*   **Robotics-Fundamental concepts and analysis** by Ashitava Ghosal (Oxford University press., 2006) - Offers a clear perspective on the underlying principles.
*   **Robotics Technology and Flexible Automation** by S. R. Deb (McGraw-Hill Education LLC, Second Edition) - Focuses on industrial applications and associated dynamics.

This module is crucial for understanding how robots move and how to control their motion, directly contributing to **Course Outcome CO6**.