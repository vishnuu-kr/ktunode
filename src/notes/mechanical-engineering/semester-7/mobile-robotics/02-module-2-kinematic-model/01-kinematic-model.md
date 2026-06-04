---
title: "Kinematic model"
subject: "MOBILE ROBOTICS"
module: "Module 2: Kinematic model"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf48044640a5"
status: "completed"
scrapedAt: "2026-05-20T18:15:05.289Z"
---
# Mobile Robotics: Module 2 - Kinematic Model

This module introduces the fundamental concept of kinematic modeling for mobile robots. Understanding kinematics allows us to describe the motion of a robot without considering the forces that cause it. This is crucial for predicting robot behavior, planning trajectories, and controlling robot movement.

## Module Objectives:

Upon successful completion of this module, students will be able to:

*   Understand the basic principles of robot kinematics.
*   Derive and represent kinematic models for various mobile robot locomotion types.
*   Analyze and describe robot motion using kinematic equations.

## Course Outcomes Addressed in this Module:

*   **CO1: Familiarise types of locomotion for mobile Robots (Knowledge Level: K2)**
*   **CO2: Derive the kinematic model of mobile robots (Knowledge Level: K4)**

---

## 1. Introduction to Kinematics in Mobile Robotics

**Key Concept:** Kinematics is the study of motion without regard to the forces that cause it. In mobile robotics, it deals with the relationships between the robot's configuration (position and orientation) and its velocity.

**Why is Kinematics Important?**

*   **Predicting Robot Position:** Knowing the robot's initial state and how its actuators are controlled, kinematics allows us to predict its future positions and orientations.
*   **Trajectory Planning:** Kinematic models are essential for generating smooth and achievable paths for the robot to follow.
*   **Controller Design:** Many control strategies for mobile robots are based on their kinematic properties.
*   **Understanding Limitations:** Kinematics reveals the inherent motion capabilities and constraints of a robot.

**Textbook Reference:** Siegwart, Nourbakhsh (2011), Chapter 3: Kinematics. Corke (2011), Chapter 2: Robot Kinematics.

---

## 2. Representing Robot State and Configuration

**Key Concept:** The **configuration** of a robot describes its position and orientation in space. For a mobile robot operating in a 2D plane, this is typically represented by its $(x, y)$ coordinates and its orientation (angle) $\theta$.

**State Representation:**

*   A robot's state at any given time $t$ can be represented by a vector:
    $\mathbf{q}(t) = [x(t), y(t), \theta(t)]^T$

    *   $x(t)$: Position along the x-axis
    *   $y(t)$: Position along the y-axis
    *   $\theta(t)$: Orientation (heading angle) with respect to the x-axis (usually measured counter-clockwise).

**Frame of Reference:**

*   **World Frame (or Global Frame):** A fixed, stationary coordinate system used to describe the robot's position in its environment.
*   **Robot Frame (or Body Frame):** A coordinate system attached to the robot, typically centered at its base or a reference point. This frame moves with the robot.

**Coordinate Transformations:**

Understanding how to transform coordinates between frames is fundamental. For a point $\mathbf{p}_r$ in the robot frame, its representation in the world frame $\mathbf{p}_w$ can be obtained using rotation and translation:

$\mathbf{p}_w = R(\theta) \mathbf{p}_r + \mathbf{t}$

where:
*   $R(\theta) = \begin{bmatrix} \cos(\theta) & -\sin(\theta) \\ \sin(\theta) & \cos(\theta) \end{bmatrix}$ is the rotation matrix.
*   $\mathbf{t} = [x, y]^T$ is the translation vector representing the robot's position in the world frame.

**Example:** If a robot is at $(x, y) = (2, 3)$ with an orientation $\theta = \pi/4$ (45 degrees), and a point on its body is at $\mathbf{p}_r = [0.5, 0.1]^T$ in the robot frame, its position in the world frame is:

$\mathbf{p}_w = \begin{bmatrix} \cos(\pi/4) & -\sin(\pi/4) \\ \sin(\pi/4) & \cos(\pi/4) \end{bmatrix} \begin{bmatrix} 0.5 \\ 0.1 \end{bmatrix} + \begin{bmatrix} 2 \\ 3 \end{bmatrix}$

$\mathbf{p}_w = \begin{bmatrix} 0.707 & -0.707 \\ 0.707 & 0.707 \end{bmatrix} \begin{bmatrix} 0.5 \\ 0.1 \end{bmatrix} + \begin{bmatrix} 2 \\ 3 \end{bmatrix}$

$\mathbf{p}_w = \begin{bmatrix} 0.3535 - 0.0707 \\ 0.3535 + 0.0707 \end{bmatrix} + \begin{bmatrix} 2 \\ 3 \end{bmatrix} = \begin{bmatrix} 0.2828 \\ 0.4242 \end{bmatrix} + \begin{bmatrix} 2 \\ 3 \end{bmatrix} = \begin{bmatrix} 2.2828 \\ 3.4242 \end{bmatrix}^T$

**Important Point:** The choice of the robot frame's origin is arbitrary but must be consistent. Often, it's at the center of the robot's base.

---

## 3. Velocity Kinematics

**Key Concept:** Velocity kinematics relates the robot's configuration velocity (how $x, y, \theta$ change over time) to the velocities of its actuators (e.g., wheel speeds).

**General Velocity Representation:**

The rate of change of the robot's configuration is its velocity vector:

$\dot{\mathbf{q}}(t) = [\dot{x}(t), \dot{y}(t), \dot{\theta}(t)]^T$

*   $\dot{x}(t)$: Linear velocity along the x-axis.
*   $\dot{y}(t)$: Linear velocity along the y-axis.
*   $\dot{\theta}(t)$: Angular velocity (rate of change of orientation).

**Kinematic Model as a Matrix Equation:**

The general relationship between the robot's configuration velocity and its control inputs (often wheel velocities) can be expressed as:

$\dot{\mathbf{q}} = \mathbf{J}(\mathbf{q}) \mathbf{u}$

where:
*   $\dot{\mathbf{q}}$ is the configuration velocity vector.
*   $\mathbf{J}(\mathbf{q})$ is the **Jacobian matrix**, which depends on the robot's current configuration $\mathbf{q}$. It maps actuator velocities to configuration velocities.
*   $\mathbf{u}$ is the vector of actuator velocities.

**Textbook Reference:** Siegwart, Nourbakhsh (2011), Chapter 3.2: Velocity Kinematics. Corke (2011), Chapter 2.2: Velocity Kinematics.

---

## 4. Types of Mobile Robot Locomotion and their Kinematic Models

This section covers **CO1** and lays the groundwork for **CO2**.

Mobile robots exhibit diverse locomotion strategies, each with unique kinematic models and constraints.

### 4.1. Differential Drive Robots

**Description:** These robots have two independently driven wheels placed side-by-side. A third caster wheel (or skid) provides stability. The robot moves by controlling the speeds of the two drive wheels.

**Characteristics:**
*   Can move forward/backward.
*   Can rotate in place (by driving wheels in opposite directions).
*   Can turn by driving wheels at different speeds.
*   Possesses **non-holonomic constraints** (cannot move directly sideways).

**Kinematic Model:**

Consider a robot with its reference point (e.g., center of the rear axle) at $(x, y)$ and orientation $\theta$. Let the distance between the wheels be $2b$. Let $v_l$ be the forward velocity of the left wheel and $v_r$ be the forward velocity of the right wheel.

The forward velocity of the robot's center ($v$) and its angular velocity ($\dot{\theta}$) are related to the wheel velocities:

$v = \frac{v_l + v_r}{2}$
$\dot{\theta} = \frac{v_r - v_l}{2b}$

The velocity of the robot's reference point in the world frame is then:

$\dot{x} = v \cos(\theta) = \frac{v_l + v_r}{2} \cos(\theta)$
$\dot{y} = v \sin(\theta) = \frac{v_l + v_r}{2} \sin(\theta)$
$\dot{\theta} = \frac{v_r - v_l}{2b}$

**Jacobian for Differential Drive:**

The state velocity $\dot{\mathbf{q}} = [\dot{x}, \dot{y}, \dot{\theta}]^T$ can be related to the wheel velocities $\mathbf{u} = [v_l, v_r]^T$ by the Jacobian matrix:

$\dot{\mathbf{q}} = \mathbf{J}(\mathbf{q}) \mathbf{u}$

$\begin{bmatrix} \dot{x} \\ \dot{y} \\ \dot{\theta} \end{bmatrix} = \begin{bmatrix} \frac{1}{2}\cos(\theta) & \frac{1}{2}\cos(\theta) \\ \frac{1}{2}\sin(\theta) & \frac{1}{2}\sin(\theta) \\ -\frac{1}{2b} & \frac{1}{2b} \end{bmatrix} \begin{bmatrix} v_l \\ v_r \end{bmatrix}$

**Non-holonomic Constraint:**
The first two equations imply:
$\dot{y} = \tan(\theta) \dot{x}$  (if $\cos(\theta) \neq 0$)
This means the robot can only move in the direction of its heading. It cannot move sideways. This constraint is integrated into the differential equations of motion.

**Textbook Reference:** Siegwart, Nourbakhsh (2011), Chapter 3.3.1: Differential Drive. Corke (2011), Chapter 2.3.1: Differential Drive.

**Example:** If $v_l = 0.1 \text{ m/s}$ and $v_r = 0.2 \text{ m/s}$, and the robot is at $(x, y) = (1, 1)$ with $\theta = 0$, then:
$v = (0.1 + 0.2)/2 = 0.15 \text{ m/s}$
$\dot{\theta} = (0.2 - 0.1)/(2b)$ (assuming $b=0.1$, $\dot{\theta} = 0.5 \text{ rad/s}$)
$\dot{x} = 0.15 \cos(0) = 0.15 \text{ m/s}$
$\dot{y} = 0.15 \sin(0) = 0 \text{ m/s}$

The robot is moving forward at 0.15 m/s and turning.

---

### 4.2. Tricycle Drive Robots

**Description:** These robots have one steerable wheel at the front and two drive wheels at the rear (or vice-versa). The steering wheel controls the direction of travel, and the drive wheels provide forward/backward motion.

**Characteristics:**
*   Similar to a car's movement: can move forward/backward and turn.
*   Possesses **non-holonomic constraints** (cannot move directly sideways).

**Kinematic Model:**

Let the robot's reference point be at $(x, y)$ with orientation $\theta$. Let the steerable wheel be at the front, and let its steering angle be $\phi$. Let the distance between the rear wheels be $2b$, and the distance from the rear axle to the steering wheel be $L$ (wheelbase). Let the forward velocity of the robot be $v$.

The robot's movement is constrained by the direction of the steerable wheel. The robot instantaneously rotates around a point called the **Instantaneous Center of Curvature (ICC)**. The ICC lies on the line extending from the steering wheel's direction.

If the steering angle is $\phi$ and the distance to the ICC is $R$, then:
$v = R \dot{\theta}$

The relationship between $v$, $\phi$, and $L$ is:
$v = L \cos(\phi) \dot{\theta}$ (This is a simplified view; a more accurate approach involves the ICC)

A more general formulation relating forward velocity $v$ and steering angle $\phi$ to the robot's configuration velocity:

$\dot{x} = v \cos(\theta)$
$\dot{y} = v \sin(\theta)$
$\dot{\theta} = \frac{v}{L} \tan(\phi)$

**Jacobian for Tricycle Drive:**

The state velocity $\dot{\mathbf{q}} = [\dot{x}, \dot{y}, \dot{\theta}]^T$ can be related to control inputs, say forward velocity $v$ and steering rate $\dot{\phi}$ (assuming the steering angle $\phi$ is controlled):

