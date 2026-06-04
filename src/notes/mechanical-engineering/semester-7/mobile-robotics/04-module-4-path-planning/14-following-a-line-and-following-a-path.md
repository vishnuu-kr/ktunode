---
title: "following a line and following a path"
subject: "MOBILE ROBOTICS"
module: "Module 4: Path Planning"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf48044640d2"
status: "completed"
scrapedAt: "2026-05-20T18:15:35.978Z"
---
# Mobile Robotics: Module 4 - Path Planning: Following a Line and Following a Path

This module delves into fundamental path planning techniques for mobile robots, focusing on two core behaviors: following a defined line and navigating along a more complex, pre-defined path. These concepts are crucial for tasks ranging from automated guided vehicles (AGVs) in industrial settings to robotic vacuum cleaners.

## Module 4: Path Planning - Following a Line and Following a Path

**Learning Outcomes:**

*   Understand the principles of line following for mobile robots.
*   Learn how to implement line following using sensors.
*   Understand the concepts of path following for more general trajectories.
*   Explore different path following control strategies.
*   Analyze the performance of line and path following controllers.

**Course Outcomes Alignment:**

*   **CO5 (K3): Perform navigation and path planning mobile robots.** This module directly addresses this by teaching specific path planning techniques.
*   **CO6 (K3): Control the mobile robots to follow different paths.** This module provides the foundational knowledge and control strategies for achieving this.

---

### 1. Following a Line

Line following is a fundamental and widely used behavior in mobile robotics. It involves a robot navigating and maintaining its position relative to a visible line on the ground or a projected line. This is commonly used in industrial environments (AGVs), warehousing, and even in some consumer robots.

**1.1 Key Concepts and Definitions**

*   **Line Following:** The task of a mobile robot to track and stay on a designated line, typically on a surface.
*   **Line Sensor:** Sensors used to detect the presence and position of a line. Common types include:
    *   **Infrared (IR) Sensors:** Emit IR light and detect its reflection. A darker surface (line) will reflect less IR light than a lighter surface (background).
    *   **Camera/Vision Sensors:** Capture images of the environment and use image processing techniques to identify the line.
    *   **Color Sensors:** Detect specific colors that constitute the line.
*   **Line Characteristics:**
    *   **Width:** The physical width of the line.
    *   **Color/Contrast:** The difference in color or reflectivity between the line and the background.
    *   **Continuity:** Whether the line is a continuous path or has breaks.
*   **Robot Kinematics (Brief Recall):** Understanding how the robot's movement (e.g., wheel velocities) translates into its position and orientation on the plane is essential for controlling its movement along the line. (Ref: Siegwart & Nourbakhsh, Chapter 2: Kinematics of Mobile Robots).
*   **Error Signal:** The difference between the robot's current position relative to the line and the desired position (e.g., centered on the line). This error signal is used by the controller.

**1.2 Sensors for Line Following**

*   **IR Array Sensors:**
    *   **How they work:** An array of IR emitters and detectors is mounted beneath the robot. Each detector measures the reflected IR light. A higher reading typically indicates the sensor is over a lighter surface, and a lower reading indicates it's over a darker line.
    *   **Example:** A common setup might have 5-7 IR sensors in a row. If the center sensor detects the line, the robot is likely centered. If the left sensors detect the line, the robot is likely to the right of the line, and vice-versa.
    *   **Textbook Reference:** Siegwart & Nourbakhsh (2011), Chapter 5: Sensors for Mobile Robots, discusses various sensor types and their applications.
*   **Camera-based Line Following:**
    *   **How it works:** A camera mounted on the robot captures an image of the ground ahead. Image processing techniques (e.g., edge detection, color thresholding) are used to identify the line's pixels. The robot's controller then uses the line's position within the image to adjust its movement.
    *   **Example:** A robot might look for pixels within a specific color range (e.g., black). The centroid of these pixels in the image can determine the line's horizontal position relative to the robot's field of view.
    *   **Textbook Reference:** Corke (2011), Chapter 11: Vision Systems, covers image acquisition and basic processing, which are fundamental to camera-based line following.

**1.3 Control Strategies for Line Following**

The goal is to keep the robot centered on the line. This is typically achieved by using an error signal to adjust the robot's linear and angular velocities.

*   **Proportional (P) Control:**
    *   **Concept:** The control output (e.g., steering angle or differential wheel speeds) is directly proportional to the error.
    *   **Formula:** `Output = Kp * Error`
    *   **Example:** If `Kp` is a positive constant and `Error` is positive (robot is to the right of the line), the robot might be steered to the left (or the left wheels driven faster). If `Error` is negative (robot is to the left), it's steered to the right.
    *   **Pros:** Simple to implement.
    *   **Cons:** Can lead to oscillations or steady-state error.
