---
title: "Stage-discharge curve, flow duration curve-uses and characteristics"
subject: "HYDROLOGY AND WATER RESOURCES ENGINEERING"
module: "Module 2: Runoff"
branch: "Civil Engineering"
semester: 5
topicId: "689f15cd56b5e963ba810d90"
status: "completed"
scrapedAt: "2026-05-20T18:49:16.788Z"
---
# Hydrology and Water Resources Engineering: Module 2 - Runoff

## Topic: Stage-Discharge Curve and Flow Duration Curve - Uses and Characteristics

---

### Learning Outcomes:

*   **Understand the fundamental principles and construction of a stage-discharge relationship.**
*   **Appreciate the applications and limitations of stage-discharge curves in hydrologic analysis and design.**
*   **Explain the concept of a flow duration curve and its importance in water resources management.**
*   **Analyze the characteristics of flow duration curves for different river systems.**
*   **Apply stage-discharge and flow duration curves to practical water resources engineering problems.**

---

### 1. Stage-Discharge Curve (Rating Curve)

#### 1.1. Introduction

*   **Definition:** A stage-discharge relationship, often referred to as a rating curve, is a graphical or tabular representation of the relationship between the water level (stage) at a specific cross-section of a river or stream and the corresponding discharge (flow rate) at that point.
*   **Purpose:** It is a crucial tool for estimating discharge from continuous stage measurements recorded by streamflow gauging stations.

#### 1.2. Key Concepts and Definitions

*   **Stage (or Water Level):** The vertical height of the water surface above a fixed datum (e.g., a benchmark, the riverbed, or a tide gauge). Typically measured in meters (m) or feet (ft).
*   **Discharge (or Flow Rate):** The volume of water flowing through a cross-section of the river per unit of time. Typically measured in cubic meters per second (m³/s) or cubic feet per second (cfs).
*   **Gauging Station:** A site equipped with instruments to measure streamflow characteristics, primarily the water level.
*   **Cross-section:** A vertical plane perpendicular to the direction of flow, used for measuring flow area.
*   **Datum:** A reference point used to establish elevations or water levels.

#### 1.3. Construction of a Stage-Discharge Curve

*   **Field Measurements:** The fundamental data for constructing a rating curve comes from simultaneous measurements of stage and discharge.
    *   **Stage Measurement:** Usually done using a staff gauge (marked rod) or an automated water level recorder (e.g., float-type, pressure transducer).
    *   **Discharge Measurement:** This involves:
        *   **Velocity-Area Method:** Measuring the velocity of the water and the cross-sectional area of flow.
            *   **Velocity Measurement:** Typically done using a current meter (e.g., propeller type, electromagnetic) at multiple points within the cross-section. The average velocity in each segment is calculated.
            *   **Area Measurement:** The cross-section is divided into vertical segments. The width and average depth of each segment are measured to calculate the area of flow.
            *   **Discharge Calculation:** For each segment, discharge = average velocity × segment area. The total discharge is the sum of discharges in all segments.
*   **Developing the Curve:**
    *   Multiple pairs of stage and discharge measurements are collected over a range of flow conditions (low flow, normal flow, high flow).
    *   These data points are plotted on a graph with stage on the y-axis and discharge on the x-axis.
    *   A smooth curve is then fitted to these points. The relationship is often non-linear, especially at higher flows due to changes in channel geometry and friction.
*   **Mathematical Representation:**
    *   For **subcritical flow** in a prismatic channel with a **stable cross-section** and **uniform roughness**, the relationship can often be approximated by an exponential form:
        $Q = a(h - h_0)^b$
        Where:
        *   $Q$ = Discharge
        *   $h$ = Stage
        *   $a$, $b$ = Empirical coefficients determined from measured data
        *   $h_0$ = Stage of zero discharge (often the elevation of the weir crest or the effective riverbed at the gauge)
    *   In practice, a common form used is:
        $Q = a h^b$ or $Q = a (h - c)^b$ where 'c' is the stage at zero discharge.
    *   For channels with changing cross-sections or complex flow conditions (e.g., weirs, flumes), the form might be different or piecewise functions might be used.

#### 1.4. Uses of Stage-Discharge Curves

