---
title: "Wheeled Mobile Robots"
subject: "MOBILE ROBOTICS"
module: "Module 1: Introduction"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf480446409c"
status: "completed"
scrapedAt: "2026-05-20T18:14:59.279Z"
---
# Mobile Robotics: Module 1 - Introduction to Wheeled Mobile Robots

## 1. Introduction to Mobile Robotics

Mobile robotics is a field of robotics concerned with the design, construction, operation, and application of robots that can move autonomously. This module introduces the fundamental concepts of mobile robots, focusing on wheeled mobile robots as a primary locomotion method.

**Key Concepts:**

*   **Robot:** A machine capable of carrying out a complex series of actions automatically, especially one programmable by a computer.
*   **Autonomy:** The ability of a robot to perform tasks and make decisions without direct human intervention.
*   **Mobile Robot:** A robot capable of self-locomotion, allowing it to traverse its environment.
*   **Locomotion:** The means by which a robot moves.

**Importance of Mobile Robots:**

Mobile robots are crucial for applications where humans cannot or should not go, such as:

*   Exploration (e.g., space, deep sea)
*   Hazardous environment operations (e.g., disaster response, nuclear decommissioning)
*   Logistics and transportation (e.g., warehouse automation, autonomous vehicles)
*   Surveillance and security
*   Healthcare and personal assistance

**Textbook References:**

*   Siegwart, R., & Nourbakhsh, I. R. (2011). *Introduction to Autonomous Mobile Robots*. The MIT Press. (Chapter 1)
*   Corke, P. (2011). *Robotics, Vision and Control: Fundamental Algorithms in MATLAB*. Springer Tracts in Advanced Robotics. (Chapter 1)

---

## 2. Types of Locomotion for Mobile Robots

Understanding different locomotion methods is fundamental to choosing the right robot for a specific task. While this module focuses on wheeled robots, it's important to be aware of other types.

**Course Outcome:** CO1: Familiarise types of locomotion for mobile Robots (Knowledge Level: K2)

### 2.1 Wheeled Locomotion

Wheeled locomotion is the most common and energy-efficient form of locomotion for robots operating on relatively flat and firm surfaces.

**Advantages:**

*   High speed on suitable terrains.
*   Energy-efficient.
*   Simple control for basic movements.
*   Good maneuverability with appropriate wheel configurations.

**Disadvantages:**

*   Limited ability to overcome obstacles or uneven terrain.
*   Can get stuck on soft surfaces or slippery conditions.

### 2.2 Legged Locomotion

Legged robots (bipedal, quadrupedal, hexapedal, etc.) mimic biological locomotion, offering excellent mobility over rough terrain and the ability to step over obstacles.

**Advantages:**

*   Excellent off-road capability.
*   Ability to climb stairs and overcome obstacles.
*   Can maintain stability on uneven surfaces.

**Disadvantages:**

*   More complex mechanics and control systems.
*   Lower energy efficiency compared to wheeled robots.
*   Slower speeds on flat surfaces.

**Textbook Reference:**

*   Siegwart, R., & Nourbakhsh, I. R. (2011). *Introduction to Autonomous Mobile Robots*. The MIT Press. (Chapter 2)

### 2.3 Tracked Locomotion

Tracked robots use continuous tracks (like tanks) to distribute weight and gain traction, enabling movement over soft or uneven surfaces.

**Advantages:**

*   Good traction on soft or slippery surfaces.
*   Ability to traverse moderate inclines and uneven terrain.
*   Distributes weight to reduce ground pressure.

**Disadvantages:**

*   Lower speed and maneuverability compared to wheels on flat surfaces.
*   Can cause damage to delicate surfaces.
*   Higher power consumption than wheels.

### 2.4 Aerial Locomotion

Robots that fly (e.g., drones, quadcopters) offer unparalleled freedom of movement, able to navigate 3D space and avoid ground-based obstacles.

**Advantages:**

*   Access to inaccessible areas.
*   3D navigation.
*   Speed and agility.

**Disadvantages:**

*   Limited flight time due to battery constraints.
*   Susceptible to wind and weather conditions.
*   Complex control and stabilization.

### 2.5 Aquatic/Underwater Locomotion

Robots designed for water-based environments (e.g., AUVs, ROVs) enable exploration and operations underwater.

**Advantages:**

*   Exploration and operation in aquatic environments.
*   Can carry significant payloads.

**Disadvantages:**

*   High drag forces.
*   Pressure challenges at depth.
*   Communication difficulties.

---

## 3. Wheeled Mobile Robots: Kinematics

Kinematics deals with the motion of robots without considering the forces that cause the motion. For wheeled mobile robots, this involves describing their position, orientation, and velocities.

**Course Outcome:** CO2: Derive the kinematic model of mobile robots (Knowledge Level: K4)

### 3.1 Coordinate Frames

*   **World Frame ($\mathcal{W}$):** A fixed, global reference frame for representing the robot's position and the environment.
*   **Robot Frame ($\mathcal{R}$):** A frame attached to the robot, typically at its center of geometry or center of rotation.
*   **Wheel Frames ($\mathcal{W}_i$):** Frames attached to individual wheels, usually with the z-axis aligned with the wheel's axle.

