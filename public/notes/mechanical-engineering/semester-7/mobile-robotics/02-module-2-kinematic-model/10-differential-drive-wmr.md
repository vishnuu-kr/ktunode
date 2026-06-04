---
title: "Differential-Drive WMR"
subject: "MOBILE ROBOTICS"
module: "Module 2: Kinematic model"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf48044640ae"
status: "completed"
scrapedAt: "2026-05-20T18:15:11.843Z"
---
# Mobile Robotics: Module 2 - Kinematic Model: Differential-Drive Wheeled Mobile Robots (WMR)

This module focuses on understanding the kinematic model of differential-drive wheeled mobile robots (WMRs), a fundamental aspect of mobile robot locomotion and control.

---

## 1. Introduction to Wheeled Mobile Robots (WMRs)

**CO1: Familiarise types of locomotion for mobile Robots (Knowledge Level: K2)**

Wheeled mobile robots are a prevalent class of robots, characterized by their ability to move using wheels. They offer advantages such as efficiency, speed, and maneuverability in structured environments.

### 1.1 Types of Locomotion

*   **Wheeled Locomotion:**
    *   **Advantages:** High energy efficiency, good speed, simple mechanics for basic movement, predictable motion on flat surfaces.
    *   **Disadvantages:** Limited traversability over rough terrain, stairs, or obstacles; require smooth surfaces.
*   **Legged Locomotion:** (e.g., bipeds, quadrupeds)
    *   **Advantages:** Excellent traversability over uneven terrain, ability to overcome obstacles and stairs.
    *   **Disadvantages:** Complex mechanics, lower energy efficiency, slower speeds, more complex control.
*   **Tracked Locomotion:** (e.g., tanks)
    *   **Advantages:** Good traction, ability to traverse rough terrain and soft surfaces, can turn in place.
    *   **Disadvantages:** High power consumption, can damage delicate surfaces, less agile than wheeled robots in some scenarios.
*   **Flying Locomotion:** (e.g., drones)
    *   **Advantages:** Excellent mobility in 3D space, can overcome ground-based obstacles.
    *   **Disadvantages:** High energy consumption, limited payload, susceptible to weather conditions.
*   **Underwater Locomotion:** (e.g., AUVs)
    *   **Advantages:** Exploration of aquatic environments.
    *   **Disadvantages:** High pressure, communication challenges, significant power requirements.

### 1.2 Classification of Wheeled Mobile Robots

WMRs are often classified based on their wheel arrangement and steering mechanisms.

*   **Unicycle Model:** Single steering wheel and a single drive wheel.
*   **Bicycle Model:** Two steered wheels (like a bicycle) and two passive wheels or two drive wheels.
*   **Differential Drive Model:** Two independently driven and steered wheels, capable of rotating in opposite directions to achieve turning.
*   **Omnidirectional Drive Model:** Wheels with a special design (e.g., mecanum wheels) allowing movement in any direction.

**Key Concept:** The **differential-drive** configuration is one of the most common and simplest forms of WMRs, and it's the primary focus of this module.

---

## 2. Differential-Drive Wheeled Mobile Robots (WMRs)

**CO1: Familiarise types of locomotion for mobile Robots (Knowledge Level: K2)**
**CO2: Derive the kinematic model of mobile robots (Knowledge Level: K4)**

A differential-drive WMR typically consists of two wheels mounted on a common axis. These wheels can be driven independently and are capable of rotating in opposite directions. This configuration allows the robot to move forward, backward, and turn in place.

### 2.1 Components of a Differential-Drive Robot

*   **Two Drive Wheels:** Mounted on the same axis. Each wheel is driven by its own motor.
*   **Chassis/Body:** The main structure of the robot.
*   **Caster Wheels (Optional):** One or more free-rotating wheels to provide stability and support. These are not actively driven or steered.

### 2.2 Kinematic Model - The Core Idea

The kinematic model describes the relationship between the robot's controls (wheel velocities) and its motion (linear and angular velocity of the robot's body) without considering forces or torques. It answers the question: "Given the wheel speeds, where and how fast is the robot moving?"

**Key Concept:** **Forward Kinematics** describes how the robot's pose (position and orientation) changes given the wheel velocities.

### 2.3 Derivation of the Kinematic Model

Let's define the state of the robot and the variables we'll use.

**Robot State:**

*   **Position:** $(x, y)$ in a global Cartesian coordinate frame.
*   **Orientation:** $\theta$ (heading angle) with respect to the global x-axis.
*   **Pose:** $X = [x, y, \theta]^T$.

