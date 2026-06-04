---
title: "Capacity and LOS analysis –Single lane, Intermediate lane and two lane interurban roads- Base capacity and adjustment factors- Indo HCM (2017) Approach."
subject: "TRAFFIC ENGINEERING AND MANAGEMENT"
module: "Module 3: Capacity and Level of service (LOS): Concept"
branch: "Civil Engineering"
semester: 6
topicId: "689f15ce56b5e963ba8111e4"
status: "completed"
scrapedAt: "2026-05-20T18:56:19.803Z"
---
# TRAFFIC ENGINEERING AND MANAGEMENT: Module 3 - Capacity and Level of Service (LOS): Concept

## Topic: Capacity and LOS Analysis – Single Lane, Intermediate Lane, and Two-Lane Interurban Roads – Base Capacity and Adjustment Factors – Indo HCM (2017) Approach

### 1. Learning Outcomes

Upon successful completion of this topic, you will be able to:

*   Understand the fundamental concepts of traffic capacity and Level of Service (LOS) for different types of interurban roads.
*   Define base capacity and identify the factors that influence it for single-lane, intermediate-lane, and two-lane interurban roads.
*   Explain the purpose and application of various adjustment factors used in capacity analysis.
*   Apply the Indo HCM (2017) methodology to calculate capacity and determine LOS for these road types.
*   Analyze traffic flow conditions on interurban roads based on calculated LOS.

---

### 2. Key Concepts and Definitions

#### 2.1. Traffic Capacity

*   **Definition:** The maximum number of vehicles that can pass a given point or section of a roadway during a specified period under prevailing conditions. It is a measure of the road's ability to handle traffic.
*   **Types of Capacity:**
    *   **Theoretical Capacity:** The absolute maximum number of vehicles that could pass a point on a roadway under ideal conditions, assuming no conflicts or interactions between vehicles.
    *   **Practical Capacity:** The maximum number of vehicles that can pass a point on a roadway that can be maintained for a reasonable period under the prevailing conditions, without an excessive demand for service. This is the capacity typically used in design and analysis.
    *   **Design Capacity:** The capacity used for designing the roadway, which is generally set at a level that provides an acceptable LOS for the anticipated traffic volume.

#### 2.2. Level of Service (LOS)

*   **Definition:** A qualitative measure of the operational conditions within a traffic stream and their perceived level of service by motorists and passengers. LOS is expressed in terms of various measures of performance, such as speed, travel time, freedom to maneuver, traffic interruptions, comfort, and convenience.
*   **Categories:** LOS is typically defined by six levels, from A (best) to F (worst):
    *   **LOS A:** Free flow, minimal delays, high speeds, and good maneuverability.
    *   **LOS B:** Stable flow, slight restrictions in maneuverability, speeds slightly reduced.
    *   **LOS C:** Stable flow, but maneuverability is noticeably restricted, speeds begin to decline.
    *   **LOS D:** Approaching unstable flow, significant restrictions in maneuverability, speeds are low, and delays are noticeable.
    *   **LOS E:** Unstable flow, operations are at or near capacity, significant delays, maneuverability is very limited.
    *   **LOS F:** Forced or breakdown flow, conditions are unstable, speeds are very low, and queues are significant.
*   **Measures of Performance (MOPs):** The specific MOP used to determine LOS varies depending on the road type. For interurban roads, common MOPs include:
    *   **Average Speed:** The average speed of vehicles in the traffic stream.
    *   **Average Travel Speed (ATS):** The average speed of vehicles over a specific segment of roadway.
    *   **Average Peak Hour Factor (PHF):** A measure of how traffic flow is distributed within the peak hour.
    *   **Average Delay:** The total travel time minus the free-flow travel time.
    *   **Percent Time Spent Following (PTSF):** The percentage of time a driver spends following another vehicle.
    *   **Service Flow Rate (SFR):** The maximum flow rate that can be sustained at a specific LOS.

#### 2.3. Interurban Roads

