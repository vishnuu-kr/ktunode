---
title: "shear stress and velocity distribution in a pipe"
subject: "MECHANICS OF FLUID FLOW"
module: "Module 2: Pipe Flow: Viscous flow: Reynolds experiment to classify laminar and turbulent flows"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cc56b5e963ba810a69"
status: "completed"
scrapedAt: "2026-05-20T18:46:26.300Z"
---
# MECHANICS OF FLUID FLOW - Module 2: Pipe Flow: Viscous Flow

## Topic: Shear Stress and Velocity Distribution in a Pipe

This module delves into the fundamental aspects of viscous fluid flow within pipes, focusing on how fluid properties and flow conditions influence shear stress and velocity profiles. We'll explore the historical significance of Reynolds' experiments and their role in understanding the transition between laminar and turbulent flow.

---

### Learning Outcomes:

By the end of this topic, you should be able to:

*   **Define** shear stress and explain its origin in viscous fluid flow.
*   **Describe** the relationship between shear stress and velocity gradient in a Newtonian fluid.
*   **Explain** the concept of velocity distribution in pipe flow for both laminar and turbulent regimes.
*   **Discuss** the significance of Reynolds' experiment in classifying laminar and turbulent flows.
*   **Relate** shear stress and velocity distribution to the Reynolds number.
*   **Identify** the characteristics of laminar and turbulent flow in pipes.

---

### 1. Shear Stress in Viscous Fluid Flow

**Definition:**
**Shear stress ($\tau$)** is a force acting parallel to a surface, causing deformation or sliding. In fluid mechanics, it arises from the internal friction between adjacent fluid layers moving at different velocities.

**Origin:**
Shear stress is a direct consequence of the **viscosity** of the fluid. Viscosity is a measure of a fluid's resistance to deformation by shear stress. In a fluid flow, imagine layers of fluid sliding over each other. The "stickiness" between these layers, due to intermolecular forces and momentum exchange (in gases), creates shear stress.

**Newton's Law of Viscosity (for Newtonian Fluids):**
For Newtonian fluids, the shear stress is directly proportional to the rate of shear strain, which is the velocity gradient perpendicular to the direction of flow.

*   **Equation:** $\tau = \mu \frac{du}{dy}$
    *   $\tau$: Shear stress (typically in N/m² or Pa)
    *   $\mu$: Dynamic viscosity (a fluid property, typically in Pa·s or kg/(m·s))
    *   $\frac{du}{dy}$: Velocity gradient (rate of change of velocity with respect to distance perpendicular to the flow, typically in s⁻¹)

**Key Concept:**
The shear stress is highest at the solid boundary (pipe wall) where the fluid velocity is zero (no-slip condition) and decreases as you move towards the center of the pipe.

**Example:**
Consider water flowing in a pipe. If the water at the wall is stationary and the water at the center is moving at a higher velocity, there will be a velocity gradient across the pipe's radius. This gradient, multiplied by the water's viscosity, will generate shear stress between the fluid layers.

---

### 2. Velocity Distribution in a Pipe

The way velocity varies across the cross-section of a pipe is crucial for understanding flow behavior.

#### 2.1 Laminar Flow

**Characteristics:**
*   Fluid particles move in smooth, parallel layers or "laminae."
*   No significant mixing between layers.
*   Highly ordered and predictable flow.
*   Occurs at low velocities and for highly viscous fluids.

**Velocity Distribution in Laminar Flow (Fully Developed Pipe Flow):**
For a Newtonian fluid in a circular pipe under laminar flow conditions (fully developed), the velocity profile is **parabolic**.

*   **Equation for Velocity:** $u(r) = u_{max} \left(1 - \frac{r^2}{R^2}\right)$
    *   $u(r)$: Velocity at a radial distance $r$ from the center
    *   $u_{max}$: Maximum velocity at the center of the pipe ($r=0$)
    *   $r$: Radial distance from the center of the pipe
    *   $R$: Radius of the pipe

*   **Relationship with Shear Stress:**
    In laminar flow, the shear stress distribution is linear across the radius.
    *   $\tau(r) = \frac{dp}{dx} \frac{r}{2}$ (where $\frac{dp}{dx}$ is the pressure gradient, negative for flow in the direction of decreasing pressure)
    *   Combining with Newton's law of viscosity, $\tau = -\mu \frac{du}{dr}$ (note the negative sign because velocity decreases as $r$ increases), we derive the parabolic velocity profile.

