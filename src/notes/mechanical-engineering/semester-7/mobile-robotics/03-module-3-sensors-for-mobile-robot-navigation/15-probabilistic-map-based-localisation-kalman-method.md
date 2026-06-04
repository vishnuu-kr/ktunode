---
title: "Probabilistic map-based localisation-Kalman method"
subject: "MOBILE ROBOTICS"
module: "Module 3: Sensors for mobile robot navigation"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf48044640c1"
status: "completed"
scrapedAt: "2026-05-20T18:15:24.642Z"
---
# Mobile Robotics: Module 3 - Sensors for Mobile Robot Navigation

## Topic: Probabilistic Map-Based Localization - Kalman Filter Method

This module focuses on how mobile robots use sensors to understand their environment and their own position within it. We will delve into probabilistic approaches to localization, specifically the Kalman Filter, which is a powerful tool for estimating a robot's state (like position and velocity) over time, considering uncertainties.

---

### Learning Outcomes:

By the end of this topic, you will be able to:

*   **Understand the principles of probabilistic localization:** Explain why probabilistic methods are essential for mobile robot navigation.
*   **Describe the role of sensors in probabilistic localization:** Identify how different sensors provide data for localization.
*   **Explain the Kalman Filter for state estimation:** Detail the mathematical framework and steps of the Kalman Filter.
*   **Apply the Kalman Filter to mobile robot localization:** Understand how to integrate sensor measurements and motion models with the Kalman Filter for localization.
*   **Discuss the Extended Kalman Filter (EKF) and Unscented Kalman Filter (UKF):** Understand their purpose and application when dealing with non-linear systems.
*   **Evaluate the strengths and weaknesses of Kalman-based localization:** Identify the advantages and limitations of this approach.

---

### Key Concepts and Definitions:

*   **Localization:** The process of determining a robot's pose (position and orientation) within a known environment or map.
*   **Probabilistic Localization:** A framework that represents the robot's uncertainty about its pose using probability distributions. Instead of a single, definitive pose, it maintains a belief about the possible poses.
*   **State Vector ($\mathbf{x}$):** A vector containing the parameters that describe the robot's state. For a 2D mobile robot, this typically includes:
    *   $x$: x-coordinate of the robot's position
    *   $y$: y-coordinate of the robot's position
    *   $\theta$: orientation (heading) of the robot
    *   (Optionally: velocities, angular velocities, etc.)
*   **Covariance Matrix ($\mathbf{P}$):** A matrix that represents the uncertainty (variance and covariance) of the estimated state. It quantifies how much the different state variables vary together.
*   **Motion Model:** A probabilistic model that describes how the robot's state changes over time due to its own movements (e.g., wheel odometry, control commands). This model predicts the robot's next state based on its current state and control inputs.
*   **Measurement Model:** A probabilistic model that relates the robot's state to the sensor measurements. It describes how sensor readings are generated given a particular robot pose.
*   **Kalman Filter:** An optimal recursive data processing algorithm that uses a series of measurements observed over time, containing statistical noise and other inaccuracies, and produces estimates of unknown variables that tend to be more accurate than those based on a single measurement alone.
*   **Bayesian Inference:** The process of updating beliefs about a variable (e.g., robot pose) based on new evidence (e.g., sensor measurements). The Kalman Filter is a specific form of Bayesian inference.
*   **Gaussian Distribution:** A common probability distribution used in Kalman Filters to represent the robot's belief about its state. The state is characterized by a mean (the most likely pose) and a covariance (the uncertainty).

---

### 1. Principles of Probabilistic Localization:

*   **Why Probabilistic?**
    *   **Sensor Noise:** Sensors are imperfect and introduce noise into measurements.
    *   **Actuator Imperfections:** Robot motion is not perfectly controlled; wheels slip, motors have inaccuracies.
    *   **Environmental Uncertainty:** The map itself might not be perfectly accurate, or the environment can change.
    *   **Uncertainty Propagation:** Errors accumulate over time, making deterministic approaches unreliable.
    *   **Probabilistic methods maintain a "belief" about the robot's pose, not a single point estimate.** This belief is often represented as a probability distribution.

