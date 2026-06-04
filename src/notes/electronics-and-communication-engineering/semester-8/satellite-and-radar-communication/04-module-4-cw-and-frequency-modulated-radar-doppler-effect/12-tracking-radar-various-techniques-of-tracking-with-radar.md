---
title: "Tracking Radar: various techniques of Tracking with Radar"
subject: "SATELLITE AND RADAR COMMUNICATION"
module: "Module 4: CW and Frequency Modulated Radar: Doppler Effect"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c463b09ce205780ff8c2"
status: "completed"
scrapedAt: "2026-05-23T20:16:05.250Z"
---
# Study Notes: SATELLITE AND RADAR COMMUNICATION

## Module 4: CW and Frequency Modulated Radar: Doppler Effect

### Topic: Tracking Radar: Various Techniques of Tracking with Radar

---

### 1. Introduction to Tracking Radar

Tracking radar is a type of radar system designed to continuously monitor the position, velocity, and potentially other parameters of a moving target. Unlike search radars that broadly scan an area, tracking radars focus their energy on a specific target once detected. This allows for precise and ongoing measurement of the target's trajectory.

**Key Concepts:**

*   **Target Trajectory:** The path followed by a moving object.
*   **Position Measurement:** Determining the target's range, azimuth, and elevation.
*   **Velocity Measurement:** Determining the target's radial velocity (using Doppler) and tangential velocity (derived from changes in position).
*   **Continuous Monitoring:** The radar system maintains lock on the target and updates its parameters over time.

**Course Outcome Alignment:**

*   **CO3 (K2):** Illustrate Radar Fundamentals like Radar Equation and Applications. (Tracking radar is a key application.)
*   **CO4 (K2):** Compare various types of Radars and tracking techniques. (This topic directly addresses the comparison of tracking techniques.)

**Textbook/Reference Incorporation:**

*   **Skolnik (2017):** Emphasizes the role of tracking radars in air defense, missile guidance, and space surveillance. Discusses the challenges of accurately tracking targets under various conditions.
*   **Edde (2004):** Provides a good overview of different tracking radar architectures and the signal processing involved in maintaining a track.

---

### 2. Fundamentals of Tracking

To track a target, a radar system needs to:

*   **Detect the target:** Identify the presence of a target in the received signal.
*   **Measure its position:** Determine the target's range, azimuth, and elevation.
*   **Update its position over time:** Continuously re-measure the target's parameters.
*   **Predict its future position:** Use past measurements to forecast where the target will be next.

**Key Concepts:**

*   **Angle Tracking:** Measuring the target's azimuth and elevation.
*   **Range Tracking:** Measuring the target's distance.
*   **Rate Aiding:** Using Doppler information to assist in range tracking.
*   **Filter:** A mathematical algorithm used to smooth noisy measurements and predict target state. Common filters include the Kalman filter.

---

### 3. Techniques for Angle Tracking

Angle tracking is crucial for determining the target's direction. Several techniques are employed:

#### 3.1. Conical Scan

*   **Description:** The radar beam is mechanically or electronically steered in a conical pattern around the target's expected direction. The antenna continuously scans around the target's apparent position.
*   **Mechanism:**
    *   The radar antenna is designed to wobble its beam around the pointing axis.
    *   When the target is perfectly on the axis, the received signal strength is maximum and constant.
    *   If the target is off the axis, the signal strength will vary as the beam wobbles.
    *   The radar receiver analyzes this variation in signal strength to determine the direction of maximum signal, and uses this information to adjust the antenna pointing direction to center the target.
*   **Types:**
    *   **Single-channel conical scan:** The signal strength is measured sequentially in different directions. This introduces a "skip" in target illumination and is susceptible to false targets.
    *   **Two-channel conical scan (e.g., DBF - Double Beam Forming):** Two beams are used simultaneously, one on each side of the pointing axis. This allows for simultaneous measurement of deviation in two orthogonal directions, improving accuracy and reducing skip.
*   **Advantages:**
    *   Relatively simple implementation for mechanical scanning.
    *   Effective for single targets.
*   **Disadvantages:**
    *   **Nob-loss:** When the beam is off the target, the signal strength drops, leading to a loss of information about the target's true position. This causes a bias in the angle measurement.
    *   **Mechanical scanning:** Can be slow and subject to mechanical limitations.
    *   **Two-channel requires more complex hardware.**
*   **Textbook/Reference Incorporation:**
    *   **Skolnik (2017):** Explains the no-loss problem in detail and its impact on tracking accuracy.
    *   **Edde (2004):** Provides schematics of conical scan mechanisms.

#### 3.2. Sequential Lobing (or Dither Scan)

