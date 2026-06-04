---
title: "Tracking Radar: various techniques of Tracking with Radar"
subject: "SATELLITE AND RADAR COMMUNICATION"
module: "Module 4: CW and Frequency Modulated Radar: Doppler Effect"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff338"
status: "completed"
scrapedAt: "2026-05-23T18:11:04.754Z"
---
# SATELLITE AND RADAR COMMUNICATION

## Module 4: CW and Frequency Modulated Radar: Doppler Effect

### Topic: Tracking Radar: Various Techniques of Tracking with Radar

**Target Audience:** Students of Satellite and Radar Communication.

**Prerequisites:** Basic understanding of radar principles, Doppler effect, and signal processing.

---

### 1. Introduction to Tracking Radar

**Tracking radar** is a type of radar system designed to continuously determine the position, velocity, and sometimes acceleration of a moving target. Unlike search radars that simply detect the presence of a target, tracking radars are specifically optimized for maintaining a lock on a target once it has been detected. This sustained tracking is crucial for applications such as:

*   **Missile guidance:** Directing interceptors towards incoming threats.
*   **Aircraft control:** Air traffic control, landing systems.
*   **Ballistic missile defense:** Tracking and engaging intercontinental ballistic missiles.
*   **Satellite tracking:** Monitoring the orbits of artificial satellites.
*   **Navigation:** Assisting ships and aircraft in maintaining their course.

**Key Concept:** Tracking involves not just detecting the target but also estimating its state (position, velocity) and predicting its future position.

**Reference:** Skolnik, M. I. (2017). *Introduction to Radar Systems*. Chapter 7 discusses tracking radars.

---

### 2. Essential Components of a Tracking Radar System

A typical tracking radar system comprises several key components:

*   **Antenna System:** Capable of precisely pointing and directing the radar beam. This can be a mechanically steered parabolic dish or a phased array antenna.
*   **Transmitter:** Generates the radar pulse or continuous wave signal.
*   **Receiver:** Detects the reflected radar signals (echoes) from the target.
*   **Signal Processor:** Processes the received echoes to extract target information (range, Doppler, angle).
*   **Tracking Computer/Processor:** Implements tracking algorithms to estimate target state and update antenna pointing.
*   **Display System:** Visualizes the target's trajectory and other relevant information.

---

### 3. Fundamental Principles of Tracking

Tracking relies on the continuous measurement of target parameters. The primary parameters tracked are:

*   **Range (R):** The distance to the target, determined from the time delay between transmission and reception of the pulse.
*   **Azimuth Angle ($\theta$):** The horizontal angle of the target relative to the radar.
*   **Elevation Angle ($\phi$):** The vertical angle of the target relative to the radar.
*   **Radial Velocity ($v_r$):** The component of the target's velocity along the line of sight to the radar, determined by the Doppler shift.

**Important Point:** For accurate tracking, the radar must be able to measure these parameters with high precision and update them frequently.

---

### 4. Techniques of Tracking with Radar

Various techniques are employed to achieve continuous target tracking. These techniques differ in how they acquire and maintain a lock on the target and how they estimate its position and velocity.

#### 4.1. Conical Scan Tracking

**Description:** Conical scan is one of the earliest and simplest tracking techniques. The radar antenna beam is deliberately "wobbled" or *scanned* in a conical pattern around the target's apparent direction.

**How it Works:**
1.  **Acquisition:** The radar initially searches for a target. Once a target is detected, the antenna is offset slightly from the target's direction.
2.  **Scanning:** The antenna axis is rotated around the target's apparent direction at a constant angular velocity, tracing a cone.
3.  **Error Signal Generation:** The received signal strength will be strongest when the antenna beam is pointed directly at the target. As the beam scans away, the signal strength decreases. By comparing the signal strength received from different sectors of the conical scan, an error signal can be generated.
    *   If the signal is stronger on one side of the cone, it indicates that the antenna is off-center.
    *   The magnitude of the signal difference is proportional to the angular error.
4.  **Correction:** This error signal is fed back to an antenna servo system that drives the antenna to realign its axis with the target's direction.
5.  **Continuous Tracking:** This process is repeated continuously, keeping the antenna beam locked onto the target.

**Types of Conical Scan:**
*   **Single-Channel Conical Scan:** Uses a single receiver channel. The error signal is derived from the amplitude modulation of the received signal as the beam sweeps past the target.
*   **Double-Channel Conical Scan (Split-Beam Conical Scan):** Uses two or more antenna beams, often with overlapping coverage, which are slightly offset from each other. This can provide more rapid error detection and correction.

