---
title: "Legged Mobile Robots- Leg configurations and stability"
subject: "MOBILE ROBOTICS"
module: "Module 1: Introduction"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf48044640a0"
status: "completed"
scrapedAt: "2026-05-20T18:15:02.453Z"
---
# Mobile Robotics Study Notes

---

## Module 1: Introduction

### Topic: Legged Mobile Robots - Leg Configurations and Stability

---

### 1. Introduction to Legged Mobile Robots (CO1: K2)

Legged locomotion is a method of mobile robot movement that mimics biological locomotion, using legs to interact with the environment. This offers significant advantages over other locomotion methods like wheels or tracks, particularly in uneven or cluttered terrain.

**Key Concepts:**

*   **Locomotion:** The act or power of moving from place to place.
*   **Mobile Robot:** A robot capable of moving freely in its environment.
*   **Legged Locomotion:** A type of locomotion where robots use articulated limbs (legs) to move.

**Advantages of Legged Locomotion:**

*   **Terrain Adaptability:** Can traverse highly uneven, discontinuous, and cluttered terrains (stairs, rocks, obstacles) where wheeled or tracked robots fail.
*   **Maneuverability:** Can step over obstacles, climb, and adapt posture to maintain balance.
*   **Discrete Contact:** Legs can be lifted and placed at specific points, allowing for precise foot placement.

**Disadvantages of Legged Locomotion:**

*   **Complexity:** Mechanically and computationally complex due to the many degrees of freedom (DOF) and the need for sophisticated control.
*   **Energy Consumption:** Generally less energy-efficient than wheeled robots for smooth terrain.
*   **Speed:** Often slower than wheeled robots on flat surfaces.
*   **Stability Challenges:** Maintaining balance is a continuous and critical task.

**Textbook References:**
*   **Siegwart & Nourbakhsh (2011):** Discusses various locomotion paradigms, including legged robots, highlighting their pros and cons for different applications.
*   **Corke (2011):** Introduces fundamental concepts of robotics, which are essential for understanding the mechanics and control of legged robots.

---

### 2. Leg Configurations (CO1: K2)

The configuration of a legged robot refers to the number of legs it has and how they are arranged. The number of legs significantly impacts its stability and complexity.

**Key Concepts:**

*   **Degrees of Freedom (DOF):** The number of independent parameters that define the configuration of a robot system. Each joint in a leg typically contributes one or more DOFs.
*   **Kinematic Chain:** A series of rigid bodies (links) connected by joints.
*   **Stance Phase:** The period when a leg is in contact with the ground.
*   **Swing Phase:** The period when a leg is lifted off the ground.

**Common Leg Configurations:**

**a) Bipedal Robots (2 Legs):**

*   **Characteristics:** Mimics human locomotion.
*   **Pros:** Highly agile, can navigate tight spaces, potentially very efficient.
*   **Cons:** Inherently unstable, requires sophisticated dynamic balance control.
*   **Examples:** Honda ASIMO, Boston Dynamics Atlas.
*   **Number of Legs:** 2

**b) Quadrupedal Robots (4 Legs):**

*   **Characteristics:** Mimics animal locomotion (dogs, horses).
*   **Pros:** Good balance, can achieve static stability, agile and capable of traversing rough terrain.
*   **Cons:** More complex than bipeds in terms of actuation and control, though generally more stable.
*   **Examples:** Boston Dynamics Spot, BigDog.
*   **Number of Legs:** 4

**c) Hexapedal Robots (6 Legs):**

*   **Characteristics:** Mimics insect locomotion.
*   **Pros:** High static stability; at any given time, at least three legs can be on the ground, forming a stable triangular base of support. This makes them inherently stable even when stationary.
*   **Cons:** Significant mechanical complexity and higher power consumption.
*   **Examples:** Many experimental robots for research and exploration.
*   **Number of Legs:** 6

**d) Multi-legged Robots (8+ Legs):**

*   **Characteristics:** Mimics arachnids or more complex life forms.
*   **Pros:** Even greater static stability.
*   **Cons:** Extreme mechanical complexity and control challenges.