*   **Description:** Similar to conical scan, but the beam is shifted in discrete steps or "lobes" in different directions from the nominal pointing axis.
*   **Mechanism:**
    *   The radar transmits pulses in different beam positions sequentially. For example, it might transmit a pulse with the beam slightly to the left, then slightly to the right, then slightly up, then slightly down.
    *   The received signals from these different lobes are compared.
    *   The radar system then directs the antenna to where the signal strength is highest.
*   **Advantages:**
    *   Can be implemented with simpler antenna systems compared to true conical scan.
*   **Disadvantages:**
    *   Also suffers from the no-loss problem.
    *   Requires more time to scan through all lobes, potentially reducing accuracy for fast-moving targets.
*   **Textbook/Reference Incorporation:**
    *   **Pratt & Allnutt (2021):** May discuss older radar tracking techniques in historical context.

#### 3.3. Monopulse (or Simultaneous Lobing)

*   **Description:** This is the most sophisticated and widely used angle tracking technique. It uses multiple simultaneous antenna beams (typically four) to compare the signal strength from adjacent lobes.
*   **Mechanism:**
    *   The antenna is designed to produce four beams: "sum," "difference-azimuth," and "difference-elevation."
    *   The "sum" channel combines the signals from all four beams to get the overall target strength.
    *   The "difference-azimuth" channel provides a signal proportional to the difference in signal strength between the left and right beams. This indicates how far off the target is in azimuth.
    *   The "difference-elevation" channel provides a signal proportional to the difference in signal strength between the upper and lower beams. This indicates how far off the target is in elevation.
    *   By comparing the "difference" signals to the "sum" signal, the radar can determine the angular error and correct the antenna pointing direction. Crucially, this is done *simultaneously* for all lobes.
*   **Advantages:**
    *   **No-loss tracking:** The target is illuminated by all four beams simultaneously, so there is no loss of signal strength due to beam scanning.
    *   **High accuracy:** Provides very precise angle measurements.
    *   **Immune to fading:** Less affected by target scintillation.
    *   **Can track multiple targets simultaneously** (with advanced monopulse processing).
*   **Disadvantages:**
    *   Requires a more complex antenna and receiver system (multiple channels).
    *   More computationally intensive.
*   **Types of Monopulse:**
    *   **Amplitude Comparison Monopulse:** Compares the amplitudes of the signals from different beams.
    *   **Phase Comparison Monopulse:** Compares the phases of the signals from different beams.
*   **Textbook/Reference Incorporation:**
    *   **Skolnik (2017):** Dedicates significant sections to monopulse tracking, detailing its operation and advantages.
    *   **Edde (2004):** Provides detailed diagrams of monopulse antenna feeds and signal processing.
    *   **Kinsley & Quegan (1999):** Offers insights into the signal processing aspects of monopulse.

#### 3.4. Beam Scanning with Digital Beamforming (DBF)

*   **Description:** With the advent of digital receivers and phased arrays, sophisticated beam steering and tracking techniques can be implemented using digital signal processing.
*   **Mechanism:**
    *   Phased array antennas have multiple radiating elements.
    *   By controlling the phase and amplitude of the signals fed to each element, the radar beam can be electronically steered in any direction without mechanical movement.
    *   DBF allows for the simultaneous formation of multiple beams, or rapid switching between beams, to track targets with high agility.
    *   It can also be used to implement advanced tracking algorithms and adapt to target maneuvers.
*   **Advantages:**
    *   Extremely fast beam steering.
    *   Can track multiple targets simultaneously.
    *   No mechanical limitations.
    *   High flexibility and adaptability.
*   **Disadvantages:**
    *   Requires very complex and expensive hardware (large number of T/R modules, high-speed digital processing).
*   **Textbook/Reference Incorporation:**
    *   **Pratt & Allnutt (2021):** Discusses phased array antennas and their application in modern radar systems, including tracking.
    *   **Ha (2017):** May touch upon digital signal processing in modern communication and radar systems.

---

### 4. Techniques for Range Tracking

Once a target is detected, its range needs to be continuously tracked.

#### 4.1. Range Gate

*   **Description:** A specific time interval (or range interval) is established around the expected range of the target. The radar system then focuses its attention on this "gate" for subsequent pulses.
*   **Mechanism:**
    *   After the first detection and initial range measurement, the radar predicts the target's range for the next pulse.
    *   A "range gate" is opened at this predicted range.
    *   If a target echo is received within this gate, it's considered a valid track. If not, the gate might be widened or the track might be lost.
    *   The gate is updated with each new measurement to follow the target's movement.