**Advantages:**
*   Simple to implement.
*   Requires less complex antenna steering mechanisms compared to some other techniques.

**Disadvantages:**
*   **Miss Distance:** The antenna is never perfectly pointed at the target due to the scanning process, leading to a small but persistent tracking error (miss distance).
*   **Reduced Accuracy on Maneuvering Targets:** Response time can be slow for rapidly maneuvering targets.
*   **Sensitivity to Scintillation:** Fluctuations in target reflectivity (scintillation) can introduce errors.
*   **Requires a "Catcher" Target:** The target must be within the antenna beamwidth for the system to generate an error signal.

**Reference:** Skolnik, M. I. (2017). *Introduction to Radar Systems*. Section 7.2 discusses conical scan.

**Example:** Early airborne fire-control radars often used conical scan.

#### 4.2. Amplitude Comparison Monopulse Tracking

**Description:** Monopulse tracking is a more advanced technique that overcomes many of the limitations of conical scan. It allows for the instantaneous determination of the target's angular position relative to the antenna's boresight, without requiring sequential scanning.

**How it Works:**
1.  **Multiple Beams:** A monopulse radar antenna generates multiple (typically four) overlapping beams simultaneously. These beams are usually generated by using a feed system with four elements (e.g., in a sequential lobing arrangement, but achieved simultaneously).
2.  **Sum and Difference Channels:** The received signals from these four beams are combined to form two primary outputs:
    *   **Sum Channel ($\Sigma$):** Represents the total signal strength from all beams. This is used for range and Doppler measurement and overall target detection.
    *   **Difference Channels ($\Delta_a$ for azimuth, $\Delta_e$ for elevation):** Each difference channel is formed by subtracting the signals from opposing beams. For example, $\Delta_a$ might be the sum of beams pointing slightly left minus the sum of beams pointing slightly right.
3.  **Error Signal Generation:** The ratio of the difference channel signal to the sum channel signal provides an instantaneous measure of the angular error:
    *   Azimuth Error: $E_a = \frac{\Delta_a}{\Sigma}$
    *   Elevation Error: $E_e = \frac{\Delta_e}{\Sigma}$
    *   When the target is on the boresight, $\Delta_a$ and $\Delta_e$ are zero, resulting in zero error. Any deviation causes a non-zero error.
4.  **Correction:** This error signal is used to drive the antenna servo system to keep the antenna boresight aligned with the target.

**Types of Monopulse:**
*   **Sequential Lobing (Non-Monopulse):** Briefly mentioned for contrast, this technique sequentially illuminates the target with different beam patterns, but the signal comparison happens sequentially, not simultaneously.
*   **Simultaneous Lobing:** The actual monopulse technique where multiple beams are received simultaneously.
    *   **Amplitude Monopulse:** The most common type, relies on amplitude differences between the beams.
    *   **Phase Monopulse:** Uses phase differences to determine angular error. Less common.

**Advantages:**
*   **High Accuracy:** Provides instantaneous angular error, leading to significantly higher tracking accuracy than conical scan.
*   **Faster Response:** Can track rapidly maneuvering targets more effectively.
*   **No Miss Distance:** Theoretically, the boresight can be aligned perfectly with the target.
*   **Immune to Scintillation:** The ratio of signals makes it less susceptible to fluctuations in target reflectivity.
*   **Can Track Multiple Targets:** With appropriate processing, a monopulse radar can distinguish and track multiple targets simultaneously, provided they are spatially separated.

**Disadvantages:**
*   **Complex Antenna Feed and Receiver:** Requires more complex antenna feed systems and multiple receiver channels, increasing cost and complexity.
*   **Requires Target to be within Beamwidth:** Like conical scan, the target must be within the antenna beam to generate an error signal.

**Reference:** Skolnik, M. I. (2017). *Introduction to Radar Systems*. Section 7.3 discusses monopulse tracking. Pratt & Allnutt (2021) might also touch upon antenna techniques relevant to tracking in satellite communications context, though radar-specific details are primarily in Skolnik.

**Example:** Modern airborne intercept radars, surface-to-air missile guidance radars, and advanced air traffic control radars use monopulse tracking.

#### 4.3. Skin Tracking

**Description:** Skin tracking refers to tracking a target based solely on its reflected radar signals ("skin paint") without any form of radar beacon or transponder onboard the target. This is the most common form of radar tracking for natural targets like aircraft, missiles, and satellites.

