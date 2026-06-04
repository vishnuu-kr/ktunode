---
title: "Lagrange-Euler method"
subject: "MOBILE ROBOTICS"
module: "Module 2: Kinematic model"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf48044640ac"
status: "completed"
scrapedAt: "2026-05-20T18:15:10.436Z"
---
## Mobile Robotics: Module 2 - Kinematic Model

### Topic: The Lagrange-Euler Method

**Course Outcomes Addressed:**

*   **CO2: Derive the kinematic model of mobile robots (Knowledge Level: K4)** - The Lagrange-Euler method provides a systematic way to derive the kinematic and dynamic equations of motion for complex robotic systems.
*   **CO3: Derive dynamic model of mobile robots (Knowledge Level: K4)** - This method directly leads to the dynamic model, which describes the relationship between forces/torques and accelerations.

---

### 1. Introduction to the Lagrange-Euler Method

The Lagrange-Euler (LE) method is a powerful framework for deriving the equations of motion for mechanical systems. It is particularly well-suited for robotic systems, which often consist of interconnected rigid bodies with joints and actuators. Unlike Newtonian mechanics, which deals directly with forces and accelerations, the LE method focuses on the system's energy.

**Key Idea:** The LE method is based on the principle of least action, which states that the path a system takes between two points in time is the one that minimizes a quantity called the "action." In the LE formulation, this is achieved by considering the system's kinetic and potential energies.

**Underlying Principles:**

*   **Lagrangian (L):** The Lagrangian of a system is defined as the difference between its kinetic energy ($T$) and its potential energy ($V$).
    $L = T - V$

*   **Euler-Lagrange Equations:** For a system with generalized coordinates $q_i$, the equations of motion are given by:
    $\frac{d}{dt}\left(\frac{\partial L}{\partial \dot{q}_i}\right) - \frac{\partial L}{\partial q_i} = Q_i$
    where:
    *   $q_i$ are the generalized coordinates (e.g., joint angles, robot position and orientation).
    *   $\dot{q}_i$ are the generalized velocities.
    *   $Q_i$ are the generalized non-conservative forces or torques acting on the system.

**Benefits for Mobile Robotics:**

*   **Systematic Derivation:** Provides a structured approach to deriving complex equations of motion, reducing the chance of errors.
*   **Independence of Coordinate System:** The resulting equations are independent of the specific choice of generalized coordinates.
*   **Handling Constraints:** The LE method can be extended to handle holonomic and non-holonomic constraints, which are common in mobile robots.
*   **Foundation for Dynamics:** Directly leads to the dynamic model, crucial for control design.

**Reference:**

*   **Siegwart & Nourbakhsh (2011), Chapter 7: Dynamics:** While this chapter might not explicitly detail the LE method, it lays the groundwork for understanding the dynamic behavior of mobile robots, which the LE method helps to formalize.
*   **Corke (2011), Chapter 6: Dynamics:** Corke's book likely provides a more in-depth treatment of dynamic modeling, and the LE method is a standard approach for deriving these models.

---

### 2. Steps for Applying the Lagrange-Euler Method

To derive the dynamic model of a mobile robot using the LE method, follow these steps:

#### 2.1. Define the Generalized Coordinates

Identify the minimum set of independent variables that completely describe the configuration of the robot.

*   **For a fixed-base manipulator:** These are typically the joint angles ($\theta_1, \theta_2, \dots, \theta_n$).
*   **For a mobile robot:** These will include the position and orientation of the base (e.g., $x, y, \phi$ for a differential drive robot in a 2D plane) and any actuated joints.

**Example (Differential Drive Robot):**
*   Generalized coordinates: $(x, y, \phi)$, where $(x, y)$ is the position of the robot's center point in the world frame, and $\phi$ is its orientation.

#### 2.2. Determine the Kinematics of Each Link/Body

For each rigid body in the robot, express its position, orientation, velocity, and angular velocity in terms of the generalized coordinates and their time derivatives. This often involves using transformation matrices.

*   **Position and Orientation:** Use homogeneous transformation matrices to represent the pose of each link in the world frame.
*   **Velocity:** Differentiate the position and orientation representations with respect to time to obtain linear and angular velocities.