**Leg Joint Configurations:**

Legs are typically composed of multiple joints, allowing for articulation in different directions. Common joint arrangements include:

*   **Hip Joints:** Usually provide 2-3 DOFs (e.g., flexion/extension, abduction/adduction, rotation).
*   **Knee Joint:** Typically 1 DOF (flexion/extension).
*   **Ankle/Foot Joints:** Can provide 1-3 DOFs, allowing for adjustments in foot placement and orientation.

A common leg configuration for a quadruped is a 3-DOF leg (hip abduction/adduction, hip flexion/extension, knee flexion/extension).

**Textbook References:**
*   **Siegwart & Nourbakhsh (2011):** Provides detailed descriptions of different robot locomotion types and their mechanical implementations, including various leg configurations.
*   **Corke (2011):** Explains robot kinematics, which is fundamental to understanding how leg joints determine the robot's end-effector (foot) position.

---

### 3. Stability of Legged Robots (CO1: K2)

Stability is paramount for legged robots. It refers to the robot's ability to maintain its equilibrium and avoid tipping over. This is achieved through careful leg placement and dynamic control.

**Key Concepts:**

*   **Center of Mass (CoM):** The average location of the mass of the robot.
*   **Support Polygon (or Base of Support - BoS):** The convex hull formed by the points of contact of the legs with the ground.
*   **Static Stability:** The ability to remain stable without any motion. A robot is statically stable if its CoM is within its support polygon.
*   **Dynamic Stability:** The ability to remain stable while in motion. This involves actively controlling the robot's dynamics to counteract disturbances.
*   **Zero Moment Point (ZMP):** A concept introduced by Mori to define a stable walking pattern. The ZMP is the point on the ground where the total moment of the robot's inertia forces is zero. If the ZMP is kept within the support polygon, the robot will not fall.
*   **Foot Placement:** The strategic placement of feet on the ground to maintain stability.
*   **Gait:** The pattern of leg movements during locomotion.

**Types of Stability:**

*   **Static Stability:**
    *   Achieved when the robot can remain stable even when stationary.
    *   Requires the CoM to be vertically above the support polygon.
    *   Hexapods and multipeds are typically statically stable.
    *   Quadrupeds can be statically stable if at least three legs are in contact with the ground.
*   **Dynamic Stability:**
    *   Crucial for bipeds and during dynamic maneuvers for bipeds and quadrupeds.
    *   Involves actively controlling the robot's momentum and forces to stay upright.
    *   Requires continuous adjustment of leg positions and forces.

**Factors Affecting Stability:**

*   **Number of Legs:** More legs generally lead to greater static stability.
*   **Foot Placement:** Wider stance and strategic placement of feet increase the support polygon.
*   **Height of CoM:** A lower CoM generally increases stability.
*   **Gait:** Certain gaits are more stable than others.
*   **Ground Properties:** Slippery or uneven ground can reduce stability.
*   **External Disturbances:** Wind, uneven terrain, or impacts can destabilize the robot.

**Stability Control Strategies:**

*   **Maintaining CoM within BoS:** For static stability, constantly monitor and adjust leg positions to keep the projection of the CoM within the support polygon.
*   **Zero Moment Point (ZMP) Control:**
    *   A widely used method for dynamic stability, especially in bipedal locomotion.
    *   The robot's control system aims to keep the ZMP within the support polygon by adjusting foot placements and body posture.
    *   **La Valle (2009)** might discuss ZMP in the context of motion planning and stability.
*   **Body Posture Control:** Adjusting the robot's body lean and orientation to shift the CoM and maintain balance.
*   **Force Control:** Actively controlling the forces exerted by the legs on the ground.

**Example (Quadrupedal Stability):**

Consider a quadrupedal robot with four legs.
*   If all four legs are on the ground, the support polygon is formed by the points of contact of these four legs. The robot is statically stable as long as its CoM projection is within this polygon.
*   When the robot walks, it lifts some legs. During a transition where three legs are on the ground, the support polygon is still defined by these three legs, forming a triangle.
*   If only two legs are in contact, the robot is dynamically unstable and relies on active control to maintain balance.

