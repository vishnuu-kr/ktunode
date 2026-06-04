---
title: "Turbulent flow:"
subject: "MECHANICS OF FLUID FLOW"
module: "Module 2: Pipe Flow: Viscous flow: Reynolds experiment to classify laminar and turbulent flows"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cc56b5e963ba810a6b"
status: "completed"
scrapedAt: "2026-05-20T18:46:27.692Z"
---
# Mechanics of Fluid Flow - Module 2: Pipe Flow: Viscous Flow

## Topic: Turbulent Flow

---

### Learning Outcomes:

Upon completion of this topic, you should be able to:

*   Understand the characteristics of turbulent flow.
*   Describe the process and significance of Reynolds' experiment.
*   Define and explain the Reynolds number and its role in flow classification.
*   Identify the different flow regimes (laminar, transitional, turbulent) based on the Reynolds number.
*   Discuss the impact of turbulence on flow characteristics such as velocity profile, energy loss, and mixing.

---

### 1. Introduction to Turbulent Flow

Turbulent flow is a complex and chaotic fluid motion characterized by irregular, random fluctuations in velocity and pressure. It is the most common type of flow encountered in engineering applications.

**Key Concepts & Definitions:**

*   **Turbulence:** A state of disorder within a fluid characterized by chaotic, random fluctuations in velocity, pressure, and other flow properties.
*   **Eddies:** Swirling, vortex-like structures within the turbulent flow that transport momentum, energy, and mass. Eddies are present at various scales, from large structures down to very small ones.
*   **Fluctuations:** Instantaneous deviations of flow properties (velocity, pressure) from their mean values.
*   **Mean Velocity:** The time-averaged velocity at a point, representing the overall direction and magnitude of flow.

**Characteristics of Turbulent Flow:**

*   **Chaotic and Irregular Motion:** Particles move in unpredictable paths, not in smooth layers.
*   **Mixing:** Significant mixing of fluid occurs due to the presence of eddies, leading to rapid diffusion of momentum, heat, and mass.
*   **Higher Energy Dissipation:** Turbulence dissipates more kinetic energy into heat compared to laminar flow due to viscous shear within the eddies.
*   **Velocity Fluctuations:** Velocity at any point varies randomly with time.
*   **Three-Dimensional Nature:** Turbulent flows are inherently three-dimensional.
*   **Higher Resistance to Flow:** Due to increased energy dissipation, turbulent flow experiences higher friction and pressure drop.

**Examples of Turbulent Flow:**

*   Flow in most rivers and streams.
*   Airflow over an airplane wing.
*   Blood flow in large arteries.
*   Water flow in most pipes in domestic and industrial settings.
*   Smoke rising from a chimney.

---

### 2. Reynolds' Experiment: Classifying Flow Regimes

Osborne Reynolds, in 1883, conducted a seminal experiment to understand the nature of fluid flow in pipes and to identify the conditions under which flow transitions from smooth to chaotic.

**Experimental Setup:**

*   A long, transparent glass tube through which water flowed.
*   A reservoir of water with a controllable flow rate.
*   A dye stream introduced at the entrance of the tube using a fine nozzle.

**Observations and Findings:**

Reynolds observed the behavior of the dye stream under different flow rates:

*   **Low Flow Rates (Laminar Flow):** The dye stream remained as a single, well-defined filament, moving smoothly along the center of the tube without mixing with the surrounding water. The flow was orderly and layered.
*   **Intermediate Flow Rates (Transitional Flow):** As the flow rate increased, the dye stream began to waver and oscillate. Small, irregular eddies started to appear, and the dye began to mix gradually with the surrounding water.
*   **High Flow Rates (Turbulent Flow):** At even higher flow rates, the dye stream broke up almost immediately upon entering the tube, diffusing rapidly and uniformly throughout the entire cross-section of the pipe. The flow was chaotic and characterized by violent mixing.

**Significance of Reynolds' Experiment:**

Reynolds' experiment demonstrated that the nature of fluid flow (laminar or turbulent) is not solely dependent on the fluid properties but also on the *velocity* of the flow and the *dimensions* of the flow conduit. He identified a dimensionless parameter that governs this transition.

---

### 3. The Reynolds Number (Re)

The Reynolds number is a dimensionless quantity that helps predict flow patterns in different fluid flow situations. It represents the ratio of inertial forces to viscous forces within the fluid.

**Formula:**

For flow in a pipe, the Reynolds number is defined as:

$Re = \frac{\rho V D}{\mu}$

Where:

*   $\rho$ (rho) = Density of the fluid ($kg/m^3$)
*   $V$ = Average velocity of the fluid ($m/s$)
*   $D$ = Characteristic linear dimension (for pipe flow, this is the **internal diameter** of the pipe) ($m$)
*   $\mu$ (mu) = Dynamic viscosity of the fluid ($Pa \cdot s$ or $N \cdot s/m^2$)

Alternatively, using kinematic viscosity ($\nu = \frac{\mu}{\rho}$):

$Re = \frac{V D}{\nu}$

Where:

*   $\nu$ (nu) = Kinematic viscosity of the fluid ($m^2/s$)

**Interpretation of Reynolds Number:**

*   **Inertial Forces:** Related to the tendency of the fluid to keep moving due to its mass and velocity. These forces promote instability and turbulence.
*   **Viscous Forces:** Related to the internal friction within the fluid that resists motion and tends to dampen out disturbances, promoting laminar flow.

**Flow Regimes based on Reynolds Number (for flow in a pipe):**

*   **Laminar Flow (Re < 2300):** Viscous forces dominate. The flow is smooth, orderly, and characterized by parallel layers of fluid sliding over each other. The dye stream in Reynolds' experiment would remain intact.
*   **Transitional Flow (2300 < Re < 4000):** A mixture of laminar and turbulent characteristics. The flow is unstable, with intermittent bursts of turbulence. The dye stream would start to break up and mix.
*   **Turbulent Flow (Re > 4000):** Inertial forces dominate. The flow is chaotic, irregular, and characterized by the presence of eddies and significant mixing. The dye stream would mix completely.

**Important Point to Remember:** The critical Reynolds number (around 2300) is an approximate value and can be influenced by factors like pipe roughness and upstream disturbances. However, it serves as a general guideline.

**Example:**

Consider water flowing through a pipe with an internal diameter of 0.05 m at an average velocity of 1 m/s. The density of water is approximately $1000 kg/m^3$ and its dynamic viscosity is $1 \times 10^{-3} Pa \cdot s$.

Calculate the Reynolds number:

$Re = \frac{\rho V D}{\mu} = \frac{(1000 \, kg/m^3) \times (1 \, m/s) \times (0.05 \, m)}{1 \times 10^{-3} \, Pa \cdot s}$

$Re = \frac{50}{1 \times 10^{-3}} = 50 \times 10^3 = 50,000$

Since $Re = 50,000 > 4000$, the flow is **turbulent**.

---

### 4. Impact of Turbulence on Flow Characteristics

Turbulence significantly alters how fluids behave in pipes, impacting key parameters like velocity distribution, energy loss, and mixing efficiency.

**4.1 Velocity Profile:**

*   **Laminar Flow:** The velocity profile in laminar flow within a circular pipe is parabolic. The velocity is zero at the pipe walls (due to the no-slip condition) and maximum at the center.
    *   $V(r) = V_{max} \left(1 - \frac{r^2}{R^2}\right)$ where $R$ is the pipe radius and $r$ is the radial distance from the center.
    *   The average velocity is half the maximum velocity: $V_{avg} = \frac{1}{2} V_{max}$.

*   **Turbulent Flow:** The velocity profile in turbulent flow is flatter and more "blunt" or "plug-like" in the central region of the pipe. This is due to the intense mixing caused by eddies, which transport momentum from the faster-moving fluid in the center to the slower-moving fluid near the walls, and vice-versa.
    *   The velocity gradient near the wall is very steep.
    *   The average velocity is a larger fraction of the maximum velocity than in laminar flow. Typically, $V_{avg} \approx 0.8 V_{max}$ for fully turbulent flow.

**Visual Representation:**

Imagine plotting velocity against the radial distance from the pipe center.

*   **Laminar:** A smooth curve, peaking at the center and dropping to zero at the wall.
*   **Turbulent:** A flatter curve in the center, with a much sharper drop near the wall.

**4.2 Energy Loss (Head Loss due to Friction):**

Turbulence significantly increases the energy dissipated due to friction between the fluid and the pipe walls. This results in a higher pressure drop along the pipe, which is often referred to as head loss.

*   **Laminar Flow:** Head loss is directly proportional to the average velocity (Hagen-Poiseuille equation).
    *   $h_f = \frac{32 \mu L V}{\rho g D^2}$ where $L$ is pipe length and $g$ is acceleration due to gravity.