**Example (Differential Drive Robot):**
*   Let the generalized coordinates be $q = [x, y, \phi]^T$.
*   The velocities are $\dot{q} = [\dot{x}, \dot{y}, \dot{\phi}]^T$.
*   The forward kinematics relate the wheel velocities ($\dot{l}, \dot{r}$) to the robot's linear and angular velocities:
    $\dot{x} = v \cos \phi$
    $\dot{y} = v \sin \phi$
    $\dot{\phi} = \omega$
    where $v$ is the linear velocity and $\omega$ is the angular velocity.

#### 2.3. Calculate the Kinetic Energy (T)

The kinetic energy of the system is the sum of the kinetic energies of all its rigid bodies. For a rigid body with mass $m$, center of mass velocity $\vec{v}_{cm}$, inertia tensor $I$, and angular velocity $\vec{\omega}$:

$T = \sum_{i} \frac{1}{2} m_i \vec{v}_{ci}^T \vec{v}_{ci} + \frac{1}{2} \vec{\omega}_i^T I_i \vec{\omega}_i$

*   Ensure all velocities are expressed in terms of the generalized coordinates and their derivatives.

**Example (Differential Drive Robot - simplified to a single point mass for simplicity):**
*   If we treat the robot as a point mass at $(x, y)$ with mass $m$, and ignore rotational dynamics for a moment:
    $T = \frac{1}{2} m (\dot{x}^2 + \dot{y}^2)$
*   In terms of generalized coordinates:
    $T = \frac{1}{2} m ((v \cos \phi)^2 + (v \sin \phi)^2) = \frac{1}{2} m v^2$

#### 2.4. Calculate the Potential Energy (V)

The potential energy is typically due to gravity. For a robot operating on a horizontal plane, gravitational potential energy might be constant and can be neglected for deriving equations of motion. However, if the robot has varying height or is on an inclined surface, it needs to be considered.

$V = \sum_{i} m_i g h_i$
where $g$ is the acceleration due to gravity and $h_i$ is the height of the center of mass of body $i$.

**Example (Differential Drive Robot):**
*   If the robot is on a flat horizontal surface, $V$ is constant, and $\frac{\partial V}{\partial q_i} = 0$.

#### 2.5. Formulate the Lagrangian (L)

Calculate the Lagrangian: $L = T - V$.

#### 2.6. Compute Partial Derivatives of the Lagrangian

For each generalized coordinate $q_i$:

*   $\frac{\partial L}{\partial \dot{q}_i}$: Partial derivative of $L$ with respect to the generalized velocity $\dot{q}_i$.
*   $\frac{d}{dt}\left(\frac{\partial L}{\partial \dot{q}_i}\right)$: Time derivative of the previous result.
*   $\frac{\partial L}{\partial q_i}$: Partial derivative of $L$ with respect to the generalized coordinate $q_i$.

#### 2.7. Identify Generalized Forces/Torques (Q_i)

Determine the non-conservative forces and torques acting on the system that are associated with each generalized coordinate. These are often the control inputs to the actuators.

*   For a mobile robot, these are usually the forces/torques applied by the wheels or other propulsion systems.

**Example (Differential Drive Robot):**
*   The generalized coordinates are $q = [x, y, \phi]^T$.
*   The inputs are the forces applied by the left ($F_l$) and right ($F_r$) wheels. However, the LE equations are typically derived in terms of the robot's velocities ($v, \omega$). We need to relate these to wheel forces.
*   The relationship between wheel forces and robot velocities is often derived from the robot's Jacobian:
    $\begin{bmatrix} \dot{x} \\ \dot{y} \\ \dot{\phi} \end{bmatrix} = \begin{bmatrix} \cos \phi & \cos \phi \\ \sin \phi & \sin \phi \\ 0 & \frac{1}{B} \end{bmatrix} \begin{bmatrix} v_l \\ v_r \end{bmatrix}$ (where $v_l, v_r$ are linear velocities of wheels)
    For differential drive robots, we often use velocities $v$ and $\omega$:
    $\begin{bmatrix} v \\ \omega \end{bmatrix} = \begin{bmatrix} \frac{1}{2} & \frac{1}{2} \\ -\frac{1}{2B} & \frac{1}{2B} \end{bmatrix} \begin{bmatrix} v_l \\ v_r \end{bmatrix}$ (where $B$ is wheel base)
*   The generalized forces for $(x, y, \phi)$ are related to the forces and torques. For instance, the force along the robot's heading is $F = F_l + F_r$, and the torque about the center is $\tau = \frac{B}{2}(F_r - F_l)$.
*   If our generalized forces are directly $\dot{v}$ and $\dot{\omega}$ (from actuated joint velocities), then $Q_v = F$ and $Q_\omega = \tau$.

