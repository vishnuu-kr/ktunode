---
title: "Ground-based beacons"
subject: "MOBILE ROBOTICS"
module: "Module 3: Sensors for mobile robot navigation"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf48044640ba"
status: "completed"
scrapedAt: "2026-05-20T18:15:19.676Z"
---
# Mobile Robotics: Module 3 - Sensors for Mobile Robot Navigation

## Topic: Ground-Based Beacons

---

### 1. Introduction to Ground-Based Beacons

Ground-based beacons are stationary, fixed markers placed in the environment that emit signals or have distinct visual characteristics that a mobile robot's sensors can detect. They serve as reference points for localization and navigation. By identifying and triangulating or trilaterating signals from multiple beacons, a robot can determine its position and orientation within a known map of beacon locations.

**Key Concept:** **Localization** - The process of determining the robot's position and orientation within its environment.
**Key Concept:** **Triangulation/Trilateration** - Geometric techniques used to determine a point's position based on its distance or angular relation to known points.

---

### 2. Types of Ground-Based Beacons and Their Sensing Technologies

Ground-based beacons can be categorized by the type of signal or information they provide and how robots sense them.

#### 2.1. Radio Frequency (RF) Beacons

*   **Description:** Emit radio waves at specific frequencies or with unique identification codes.
*   **Sensing Technology:** Radio receivers (e.g., Wi-Fi, RFID, specialized RF transponders).
    *   **RFID (Radio-Frequency Identification):** Passive or active tags that respond to a reader's signal. Useful for presence detection and short-range identification.
    *   **Wi-Fi Positioning:** While not strictly beacons, Wi-Fi access points with known locations can be used for coarse localization based on signal strength (Received Signal Strength Indicator - RSSI).
    *   **Active RF Beacons:** Transmit signals periodically or upon request, often with directional information or unique IDs. Examples include Ultra-Wideband (UWB) systems.
*   **Pros:** Can penetrate some obstacles, good for longer ranges, can transmit data.
*   **Cons:** Susceptible to interference, accuracy can vary with signal strength and multipath effects.
*   **Textbook Reference:**
    *   *Introduction to Autonomous Mobile Robots* by Siegwart, Nourbakhsh (2011) discusses various sensing modalities, including RF, in the context of localization.

#### 2.2. Optical/Visual Beacons

*   **Description:** Features designed to be detected by vision sensors. These can be simple markers, patterns, or even distinct objects.
*   **Sensing Technology:** Cameras (monocular, stereo, depth cameras).
    *   **AprilTags / ArUco Markers:** Specific patterns printed on markers that are easily detectable and provide both position and orientation information relative to the camera.
    *   **Color Markers:** Simple colored objects or patches that can be segmented from the background using color filtering.
    *   **QR Codes:** Can encode information and be used for localization, though often more for specific interaction.
*   **Pros:** High accuracy possible, can provide rich information (ID, orientation), relatively inexpensive sensors (cameras).
*   **Cons:** Line-of-sight required, sensitive to lighting conditions, occlusion, and visual clutter.
*   **Textbook Reference:**
    *   *Robotics, Vision and Control: Fundamental Algorithms in MATLAB* by Peter Corke (2011) provides in-depth coverage of computer vision techniques essential for detecting and processing visual beacons.
    *   *Introduction to Autonomous Mobile Robots* by Siegwart, Nourbakhsh (2011) also covers visual odometry and landmark-based localization.
*   **Example:** A robot navigating a warehouse could use AprilTags mounted on shelves or pillars to determine its precise location within the aisles.

#### 2.3. Acoustic Beacons (Ultrasonic/Audible)

*   **Description:** Emit sound waves.
*   **Sensing Technology:** Microphones, ultrasonic sensors.
    *   **Ultrasonic Transducers:** Emit ultrasonic pulses and measure the time-of-flight (ToF) of echoes returning from surfaces, including beacons.
    *   **Audible Beacons:** Emit distinct audio signals (e.g., chirps, tones).
*   **Pros:** Can be used in low-visibility conditions, can provide distance measurements.
*   **Cons:** Limited range, susceptible to ambient noise and reflections, directionality can be an issue.
*   **Textbook Reference:**
    *   *Introduction to Autonomous Mobile Robots* by Siegwart, Nourbakhsh (2011) discusses sonar sensors and their application in localization.

#### 2.4. Infrared (IR) Beacons

*   **Description:** Emit infrared radiation, often modulated to distinguish them from ambient IR sources.
*   **Sensing Technology:** IR receivers.
*   **Pros:** Can be directional, less susceptible to visible light interference.
*   **Cons:** Line-of-sight required, limited range, can be affected by strong IR sources.
*   **Example:** Beacons used in early indoor navigation systems for guided vehicles.

