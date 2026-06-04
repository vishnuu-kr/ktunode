---
title: "Runoff-components of runoff- Hydrograph analysis-Hydrograph from isolated storm-Base flow, separation"
subject: "HYDROLOGY AND WATER RESOURCES ENGINEERING"
module: "Module 2: Runoff"
branch: "Civil Engineering"
semester: 5
topicId: "689f15cd56b5e963ba810d89"
status: "completed"
scrapedAt: "2026-05-20T18:49:11.152Z"
---
# HYDROLOGY AND WATER RESOURCES ENGINEERING: Module 2: Runoff

## Topic: Runoff - Components of Runoff, Hydrograph Analysis, Hydrograph from Isolated Storm, Baseflow, and Separation

---

### **Learning Outcomes:**

Upon completion of this module, you will be able to:

*   Define and explain the components of runoff.
*   Understand the concept of a hydrograph and its significance.
*   Analyze a hydrograph from an isolated storm event.
*   Identify and explain the concept of baseflow.
*   Describe and apply methods for baseflow separation from a hydrograph.

---

## 1. Introduction to Runoff

**Runoff** is the portion of precipitation (rain, snowmelt) that flows over the land surface or through the ground and eventually enters stream channels, rivers, lakes, or oceans. It is a crucial component of the water cycle and the primary source of water for many human uses.

---

## 2. Components of Runoff

Runoff is not a single, undifferentiated flow. It comprises several distinct components that contribute to the total streamflow. These components are primarily differentiated by the pathways they take from the point of precipitation to the stream channel and the time it takes to reach the channel.

### 2.1. Surface Runoff (Overland Flow)

*   **Definition:** Water that flows over the land surface when the rate of precipitation exceeds the infiltration capacity of the soil or when the soil is saturated.
*   **Characteristics:**
    *   Fastest component of runoff.
    *   Occurs shortly after the start of precipitation.
    *   Highly dependent on rainfall intensity, duration, soil type, land cover, and slope.
    *   Can contribute to flash floods.
*   **Factors affecting surface runoff:**
    *   **Rainfall Intensity and Duration:** High intensity and prolonged rainfall will likely lead to more surface runoff.
    *   **Infiltration Capacity:** The ability of the soil to absorb water. Lower infiltration capacity leads to higher surface runoff.
    *   **Soil Moisture Content:** Saturated soils have zero infiltration capacity, leading to 100% runoff.
    *   **Land Cover/Use:** Impervious surfaces (e.g., roads, buildings) drastically reduce infiltration and increase surface runoff. Vegetation intercepts rainfall and enhances infiltration.
    *   **Slope:** Steeper slopes promote faster flow and less opportunity for infiltration.
    *   **Antecedent Soil Moisture:** Pre-existing moisture in the soil reduces the available pore space for infiltration.

### 2.2. Interflow (Subsurface Flow / Throughflow)

*   **Definition:** Water that infiltrates into the soil and moves laterally through the unsaturated or shallow saturated zones of the soil profile, eventually discharging into stream channels.
*   **Characteristics:**
    *   Slower than surface runoff but faster than groundwater flow.
    *   Occurs within the soil layers.
    *   Often contributes to the rising limb and early recession limb of a hydrograph.
    *   Can be a significant component in humid regions with permeable soils.
*   **Types:**
    *   **Shallow Interflow:** Water moving through the upper soil layers.
    *   **Subsurface Stormflow:** A more rapid movement of water through macropores or preferential flow paths within the soil.

### 2.3. Groundwater Runoff (Baseflow / Groundflow)

*   **Definition:** Water that infiltrates the soil, percolates through the unsaturated zone, and reaches the groundwater table, eventually flowing into stream channels from the saturated zone.
*   **Characteristics:**
    *   Slowest component of runoff.
    *   Maintains streamflow during periods of no precipitation (dry weather flow).
    *   Contributes to the base of the hydrograph.
    *   Provides a steady and sustained supply of water to streams.
*   **Source:** Recharge from precipitation, infiltration from rivers, or subsurface inflow from adjacent areas.

---

## 3. The Hydrograph

### 3.1. Definition

A **hydrograph** is a graphical representation of streamflow (discharge or stage) over time at a specific point in a river or stream. It shows how the flow in a river changes in response to a precipitation event or a series of events.

### 3.2. Components of a Hydrograph from an Isolated Storm Event

When analyzing a hydrograph resulting from a single, isolated storm, several distinct features can be identified:

*   **Pre-storm Flow:** The flow in the stream before the storm begins. This is typically the baseflow.
*   **Rising Limb (Concentration Curve):** The period during which the streamflow increases in response to the precipitation event. It reflects the time taken for precipitation to reach the stream channel via surface runoff, interflow, and the initial stages of baseflow response.
*   **Crest Segment:** The part of the hydrograph where the flow is at its peak or near its peak.
*   **Peak Flow:** The maximum discharge recorded during the storm event.
*   **Falling Limb (Recession Curve):** The period during which the streamflow decreases after the storm has ended. This reflects the depletion of surface runoff and interflow stored in the watershed, and the gradual release of baseflow.
*   **Lag Time:** The time interval between the centroid of the storm rainfall and the peak of the hydrograph.
*   **Time to Peak:** The time interval between the start of rainfall and the peak of the hydrograph.
*   **Baseflow:** The sustained, lower flow rate that forms the bottom of the hydrograph and is not directly caused by recent precipitation.