#### 2.8. Assemble the Equations of Motion

Substitute the computed terms into the Euler-Lagrange equations:

$\frac{d}{dt}\left(\frac{\partial L}{\partial \dot{q}_i}\right) - \frac{\partial L}{\partial q_i} = Q_i$

This will result in a set of second-order differential equations that describe the robot's dynamic behavior. These equations are typically in the form:

$M(q) \ddot{q} + C(q, \dot{q}) \dot{q} + G(q) = \tau$

where:
*   $M(q)$ is the inertia matrix (symmetric and positive definite).
*   $C(q, \dot{q})$ represents Coriolis and centrifugal forces.
*   $G(q)$ represents gravitational forces.
*   $\tau$ is the vector of generalized forces/torques.

**Example (Differential Drive Robot - simplified, considering inertia of the base as a point mass):**
Let's try a simplified example with a single mass $m$ and a control input $u$ (total force) and $\tau$ (torque).
Assume we want to derive equations for $x, y$ (ignoring orientation $\phi$ for a moment, so $q = [x, y]^T$).
$T = \frac{1}{2} m (\dot{x}^2 + \dot{y}^2)$
$V = 0$ (flat plane)
$L = T - V = \frac{1}{2} m (\dot{x}^2 + \dot{y}^2)$

For $q_1 = x$:
$\frac{\partial L}{\partial \dot{x}} = m \dot{x}$
$\frac{d}{dt}\left(\frac{\partial L}{\partial \dot{x}}\right) = m \ddot{x}$
$\frac{\partial L}{\partial x} = 0$
$Q_x$ = Force applied in the x-direction. Let's say this force is generated by the wheels projected onto the x-axis. If the robot is aligned with the x-axis ($\phi=0$), and total wheel force is $F$, then $Q_x = F$.

So, for the x-direction: $m \ddot{x} = F_x$.

For $q_2 = y$:
$\frac{\partial L}{\partial \dot{y}} = m \dot{y}$
$\frac{d}{dt}\left(\frac{\partial L}{\partial \dot{y}}\right) = m \ddot{y}$
$\frac{\partial L}{\partial y} = 0$
$Q_y$ = Force applied in the y-direction. If $\phi=0$, $Q_y = 0$.

So, for the y-direction: $m \ddot{y} = 0$.

This is too simplistic. A proper derivation for a differential drive robot requires including the orientation and the relationship between wheel forces and robot motion.

**A More Realistic Example (Differential Drive Robot - using velocities $v, \omega$ as generalized speeds):**

Let the robot's state be described by its position $(x, y)$ and orientation $\phi$. The system's velocity can be represented by $[\dot{x}, \dot{y}, \dot{\phi}]^T$.
For a differential drive robot, the relationship between wheel velocities $\dot{l}$ and $\dot{r}$ and the robot's velocities is:
$\dot{x} = \frac{R}{2} (\dot{l} + \dot{r}) \cos \phi$
$\dot{y} = \frac{R}{2} (\dot{l} + \dot{r}) \sin \phi$
$\dot{\phi} = \frac{R}{2B} (\dot{r} - \dot{l})$
where $R$ is wheel radius and $B$ is wheel base.

Let's consider the robot's base as a point mass $m$ and ignore rotational inertia for simplicity in this example.
$T = \frac{1}{2} m (\dot{x}^2 + \dot{y}^2)$
$T = \frac{1}{2} m \left[ \left(\frac{R}{2}(\dot{l}+\dot{r})\cos\phi\right)^2 + \left(\frac{R}{2}(\dot{l}+\dot{r})\sin\phi\right)^2 \right]$
$T = \frac{1}{2} m \left(\frac{R}{2}(\dot{l}+\dot{r})\right)^2 (\cos^2\phi + \sin^2\phi)$
$T = \frac{1}{2} m \frac{R^2}{4} (\dot{l}+\dot{r})^2 = \frac{1}{8} m R^2 (\dot{l}+\dot{r})^2$

Now, let's choose generalized coordinates $q = [\dot{l}, \dot{r}]^T$ as the generalized velocities that are directly controlled.
$L = T - V = \frac{1}{8} m R^2 (\dot{l}+\dot{r})^2$