**Important Points to Remember:**

*   Stability is a trade-off between agility and robustness.
*   The support polygon is the key geometric concept for static stability.
*   Dynamic stability requires active control of forces and moments.
*   ZMP is a critical concept for dynamic stability analysis and control.

**Textbook References:**
*   **Siegwart & Nourbakhsh (2011):** Dedicates sections to locomotion and stability, explaining concepts like static and dynamic stability, CoM, and support polygons.
*   **Tzafestas (2011):** Likely delves into the control aspects of mobile robots, including methods for maintaining stability in legged systems.
*   **La Valle (2009):** May discuss stability in the context of path planning and motion generation, potentially including ZMP or related concepts for ensuring feasible trajectories.

---

### 4. Kinematics of Legged Robots (CO2: K4)

Understanding the kinematics of legged robots is crucial for controlling the position and orientation of their feet. This involves forward and inverse kinematics.

**Key Concepts:**

*   **Forward Kinematics:** Calculating the position and orientation of the robot's end-effector (foot) given the joint angles.
*   **Inverse Kinematics:** Calculating the required joint angles to achieve a desired position and orientation of the end-effector.
*   **Joint Space:** The space of all possible joint configurations.
*   **Task Space (or Operational Space):** The space of all possible end-effector positions and orientations.
*   **Denavit-Hartenberg (DH) Parameters:** A standard method for systematically describing the kinematic structure of a robot arm.

**Kinematic Model of a Single Leg:**

Let's consider a simplified 3-DOF leg:
*   **Joint 1 (Hip Abduction/Adduction):** Rotation around the vertical axis of the hip.
*   **Joint 2 (Hip Flexion/Extension):** Rotation around the lateral axis of the hip.
*   **Joint 3 (Knee Flexion/Extension):** Rotation around the lateral axis of the knee.

**Forward Kinematics:**

Using DH parameters or other methods, we can define the transformation from one link to the next. For a leg with links $L_1$ (thigh) and $L_2$ (shin), and joint angles $\theta_1, \theta_2, \theta_3$:

The position of the foot ($P_f$) can be calculated as a function of the joint angles:
$P_f = f(\theta_1, \theta_2, \theta_3)$

This involves a series of homogeneous transformation matrices:
$T_{0,1} = \text{DH}(a_1, \alpha_1, d_1, \theta_1)$ (Hip Abduction)
$T_{1,2} = \text{DH}(a_2, \alpha_2, d_2, \theta_2)$ (Hip Flexion)
$T_{2,3} = \text{DH}(a_3, \alpha_3, d_3, \theta_3)$ (Knee Flexion)

$T_{0,3} = T_{0,1} T_{1,2} T_{2,3}$

The position of the foot in the robot's base frame ($p_{base}$) is then derived from the last column of $T_{0,3}$ (assuming the last link represents the foot placement).

**Inverse Kinematics:**

This is often more challenging. For a 3-DOF leg, analytical solutions are usually feasible using geometry or trigonometry.

Given a desired foot position $(x, y, z)$ in the leg's coordinate frame:

1.  **Solve for Knee Joint ($\theta_3$):**
    The knee angle is typically determined by the distance from the knee joint to the foot. Using the law of cosines on the triangle formed by the knee joint, the foot, and the line connecting the knee to the hip.
    $L_2^2 = \text{distance}(hip\_knee, foot)^2 - L_1^2$ (simplified)

2.  **Solve for Hip Joints ($\theta_1, \theta_2$):**
    Once the knee angle is known, the problem reduces to positioning a 2-DOF planar arm (hip abduction and flexion) to reach a point in a plane. This can be solved using trigonometric functions (atan2).

**Example:**

