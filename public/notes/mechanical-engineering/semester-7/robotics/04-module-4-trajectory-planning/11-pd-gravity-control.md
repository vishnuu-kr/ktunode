---
title: "PD gravity control"
subject: "ROBOTICS"
module: "Module 4: Trajectory Planning"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf480446425f"
status: "completed"
scrapedAt: "2026-05-20T18:18:56.559Z"
---
# ROBOTICS: Module 4: Trajectory Planning - PD Gravity Control

---

## 1. Introduction to Gravity Compensation

Robotic manipulators operating in the presence of gravity experience forces that depend on their configuration. These gravitational forces can significantly affect the manipulator's motion and accuracy. Gravity compensation techniques aim to counteract these forces, ensuring precise and predictable movements.

### 1.1 Why Gravity Compensation?

*   **Force Disturbances:** Gravity acts as an external force on the manipulator's links, especially for robots with revolute joints. This force is configuration-dependent, meaning it changes as the robot's arm moves.
*   **Accuracy and Stability:** Without compensation, gravity can cause the robot to deviate from its intended path, leading to reduced accuracy and potential instability, particularly at lower speeds.
*   **Torque Requirements:** Motors need to exert additional torque to overcome the gravitational pull. Effective compensation reduces the burden on the motors, potentially leading to more efficient operation.
*   **Dynamic Control:** While trajectory planning focuses on the path, understanding gravity's influence is crucial for dynamic control strategies.

### 1.2 PD Control and its Limitations with Gravity

Proportional-Derivative (PD) control is a fundamental feedback control mechanism widely used in robotics.

*   **Proportional (P) term:** Responds to the current error (difference between desired and actual position).
    *   $u_P = K_p e(t)$, where $e(t)$ is the error and $K_p$ is the proportional gain.
*   **Derivative (D) term:** Responds to the rate of change of the error (velocity). This helps dampen oscillations and improve transient response.
    *   $u_D = K_d \dot{e}(t)$, where $\dot{e}(t)$ is the rate of change of error and $K_d$ is the derivative gain.

The total PD control output is $u(t) = u_P + u_D = K_p e(t) + K_d \dot{e}(t)$.

**Limitations of basic PD control in the presence of gravity:**

Without explicitly accounting for gravity, a standard PD controller will struggle to maintain a desired position if that position is affected by gravitational forces. For instance, if a robot arm is commanded to hold a horizontal position against gravity, the PD controller would continuously need to exert torque to counteract the gravitational pull. This leads to:

*   **Steady-state error:** In some configurations, gravity might cause a persistent error.
*   **Increased overshoot:** The robot might swing more before settling.
*   **Reduced tracking accuracy:** Especially when following trajectories at low speeds where gravity's influence is more pronounced relative to inertial forces.

---

## 2. PD Gravity Compensation Control Strategy

PD gravity control enhances standard PD control by adding a term that estimates and compensates for the gravitational torques.

### 2.1 The General Robot Dynamic Model

The dynamic behavior of a robot manipulator can be described by the following equation (often derived using Newton-Euler or Lagrange methods):

$$
\mathbf{M}(\mathbf{q})\ddot{\mathbf{q}} + \mathbf{C}(\mathbf{q}, \dot{\mathbf{q}})\dot{\mathbf{q}} + \mathbf{G}(\mathbf{q}) + \mathbf{F}(\dot{\mathbf{q}}) = \boldsymbol{\tau}
$$