*   **Proportional-Integral (PI) Control:**
    *   **Concept:** Adds an integral term to the proportional term. The integral term sums up past errors, helping to eliminate steady-state error.
    *   **Formula:** `Output = Kp * Error + Ki * Integral(Error)`
    *   **Example:** If the robot consistently remains slightly to one side of the line (steady-state error), the integral term will grow over time, increasing the control output until the error is eliminated.
    *   **Pros:** Reduces steady-state error.
    *   **Cons:** Can increase overshoot and instability if not tuned properly.
*   **Proportional-Integral-Derivative (PID) Control:**
    *   **Concept:** Adds a derivative term to the PI controller. The derivative term responds to the rate of change of the error, helping to dampen oscillations and improve response time.
    *   **Formula:** `Output = Kp * Error + Ki * Integral(Error) + Kd * Derivative(Error)`
    *   **Example:** If the robot is rapidly deviating from the line, the derivative term will provide a strong counteraction, stabilizing its movement.
    *   **Pros:** Can provide excellent performance, reducing overshoot and settling time.
    *   **Cons:** More complex to tune.
*   **Fuzzy Logic Control:**
    *   **Concept:** Uses linguistic rules and fuzzy sets to define the relationship between sensor inputs (error, rate of error change) and control outputs (steering, speed).
    *   **Example:** Rules like "IF `Error` is `Negative_Big` AND `Derivative_Error` is `Zero` THEN `Steering` is `Right_Hard`."
    *   **Pros:** Can handle non-linearities and imprecision well, intuitive for human operators to design.
    *   **Cons:** Can be computationally intensive, tuning membership functions can be challenging.
    *   **Textbook Reference:** Tzafestas (2007), Chapter 10: Fuzzy Logic Control Systems, provides a good overview of fuzzy logic principles applicable to robotics.

**1.4 Implementation Considerations**

*   **Sensor Placement:** The height and spacing of sensors are critical. They should be close enough to the ground to reliably detect the line but high enough to avoid collisions. The spacing should be appropriate for the line width and the robot's speed.
*   **Robot Speed:** Higher speeds require faster response times from the sensors and controller. This can make line following more challenging.
*   **Line Quality:** The contrast, width, and continuity of the line significantly impact performance.
*   **Environment:** Lighting conditions and surface variations can affect sensor readings.
*   **Tuning:** PID or fuzzy logic controllers require careful tuning of their parameters (`Kp`, `Ki`, `Kd`) to achieve stable and accurate line following.

---

### 2. Following a Path

Path following is a more general concept than line following. It involves a robot navigating along a pre-defined trajectory, which can be a straight line, a curve, or a sequence of waypoints. This is a cornerstone of autonomous navigation.

**2.1 Key Concepts and Definitions**

*   **Path:** A sequence of configurations (position and orientation) or waypoints that a robot should follow. A path is typically a geometric curve.
*   **Trajectory:** A path combined with a time parameterization, specifying when the robot should be at each point on the path.
*   **Path Following:** The task of controlling a robot to follow a given path while minimizing errors in position and orientation relative to the path.
*   **Global Path:** A path planned from the robot's starting location to its goal location in the environment.
*   **Local Path:** A path or maneuver generated by a local planner to avoid immediate obstacles or to correct deviations from a global path.
*   **Reference Path:** The ideal geometric path the robot is supposed to follow.
*   **Robot State:** The robot's current position, orientation, and velocity.
*   **Tracking Error:** The difference between the robot's current state and the desired state on the reference path. This can include:
    *   **Cross-track Error:** Perpendicular distance from the robot to the reference path.
    *   **Heading Error (Orientation Error):** Difference between the robot's current orientation and the orientation of the path at the closest point.
*   **Control Law:** An algorithm that computes control commands (e.g., linear and angular velocities) based on the tracking error.

**2.2 Path Representations**

*   **Waypoints:** A discrete set of points the robot should pass through. The path is often interpolated between these points.
*   **Parametric Curves:** Mathematical representations of curves (e.g., splines, Bezier curves) where position is a function of a parameter (often representing distance along the curve).
*   **Geometric Primitives:** Paths composed of straight line segments and circular arcs.

**2.3 Sensors for Path Following**

While specific line sensors are used for line following, general path following often relies on sensors that provide the robot's pose (position and orientation) and information about the environment for obstacle avoidance.

