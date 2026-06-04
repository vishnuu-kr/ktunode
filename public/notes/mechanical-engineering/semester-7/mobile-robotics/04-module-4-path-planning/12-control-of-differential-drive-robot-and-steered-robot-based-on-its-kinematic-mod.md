---
title: "Control of differential drive robot and steered robot based on its kinematic model"
subject: "MOBILE ROBOTICS"
module: "Module 4: Path Planning"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf48044640d0"
status: "completed"
scrapedAt: "2026-05-20T18:15:34.570Z"
---
# Mobile Robotics: Module 4 - Path Planning

## Topic: Control of Differential Drive Robot and Steered Robot based on its Kinematic Model

This module focuses on the fundamental aspect of mobile robot control: generating commands to make a robot follow a desired path, specifically by leveraging its kinematic model. We will explore the control strategies for two common mobile robot configurations: the differential drive robot and the steered (Ackermann) robot.

---

### 1. Understanding Kinematic Models (CO2)

Before we can control a robot, we must understand how it moves based on its inputs. This is achieved through kinematic modeling.

*   **Kinematics:** The study of motion without considering the forces that cause it. In mobile robotics, it describes the relationship between the robot's joint velocities (wheel speeds, steering angles) and its body velocity (linear and angular velocity).

*   **Key Components of a Kinematic Model:**
    *   **Robot State:** Typically represented by the robot's position $(x, y)$ and orientation $(\theta)$ in the world frame.
    *   **Control Inputs:** The parameters that can be directly controlled to influence the robot's motion.
    *   **Relationship:** Equations that link the control inputs to the rate of change of the robot's state.

#### 1.1 Differential Drive Robot Kinematic Model

*   **Description:** A differential drive robot has two independently driven wheels, usually placed parallel to each other. The robot's motion is determined by the difference in speed between these two wheels.
*   **Configuration:**
    *   Two wheels, independently actuated.
    *   A caster wheel (or skid) for stability.
    *   The distance between the drive wheels is denoted by $b$ (wheelbase).
*   **State Vector:** $\mathbf{q} = [x, y, \theta]^T$, where $(x, y)$ is the position of the robot's center point (midway between the drive wheels) and $\theta$ is its orientation with respect to the x-axis.
*   **Control Inputs:**
    *   $v$: Linear velocity of the robot (along its forward direction).
    *   $\omega$: Angular velocity of the robot (about its center).
*   **Kinematic Equations (Forward Kinematics):**
    *   $\dot{x} = v \cos(\theta)$
    *   $\dot{y} = v \sin(\theta)$
    *   $\dot{\theta} = \omega$

    *   **Derivation Insight:** These equations arise from considering the robot's velocity in the world frame. The linear velocity $v$ is along the robot's heading ($\theta$), hence the cosine and sine terms. The angular velocity $\omega$ directly changes the orientation. (Refer to Siegwart & Nourbakhsh, Chapter 3 for detailed derivation).

*   **Control Inputs in terms of Wheel Velocities:** If $v_l$ and $v_r$ are the velocities of the left and right wheels respectively:
    *   $v = \frac{v_l + v_r}{2}$
    *   $\omega = \frac{v_r - v_l}{b}$

    *   **Example:** To move straight forward, $v_l = v_r$. To turn in place, $v_l = -v_r$. To turn while moving, $v_l \neq v_r$.

#### 1.2 Steered (Ackermann) Robot Kinematic Model

*   **Description:** This configuration is similar to a car, with a steering mechanism that controls the direction of the front wheels. The rear wheels are typically fixed in direction and driven.
*   **Configuration:**
    *   Front wheels are steerable.
    *   Rear wheels are fixed in direction.
    *   Wheelbase $L$: Distance between the front and rear axles.
    *   Steering angle $\delta$: Angle of the front wheels with respect to the robot's body.
*   **State Vector:** $\mathbf{q} = [x, y, \theta]^T$, where $(x, y)$ is the position of the robot's center point (often the midpoint of the rear axle) and $\theta$ is its orientation.
*   **Control Inputs:**
    *   $v$: Linear velocity of the robot (along its forward direction).
    *   $\delta$: Steering angle of the front wheels.
*   **Kinematic Equations (Forward Kinematics):**
    *   $\dot{x} = v \cos(\theta)$
    *   $\dot{y} = v \sin(\theta)$
    *   $\dot{\theta} = \frac{v}{L} \tan(\delta)$

    *   **Derivation Insight:** The angular velocity $\omega = \dot{\theta}$ is derived from the geometry of turning. The turning radius $R$ is related to the steering angle by $R = L / \tan(\delta)$. Since $v = R\omega$, we get $\omega = v/R = v \tan(\delta) / L$. (Refer to Corke, Chapter 10 for detailed derivation and alternative formulations).

