---
title: "Motion/speed sensors"
subject: "MOBILE ROBOTICS"
module: "Module 3: Sensors for mobile robot navigation"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf48044640bc"
status: "completed"
scrapedAt: "2026-05-20T18:15:21.097Z"
---
# Mobile Robotics: Module 3 - Sensors for Mobile Robot Navigation

## Topic: Motion/Speed Sensors

This module focuses on the sensors that provide information about a mobile robot's own motion, specifically its speed and displacement. This is crucial for understanding how the robot is moving in its environment, which is fundamental for navigation, control, and localization.

### Learning Outcomes Addressed by this Topic:

*   **CO4: Choose appropriate Sensors for mobile robot navigation (Knowledge Level: K3)** - Understanding the capabilities and limitations of motion/speed sensors is essential for selecting the right sensor for a given application.
*   **CO5: Perform navigation and path planning mobile robots (Knowledge Level: K3)** - Accurate motion information is a prerequisite for effective navigation and path planning. Knowing the robot's current velocity and estimated displacement allows it to track its progress along a planned path.
*   **CO6: Control the mobile robots to follow different paths (Knowledge Level: K3)** - Motion sensors directly provide feedback for closed-loop control systems that aim to make the robot follow a desired trajectory or speed profile.

### 1. Introduction to Motion/Speed Sensors

Motion/speed sensors are critical components in a mobile robot's perception system. They provide **odometry**, which is the estimation of the robot's position and orientation based on its own motion. This information is often fused with other sensor data (like GPS or vision) for more robust and accurate localization.

**Key Concepts:**

*   **Odometry:** The process of estimating a robot's state (position and orientation) by integrating measurements of its own motion. This is often referred to as **dead reckoning**.
*   **Dead Reckoning:** A navigation technique that estimates the current position and orientation by calculating the difference between the current position and a previously determined position using known speeds and elapsed time.
*   **Proprioceptive Sensors:** Sensors that provide information about the robot's internal state, such as joint angles, motor commands, or wheel rotations. Motion/speed sensors are proprioceptive.
*   **Exteroceptive Sensors:** Sensors that provide information about the robot's external environment, such as cameras, lidar, or sonar.

**Why are Motion/Speed Sensors Important?**

*   **Localization:** Estimating the robot's current position and orientation within its environment.
*   **Path Following:** Ensuring the robot moves along a desired trajectory.
*   **Control:** Providing feedback for velocity and position control loops.
*   **Dead Reckoning:** Serving as a primary source of motion estimation, especially when external references are unavailable.

**Common Challenges with Motion/Speed Sensors:**

*   **Drift:** Errors accumulate over time, leading to a divergence between the estimated position and the actual position. This is a fundamental limitation of dead reckoning.
*   **Noise:** Sensor readings are inherently noisy, which can affect the accuracy of the estimated motion.
*   **Calibration:** Sensors need to be properly calibrated to ensure accurate measurements.
*   **Environmental Factors:** Slippage, uneven terrain, and sudden accelerations can all introduce errors.

### 2. Types of Motion/Speed Sensors

We will explore the most common types of sensors used to measure the motion of mobile robots.

#### 2.1. Wheel Encoders

Wheel encoders are the most common sensors for measuring the rotation of wheels on wheeled mobile robots. They provide information about the distance traveled by each wheel.

**How they work:**

*   Encoders are typically attached to the motor shafts or directly to the wheel axles.
*   They consist of a rotating disc with a pattern of lines or holes and a stationary sensor (optical or magnetic).
*   As the wheel rotates, the pattern on the disc interrupts a light beam or magnetic field, generating pulses.
*   The number of pulses counted is proportional to the angle of rotation.

**Types of Encoders:**

*   **Incremental Encoders:**
    *   Generate a stream of pulses as the wheel rotates.
    *   Do not inherently know their absolute position.
    *   Often have two channels (A and B) that are out of phase (quadrature) to determine the direction of rotation.
    *   An additional index pulse can be used for homing or absolute position referencing.
    *   **Formula:**
        *   `Angular Velocity (ω) = (Number of pulses per revolution / Time interval) * (2π / Pulses per revolution)`
        *   `Linear Velocity (v) = ω * Wheel Radius`
*   **Absolute Encoders:**
    *   Provide a unique digital code for each position of the wheel.
    *   Do not lose their position information when power is removed.
    *   More complex and expensive than incremental encoders.