*   **Odometry:** Estimates the robot's pose based on wheel encoders. Provides relative motion information.
    *   **Textbook Reference:** Siegwart & Nourbakhsh (2011), Chapter 5.2: Odometry, discusses its principles and limitations (e.g., drift).
*   **Inertial Measurement Units (IMUs):** Provide acceleration and angular velocity, which can be integrated to estimate orientation and changes in position.
    *   **Textbook Reference:** Siegwart & Nourbakhsh (2011), Chapter 5.3: Inertial Sensors, covers IMUs.
*   **GPS (Global Positioning System):** Provides absolute position in outdoor environments.
*   **Vision Systems (Cameras):** Can be used for visual odometry, landmark recognition, or visual servoing to track features on the path.
    *   **Textbook Reference:** Corke (2011), Chapter 11: Vision Systems, is highly relevant.
*   **LiDAR (Light Detection and Ranging):** Provides distance measurements to surrounding objects, enabling obstacle detection and localization (e.g., SLAM).
    *   **Textbook Reference:** Siegwart & Nourbakhsh (2011), Chapter 5.4: Laser Range Finders.
*   **Localization Systems:** Algorithms like Monte Carlo Localization (MCL) or Kalman Filters (EKF, UKF) combine sensor data to provide an accurate estimate of the robot's pose.
    *   **Textbook Reference:** Thrun, Burgard, & Fox (2005), Chapter 6: Monte Carlo Localization, and Chapter 4: Kalman Filters, are foundational for understanding localization.

**2.4 Control Strategies for Path Following**

These controllers aim to minimize tracking errors by adjusting the robot's linear and angular velocities.

*   **Pure Pursuit (PP) / Stanley Controller:**
    *   **Concept:** A geometric approach that determines the steering angle based on the distance to a "lookahead point" on the path and the robot's current heading relative to the path.
    *   **Pure Pursuit:**
        *   Select a lookahead point on the reference path, a fixed distance ahead.
        *   Calculate the curvature required to reach this lookahead point from the robot's current position.
        *   Convert this curvature into steering commands.
        *   **Formula (simplified):** `Steering Angle = atan2(2 * L * sin(heading_error), lookahead_distance)` where `L` is the wheelbase.
    *   **Stanley Controller:**
        *   Combines two error terms:
            1.  **Cross-track error:** The perpendicular distance from the robot to the closest point on the path. This primarily controls the steering.
            2.  **Heading error:** The difference between the robot's current heading and the path's tangent at the closest point. This helps align the robot with the path.
        *   **Formula (simplified for steering):** `Steering Angle = heading_error + atan2(cross_track_error, lookahead_distance)`
    *   **Example:** A robot driving towards a curved sidewalk would use Pure Pursuit or Stanley to continuously adjust its steering to stay on the edge of the sidewalk.
    *   **Textbook Reference:** Siegwart & Nourbakhsh (2011), Chapter 6: Robot Motion Planning, and La Valle (2009), Chapter 7: Motion Controllers, discuss these concepts.
*   **Backstepping:**
    *   **Concept:** A systematic recursive controller design technique for systems that can be represented in a "feedback linearizable" form. It ensures stability of the robot's state as it converges to the desired path.
    *   **Example:** For a unicycle model, backstepping can be used to derive controllers for both position and orientation, ensuring that as the position error reduces, the orientation error also converges.
    *   **Textbook Reference:** Tzafestas (2007), Chapter 7: Advanced Control Techniques, often covers backstepping. Corke (2011) also presents control designs, potentially including backstepping principles.
*   **Model Predictive Control (MPC):**
    *   **Concept:** Predicts the robot's future behavior over a short horizon using a dynamic model and optimizes control inputs to minimize a cost function (e.g., tracking error, control effort) while satisfying constraints (e.g., velocity limits, obstacle avoidance).
    *   **Example:** An MPC controller could predict the robot's trajectory for the next few seconds, accounting for actuator limits, and choose velocities that keep it close to the path while avoiding an upcoming obstacle.
    *   **Textbook Reference:** Tzafestas (2007), Chapter 10: Advanced Control Techniques, might touch upon MPC. La Valle (2009) also discusses advanced control approaches.
*   **PID Control for Path Following:**
    *   **Concept:** PID controllers can be adapted to track path following errors. For instance, a PID controller could be used to regulate the cross-track error, influencing the robot's lateral movement.
    *   **Example:** A PID controller could adjust the robot's lateral velocity to bring it back to the center of a lane if it drifts.
    *   **Textbook Reference:** Similar to line following, PID is a general control technique.

