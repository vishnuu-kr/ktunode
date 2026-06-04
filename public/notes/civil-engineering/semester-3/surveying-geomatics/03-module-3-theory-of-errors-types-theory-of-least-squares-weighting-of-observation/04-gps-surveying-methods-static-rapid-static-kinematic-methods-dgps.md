---
title: "GPS Surveying methods-Static, Rapid static, Kinematic methods – DGPS,"
subject: "SURVEYING & GEOMATICS"
module: "Module 3: Theory of Errors   : Types, theory of least squares, Weighting of observations, Most probable value, Computation of indirectly observed quantities "
branch: "Civil Engineering"
semester: 3
topicId: "689f15cb56b5e963ba81077d"
status: "completed"
scrapedAt: "2026-05-20T18:42:21.547Z"
---
# SURVEYING & GEOMATICS: Module 3 - Theory of Errors (Focus on GPS Surveying Methods)

---

## Topic: GPS Surveying Methods - Static, Rapid Static, Kinematic Methods – DGPS

**Module Context:** This topic builds upon the fundamental principles of error theory, including the theory of least squares, weighting of observations, and the concept of the most probable value. Understanding these concepts is crucial for accurately processing and interpreting GPS data.

---

## Learning Outcomes:

By the end of this section, you should be able to:

*   Understand the principles behind different GPS surveying methods: Static, Rapid Static, and Kinematic.
*   Explain the concept and application of Differential GPS (DGPS).
*   Describe the types of errors specific to GPS surveying.
*   Apply the theory of least squares to the adjustment of GPS observations.
*   Understand the concept of weighting observations in GPS data processing.
*   Determine the most probable value of coordinates derived from GPS measurements.
*   Compute indirectly observed quantities (e.g., distances, elevations) from GPS data.

---

## 1. Introduction to GPS Surveying Methods

Global Positioning System (GPS) is a satellite-based navigation system that provides accurate positioning, navigation, and timing services. In surveying, GPS is used for various applications, from establishing control points to detailed topographic mapping. The accuracy and efficiency of GPS surveying depend heavily on the chosen method.

---

## 2. Types of GPS Surveying Methods

GPS surveying methods are primarily categorized based on the duration of observation, the movement of the receiver, and the use of a reference station.

### 2.1. Static GPS Surveying

*   **Definition:** Static GPS surveying involves occupying a survey point with a GPS receiver for an extended period (typically 30 minutes to several hours, or even days).
*   **Principles:**
    *   Long observation times allow the receiver to collect a large number of satellite measurements.
    *   This extended duration helps to mitigate the effects of atmospheric delays and multipath errors.
    *   The movement of satellites relative to the receiver also helps to improve the geometric strength of the solution.
    *   Data is post-processed using specialized software.
*   **Key Features:**
    *   **High Accuracy:** Capable of achieving centimeter-level accuracy.
    *   **Stationary Receiver:** The GPS receiver must remain stationary throughout the observation period.
    *   **Baseline Length:** Suitable for long baselines (tens to thousands of kilometers).
    *   **Data Processing:** Requires sophisticated post-processing software.
*   **Applications:**
    *   Establishing high-accuracy geodetic control networks.
    *   Monumentation of boundary surveys.
    *   Precise engineering surveys.
    *   Deformation monitoring.
*   **Example:** To establish a new primary control point in a region, surveyors might set up two GPS receivers at known locations and a new location. They would then occupy all three points simultaneously for several hours, ensuring continuous tracking of a sufficient number of satellites. The collected data is later processed to derive precise coordinates for the new point.

### 2.2. Rapid Static GPS Surveying

*   **Definition:** Rapid Static GPS surveying is a variation of static surveying where observation times are significantly reduced, typically from 5 minutes to 1 hour, depending on baseline length and required accuracy.
*   **Principles:**
    *   It aims to achieve high accuracy with shorter occupation times compared to traditional static methods.
    *   Success depends on the ability to unambiguously resolve the carrier phase ambiguity.
    *   The quality of the atmospheric model used in post-processing is critical.
