---
title: "Robot navigation"
subject: "MOBILE ROBOTICS"
module: "Module 3: Sensors for mobile robot navigation"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf48044640be"
status: "completed"
scrapedAt: "2026-05-20T18:15:22.518Z"
---
# Mobile Robotics: Module 3 - Sensors for Mobile Robot Navigation

## Topic: Robot Navigation

This module focuses on the fundamental concepts and techniques involved in robot navigation, particularly for mobile robots. We will explore how robots perceive their environment, determine their location, and plan paths to reach desired destinations. This topic directly supports **Course Outcome CO4: Choose appropriate Sensors for mobile robot navigation (Knowledge Level: K3)** and **CO5: Perform navigation and path planning mobile robots (Knowledge Level: K3)**.

---

### 3.1 Introduction to Robot Navigation

Robot navigation is the process by which a robot determines its current state (position and orientation) within an environment and plans a sequence of movements to reach a specified goal state. It's a cornerstone of autonomous systems, enabling robots to operate independently and effectively in various scenarios.

**Key Concepts:**

*   **Localization:** Determining the robot's pose (position and orientation) within a known or unknown environment.
*   **Mapping:** Creating a representation of the environment.
*   **Path Planning:** Finding a collision-free trajectory from the robot's current location to a target location.
*   **Motion Control:** Executing the planned trajectory by controlling the robot's actuators.

**Importance in Mobile Robotics:**

Mobile robots, unlike fixed manipulators, are designed to move. Therefore, robust navigation is essential for them to:
*   Explore unknown environments.
*   Perform tasks in dynamic or unstructured settings.
*   Efficiently reach designated locations.
*   Avoid obstacles.

**Textbook References:**

*   **Siegwart, Nourbakhsh (2011):** Chapters 1, 2, and 3 provide an excellent overview of the challenges and fundamental principles of mobile robot navigation, covering sensing, localization, and mapping.
*   **Corke (2011):** While focused on algorithms, Corke's book implicitly covers navigation through its discussion of vision-based perception and control, which are crucial for navigation.
*   **La Valle (2009):** This book is dedicated to planning algorithms, offering in-depth coverage of path planning techniques.

---

### 3.2 Robot Localization

Localization is the process of estimating the robot's pose (position and orientation) in its environment. Accurate localization is a prerequisite for effective path planning and execution.

**3.2.1 Types of Localization:**

*   **Absolute Localization:** The robot's pose is estimated with respect to a global coordinate frame (e.g., a map's origin).
*   **Relative Localization:** The robot estimates its pose relative to its previous pose or a known landmark.

**3.2.2 Methods of Localization:**

This is where sensors play a critical role. Localization relies on combining sensor measurements with internal motion models.

*   **Dead Reckoning:**
    *   **Concept:** Estimating the robot's current position by integrating its past movements (velocity and time) from a known initial pose.
    *   **Sensors Used:**
        *   **Wheel Encoders:** Measure the rotation of the robot's wheels to estimate distance traveled and changes in orientation.
        *   **Inertial Measurement Units (IMUs):** Provide measurements of angular velocity (gyroscopes) and linear acceleration (accelerometers). Integrating these can provide orientation and, with more complex processing, position.
    *   **Limitations:** Errors accumulate over time due to sensor noise, wheel slippage, and inaccuracies in the motion model.
    *   **Textbook Reference:** Siegwart & Nourbakhsh (2011) Chapter 2 discusses dead reckoning and its limitations.