---

### 3. Localization Using Ground-Based Beacons

The fundamental principle is to use measurements from beacons to estimate the robot's pose (position and orientation).

#### 3.1. Trilateration

*   **Description:** If the robot can measure its distance to at least three beacons with known positions, it can determine its 2D position.
    *   With two beacons, the robot's position is on the intersection of two circles.
    *   With three beacons, the intersection of three circles ideally yields a single point.
*   **Mathematical Principle:** Distance $d_i$ to beacon $i$ at position $(x_i, y_i)$:
    $(x - x_i)^2 + (y - y_i)^2 = d_i^2$
    Solving this system of equations for $(x, y)$ gives the robot's position.
*   **Pros:** Conceptually simple.
*   **Cons:** Requires accurate distance measurements, sensitive to noise, requires at least three beacons for 2D position.

#### 3.2. Triangulation

*   **Description:** If the robot can measure the angle to at least two beacons with known positions, it can determine its 2D position.
    *   With two beacons, the robot's position is at the intersection of two lines defined by the beacon positions and the measured angles.
*   **Mathematical Principle:** Angle $\theta_i$ to beacon $i$ at position $(x_i, y_i)$. The robot's position $(x, y)$ lies on a ray originating from $(x_i, y_i)$ at angle $\theta_i$.
*   **Pros:** Can be more robust in environments where distance measurement is difficult.
*   **Cons:** Requires accurate angle measurements, requires at least two beacons for 2D position.
*   **Reference Book:** *Robotics, Vision and Control: Fundamental Algorithms in MATLAB* by Peter Corke (2011) covers techniques for feature detection and pose estimation, which are crucial for triangulation.

#### 3.3. Pose Estimation (6-DOF Localization)

*   **Description:** To determine both position (x, y, z) and orientation (roll, pitch, yaw), more information is needed.
    *   For 3D localization using distance: At least four beacons.
    *   For 3D localization using angles: At least three beacons if both angles (azimuth and elevation) can be measured.
    *   Visual beacons (like AprilTags) often provide both translation and rotation information relative to the camera, allowing for more robust pose estimation.
*   **Probabilistic Approaches:**
    *   **Kalman Filters (EKF, UKF):** Combine sensor measurements with the robot's motion model to produce an optimal estimate of the robot's state (pose).
    *   **Particle Filters (Sequential Monte Carlo):** Represent the probability distribution of the robot's pose using a set of weighted particles. Excellent for non-linear systems and multi-modal distributions.
*   **Textbook Reference:**
    *   *Probabilistic Robotics* by Thrun, Burgard, and Fox (2005) is the definitive source for understanding Kalman filters, particle filters, and their application in robot localization, including beacon-based methods.
    *   *Introduction to Autonomous Mobile Robots* by Siegwart, Nourbakhsh (2011) also covers filtering techniques for state estimation.

---

### 4. Beacon-Based Navigation Strategies

Once the robot's pose is estimated, it can be used for navigation.

#### 4.1. Absolute Positioning

*   **Description:** Beacons provide a global frame of reference. The robot knows its position and orientation relative to a fixed coordinate system defined by the beacon layout.
*   **Application:** Path following, waypoint navigation. The robot can simply follow a predefined path in this global frame.
*   **Course Outcome Alignment:** CO5 (Perform navigation and path planning), CO6 (Control the mobile robots to follow different paths).

#### 4.2. Relative Positioning and Dead Reckoning Augmentation

*   **Description:** Beacon measurements can be fused with odometry (dead reckoning) to correct for accumulated errors.
    *   Odometry provides continuous but drift-prone pose estimates.
    *   Beacon fixes provide occasional but accurate absolute or relative pose updates.
*   **Techniques:**
    *   **Kalman Filter:** Integrates odometry (as the prediction step) and beacon measurements (as the update step).
*   **Textbook Reference:**
    *   *Introduction to Autonomous Mobile Robots* by Siegwart, Nourbakhsh (2011) extensively discusses the fusion of different sensor modalities for improved localization, including odometry and landmark-based methods.
    *   *Probabilistic Robotics* by Thrun, Burgard, and Fox (2005) is fundamental here, detailing sensor fusion algorithms.

#### 4.3. Map Building (SLAM - Simultaneous Localization and Mapping)

*   **Description:** While beacons themselves are typically fixed and known, the principles of beacon-based localization are fundamental to SLAM. In SLAM, the robot simultaneously builds a map of the environment and localizes itself within that map. If beacons are part of the environment, SLAM techniques can be used to discover and utilize them for localization.
*   **Course Outcome Alignment:** CO4 (Choose appropriate Sensors for mobile robot navigation), as understanding beacons is a step towards understanding how to map and localize.

---

### 5. Challenges and Considerations