*   **Key Features:**
    *   **Moderate to High Accuracy:** Can achieve millimeter to centimeter-level accuracy.
    *   **Stationary Receiver:** The receiver must remain stationary.
    *   **Baseline Length:** Best suited for short to medium baselines (typically up to 15-20 km).
    *   **Reduced Occupation Time:** More efficient than static surveying for many applications.
*   **Applications:**
    *   Topographic mapping.
    *   Cadastral surveys.
    *   Construction stakeout.
    *   Establishing secondary control points.
*   **Example:** A surveyor needs to establish several points for a housing development. Instead of occupying each point for several hours, they might use rapid static methods, occupying each point for 15-30 minutes. This allows them to cover more points in a day while still achieving the required accuracy for the development.

### 2.3. Kinematic GPS Surveying

*   **Definition:** Kinematic GPS surveying involves measuring coordinates while the GPS receiver is in motion.
*   **Principles:**
    *   **Continuous Tracking:** The receiver continuously tracks satellites as it moves.
    *   **Ambiguity Resolution:** Requires rapid and continuous resolution of carrier phase ambiguities to maintain precise positioning.
    *   **Initialization:** Typically requires an initial static or rapid static observation at a known point to establish the initial phase ambiguities.
*   **Types of Kinematic Methods:**
    *   **Kinematic (or "On-the-Fly" - OTF):**
        *   **Definition:** The carrier phase ambiguities are resolved while the receiver is moving, without requiring an initial static initialization.
        *   **Principles:** Advanced algorithms and a sufficient number of satellites and observation time are needed to resolve ambiguities "on the fly."
        *   **Key Features:** Highly efficient for rapid data acquisition. Can achieve centimeter-level accuracy.
        *   **Applications:** Airborne surveys, vehicle tracking, rapid topographic mapping.
        *   **Example:** A drone equipped with a GPS receiver flies a survey route. The kinematic method allows the drone's position to be tracked accurately in real-time as it moves, enabling precise mapping of the area.
    *   **Kinematic Stop-and-Go:**
        *   **Definition:** The receiver moves between points, briefly stopping at each point to collect data.
        *   **Principles:** An initial static or rapid static session is performed at a known base station to resolve ambiguities. This solution is then transferred to the moving rover receiver. The rover stops for a short period (seconds to a few minutes) at each unknown point to collect data.
        *   **Key Features:** Faster than static methods for dense networks of points. Requires careful initialization and continuous tracking.
        *   **Applications:** Cadastral surveys, stakeout of numerous points, detailed topographic mapping.
        *   **Example:** Surveyors mapping the perimeter of a property might use kinematic stop-and-go. They would initialize at a known corner, then move along the boundary, stopping briefly at each significant feature (e.g., boundary marker, junction of a fence) to record its precise location.

---

## 3. Differential GPS (DGPS)

*   **Definition:** Differential GPS (DGPS) is a technique that enhances the accuracy of GPS positioning by using one or more fixed, precisely known reference stations.
*   **Principles:**
    *   **Reference Station:** A base station receiver is set up at a location with precisely known coordinates.
    *   **Error Correction:** The base station continuously receives GPS signals and calculates the differences between its measured positions and its known coordinates. These differences are essentially the GPS errors (e.g., atmospheric delays, satellite clock errors, ephemeris errors).
    *   **Correction Message:** The base station broadcasts these error corrections to nearby rover receivers via a radio link or other communication channel.
    *   **Rover Receiver:** The rover receiver applies these corrections to its own GPS measurements, thereby improving its positional accuracy.