**Advantages:**

*   Relatively inexpensive and widely available.
*   Provide high-resolution measurements of wheel rotation.
*   Can be directly integrated into motor control systems.

**Disadvantages:**

*   **Slippage:** The primary source of error. If a wheel slips, the encoder will still register rotation, leading to an overestimation of distance traveled.
*   **Wheel Diameter Variation:** Changes in tire pressure or wear can affect the effective wheel diameter, introducing errors.
*   **Calibration Required:** The relationship between encoder counts and actual distance needs to be calibrated.
*   **Dead Reckoning Errors:** Accumulated errors due to drift.

**Textbook References:**

*   **Siegwart, Nourbakhsh (2011) - Introduction to Autonomous Mobile Robots:** Discusses odometry using wheel encoders extensively, covering their principles and sources of error like slippage.
*   **Corke (2011) - Robotics, Vision and Control:** Likely covers encoders as a fundamental sensor for robot kinematics and odometry, possibly with MATLAB examples.

**Example:**

Imagine a robot with wheels of radius 0.05m. A wheel encoder is configured to generate 1000 pulses per revolution of the wheel. If the encoder counts 5000 pulses in 1 second, the angular velocity can be calculated:

*   Total rotation = 5000 pulses / 1000 pulses/revolution = 5 revolutions.
*   Angular velocity (ω) = 5 revolutions / 1 second = 5 rev/s.
*   Convert to radians per second: ω = 5 rev/s * 2π rad/rev = 10π rad/s ≈ 31.4 rad/s.
*   Linear velocity (v) = ω * Wheel Radius = 10π rad/s * 0.05 m = 0.5π m/s ≈ 1.57 m/s.

#### 2.2. Inertial Measurement Units (IMUs)

IMUs combine accelerometers and gyroscopes to measure the robot's linear acceleration and angular velocity. This provides a richer picture of the robot's motion, especially during non-holonomic maneuvers or when wheel slippage is significant.

**Components of an IMU:**

*   **Accelerometers:** Measure linear acceleration along their sensitive axes.
    *   By integrating acceleration twice, velocity and position can be estimated.
    *   `v(t) = v(0) + ∫ a(t) dt`
    *   `p(t) = p(0) + ∫ v(t) dt`
*   **Gyroscopes (Angular Rate Sensors):** Measure the rate of rotation around their sensitive axes.
    *   By integrating angular velocity over time, the change in orientation can be estimated.
    *   `θ(t) = θ(0) + ∫ ω(t) dt`

**How IMUs are used for motion sensing:**

*   **For linear motion:** Accelerometers can be used to estimate velocity and position. However, due to gravity and noise, this is prone to significant drift. Often, IMUs are fused with other sensors (like wheel encoders or GPS) to correct for drift.
*   **For angular motion:** Gyroscopes are very effective at measuring changes in orientation. However, they also suffer from bias and drift over longer periods.

**Types of IMUs:**

*   **MEMS (Micro-Electro-Mechanical Systems) IMUs:** Common, compact, and relatively inexpensive.
*   ** lebih akurat (More accurate) IMUs:** Often use optical gyroscopes (e.g., Ring Laser Gyroscopes or Fiber Optic Gyroscopes) or vibrating structures, offering better performance but at a higher cost and size.

**Advantages:**

*   Provide motion information independent of wheel contact with the ground (useful for robots that can lift off the ground or experience significant slippage).
*   Can measure angular velocity directly, which is useful for estimating orientation changes.
*   Can detect non-linear motions and vibrations.

**Disadvantages:**

*   **Drift:** Accelerometers and gyroscopes are susceptible to drift, especially over longer time intervals. Integrating noisy acceleration data twice leads to quadratic growth of position error.
*   **Bias:** A constant offset in the sensor reading that needs to be calibrated.
*   **Sensitivity to Vibration and Temperature:** Performance can be affected by external factors.
*   **Integration Errors:** The accuracy of estimated velocity and position depends heavily on the quality of the sensor and the integration process.
*   **Gravity:** Accelerometers measure the sum of gravity and external acceleration. Isolating true linear acceleration requires careful processing and orientation estimation.

**Textbook References:**

*   **Thrun, Burgard, Fox (2005) - Probabilistic Robotics:** This book is a cornerstone for understanding sensor fusion and dealing with noisy sensor data like IMUs. It likely details how IMUs are used in probabilistic localization frameworks (e.g., Kalman Filters).
*   **Siegwart, Nourbakhsh (2011) - Introduction to Autonomous Mobile Robots:** May discuss IMUs as part of more advanced localization techniques, complementing wheel odometry.