### 3.2 Robot Configuration

The configuration of a mobile robot is its pose (position and orientation) in a given frame. For a robot operating on a 2D plane, its configuration is typically described by:

*   $(x, y)$: The position of a reference point (e.g., center of the robot) in the world frame.
*   $\theta$: The orientation (heading) of the robot relative to the world frame's x-axis.

So, the configuration vector is $\mathbf{q} = [x, y, \theta]^T$.

### 3.3 Velocity Kinematics

Velocity kinematics describes the relationship between the robot's generalized velocities and the velocities of its wheels.

*   **Generalized Velocity Vector:** $\dot{\mathbf{q}} = [\dot{x}, \dot{y}, \dot{\theta}]^T$, representing the linear and angular velocities of the robot.

The fundamental equation relating these is:

$\dot{\mathbf{q}} = J(\mathbf{q}) \mathbf{v}$

where:
*   $J(\mathbf{q})$ is the **Jacobian matrix** that maps wheel velocities ($\mathbf{v}$) to robot generalized velocities ($\dot{\mathbf{q}}$).
*   $\mathbf{v}$ is the vector of wheel velocities (e.g., linear velocity of each driven wheel).

### 3.4 Common Wheeled Mobile Robot Configurations

#### 3.4.1 Differential Drive Robot

*   **Description:** Two independently driven wheels on a common axle, with a caster or passive wheel for stability.
*   **Kinematic Model:**
    *   The instantaneous center of curvature (ICC) lies on the perpendicular bisector of the line connecting the two drive wheels.
    *   The robot's velocity is tangential to the circle defined by the ICC.
    *   The robot can only move forward/backward and rotate in place. It cannot move sideways.
    *   Let $v_L$ be the velocity of the left wheel and $v_R$ be the velocity of the right wheel.
    *   Let $L$ be the distance between the wheels (wheelbase).
    *   The forward linear velocity $v = \frac{v_L + v_R}{2}$.
    *   The angular velocity $\omega = \frac{v_R - v_L}{L}$.

    The kinematic equations are:
    $\dot{x} = v \cos(\theta) = \frac{v_L + v_R}{2} \cos(\theta)$
    $\dot{y} = v \sin(\theta) = \frac{v_L + v_R}{2} \sin(\theta)$
    $\dot{\theta} = \omega = \frac{v_R - v_L}{L}$

    Jacobian:
    $J(\mathbf{q}) = \begin{bmatrix} \cos(\theta) & 0 \\ \sin(\theta) & 0 \\ 0 & \frac{1}{L} \end{bmatrix}$
    $\mathbf{v} = \begin{bmatrix} v \\ \omega \end{bmatrix}$ (where v is the forward velocity and $\omega$ is the angular velocity of the robot, not wheel velocities)
    or if using wheel velocities directly:
    $J(\mathbf{q}) = \begin{bmatrix} \frac{1}{2}\cos(\theta) & \frac{1}{2}\cos(\theta) \\ \frac{1}{2}\sin(\theta) & \frac{1}{2}\sin(\theta) \\ -\frac{1}{2L} & \frac{1}{2L} \end{bmatrix}$
    $\mathbf{v}_{wheels} = \begin{bmatrix} v_L \\ v_R \end{bmatrix}$

*   **Example:** A typical vacuum cleaner robot.

**Textbook Reference:**

*   Siegwart, R., & Nourbakhsh, I. R. (2011). *Introduction to Autonomous Mobile Robots*. The MIT Press. (Chapter 3)
*   Corke, P. (2011). *Robotics, Vision and Control: Fundamental Algorithms in MATLAB*. Springer Tracts in Advanced Robotics. (Chapter 2)

#### 3.4.2 Unicycle Model

*   **Description:** A simplified model of a differential drive robot, where the motion is described by a forward linear velocity $v$ and an angular velocity $\omega$. It doesn't explicitly consider the wheels.
*   **Kinematic Equations:**
    $\dot{x} = v \cos(\theta)$
    $\dot{y} = v \sin(\theta)$
    $\dot{\theta} = \omega$

    Jacobian:
    $J(\mathbf{q}) = \begin{bmatrix} \cos(\theta) & 0 \\ \sin(\theta) & 0 \\ 0 & 1 \end{bmatrix}$
    $\mathbf{v} = \begin{bmatrix} v \\ \omega \end{bmatrix}$

*   **Importance:** Often used for higher-level path planning as it abstracts the underlying wheel mechanics.

#### 3.4.3 Tricycle/Unicycle with a Steering Wheel