**For $q_1 = \dot{l}$ (Left wheel velocity input):**
$\frac{\partial L}{\partial \dot{l}} = \frac{1}{8} m R^2 \cdot 2(\dot{l}+\dot{r}) \cdot 1 = \frac{1}{4} m R^2 (\dot{l}+\dot{r})$
$\frac{d}{dt}\left(\frac{\partial L}{\partial \dot{l}}\right) = \frac{1}{4} m R^2 (\ddot{l}+\ddot{r})$
$\frac{\partial L}{\partial l} = 0$

What is the generalized force $Q_l$? This is the torque $\tau_l$ applied to the left wheel to change its velocity $\dot{l}$.
$Q_l = \tau_l$

So, the Euler-Lagrange equation for $\dot{l}$ is:
$\frac{1}{4} m R^2 (\ddot{l}+\ddot{r}) = \tau_l$

**For $q_2 = \dot{r}$ (Right wheel velocity input):**
$\frac{\partial L}{\partial \dot{r}} = \frac{1}{8} m R^2 \cdot 2(\dot{l}+\dot{r}) \cdot 1 = \frac{1}{4} m R^2 (\dot{l}+\dot{r})$
$\frac{d}{dt}\left(\frac{\partial L}{\partial \dot{r}}\right) = \frac{1}{4} m R^2 (\ddot{l}+\ddot{r})$
$\frac{\partial L}{\partial r} = 0$

What is the generalized force $Q_r$? This is the torque $\tau_r$ applied to the right wheel.
$Q_r = \tau_r$

So, the Euler-Lagrange equation for $\dot{r}$ is:
$\frac{1}{4} m R^2 (\ddot{l}+\ddot{r}) = \tau_r$

These two equations are identical, which is expected because we simplified the kinetic energy such that it only depends on the sum $\dot{l} + \dot{r}$. This indicates that the derived kinetic energy might be too simplified or that we need to choose generalized coordinates differently to fully capture the dynamics of both wheels.

**A Better Choice of Generalized Velocities:**
Let's consider $v = \frac{R}{2}(\dot{l}+\dot{r})$ and $\omega = \frac{R}{2B}(\dot{r}-\dot{l})$.
The kinetic energy can be written as:
$T = \frac{1}{2} m v^2 + \frac{1}{2} I \omega^2$ (adding rotational inertia $I$ for the base)
$L = T - V = \frac{1}{2} m v^2 + \frac{1}{2} I \omega^2$

Now, let the generalized coordinates be the robot's pose $(x, y, \phi)$, and the controlled variables are the velocities $(v, \omega)$ (which are related to torques $\tau_l, \tau_r$).

This formulation is closer to deriving the dynamic model in terms of $v$ and $\omega$. The generalized forces will be related to the forces/torques applied by the wheels.

*   If we choose $(v, \omega)$ as generalized velocities, we need to find the generalized forces $Q_v$ and $Q_\omega$.
    $Q_v = \tau_l + \tau_r$ (sum of wheel torques contributes to linear motion)
    $Q_\omega = \frac{B}{2}(\tau_r - \tau_l)$ (difference of wheel torques contributes to angular motion)

Let's use the standard form for generalized coordinates $q = [x, y, \phi]^T$ and consider the robot as a rigid body.
$T = \frac{1}{2} m (\dot{x}^2 + \dot{y}^2) + \frac{1}{2} I \dot{\phi}^2$
$V = 0$
$L = \frac{1}{2} m (\dot{x}^2 + \dot{y}^2) + \frac{1}{2} I \dot{\phi}^2$

Substitute $\dot{x} = v \cos \phi$, $\dot{y} = v \sin \phi$, $\dot{\phi} = \omega$.
$T = \frac{1}{2} m (v^2 \cos^2\phi + v^2 \sin^2\phi) + \frac{1}{2} I \omega^2 = \frac{1}{2} m v^2 + \frac{1}{2} I \omega^2$
$L = \frac{1}{2} m v^2 + \frac{1}{2} I \omega^2$

Now, we need to apply Euler-Lagrange equations with respect to generalized coordinates that generate $v$ and $\omega$. A direct application to $x, y, \phi$ can be complicated due to the $\cos \phi$ and $\sin \phi$ terms.

**Alternative: Virtual Work Principle / D'Alembert's Principle:**
Many textbooks (like Corke and Siegwart/Nourbakhsh) might introduce the dynamic model derivation through principles that are equivalent to LE or closely related, focusing on forces and torques directly rather than energy for simpler systems.

