---
title: "Characterizing sensor performance"
subject: "MOBILE ROBOTICS"
module: "Module 3: Sensors for mobile robot navigation"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf48044640b5"
status: "completed"
scrapedAt: "2026-05-20T18:15:16.132Z"
---
# Mobile Robotics: Module 3 - Sensors for Mobile Robot Navigation

## Topic: Characterizing Sensor Performance

This module focuses on understanding how to evaluate and quantify the performance of sensors used in mobile robot navigation. This is crucial for selecting the right sensors for a given task and for interpreting the data they provide accurately.

### Learning Outcomes:

*   **LO 3.1: Define and explain key metrics for characterizing sensor performance.**
*   **LO 3.2: Understand the impact of sensor noise and uncertainty on navigation.**
*   **LO 3.3: Discuss common sources of error in mobile robot sensors.**
*   **LO 3.4: Explain and apply methods for sensor data filtering and fusion.**
*   **LO 3.5: Analyze the trade-offs between different sensor performance characteristics.**
*   **LO 3.6: Evaluate the suitability of a sensor for a specific navigation task based on its performance.**

### Course Outcomes Alignment:

*   **CO4 (K3 - Understanding):** This entire topic directly supports CO4 by providing the knowledge and understanding necessary to choose appropriate sensors. By characterizing their performance, we can make informed decisions.

### Key Concepts and Definitions:

**1. Sensor Performance Metrics:**

These metrics quantify how well a sensor performs its intended function.

*   **Accuracy:**
    *   **Definition:** The degree of closeness of measurements of a quantity to that quantity's actual (true) value. In robotics, it refers to how close a sensor reading is to the actual physical property it's measuring (e.g., distance, angle).
    *   **Example:** A distance sensor that reports 1.0m for an object actually 1.01m away is more accurate than one reporting 1.2m.
    *   **Textbook Reference:** Siegwart, Nourbakhsh (2011) Chapter 3, "Sensors", discusses accuracy as a fundamental property.

*   **Precision:**
    *   **Definition:** The degree to which repeated measurements under unchanged conditions show the same results. It refers to the reproducibility of measurements.
    *   **Example:** If a distance sensor consistently reports 1.1m, 1.11m, and 1.09m for an object at a fixed location, it is precise, even if its average reading (1.1m) isn't perfectly accurate (e.g., if the true value is 1.05m).
    *   **Textbook Reference:** Siegwart, Nourbakhsh (2011) Chapter 3 also elaborates on precision. Corke (2011) might touch upon this in the context of algorithm robustness.

*   **Resolution:**
    *   **Definition:** The smallest change in the measured quantity that the sensor can detect.
    *   **Example:** A distance sensor with a resolution of 1cm can distinguish between objects at 1.00m and 1.01m, but not between 1.00m and 1.005m.
    *   **Textbook Reference:** Siegwart, Nourbakhsh (2011) often refers to resolution in relation to specific sensor types like encoders or sonar.

*   **Range (Operating Range):**
    *   **Definition:** The minimum and maximum values of the measured quantity that the sensor can accurately detect.
    *   **Example:** A lidar sensor might have a range of 0.1m to 50m. Readings outside this range are unreliable or impossible.
    *   **Textbook Reference:** Siegwart, Nourbakhsh (2011) Chapter 3, "Sensors", details the operating range of various sensor modalities.

*   **Bandwidth/Update Rate:**
    *   **Definition:** The rate at which the sensor can acquire and provide new data. Measured in Hertz (Hz).
    *   **Example:** A camera might have a frame rate of 30Hz, providing 30 images per second. A wheel encoder might have a much higher update rate.
    *   **Textbook Reference:** Corke (2011) in its vision chapters often deals with image acquisition rates.

*   **Field of View (FOV):**
    *   **Definition:** The extent of the observable world that is seen by the sensor at any given moment.
    *   **Example:** A camera might have a 90-degree horizontal FOV. A lidar might have a 360-degree horizontal FOV.
    *   **Textbook Reference:** Siegwart, Nourbakhsh (2011) discusses FOV for cameras and other directional sensors.

*   **Latency:**
    *   **Definition:** The time delay between when an event occurs in the real world and when the sensor data reflecting that event becomes available to the robot's processing system.
    *   **Example:** The time from when a robot encounters an obstacle to when the sensor reading is processed by the navigation algorithm.
    *   **Textbook Reference:** La Valle (2009) on planning algorithms often implicitly deals with the impact of latency on real-time decision making.

**2. Sensor Noise and Uncertainty:**