*   **Definition:** Roads connecting urban areas, typically with higher operating speeds and different geometric characteristics compared to urban roads. They often have fewer access points and fewer signalized intersections.
*   **Types Covered:**
    *   **Single-Lane Interurban Roads:** Roads with a single lane in each direction.
    *   **Intermediate-Lane Interurban Roads:** Roads that might have features between single-lane and two-lane roads, or might refer to specific lane configurations not strictly defined as single or multi-lane. (Note: The Indo HCM 2017 approach primarily focuses on two-lane highways and may not have distinct categories for "intermediate-lane" in the same way as multi-lane facilities. This topic might implicitly refer to situations where lane widths or other factors are not ideal, impacting capacity).
    *   **Two-Lane Interurban Roads:** Roads with one lane in each direction, forming the most common type of rural and interurban highway.

---

### 3. Capacity and LOS Analysis - Indo HCM (2017) Approach

The Indo HCM (2017) provides a framework for analyzing traffic flow and determining LOS for various roadway facilities, including two-lane interurban roads. The approach involves:

1.  **Identifying the Roadway Type:** Categorizing the interurban road based on its physical characteristics and operational features (e.g., two-lane rural highway).
2.  **Determining Base Capacity:** Establishing the theoretical maximum capacity under ideal conditions.
3.  **Applying Adjustment Factors:** Modifying the base capacity to reflect prevailing non-ideal conditions.
4.  **Calculating Service Flow Rate (SFR):** Determining the maximum flow rate for a given LOS.
5.  **Calculating Density:** Estimating the number of vehicles per unit length of roadway.
6.  **Determining LOS:** Comparing the calculated density or other MOPs against the LOS criteria defined in the HCM.

#### 3.1. Base Capacity

*   **Definition:** The maximum number of vehicles that can pass a point on a roadway segment under ideal conditions. Ideal conditions are defined by specific parameters such as:
    *   **Lane Width:** 3.66 m (12 ft)
    *   **Lateral Clearance:** Adequate side-friction, no obstructions within 1.83 m (6 ft) of the travel lane.
    *   **Grade:** Level grade (0% or negligible).
    *   **Number of Lanes:** As per the road type (e.g., one lane in each direction for a two-lane road).
    *   **No Access Points:** Continuous flow, no intersections or driveways.
    *   **No Heavy Vehicles:** Only passenger cars.
    *   **No Pedestrian or Bicycle Activity:** No conflicts from non-motorized traffic.
    *   **Driver Population:** Experienced drivers.

*   **Base Capacity Values (Indo HCM 2017 for Two-Lane Highways):**
    *   **Directional Split:** The capacity is often considered for the *peak direction* of travel.
    *   **Base Capacity (Peak Direction):** For a typical two-lane rural highway, the base capacity in the peak direction is generally considered to be around **2,000 passenger cars per hour (pcph)**. This value is often adjusted for lane width and other factors to get the capacity per lane. However, the HCM typically uses a base *freight capacity* for the peak direction and then applies factors.
    *   **Important Note:** The Indo HCM (2017) may adopt or adapt values from international HCM versions. For simplicity in this context, we'll focus on the principles and commonly cited HCM values. **For two-lane highways, the capacity analysis often considers the combined capacity of both directions but is analyzed for the peak direction of flow.**

#### 3.2. Adjustment Factors

These factors are applied to the base capacity to account for deviations from ideal conditions. The general formula is:

**Adjusted Capacity = Base Capacity × Product of Adjustment Factors**

**C_adj = C_base × F_W × F_HV × F_LC × F_PR × F_BW × F_DC × ...**

Where:
*   `C_adj` = Adjusted capacity
*   `C_base` = Base capacity
*   `F_W` = Lane Width Adjustment Factor
*   `F_HV` = Heavy Vehicle Adjustment Factor
*   `F_LC` = Lateral Clearance Adjustment Factor
*   `F_PR` = Passing Rate/Zone Adjustment Factor (crucial for two-lane roads)
*   `F_BW` = Bicycle/Pedestrian Adjustment Factor (less significant for typical interurban roads but may apply)
*   `F_DC` = Grade adjustment factors (for rolling or mountainous terrain)
*   Other factors as applicable (e.g., terrain, driver population).

---

### 4. Analysis of Specific Road Types (Indo HCM 2017 Approach)

#### 4.1. Single-Lane Interurban Roads

