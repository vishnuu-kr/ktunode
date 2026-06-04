---
title: "Mobile manipulators"
subject: "MOBILE ROBOTICS"
module: "Module 1: Introduction"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf480446409f"
status: "completed"
scrapedAt: "2026-05-20T18:15:01.529Z"
---
# Mobile Robotics: Module 1: Introduction - Mobile Manipulators

---

## 1. Introduction to Mobile Manipulators

### 1.1. Definition and Purpose

**Definition:** A mobile manipulator is a robotic system that combines a mobile base with an articulated robotic arm (manipulator). This fusion allows the robot to move to different locations and perform manipulation tasks in those locations.

**Purpose:**
*   **Task Execution in Dynamic Environments:** To perform tasks that require both mobility and manipulation in environments that are not static or pre-defined.
*   **Extended Workspace:** To overcome the limited workspace of stationary manipulators by bringing the end-effector to the task location.
*   **Versatility:** To perform a wider range of tasks, such as inspection, assembly, material handling, exploration, and servicing in complex and unstructured environments.

**Key Components:**
*   **Mobile Base:** Provides locomotion and positioning capabilities. Can be wheeled, tracked, legged, or even aerial.
*   **Articulated Manipulator:** A robotic arm with multiple degrees of freedom (DOF) for grasping, lifting, placing, and interacting with objects.
*   **End-effector:** The tool attached to the end of the manipulator (e.g., gripper, camera, sensor).
*   **Sensors:** For navigation (e.g., odometry, IMU, LiDAR, cameras) and for task execution (e.g., force sensors, vision sensors).
*   **Control System:** Manages both the mobile base and the manipulator, coordinating their movements.

---

## 2. Types of Locomotion for Mobile Robots (CO1: K2)

While this topic focuses on mobile manipulators, understanding the locomotion of their mobile bases is fundamental. This section broadly covers locomotion types relevant to mobile bases used in mobile manipulators.

### 2.1. Wheeled Locomotion

*   **Definition:** Robots that move using wheels. This is the most common form of locomotion for mobile manipulators.
*   **Advantages:** High efficiency, speed, simple control, good for smooth surfaces.
*   **Disadvantages:** Limited obstacle traversal, can get stuck on rough terrain.
*   **Common Configurations:**
    *   **Differential Drive:** Two independently driven wheels, allowing the robot to turn in place. (Siegwart & Nourbakhsh, Chapter 3)
        *   *Example:* Many service robots, indoor robots.
    *   **Ackermann Steering (Car-like):** Similar to a car, with steered front wheels.
        *   *Example:* Larger outdoor mobile manipulators, autonomous vehicles.
    *   **Omni-directional (Mecanum, Swedish wheels):** Wheels with rollers allowing movement in any direction (forward, backward, sideways, and rotation).
        *   *Example:* Robots requiring high maneuverability in confined spaces.
    *   **Tricycle:** One driven wheel and two caster wheels, or one steered wheel and two driven wheels.
        *   *Example:* Simpler configurations for basic mobility.

### 2.2. Tracked Locomotion

*   **Definition:** Robots that use continuous tracks (like tanks) for movement.
*   **Advantages:** Excellent obstacle traversal, good on soft or uneven terrain, good stability.
*   **Disadvantages:** Lower speed, less energy efficient, more complex mechanical design, can damage surfaces.
*   *Example:* Robots operating in construction sites, disaster zones, or rough outdoor environments.

### 2.3. Legged Locomotion

*   **Definition:** Robots that use legs to walk.
*   **Advantages:** Can overcome significant obstacles, adapt to highly uneven terrain, mimic biological locomotion.
*   **Disadvantages:** Complex control, high energy consumption, slower than wheeled robots on flat surfaces.
*   **Types:** Bipedal (2 legs), Quadrupedal (4 legs), Hexapod (6 legs), etc.
*   *Example:* Boston Dynamics' Spot (quadrupedal), ASIMO (bipedal). While not always equipped with manipulators, the locomotion principles are relevant.

### 2.4. Other Locomotion Types

*   **Aerial Locomotion (Drones/UAVs):** While not traditional mobile manipulators in the ground-based sense, aerial robots with robotic arms are emerging.
*   **Underwater Locomotion:** ROVs (Remotely Operated Vehicles) and AUVs (Autonomous Underwater Vehicles) with manipulators.