*   **Key Features:**
    *   **Improved Accuracy:** Can achieve sub-meter to meter-level accuracy in real-time, depending on the correction source.
    *   **Real-time Correction:** Errors are corrected as data is collected.
    *   **Reduced Dependency on Long Observation Times:** Allows for faster and more efficient surveying compared to standalone GPS.
    *   **Distance from Base Station:** The accuracy of DGPS degrades with increasing distance from the reference station due to spatial decorrelation of errors.
*   **Applications:**
    *   Navigation (ships, aircraft).
    *   Automated guidance systems (agriculture, construction).
    *   Real-time topographic mapping.
    *   Utility surveys.
*   **Types of DGPS:**
    *   **Local Area DGPS (LADGPS):** Uses a single reference station covering a limited geographical area (e.g., a construction site).
    *   **Wide Area DGPS (WADGPS):** Uses a network of reference stations and sophisticated modeling to provide corrections over a much larger area (e.g., national or continental scale). Examples include WAAS (Wide Area Augmentation System) and EGNOS (European Geostationary Navigation Overlay Service).
*   **Example:** A construction company is laying out a foundation for a building. They set up a DGPS base station on a surveyed point at the construction site. A rover unit on the grader receives correction signals from the base station, allowing the grader to accurately follow the planned excavation lines.

---

## 4. Errors in GPS Surveying

Understanding the types of errors that affect GPS measurements is crucial for selecting appropriate surveying methods and applying correct processing techniques.

*   **Satellite Errors:**
    *   **Clock Errors:** Imperfect synchronization of atomic clocks on satellites.
    *   **Ephemeris Errors:** Small inaccuracies in the predicted satellite orbits.
*   **Receiver Errors:**
    *   **Receiver Noise:** Electronic interference within the receiver.
    *   **Multipath:** Signals bouncing off surrounding objects (buildings, ground) before reaching the antenna, causing signal path delays. This is a significant error source, especially in urban canyons or near reflective surfaces.
*   **Atmospheric Errors:**
    *   **Ionospheric Delay:** The signal travels through the ionosphere, which is a region of charged particles. The speed of the signal is affected by the electron density, causing a delay. This delay varies with time of day, solar activity, and latitude.
    *   **Tropospheric Delay:** The signal travels through the troposphere, which contains water vapor and is denser at lower altitudes. This causes a delay due to variations in refractive index.
*   **Geometric Errors:**
    *   **Satellite Geometry (DOP - Dilution of Precision):** The relative positions of the satellites in the sky. Poor satellite geometry (satellites clustered together) leads to larger errors in the computed position. High DOP values indicate poor geometry, while low DOP values indicate good geometry.
*   **Other Errors:**
    *   **Intentional Degradation (Selective Availability - SA):** Historically, SA was intentionally introduced by the US military to degrade accuracy for civilian users. SA has been turned off since May 2000.
    *   **Antenna Height Measurement Errors:** Inaccurate measurement of the antenna height above the ground mark.

---

## 5. Theory of Errors and GPS Data Processing (Connecting to Module 3 Concepts)

The principles of error theory from Module 3 are fundamental to processing GPS data effectively.

### 5.1. Theory of Least Squares

