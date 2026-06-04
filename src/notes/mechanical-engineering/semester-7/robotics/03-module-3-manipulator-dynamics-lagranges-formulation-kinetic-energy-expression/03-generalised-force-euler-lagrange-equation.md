---
title: "Generalised force, Euler-Lagrange equation"
subject: "ROBOTICS"
module: "Module 3: Manipulator Dynamics: Lagrange’s formulation – Kinetic Energy expression"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804464251"
status: "completed"
scrapedAt: "2026-05-20T18:18:47.388Z"
---
# ROBOTICS: Module 3: Manipulator Dynamics: Lagrange’s Formulation – Kinetic Energy Expression

## Topic: Generalised Force, Euler-Lagrange Equation

---

### **Learning Outcomes:**

By the end of this module, you will be able to:

*   Understand the concept of generalized forces in robotic manipulators.
*   Derive the Euler-Lagrange equations for a robotic manipulator.
*   Relate generalized forces to physical forces and torques acting on the robot.
*   Apply Lagrange's formulation to derive the dynamic equations of motion for robotic manipulators.
*   Comprehend the role of kinetic and potential energy in manipulator dynamics.

---

### **1. Introduction to Manipulator Dynamics**

Manipulator dynamics deals with the relationship between the forces (or torques) applied to a robot's joints and the resulting motion (position, velocity, and acceleration). Understanding these dynamics is crucial for:

*   **Controller Design (CO4):** Developing effective control algorithms that can accurately command the robot's movements.
*   **Trajectory Planning (CO3):** Generating smooth and efficient trajectories that consider the robot's dynamic capabilities and limitations.
*   **Performance Analysis (CO4):** Predicting and optimizing the robot's speed, accuracy, and energy consumption.

Lagrange's formulation provides a powerful and systematic way to derive the dynamic equations of motion, avoiding the complexities of dealing directly with forces at each joint and link.

---

### **2. Kinetic Energy Expression (Recap and Extension)**

Before diving into generalized forces and Euler-Lagrange equations, it's essential to recall the concept of kinetic energy in the context of manipulators.

**Definition: Kinetic Energy (T)**
The kinetic energy of a rigid body is the energy it possesses due to its motion. For a robotic manipulator, which consists of multiple links, the total kinetic energy is the sum of the kinetic energies of each link.

*   **For a single rigid link:**
    *   $T_{link} = \frac{1}{2} m_i \dot{\mathbf{r}}_{ci}^T \dot{\mathbf{r}}_{ci} + \frac{1}{2} \boldsymbol{\omega}_i^T \mathbf{I}_i \boldsymbol{\omega}_i$
        *   $m_i$: Mass of link $i$.
        *   $\dot{\mathbf{r}}_{ci}$: Velocity of the center of mass of link $i$.
        *   $\boldsymbol{\omega}_i$: Angular velocity of link $i$.
        *   $\mathbf{I}_i$: Inertia tensor of link $i$ about its center of mass.

*   **For a manipulator with 'n' degrees of freedom (DOF):**
    The kinetic energy is expressed in terms of **generalized coordinates** (typically joint angles, denoted by $\mathbf{q} = [q_1, q_2, \ldots, q_n]^T$) and their time derivatives (generalized velocities, $\dot{\mathbf{q}}$).

    *   $T(\mathbf{q}, \dot{\mathbf{q}}) = \sum_{i=1}^{n} T_{link_i}(\mathbf{q}, \dot{\mathbf{q}})$

    **Example:** Consider a simple 1-DOF planar manipulator (like a single arm rotating in a plane).
    *   Let the joint angle be $q_1 = \theta$.
    *   The velocity of the center of mass of a link might be proportional to $\dot{\theta}$.
    *   The angular velocity of the link is $\dot{\theta}$.
    *   The kinetic energy would be of the form: $T = \frac{1}{2} J(\theta) \dot{\theta}^2$, where $J(\theta)$ is some inertia-like term dependent on the configuration $\theta$.

**Reference:** Schilling, Chapter 5; Craig, Chapter 7; Ghosal, Chapter 6.

---

### **3. Generalised Force**

In robotics, we often work with joint torques (for revolute joints) or forces (for prismatic joints) that drive the manipulator. These are the "effort" variables. **Generalized forces** are a way to represent these physical forces and torques in a consistent manner within the Lagrange framework, irrespective of the nature of the generalized coordinates.

