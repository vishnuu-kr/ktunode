---
title: "Velocity distribution in open channels"
subject: "OPEN CHANNEL HYDRAULICS"
module: "Module 1: Open channel flow"
branch: "Civil Engineering"
semester: 5
topicId: "689f15cd56b5e963ba810ea8"
status: "completed"
scrapedAt: "2026-05-20T18:49:47.354Z"
---
# OPEN CHANNEL HYDRAULICS

## Module 1: Open Channel Flow

### Topic: Velocity Distribution in Open Channels

---

### Learning Outcomes:

*   **Understand the non-uniform nature of velocity distribution:** Recognize that velocity in an open channel is not constant across the flow cross-section.
*   **Identify factors influencing velocity distribution:** Explain how geometry, surface conditions, and flow characteristics affect velocity profiles.
*   **Describe typical velocity distributions:** Illustrate and explain common velocity profiles observed in different open channel scenarios.
*   **Apply methods for determining average velocity:** Understand and utilize techniques to calculate the representative average velocity of flow.
*   **Discuss the significance of velocity distribution:** Explain why understanding velocity distribution is crucial for hydraulic design and analysis.

---

### 1. Introduction to Velocity Distribution in Open Channels

*   **Definition:** Velocity distribution in an open channel refers to the variation of flow velocity across the entire cross-section of the channel, encompassing depth and width.
*   **Contrast with Pipe Flow:** Unlike idealized pipe flow where velocity can be assumed uniform or follows a simple parabolic profile due to symmetry, open channel flow is inherently more complex.
*   **Key Characteristics:**
    *   **Zero velocity at boundaries:** The velocity is zero at the channel bed and walls due to the no-slip condition (viscous drag).
    *   **Maximum velocity usually below the free surface:** The highest velocity is typically found slightly below the free surface, not at the surface itself.
    *   **Variation with depth and width:** Velocity changes significantly as you move from the bed upwards and from the sides towards the center.

---

### 2. Factors Influencing Velocity Distribution

The velocity distribution in an open channel is influenced by a combination of factors:

*   **Channel Geometry:**
    *   **Shape:** Rectangular, trapezoidal, circular, or irregular shapes create different boundary effects.
    *   **Roughness:** The roughness of the channel bed and walls significantly impacts the frictional resistance and thus the velocity gradient. Rougher surfaces lead to steeper velocity gradients near the boundary.
    *   **Aspect Ratio:** The ratio of channel width to depth affects the influence of side walls. A wide channel (large aspect ratio) experiences less side wall effect compared to a narrow channel.
*   **Flow Characteristics:**
    *   **Depth of Flow (y):** Velocity generally increases with depth from the bed.
    *   **Froude Number (Fr):**
        *   **Subcritical Flow (Fr < 1):** Velocity is generally more uniform across the width, with the maximum velocity closer to the surface.
        *   **Supercritical Flow (Fr > 1):** Velocity can be more complex, with possible secondary currents influencing the distribution.
    *   **Reynolds Number (Re):**
        *   **Laminar Flow (low Re):** Velocity profiles are smoother and more predictable, often parabolic.
        *   **Turbulent Flow (high Re):** Highly irregular and complex velocity distributions due to eddy formation and momentum transfer. Most open channel flows are turbulent.
*   **Free Surface Effects:**
    *   **Air Resistance:** While generally small, air resistance at the free surface can cause a slight reduction in velocity at the very surface.
    *   **Surface Tension:** Minimal impact except in very shallow flows.
    *   **Surface Irregularities:** Waves or ripples can cause localized variations.
*   **Secondary Currents:**
    *   In non-circular channels (like trapezoids), the interplay of centrifugal forces and bed friction can induce secondary currents that spiral water from the center towards the corners and then upwards towards the main flow. These currents can significantly alter the primary velocity distribution.

---

### 3. Typical Velocity Distributions

#### 3.1 Velocity Variation with Depth

*   **General Trend:** Velocity is zero at the bed and increases with depth.
*   **Maximum Velocity Location:** The maximum velocity is usually found slightly below the free surface (typically 5-25% of the depth from the surface). This is because:
    *   Friction at the bed retards flow.
    *   Air resistance at the free surface is less significant than bed friction.
    *   The free surface acts as a boundary where momentum transfer to the atmosphere occurs, but without the same shear stress as a solid boundary.
*   **Profile Shape:** In turbulent flow, the velocity profile with depth is often approximated by logarithmic or power laws.

#### 3.2 Velocity Variation with Width

*   **General Trend:** Velocity is generally lower near the side walls due to increased frictional resistance and secondary currents.
*   **Maximum Velocity Location:** The maximum velocity across the width is typically found at the center of the channel, especially in wide channels.
*   **Influence of Aspect Ratio:**
    *   **Wide Channels (Large Aspect Ratio):** Side wall effects are minimal at the center. The velocity profile across the width is relatively flat in the central region.
    *   **Narrow Channels (Small Aspect Ratio):** Side wall effects are more pronounced, and the velocity decreases significantly towards the walls. The maximum velocity might be found at the center, but the profile will be more concave across the width.

