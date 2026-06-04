---
title: "Flow in Open channel : Comparison between pipe flow and open channel flow"
subject: "FLUID MECHANICS"
module: "Module 4: Flow through Orifices: hydraulic coefficients and experimental determination of hydraulic coefficients (associated numerical problems)"
branch: "Civil Engineering"
semester: 3
topicId: "689f15ca56b5e963ba810706"
status: "completed"
scrapedAt: "2026-05-20T18:40:44.351Z"
---
# Fluid Mechanics: Module 4 - Flow through Orifices & Open Channel Flow

## Topic: Flow in Open Channels: Comparison between Pipe Flow and Open Channel Flow

This module delves into the fundamental differences and similarities between flow confined within pipes and flow occurring in open channels. Understanding these distinctions is crucial for analyzing and designing various hydraulic systems.

### Learning Outcomes:

Upon completion of this topic, you will be able to:

*   Differentiate between pipe flow and open channel flow based on their defining characteristics.
*   Identify key parameters and concepts relevant to both types of flow.
*   Understand the influence of the free surface on open channel flow behavior.
*   Recognize the implications of different flow regimes (subcritical, critical, supercritical) in open channel flow.
*   Appreciate the role of the hydraulic radius in open channel flow analysis.

---

### 1. Key Concepts and Definitions

#### 1.1 Pipe Flow

*   **Definition:** Pipe flow refers to the flow of a liquid within a closed conduit where the conduit is completely filled with the fluid. The flow is driven by a pressure difference and/or gravity.
*   **Key Characteristics:**
    *   **Completely Filled Conduit:** The fluid occupies the entire cross-section of the pipe.
    *   **No Free Surface:** The fluid surface is not exposed to the atmosphere.
    *   **Boundary Condition:** The entire internal surface of the pipe acts as a boundary, influencing the flow.
    *   **Pressure Driven:** Often driven by pressure gradients, although gravity also plays a role in inclined pipes.
    *   **Governing Equations:** Darcy-Weisbach equation is commonly used for calculating head loss due to friction.

#### 1.2 Open Channel Flow

*   **Definition:** Open channel flow is the flow of a liquid in a conduit that is only partially filled with the liquid, with the upper surface of the liquid exposed to the atmosphere.
*   **Key Characteristics:**
    *   **Partially Filled Conduit:** The fluid occupies only a portion of the cross-section.
    *   **Free Surface:** The upper surface of the liquid is in contact with the atmosphere and is free to move.
    *   **Boundary Condition:** The flow is influenced by the wetted perimeter (the portion of the conduit boundary in contact with the liquid) and the free surface.
    *   **Gravity Driven:** Primarily driven by gravity acting on the fluid's weight, causing it to flow downhill.
    *   **Governing Equations:** Manning's equation and Chezy's formula are widely used for calculating flow velocity and discharge.

---

### 2. Comparison between Pipe Flow and Open Channel Flow

| Feature                 | Pipe Flow                                 | Open Channel Flow                                |
| :---------------------- | :---------------------------------------- | :----------------------------------------------- |
| **Fluid Surface**       | Not exposed to atmosphere                 | Exposed to atmosphere (free surface)             |
| **Conduit Filling**     | Completely filled                         | Partially filled                                 |
| **Driving Force**       | Pressure gradient and gravity             | Primarily gravity                                |
| **Boundary Influence**  | Entire internal surface of the pipe       | Wetted perimeter and free surface                |
| **Area of Flow**        | Cross-sectional area of the pipe          | Area of the fluid cross-section (Varies)         |
| **Hydraulic Radius**    | $D/4$ (for a full circular pipe)          | $A/P$ (where $A$ is flow area, $P$ is wetted perimeter) |
| **Flow Depth**          | Equal to pipe diameter (if full)          | Variable, depends on discharge and channel shape |
| **Flow Velocity**       | Uniform across the cross-section (ideal)  | Varies with depth (typically higher at free surface) |
| **Flow Behavior**       | Can be laminar or turbulent               | Primarily turbulent (except for very slow flows) |
| **Governing Equations** | Darcy-Weisbach, Hagen-Poiseuille          | Manning's Equation, Chezy's Formula              |
| **Energy Considerations** | Total energy includes pressure and velocity heads | Total energy includes elevation, velocity, and free surface effects |
| **Examples**            | Water supply pipes, sewage pipes          | Rivers, canals, streams, drainage ditches        |

---

### 3. Key Parameters and Concepts in Open Channel Flow

#### 3.1 Hydraulic Radius ($R_h$ or $D$)

*   **Definition:** The hydraulic radius is defined as the ratio of the cross-sectional area of flow ($A$) to the wetted perimeter ($P$).
    *   $R_h = A / P$