*   **Continuous Discharge Estimation:** Once established, the rating curve allows for the continuous estimation of discharge from continuous stage recordings. This is the primary use.
*   **Hydrologic Data Analysis:**
    *   **Water Yield Studies:** Estimating the total volume of water passing a point over time.
    *   **Flood Frequency Analysis:** Determining the probability of occurrence of different flood magnitudes.
    *   **Drought Analysis:** Identifying periods of low flow.
*   **Water Resources Management:**
    *   **Reservoir Operations:** Planning releases and managing water supply based on estimated inflows.
    *   **Irrigation Scheduling:** Determining water availability for agricultural use.
    *   **Hydropower Generation:** Optimizing power production based on river flow.
*   **Hydraulic Design:**
    *   **Bridge and Culvert Design:** Ensuring structures can pass expected flood flows without excessive backwater.
    *   **Channel Improvements:** Assessing the impact of modifications on flow capacity.
*   **Forecasting:** Predicting future river flows based on current stage and meteorological forecasts.

#### 1.5. Characteristics and Limitations

*   **Specificity:** A rating curve is specific to a particular gauging station and cross-section. It is not transferable to other locations.
*   **Stability:** The curve is most reliable when the river channel at the gauging station is stable (i.e., no significant erosion or deposition).
*   **Changes in Channel:**
    *   **Aggradation (Deposition):** Sediment deposition can raise the riverbed, causing higher stages for the same discharge. The rating curve will shift upwards.
    *   **Degradation (Erosion):** Erosion of the riverbed can lower the bed, causing lower stages for the same discharge. The rating curve will shift downwards.
    *   **Vegetation Growth:** Increased vegetation in the channel can increase roughness and affect flow, altering the rating curve.
    *   **Man-made Structures:** Upstream or downstream structures (dams, levees, bridges) can alter flow conditions and affect the rating curve.
*   **Backwater Effects:**
    *   When the river flows into a larger body of water or is obstructed by a structure, the water level upstream can be higher than it would be under free-flow conditions. This backwater effect can make the stage-discharge relationship more complex and may require a different type of rating curve (e.g., one accounting for tailwater stage).
*   **Measurement Errors:** Accuracy of the rating curve depends on the accuracy of the field measurements of stage and discharge.
*   **Maintenance:** Rating curves need to be periodically re-established through new field measurements, especially after major flood events or observed channel changes.

#### 1.6. Example

*   **Scenario:** At a gauging station, the following stage-discharge measurements were recorded:
    | Stage (m) | Discharge (m³/s) |
    | :-------- | :--------------- |
    | 1.2       | 10               |
    | 1.8       | 30               |
    | 2.5       | 70               |
    | 3.0       | 110              |
*   **Task:** Plot these points and draw a smooth stage-discharge curve. If a new measurement shows a stage of 2.2 m, estimate the discharge using the curve.
*   **Solution Approach:**
    1.  Plot (10, 1.2), (30, 1.8), (70, 2.5), (110, 3.0) on a graph with Discharge on the x-axis and Stage on the y-axis.
    2.  Draw a smooth curve through these points.
    3.  Locate 2.2 m on the y-axis, move horizontally to intersect the curve, and then move vertically down to the x-axis to read the estimated discharge. (Visually, it would be somewhere between 30 and 70 m³/s, likely around 50-60 m³/s depending on the curve fit).

---

### 2. Flow Duration Curve

#### 2.1. Introduction

*   **Definition:** A flow duration curve is a graphical representation of the distribution of historical streamflow values over a period of record. It shows the percentage of time that the flow has been equal to or greater than any given discharge value.
*   **Purpose:** It provides a comprehensive view of the flow variability of a river, highlighting periods of high flow, normal flow, and low flow.

#### 2.2. Key Concepts and Definitions

*   **Flow Duration:** The percentage of time a given discharge value has been equaled or exceeded during a specific period of record.
*   **Period of Record:** The total time span for which streamflow data is available at a gauging station.
*   **Discharge Values:** The recorded daily, weekly, or monthly average discharges.
*   **Cumulative Percentage of Time:** The percentage of time the flow is *greater than or equal to* a specified discharge.