*   **Application in GPS:** The theory of least squares is the primary method used for adjusting GPS observations. It finds the most probable values of unknown quantities (like coordinates) by minimizing the sum of the squares of the differences between observed values and adjusted values (residuals).
*   **Process:**
    1.  **Mathematical Model:** Develop equations that relate the observed quantities (e.g., range measurements from satellites) to the unknown parameters (e.g., receiver's 3D coordinates).
    2.  **Observation Equations:** Express these relationships as a system of linear equations, often linearized using Taylor series expansion.
    3.  **Weighting Matrix (P):** Assign weights to each observation based on its reliability (inversely proportional to its variance).
    4.  **Least Squares Adjustment:** Solve the system of equations using matrix algebra to obtain the most probable values of the unknown parameters and their associated uncertainties.
*   **Formulaic Representation (Conceptual):**
    *   The objective is to minimize $V^T P V$, where $V$ is the vector of residuals and $P$ is the weight matrix.
    *   The normal equations are typically solved in the form: $(A^T P A) X = A^T P L$, where $A$ is the design matrix, $X$ is the vector of unknown parameters, and $L$ is the vector of observations.

### 5.2. Weighting of Observations

*   **Concept:** Not all GPS observations are equally reliable. Weighting assigns a measure of reliability to each observation. Observations with higher reliability receive higher weights.
*   **Factors Influencing Weight:**
    *   **Observation Type:** Carrier phase measurements are generally more accurate than pseudorange measurements and thus are given higher weights.
    *   **Baseline Length:** Longer baselines may have lower weights due to increased susceptibility to atmospheric errors.
    *   **Observation Time:** Longer observation times often lead to more reliable results and can be assigned higher weights.
    *   **Satellite Geometry (DOP):** Observations made during periods of poor DOP might be weighted lower.
    *   **Signal-to-Noise Ratio (SNR):** Higher SNR indicates better signal quality and can be used for weighting.
*   **Weight Calculation:** Weights are typically inversely proportional to the variance of the observation. If $\sigma_i^2$ is the variance of observation $i$, then its weight $w_i = 1/\sigma_i^2$.

### 5.3. Most Probable Value (MPV)

*   **Definition:** The most probable value of a quantity is the value that has the highest probability of being the true value, based on the available observations and their weights.
*   **In GPS:** For a set of redundant GPS measurements of the same quantity (e.g., multiple independent coordinate determinations for a point), the MPV is calculated using a weighted average.
*   **Formula:** For a series of observations $x_1, x_2, ..., x_n$ with corresponding weights $w_1, w_2, ..., w_n$:
    $$MPV = \frac{\sum_{i=1}^{n} w_i x_i}{\sum_{i=1}^{n} w_i}$$
*   **Example:** If a point's X-coordinate is determined by two different GPS sessions with different accuracies, say $X_1 = 100.500 \text{ m}$ with weight $w_1 = 2$ and $X_2 = 100.510 \text{ m}$ with weight $w_2 = 1$, the MPV would be:
    $$MPV_X = \frac{(2 \times 100.500) + (1 \times 100.510)}{2 + 1} = \frac{201.000 + 100.510}{3} = \frac{301.510}{3} \approx 100.5033 \text{ m}$$

### 5.4. Computation of Indirectly Observed Quantities

*   **Definition:** In GPS surveying, we often need to derive quantities that are not directly measured, such as distances between points or elevations. These are indirectly observed quantities.
*   **Method:** Least squares adjustment is used to first determine the most probable values of the coordinates of the points. Then, functional relationships (mathematical formulas) are used to compute the indirectly observed quantities from these coordinates.
*   **Error Propagation:** The theory of error propagation is used to estimate the accuracy (variance or standard deviation) of these indirectly observed quantities based on the accuracy of the determined coordinates and the functional relationship.
*   **Example 1: Distance Between Two Points**
    *   Let two points have adjusted coordinates $(X_1, Y_1, Z_1)$ and $(X_2, Y_2, Z_2)$.
    *   The distance $D$ between them is: $D = \sqrt{(X_2 - X_1)^2 + (Y_2 - Y_1)^2 + (Z_2 - Z_1)^2}$
    *   The variances of $X_1, Y_1, Z_1, X_2, Y_2, Z_2$ are obtained from the least squares adjustment.
    *   Using the law of propagation of variance, the variance of $D$ can be computed.
*   **Example 2: Elevation Difference**
    *   Elevation difference $\Delta H = Z_2 - Z_1$.
    *   The variance of $\Delta H$ is $\sigma_{\Delta H}^2 = \sigma_{Z_2}^2 + \sigma_{Z_1}^2$ (assuming $Z_1$ and $Z_2$ are uncorrelated).
*   **Example 3: Baseline Length and Azimuth**
    *   From the adjusted coordinates of two points, the 3D baseline vector can be computed.
    *   The magnitude of this vector is the baseline length.
    *   The direction angles (azimuth, elevation angle) of the vector can be calculated.
    *   The accuracy of these derived quantities is then propagated from the coordinate uncertainties.

---

## 6. Practice Questions and Exercises

**Question 1:**
A surveyor uses static GPS to establish a control point. They observe for 4 hours and collect data. Which of the following is the most significant error source they would be trying to mitigate with this long observation time?
a) Receiver noise
b) Satellite clock errors
c) Ionospheric and tropospheric delays
d) Multipath