**2.5 Implementation Considerations**

*   **Path Discretization/Interpolation:** If the path is defined by waypoints, smooth interpolation is necessary.
*   **Lookahead Distance (for PP/Stanley):** A critical tuning parameter. Too short can lead to jerky movements, too long can cause overshooting or instability.
*   **Proportional Gain for Cross-track Error (for Stanley):** Controls how aggressively the robot corrects lateral deviations.
*   **Wheelbase (for PP/Stanley):** A physical parameter of the robot.
*   **Coordinate Transformations:** Converting between the robot's local frame and the global path frame is essential.
*   **Dynamic Model:** For advanced controllers like MPC, an accurate dynamic model of the robot is required.
*   **Sensor Fusion:** Combining data from multiple sensors (odometry, IMU, GPS) improves pose estimation accuracy.

---

### Practice Questions

**1. Line Following:**

**(a)** You are using an array of 5 IR sensors for line following. If the sensors are ordered from left to right (1 to 5), and the readings are `[Low, Low, High, Low, Low]`, where `High` means the sensor is over a light surface and `Low` means it's over a dark line, describe the robot's current position relative to the line and what kind of control action (e.g., steer left, steer right, go straight) would be appropriate using a simple proportional controller.

**(b)** What is the main advantage of using a PI controller over a P controller for line following?

**(c)** Name two common types of sensors used for line following.

**2. Path Following:**

**(a)** Briefly explain the difference between a "path" and a "trajectory" in the context of mobile robot motion.

**(b)** In the Stanley controller, what are the two main error components that are used to calculate the steering command?

**(c)** What is a "lookahead point" in the context of the Pure Pursuit controller, and what is its role?

**(d)** Why is sensor fusion important for accurate path following?

---

### Answers to Practice Questions

**1. Line Following:**

**(a)** The readings `[Low, Low, High, Low, Low]` indicate that the two leftmost sensors (1 and 2) are detecting the line, while the center sensor (3) is over the background. This means the robot is positioned to the **right** of the line. A proportional controller would need to steer the robot to the **left** to bring it back onto the line.

**(b)** The main advantage of a PI controller over a P controller for line following is its ability to **eliminate steady-state error**. The integral term accumulates past errors, providing a corrective action even when the instantaneous error is small or zero, which helps the robot settle precisely on the line.

**(c)** Two common types of sensors used for line following are:
    *   **Infrared (IR) sensors (often in an array)**
    *   **Camera / Vision sensors**

**2. Path Following:**

**(a)** A **path** is a sequence of configurations (position and orientation) or waypoints in space. It defines *where* the robot should go. A **trajectory** is a path that is augmented with a time component, specifying *when* the robot should be at each point on the path. Essentially, a trajectory adds speed and timing information to a path.

**(b)** The two main error components used in the Stanley controller are:
    1.  **Cross-track error:** The perpendicular distance from the robot to the closest point on the reference path.
    2.  **Heading error:** The difference between the robot's current heading and the path's tangent at the closest point.

**(c)** A "lookahead point" in the Pure Pursuit controller is a point on the reference path located at a specific distance ahead of the robot. Its role is to determine the target point that the robot's controller will aim to reach, influencing the curvature and thus the steering command.

**(d)** Sensor fusion is important for accurate path following because it allows the robot to get a more robust and accurate estimate of its own pose (position and orientation) by combining data from multiple sensors (e.g., odometry, IMU, GPS, vision). This reduces the impact of noise and drift from individual sensors, leading to better adherence to the planned path and improved overall navigation performance.

---

### Important Points to Remember

*   **Line Following:** Primarily relies on sensors detecting contrast (e.g., IR, vision) and uses control algorithms (P, PI, PID, Fuzzy) to maintain a desired relationship (usually centered) with the line.
*   **Path Following:** Involves tracking a more complex geometric trajectory, often requiring accurate robot pose estimation (odometry, IMU, localization) and specialized controllers (Pure Pursuit, Stanley, Backstepping, MPC) to manage cross-track and heading errors.
*   **Sensor Choice:** The selection of sensors is paramount for both line and path following, dictated by the environment, the line/path characteristics, and the required accuracy.
*   **Controller Tuning:** The performance of both line and path following controllers heavily depends on proper parameter tuning.
*   **Robot Kinematics/Dynamics:** Understanding the robot's motion capabilities is crucial for designing effective control strategies.

---

This module has provided a foundation for understanding how mobile robots can be controlled to follow specific lines and more general paths, a fundamental aspect of autonomous navigation. The concepts learned here are essential for more advanced path planning and navigation tasks.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