Where:
*   $\mathbf{q} \in \mathbb{R}^n$: Vector of joint positions.
*   $\dot{\mathbf{q}} \in \mathbb{R}^n$: Vector of joint velocities.
*   $\ddot{\mathbf{q}} \in \mathbb{R}^n$: Vector of joint accelerations.
*   $\mathbf{M}(\mathbf{q}) \in \mathbb{R}^{n \times n}$: Symmetric positive-definite inertia matrix.
*   $\mathbf{C}(\mathbf{q}, \dot{\mathbf{q}}) \in \mathbb{R}^{n \times n}$: Matrix representing Coriolis and centrifugal forces.
*   $\mathbf{G}(\mathbf{q}) \in \mathbb{R}^n$: Vector of gravitational torques/forces.
*   $\mathbf{F}(\dot{\mathbf{q}}) \in \mathbb{R}^n$: Vector of friction forces (often simplified).
*   $\boldsymbol{\tau} \in \mathbb{R}^n$: Vector of applied joint torques/forces (control input).

### 2.2 The PD Gravity Compensated Control Law

The PD gravity compensated control law aims to generate the necessary joint torques $\boldsymbol{\tau}$ to achieve a desired joint trajectory $\mathbf{q}_d(t)$. The control law is typically of the form:

$$
\boldsymbol{\tau} = \hat{\mathbf{G}}(\mathbf{q}) + \mathbf{K}_p \mathbf{e} + \mathbf{K}_d \dot{\mathbf{e}}
$$

Where:
*   $\hat{\mathbf{G}}(\mathbf{q})$: An estimate of the gravitational torque vector $\mathbf{G}(\mathbf{q})$. This is the core of gravity compensation.
*   $\mathbf{K}_p$: A diagonal positive-definite matrix of proportional gains.
*   $\mathbf{K}_d$: A diagonal positive-definite matrix of derivative gains.
*   $\mathbf{e} = \mathbf{q}_d - \mathbf{q}$: The position error vector.
*   $\dot{\mathbf{e}} = \dot{\mathbf{q}}_d - \dot{\mathbf{q}}$: The velocity error vector.

### 2.3 Estimating the Gravitational Torques $\hat{\mathbf{G}}(\mathbf{q})$

The key challenge in implementing PD gravity control is accurately estimating $\mathbf{G}(\mathbf{q})$. This typically involves:

*   **Modeling the Robot:** Using techniques like Denavit-Hartenberg (DH) parameters and link masses/centers of mass to derive the analytical expression for $\mathbf{G}(\mathbf{q})$. This requires precise knowledge of the robot's physical parameters.
*   **Numerical Methods:** For complex robots where analytical derivation is difficult, numerical methods can be employed.

**Example: Calculating Gravitational Torques for a Simple 2-DOF Planar Manipulator**

Consider a planar 2-DOF manipulator with two links. Let:
*   $m_1, m_2$: Masses of link 1 and link 2, respectively.
*   $l_1, l_2$: Lengths of link 1 and link 2, respectively.
*   $l_{c1}, l_{c2}$: Distances from the joint to the center of mass for link 1 and link 2, respectively.
*   $g$: Acceleration due to gravity.
*   $\theta_1, \theta_2$: Joint angles (typically measured from the horizontal, or a reference frame).

The gravitational torque at joint 1 ($\tau_{g1}$) and joint 2 ($\tau_{g2}$) can be calculated by considering the torque generated by the weight of each link about its respective joint.

**Assumptions for simplicity:**
*   The gravity vector acts downwards along the y-axis.
*   The base of the robot is at the origin.
*   Joint 1 is at the origin.
*   Link 1 rotates about joint 1.
*   Link 2 rotates about joint 2.

The position of the center of mass of link 1 is:
*   $x_{c1} = l_{c1} \cos(\theta_1)$
*   $y_{c1} = l_{c1} \sin(\theta_1)$

The gravitational force on link 1 is $\mathbf{F}_{g1} = [0, -m_1 g]^T$.
The torque due to gravity on link 1 about joint 1 is the cross product of the position vector of the center of mass and the gravitational force vector:
$\tau_{g1, \text{link1}} = (l_{c1} \cos \theta_1) (-m_1 g \sin \theta_1) - (l_{c1} \sin \theta_1) (0) = -m_1 g l_{c1} \cos \theta_1 \sin \theta_1$.
*A more direct way for planar manipulators is to consider the contribution of each mass to the torque about each joint.*