**Robot Variables:**

*   **Wheel Radius:** $r$ (assumed to be the same for both wheels).
*   **Distance between wheels (Wheelbase):** $b$ (or $L$). This is the distance between the centers of the two drive wheels.
*   **Angular Velocity of Left Wheel:** $\omega_l$.
*   **Angular Velocity of Right Wheel:** $\omega_r$.
*   **Linear Velocity of Left Wheel:** $v_l = r \omega_l$.
*   **Linear Velocity of Right Wheel:** $v_r = r \omega_r$.

**Coordinate Frames:**

*   **Global Frame (or World Frame):** A fixed reference frame $\{W\}$ with axes $(X, Y)$.
*   **Robot Frame (or Body Frame):** A frame $\{B\}$ attached to the robot, usually centered at the midpoint of the axle connecting the drive wheels, with the x-axis pointing forward along the robot's direction of motion.

#### 2.3.1 Kinematic Equations

We need to relate the velocities of the wheels to the linear and angular velocities of the robot's body frame.

**1. Velocity of the Robot's Center of Rotation (Instantaneous):**

Consider the robot's motion. The point midway between the two wheels, at the center of the axle, is often considered the robot's reference point. Let its velocity in the global frame be $(v_x, v_y)$.

The robot's angular velocity $\dot{\theta}$ is related to the difference in wheel velocities. Imagine the robot turning in place. The outer wheel travels a larger arc than the inner wheel. The center of rotation for a differential drive robot is at the midpoint of the axle.

The linear velocity of the robot's body, denoted by $v$, is the velocity of the midpoint of the axle. In the robot's frame, this is typically along the robot's forward axis. Let's assume the robot frame's x-axis aligns with the direction of motion.

The angular velocity $\dot{\theta}$ is determined by the difference in the tangential velocities of the wheels divided by the distance between them.

$$ \dot{\theta} = \frac{v_r - v_l}{b} = \frac{r(\omega_r - \omega_l)}{b} $$

**2. Linear Velocity of the Robot's Body:**

The linear velocity $v$ of the robot's body (midpoint of the axle) is the average of the linear velocities of the left and right wheels.

$$ v = \frac{v_l + v_r}{2} = \frac{r(\omega_l + \omega_r)}{2} $$

Now, we express these velocities in the global frame $(X, Y)$. The velocity $v$ is in the direction of the robot's heading $\theta$.

$$ \begin{bmatrix} \dot{x} \\ \dot{y} \end{bmatrix} = \begin{bmatrix} v \cos(\theta) \\ v \sin(\theta) \end{bmatrix} $$

Substituting the expression for $v$:

$$ \begin{bmatrix} \dot{x} \\ \dot{y} \end{bmatrix} = \begin{bmatrix} \frac{r(\omega_l + \omega_r)}{2} \cos(\theta) \\ \frac{r(\omega_l + \omega_r)}{2} \sin(\theta) \end{bmatrix} $$

**Combining these, the full kinematic model in terms of wheel velocities is:**

$$ \begin{bmatrix} \dot{x} \\ \dot{y} \\ \dot{\theta} \end{bmatrix} = \begin{bmatrix} \frac{r}{2} \cos(\theta) & \frac{r}{2} \cos(\theta) \\ \frac{r}{2} \sin(\theta) & \frac{r}{2} \sin(\theta) \\ -\frac{1}{b} & \frac{1}{b} \end{bmatrix} \begin{bmatrix} \omega_l \\ \omega_r \end{bmatrix} $$

**Or, in terms of linear wheel velocities ($v_l = r\omega_l, v_r = r\omega_r$):**

$$ \begin{bmatrix} \dot{x} \\ \dot{y} \\ \dot{\theta} \end{bmatrix} = \begin{bmatrix} \frac{1}{2} \cos(\theta) & \frac{1}{2} \cos(\theta) \\ \frac{1}{2} \sin(\theta) & \frac{1}{2} \sin(\theta) \\ -\frac{1}{b} & \frac{1}{b} \end{bmatrix} \begin{bmatrix} v_l \\ v_r \end{bmatrix} $$

**This is the forward kinematic model of a differential-drive WMR.**

**Important Point:** The velocity vector $(\dot{x}, \dot{y})$ is always tangential to the robot's path. For a differential drive robot, this tangential velocity is aligned with the robot's current orientation $\theta$.

#### 2.3.2 Inverse Kinematics

Inverse kinematics answers the question: "Given the desired linear and angular velocities of the robot's body, what wheel velocities are required?"