*   **Representing Belief:**
    *   The most common representation for Kalman filters is a **Gaussian distribution**.
    *   A Gaussian distribution is fully defined by its **mean** (the most likely value) and its **covariance** (the spread and correlation of uncertainty).
    *   For a state vector $\mathbf{x}$, the belief is represented as $p(\mathbf{x}) \sim \mathcal{N}(\mathbf{x} | \boldsymbol{\mu}, \boldsymbol{\Sigma})$, where $\boldsymbol{\mu}$ is the mean vector and $\boldsymbol{\Sigma}$ is the covariance matrix.

---

### 2. Role of Sensors in Probabilistic Localization:

Sensors provide the crucial data that allows the robot to update its belief about its pose.

*   **Odometry (Wheel Encoders):**
    *   Measures wheel rotations to estimate relative motion (distance traveled and change in orientation).
    *   **Pros:** Provides frequent updates, good for short-term relative pose changes.
    *   **Cons:** Suffers from systematic errors (wheel slip, uneven surfaces, calibration errors) that accumulate over time.
    *   **Used for:** The **motion model** in Kalman filtering.

*   **LIDAR (Light Detection and Ranging):**
    *   Emits laser beams and measures the time of flight to determine distances to objects.
    *   **Pros:** Provides accurate range measurements to environmental features (walls, obstacles). Can build detailed maps.
    *   **Cons:** Can be affected by reflective surfaces, transparency, or darkness. Slower update rates compared to odometry.
    *   **Used for:** **Landmark detection** and matching against a pre-existing map in the **measurement model**.

*   **Cameras (Vision Sensors):**
    *   Capture images of the environment.
    *   **Pros:** Rich information, can identify visual landmarks (e.g., signs, distinctive features).
    *   **Cons:** Sensitive to lighting conditions, texture, and occlusions. Computationally intensive.
    *   **Used for:** Visual odometry, landmark recognition and matching.

*   **IMU (Inertial Measurement Unit):**
    *   Contains accelerometers and gyroscopes to measure linear acceleration and angular velocity.
    *   **Pros:** Provides high-frequency updates of orientation and changes in velocity. Not dependent on external features.
    *   **Cons:** Drifts over time due to integration of noisy measurements.
    *   **Used for:** Augmenting motion models, improving orientation estimation.

*   **Range Sensors (Sonar/Ultrasonic):**
    *   Emit sound waves and measure the time of flight.
    *   **Pros:** Simple, inexpensive.
    *   **Cons:** Low resolution, affected by soft surfaces and angles.
    *   **Used for:** Obstacle detection, sometimes landmark detection.

**(Reference: Siegwart & Nourbakhsh, Chapter 5 on Sensing and Perception)**

---

### 3. The Kalman Filter for State Estimation:

The Kalman Filter is a two-step recursive algorithm: **Prediction** and **Update**.

**Assumptions:**
1.  The motion model and measurement model are linear.
2.  The process noise and measurement noise are zero-mean Gaussian.

**State Representation:**
*   State vector: $\mathbf{x}_t$ (e.g., $[x, y, \theta]^T$)
*   Covariance matrix: $\mathbf{P}_t$

**Motion Model (Prediction Step):**
*   Describes how the robot's state evolves from time $t-1$ to time $t$: $\mathbf{x}_t = f(\mathbf{x}_{t-1}, \mathbf{u}_t) + \mathbf{w}_t$
    *   $f(\cdot)$: State transition function (e.g., kinematic model)
    *   $\mathbf{u}_t$: Control input vector (e.g., velocities)
    *   $\mathbf{w}_t$: Process noise (Gaussian with covariance $\mathbf{Q}_t$), representing uncertainty in the motion.

