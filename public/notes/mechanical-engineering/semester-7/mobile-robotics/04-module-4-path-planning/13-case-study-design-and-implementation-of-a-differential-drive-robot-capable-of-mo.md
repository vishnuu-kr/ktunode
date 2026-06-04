---
title: "Case study- design and implementation of a differential drive robot capable of moving to a point"
subject: "MOBILE ROBOTICS"
module: "Module 4: Path Planning"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf48044640d1"
status: "completed"
scrapedAt: "2026-05-20T18:15:35.278Z"
---
# Mobile Robotics: Module 4 - Path Planning

## Case Study: Design and Implementation of a Differential Drive Robot Capable of Moving to a Point

This module focuses on how mobile robots navigate and reach a desired destination. We will delve into path planning, a crucial aspect of autonomous navigation. This case study will illustrate the practical application of these concepts by focusing on a differential drive robot aiming to reach a specific point.

### Learning Outcomes:

Upon successful completion of this module, you will be able to:

*   **LO1:** Understand the fundamental principles of path planning for mobile robots.
*   **LO2:** Analyze the kinematic and dynamic properties of differential drive robots relevant to path planning.
*   **LO3:** Identify and apply common path planning algorithms for reaching a target point.
*   **LO4:** Implement a control strategy to guide a differential drive robot along a planned path.
*   **LO5:** Evaluate the performance of different path planning and control strategies.

### Course Outcomes Alignment:

This case study directly contributes to the following course outcomes:

*   **CO2 (K4):** Deriving the kinematic model of mobile robots (essential for understanding how differential drive robots move and thus planning their paths).
*   **CO5 (K3):** Performing navigation and path planning mobile robots (the core of this case study).
*   **CO6 (K3):** Controlling the mobile robots to follow different paths (demonstrating how the planned path is executed).

---

## 1. Introduction to Path Planning

Path planning is the process of finding a sequence of actions or a trajectory that a robot can follow to move from an initial state (position and orientation) to a desired goal state, while avoiding obstacles and respecting the robot's constraints.

### 1.1 Key Concepts and Definitions

*   **Configuration Space (C-space):** A space representing all possible configurations (position and orientation) of the robot. A path in C-space is a continuous curve connecting the initial configuration to the goal configuration.
*   **Workspace:** The physical environment in which the robot operates.
*   **Obstacles:** Regions in the workspace that the robot must avoid.
*   **Path:** A continuous curve in C-space connecting the initial configuration to the goal configuration.
*   **Trajectory:** A path parameterized by time, specifying not only the path but also the velocity and acceleration along the path.
*   **Feasible Path:** A path that can be executed by the robot, respecting its kinematic and dynamic constraints.
*   **Optimal Path:** A path that minimizes or maximizes a certain cost function, such as path length, time, or energy consumption.

**Reference:** *Planning Algorithms* by S. M. La Valle provides a comprehensive theoretical foundation for path planning.

---

## 2. Differential Drive Robot Kinematics

Understanding the robot's movement capabilities is paramount for path planning. A differential drive robot is a common mobile robot platform.

### 2.1 Robot Model

A differential drive robot has two wheels, independently driven by motors. The robot's movement is determined by the velocities of these two wheels.

*   **Assumptions:**
    *   Wheels are perfect cylinders.
    *   The robot moves on a flat, horizontal surface.
    *   No slippage between the wheels and the ground.

### 2.2 Kinematic Model

The kinematic model describes the relationship between the robot's velocities and its configuration.

*   **Configuration:** The robot's state is typically represented by its position $(x, y)$ in the workspace and its orientation $\theta$ with respect to a reference axis (e.g., the x-axis). So, the configuration vector is $q = [x, y, \theta]^T$.
*   **Wheel Velocities:**
    *   $v_l$: Linear velocity of the left wheel.
    *   $v_r$: Linear velocity of the right wheel.
*   **Robot Velocities:**
    *   $v$: Linear velocity of the robot's center of the wheel base (midpoint between the wheels).
    *   $\omega$: Angular velocity of the robot.
*   **Kinematic Equations:**
    *   $v = \frac{r}{2}(v_l + v_r)$
    *   $\omega = \frac{r}{2L}(v_r - v_l)$

    Where:
    *   $r$ is the radius of the wheels.
    *   $L$ is the distance between the centers of the two wheels (wheelbase).