*   **Landmark-Based Localization:**
    *   **Concept:** Using features or landmarks in the environment (either pre-defined or detected) to correct accumulated errors from dead reckoning.
    *   **Sensors Used:**
        *   **Cameras (Vision Sensors):** Detect visual landmarks (e.g., corners, specific objects, AprilTags, ArUco markers).
        *   **Lidar (Light Detection and Ranging):** Detect geometric features like walls or specific shapes.
        *   **Infrared (IR) Sensors:** Can detect predefined IR beacons.
        *   **Ultrasonic Sensors:** Can detect distinct geometric features.
    *   **Techniques:**
        *   **Trilateration/Multilateration:** Determining position based on distances to known landmarks.
        *   **Triangulation:** Determining position based on angles to known landmarks.
        *   **Map Matching:** Comparing sensor readings (e.g., Lidar scans) to a pre-existing map.
    *   **Textbook Reference:** Siegwart & Nourbakhsh (2011) Chapter 2 and Chapter 3 (Mapping) are relevant here. Thrun et al. (2005) dedicates significant portions to probabilistic localization methods like Monte Carlo Localization (MCL).

*   **Simultaneous Localization and Mapping (SLAM):**
    *   **Concept:** The robot builds a map of an unknown environment while simultaneously determining its location within that map. This is a more challenging but powerful approach.
    *   **Sensors Used:** Lidar, Cameras, IMUs, Wheel Encoders.
    *   **Techniques:** Kalman Filters (EKF-SLAM, UKF-SLAM), Particle Filters (MCL-SLAM).
    *   **Textbook Reference:** Siegwart & Nourbakhsh (2011) Chapter 3 provides an introduction to SLAM. Thrun et al. (2005) is a definitive resource for SLAM algorithms.

**Probabilistic Localization (Key Concept from Thrun et al., 2005):**

*   **Concept:** Localization is treated as a state estimation problem, where the robot's pose is a random variable. Probabilistic methods maintain a probability distribution over possible robot poses.
*   **Example: Monte Carlo Localization (MCL) / Particle Filter:**
    *   Represents the probability distribution using a set of weighted samples (particles).
    *   Each particle represents a hypothesis about the robot's pose.
    *   **Prediction:** Particles are moved according to the robot's motion model.
    *   **Update:** Particles are re-weighted based on how well their predicted sensor readings match actual sensor readings from the environment.
    *   **Resampling:** Particles are resampled to concentrate on high-probability regions.
*   **Importance:** Crucial for dealing with sensor noise and uncertainties in motion, enabling robust localization even in complex environments.

**Important Points to Remember:**

*   Localization is a continuous process.
*   The accuracy of localization is heavily dependent on the quality and type of sensors used.
*   Sensor fusion (combining data from multiple sensors) often leads to more robust and accurate localization.

---

### 3.3 Robot Mapping

Mapping involves creating a representation of the robot's environment. The type of map used significantly influences the choice of localization and path planning algorithms.

**3.3.1 Types of Maps:**

*   **Feature-Based Maps:**
    *   **Concept:** Represent the environment as a collection of distinctive features (landmarks), such as corners, poles, or specific objects.
    *   **Pros:** Compact, good for sparse environments.
    *   **Cons:** Requires reliable feature detection and description.
    *   **Sensors Used:** Cameras, Lidar.

*   **Occupancy Grid Maps:**
    *   **Concept:** Discretize the environment into a grid of cells, where each cell is assigned a probability of being occupied (e.g., by an obstacle) or free.
    *   **Pros:** Versatile, can represent complex environments, works well with Lidar and sonar.
    *   **Cons:** Can be memory-intensive for high-resolution maps, movement through free space needs careful planning.
    *   **Sensors Used:** Lidar, Sonar (Ultrasonic), Depth Cameras.
    *   **Textbook Reference:** Siegwart & Nourbakhsh (2011) Chapter 3 extensively covers occupancy grids and their use in mapping.

*   **Topological Maps:**
    *   **Concept:** Represent the environment as a graph where nodes represent distinct locations (e.g., rooms, junctions) and edges represent connectivity between them.
    *   **Pros:** Abstract, good for high-level navigation and reasoning.
    *   **Cons:** Lacks precise geometric information, requires a separate metric map or localization system for accurate path following.
    *   **Sensors Used:** Can be built from various sensor data and localization information.

