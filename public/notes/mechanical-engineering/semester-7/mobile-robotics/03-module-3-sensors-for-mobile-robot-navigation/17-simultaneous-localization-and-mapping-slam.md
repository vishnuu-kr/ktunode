---
title: "Simultaneous localization and mapping (SLAM)"
subject: "MOBILE ROBOTICS"
module: "Module 3: Sensors for mobile robot navigation"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf48044640c3"
status: "completed"
scrapedAt: "2026-05-20T18:15:26.053Z"
---
# Mobile Robotics: Module 3 - Sensors for Mobile Robot Navigation

## Topic: Simultaneous Localization and Mapping (SLAM)

---

### 1. Introduction to SLAM

**1.1 What is SLAM?**

*   **Definition:** Simultaneous Localization and Mapping (SLAM) is the problem of constructing a map of an unknown environment while simultaneously determining the location of the mobile robot within that map.
*   **The Chicken and Egg Problem:** SLAM addresses the fundamental dilemma that to localize accurately, you need a good map, but to build a good map, you need to know your location accurately.
*   **Importance:** SLAM is a cornerstone of autonomous mobile robotics, enabling robots to explore, navigate, and perform tasks in unknown or dynamic environments without prior knowledge.

**1.2 Why is SLAM Necessary?**

*   **Unknown Environments:** Robots often operate in environments that are not pre-mapped or whose maps may become outdated.
*   **Exploration:** SLAM allows robots to explore new territories, building maps as they go.
*   **Navigation:** Once a map is built, it can be used for efficient and robust navigation, even if the robot loses its global position temporarily.
*   **Dynamic Environments:** Advanced SLAM techniques can handle environments that change over time, such as moving objects.

**1.3 Core Components of a SLAM System**

A typical SLAM system involves the following key components:

*   **Sensors:** Gather information about the environment (e.g., LiDAR, cameras, sonar, IMUs).
*   **Motion Model:** Predicts the robot's pose (position and orientation) based on its control inputs (e.g., wheel odometry, IMU data).
*   **Measurement Model:** Relates sensor readings to the map features or the robot's pose.
*   **Data Association:** Determines which sensor measurements correspond to which map features.
*   **State Estimation:** Combines motion predictions and sensor measurements to update the robot's pose and the map.

---

### 2. Sensors for SLAM

(Aligns with CO4: Choose appropriate Sensors for mobile robot navigation - Knowledge Level: K3)

SLAM relies heavily on sensors that can perceive the environment and provide information for both localization and mapping.

**2.1 Odometry (Wheel Odometry)**

*   **Description:** Uses encoders on the robot's wheels to estimate the change in pose. It tracks the rotation of each wheel to infer the robot's movement.
*   **Pros:**
    *   Ubiquitous in mobile robots.
    *   Provides continuous motion information.
    *   Low computational cost.
*   **Cons:**
    *   **Drift:** Accumulates errors over time due to wheel slippage, uneven terrain, and inaccuracies in encoder readings. This is a major challenge for long-term localization.
    *   Cannot detect obstacles directly; inferential.
*   **Textbook Reference:**
    *   *Introduction to Autonomous Mobile Robots* by Siegwart, Nourbakhsh (2011) discusses odometry as a primary source of motion information and its limitations.
    *   *Robotics, Vision and Control* by Peter Corke (2011) also details odometry principles for robot kinematics.

**2.2 Inertial Measurement Units (IMUs)**

*   **Description:** Contains accelerometers and gyroscopes to measure linear acceleration and angular velocity. These can be integrated to estimate changes in position and orientation.
*   **Pros:**
    *   Provides high-frequency motion data.
    *   Can measure rotation accurately, especially for short periods.
    *   Not susceptible to wheel slippage.
*   **Cons:**
    *   **Drift:** Integrates noise, leading to rapid drift in position and orientation over time.
    *   Affected by gravity and vibrations.
*   **SLAM Application:** IMUs are often fused with odometry or other sensors to improve motion estimation and provide rotational information, especially when wheel odometry is unreliable.

**2.3 Range Sensors (e.g., LiDAR, Sonar)**