$\dot{\mathbf{q}} = \mathbf{J}(\mathbf{q}) \mathbf{u}$

$\begin{bmatrix} \dot{x} \\ \dot{y} \\ \dot{\theta} \end{bmatrix} = \begin{bmatrix} \cos(\theta) & 0 \\ \sin(\theta) & 0 \\ 0 & \frac{1}{L} \tan(\phi) \end{bmatrix} \begin{bmatrix} v \\ \dot{\phi} \end{bmatrix}$

**Non-holonomic Constraint:**
Similar to the differential drive, the robot cannot move sideways. The constraint is embedded in the structure of the equations.

**Textbook Reference:** Siegwart, Nourbakhsh (2011), Chapter 3.3.2: Tricycle Drive. Corke (2011), Chapter 2.3.2: Tricycle Drive.

---

### 4.3. Omni-directional Robots (e.g., Mecanum Wheels)

**Description:** These robots use special wheels (e.g., Mecanum wheels or omni-wheels) that allow them to move in any direction (forward, backward, sideways, and diagonally) and rotate in place without changing their orientation.

**Characteristics:**
*   **Holonomic:** Can move instantaneously in any direction. This means there are no inherent kinematic constraints on their movement in the 2D plane.
*   High maneuverability.

**Kinematic Model (Mecanum Wheels Example):**

Mecanum wheels have rollers oriented at 45 degrees to the wheel's axis. By combining the speeds of four wheels, each with a specific orientation, omni-directional movement is achieved.

Let the robot have four wheels, indexed 1, 2, 3, 4, with velocities $v_1, v_2, v_3, v_4$. The configuration velocity is $\dot{\mathbf{q}} = [\dot{x}, \dot{y}, \dot{\theta}]^T$. The relationship is linear and can be represented by a $3 \times 4$ Jacobian matrix.

Assuming a common setup with wheels at $(x_c, y_c)$ and distances $d_1, d_2, d_3, d_4$ from the center. The Jacobian $\mathbf{J}$ relates $\dot{\mathbf{q}}$ to wheel velocities $\mathbf{u} = [v_1, v_2, v_3, v_4]^T$:

$\dot{\mathbf{q}} = \mathbf{J} \mathbf{u}$

The matrix $\mathbf{J}$ depends on the wheel placement and orientation. For a standard Mecanum configuration with wheels at $(\pm w/2, \pm l/2)$:

$\mathbf{J} = \frac{1}{R} \begin{bmatrix}
\cos(\theta) & \cos(\theta) & \cos(\theta) & \cos(\theta) \\
\sin(\theta) & \sin(\theta) & \sin(\theta) & \sin(\theta) \\
- \sin(\theta) & \sin(\theta) & -\sin(\theta) & \sin(\theta)
\end{bmatrix}$  *This is a simplified representation. The actual Jacobian for Mecanum wheels is more complex and accounts for the 45-degree roller orientation.*

A more accurate representation for Mecanum wheels, where $\phi_i$ is the angle of the wheel's axis of rotation (which is 45 degrees for Mecanum rollers, but the Jacobian relates to the effective velocity component in x and y):

Let the effective speed of each wheel be $v_i$. The velocity of the robot's center is related to the wheel velocities. For an omni-directional robot, the relationship is often simplified. If the robot can achieve arbitrary linear velocities $[\dot{x}, \dot{y}]$ and angular velocity $\dot{\theta}$, its **control space** is 3-dimensional.

For Mecanum wheels, the relation between robot's linear and angular velocities $[\dot{x}, \dot{y}, \dot{\theta}]$ and the velocities of the four wheels $[v_1, v_2, v_3, v_4]$ is typically represented by:

$\begin{bmatrix} \dot{x} \\ \dot{y} \\ \dot{\theta} \end{bmatrix} = \frac{1}{R} \begin{bmatrix}
\cos(\theta) & \cos(\theta) & \cos(\theta) & \cos(\theta) \\
\sin(\theta) & \sin(\theta) & \sin(\theta) & \sin(\theta) \\
- \sin(\theta) & \sin(\theta) & -\sin(\theta) & \sin(\theta)
\end{bmatrix} \begin{bmatrix} v_1 \\ v_2 \\ v_3 \\ v_4 \end{bmatrix}$  *This Jacobian is for a specific configuration and assumes specific wheel assignments and roller orientations. The $- \sin(\theta)$ in the third row comes from the Mecanum wheel's roller direction.*

**Textbook Reference:** Siegwart, Nourbakhsh (2011), Chapter 3.3.3: Omni-directional Robots. Corke (2011) may cover this in more general terms or specific examples of holonomic robots.

---

### 4.4. Wheeled Robot with Slip (e.g., Skids)

**Description:** Robots that use skids or wheels that can slip. This can introduce complex kinematic behaviors.

**Characteristics:**
*   Can exhibit sideways slip, which complicates prediction.
*   Kinematic models may need to account for slip angles.

**Kinematic Model:**
Modeling slip requires more advanced techniques, often involving slip velocities. For simpler models, one might assume no slip unless specific conditions are met. The core equations remain similar but with added parameters to model the slip.

**Textbook Reference:** Probabilistic Robotics (Thrun, Burgard, Fox, 2005) often discusses robot models that account for uncertainty, including potential slip.

---

### 4.5. Legged Robots (Brief Mention)

**Description:** Robots that use legs for locomotion (e.g., bipeds, quadrupeds).

**Characteristics:**
*   Highly adaptable to varied terrain.
*   Complex kinematics and dynamics due to discrete contacts and joint configurations.

**Kinematic Model:**
Legged robot kinematics involves inverse kinematics to determine joint angles for foot placement and forward kinematics to calculate the foot's position based on joint angles. The overall robot motion is then achieved by coordinating leg movements. This is beyond the scope of typical wheeled mobile robot kinematics but is important for completeness (**CO1**).

**Textbook Reference:** Corke (2011), Chapter 2.4: Serial Manipulators (provides foundations for kinemtic chains, applicable to legs).

---

## 5. Forward and Inverse Kinematics

**Key Concept:**
*   **Forward Kinematics:** Given the actuator velocities (e.g., wheel speeds), calculate the robot's configuration velocity $(\dot{x}, \dot{y}, \dot{\theta})$. This is usually straightforward and is what we've primarily discussed.
*   **Inverse Kinematics:** Given a desired configuration velocity $(\dot{x}_d, \dot{y}_d, \dot{\theta}_d)$, determine the required actuator velocities $(\mathbf{u}_d)$ to achieve it. This is often more challenging, especially for non-holonomic robots.

**For Differential Drive Robots:**
Given desired $\dot{x}_d, \dot{y}_d, \dot{\theta}_d$:
We need to find $v_l, v_r$.
From the velocity equations:
$v = \sqrt{\dot{x}_d^2 + \dot{y}_d^2}$ (This assumes the robot is moving in the direction of its heading. If not, this step is more complex).
$\dot{\theta}_d = \frac{v_r - v_l}{2b}$
$v_d = \frac{v_l + v_r}{2}$

If we want to achieve a specific velocity vector $[\dot{x}_d, \dot{y}_d]$, the robot must be aligned with this vector if it has non-holonomic constraints. So, $\theta = \text{atan2}(\dot{y}_d, \dot{x}_d)$. Then, $v_d = \sqrt{\dot{x}_d^2 + \dot{y}_d^2}$.

From $v_d = \frac{v_l + v_r}{2}$ and $\dot{\theta}_d = \frac{v_r - v_l}{2b}$:
$v_l + v_r = 2v_d$
$v_r - v_l = 2b \dot{\theta}_d$