#### 2.3. Construction of a Flow Duration Curve

1.  **Data Collection:** Obtain historical discharge data (typically daily average flows) for a specific gauging station over a significant period (e.g., 20-30 years).
2.  **Rank Discharge Values:** List all the discharge values in descending order (from highest to lowest).
3.  **Calculate Flow Duration:** For each discharge value ($Q_i$), calculate its duration percentage using the formula:
    $P_i = (i / (N + 1)) \times 100$
    Where:
    *   $P_i$ = Percentage of time discharge $Q_i$ is equaled or exceeded.
    *   $i$ = The rank of the discharge value (1 for the highest flow, 2 for the second highest, etc.).
    *   $N$ = Total number of discharge measurements in the period of record.
    *   Using $(N+1)$ in the denominator provides a slightly better distribution of points, especially for small $N$.
4.  **Plot the Curve:**
    *   Plot the calculated discharge values on the x-axis (usually on a logarithmic scale for better visualization of a wide range of flows).
    *   Plot the corresponding duration percentages ($P_i$) on the y-axis (typically from 0% to 100%).
    *   The resulting curve is the flow duration curve.

#### 2.4. Uses of Flow Duration Curves

*   **Water Supply Assessment:**
    *   Determining the reliability of a water source for municipal, industrial, or agricultural use. For example, a flow duration of 90% (meaning flow is above this level 90% of the time) indicates a relatively reliable low flow.
*   **Hydropower Potential:**
    *   Estimating the firm power (available most of the time) and secondary power (available only during periods of high flow).
*   **Irrigation Planning:**
    *   Assessing the availability of water for irrigation throughout the year and for different crop water requirements.
*   **Navigation:**
    *   Determining periods when a river is navigable at a certain depth.
*   **Waste Assimilation Capacity:**
    *   Assessing the ability of a river to dilute discharged pollutants. Low flows (high duration percentages) have a lower capacity to assimilate waste.
*   **Comparison of Rivers:**
    *   Comparing the flow characteristics of different river basins. A steeper curve indicates greater flow variability.
*   **Reservoir Design and Operation:**
    *   Estimating storage requirements to meet a certain demand or to regulate flows.

#### 2.5. Characteristics of Flow Duration Curves

*   **Shape and Flow Variability:**
    *   **Steep Curve:** Indicates a highly variable flow regime with large differences between high and low flows (e.g., rivers with snowmelt or flash flood characteristics). The flow duration percentage changes rapidly with discharge.
    *   **Flat Curve:** Indicates a more uniform flow regime with less variability between high and low flows (e.g., rivers with significant baseflow from groundwater or regulated by reservoirs). The discharge changes slowly with the percentage of time.
*   **Baseflow Dominance:** A prolonged horizontal segment at low discharges indicates significant baseflow contributions, often from groundwater.
*   **Surface Runoff Dominance:** A steep decline at higher discharges indicates that most of the flow comes from direct surface runoff, which is often flashy.
*   **Regulation:** A regulated river (e.g., by a dam) will typically have a flatter flow duration curve, especially at lower flows, compared to a natural river in the same region.
*   **Storage:** For a given demand, a river with a flatter flow duration curve will require less storage capacity than a river with a steeper curve.

#### 2.6. Example

*   **Scenario:** Consider a river with the following daily average flows recorded over 10 days: 50, 150, 20, 80, 200, 60, 30, 120, 70, 40 m³/s.
*   **Task:** Construct a flow duration curve for this data.
*   **Solution Approach:**
    1.  **List Flows:** 50, 150, 20, 80, 200, 60, 30, 120, 70, 40
    2.  **Rank Flows (Descending):**
        | Rank (i) | Discharge (m³/s) |
        | :------- | :--------------- |
        | 1        | 200              |
        | 2        | 150              |
        | 3        | 120              |
        | 4        | 80               |
        | 5        | 70               |
        | 6        | 60               |
        | 7        | 50               |
        | 8        | 40               |
        | 9        | 30               |
        | 10       | 20               |
    3.  **Calculate Duration Percentage ($P_i = (i / (10 + 1)) \times 100$):**
        | Rank (i) | Discharge (m³/s) | Duration (%) |
        | :------- | :--------------- | :----------- |
        | 1        | 200              | 9.09         |
        | 2        | 150              | 18.18        |
        | 3        | 120              | 27.27        |
        | 4        | 80               | 36.36        |
        | 5        | 70               | 45.45        |
        | 6        | 60               | 54.55        |
        | 7        | 50               | 63.64        |
        | 8        | 40               | 72.73        |
        | 9        | 30               | 81.82        |
        | 10       | 20               | 90.91        |
    4.  **Plot:** Plot Discharge (x-axis) vs. Duration (%) (y-axis). The x-axis would ideally be on a log scale.