*   **Turbulent Flow:** Head loss is generally proportional to the square of the average velocity ($V^2$). The exact relationship depends on the pipe roughness and the Reynolds number.
    *   This is typically described by the Darcy-Weisbach equation: $h_f = f \frac{L}{D} \frac{V^2}{2g}$
    *   The friction factor ($f$) is a dimensionless parameter that accounts for the effects of Reynolds number and pipe roughness. For turbulent flow, $f$ is typically determined from the Moody chart.

**Impact:** Higher velocities or smaller pipes in turbulent flow lead to a disproportionately larger increase in energy loss compared to laminar flow.

**4.3 Mixing and Mass Transfer:**

Turbulence enhances the mixing of fluids and the transfer of heat and mass within the flow.

*   **Laminar Flow:** Mixing occurs primarily through molecular diffusion, which is a slow process.
*   **Turbulent Flow:** Eddies act as efficient transporters, rapidly mixing fluid elements and greatly increasing the rates of convection, heat transfer, and mass transfer.

**Example:** Imagine adding dye to water. In laminar flow, the dye would spread slowly. In turbulent flow, the dye would disperse quickly throughout the fluid. This is why turbulent flow is often desirable in applications where rapid mixing or heat exchange is required.

---

### 5. Practice Questions and Exercises

**Question 1:**

What are the primary characteristics that differentiate turbulent flow from laminar flow?

**Answer:** Turbulent flow is characterized by chaotic, irregular fluid motion, significant eddies, rapid mixing, and higher energy dissipation. Laminar flow is characterized by smooth, orderly motion in parallel layers with minimal mixing and lower energy dissipation.

---

**Question 2:**

Describe the main observations made by Osborne Reynolds during his famous experiment on fluid flow in pipes.

**Answer:** Reynolds observed that at low flow rates, a dye stream remained as a single filament (laminar). As flow rate increased, the dye stream began to waver (transitional). At high flow rates, the dye stream broke up and mixed rapidly (turbulent). This indicated that the transition from laminar to turbulent flow depends on flow velocity and pipe dimensions.

---

**Question 3:**

Define the Reynolds number and explain its significance in classifying fluid flow. For flow in a circular pipe, what are the typical ranges for laminar, transitional, and turbulent flow?

**Answer:** The Reynolds number ($Re = \frac{\rho V D}{\mu}$) is a dimensionless ratio of inertial forces to viscous forces. It signifies the flow regime.
*   Laminar Flow: $Re < 2300$
*   Transitional Flow: $2300 < Re < 4000$
*   Turbulent Flow: $Re > 4000$

---

**Question 4:**

Calculate the Reynolds number for air flowing through a 0.1 m diameter duct at a velocity of 5 m/s. Assume the density of air is $1.2 kg/m^3$ and its dynamic viscosity is $1.8 \times 10^{-5} Pa \cdot s$. Classify the flow.

**Answer:**
Given:
$\rho = 1.2 \, kg/m^3$
$V = 5 \, m/s$
$D = 0.1 \, m$
$\mu = 1.8 \times 10^{-5} \, Pa \cdot s$

$Re = \frac{\rho V D}{\mu} = \frac{(1.2 \, kg/m^3) \times (5 \, m/s) \times (0.1 \, m)}{1.8 \times 10^{-5} \, Pa \cdot s}$
$Re = \frac{0.6}{1.8 \times 10^{-5}} \approx 33,333$

Since $Re > 4000$, the flow is **turbulent**.

---

**Question 5:**

How does the velocity profile of turbulent flow in a pipe differ from that of laminar flow? Briefly explain the reason for this difference.

**Answer:** The velocity profile in turbulent flow is flatter and more blunt in the center compared to the parabolic profile of laminar flow. This is because the intense mixing caused by eddies transports momentum from the center towards the walls and vice versa, resulting in a more uniform velocity distribution across most of the pipe's cross-section, with a steep velocity gradient only very close to the pipe walls.

---

### 6. Important Points to Remember

*   Turbulence is the most common type of flow in real-world engineering applications.
*   The Reynolds number is the key dimensionless parameter that distinguishes between laminar, transitional, and turbulent flows.
*   The critical Reynolds number for pipe flow is approximately 2300, with the transitional region extending up to about 4000.
*   Turbulent flow leads to significantly higher energy losses (pressure drop) compared to laminar flow, often increasing with the square of the velocity.
*   Turbulent flow exhibits a flatter velocity profile in the center of the pipe due to enhanced mixing.
*   Turbulence greatly improves mixing and rates of heat and mass transfer.
*   Pipe roughness plays a significant role in determining the friction factor in turbulent flow, but has no effect on laminar flow.

---
