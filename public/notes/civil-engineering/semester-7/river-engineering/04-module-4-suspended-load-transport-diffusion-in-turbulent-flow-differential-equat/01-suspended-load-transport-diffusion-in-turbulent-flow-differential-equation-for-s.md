---
title: "Suspended load transport, Diffusion in turbulent flow, differential equation for suspension of sediment, estimation of suspended load,"
subject: "RIVER ENGINEERING"
module: "Module 4: Suspended load transport, Diffusion in turbulent flow, differential equation for suspension of sediment, estimation of suspended load,"
branch: "Civil Engineering"
semester: 7
topicId: "689f15cf56b5e963ba811502"
status: "completed"
scrapedAt: "2026-05-20T19:01:32.401Z"
---
# River Engineering: Module 4 - Suspended Load Transport

This module delves into the mechanics of how sediment is transported in rivers when it's not resting on the bed, focusing on suspended load and the underlying principles of diffusion in turbulent flow.

---

## 1. Suspended Load Transport

### 1.1. Key Concepts and Definitions

*   **Suspended Load:** Sediment particles that are carried within the water column and do not touch the riverbed, kept aloft by the upward components of turbulent eddies. These particles are typically finer than bedload particles (e.g., silt, clay, fine sand).
*   **Bedload:** Sediment particles that move along the riverbed by rolling, sliding, or saltation.
*   **Saltation:** The bouncing or hopping motion of sediment particles along the bed.
*   **Turbulence:** Irregular, chaotic motion of fluid characterized by swirling eddies of various sizes. It plays a crucial role in keeping sediment particles suspended.
*   **Eddy Viscosity ($\nu_t$):** An analogy to molecular viscosity, representing the increased momentum transfer due to turbulent eddies. It's a measure of the "thickness" of the turbulent mixing.
*   **Diffusion:** The process of net movement of particles from a region of higher concentration to a region of lower concentration due to random molecular motion (in molecular diffusion) or turbulent eddies (in turbulent diffusion).
*   **Sediment Diffusion Coefficient ($D_s$):** A measure of the rate at which suspended sediment diffuses within the water column. In turbulent flow, this is often related to the eddy viscosity.

### 1.2. The Role of Turbulence in Suspended Load Transport

Turbulence is the primary driver for suspending sediment. Here's how:

*   **Upward Momentum Transfer:** Turbulent eddies, with their upward velocity components, impart an upward force on sediment particles, counteracting the downward force of gravity.
*   **Mixing:** Turbulence effectively mixes sediment particles throughout the water column.
*   **Vertical Velocity Fluctuations:** The constant upward and downward fluctuations of water velocity within turbulent eddies are essential for keeping particles suspended.

---

## 2. Diffusion in Turbulent Flow

### 2.1. Analogy to Molecular Diffusion

Just as molecules in a fluid move randomly and spread out (molecular diffusion), sediment particles are spread out by the random motion of turbulent eddies. This process is often termed **turbulent diffusion**.

### 2.2. Eddy Diffusion Concept

*   **Eddy Diffusion vs. Molecular Diffusion:** While molecular diffusion is driven by molecular motion, turbulent diffusion is driven by the larger-scale motions of turbulent eddies. Eddy diffusion is typically orders of magnitude greater than molecular diffusion in natural water flows.
*   **Relationship with Eddy Viscosity:** The diffusion of suspended sediment is analogous to the diffusion of momentum or heat in turbulent flow. It's often modeled using a diffusion coefficient that is proportional to the eddy viscosity.

    $D_s \approx \nu_t$

    Where:
    *   $D_s$ is the sediment diffusion coefficient.
    *   $\nu_t$ is the eddy viscosity.

*   **Prandtl's Mixing Length Theory:** A foundational concept used to estimate eddy viscosity. It suggests that eddies have a characteristic "mixing length" ($\ell$), and the eddy viscosity is proportional to the mixing length and the velocity gradient.

    $\nu_t = \ell^2 \left| \frac{\partial u}{\partial y} \right|$

    Where:
    *   $\ell$ is the mixing length.
    *   $\frac{\partial u}{\partial y}$ is the velocity gradient in the vertical direction.