**Definition: Generalised Force ($Q_k$)**
A generalized force $Q_k$ corresponding to a generalized coordinate $q_k$ is defined as the rate at which work is done by the physical forces and torques when the generalized coordinate $q_k$ is varied by a small amount $\delta q_k$, while all other generalized coordinates are held constant.

*   $W = \sum_{k=1}^{n} Q_k \delta q_k$
    *   $W$: Total virtual work done by the physical forces.
    *   $Q_k$: Generalized force associated with the $k$-th generalized coordinate $q_k$.
    *   $\delta q_k$: Virtual displacement of the $k$-th generalized coordinate.

**How to find Generalized Forces:**

1.  **Identify the physical forces/torques:** These are the forces/torques acting at the joints or on the links (e.g., motor torques, gravity, friction, external loads).
2.  **Calculate virtual work:** For each physical force/torque, determine the virtual work it does when the corresponding generalized coordinate undergoes a virtual displacement.
    *   **For a torque $\tau_k$ at a revolute joint $k$:** If $q_k$ is the angle of that joint, the virtual work done by the torque is $\delta W_k = \tau_k \delta q_k$. Thus, the generalized force $Q_k = \tau_k$.
    *   **For a force $F$ acting at a point with displacement $\mathbf{d}$:** If $q_k$ is the generalized coordinate, the virtual work is $\delta W = \mathbf{F} \cdot \delta \mathbf{d}$. If $\delta \mathbf{d} = \frac{\partial \mathbf{d}}{\partial q_k} \delta q_k$, then $Q_k = \mathbf{F} \cdot \frac{\partial \mathbf{d}}{\partial q_k}$.
    *   **For gravity:** Gravity acts on the center of mass of each link. We need to calculate the virtual work done by gravity for each joint displacement.

**Example:** Consider a 1-DOF planar arm with a single revolute joint driven by a torque $\tau$.
*   Generalized coordinate: $q_1 = \theta$.
*   Physical force: Torque $\tau$ at the joint.
*   Virtual work: $\delta W = \tau \delta \theta$.
*   Generalized force: $Q_1 = \tau$.

**Example with Gravity:** Consider the same 1-DOF planar arm. Let the mass of the link be $m$, and its center of mass be at a distance $r$ from the joint. Gravity acts downwards.
*   Generalized coordinate: $q_1 = \theta$.
*   Physical force: Gravitational force $F_g = mg$ acting downwards.
*   Let the joint be at the origin. The position of the center of mass is $(r \cos \theta, r \sin \theta)$.
*   Virtual displacement of the center of mass:
    *   $\delta x_{cm} = -r \sin \theta \delta \theta$
    *   $\delta y_{cm} = r \cos \theta \delta \theta$
*   Virtual work done by gravity ($F_g$ acting in the $-y$ direction):
    *   $\delta W_g = \mathbf{F}_g \cdot \delta \mathbf{p}_{cm} = (0, -mg) \cdot (-r \sin \theta \delta \theta, r \cos \theta \delta \theta)$
    *   $\delta W_g = -mg r \cos \theta \delta \theta$
*   Generalized force due to gravity: $Q_{g} = -mg r \cos \theta$.
*   Total generalized force if torque $\tau$ is applied: $Q_{total} = \tau - mg r \cos \theta$.

**Reference:** Schilling, Chapter 5; Craig, Chapter 7; Ghosal, Chapter 7; Mittal, Chapter 4.

---

### **4. Potential Energy Expression**

The potential energy of a system is the energy it possesses due to its position or configuration. For robotic manipulators, the most common source of potential energy is gravity.

**Definition: Potential Energy (V)**
The potential energy is defined as the negative of the virtual work done by conservative forces when the system moves from a reference configuration to its current configuration.

*   $V(\mathbf{q}) = -W_{conservative}(\mathbf{q})$

**For gravity:**
The potential energy due to gravity is typically calculated relative to a chosen zero potential reference point.

*   $V_{gravity}(\mathbf{q}) = \sum_{i=1}^{n} m_i g h_i(\mathbf{q})$
    *   $m_i$: Mass of link $i$.
    *   $g$: Acceleration due to gravity.
    *   $h_i(\mathbf{q})$: Height of the center of mass of link $i$ above the reference plane.

