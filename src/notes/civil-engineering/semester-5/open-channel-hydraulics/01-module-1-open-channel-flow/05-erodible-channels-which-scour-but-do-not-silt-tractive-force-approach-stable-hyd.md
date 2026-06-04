---
title: "Erodible channels which scour but do not silt- Tractive force approach, stable hydraulic section"
subject: "OPEN CHANNEL HYDRAULICS"
module: "Module 1: Open channel flow"
branch: "Civil Engineering"
semester: 5
topicId: "689f15cd56b5e963ba810ea7"
status: "completed"
scrapedAt: "2026-05-20T18:49:46.596Z"
---
# Open Channel Hydraulics: Module 1 - Open Channel Flow

## Topic: Erodible Channels which Scour but Do Not Silt - Tractive Force Approach, Stable Hydraulic Section

### Learning Outcomes:

*   Understand the concept of erodible channels that primarily experience scour rather than silting.
*   Grasp the principles of the Tractive Force approach for analyzing open channel stability.
*   Define and calculate stable hydraulic sections for erodible channels.
*   Apply the Tractive Force theory to design and analyze channels that are resistant to erosion.

---

### 1. Introduction to Erodible Channels (Scour Dominant)

*   **Definition:** Erodible channels are those where the channel boundary (bed and banks) is composed of materials that can be displaced by the flowing water.
*   **Scour Dominant Channels:** In this specific context, we focus on channels where the primary concern is the removal of material (scour) by the flow, rather than the deposition of sediment (silting).
    *   **Characteristics:**
        *   Higher flow velocities.
        *   Coarser bed material (e.g., gravel, cobbles, boulders).
        *   Lower sediment concentration in the incoming water.
        *   Steeper slopes.
        *   Often found in mountainous or upstream regions of river systems, or in engineered channels like spillways or drainage ditches.
*   **Contrast with Silting Channels:** Silting channels tend to have lower velocities, finer bed materials, and higher sediment loads, leading to deposition.

---

### 2. The Tractive Force Approach

The Tractive Force approach is a fundamental method for determining the stability of open channel beds and banks against erosion. It focuses on the forces exerted by the flowing water on the channel boundary.

*   **Key Concept:** **Tractive Force (or Shear Stress)**
    *   **Definition:** The force exerted by the flowing water per unit area of the channel boundary. It's essentially the friction between the water and the channel bed/banks.
    *   **Symbol:** $\tau_0$
    *   **Unit:** Force per unit area (e.g., N/m², lb/ft², Pa).

*   **Mechanism of Erosion:**
    *   When the tractive force exerted by the water exceeds the resisting forces of the channel material (cohesion, weight, friction), erosion (scour) occurs.
    *   **Resisting Forces:**
        *   **Cohesion:** Attractive forces between fine particles (important for cohesive soils like clay).
        *   **Weight of Particles:** The force of gravity acting on the sediment particles.
        *   **Interparticle Friction:** Frictional resistance between adjacent sediment particles.

*   **Calculating Tractive Force ($\tau_0$):**
    *   For a **wide rectangular channel**, the tractive force on the bed is directly proportional to the depth of flow and the slope.
        $$ \tau_0 = \rho g y S_0 $$
        Where:
        *   $\rho$: Density of water (kg/m³ or slugs/ft³)
        *   $g$: Acceleration due to gravity (m/s² or ft/s²)
        *   $y$: Flow depth (m or ft)
        *   $S_0$: Bed slope (dimensionless)

    *   For **non-rectangular channels**, the concept becomes more complex, and the tractive force varies across the channel cross-section. However, a **mean tractive force** is often used for design, related to the hydraulic radius ($R$) and slope ($S_0$).
        $$ \tau_0 = \rho g R S_0 $$
        Where:
        *   $R$: Hydraulic radius ($A/P$), where $A$ is the cross-sectional area and $P$ is the wetted perimeter.

*   **Critical Tractive Force ($\tau_c$):**
    *   **Definition:** The minimum tractive force required to initiate motion (scour) of the channel boundary material.
    *   **Factors influencing $\tau_c$:**
        *   **Particle Size ($d$):** Larger particles require a greater tractive force to move.
        *   **Particle Shape:** Angular particles are more resistant than rounded ones.
        *   **Particle Density ($\rho_s$):** Denser particles are more resistant.
        *   **Gradation (Size Distribution):** Well-graded materials are generally more stable.
        *   **Cohesion:** The presence of cohesive forces significantly increases $\tau_c$.
        *   **Packing and Embedding:** How well particles are settled and interlocked.

