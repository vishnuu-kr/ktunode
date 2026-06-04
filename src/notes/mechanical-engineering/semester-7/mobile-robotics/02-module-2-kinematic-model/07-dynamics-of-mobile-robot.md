---
title: "Dynamics of mobile robot"
subject: "MOBILE ROBOTICS"
module: "Module 2: Kinematic model"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf48044640ab"
status: "completed"
scrapedAt: "2026-05-20T18:15:09.714Z"
---
# Mobile Robotics: Module 2 - Kinematic Model

## Topic: Dynamics of Mobile Robot

### **Course Outcomes Addressed:**
*   **CO3: Derive dynamic model of mobile robots (Knowledge Level: K4)**

### **Learning Outcomes Covered in this Topic:**
*   Understanding the relationship between forces/torques and motion of a mobile robot.
*   Deriving the dynamic model using Newtonian or Lagrangian mechanics.
*   Incorporating the effects of friction and other external forces.
*   Understanding the role of inertia and mass distribution.
*   Relating the dynamic model to control design and trajectory tracking.

---

### **1. Introduction to Mobile Robot Dynamics**

**Definition:** The dynamics of a mobile robot describes the relationship between the forces and torques applied to the robot and its resulting linear and angular accelerations. While kinematics focuses on the *geometry* of motion (how position and orientation change over time), dynamics deals with the *causes* of motion – forces and torques.

**Importance:**
*   **Control Design:** Understanding dynamics is crucial for designing effective controllers that can accurately track desired trajectories. Without a dynamic model, controlling a robot's motion would be like trying to steer a car without knowing how much you need to turn the wheel to achieve a certain turn.
*   **Performance Prediction:** Dynamics allows us to predict how a robot will respond to control inputs and external disturbances (e.g., bumps, uneven surfaces).
*   **Trajectory Generation:** While kinematics defines the path, dynamics influences the feasibility and smoothness of generating a trajectory that the robot can actually follow.
*   **Energy Efficiency:** Dynamic models can help in optimizing trajectories for energy consumption.

**Reference:** *Introduction to Autonomous Mobile Robots* by Siegwart and Nourbakhsh often dedicates sections to the relationship between kinematics and dynamics, emphasizing how kinematic constraints translate into dynamic considerations.

---

### **2. Key Concepts and Definitions**

*   **Inertia:** The resistance of an object to changes in its state of motion. For a rigid body, inertia is characterized by its mass, mass distribution (moment of inertia), and its shape.
    *   **Mass ($m$)**: Scalar quantity representing the amount of matter.
    *   **Inertia Tensor ($\mathbf{I}$)**: A 3x3 symmetric, positive-definite matrix that describes how mass is distributed within a rigid body relative to a chosen coordinate frame. It relates angular velocity to angular momentum and torque.
*   **Forces ($\mathbf{F}$)**: Vector quantities that can cause a change in an object's linear motion (Newton's Second Law: $\mathbf{F} = m\mathbf{a}$).
*   **Torques ($\boldsymbol{\tau}$)**: Vector quantities that can cause a change in an object's rotational motion (Newton-Euler Equations: $\boldsymbol{\tau} = \mathbf{I}\dot{\boldsymbol{\omega}} + \boldsymbol{\omega} \times (\mathbf{I}\boldsymbol{\omega})$).
*   **Velocity:**
    *   **Linear Velocity ($\mathbf{v}$)**: The rate of change of linear position.
    *   **Angular Velocity ($\boldsymbol{\omega}$)**: The rate of change of angular orientation.
*   **Acceleration:**
    *   **Linear Acceleration ($\mathbf{a}$)**: The rate of change of linear velocity.
    *   **Angular Acceleration ($\dot{\boldsymbol{\omega}}$)**: The rate of change of angular velocity.
*   **Friction:** Forces that oppose relative motion between surfaces. In mobile robotics, this is crucial for understanding how wheels interact with the ground.
    *   **Static Friction:** Opposes the initiation of motion.
    *   **Kinetic Friction:** Opposes ongoing motion.
    *   **Coulomb Friction:** A simplified model that assumes friction force is proportional to the normal force and independent of the contact area.
    *   **Viscous Friction:** Opposes motion proportional to velocity.