*   **Important Note:** The steered robot kinematic model is **non-holonomic** in the sense that it cannot move sideways. Its velocity is always constrained to be along its current heading.

---

### 2. Controlling Mobile Robots to Follow Paths (CO6)

Once we have the kinematic models, we can derive control laws to make the robot follow a desired path. This involves calculating the required linear and angular velocities (or wheel velocities/steering angles) based on the robot's current state and the desired path.

#### 2.1 Path Following vs. Trajectory Following

*   **Path:** A sequence of points in space, defined by their geometric configuration $(x, y, \theta)$ without explicit time dependence.
*   **Trajectory:** A path that is parameterized by time, meaning it specifies the robot's position and orientation at each point in time.
*   **Path Following:** The robot aims to stay "close" to a predefined path, regardless of its speed along the path.
*   **Trajectory Following:** The robot aims to reach specific points on the path at specific times, requiring precise velocity control.

#### 2.2 Control Strategies

The core idea behind controlling a robot to follow a path is to determine the appropriate control inputs (e.g., $v$ and $\omega$ for differential drive, or $v$ and $\delta$ for steered) that minimize the error between the robot's current state and the desired path.

##### 2.2.1 Control of Differential Drive Robots

For a differential drive robot, we need to generate commands for $v$ and $\omega$. A common approach is to use a **feedback control law** that adjusts $v$ and $\omega$ based on the robot's error relative to the path.

*   **Error Definition:**
    *   **Lateral Error ($e$):** The perpendicular distance from the robot's current position to the nearest point on the path.
    *   **Orientation Error ($\phi$):** The difference between the robot's current orientation and the tangent to the path at the closest point.

*   **Pure Pursuit Controller:**
    *   **Concept:** The robot tracks a point on the path at a lookahead distance ($L_d$). The robot's steering command is then computed to steer towards this lookahead point.
    *   **Control Law (Simplified):** For a differential drive robot, we can derive the required $\omega$ to steer towards the lookahead point. The linear velocity $v$ is typically kept constant or controlled to achieve a desired speed along the path.
    *   **Implementation:**
        1.  Find the point on the path that is at the lookahead distance $L_d$ from the robot's current position.
        2.  Calculate the curvature required to reach this point.
        3.  Convert curvature to $\omega$.
        4.  Set $v$ to a desired speed.
    *   **Example (from Siegwart & Nourbakhsh, Chapter 7):** If the lookahead point is $(x_{la}, y_{la})$ and the robot is at $(x, y)$, the heading towards this point is $\alpha = \operatorname{atan2}(y_{la}-y, x_{la}-x)$. The angular velocity $\omega$ is proportional to the difference between this target heading and the robot's current heading $\theta$. A proportional controller can be used: $\omega = k_p (\alpha - \theta)$. The linear velocity $v$ can be kept constant.

*   **Stanley Controller (for Four-Wheeled Steering/Ackermann):** While primarily designed for steered robots, the underlying principles of error correction can be adapted. It aims to minimize both lateral and orientation errors.
    *   **Control Law:** $\omega = \dot{\theta}_d - k_p e - k_d \sin(\phi)$
        *   $\dot{\theta}_d$: Desired angular velocity of the path (if available).
        *   $e$: Lateral error.
        *   $\phi$: Orientation error.
        *   $k_p, k_d$: Proportional and derivative gains.
    *   **Application to Differential Drive:** We can approximate the effect by controlling $v$ and $\omega$ to achieve a desired heading. The linear velocity $v$ is often controlled to maintain a constant speed or to reduce lateral error.

*   **PID Control:** A classic feedback control strategy that can be applied to regulate the robot's linear and angular velocities to match desired values derived from the path.
    *   **Objective:** Make the robot's current state $(x, y, \theta)$ match a desired state on the path.
    *   **Control:** Calculate the error between the desired and actual velocities (or positions) and use proportional, integral, and derivative terms to compute the control commands ($v$ and $\omega$).
    *   **Example:** If the path dictates a desired linear velocity $v_d$ and angular velocity $\omega_d$, a PID controller can be used to compute wheel velocities $v_l, v_r$ to achieve these.

##### 2.2.2 Control of Steered Robots

For a steered robot, we need to control both its linear velocity $v$ and its steering angle $\delta$.