**Diagram of a Hydrograph:**

```
       ^ Discharge (Q)
       |
       |       /\
       |      /  \
       |     /    \  Peak Flow
       |    /      \
       |   /        \
       |  /----------\----------  Baseflow
       | /            \
       |/--------------\----------------------> Time
       Start of Storm      End of Storm
```

### 3.3. Hydrograph from an Isolated Storm

An isolated storm event typically produces a "quick response" flow superimposed on the baseflow.

*   **Direct Runoff:** The portion of the hydrograph that is a direct result of the storm event. It includes surface runoff and interflow.
*   **Baseflow:** The contribution of groundwater flow that maintains the streamflow before, during, and after the storm.

The total streamflow (Q) at any point in time can be expressed as the sum of direct runoff (Qd) and baseflow (Qb):

$Q(t) = Qd(t) + Qb(t)$

---

## 4. Baseflow and its Separation

### 4.1. Baseflow

*   **Definition:** As mentioned earlier, baseflow is the groundwater component of streamflow. It is the slow, sustained flow that replenishes streams, lakes, and rivers.
*   **Significance:**
    *   **Water Supply:** Crucial for maintaining water availability during dry periods.
    *   **Ecosystem Health:** Supports aquatic life that depends on continuous flow.
    *   **Hydropower and Irrigation:** Provides a reliable source for these activities.
    *   **Understanding Watershed Response:** Isolating baseflow helps in understanding the hydrological behavior of a watershed.

### 4.2. Baseflow Separation

**Baseflow separation** is the process of distinguishing and quantifying the baseflow component from the total streamflow hydrograph. This allows for the isolation and analysis of direct runoff. There are several graphical and analytical methods for baseflow separation.

#### **4.2.1. Graphical Methods for Baseflow Separation**

These methods involve drawing a smooth curve on the hydrograph to represent the estimated baseflow.

**a) Straight-line Method (Quick and Dirty):**

*   **Procedure:**
    1.  Identify the point where the hydrograph begins to rise significantly due to storm runoff. This is the "initial point" of direct runoff contribution.
    2.  Identify the point where the recession limb flattens out, indicating that surface runoff and interflow have largely dissipated, and only baseflow remains. This is the "terminal point" of direct runoff contribution.
    3.  Draw a straight line connecting these two points. This line is assumed to represent the baseflow.
*   **Limitations:** This method is simple but often inaccurate, especially for long-duration storms or complex watershed responses. It tends to overestimate baseflow during the initial recession.

**b) Curved-line Method (More Common Graphical Method):**

*   **Procedure:**
    1.  Identify the initial point of significant flow increase due to the storm.
    2.  Observe the recession limb of the hydrograph. Typically, the recession follows a more or less exponential decay.
    3.  Draw a smooth, concave-downward curve from the initial point on the rising limb, tangential to the early part of the recession limb and gradually merging with the natural baseflow recession. The curve should approximate the expected contribution of groundwater.
*   **Refinement:** This curve is often drawn such that the recession rate (dQ/dt) on the falling limb after separation is consistent with known recession characteristics (e.g., an exponential decay $Q_t = Q_0 e^{- \alpha t}$).

**c) Fixed-point Recession Method:**

*   **Procedure:**
    1.  Identify the initial point of direct runoff contribution on the rising limb.
    2.  Estimate the baseflow recession constant ($\alpha$), which represents the rate at which baseflow recedes. This can be done by analyzing periods of low flow.
    3.  Using the equation $Q_t = Q_0 e^{- \alpha t}$, project the baseflow from the point where direct runoff begins to merge with the baseflow.
*   **Example:** If the baseflow at the start of direct runoff is $Q_{start}$, and the recession constant is $\alpha$, the baseflow at a later time $t$ from the start of direct runoff can be estimated.

#### **4.2.2. Analytical Methods for Baseflow Separation**

These methods use mathematical models and algorithms.

**a) Eckstein Method (Exponential Recession):**

*   **Concept:** Assumes that after the cessation of direct runoff, the baseflow recedes exponentially.
*   **Formula:** $Q_t = Q_0 e^{- \alpha t}$
    *   $Q_t$: Baseflow at time $t$.
    *   $Q_0$: Baseflow at the beginning of the recession period (when direct runoff ends).
    *   $\alpha$: Recession constant (rate of recession), typically expressed in $day^{-1}$ or $hr^{-1}$.
*   **Procedure:**
    1.  Estimate $\alpha$ from the recession limb of the hydrograph during periods with no significant rainfall.
    2.  Identify the point where direct runoff begins to contribute significantly.
    3.  The baseflow after this point is calculated using the exponential decay formula, projecting from a starting baseflow value.

**b) Lyne-Hollick Method (Two-parameter Recession):**