We want to find $\omega_l$ and $\omega_r$ given desired $v$ and $\dot{\theta}$.

From the equations:
1.  $v = \frac{r(\omega_l + \omega_r)}{2}$
2.  $\dot{\theta} = \frac{r(\omega_r - \omega_l)}{b}$

We can solve for $\omega_l$ and $\omega_r$:

From (2): $b \dot{\theta} = r(\omega_r - \omega_l) \implies \omega_r - \omega_l = \frac{b \dot{\theta}}{r}$
From (1): $2v = r(\omega_l + \omega_r) \implies \omega_l + \omega_r = \frac{2v}{r}$

Now we have a system of two linear equations:
*   $\omega_l + \omega_r = \frac{2v}{r}$
*   $-\omega_l + \omega_r = \frac{b \dot{\theta}}{r}$

Adding the two equations:
$2\omega_r = \frac{2v}{r} + \frac{b \dot{\theta}}{r} \implies \omega_r = \frac{v}{r} + \frac{b \dot{\theta}}{2r}$

Subtracting the second equation from the first:
$2\omega_l = \frac{2v}{r} - \frac{b \dot{\theta}}{r} \implies \omega_l = \frac{v}{r} - \frac{b \dot{\theta}}{2r}$

**Thus, the inverse kinematic model is:**

$$ \begin{bmatrix} \omega_l \\ \omega_r \end{bmatrix} = \begin{bmatrix} \frac{1}{r} & -\frac{b}{2r} \\ \frac{1}{r} & \frac{b}{2r} \end{bmatrix} \begin{bmatrix} v \\ \dot{\theta} \end{bmatrix} $$

**Or, in terms of linear wheel velocities ($v_l = r\omega_l, v_r = r\omega_r$):**

$$ \begin{bmatrix} v_l \\ v_r \end{bmatrix} = \begin{bmatrix} 1 & -\frac{b}{2} \\ 1 & \frac{b}{2} \end{bmatrix} \begin{bmatrix} v \\ \dot{\theta} \end{bmatrix} $$

**Key Concept:** The inverse kinematic model is crucial for control, as it tells us how to command the motors to achieve a desired robot motion.

### 2.4 Kinematic Constraints

Differential-drive robots are **non-holonomic**. This means their motion is constrained in a way that cannot be integrated into a direct relationship between the robot's position and its wheel positions. Specifically, the robot cannot move sideways (perpendicular to its heading).

**Key Concept:** **Non-holonomic Constraint:** The robot's velocity vector $(\dot{x}, \dot{y})$ is always constrained to be in the direction of its heading $\theta$. This can be expressed as:
$$ \dot{y} \cos(\theta) - \dot{x} \sin(\theta) = 0 $$

This constraint is what allows the robot to turn in place and maneuver without moving sideways, but it also means that reaching a specific final pose from a starting pose might require a curved path, not just a straight line.

**Reference:** This concept of non-holonomic constraints is thoroughly discussed in "Introduction to Autonomous Mobile Robots" by Siegwart & Nourbakhsh, often in chapters related to robot kinematics.

---

## 3. Illustrative Examples and Applications

**CO2: Derive the kinematic model of mobile robots (Knowledge Level: K4)**
**CO6: Control the mobile robots to follow different paths (Knowledge Level: K3)**

Understanding the kinematic model is fundamental for controlling the robot's movement and making it follow desired paths.

### 3.1 Example: Moving Straight

To move straight, the robot needs $v > 0$ and $\dot{\theta} = 0$.

From the inverse kinematics:
*   $\omega_l = \frac{v}{r}$
*   $\omega_r = \frac{v}{r}$

This means both wheels must rotate at the same speed and direction.

### 3.2 Example: Turning in Place

To turn in place, the robot needs $v = 0$ and $\dot{\theta} \neq 0$.

From the inverse kinematics:
*   $\omega_l = -\frac{b \dot{\theta}}{2r}$
*   $\omega_r = \frac{b \dot{\theta}}{2r}$

This means the wheels must rotate at the same speed but in opposite directions. If $\dot{\theta} > 0$ (counter-clockwise turn), the right wheel spins forward, and the left wheel spins backward. If $\dot{\theta} < 0$ (clockwise turn), the left wheel spins forward, and the right wheel spins backward.

### 3.3 Example: Driving in a Circle

To drive in a circle, the robot's heading $\theta$ changes at a constant rate. The center of the circle lies on the line extending from the robot's axle.