*   **Differential Drive Inverse Kinematics:** Given desired linear and angular velocities ($v$, $\omega$), we can determine the required wheel velocities:
    *   $v_l = v - \omega \frac{L}{2}$
    *   $v_r = v + \omega \frac{L}{2}$

*   **Differential Drive Forward Kinematics:** Given the wheel velocities ($v_l$, $v_r$), we can determine the robot's linear and angular velocities:
    *   $v = \frac{r}{2}(v_l + v_r)$
    *   $\omega = \frac{r}{2L}(v_r - v_l)$

*   **State Space Representation:** The robot's motion can be described by:
    $\begin{bmatrix} \dot{x} \\ \dot{y} \\ \dot{\theta} \end{bmatrix} = \begin{bmatrix} \cos(\theta) & 0 \\ \sin(\theta) & 0 \\ 0 & 1 \end{bmatrix} \begin{bmatrix} v \\ \omega \end{bmatrix}$

    Substituting $v$ and $\omega$ with wheel velocities:
    $\begin{bmatrix} \dot{x} \\ \dot{y} \\ \dot{\theta} \end{bmatrix} = \begin{bmatrix} \frac{r}{2}\cos(\theta) & \frac{r}{2}\cos(\theta) \\ \frac{r}{2}\sin(\theta) & \frac{r}{2}\sin(\theta) \\ \frac{r}{2L} & -\frac{r}{2L} \end{bmatrix} \begin{bmatrix} v_l \\ v_r \end{bmatrix}$

**Textbook Reference:** *Introduction to Autonomous Mobile Robots* by Siegwart, Nourbakhsh (Chapter 3) and *Robotics, Vision and Control: Fundamental Algorithms in MATLAB* by Peter Corke (Chapter 6) provide detailed derivations of kinematic models for various robot platforms, including differential drive.

**Important Point:** The kinematic model highlights that a differential drive robot can move forward/backward, turn in place (when $v_l = -v_r$), and turn while moving (when $v_l \neq v_r$). The robot cannot move sideways directly.

### 2.3 Robot Dynamics (Briefly)

While this case study focuses on path planning, understanding dynamics is crucial for precise control and trajectory execution. Dynamics relates forces/torques to acceleration.

*   **Key Components:** Motor torque, friction, inertia.
*   **Impact on Path Planning:** Dynamic constraints can limit achievable velocities and accelerations, affecting the feasibility of certain paths. For high-speed maneuvers, dynamic planning is necessary. For simpler point-to-point navigation at lower speeds, kinematic planning might suffice.

---

## 3. Path Planning to a Point

The goal is to move the robot from an initial configuration $(x_{start}, y_{start}, \theta_{start})$ to a goal configuration $(x_{goal}, y_{goal}, \theta_{goal})$. For this case study, we'll simplify the goal to just reaching a target point $(x_{goal}, y_{goal})$, assuming the orientation at the goal is either not critical or can be handled by a final rotation.

### 3.1 Path Planning Strategies

Several algorithms can be used for path planning. For reaching a point, we often aim for a simple and efficient path.

#### 3.1.1 Simple Kinematic Path Planning (No Obstacles)

If the environment is clear, we can directly plan a path based on the robot's kinematics.

*   **Strategy:** Move the robot such that it reaches the target $(x_{goal}, y_{goal})$. The robot's orientation needs to be considered.

*   **Steps:**
    1.  **Calculate the desired heading:** Determine the angle $\phi$ required to face the target point from the current position.
        $\phi = atan2(y_{goal} - y_{current}, x_{goal} - x_{current})$
    2.  **Orient the robot:** If the robot's current orientation $\theta_{current}$ is not equal to $\phi$, command a pure rotation until $\theta_{current} = \phi$.
        *   This involves setting $v_l = -v_r$ such that $\omega = \frac{r}{2L}(v_r - v_l)$ results in the desired angular velocity.
    3.  **Move forward:** Once facing the target, command a linear motion until the robot reaches $(x_{goal}, y_{goal})$.
        *   This involves setting $v_l = v_r = v > 0$ such that $v = \frac{r}{2}(v_l + v_r)$.