**Example:**

An IMU on a robot measures an angular velocity of 0.5 rad/s around the yaw axis. If this rate is constant for 2 seconds, the change in yaw angle is:

*   Change in Yaw (Δθ) = Angular Velocity (ω) * Time (Δt)
*   Δθ = 0.5 rad/s * 2 s = 1 radian.

For linear motion, if an accelerometer reads 2 m/s² for 1 second, and the initial velocity was 0 m/s, the final velocity would be approximately 2 m/s. However, without accounting for gravity and initial orientation, this is a highly simplified example.

#### 2.3. GPS (Global Positioning System)

GPS receivers provide absolute position information by triangulating signals from satellites. While not directly a "motion" sensor in the sense of measuring rotation or acceleration, it provides a direct measurement of the robot's **position**, which can be used to infer velocity.

**How it works:**

*   A GPS receiver listens for signals from multiple GPS satellites.
*   Each signal contains information about the satellite's position and the time the signal was transmitted.
*   By measuring the time it takes for the signal to arrive, the receiver can calculate its distance to each satellite.
*   With distances to at least four satellites, the receiver can determine its 3D position (latitude, longitude, altitude) and time.

**Using GPS for Motion:**

*   **Velocity:** By taking the difference between consecutive position readings and dividing by the time interval, the robot's velocity can be estimated.
    *   `Velocity ≈ (Current Position - Previous Position) / (Current Time - Previous Time)`

**Advantages:**

*   Provides **absolute position** globally, not subject to dead reckoning drift.
*   Useful for outdoor navigation.

**Disadvantages:**

*   **Low Update Rate:** Typically 1-10 Hz, which is too slow for high-speed or precise indoor navigation.
*   **Accuracy Limitations:** Standard GPS accuracy can be several meters, which is insufficient for many indoor robotics tasks. Differential GPS (DGPS) or Real-Time Kinematic (RTK) GPS can improve accuracy to sub-meter or centimeter levels but require additional infrastructure.
*   **Signal Availability:** GPS signals are blocked by buildings, tunnels, dense foliage, and indoor environments, making it unsuitable for many indoor applications.
*   **Velocity Estimation Noise:** Differentiating noisy position data can lead to noisy velocity estimates.

**Textbook References:**

*   **Siegwart, Nourbakhsh (2011) - Introduction to Autonomous Mobile Robots:** Likely covers GPS as an external sensor for localization, discussing its strengths and weaknesses for mobile robot navigation, particularly in outdoor scenarios.

**Example:**

A robot's GPS reports the following positions:
*   Time 1: (40.7128° N, 74.0060° W)
*   Time 2: (40.7129° N, 74.0061° W)
The time difference between Time 1 and Time 2 is 1 second. The robot's velocity can be estimated by calculating the change in latitude and longitude and converting these to meters, then dividing by the time interval. This would give a rough estimate of its ground speed and direction.

#### 2.4. Optical Flow Sensors

Optical flow sensors measure the apparent motion of patterns in a scene captured by a camera. They are often used in robots that operate close to the ground or on textured surfaces, providing a measure of motion relative to the environment.

**How they work:**

*   A camera captures a sequence of images.
*   An algorithm analyzes consecutive frames to detect the movement of image features (pixels or textures).
*   The direction and magnitude of this apparent movement across the image plane are used to estimate the robot's linear and angular velocities.

**Types of Optical Flow Sensors:**

*   **Dedicated Optical Flow Chips:** Specialized sensors that integrate a camera and a processing unit to calculate optical flow at high speeds. These are common in "optical mice" for computers and some smaller robots.
*   **Vision-based Algorithms:** Implementing optical flow algorithms on a standard camera and the robot's onboard computer.

**Advantages:**

*   Can provide accurate motion estimates, especially on textured surfaces.
*   Less susceptible to wheel slippage as it measures motion relative to the ground.
*   Can operate in environments without external landmarks (unlike visual odometry that relies on distinct features).

**Disadvantages:**

*   **Requires Textured Surfaces:** Performance degrades on uniform or featureless surfaces (e.g., plain white walls, highly reflective surfaces).
*   **Sensitivity to Lighting Changes:** Variations in illumination can affect the accuracy of optical flow estimation.
*   **Limited Range:** Primarily measures motion relative to the immediate ground surface.
*   **Computational Cost:** Implementing robust optical flow algorithms can be computationally intensive.