**Example:** For the 1-DOF planar arm with its joint at the origin, and gravity acting in the $-y$ direction:
*   Center of mass position: $(r \cos \theta, r \sin \theta)$.
*   Height $h = r \sin \theta$ (assuming reference plane at $y=0$).
*   Potential energy: $V(\theta) = m g h = m g r \sin \theta$.

**Relationship between generalized force and potential energy:**
The generalized force associated with a conservative force is the negative gradient of the potential energy with respect to the corresponding generalized coordinate.

*   $Q_{k, conservative} = -\frac{\partial V}{\partial q_k}$

**Example:** For gravity in the 1-DOF planar arm:
*   $V(\theta) = m g r \sin \theta$.
*   $Q_{g} = -\frac{\partial V}{\partial \theta} = -\frac{\partial}{\partial \theta} (m g r \sin \theta) = -m g r \cos \theta$. This matches our previous calculation of the generalized force due to gravity.

**Reference:** Schilling, Chapter 5; Craig, Chapter 7; Ghosal, Chapter 7; Mittal, Chapter 4.

---

### **5. The Euler-Lagrange Equation**

Lagrange's formulation provides a set of second-order differential equations that describe the motion of a mechanical system. These are known as the Euler-Lagrange equations. They are derived from the principle of virtual work and express the relationship between kinetic energy, potential energy, and generalized forces.

**The Lagrangian ($\mathcal{L}$):**
The Lagrangian is defined as the difference between the total kinetic energy and the total potential energy of the system.

*   $\mathcal{L}(\mathbf{q}, \dot{\mathbf{q}}, t) = T(\mathbf{q}, \dot{\mathbf{q}}) - V(\mathbf{q})$

**The Euler-Lagrange Equation for Conservative Systems:**
For each generalized coordinate $q_k$, the equation of motion is given by:

*   $\frac{d}{dt} \left( \frac{\partial \mathcal{L}}{\partial \dot{q}_k} \right) - \frac{\partial \mathcal{L}}{\partial q_k} = 0$

**Introducing Generalized Forces:**
When non-conservative forces (like applied torques, friction, damping) are present, they are incorporated as generalized forces $Q_k$. The Euler-Lagrange equation becomes:

*   $\frac{d}{dt} \left( \frac{\partial \mathcal{L}}{\partial \dot{q}_k} \right) - \frac{\partial \mathcal{L}}{\partial q_k} = Q_k$

Where:
*   $Q_k$ is the generalized force corresponding to $q_k$, which includes all non-conservative forces and applied torques/forces.

**Derivation Outline (Conceptual):**
The Euler-Lagrange equation can be derived from D'Alembert's Principle, which states that the sum of the virtual work done by the inertial forces (negative of the actual forces causing acceleration) and the actual forces acting on the system is zero for any virtual displacement.

*   Virtual Work = 0
*   $\sum_{k=1}^{n} \left( F_{k, applied} - F_{k, inertial} \right) \delta q_k = 0$

Where $F_{k, applied}$ are the generalized applied forces (including conservative and non-conservative) and $F_{k, inertial}$ are the generalized inertial forces.
Using the definition of Lagrangian and the relationship between forces and Lagrangian terms, this leads to the Euler-Lagrange equations.

**Form of the Dynamic Equations for Manipulators:**
When applied to robotic manipulators, the Euler-Lagrange equations result in a set of coupled, second-order non-linear ordinary differential equations. These are typically written in the form:

*   $\mathbf{M}(\mathbf{q}) \ddot{\mathbf{q}} + \mathbf{C}(\mathbf{q}, \dot{\mathbf{q}}) \dot{\mathbf{q}} + \mathbf{g}(\mathbf{q}) = \boldsymbol{\tau}$