Let the desired angular velocity be $\dot{\theta} = \omega$.
The linear velocity $v$ is related to the radius of the circle $R$. The midpoint of the axle moves along the circle of radius $R$.
So, $v = R \omega$.

Using inverse kinematics:
*   $\omega_l = \frac{v}{r} - \frac{b \omega}{2r} = \frac{R \omega}{r} - \frac{b \omega}{2r} = \frac{\omega}{r} (R - \frac{b}{2})$
*   $\omega_r = \frac{v}{r} + \frac{b \omega}{2r} = \frac{R \omega}{r} + \frac{b \omega}{2r} = \frac{\omega}{r} (R + \frac{b}{2})$

The radius of the circular path traced by the robot's midpoint is $R = v/\omega$. The robot will turn about a point located at a distance $R_{center} = b/2$ from the midpoint, perpendicular to the robot's heading. The instantaneous center of rotation is at $(x - \frac{b}{2} \sin(\theta), y + \frac{b}{2} \cos(\theta))$.

**Reference:** Corke's "Robotics, Vision and Control" provides numerous examples and visual explanations of robot kinematics, including differential drive robots.

---

## 4. Path Following and Control

**CO6: Control the mobile robots to follow different paths (Knowledge Level: K3)**

The kinematic model is the foundation for designing controllers that make the robot follow a desired path.

### 4.1 Path Representation

A path can be represented as a sequence of points $(x_d, y_d)$ or as a parameterized curve.

### 4.2 Basic Control Strategies

*   **Open-Loop Control:** Directly applying the computed wheel velocities based on the desired motion. This is simple but susceptible to errors due to model inaccuracies, disturbances, and wheel slippage.
*   **Closed-Loop Control (Feedback Control):** Using sensor feedback (e.g., odometry from encoders, IMU) to measure the robot's actual pose $(x, y, \theta)$ and comparing it to the desired pose. The error is then used to adjust the wheel commands.

#### 4.2.1 Pure Pursuit Controller

A common path following controller.

1.  **Concept:** The robot moves towards a "lookahead point" on the path.
2.  **Mechanism:** Calculate the radius of the circle that passes through the robot's current position and the lookahead point. The robot then attempts to drive along this circular arc.
3.  **Derivation:**
    *   Let the robot's pose be $(x, y, \theta)$.
    *   Let the lookahead point on the path be $(x_l, y_l)$.
    *   Calculate the distance to the lookahead point $d = \sqrt{(x_l - x)^2 + (y_l - y)^2}$.
    *   Calculate the angle of the lookahead point relative to the robot's heading: $\alpha = \text{atan2}(y_l - y, x_l - x) - \theta$.
    *   The curvature of the path is $\kappa = 1/R$, where $R$ is the turning radius. For pure pursuit, the robot aims to follow a circular arc with radius $R$ that connects the robot's current pose to the lookahead point.
    *   The instantaneous center of rotation of the robot (for pure pursuit) is found on the perpendicular bisector of the line segment connecting the robot's current position to the lookahead point.
    *   The turning radius $R$ is related to the robot's current position and the lookahead point by: $R = \frac{d^2}{2 \text{cross\_product}(\vec{RP}, \vec{RL})} = \frac{d^2}{2 ( (x_l-x)\sin\theta - (y_l-y)\cos\theta )}$. More simply, $R = \frac{d}{2\sin(\alpha)}$ if the robot can control its curvature.
    *   The desired linear velocity $v$ is often set to a constant (e.g., a target speed).
    *   The desired angular velocity $\dot{\theta}$ is then $\dot{\theta} = v/R$.

    Using the inverse kinematic equations with desired $v$ and calculated $\dot{\theta}$:
    $$ \omega_l = \frac{v}{r} - \frac{b \dot{\theta}}{2r} $$
    $$ \omega_r = \frac{v}{r} + \frac{b \dot{\theta}}{2r} $$

**Reference:** "Introduction to Autonomous Mobile Robots" (Siegwart & Nourbakhsh) and "Robotics, Vision and Control" (Corke) provide detailed explanations and algorithms for pure pursuit and other path-following controllers.

#### 4.2.2 Stanley Controller

Another popular controller for path following.