*   **Characteristics:** Typically, one lane in each direction, or a single lane for both directions (often called "single track" or "single carriageway" rural roads). For capacity analysis, it's often assumed that there is one lane per direction, and the capacity of each lane is analyzed. However, if it's a truly single-lane road used by both directions, the capacity is much lower and the analysis is different, focusing on møte situation (meeting of vehicles).
*   **Base Capacity:** For a single lane operating in one direction, the base capacity is significantly lower than a two-lane road. A typical base capacity for a single lane might be around **1,000 to 1,500 pcph**.
*   **Key Adjustment Factors:**
    *   **Lane Width:** Narrower lanes reduce capacity.
    *   **Lateral Clearance:** Restricted clearance reduces capacity.
    *   **Passing Opportunities:** This is a critical factor for single-lane roads. The availability and length of passing zones significantly impact the flow and capacity. Lack of passing zones leads to platooning and reduced capacity.
    *   **Grade:** Significant grades reduce capacity.
    *   **Two-Way Traffic Operation:** If it's a single lane for both directions, the analysis becomes complex, considering møtes, passing maneuvers, and overall delay.

#### 4.2. Intermediate-Lane Interurban Roads

*   **Interpretation:** This category isn't as clearly defined in standard HCM methodologies. It might refer to:
    *   **Lane Widths:** Lanes slightly narrower than ideal (e.g., 3.3-3.5 m).
    *   **Marginal Lateral Clearance:** Clearances slightly less than ideal.
    *   **Specific Geometric Configurations:** Not fully multi-lane but more than a single lane.
*   **Analysis Approach:** Treat as a standard road type (likely two-lane if it has two directional lanes) but use adjustment factors to account for the "intermediate" characteristics. For example, use a lane width adjustment factor for lanes between 3.3m and 3.6m.
*   **Base Capacity:** Similar to the standard for the road type (e.g., two-lane highway).

#### 4.3. Two-Lane Interurban Roads

*   **Characteristics:** One lane in each direction.
*   **Base Capacity:** As mentioned, around **2,000 pcph** for the peak direction.
*   **Key Adjustment Factors (Indo HCM 2017 Focus):**
    *   **`F_W` (Lane Width):**
        *   3.66 m (12 ft): `F_W` = 1.00
        *   3.35 m (11 ft): `F_W` = 0.97
        *   3.05 m (10 ft): `F_W` = 0.92
        *   2.74 m (9 ft): `F_W` = 0.85
    *   **`F_HV` (Heavy Vehicle):** Accounts for the impact of trucks and buses.
        *   `F_HV` = 1 / (1 + `P_T`(`E_T` - 1) + `P_R`(`E_R` - 1))
        *   `P_T`: Proportion of trucks and buses.
        *   `P_R`: Proportion of recreational vehicles.
        *   `E_T`: Equivalent passenger-car units of a truck (typically 2.0 to 4.0 depending on grade).
        *   `E_R`: Equivalent passenger-car units of a recreational vehicle (typically 1.0 to 1.5).
        *   *Example:* On a level grade, `E_T` might be 2.0. If `P_T` = 0.10 (10% trucks), `F_HV` = 1 / (1 + 0.10*(2.0 - 1)) = 1 / 1.10 = 0.909.
    *   **`F_LC` (Lateral Clearance):** Accounts for obstructions.
        *   Obstructions within 1.83 m (6 ft) reduce capacity.
        *   For two-lane highways, the HCM provides values based on the total width of the clearance zone on both sides.
    *   **`F_PR` (Passing Rate):** **Crucial for two-lane roads.** It accounts for the fact that the capacity of the traffic stream is affected by the ability of drivers to pass slower vehicles.
        *   `F_PR` = 1 / (1 + `P_PL` * (`E_PL` - 1)) where `P_PL` is the proportion of platooned vehicles and `E_PL` is the effect of platooning.
        *   Alternatively, HCM uses **Average Passing Sight Distance (APSD)** and **Percentage of No-Passing Zones** to determine the `F_PR` factor, often through tables or graphical methods. A higher percentage of no-passing zones reduces capacity.
        *   **`F_PB` (Peak-Hour Factor):** Accounts for variations in flow within the peak hour. Typically, a value close to 1.0 for well-distributed flow, and lower for more peaked flows.
    *   **`F_DC` (Grade Adjustment):** For rolling or mountainous terrain, factors are applied based on the percentage of the segment that is uphill, downhill, and level.
    *   **`F_NP` (Non-Motorized Users):** For very low volumes of pedestrians and cyclists, a slight adjustment might be made, but generally less significant on interurban roads.

