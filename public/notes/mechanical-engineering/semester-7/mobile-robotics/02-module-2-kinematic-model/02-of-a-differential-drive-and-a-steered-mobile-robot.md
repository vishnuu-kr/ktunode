---
title: "of a differential drive and a steered mobile robot"
subject: "MOBILE ROBOTICS"
module: "Module 2: Kinematic model"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf48044640a6"
status: "completed"
scrapedAt: "2026-05-20T18:15:06.003Z"
---
# Mobile Robotics: Module 2 - Kinematic Model

## Topic: Differential Drive and Steered Mobile Robots

---

### **1. Introduction to Mobile Robot Locomotion (CO1: K2)**

Mobile robots interact with their environment by moving. The way they move, their **locomotion**, is fundamental to their operation and is determined by their mechanical design and the actuators used. Understanding different locomotion types is crucial for selecting the right robot for a given task.

**Key Concepts:**

*   **Locomotion:** The ability of a robot to move from one place to another.
*   **Degrees of Freedom (DOF):** The number of independent parameters that define the configuration of a robot. For mobile robots, this typically refers to the degrees of freedom in the plane (x, y) and orientation ($\theta$).
*   **Maneuverability:** The ability of a robot to change its position and orientation in its operational space.

**Types of Locomotion (Overview):**

*   **Wheel-based:** Most common, utilizing wheels for motion.
*   **Legged:** Mimics biological locomotion (e.g., walking, crawling).
*   **Tracked:** Uses continuous tracks for mobility.
*   **Flying:** Utilizes aerial vehicles.
*   **Aquatic:** Operates in water.

**Relevance to Kinematics:** The kinematic model describes the relationship between the robot's velocity and its configuration, which is directly influenced by its locomotion mechanism.

---

### **2. Kinematic Model of a Differential Drive Mobile Robot (CO2: K4)**

A **differential drive robot** is a common configuration characterized by two independently driven wheels placed on a common axis, with a castor wheel or skid for stability.

**Key Concepts:**

*   **Differential Drive:** Two wheels mounted on the same axle, each controlled by its own motor.
*   **Instantaneous Center of Curvature (ICC) / Pure Roll:** The point around which the robot is instantaneously rotating. For a differential drive robot, this point lies on the line connecting the two drive wheels.
*   **Forward Kinematics:** Relating wheel velocities to the robot's linear and angular velocities.
*   **Inverse Kinematics:** Relating the robot's desired linear and angular velocities to the required wheel velocities.

**Configuration:**

*   Let the robot's configuration in the 2D plane be represented by its position $(x, y)$ and orientation $\theta$ with respect to a fixed world frame.
*   The robot's **body frame** is typically defined with the origin at the midpoint of the drive wheels, the x-axis pointing forward, and the y-axis pointing to the left.
*   Let $r$ be the radius of the wheels and $w$ be the distance between the centers of the two wheels (wheelbase).
*   Let $v_l$ and $v_r$ be the linear velocities of the left and right wheels, respectively.

**Forward Kinematics:**

The linear velocity of the robot's center ($v$) and its angular velocity ($\omega$) can be derived from the individual wheel velocities.

*   **Linear Velocity ($v$):** The average of the left and right wheel velocities.
    $v = \frac{r}{2}(v_l + v_r)$
*   **Angular Velocity ($\omega$):** The difference between the wheel velocities scaled by the wheelbase.
    $\omega = \frac{r}{w}(v_r - v_l)$

**State Vector and Velocity Representation:**

The robot's state can be represented as $\mathbf{q} = [x, y, \theta]^T$.
The robot's velocity in the body frame can be represented as $\mathbf{v}_{body} = [v, 0, \omega]^T$, where $v$ is forward velocity and $\omega$ is angular velocity.

The relationship between the robot's velocity in the world frame and its body frame velocities is given by the **Jacobian matrix**:

$\begin{bmatrix} \dot{x} \\ \dot{y} \\ \dot{\theta} \end{bmatrix} = \begin{bmatrix} \cos(\theta) & 0 \\ \sin(\theta) & 0 \\ 0 & 1 \end{bmatrix} \begin{bmatrix} v \\ \omega \end{bmatrix}$