---

## 3. Kinematic Model of Mobile Robots (CO2: K4)

Kinematics describes the motion of the robot without considering the forces causing it. For mobile manipulators, we need to consider both the kinematics of the mobile base and the kinematics of the manipulator arm.

### 3.1. Mobile Base Kinematics

This describes how the robot's position and orientation change based on the velocities of its actuators.

#### 3.1.1. Forward Kinematics

Relates joint velocities (or wheel velocities) to the linear and angular velocity of the robot's reference point (e.g., center of the base).

*   **Differential Drive Example:**
    *   Let $v_l$ and $v_r$ be the linear velocities of the left and right wheels, respectively.
    *   Let $r$ be the radius of the wheels and $w$ be the distance between the wheels (wheelbase).
    *   The angular velocity of the robot ($\dot{\phi}$) is given by: $\dot{\phi} = \frac{v_r - v_l}{w}$
    *   The linear velocity of the robot ($v$) in the direction of the robot's heading is: $v = \frac{v_r + v_l}{2}$
    *   The instantaneous center of curvature (ICC) is located at a distance $d = \frac{v_l + v_r}{v_r - v_l} \frac{w}{2}$ from the midpoint of the wheelbase.
    *   The forward kinematics can be expressed as a Jacobian matrix $\mathbf{J}_v$ relating wheel velocities to the robot's velocity $(\dot{x}, \dot{y}, \dot{\phi})$:
        $$
        \begin{bmatrix} \dot{x} \\ \dot{y} \\ \dot{\phi} \end{bmatrix} = \mathbf{J}_v \begin{bmatrix} v_l \\ v_r \end{bmatrix}
        $$
        For a differential drive robot moving in the XY plane, $\mathbf{J}_v$ can be represented as:
        $$
        \mathbf{J}_v = \begin{bmatrix} \cos\phi & \cos\phi \\ \sin\phi & \sin\phi \\ -1/w & 1/w \end{bmatrix}
        $$
        where $(\phi)$ is the robot's orientation.

#### 3.1.2. Inverse Kinematics

Relates the desired linear and angular velocity of the robot to the required velocities of its wheels.

*   **Differential Drive Example:**
    *   Given desired robot velocity $(\dot{x}_d, \dot{y}_d, \dot{\phi}_d)$:
    *   The wheel velocities $(v_l, v_r)$ are:
        *   $v_r = \frac{\dot{x}_d + \dot{y}_d}{2} + \frac{\dot{\phi}_d w}{2}$
        *   $v_l = \frac{\dot{x}_d + \dot{y}_d}{2} - \frac{\dot{\phi}_d w}{2}$
    *   If the robot is moving purely forward ($\dot{y}_d = 0$), then:
        *   $v_r = \dot{x}_d + \frac{\dot{\phi}_d w}{2}$
        *   $v_l = \dot{x}_d - \frac{\dot{\phi}_d w}{2}$

#### 3.1.3. Unicycle Model

A simplified kinematic model often used for differential drive robots. It assumes the robot can move forward/backward and rotate, but not sideways. The state is $(x, y, \phi)$.
*   $\dot{x} = v \cos\phi$
*   $\dot{y} = v \sin\phi$
*   $\dot{\phi} = \omega$
where $v$ is linear velocity and $\omega$ is angular velocity. (Siegwart & Nourbakhsh, Chapter 3)

### 3.2. Manipulator Arm Kinematics

Describes the relationship between the joint angles of the arm and the position and orientation of its end-effector.

#### 3.2.1. Forward Kinematics (Manipulator)

Given the joint angles ($\theta_1, \theta_2, ..., \theta_n$), calculate the position and orientation of the end-effector in a world frame. This is typically done using Denavit-Hartenberg (D-H) parameters or Product of Exponentials (PoE) formulation.

*   **Denavit-Hartenberg (D-H) Convention:** Assigns coordinate frames to each link of the manipulator based on four parameters:
    1.  **$a_i$ (link length):** Distance along the common normal between $z_{i-1}$ and $z_i$.
    2.  **$\alpha_i$ (link twist):** Angle between $z_{i-1}$ and $z_i$ about the common normal.
    3.  **$d_i$ (link offset):** Distance along $z_{i-1}$ from the common normal to the origin of frame $i$.
    4.  **$\theta_i$ (joint angle):** Angle between $x_{i-1}$ and $x_i$ about $z_{i-1}$.