*   **Example:**
    *   Robot at $(0, 0)$ with $\theta = 0^\circ$.
    *   Goal at $(2, 1)$.
    *   **Step 1:** Desired heading $\phi = atan2(1 - 0, 2 - 0) = atan2(1, 2) \approx 26.57^\circ$.
    *   **Step 2:** Robot rotates counter-clockwise by $26.57^\circ$.
    *   **Step 3:** Robot moves forward a distance of $\sqrt{(2-0)^2 + (1-0)^2} = \sqrt{5} \approx 2.236$ meters.

*   **Limitations:** This simple strategy assumes no obstacles and doesn't explicitly plan a continuous path, but rather a sequence of maneuvers. It also doesn't specify a continuous trajectory.

#### 3.1.2 Parametric Path Planning (e.g., Straight Line + Arc)

A more sophisticated approach involves planning a continuous path. For differential drive robots, Dubins paths or Reeds-Shepp paths are common for minimum-length paths with curvature constraints, but for simpler point-to-point tasks, a combination of straight lines and arcs can be used.

*   **Strategy:** A common strategy is to first rotate the robot to face the target and then move forward. If the target is not directly in front, the robot will need to perform a combination of rotations and translations.

*   **Controller-Based Approach (Implicit Path Planning):** Often, the "path planning" is implicitly handled by a control loop that aims to drive the robot towards the goal.
    *   **Proportional-Derivative (PD) Control for Orientation:**
        *   Error in orientation: $e_\theta = \phi - \theta_{current}$
        *   Desired angular velocity $\omega_{des} = K_p^\theta e_\theta + K_d^\theta \dot{e}_\theta$
    *   **Proportional (P) Control for Distance/Speed:**
        *   Error in distance: $e_d = \sqrt{(x_{goal} - x_{current})^2 + (y_{goal} - y_{current})^2}$
        *   Desired linear velocity $v_{des} = K_p^d e_d$

    The robot continuously adjusts its wheel velocities based on these control laws to steer towards the goal and drive forward.

    **Textbook Reference:** *Introduction to Mobile Robot Control* by Spyros G. Tzafestas discusses various control strategies for mobile robots, including point-to-point control.

**Example Implementation Snippet (Conceptual - Python-like):**

```python
import math

def move_to_point(current_x, current_y, current_theta, goal_x, goal_y, robot_params):
    r = robot_params['wheel_radius']
    L = robot_params['wheelbase']

    # Calculate distance and angle to goal
    dist_to_goal = math.sqrt((goal_x - current_x)**2 + (goal_y - current_y)**2)
    angle_to_goal = math.atan2(goal_y - current_y, goal_x - current_x)

    # Calculate heading error
    angle_error = angle_to_goal - current_theta
    # Normalize angle error to [-pi, pi]
    angle_error = (angle_error + math.pi) % (2 * math.pi) - math.pi

    # Control gains (tune these)
    Kp_theta = 1.0
    Kp_dist = 0.5

    # If close enough to the goal, stop
    if dist_to_goal < 0.1: # Tolerance for reaching the goal
        return 0, 0 # Stop motors

    # Calculate desired linear and angular velocities
    desired_angular_velocity = Kp_theta * angle_error
    desired_linear_velocity = Kp_dist * dist_to_goal

    # Limit velocities to avoid excessive speed
    max_linear_vel = 0.3 # m/s
    max_angular_vel = 1.0 # rad/s
    desired_linear_velocity = max(-max_linear_vel, min(max_linear_velocity, desired_linear_velocity))
    desired_angular_velocity = max(-max_angular_vel, min(max_angular_velocity, desired_angular_velocity))

    # Differential drive inverse kinematics
    vl = desired_linear_velocity - desired_angular_velocity * L / 2
    vr = desired_linear_velocity + desired_angular_velocity * L / 2

    # Normalize wheel velocities (optional, depending on motor driver limits)
    max_wheel_vel = 1.0 # rad/s or similar unit
    vl = max(-max_wheel_vel, min(max_wheel_vel, vl))
    vr = max(-max_wheel_vel, min(max_wheel_vel, vr))

    return vl, vr

# Example Usage (conceptual)
# robot_config = {'wheel_radius': 0.03, 'wheelbase': 0.15}
# current_state = {'x': 0.0, 'y': 0.0, 'theta': 0.0}
# goal_state = {'x': 2.0, 'y': 1.0}
# vl, vr = move_to_point(current_state['x'], current_state['y'], current_state['theta'], goal_state['x'], goal_state['y'], robot_config)
# print(f"Left wheel velocity: {vl}, Right wheel velocity: {vr}")
```