*   **Description:** One steerable wheel at the front and one or two drive wheels at the rear (or vice-versa). Similar to a tricycle or bicycle.
*   **Kinematic Model:**
    *   The robot moves along a circle with its center at the steering point and radius equal to the steering angle.
    *   Let $v$ be the forward linear velocity.
    *   Let $\phi$ be the steering angle of the front wheel.
    *   Let $l$ be the distance between the front steering axis and the rear drive wheels (wheelbase).
    *   The angular velocity $\omega = \frac{v}{l} \tan(\phi)$.

    The kinematic equations are:
    $\dot{x} = v \cos(\theta)$
    $\dot{y} = v \sin(\theta)$
    $\dot{\theta} = \omega = \frac{v}{l} \tan(\phi)$

    Jacobian:
    $J(\mathbf{q}) = \begin{bmatrix} \cos(\theta) & 0 \\ \sin(\theta) & 0 \\ 0 & \frac{v}{l \cos^2(\phi)} \end{bmatrix}$
    $\mathbf{v} = \begin{bmatrix} v \\ \phi \end{bmatrix}$

*   **Example:** A child's tricycle.

#### 3.4.4 Car-like Robot (Ackermann Steering)

*   **Description:** Similar to a car, with a steerable front axle and fixed rear axle. Each front wheel can steer independently, but they are linked by the Ackermann steering geometry to avoid tire scrub.
*   **Kinematic Model:**
    *   The ICC lies at the intersection of the perpendicular bisector of the rear axle and the line of the front wheel steering axis.
    *   Let $v$ be the forward velocity.
    *   Let $\phi_L$ and $\phi_R$ be the steering angles of the left and right front wheels.
    *   Let $W$ be the width of the front axle.
    *   The effective steering angle $\phi$ and the radius of curvature are determined by the Ackermann steering geometry.
    *   $\omega = \frac{v}{R}$ where $R$ is the radius of curvature.

    The kinematic equations are analogous to the tricycle model but consider the steering angles of both wheels. For simplification, it's often modeled using the average steering angle and axle width.

    $\dot{x} = v \cos(\theta)$
    $\dot{y} = v \sin(\theta)$
    $\dot{\theta} = \frac{v}{l} \tan(\phi)$ (where $\phi$ is the effective steering angle)

    Jacobian:
    $J(\mathbf{q}) = \begin{bmatrix} \cos(\theta) & 0 \\ \sin(\theta) & 0 \\ 0 & \frac{v}{l \cos^2(\phi)} \end{bmatrix}$
    $\mathbf{v} = \begin{bmatrix} v \\ \phi \end{bmatrix}$

*   **Example:** Most road vehicles.

#### 3.4.5 Omnidirectional Robots (Mecanum Wheels, Swedish Wheels)

*   **Description:** Robots equipped with special wheels that allow for movement in any direction (forward, backward, sideways, and rotation) with a single set of wheels.
    *   **Mecanum Wheels:** Wheels with rollers mounted on their circumference at a 45-degree angle.
    *   **Swedish Wheels (3D Omni-directional Wheels):** Wheels with smaller rollers at 90 degrees to the main wheel axis.
*   **Kinematic Model:**
    *   These robots are **holonomic** or nearly holonomic, meaning they can move instantaneously in any direction within their plane.
    *   The robot's velocity vector $[\dot{x}, \dot{y}]$ can be directly controlled.
    *   The velocity commands for individual wheels are derived from the desired robot linear and angular velocities.
    *   Let $\mathbf{v}_r = [\dot{x}, \dot{y}, \dot{\theta}]^T$ be the desired robot velocity.
    *   The wheel velocities $\mathbf{v}_{wheels}$ can be found via a pseudoinverse of the Jacobian: $\mathbf{v}_{wheels} = J^+(\mathbf{q}) \mathbf{v}_r$.

    For a robot with Mecanum wheels, the Jacobian relates the robot's Cartesian velocity $[\dot{x}, \dot{y}, \dot{\theta}]^T$ to the velocities of the four wheels ($v_{w1}, v_{w2}, v_{w3}, v_{w4}$). The Jacobian matrix depends on the placement of the wheels and the angle of the rollers.

*   **Example:** Robots used in precise maneuvering applications, some industrial AGVs.

#### 3.4.6 Omnidirectional with Omni-Wheels (Swedish Wheels)

*   **Description:** Uses wheels with free-spinning rollers on their circumference. Each wheel is driven by a motor.
*   **Kinematic Model:**
    *   Similar to Mecanum, these are often considered holonomic.
    *   The Jacobian relates the robot's Cartesian velocity $[\dot{x}, \dot{y}, \dot{\theta}]^T$ to the velocities of the wheels.
    *   The velocity of each wheel component is crucial.

*   **Example:** Robots requiring high maneuverability in confined spaces.

### 3.5 Non-holonomic vs. Holonomic Robots

*   **Non-holonomic:** Robots whose velocity constraints are non-integrable. This means they cannot achieve arbitrary velocities in all directions in the configuration space. For example, differential drive robots cannot move sideways directly. Their constraints are often related to the fact that wheels rolling without slipping have velocity constraints in specific directions.
*   **Holonomic:** Robots whose velocity constraints are integrable. They can achieve arbitrary velocities in all directions, effectively allowing them to move in any direction within their operational plane. Omnidirectional robots are typically holonomic.