**Textbook References:**

*   **Corke (2011) - Robotics, Vision and Control:** Corke's work is heavily focused on computer vision and robotics, so this book is likely to contain detailed explanations and potentially MATLAB examples of optical flow for robot motion estimation.
*   **Siegwart, Nourbakhsh (2011) - Introduction to Autonomous Mobile Robots:** Might touch upon optical flow as a component of visual odometry or a specialized sensor for specific robot types.

**Example:**

A robot moving forward over a carpeted floor. The optical flow sensor detects that the carpet texture is moving downwards in the camera's image plane at a certain speed. This downward motion is directly related to the robot's forward velocity. If the robot turns, the optical flow patterns will change in a way that reflects the angular velocity.

#### 2.5. Other Sensors (Briefly Mentioned)

*   **Tachometers:** Measure rotational speed of motors directly. Can be used for odometry if the motor's rotation is directly coupled to wheel rotation (e.g., within a gear ratio). Similar to encoders in that they are affected by motor load and slippage.
*   **Odometers (Mechanical):** Older, purely mechanical devices that use rolling wheels or discs to track distance. Less common in modern robotics.

### 3. Sensor Fusion for Motion Estimation

Due to the inherent limitations of individual motion sensors (especially drift in IMUs and slippage in wheel encoders), sensor fusion is often employed to achieve more accurate and robust motion estimates.

**Key Concepts:**

*   **Sensor Fusion:** Combining data from multiple sensors to obtain a more accurate, reliable, and complete picture of the robot's state than could be achieved with any single sensor.
*   **Kalman Filter (and Extended Kalman Filter - EKF, Unscented Kalman Filter - UKF):** A powerful recursive algorithm that estimates the state of a dynamic system from a series of noisy measurements. It's widely used for fusing data from wheel encoders, IMUs, and other sensors for odometry.
*   **Particle Filter (Sequential Monte Carlo Methods):** Another probabilistic approach often used for localization, especially when dealing with highly non-linear systems or non-Gaussian noise, where Kalman Filters might struggle.

**How Fusion Works:**

*   **Wheel Encoders + IMU:**
    *   Wheel encoders provide good short-term estimates of linear motion but drift over time due to slippage.
    *   IMUs provide direct measurements of angular velocity, which is less affected by wheel slippage for orientation changes. Accelerometers can also contribute to motion estimation, but they are sensitive to gravity and drift.
    *   A Kalman filter can be used to combine these:
        *   The IMU's gyroscope data is used to correct the drift in the robot's orientation estimated by wheel encoders.
        *   The wheel encoders provide a baseline for linear motion, while accelerometers (when properly integrated and corrected) can refine velocity estimates and detect accelerations not captured by wheel rotations alone.
*   **GPS + IMU + Wheel Encoders:**
    *   For outdoor navigation, GPS provides absolute position fixes that can be used to reset the accumulated drift from IMUs and wheel encoders.
    *   The IMU and wheel encoders provide continuous motion updates between GPS fixes.

**Textbook References:**

*   **Thrun, Burgard, Fox (2005) - Probabilistic Robotics:** This is the definitive resource for understanding sensor fusion techniques like Kalman filtering and particle filtering for mobile robot localization and motion estimation. It provides the theoretical background and practical implementation details.
*   **Siegwart, Nourbakhsh (2011) - Introduction to Autonomous Mobile Robots:** Likely discusses the necessity of sensor fusion to overcome the limitations of individual sensors and improve odometry.

**Example:**

Consider a robot driving in a circle. Wheel encoders might suggest a smooth circular path. However, if one wheel briefly slips, the encoder data might show a slight deviation. An IMU's gyroscope would continue to accurately measure the rate of rotation, and a fused estimator (like an EKF) would use this information to maintain an accurate heading, correcting the encoder-based path estimate.

### 4. Mathematical Foundations and Kinematic Models

To interpret the raw data from motion sensors and convert it into useful motion information (like velocity and position), we need to understand the robot's kinematic model.

**Key Concepts:**