**Answer 1:** c) Ionospheric and tropospheric delays. Long observation times allow for averaging out atmospheric effects.

**Question 2:**
What is the primary difference between static and rapid static GPS surveying?
a) The number of satellites used.
b) The movement of the receiver.
c) The duration of the observation period.
d) The use of a base station.

**Answer 2:** c) The duration of the observation period. Rapid static uses shorter occupation times.

**Question 3:**
Explain the role of a reference station in Differential GPS (DGPS).

**Answer 3:** A reference station is set up at a known location. It receives GPS signals, calculates the difference between its observed position and its known position (representing GPS errors), and broadcasts these corrections to rover receivers.

**Question 4:**
You have determined the X-coordinate of a point from two independent GPS sessions:
Session 1: $X_1 = 500.250 \text{ m}$, Weight $w_1 = 3$
Session 2: $X_2 = 500.265 \text{ m}$, Weight $w_2 = 1.5$

Calculate the Most Probable Value (MPV) of the X-coordinate.

**Answer 4:**
$$MPV_X = \frac{(w_1 \times X_1) + (w_2 \times X_2)}{w_1 + w_2}$$
$$MPV_X = \frac{(3 \times 500.250) + (1.5 \times 500.265)}{3 + 1.5}$$
$$MPV_X = \frac{1500.750 + 750.3975}{4.5}$$
$$MPV_X = \frac{2251.1475}{4.5} \approx 500.255 \text{ m}$$

**Question 5:**
A baseline between two points P1 and P2 is determined by GPS to have adjusted coordinates:
P1: (1000.000, 2000.000, 50.000) with variances $\sigma_X^2=0.0001$, $\sigma_Y^2=0.0001$, $\sigma_Z^2=0.0002$ (m²)
P2: (1050.000, 2020.000, 55.000) with variances $\sigma_X^2=0.0001$, $\sigma_Y^2=0.0001$, $\sigma_Z^2=0.0002$ (m²)

Calculate the length of the baseline P1P2 and the variance of this length. Assume the coordinates of P1 and P2 are uncorrelated.

**Answer 5:**
**Baseline Vector Components:**
$\Delta X = X_2 - X_1 = 1050.000 - 1000.000 = 50.000 \text{ m}$
$\Delta Y = Y_2 - Y_1 = 2020.000 - 2000.000 = 20.000 \text{ m}$
$\Delta Z = Z_2 - Z_1 = 55.000 - 50.000 = 5.000 \text{ m}$

**Baseline Length (D):**
$D = \sqrt{(\Delta X)^2 + (\Delta Y)^2 + (\Delta Z)^2}$
$D = \sqrt{(50.000)^2 + (20.000)^2 + (5.000)^2}$
$D = \sqrt{2500.00 + 400.00 + 25.00}$
$D = \sqrt{2925.00} \approx 54.083 \text{ m}$

**Variance of Baseline Length ($\sigma_D^2$):**
Using the law of propagation of variance for $D = \sqrt{(\Delta X)^2 + (\Delta Y)^2 + (\Delta Z)^2}$:
$\sigma_D^2 = (\frac{\partial D}{\partial X_1})^2 \sigma_{X1}^2 + (\frac{\partial D}{\partial Y_1})^2 \sigma_{Y1}^2 + (\frac{\partial D}{\partial Z_1})^2 \sigma_{Z1}^2 + (\frac{\partial D}{\partial X_2})^2 \sigma_{X2}^2 + (\frac{\partial D}{\partial Y_2})^2 \sigma_{Y2}^2 + (\frac{\partial D}{\partial Z_2})^2 \sigma_{Z2}^2$