*   **Transformation Matrices:** Each joint introduces a transformation matrix $T_i$ that transforms coordinates from frame $i-1$ to frame $i$. The end-effector pose is the product of these matrices:
    $$
    T_{end-effector} = T_1 T_2 ... T_n
    $$
    Each $T_i$ is a 4x4 homogeneous transformation matrix. (Corke, Chapter 4)

*   **Example:** For a 2-DOF planar arm with a revolute joint 1 and revolute joint 2:
    *   Let $L_1$ be the length of link 1, $L_2$ be the length of link 2.
    *   Joint angles are $\theta_1$ (base) and $\theta_2$ (elbow).
    *   End-effector position $(x, y)$:
        *   $x = L_1 \cos(\theta_1) + L_2 \cos(\theta_1 + \theta_2)$
        *   $y = L_1 \sin(\theta_1) + L_2 \sin(\theta_1 + \theta_2)$

#### 3.2.2. Inverse Kinematics (Manipulator)

Given a desired end-effector pose (position and orientation), calculate the required joint angles. This is often more complex and can have multiple solutions, no solutions, or a continuous set of solutions.

*   **Analytical Solutions:** Possible for simpler arms (e.g., 2 or 3 DOF).
*   **Numerical Solutions:** Iterative methods like the Jacobian pseudo-inverse method or optimization techniques. (Corke, Chapter 5)

### 3.3. Combined Kinematics of Mobile Manipulators

The total kinematic model of a mobile manipulator involves chaining the kinematics of the mobile base and the manipulator arm.

*   **Mobile Base Pose:** Defined by $(x_b, y_b, \phi_b)$ in the world frame.
*   **Manipulator Base Frame:** The manipulator's base is typically attached to the mobile base. Its pose in the world frame depends on the mobile base's pose and potentially a fixed offset.
*   **End-effector Pose in World Frame:** This is calculated by transforming the end-effector pose in the manipulator's base frame to the world frame.
    $$
    T_{world \to end-effector} = T_{world \to base} \cdot T_{base \to manipulator\_base} \cdot T_{manipulator\_base \to end-effector}
    $$

---

## 4. Dynamic Model of Mobile Robots (CO3: K4)

Dynamics considers the forces and torques that cause motion. It's essential for understanding how the robot responds to control commands and external forces.

### 4.1. Mobile Base Dynamics

Describes the relationship between forces/torques applied to the mobile base and its resulting linear and angular accelerations.

*   **Lagrangian or Newtonian Mechanics:** Can be used to derive equations of motion.
*   **Key Factors:**
    *   **Inertia:** Mass and its distribution (center of mass, moments of inertia).
    *   **Forces:** Driving forces from wheels, friction (rolling, sliding), drag forces (air, ground), external forces.
    *   **Torques:** From motors, reaction torques.
*   **Wheeled Robots:**
    *   **Rolling without slipping:** A constraint that relates wheel velocity to robot velocity.
    *   **Friction:** Crucial for providing tractive forces but also a source of energy loss.
    *   **Dynamic Model (Simplified for differential drive):**
        $$
        m\ddot{x} = F_{fwd} \cos\phi - F_{lat} \sin\phi + \text{other forces}
        m\ddot{y} = F_{fwd} \sin\phi + F_{lat} \cos\phi + \text{other forces}
        I\ddot{\phi} = \tau_{rot} + \text{other torques}
        $$
        Where $m$ is mass, $I$ is moment of inertia, $F_{fwd}$ is forward force, $F_{lat}$ is lateral force, and $\tau_{rot}$ is torque about the vertical axis. The forces $F_{fwd}$ and $F_{lat}$ are generated by the wheels and depend on motor torques and friction. (Tzafestas, Chapter 6)

### 4.2. Manipulator Arm Dynamics

Describes the relationship between joint torques/forces and joint accelerations.