The height of the center of mass of link 1 is $h_{c1} = l_{c1} \sin(\theta_1)$.
The torque generated by link 1 about joint 1 due to gravity is:
$\tau_{g1, \text{link1}} = -m_1 g l_{c1} \sin(\theta_1)$. (Negative sign indicates clockwise torque for positive $\theta_1$ if $\theta_1$ is measured from the horizontal).

The position of the center of mass of link 2 relative to joint 2 is:
*   $x_{c2}' = l_{c2} \cos(\theta_2)$
*   $y_{c2}' = l_{c2} \sin(\theta_2)$

The position of the center of mass of link 2 in the base frame is:
*   $x_{c2} = x_{c1} + x_{c2}' = l_{c1} \cos(\theta_1) + l_{c2} \cos(\theta_1 + \theta_2)$
*   $y_{c2} = y_{c1} + y_{c2}' = l_{c1} \sin(\theta_1) + l_{c2} \sin(\theta_1 + \theta_2)$

The torque due to gravity on link 1 about joint 1 is $-m_1 g l_{c1} \sin(\theta_1)$.
The torque due to gravity on link 2 about joint 1 is $-m_2 g y_{c2}$ (lever arm of link 2 about joint 1).
$\tau_{g1} = -m_1 g l_{c1} \sin(\theta_1) - m_2 g (l_{c1} \sin(\theta_1) + l_{c2} \sin(\theta_1 + \theta_2))$
$\tau_{g1} = -(m_1 l_{c1} + m_2 l_{c1}) g \sin(\theta_1) - m_2 l_{c2} g \sin(\theta_1 + \theta_2)$
$\tau_{g1} = -(m_1 l_{c1} + m_2 l_{c1}) g \sin(\theta_1) - m_2 l_{c2} g (\sin \theta_1 \cos \theta_2 + \cos \theta_1 \sin \theta_2)$