*   **Metric Maps (e.g., Point Clouds, Vector Maps):**
    *   **Concept:** Provide precise geometric information about the environment. Point clouds are raw sensor data (e.g., Lidar), while vector maps represent objects with geometric primitives (lines, circles).
    *   **Sensors Used:** Lidar, Depth Cameras.

**Mapping Techniques:**

*   **Lidar-Based Mapping:** Lidar sensors emit laser beams and measure the time of flight to determine distances to objects, creating a 2D or 3D point cloud of the environment.
*   **Vision-Based Mapping (Structure from Motion - SfM):** Using sequences of images from cameras to reconstruct the 3D structure of the environment. This is often combined with visual odometry for localization.
*   **Sensor Fusion for Mapping:** Combining data from multiple sensors (e.g., Lidar and IMU) to create more accurate and complete maps.

**Important Points to Remember:**

*   The choice of map representation depends on the robot's task, the environment, and the available sensors.
*   Mapping and localization are often performed concurrently (SLAM).

---

### 3.4 Path Planning

Path planning is the process of finding a sequence of movements (a path or trajectory) that guides the robot from its current location to a desired goal, while avoiding obstacles and respecting the robot's kinematic and dynamic constraints. This directly relates to **CO5: Perform navigation and path planning mobile robots (Knowledge Level: K3)** and **CO6: Control the mobile robots to follow different paths (Knowledge Level: K3)**.

**3.4.1 Components of Path Planning:**

*   **Path:** A sequence of configurations (positions and orientations) from start to goal.
*   **Trajectory:** A path with associated timing information (velocity and acceleration).
*   **Global Path Planning:** Planning a path from the start to the goal in a known or pre-mapped environment.
*   **Local Path Planning (Reactive Navigation):** Planning or modifying the path in real-time based on immediate sensor readings to avoid newly detected obstacles.

**3.4.2 Path Planning Algorithms:**

**A. Global Path Planning Algorithms (Often based on the map):**

*   **Grid-Based Search Algorithms:**
    *   **Dijkstra's Algorithm:**
        *   **Concept:** Finds the shortest path in a graph (e.g., an occupancy grid) by systematically exploring nodes in order of increasing distance from the start.
        *   **How it works:** Maintains a set of visited nodes and a priority queue of unvisited nodes. It expands outwards, guaranteeing the shortest path.
        *   **Textbook Reference:** La Valle (2009) Chapter 4 covers graph search algorithms like Dijkstra's. Corke (2011) might implicitly use these concepts in image-based navigation.
    *   **A* (A-star) Algorithm:**
        *   **Concept:** An informed search algorithm that uses a heuristic function to guide the search towards the goal, making it more efficient than Dijkstra's.
        *   **Heuristic Function (h(n)):** Estimates the cost from the current node 'n' to the goal. A common heuristic for grid maps is the Euclidean distance or Manhattan distance.
        *   **Equation:** `f(n) = g(n) + h(n)`, where `g(n)` is the cost from the start to node 'n'.
        *   **Textbook Reference:** La Valle (2009) Chapter 4 provides a detailed explanation of A*.
    *   **Example:** Imagine navigating a robot through a maze represented as an occupancy grid. Dijkstra's would explore all paths equally, while A* would prioritize paths that seem to be heading towards the exit.