*   **Equations of Motion:** Typically derived using Lagrangian mechanics or Newton-Euler method.
    $$
    \mathbf{M}(\mathbf{q})\ddot{\mathbf{q}} + \mathbf{C}(\mathbf{q}, \dot{\mathbf{q}})\dot{\mathbf{q}} + \mathbf{G}(\mathbf{q}) = \boldsymbol{\tau} + \boldsymbol{\tau}_{ext}
    $$
    Where:
    *   $\mathbf{q}$: Vector of joint angles.
    *   $\ddot{\mathbf{q}}$: Vector of joint accelerations.
    *   $\mathbf{M}(\mathbf{q})$: Inertia matrix (symmetric, positive-definite).
    *   $\mathbf{C}(\mathbf{q}, \dot{\mathbf{q}})\dot{\mathbf{q}}$: Coriolis and centrifugal forces.
    *   $\mathbf{G}(\mathbf{q})$: Gravity vector.
    *   $\boldsymbol{\tau}$: Vector of applied joint torques/forces.
    *   $\boldsymbol{\tau}_{ext}$: Vector of external torques/forces acting on the joints. (Corke, Chapter 8)

### 4.3. Combined Dynamics of Mobile Manipulators

The overall dynamics are coupled. The motion of the mobile base affects the manipulator's dynamics (e.g., inertia, gravity), and the manipulator's movements can create reaction forces and torques on the base.

*   **Challenges:**
    *   **Coupling:** Forces and torques generated by the manipulator can affect the base's motion (e.g., tilting, unwanted translation).
    *   **Base Inertia:** The mobile base's inertia and dynamics need to be incorporated into the manipulator's equations.
    *   **Reaction Forces:** Forces exerted by the manipulator on the environment also transmit back to the base.
*   **Modelling Approaches:**
    *   **Augmented Lagrangian Formulation:** Combines the mobile base and manipulator dynamics into a single set of equations.
    *   **Screw Theory:** Useful for describing spatial velocities, forces, and their relationships in a unified way. (Tzafestas, Chapter 10)
*   **Example:** When the arm of a mobile manipulator extends, its inertia and potential energy changes will affect the overall balance and stability of the entire system. If the arm exerts a large force sideways, it can cause the mobile base to tip or slide.

---

## 5. Choosing Appropriate Sensors for Mobile Robot Navigation (CO4: K3)

Sensors are the "eyes" and "ears" of the mobile robot, providing information about the environment and the robot's own state.

### 5.1. Proprioceptive Sensors (Internal)

Measure the robot's own state.

*   **Odometry:**
    *   **Definition:** Estimates the robot's pose (position and orientation) by integrating wheel encoder readings or IMU data.
    *   **Type:** Encoders on wheels, Inertial Measurement Units (IMUs - accelerometers, gyroscopes).
    *   **Pros:** High update rate, relatively low cost, provides velocity and acceleration.
    *   **Cons:** Accumulates errors over time (drift) due to wheel slippage, uneven surfaces, and calibration inaccuracies. (Siegwart & Nourbakhsh, Chapter 4)
    *   *Example:* Using wheel encoders to track how many rotations each wheel has made to estimate distance traveled and turns.
*   **Inertial Measurement Units (IMUs):**
    *   **Definition:** Measure angular velocity (gyroscopes) and linear acceleration (accelerometers).
    *   **Pros:** High frequency, independent of external features, good for estimating orientation and short-term motion.
    *   **Cons:** Accelerometers are susceptible to gravity and noise; gyroscopes drift over time.
    *   *Example:* Maintaining robot orientation (pitch, roll, yaw) during motion.

### 5.2. Exteroceptive Sensors (External)

Measure properties of the environment.

*   **Range Sensors:** Measure distances to objects.
    *   **LiDAR (Light Detection and Ranging):**
        *   **Definition:** Emits laser pulses and measures the time-of-flight or phase shift to determine distances to surrounding objects.
        *   **Pros:** Accurate distance measurements, high resolution (especially 2D and 3D LiDAR), works in various lighting conditions.
        *   **Cons:** Can be expensive, affected by reflective or transparent surfaces, data can be sparse for 2D LiDAR.
        *   *Example:* Creating 2D or 3D maps of the environment for localization and obstacle avoidance. (Siegwart & Nourbakhsh, Chapter 4)
    *   **Ultrasonic Sensors:**
        *   **Definition:** Emit sound waves and measure the time for the echo to return.
        *   **Pros:** Low cost, good for detecting large obstacles at close range.
        *   **Cons:** Low resolution, wide beam angle (poor accuracy), affected by soft or sound-absorbing surfaces.
        *   *Example:* Proximity sensing, basic obstacle avoidance at low speeds.
    *   **Infrared (IR) Sensors:**
        *   **Definition:** Emit IR light and detect its reflection. Can be used for distance measurement or simple obstacle detection.
        *   **Pros:** Low cost, small size.
        *   **Cons:** Sensitive to ambient light and surface properties, limited range.
        *   *Example:* Line following, detecting obstacles immediately in front.