**Key Takeaway:** The ability to move sideways is a key differentiator. Non-holonomic robots require coordinated steering and forward motion to change their lateral position.

---

## 4. Wheeled Mobile Robots: Dynamics

Dynamics deals with the relationship between forces, torques, and the resulting motion of the robot. Understanding dynamics is crucial for precise control, especially when dealing with inertia, friction, and external forces.

**Course Outcome:** CO3: Derive dynamic model of mobile robots (Knowledge Level: K4)

### 4.1 Forces and Torques

*   **Driving Forces/Torques:** Applied by motors to the wheels to produce motion.
*   **Friction Forces:**
    *   **Rolling Resistance:** Opposes motion due to deformation of the wheel and surface.
    *   **Stiction:** Static friction that must be overcome to initiate motion.
    *   **Sliding Friction:** Occurs when wheels slip.
*   **Inertial Forces:** Due to the robot's mass and angular inertia.
*   **Gravity:** Acts downwards, but its effect is often cancelled by the ground reaction forces on flat surfaces.
*   **External Forces:** Obstacles, slopes, air resistance.

### 4.2 Modeling Approaches

#### 4.2.1 Newton-Euler Formulation

This approach uses Newton's second law for linear motion and Euler's equation for rotational motion.

$M\ddot{\mathbf{x}} = \mathbf{F}_{total}$
$I\ddot{\boldsymbol{\Theta}} = \boldsymbol{\tau}_{total}$

where:
*   $M$ is the mass.
*   $\ddot{\mathbf{x}}$ is the linear acceleration.
*   $\mathbf{F}_{total}$ is the sum of all forces.
*   $I$ is the moment of inertia.
*   $\ddot{\boldsymbol{\Theta}}$ is the angular acceleration.
*   $\boldsymbol{\tau}_{total}$ is the sum of all torques.

For a mobile robot, this becomes more complex due to the wheeled contact and the need to relate forces to wheel velocities and torques.

#### 4.2.2 Lagrangian Formulation

This method uses energy concepts (kinetic and potential energy) to derive the equations of motion.

$L = T - V$ (Lagrangian = Kinetic Energy - Potential Energy)
$\frac{d}{dt}\left(\frac{\partial L}{\partial \dot{q}_i}\right) - \frac{\partial L}{\partial q_i} = Q_i$

where:
*   $q_i$ are the generalized coordinates.
*   $\dot{q}_i$ are the generalized velocities.
*   $Q_i$ are the generalized non-conservative forces/torques.

This approach is often preferred for robots because it directly uses generalized coordinates and velocities, which are naturally defined for robotic systems.

### 4.3 Dynamic Model of a Differential Drive Robot (Simplified)

Let's consider a simplified model focusing on the forces and torques at the wheel contact points. We'll assume a flat surface and neglect gravity and external disturbances initially.

*   **Robot State:** $(x, y, \theta)$ and their derivatives.
*   **Wheel States:** $(v_L, v_R)$ and their derivatives (or angular positions $\phi_L, \phi_R$ and velocities $\dot{\phi}_L, \dot{\phi}_R$).
*   **Robot Linear Velocity:** $v = \frac{R(v_L + v_R)}{2}$ (where R is wheel radius)
*   **Robot Angular Velocity:** $\omega = \frac{R(v_R - v_L)}{L}$

**Key Dynamics Considerations:**

1.  **Motor Torque to Wheel Linear Velocity:** The motor torques ($\tau_L, \tau_R$) applied to the wheels relate to the wheel's angular acceleration and the torque needed to overcome inertia, friction, and external forces.
    $\tau_L = I_w \ddot{\phi}_L + b_w \dot{\phi}_L + F_{fric, L} R + \tau_{ext, L}$
    $\tau_R = I_w \ddot{\phi}_R + b_w \dot{\phi}_R + F_{fric, R} R + \tau_{ext, R}$
    where $I_w$ is wheel inertia, $b_w$ is viscous friction coefficient, $F_{fric}$ are friction forces.

2.  **Wheel Velocities to Robot Velocities:** This is from kinematics.

3.  **Robot Velocities to Robot Accelerations:** Differentiating the kinematic equations.
    $\ddot{x} = \dot{v} \cos(\theta) - v \dot{\theta} \sin(\theta)$
    $\ddot{y} = \dot{v} \sin(\theta) + v \dot{\theta} \cos(\theta)$
    $\ddot{\theta} = \dot{\omega}$

4.  **Inertial Forces on the Robot Body:** The robot's body has inertia. If we consider the center of mass (CoM) of the robot body, its acceleration is related to net forces.
    Let $\mathbf{p}_{CoM}$ be the position of the CoM relative to the robot frame.
    $\mathbf{F}_{net, body} = m_{body} \ddot{\mathbf{p}}_{CoM}$ (in inertial frame)
    $\boldsymbol{\tau}_{net, body} = I_{body} \ddot{\boldsymbol{\theta}}$ (about CoM)

5.  **Forces at the Wheel-Ground Contact:** The net forces at the contact points between the wheels and the ground must balance these inertial forces and any external forces. This is where the non-holonomic constraint comes into play implicitly. The forces exerted by the ground on the wheels are what propel and steer the robot.