*   **Generalized Coordinates:** A set of independent variables that completely describe the configuration of a robot system. For a mobile robot, these are typically its position $(x, y)$ and orientation ($\theta$) in the plane, plus any joint variables if it has manipulators.
*   **Generalized Velocities:** The time derivatives of the generalized coordinates.
*   **Generalized Forces/Torques:** The forces and torques acting on the robot that correspond to the generalized coordinates.

---

### **3. Deriving the Dynamic Model**

The dynamic model of a mobile robot can be derived using two primary approaches:

#### **3.1. Newtonian Mechanics (Newton-Euler Equations)**

This approach directly applies Newton's laws of motion to the rigid body. For a robot with $n$ degrees of freedom, represented by generalized coordinates $\mathbf{q} = [q_1, q_2, ..., q_n]^T$, the general form of the dynamic equation is:

$\mathbf{M}(\mathbf{q})\ddot{\mathbf{q}} + \mathbf{C}(\mathbf{q}, \dot{\mathbf{q}})\dot{\mathbf{q}} + \mathbf{g}(\mathbf{q}) + \mathbf{f}(\dot{\mathbf{q}}) = \boldsymbol{\tau}_{ext}$

Where:
*   $\mathbf{M}(\mathbf{q})$: The **mass matrix** (or inertia matrix). It is a symmetric, positive-definite matrix that depends on the robot's configuration $\mathbf{q}$. It relates generalized velocities to generalized momentum.
*   $\mathbf{C}(\mathbf{q}, \dot{\mathbf{q}})\dot{\mathbf{q}}$: The **Coriolis and centrifugal forces** term. This accounts for forces that arise due to the interaction of velocities in a non-inertial frame (e.g., the robot's moving frame).
*   $\mathbf{g}(\mathbf{q})$: The **gravitational forces** term. This is relevant for robots operating in a gravity field, but for planar mobile robots on a horizontal surface, it can often be neglected or absorbed into other terms.
*   $\mathbf{f}(\dot{\mathbf{q}})$: The **friction forces** term. This represents various forms of friction (Coulomb, viscous, etc.) that oppose motion.
*   $\boldsymbol{\tau}_{ext}$: The **external forces and torques** applied to the robot (e.g., control inputs, disturbance forces).

**For a 2D Mobile Robot (e.g., differential drive):**

Let the generalized coordinates be $\mathbf{q} = [x, y, \theta]^T$, where $(x, y)$ is the robot's position and $\theta$ is its orientation.

The generalized velocities are $\dot{\mathbf{q}} = [\dot{x}, \dot{y}, \dot{\theta}]^T$.

The dynamic equation can be written in terms of the robot's center of mass and its angular motion.

**Example: Differential Drive Robot**
Consider a simple differential drive robot with two independently driven wheels. The motion of the robot can be related to the velocities of its wheels.

*   Let $r$ be the wheel radius and $l$ be the half-distance between the wheels (wheelbase).
*   Let $v_L$ and $v_R$ be the linear velocities of the left and right wheels, respectively.
*   The linear velocity of the robot's center is $v_x = \frac{v_L + v_R}{2}$.
*   The angular velocity of the robot is $\dot{\theta} = \frac{v_R - v_L}{2l}$.

The forces and torques applied to the robot are often derived from the torques applied to the wheels. The relationship between wheel torques and robot linear/angular acceleration is complex and depends on factors like friction, wheel slippage, and robot inertia.

A simplified Newtonian model might look at the forces acting on the robot's body:

*   **Linear Motion:** $m \ddot{x} = F_{drive\_x} - F_{friction\_x}$ and $m \ddot{y} = F_{drive\_y} - F_{friction\_y}$ (where $F_{drive}$ are components of driving forces, often related to wheel forces).
*   **Angular Motion:** $I_z \ddot{\theta} = \tau_{drive} - \tau_{friction}$ (where $I_z$ is the moment of inertia about the z-axis, and $\tau_{drive}$ is the net driving torque).

**Challenge with Newtonian Approach:** Directly calculating $\mathbf{M}$, $\mathbf{C}$, $\mathbf{g}$, and $\mathbf{f}$ in terms of $x, y, \theta$ and their derivatives can be cumbersome, especially for complex robot configurations or when dealing with non-linear friction.

**Reference:**
*   *Robotics, Vision and Control: Fundamental Algorithms in MATLAB* by Peter Corke provides detailed examples of deriving dynamic models for wheeled robots using Newtonian mechanics, often focusing on the relationship between joint torques and robot motion.

#### **3.2. Lagrangian Mechanics**

Lagrangian mechanics offers a more systematic way to derive the dynamic equations, especially for systems with complex constraints. It is based on the concept of the Lagrangian ($L$), which is the difference between the kinetic energy ($K$) and the potential energy ($V$) of the system:

$L = K - V$

The equations of motion are then derived using the Euler-Lagrange equations:

$\frac{d}{dt}\left(\frac{\partial L}{\partial \dot{q}_i}\right) - \frac{\partial L}{\partial q_i} = Q_i$

Where:
*   $q_i$ are the generalized coordinates.
*   $\dot{q}_i$ are the generalized velocities.
*   $Q_i$ are the generalized non-conservative forces and torques (e.g., friction, control inputs).

The general form derived from Lagrangian mechanics is the same as the Newtonian form:

$\mathbf{M}(\mathbf{q})\ddot{\mathbf{q}} + \mathbf{C}(\mathbf{q}, \dot{\mathbf{q}})\dot{\mathbf{q}} + \mathbf{g}(\mathbf{q}) + \mathbf{f}(\dot{\mathbf{q}}) = \boldsymbol{\tau}_{ext}$

**Steps for Derivation using Lagrangian Mechanics:**
1.  **Choose Generalized Coordinates:** Select a minimal set of independent variables to describe the robot's configuration (e.g., $x, y, \theta$ for a 2D mobile robot).
2.  **Calculate Kinetic Energy ($K$):**
    *   Consider the kinetic energy of each link/component of the robot.
    *   For a mobile robot, this includes the translational kinetic energy of the body and the rotational kinetic energy of the body and its wheels.
    *   The kinetic energy of the wheels is particularly important and depends on their rotation and the robot's overall motion.
3.  **Calculate Potential Energy ($V$):**
    *   For a mobile robot on a horizontal plane, the gravitational potential energy is often constant and can be ignored, or $V = mgh$.
4.  **Form the Lagrangian ($L = K - V$)**.
5.  **Apply Euler-Lagrange Equations:** Compute the partial derivatives and time derivatives required by the Euler-Lagrange equations for each generalized coordinate.
6.  **Add Non-Conservative Forces ($Q_i$):** Incorporate friction and control inputs.

**Example: Kinetic Energy of a Differential Drive Robot's Wheels**
For each wheel, the kinetic energy ($K_{wheel}$) has two components:
*   **Translational Kinetic Energy:** $\frac{1}{2} m_{wheel} v_{wheel}^2$
*   **Rotational Kinetic Energy:** $\frac{1}{2} I_{wheel} \dot{\phi}_{wheel}^2$, where $\dot{\phi}_{wheel}$ is the angular velocity of the wheel.

The challenge lies in relating the wheel angular velocities ($\dot{\phi}_L, \dot{\phi}_R$) and torques ($\tau_L, \tau_R$) to the robot's generalized coordinates ($x, y, \theta$) and generalized forces/torques. This is where **Jacobian matrices** come into play to map velocities and forces between the wheel frame and the robot's base frame.

**Reference:**
*   *Introduction to Autonomous Mobile Robots* by Siegwart and Nourbakhsh and *Robotics, Vision and Control* by Peter Corke often provide simplified dynamic models that highlight the essential terms without delving into the full complexity of Lagrangian derivations for advanced manipulators, but the principles are the same.

---

### **4. Incorporating Friction and Other External Forces**

Friction is a dominant force affecting mobile robot motion, especially at low speeds.

*   **Coulomb Friction:** Often modeled as $F_{friction} = \mu N \cdot \text{sign}(\dot{q})$, where $\mu$ is the coefficient of friction, $N$ is the normal force, and $\dot{q}$ is the velocity. This term is discontinuous at zero velocity, posing challenges for control.
*   **Viscous Friction:** Modeled as $F_{friction} = b \dot{q}$, where $b$ is the viscous damping coefficient. This is more continuous and easier to handle.
*   **Stiction:** Static friction that needs to be overcome to initiate motion.
*   **Rolling Resistance:** Friction associated with the deformation of wheels and the surface.

**Modeling Friction in the Dynamic Equation:**
The friction forces $\mathbf{f}(\dot{\mathbf{q}})$ are typically non-linear and are added to the dynamic equations. For example, a simplified model for a differential drive robot might include friction proportional to the wheel velocities.

**External Forces ($\boldsymbol{\tau}_{ext}$):**
These are the forces and torques generated by the robot's actuators (motors). For a differential drive robot, these are the torques applied to the left ($\tau_L$) and right ($\tau_R$) wheels. These are the control inputs that we use to steer the robot.

The relationship between wheel torques and the robot's generalized forces/torques in the dynamic equation requires mapping. If $\mathbf{J}_v$ is the Jacobian mapping wheel velocities to robot velocities, and $\mathbf{J}_w$ is the Jacobian mapping wheel torques to robot generalized forces/torques, then the control inputs $\boldsymbol{\tau}_{ext}$ are derived from $\tau_L$ and $\tau_R$.

For a differential drive robot, the generalized forces associated with $x, y, \theta$ can be complex to directly relate to wheel torques without considering the constraints and the velocity mapping. A common approach is to consider the forces/torques directly in the robot's frame or to work with the dynamics of the wheels.

---

### **5. Role of Inertia and Mass Distribution**

The **mass matrix $\mathbf{M}(\mathbf{q})$** encapsulates the inertia of the robot.

*   **Mass ($m$)**: Affects the linear acceleration: $F = ma$. A heavier robot requires more force to achieve the same acceleration.
*   **Moment of Inertia ($I$)**: Affects the angular acceleration: $\tau = I\dot{\omega}$. A robot with a larger moment of inertia requires more torque to achieve the same angular acceleration.
*   **Mass Distribution:** How the mass is distributed within the robot's volume significantly impacts the inertia tensor. For example, a robot with its mass concentrated far from its center of rotation will have a larger moment of inertia.

**Impact on Dynamics:**
*   **Response Time:** Higher inertia means slower response to control inputs (both linear and angular).
*   **Control Effort:** To achieve a desired acceleration, controllers must provide forces/torques that account for the robot's inertia.
*   **Stability:** Inertia can influence the stability of a control system.

**Example: Comparing Robots**
A small, lightweight robot (e.g., a toy car) will have small $m$ and $I$. A larger, heavier industrial robot on wheels will have significantly larger $m$ and $I$. The control strategies for these robots will need to be vastly different to account for their inertia.

---

### **6. Relating Dynamic Model to Control Design and Trajectory Tracking**

The primary application of the dynamic model is in designing controllers that can make the robot follow a desired trajectory accurately.

*   **Model-Based Control:** Controllers that explicitly use the dynamic model to compute the required control inputs.
    *   **Computed Torque Control (or Inverse Dynamics Control):** This is a common technique where the controller computes the forces/torques needed to produce the desired accelerations based on the dynamic model.
        *   Given desired position $q_d(t)$, velocity $\dot{q}_d(t)$, and acceleration $\ddot{q}_d(t)$, the controller aims to generate $\boldsymbol{\tau}_{ext}$ such that:
            $\mathbf{M}(\mathbf{q}_d)\ddot{\mathbf{q}}_d + \mathbf{C}(\mathbf{q}_d, \dot{\mathbf{q}}_d)\dot{\mathbf{q}}_d + \mathbf{g}(\mathbf{q}_d) + \mathbf{f}(\dot{\mathbf{q}}_d) = \boldsymbol{\tau}_{cmd}$
        *   This effectively cancels out the robot's dynamics, making the robot behave like a simple integrator, which is easier to control.
    *   **Feedforward Control:** Components of the dynamic model (e.g., Coriolis forces, gravity) can be used to predict and compensate for them, improving tracking performance.
    *   **Feedback Control:** PID controllers, LQR, etc., are used to correct for errors and disturbances not captured by the model.

*   **Trajectory Planning:** While kinematics defines the path, dynamics influences the velocity and acceleration profiles along that path. A trajectory that is kinematically feasible might be dynamically infeasible (e.g., requiring forces/torques beyond the actuators' capabilities or exceeding friction limits). Dynamic considerations help in generating "dynamically feasible" trajectories.

**Challenges:**
*   **Model Uncertainty:** Real-world robots have uncertainties in their mass, inertia, friction coefficients, and actuator capabilities. This can degrade the performance of model-based controllers.
*   **Non-linearities:** Friction, especially Coulomb friction, and the coupled nature of the dynamic equations make them difficult to linearize and control.
*   **Computational Cost:** Computing the full dynamic model in real-time can be computationally intensive.

**Reference:**
*   *Introduction to Mobile Robot Control* by Spyros G. Tzafestas often covers various control strategies for mobile robots, including those that leverage dynamic models for precise trajectory tracking.
*   *Probabilistic Robotics* by Thrun, Burgard, and Fox discusses how to handle model uncertainties using probabilistic methods and state estimation, which are crucial for robust dynamic control in real-world scenarios.

---

### **7. Practice Questions and Answers**

**Question 1:**
For a simple mobile robot with mass $m$, if you double the mass while keeping other factors the same, how will its linear acceleration change if subjected to the same net force?

**Answer:**
According to Newton's Second Law, $F = ma$. If the force $F$ is constant and the mass is doubled ($2m$), then the acceleration $a'$ will be:
$F = (2m)a'$
$a' = \frac{F}{2m} = \frac{1}{2} \left(\frac{F}{m}\right) = \frac{1}{2}a$
The linear acceleration will be halved.

**Question 2:**
Consider a robot with a significant moment of inertia $I_z$ about its vertical axis. If you want to achieve a certain angular acceleration $\ddot{\theta}$, would you need a larger or smaller torque compared to a robot with a smaller $I_z$? Explain why.

**Answer:**
You would need a larger torque. The relationship between torque and angular acceleration is given by $\tau = I_z \ddot{\theta}$. If $I_z$ is larger, then for the same desired angular acceleration $\ddot{\theta}$, a larger torque $\tau$ is required to overcome the increased rotational inertia.

**Question 3:**
Explain the difference between kinematics and dynamics in the context of mobile robots.

**Answer:**
*   **Kinematics:** Deals with the geometry of motion. It describes the relationship between the robot's configuration (position and orientation) and its velocities, accelerations, and velocities without considering the forces that cause these motions. It answers "how" the robot moves.
*   **Dynamics:** Deals with the relationship between forces, torques, and the resulting motion (accelerations). It considers the mass, inertia, friction, and forces applied by actuators. It answers "why" the robot moves.

**Question 4:**
Name two common methods for deriving the dynamic model of a mobile robot.

**Answer:**
1.  Newtonian Mechanics (Newton-Euler Equations)
2.  Lagrangian Mechanics

**Question 5:**
Why is friction an important consideration in the dynamic model of mobile robots, especially for control design?

**Answer:**
Friction directly opposes motion and affects the relationship between actuator torques and the resulting robot accelerations. It is often non-linear and can significantly impact trajectory tracking accuracy. Ignoring friction can lead to inaccurate predictions of robot behavior and poor control performance. For example, if a controller doesn't account for friction, it might apply too little torque to overcome static friction, preventing motion, or too much torque, causing overshoot.

---

### **8. Important Points to Remember**

*   **Dynamics is Force-Driven:** It bridges the gap between control inputs (forces/torques) and the robot's resulting motion (accelerations).
*   **Inertia Matters:** Mass and its distribution (moment of inertia) are key factors resisting changes in motion.
*   **Friction is Crucial:** Especially Coulomb friction and rolling resistance, which significantly impact low-speed control and energy efficiency.
*   **Lagrangian vs. Newtonian:** Both can derive the same dynamic equations, but Lagrangian mechanics is often more systematic for complex systems.
*   **Dynamic Model for Control:** Essential for advanced control strategies like computed torque control, which aim for precise trajectory tracking.
*   **Model Uncertainty:** Real-world robots have uncertainties in their parameters, requiring robust control or estimation techniques.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


### **9. Further Reading / Textbook References**

*   **Siegwart and Nourbakhsh, Chapter 7 (Dynamics):** Provides a good introduction to the basic principles of mobile robot dynamics, often with simplified models for common mobile robot platforms.
*   **Corke, Chapter 8 (Robot Dynamics) and Chapter 10 (Mobile Robot Kinematics and Dynamics):** Corke offers detailed mathematical derivations and practical examples, particularly for wheeled robots, often illustrating the links between kinematics and dynamics with MATLAB code.
*   **Tzafestas, Chapter 5 (Robot Dynamics) and Chapter 8 (Mobile Robot Control):** Tzafestas's book delves into the mathematical formulation of robot dynamics and how these models are used in various control architectures for mobile robots.

This comprehensive study of mobile robot dynamics provides the foundation for understanding how forces and torques govern a robot's motion, which is indispensable for designing effective control systems and achieving accurate trajectory tracking.