**Key Points for Laminar Flow Velocity Distribution:**
*   Maximum velocity occurs at the center ($r=0$).
*   Velocity is zero at the pipe wall ($r=R$) due to the no-slip condition.
*   The profile is parabolic, with the curvature determined by the viscosity and pressure gradient.

**Example:**
Imagine a very viscous fluid like honey slowly flowing through a narrow pipe. The flow would likely be laminar, and you would observe a distinct parabolic shape if you could visualize the velocity of different fluid particles across the pipe's diameter.

#### 2.2 Turbulent Flow

**Characteristics:**
*   Characterized by random, chaotic, and swirling motion of fluid particles.
*   Significant mixing occurs between fluid layers.
*   Higher energy dissipation due to eddy formation.
*   Occurs at higher velocities and for less viscous fluids.

**Velocity Distribution in Turbulent Flow (Fully Developed Pipe Flow):**
The velocity profile in turbulent flow is **flatter** or **blunter** in the central region of the pipe compared to the parabolic profile of laminar flow. The velocity gradient is steeper near the pipe walls.

*   **General Description:** The turbulent velocity profile is often represented by power-law approximations or logarithmic laws, which are more complex than the simple parabolic equation for laminar flow. A common power-law approximation is:
    *   $\frac{u}{u_{avg}} = \left(1 - \frac{r}{R}\right)^{1/n}$
    *   Where $n$ is an exponent that depends on the Reynolds number (e.g., $n \approx 7$ for many turbulent flows).

*   **Turbulent Core vs. Viscous Sublayer:**
    *   **Turbulent Core:** The central region where turbulent mixing dominates. The velocity profile is relatively flat.
    *   **Viscous Sublayer:** A thin layer very close to the wall where viscous effects are dominant, and the flow behaves more like laminar flow. The velocity gradient here is very steep.

**Key Points for Turbulent Flow Velocity Distribution:**
*   The profile is much flatter in the core than the laminar profile.
*   The velocity gradient is much steeper near the walls due to intense mixing and eddy viscosity.
*   The average velocity is higher for the same pressure drop compared to laminar flow.

**Example:**
Consider water flowing rapidly through a wide pipe. The flow would likely be turbulent, and if you could measure the velocity across the pipe, you would find the velocity changes less drastically in the center, but increases rapidly near the walls.

---

### 3. Reynolds' Experiment and Flow Classification

**Significance:**
**Osborne Reynolds'** experiments in the 1880s were groundbreaking in classifying fluid flow into two distinct regimes: laminar and turbulent. This classification is fundamental to understanding pipe flow.

**The Experiment:**
Reynolds injected a thin filament of colored dye into a flowing stream of water within a transparent pipe.

*   **Observation 1 (Low Flow Rate):** At low flow velocities, the dye filament traveled through the pipe in a smooth, straight line, indicating **laminar flow**. The fluid layers moved parallel to each other without significant mixing.

*   **Observation 2 (Increasing Flow Rate):** As the flow velocity was gradually increased, a critical point was reached where the dye filament began to waver and break up into irregular eddies, signifying the transition to **turbulent flow**.

*   **Observation 3 (High Flow Rate):** At even higher velocities, the dye diffused rapidly throughout the entire pipe cross-section, demonstrating the characteristic mixing of turbulent flow.

**The Reynolds Number ($Re$):**
Reynolds proposed a dimensionless parameter to predict the transition from laminar to turbulent flow:

*   **Definition:** The Reynolds number is the ratio of inertial forces to viscous forces within the fluid.
    *   **Inertial Forces:** Tend to promote turbulence and irregular motion.
    *   **Viscous Forces:** Tend to damp out disturbances and promote laminar flow.

*   **Equation for Pipe Flow:** $Re = \frac{\rho v D}{\mu} = \frac{v D}{\nu}$
    *   $\rho$: Density of the fluid (kg/m³)
    *   $v$: Average velocity of the fluid (m/s)
    *   $D$: Diameter of the pipe (m)
    *   $\mu$: Dynamic viscosity of the fluid (Pa·s)
    *   $\nu$: Kinematic viscosity of the fluid ($\nu = \mu / \rho$, m²/s)

**Flow Regime Classification based on $Re$ for Pipe Flow:**

*   **Laminar Flow:** $Re \lesssim 2300$
    *   Viscous forces dominate. Flow is smooth and orderly.

*   **Transitional Flow:** $2300 \lesssim Re \lesssim 4000$
    *   Flow exhibits characteristics of both laminar and turbulent flow. It can fluctuate between the two.