#### 3.1.3 Potential Fields (for Obstacle Avoidance)

While not the primary focus of this "move to a point" case study, it's worth noting that potential fields are another path planning method. They create artificial "forces" pulling the robot towards the goal and repelling it from obstacles. This results in a continuous velocity command that implicitly plans a path.

**Textbook Reference:** *Introduction to Autonomous Mobile Robots* by Siegwart, Nourbakhsh (Chapter 7) discusses obstacle avoidance using potential fields.

---

## 4. Implementation Considerations

### 4.1 Robot Hardware and Software

*   **Differential Drive Robot Platform:** Typically includes motors with encoders, a chassis, wheels, and a microcontroller (e.g., Arduino, Raspberry Pi).
*   **Sensors (Brief Mention for Context):**
    *   **Encoders:** Measure wheel rotation, used for odometry (estimating robot position and orientation). Crucial for knowing the robot's current state for path planning.
    *   **IMU (Inertial Measurement Unit):** Gyroscope and accelerometer, can improve orientation estimates.
    *   **Lidar/Depth Cameras:** For obstacle detection and mapping, essential for path planning in dynamic or cluttered environments.
*   **Control System:**
    *   **Low-Level Motor Control:** PWM signals to motors, PID control for wheel speed.
    *   **High-Level Path Planning and Navigation:** Software on the microcontroller or a connected computer.

**Textbook Reference:** *Arduino and Kinect Projects* by Melgar & Diez demonstrates practical implementation of robotics projects using popular platforms. *Probabilistic Robotics* by Thrun, Burgard, and Fox provides a deeper dive into sensor fusion and state estimation for navigation.

### 4.2 From Planning to Execution

The planned path is a sequence of desired states or velocities. The robot's controller then needs to generate motor commands to follow this path.

*   **Odometry:** The robot's position and orientation $(x, y, \theta)$ are estimated using wheel encoders (and potentially IMU data). This state information is fed back to the path planner and controller.
*   **Closed-Loop Control:** The controller continuously compares the robot's actual state with the desired state (from the path planner) and adjusts motor commands to minimize the error.

---

## 5. Case Study: Step-by-Step Design and Implementation

**Objective:** Design and implement a differential drive robot that can reliably move from a starting position to a user-defined target point in an obstacle-free environment.

### 5.1 Design Steps

1.  **Robot Selection/Configuration:**
    *   Choose a differential drive robot platform (e.g., a pre-built kit or a custom design).
    *   Specify robot parameters: wheel radius ($r$), wheelbase ($L$).
    *   Select microcontroller and motor drivers.

2.  **Kinematic Model Implementation:**
    *   Implement functions to calculate robot linear/angular velocities from wheel velocities.
    *   Implement functions to calculate wheel velocities from desired robot linear/angular velocities.

3.  **Odometry Module:**
    *   Read data from wheel encoders.
    *   Implement an odometry algorithm (e.g., simple integration of velocities, or more advanced Kalman filters for better accuracy). This will provide the robot's current $(x, y, \theta)$ estimate.

4.  **Path Planning Algorithm (Simple Approach):**
    *   **Goal:** Reach a target point $(x_{goal}, y_{goal})$.
    *   **Strategy:** A "go-to-goal" controller that calculates desired linear and angular velocities to steer towards the target.
        *   **Step 1: Calculate Angle to Goal:** Use `atan2` to find the angle from the robot's current position to the goal.
        *   **Step 2: Calculate Heading Error:** Difference between the angle to the goal and the robot's current orientation.
        *   **Step 3: Calculate Distance to Goal:** Euclidean distance.
        *   **Step 4: Control Laws:**
            *   `desired_angular_velocity = Kp_theta * angle_error` (Proportional control on angle error)
            *   `desired_linear_velocity = Kp_dist * distance_to_goal` (Proportional control on distance)
        *   **Step 5: Inverse Kinematics:** Convert `desired_linear_velocity` and `desired_angular_velocity` to `v_l` and `v_r`.
        *   **Step 6: Motor Control:** Send commands (e.g., PWM signals) to motors to achieve `v_l` and `v_r`.

5.  **Control Loop Implementation:**
    *   Run the odometry and path planning/control logic in a continuous loop.
    *   Set a suitable loop frequency.

### 5.2 Implementation Example (Conceptual - using Arduino and basic concepts)