**Simplified Dynamic Model for Control:**

A common approach for control design is to use the kinematic model and then incorporate a simplified dynamic model that relates control inputs (voltages/currents to motors) to wheel velocities, often through transfer functions or simplified equations of motion for the wheels and motors.

For example, a simplified model might consider:
$J_{total} \ddot{\phi} + B \dot{\phi} = \tau_{motor}$
where $J_{total}$ is the total inertia (motor + wheel), $B$ is the total friction/damping, $\phi$ is the wheel angle, and $\tau_{motor}$ is the motor torque.

**Textbook References:**

*   Siegwart, R., & Nourbakhsh, I. R. (2011). *Introduction to Autonomous Mobile Robots*. The MIT Press. (Chapter 3)
*   Corke, P. (2011). *Robotics, Vision and Control: Fundamental Algorithms in MATLAB*. Springer Tracts in Advanced Robotics. (Chapter 5)
*   Tzafestas, S. G. (Year). *Introduction to Mobile Robot Control*. Elsevier. (Chapters relevant to dynamics)

---

## 5. Sensors for Mobile Robot Navigation

Sensors are the "eyes and ears" of a mobile robot, providing information about its own state and the environment. Choosing appropriate sensors is crucial for effective navigation.

**Course Outcome:** CO4: Choose appropriate Sensors for mobile robot navigation (Knowledge Level: K3)

### 5.1 Internal Sensors (Proprioceptive)

These sensors measure the robot's own state.

#### 5.1.1 Encoders

*   **Type:** Rotary encoders on motor shafts.
*   **Function:** Measure the angular position and velocity of the wheels.
*   **Usage:** Odometry (estimating position and orientation by integrating wheel movements).
*   **Pros:** High resolution, relatively inexpensive, provides direct feedback on wheel motion.
*   **Cons:** Accumulate errors over time (drift), susceptible to wheel slip, measure wheel rotation, not robot motion directly.

#### 5.1.2 Inertial Measurement Units (IMUs)

*   **Type:** Accelerometers, Gyroscopes, Magnetometers.
*   **Function:** Measure linear acceleration, angular velocity, and orientation (often combined into a single unit).
*   **Usage:** Estimating robot attitude, detecting sudden movements, aiding odometry.
*   **Pros:** Provide high-frequency data, good for detecting rapid changes.
*   **Cons:** Drift (especially gyroscopes), sensitive to vibrations, magnetometers affected by magnetic fields.

#### 5.1.3 GPS (Global Positioning System)

*   **Type:** Satellite-based positioning system.
*   **Function:** Provides absolute position (latitude, longitude, altitude) and velocity.
*   **Usage:** Outdoor localization.
*   **Pros:** Global coverage, absolute positioning.
*   **Cons:** Requires clear sky view, low accuracy indoors or in urban canyons, low update rate.

### 5.2 External Sensors (Exteroceptive)

These sensors measure properties of the environment.

#### 5.2.1 Proximity Sensors (Infrared, Ultrasonic)

*   **Type:** Emit a signal (IR or ultrasound) and measure the time it takes for the reflection to return.
*   **Function:** Detect the presence and distance to nearby obstacles.
*   **Usage:** Obstacle avoidance, wall following.
*   **Pros:** Simple, inexpensive, effective for close-range detection.
*   **Cons:** Limited range, narrow field of view, affected by surface properties (color, reflectivity, angle), can give false readings.

#### 5.2.2 Lidar (Light Detection and Ranging)

*   **Type:** Emit laser pulses and measure the time of flight or phase shift of reflected light.
*   **Function:** Create a 2D or 3D point cloud map of the environment, providing accurate distance measurements.
*   **Usage:** Mapping, localization, obstacle detection and avoidance.
*   **Pros:** High accuracy, good range, works in various lighting conditions, provides detailed geometric information.
*   **Cons:** Expensive, can be affected by highly reflective or transparent surfaces, can have blind spots.

#### 5.2.3 Cameras (Vision Sensors)

*   **Type:** Monocular, stereo, RGB-D cameras.
*   **Function:** Capture visual information of the environment.
*   **Usage:** Object recognition, visual odometry, visual SLAM, lane following.
*   **Pros:** Rich information, can identify objects, relatively inexpensive (especially monocular).
*   **Cons:** Sensitive to lighting conditions, can be computationally intensive, depth estimation with monocular cameras is challenging. RGB-D cameras provide depth but have limited range and resolution.

#### 5.2.4 Radar (Radio Detection and Ranging)

*   **Type:** Emit radio waves and measure reflections.
*   **Function:** Detect objects and their distance and velocity.
*   **Usage:** Long-range detection, works well in adverse weather.
*   **Pros:** Good range, works in fog, rain, and darkness.
*   **Cons:** Lower resolution than Lidar, can be affected by metallic objects.

#### 5.2.5 Sonar (Similar to Ultrasonic)