*   **Prediction Equations:**
    *   **Predict State:** $\hat{\mathbf{x}}_t^{-} = f(\hat{\mathbf{x}}_{t-1}, \mathbf{u}_t)$
        *   We predict the *a priori* state estimate ($\hat{\mathbf{x}}_t^{-}$) based on the previous *a posteriori* estimate ($\hat{\mathbf{x}}_{t-1}$) and control input ($\mathbf{u}_t$).
    *   **Predict Covariance:** $\mathbf{P}_t^{-} = \mathbf{F}_t \mathbf{P}_{t-1} \mathbf{F}_t^T + \mathbf{Q}_t$
        *   $\mathbf{F}_t$: Jacobian of the state transition function $f$ with respect to $\mathbf{x}$, evaluated at $\hat{\mathbf{x}}_{t-1}$. This linearizes the motion model.
        *   We predict the *a priori* covariance ($\mathbf{P}_t^{-}$) by propagating the previous covariance through the linearized motion model and adding process noise.

**Measurement Model (Update Step):**
*   Describes how sensor measurements $\mathbf{z}_t$ relate to the robot's state: $\mathbf{z}_t = h(\mathbf{x}_t) + \mathbf{v}_t$
    *   $h(\cdot)$: Measurement function (e.g., relating robot pose to sensor readings of landmarks)
    *   $\mathbf{v}_t$: Measurement noise (Gaussian with covariance $\mathbf{R}_t$), representing uncertainty in the sensor measurements.

*   **Update Equations:**
    *   **Calculate Kalman Gain ($K_t$):**
        $K_t = \mathbf{P}_t^{-} \mathbf{H}_t^T (\mathbf{H}_t \mathbf{P}_t^{-} \mathbf{H}_t^T + \mathbf{R}_t)^{-1}$
        *   $\mathbf{H}_t$: Jacobian of the measurement function $h$ with respect to $\mathbf{x}$, evaluated at $\hat{\mathbf{x}}_t^{-}$. This linearizes the measurement model.
        *   The Kalman Gain determines how much to trust the new measurement versus the prediction. It balances the predicted uncertainty ($\mathbf{P}_t^{-}$) with the measurement uncertainty ($\mathbf{R}_t$).
    *   **Update State:** $\hat{\mathbf{x}}_t = \hat{\mathbf{x}}_t^{-} + K_t (\mathbf{z}_t - h(\hat{\mathbf{x}}_t^{-}))$
        *   We compute the *a posteriori* state estimate ($\hat{\mathbf{x}}_t$) by correcting the predicted state ($\hat{\mathbf{x}}_t^{-}$) with the measurement residual ($\mathbf{z}_t - h(\hat{\mathbf{x}}_t^{-})$), weighted by the Kalman Gain.
    *   **Update Covariance:** $\mathbf{P}_t = (I - K_t \mathbf{H}_t) \mathbf{P}_t^{-}$
        *   We update the covariance ($\mathbf{P}_t$) to reflect the reduction in uncertainty gained from the measurement. $I$ is the identity matrix.

**(Reference: Thrun, Burgard, & Fox, Chapter 4 on Kalman Filters)**
**(Reference: Corke, Chapter 11 on State Estimation)**

---

### 4. Applying Kalman Filter to Mobile Robot Localization:

*   **Example: 2D Localization with Odometry and Landmark Measurements**

    *   **State Vector:** $\mathbf{x} = [x, y, \theta]^T$
    *   **Motion Model (Odometry):**
        *   Assume a simple differential drive robot with linear velocity $v$ and angular velocity $\omega$.
        *   At time step $\Delta t$, the change in pose is approximately:
            $\Delta x = v \Delta t \cos(\theta)$
            $\Delta y = v \Delta t \sin(\theta)$
            $\Delta \theta = \omega \Delta t$
        *   The motion model function $f(\mathbf{x}_{t-1}, \mathbf{u}_t)$ would be:
            $x_t = x_{t-1} + v \Delta t \cos(\theta_{t-1})$
            $y_t = y_{t-1} + v \Delta t \sin(\theta_{t-1})$
            $\theta_t = \theta_{t-1} + \omega \Delta t$
        *   Process noise $\mathbf{Q}_t$ accounts for errors in $v, \omega, \Delta t$ and wheel slip.
        *   $\mathbf{F}_t$ would be the Jacobian of this $f$ with respect to $[x, y, \theta]$.

    *   **Measurement Model (LIDAR-based Landmark Detection):**
        *   Assume the robot can detect a known landmark at a specific location $(l_x, l_y)$ in the map.
        *   The sensor measures the range ($r$) and bearing ($\phi$) to this landmark.
        *   The measurement function $h(\mathbf{x})$ predicts what the sensor would read given the robot's pose:
            *   Predicted range: $r_{pred} = \sqrt{(l_x - x)^2 + (l_y - y)^2}$
            *   Predicted bearing: $\phi_{pred} = \operatorname{atan2}(l_y - y, l_x - x) - \theta$
        *   The measurement vector is $\mathbf{z} = [r, \phi]^T$.
        *   Measurement noise $\mathbf{R}_t$ accounts for errors in range and bearing measurements.
        *   $\mathbf{H}_t$ would be the Jacobian of this $h$ with respect to $[x, y, \theta]$.

*   **Kalman Filter Cycle:**
    1.  **Initialization:**
        *   Set initial state estimate $\hat{\mathbf{x}}_0$.
        *   Set initial covariance $\mathbf{P}_0$ (high uncertainty if initial pose is unknown).
    2.  **Prediction (Motion Update):**
        *   Use odometry data ($\mathbf{u}_t$) to predict the next state $\hat{\mathbf{x}}_t^{-}$ and its covariance $\mathbf{P}_t^{-}$.
    3.  **Update (Measurement Update):**
        *   When a sensor measurement $\mathbf{z}_t$ (e.g., landmark detection) is available:
            *   Calculate the expected measurement $h(\hat{\mathbf{x}}_t^{-})$.
            *   Calculate the Kalman Gain $K_t$.
            *   Update the state estimate $\hat{\mathbf{x}}_t$.
            *   Update the covariance $\mathbf{P}_t$.
    4.  **Repeat:** Go back to step 2 for the next time step.

**(Reference: Siegwart & Nourbakhsh, Chapter 7 on Localization)**

---

### 5. Handling Non-Linearities: EKF and UKF

The standard Kalman Filter assumes linear motion and measurement models. Most mobile robot systems involve non-linearities (e.g., the trigonometric functions in the motion and measurement models).

#### a) Extended Kalman Filter (EKF):

*   **Idea:** Linearize the non-linear motion and measurement functions around the current state estimate using Taylor series expansion, keeping only the first-order terms.
*   **Implementation:**
    *   **Prediction:** Use the Jacobian matrices $\mathbf{F}_t$ and $\mathbf{H}_t$ calculated from the partial derivatives of the non-linear functions $f$ and $h$ with respect to the state vector $\mathbf{x}$.
    *   The prediction and update equations remain structurally the same as the standard Kalman Filter, but $f$ and $h$ are evaluated at the current estimate.
*   **Pros:**
    *   Extends Kalman filtering to non-linear systems.
    *   Relatively straightforward to implement if Jacobians are available.
*   **Cons:**
    *   Linearization can introduce significant errors, especially for highly non-linear systems or when uncertainty is large.
    *   Calculating Jacobians can be complex and prone to errors.
    *   Can diverge if the linearization is poor.
*   **(Reference: Thrun, Burgard, & Fox, Chapter 4.2.2 on EKF)**
*   **(Reference: Corke, Chapter 11.3 on EKF)**

#### b) Unscented Kalman Filter (UKF):