The torque due to gravity on link 2 about joint 2 is $-m_2 g l_{c2} \sin(\theta_2)$ (considering link 2's angle relative to the horizontal).
$\tau_{g2} = -m_2 g l_{c2} \sin(\theta_2)$.

**Therefore, the estimated gravitational torque vector is:**
$\hat{\mathbf{G}}(\mathbf{q}) = \begin{bmatrix} \tau_{g1} \\ \tau_{g2} \end{bmatrix}$

This detailed calculation is crucial for accurate gravity compensation. Textbooks like **Schilling's "Fundamentals of Robotics"** and **Craig's "Introduction to Robotics"** provide extensive derivations of these gravitational terms for various robot configurations.

---

## 3. Implementation and Tuning

### 3.1 Calculating $\hat{\mathbf{G}}(\mathbf{q})$ in Real-Time

*   **Parameter Identification:** The accuracy of $\hat{\mathbf{G}}(\mathbf{q})$ relies heavily on precise knowledge of the robot's physical parameters ($m_i, l_i, l_{ci}$). These parameters are often identified through experimental procedures (e.g., identification techniques described in **Saha's "Introduction to Robotics"** or **Mittal's "Robotics and Control"**).
*   **Forward Calculation:** Once the robot model is known, the $\mathbf{G}(\mathbf{q})$ vector can be computed directly from the current joint angles $\mathbf{q}$. This is a computationally intensive task, especially for robots with many degrees of freedom.
*   **Lookup Tables:** For computationally constrained systems, pre-computed values of $\mathbf{G}(\mathbf{q})$ can be stored in lookup tables. However, this can reduce accuracy if the discretization is too coarse.

### 3.2 Tuning PD Gains ($K_p, K_d$)

Tuning the PD gains for a gravity-compensated system is similar to tuning standard PD control, but the goal is to achieve a desired response *after* gravity has been accounted for.

*   **Proportional Gain ($K_p$):**
    *   Larger $K_p$ leads to faster response and smaller steady-state error.
    *   Too large $K_p$ can cause oscillations and instability.
    *   Helps in reducing the position error $\mathbf{e}$.

*   **Derivative Gain ($K_d$):**
    *   Larger $K_d$ reduces overshoot and settling time.
    *   Dampens oscillations.
    *   Sensitive to noise in the position measurement (as it amplifies $\dot{e}$).
    *   Helps in reducing the velocity error $\dot{e}$.

**Tuning Procedure (Heuristic):**

1.  **Set $\mathbf{K}_d = \mathbf{0}$ and start with a small $\mathbf{K}_p$.**
2.  **Increase $\mathbf{K}_p$ gradually.** Observe the robot's response to a step input in position. Increase $\mathbf{K}_p$ until the response becomes sufficiently fast without excessive oscillation.
3.  **Increase $\mathbf{K}_d$ gradually.** Observe the effect on overshoot and settling time. Increase $\mathbf{K}_d$ to dampen oscillations and reduce settling time.
4.  **Fine-tune.** Adjust both $\mathbf{K}_p$ and $\mathbf{K}_d$ to achieve the desired performance (e.g., rise time, settling time, overshoot).

**Systematic Tuning Methods:**
*   **Ziegler-Nichols Method:** While typically for first-order plus dead-time systems, variations can be applied.
*   **Root Locus:** Analyze the closed-loop system poles for stability and performance as gains vary.

### 3.3 Advantages of PD Gravity Control

*   **Improved Tracking:** Significantly enhances the ability of the robot to follow desired trajectories accurately, especially at low speeds where gravity is dominant.
*   **Reduced Steady-State Error:** Effectively eliminates steady-state errors caused by gravity.
*   **Simpler than Full Dynamic Control:** Requires only the gravitational component of the dynamic model, which is generally easier to derive and compute than the full dynamic model (inertia matrix, Coriolis terms).
*   **Robustness to Model Uncertainties (to some extent):** While precise parameter identification is important, the PD terms provide feedback to correct for minor inaccuracies in the $\hat{\mathbf{G}}(\mathbf{q})$ estimation.

### 3.4 Disadvantages of PD Gravity Control

*   **Requires Accurate Model Parameters:** The effectiveness is directly tied to the accuracy of the gravity model and its parameters. Errors in $m_i, l_i, l_{ci}$ will lead to imperfect compensation.
*   **Computational Cost:** Calculating $\hat{\mathbf{G}}(\mathbf{q})$ can be computationally intensive, especially for robots with many degrees of freedom.
*   **Does not compensate for other dynamics:** Ignores inertial effects ($\mathbf{M}(\mathbf{q})\ddot{\mathbf{q}}$), Coriolis/centrifugal forces ($\mathbf{C}(\mathbf{q}, \dot{\mathbf{q}})\dot{\mathbf{q}}$), and friction ($\mathbf{F}(\dot{\mathbf{q}})$). For high-speed or highly dynamic motions, more advanced control strategies (like computed torque control) are necessary.

---

## 4. Relation to Course Outcomes

This topic directly contributes to several course outcomes:

*   **CO3: Plan trajectories in joint space & Cartesian space and avoid obstacles while robots are in motion (Knowledge Level: K4, K5)**
    *   Understanding gravity compensation is essential for accurately executing planned trajectories. If gravity is not compensated, the actual trajectory will deviate from the planned one, especially at low speeds. This allows for more precise trajectory execution.

*   **CO4: Develop a dynamic model and design the controller for robotic manipulators (Knowledge Level: K4, K6)**
    *   This topic is a direct application of designing a controller. It requires developing the gravitational component of the dynamic model ($\mathbf{G}(\mathbf{q})$) and integrating it into a PD control structure. This involves understanding the underlying dynamics (as explored in textbooks like **Saha's "Introduction to Robotics"** and **Ghosal's "Robotics-Fundamental concepts and analysis"**) and applying control design principles.

---

## 5. Practice Questions and Answers

**Question 1:** What is the primary reason for implementing gravity compensation in robot control?
**Answer:** To counteract the gravitational forces acting on the robot's links, which are configuration-dependent and can cause deviations from the desired trajectory, especially at low speeds.

**Question 2:** Describe the general form of a PD gravity-compensated control law.
**Answer:** $\boldsymbol{\tau} = \hat{\mathbf{G}}(\mathbf{q}) + \mathbf{K}_p \mathbf{e} + \mathbf{K}_d \dot{\mathbf{e}}$, where $\hat{\mathbf{G}}(\mathbf{q})$ is the estimated gravitational torque, $\mathbf{K}_p$ and $\mathbf{K}_d$ are proportional and derivative gain matrices, $\mathbf{e}$ is the position error, and $\dot{\mathbf{e}}$ is the velocity error.

**Question 3:** What are the main challenges in implementing PD gravity control?
**Answer:** The primary challenge is the accurate estimation of the gravitational torques $\hat{\mathbf{G}}(\mathbf{q})$, which requires precise knowledge of the robot's physical parameters (masses, link lengths, centers of mass). Another challenge can be the computational cost of calculating $\hat{\mathbf{G}}(\mathbf{q})$ in real-time.

**Question 4:** For a simple 1-DOF planar robot arm (a single link of length $L$ and mass $M$) rotating about a fixed pivot point, if the joint angle $\theta$ is measured from the horizontal, what is the gravitational torque $\tau_g$ acting at the pivot? (Assume gravity acts downwards).
**Answer:** The center of mass is at a distance $L/2$ from the pivot. The vertical position of the center of mass is $(L/2) \sin(\theta)$. The gravitational force is $Mg$. The torque about the pivot is the force component perpendicular to the lever arm times the lever arm, or more directly, the torque due to gravity is $-(Mg)(L/2)\sin(\theta)$. The negative sign indicates that for positive $\theta$ (upwards), the torque is clockwise (negative).
So, $\tau_g = -\frac{1}{2}MgL\sin(\theta)$.

**Question 5:** What is the benefit of the derivative term ($K_d\dot{e}$) in PD gravity control?
**Answer:** The derivative term helps to dampen oscillations and reduce overshoot in the robot's response, improving the settling time and overall stability of the system by reacting to the rate of change of the error.

---

## 6. Important Points to Remember

*   **Gravity is configuration-dependent:** The gravitational force and its resulting torque change as the robot moves.
*   **PD Gravity Control:** Adds an estimated gravity compensation term to a standard PD controller.
*   **$\hat{\mathbf{G}}(\mathbf{q})$ is crucial:** The accuracy of this term determines the effectiveness of the compensation.
*   **Model Parameters:** Precise knowledge of mass, length, and center of mass for each link is vital.
*   **Benefits:** Improved tracking accuracy, especially at low speeds, and reduced steady-state errors.
*   **Limitations:** Relies on an accurate model, does not compensate for inertial or Coriolis forces.
*   **Tuning:** Standard PD tuning principles apply, but the goal is to achieve good performance *after* gravity is accounted for.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


## 7. References

*   **Fundamentals of Robotics – Analysis and Control by Robert. J. Schilling:** Provides detailed derivations for robot dynamics and control strategies, including gravity compensation.
*   **Introduction to Robotics (Mechanics and Control) by John. J. Craig:** A foundational text covering robot kinematics, dynamics, and control. Offers clear explanations of gravitational torque calculations.
*   **Robotics-Fundamental concepts and analysis by AshitavaGhosal:** Discusses the underlying principles of robot modeling and control, which are essential for understanding gravity compensation.
*   **Robotics and Control by R K Mittal:** Covers various aspects of robot control, potentially including gravity compensation techniques.
*   **Modern Robotics Mechanics, Planning and Control by Kevin M. Lynch, Frank C. Park:** A comprehensive resource that delves into the mechanics and control of robots, offering modern perspectives.

---