*   **Kinematic Model:** Describes the relationship between the robot's control inputs (e.g., wheel velocities) and its resulting motion (linear and angular velocities of the robot's body frame). It defines how the robot moves without considering forces.
*   **Robot Velocity (in the body frame):** Often represented as a twist $v = [v_x, v_y, \omega_z]^T$, where $v_x$ is forward linear velocity, $v_y$ is lateral linear velocity, and $\omega_z$ is angular velocity around the vertical axis. For many ground robots, $v_y = 0$ (non-holonomic constraint).
*   **Wheel Velocities:** The linear velocities of the wheels. For a differential drive robot, these are $v_l$ (left wheel) and $v_r$ (right wheel).
*   **Odometry Model:** A kinematic model specifically used for estimating the robot's pose (position and orientation) from wheel velocities or encoder readings.

**Example: Differential Drive Robot Odometry Model**

For a differential drive robot with wheel radius $r$ and wheelbase $b$ (distance between the centers of the left and right wheels):

*   **Relationship between wheel velocities and robot's linear and angular velocities:**
    *   Linear velocity of the robot: $v_x = \frac{r}{2}(v_l + v_r)$
    *   Angular velocity of the robot: $\omega_z = \frac{r}{b}(v_r - v_l)$

*   **Integrating wheel velocities to estimate pose change:**
    *   If we have encoder readings $\Delta \theta_l$ and $\Delta \theta_r$ for the left and right wheels over a time interval $\Delta t$, the change in wheel angle is $\Delta \theta_l = \omega_l \Delta t$ and $\Delta \theta_r = \omega_r \Delta t$.
    *   The corresponding linear velocities of the wheels are $v_l = r \omega_l$ and $v_r = r \omega_r$.
    *   The change in robot's position and orientation can be approximated over a small $\Delta t$.
    *   Let the robot's pose at time $t$ be $(x, y, \theta)$.
    *   The change in pose $(\Delta x, \Delta y, \Delta \theta)$ over $\Delta t$ can be estimated using the above relationships.
    *   **Euler Integration (simple approximation):**
        *   $\Delta \theta = \frac{r}{b}(\omega_r - \omega_l) \Delta t$
        *   $\Delta x = \frac{r}{2}(\omega_l + \omega_r) \cos(\theta + \frac{\Delta \theta}{2}) \Delta t$
        *   $\Delta y = \frac{r}{2}(\omega_l + \omega_r) \sin(\theta + \frac{\Delta \theta}{2}) \Delta t$
    *   **More accurate integration methods (like Runge-Kutta) are often used in practice.**

**Textbook References:**

*   **Siegwart, Nourbakhsh (2011) - Introduction to Autonomous Mobile Robots:** Provides detailed derivations of kinematic models for various robot configurations, including differential drive, and how to use them for odometry.
*   **Corke (2011) - Robotics, Vision and Control:** Also covers robot kinematics extensively, likely with practical examples of implementing odometry models in MATLAB.
*   **Tzafestas (Elsevier.) - Introduction to Mobile Robot Control:** Will delve into the mathematical underpinnings of robot motion and control, including kinematic models and their use in feedback loops.
*   **La Valle (2009) - Planning Algorithms:** While focused on planning, it relies on understanding robot kinematics to determine reachable states and how motion is generated.

**Important Point to Remember:** The accuracy of odometry directly depends on the accuracy of the kinematic model and the precision of the sensors.

### 5. Practice Questions and Exercises

**Question 1:**
A differential drive robot has wheels with a radius of 3 cm. The distance between the wheels (wheelbase) is 20 cm. The robot's left wheel encoder records 1000 pulses per revolution, and the right wheel encoder records 1000 pulses per revolution.
If, over a 1-second interval, the left encoder counts 2000 pulses and the right encoder counts 2200 pulses, what is the robot's estimated linear velocity and angular velocity? Assume no slippage.

**Answer 1:**
First, convert pulses to revolutions:
*   Left wheel revolutions: 2000 pulses / 1000 pulses/rev = 2 revolutions.
*   Right wheel revolutions: 2200 pulses / 1000 pulses/rev = 2.2 revolutions.

Convert revolutions to radians:
*   Left wheel angle change ($\Delta \theta_l$): 2 rev * 2π rad/rev = 4π radians.
*   Right wheel angle change ($\Delta \theta_r$): 2.2 rev * 2π rad/rev = 4.4π radians.

Calculate the angular velocity of each wheel:
*   Left wheel angular velocity ($\omega_l$): (4π rad) / 1 sec = 4π rad/s.
*   Right wheel angular velocity ($\omega_r$): (4.4π rad) / 1 sec = 4.4π rad/s.