```cpp
// --- Global Variables ---
float current_x = 0.0, current_y = 0.0, current_theta = 0.0; // Robot's estimated state
float goal_x = 2.0, goal_y = 1.0; // Target point

float wheel_radius = 0.03; // meters
float wheel_base = 0.15; // meters

// Motor speed variables (e.g., PWM values, assume 0-255 range)
int left_motor_speed = 0;
int right_motor_speed = 0;

// Control gains (tune these)
float Kp_theta = 50.0; // Proportional gain for angular control (adjust based on PWM range)
float Kp_dist = 100.0; // Proportional gain for distance control (adjust based on PWM range)
float max_pwm = 255.0;
float max_linear_vel = 0.5; // m/s (for conceptual velocity limits)
float max_angular_vel = 1.0; // rad/s (for conceptual velocity limits)

// --- Odometry (Simplified - Assumes you read encoder counts) ---
long prev_left_encoder_count = 0;
long prev_right_encoder_count = 0;
unsigned long prev_time_ms = 0;

void update_odometry(long current_left_encoder, long current_right_encoder, unsigned long current_time_ms) {
    float dt = (current_time_ms - prev_time_ms) / 1000.0; // time in seconds

    // Calculate wheel velocities from encoder counts (counts per second)
    float left_encoder_vel = (current_left_encoder - prev_left_encoder_count) / dt;
    float right_encoder_vel = (current_right_encoder - prev_right_encoder_count) / dt;

    // Convert encoder counts to linear velocity (e.g., if 1000 counts = 1 meter travel)
    // This requires calibration. Let's assume you have a conversion factor:
    // float counts_to_meters_per_sec = ...

    // Simplified: Assume encoder_vel is already in meters/sec (this is a big assumption!)
    // In reality, you'd do:
    // float v_l_wheel = left_encoder_vel * (2 * PI * wheel_radius) / encoder_resolution_counts_per_rev;
    // float v_r_wheel = right_encoder_vel * (2 * PI * wheel_radius) / encoder_resolution_counts_per_rev;

    // For this example, let's directly use velocity inputs for clarity, assuming encoder provides velocity
    // In a real implementation, you'd integrate encoder readings to get distance:
    // d_left = (current_left_encoder - prev_left_encoder_count) * (2 * PI * wheel_radius) / encoder_resolution;
    // d_right = (current_right_encoder - prev_right_encoder_count) * (2 * PI * wheel_radius) / encoder_resolution;
    // This would then be used to update x, y, theta.

    // --- Placeholder for actual odometry update ---
    // This part is crucial and depends heavily on your encoder setup and integration method.
    // A common method is to use the average velocity and angular velocity:
    // v = (v_l_wheel + v_r_wheel) / 2
    // omega = (v_r_wheel - v_l_wheel) / wheel_base
    // current_x += v * cos(current_theta) * dt;
    // current_y += v * sin(current_theta) * dt;
    // current_theta += omega * dt;
    // Normalize theta
}

// --- Path Planning and Control ---
void control_loop() {
    // --- Update Robot State (Read encoders and call update_odometry) ---
    // Assume get_left_encoder_count() and get_right_encoder_count() return current counts
    // Assume millis() gives current time in ms
    // update_odometry(get_left_encoder_count(), get_right_encoder_count(), millis());

    // --- Calculate Errors ---
    float dx = goal_x - current_x;
    float dy = goal_y - current_y;
    float distance_to_goal = sqrt(dx*dx + dy*dy);
    float angle_to_goal = atan2(dy, dx);

    float angle_error = angle_to_goal - current_theta;
    // Normalize angle_error to [-PI, PI]
    while (angle_error > PI) angle_error -= 2 * PI;
    while (angle_error < -PI) angle_error += 2 * PI;

    // --- Apply Control Laws ---
    // If close enough to goal, stop
    if (distance_to_goal < 0.1) { // Tolerance
        left_motor_speed = 0;
        right_motor_speed = 0;
    } else {
        // Calculate desired velocities
        float desired_angular_velocity = Kp_theta * angle_error;
        float desired_linear_velocity = Kp_dist * distance_to_goal;

        // Apply velocity limits
        desired_linear_velocity = max(-max_linear_vel, min(max_linear_vel, desired_linear_velocity));
        desired_angular_velocity = max(-max_angular_vel, min(max_angular_vel, desired_angular_velocity));

        // --- Inverse Kinematics to get wheel velocities ---
        // Note: The output of inverse kinematics are linear velocities of the wheels (m/s)
        float vl_wheel = desired_linear_velocity - desired_angular_velocity * wheel_base / 2.0;
        float vr_wheel = desired_linear_velocity + desired_angular_velocity * wheel_base / 2.0;

        // --- Convert linear wheel velocities to motor commands (e.g., PWM) ---
        // This requires calibration: relate m/s to PWM.
        // Example: If max linear wheel speed is 0.5 m/s, and this corresponds to max_pwm
        // Assuming linear relationship:
        // left_motor_speed = map_float_to_int(vl_wheel, -max_linear_vel, max_linear_vel, -max_pwm, max_pwm);
        // right_motor_speed = map_float_to_int(vr_wheel, -max_linear_vel, max_linear_vel, -max_pwm, max_pwm);
        // The map_float_to_int would need careful implementation to handle ranges and potentially non-linearities.
        // For simplicity, let's assume direct mapping for now if velocities are within bounds:

        // A simpler mapping might relate desired linear velocity directly to a "power" level
        // and angular velocity to differential power.

        // Let's rethink the control: Command motor speeds directly.
        // Target: move forward with 'desired_linear_velocity'
        // Target: turn with 'desired_angular_velocity'

        // If we want to achieve a linear velocity 'v' and angular velocity 'omega':
        // v_l = v - omega * L / 2
        // v_r = v + omega * L / 2

        // The challenge is mapping these desired wheel velocities (m/s) to motor PWM.
        // This mapping is hardware dependent and requires calibration.
        // For example, you might have a function `set_motor_speed(motor_id, pwm_value)`

        // A common approach in robotics libraries is to accept desired velocities (m/s, rad/s)
        // and internally handle the kinematics and PWM mapping.

        // Let's assume we have a function that takes desired linear and angular velocities
        // and sets the motors accordingly.
        // set_robot_velocities(desired_linear_velocity, desired_angular_velocity);

        // --- Manual PWM calculation (illustrative, needs calibration) ---
        // This is a simplified mapping and needs proper calibration.
        // Assume a function `linear_vel_to_pwm(velocity)` exists.
        float max_motor_speed_mps = 0.5; // Max linear speed of a single wheel
        float pwm_per_mps = max_pwm / max_motor_speed_mps;

        float target_vl_mps = desired_linear_velocity - desired_angular_velocity * wheel_base / 2.0;
        float target_vr_mps = desired_linear_velocity + desired_angular_velocity * wheel_base / 2.0;

        // Clamp wheel velocities before converting to PWM
        target_vl_mps = max(-max_motor_speed_mps, min(max_motor_speed_mps, target_vl_mps));
        target_vr_mps = max(-max_motor_speed_mps, min(max_motor_speed_mps, target_vr_mps));

        left_motor_speed = (int)(target_vl_mps * pwm_per_mps);
        right_motor_speed = (int)(target_vr_mps * pwm_per_mps);

        // Ensure speeds are within PWM range
        left_motor_speed = max(-max_pwm, min(max_pwm, left_motor_speed));
        right_motor_speed = max(-max_pwm, min(max_pwm, right_motor_speed));
    }

    // --- Send commands to motors ---
    // set_left_motor(left_motor_speed);
    // set_right_motor(right_motor_speed);

    // --- Update timing for odometry ---
    // prev_left_encoder_count = current_left_encoder;
    // prev_right_encoder_count = current_right_encoder;
    // prev_time_ms = millis();
}

// --- Setup ---
void setup() {
    // Initialize serial communication, motors, encoders, etc.
    Serial.begin(9600);
    // ... motor initialization ...
    // ... encoder setup ...
    prev_time_ms = millis(); // Initialize time
}

// --- Loop ---
void loop() {
    // In a real Arduino sketch, you'd read sensors here.
    // For example:
    // long current_left = read_left_encoder();
    // long current_right = read_right_encoder();
    // unsigned long current_time = millis();

    // control_loop(); // Call the main logic

    // A delay might be needed depending on your loop frequency requirements.
    // delay(20); // Example: aiming for a 50Hz loop
}
```