*   **Significance:** It is a measure of the hydraulic efficiency of a channel. A larger hydraulic radius generally indicates more efficient flow for a given cross-sectional area, as there is less contact with the boundary for a given wetted area, reducing frictional losses.
*   **Example for a Rectangular Channel:**
    *   Consider a rectangular channel of width $B$ and flow depth $y$.
    *   Area of flow, $A = B \times y$
    *   Wetted perimeter, $P = B + 2y$
    *   Hydraulic radius, $R_h = \frac{B \times y}{B + 2y}$
*   **Example for a Circular Pipe Flow (Full):**
    *   For a full circular pipe of diameter $D$:
    *   Area of flow, $A = \frac{\pi D^2}{4}$
    *   Wetted perimeter, $P = \pi D$
    *   Hydraulic radius, $R_h = \frac{\pi D^2 / 4}{\pi D} = \frac{D}{4}$

#### 3.2 Wetted Perimeter ($P$)

*   **Definition:** The wetted perimeter is the length of the channel boundary in contact with the fluid.
*   **Significance:** It is a crucial parameter in determining frictional resistance. A larger wetted perimeter for a given flow area leads to greater frictional losses.

#### 3.3 Flow Depth ($y$)

*   **Definition:** The vertical distance from the bottom of the channel to the free surface of the liquid.
*   **Significance:** This is a defining characteristic of open channel flow and directly influences the flow area, wetted perimeter, and consequently, the flow characteristics.

#### 3.4 Flow Regimes in Open Channel Flow

Open channel flow can exist in three distinct regimes, characterized by the Froude number ($Fr$):

*   **Froude Number ($Fr$):** A dimensionless parameter that represents the ratio of inertial forces to gravitational forces.
    *   $Fr = \frac{V}{\sqrt{gy}}$
    *   Where:
        *   $V$ is the average flow velocity
        *   $g$ is the acceleration due to gravity
        *   $y$ is the flow depth

*   **Subcritical Flow ($Fr < 1$):**
    *   **Characteristics:** Slow-moving, deep flow. Gravitational forces dominate.
    *   **Wave Propagation:** Surface waves can travel upstream.
    *   **Energy:** Flow has high specific energy.
    *   **Behavior:** Changes in downstream conditions can propagate upstream and affect the flow.
    *   **Example:** Wide, shallow rivers with gentle slopes.

*   **Critical Flow ($Fr = 1$):**
    *   **Characteristics:** The flow is at a state of minimum specific energy for a given discharge.
    *   **Wave Propagation:** Surface waves are stationary relative to the channel.
    *   **Behavior:** The flow is sensitive to disturbances.
    *   **Example:** Flow over a weir or a sharp crest.

*   **Supercritical Flow ($Fr > 1$):**
    *   **Characteristics:** Fast-moving, shallow flow. Inertial forces dominate.
    *   **Wave Propagation:** Surface waves cannot travel upstream.
    *   **Energy:** Flow has low specific energy.
    *   **Behavior:** Changes in downstream conditions do not affect upstream flow.
    *   **Example:** Steeply sloped channels, flow over spillways.

#### 3.5 Specific Energy ($E$)

*   **Definition:** Specific energy is the energy per unit weight of fluid measured with respect to the channel bed. For a rectangular channel, it is given by:
    *   $E = y + \frac{V^2}{2g}$
*   **Significance:** It is a crucial concept for understanding flow transitions between subcritical and supercritical regimes. The specific energy diagram plots $E$ against $y$ and is essential for hydraulic design.

---

### 4. The Influence of the Free Surface

The presence of a free surface significantly differentiates open channel flow from pipe flow:

*   **Variable Flow Depth:** The depth of the water can change along the length of the channel due to variations in discharge, channel geometry, or slope.
*   **Atmospheric Pressure:** The free surface is subjected to atmospheric pressure, which is typically constant. This simplifies some pressure calculations compared to pipe flow where pressure can vary significantly along the pipe.
*   **Wave Phenomena:** The free surface allows for the propagation of surface waves, which are absent in pipe flow. These waves can significantly impact flow behavior, especially in transitions and around obstacles.
*   **Shear Stress at the Surface:** While the primary shear stress in pipe flow is between the fluid and the pipe wall, in open channels, there's also shear stress between the water and the air at the free surface. However, this is usually much smaller than the wall shear stress and often neglected in basic analyses.

---

### 5. Governing Equations for Open Channel Flow

*   **Manning's Equation:** A widely used empirical formula for estimating flow velocity in open channels.
    *   $V = \frac{1}{n} R_h^{2/3} S^{1/2}$
    *   Where:
        *   $V$ is the average flow velocity
        *   $n$ is Manning's roughness coefficient (a material property of the channel lining)
        *   $R_h$ is the hydraulic radius
        *   $S$ is the slope of the channel bed (or energy grade line)
*   **Chezy's Formula:** An earlier empirical formula for flow velocity.
    *   $V = C \sqrt{R_h S}$
    *   Where:
        *   $C$ is Chezy's coefficient, which is related to Manning's $n$ by $C = \frac{1}{n} R_h^{1/6}$