#### 3.3 Representative Velocity Profiles

*   **Rectangular Channel:**
    *   **Depth:** Logarithmic or power-law profile, zero at the bed, increasing to a maximum slightly below the surface.
    *   **Width:** Relatively flat in the center, decreasing towards the side walls.
*   **Trapezoidal Channel:**
    *   **Depth:** Similar to rectangular channels.
    *   **Width:** Velocity is lower near the side walls and also at the corners due to the combined effect of bed and side wall friction and secondary currents. The zone of maximum velocity is usually in the central part of the main flow.

**Example:** Imagine a wide, straight, smooth rectangular channel with turbulent flow. If you were to measure velocity at different points:
*   At the **bed**: Velocity = 0 m/s.
*   **10% of depth from the bed**: Velocity might be around 40% of the maximum velocity.
*   **50% of depth from the bed**: Velocity might be around 80% of the maximum velocity.
*   **90% of depth from the bed (10% below surface)**: Velocity might be close to the maximum, say 95% of it.
*   **At the free surface**: Velocity might be slightly less than the maximum due to air resistance, say 90% of it.
*   **At the center of the width, 20% below the surface**: This is likely where you'd find the absolute maximum velocity.
*   **Near a side wall**: Velocity would be significantly lower than at the center, even at the same depth.

---

### 4. Methods for Determining Average Velocity

The average velocity ($\bar{V}$) is crucial for calculating discharge ($Q$) using the formula: $Q = A \times \bar{V}$, where $A$ is the cross-sectional area of flow.

#### 4.1 Direct Measurement

*   **Current Meters:** Devices that measure local velocities at various points within the cross-section. By taking measurements at multiple points and averaging them, the mean velocity can be determined.
*   **Acoustic Doppler Velocimeters (ADV):** More advanced instruments that measure velocity in three dimensions.

#### 4.2 Empirical Formulas and Approximations

These methods simplify the calculation of average velocity based on observations and theoretical considerations.

*   **Averaging Over Depth (Single Point Measurement):**
    *   **Chezy's Formula (Implicitly assumes average velocity):** Relates average velocity to channel slope, hydraulic radius, and roughness coefficient.
    *   **Manning's Formula (Implicitly assumes average velocity):** Similar to Chezy's but uses a different roughness coefficient.
    *   **Single Point Measurement Approximations:**
        *   **0.6y Method:** Measuring velocity at 0.6 times the depth from the free surface (or 0.4y from the bed) is often a good approximation of the average velocity in *wide rectangular channels* with turbulent flow.
        *   **0.2y and 0.8y Method:** Measuring velocity at 0.2y and 0.8y from the free surface and averaging these two values can provide a more accurate estimate of the average velocity in many cases.

*   **Averaging Over Area (Multiple Point Measurements):**
    *   **Vertical Velocity Integrals:** Divide the cross-section into vertical subsections. Measure velocity at multiple points in each subsection and average them to get the average velocity for that subsection. Then, weight these averages by the area of each subsection to get the overall average.
    *   **Horizontal Velocity Integrals:** Similar to vertical integration, but dividing the cross-section into horizontal strips.
    *   **Grid Method:** Divide the entire cross-section into a grid of small rectangles. Measure the velocity at the center of each rectangle and average them all. This is the most accurate but also the most labor-intensive.

    *   **Example (Grid Method):** For a rectangular cross-section of width $W$ and depth $y$, divide it into $n$ vertical strips of width $\Delta w$ and $m$ horizontal divisions of depth $\Delta y$. Measure $V_{ij}$ at the center of each $(i, j)$ cell.
        $\bar{V} = \frac{\sum_{i=1}^{n} \sum_{j=1}^{m} V_{ij} (\Delta w \Delta y)}{A}$

*   **Velocity Distribution Based on Mean Velocity:**
    *   **Logarithmic Law of the Wall:** $V(y) = \frac{u_*}{\kappa} \ln\left(\frac{y}{y_0}\right)$ (simplified, where $y_0$ is a virtual origin) or more accurately relates to distance from the wall.
    *   **Power Law:** $V(y) = V_{max} \left(1 - \frac{y}{H}\right)^n$, where $H$ is the depth and $n$ is an exponent (e.g., 1/7 for smooth pipes, but different for open channels).

    *   **Relationship between Max and Mean Velocity:** For turbulent flow in open channels, the average velocity $\bar{V}$ is often related to the maximum velocity $V_{max}$ (found slightly below the surface) by: $\bar{V} \approx (0.8 \text{ to } 0.95) V_{max}$, depending on roughness and channel shape.

---

### 5. Significance of Velocity Distribution

Understanding velocity distribution is critical for various aspects of open channel hydraulics:

*   **Accurate Discharge Estimation:** Discharge is directly proportional to average velocity ($Q = A\bar{V}$). Incorrect estimation of average velocity leads to inaccurate discharge calculations, impacting water management, irrigation, and flood forecasting.
*   **Sediment Transport Analysis:** The competence of a flow to transport sediment depends heavily on the velocity distribution. Higher velocities near the bed are more effective at picking up and moving sediment. Local velocities at the bed are more relevant than the average velocity for initiation of sediment motion.
*   **Erosion and Scour Prediction:** Local high velocities near the bed or at bends can cause significant erosion and scour around structures (bridge piers, abutments), leading to structural instability. Understanding the velocity profile helps predict where scour is most likely to occur.
*   **Pollutant Dispersion:** The distribution of pollutants introduced into a channel is influenced by the velocity field. Understanding how flow carries and mixes substances is vital for environmental engineering.
*   **Design of Hydraulic Structures:**
    *   **Bridges:** Piers need to be designed to withstand forces from high-velocity flows and to minimize local scour.
    *   **Weirs and Gates:** The velocity distribution influences energy dissipation and forces on these structures.
    *   **Channel Lining:** Choosing appropriate lining materials (concrete, riprap) depends on the expected velocities and shear stresses at the boundary.
*   **Hydraulic Modeling and Simulation:** Accurate velocity profiles are essential for calibrating and validating computational fluid dynamics (CFD) models used for simulating open channel flows.

---

### 6. Important Points to Remember

*   **Velocity is NOT uniform:** It varies with both depth and width.
*   **Zero velocity at boundaries:** Due to the no-slip condition.
*   **Max velocity is typically below the free surface:** Due to reduced friction compared to the bed.
*   **Side wall friction and secondary currents reduce velocity near the banks.**
*   **Roughness and channel shape are major influencing factors.**
*   **Average velocity is crucial for discharge calculations.**
*   **Empirical methods (like 0.6y or 0.2y/0.8y measurements) are practical approximations for average velocity.**
*   **Accurate velocity distribution understanding is vital for sediment transport, scour, and structural design.**

---

### Practice Questions and Exercises

**Question 1:**
In a wide rectangular open channel, where is the velocity typically the highest?
a) At the free surface
b) At the channel bed
c) Slightly below the free surface
d) At the center of the channel bed

**Answer:** c) Slightly below the free surface

**Question 2:**
Explain two factors that influence the velocity distribution in the width of an open channel.

**Answer:**
1.  **Channel Width:** In wider channels, the influence of side walls is less dominant across the entire width compared to narrower channels.
2.  **Channel Roughness:** Rougher side walls create greater frictional resistance, leading to lower velocities near the walls.
3.  **Secondary Currents:** In non-circular channels, secondary flows can redistribute momentum, affecting the velocity distribution across the width.

**Question 3:**
Describe the "0.6y Method" for estimating average velocity and state its typical application.

**Answer:**
The "0.6y Method" estimates the average velocity ($\bar{V}$) in an open channel by measuring the local velocity at a depth of 0.6 times the flow depth ($y$) from the free surface (which is equivalent to 0.4y from the bed). This method is a practical approximation often used in wide, straight, rectangular channels with turbulent flow, where the velocity profile is somewhat logarithmic. It assumes that the velocity measured at this specific point is representative of the average velocity across the entire cross-section.

**Question 4:**
Why is it important to consider velocity distribution when designing bridge piers?

**Answer:**
It's important to consider velocity distribution when designing bridge piers for the following reasons:
*   **Scour Potential:** High local velocities, often found near the bed and around obstructions like piers, can lead to significant erosion (scour) of the channel bed. Understanding the velocity profile helps predict the depth and location of scour, ensuring the pier foundations are stable.
*   **Hydrodynamic Forces:** The forces exerted by the flowing water on the pier depend on the velocity. High velocities create larger drag and lift forces, which the pier must be designed to withstand.
*   **Sediment Transport:** The velocity distribution influences the ability of the flow to transport sediment. Near the bed, higher velocities can mobilize and transport sediment, potentially altering the channel morphology around the pier.

**Question 5 (Calculation):**
In a rectangular channel, velocity measurements were taken at two points in the vertical at the center of the channel:
*   At 0.2 times the depth from the surface ($V_{0.2}$) = 1.2 m/s
*   At 0.8 times the depth from the surface ($V_{0.8}$) = 1.0 m/s

Estimate the average velocity ($\bar{V}$) in this vertical using the 0.2y and 0.8y method.

**Answer:**
Using the 0.2y and 0.8y method, the average velocity is the average of these two measurements:
$\bar{V} = \frac{V_{0.2} + V_{0.8}}{2}$
$\bar{V} = \frac{1.2 \text{ m/s} + 1.0 \text{ m/s}}{2}$
$\bar{V} = \frac{2.2 \text{ m/s}}{2}$
$\bar{V} = 1.1 \text{ m/s}$