**Techniques Used for Skin Tracking:**
*   **Conical Scan** (as discussed above)
*   **Monopulse** (as discussed above)
*   **Doppler Tracking:** Utilizes the Doppler shift to estimate radial velocity. This is crucial for distinguishing targets from clutter and for improving tracking accuracy, especially with CW or FM radars.

**Key Concept:** Skin tracking is about inferring target motion from the Doppler shift and angular measurements.

**Reference:** Skolnik (2017) extensively covers skin tracking principles.

---

### 5. Kalman Filtering for Tracking

**Description:** While not a radar *technique* in itself, the Kalman filter is a fundamental mathematical tool used in conjunction with radar measurements to achieve accurate and smooth target tracking. It is an optimal recursive data processing algorithm that estimates the state of a dynamic system (like a moving target) from a series of noisy measurements.

**How it Works:**
1.  **State Estimation:** The Kalman filter maintains an estimate of the target's state (e.g., position, velocity, acceleration) and its uncertainty (covariance).
2.  **Prediction:** Based on a motion model, the filter predicts the target's next state.
3.  **Update:** When new radar measurements (range, angle, Doppler) become available, the filter uses them to correct and refine the predicted state, minimizing the mean-square error.
4.  **Noise Reduction:** It effectively smooths out the noisy radar measurements, providing a more accurate and stable track.

**Advantages:**
*   **Optimal Estimation:** Provides the statistically optimal estimate of the target's state in the presence of Gaussian noise.
*   **Handles Noise and Uncertainty:** Explicitly models and accounts for noise in measurements and system dynamics.
*   **Predictive Capability:** Can predict future target positions.
*   **Efficient:** Recursive nature makes it computationally efficient for real-time implementation.

**Disadvantages:**
*   **Requires Accurate Motion Model:** Performance degrades if the assumed motion model does not match the target's actual behavior.
*   **Computational Complexity:** While efficient, implementing a full Kalman filter can still require significant processing power.

**Types of Kalman Filters:**
*   **Extended Kalman Filter (EKF):** Used for non-linear systems where linearization is applied.
*   **Unscented Kalman Filter (UKF):** Handles non-linearities more accurately than EKF.
*   **Particle Filters:** For highly non-linear systems or non-Gaussian noise.

**Reference:** Skolnik (2017) mentions the use of estimation techniques like Kalman filters in tracking. Edde (2004) also provides insights into radar data processing and tracking.

**Example:** Kalman filters are universally used in modern tracking radars for air traffic control, missile defense, and satellite tracking to process noisy radar data and provide smooth, accurate trajectories.

---

### 6. Track-While-Scan (TWS) Tracking

**Description:** Track-While-Scan is a technique where a radar performs a systematic search pattern (like a standard search radar), but it also simultaneously identifies and tracks targets detected within its scan. This allows a single radar to perform both search and tracking functions.

**How it Works:**
1.  **Scan Pattern:** The radar antenna sweeps through a predefined volume of space, searching for targets.
2.  **Detection:** As targets are detected at various points in the scan, their positions (range, angle) are recorded.
3.  **Track Initiation:** When multiple detections of the same target are made over consecutive scans, a track file is initiated for that target.
4.  **Track Maintenance:** Subsequent detections are associated with existing track files, updating the target's estimated position and velocity.
5.  **Track Prediction:** The radar predicts the target's position in the next scan to aid in detection and association.

**Advantages:**
*   **Efficient Use of Radar Resources:** Combines search and track functions.
*   **Tracks Multiple Targets:** Capable of tracking numerous targets within its search volume.

**Disadvantages:**
*   **Lower Tracking Accuracy (compared to dedicated tracking radars):** Tracking is dependent on the scan rate and the time between updates. Targets detected at the beginning of a scan might be missed by the time the radar revisits them.
*   **Potential for Track Breakdowns:** Rapidly maneuvering targets or targets obscured by clutter can lead to track loss.
*   **Detection Latency:** There's an inherent delay between the target's actual position and its reported position due to the scan process.

**Reference:** Skolnik (2017) discusses TWS in the context of search radars.

**Example:** Air surveillance radars used in air traffic control and military air defense often employ TWS.

---

### 7. Beam-Riding vs. Terminal Guidance Tracking

This distinction is more about the target's role in its own trajectory rather than a radar tracking *technique*. However, it's relevant in the context of tracking applications.