*   **Sampling-Based Algorithms:**
    *   **Probabilistic Roadmaps (PRM):**
        *   **Concept:** Builds a graph (roadmap) of collision-free paths in the configuration space by randomly sampling points and connecting them if a collision-free path exists between them.
        *   **Stages:**
            1.  **Learning Phase:** Sample random configurations, remove invalid ones (in obstacles), and connect valid ones with simple local planners.
            2.  **Query Phase:** Connect the start and goal configurations to the roadmap and then search the roadmap using graph search algorithms.
        *   **Pros:** Effective for high-dimensional configuration spaces and complex geometries.
        *   **Cons:** Can be slow to build the roadmap, path quality might not be optimal.
        *   **Textbook Reference:** La Valle (2009) Chapter 6.
    *   **Rapidly-exploring Random Trees (RRT):**
        *   **Concept:** Grows a tree of feasible paths from the start configuration by iteratively extending towards randomly sampled points in the configuration space.
        *   **How it works:** Selects a random point, finds the nearest node in the tree, and extends the tree towards the random point.
        *   **Pros:** Efficient for exploring large configuration spaces, good for single-query problems.
        *   **Cons:** Paths can be jagged and suboptimal; variants like RRT* improve path quality.
        *   **Textbook Reference:** La Valle (2009) Chapter 6.

*   **Potential Field Methods:**
    *   **Concept:** The robot is treated as a particle moving in a potential field. The goal exerts an attractive force, while obstacles exert repulsive forces.
    *   **Pros:** Reactive, computationally inexpensive.
    *   **Cons:** Can get stuck in local minima (e.g., between two repelling obstacles).
    *   **Textbook Reference:** Siegwart & Nourbakhsh (2011) Chapter 5.

**B. Local Path Planning / Reactive Navigation:**

*   **Vector Field Histogram (VFH):**
    *   **Concept:** Uses a histogram grid representing obstacle densities in different directions to find a clear path.
    *   **How it works:** Creates a polar histogram of obstacles around the robot and then searches for a clear sector to steer towards.
*   **Dynamic Window Approach (DWA):**
    *   **Concept:** Considers the robot's achievable velocities within a short time horizon and selects a velocity command that leads to the goal while avoiding collisions.
    *   **How it works:** Samples feasible velocities (linear and angular) from the robot's dynamic window and evaluates each trajectory based on proximity to the goal and distance to obstacles.
    *   **Textbook Reference:** Siegwart & Nourbakhsh (2011) Chapter 5 discusses these reactive methods.

**3.4.3 Path Smoothing:**

*   **Concept:** Raw paths generated by algorithms can be jerky and computationally expensive to follow. Smoothing algorithms generate smoother, more kinematically feasible trajectories.
*   **Methods:** Splines, Bezier curves, B-splines.
*   **Textbook Reference:** Corke (2011) likely covers trajectory generation and smoothing.

**Important Points to Remember:**

*   Path planning requires a representation of the environment (a map).
*   Global path planning provides a high-level route, while local planning handles immediate obstacles.
*   The robot's kinematic and dynamic constraints must be considered for feasible path following.

---

### 3.5 Robot Motion Control and Path Following

Once a path or trajectory is planned, the robot's actuators (wheels, motors) need to be controlled to execute it. This aligns with **CO6: Control the mobile robots to follow different paths (Knowledge Level: K3)**.

**3.5.1 Kinematic vs. Dynamic Control:**

*   **Kinematic Control:** Focuses on controlling the robot's motion based on its geometry and kinematics, often ignoring mass and forces. Assumes that velocities can be achieved instantaneously.
*   **Dynamic Control:** Considers the robot's mass, inertia, and forces. It aims to control torques or forces to achieve the desired motion, accounting for acceleration and deceleration limits.

**3.5.2 Path Following Controllers:**

*   **Pure Pursuit:**
    *   **Concept:** A classic visual servoing technique. The robot drives towards a point on the path (the "lookahead point") that is a fixed distance ahead.
    *   **How it works:** Calculates the curvature needed to reach the lookahead point and converts this into wheel velocities.
    *   **Sensors Used:** Odometry (for position and orientation), potentially vision sensors for identifying path points.
    *   **Textbook Reference:** Siegwart & Nourbakhsh (2011) Chapter 5. Corke (2011) also discusses this in the context of visual servoing.

