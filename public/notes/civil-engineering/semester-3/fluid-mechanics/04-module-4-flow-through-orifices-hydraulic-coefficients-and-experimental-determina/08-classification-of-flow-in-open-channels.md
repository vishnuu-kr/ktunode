---
title: "classification of flow in open channels"
subject: "FLUID MECHANICS"
module: "Module 4: Flow through Orifices: hydraulic coefficients and experimental determination of hydraulic coefficients (associated numerical problems)"
branch: "Civil Engineering"
semester: 3
topicId: "689f15ca56b5e963ba810707"
status: "completed"
scrapedAt: "2026-05-20T18:40:45.041Z"
---
It seems there might be a slight misunderstanding or a typo in your request. The topic you've provided, "classification of flow in open channels," is typically covered in a different module of Fluid Mechanics, usually related to **Open Channel Flow**, not "Flow through Orifices."

Orifices deal with the discharge of fluid through small openings in tanks or pipes. Open channels, on the other hand, are conduits where the liquid surface is exposed to atmospheric pressure, like rivers, canals, and flumes.

Therefore, I will proceed by generating comprehensive study notes for **Classification of Flow in Open Channels**, as this is the stated topic. If you intended to ask about something else related to orifices, please clarify!

---

# Fluid Mechanics: Module 4 - Flow through Orifices

**(Note: The following section addresses the provided topic "Classification of flow in open channels," which is typically part of Open Channel Flow, not Orifices. The principles of orifice flow will be addressed in a separate section if needed.)**

## Topic: Classification of Flow in Open Channels

### Learning Outcomes:

By the end of this section, you will be able to:

*   Understand the fundamental ways to classify flow in open channels.
*   Differentiate between various types of open channel flow based on their characteristics.
*   Identify the significance of these classifications for analyzing and designing open channel systems.

### 1. Key Concepts and Definitions

**Open Channel Flow:** A type of fluid flow in which the liquid surface is exposed to the atmosphere. The pressure at the free surface is atmospheric.

**Channel:** A conduit in which fluid flows with a free surface. Examples include rivers, canals, ditches, sewers, and tunnels flowing partially full.

**Cross-Section:** The shape of the channel perpendicular to the direction of flow.

**Wetted Perimeter (P):** The length of the boundary of the channel cross-section that is in contact with the fluid.

**Flow Area (A):** The cross-sectional area of the flow.

**Hydraulic Radius (R):** The ratio of the flow area to the wetted perimeter ($R = A/P$). This is a crucial parameter in open channel flow calculations.

**Mean Velocity (V):** The average velocity of the fluid across the flow area.

**Discharge (Q):** The volume of fluid flowing per unit time, calculated as $Q = A \times V$.

### 2. Classification of Open Channel Flow

Open channel flow can be classified based on several criteria:

#### 2.1. Based on Variation of Flow Depth with Space

This classification focuses on how the depth of the water changes along the length of the channel.

*   **Uniform Flow:**
    *   **Definition:** The flow characteristics (depth, velocity, cross-sectional area, discharge) remain constant along the length of the channel. The water surface and the channel bed are parallel.
    *   **Characteristics:** The slope of the energy grade line (EGL), hydraulic grade line (HGL), and the channel bed are all equal.
    *   **Condition for Uniform Flow:** Manning's equation or Chezy's equation predicts constant velocity and depth for a given slope and roughness.
    *   **Example:** A long, straight, and uniformly prismatic canal with a constant flow rate and no obstructions.