*   **Advantages:**
    *   Reduces the amount of data to process, making tracking more efficient.
    *   Helps reject false targets outside the expected range.
*   **Disadvantages:**
    *   Can lead to track loss if the target maneuvers significantly outside the predicted range.
*   **Textbook/Reference Incorporation:**
    *   **Skolnik (2017):** Explains the concept of range gating as a fundamental step in tracking.

#### 4.2. Doppler Rate Tracking (for velocity estimation)

*   **Description:** While not directly a range tracking technique, accurate velocity estimation using Doppler information is crucial for range tracking.
*   **Mechanism:**
    *   The Doppler shift is proportional to the target's radial velocity.
    *   By measuring the Doppler shift over multiple pulses, the radar can estimate the target's radial velocity.
    *   This velocity information is then used to predict the target's range at the next pulse interval, helping to keep the range gate centered.
    *   **Doppler Rate:** The rate of change of the Doppler shift, which indicates the radial acceleration of the target. This is even more advanced prediction.
*   **Advantages:**
    *   Improves range tracking accuracy by accounting for target velocity.
    *   Essential for tracking targets with high radial velocities.
*   **Textbook/Reference Incorporation:**
    *   **Skolnik (2017):** Discusses Doppler radar and its use in velocity estimation.
    *   **Kinsley & Quegan (1999):** Delves into the signal processing for Doppler measurements.

---

### 5. Tracking Filters and Prediction

Once measurements are obtained, tracking filters are used to smooth them, remove noise, and predict the target's future state.

#### 5.1. Kalman Filter

*   **Description:** A powerful mathematical tool that optimally estimates the state of a dynamic system from a series of noisy measurements. It's widely used in tracking radar.
*   **Mechanism:**
    *   The Kalman filter uses a model of the target's motion and the radar's measurement capabilities.
    *   It has two main steps:
        1.  **Prediction:** Predicts the target's state (position, velocity) at the next time step based on the previous state and the motion model.
        2.  **Update:** Uses the new radar measurement to correct the predicted state, producing a refined estimate.
    *   The filter weighs the prediction and the measurement based on their respective uncertainties.
*   **Advantages:**
    *   Provides optimal estimates in the presence of Gaussian noise.
    *   Can handle targets with complex motion.
    *   Can estimate states that are not directly measured (e.g., acceleration from velocity measurements).
*   **Disadvantages:**
    *   Requires an accurate motion model for the target.
    *   Can be computationally intensive.
*   **Types:**
    *   **Extended Kalman Filter (EKF):** Used when the system model is non-linear.
    *   **Unscented Kalman Filter (UKF):** Often more accurate than EKF for highly non-linear systems.
*   **Textbook/Reference Incorporation:**
    *   **Skolnik (2017):** Provides a good introduction to Kalman filters in radar tracking.
    *   **Edde (2004):** May offer practical examples of Kalman filter implementation.
    *   **Kinsley & Quegan (1999):** Discusses the filtering and estimation theory relevant to radar tracking.

#### 5.2. Alpha-Beta-Gamma Filter

*   **Description:** A simpler, recursive filter that is less computationally demanding than the Kalman filter but still effective for tracking targets with relatively smooth motion.
*   **Mechanism:**
    *   Uses three parameters: $\alpha$ (alpha), $\beta$ (beta), and $\gamma$ (gamma).
    *   $\alpha$ is used to smooth position measurements.
    *   $\beta$ is used to smooth velocity estimates.
    *   $\gamma$ is used to smooth acceleration estimates.
    *   These parameters are adjusted to balance the filter's responsiveness to new measurements and its smoothing of noise.
*   **Advantages:**
    *   Simpler to implement and computationally less demanding than Kalman filters.
    *   Effective for tracking targets with constant velocity or constant acceleration.
*   **Disadvantages:**
    *   Less optimal than Kalman filters, especially for highly dynamic targets.
    *   Requires careful tuning of $\alpha$, $\beta$, and $\gamma$.
*   **Textbook/Reference Incorporation:**
    *   **Edde (2004):** Often covers alpha-beta-gamma filters as a practical approach.

---

### 6. Types of Tracking Radar Systems

Tracking radars can be categorized based on their functionality and how they acquire and maintain tracks:

#### 6.1. Search-Acquire-Track (SAT) Radar

*   **Description:** This is a common approach where a search radar first detects potential targets. Once a target is confirmed as valid and of interest, the radar transitions to a tracking mode to follow it.
*   **Mechanism:**
    *   The radar initially performs broad area searches.
    *   Upon detection of a target, it might perform a more focused "acquisition scan" to refine its initial position.
    *   Once a track is initiated, it enters continuous tracking.