**Corke (2011) and Siegwart/Nourbakhsh (2011) often present the dynamic model in the form:**

$M(q) \ddot{q} + C(q, \dot{q}) \dot{q} + G(q) = \tau$

For a differential drive robot with state $q = [x, y, \phi]^T$:
$\begin{bmatrix} m & 0 & 0 \\ 0 & m & 0 \\ 0 & 0 & I \end{bmatrix} \begin{bmatrix} \ddot{x} \\ \ddot{y} \\ \ddot{\phi} \end{bmatrix} + \begin{bmatrix} 0 & 0 & -m v \sin\phi \\ 0 & 0 & m v \cos\phi \\ m v \sin\phi & -m v \cos\phi & 0 \end{bmatrix} \begin{bmatrix} \dot{x} \\ \dot{y} \\ \dot{\phi} \end{bmatrix} + \begin{bmatrix} 0 \\ 0 \\ 0 \end{bmatrix} = \begin{bmatrix} F \cos\phi \\ F \sin\phi \\ \tau \end{bmatrix}$

where $F$ is the forward force and $\tau$ is the torque. The generalized forces are here expressed in the world frame. If we express them in the robot's frame:
$\begin{bmatrix} m & 0 & 0 \\ 0 & m & 0 \\ 0 & 0 & I \end{bmatrix} \begin{bmatrix} \ddot{x} \\ \ddot{y} \\ \ddot{\phi} \end{bmatrix} + \begin{bmatrix} 0 & 0 & -m v \sin\phi \\ 0 & 0 & m v \cos\phi \\ m v \sin\phi & -m v \cos\phi & 0 \end{bmatrix} \begin{bmatrix} \dot{x} \\ \dot{y} \\ \dot{\phi} \end{bmatrix} = \begin{bmatrix} F \cos\phi \\ F \sin\phi \\ \tau \end{bmatrix}$
Using the kinematic relations $\dot{x} = v \cos\phi, \dot{y} = v \sin\phi, \dot{\phi} = \omega$.
$m\ddot{x} = F \cos\phi$
$m\ddot{y} = F \sin\phi$
$I\ddot{\phi} = \tau$

And the Coriolis terms:
$m\ddot{x} - (m v \sin\phi) \omega = F \cos\phi$ (This is incorrect. The Coriolis term acts on the acceleration.)