Imagine a quadrupedal robot. To move its front-right leg to touch a specific point on the ground, we need to compute the required joint angles for that leg.
*   **Desired Foot Position:** $(x_{target}, y_{target}, z_{target})$ in the robot's base frame.
*   **Coordinate Transformation:** First, transform the desired position into the leg's coordinate frame.
*   **Inverse Kinematics Calculation:** Apply inverse kinematics to find $(\theta_1, \theta_2, \theta_3)$ for that leg.

**Textbook References:**
*   **Corke (2011):** Provides a comprehensive treatment of robot kinematics, including DH parameterization and methods for solving forward and inverse kinematics, often with MATLAB examples. This is a primary resource for understanding CO2.
*   **Siegwart & Nourbakhsh (2011):** May touch upon the kinematic challenges of legged robots in the context of their movement capabilities.

---

### 5. Dynamics of Legged Robots (CO3: K4)

Understanding the dynamics of legged robots involves analyzing the forces and torques required to move them and maintain stability.

**Key Concepts:**

*   **Rigid Body Dynamics:** Modeling the motion of each leg link as a rigid body.
*   **Lagrangian Mechanics:** A powerful method for deriving the equations of motion.
*   **Newton-Euler Method:** Another common approach for deriving equations of motion.
*   **Inertia Matrix:** Represents the inertial properties of the robot links.
*   **Coriolis and Centrifugal Forces:** Forces that arise due to the acceleration of rotating masses.
*   **Gravity Forces:** Forces due to gravity acting on each link.
*   **Joint Torques/Forces:** The forces/torques applied by the actuators at the joints.
*   **Contact Forces:** Forces exerted by the ground on the feet.

**Equations of Motion:**

The general form of the equations of motion for a manipulator (like a leg) can be expressed as:

$M(q) \ddot{q} + C(q, \dot{q}) \dot{q} + G(q) = \tau + J^T F_{contact}$

Where:
*   $q$: Vector of joint angles.
*   $\dot{q}, \ddot{q}$: Vector of joint velocities and accelerations.
*   $M(q)$: The symmetric positive-definite mass (or inertia) matrix.
*   $C(q, \dot{q})$: The matrix representing Coriolis and centrifugal forces.
*   $G(q)$: The vector of gravity forces.
*   $\tau$: The vector of joint torques/forces applied by actuators.
*   $J$: The Jacobian matrix of the end-effector (foot).
*   $F_{contact}$: The force exerted by the ground on the foot.
*   $J^T F_{contact}$: The generalized forces/torques corresponding to contact forces.

**Forward Dynamics:**

Given the joint positions ($q$), velocities ($\dot{q}$), and applied torques ($\tau$), the forward dynamics problem is to calculate the joint accelerations ($\ddot{q}$). This involves solving the equation of motion for $\ddot{q}$:

$\ddot{q} = M(q)^{-1} (\tau - C(q, \dot{q}) \dot{q} - G(q) - J^T F_{contact})$

**Inverse Dynamics:**

Given the desired joint accelerations ($\ddot{q}$), positions ($q$), and velocities ($\dot{q}$), the inverse dynamics problem is to calculate the required joint torques ($\tau$) to achieve this motion. This is essential for control.

$\tau = M(q) \ddot{q}_{desired} + C(q, \dot{q}) \dot{q} + G(q) - J^T F_{contact}$

**Modeling Contact Forces:**

*   **Constraint-Based Approach:** Contact forces are treated as constraints that prevent penetration of the ground. These forces are often non-linear and depend on the state of motion and the ground.
*   **Force Closure:** The ability to exert arbitrary forces on the environment within a certain region.
*   **Friction:** Modeling friction at the contact point is crucial for stability and locomotion.

**Example:**

To make a leg lift off the ground, the robot needs to apply specific torques at the hip and knee joints ($\tau$) such that the resulting motion ($\ddot{q}$) lifts the foot, and the contact forces become zero. This requires solving the inverse dynamics problem.