*   **Noise:**
    *   **Definition:** Random variations in sensor readings that are not related to the actual physical property being measured. It is inherent in most sensing processes.
    *   **Types of Noise:**
        *   **Additive White Gaussian Noise (AWGN):** A common model where noise is added to the signal, and its distribution is Gaussian with zero mean.
        *   **Multiplicative Noise:** Noise that scales with the signal itself.
        *   **Quantization Noise:** Introduced when a continuous signal is converted into a discrete one.
    *   **Impact:** Degrades accuracy and precision, making it harder to extract reliable information.
    *   **Textbook Reference:** Thrun, Burgard, and Fox (2005) is the seminal work on probabilistic robotics and extensively covers sensor noise modeling and its impact on state estimation (e.g., Kalman Filters). Siegwart, Nourbakhsh (2011) also dedicates sections to noise characteristics.

*   **Uncertainty:**
    *   **Definition:** A broader term encompassing various forms of doubt about the correctness of a sensor measurement. It includes noise, biases, and systematic errors.
    *   **Sources:** Imperfect calibration, environmental factors (lighting, temperature), sensor degradation over time, aliasing.
    *   **Impact:** Crucial for robust navigation. Robots need to understand and manage uncertainty to make safe and effective decisions.
    *   **Textbook Reference:** Thrun, Burgard, and Fox (2005) heavily emphasizes representing and reasoning about uncertainty.

**3. Common Sources of Error:**

*   **Systematic Errors (Biases):**
    *   **Definition:** Errors that consistently shift measurements in the same direction. They are not random.
    *   **Example:** A distance sensor that always reads 2cm too high. A camera with a lens distortion that consistently warps images.
    *   **Mitigation:** Calibration.
    *   **Textbook Reference:** Siegwart, Nourbakhsh (2011) discusses calibration procedures to mitigate biases.

*   **Random Errors:**
    *   **Definition:** Errors that fluctuate randomly, leading to variations around the true value. This is what we typically call "noise."
    *   **Example:** Fluctuations in sonar signal strength due to acoustic interference.
    *   **Mitigation:** Averaging, filtering.
    *   **Textbook Reference:** Thrun, Burgard, and Fox (2005) provides probabilistic frameworks to handle random errors.

*   **Environmental Factors:**
    *   **Definition:** External conditions that affect sensor readings.
    *   **Examples:**
        *   **Lighting:** Affects cameras (overexposure, underexposure, shadows).
        *   **Reflectivity:** Affects lidar and sonar (shiny surfaces, dark surfaces).
        *   **Temperature:** Can affect electronic components and physical properties of sensors.
        *   **Humidity/Moisture:** Can affect optical sensors or cause corrosion.
        *   **Vibrations:** Can lead to jerky readings from IMUs.
    *   **Textbook Reference:** Siegwart, Nourbakhsh (2011) in sensor descriptions often lists environmental limitations.

*   **Calibration Errors:**
    *   **Definition:** Errors introduced if the sensor is not properly calibrated or if the calibration degrades over time.
    *   **Example:** An IMU not properly aligned with the robot's body frame.
    *   **Mitigation:** Re-calibration.
    *   **Textbook Reference:** Corke (2011) details camera calibration procedures. Siegwart, Nourbakhsh (2011) covers sensor mounting and initial calibration.

**4. Sensor Data Filtering and Fusion:**

*   **Filtering:**
    *   **Definition:** Techniques used to reduce noise and extract meaningful information from raw sensor data.
    *   **Common Filters:**
        *   **Moving Average Filter:** Simple averaging of a window of recent measurements.
            *   *Pros:* Easy to implement, smooths out noise.
            *   *Cons:* Introduces lag, can smear sharp features.
            *   *Formula:* $\hat{x}_k = \frac{1}{N} \sum_{i=0}^{N-1} x_{k-i}$ (where $\hat{x}_k$ is the filtered value at time $k$, $x_{k-i}$ is the raw measurement, and $N$ is the window size).
        *   **Kalman Filter (KF):** An optimal recursive filter for linear systems with Gaussian noise. Predicts the next state and then updates it with the measurement.
            *   *Pros:* Optimal for linear systems, handles noise efficiently.
            *   *Cons:* Assumes linearity, can be computationally intensive.
            *   *Textbook Reference:* Thrun, Burgard, and Fox (2005) is the definitive resource. Siegwart, Nourbakhsh (2011) provides a good introduction.
        *   **Extended Kalman Filter (EKF):** An adaptation of the Kalman Filter for non-linear systems by linearizing around the current estimate.
            *   *Pros:* Handles non-linearity.
            *   *Cons:* Linearization can introduce errors, can diverge.
            *   *Textbook Reference:* Thrun, Burgard, and Fox (2005).
        *   **Unscented Kalman Filter (UKF):** Another approach for non-linear systems that uses a deterministic sampling approach to capture mean and covariance. Often more robust than EKF.
            *   *Pros:* Better for highly non-linear systems than EKF.
            *   *Cons:* More complex than KF.
            *   *Textbook Reference:* Thrun, Burgard, and Fox (2005).
        *   **Particle Filter (Sequential Monte Carlo):** A more general approach that represents the probability distribution of the state using a set of weighted samples (particles). Can handle arbitrary noise distributions and non-linearities.
            *   *Pros:* Very flexible, handles non-linear/non-Gaussian systems well.
            *   *Cons:* Computationally intensive, can suffer from sample impoverishment.
            *   *Textbook Reference:* Thrun, Burgard, and Fox (2005).