1.  **Concept:** It controls both the cross-track error (perpendicular distance to the path) and the heading error (difference between robot's heading and path's tangent).
2.  **Mechanism:** It calculates a required steering angle based on these two errors.
3.  **Derivation:**
    *   The controller aims to minimize two errors:
        *   **Cross-track error ($e_\perp$):** The shortest distance from the robot to the path.
        *   **Heading error ($\alpha$):** The angle between the robot's heading $\theta$ and the path's tangent at the nearest point.
    *   The desired angular velocity $\dot{\theta}$ is computed as:
        $$ \dot{\theta} = \dot{\theta}_{path} + K_p e_\perp + K_d \frac{de_\perp}{dt} + K_{\alpha} \alpha $$
        where $\dot{\theta}_{path}$ is the path's curvature at the nearest point, and $K_p, K_d, K_{\alpha}$ are controller gains. A simplified version often uses a constant forward velocity $v$.
    *   The turning radius $R$ is then $R = v/\dot{\theta}$. The inverse kinematics are applied as before.

**Reference:** The Stanley controller is often discussed in literature related to autonomous driving and mobile robot control.

---

## 5. Kinematic Parameters and State Estimation

**CO2: Derive the kinematic model of mobile robots (Knowledge Level: K4)**

Accurate knowledge of kinematic parameters ($r, b$) is crucial for precise motion. State estimation (e.g., using odometry) provides the robot's pose, which is essential for feedback control.

### 5.1 Parameter Estimation

*   **Wheel Radius ($r$):** Can be measured directly. However, variations due to tire pressure, wear, or slippage can occur.
*   **Wheelbase ($b$):** Distance between the centers of the drive wheels. Also can be measured directly.

**Challenges:**
*   **Wheel Slip:** Wheels can slip on the surface, causing odometry to be inaccurate.
*   **Uneven Surfaces:** Irregularities in the ground can affect wheel rotation and cause errors.
*   **Encoder Resolution:** The accuracy of encoders used to measure wheel rotation.

### 5.2 Odometry

Odometry is the process of estimating the robot's pose by integrating wheel encoder readings.

*   **Basic Odometry:** Using the kinematic model to calculate the change in pose $(\Delta x, \Delta y, \Delta \theta)$ from the measured wheel rotations $(\Delta \phi_l, \Delta \phi_r)$.
    *   $\Delta v_l = r \Delta \phi_l$
    *   $\Delta v_r = r \Delta \phi_r$
    *   Assuming small time step $\Delta t$:
        *   $\Delta \theta = \frac{r(\Delta \phi_r - \Delta \phi_l)}{b}$
        *   $\Delta x = \frac{r(\Delta \phi_l + \Delta \phi_r)}{2} \cos(\theta_{old})$
        *   $\Delta y = \frac{r(\Delta \phi_l + \Delta \phi_r)}{2} \sin(\theta_{old})$
    *   $\theta_{new} = \theta_{old} + \Delta \theta$
    *   $x_{new} = x_{old} + \Delta x$
    *   $y_{new} = y_{old} + \Delta y$

**Important Point:** Errors in odometry accumulate over time due to the integration of noisy measurements and model inaccuracies. This is often referred to as **odometry drift**.

**Reference:** "Probabilistic Robotics" by Thrun, Burgard, and Fox extensively covers odometry and state estimation techniques in mobile robotics, including dealing with uncertainty.

---

## 6. Summary of Key Concepts

*   **Differential Drive:** A common WMR with two independently driven wheels.
*   **Kinematic Model:** Relates wheel velocities to the robot's linear and angular velocities.
*   **Forward Kinematics:** $\dot{X} = J(\theta) \dot{q}$ where $\dot{X} = [\dot{x}, \dot{y}, \dot{\theta}]^T$ and $\dot{q} = [\omega_l, \omega_r]^T$.
*   **Inverse Kinematics:** $\dot{q} = J^{-1}(X) \dot{X}_{desired}$ where $\dot{X}_{desired} = [v, \dot{\theta}]^T$.
*   **Non-holonomic Constraint:** $\dot{y} \cos(\theta) - \dot{x} \sin(\theta) = 0$. The robot cannot move sideways.
*   **Path Following:** Controllers like Pure Pursuit and Stanley use the kinematic model to guide the robot along a desired trajectory.
*   **Odometry:** Estimating pose from wheel encoder readings, prone to drift.
*   **Parameters:** $r$ (wheel radius), $b$ (wheelbase).

---

## 7. Practice Questions

**Question 1 (CO2):**
A differential-drive mobile robot has wheels with a radius $r = 0.05$ m and a wheelbase $b = 0.2$ m. If the left wheel rotates at $\omega_l = 2$ rad/s and the right wheel rotates at $\omega_r = 3$ rad/s, calculate the linear and angular velocity of the robot at the current instant, assuming the robot is oriented at $\theta = 0$ radians.