This equation describes how changes in $v$ and $\omega$ (robot's motion commands) affect its position $(x, y)$ and orientation $\theta$.

**Kinematic Constraints:**

Differential drive robots are **non-holonomic**. This means their motion is constrained by the wheels rolling without slipping on the ground. These constraints are expressed as differential equations that cannot be integrated into algebraic path constraints. The key constraint is that the robot cannot move sideways.

The instantaneous velocity vector of the robot must be tangent to the path it follows.

**Inverse Kinematics:**

Given a desired linear velocity $v_{des}$ and angular velocity $\omega_{des}$ for the robot, we can calculate the required wheel velocities:

*   $v_l = v_{des} - \frac{w}{2r}\omega_{des}$
*   $v_r = v_{des} + \frac{w}{2r}\omega_{des}$

**Example:**
Consider a differential drive robot with $r=0.05$ m and $w=0.2$ m.
If the robot needs to move forward with $v_{des} = 0.1$ m/s and rotate at $\omega_{des} = 0.5$ rad/s:
$v_l = 0.1 - \frac{0.2}{2 \times 0.05} \times 0.5 = 0.1 - 2 \times 0.5 = 0.1 - 1 = -0.9$ m/s
$v_r = 0.1 + \frac{0.2}{2 \times 0.05} \times 0.5 = 0.1 + 2 \times 0.5 = 0.1 + 1 = 1.1$ m/s

This implies the left wheel needs to move backward and the right wheel forward to achieve the desired motion.

**Important Point:** The ability to independently control wheel velocities allows a differential drive robot to move forward, backward, turn in place (by rotating wheels in opposite directions), and turn while moving forward/backward.

**Textbook References:**
*   **Siegwart & Nourbakhsh (2011), Chapter 2:** Discusses basic mobile robot concepts, including locomotion and kinematic models for different configurations.
*   **Corke (2011), Chapter 3:** Provides a good introduction to robot kinematics and different robot types, including differential drive.

---

### **3. Kinematic Model of a Steered Mobile Robot (CO2: K4)**

**Steered mobile robots**, also known as **Ackermann steering robots** or **car-like robots**, are inspired by the steering mechanism of automobiles. They have at least one steerable wheel and typically one or more driven wheels.

**Key Concepts:**

*   **Ackermann Steering:** A steering geometry where the inner wheels turn at a sharper angle than the outer wheels to ensure all wheels roll without slipping through their respective centers of curvature.
*   **Kinematic Constraints:** Similar to differential drive, steered robots are also non-holonomic. The primary constraint is that the wheels are assumed to roll without slipping.
*   **Steering Angle:** The angle of the front wheels with respect to the robot's chassis.
*   **Wheelbase:** The distance between the front and rear axles.

**Configuration:**

*   Let the robot's configuration be $(x, y, \theta)$, where $\theta$ is the orientation of the robot's longitudinal axis.
*   Consider a robot with a wheelbase $L$. Let the front steering angle be $\phi$ and the rear steering angle be $\psi$. For a simplified car-like robot, $\psi=0$.
*   The robot moves in the direction of its longitudinal axis.
*   The **Instantaneous Center of Curvature (ICC)** is the point around which the robot is instantaneously rotating. For a car-like robot with wheelbase $L$ and steering angle $\phi$, the radius of curvature $R$ is:
    $R = \frac{L}{\tan(\phi)}$

**Forward Kinematics:**

Assuming the robot's velocity $v$ is along its longitudinal axis and the steering angle $\phi$ is at the front wheels:

*   **Linear Velocity ($v$):** The speed of the robot's reference point (e.g., midpoint of the rear axle).
*   **Angular Velocity ($\omega$):** The rate of change of the robot's orientation $\theta$.

The relationship between $v$, $\omega$, $L$, and $\phi$ is:

$v = R \dot{\theta}$  (since $v$ is tangent to the circle of radius $R$)
Substituting $R = \frac{L}{\tan(\phi)}$:
$v = \frac{L}{\tan(\phi)} \omega$

This can be rearranged to express $\omega$:
$\omega = \frac{v \tan(\phi)}{L}$

**State Space Representation:**

The kinematic model can be written as a set of differential equations describing the robot's motion:

$\begin{bmatrix} \dot{x} \\ \dot{y} \\ \dot{\theta} \end{bmatrix} = \begin{bmatrix} \cos(\theta) & 0 \\ \sin(\theta) & 0 \\ 0 & 1 \end{bmatrix} \begin{bmatrix} v \\ \omega \end{bmatrix}$

where $\omega$ is related to $v$ and $\phi$ by $\omega = \frac{v \tan(\phi)}{L}$.

Substituting $\omega$:
$\begin{bmatrix} \dot{x} \\ \dot{y} \\ \dot{\theta} \end{bmatrix} = \begin{bmatrix} \cos(\theta) & 0 \\ \sin(\theta) & 0 \\ 0 & \frac{\tan(\phi)}{L} \end{bmatrix} \begin{bmatrix} v \\ v \end{bmatrix}$  (This formulation is incorrect as it assumes v is the input for both, but the inputs are v and phi)

Correct formulation: The state derivatives are driven by the forward velocity $v$ and steering angle $\phi$.

$\dot{x} = v \cos(\theta)$
$\dot{y} = v \sin(\theta)$
$\dot{\theta} = \omega = \frac{v \tan(\phi)}{L}$

**Non-holonomic Constraints:**

The constraints for a car-like robot are that the velocity vector at any point on the robot is tangential to the surface it's on, and the wheels do not slip sideways.

**Kinematic Control:**

Control involves managing $v$ and $\phi$ to achieve desired trajectories. This often involves path planning and trajectory generation.

**Example:**
Consider a car-like robot with wheelbase $L=2$ m.
If the robot moves forward at $v=1$ m/s and turns its front wheels at $\phi = 15^\circ$ (approx. 0.26 rad):
The angular velocity is $\omega = \frac{1 \times \tan(15^\circ)}{2} \approx \frac{0.2679}{2} \approx 0.134$ rad/s.
The radius of curvature is $R = \frac{2}{\tan(15^\circ)} \approx \frac{2}{0.2679} \approx 7.46$ m.

**Important Point:** The steering angle $\phi$ directly dictates the curvature of the robot's path. The constraint on $\phi$ (maximum steering angle) and $v$ limits the robot's maneuverability.

**Textbook References:**
*   **Siegwart & Nourbakhsh (2011), Chapter 2:** Covers car-like robots and their kinematic models.
*   **Tzafestas (2005), Chapter 4:** Provides a detailed mathematical treatment of mobile robot kinematics, including steered vehicles.
*   **Corke (2011), Chapter 3:** Explains Ackermann steering and its kinematic implications.

---

### **4. Comparison and Differences (CO1: K2, CO2: K4)**

| Feature             | Differential Drive                               | Steered Mobile Robot (Car-like)                   |
| :------------------ | :----------------------------------------------- | :------------------------------------------------ |
| **Locomotion**      | Two independently driven wheels on a common axis | At least one steerable wheel, one or more driven |
| **Degrees of Freedom** | Can achieve $(x, y, \theta)$                     | Can achieve $(x, y, \theta)$                      |
| **Maneuverability** | High: Can turn in place, strafe (conceptually) | Lower: Cannot turn in place, requires wider turns |
| **Turning**         | By differential wheel speeds                     | By steering the wheels (like a car)               |
| **ICC Location**    | On the line connecting drive wheels              | Off the robot's body, determined by steering      |
| **Control Inputs**  | Linear velocities of left/right wheels           | Forward velocity and steering angle               |
| **Non-holonomic?**  | Yes                                              | Yes                                               |
| **Turning Radius**  | Can be zero (pivot turn)                         | Always finite (unless $\phi$ approaches 90°)      |
| **Common Use**      | Indoor robots, smaller platforms                 | Outdoor navigation, larger vehicles               |

**Key Difference in Control:**

*   **Differential Drive:** Directly controls wheel speeds to achieve desired linear and angular velocities.
*   **Steered Robot:** Controls forward velocity and steering angle to achieve desired path curvature and forward motion.

---

### **5. Practice Questions and Exercises**

**Question 1 (CO2: K4 - Differential Drive):**
A differential drive robot has wheels with radius $r = 0.04$ m and a wheelbase $w = 0.15$ m. If the left wheel is driven at $v_l = 0.5$ m/s and the right wheel at $v_r = 0.3$ m/s, what are the robot's linear velocity ($v$) and angular velocity ($\omega$)?

**Answer 1:**
$v = \frac{r}{2}(v_l + v_r) = \frac{0.04}{2}(0.5 + 0.3) = 0.02 \times 0.8 = 0.016$ m/s
$\omega = \frac{r}{w}(v_r - v_l) = \frac{0.04}{0.15}(0.3 - 0.5) = \frac{0.04}{0.15}(-0.2) = -0.0533$ rad/s (The negative sign indicates a clockwise rotation if the positive x-axis is forward and positive y-axis is left).

**Question 2 (CO2: K4 - Steered Robot):**
A car-like robot with a wheelbase $L = 2.5$ m is moving forward at $v = 1.2$ m/s. If its front wheels are steered at an angle $\phi = 20^\circ$, what is its angular velocity $\omega$ and its radius of curvature $R$?

**Answer 2:**
$\omega = \frac{v \tan(\phi)}{L} = \frac{1.2 \times \tan(20^\circ)}{2.5} \approx \frac{1.2 \times 0.364}{2.5} \approx \frac{0.4368}{2.5} \approx 0.175$ rad/s
$R = \frac{L}{\tan(\phi)} = \frac{2.5}{\tan(20^\circ)} \approx \frac{2.5}{0.364} \approx 6.87$ m

**Question 3 (CO1: K2):**
Briefly explain the primary advantage of a differential drive robot over a car-like robot in terms of maneuverability in confined spaces.

**Answer 3:**
A differential drive robot can turn in place (pivot turn) by rotating its wheels in opposite directions, meaning it can change its orientation without translating. A car-like robot, however, needs to have a positive forward velocity to steer and cannot pivot turn; it requires a larger turning radius. This makes differential drive robots more maneuverable in tight indoor environments.

---

### **6. Important Points to Remember**

*   **Kinematic models** describe the motion of a robot without considering forces or masses (dynamics).
*   **Non-holonomic constraints** are critical for understanding the motion capabilities and limitations of wheeled mobile robots.
*   **Differential drive robots** are characterized by their ability to turn in place and their direct control over wheel velocities.
*   **Steered mobile robots (car-like)** are characterized by their steering mechanism and are subject to a turning radius constraint.
*   The **Instantaneous Center of Curvature (ICC)** is a key concept for visualizing the instantaneous motion of both robot types.
*   Understanding these kinematic models is the foundation for **path planning and control** (CO5, CO6).

---

### **7. Connections to Course Outcomes**

*   **CO1: Familiarise types of locomotion for mobile Robots (Knowledge Level: K2)**: This section covers differential drive and steered robots as common locomotion types.
*   **CO2: Derive the kinematic model of mobile robots (Knowledge Level: K4)**: Detailed derivations and equations for both differential drive and steered robots are provided.
*   **CO5: Perform navigation and path planning mobile robots (Knowledge Level: K3)**: Understanding kinematic models is essential for planning feasible paths that the robot can actually follow.
*   **CO6: Control the mobile robots to follow different paths (Knowledge Level: K3)**: The kinematic models provide the basis for developing control strategies that translate desired paths into actuator commands (wheel speeds or steering angles).

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |


### **8. Further Reading and References**

*   **Siegwart & Nourbakhsh (2011), Introduction to Autonomous Mobile Robots:** Excellent for foundational concepts and overviews of robot types.
*   **Corke (2011), Robotics, Vision and Control:** Offers a more mathematically rigorous approach to robot kinematics and control, with MATLAB examples.
*   **Tzafestas (2005), Introduction to Mobile Robot Control:** Provides in-depth coverage of kinematic and dynamic modeling for various mobile robot platforms.

This module lays the groundwork for understanding how mobile robots move, which is essential for all subsequent topics in mobile robotics.