*   **Non-Uniform Flow (Varied Flow):**
    *   **Definition:** The flow characteristics change along the length of the channel. The depth of the water varies.
    *   **Sub-classifications of Non-Uniform Flow:**

        *   **a) Gradually Varied Flow (GVF):**
            *   **Definition:** The depth of flow changes gradually along the length of the channel. The velocity and slope of the water surface are also changing, but at a slow rate. The flow is essentially one-dimensional.
            *   **Characteristics:** The rate of change of depth with respect to distance ($dy/dx$) is small. The EGL slope is approximately equal to the bed slope.
            *   **Causes:** Changes in channel slope, cross-section, or the presence of obstructions that do not cause a rapid change in depth.
            *   **Example:** The flow profile upstream of a weir, downstream of a sluice gate, or in a channel approaching a reservoir.

        *   **b) Rapidly Varied Flow (RVF):**
            *   **Definition:** The depth of flow changes rapidly over a short distance. Significant changes in velocity, depth, and energy occur over a short length.
            *   **Characteristics:** The rate of change of depth with respect to distance ($dy/dx$) is large. The EGL slope is significantly different from the bed slope. Often involves significant turbulence and energy dissipation.
            *   **Causes:** Structures like spillways, sluice gates, drops, and hydraulic jumps.
            *   **Example:** The flow over a spillway or the phenomenon of a hydraulic jump.

#### 2.2. Based on Variation of Flow Depth with Time

This classification considers whether the flow conditions change over time at a specific location in the channel.

*   **Steady Flow:**
    *   **Definition:** The flow characteristics (depth, velocity, discharge) at any point in the channel remain constant with time.
    *   **Example:** Uniform flow is always steady flow. In non-uniform flow, if the depth and velocity at a particular point don't change with time, it's steady non-uniform flow.

*   **Unsteady Flow (Unsteady Flow):**
    *   **Definition:** The flow characteristics at any point in the channel change with time.
    *   **Sub-classifications of Unsteady Flow:**

        *   **a) Gradually Varied Unsteady Flow:**
            *   **Definition:** The depth and velocity at a point change gradually with time.
            *   **Example:** The rising or falling water level in a river due to rainfall or dam operation.

        *   **b) Rapidly Varied Unsteady Flow:**
            *   **Definition:** The depth and velocity at a point change rapidly with time.
            *   **Example:** The passage of a flood wave or a surge in a channel.

#### 2.3. Based on Flow Velocity (Froude Number)

This classification is crucial for understanding the nature of wave propagation and the behavior of flow, especially in open channels. The Froude number ($Fr$) is a dimensionless parameter defined as the ratio of the flow velocity ($V$) to the wave celerity ($c$) of a small surface disturbance.

*   **Wave Celerity ($c$):** The speed at which a small gravity wave propagates in shallow water. For a channel of depth $y$, $c = \sqrt{gy}$, where $g$ is the acceleration due to gravity.

*   **Froude Number ($Fr$):**
    $$Fr = \frac{V}{c} = \frac{V}{\sqrt{gy}}$$

    Where:
    *   $V$ is the mean flow velocity.
    *   $g$ is the acceleration due to gravity.
    *   $y$ is the hydraulic depth (for rectangular channels, $y$ is the flow depth; for other shapes, $y = A/T$, where $T$ is the top width of the water surface).

*   **Classification based on Froude Number:**

    *   **a) Subcritical Flow (Tranquil Flow):**
        *   **Condition:** $Fr < 1$
        *   **Characteristics:** The flow velocity is less than the wave celerity ($V < c$). Disturbances from downstream can propagate upstream. The flow is typically shallow and wide. Energy dissipation is relatively low. Downstream conditions influence upstream flow.
        *   **Example:** Slow-moving rivers, wide canals, flow in a channel with a mild slope.

    *   **b) Critical Flow:**
        *   **Condition:** $Fr = 1$
        *   **Characteristics:** The flow velocity is equal to the wave celerity ($V = c$). This is a state of minimum specific energy for a given discharge. Disturbances can propagate upstream only infinitesimally.
        *   **Significance:** Often occurs at transitions in channels, such as at the crest of a broad-crested weir or at the entrance to a steep slope.

    *   **c) Supercritical Flow (Rapid Flow):**
        *   **Condition:** $Fr > 1$
        *   **Characteristics:** The flow velocity is greater than the wave celerity ($V > c$). Disturbances from downstream cannot propagate upstream. The flow is typically deep and narrow. Energy dissipation can be high, especially if hydraulic jumps occur. Upstream conditions do not influence downstream flow.
        *   **Example:** Flow over steep slopes, flow downstream of a sluice gate or spillway before a hydraulic jump.

#### 2.4. Based on Channel Geometry

*   **Prismatic Channel:**
    *   **Definition:** A channel with constant cross-sectional shape, constant bottom slope, and constant roughness along its length.
    *   **Example:** Engineered canals and flumes.