#### 4.4. Calculating Service Flow Rate (SFR) and Determining LOS

*   **Service Flow Rate (SFR):** The maximum flow rate for a specific LOS.
*   **Calculation:** SFR is determined by applying the adjustment factors to the base capacity for each LOS.
    *   **`SFR_LOS = C_base × F_W × F_HV × F_LC × F_PR × ...`**
    *   The specific `C_base` and values of adjustment factors used will depend on the LOS being analyzed. For instance, LOS C might have a slightly different `F_PR` value than LOS D.
*   **LOS Determination:**
    1.  **Calculate the actual flow rate (v)** for the segment and direction.
    2.  **Calculate the adjusted capacity (C_adj)** for the segment and direction.
    3.  **Calculate Density (D):** Density = Flow Rate / Speed (vehicles per km or mile). For two-lane roads, density is often calculated for the peak direction.
    4.  **Compare with LOS Criteria:** The LOS is determined by comparing the calculated density or other primary MOPs (like average speed or PTSF) with the thresholds defined in the Indo HCM (2017) for two-lane highways.

    **LOS Criteria for Two-Lane Highways (Indo HCM 2017 - Illustrative based on typical HCM principles):**

    | LOS | Density (veh/mi or veh/km) | Average Speed (mph or kph) | Description                                      |
    | :-- | :------------------------- | :------------------------- | :----------------------------------------------- |
    | A   | < 11                       | Free flow (e.g., > 90 kph) | Free flow                                        |
    | B   | 11 - 18                    | High (e.g., 80-90 kph)     | Stable flow, some maneuverability restrictions   |
    | C   | 18 - 26                    | Moderate (e.g., 70-80 kph) | Stable flow, noticeable maneuverability limits |
    | D   | 26 - 36                    | Low (e.g., 60-70 kph)      | Approaching unstable flow, significant delays    |
    | E   | 36 - 50                    | Very low (e.g., < 60 kph)  | Near capacity, significant delays, unstable      |
    | F   | > 50                       | Breakdown flow             | Breakdown, severe delays, queues                 |

    *   **Note:** The exact density thresholds and speed ranges may vary slightly between HCM editions and regional adaptations. The Indo HCM (2017) would provide specific tables and charts.

---

### 5. Example Calculation (Two-Lane Interurban Road)

**Scenario:** A 5 km segment of a two-lane interurban highway has the following characteristics:
*   Average lane width: 3.5 m
*   Average heavy vehicle presence: 15% trucks
*   Average lateral clearance: Obstructions present within 1.8 m on both sides.
*   Average passing sight distance: 60% of the segment has no-passing zones.
*   Peak hour directional flow rate: 1,200 vehicles per hour (vph) in the peak direction.
*   Assume level terrain.

**Objective:** Determine the LOS for the peak direction.

**Steps:**

1.  **Base Capacity:** `C_base` = 2,000 pcph (peak direction).

2.  **Calculate Adjustment Factors:**

    *   **`F_W` (Lane Width):** For 3.5 m, `F_W` ≈ 0.98 (interpolating from typical HCM values).
    *   **`F_HV` (Heavy Vehicle):** Assume `E_T` (level grade) = 2.0 for trucks. `P_T` = 0.15.
        `F_HV` = 1 / (1 + 0.15 * (2.0 - 1)) = 1 / (1 + 0.15) = 1 / 1.15 ≈ 0.870.
    *   **`F_LC` (Lateral Clearance):** For obstructions within 1.8 m on both sides, consult HCM tables for two-lane highways. Let's assume `F_LC` ≈ 0.95 (this value is usually derived from specific charts based on total clearance).
    *   **`F_PR` (Passing Rate):** With 60% no-passing zones, the ability to pass is significantly reduced. This factor is typically low, e.g., `F_PR` ≈ 0.65 (this value is obtained from specific HCM charts relating percentage of no-passing zones to `F_PR`).
    *   **`F_PB` (Peak Hour Factor):** Assume a reasonable `F_PB` = 0.90 for a typical peak hour.