*   **Turbulent Flow:** $Re \gtrsim 4000$
    *   Inertial forces dominate. Flow is chaotic and mixed.

**Important Note:** The critical Reynolds numbers (2300 and 4000) are approximate and can be influenced by factors like pipe roughness and entrance conditions.

**Relationship between $Re$, Shear Stress, and Velocity Distribution:**

*   **Low $Re$ (Laminar):** Shear stress is directly proportional to velocity gradient. The velocity profile is parabolic.
*   **High $Re$ (Turbulent):** The concept of "apparent viscosity" or "eddy viscosity" is introduced to account for the increased momentum transfer due to turbulence. Shear stress is still related to the velocity gradient, but the relationship is more complex and the eddy viscosity is much higher than the molecular viscosity. This leads to the flatter velocity profile.

---

### 4. Key Concepts and Definitions Recap

*   **Viscosity ($\mu, \nu$):** Internal resistance of a fluid to deformation by shear stress.
*   **Shear Stress ($\tau$):** Force per unit area acting parallel to a surface, arising from fluid friction.
*   **Newton's Law of Viscosity:** $\tau = \mu \frac{du}{dy}$ (for Newtonian fluids).
*   **No-Slip Condition:** Fluid velocity at a solid boundary is zero.
*   **Laminar Flow:** Smooth, layered flow with low $Re$. Parabolic velocity profile.
*   **Turbulent Flow:** Chaotic, mixed flow with high $Re$. Flatter velocity profile in the core.
*   **Reynolds Number ($Re$):** Dimensionless parameter comparing inertial to viscous forces, predicting flow regime.
*   **Velocity Profile:** Distribution of velocity across the pipe's cross-section.

---

### 5. Practice Questions and Exercises

**Question 1:**
A Newtonian fluid with dynamic viscosity $\mu = 0.01$ Pa·s flows through a pipe of diameter 0.05 m. If the average velocity is 0.1 m/s, calculate the Reynolds number and determine if the flow is likely laminar or turbulent.

**Answer 1:**
First, we need the density of the fluid. Let's assume it's water at room temperature, with $\rho \approx 1000$ kg/m³.
$Re = \frac{\rho v D}{\mu} = \frac{(1000 \text{ kg/m³})(0.1 \text{ m/s})(0.05 \text{ m})}{0.01 \text{ Pa·s}}$
$Re = \frac{50}{0.01} = 5000$
Since $Re = 5000 > 4000$, the flow is likely **turbulent**.

**Question 2:**
Describe the shape of the velocity distribution in a pipe for fully developed laminar flow. What is the velocity at the pipe wall?

**Answer 2:**
The velocity distribution in a pipe for fully developed laminar flow is **parabolic**. The velocity is maximum at the center of the pipe and decreases towards the walls. The velocity at the pipe wall is **zero** due to the no-slip condition.

**Question 3:**
What physical phenomenon causes shear stress in a fluid? How does the shear stress at the pipe wall compare to the shear stress at the center of the pipe in laminar flow?

**Answer 3:**
Shear stress in a fluid is caused by **viscosity**, which is the internal friction between adjacent fluid layers moving at different velocities. In laminar flow, the shear stress is **maximum at the pipe wall** (where the velocity gradient is steepest) and **zero at the center of the pipe** (where the velocity gradient is zero).

**Question 4:**
If the Reynolds number for flow in a pipe is 1500, what type of flow would you expect? What would happen to the velocity distribution if the flow rate were significantly increased, leading to a Reynolds number of 6000?

**Answer 4:**
With a Reynolds number of 1500, the flow would be expected to be **laminar**. If the flow rate is significantly increased to a Reynolds number of 6000, the flow would become **turbulent**. The velocity distribution would change from a **parabolic profile** to a **flatter, blunter profile** in the central region, with a steeper velocity gradient near the walls.

---

### Important Points to Remember:

*   **Viscosity is key:** It's the property that links shear stress to velocity gradients.
*   **No-slip condition:** Always applies at solid boundaries.
*   **Reynolds Number is the predictor:** It tells you whether flow is laminar, transitional, or turbulent.
*   **Laminar = Parabolic:** Think smooth layers and a parabolic velocity profile.
*   **Turbulent = Flatter:** Think chaotic mixing and a blunter velocity profile, with a steep gradient near the wall.
*   Shear stress is highest at the wall and decreases towards the center in laminar flow. In turbulent flow, the complexity increases with eddy viscosity.
*   The transition Reynolds numbers are approximate guides.

---