*   **Non-Prismatic Channel:**
    *   **Definition:** A channel where at least one of the geometric properties (cross-sectional shape, bottom slope) changes along the length.
    *   **Example:** Natural river channels, channels with changing cross-sections due to erosion or construction.

### 3. Significance of Classifications

Understanding these classifications is crucial for:

*   **Hydraulic Design:** Selecting appropriate design methods and equations for channels and hydraulic structures.
*   **Predicting Flow Behavior:** Anticipating how changes in the channel or flow rate will affect water levels and velocities.
*   **Analyzing Energy Losses:** Estimating energy dissipation, especially in supercritical and rapidly varied flow conditions.
*   **Understanding Flood Routing:** Analyzing the movement of flood waves through river systems.
*   **Designing Hydraulic Structures:** Properly designing elements like spillways, gates, and transitions where flow conditions change.

### 4. Practice Questions and Exercises

**Question 1:**
Define uniform flow and state the condition under which it occurs in an open channel.

**Answer:**
Uniform flow is defined as flow where the flow depth, velocity, cross-sectional area, and discharge remain constant along the length of the channel. It occurs when the energy grade line, hydraulic grade line, and the channel bed are all parallel, meaning the slope of the water surface is equal to the slope of the channel bed.

**Question 2:**
Distinguish between gradually varied flow and rapidly varied flow, providing an example for each.

**Answer:**
*   **Gradually Varied Flow (GVF):** The depth of flow changes gradually along the channel. The rate of change of depth ($dy/dx$) is small, and the EGL slope is approximately equal to the bed slope. Example: The flow profile upstream of a weir.
*   **Rapidly Varied Flow (RVF):** The depth of flow changes rapidly over a short distance. The rate of change of depth ($dy/dx$) is large, and significant energy changes occur. Example: Flow over a spillway or a hydraulic jump.

**Question 3:**
Calculate the Froude number for flow in a rectangular channel of width 5 m and depth 2 m. The average flow velocity is 3 m/s. Determine whether the flow is subcritical, critical, or supercritical.

**Given:**
Width ($B$) = 5 m
Depth ($y$) = 2 m
Velocity ($V$) = 3 m/s
$g$ = 9.81 m/s²

**Solution:**
For a rectangular channel, the hydraulic depth ($y_h$) is equal to the flow depth ($y$).
$y_h = y = 2$ m

Froude Number ($Fr$) = $V / \sqrt{gy_h}$
$Fr = 3 / \sqrt{9.81 \times 2}$
$Fr = 3 / \sqrt{19.62}$
$Fr = 3 / 4.429$
$Fr \approx 0.677$

Since $Fr < 1$, the flow is **subcritical**.

**Question 4:**
Under what condition is flow classified as unsteady? Give an example of unsteady flow.

**Answer:**
Flow is classified as unsteady when the flow characteristics (such as depth, velocity, or discharge) at a particular point in the channel change with time. An example of unsteady flow is the rising water level in a river during a flood event.

### 5. Important Points to Remember

*   **Uniform flow** implies constant depth and velocity along the channel length.
*   **Non-uniform flow** involves changes in depth and velocity along the channel.
*   **Gradually varied flow** has slow changes in depth, while **rapidly varied flow** has abrupt changes.
*   **Steady flow** means conditions don't change with time at a point; **unsteady flow** means they do.
*   The **Froude number** is critical for classifying flow regimes ($Fr < 1$ = subcritical, $Fr = 1$ = critical, $Fr > 1$ = supercritical).
*   **Hydraulic depth** is important for calculating the Froude number, especially in non-rectangular channels.
*   Understanding these classifications is fundamental to hydraulic engineering and the design of water conveyance systems.

---

## Module 4: Flow through Orifices: Hydraulic Coefficients and Experimental Determination

**(Note: The following section directly addresses the original request for Module 4: Flow through Orifices, which is distinct from the "Classification of flow in open channels" topic. This is provided to ensure all aspects of your request are covered.)**

### Learning Outcomes:

By the end of this section, you will be able to:

*   Understand the concept of flow through orifices.
*   Define and explain the different hydraulic coefficients: coefficient of velocity ($C_v$), coefficient of discharge ($C_d$), and coefficient of contraction ($C_c$).
*   Explain the relationship between these coefficients.
*   Understand the methods for experimentally determining these coefficients.
*   Solve numerical problems involving orifice flow using these coefficients.

### 1. Flow Through Orifices

An **orifice** is a small opening in a tank or vessel through which fluid flows out. The orifice is considered small if the head of fluid producing the discharge is large compared to the dimensions of the orifice.

When fluid flows through an orifice, the stream of fluid emerges as a coherent jet. Due to the influence of viscosity and the shape of the orifice, the cross-sectional area of the jet is usually smaller than the actual area of the orifice. This phenomenon is known as **vena contracta**.

### 2. Hydraulic Coefficients

These coefficients are empirical factors used to account for the deviations of actual flow through an orifice from theoretical ideal flow.

*   **Coefficient of Velocity ($C_v$):**
    *   **Definition:** The ratio of the actual velocity of the jet at vena contracta to the theoretical velocity of the jet.
    *   **Formula:** $C_v = \frac{\text{Actual velocity at vena contracta}}{\text{Theoretical velocity}}$
    *   **Theoretical Velocity ($V_{th}$):** Calculated using Torricelli's theorem, which states that the theoretical velocity of efflux of a fluid through an orifice is equal to the velocity attained by a body falling freely under gravity through a height equal to the head of the fluid above the orifice.
        $$V_{th} = \sqrt{2gh}$$
        Where:
        *   $g$ is the acceleration due to gravity.
        *   $h$ is the head of fluid above the center of the orifice.
    *   **Actual Velocity ($V_{act}$):** $V_{act} = C_v \sqrt{2gh}$
    *   **Typical Value:** $C_v$ is usually between 0.95 and 0.99. It is generally slightly less than 1 due to friction.

*   **Coefficient of Contraction ($C_c$):**
    *   **Definition:** The ratio of the actual area of the jet at vena contracta to the actual area of the orifice.
    *   **Formula:** $C_c = \frac{\text{Actual area of jet at vena contracta}}{\text{Actual area of orifice}}$
    *   **Area of Orifice ($a$):** The geometric area of the orifice.
    *   **Area of Jet at Vena Contracta ($a_{vc}$):** $a_{vc} = C_c \times a$
    *   **Typical Value:** $C_c$ is usually between 0.61 and 0.65 for sharp-edged orifices. It is less than 1 because the fluid streams converge before reaching the vena contracta, and viscosity causes some spread.

*   **Coefficient of Discharge ($C_d$):**
    *   **Definition:** The ratio of the actual discharge through the orifice to the theoretical discharge.
    *   **Formula:** $C_d = \frac{\text{Actual discharge}}{\text{Theoretical discharge}}$
    *   **Theoretical Discharge ($Q_{th}$):** Calculated as the product of the theoretical velocity and the area of the orifice.
        $$Q_{th} = a \times V_{th} = a \sqrt{2gh}$$
    *   **Actual Discharge ($Q_{act}$):**
        $$Q_{act} = a_{vc} \times V_{act}$$
        Substituting the expressions for $a_{vc}$ and $V_{act}$:
        $$Q_{act} = (C_c \times a) \times (C_v \sqrt{2gh})$$
        $$Q_{act} = (C_c \times C_v) \times (a \sqrt{2gh})$$
        $$Q_{act} = C_d \times a \sqrt{2gh}$$
    *   **Relationship:** From the derivation, it's clear that $C_d = C_c \times C_v$.
    *   **Typical Value:** For sharp-edged orifices, $C_d$ is usually between 0.60 and 0.62.

### 3. Relationship Between Coefficients

The fundamental relationship is:
$$C_d = C_c \times C_v$$

This relationship arises directly from the definitions of the coefficients and the equations for actual and theoretical discharge.

### 4. Experimental Determination of Hydraulic Coefficients

Hydraulic coefficients are determined experimentally because theoretical calculations are often insufficient due to factors like viscosity, surface tension, and the precise shape of the orifice.

**Common Methods:**