*   **Shields' Criterion (and similar empirical relations):**
    *   **Concept:** Shields' criterion relates the tractive force to the particle size through a dimensionless parameter called the **Shields parameter** ($\theta$).
    *   **Shields Parameter ($\theta$):**
        $$ \theta = \frac{\tau_0}{(\rho_s - \rho) g d} $$
        Where:
        *   $\rho_s$: Density of sediment particles (kg/m³ or slugs/ft³)
        *   $d$: Characteristic particle diameter (m or ft)

    *   **Critical Shields Parameter ($\theta_c$):** The minimum value of $\theta$ for which motion begins. This value is typically determined empirically (through experiments).
        *   For non-cohesive, uniform spherical particles, $\theta_c \approx 0.03$ to $0.06$.
        *   For non-cohesive, non-uniform particles, $\theta_c$ can be lower or higher depending on the gradation.
        *   For cohesive soils, $\theta_c$ can be much higher.

*   **Stability Condition:** For a channel to be stable (no scour), the applied tractive force must be less than or equal to the critical tractive force:
    $$ \tau_0 \le \tau_c $$
    Or, equivalently, using Shields' parameter:
    $$ \theta \le \theta_c $$

---

### 3. Stable Hydraulic Section

A stable hydraulic section is a channel cross-section designed such that the tractive forces acting on its boundaries are below the critical values, preventing erosion. This is particularly important for channels carrying sediment-free or low-sediment water at high velocities.

*   **Objective:** To design a channel that is self-maintaining and does not erode its bed or banks.

*   **Key Principle:** Distribute the tractive force evenly across the channel boundaries, minimizing peak stresses.

*   **Tractive Force Distribution:**
    *   In a wide channel, the tractive force is relatively uniform across the bed.
    *   In narrower channels, the tractive force is higher on the banks, especially near the corners, due to secondary flows and variations in flow depth.

*   **Stable Cross-Section Shapes:**
    *   **Wide Rectangular Channels:** As the width ($B$) becomes much larger than the depth ($y$) ($B/y \gg 1$), the tractive force on the bed ($ \tau_{0,bed} = \rho g y S_0 $) is approximately uniform. The tractive force on the banks is higher due to greater depth near the banks.
    *   **Trapezoidal Channels:** This is a common and practical shape for stable channels.
        *   The side slopes are crucial. Gentler slopes reduce the tractive force on the banks.
        *   A well-designed trapezoidal section aims to equalize the tractive force on the bed and banks as much as possible.
    *   **Semicircular Channels:** Theoretically, a semicircular channel provides the most uniform tractive force distribution as the wetted perimeter is minimized for a given area, leading to a higher hydraulic radius and generally lower boundary shear stress. However, they are often difficult to construct and maintain.

*   **Design Considerations for Trapezoidal Channels:**
    *   **Side Slope Angle ($\alpha$):** The angle of the bank with the horizontal. A slope of 1:1 (vertical:horizontal) corresponds to a $\tan(\alpha) = 1$ or $\alpha = 45^\circ$. Gentler slopes (e.g., 2:1, 3:1) are more stable.
    *   **Relationship between depth ($y$) and width ($B$):** For a given discharge and slope, a wider, shallower channel generally experiences lower average tractive force than a narrower, deeper one.
    *   **Constant Tractive Force Concept:** The goal is often to design a section where the tractive force is roughly the same on the bed and the banks.

*   **Mathematical Formulation for Trapezoidal Channels:**
    *   For a trapezoidal channel with bottom width $B$, flow depth $y$, and side slope angle $\alpha$ (measured from the horizontal), the bank slope is $m = \cot(\alpha)$.
    *   Area ($A$) = $(B + my)y$
    *   Wetted Perimeter ($P$) = $B + 2y \sqrt{1 + m^2}$
    *   Hydraulic Radius ($R$) = $A/P = \frac{(B + my)y}{B + 2y \sqrt{1 + m^2}}$
    *   Mean Tractive Force on Bed $\tau_{0,bed} = \rho g y S_0$
    *   Mean Tractive Force on Banks $\tau_{0,bank} = \rho g R S_0$ (This is an approximation; the actual force varies.)

    *   **Stable Hydraulic Section Design Principle:** Find a relationship between $B$, $y$, $m$, and $S_0$ such that the tractive force on all boundaries is below the critical value, often aiming for a state where the tractive force on the bed and banks are approximately equal, or where the maximum tractive force on any boundary is minimized.

    *   **Common Design Approach:** For a given flow depth ($y$) and desired side slope ($m$), determine the bottom width ($B$) that provides a desired hydraulic radius or balances tractive forces.

    *   **Example of a "Stable" Trapezoid (based on simplified analysis):** A common guideline for stable trapezoidal channels in granular materials suggests that the tractive force on the bank should be roughly proportional to the tractive force on the bed, with the proportionality constant depending on the side slope.
        *   For a given particle size $d$, we need $ \tau_0 \le \tau_c $.
        *   We can express $\tau_c$ in terms of $d$ and sediment properties (e.g., using Shields' relationship).
        *   Then, we relate $y$, $R$, and $S_0$ to ensure $\rho g R S_0 \le \tau_c$.

---

### 4. Practical Applications and Examples

*   **Drainage Ditches:** Designed to carry stormwater runoff efficiently and without erosion. Often have well-defined trapezoidal cross-sections with vegetated banks for added stability.
*   **Irrigation Channels:** Must deliver water efficiently without losing water through seepage or eroding their beds.
*   **Spillways and Lined Channels:** While lining (concrete, riprap) provides inherent stability, understanding tractive force is crucial for designing unlined spillways or for selecting appropriate lining materials.
*   **River Engineering:** Analyzing and predicting scour potential around bridge piers or in natural river bends.

---

### 5. Practice Questions and Exercises

**Question 1:**
A wide rectangular channel ($B \to \infty$) carries water at a depth of 0.8 m on a slope of 0.001. The water density is 1000 kg/m³. Calculate the tractive force per unit area on the channel bed.

**Answer 1:**
Using the formula for a wide rectangular channel:
$ \tau_0 = \rho g y S_0 $
$ \tau_0 = (1000 \, \text{kg/m}^3) \times (9.81 \, \text{m/s}^2) \times (0.8 \, \text{m}) \times (0.001) $
$ \tau_0 = 7.848 \, \text{N/m}^2 $

**Question 2:**
Consider a trapezoidal channel with a bottom width $B = 2.0$ m, flow depth $y = 1.0$ m, and side slopes of 1 vertical to 2 horizontal ($m=2$). The channel slope $S_0 = 0.0005$. The flow is steady and uniform. Assume water density $\rho = 1000$ kg/m³ and $g = 9.81$ m/s².
a) Calculate the cross-sectional area ($A$) and wetted perimeter ($P$).
b) Calculate the hydraulic radius ($R$).
c) Calculate the mean tractive force on the channel bed.
d) Calculate the mean tractive force on the channel banks.