*   **Idea:** Instead of linearizing the functions, the UKF uses a deterministic sampling approach called the "unscented transform" to capture the mean and covariance of a random variable that has been transformed by a non-linear function.
*   **Implementation:**
    *   A set of carefully chosen "sigma points" are generated around the mean of the state distribution.
    *   These sigma points are propagated through the non-linear functions $f$ and $h$.
    *   The transformed sigma points are used to reconstruct the mean and covariance of the transformed distribution.
*   **Pros:**
    *   Generally provides more accurate results than EKF for non-linear systems, especially for higher-order non-linearities.
    *   Does not require the explicit calculation of Jacobians, simplifying implementation.
    *   Less prone to divergence than EKF.
*   **Cons:**
    *   Computationally more expensive than EKF due to sigma point propagation.
    *   Requires tuning of parameters related to sigma point selection.
*   **(Reference: Thrun, Burgard, & Fox, Chapter 4.2.3 on UKF)**
*   **(Reference: Corke, Chapter 11.4 on UKF)**

---

### 6. Strengths and Weaknesses of Kalman-Based Localization:

*   **Strengths:**
    *   **Optimal for Linear Systems:** The Kalman Filter is the statistically optimal estimator for linear systems with Gaussian noise.
    *   **Recursive:** Processes measurements sequentially, requiring constant memory and computation per step.
    *   **Efficient:** Computationally efficient for its accuracy in linear cases.
    *   **Handles Uncertainty:** Explicitly models and propagates uncertainty, providing a richer understanding of the robot's state.
    *   **Foundation for more advanced filters:** EKF and UKF build upon its principles.
    *   **Can be combined with other sensors:** Easily fused with different sensor modalities.

*   **Weaknesses:**
    *   **Assumption of Linearity (for standard KF):** Real-world robotic systems are often non-linear, requiring EKF or UKF.
    *   **Assumption of Gaussian Noise:** If noise is non-Gaussian (e.g., heavy-tailed distributions), the Kalman Filter's performance degrades. Particle filters are better suited for non-Gaussian noise.
    *   **Sensitivity to Model Errors:** Inaccurate motion or measurement models can lead to poor estimates or divergence (especially for EKF).
    *   **Computational Cost (for EKF/UKF):** EKF requires Jacobian computation; UKF requires sigma point propagation.
    *   **Data Association Problem:** When using landmark-based localization, correctly identifying which sensor reading corresponds to which map feature is crucial. The Kalman Filter itself doesn't solve this.

---

### Practice Questions:

1.  **Concept Check:** What are the two main steps of the Kalman Filter, and what is the purpose of each step?
    *   **Answer:** The two main steps are **Prediction** (or Time Update) and **Update** (or Measurement Update).
        *   **Prediction:** Estimates the robot's state and its uncertainty at the next time step based on the motion model and the previous state estimate. It accounts for how the robot is expected to move.
        *   **Update:** Corrects the predicted state and uncertainty using a new sensor measurement, effectively incorporating new information about the robot's actual position.

2.  **Understanding the Kalman Gain:** In the Kalman Filter update step, what does the Kalman Gain ($K_t$) represent, and how does it balance the predicted state and the measurement?
    *   **Answer:** The Kalman Gain ($K_t$) represents how much the new sensor measurement should influence the state estimate. It is a weighting factor that balances the uncertainty of the predicted state ($\mathbf{P}_t^{-}$) against the uncertainty of the measurement ($\mathbf{R}_t$).
        *   If measurement uncertainty ($\mathbf{R}_t$) is low compared to prediction uncertainty ($\mathbf{P}_t^{-}$), the Kalman Gain will be high, meaning the measurement has a strong influence.
        *   If prediction uncertainty ($\mathbf{P}_t^{-}$) is low compared to measurement uncertainty ($\mathbf{R}_t$), the Kalman Gain will be low, meaning the prediction has a stronger influence, and the measurement is weighted less.