*   **Method 1: Direct Measurement of Discharge and Velocity**
    1.  **Set up:** A tank with an orifice at one end and a measuring tank or calibrated container to collect the discharged fluid. A pitot tube or current meter can be used to measure the actual velocity of the jet at the vena contracta.
    2.  **Procedure:**
        *   Maintain a constant head ($h$) of the fluid above the orifice.
        *   Measure the head ($h$) accurately.
        *   Measure the area of the orifice ($a$).
        *   Measure the actual velocity ($V_{act}$) of the jet at the vena contracta using a pitot tube placed at the point of maximum velocity.
        *   Measure the area of the jet at the vena contracta ($a_{vc}$) using calipers or by tracing the jet profile.
        *   Measure the time taken to collect a specific volume of discharge ($Q_{act}$) in the measuring tank.
    3.  **Calculations:**
        *   **$C_v = V_{act} / \sqrt{2gh}$**
        *   **$C_c = a_{vc} / a$**
        *   **$C_d = Q_{act} / (a \sqrt{2gh})$**
        *   **Verify:** Check if $C_d \approx C_c \times C_v$.

*   **Method 2: Using a Collecting Tank (More Common)**
    1.  **Set up:** Same as Method 1, but the focus is on measuring discharge accurately.
    2.  **Procedure:**
        *   Maintain a constant head ($h$) above the orifice.
        *   Measure the head ($h$).
        *   Measure the area of the orifice ($a$).
        *   Measure the time ($t$) taken to fill a measuring tank of known volume ($V_{collect}$) with the discharged fluid.
    3.  **Calculations:**
        *   **Actual Discharge ($Q_{act}$):** $Q_{act} = V_{collect} / t$
        *   **Theoretical Discharge ($Q_{th}$):** $Q_{th} = a \sqrt{2gh}$
        *   **$C_d = Q_{act} / Q_{th} = (V_{collect} / t) / (a \sqrt{2gh})$**
        *   **To find $C_c$ and $C_v$ separately using this method, one would typically use an apparatus that allows for the measurement of jet trajectory.** If the horizontal range ($x$) and the vertical fall ($y$) of the jet from the vena contracta are measured, then:
            *   Horizontal velocity (which is the actual velocity at vena contracta) $V_{act} = x / t_{fall}$
            *   Vertical distance fallen $y = (1/2) g t_{fall}^2$ => $t_{fall} = \sqrt{2y/g}$
            *   $V_{act} = x / \sqrt{2y/g} = \sqrt{gx^2 / (2y)}$
            *   Then, $C_v = V_{act} / \sqrt{2gh}$
            *   And $C_c = C_d / C_v$.

**Important Note on Experimental Setup:**
*   The head ($h$) must be measured from the center of the orifice.
*   The orifice should be sharp-edged and well-rounded at the inlet to minimize viscous effects and ensure a clear vena contracta.
*   For precise measurements, the tank supplying the fluid should be large enough so that the water level drop during the experiment is negligible, or the head should be replenished to keep it constant.

### 5. Numerical Problems and Solutions

**Problem 1:**
A sharp-edged orifice of diameter 2 cm is fitted to a tank. The head of water over the orifice is 5 m. The coefficient of discharge ($C_d$) is 0.62. Calculate the actual discharge through the orifice.

**Given:**
Diameter of orifice ($D$) = 2 cm = 0.02 m
Head ($h$) = 5 m
$C_d$ = 0.62
$g$ = 9.81 m/s²

**Solution:**
Area of orifice ($a$) = $\pi \times (D/2)^2 = \pi \times (0.02/2)^2 = \pi \times (0.01)^2 = 0.00031416 \text{ m}^2$

Theoretical discharge ($Q_{th}$) = $a \sqrt{2gh}$
$Q_{th} = 0.00031416 \times \sqrt{2 \times 9.81 \times 5}$
$Q_{th} = 0.00031416 \times \sqrt{98.1}$
$Q_{th} = 0.00031416 \times 9.9045$
$Q_{th} \approx 0.003112 \text{ m}^3/\text{s}$