3.  **Calculate Adjusted Capacity (`C_adj`):**
    `C_adj` = `C_base` × `F_W` × `F_HV` × `F_LC` × `F_PR` × `F_PB`
    `C_adj` = 2000 × 0.98 × 0.870 × 0.95 × 0.65 × 0.90
    `C_adj` ≈ 1033 pcph

4.  **Calculate Service Flow Rate (SFR) for each LOS:**
    The calculation is similar, but the definition of capacity for different LOS is implicitly handled by the factors, especially `F_PR` and the expected speed. A more direct way is to calculate density.

5.  **Calculate Density (D) for the observed flow:**
    We need to convert the observed flow (1,200 vph) to pcph and then calculate density.
    *   Flow rate in pcph (`v_pcph`) = Observed flow rate (vph) / `F_HV` (using the same `F_HV` for conversion)
    *   `v_pcph` = 1200 / 0.870 ≈ 1379 pcph.
    *   However, capacity analysis usually uses the **Adjusted Flow Rate (`v_adj`)** which is the observed flow rate adjusted for all factors except the inherent capacity of the lane.
    *   `v_adj` = Observed flow rate / (`F_W` × `F_LC` × `F_PR` × `F_PB`)
    *   `v_adj` = 1200 / (0.98 × 0.95 × 0.65 × 0.90) ≈ 1200 / 0.795 ≈ 1509 pcph (this flow rate is *higher* than the adjusted capacity, indicating potential issues).

    Let's re-evaluate using the direct approach of comparing flow to adjusted capacity for LOS. The HCM method directly compares the peak direction flow rate (`v_p`) to the adjusted service flow rate (`SF`).

    *   Adjusted Service Flow Rate (`SF`) for the segment:
        `SF` = `C_base` × `F_W` × `F_HV` × `F_LC` × `F_PR` × `F_PB`
        `SF` ≈ 1033 pcph (as calculated above).

    *   Observed Peak Direction Flow Rate (`v_p`): 1200 vph.
    *   Convert `v_p` to pcph:
        `v_p_pcph` = `v_p` / `F_HV` = 1200 / 0.870 ≈ 1379 pcph.

    Now, we need to compare `v_p_pcph` with the Service Flow Rate for each LOS. The Indo HCM (2017) tables would provide these values. Let's assume the following for illustration:

    *   SFR for LOS C ≈ 1500 pcph
    *   SFR for LOS D ≈ 1700 pcph

    Since the observed flow rate in pcph (1379 pcph) is less than the SFR for LOS C (1500 pcph) but also less than the SFR for LOS D (1700 pcph), the LOS is likely **LOS C**.

    **Alternatively, using Density:**
    If we had the average speed for LOS C (e.g., 75 kph) and LOS D (e.g., 65 kph), we could estimate density.
    Density = Flow (pcph) / Speed (kph) * 1000 (to convert kph to km).
    *   If flow is 1379 pcph and speed is 75 kph: D = 1379 / 75 ≈ 18.4 veh/km.
    *   If flow is 1379 pcph and speed is 65 kph: D = 1379 / 65 ≈ 21.2 veh/km.

    Comparing these densities to the illustrative LOS criteria:
    *   18.4 veh/km falls within the LOS C range (18-26 veh/km).
    *   21.2 veh/km also falls within the LOS C range.

    **Therefore, the LOS for this segment is likely LOS C.**

---

### 6. Important Points to Remember

*   **Capacity is a maximum:** It represents the upper limit of traffic flow under specific conditions.
*   **LOS is a qualitative measure:** It describes the user experience.
*   **Two-lane roads are complex:** Passing opportunities and the ability to maintain speed are critical for LOS.
*   **Adjustment factors are crucial:** They convert base capacity to practical capacity for real-world conditions.
*   **Indo HCM (2017):** Familiarize yourself with its specific definitions, base capacities, adjustment factor values, and LOS criteria tables.
*   **Peak Direction:** For two-lane roads, analysis is often focused on the peak direction of traffic flow.
*   **Units:** Be consistent with units (e.g., pcph, kph, meters, kilometers).

---

### 7. Practice Questions