---

## 3. Differential Equation for Suspension of Sediment

The transport of suspended sediment is governed by a balance between the upward turbulent diffusion and the downward settling due to gravity.

### 3.1. Basic Diffusion Equation

The general form of a diffusion equation is:

$\frac{\partial C}{\partial t} = D \nabla^2 C + S$

Where:
*   $C$ is the concentration of the diffusing substance (sediment in this case).
*   $t$ is time.
*   $D$ is the diffusion coefficient.
*   $\nabla^2$ is the Laplacian operator.
*   $S$ represents sources or sinks.

### 3.2. Sediment Diffusion Equation in a River

For suspended sediment in a river, considering only vertical transport and neglecting longitudinal dispersion (for simplicity) and sources/sinks:

$\frac{\partial C}{\partial t} = \frac{\partial}{\partial y} \left( D_s \frac{\partial C}{\partial y} \right) - w \frac{\partial C}{\partial y}$

Where:
*   $C(y)$ is the concentration of suspended sediment at height $y$ from the bed.
*   $t$ is time.
*   $y$ is the vertical coordinate, measured upwards from the bed.
*   $D_s(y)$ is the sediment diffusion coefficient (which is often assumed to be equal to eddy viscosity, $\nu_t(y)$).
*   $w$ is the fall velocity of the sediment particles.

**Explanation of Terms:**

*   $\frac{\partial C}{\partial t}$: Rate of change of sediment concentration with time.
*   $\frac{\partial}{\partial y} \left( D_s \frac{\partial C}{\partial y} \right)$: Represents the net rate of sediment movement due to turbulent diffusion. The term $\frac{\partial C}{\partial y}$ is the concentration gradient, and multiplying by $D_s$ gives the diffusive flux. The divergence of this flux accounts for the net rate of change.
*   $- w \frac{\partial C}{\partial y}$: Represents the net rate of sediment movement due to settling. Particles with concentration gradient $\frac{\partial C}{\partial y}$ move downwards with velocity $w$.

### 3.3. Steady State and Uniform Flow Conditions