*   **Interpretation:** From this curve, you can see, for example, that the flow is expected to be above 100 m³/s for about 27% of the time. The flow is expected to be below 40 m³/s for about 73% of the time.

---

### Practice Questions and Answers

**Question 1 (Stage-Discharge Curve):**
A stream gauging station has a stable rectangular channel section. A stage-discharge rating curve is developed, and it is found that the discharge $Q$ (in m³/s) is related to the stage $h$ (in m) by the equation $Q = 5 h^{1.5}$. If the water level at the gauge is observed to be 2.5 m, what is the estimated discharge?

**Answer 1:**
Using the given rating equation $Q = 5 h^{1.5}$:
$Q = 5 \times (2.5)^{1.5}$
$Q = 5 \times (2.5 \times \sqrt{2.5})$
$Q = 5 \times (2.5 \times 1.581)$
$Q = 5 \times 3.953$
$Q \approx 19.77 \, \text{m}^3/\text{s}$

**Question 2 (Stage-Discharge Curve):**
List two factors that can cause a shift in an established stage-discharge rating curve at a river gauging station.

**Answer 2:**
Two factors that can cause a shift in a stage-discharge rating curve are:
1.  **Changes in channel morphology:** This includes sediment deposition (aggradation) which raises the riverbed and causes the curve to shift upwards (higher stage for the same discharge), or erosion (degradation) which lowers the riverbed and shifts the curve downwards (lower stage for the same discharge).
2.  **Increased channel roughness:** This can be due to growth of vegetation, accumulation of debris, or human-made obstructions in the channel, leading to higher stages for the same discharge.

**Question 3 (Flow Duration Curve):**
What does a flatter flow duration curve indicate about a river's flow characteristics compared to a steeper curve?

**Answer 3:**
A flatter flow duration curve indicates a river with **less flow variability**. This means the discharge values are more consistent over time, with smaller differences between high and low flows. Such rivers often have significant baseflow contribution (e.g., from groundwater) or are regulated by reservoirs. A steeper curve, conversely, indicates a highly variable flow regime with large fluctuations between high and low flows.

**Question 4 (Flow Duration Curve):**
A flow duration curve shows that the flow is equal to or greater than 10 m³/s for 75% of the time. What is the significance of this value for a water supply project?

**Answer 4:**
The statement that the flow is equal to or greater than 10 m³/s for 75% of the time indicates that 10 m³/s is the **75th percentile flow** (or flow duration of 75%). This means that 10 m³/s represents a relatively reliable low flow that can be sustained for a significant portion of the year. For a water supply project, this value could be considered as a sustainable abstraction rate for municipal or irrigation needs, acknowledging that during periods of lower flow (the remaining 25% of the time), the available water will be less than 10 m³/s, and storage might be required to meet demand.

---

### Important Points to Remember:

*   **Stage-Discharge Curve:**
    *   Relates water level to flow rate at a specific location.
    *   Essential for converting continuous stage measurements into continuous discharge records.
    *   Accuracy depends heavily on channel stability and the quality of field measurements.
    *   Requires periodic re-evaluation due to potential channel changes.
    *   Can be affected by backwater conditions.
*   **Flow Duration Curve:**
    *   Shows the percentage of time a given flow rate has been equaled or exceeded.
    *   Provides insights into flow variability, reliability, and potential for water resources development.
    *   A flatter curve signifies more consistent flows; a steeper curve signifies more variable flows.
    *   Crucial for assessing water supply reliability, hydropower potential, and irrigation planning.
    *   The steepness of the curve is indicative of the relative contributions of surface runoff and baseflow.

---