*   **LiDAR (Light Detection and Ranging):**
    *   **Description:** Emits laser pulses and measures the time it takes for them to return after reflecting off objects. This provides precise distance measurements to surrounding points.
    *   **Types:** 2D LiDAR (scans a plane), 3D LiDAR (scans a volume).
    *   **Pros:**
        *   High accuracy and range.
        *   Robust to lighting conditions.
        *   Provides detailed environmental features (e.g., walls, corners, objects).
    *   **Cons:**
        *   Can be expensive.
        *   May struggle with highly reflective or transparent surfaces.
        *   In 2D, cannot detect features above or below the scan plane.
    *   **SLAM Application:** LiDAR is a primary sensor for many SLAM algorithms, particularly for scan-matching and feature extraction. **Point Cloud Library (PCL)** is a common framework used with LiDAR data.
*   **Sonar (Ultrasonic Sensors):**
    *   **Description:** Emit ultrasonic sound waves and measure the time for the echo to return, indicating distance to an object.
    *   **Pros:**
        *   Inexpensive.
        *   Can detect transparent objects that LiDAR might miss.
    *   **Cons:**
        *   Lower accuracy and resolution compared to LiDAR.
        *   Susceptible to acoustic noise and reflections.
        *   Limited range.
        *   Broad beam can lead to ambiguous readings.
    *   **SLAM Application:** Useful for obstacle detection and rough mapping, often used in simpler or lower-cost robots.

**2.4 Vision Sensors (Cameras)**

*   **Monocular Cameras:**
    *   **Description:** A single camera.
    *   **Pros:**
        *   Abundant and inexpensive.
        *   Rich information about the environment (color, texture, semantic information).
    *   **Cons:**
        *   **Scale Ambiguity:** Cannot directly determine the absolute scale of features in the scene, making it difficult for metric mapping without additional information.
        *   Sensitive to lighting changes.
        *   Relies on feature extraction and matching.
    *   **SLAM Application:** Visual SLAM (vSLAM) uses cameras. Techniques include:
        *   **Feature-based vSLAM:** Detects and tracks distinctive visual features (e.g., corners, SIFT, SURF) in consecutive frames.
        *   **Direct vSLAM:** Uses pixel intensity values directly without explicit feature detection.
*   **Stereo Cameras:**
    *   **Description:** Two cameras mounted a known distance apart (baseline).
    *   **Pros:**
        *   Provides depth information (metric scale) through triangulation, resolving the scale ambiguity of monocular cameras.
        *   More robust than monocular.
    *   **Cons:**
        *   Requires accurate calibration of both cameras.
        *   Can struggle with textureless regions.
        *   Higher computational cost.
    *   **SLAM Application:** Stereo SLAM is common for creating metric maps.
*   **RGB-D Cameras (e.g., Kinect):**
    *   **Description:** Provide both color (RGB) and depth (D) information for each pixel.
    *   **Pros:**
        *   Directly provides metric depth, simplifying mapping.
        *   Rich visual and geometric information.
        *   Relatively inexpensive.
    *   **Cons:**
        *   Shorter range than LiDAR.
        *   Can be affected by ambient light and surface properties.
        *   Depth data can be noisy, especially at edges.
    *   **SLAM Application:** Widely used for vSLAM, especially in indoor environments. Libraries like **OpenNI** and **PCL** are used.
    *   **Reference Book:** *Arduino and Kinect Projects* by Melgar & Diez (2012) shows practical applications of RGB-D sensors.

**2.5 Combining Sensors (Sensor Fusion)**

*   **Description:** Integrating data from multiple sensors to overcome individual sensor limitations and improve overall robustness and accuracy.
*   **Examples:**
    *   **Odometry + IMU:** Fusing wheel odometry with IMU data to get a more accurate and drift-resistant odometry estimate.
    *   **LiDAR + Camera:** Using LiDAR for accurate geometric mapping and cameras for visual odometry or semantic information.
    *   **LiDAR + IMU + Odometry:** A common robust setup.
*   **Textbook Reference:** *Probabilistic Robotics* by Thrun, Burgard, and Fox (2005) extensively covers sensor fusion techniques, particularly using Bayesian filtering.

---

### 3. SLAM Algorithms

SLAM algorithms differ in how they represent the map and how they estimate the robot's state.

**3.1 Map Representations**