**Answer 1:**
Given: $r = 0.05$ m, $b = 0.2$ m, $\omega_l = 2$ rad/s, $\omega_r = 3$ rad/s, $\theta = 0$ rad.

Using the forward kinematic equations:
Linear velocity $v = \frac{r(\omega_l + \omega_r)}{2} = \frac{0.05 (2 + 3)}{2} = \frac{0.05 \times 5}{2} = \frac{0.25}{2} = 0.125$ m/s.
Angular velocity $\dot{\theta} = \frac{r(\omega_r - \omega_l)}{b} = \frac{0.05 (3 - 2)}{0.2} = \frac{0.05 \times 1}{0.2} = \frac{0.05}{0.2} = 0.25$ rad/s.

Since $\theta = 0$, $\cos(\theta) = 1$ and $\sin(\theta) = 0$.
$\dot{x} = v \cos(\theta) = 0.125 \times 1 = 0.125$ m/s.
$\dot{y} = v \sin(\theta) = 0.125 \times 0 = 0$ m/s.

So, the robot's velocity is $(0.125, 0)$ m/s and its angular velocity is $0.25$ rad/s.

**Question 2 (CO2, CO6):**
A differential-drive robot needs to follow a straight line path at a constant speed of $v = 0.5$ m/s. What should be the angular velocities of the left and right wheels ($\omega_l, \omega_r$)? Assume $r = 0.05$ m and $b = 0.2$ m.

**Answer 2:**
To follow a straight line path, the robot's angular velocity $\dot{\theta}$ must be zero.
Desired: $v = 0.5$ m/s, $\dot{\theta} = 0$ rad/s.

Using the inverse kinematic equations:
$$ \begin{bmatrix} \omega_l \\ \omega_r \end{bmatrix} = \begin{bmatrix} \frac{1}{r} & -\frac{b}{2r} \\ \frac{1}{r} & \frac{b}{2r} \end{bmatrix} \begin{bmatrix} v \\ \dot{\theta} \end{bmatrix} $$

Substituting the values:
$$ \begin{bmatrix} \omega_l \\ \omega_r \end{bmatrix} = \begin{bmatrix} \frac{1}{0.05} & -\frac{0.2}{2 \times 0.05} \\ \frac{1}{0.05} & \frac{0.2}{2 \times 0.05} \end{bmatrix} \begin{bmatrix} 0.5 \\ 0 \end{bmatrix} $$
$$ \begin{bmatrix} \omega_l \\ \omega_r \end{bmatrix} = \begin{bmatrix} 20 & -20 \\ 20 & 20 \end{bmatrix} \begin{bmatrix} 0.5 \\ 0 \end{bmatrix} $$
$$ \begin{bmatrix} \omega_l \\ \omega_r \end{bmatrix} = \begin{bmatrix} 20 \times 0.5 - 20 \times 0 \\ 20 \times 0.5 + 20 \times 0 \end{bmatrix} = \begin{bmatrix} 10 \\ 10 \end{bmatrix} $$

So, $\omega_l = 10$ rad/s and $\omega_r = 10$ rad/s. Both wheels need to rotate at the same speed in the same direction to move straight.

**Question 3 (CO1):**
Briefly describe the main advantage and disadvantage of differential-drive robots compared to legged robots in terms of locomotion.

**Answer 3:**
**Advantage of Differential Drive over Legged Robots:**
*   **Energy Efficiency & Speed:** Differential-drive robots are generally more energy-efficient and can achieve higher speeds on flat, smooth surfaces due to simpler mechanics and direct wheel-to-surface contact.

**Disadvantage of Differential Drive compared to Legged Robots:**
*   **Traversability:** Differential-drive robots are severely limited in their ability to traverse rough terrain, obstacles, stairs, or uneven surfaces, whereas legged robots are designed for such environments.

---

## 8. Important Points to Remember

*   The kinematic model is a simplified representation of a robot's motion, neglecting forces and dynamics.
*   Differential-drive robots are non-holonomic, meaning they cannot move sideways.
*   Understanding both forward and inverse kinematics is crucial for controlling the robot's movement.
*   Wheel radius ($r$) and wheelbase ($b$) are key parameters.
*   Odometry provides pose estimates but is susceptible to drift.
*   Path-following controllers like Pure Pursuit and Stanley rely on the kinematic model to generate motor commands.

---
This concludes the study notes for the Differential-Drive WMR topic within Module 2: Kinematic Model. Remember to consult the provided textbooks for deeper insights and examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