1.  Define base capacity and list at least five conditions that constitute "ideal conditions" for traffic capacity analysis.
2.  What is the primary difference between capacity and Level of Service (LOS)?
3.  For a two-lane interurban road, what is the typical base capacity for the peak direction of travel according to HCM principles?
4.  Explain the purpose of the Heavy Vehicle Adjustment Factor (`F_HV`) and provide the formula to calculate it. What would be the value of `F_HV` if 10% of traffic consists of trucks with an equivalent passenger-car unit of 3.0 on a rolling grade?
5.  Why is the Passing Rate Adjustment Factor (`F_PR`) particularly important for the capacity analysis of two-lane interurban roads?
6.  A section of a two-lane interurban highway has a peak hour flow of 900 vehicles per hour in the peak direction. The average lane width is 3.6 m, there are no heavy vehicles, and there are no passing restrictions. If the base capacity is 2000 pcph, estimate the adjusted capacity. (Assume other factors are 1.0 for simplicity). What LOS would this flow likely correspond to if the adjusted capacity is found to be 1800 pcph?

---

### 8. Answers to Practice Questions

1.  **Base capacity** is the maximum number of vehicles that can pass a point on a roadway under ideal conditions. Ideal conditions include:
    *   Lane width of 3.66 m (12 ft).
    *   Adequate lateral clearance (no obstructions within 1.83 m).
    *   Level grade.
    *   No access points.
    *   No heavy vehicles or recreational vehicles.
    *   No pedestrian or bicycle activity.
    *   Experienced drivers.

2.  **Capacity** is a physical measure of the maximum flow a road can handle, expressed as a number of vehicles. **LOS** is a qualitative measure of operational conditions and the user's experience, described by categories (A-F) based on factors like speed, delay, and maneuverability.

3.  The typical base capacity for the peak direction of a two-lane interurban road is **2,000 passenger cars per hour (pcph)**.

4.  The `F_HV` (Heavy Vehicle Adjustment Factor) accounts for the impact of trucks, buses, and recreational vehicles on traffic flow, as they occupy more space and may travel at lower speeds than passenger cars.
    *   Formula: `F_HV` = 1 / (1 + `P_T`(`E_T` - 1) + `P_R`(`E_R` - 1))
    *   Given: `P_T` = 0.10, `E_T` = 3.0 (rolling grade). Assume `P_R` = 0 and `E_R` = 1.
    *   `F_HV` = 1 / (1 + 0.10 * (3.0 - 1)) = 1 / (1 + 0.10 * 2.0) = 1 / (1 + 0.20) = 1 / 1.20 = **0.833**.

5.  The `F_PR` (Passing Rate Adjustment Factor) is crucial for two-lane roads because the ability of vehicles to overtake slower-moving vehicles significantly impacts the overall flow, speed, and capacity of the traffic stream. Limited passing opportunities (e.g., due to long stretches of no-passing zones or heavy opposing traffic) lead to platooning and reduced capacity.

6.  *   **Base Capacity:** `C_base` = 2000 pcph.
    *   **Adjustment Factors:**
        *   `F_W` (Lane Width 3.6 m) = 1.00 (ideal).
        *   `F_HV` (No heavy vehicles) = 1.00.
        *   `F_LC` (No passing restrictions imply good lateral clearance for analysis) = 1.00.
        *   `F_PR` (No passing restrictions) = 1.00 (assuming sufficient passing opportunities).
        *   `F_PB` (Assume 1.00 for simplicity).
    *   **Adjusted Capacity:**
        `C_adj` = `C_base` × `F_W` × `F_HV` × `F_LC` × `F_PR` × `F_PB`
        `C_adj` = 2000 × 1.00 × 1.00 × 1.00 × 1.00 × 1.00 = **2000 pcph**.
    *   **LOS Analysis:**
        *   Observed flow = 900 vph.
        *   Convert to pcph: `v_p_pcph` = 900 / 1.00 = 900 pcph.
        *   The adjusted capacity is 2000 pcph.
        *   The observed flow (900 pcph) is well below the adjusted capacity (2000 pcph). Assuming typical LOS criteria for two-lane roads, a flow of 900 pcph would likely correspond to a very good LOS, such as **LOS A or LOS B**, indicating free-flow or stable flow with minimal restrictions.