*   **Type:** Emit sound waves.
*   **Function:** Detect objects and their distance.
*   **Usage:** Similar to ultrasonic sensors.
*   **Pros:** Relatively inexpensive.
*   **Cons:** Limited resolution and range, affected by surface properties.

### 5.3 Sensor Fusion

*   **Concept:** Combining data from multiple sensors to achieve a more accurate, reliable, and comprehensive understanding of the robot's state and environment than any single sensor could provide.
*   **Techniques:** Kalman Filters (EKF, UKF), Particle Filters, Bayesian networks.
*   **Importance:** Overcomes limitations of individual sensors, improves robustness.

**Example:** Combining wheel encoder data (for motion estimation) with IMU data (to correct for drift and detect rotation) and Lidar data (for accurate mapping and localization) provides a more robust and accurate robot pose estimate.

**Textbook Reference:**

*   Siegwart, R., & Nourbakhsh, I. R. (2011). *Introduction to Autonomous Mobile Robots*. The MIT Press. (Chapter 4)
*   Thrun, S., Burgard, W., & Fox, D. (2005). *Probabilistic Robotics*. MIT Press. (Chapters on sensors and filtering)

---

## 6. Navigation and Path Planning

Navigation is the process of determining and controlling the robot's movement from a starting point to a goal point. Path planning is a core component of navigation.

**Course Outcome:** CO5: Perform navigation and path planning mobile robots (Knowledge Level: K3)

### 6.1 Core Components of Navigation

1.  **Localization:** Estimating the robot's current pose (position and orientation) in a known map or environment.
2.  **Mapping:** Building a representation of the environment. This can be done online (SLAM - Simultaneous Localization and Mapping) or offline.
3.  **Path Planning:** Computing a sequence of actions or a path from the current pose to the goal pose.
4.  **Motion Control:** Executing the planned path by controlling the robot's actuators.

### 6.2 Path Planning Algorithms

Path planning algorithms aim to find a collision-free path between a start and a goal configuration.

#### 6.2.1 Graph-Search Algorithms

These algorithms discretize the environment into a graph and search for the shortest path.

*   **Dijkstra's Algorithm:** Finds the shortest path in a graph with non-negative edge weights.
    *   **How it works:** Explores outward from the start node, always expanding the node with the lowest cost found so far.
    *   **Pros:** Guarantees the shortest path.
    *   **Cons:** Can be computationally expensive for large graphs.

*   **A\* Search Algorithm:** An informed search algorithm that uses a heuristic function to guide the search towards the goal.
    *   **How it works:** Considers the cost to reach a node ($g(n)$) plus an estimated cost from that node to the goal ($h(n)$). It prioritizes nodes with the lowest $f(n) = g(n) + h(n)$.
    *   **Pros:** More efficient than Dijkstra's, often finds the shortest path if the heuristic is admissible (never overestimates the cost).
    *   **Cons:** Performance depends on the quality of the heuristic.

#### 6.2.2 Sampling-Based Algorithms

These algorithms construct a path by randomly sampling configurations in the workspace and connecting them to build a path.

*   **Probabilistic Roadmap (PRM):**
    *   **How it works:** Samples random configurations, checks for collisions, and connects nearby collision-free configurations with simple paths to form a roadmap graph. The path is then found by searching this roadmap.
    *   **Pros:** Efficient in high-dimensional spaces, good for static environments.
    *   **Cons:** Can be slow to find a path in narrow passages, doesn't guarantee optimality.

*   **Rapidly-exploring Random Tree (RRT):**
    *   **How it works:** Grows a tree of configurations from the start state by randomly sampling and extending the tree towards the sampled point. It's biased towards unexplored areas.
    *   **Pros:** Efficient for exploring large, complex spaces, good for non-holonomic planning.
    *   **Cons:** The paths generated are often not optimal, can be biased.

#### 6.2.3 Potential Field Methods

*   **Concept:** The robot is treated as a particle in a "potential field." The goal exerts an attractive force, while obstacles exert repulsive forces. The robot follows the gradient of the potential field.
*   **Pros:** Simple to implement, reactive to obstacles.
*   **Cons:** Can get stuck in local minima (areas where attractive and repulsive forces cancel out).

### 6.3 Localization Techniques

*   **Odometry:** Estimating pose by integrating wheel velocities. Prone to drift.
*   **Landmark-based Localization:** Using known features (landmarks) in the environment (e.g., from a map) to correct the estimated pose.
*   **SLAM (Simultaneous Localization and Mapping):** Building a map of an unknown environment while simultaneously localizing the robot within that map.
    *   **Filter-based SLAM:** E.g., Extended Kalman Filter (EKF-SLAM), Particle Filter SLAM.
    *   **Graph-based SLAM:** Represents the robot's trajectory and landmark observations as a graph and optimizes it.

**Textbook References:**

*   La Valle, S. M. (2009). *Planning Algorithms*. Cambridge University Press.
*   Siegwart, R., & Nourbakhsh, I. R. (2011). *Introduction to Autonomous Mobile Robots*. The MIT Press. (Chapters 6, 7)
*   Thrun, S., Burgard, W., & Fox, D. (2005). *Probabilistic Robotics*. MIT Press. (Chapters on localization and mapping)