Where:
*   $\mathbf{q}$: Vector of generalized coordinates (joint positions).
*   $\dot{\mathbf{q}}$: Vector of generalized velocities (joint velocities).
*   $\ddot{\mathbf{q}}$: Vector of generalized accelerations (joint accelerations).
*   $\mathbf{M}(\mathbf{q})$: The symmetric, positive-definite **mass matrix** (or inertia matrix). It depends on the robot's configuration due to the changing kinematics. $\mathbf{M}_{ik} = \frac{d}{dt} \left( \frac{\partial T}{\partial \dot{q}_k} \right) \frac{\partial q_i}{\partial \dot{q}_k} - \frac{\partial T}{\partial q_i}$. More simply, terms like $\frac{\partial^2 T}{\partial \dot{q}_i \partial \dot{q}_k}$ contribute to $M$.
*   $\mathbf{C}(\mathbf{q}, \dot{\mathbf{q}}) \dot{\mathbf{q}}$: The **Coriolis and centrifugal forces** vector. These arise from the non-linear dependence of kinetic energy on velocities and configuration. The terms are of the form $\frac{\partial^2 T}{\partial q_i \partial \dot{q}_k} \dot{q}_k$ and $\frac{\partial^2 T}{\partial \dot{q}_i \partial \dot{q}_k} \dot{q}_k$. They are often written as $\mathbf{C}(\mathbf{q}, \dot{\mathbf{q}}) \dot{\mathbf{q}}$ where $\mathbf{C}$ is a matrix.
*   $\mathbf{g}(\mathbf{q})$: The **gravity forces** vector. These arise from the potential energy term. $\mathbf{g}_k = -\frac{\partial V}{\partial q_k}$.
*   $\boldsymbol{\tau}$: The vector of **applied generalized forces/torques** at the joints ($\boldsymbol{\tau} = [ \tau_1, \tau_2, \ldots, \tau_n ]^T$).

**How the terms in $\mathbf{M}\ddot{\mathbf{q}} + \mathbf{C}\dot{\mathbf{q}} + \mathbf{g} = \boldsymbol{\tau}$ arise from Euler-Lagrange:**

For each $k=1, \dots, n$:
$\frac{d}{dt} \left( \frac{\partial \mathcal{L}}{\partial \dot{q}_k} \right) - \frac{\partial \mathcal{L}}{\partial q_k} = \tau_k$

Let's expand the first term:
$\frac{\partial \mathcal{L}}{\partial \dot{q}_k} = \frac{\partial T}{\partial \dot{q}_k}$ (since V is independent of $\dot{q}_k$)

$\frac{d}{dt} \left( \frac{\partial T}{\partial \dot{q}_k} \right) = \sum_{j=1}^{n} \frac{d}{dt} \left( \frac{\partial^2 T}{\partial \dot{q}_k \partial \dot{q}_j} \right) \dot{q}_j + \sum_{j=1}^{n} \frac{\partial^2 T}{\partial \dot{q}_k \partial q_j} \frac{d}{dt}(q_j) + \frac{\partial^2 T}{\partial \dot{q}_k \partial t}$
This is complex to expand directly without specific forms of T.

A more systematic way to see the structure:
Consider the term $\frac{d}{dt} \left( \frac{\partial T}{\partial \dot{q}_k} \right)$.
We can write $T$ as $T = \frac{1}{2} \sum_{i=1}^{n} \sum_{j=1}^{n} M_{ij}(\mathbf{q}) \dot{q}_i \dot{q}_j$ (this is a simplified view for quadratic kinetic energy).
Then $\frac{\partial T}{\partial \dot{q}_k} = \sum_{j=1}^{n} M_{kj}(\mathbf{q}) \dot{q}_j$.
And $\frac{d}{dt} \left( \frac{\partial T}{\partial \dot{q}_k} \right) = \sum_{j=1}^{n} \left( \dot{M}_{kj}(\mathbf{q}) \dot{q}_j + M_{kj}(\mathbf{q}) \ddot{q}_j \right)$.
This $\dot{M}_{kj}(\mathbf{q})$ term and the chain rule application on $M_{kj}(\mathbf{q}) \dot{q}_j$ leads to the $\mathbf{C}(\mathbf{q}, \dot{\mathbf{q}}) \dot{\mathbf{q}}$ term.

Specifically,
$\frac{d}{dt} \left( \frac{\partial T}{\partial \dot{q}_k} \right) = \sum_{j=1}^{n} \frac{\partial}{\partial q_j} \left( \frac{\partial T}{\partial \dot{q}_k} \right) \dot{q}_j + \frac{\partial}{\partial \dot{q}_k} \left( \frac{\partial T}{\partial \dot{q}_k} \right) \ddot{q}_k$ - this isn't quite right.

Let's use the structure directly:
The equation for the $k^{th}$ joint torque $\tau_k$ is:
$\tau_k = \sum_{j=1}^{n} m_{kj}(\mathbf{q}) \ddot{q}_j + \sum_{i=1}^{n} \sum_{j=1}^{n} c_{kij}(\mathbf{q}, \dot{\mathbf{q}}) \dot{q}_i \dot{q}_j - \frac{\partial V}{\partial q_k}$