*   **Beam-Riding:** The target (e.g., a missile) actively follows the radar beam. The radar provides continuous guidance information, and the target steers itself to stay within the beam. The radar's primary role is illumination and potentially range measurement.
*   **Terminal Guidance Tracking:** The radar tracks the target, and this information is used by an interceptor (e.g., a missile) to guide itself to the target. The radar provides positional and velocity data to the interceptor's guidance system. The radar is the primary source of truth for the interceptor.

**Example:**
*   Beam-riding: Some older anti-aircraft missiles would ride the illumination beam from a radar.
*   Terminal Guidance: Modern missile systems use radar tracking for terminal guidance of interceptors.

---

### 8. Practice Questions and Answers

**Question 1:** What is the primary purpose of a tracking radar? (CO4, K2)
**Answer:** The primary purpose of a tracking radar is to continuously determine the position, velocity, and sometimes acceleration of a moving target.

**Question 2:** Briefly explain the working principle of conical scan tracking. (CO4, K2)
**Answer:** In conical scan tracking, the radar antenna beam is wobbled in a conical pattern around the target. By comparing the signal strength from different parts of the cone, an error signal is generated, which is used to steer the antenna to realign with the target.

**Question 3:** What is the main advantage of monopulse tracking over conical scan tracking? (CO4, K2)
**Answer:** The main advantage of monopulse tracking is its higher accuracy and faster response due to its ability to provide instantaneous angular error measurement, unlike conical scan which relies on sequential comparison.

**Question 4:** How does a Kalman filter contribute to effective radar tracking? (CO4, K2)
**Answer:** A Kalman filter processes noisy radar measurements to provide an optimal estimate of the target's state (position, velocity). It filters out noise and predicts future positions, leading to smoother and more accurate tracks.

**Question 5:** Differentiate between Track-While-Scan (TWS) and a dedicated tracking radar. (CO4, K2)
**Answer:** TWS performs tracking while simultaneously scanning a volume of space, allowing a single radar to search and track multiple targets, but with potentially lower individual tracking accuracy due to scan delays. A dedicated tracking radar is optimized for precise, continuous tracking of a specific target, often by dedicating its beam to that target.

**Question 6:** A radar detects a target at a range of 10 km. The transmitted pulse takes 66.7 $\mu$s to reach the target and return. Calculate the range of the target. (CO3, K3)
**Answer:**
Time for round trip = 66.7 $\mu$s
Time for one way trip = 66.7 $\mu$s / 2 = 33.35 $\mu$s
Speed of light (c) $\approx$ 3 x 10^8 m/s
Range (R) = Speed x Time
R = (3 x 10^8 m/s) * (33.35 x 10^-6 s)
R = 10,005 meters $\approx$ 10 km.

**Question 7 (Conceptual):** Imagine a radar tracking a target. If the radar antenna is perfectly aligned with the target's direction, what would be the output of the difference channels in a monopulse system? (CO4, K3)
**Answer:** If the radar antenna is perfectly aligned with the target's direction (on boresight), the signals received by the opposing beams would be identical. Therefore, the difference between them ($\Delta_a$ and $\Delta_e$) would be zero. Consequently, the error signals ($E_a = \Delta_a / \Sigma$ and $E_e = \Delta_e / \Sigma$) would also be zero.

---

### 9. Important Points to Remember

*   Tracking radars are specialized for continuous target monitoring.
*   Key tracked parameters are range, azimuth, elevation, and radial velocity.
*   Conical scan is a simpler, older technique with inherent miss distance.
*   Monopulse offers superior accuracy by providing instantaneous angular error.
*   Kalman filters are essential for processing noisy radar data and achieving smooth tracks.
*   Track-While-Scan allows for simultaneous search and tracking but may compromise individual target accuracy.
*   The accuracy of tracking depends on the radar's ability to precisely measure range, angle, and Doppler.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### 10. References

*   Pratt, T., & Allnutt, J. (2021). *Satellite Communications* (3rd ed.). Wiley. (While focusing on satellite comms, the foundational principles of signal processing and antenna pointing might be broadly relevant).
*   Skolnik, M. I. (2017). *Introduction to Radar Systems* (2nd ed.). Tata McGraw-Hill. (Primary reference for radar tracking techniques).
*   Edde, B. (2004). *Radar: Principles, Technology, Applications*. Pearson. (Provides practical insights into radar systems).
*   Kinsley, S., & Quegan, S. (1999). *Understanding Radar Systems*. John Wiley & Sons. (Offers a comprehensive understanding of radar principles).

---