*   **Sensor Fusion:**
    *   **Definition:** Combining data from multiple sensors to obtain a more accurate, complete, or reliable estimate than could be achieved by using any single sensor alone.
    *   **Goals:**
        *   **Improved Accuracy/Precision:** Averaging redundant information.
        *   **Increased Robustness:** If one sensor fails, others can compensate.
        *   **Extended Coverage:** Combining sensors with different fields of view or ranges.
        *   **Complementary Information:** Combining sensors that measure different aspects (e.g., lidar for distance, camera for color/texture).
    *   **Approaches:**
        *   **Low-level Fusion (Data-level):** Combining raw sensor data directly.
        *   **Mid-level Fusion (Feature-level):** Extracting features from each sensor and then combining the features.
        *   **High-level Fusion (Decision-level):** Each sensor makes a decision, and then these decisions are combined.
    *   **Example:** Fusing lidar (precise distance) with a camera (semantic information like "door") to detect and classify objects. Combining odometry (short-term, precise relative motion) with GPS (long-term, less precise absolute position).
    *   **Textbook Reference:** Siegwart, Nourbakhsh (2011) covers fusion in the context of localization and mapping. Thrun, Burgard, and Fox (2005) dedicates significant attention to fusion for state estimation.

**5. Trade-offs in Sensor Performance:**

*   **Accuracy vs. Precision:** A sensor can be precise but not accurate (consistent error), or accurate on average but not precise (highly variable readings).
*   **Range vs. Resolution:** Often, sensors with longer ranges have lower resolution, and vice-versa. For example, a wide-angle lens (large FOV) might have lower resolution than a telephoto lens (narrow FOV).
*   **Cost vs. Performance:** High-performance sensors (e.g., high-resolution lidar, industrial-grade IMUs) are typically more expensive.
*   **Computational Cost vs. Performance:** Advanced filtering and fusion techniques can improve performance but require significant computational resources.
*   **Speed (Update Rate) vs. Accuracy:** Achieving higher accuracy might require longer integration times, thus reducing the update rate.
*   **Textbook Reference:** Siegwart, Nourbakhsh (2011) often discusses these trade-offs when introducing different sensor types.

**6. Evaluating Sensor Suitability for Navigation Tasks:**

*   **Localization:** Requires precise, frequent updates on position and orientation. Odometry, IMUs, lidar, cameras are critical. GPS is useful for global localization but has low update rates and accuracy issues indoors.
*   **Mapping:** Requires sensors that can measure the environment's geometry accurately over a wide area. Lidar, sonar, stereo cameras are commonly used.
*   **Obstacle Avoidance:** Needs fast, reliable detection of obstacles in the robot's immediate path. Ultrasonic sensors, IR sensors, short-range lidar, depth cameras are suitable.
*   **Path Following:** Requires accurate measurement of the robot's current pose relative to the desired path. Wheel encoders, IMUs, and vision-based relative pose estimation are key.

*   **How to Evaluate:**
    1.  **Define the Task Requirements:** What specific information is needed (distance, velocity, object ID)? What are the acceptable error margins? What is the operating environment?
    2.  **Analyze Sensor Specifications:** Review datasheets for accuracy, precision, range, resolution, update rate, FOV, and known limitations.
    3.  **Consider Environmental Impact:** How will the environment (lighting, surface properties, etc.) affect the sensor's performance?
    4.  **Evaluate Noise Characteristics:** Understand the type and magnitude of noise expected.
    5.  **Assess Computational Load:** Can the robot's processing power handle the data rate and any required filtering/fusion algorithms?
    6.  **Perform Benchmarking/Testing:** Conduct real-world tests to validate performance under operational conditions.
    7.  **Consider Redundancy:** Using multiple sensors can improve robustness.