Where:
*   $m_{kj}(\mathbf{q})$ are elements of the mass matrix $\mathbf{M}(\mathbf{q})$.
*   $c_{kij}(\mathbf{q}, \dot{\mathbf{q}})$ are elements of the Coriolis/centrifugal matrix $\mathbf{C}(\mathbf{q}, \dot{\mathbf{q}})$.
*   $-\frac{\partial V}{\partial q_k}$ is the generalized force due to gravity.

Summing over all $k$, we get the matrix form:
$\boldsymbol{\tau} = \mathbf{M}(\mathbf{q}) \ddot{\mathbf{q}} + \mathbf{C}(\mathbf{q}, \dot{\mathbf{q}}) \dot{\mathbf{q}} + \mathbf{g}(\mathbf{q})$

**Important Point:** The Euler-Lagrange formulation is configuration-dependent, meaning the mass matrix $\mathbf{M}(\mathbf{q})$ and the Coriolis/centrifugal terms $\mathbf{C}(\mathbf{q}, \dot{\mathbf{q}})$ change as the robot's joints move. This is a key characteristic of manipulator dynamics.

**Reference:** Schilling, Chapter 5; Craig, Chapter 7; Ghosal, Chapter 7; Mittal, Chapter 4; Saha, Chapter 5.

---

### **5.1 Example: Dynamic Equations for a 2-DOF Planar Manipulator**

Let's consider a simple 2-DOF planar manipulator with two revolute joints and two links.

*   **Joint variables:** $q_1 = \theta_1$, $q_2 = \theta_2$.
*   **Link 1:** Mass $m_1$, length $l_1$, center of mass at $(l_1/2, 0)$ relative to joint 1. Inertia about joint 1 is $I_1$.
*   **Link 2:** Mass $m_2$, length $l_2$, center of mass at $(l_2/2, 0)$ relative to joint 2. Inertia about joint 2 is $I_2$.

We would need to compute the kinetic and potential energy for each link. This involves determining the position and velocity of the center of mass of each link in terms of $\theta_1, \theta_2, \dot{\theta}_1, \dot{\theta}_2$. This calculation can be quite involved.

**Let's assume the resulting dynamic equations are (as often found in textbooks):**
$\boldsymbol{\tau} = \mathbf{M}(\mathbf{q}) \ddot{\mathbf{q}} + \mathbf{C}(\mathbf{q}, \dot{\mathbf{q}}) \dot{\mathbf{q}} + \mathbf{g}(\mathbf{q})$

Where:
*   $\mathbf{q} = \begin{bmatrix} \theta_1 \\ \theta_2 \end{bmatrix}$, $\dot{\mathbf{q}} = \begin{bmatrix} \dot{\theta}_1 \\ \dot{\theta}_2 \end{bmatrix}$, $\ddot{\mathbf{q}} = \begin{bmatrix} \ddot{\theta}_1 \\ \ddot{\theta}_2 \end{bmatrix}$, $\boldsymbol{\tau} = \begin{bmatrix} \tau_1 \\ \tau_2 \end{bmatrix}$

The components of $\mathbf{M}$, $\mathbf{C}$, and $\mathbf{g}$ would be functions of $\theta_1$ and $\theta_2$. For example, the mass matrix might look something like:

$\mathbf{M}(\mathbf{q}) = \begin{bmatrix} M_{11}(\theta_1, \theta_2) & M_{12}(\theta_1, \theta_2) \\ M_{21}(\theta_1, \theta_2) & M_{22}(\theta_1, \theta_2) \end{bmatrix}$

And the gravity vector might be:

$\mathbf{g}(\mathbf{q}) = \begin{bmatrix} G_1(\theta_1, \theta_2) \\ G_2(\theta_1, \theta_2) \end{bmatrix}$

**Deriving these terms requires careful application of the Euler-Lagrange equations and transformations.** This is often the most mathematically intensive part of dynamics.

**Reference:** Schilling, Chapter 5; Craig, Chapter 7; Ghosal, Chapter 7; Mittal, Chapter 4.

---

### **6. Applications and Alignment with Course Outcomes**