Actual discharge ($Q_{act}$) = $C_d \times Q_{th}$
$Q_{act} = 0.62 \times 0.003112$
$Q_{act} \approx 0.001930 \text{ m}^3/\text{s}$

**Answer:** The actual discharge through the orifice is approximately $0.001930 \text{ m}^3/\text{s}$.

**Problem 2:**
Water flows through a circular orifice of diameter 5 cm under a head of 10 m. The actual discharge measured is 0.015 m³/s. Determine the coefficient of discharge and the coefficient of velocity if the coefficient of contraction is 0.63.

**Given:**
Diameter of orifice ($D$) = 5 cm = 0.05 m
Head ($h$) = 10 m
Actual discharge ($Q_{act}$) = 0.015 m³/s
Coefficient of contraction ($C_c$) = 0.63
$g$ = 9.81 m/s²

**Solution:**
Area of orifice ($a$) = $\pi \times (D/2)^2 = \pi \times (0.05/2)^2 = \pi \times (0.025)^2 = 0.0019635 \text{ m}^2$

**Coefficient of Discharge ($C_d$):**
$C_d = Q_{act} / (a \sqrt{2gh})$
$C_d = 0.015 / (0.0019635 \times \sqrt{2 \times 9.81 \times 10})$
$C_d = 0.015 / (0.0019635 \times \sqrt{196.2})$
$C_d = 0.015 / (0.0019635 \times 14.007)$
$C_d = 0.015 / 0.027502$
$C_d \approx 0.545$

**Coefficient of Velocity ($C_v$):**
We know that $C_d = C_c \times C_v$.
Therefore, $C_v = C_d / C_c$
$C_v = 0.545 / 0.63$
$C_v \approx 0.865$

**Answer:** The coefficient of discharge is approximately 0.545, and the coefficient of velocity is approximately 0.865.

**Problem 3:**
For a sharp-edged orifice, the coefficient of velocity is 0.98. If the coefficient of contraction is 0.60, calculate the coefficient of discharge. Also, calculate the actual velocity and actual discharge if the head is 8 m and the orifice area is 5 cm².

**Given:**
$C_v$ = 0.98
$C_c$ = 0.60
Head ($h$) = 8 m
Area of orifice ($a$) = 5 cm² = 5 × 10⁻⁴ m²
$g$ = 9.81 m/s²

**Solution:**
**Coefficient of Discharge ($C_d$):**
$C_d = C_c \times C_v$
$C_d = 0.60 \times 0.98$
$C_d = 0.588$

**Actual Velocity ($V_{act}$):**
Theoretical velocity ($V_{th}$) = $\sqrt{2gh}$
$V_{th} = \sqrt{2 \times 9.81 \times 8}$
$V_{th} = \sqrt{156.96}$
$V_{th} \approx 12.528 \text{ m/s}$

$V_{act} = C_v \times V_{th}$
$V_{act} = 0.98 \times 12.528$
$V_{act} \approx 12.277 \text{ m/s}$

**Actual Discharge ($Q_{act}$):**
$Q_{act} = C_d \times a \times \sqrt{2gh}$
$Q_{act} = 0.588 \times (5 \times 10^{-4}) \times 12.528$
$Q_{act} = 0.588 \times 0.0005 \times 12.528$
$Q_{act} \approx 0.003683 \text{ m}^3/\text{s}$

**Answer:** The coefficient of discharge is 0.588. The actual velocity is approximately 12.277 m/s, and the actual discharge is approximately $0.003683 \text{ m}^3/\text{s}$.

### 6. Important Points to Remember

*   **Vena contracta:** The point of minimum cross-sectional area of the jet emerging from an orifice.
*   **Hydraulic Coefficients ($C_v, C_c, C_d$)** are always less than 1 for real fluids.
*   The relationship **$C_d = C_c \times C_v$** is fundamental.
*   For sharp-edged orifices, $C_d$ is typically around 0.60-0.62.
*   Experiments are essential to determine these coefficients accurately as they depend on factors like orifice shape, edge sharpness, and fluid properties.
*   The head ($h$) in orifice calculations is measured from the **center** of the orifice to the free surface of the liquid.
*   Ensure consistent units (e.g., meters for length, seconds for time, m³/s for discharge).

---