The correct Coriolis term for a planar body with velocity $[v_x, v_y, \omega]^T$ is usually written in terms of velocity components in the body frame.
A common form derived from LE or other methods for a differential drive robot is:
$m \dot{v} - m v \omega = F$ (Force along the robot's heading)
$I \dot{\omega} = \tau$ (Torque about the robot's center)

Where $F = \tau_l/R + \tau_r/R$ and $\tau = B/2 (\tau_r/R - \tau_l/R)$.
These are the dynamic equations in the robot's own frame. To get the equations in the world frame $(x, y, \phi)$, we need to transform these.

**Using LE for Generalized Velocities $v$ and $\omega$:**
If we define $q = [x, y, \phi]^T$ and the control inputs are $\tau_l, \tau_r$.
It's often easier to derive the dynamics in terms of $v$ and $\omega$.

Let's try to derive the $m\dot{v} = F$ equation using LE:
$T = \frac{1}{2} m v^2 + \frac{1}{2} I \omega^2$
$L = \frac{1}{2} m v^2 + \frac{1}{2} I \omega^2$

To use LE, we need generalized coordinates for $v$ and $\omega$. These are not position coordinates.
However, if we consider $v$ and $\omega$ as the primary states and $F$ and $\tau$ as generalized forces:

We can think of the system's kinetic energy in terms of $v$ and $\omega$.
If we consider $q_1 = v$ and $q_2 = \omega$ as generalized velocities:
$\frac{\partial L}{\partial \dot{v}} = m v$
$\frac{d}{dt}\left(\frac{\partial L}{\partial \dot{v}}\right) = m \dot{v}$
$\frac{\partial L}{\partial v} = 0$
Generalized force $Q_v = F$.
$m \dot{v} = F$.

$\frac{\partial L}{\partial \dot{\omega}} = I \omega$
$\frac{d}{dt}\left(\frac{\partial L}{\partial \dot{\omega}}\right) = I \dot{\omega}$
$\frac{\partial L}{\partial \omega} = 0$
Generalized force $Q_\omega = \tau$.
$I \dot{\omega} = \tau$.

This derivation gives the simplified dynamics in the robot's frame. To get the world-frame $(x, y, \phi)$ dynamics, we need to link $v, \omega$ to $\dot{x}, \dot{y}, \dot{\phi}$ and then apply the LE to $(x, y, \phi)$.

**To truly use LE for $(x, y, \phi)$ with inputs $\tau_l, \tau_r$:**
This is more involved and requires careful handling of the kinematic constraints and the definition of generalized forces. The generalized forces $Q_i$ corresponding to $x, y, \phi$ would be related to the forces and torques applied at the wheels, projected onto the world-frame directions.

---

### 3. Handling Constraints with Lagrange-Multiplier Method

Mobile robots often have non-holonomic constraints, meaning the velocity of the robot is constrained in a way that cannot be integrated into a constraint on the configuration. For example, wheels of a differential drive robot typically do not slip sideways.

*   **Non-holonomic Constraint:** A constraint that involves velocities but not positions (or cannot be integrated into a form only involving positions).
    Example: For a differential drive robot, the lateral velocity is zero: $-\dot{x} \sin \phi + \dot{y} \cos \phi = 0$.

The Lagrange-Multiplier method can be used to incorporate these constraints into the Euler-Lagrange equations.

**Extended Euler-Lagrange Equations:**
$\frac{d}{dt}\left(\frac{\partial L}{\partial \dot{q}_i}\right) - \frac{\partial L}{\partial q_i} = \sum_{j=1}^{k} \lambda_j \frac{\partial C_j}{\partial q_i} + Q_i$

where:
*   $C_j(q, \dot{q}, t) = 0$ are the $k$ non-holonomic constraints.
*   $\lambda_j$ are the Lagrange multipliers, which represent the forces/torques needed to enforce the constraints.

**Example (Differential Drive Robot - Sideways Constraint):**
The non-holonomic constraint is $C_1(x, y, \phi, \dot{x}, \dot{y}, \dot{\phi}) = -\dot{x} \sin \phi + \dot{y} \cos \phi = 0$.

We would need to find $\frac{\partial C_1}{\partial x}$, $\frac{\partial C_1}{\partial y}$, $\frac{\partial C_1}{\partial \phi}$, $\frac{\partial C_1}{\partial \dot{x}}$, $\frac{\partial C_1}{\partial \dot{y}}$, $\frac{\partial C_1}{\partial \dot{\phi}}$.
This approach leads to a larger set of differential-algebraic equations (DAEs).

**Reference:**

*   **Tzafestas (2007), Chapter 7: Lagrange's Equations and Newton-Euler Formulation:** This textbook is likely to provide detailed explanations of applying LE to robotic systems, including handling constraints.

---

### 4. Key Concepts and Definitions

*   **Lagrangian (L):** $L = T - V$ (Kinetic Energy - Potential Energy).
*   **Generalized Coordinates ($q_i$):** Minimum set of independent variables to describe the system's configuration.
*   **Generalized Velocities ($\dot{q}_i$):** Time derivatives of generalized coordinates.
*   **Generalized Forces ($Q_i$):** Non-conservative forces or torques acting on the system along the generalized coordinates.
*   **Kinetic Energy (T):** Energy of motion.
*   **Potential Energy (V):** Stored energy due to position or configuration.
*   **Non-holonomic Constraint:** A velocity constraint that cannot be integrated into a position-only constraint.
*   **Lagrange Multipliers ($\lambda_j$):** Variables used to enforce constraints in the LE formulation.

---

### 5. Important Points to Remember

*   **Systematic Approach:** The LE method provides a structured way to derive robot dynamics.
*   **Energy Focus:** It's based on the system's energy, not forces directly.
*   **Careful Definition:** Correctly defining generalized coordinates, energies, and generalized forces is crucial.
*   **Constraints:** Non-holonomic constraints are common in mobile robots and require special handling (e.g., Lagrange multipliers).
*   **Output Form:** The LE method typically yields second-order differential equations in the form $M\ddot{q} + C\dot{q} + G = Q$.
*   **Alternative Formulations:** While LE is powerful, for simpler systems or specific derivations, other methods (like Newtonian or virtual work) might be more direct. Textbooks like Corke and Siegwart/Nourbakhsh might use these for clarity in introductory sections.

---

### 6. Practice Questions

**Question 1:**
Consider a simple 1D translational robot with mass $m$ moving along the x-axis. It is actuated by a force $F$.
a) Define the generalized coordinate for this system.
b) Calculate the kinetic energy ($T$) and potential energy ($V$) (assume $V=0$).
c) Formulate the Lagrangian ($L$).
d) Apply the Euler-Lagrange equations to derive the equation of motion. What is the generalized force $Q_x$?