*   **Concept:** A more sophisticated method that models baseflow as a combination of two exponential recessions, representing shallow and deep groundwater contributions.
*   **Formula:** $Q_t = Q_{t-1} \exp(-\alpha) + C \exp(-\beta \Delta t)$ (simplified representation)
    *   This method uses iterative calculations and is often implemented in software. It is generally more accurate than simpler exponential methods.

**c) Digital Filtering Techniques:**

*   **Concept:** These are computer-based methods that use digital filters (e.g., moving averages, low-pass filters) to smooth out the rapid fluctuations of direct runoff, leaving the slower-changing baseflow component.
*   **Advantages:** Objective, repeatable, and can handle complex hydrographs.

---

## 5. Practice Questions and Exercises

**Question 1:**
Define the three main components of runoff and briefly describe their characteristics and pathways.

**Answer:**
*   **Surface Runoff:** Water flowing over the land surface. Fastest component, occurs when rainfall exceeds infiltration. Highly dependent on imperviousness and slope.
*   **Interflow:** Water moving laterally through soil layers. Intermediate speed, contributes to rising and early falling limbs.
*   **Groundwater Runoff (Baseflow):** Water reaching the groundwater table and flowing to streams. Slowest component, sustains streamflow during dry periods.

**Question 2:**
What is a hydrograph, and what are the key features of a hydrograph resulting from an isolated storm event?

**Answer:**
A hydrograph is a graph of discharge versus time. Key features include the pre-storm flow, rising limb, crest segment, peak flow, falling limb, and baseflow. The rising limb reflects the arrival of direct runoff, while the falling limb shows the dissipation of this runoff and the continued release of baseflow.

**Question 3:**
Consider the following simplified hydrograph data for a small watershed after an isolated storm:

| Time (hours) | Discharge (m³/s) |
| :----------- | :--------------- |
| 0            | 2.0              |
| 1            | 2.5              |
| 2            | 3.5              |
| 3            | 5.0              |
| 4            | 7.0 (Peak)       |
| 5            | 5.5              |
| 6            | 4.0              |
| 7            | 3.0              |
| 8            | 2.5              |
| 9            | 2.2              |
| 10           | 2.1              |
| 11           | 2.05             |
| 12           | 2.0              |

Using the **straight-line method** for baseflow separation, estimate the baseflow at hour 6.

**Answer:**
*   **Initial point of direct runoff:** Let's assume the significant rise begins around hour 1 (discharge 2.5 m³/s).
*   **Terminal point of direct runoff:** The flow stabilizes around hour 11 or 12 (discharge ~2.0 m³/s). Let's pick hour 12 (2.0 m³/s) as the terminal point for simplicity with a straight line.
*   **Equation of the straight line:** The line connects (1, 2.5) and (12, 2.0).
    *   Slope (m) = (2.0 - 2.5) / (12 - 1) = -0.5 / 11 ≈ -0.04545 m³/s per hour.
    *   Equation: $Q_{baseflow} - 2.5 = -0.04545 \times (t - 1)$
    *   $Q_{baseflow} = 2.5 - 0.04545 \times (t - 1)$
*   **Baseflow at hour 6:**
    *   $Q_{baseflow}(6) = 2.5 - 0.04545 \times (6 - 1)$
    *   $Q_{baseflow}(6) = 2.5 - 0.04545 \times 5$
    *   $Q_{baseflow}(6) = 2.5 - 0.22725$
    *   $Q_{baseflow}(6) \approx 2.27$ m³/s

**Question 4:**
Describe the difference between lag time and time to peak.

**Answer:**
*   **Lag Time:** The time difference between the *centroid* of the rainfall hyetograph and the *peak* of the streamflow hydrograph. The centroid represents the average time of rainfall contribution.
*   **Time to Peak:** The time difference between the *start* of rainfall (or the start of significant rainfall) and the *peak* of the streamflow hydrograph.

**Question 5:**
Explain why baseflow separation is important in hydrological analysis.

**Answer:**
Baseflow separation is important for:
1.  **Isolating Direct Runoff:** To analyze the watershed's response to a specific storm event independently.
2.  **Water Resource Management:** To understand the sustained water availability from groundwater sources during dry periods.
3.  **Hydrological Modeling:** Many hydrological models require baseflow as an input or output.
4.  **Environmental Flow Assessment:** To ensure minimum flows are maintained for ecological health.

---

## 6. Important Points to Remember

*   Runoff is composed of surface runoff, interflow, and groundwater runoff (baseflow).
*   Each component has a different travel time and pathway to the stream.
*   A hydrograph graphically represents streamflow over time and shows the watershed's response to precipitation.
*   The rising limb of a hydrograph indicates increasing flow due to direct runoff, while the falling limb shows the dissipation of this runoff and the continued release of baseflow.
*   Baseflow is the groundwater contribution to streamflow, crucial for dry-weather flow.
*   Baseflow separation is the process of distinguishing baseflow from total streamflow, typically done using graphical or analytical methods.
*   Graphical methods (straight-line, curved-line) are visual estimations, while analytical methods use mathematical models.
*   The accuracy of baseflow separation significantly impacts the estimation of direct runoff volume and peak flow.

---