More directly, for the variances of the differences:
$\sigma_{\Delta X}^2 = \sigma_{X1}^2 + \sigma_{X2}^2 = 0.0001 + 0.0001 = 0.0002 \text{ m}^2$
$\sigma_{\Delta Y}^2 = \sigma_{Y1}^2 + \sigma_{Y2}^2 = 0.0001 + 0.0001 = 0.0002 \text{ m}^2$
$\sigma_{\Delta Z}^2 = \sigma_{Z1}^2 + \sigma_{Z2}^2 = 0.0002 + 0.0002 = 0.0004 \text{ m}^2$

Let $D^2 = (\Delta X)^2 + (\Delta Y)^2 + (\Delta Z)^2$. Then $D = \sqrt{D^2}$.
$\sigma_{D^2} = (\frac{\partial D^2}{\partial \Delta X})^2 \sigma_{\Delta X}^2 + (\frac{\partial D^2}{\partial \Delta Y})^2 \sigma_{\Delta Y}^2 + (\frac{\partial D^2}{\partial \Delta Z})^2 \sigma_{\Delta Z}^2$
$\sigma_{D^2} = (2\Delta X)^2 \sigma_{\Delta X}^2 + (2\Delta Y)^2 \sigma_{\Delta Y}^2 + (2\Delta Z)^2 \sigma_{\Delta Z}^2$
$\sigma_{D^2} = (2 \times 50)^2 (0.0002) + (2 \times 20)^2 (0.0002) + (2 \times 5)^2 (0.0004)$
$\sigma_{D^2} = (100)^2 (0.0002) + (40)^2 (0.0002) + (10)^2 (0.0004)$
$\sigma_{D^2} = 10000 \times 0.0002 + 1600 \times 0.0002 + 100 \times 0.0004$
$\sigma_{D^2} = 2.0 + 0.32 + 0.04 = 2.36 \text{ m}^2$

Now, using the relation $\sigma_D \approx \frac{1}{2D} \sigma_{D^2}$:
$\sigma_D \approx \frac{1}{2 \times 54.083} (2.36)$
$\sigma_D \approx \frac{2.36}{108.166} \approx 0.0218 \text{ m}$

So, the variance of the baseline length is $\sigma_D^2 \approx (0.0218)^2 \approx 0.000475 \text{ m}^2$.

---

## 7. Important Points to Remember

*   **Method Choice:** The choice of GPS surveying method (Static, Rapid Static, Kinematic) depends on the required accuracy, baseline length, efficiency needs, and the mobility of the survey crew or equipment.
*   **Post-Processing is Key:** For high-accuracy GPS surveying (Static and Rapid Static), post-processing of raw data using specialized software is essential.
*   **DGPS for Real-time Accuracy:** DGPS is crucial for achieving accurate positioning in real-time, especially for navigation and guidance applications.
*   **Error Mitigation:** Understanding and mitigating GPS errors, particularly multipath and atmospheric delays, is critical for obtaining reliable results.
*   **Least Squares:** The theory of least squares provides a rigorous mathematical framework for adjusting GPS observations and determining the most probable values of coordinates.
*   **Weighting:** Properly weighting observations based on their reliability is fundamental to accurate least squares adjustments.
*   **Indirectly Observed Quantities:** GPS surveys often require computing derived quantities, and error propagation must be applied to assess their accuracy.
*   **Ambiguity Resolution:** Carrier phase ambiguity resolution is the core of high-accuracy GPS (static, rapid static, kinematic) and is sensitive to observation time, satellite geometry, and signal quality.

---