*   **Pure Pursuit for Steered Robots:**
    *   **Concept:** Similar to the differential drive version, but the steering angle $\delta$ is directly controlled to steer towards the lookahead point.
    *   **Control Law:** The desired angular velocity $\omega$ is calculated to steer towards the lookahead point. Then, the steering angle $\delta$ is computed using the kinematic model: $\tan(\delta) = \frac{L \omega}{v}$.
    *   **Implementation:**
        1.  Determine the lookahead point $(x_{la}, y_{la})$ on the path.
        2.  Calculate the heading $\alpha$ to the lookahead point: $\alpha = \operatorname{atan2}(y_{la}-y, x_{la}-x)$.
        3.  Calculate the required angular velocity $\omega$ to align the robot's heading with $\alpha$: $\omega = k_p (\alpha - \theta)$.
        4.  Calculate the steering angle: $\delta = \operatorname{atan2}(L \omega, v_{target})$, where $v_{target}$ is the desired forward velocity.

*   **Stanley Controller:**
    *   **Concept:** Minimizes both lateral error ($e$) and orientation error ($\phi$) relative to the path.
    *   **Control Law:**
        *   The front-wheel steering angle $\delta$ is controlled by:
            $\delta = \arctan\left(\frac{L \cdot \text{error\_to\_path}}{k_p + \text{distance\_to\_lookahead}}\right)$
        *   Where:
            *   `error_to_path` is the lateral error $e$.
            *   `distance_to_lookahead` is the distance along the path to the closest point.
            *   $k_p$ is a controller gain.
    *   **Alternative Formulation (closer to the one for differential drive):**
        $\delta = \phi + \arctan\left(\frac{k_p e}{v + k_{slow} \cdot v}\right)$
        *   $\phi$: Orientation error.
        *   $e$: Lateral error.
        *   $v$: Robot's current forward velocity.
        *   $k_p, k_{slow}$: Controller gains.
    *   **Key Insight:** The $\arctan(\frac{L \cdot \text{error\_to\_path}}{k_p + \text{distance\_to\_lookahead}})$ term steers the robot towards the path. The $\phi$ term ensures the robot's heading aligns with the path tangent. (Refer to Corke, Chapter 10 for a detailed explanation and implementation).

*   **Model Predictive Control (MPC):** A more advanced technique that optimizes future control inputs over a prediction horizon, considering the robot's kinematic and dynamic constraints. While powerful, it's computationally more intensive.

---

### 3. Practical Considerations and Implementation (CO5, CO6)

*   **Discretization:** Real-world control systems operate at discrete time steps. The continuous-time kinematic models are discretized using numerical integration methods (e.g., Euler, Runge-Kutta).
    *   For differential drive:
        *   $x_{k+1} = x_k + v_k \cos(\theta_k) \Delta t$
        *   $y_{k+1} = y_k + v_k \sin(\theta_k) \Delta t$
        *   $\theta_{k+1} = \theta_k + \omega_k \Delta t$
    *   For steered robot:
        *   $x_{k+1} = x_k + v_k \cos(\theta_k) \Delta t$
        *   $y_{k+1} = y_k + v_k \sin(\theta_k) \Delta t$
        *   $\theta_{k+1} = \theta_k + \frac{v_k}{L} \tan(\delta_k) \Delta t$

*   **Choosing Gains ($k_p, k_d$, etc.):** Tuning these parameters is crucial for achieving stable and accurate path following. This often involves empirical methods or systematic tuning procedures.

*   **Path Representation:** Paths can be represented as a series of waypoints, polynomial curves (e.g., splines), or other mathematical functions.

*   **Controller Selection:** The choice of controller (Pure Pursuit, Stanley, PID) depends on factors like desired accuracy, computational resources, and the complexity of the path.

*   **Velocity Control:** In addition to steering, controlling the forward velocity $v$ is important for efficient path following. This can be done by adjusting $v$ based on the lateral error or to achieve a desired speed profile along the path.

*   **Reference Books and Examples:**
    *   **Peter Corke's "Robotics, Vision and Control":** Provides MATLAB examples for implementing path following controllers for various robot types, including steered robots. Chapter 10 is particularly relevant.
    *   **Siegwart & Nourbakhsh's "Introduction to Autonomous Mobile Robots":** Covers fundamental concepts of differential drive kinematics and basic control strategies in Chapters 3 and 7.

---

### 4. Types of Locomotion (CO1)

While this topic primarily focuses on control, understanding locomotion types provides context.

*   **Differential Drive:** Mentioned above. Simple to control, but has zero turning radius and can spin in place. Good for indoor environments.
*   **Ackermann Steering (Car-like):** Mentioned above. More natural for outdoor movement, but has a non-zero turning radius and cannot turn in place.
*   **Omnidirectional Drive:** Uses wheels (e.g., mecanum wheels, omni-wheels) that allow movement in any direction without changing orientation. Offers high maneuverability but can be complex to control and less efficient.
*   **Other Types:** Wheeled (tricycle, synchro-drive), Legged, Wheeled-Legged, Flying, Underwater.

---

### Practice Questions and Exercises