Now, use the differential drive kinematic model:
*   Robot's linear velocity ($v_x$):
    $v_x = \frac{r}{2}(\omega_l + \omega_r)$
    $v_x = \frac{0.03 \text{ m}}{2}(4\pi \text{ rad/s} + 4.4\pi \text{ rad/s})$
    $v_x = 0.015 \text{ m} (8.4\pi \text{ rad/s})$
    $v_x \approx 0.015 \text{ m} (26.39 \text{ rad/s}) \approx 0.396 \text{ m/s}$

*   Robot's angular velocity ($\omega_z$):
    $\omega_z = \frac{r}{b}(\omega_r - \omega_l)$
    $\omega_z = \frac{0.03 \text{ m}}{0.20 \text{ m}}(4.4\pi \text{ rad/s} - 4\pi \text{ rad/s})$
    $\omega_z = 0.15 (0.4\pi \text{ rad/s})$
    $\omega_z \approx 0.15 (1.257 \text{ rad/s}) \approx 0.188 \text{ rad/s}$

**Estimated velocities:**
*   Linear Velocity ($v_x$) ≈ 0.396 m/s
*   Angular Velocity ($\omega_z$) ≈ 0.188 rad/s

**Question 2:**
What is the primary source of error in odometry derived solely from wheel encoders, and how can it be mitigated?

**Answer 2:**
The primary source of error in odometry derived solely from wheel encoders is **wheel slippage**. Slippage occurs when the wheels rotate but do not effectively translate into motion of the robot's chassis relative to the ground. This can be caused by:
*   Low friction surfaces (e.g., ice, polished floors).
*   Sudden acceleration or deceleration.
*   Uneven terrain.
*   Overloaded robots.

**Mitigation strategies include:**
1.  **Using Inertial Measurement Units (IMUs):** Fusing IMU data (especially gyroscope data for orientation) with wheel encoder data can help correct for slippage-induced drift in the robot's orientation. Accelerometer data can also provide more direct information about linear acceleration.
2.  **Advanced Odometry Models:** Developing more sophisticated kinematic models that account for potential slippage or use sensor fusion techniques like Kalman filters.
3.  **Sensor Fusion with External Sensors:** Integrating with GPS, visual odometry, or LiDAR-based localization systems can provide absolute or relative pose corrections, effectively counteracting the accumulated drift from wheel slippage.
4.  **Improved Wheel Design and Traction:** Using wheels with better grip and optimizing tire pressure.
5.  **Adaptive Control:** Implementing control strategies that can detect and compensate for slippage.

**Question 3:**
An IMU measures a constant angular velocity of 0.2 rad/s around the robot's pitch axis for 5 seconds. What is the total change in pitch angle? If the robot starts with an initial pitch angle of 0.1 radians, what is its final pitch angle?

**Answer 3:**
*   Change in pitch angle = Angular velocity * Time
*   Change in pitch angle = 0.2 rad/s * 5 s = 1 radian.

*   Final pitch angle = Initial pitch angle + Change in pitch angle
*   Final pitch angle = 0.1 radians + 1 radian = 1.1 radians.

### 6. Important Points to Remember

*   **Odometry is key:** Motion/speed sensors provide the data for odometry, which is fundamental for a robot to understand its own movement.
*   **No single sensor is perfect:** Each type of motion sensor has its strengths and weaknesses. Wheel encoders are common but prone to slippage. IMUs are good for direct rotation measurement but drift. GPS offers absolute position but has coverage and update rate limitations.
*   **Sensor fusion is crucial:** Combining data from multiple sensors (e.g., wheel encoders and IMUs) using techniques like Kalman filtering significantly improves the accuracy and robustness of motion estimation.
*   **Kinematic models are essential:** Understanding the robot's kinematic model allows us to translate raw sensor readings (like wheel rotations) into meaningful robot velocities and pose estimates.
*   **Drift is the enemy of dead reckoning:** Odometry based on dead reckoning inherently accumulates errors over time, leading to drift. This necessitates the use of sensor fusion or absolute positioning sensors.
*   **Context matters:** The choice of motion sensor depends heavily on the robot's application, environment (indoor/outdoor), required accuracy, and budget.

This concludes the notes on Motion/Speed Sensors for mobile robot navigation. Understanding these sensors and their integration is a vital step towards building autonomous mobile robots.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
