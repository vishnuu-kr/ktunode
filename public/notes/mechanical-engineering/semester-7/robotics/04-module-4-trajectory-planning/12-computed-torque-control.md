---
title: "computed torque control"
subject: "ROBOTICS"
module: "Module 4: Trajectory Planning"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804464260"
status: "completed"
scrapedAt: "2026-05-20T18:18:57.276Z"
---
# Module 4: Trajectory Planning - Computed Torque Control

## 1. Introduction to Computed Torque Control

Computed Torque Control is a model-based control strategy for robotic manipulators that aims to achieve precise and decoupled control of joint positions. It directly addresses the nonlinear dynamics of the robot by calculating and compensating for these nonlinearities. This allows the robot to behave like a simpler, linear system, making it easier to control.

**Key Concepts:**

*   **Model-Based Control:** Control strategies that utilize a mathematical model of the system being controlled.
*   **Robot Dynamics:** The equations of motion that describe how a robot's joints and links move under the influence of forces and torques. These are inherently nonlinear due to factors like gravity, Coriolis and centrifugal forces, and inertia coupling.
*   **Decoupled Control:** Achieving control of each joint independently, without the motion of one joint significantly affecting the others.

**Alignment with Course Outcomes:**

*   **CO4 (Knowledge Level: K4, K6):** This topic is central to developing a dynamic model and designing controllers for robotic manipulators. Computed Torque Control directly uses the robot's dynamic model to achieve effective control.

**Reference:**

*   **Craig, J.J. (2002). *Introduction to Robotics: Mechanics and Control***. This book provides a foundational understanding of robot dynamics and control, including methods like computed torque control.
*   **Schilling, R.J. (1996). *Fundamentals of Robotics – Analysis and Control***. Offers insights into dynamic modeling and control strategies for manipulators.

## 2. The Dynamic Model of a Robotic Manipulator

Before implementing computed torque control, a dynamic model of the robot is essential. This model relates the joint torques (inputs) to the joint positions, velocities, and accelerations (outputs).

The general form of the robot's dynamic equation is:

$$
\boldsymbol{\tau} = M(\mathbf{q})\ddot{\mathbf{q}} + C(\mathbf{q}, \dot{\mathbf{q}})\dot{\mathbf{q}} + G(\mathbf{q}) + F(\dot{\mathbf{q}})
$$

Where:

*   $\boldsymbol{\tau}$: Vector of joint torques/forces.
*   $\mathbf{q}$: Vector of joint positions.
*   $\dot{\mathbf{q}}$: Vector of joint velocities.
*   $\ddot{\mathbf{q}}$: Vector of joint accelerations.
*   $M(\mathbf{q})$: The symmetric, positive-definite **inertia matrix**. It represents the inertia of the robot as a function of its configuration.
*   $C(\mathbf{q}, \dot{\mathbf{q}})$: The **Coriolis and centrifugal forces matrix**. It accounts for forces arising from the rotation of links and the motion of joints.
*   $G(\mathbf{q})$: The **gravity vector**. It represents the torques/forces due to gravity acting on the robot's links.
*   $F(\dot{\mathbf{q}})$: The **friction vector**. It represents frictional forces at the joints (e.g., viscous friction, Coulomb friction).

**Key Components of the Dynamic Model:**

*   **Inertia Matrix ($M(\mathbf{q})$):**
    *   Accounts for the mass and distribution of mass of each link.
    *   Is dependent on the joint configuration $\mathbf{q}$.
    *   Represents how inertial forces are resisted by applied torques.