**Answer 2:**
a) Cross-sectional Area ($A$) = $(B + my)y = (2.0 + 2 \times 1.0) \times 1.0 = (2.0 + 2.0) \times 1.0 = 4.0 \, \text{m}^2$.
   Wetted Perimeter ($P$) = $B + 2y \sqrt{1 + m^2} = 2.0 + 2 \times 1.0 \times \sqrt{1 + 2^2} = 2.0 + 2.0 \times \sqrt{5} \approx 2.0 + 2.0 \times 2.236 = 2.0 + 4.472 = 6.472 \, \text{m}$.

b) Hydraulic Radius ($R$) = $A/P = 4.0 \, \text{m}^2 / 6.472 \, \text{m} \approx 0.618 \, \text{m}$.

c) Mean Tractive Force on the Channel Bed ($ \tau_{0,bed} $): Assuming the bed tractive force is primarily governed by the flow depth (similar to wide channels for approximation):
   $ \tau_{0,bed} = \rho g y S_0 = (1000 \, \text{kg/m}^3) \times (9.81 \, \text{m/s}^2) \times (1.0 \, \text{m}) \times (0.0005) = 4.905 \, \text{N/m}^2 $.

d) Mean Tractive Force on the Channel Banks ($ \tau_{0,bank} $): Using the hydraulic radius:
   $ \tau_{0,bank} = \rho g R S_0 = (1000 \, \text{kg/m}^3) \times (9.81 \, \text{m/s}^2) \times (0.618 \, \text{m}) \times (0.0005) \approx 3.031 \, \text{N/m}^2 $.
   *Note: In reality, the tractive force on the banks is not uniform and the formula using R is an average. The higher tractive force is expected at the top of the bank and near the bed-bank junction.*

**Question 3:**
A channel is to be designed with a granular bed material having a critical tractive force of $5.0 \, \text{N/m}^2$. The channel slope is $S_0 = 0.001$, and the water density $\rho = 1000 \, \text{kg/m}^3$. What is the maximum allowable flow depth ($y$) for a wide rectangular channel to prevent scour?

**Answer 3:**
We need $\tau_0 \le \tau_c$.
$ \rho g y S_0 \le \tau_c $
$ (1000 \, \text{kg/m}^3) \times (9.81 \, \text{m/s}^2) \times y \times (0.001) \le 5.0 \, \text{N/m}^2 $
$ 9.81 y \le 5.0 $
$ y \le \frac{5.0}{9.81} \approx 0.5097 \, \text{m} $
The maximum allowable flow depth is approximately 0.51 m.

---

### 6. Important Points to Remember

*   **Tractive Force:** The driving force for sediment motion and erosion.
*   **Critical Tractive Force:** The threshold force required to initiate motion. It depends on sediment properties.
*   **Stability Condition:** $\tau_0 \le \tau_c$.
*   **Wide Rectangular Channel Tractive Force:** $\tau_0 = \rho g y S_0$.
*   **Mean Tractive Force (general):** $\tau_0 = \rho g R S_0$.
*   **Stable Hydraulic Section:** Designed to withstand erosive forces, often by controlling flow depth, channel geometry, and side slopes.
*   **Trapezoidal Channels:** Common for stable designs, with side slopes being a critical parameter.
*   **Scour Dominant Channels:** Characterized by higher velocities and coarser materials, where erosion is the primary concern.

---