---

## 7. Control of Mobile Robots

Motion control involves generating actuator commands to make the robot follow a desired path or trajectory.

**Course Outcome:** CO6: Control the mobile robots to follow different paths (Knowledge Level: K3)

### 7.1 Control Architectures

*   **Low-level Control:** Directly controls motor velocities/torques to achieve desired wheel velocities. Often PID controllers are used.
*   **Mid-level Control:** Tracks a desired trajectory in the robot's workspace (e.g., $(x, y, \theta)$).
*   **High-level Control:** Path planning, decision making.

### 7.2 Trajectory Tracking Control

The goal is to make the robot's actual pose $(x_r, y_r, \theta_r)$ follow a desired trajectory $(x_d(t), y_d(t), \theta_d(t))$.

#### 7.2.1 Pure Pursuit Controller

*   **Concept:** The robot steers towards a point on the desired path that is a fixed lookahead distance ahead.
*   **How it works:**
    1.  Select a "lookahead point" on the desired trajectory.
    2.  Calculate the distance from the robot's current position to this lookahead point.
    3.  Calculate the steering angle required to drive the robot towards the lookahead point. For a differential drive robot, this translates to controlling $v$ and $\omega$.
    4.  The curvature of the path to the lookahead point determines the steering command.
*   **Pros:** Intuitive, works well for many paths.
*   **Cons:** Can have difficulty with sharp turns or when the lookahead point is too close.

#### 7.2.2 Stanley Controller

*   **Concept:** Designed specifically for car-like robots, it combines a cross-track error term (distance to the nearest point on the path) with a heading error term (difference between robot's heading and path's heading).
*   **How it works:**
    1.  Find the closest point on the desired path to the robot's current position.
    2.  Calculate the cross-track error (perpendicular distance from robot to path).
    3.  Calculate the heading error (difference between robot's orientation and path's orientation at the closest point).
    4.  The control output (steering angle) is a combination of these two errors, often with a gain for each.
*   **Pros:** Explicitly handles heading and position errors, performs well for car-like robots.
*   **Cons:** Requires a smooth path, sensitive to the closest point selection.

#### 7.2.3 PID Control for Wheel Velocities

*   **Concept:** For a differential drive robot, controlling the linear velocity ($v$) and angular velocity ($\omega$) can be achieved using PID controllers. These desired $v$ and $\omega$ are then translated into $v_L$ and $v_R$ for the wheels.
*   **How it works:**
    1.  Calculate the error between desired $v$ and actual $v$.
    2.  Apply a PID controller to generate a command for the forward motion.
    3.  Calculate the error between desired $\omega$ and actual $\omega$.
    4.  Apply a PID controller to generate a command for the turning motion.
    5.  Convert the resulting $v$ and $\omega$ commands into individual wheel velocities ($v_L, v_R$).
*   **Pros:** Simple, widely used, effective for many applications.
*   **Cons:** Tuning can be challenging, may not handle complex dynamics or strong nonlinearities well.

#### 7.2.4 Model Predictive Control (MPC)

*   **Concept:** Uses a model of the robot's dynamics to predict its future behavior over a short time horizon and computes control inputs that optimize a cost function (e.g., minimizing tracking error while respecting constraints).
*   **Pros:** Can handle nonlinearities and constraints, provides optimal control over the prediction horizon.
*   **Cons:** Computationally intensive.

### 7.3 Path Following vs. Path Tracking

*   **Path Following:** The robot aims to reach a sequence of points in space, regardless of time. The focus is on geometric accuracy.
*   **Path Tracking:** The robot aims to follow a specific trajectory, which is a path with a time parameterization. The focus is on matching both the spatial path and the temporal behavior (velocity and acceleration).

**Textbook References:**

*   Corke, P. (2011). *Robotics, Vision and Control: Fundamental Algorithms in MATLAB*. Springer Tracts in Advanced Robotics. (Chapter 6)
*   Tzafestas, S. G. (Year). *Introduction to Mobile Robot Control*. Elsevier. (Chapters on trajectory tracking)

---

## 8. Practice Questions

**Question 1 (CO1):** List three distinct types of mobile robot locomotion and briefly describe an advantage and a disadvantage of each.

**Question 2 (CO2):** For a differential drive robot with wheels separated by a distance $L$, what are the kinematic equations relating its linear velocity $v$ and angular velocity $\omega$ to the individual wheel velocities $v_L$ and $v_R$?

**Question 3 (CO2):** Explain the difference between holonomic and non-holonomic mobile robots. Provide an example of each.

**Question 4 (CO4):** You are designing a mobile robot to navigate in a dimly lit warehouse with many shelves. Which sensors would you consider using for localization and obstacle avoidance, and why?

**Question 5 (CO5):** Describe the core idea behind the A\* search algorithm for path planning. What are its advantages over Dijkstra's algorithm?

**Question 6 (CO6):** What is the fundamental principle behind the Pure Pursuit control strategy?

---

## 9. Answers to Practice Questions