*   **Vision Sensors (Cameras):**
    *   **Definition:** Capture images of the environment.
    *   **Types:** Monocular (one camera), Stereo (two cameras), RGB-D (e.g., Kinect, RealSense - provides depth information).
    *   **Pros:** Rich information (color, texture, shape), versatile for object recognition, landmark detection, and mapping. Stereo and RGB-D provide depth.
    *   **Cons:** Sensitive to lighting conditions, computationally intensive processing, can be challenging for distance estimation with monocular cameras. (Corke, Part II - Vision)
    *   *Example:* Using a camera to identify a fiducial marker (like a QR code) for localization, or using stereo vision to reconstruct a 3D scene.

*   **Contact Sensors:**
    *   **Definition:** Detect physical contact.
    *   **Types:** Bump sensors (whiskers), force/torque sensors.
    *   **Pros:** Direct detection of collision or interaction force.
    *   **Cons:** Only active upon contact, can be damaging if not used carefully.
    *   *Example:* Bump sensors trigger emergency stops, force sensors on the manipulator help with delicate object manipulation.

### 5.3. Sensor Fusion

Combining data from multiple sensors to improve accuracy, robustness, and reliability.

*   **Purpose:** Overcome limitations of individual sensors, provide a more complete understanding of the environment.
*   **Techniques:** Kalman Filters (EKF, UKF), Particle Filters, Bayesian networks. (Thrun, Burgard, & Fox, Chapters 6-9)
*   *Example:* Fusing odometry with LiDAR data using an Extended Kalman Filter (EKF) for more accurate robot localization.

---

## 6. Navigation and Path Planning for Mobile Robots (CO5: K3)

Navigation involves determining the robot's current position and guiding it to a desired destination. Path planning is a crucial component of this.

### 6.1. Localization

*   **Definition:** The process of determining the robot's pose (position and orientation) in a known map or coordinate system.
*   **Key Techniques:**
    *   **Odometry-based:** Simple integration of sensor readings. Suffers from drift.
    *   **Map-based:** Using sensor data to match features in a pre-existing map.
        *   **Landmark-based:** Localizing based on detected known features (e.g., corners, doors, AprilTags).
        *   **Scan-matching:** Aligning current sensor scans (e.g., LiDAR) with a map.
    *   **Probabilistic Methods:** Represent uncertainty using probability distributions.
        *   **Kalman Filters (KF, EKF, UKF):** For Gaussian noise models.
        *   **Particle Filters (Monte Carlo Localization - MCL):** For non-Gaussian noise and complex environments. (Thrun, Burgard, & Fox, Chapter 8)
*   *Example:* A robot with LiDAR uses MCL to estimate its pose by comparing its current LiDAR scan to a known map and updating a set of weighted hypotheses (particles) about its position.

### 6.2. Mapping

*   **Definition:** The process of building a representation of the environment.
*   **Types of Maps:**
    *   **Feature-based maps:** Store locations of distinct features (landmarks).
    *   **Occupancy Grid maps:** Divide the environment into a grid where each cell represents the probability of being occupied or free. (Siegwart & Nourbakhsh, Chapter 5)
    *   **Topological maps:** Represent the environment as a graph of interconnected regions.
*   *Example:* Using SLAM (Simultaneous Localization and Mapping) to build an occupancy grid map while simultaneously localizing the robot within that map.

### 6.3. Path Planning

*   **Definition:** Finding a sequence of movements (a path) from the robot's current location to a target location, while avoiding obstacles.
*   **Key Stages:**
    1.  **Global Path Planning:** Finds a path from start to goal in a known map, typically ignoring dynamic obstacles or short-term sensor limitations.
    2.  **Local Path Planning / Obstacle Avoidance:** Adjusts the robot's trajectory in real-time to avoid unforeseen or dynamic obstacles.