*   **Textbook Reference:** Siegwart, Nourbakhsh (2011) Chapter 3 provides an overview of sensors and their applications. Corke (2011) in robot examples often implicitly demonstrates sensor selection based on tasks.

---

### Examples of Sensor Performance Characterization:

**Example 1: Evaluating a Wheel Encoder for Odometry**

*   **Task:** Estimate the robot's movement based on wheel rotations.
*   **Key Metrics:** Resolution (pulses per revolution), accuracy (how closely rotations translate to actual distance), drift (accumulated error over time).
*   **Noise/Errors:** Wheel slippage (reduces accuracy), uneven terrain (causes fluctuations), encoder quantization error.
*   **Filtering:** Moving average on velocity estimates, Kalman filter for integrating velocity into position.
*   **Trade-offs:** High-resolution encoders improve precision but might not eliminate slippage.
*   **Suitability:** Good for short-term, relative motion estimation, but prone to drift and needs to be fused with other sensors (like IMU or vision) for long-term accurate localization.

**Example 2: Evaluating a Lidar for Mapping**

*   **Task:** Create a 2D or 3D map of the environment.
*   **Key Metrics:** Range (e.g., 0.1m to 30m), angular resolution (e.g., 0.5 degrees), accuracy (e.g., +/- 2cm), update rate (e.g., 10Hz), FOV (e.g., 270 degrees for 2D lidar).
*   **Noise/Errors:** Specular reflections (e.g., mirrors, glass), poor reflectivity (e.g., black velvet), environmental interference (e.g., fog, dust).
*   **Filtering:** Statistical outlier removal (e.g., based on distance to nearest neighbors) to remove spurious points, RANSAC for line/plane fitting.
*   **Trade-offs:** 360-degree lidar provides full coverage but might have lower resolution than a focused scanner. Higher resolution/accuracy lidar is more expensive.
*   **Suitability:** Excellent for precise geometric mapping due to high accuracy and resolution. Needs careful consideration of surface properties.

**Example 3: Evaluating a Camera for Visual Odometry**

*   **Task:** Estimate robot motion by tracking visual features in consecutive images.
*   **Key Metrics:** Resolution (pixels), frame rate (Hz), feature detection quality, robustness to lighting changes.
*   **Noise/Errors:** Motion blur (reduces feature tracking accuracy), illumination changes, textureless surfaces (lack of features), parallax issues.
*   **Filtering:** Kalman filter for state estimation, feature descriptors are robust to some degree of illumination change.
*   **Trade-offs:** High frame rate allows for faster motion but can suffer from motion blur. Better image processing algorithms require more computation.
*   **Suitability:** Can provide rich information and scale-invariant features, but is highly sensitive to environmental conditions and requires significant processing.

---

### Practice Questions:

**Question 1 (LO 3.1, CO4):**
A robot navigation system uses a sonar sensor with the following specifications:
*   Range: 0.1m to 4.0m
*   Accuracy: ±5 cm
*   Resolution: 1 cm
*   Update Rate: 20 Hz
*   Field of View: 15 degrees cone

Describe what each of these specifications means in the context of the sonar sensor and its use in mobile robot navigation. (K3)

**Answer 1:**
*   **Range (0.1m to 4.0m):** The sonar sensor can reliably detect objects between 0.1 meters and 4.0 meters away. It cannot measure distances shorter than 0.1m or longer than 4.0m.
*   **Accuracy (±5 cm):** The reported distance from the sensor is expected to be within 5 cm of the true distance. For example, if the sensor reports 2.0 meters, the actual distance could be anywhere between 1.95 meters and 2.05 meters.
*   **Resolution (1 cm):** The sensor can distinguish between two distances that differ by at least 1 cm. It can report values like 1.50m, 1.51m, but cannot distinguish between 1.501m and 1.502m if the sensor's output is quantized to the nearest centimeter.
*   **Update Rate (20 Hz):** The sensor provides a new measurement every 1/20th of a second (i.e., 50 milliseconds). This means the robot can get up to 20 distance readings per second.
*   **Field of View (15 degrees cone):** The sensor emits an ultrasonic beam in a cone shape with a 15-degree angle. It measures the distance to the first object encountered within this cone. This means it's not ideal for detecting very narrow objects at a distance unless the robot is precisely aimed.

---