*   **Advantages:**
    *   Efficient for monitoring a large area for multiple targets.
    *   Combines the benefits of search and track radars.
*   **Disadvantages:**
    *   Can be a delay between detection and initiation of track.

#### 6.2. Dedicated Tracking Radar

*   **Description:** These radars are designed from the outset for continuous tracking of specific targets. They often employ advanced tracking techniques like monopulse from the beginning.
*   **Mechanism:**
    *   May be cued by external sensors or have a limited search capability to acquire targets.
    *   Once acquired, they focus all resources on tracking.
*   **Examples:** Fire control radars, missile guidance radars.

#### 6.3. Track-While-Scan (TWS) Radar

*   **Description:** A sophisticated technique where a radar performs its search scan while simultaneously maintaining tracks on multiple targets detected during the scan.
*   **Mechanism:**
    *   The radar performs a systematic scan of an area.
    *   As targets are detected in different sectors, the radar's processor assigns them to existing tracks or initiates new ones.
    *   It uses prediction and filtering to maintain tracks even between the radar's revisit times of a particular sector.
*   **Advantages:**
    *   Can track many targets simultaneously without dedicating a separate radar to each.
    *   Provides continuous tracking information for all tracked targets.
*   **Disadvantages:**
    *   Requires significant processing power and advanced algorithms.
    *   The quality of tracking might be slightly lower than a dedicated tracking radar for a single target due to the shared processing resources and intermittent illumination.
*   **Textbook/Reference Incorporation:**
    *   **Skolnik (2017):** Discusses TWS as a crucial capability for modern air defense and surveillance systems.
    *   **Edde (2004):** Explains the operational principles of TWS radars.

---

### 7. Important Points to Remember

*   **Monopulse is the state-of-the-art for accurate angle tracking.** It overcomes the "no-loss" problem inherent in conical scan.
*   **Kalman filters (and their variants) are essential for efficient and accurate tracking**, especially for targets with complex motion.
*   **Tracking radar needs to manage trade-offs** between accuracy, data rate, processing complexity, and the ability to track multiple targets.
*   **Doppler information is vital for velocity estimation**, which in turn aids in range tracking and prediction.
*   **Track-While-Scan offers significant advantages for managing multiple targets** but requires substantial computational resources.
*   **The specific tracking technique employed depends on the application requirements** (e.g., precision required, target maneuverability, number of targets).

---

### 8. Practice Questions and Answers

**Question 1:**
What is the primary disadvantage of conical scan tracking radar compared to monopulse tracking radar?
A) Higher cost
B) Slower scan rate
C) The "no-loss" phenomenon
D) Less effective against fast-moving targets

**Answer:**
C) The "no-loss" phenomenon. Conical scan suffers from signal loss when the target is off the beam axis, leading to tracking errors. Monopulse avoids this by using simultaneous beams.

**Question 2:**
Which tracking filter is considered optimal for estimating the state of a dynamic system from noisy measurements, assuming Gaussian noise?
A) Alpha-Beta Filter
B) Moving Average Filter
C) Kalman Filter
D) Exponential Smoothing Filter

**Answer:**
C) Kalman Filter. The Kalman filter is known for its optimality under the assumption of Gaussian noise and a linear system model (or extensions like EKF/UKF for non-linearities).

**Question 3:**
What does the "Track-While-Scan" (TWS) radar capability allow a radar system to do?
A) Scan a larger area at a slower rate.
B) Track multiple targets simultaneously while performing its search mission.
C) Exclusively focus on tracking a single, high-priority target.
D) Improve the accuracy of its search phase by using tracking data.

**Answer:**
B) Track multiple targets simultaneously while performing its search mission. TWS radars integrate tracking functions within their scanning pattern.

**Question 4:**
Explain the fundamental principle behind monopulse tracking.
A) The radar beam rapidly scans in a cone around the target.
B) The radar compares the signal strength from multiple beams illuminated simultaneously.
C) The radar uses only Doppler shift to determine angular position.
D) The radar relies solely on the target's radar cross-section.

**Answer:**
B) The radar compares the signal strength from multiple beams illuminated simultaneously. Monopulse typically uses four simultaneous beams (sum, difference-azimuth, difference-elevation) to derive angular error.

---

### 9. Further Study

*   **Textbooks:** Revisit chapters on tracking radar in Skolnik and Edde for more detailed mathematical derivations and system architectures.
*   **Digital Signal Processing:** Explore modern signal processing techniques for radar tracking, especially those related to phased arrays and adaptive beamforming.
*   **Applications:** Research how tracking radars are used in air traffic control, military defense (missile guidance, fighter aircraft), and space surveillance.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