*   **Stanley Controller:**
    *   **Concept:** Specifically designed for car-like robots, it aims to minimize both the cross-track error (distance from the robot's center of the front axle to the path) and the heading error (difference between the robot's heading and the path's tangent).
    *   **How it works:** Uses a combination of a cross-track error term and a heading error term to determine the steering angle.
    *   **Textbook Reference:** Siegwart & Nourbakhsh (2011) Chapter 5.

*   **Model Predictive Control (MPC):**
    *   **Concept:** A more advanced control technique that predicts the robot's future behavior over a short horizon and optimizes control inputs (e.g., velocities, accelerations) to follow the planned trajectory while respecting constraints.
    *   **Pros:** Can handle complex dynamics and constraints, highly effective.
    *   **Cons:** Computationally intensive.

**3.5.3 Sensor Feedback for Control:**

*   **Odometry:** Wheel encoders provide estimates of forward motion and rotation, crucial for feedback in path following.
*   **IMU:** Gyroscopes and accelerometers help correct for drift in odometry and provide accurate orientation information.
*   **GPS:** Provides absolute position in outdoor environments, but can be noisy and unavailable indoors.
*   **Vision Sensors:** Can track features on the path or environment to refine pose estimation and guide the robot.

**Important Points to Remember:**

*   The choice of controller depends on the robot's dynamics, the desired accuracy, and the complexity of the path.
*   Accurate sensor feedback is vital for effective path following.

---

### 3.6 Sensors for Navigation: A Closer Look

This section emphasizes **CO4: Choose appropriate Sensors for mobile robot navigation (Knowledge Level: K3)** by detailing key sensors and their roles.

**3.6.1 Proprioceptive Sensors (Internal Sensors):**

These sensors measure the robot's own state.

*   **Wheel Encoders:**
    *   **Principle:** Measure the rotation of drive wheels.
    *   **Output:** Pulses proportional to wheel rotation.
    *   **Use:** Dead reckoning for distance and rotation estimation.
    *   **Limitations:** Slippage, calibration errors.
    *   **Textbook Reference:** Siegwart & Nourbakhsh (2011) Chapter 2.

*   **Inertial Measurement Units (IMUs):**
    *   **Components:** Accelerometers (measure linear acceleration) and Gyroscopes (measure angular velocity). Often include magnetometers for absolute heading.
    *   **Use:** Estimating orientation (roll, pitch, yaw), measuring acceleration. Can be used for dead reckoning and correcting odometry drift.
    *   **Limitations:** Drift in gyroscopes and accelerometers leads to accumulated errors over time.
    *   **Textbook Reference:** Siegwart & Nourbakhsh (2011) Chapter 2.

**3.6.2 Exteroceptive Sensors (External Sensors):**

These sensors measure properties of the environment.

*   **Lidar (Light Detection and Ranging):**
    *   **Principle:** Emits laser pulses and measures the time of flight or phase shift of reflected light to determine distances.
    *   **Output:** Point clouds representing the environment. Can be 2D (planar scan) or 3D (spherical scan).
    *   **Use:** Mapping (occupancy grids, feature extraction), localization (scan matching), obstacle detection.
    *   **Pros:** Accurate, works in various lighting conditions, good range.
    *   **Cons:** Can be expensive, susceptible to reflective surfaces.
    *   **Textbook Reference:** Siegwart & Nourbakhsh (2011) Chapters 2 and 3. Corke (2011) discusses vision but Lidar is analogous for geometric sensing.

*   **Sonar (Ultrasonic Sensors):**
    *   **Principle:** Emit ultrasonic sound waves and measure the time of flight of the reflected waves.
    *   **Output:** Distance measurements.
    *   **Use:** Obstacle detection, proximity sensing.
    *   **Pros:** Inexpensive, good for detecting large flat surfaces.
    *   **Cons:** Limited range, affected by soft or angled surfaces (poor reflection), can suffer from beam divergence.
    *   **Textbook Reference:** Siegwart & Nourbakhsh (2011) Chapter 2.

*   **Infrared (IR) Sensors:**
    *   **Principle:** Emit infrared light and measure the intensity of the reflected light or the time of flight.
    *   **Output:** Distance measurements or binary proximity detection.
    *   **Use:** Proximity sensing, detecting specific IR beacons for localization.
    *   **Pros:** Inexpensive, small.
    *   **Cons:** Limited range, affected by ambient light and surface reflectivity.

*   **Cameras (Vision Sensors):**
    *   **Types:** Monocular (single camera), Stereo (two cameras), RGB-D (depth-sensing cameras like Kinect).
    *   **Principle:** Capture images of the environment.
    *   **Use:**
        *   **Vision-based Odometry/SLAM:** Tracking features in images to estimate robot motion.
        *   **Landmark Detection:** Identifying fiducial markers (e.g., AprilTags, ArUco) for localization.
        *   **Object Recognition:** Identifying specific objects for navigation or task execution.
        *   **Visual Servoing:** Using visual feedback to control robot motion.
    *   **Pros:** Rich information, versatile, can be inexpensive (monocular).
    *   **Cons:** Highly dependent on lighting conditions, computationally intensive for complex tasks, monocular depth estimation is challenging.
    *   **Textbook References:** Corke (2011) is heavily focused on vision robotics. Siegwart & Nourbakhsh (2011) Chapters 2 and 3 cover vision in navigation. Arduino and Kinect Projects (Melgar & Diez, 2012) highlights practical applications.

*   **GPS (Global Positioning System):**
    *   **Principle:** Receives signals from satellites to determine the robot's absolute position on Earth.
    *   **Use:** Outdoor localization.
    *   **Pros:** Global absolute positioning.
    *   **Cons:** Requires clear sky view, can be noisy, low update rate, unavailable indoors.

**3.6.3 Sensor Fusion:**

*   **Concept:** Combining data from multiple sensors to improve accuracy, robustness, and reliability.
*   **Example:** Fusing IMU data with wheel encoder odometry to get more accurate dead reckoning. Fusing Lidar and camera data for more comprehensive mapping and localization.
*   **Techniques:** Kalman Filters (Extended Kalman Filter - EKF, Unscented Kalman Filter - UKF), Particle Filters.
*   **Textbook Reference:** Thrun et al. (2005) is a primary reference for probabilistic sensor fusion techniques. Siegwart & Nourbakhsh (2011) also discusses sensor fusion in context.

**Choosing Appropriate Sensors (CO4):**

The selection of sensors depends on:
*   **Environment:** Indoor vs. outdoor, structured vs. unstructured, lighting conditions.
*   **Task:** Mapping, obstacle avoidance, precise localization, navigation over long distances.
*   **Cost and Computational Resources:** High-resolution Lidar is more expensive and computationally demanding than basic IR sensors.
*   **Required Accuracy and Robustness:** For critical applications, a combination of sensors might be necessary.

**Example Scenario:**
*   **Indoor Warehouse Navigation:** Lidar for precise mapping and obstacle avoidance, wheel encoders for odometry, IMU for orientation correction.
*   **Outdoor Autonomous Driving:** GPS for global localization, Lidar and cameras for obstacle detection and mapping, IMUs for precise motion estimation.

---

### 3.7 Summary and Key Takeaways

*   **Robot Navigation** involves localization, mapping, and path planning.
*   **Localization** determines the robot's pose using dead reckoning (encoders, IMU) and landmark-based methods (Lidar, cameras). Probabilistic methods like MCL are essential.
*   **Mapping** creates representations of the environment (feature maps, occupancy grids, topological maps) using sensors like Lidar and cameras.
*   **Path Planning** finds collision-free trajectories using algorithms like Dijkstra's, A*, PRM, and RRT, considering robot constraints.
*   **Motion Control** executes the planned path using controllers like Pure Pursuit or Stanley, relying on sensor feedback.
*   **Sensor Choice (CO4)** is critical and depends on the environment, task, and desired performance. Sensor fusion improves robustness.

---

### Practice Questions

**Question 1 (CO4 - K3):**
You are designing an indoor mobile robot for shelf inspection in a warehouse. Which sensors would you primarily consider for obstacle detection and localization within the warehouse? Justify your choices.

**Question 2 (CO5 - K3):**
Describe the main steps involved in using the A* algorithm for path planning on an occupancy grid map. What is the role of the heuristic function?

**Question 3 (CO6 - K3):**
Explain the concept of the Pure Pursuit controller. What information does it need from sensors, and what is its primary goal in path following?

**Question 4 (CO4, CO5 - K3):**
A robot uses wheel encoders for dead reckoning. What are the main sources of error in this method, and how can sensors like an IMU or Lidar be used to mitigate these errors during navigation?

**Question 5 (CO5 - K3):**
Compare and contrast grid-based path planning algorithms (like Dijkstra's/A*) with sampling-based algorithms (like RRT). When might each be more appropriate?

---

### Answers to Practice Questions

**Answer 1:**
For indoor warehouse navigation:
*   **Obstacle Detection:**
    *   **Lidar:** Highly recommended. Provides accurate range data, creating a detailed map of obstacles (shelves, other robots, people). Works well in the controlled lighting of a warehouse and can detect obstacles at various distances.
    *   **Sonar:** Can be used as a secondary, lower-cost option for detecting larger, closer obstacles. Less precise than Lidar.
*   **Localization:**
    *   **Wheel Encoders:** Essential for dead reckoning (estimating movement from wheel rotations).
    *   **IMU:** Crucial for correcting drift in wheel encoder odometry, providing accurate estimates of robot orientation (yaw, pitch, roll).
    *   **Lidar (Scan Matching):** Can be used to match current Lidar scans to a pre-built map of the warehouse, providing accurate absolute pose estimates.
    *   **Fiducial Markers (e.g., AprilTags) with Cameras:** If placed strategically throughout the warehouse, these provide very precise and unambiguous localization points.

**Answer 2:**
The A* algorithm for path planning on an occupancy grid map involves the following steps:
1.  **Initialization:** Represent the environment as an occupancy grid. Mark known obstacles as occupied and free space as traversable. Initialize the start node and goal node.
2.  **Data Structures:** Use two sets: `openSet` (nodes to be evaluated) and `closedSet` (nodes already evaluated). The `openSet` is typically implemented as a priority queue.
3.  **Cost Calculation:** For each node `n`, maintain:
    *   `g(n)`: The cost from the start node to node `n`.
    *   `h(n)`: The heuristic estimate of the cost from node `n` to the goal node.
    *   `f(n)` = `g(n)` + `h(n)`: The total estimated cost.
4.  **Search Process:**
    *   Add the start node to the `openSet`.
    *   While `openSet` is not empty:
        *   Extract the node `currentNode` with the lowest `f(n)` from `openSet`.
        *   If `currentNode` is the goal node, reconstruct the path and terminate.
        *   Move `currentNode` from `openSet` to `closedSet`.
        *   For each neighbor of `currentNode`:
            *   If the neighbor is in `closedSet` or is an obstacle, ignore it.
            *   Calculate the tentative `g(neighbor)` cost.
            *   If the tentative `g(neighbor)` is lower than the current `g(neighbor)` (or if the neighbor is not in `openSet`):
                *   Set the parent of `neighbor` to `currentNode`.
                *   Update `g(neighbor)` and `f(neighbor)`.
                *   If `neighbor` is not in `openSet`, add it.
5.  **Heuristic Role:** The heuristic function `h(n)` guides the search towards the goal. It estimates the minimum cost from the current node to the goal. A common and admissible heuristic for grid maps is the Euclidean distance or Manhattan distance to the goal. An admissible heuristic never overestimates the actual cost, guaranteeing that A* finds the optimal (shortest) path.

**Answer 3:**
The **Pure Pursuit** controller is a path following technique commonly used in mobile robotics.
*   **Concept:** It aims to steer the robot towards a specific point on the planned path, called the "lookahead point." This point is selected at a fixed distance ahead of the robot along the path.
*   **Information Needed:**
    *   **Robot's Current Pose:** Position (x, y) and orientation (theta), typically obtained from odometry and IMU.
    *   **Planned Path:** A sequence of waypoints or a curve representing the desired trajectory.
    *   **Lookahead Distance:** A parameter defining how far ahead the robot should target on the path.
*   **Goal:** To minimize the cross-track error (distance from the robot to the lookahead point) and the heading error (difference between the robot's orientation and the path's tangent at the lookahead point). It calculates the steering command (e.g., angular velocity) required to reach the lookahead point and continuously updates this command as the robot moves.

**Answer 4:**
Errors in **wheel encoder dead reckoning**:
*   **Wheel Slip:** Wheels can slip on the surface, leading to an overestimation of distance traveled or rotation.
*   **Uneven Surfaces:** Bumps or dips can cause wheels to lose contact or bounce, affecting rotation readings.
*   **Calibration Errors:** Inaccurate measurements of wheel diameter or encoder resolution.
*   **Mechanical Imperfections:** Backlash in gears, slight differences in wheel diameters.
*   **Integration Errors:** Small errors in individual measurements accumulate over time, leading to significant drift in position and orientation estimates.

**Mitigation with Other Sensors:**
*   **IMU:**
    *   **Orientation Correction:** Gyroscopes in an IMU provide direct measurements of angular velocity, allowing for more accurate tracking of the robot's rotation (yaw) and mitigating drift from wheel encoders. Accelerometers can help correct for pitch and roll, which indirectly affect yaw estimation.
    *   **Velocity Estimation:** Integrating accelerations from accelerometers can also contribute to velocity and position estimates, especially for short durations.
*   **Lidar:**
    *   **Scan Matching for Localization:** By comparing the current Lidar scan with a pre-existing map of the environment, the robot can determine its absolute position and orientation (pose). This corrects any accumulated dead reckoning errors.
    *   **Obstacle Detection:** Lidar can detect walls and other features that can be used as landmarks for localization.

**Answer 5:**
**Grid-Based Path Planning (e.g., Dijkstra's, A\*):**
*   **How it works:** Discretizes the environment into a grid and plans paths on this grid.
*   **Pros:**
    *   Guarantees optimality (shortest path) if the heuristic is admissible (A\*) or explores systematically (Dijkstra's).
    *   Conceptually straightforward for environments representable by grids.
    *   Good for finding paths in structured or semi-structured environments.
*   **Cons:**
    *   Can be computationally expensive and memory-intensive for high-resolution grids or large environments.
    *   The "curse of dimensionality" makes it less efficient for high-DOF robots.
    *   Paths can be jerky or follow grid lines, requiring smoothing.
*   **When appropriate:** Navigating through known, relatively static environments where precise path cost is important, such as indoor corridors or open spaces represented by occupancy grids.

**Sampling-Based Path Planning (e.g., RRT, PRM):**
*   **How it works:** Randomly samples configurations in the robot's configuration space and connects them to form a roadmap or tree.
*   **Pros:**
    *   Efficient for high-dimensional configuration spaces (e.g., robots with many joints or complex shapes).
    *   Can handle complex geometries and narrow passages more effectively than grid-based methods.
    *   RRT is good for single-query problems (finding one path).
    *   PRM is good for multi-query problems (building a roadmap for many queries).
*   **Cons:**
    *   Paths are often not optimal (can be jagged or longer) unless using variants like RRT\*.
    *   Requires robust collision checking for sampled configurations.
    *   Performance can depend heavily on the quality of random sampling.
*   **When appropriate:** Navigating in complex, high-dimensional spaces, or when finding *any* collision-free path is sufficient and optimality is less critical, such as planning movements for robot arms or navigating highly cluttered environments with complex robot shapes.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