*   **Global Path Planning Algorithms:**
    *   **Graph Search Algorithms:**
        *   **Dijkstra's Algorithm:** Finds the shortest path on a graph.
        *   **A* Search:** An informed search algorithm that uses a heuristic to guide the search towards the goal, making it more efficient than Dijkstra. (La Valle, Chapter 5)
            *   *Example:* Planning a path for a mobile manipulator to navigate through a warehouse.
    *   **Sampling-based Algorithms:**
        *   **Rapidly-exploring Random Trees (RRT):** Builds a tree of valid configurations by randomly sampling the configuration space. Good for high-dimensional spaces.
        *   **Probabilistic Roadmaps (PRM):** Samples random configurations and connects them to build a roadmap, then searches the roadmap. (La Valle, Chapter 6)

*   **Local Path Planning / Obstacle Avoidance Algorithms:**
    *   **Dynamic Window Approach (DWA):** Samples feasible velocities within a "dynamic window" (limited by robot's acceleration capabilities) and selects the velocity that maximizes progress towards the goal while avoiding collisions. (Siegwart & Nourbakhsh, Chapter 7)
    *   **Vector Field Histogram (VFH):** Uses a histogram grid to represent obstacles and find obstacle-free directions.
    *   **Artificial Potential Fields:** Creates a virtual force field where the goal attracts the robot and obstacles repel it. The robot moves along the gradient of the potential field. (Tzafestas, Chapter 9)

### 6.4. Motion Planning for Manipulators

*   **Definition:** Finding a sequence of joint commands to move the manipulator arm from an initial configuration to a desired end-effector pose or configuration.
*   **Algorithms:** Similar to mobile base path planning, but in the manipulator's joint space or task space.
    *   **Joint Space Planning:** Directly planning paths in the joint angle space.
    *   **Task Space Planning:** Planning paths for the end-effector in 3D space and then using inverse kinematics to get joint commands.
*   *Example:* Planning a collision-free trajectory for a robotic arm to pick up an object from a table.

### 6.5. Integrated Planning for Mobile Manipulators

*   **Challenge:** Coordinating the motion of the mobile base and the manipulator arm simultaneously to achieve a task (e.g., pick and place).
*   **Approaches:**
    *   **Decoupled Planning:** Plan mobile base motion and manipulator motion separately, then try to coordinate.
    *   **Coupled Planning:** Plan both motions jointly, considering their interactions and constraints. This is more complex but often yields better results.
*   *Example:* Planning the robot to drive to a shelf, then extend its arm to grasp an item, all while avoiding collisions between the arm, base, and environment.

---

## 7. Controlling Mobile Robots to Follow Different Paths (CO6: K3)

Control is about executing the planned path by commanding the robot's actuators.

### 7.1. Mobile Base Control

*   **Goal:** Make the mobile base follow a desired trajectory (sequence of poses and velocities).
*   **Control Architectures:**
    *   **Open-loop Control:** Commands are sent directly to actuators without feedback. Simple but sensitive to disturbances.
    *   **Closed-loop Control (Feedback Control):** Uses sensor feedback to correct errors and achieve the desired behavior.
*   **Key Control Strategies:**
    *   **PID Control (Proportional-Integral-Derivative):** A widely used feedback control loop that calculates an error value as the difference between a desired setpoint and a measured process variable. It attempts to minimize the error by adjusting the control output.
        *   *Example:* Controlling the speed of a wheel motor to match a desired velocity.
    *   **Pure Pursuit Controller:** A trajectory tracking controller that follows a point on the path at a specified lookahead distance. It calculates the curvature needed to reach that point. (Siegwart & Nourbakhsh, Chapter 7)
        *   *Example:* Making a differential drive robot follow a curved path.
    *   **Stanley Controller:** Another popular controller for path tracking, particularly for vehicle control. It focuses on minimizing the cross-track error (distance perpendicular to the path) and the heading error. (Siegwart & Nourbakhsh, Chapter 7)
        *   *Example:* Precise lane following.
    *   **Model Predictive Control (MPC):** Uses a model of the robot to predict its future behavior and optimize control inputs over a receding horizon. Can handle complex constraints and non-linearities.

### 7.2. Manipulator Arm Control

*   **Goal:** Make the manipulator joints follow desired trajectories or achieve desired end-effector poses.
*   **Control Strategies:**
    *   **Joint Position Control:** Control each joint to reach a specific angle.
    *   **Joint Velocity Control:** Control each joint's angular velocity.
    *   **End-effector Pose Control:** Use inverse kinematics to compute desired joint angles and then control the joints to reach these angles.
    *   **Force Control:** Control the force exerted by the end-effector, useful for tasks like grinding or assembly.
    *   **Hybrid Position/Force Control:** Combine position and force control.
*   **Advanced Control:**
    *   **Computed Torque Control:** Uses the dynamic model of the arm to compute the necessary torques to achieve desired joint accelerations. Aims to decouple the joints and linearize the system. (Corke, Chapter 9)
    *   **Adaptive Control:** Adjusts controller parameters online to cope with uncertainties in the robot's dynamics or environment.

### 7.3. Coordinated Control of Mobile Manipulators

*   **Challenge:** Controlling both the mobile base and the manipulator to achieve a common task, while ensuring stability and avoiding conflicts.
*   **Approaches:**
    *   **Task-space Control:** Control the end-effector's pose directly, and then decompose the required end-effector velocity into mobile base and arm velocities.
    *   **Joint-space Control:** Control the manipulator joints and the mobile base velocities independently or in a coupled manner.
    *   **Redundancy Resolution:** Mobile manipulators often have more degrees of freedom than required for a task. Techniques are needed to manage this redundancy (e.g., null-space control).
*   *Example:* A mobile manipulator is tasked with picking an object. The controller might first drive the base close to the object, then move the arm to grasp it, all while maintaining a stable base posture. The overall control system needs to ensure that the arm's movements don't cause the base to lose traction or tip over.

---

## Important Points to Remember

*   **Mobile manipulators combine mobility and manipulation:** This duality is their defining characteristic.
*   **Kinematics is about motion geometry:** Understanding how joint/wheel movements translate to end-effector/robot poses.
*   **Dynamics is about forces and motion:** Understanding how forces cause acceleration, essential for control and stability.
*   **Sensors are critical for perception:** Proprioceptive sensors inform about the robot's state; exteroceptive sensors inform about the environment.
*   **Navigation requires localization, mapping, and path planning:** These are interconnected processes.
*   **Control ensures the robot follows plans:** From simple PID to complex model-based control.
*   **Coordination is key for mobile manipulators:** Managing the interaction between the base and the arm is challenging but crucial for effective operation.
*   **Textbook insights:** Siegwart & Nourbakhsh provides a foundational understanding of mobile robot navigation and control. Corke offers deep dives into robot vision and control, including manipulator kinematics and dynamics. Tzafestas covers mobile robot control from a broader systems perspective. La Valle is the go-to for planning algorithms. Thrun, Burgard, & Fox are essential for probabilistic methods like SLAM and localization.

---

## Practice Questions & Exercises

1.  **(CO1, K2)** Describe the advantages and disadvantages of wheeled locomotion compared to tracked locomotion for a mobile manipulator operating in an outdoor construction site.
    **Answer:** Wheeled locomotion offers higher speed and efficiency on relatively smooth surfaces, which could be useful for moving materials around the site. However, it struggles with rough terrain, mud, and obstacles, making tracked locomotion more suitable for navigating uneven ground and overcoming debris often found in construction sites. Tracked robots provide better traction and stability on such surfaces.

2.  **(CO2, K4)** For a differential drive mobile robot with wheel radius $r=0.05m$ and wheelbase $w=0.4m$, if the left wheel velocity is $v_l = 0.2 m/s$ and the right wheel velocity is $v_r = 0.3 m/s$, calculate the robot's linear velocity ($v$) and angular velocity ($\dot{\phi}$) in the XY plane. Assume the robot is oriented at $\phi=0$.
    **Answer:**
    *   Linear velocity $v = \frac{v_r + v_l}{2} = \frac{0.3 + 0.2}{2} = 0.25 m/s$.
    *   Angular velocity $\dot{\phi} = \frac{v_r - v_l}{w} = \frac{0.3 - 0.2}{0.4} = \frac{0.1}{0.4} = 0.25 rad/s$.

3.  **(CO2, K4)** Consider a 2-DOF planar manipulator arm with link lengths $L_1 = 0.3m$ and $L_2 = 0.2m$. If the joint angles are $\theta_1 = 30^\circ$ and $\theta_2 = 45^\circ$, calculate the position $(x, y)$ of the end-effector in its base frame.
    **Answer:**
    *   Convert angles to radians: $\theta_1 = 30^\circ = \pi/6$ rad, $\theta_2 = 45^\circ = \pi/4$ rad.
    *   $x = L_1 \cos(\theta_1) + L_2 \cos(\theta_1 + \theta_2)$
        $x = 0.3 \cos(\pi/6) + 0.2 \cos(\pi/6 + \pi/4)$
        $x = 0.3 (\sqrt{3}/2) + 0.2 \cos(5\pi/12)$
        $x \approx 0.3 (0.866) + 0.2 (0.2588) \approx 0.2598 + 0.05176 \approx 0.3116 m$.
    *   $y = L_1 \sin(\theta_1) + L_2 \sin(\theta_1 + \theta_2)$
        $y = 0.3 \sin(\pi/6) + 0.2 \sin(\pi/6 + \pi/4)$
        $y = 0.3 (1/2) + 0.2 \sin(5\pi/12)$
        $y \approx 0.3 (0.5) + 0.2 (0.9659) \approx 0.15 + 0.19318 \approx 0.3432 m$.
    *   End-effector position is approximately $(0.3116m, 0.3432m)$.

4.  **(CO4, K3)** A mobile manipulator is navigating in a dimly lit warehouse. Which sensor would be most suitable for accurate obstacle detection and mapping of its surroundings? Justify your choice.
    **Answer:** LiDAR (Light Detection and Ranging) would be the most suitable sensor. LiDAR emits laser pulses and measures the time of flight, making it largely independent of ambient light conditions. It provides accurate distance measurements and can create dense 2D or 3D maps of the environment, which is crucial for reliable obstacle avoidance and localization in a dimly lit environment where cameras might struggle.

5.  **(CO5, K3)** Explain the difference between global and local path planning. Provide an example scenario where both are necessary for a mobile manipulator.
    **Answer:**
    *   **Global Path Planning:** Plans a complete path from a starting point to a goal point, typically assuming a known static environment. It aims to find an optimal path (e.g., shortest).
    *   **Local Path Planning:** Re-plans or modifies the path in real-time based on current sensor readings to avoid newly encountered obstacles or dynamic changes in the environment.
    *   **Scenario:** A mobile manipulator needs to move from a charging station to a specific workstation in a factory. Global planning would find a path through the factory aisles on a known map. However, during transit, a forklift might suddenly appear in the planned path. Local planning would detect the forklift and adjust the robot's trajectory to navigate around it safely, then potentially re-evaluate the remaining global path once the obstacle is cleared.

6.  **(CO6, K3)** Briefly describe the purpose of the Pure Pursuit controller for mobile robot path following.
    **Answer:** The Pure Pursuit controller is a trajectory tracking controller that makes a robot follow a path by finding a circular arc that passes through the robot's current position and a target point on the path at a specified lookahead distance. It calculates the necessary steering angle to reach that target point, effectively "pursuing" the path.

7.  **(CO2, CO3, K4)** How does the manipulation task performed by the arm of a mobile manipulator potentially affect the dynamics of the mobile base?
    **Answer:** The manipulation task can significantly affect the mobile base's dynamics:
    *   **Inertia Distribution:** As the arm moves, its mass and its position relative to the base change, altering the overall inertia tensor and center of mass of the entire robot. This can impact stability and response to commands.
    *   **Reaction Forces/Torques:** When the arm applies forces to the environment (e.g., pushing an object, grasping), Newton's third law dictates that equal and opposite reaction forces/torques are transmitted to the robot's base. These forces can cause the base to slide, tilt, or rotate, potentially leading to loss of stability or unwanted motion.
    *   **Gravity Effects:** Changes in arm configuration can alter the overall gravitational forces acting on the robot, affecting balance, especially on inclines.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