*   **CO4: Develop a dynamic model and design the controller for robotic manipulators.**
    *   The Euler-Lagrange formulation directly leads to the dynamic model $\boldsymbol{\tau} = \mathbf{M}(\mathbf{q}) \ddot{\mathbf{q}} + \mathbf{C}(\mathbf{q}, \dot{\mathbf{q}}) \dot{\mathbf{q}} + \mathbf{g}(\mathbf{q})$.
    *   This model is essential for designing controllers such as computed torque control, PD control with gravity compensation, etc. Understanding the components of the dynamic model (mass matrix, Coriolis/centrifugal forces, gravity) is critical.

*   **CO3: Plan trajectories in joint space & Cartesian space and avoid obstacles while robots are in motion.**
    *   Knowing the dynamics allows for more realistic trajectory planning. A planned trajectory $(\mathbf{q}(t), \dot{\mathbf{q}}(t), \ddot{\mathbf{q}}(t))$ can be used in the dynamic equation to calculate the required torques $\boldsymbol{\tau}(t)$. This tells us if a planned motion is achievable by the robot's actuators.

---

### **7. Key Points to Remember**

*   **Lagrangian:** $\mathcal{L} = T - V$.
*   **Euler-Lagrange Equation:** $\frac{d}{dt} \left( \frac{\partial \mathcal{L}}{\partial \dot{q}_k} \right) - \frac{\partial \mathcal{L}}{\partial q_k} = Q_k$.
*   **Generalized Force ($Q_k$):** Represents the effect of physical forces/torques in terms of virtual work done on generalized coordinates.
*   **Potential Energy (V):** Primarily due to gravity for manipulators. $Q_{k, conservative} = -\frac{\partial V}{\partial q_k}$.
*   **Robot Dynamic Model:** Typically expressed as $\boldsymbol{\tau} = \mathbf{M}(\mathbf{q}) \ddot{\mathbf{q}} + \mathbf{C}(\mathbf{q}, \dot{\mathbf{q}}) \dot{\mathbf{q}} + \mathbf{g}(\mathbf{q})$.
*   **$\mathbf{M}(\mathbf{q})$:** Mass/Inertia Matrix (configuration-dependent, symmetric, positive-definite).
*   **$\mathbf{C}(\mathbf{q}, \dot{\mathbf{q}})$:** Coriolis and Centrifugal Forces Matrix.
*   **$\mathbf{g}(\mathbf{q})$:** Gravity Forces Vector.
*   **$\boldsymbol{\tau}$:** Applied Joint Torques/Forces.
*   Lagrange's formulation is systematic but can be computationally intensive for complex robots.

---

### **8. Practice Questions**

**Question 1:**
Define the Lagrangian of a mechanical system and state the Euler-Lagrange equation for a system with generalized forces.

**Answer:**
The Lagrangian ($\mathcal{L}$) of a mechanical system is defined as the difference between its total kinetic energy ($T$) and its total potential energy ($V$):
$\mathcal{L} = T - V$

The Euler-Lagrange equation for a system with $n$ degrees of freedom and generalized forces $Q_k$ is given by:
$\frac{d}{dt} \left( \frac{\partial \mathcal{L}}{\partial \dot{q}_k} \right) - \frac{\partial \mathcal{L}}{\partial q_k} = Q_k$, for $k = 1, 2, \ldots, n$.

---

**Question 2:**
For a 1-DOF planar manipulator with a single revolute joint at the origin, a link of mass $m$ and length $l$, and its center of mass located at $l/2$ along the link. If gravity acts downwards (along the $-y$ axis) and the joint angle is $\theta$ (measured from the horizontal).
a) Calculate the kinetic energy $T(\theta, \dot{\theta})$.
b) Calculate the potential energy $V(\theta)$ assuming $V=0$ at the joint axis.
c) Determine the generalized force due to gravity $Q_{g}$ using both the virtual work method and the potential energy gradient.

**Answer:**
Let the joint be at the origin (0,0). Gravity is $\mathbf{g} = [0, -g]$.
The position of the center of mass is $\mathbf{p}_{cm} = [\frac{l}{2} \cos \theta, \frac{l}{2} \sin \theta]$.
The velocity of the center of mass is $\dot{\mathbf{p}}_{cm} = [-\frac{l}{2} \sin \theta \dot{\theta}, \frac{l}{2} \cos \theta \dot{\theta}]$.
The angular velocity is $\dot{\theta}$.