**Answer 1 (CO1):**
*   **Wheeled:**
    *   *Advantage:* High speed, energy-efficient on flat surfaces.
    *   *Disadvantage:* Limited ability to traverse rough terrain or overcome obstacles.
*   **Legged:**
    *   *Advantage:* Excellent off-road capability, can step over obstacles.
    *   *Disadvantage:* Complex mechanics and control, lower energy efficiency.
*   **Tracked:**
    *   *Advantage:* Good traction on soft or uneven surfaces.
    *   *Disadvantage:* Lower maneuverability on flat surfaces, can damage delicate floors.

**Answer 2 (CO2):**
For a differential drive robot with wheelbase $L$, left wheel velocity $v_L$, and right wheel velocity $v_R$:
*   Forward linear velocity: $v = \frac{v_L + v_R}{2}$
*   Angular velocity: $\omega = \frac{v_R - v_L}{L}$

The kinematic equations for $\dot{x}, \dot{y}, \dot{\theta}$ are:
$\dot{x} = v \cos(\theta) = \frac{v_L + v_R}{2} \cos(\theta)$
$\dot{y} = v \sin(\theta) = \frac{v_L + v_R}{2} \sin(\theta)$
$\dot{\theta} = \omega = \frac{v_R - v_L}{L}$

**Answer 3 (CO2):**
*   **Holonomic robots:** Have velocity constraints that are **integrable**. This means they can achieve any velocity (linear and angular) in their operational plane instantaneously. They are effectively able to move sideways.
    *   *Example:* Omnidirectional robots with Mecanum or Swedish wheels.
*   **Non-holonomic robots:** Have velocity constraints that are **non-integrable**. They cannot achieve arbitrary velocities in all directions in the plane. Their motion is constrained (e.g., they must move forward/backward and turn).
    *   *Example:* Differential drive robots, car-like robots.

**Answer 4 (CO4):**
For a dimly lit warehouse with shelves:

*   **Localization:**
    *   **Wheel Encoders + IMU:** For odometry, to estimate the robot's movement. The IMU helps correct for drift and detect angular motion. (Internal sensors).
    *   **Lidar:** Can be used for SLAM (Simultaneous Localization and Mapping) or scan matching against a pre-existing map. Lidar is robust to lighting conditions and provides accurate distance measurements to walls and shelves, enabling precise localization. (External sensor).
    *   *Optional:* If the warehouse has unique features or markers, cameras could be used for visual localization, but Lidar is generally more robust in varying light.

*   **Obstacle Avoidance:**
    *   **Lidar:** Essential for detecting shelves, racks, and other obstacles at a distance, providing a rich point cloud for navigation. (External sensor).
    *   **Ultrasonic/Infrared Sensors:** Useful for detecting obstacles at very close range, acting as a last-resort safety measure or for fine-tuning wall following. (External sensors).

**Answer 5 (CO5):**
The A\* search algorithm is a graph-search algorithm that finds the shortest path from a start node to a goal node. It works by prioritizing nodes based on the sum of two costs:
1.  $g(n)$: The actual cost from the start node to the current node $n$.
2.  $h(n)$: A heuristic estimate of the cost from the current node $n$ to the goal node.

The algorithm explores nodes with the lowest $f(n) = g(n) + h(n)$.
*   **Advantages over Dijkstra:** A\* is generally more efficient than Dijkstra's algorithm because the heuristic function $h(n)$ guides the search towards the goal, potentially exploring fewer nodes. Dijkstra's algorithm explores uniformly outwards from the start node without any directional guidance.

**Answer 6 (CO6):**
The fundamental principle of the Pure Pursuit controller is to steer the robot towards a "lookahead point" on the desired path. This lookahead point is selected based on a fixed lookahead distance. The robot calculates the curvature required to drive from its current position to this lookahead point. This approach directly translates the geometric path into steering commands.

---

## 10. Important Points to Remember

*   **Kinematics vs. Dynamics:** Kinematics describes *how* a robot moves (position, velocity), while dynamics describes *why* it moves (forces, torques, inertia).
*   **Non-holonomic Constraint:** The inability of many wheeled robots (like differential drives) to move instantaneously sideways is a critical non-holonomic constraint that influences path planning and control.
*   **Sensor Fusion is Key:** Relying on a single sensor is rarely sufficient for robust navigation. Combining data from multiple sensors (e.g., encoders, IMU, Lidar) is essential.
*   **Odometry Drift:** Wheel encoders provide velocity information but accumulate errors over time, leading to "drift." This necessitates correction from other sensors.
*   **Path Planning Trade-offs:** Algorithms like A\* offer optimality but can be slow. Sampling-based methods like RRT are faster in complex spaces but may not yield optimal paths.
*   **Control Objective:** The goal of trajectory tracking controllers is to minimize the error between the robot's actual pose and the desired trajectory.
*   **Model Accuracy:** The accuracy of kinematic and dynamic models significantly impacts the performance of path planning and control algorithms.

---
This concludes Module 1: Introduction to Wheeled Mobile Robots.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