Under steady-state conditions (concentration doesn't change with time, $\frac{\partial C}{\partial t} = 0$), and assuming uniform flow where $D_s$ and $w$ are constant vertically for a simplified analysis (though $D_s$ is actually a function of $y$), the equation becomes:

$D_s \frac{\partial^2 C}{\partial y^2} - w \frac{\partial C}{\partial y} = 0$

This can be rewritten as:

$\frac{\partial}{\partial y} \left( D_s \frac{\partial C}{\partial y} - w C \right) = 0$

### 3.4. Rouse's Suspended Sediment Concentration Distribution

A key derivation from the steady-state diffusion equation, assuming $D_s = \nu_t$ and $\nu_t$ varies linearly with height above the bed in the viscous sublayer and then increases with distance from the bed (often modeled as $\nu_t = \kappa u_* y$, where $\kappa$ is the von Kármán constant and $u_*$ is the shear velocity), leads to the famous Rouse profile:

$C(y) = C_a \left( \frac{y_a}{y} \right)^Z$

Where:
*   $C(y)$ is the sediment concentration at height $y$ from the bed.
*   $C_a$ is the reference sediment concentration at a reference height $y_a$ above the bed.
*   $y$ is the height above the bed.
*   $y_a$ is a reference height (e.g., 1 meter above the bed).
*   $Z = \frac{w}{\kappa u_*}$ is the Rouse number.
    *   $w$ is the fall velocity of the sediment.
    *   $\kappa \approx 0.4$ (von Kármán constant).
    *   $u_* = \sqrt{\tau_0 / \rho}$ is the shear velocity, where $\tau_0$ is the bed shear stress and $\rho$ is the fluid density.

**Key Implications of Rouse Profile:**

*   **Concentration Decreases with Height:** The concentration is highest near the bed and decreases exponentially with height.
*   **Influence of Rouse Number (Z):**
    *   **Low Z (fine sediment, high turbulence):** The exponent is small, meaning concentration decreases slowly with height. Sediment is widely distributed.
    *   **High Z (coarse sediment, low turbulence):** The exponent is large, meaning concentration decreases rapidly with height. Sediment is concentrated near the bed.

---

## 4. Estimation of Suspended Load

Estimating the total quantity of suspended sediment transported is crucial for river management.

### 4.1. Methods for Estimation

1.  **Integration of Concentration Profiles (Rouse's Method):**
    *   Measure the reference concentration ($C_a$) at a reference height ($y_a$).
    *   Determine the Rouse number ($Z$) from sediment fall velocity and flow conditions (shear velocity).
    *   Use the Rouse profile equation: $C(y) = C_a \left( \frac{y_a}{y} \right)^Z$.
    *   Integrate this profile over the flow depth ($h$) to find the total suspended load per unit width.

    Total Suspended Load per unit width ($Q_s$) = $\int_0^h C(y) u(y) dy$

    Where $u(y)$ is the velocity profile. A common simplification is to use the average velocity $\bar{u}$ and assume $C$ is the average concentration $\bar{C}$.

    $Q_s = \bar{C} \bar{u} A$

    Where $A$ is the cross-sectional area. For estimating $Q_s$ by integrating the Rouse profile:

    $Q_s = \int_0^h C_a \left( \frac{y_a}{y} \right)^Z u(y) dy$

    **Practical approach:** Often, measurements are taken at a few points, and the Rouse profile is used to extrapolate and calculate the total load.

2.  **Direct Sampling and Measurement:**
    *   **Point Samples:** Using specialized samplers (e.g., US DH-48, DH-59, P-72) to collect water-sediment mixture at various points in the cross-section and at different depths.
    *   **Integrative Samplers:** Samplers that collect over a period or entire depth.
    *   **Suspended Sediment Concentration (SSC):** Measured by filtering the collected sample and weighing the dried sediment, or using optical methods.
    *   **Discharge (Q):** Measured concurrently using flow meters or velocity-area methods.
    *   **Suspended Load Discharge ($Q_s$):** Calculated by multiplying the sediment concentration ($C$) by the water discharge ($Q_w$) in that portion of the flow.
        $Q_s = \int_0^A C(y) u(y) dy$
        Or, for discrete measurements at multiple points:
        $Q_s = \sum_{i=1}^{n} C_i u_i A_i$
        Where $C_i$, $u_i$, and $A_i$ are concentration, velocity, and sub-area at point $i$.

3.  **Empirical Formulas:** Various empirical formulas exist that relate suspended load to flow parameters like discharge, velocity, water depth, and sediment characteristics. These are often site-specific or developed for specific conditions. Examples include formulas based on Einstein's bedload function extended to suspended load.

### 4.2. Factors Affecting Suspended Load

*   **Flow Velocity and Discharge:** Higher velocities and discharges generally lead to higher suspended loads.
*   **Turbulence Intensity:** Greater turbulence increases the capacity to keep sediment in suspension.
*   **Sediment Characteristics:**
    *   **Particle Size:** Finer particles are more easily suspended.
    *   **Fall Velocity (w):** Lower fall velocity means particles stay suspended longer.
    *   **Specific Gravity:** Influences fall velocity.
*   **Water Depth:** Deeper water allows for a greater volume of suspended sediment.
*   **Availability of Sediment:** The amount of fine sediment readily available at the bed or from upstream sources.
*   **Bed Roughness:** Influences velocity and turbulence near the bed.

---

## 5. Practice Questions and Exercises

**Question 1:**
Define suspended load and contrast it with bedload.

**Answer:**
Suspended load refers to sediment particles that are carried within the water column, kept aloft by turbulent eddies. Bedload consists of sediment particles that move along the riverbed by rolling, sliding, or saltation. Suspended load particles are typically finer than bedload particles.

**Question 2:**
What is the fundamental principle that allows sediment to remain suspended in a turbulent flow?

**Answer:**
The fundamental principle is the upward transfer of momentum by turbulent eddies. The upward velocity components of these eddies counteract the downward force of gravity acting on the sediment particles, preventing them from settling out of the water column.

**Question 3:**
Write down the differential equation governing the vertical distribution of suspended sediment concentration under steady-state conditions, assuming diffusion and settling.

**Answer:**
Under steady-state conditions, the differential equation is:
$D_s \frac{\partial^2 C}{\partial y^2} - w \frac{\partial C}{\partial y} = 0$
Or, equivalently:
$\frac{\partial}{\partial y} \left( D_s \frac{\partial C}{\partial y} - w C \right) = 0$

**Question 4:**
State the Rouse profile for suspended sediment concentration. Define each term and the Rouse number.

**Answer:**
The Rouse profile is given by:
$C(y) = C_a \left( \frac{y_a}{y} \right)^Z$
Where:
*   $C(y)$ = concentration at height $y$.
*   $C_a$ = reference concentration at reference height $y_a$.
*   $y$ = height above the bed.
*   $y_a$ = reference height.
*   $Z$ = Rouse number.

The Rouse number is defined as $Z = \frac{w}{\kappa u_*}$, where:
*   $w$ = fall velocity of sediment particles.
*   $\kappa$ = von Kármán constant (approximately 0.4).
*   $u_*$ = shear velocity.

**Question 5 (Calculation):**
In a river, sediment particles have a fall velocity ($w$) of 0.01 m/s. The shear velocity ($u_*$) is measured to be 0.02 m/s. The von Kármán constant ($\kappa$) is 0.4. Calculate the Rouse number. If the concentration at 1 meter above the bed ($y_a = 1$ m) is 100 mg/L, what would be the predicted concentration at 0.1 meters above the bed?

**Answer:**
1.  **Calculate Rouse Number (Z):**
    $Z = \frac{w}{\kappa u_*} = \frac{0.01 \text{ m/s}}{0.4 \times 0.02 \text{ m/s}} = \frac{0.01}{0.008} = 1.25$

2.  **Calculate Concentration at y = 0.1 m:**
    Using the Rouse profile: $C(y) = C_a \left( \frac{y_a}{y} \right)^Z$
    $C(0.1) = 100 \text{ mg/L} \left( \frac{1 \text{ m}}{0.1 \text{ m}} \right)^{1.25}$
    $C(0.1) = 100 \left( 10 \right)^{1.25}$
    $C(0.1) = 100 \times (10^{1} \times 10^{0.25})$
    $C(0.1) = 100 \times (10 \times 1.778)$
    $C(0.1) = 100 \times 17.78$
    $C(0.1) = 1778 \text{ mg/L}$

    *(Note: This concentration is exceptionally high, typical for very close to the bed. In reality, measurements might not extend this low, and the Rouse profile has limitations in the immediate vicinity of the bed).*

**Question 6:**
List at least three factors that influence the amount of suspended load transported by a river.

**Answer:**
Any three of the following:
*   Flow velocity and discharge
*   Turbulence intensity
*   Sediment particle size (fall velocity)
*   Water depth
*   Availability of sediment
*   Bed roughness

---

## 6. Important Points to Remember

*   **Turbulence is Key:** Suspended load transport is entirely dependent on the presence and intensity of turbulence.
*   **Diffusion and Settling Balance:** The vertical distribution of suspended sediment is a result of the upward turbulent diffusion and the downward settling of particles.
*   **Rouse Profile is a Cornerstone:** The Rouse profile provides a fundamental understanding of how suspended sediment concentration varies with height in a steady, uniform flow.
*   **Rouse Number (Z) is Critical:** The value of $Z$ (determined by $w$, $\kappa$, and $u_*$) dictates the shape of the concentration profile and the extent to which sediment is distributed vertically.
*   **Finer Sediment = Wider Distribution:** Fine particles with low fall velocities and thus low Rouse numbers are distributed more uniformly throughout the water column.
*   **Estimation Requires Data:** Accurate estimation of suspended load requires field measurements of sediment concentration and flow velocity at multiple locations within the cross-section.
*   **Practical Applications:** Understanding suspended load is vital for predicting sediment transport, erosion, deposition, water quality, and designing hydraulic structures.