**Textbook References:**
*   **Corke (2011):** Covers robot dynamics, including deriving equations of motion using different methods and discussing inverse dynamics for control. This is a key resource for CO3.
*   **Tzafestas (2011):** Likely offers in-depth coverage of robot dynamics and control strategies, which are directly applicable to legged robots.
*   **Siegwart & Nourbakhsh (2011):** May provide a more conceptual overview of dynamic stability and the challenges in controlling dynamic legged robots.

---

### 6. Practice Questions and Exercises

**Question 1 (CO1, CO2):**

Explain the primary advantage of a hexapedal robot over a bipedal robot in terms of stability. If a quadrupedal robot has a 3-DOF leg (hip abduction/adduction, hip flexion/extension, knee flexion/extension), what is the total number of DOFs for the legs of the robot?

**Answer 1:**

*   **Stability Advantage:** A hexapedal robot offers higher *static stability* because it can always maintain contact with at least three legs, forming a stable triangular base of support. This means it can remain stable even when stationary or moving slowly without active dynamic control. A bipedal robot, with only two legs, is inherently dynamically unstable and requires continuous active control to maintain balance.
*   **Total Leg DOFs:** With 4 legs, each having 3 DOFs, the total number of DOFs for the legs is $4 \text{ legs} \times 3 \text{ DOFs/leg} = 12 \text{ DOFs}$.

**Question 2 (CO2):**

Consider a simple 2-DOF planar leg with thigh length $L_1$ and shin length $L_2$. The hip joint is at the origin $(0,0)$. The first joint ($\theta_1$) is the hip flexion/extension, and the second joint ($\theta_2$) is the knee flexion/extension.
a) Write the forward kinematics equations for the foot position $(x, y)$ in terms of $\theta_1$ and $\theta_2$.
b) If the desired foot position is $(x_{target}, y_{target})$, outline the steps to solve for the inverse kinematics ($\theta_1, \theta_2$).

**Answer 2:**

a) **Forward Kinematics:**
The position of the knee joint $(x_k, y_k)$ is:
$x_k = L_1 \cos(\theta_1)$
$y_k = L_1 \sin(\theta_1)$

The position of the foot $(x, y)$ relative to the knee joint is:
$x_{foot\_rel\_knee} = L_2 \cos(\theta_1 + \theta_2)$
$y_{foot\_rel\_knee} = L_2 \sin(\theta_1 + \theta_2)$

The absolute foot position $(x, y)$ is:
$x = x_k + x_{foot\_rel\_knee} = L_1 \cos(\theta_1) + L_2 \cos(\theta_1 + \theta_2)$
$y = y_k + y_{foot\_rel\_knee} = L_1 \sin(\theta_1) + L_2 \sin(\theta_1 + \theta_2)$

b) **Inverse Kinematics Steps:**
1.  **Geometric Approach:**
    *   Calculate the distance $d$ from the hip to the target foot position: $d = \sqrt{x_{target}^2 + y_{target}^2}$.
    *   Use the law of cosines on the triangle formed by the hip, knee, and foot: $d^2 = L_1^2 + L_2^2 - 2 L_1 L_2 \cos(\pi - \theta_2)$.
    *   Solve for $\theta_2$: $\cos(\pi - \theta_2) = \frac{d^2 - L_1^2 - L_2^2}{2 L_1 L_2}$. Since $\cos(\pi - \theta_2) = -\cos(\theta_2)$, then $\cos(\theta_2) = \frac{L_1^2 + L_2^2 - d^2}{2 L_1 L_2}$. Thus, $\theta_2 = \operatorname{acos}\left(\frac{L_1^2 + L_2^2 - d^2}{2 L_1 L_2}\right)$. (Note: There might be two solutions for $\theta_2$, a "forward reach" and "backward reach").
    *   Once $\theta_2$ is known, the angle to the knee joint from the hip can be found using trigonometry (e.g., `atan2` function). Let $\phi$ be the angle of the line from the hip to the foot: $\phi = \operatorname{atan2}(y_{target}, x_{target})$.
    *   The angle $\theta_1$ can then be found: $\theta_1 = \phi - \alpha$, where $\alpha$ is the angle between the line from hip to foot, and the line from hip to knee. This $\alpha$ can be found using the law of cosines: $\cos(\alpha) = \frac{L_1^2 + d^2 - L_2^2}{2 L_1 d}$. So, $\alpha = \operatorname{acos}\left(\frac{L_1^2 + d^2 - L_2^2}{2 L_1 d}\right)$.
    *   Therefore, $\theta_1 = \operatorname{atan2}(y_{target}, x_{target}) - \operatorname{acos}\left(\frac{L_1^2 + d^2 - L_2^2}{2 L_1 d}\right)$.