**Important Points for Implementation:**

*   **Calibration:** Accurate calibration of wheel radius, wheelbase, encoder resolution, and motor speed-PWM mapping is critical for performance.
*   **Odometry Accuracy:** Odometry is prone to drift. For long-term navigation, sensor fusion with IMU or external localization systems (like GPS or vision-based SLAM) is necessary.
*   **Tuning Control Gains:** $K_p^\theta$ and $K_p^d$ need to be tuned experimentally for optimal response (avoiding oscillations, ensuring stability, and achieving desired speed).
*   **Discretization:** The continuous kinematic equations are approximated in a discrete-time control loop. The sampling time (`dt`) of the loop affects performance.

---

## 6. Practice Questions and Answers

**Question 1:** A differential drive robot has wheels with a radius $r = 0.05$ m and a wheelbase $L = 0.2$ m. If the left wheel has a linear velocity $v_l = 0.1$ m/s and the right wheel has a linear velocity $v_r = 0.2$ m/s, what are the robot's linear and angular velocities?

**Answer 1:**
Using the kinematic equations:
*   $v = \frac{r}{2}(v_l + v_r) = \frac{0.05}{2}(0.1 + 0.2) = \frac{0.05}{2}(0.3) = 0.0075$ m/s
*   $\omega = \frac{r}{2L}(v_r - v_l) = \frac{0.05}{2 \times 0.2}(0.2 - 0.1) = \frac{0.05}{0.4}(0.1) = \frac{0.005}{0.4} = 0.0125$ rad/s