**Answer 1:**
a) The generalized coordinate is $x$.
b) $T = \frac{1}{2} m \dot{x}^2$, $V = 0$.
c) $L = T - V = \frac{1}{2} m \dot{x}^2$.
d)
*   $\frac{\partial L}{\partial \dot{x}} = m \dot{x}$
*   $\frac{d}{dt}\left(\frac{\partial L}{\partial \dot{x}}\right) = m \ddot{x}$
*   $\frac{\partial L}{\partial x} = 0$
*   The generalized force $Q_x$ is the applied force $F$.
*   Euler-Lagrange equation: $m \ddot{x} - 0 = F \implies m \ddot{x} = F$.
    This is Newton's second law for this system.

**Question 2:**
A unicycle robot has a single wheel of radius $R$. Its state can be described by its position $(x, y)$ and orientation $\phi$. The robot's motion is constrained such that the wheel does not slip sideways.
a) State the non-holonomic constraint for this robot in terms of its velocities $\dot{x}, \dot{y}, \dot{\phi}$.
b) If we were to use the Lagrange-Multiplier method to derive the dynamics, what would be the form of the Euler-Lagrange equations for the coordinate $x$? (You don't need to calculate all partial derivatives, just show the structure).

**Answer 2:**
a) The non-holonomic constraint is that the velocity perpendicular to the wheel's direction of motion is zero:
   $-\dot{x} \sin \phi + \dot{y} \cos \phi = 0$.

b) Let $q_1 = x$, $q_2 = y$, $q_3 = \phi$. Let $L$ be the Lagrangian of the robot. The constraint is $C_1(x, y, \phi, \dot{x}, \dot{y}, \dot{\phi}) = -\dot{x} \sin \phi + \dot{y} \cos \phi = 0$. The generalized force associated with $x$ is $Q_x$.
   The Euler-Lagrange equation for $x$ using the Lagrange-Multiplier method would be:
   $\frac{d}{dt}\left(\frac{\partial L}{\partial \dot{x}}\right) - \frac{\partial L}{\partial x} = \lambda_1 \frac{\partial C_1}{\partial x} + Q_x$

   We know $\frac{\partial C_1}{\partial x} = -\sin \phi$. So the equation becomes:
   $\frac{d}{dt}\left(\frac{\partial L}{\partial \dot{x}}\right) - \frac{\partial L}{\partial x} = \lambda_1 (-\sin \phi) + Q_x$

   The terms $\frac{d}{dt}\left(\frac{\partial L}{\partial \dot{x}}\right)$ and $\frac{\partial L}{\partial x}$ would depend on the kinetic and potential energies of the robot, which would involve its mass, rotational inertia, and the kinematic relations. The $\lambda_1$ term accounts for the constraint force.

---

### 7. Connection to Course Outcomes

*   **CO2: Derive the kinematic model of mobile robots (Knowledge Level: K4)**
    The LE method is a foundational technique for deriving the dynamic equations of motion, which are directly built upon the kinematic relationships between generalized coordinates and velocities. Understanding the steps in LE (defining coordinates, calculating energies based on kinematics) is crucial for deriving the full dynamic model, which implicitly contains kinematic information. For example, the $M(q)\ddot{q}$ term in the dynamic model is derived using kinematic relations for velocity and acceleration.

*   **CO3: Derive dynamic model of mobile robots (Knowledge Level: K4)**
    This is the primary application of the Lagrange-Euler method. The entire process is dedicated to systematically deriving the equations of motion that describe how forces and torques affect the robot's acceleration, forming the dynamic model. The outcome is typically the equation $M(q) \ddot{q} + C(q, \dot{q}) \dot{q} + G(q) = \tau$.

---

This concludes the study notes for the Lagrange-Euler method within Module 2: Kinematic Model of Mobile Robotics. Remember that practical application often involves complex derivations, and understanding the underlying energy principles is key.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