**Question 3 (CO3):**

A single leg of a robot can be modeled with a mass matrix $M$, Coriolis/centrifugal terms $C$, and gravity terms $G$. If the desired joint accelerations are $\ddot{q}_{desired}$ and no contact forces are present ($J^T F_{contact} = 0$), what are the joint torques $\tau$ required to achieve this motion according to inverse dynamics?

**Answer 3:**

According to inverse dynamics, the required joint torques $\tau$ are given by:
$\tau = M(q) \ddot{q}_{desired} + C(q, \dot{q}) \dot{q} + G(q)$

This equation shows that to achieve a specific acceleration, the robot's control system must calculate and apply torques that overcome the inertia of the links, the forces due to rotation, and the force of gravity.

---

### 7. Important Points to Remember

*   **Legged robots offer superior mobility in unstructured environments.**
*   **Number of legs directly impacts stability:** more legs generally mean more static stability.
*   **Stability is maintained by keeping the Center of Mass (CoM) above the Support Polygon.**
*   **For dynamic stability, the Zero Moment Point (ZMP) is a key concept.**
*   **Forward Kinematics:** Joint angles $\rightarrow$ Foot position.
*   **Inverse Kinematics:** Desired Foot position $\rightarrow$ Joint angles.
*   **Forward Dynamics:** Joint torques $\rightarrow$ Joint accelerations.
*   **Inverse Dynamics:** Desired joint accelerations $\rightarrow$ Required Joint torques.
*   **Contact forces and friction are critical for locomotion and stability, and their modeling is complex.**
*   **Control of legged robots is inherently challenging due to their high degrees of freedom and dynamic nature.**

---

### 8. Alignment with Course Outcomes

*   **CO1: Familiarise types of locomotion for mobile Robots (Knowledge Level: K2)**
    *   Covered in Section 1 (Introduction to Legged Mobile Robots) and Section 2 (Leg Configurations).
*   **CO2: Derive the kinematic model of mobile robots (Knowledge Level: K4)**
    *   Covered in Section 4 (Kinematics of Legged Robots), detailing forward and inverse kinematics with examples of calculation.
*   **CO3: Derive dynamic model of mobile robots (Knowledge Level: K4)**
    *   Covered in Section 5 (Dynamics of Legged Robots), explaining equations of motion, forward/inverse dynamics, and the role of forces.
*   **CO4: Choose appropriate Sensors for mobile robot navigation (Knowledge Level: K3)**
    *   *Note: While this topic is specific to "Leg Configurations and Stability," a comprehensive study of mobile robotics would later cover sensors. For legged robots, sensors like IMUs (Inertial Measurement Units), encoders (for joint angles), force/torque sensors (at joints or feet), and vision systems are crucial for stability and navigation.*
*   **CO5: Perform navigation and path planning mobile robots (Knowledge Level: K3)**
    *   *Note: Similar to CO4, path planning is a subsequent topic. Stability (Section 3) is a prerequisite for planning any motion or path for a legged robot.*
*   **CO6: Control the mobile robots to follow different paths (Knowledge Level: K3)**
    *   *Note: Understanding dynamics (Section 5) is foundational for developing control strategies to follow paths. Stability control (Section 3) is integral to successful path following for legged robots.*

---

This concludes the study notes for Module 1, Topic: Legged Mobile Robots - Leg Configurations and Stability. Remember to consult the provided textbooks for deeper insights and detailed derivations.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