Adding these equations: $2v_r = 2v_d + 2b \dot{\theta}_d \implies v_r = v_d + b \dot{\theta}_d$
Subtracting the second from the first: $2v_l = 2v_d - 2b \dot{\theta}_d \implies v_l = v_d - b \dot{\theta}_d$

**Important Point:** For non-holonomic robots, the desired velocity vector $[\dot{x}_d, \dot{y}_d]$ must be achievable, meaning the robot's current orientation $\theta$ must be aligned with the direction of motion. If not, the robot must first reorient itself.

**Textbook Reference:** Siegwart, Nourbakhsh (2011), Chapter 3.4: Inverse Kinematics. Corke (2011), Chapter 2.2: Velocity Kinematics (implicitly covers inverse relationships).

---

## 6. Coordinate Transformations and Homogeneous Transformations

**Key Concept:** Homogeneous transformations are a powerful way to represent both rotation and translation in a single matrix multiplication, simplifying complex transformations in robotics.

**Homogeneous Coordinates:**
A 2D point $(x, y)$ is represented in homogeneous coordinates as $[x, y, 1]^T$. A 3D point would be $[x, y, z, 1]^T$.

**Homogeneous Transformation Matrix:**
A transformation consisting of a rotation $R(\theta)$ and translation $\mathbf{t} = [x, y]^T$ can be represented by a $3 \times 3$ homogeneous transformation matrix $\mathbf{T}$:

$\mathbf{T} = \begin{bmatrix} R(\theta) & \mathbf{t} \\ \mathbf{0}^T & 1 \end{bmatrix} = \begin{bmatrix} \cos(\theta) & -\sin(\theta) & x \\ \sin(\theta) & \cos(\theta) & y \\ 0 & 0 & 1 \end{bmatrix}$

To transform a point $\mathbf{p}_r = [x_r, y_r]^T$ in the robot frame to the world frame $\mathbf{p}_w$:

$\mathbf{p}_w^{\text{homo}} = \mathbf{T} \mathbf{p}_r^{\text{homo}}$
$\begin{bmatrix} x_w \\ y_w \\ 1 \end{bmatrix} = \begin{bmatrix} \cos(\theta) & -\sin(\theta) & x \\ \sin(\theta) & \cos(\theta) & y \\ 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} x_r \\ y_r \\ 1 \end{bmatrix}$

This simplifies to the same equations as before:
$x_w = x_r \cos(\theta) - y_r \sin(\theta) + x$
$y_w = x_r \sin(\theta) + y_r \cos(\theta) + y$

**Textbook Reference:** Corke (2011), Chapter 2.2: Homogeneous Transformations. Siegwart, Nourbakhsh (2011) might introduce this concept within the context of coordinate frames.

---

## 7. Practice Questions and Answers

Here are some questions to test your understanding of Module 2.

**Question 1:**
A differential drive robot has wheels with radius $r=0.05$m and is driven by motors that can achieve a maximum linear velocity of $0.5$ m/s. The distance between the wheels is $2b = 0.2$m.
What is the maximum angular velocity the robot can achieve?

**Answer 1:**
The angular velocity of a differential drive robot is given by $\dot{\theta} = \frac{v_r - v_l}{2b}$.
The maximum linear velocity of a single wheel is $v_{max} = 0.5$ m/s.
To maximize angular velocity, we need to maximize $v_r$ and minimize $v_l$ (or vice-versa).
Maximum angular velocity occurs when $v_r = v_{max}$ and $v_l = -v_{max}$ (i.e., wheels rotating in opposite directions at max speed).
$\dot{\theta}_{max} = \frac{0.5 - (-0.5)}{0.2} = \frac{1.0}{0.2} = 5.0 \text{ rad/s}$.

---

**Question 2:**
A tricycle robot has a wheelbase $L = 0.3$m. It is currently moving forward at $v = 0.4$ m/s with its steering wheel at an angle $\phi = 15^\circ$.
What is its angular velocity $\dot{\theta}$?