*   **Feature-based Maps:**
    *   **Description:** The environment is represented by a set of distinct landmarks (features) with their estimated positions in the world. Examples: corners, distinctive visual features, poles.
    *   **Pros:** Compact representation, good for long-range navigation.
    *   **Cons:** Requires reliable feature detection and data association. Can be sparse in certain environments.
    *   **Textbook Reference:** *Introduction to Autonomous Mobile Robots* by Siegwart, Nourbakhsh (2011) covers landmark-based mapping.
*   **Occupancy Grid Maps:**
    *   **Description:** The environment is divided into a grid of cells, where each cell has a probability of being occupied or free.
    *   **Pros:** Dense representation, captures detailed geometry, good for local obstacle avoidance.
    *   **Cons:** Computationally intensive, requires large memory for high resolution. Can be sensitive to sensor noise.
    *   **SLAM Application:** Widely used in algorithms like **GMapping** (based on Rao-Blackwellized Particle Filters) and **Cartographer**.
    *   **Textbook Reference:** *Probabilistic Robotics* by Thrun, Burgard, and Fox (2005) details occupancy grid mapping and its use in SLAM.
*   **Topological Maps:**
    *   **Description:** Represents the environment as a graph where nodes are places or regions, and edges represent connectivity between them.
    *   **Pros:** Abstract, compact, good for high-level planning and exploration.
    *   **Cons:** Lacks detailed geometric information for precise navigation.
    *   **SLAM Application:** Often used in conjunction with geometric maps.
    *   **Textbook Reference:** *Planning Algorithms* by S. M. La Valle (2009) discusses topological representations for navigation.

**3.2 SLAM State Estimation Techniques**

These algorithms address the problem of estimating the robot's pose and the map simultaneously.

*   **Kalman Filter (KF) based SLAM:**
    *   **Description:** A linear state estimator. Assumes linear motion and measurement models.
    *   **Pros:** Computationally efficient.
    *   **Cons:** Only suitable for linear systems; real-world robotics often involves non-linearities.
*   **Extended Kalman Filter (EKF) SLAM:**
    *   **Description:** Extends the KF to handle non-linear models by linearizing them around the current state estimate.
    *   **Pros:** Can handle non-linearities, widely used in early SLAM research.
    *   **Cons:** Linearization can introduce significant errors, especially with highly non-linear models. The computational complexity grows quadratically with the number of landmarks in the map (O(n^2)), making it impractical for large maps.
    *   **Textbook Reference:** *Probabilistic Robotics* by Thrun, Burgard, and Fox (2005) provides a comprehensive explanation of EKF SLAM.
*   **Unscented Kalman Filter (UKF) SLAM:**
    *   **Description:** Uses a deterministic sampling approach (unscented transform) to capture the mean and covariance of a probability distribution. It approximates the non-linear transformations more accurately than EKF linearization.
    *   **Pros:** Generally more accurate than EKF for non-linear systems.
    *   **Cons:** More computationally expensive than EKF.