*   **Beacon Density and Distribution:** Sufficient coverage is needed. Poor placement can lead to ambiguous readings or dead zones.
*   **Sensor Accuracy and Noise:** The precision of distance/angle measurements directly impacts localization accuracy.
*   **Environmental Factors:**
    *   **Line-of-Sight:** Optical and IR beacons require clear visibility.
    *   **Obstacles:** Can block signals (RF, acoustic) or visual features.
    *   **Lighting Conditions:** Affect visual beacon detection.
    *   **Interference:** RF and acoustic beacons can be affected by ambient noise and other transmitting devices.
    *   **Multipath Effects:** Signals bouncing off surfaces can lead to erroneous measurements.
*   **Beacon Maintenance:** Ensuring beacons are operational and not damaged.
*   **Calibration:** Accurate knowledge of beacon positions and sensor characteristics is crucial.

---

### 6. Learning Outcomes Mapping

*   **CO1 (Familiarise types of locomotion):** While not directly about locomotion, understanding navigation sensors is essential for planning routes that robots with different locomotion capabilities can follow.
*   **CO4 (Choose appropriate Sensors for mobile robot navigation):** This topic directly addresses choosing sensors for localization, which is a core part of navigation. Understanding RF, visual, and acoustic sensors for beacons helps in sensor selection.
*   **CO5 (Perform navigation and path planning):** Beacon-based localization provides the necessary pose information to implement navigation and path planning algorithms.
*   **CO6 (Control the mobile robots to follow different paths):** Accurate localization derived from beacons allows for precise control to follow planned paths.

---

### 7. Practice Questions & Answers

**Question 1:** A robot needs to determine its 2D position using ground-based beacons. It has a sensor that can accurately measure the distance to beacons. How many beacons with known locations are minimally required for this task?
    *   **Answer:** Three beacons are minimally required for 2D position estimation using trilateration. With two beacons, the possible locations form two intersection points, leading to ambiguity.

**Question 2:** What is the primary advantage of using visual beacons like AprilTags compared to simple RF beacons for localization?
    *   **Answer:** Visual beacons, particularly patterned ones like AprilTags, can provide not only position but also orientation information relative to the camera. They are also generally more accurate and less susceptible to certain types of interference compared to basic RF signals, although they require line-of-sight and are sensitive to lighting.

**Question 3:** Explain the concept of sensor fusion in the context of beacon-based localization. How does it improve accuracy?
    *   **Answer:** Sensor fusion combines data from multiple sensors or different types of measurements to achieve a more accurate and reliable estimate than any single sensor could provide. For beacon-based localization, it typically involves fusing odometry (which provides continuous but drifting pose estimates) with beacon fixes (which provide occasional but accurate updates). Techniques like Kalman Filters or Particle Filters are used to integrate these data sources, filtering out noise and correcting for drift, leading to a more robust and accurate localization estimate.

**Question 4:** You are designing a navigation system for a mobile robot in a dimly lit warehouse. Which type of ground-based beacon would be most suitable, and why?
    *   **Answer:** In a dimly lit environment, visual beacons (like AprilTags) might struggle due to poor lighting. RF beacons (e.g., UWB) or possibly audible/ultrasonic beacons would be more suitable. RF beacons can penetrate some darkness and are not affected by ambient light. Ultrasonic beacons can also work in the dark, providing distance information, though their range might be a limitation.

---

### 8. Important Points to Remember

*   Ground-based beacons act as **fixed reference points** for mobile robot localization.
*   Localization using beacons relies on **trilateration** (distance measurements) or **triangulation** (angular measurements).
*   **At least three beacons** are typically needed for 2D position estimation.
*   **Visual beacons** (e.g., AprilTags) often provide both position and orientation.
*   **RF beacons** are useful when line-of-sight is not guaranteed or in low-visibility conditions.
*   **Sensor fusion** with odometry is crucial for improving localization accuracy and robustness.
*   **Probabilistic methods** like Kalman Filters and Particle Filters are standard for handling sensor noise and integrating data.
*   **Challenges** include beacon placement, sensor accuracy, environmental factors (lighting, obstacles, interference), and calibration.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |


### 9. References Used

*   **Siegwart, R., & Nourbakhsh, I. R. (2011).** *Introduction to Autonomous Mobile Robots* (2nd ed.). MIT Press. (Covered sensor modalities, localization principles, and sensor fusion).
*   **Corke, P. (2011).** *Robotics, Vision and Control: Fundamental Algorithms in MATLAB*. Springer. (Provided insights into vision-based detection and pose estimation).
*   **Thrun, S., Burgard, W., & Fox, D. (2005).** *Probabilistic Robotics*. MIT Press. (Fundamental for understanding probabilistic localization methods like Kalman and Particle Filters).