**Answer 2:**
The kinematic relationship for a tricycle robot is $\dot{\theta} = \frac{v}{L} \tan(\phi)$.
$\dot{\theta} = \frac{0.4 \text{ m/s}}{0.3 \text{ m}} \tan(15^\circ)$
$\dot{\theta} \approx 1.333 \times 0.2679 \approx 0.357 \text{ rad/s}$.

---

**Question 3:**
Consider a differential drive robot at $(x, y) = (0, 0)$ with $\theta = 0$. The robot is commanded to move with wheel velocities $v_l = 0.1$ m/s and $v_r = 0.2$ m/s, with $2b = 0.2$m.
What is its configuration velocity $(\dot{x}, \dot{y}, \dot{\theta})$ at this instant?

**Answer 3:**
$\dot{x} = \frac{v_l + v_r}{2} \cos(\theta) = \frac{0.1 + 0.2}{2} \cos(0) = \frac{0.3}{2} \times 1 = 0.15 \text{ m/s}$
$\dot{y} = \frac{v_l + v_r}{2} \sin(\theta) = \frac{0.1 + 0.2}{2} \sin(0) = \frac{0.3}{2} \times 0 = 0 \text{ m/s}$
$\dot{\theta} = \frac{v_r - v_l}{2b} = \frac{0.2 - 0.1}{2 \times 0.2} = \frac{0.1}{0.4} = 0.25 \text{ rad/s}$

The configuration velocity is $(0.15, 0, 0.25)$ m/s and rad/s.

---

**Question 4:**
What is the primary difference in the kinematic constraints between a differential drive robot and an omni-directional robot?

**Answer 4:**
A differential drive robot is **non-holonomic**, meaning it cannot move sideways instantaneously. Its motion is constrained to be always in the direction of its heading. An omni-directional robot, on the other hand, is **holonomic** in the 2D plane, allowing it to move instantaneously in any direction (including sideways) and rotate without constraint.

---

## 8. Key Points to Remember

*   **Configuration Space:** The set of all possible states $(x, y, \theta)$ of the robot.
*   **Jacobian Matrix:** Maps actuator velocities to configuration velocities ($\dot{\mathbf{q}} = \mathbf{J}(\mathbf{q}) \mathbf{u}$).
*   **Non-holonomic vs. Holonomic:**
    *   **Non-holonomic:** Robots with constraints that limit their motion (e.g., differential drive, tricycle). They cannot achieve arbitrary velocity vectors at any given configuration.
    *   **Holonomic:** Robots without such constraints. They can achieve any velocity vector within their reachable space.
*   **Instantaneous Center of Curvature (ICC):** A key concept for understanding the motion of non-holonomic robots like the tricycle drive.
*   **Homogeneous Transformations:** A unified method for representing rotations and translations.
*   **Inverse Kinematics:** Crucial for planning and control, determining how to command actuators to achieve a desired motion.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


## 9. Further Reading and Textbooks

*   **Introduction to Autonomous Mobile Robots by R. Siegwart, I. R. Nourbakhsh (The MIT Press, 2011):** Chapters 3 (Kinematics) and 4 (Robot Motion) are particularly relevant.
*   **Robotics, Vision and Control: Fundamental Algorithms in MATLAB by Peter Corke (Springer Tracts in Advanced Robotics, 2011):** Chapter 2 provides a solid foundation in robot kinematics, including homogeneous transformations and examples.
*   **Introduction to Mobile Robot Control by Spyros G. Tzafestas (Elsevier.):** Offers detailed discussions on kinematics and dynamics for various robot types.
*   **Probabilistic Robotics. by Thrun, S., Burgard,W., and Fox, D. (MIT Press, Cambridge, MA, 2005):** While focused on uncertainty, it provides context for how kinematic models are used in real-world systems.

---

This concludes Module 2 on Kinematic Models. The next module will build upon this foundation by introducing dynamic models, which consider the forces and torques involved in robot motion.