3.  **EKF vs. UKF:** Briefly explain the main difference in how the Extended Kalman Filter (EKF) and Unscented Kalman Filter (UKF) handle non-linearities.
    *   **Answer:**
        *   **EKF** handles non-linearities by **linearizing** the motion and measurement functions around the current state estimate using Taylor series expansions and Jacobian matrices.
        *   **UKF** handles non-linearities by using a deterministic sampling approach called the **unscented transform**, where a set of sigma points are propagated through the non-linear functions, avoiding explicit linearization and Jacobian calculation.

4.  **Application Scenario:** A mobile robot uses odometry for its motion model and a LIDAR sensor to detect a known beacon. The odometry provides noisy estimates of the robot's movement, and the LIDAR provides noisy range and bearing measurements to the beacon. How would you use a Kalman Filter for this robot's localization? Describe the state vector, motion model, and measurement model.
    *   **Answer:**
        *   **State Vector ($\mathbf{x}$):** $\mathbf{x} = [x, y, \theta]^T$, representing the robot's x-position, y-position, and orientation.
        *   **Motion Model:** Based on odometry. The state transition function $f(\mathbf{x}_{t-1}, \mathbf{u}_t)$ would use the robot's velocities ($v, \omega$) and time step ($\Delta t$) to predict the next state:
            $x_t \approx x_{t-1} + v \Delta t \cos(\theta_{t-1})$
            $y_t \approx y_{t-1} + v \Delta t \sin(\theta_{t-1})$
            $\theta_t \approx \theta_{t-1} + \omega \Delta t$
            The process noise covariance $\mathbf{Q}_t$ would represent uncertainties in $v, \omega, \Delta t$, and wheel slip.
        *   **Measurement Model:** Based on LIDAR beacon detection. The measurement vector $\mathbf{z}_t$ would be $[r, \phi]^T$ (range and bearing to the beacon). The measurement function $h(\mathbf{x}_t)$ would predict these values given the robot's pose and the beacon's known location $(l_x, l_y)$:
            $r_{pred} = \sqrt{(l_x - x_t)^2 + (l_y - y_t)^2}$
            $\phi_{pred} = \operatorname{atan2}(l_y - y_t, l_x - x_t) - \theta_t$
            The measurement noise covariance $\mathbf{R}_t$ would represent uncertainties in the LIDAR range and bearing measurements.

---

### Important Points to Remember:

*   **Probabilistic = Uncertainty:** Always think in terms of probability distributions, not single point estimates, when dealing with Kalman filters.
*   **Prediction-Update Cycle:** The Kalman filter operates by predicting the state forward and then updating it with measurements.
*   **Jacobians for Linearization:** The EKF relies heavily on correctly computed Jacobians for its linearization step.
*   **Covariance Propagation:** The covariance matrix is crucial for tracking uncertainty and is propagated and updated in each step.
*   **Kalman Gain is Key:** The Kalman Gain determines how much influence a measurement has, balancing prediction and measurement uncertainties.
*   **Non-Linearity is Common:** Most real-world robot systems require EKF or UKF due to non-linear motion or measurement models.
*   **Assumptions Matter:** Understand the assumptions of the Kalman filter (linearity, Gaussian noise) and when they are violated. Particle filters are an alternative for non-Gaussian noise.
*   **Sensor Fusion:** Kalman filters are excellent for fusing data from multiple sensors.

---

### Alignment with Course Outcomes:

*   **CO4: Choose appropriate Sensors for mobile robot navigation (Knowledge Level: K3)**
    *   This topic directly addresses the role of sensors (odometry, LIDAR, cameras, IMU) in providing data for localization, which is a core aspect of navigation.
*   **CO5: Perform navigation and path planning mobile robots (Knowledge Level: K3)**
    *   Accurate localization (as achieved by Kalman filters) is a prerequisite for effective navigation and path planning. Knowing where the robot is allows it to execute planned paths.

---

This concludes the notes on Probabilistic Map-Based Localization using the Kalman Filter method. Understanding these concepts is fundamental to building robust and accurate mobile robot navigation systems.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