**Question 2 (LO 3.2, LO 3.3, CO4):**
Imagine you are using a camera for visual odometry on a robot moving in a dimly lit warehouse.
a) Identify at least two potential sources of error or noise that could affect the camera's performance for this task. (K3)
b) How might these errors impact the robot's estimated position and orientation? (K3)

**Answer 2:**
a) Potential sources of error/noise:
    1.  **Low Illumination:** Dim lighting reduces the contrast in the image, making it harder to detect and track visual features reliably. This can lead to fewer features being found or features being less distinct.
    2.  **Motion Blur:** If the robot moves quickly or if there are vibrations, the camera's exposure time might be too long relative to the motion, causing objects in the image to appear smeared. This degrades the quality of detected features and makes it harder to match them between frames.
    3.  **Textureless Surfaces:** If large areas of the warehouse (e.g., plain walls, concrete floors) lack distinct visual patterns, the camera will have difficulty finding reliable features to track.

b) Impact on robot's estimated position and orientation:
    *   **Reduced Accuracy and Increased Drift:** Fewer or less reliable features mean the visual odometry algorithm has less information to work with. This leads to less accurate estimates of the robot's movement between frames. Over time, these errors accumulate, causing significant drift in the robot's estimated position and orientation compared to its true pose.
    *   **Loss of Tracking:** In extreme cases (e.g., very dark, textureless scenes), the visual odometry system might fail to find enough features to estimate motion altogether, leading to a complete loss of tracking and an inability to update the robot's pose.
    *   **Inaccurate Pose Updates:** Motion blur can lead to erroneous estimations of the direction and magnitude of motion, resulting in incorrect updates to the robot's pose.

---

**Question 3 (LO 3.4, CO4):**
You have two sensors: a noisy but fast sonar sensor and a more accurate but slower lidar sensor for obstacle detection. You need to implement a system that can detect obstacles quickly and reliably.
a) Suggest a sensor fusion approach to combine the data from these two sensors. (K3)
b) What is the primary benefit of using sensor fusion in this scenario? (K3)

**Answer 3:**
a) Sensor Fusion Approach:
    A suitable approach would be **feature-level fusion** or **decision-level fusion** using a **Kalman Filter** (or a more advanced variant if needed) for state estimation.
    *   **Kalman Filter Approach:**
        1.  **Prediction Step:** Use the robot's motion model (e.g., from wheel odometry) to predict the robot's next pose.
        2.  **Measurement Update Step:**
            *   The sonar sensor provides rapid but potentially noisy distance measurements. These can be used as a quick update, incorporating their inherent noise characteristics into the filter.
            *   The lidar sensor provides more accurate and potentially denser environmental data. These accurate measurements can be used to refine the state estimate. The lidar data might be processed to identify obstacles at specific locations, and this information is used to correct the robot's estimated pose or the environment map.
        *   The Kalman filter can weigh the contribution of each sensor based on their known uncertainty.

b) Primary Benefit of Sensor Fusion:
    The primary benefit of using sensor fusion in this scenario is **improved robustness and reliability**.
    *   **Speed:** The faster sonar sensor allows for quick detection of nearby obstacles, enabling timely avoidance maneuvers.
    *   **Accuracy:** The more accurate lidar sensor provides reliable measurements for better obstacle localization and mapping, reducing the impact of sonar noise and potential false positives/negatives.
    By combining them, the robot can achieve a balance of fast detection (from sonar) and accurate information (from lidar), leading to a more robust obstacle avoidance system than either sensor could provide alone. This combination mitigates the weaknesses of each individual sensor.

---

### Important Points to Remember:

*   **No sensor is perfect.** Always consider their limitations and error characteristics.
*   **Accuracy vs. Precision** is a critical distinction. High precision doesn't guarantee high accuracy.
*   **Noise** is inherent and must be modeled and managed, often through filtering.
*   **Systematic errors (biases)** can often be removed or reduced through **calibration**.
*   **Environmental factors** significantly influence sensor performance. Understand your operating environment.
*   **Sensor fusion** is key to building robust and reliable mobile robot systems by combining complementary sensor information.
*   **Trade-offs** exist in all sensor choices and processing techniques. Select sensors and algorithms that best match the specific navigation task requirements.
*   **Probabilistic methods** (like Kalman Filters and Particle Filters) are fundamental tools for handling uncertainty in sensor data and state estimation.

---
This comprehensive study note aims to provide a thorough understanding of how to characterize sensor performance for mobile robot navigation, aligning with the learning outcomes and supporting the broader course objectives.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