*   **Particle Filter (PF) SLAM (e.g., Monte Carlo Localization - MCL, Rao-Blackwellized Particle Filters - RBPF):**
    *   **Description:** Represents the probability distribution of the robot's pose and map using a set of weighted particles (hypotheses).
    *   **Rao-Blackwellized Particle Filters (RBPF) for SLAM:**
        *   **Description:** Assumes the map can be efficiently estimated given the robot's path. It samples robot poses and uses an efficient map update (often KF-based) for each pose. This separates the problem into sampling the robot's trajectory and estimating the map conditional on the trajectory.
        *   **Pros:** Can handle highly non-linear systems and large, complex maps. Computationally more manageable than full PF SLAM for the map.
        *   **Cons:** Requires a large number of particles for accurate estimation.
        *   **SLAM Application:** Algorithms like **GMapping** are based on RBPF and are very popular for occupancy grid SLAM.
    *   **Pros of PF SLAM:** Can handle arbitrary non-linearities and multi-modal distributions (e.g., when the robot's pose is ambiguous).
    *   **Cons of PF SLAM:** Computationally intensive, requires a large number of particles for convergence.

**3.3 Important Considerations in SLAM Algorithms**

*   **Data Association:** Correctly identifying which sensor measurement corresponds to which feature in the map is crucial. Incorrect data association can lead to map corruption.
    *   **Methods:** Nearest Neighbor, Joint Probabilistic Data Association (JPDA), Probabilistic Data Association (PDA).
    *   **Textbook Reference:** *Probabilistic Robotics* by Thrun, Burgard, and Fox (2005) dedicates a chapter to data association.
*   **Loop Closure:** Detecting when the robot returns to a previously visited location. This is vital for correcting accumulated drift and significantly improving map accuracy.
    *   **Detection:** Recognizing previously seen landmarks or map features.
    *   **Correction:** Re-aligning the current pose and map with the historical map data.
    *   **Textbook Reference:** *Introduction to Autonomous Mobile Robots* by Siegwart, Nourbakhsh (2011) and *Probabilistic Robotics* by Thrun, Burgard, and Fox (2005) discuss loop closure as a key mechanism for SLAM error correction.
*   **Map Consistency:** Ensuring the map remains accurate and consistent as the robot moves and gathers more data.
*   **Computational Complexity:** Balancing the accuracy and robustness of the algorithm with the available computational resources.

---

### 4. Practical SLAM Implementations and Libraries

Several popular SLAM algorithms and libraries are used in the robotics community.

*   **GMapping:**
    *   **Type:** Rao-Blackwellized Particle Filter (RBPF) based SLAM.
    *   **Map Representation:** Occupancy Grid Map.
    *   **Sensors:** Primarily LiDAR (2D).
    *   **Strengths:** Robust, good performance for 2D environments, handles loop closure well. Widely used in ROS.
*   **Cartographer:**
    *   **Type:** A more recent, modern SLAM library from Google. Combines scan matching (e.g., Ceres Solver) and loop closure detection.
    *   **Map Representation:** Occupancy Grid Map and point clouds.
    *   **Sensors:** LiDAR, IMU, odometry.
    *   **Strengths:** Highly performant, supports both 2D and 3D SLAM, robust to sensor noise, good loop closure.
*   **ORB-SLAM (Oriented FAST and Rotated BRIEF SLAM):**
    *   **Type:** Feature-based Visual SLAM.
    *   **Map Representation:** Sparse feature-based map.
    *   **Sensors:** Monocular, Stereo, RGB-D cameras.
    *   **Strengths:** Highly accurate, real-time performance, robust to challenging visual conditions, excellent loop closure.
*   **RTAB-Map (Real-Time Appearance-Based Mapping):**
    *   **Type:** Visual SLAM that leverages appearance information for loop closure and re-localization.
    *   **Map Representation:** RGB-D point clouds and a memory of past observations.
    *   **Sensors:** RGB-D cameras, Stereo cameras.
    *   **Strengths:** Good for dynamic environments, robust re-localization.
*   **ROS (Robot Operating System):**
    *   **Description:** A widely used middleware for robot development. It provides packages and tools for SLAM algorithms (e.g., `gmapping`, `slam_gmapping`, `cartographer_ros`, `orb_slam2_ros`).
    *   **Importance:** Enables seamless integration of sensors, algorithms, and robot control.

---

### 5. Learning Outcomes Alignment

This module on SLAM directly contributes to several Course Outcomes:

*   **CO4: Choose appropriate Sensors for mobile robot navigation (Knowledge Level: K3):** Understanding the role of LiDAR, cameras, and IMUs in SLAM allows students to select appropriate sensors based on the environment and task requirements.
*   **CO5: Perform navigation and path planning mobile robots (Knowledge Level: K3):** A fundamental outcome of SLAM is the creation of a map, which is then used for navigation and path planning. A robot must first know where it is and what its environment looks like to plan a path. SLAM provides this essential foundation.
*   **CO6: Control the mobile robots to follow different paths (Knowledge Level: K3):** While SLAM itself doesn't directly involve control, the map and localization generated by SLAM are the inputs to path following controllers.

---

### 6. Key Points to Remember

*   SLAM is the process of building a map and localizing the robot simultaneously in an unknown environment.
*   Odometry provides continuous motion estimates but suffers from drift.
*   Range sensors (LiDAR, sonar) and vision sensors (cameras) are crucial for mapping and localization.
*   Sensor fusion (e.g., LiDAR+IMU+Odometry) is often used to improve robustness.
*   Common map representations include feature-based maps and occupancy grid maps.
*   EKF SLAM and Particle Filter SLAM (RBPF) are prominent state estimation techniques.
*   Data association and loop closure are critical for accurate and consistent SLAM.
*   Popular SLAM libraries like GMapping, Cartographer, and ORB-SLAM are widely used.

---

### 7. Practice Questions and Exercises

**Question 1:** Explain the "chicken and egg" problem in the context of mobile robot navigation and how SLAM addresses it.

**Answer 1:** The "chicken and egg" problem highlights the interdependence of localization and mapping. To navigate precisely, a robot needs an accurate map of its surroundings. However, to build an accurate map, the robot needs to know its precise location as it senses the environment. SLAM solves this by performing both tasks concurrently: it uses sensor data to build a map while simultaneously using that map (or partial map) to refine its own estimated location. This iterative process allows both the map and the localization to improve over time.

**Question 2:** Compare and contrast the pros and cons of using LiDAR versus a monocular camera for SLAM.

**Answer 2:**
*   **LiDAR:**
    *   **Pros:** High accuracy, robustness to lighting conditions, provides direct geometric measurements.
    *   **Cons:** Can be expensive, may struggle with certain surfaces, limited to the scan plane (for 2D).
*   **Monocular Camera:**
    *   **Pros:** Inexpensive, rich information (color, texture), abundant data.
    *   **Cons:** Suffers from scale ambiguity (cannot determine absolute distances directly), sensitive to lighting changes, relies on feature extraction and matching which can be challenging.

**Question 3:** What is loop closure, and why is it important for SLAM?

**Answer 3:** Loop closure is the process where a mobile robot detects that it has returned to a previously visited location in its environment. It is crucial for SLAM because it allows the robot to correct for the accumulated errors (drift) that inevitably occur in odometry and other motion estimation systems. By recognizing a previously mapped area, the robot can re-align its current pose and the map with its historical data, significantly improving the overall accuracy and consistency of the map, especially over long trajectories.

**Question 4 (Conceptual Exercise):** Imagine you are designing a SLAM system for a small indoor robot tasked with mapping a warehouse. What sensor suite would you recommend and why? Briefly explain how you would integrate them.

**Answer 4 (Example Recommendation):**
*   **Recommended Sensors:**
    1.  **2D LiDAR:** For accurate geometric mapping of aisles and obstacles. It's robust to variations in lighting common in warehouses.
    2.  **Wheel Odometry:** To provide continuous, high-frequency motion updates.
    3.  **IMU:** To provide angular velocity and linear acceleration, helping to correct odometry drift, especially during turns or when wheel slippage occurs.

*   **Integration Strategy:**
    *   Use wheel odometry and IMU data to generate a pre-motion estimate of the robot's pose.
    *   Use the 2D LiDAR to scan the environment.
    *   Implement a scan-matching algorithm (like ICP or NDT) to align the current LiDAR scan with the previously built map (e.g., an occupancy grid).
    *   The output of the scan-matching process provides a more accurate pose correction.
    *   Fuse the corrected pose with the IMU and odometry data (e.g., using an EKF or UKF) to get the final robot pose estimate and update the occupancy grid map.
    *   Implement a loop closure detection mechanism (e.g., based on recognizing unique feature configurations in LiDAR scans) to periodically correct global drift.

**Question 5:** Briefly describe the core idea behind Rao-Blackwellized Particle Filters (RBPF) for SLAM.

**Answer 5:** RBPF-based SLAM tackles the problem by assuming that the map can be efficiently estimated given a specific trajectory of the robot. Instead of representing the full joint probability distribution of robot poses and map features, RBPF samples a set of possible robot trajectories (using particles). For each sampled trajectory, the map can be estimated more efficiently, often using a Kalman filter or similar method, as the problem becomes conditioned on a known path. The overall SLAM estimate is then a weighted average of these map estimates corresponding to the sampled trajectories. This decomposition makes it computationally feasible for large maps.

---
This concludes the study notes for SLAM in Module 3. Remember to consult the provided textbooks for deeper dives into the mathematical formulations and specific algorithms.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