**Question 2:** If a differential drive robot needs to turn in place to the left by 90 degrees ($\pi/2$ radians), what should be the relationship between its left and right wheel velocities? Assume $r$ and $L$ are standard.

**Answer 2:**
For turning in place, the robot's linear velocity $v$ must be zero.
$v = \frac{r}{2}(v_l + v_r) = 0 \implies v_l + v_r = 0 \implies v_l = -v_r$.
This means the wheels must rotate at the same speed but in opposite directions. The direction of turn is determined by which wheel is commanded forward and which is backward. For a left turn, the left wheel would typically move backward, and the right wheel forward, or vice-versa with appropriate sign conventions. If the robot's center of rotation is at the midpoint between the wheels, then $v_l = -v_r$.

**Question 3:** Describe the primary challenge in implementing a simple "go-to-goal" controller for a differential drive robot, relating it to its kinematic constraints.

**Answer 3:** The primary challenge is that a differential drive robot cannot instantaneously change its orientation or move sideways. To reach a goal point that is not directly in front of it, the robot must first rotate to align its heading with the target direction, and then move forward. The simple controller needs to smoothly manage this transition, often by employing proportional control on both the angular error (to steer) and the distance error (to drive forward). The robot's inability to strafe means that its path to the goal will always involve arcs and/or straight lines, dictated by its turning and forward motion capabilities.

**Question 4:** What is the role of odometry in the context of path planning for a differential drive robot?

**Answer 4:** Odometry provides the robot's estimated current state (position $(x, y)$ and orientation $\theta$). This information is essential for the path planner to:
1.  **Determine the current position relative to the goal:** Calculate the distance and angle to the target.
2.  **Track progress along a planned path:** If a continuous path is generated, odometry allows the robot to know where it is on that path.
3.  **Provide feedback to the controller:** The controller uses the odometry data to compare the robot's actual state with the desired state and adjust motor commands accordingly.
Without accurate odometry, the robot would not know where it is, making path planning and execution impossible.

---

## 7. Important Points to Remember

*   **Differential Drive Kinematics:** $v = \frac{r}{2}(v_l + v_r)$ and $\omega = \frac{r}{2L}(v_r - v_l)$. These are fundamental for understanding how wheel speeds translate to robot motion.
*   **Configuration Space:** Path planning fundamentally occurs in configuration space, not just workspace.
*   **Odometry:** Crucial for knowing the robot's state; prone to drift and requires careful implementation.
*   **Control Loops:** Simple point-to-point navigation is often achieved using controllers that directly command linear and angular velocities, which are then converted to wheel commands.
*   **Tuning:** Control gains ($K_p, K_d$) are critical for robot performance and must be tuned experimentally.
*   **Calibration:** Accurate robot parameters ($r, L$) and motor-to-speed mappings are essential for precise movement.

---

This comprehensive set of notes covers the core concepts, practical considerations, and implementation details for designing and implementing a differential drive robot capable of moving to a point. By understanding the kinematics and applying appropriate control strategies, you can achieve effective autonomous navigation.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