---

### 6. Practice Questions and Exercises

**Question 1:**

A rectangular concrete channel of width 2 meters carries water at a depth of 1 meter. The channel has a slope of 0.001. If the Manning's roughness coefficient ($n$) for concrete is 0.013, calculate:
a) The hydraulic radius ($R_h$).
b) The wetted perimeter ($P$).
c) The flow velocity ($V$) using Manning's equation.
d) The discharge ($Q$) in m³/s.

**Answer 1:**

Given:
Width ($B$) = 2 m
Flow depth ($y$) = 1 m
Slope ($S$) = 0.001
Manning's $n$ = 0.013

a) **Hydraulic Radius ($R_h$):**
   Area of flow ($A$) = $B \times y = 2 \text{ m} \times 1 \text{ m} = 2 \text{ m}^2$
   Wetted perimeter ($P$) = $B + 2y = 2 \text{ m} + 2 \times 1 \text{ m} = 4 \text{ m}$
   $R_h = \frac{A}{P} = \frac{2 \text{ m}^2}{4 \text{ m}} = 0.5 \text{ m}$

b) **Wetted Perimeter ($P$):**
   $P = 4 \text{ m}$ (calculated above)

c) **Flow Velocity ($V$):**
   Using Manning's equation: $V = \frac{1}{n} R_h^{2/3} S^{1/2}$
   $V = \frac{1}{0.013} (0.5)^{2/3} (0.001)^{1/2}$
   $V \approx \frac{1}{0.013} \times 0.630 \times 0.0316$
   $V \approx 1.21 \text{ m/s}$

d) **Discharge ($Q$):**
   $Q = A \times V = 2 \text{ m}^2 \times 1.21 \text{ m/s} = 2.42 \text{ m}^3\text{/s}$

**Question 2:**

A circular sewer pipe of diameter 1 meter is flowing full. The pipe is laid on a slope of 0.002 and has a Manning's roughness coefficient ($n$) of 0.015. Calculate the flow velocity and discharge.

**Answer 2:**

Given:
Pipe diameter ($D$) = 1 m
Pipe is flowing full.
Slope ($S$) = 0.002
Manning's $n$ = 0.015

For a full circular pipe:
Area of flow ($A$) = $\frac{\pi D^2}{4} = \frac{\pi (1 \text{ m})^2}{4} = \frac{\pi}{4} \text{ m}^2 \approx 0.785 \text{ m}^2$
Wetted perimeter ($P$) = $\pi D = \pi (1 \text{ m}) = \pi \text{ m} \approx 3.142 \text{ m}$
Hydraulic radius ($R_h$) = $\frac{D}{4} = \frac{1 \text{ m}}{4} = 0.25 \text{ m}$

Using Manning's equation: $V = \frac{1}{n} R_h^{2/3} S^{1/2}$
$V = \frac{1}{0.015} (0.25)^{2/3} (0.002)^{1/2}$
$V \approx \frac{1}{0.015} \times 0.397 \times 0.0447$
$V \approx 1.18 \text{ m/s}$

Discharge ($Q$) = $A \times V = 0.785 \text{ m}^2 \times 1.18 \text{ m/s} \approx 0.926 \text{ m}^3\text{/s}$

**Question 3:**

What is the primary difference in the driving force for flow between a pipe flow and an open channel flow?

**Answer 3:**

The primary driving force for **pipe flow** is a **pressure gradient** (often due to a pump or a difference in water levels in tanks connected by the pipe), though gravity also plays a role in inclined pipes. In contrast, the primary driving force for **open channel flow** is **gravity**, acting on the weight of the fluid which flows downhill along a sloping channel bed.

---

### 7. Important Points to Remember

*   **Free Surface is Key:** The presence of a free surface exposed to atmospheric pressure is the defining characteristic of open channel flow.
*   **Gravity Driven:** Open channel flow is predominantly driven by gravity.
*   **Hydraulic Radius:** A critical parameter for analyzing open channel flow efficiency and frictional losses. It's calculated as the ratio of flow area to wetted perimeter.
*   **Flow Regimes:** Understand the concepts of subcritical, critical, and supercritical flow, and their dependence on the Froude number.
*   **Manning's Equation:** The workhorse for open channel flow calculations, linking velocity to channel geometry, roughness, and slope.
*   **Pipe Flow is Under Pressure:** In pipe flow, the fluid is under pressure, and the entire pipe cross-section is filled.
*   **Velocity Variation:** Velocity profiles differ: typically more uniform across the pipe cross-section in pipe flow (ignoring boundary effects), but varies with depth in open channels (lower near the bed and banks, higher at the free surface).

---

This concludes the comparison between pipe flow and open channel flow. Understanding these fundamental differences is essential for applying the correct principles and equations in fluid mechanics analysis.