*   **Coriolis and Centrifugal Matrix ($C(\mathbf{q}, \dot{\mathbf{q}})$):**
    *   Arises from the relative motion between different parts of the robot.
    *   Is dependent on both joint positions $\mathbf{q}$ and velocities $\dot{\mathbf{q}}$.
    *   Includes terms like Coriolis forces (due to velocity of one link with respect to another) and centrifugal forces (due to the robot's own rotation).
*   **Gravity Vector ($G(\mathbf{q})$):**
    *   Represents the torques/forces needed to counteract the effect of gravity on the robot's links.
    *   Depends on the configuration $\mathbf{q}$ and the mass distribution of the links.
*   **Friction Vector ($F(\dot{\mathbf{q}})$):**
    *   Often approximated as viscous friction ($B\dot{\mathbf{q}}$) or can include Coulomb friction, which is more complex to model and compensate.

**Derivation of the Dynamic Model:**

The dynamic model can be derived using methods like:

*   **Lagrangian Mechanics:** (Often preferred for its systematic approach)
*   **Newton-Euler Method:** (More intuitive for physical understanding)

**Alignment with Course Outcomes:**

*   **CO4 (Knowledge Level: K4, K6):** Understanding and deriving the dynamic model is a prerequisite for designing controllers like computed torque.

**Reference:**

*   **Saha, S.K. (2008). *Introduction to Robotics***. Provides detailed methods for deriving robot dynamic models.
*   **Ghosal, A. (2006). *Robotics-Fundamental concepts and analysis***. Discusses both Lagrangian and Newton-Euler formulations for robot dynamics.

**Important Point to Remember:** Accurate modeling of $M(\mathbf{q})$, $C(\mathbf{q}, \dot{\mathbf{q}})$, and $G(\mathbf{q})$ is crucial for the effectiveness of computed torque control.

## 3. The Computed Torque Control Algorithm

The core idea of computed torque control is to compute the required joint torques ($\boldsymbol{\tau}$) that will drive the robot's joints to follow a desired trajectory. This is achieved by rearranging the dynamic equation.

From the dynamic equation:
$$
\boldsymbol{\tau} = M(\mathbf{q})\ddot{\mathbf{q}} + C(\mathbf{q}, \dot{\mathbf{q}})\dot{\mathbf{q}} + G(\mathbf{q}) + F(\dot{\mathbf{q}})
$$

The control law for computed torque control is designed as:

$$
\boldsymbol{\tau}_c = \hat{M}(\mathbf{q}) (\ddot{\mathbf{q}}_d + \mathbf{v}) + \hat{C}(\mathbf{q}, \dot{\mathbf{q}})\dot{\mathbf{q}} + \hat{G}(\mathbf{q}) + \hat{F}(\dot{\mathbf{q}})
$$

Where:

*   $\boldsymbol{\tau}_c$: The control torques computed and applied to the robot's actuators.
*   $\hat{M}(\mathbf{q})$, $\hat{C}(\mathbf{q}, \dot{\mathbf{q}})$, $\hat{G}(\mathbf{q})$, $\hat{F}(\dot{\mathbf{q}})$: **Estimated** versions of the dynamic terms (using the robot's dynamic model).
*   $\mathbf{q}_d$: The desired joint position trajectory.
*   $\dot{\mathbf{q}}_d$: The desired joint velocity trajectory.
*   $\ddot{\mathbf{q}}_d$: The desired joint acceleration trajectory.
*   $\mathbf{v}$: A compensating control input, typically a PD (Proportional-Derivative) controller.

**The PD Compensating Input ($\mathbf{v}$):**

The compensating input $\mathbf{v}$ is usually a PD controller that drives the actual joint positions and velocities towards the desired ones.

$$
\mathbf{v} = K_p (\mathbf{q}_d - \mathbf{q}) + K_d (\dot{\mathbf{q}}_d - \dot{\mathbf{q}})
$$

Where:

*   $K_p$: Proportional gain matrix.
*   $K_d$: Derivative gain matrix.

Substituting $\mathbf{v}$ into the control law:

$$
\boldsymbol{\tau}_c = \hat{M}(\mathbf{q}) (\ddot{\mathbf{q}}_d + K_p (\mathbf{q}_d - \mathbf{q}) + K_d (\dot{\mathbf{q}}_d - \dot{\mathbf{q}})) + \hat{C}(\mathbf{q}, \dot{\mathbf{q}})\dot{\mathbf{q}} + \hat{G}(\mathbf{q}) + \hat{F}(\dot{\mathbf{q}})
$$

**How it works (The "Cancellation" Effect):**

If the estimated model perfectly matches the actual robot dynamics ($\hat{M}=M$, $\hat{C}=C$, $\hat{G}=G$, $\hat{F}=F$) and there are no disturbances, the controlled system's dynamics become:

$$
\boldsymbol{\tau}_c = M(\mathbf{q}) (\ddot{\mathbf{q}}_d + K_p (\mathbf{q}_d - \mathbf{q}) + K_d (\dot{\mathbf{q}}_d - \dot{\mathbf{q}})) + C(\mathbf{q}, \dot{\mathbf{q}})\dot{\mathbf{q}} + G(\mathbf{q}) + F(\dot{\mathbf{q}})
$$

Equating this to the robot's dynamic equation:

$$
M(\mathbf{q})\ddot{\mathbf{q}} + C(\mathbf{q}, \dot{\mathbf{q}})\dot{\mathbf{q}} + G(\mathbf{q}) + F(\dot{\mathbf{q}}) = M(\mathbf{q}) \ddot{\mathbf{q}}_d + M(\mathbf{q}) K_p (\mathbf{q}_d - \mathbf{q}) + M(\mathbf{q}) K_d (\dot{\mathbf{q}}_d - \dot{\mathbf{q}}) + C(\mathbf{q}, \dot{\mathbf{q}})\dot{\mathbf{q}} + G(\mathbf{q}) + F(\dot{\mathbf{q}})
$$

After cancellation of terms:

$$
M(\mathbf{q})\ddot{\mathbf{q}} = M(\mathbf{q}) \ddot{\mathbf{q}}_d + M(\mathbf{q}) K_p (\mathbf{q}_d - \mathbf{q}) + M(\mathbf{q}) K_d (\dot{\mathbf{q}}_d - \dot{\mathbf{q}})
$$

Dividing by $M(\mathbf{q})$ (which is invertible):

$$
\ddot{\mathbf{q}} = \ddot{\mathbf{q}}_d + K_p (\mathbf{q}_d - \mathbf{q}) + K_d (\dot{\mathbf{q}}_d - \dot{\mathbf{q}})
$$

Rearranging:

$$
\ddot{\mathbf{q}} - \ddot{\mathbf{q}}_d = - K_p (\mathbf{q}_d - \mathbf{q}) - K_d (\dot{\mathbf{q}}_d - \dot{\mathbf{q}})
$$

Let $e = \mathbf{q}_d - \mathbf{q}$ be the position error. Then $\dot{e} = \dot{\mathbf{q}}_d - \dot{\mathbf{q}}$ and $\ddot{e} = \ddot{\mathbf{q}}_d - \ddot{\mathbf{q}}$.
The equation becomes:

$$
-\ddot{e} = K_p e + K_d \dot{e}
$$

Or:

$$
\ddot{e} + K_d \dot{e} + K_p e = 0
$$

This is the equation of a linear, second-order system. By choosing appropriate $K_p$ and $K_d$ (positive definite matrices), the error $e$ will asymptotically approach zero, meaning the actual robot motion $\mathbf{q}$ will track the desired trajectory $\mathbf{q}_d$.

**Alignment with Course Outcomes:**

*   **CO4 (Knowledge Level: K4, K6):** This is a prime example of designing a controller based on a dynamic model. It directly addresses how to achieve precise motion control.
*   **CO3 (Knowledge Level: K4, K5):** The ability to follow a desired trajectory ($\mathbf{q}_d$) is a direct outcome of effective trajectory planning and execution, for which computed torque control is a method.

**Reference:**

*   **Craig, J.J. (2002). *Introduction to Robotics: Mechanics and Control***. Chapter 8 provides a detailed explanation of computed torque control.
*   **Mittal, R.K. (2003). *Robotics and Control***. Discusses model-based control techniques.

**Important Point to Remember:** The success of computed torque control relies on having an accurate dynamic model and effective estimation of its components.

## 4. Implementation and Considerations

### 4.1. Feedforward Component

The terms $\hat{M}(\mathbf{q}) \ddot{\mathbf{q}}_d + \hat{C}(\mathbf{q}, \dot{\mathbf{q}})\dot{\mathbf{q}} + \hat{G}(\mathbf{q})$ form the **feedforward** part of the control. These terms are calculated based on the desired trajectory and the robot's model, and they are added to the feedback control signal to proactively compensate for the robot's nonlinearities.

### 4.2. Feedback Component (PD Control)

The term $\hat{M}(\mathbf{q}) (K_p (\mathbf{q}_d - \mathbf{q}) + K_d (\dot{\mathbf{q}}_d - \dot{\mathbf{q}}))$ acts as a feedback control that corrects for any errors or disturbances that the feedforward term might not have fully accounted for.

### 4.3. Handling Uncertainties and Disturbances

*   **Model Uncertainties:** Real-world robots have uncertainties in their mass properties, friction coefficients, and actuator characteristics. If the estimated model is not perfect, the cancellation might not be complete, leading to tracking errors.
*   **Disturbances:** External forces or internal noise can also affect the robot's motion.

**Strategies to handle uncertainties:**

1.  **Robust Control Techniques:** Augmenting the computed torque controller with robust control elements to handle bounded uncertainties.
2.  **Adaptive Control:** Updating the model parameters online to adapt to changing dynamics or uncertainties.
3.  **Friction Compensation:** Developing more sophisticated friction models or using adaptive methods to compensate for friction more effectively.

### 4.4. Joint Space vs. Task Space Control

Computed torque control is typically applied in **joint space**. This means the desired trajectory ($\mathbf{q}_d, \dot{\mathbf{q}}_d, \ddot{\mathbf{q}}_d$) is specified in terms of joint angles. If a task-space trajectory is desired (e.g., a path for the end-effector in Cartesian coordinates), it first needs to be converted to a joint-space trajectory using inverse kinematics.

**Process for Task Space Trajectory:**

1.  **Specify Task-Space Trajectory:** Define the desired path, velocity, and acceleration for the end-effector in Cartesian coordinates ($x_d(t), y_d(t), z_d(t)$, etc.).
2.  **Inverse Kinematics:** Use inverse kinematics to find the corresponding joint angles ($\mathbf{q}_d$) for each point in the task-space trajectory. This step can be complex and may have multiple solutions or no solutions for certain configurations.
3.  **Compute Joint-Space Trajectory:** Differentiate the resulting $\mathbf{q}_d$ to obtain $\dot{\mathbf{q}}_d$ and $\ddot{\mathbf{q}}_d$.
4.  **Apply Computed Torque Control:** Use the computed torque control algorithm with these joint-space trajectories.

**Alignment with Course Outcomes:**

*   **CO3 (Knowledge Level: K4, K5):** This highlights the interplay between trajectory planning (in task or joint space) and control execution.
*   **CO2 (Knowledge Level: K3):** Requires understanding of inverse kinematics to translate task-space goals into joint-space commands.
*   **CO4 (Knowledge Level: K4, K6):** The computed torque control itself is the core of the control design.

**Reference:**

*   **Siciliano, B., Khatib, O. (2016). *Handbook of Robotics***. Provides comprehensive coverage of robotic control and planning.
*   **Lynch, K.M., Park, F.C. (2017). *Modern Robotics Mechanics, Planning and Control***. Discusses task-space control and its relationship with joint-space control.

**Important Point to Remember:** The effectiveness of computed torque control in task space is limited by the accuracy and complexity of the inverse kinematics solution.

## 5. Advantages and Disadvantages

### 5.1. Advantages

*   **Precise Tracking:** Can achieve very good tracking of desired trajectories due to direct compensation of nonlinear dynamics.
*   **Decoupled Control:** Makes the robot behave like a set of independent, linear second-order systems, simplifying control design and tuning.
*   **Good Performance:** Generally provides good performance in terms of speed and accuracy.

### 5.2. Disadvantages

*   **Model Dependency:** Requires an accurate dynamic model of the robot. Errors in the model lead to suboptimal performance or instability.
*   **Computational Cost:** Calculating the dynamic terms ($M$, $C$, $G$) in real-time can be computationally intensive, especially for robots with many degrees of freedom.
*   **Knowledge of State:** Requires accurate knowledge of the robot's current joint positions and velocities ($\mathbf{q}, \dot{\mathbf{q}}$), which are typically obtained from encoders and tachometers.
*   **Sensitive to Uncertainties:** Performance degrades significantly if there are unmodeled dynamics, parameter uncertainties, or external disturbances.
*   **Requires Joint-Space Trajectories:** Needs pre-computed desired accelerations ($\ddot{\mathbf{q}}_d$), which can be challenging to obtain directly from task-space planning.

**Alignment with Course Outcomes:**

*   **CO4 (Knowledge Level: K4, K6):** Understanding the strengths and weaknesses of control designs is part of controller development.

**Reference:**

*   **Deb, S.R. (2001). *Robotics Technology and Flexible Automation***. Discusses the practical aspects and limitations of various robotic control techniques.

## 6. Example: Computed Torque Control for a 2-DOF Planar Manipulator

Consider a simple 2-DOF planar manipulator with joint angles $\theta_1$ and $\theta_2$. The dynamic model can be represented as:

$$
\begin{bmatrix} \tau_1 \\ \tau_2 \end{bmatrix} =
\begin{bmatrix} M_{11} & M_{12} \\ M_{21} & M_{22} \end{bmatrix}
\begin{bmatrix} \ddot{\theta}_1 \\ \ddot{\theta}_2 \end{bmatrix} +
\begin{bmatrix} C_{11} & C_{12} \\ C_{21} & C_{22} \end{bmatrix}
\begin{bmatrix} \dot{\theta}_1 \\ \dot{\theta}_2 \end{bmatrix} +
\begin{bmatrix} G_1 \\ G_2 \end{bmatrix}
$$

(Note: For simplicity, we've omitted the friction term $F(\dot{\mathbf{q}})$ in this illustrative example, assuming it's negligible or handled separately).

**Desired Trajectory:**
We want the joints to follow a desired trajectory: $\theta_{1d}(t)$, $\theta_{2d}(t)$. This implies we also have the desired velocities $\dot{\theta}_{1d}(t), \dot{\theta}_{2d}(t)$ and accelerations $\ddot{\theta}_{1d}(t), \ddot{\theta}_{2d}(t)$.

**Computed Torque Control Law:**

The control torques $\boldsymbol{\tau}_c = \begin{bmatrix} \tau_{c1} \\ \tau_{c2} \end{bmatrix}$ are computed as:

$$
\boldsymbol{\tau}_c = \hat{M}(\mathbf{q}) (\ddot{\mathbf{q}}_d + \mathbf{v}) + \hat{C}(\mathbf{q}, \dot{\mathbf{q}})\dot{\mathbf{q}} + \hat{G}(\mathbf{q})
$$

Where $\mathbf{q} = \begin{bmatrix} \theta_1 \\ \theta_2 \end{bmatrix}$, $\dot{\mathbf{q}} = \begin{bmatrix} \dot{\theta}_1 \\ \dot{\theta}_2 \end{bmatrix}$, and $\mathbf{v} = K_p (\mathbf{q}_d - \mathbf{q}) + K_d (\dot{\mathbf{q}}_d - \dot{\mathbf{q}})$.

**Step-by-step computation for $\tau_{c1}$:**

1.  **Calculate desired acceleration with PD feedback:**
    $u_1 = \ddot{\theta}_{1d} + k_{p1}(\theta_{1d} - \theta_1) + k_{d1}(\dot{\theta}_{1d} - \dot{\theta}_1)$
    $u_2 = \ddot{\theta}_{2d} + k_{p2}(\theta_{2d} - \theta_2) + k_{d2}(\dot{\theta}_{2d} - \dot{\theta}_2)$
    Let $\mathbf{u} = \begin{bmatrix} u_1 \\ u_2 \end{bmatrix}$.

2.  **Compute the feedforward torque:**
    $\boldsymbol{\tau}_{ff} = \hat{M}(\mathbf{q}) \mathbf{u} + \hat{C}(\mathbf{q}, \dot{\mathbf{q}})\dot{\mathbf{q}} + \hat{G}(\mathbf{q})$

3.  **The control torque is $\boldsymbol{\tau}_c = \boldsymbol{\tau}_{ff}$.** (In this formulation, the PD term is directly incorporated into the desired acceleration $\ddot{\mathbf{q}}_d$ part of the computed torque law, effectively $\ddot{\mathbf{q}}_d^{actual} = \ddot{\mathbf{q}}_d + \mathbf{v}$)

    So, a more explicit form of the control law is:
    $$
    \boldsymbol{\tau}_c = \hat{M}(\mathbf{q}) \ddot{\mathbf{q}}_d + \hat{M}(\mathbf{q}) K_p (\mathbf{q}_d - \mathbf{q}) + \hat{M}(\mathbf{q}) K_d (\dot{\mathbf{q}}_d - \dot{\mathbf{q}}) + \hat{C}(\mathbf{q}, \dot{\mathbf{q}})\dot{\mathbf{q}} + \hat{G}(\mathbf{q})
    $$

**Example Calculation for a Single Time Step:**

Suppose at time $t$, we have:
*   Current joint positions: $\mathbf{q} = [\theta_1, \theta_2]^T$
*   Current joint velocities: $\dot{\mathbf{q}} = [\dot{\theta}_1, \dot{\theta}_2]^T$
*   Desired trajectory parameters: $\mathbf{q}_d$, $\dot{\mathbf{q}}_d$, $\ddot{\mathbf{q}}_d$

The control system would:

1.  **Evaluate the dynamic model:** Calculate $\hat{M}(\mathbf{q})$, $\hat{C}(\mathbf{q}, \dot{\mathbf{q}})$, and $\hat{G}(\mathbf{q})$ using the current state and the known robot model.
2.  **Compute the PD feedback:** Calculate the error $e = \mathbf{q}_d - \mathbf{q}$ and $\dot{e} = \dot{\mathbf{q}}_d - \dot{\mathbf{q}}$. Then compute $\mathbf{v} = K_p e + K_d \dot{e}$.
3.  **Compute the control torques:** $\boldsymbol{\tau}_c = \hat{M}(\mathbf{q}) (\ddot{\mathbf{q}}_d + \mathbf{v}) + \hat{C}(\mathbf{q}, \dot{\mathbf{q}})\dot{\mathbf{q}} + \hat{G}(\mathbf{q})$.
4.  **Apply the torques:** Send $\boldsymbol{\tau}_c$ to the robot's actuators.
5.  **Update state:** The robot moves, and new $\mathbf{q}$ and $\dot{\mathbf{q}}$ are measured for the next time step.

**Alignment with Course Outcomes:**

*   **CO4 (Knowledge Level: K4, K6):** Illustrates the direct application of dynamic models for control.
*   **CO3 (Knowledge Level: K4, K5):** Shows how control ensures adherence to a planned trajectory.

## 7. Practice Questions and Answers

**Question 1:** What are the main components of the dynamic model of a robotic manipulator?
**Answer:** The main components are the Inertia Matrix ($M(\mathbf{q})$), the Coriolis and Centrifugal Forces Matrix ($C(\mathbf{q}, \dot{\mathbf{q}})$), the Gravity Vector ($G(\mathbf{q})$), and the Friction Vector ($F(\dot{\mathbf{q}})$).

**Question 2:** How does computed torque control achieve decoupled control of robot joints?
**Answer:** It compensates for the nonlinear coupling terms ($C$, $G$, $F$) and configuration-dependent inertia ($M$) in the robot's dynamics. By precisely calculating and canceling these nonlinearities, it makes the robot behave like a set of independent, linear systems, which can then be easily controlled using simple feedback (e.g., PD control).

**Question 3:** What is the role of the PD controller in the computed torque control law?
**Answer:** The PD controller provides feedback to correct for any errors that arise due to model uncertainties, disturbances, or inaccuracies in the feedforward compensation. It drives the actual joint positions and velocities towards the desired trajectory.

**Question 4:** If the dynamic model used in computed torque control is inaccurate, what is the likely consequence?
**Answer:** An inaccurate model will lead to imperfect cancellation of the nonlinear dynamics. This will result in tracking errors, where the robot's actual motion deviates from the desired trajectory. In severe cases, it could even lead to instability.

**Question 5:** Can computed torque control be used to follow a trajectory defined in Cartesian space? Explain.
**Answer:** Yes, but indirectly. A Cartesian-space trajectory must first be converted into a joint-space trajectory using inverse kinematics. This joint-space trajectory (positions, velocities, and accelerations) is then used as input for the computed torque controller.

**Alignment with Course Outcomes:**

*   **CO4 (Knowledge Level: K4, K6):** Questions 1, 2, and 4 directly assess understanding of the dynamic model and control strategy.
*   **CO3 (Knowledge Level: K4, K5):** Question 5 tests the ability to connect trajectory planning in different spaces with control.
*   **CO2 (Knowledge Level: K3):** Question 5 implicitly checks the understanding of inverse kinematics.

## 8. Important Points to Remember

*   **Model is Key:** Computed torque control's effectiveness hinges on the accuracy of the robot's dynamic model.
*   **Cancellation:** The core principle is to "cancel out" the nonlinearities of the robot's dynamics.
*   **Feedforward + Feedback:** It combines a feedforward component (based on the model and desired trajectory) with a feedback component (PD control for error correction).
*   **Joint-Space Focus:** Primarily operates in joint space, requiring conversion from task-space trajectories via inverse kinematics.
*   **Computational Load:** Real-time computation of dynamics can be demanding.
*   **Robustness:** Sensitive to uncertainties; robust or adaptive versions are often needed in practice.
*   **CO Alignment:** Directly supports CO4 (Controller Design) and CO3 (Trajectory Following), building upon CO2 (Kinematics).

---
These notes provide a comprehensive overview of Computed Torque Control, covering its theoretical basis, implementation, advantages, disadvantages, and practical considerations, aligned with the specified course outcomes and textbook references.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