a) **Kinetic Energy $T$**:
Assume for simplicity that the link's inertia tensor about its center of mass is negligible or already accounted for in a generalized inertia term. For a simple point mass at the center of mass, $T = \frac{1}{2} m |\dot{\mathbf{p}}_{cm}|^2$.
$T = \frac{1}{2} m \left( (-\frac{l}{2} \sin \theta \dot{\theta})^2 + (\frac{l}{2} \cos \theta \dot{\theta})^2 \right)$
$T = \frac{1}{2} m \left( \frac{l^2}{4} \sin^2 \theta \dot{\theta}^2 + \frac{l^2}{4} \cos^2 \theta \dot{\theta}^2 \right)$
$T = \frac{1}{2} m \frac{l^2}{4} (\sin^2 \theta + \cos^2 \theta) \dot{\theta}^2$
$T = \frac{1}{4} m l^2 \dot{\theta}^2$

*(Note: A more complete kinetic energy would include rotational kinetic energy about the center of mass: $\frac{1}{2} I_{cm} \dot{\theta}^2$. For this problem, we focus on the velocity part.)*

b) **Potential Energy $V$**:
The height of the center of mass is $h = \frac{l}{2} \sin \theta$.
Assuming $V=0$ at the joint axis (where $h=0$ if $\theta=0$), the potential energy due to gravity is:
$V(\theta) = m g h = m g \frac{l}{2} \sin \theta$.

c) **Generalized Force due to Gravity $Q_g$**:

*   **Method 1: Virtual Work:**
    The virtual work done by gravity ($\mathbf{F}_g = [0, -mg]$) for a virtual displacement $\delta \mathbf{p}_{cm}$:
    $\delta W_g = \mathbf{F}_g \cdot \delta \mathbf{p}_{cm}$
    $\delta \mathbf{p}_{cm} = [-\frac{l}{2} \sin \theta \delta \theta, \frac{l}{2} \cos \theta \delta \theta]$
    $\delta W_g = (0, -mg) \cdot [-\frac{l}{2} \sin \theta \delta \theta, \frac{l}{2} \cos \theta \delta \theta]$
    $\delta W_g = -mg (\frac{l}{2} \cos \theta \delta \theta)$
    Since $\delta W_g = Q_g \delta \theta$, we have $Q_g = -\frac{1}{2} m g l \cos \theta$.

*   **Method 2: Potential Energy Gradient:**
    $Q_g = -\frac{\partial V}{\partial \theta}$
    $V(\theta) = \frac{1}{2} m g l \sin \theta$
    $Q_g = -\frac{\partial}{\partial \theta} (\frac{1}{2} m g l \sin \theta)$
    $Q_g = -\frac{1}{2} m g l \cos \theta$.

Both methods yield the same result.

---

**Question 3:**
What are the main components of the robot dynamic equation derived from Lagrange's formulation, and what do they represent physically?

**Answer:**
The robot dynamic equation derived from Lagrange's formulation is typically written as:
$\boldsymbol{\tau} = \mathbf{M}(\mathbf{q}) \ddot{\mathbf{q}} + \mathbf{C}(\mathbf{q}, \dot{\mathbf{q}}) \dot{\mathbf{q}} + \mathbf{g}(\mathbf{q})$

The main components are:
*   **$\mathbf{M}(\mathbf{q})$ (Mass/Inertia Matrix):** Represents the inertial properties of the robot. It relates joint accelerations to joint torques. It's symmetric and positive-definite. Its elements are functions of the robot's configuration ($\mathbf{q}$) because the distribution of mass changes with joint positions.
*   **$\mathbf{C}(\mathbf{q}, \dot{\mathbf{q}}) \dot{\mathbf{q}}$ (Coriolis and Centrifugal Forces Vector):** Represents the forces arising from the interaction between joint velocities and the robot's configuration. Centrifugal forces occur even if the robot moves at a constant angular velocity in a non-linear path. Coriolis forces arise from the product of velocities and the velocity-dependent coupling terms. These terms contribute to the torque required to maintain motion.
*   **$\mathbf{g}(\mathbf{q})$ (Gravity Forces Vector):** Represents the generalized forces (torques or forces) due to gravity acting on the robot's links. These torques are necessary to counteract the pull of gravity and keep the robot in a specific configuration. They depend on the robot's configuration.
*   **$\boldsymbol{\tau}$ (Applied Joint Torques/Forces):** This is the vector of control inputs, the actual torques or forces applied by the actuators at the robot's joints.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