**Question 1:**
Derive the discrete-time kinematic equations for a differential drive robot with control inputs $v_l$ and $v_r$ (left and right wheel velocities) and wheelbase $b$. Assume a simple Euler integration.

**Answer:**
The continuous-time equations are:
$\dot{x} = \frac{v_l + v_r}{2} \cos(\theta)$
$\dot{y} = \frac{v_l + v_r}{2} \sin(\theta)$
$\dot{\theta} = \frac{v_r - v_l}{b}$

Using Euler integration with time step $\Delta t$:
$x_{k+1} = x_k + \frac{v_{l,k} + v_{r,k}}{2} \cos(\theta_k) \Delta t$
$y_{k+1} = y_k + \frac{v_{l,k} + v_{r,k}}{2} \sin(\theta_k) \Delta t$
$\theta_{k+1} = \theta_k + \frac{v_{r,k} - v_{l,k}}{b} \Delta t$

**Question 2:**
A steered robot has a wheelbase $L = 1.5$ meters. If the robot is moving at a forward velocity $v = 2$ m/s and needs to achieve an angular velocity $\omega = 0.5$ rad/s, what steering angle $\delta$ should its front wheels have?

**Answer:**
The kinematic relationship for a steered robot is $\omega = \frac{v}{L} \tan(\delta)$.
Rearranging for $\delta$:
$\tan(\delta) = \frac{L \omega}{v}$
$\tan(\delta) = \frac{1.5 \text{ m} \times 0.5 \text{ rad/s}}{2 \text{ m/s}} = \frac{0.75}{2} = 0.375$
$\delta = \arctan(0.375)$
$\delta \approx 20.56^\circ$

**Question 3:**
Consider a differential drive robot. If you want to turn in place to the right by 90 degrees ($\pi/2$ radians) with an angular velocity of $0.2$ rad/s, and the wheelbase $b = 0.5$ meters, what should be the velocities of the left ($v_l$) and right ($v_r$) wheels?

**Answer:**
For turning in place, the robot's linear velocity is zero ($v=0$), meaning $v_l + v_r = 0$, so $v_r = -v_l$.
The angular velocity is $\omega = \frac{v_r - v_l}{b}$.
We are given $\omega = -0.2$ rad/s (negative for right turn) and $b = 0.5$ m.
$-0.2 = \frac{v_r - v_l}{0.5}$
$-0.1 = v_r - v_l$
Substitute $v_r = -v_l$:
$-0.1 = -v_l - v_l$
$-0.1 = -2 v_l$
$v_l = \frac{-0.1}{-2} = 0.05$ m/s
Then, $v_r = -v_l = -0.05$ m/s.
The robot should drive its left wheel forward at 0.05 m/s and its right wheel backward at 0.05 m/s.

---

### Important Points to Remember

*   **Kinematic models describe the relationship between control inputs and the robot's motion, independent of forces.**
*   **Differential drive robots are controlled by the linear and angular velocities of their two drive wheels.**
*   **Steered robots are controlled by their forward velocity and the steering angle of their front wheels.**
*   **Path following aims to keep the robot on a given geometric path.**
*   **Pure Pursuit and Stanley controllers are common methods for path following, aiming to minimize errors relative to the path.**
*   **Feedback control (e.g., PID) is essential for real-world path following, adjusting control inputs based on measured errors.**
*   **Discretization is necessary for implementing control laws on digital computers.**
*   **The choice of controller and its parameters significantly impacts performance.**

---

### Alignment with Course Outcomes:

*   **CO1: Familiarise types of locomotion for mobile Robots (Knowledge Level: K2)** - Section 3 briefly touches upon different locomotion types, providing context for the robots discussed.
*   **CO2: Derive the kinematic model of mobile robots (Knowledge Level: K4)** - Section 1 thoroughly covers the derivation and equations for both differential drive and steered robots.
*   **CO3: Derive dynamic model of mobile robots (Knowledge Level: K4)** - While this topic focuses on kinematics, understanding kinematics is a prerequisite for dynamics. Dynamics would involve forces and torques.
*   **CO4: Choose appropriate Sensors for mobile robot navigation (Knowledge Level: K3)** - Sensors (like encoders for wheel speeds, IMUs for orientation, cameras/LIDAR for localization) are implicitly used to measure the robot's state and provide feedback for control, though sensor selection is not the primary focus here.
*   **CO5: Perform navigation and path planning mobile robots (Knowledge Level: K3)** - This topic is a core component of path planning and execution. We learn *how* to make the robot follow a plan.
*   **CO6: Control the mobile robots to follow different paths (Knowledge Level: K3)** - Section 2 directly addresses this by explaining control strategies for path following.

This module builds upon the understanding of kinematic models to implement controllers that enable the robot to execute planned paths.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
