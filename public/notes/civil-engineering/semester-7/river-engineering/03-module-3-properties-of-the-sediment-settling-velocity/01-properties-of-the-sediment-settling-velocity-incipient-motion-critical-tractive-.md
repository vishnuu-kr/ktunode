---
title: "Properties of the sediment settling velocity, - incipient motion critical tractive force, empirical equations- scour criteria, Shield’s analysis –White’s analysis Regimes of flow and resistance;"
subject: "RIVER ENGINEERING"
module: "Module 3: Properties of the sediment settling velocity, "
branch: "Civil Engineering"
semester: 7
topicId: "689f15cf56b5e963ba8114ff"
status: "completed"
scrapedAt: "2026-05-20T19:01:30.926Z"
---
# River Engineering: Module 3 - Properties of Sediment Settling Velocity

## Table of Contents

1.  [Introduction to Sediment Settling Velocity](#introduction)
2.  [Incipient Motion and Critical Tractive Force](#incipient-motion)
    *   [Tractive Force Theory](#tractive-force-theory)
    *   [Critical Tractive Force](#critical-tractive-force)
    *   [Factors Affecting Critical Tractive Force](#factors-affecting-critical-tractive-force)
    *   [Empirical Equations for Critical Tractive Force](#empirical-equations)
3.  [Shield's Analysis](#shields-analysis)
    *   [Shield's Criterion](#shields-criterion)
    *   [Shield's Parameter](#shields-parameter)
    *   [Limitations of Shield's Analysis](#limitations-of-shields)
4.  [White's Analysis](#whites-analysis)
    *   [White's Equation](#whites-equation)
    *   [Comparison with Shield's Analysis](#comparison-with-shields)
5.  [Scour Criteria](#scour-criteria)
    *   [Types of Scour](#types-of-scour)
    *   [Predicting Scour Depth](#predicting-scour-depth)
6.  [Regimes of Flow and Resistance](#regimes-of-flow)
    *   [Flow Regimes](#flow-regimes)
    *   [Resistance in Sediment Transport](#resistance-in-sediment-transport)
    *   [Resistance Coefficients](#resistance-coefficients)
7.  [Practice Questions and Answers](#practice-questions)

---

## 1. Introduction to Sediment Settling Velocity

Sediment transport is a fundamental process in river engineering, influencing channel morphology, infrastructure design, and water quality. Understanding the properties of sediment, particularly its settling velocity, is crucial for analyzing these processes.

### Key Concepts:

*   **Sediment:** Any particulate material transported by flowing water. This can range from fine silt and clay to coarse gravel and boulders.
*   **Settling Velocity ($v_s$):** The terminal velocity of a sediment particle when it falls through a stationary fluid under the influence of gravity and buoyancy. It's the velocity at which the drag force equals the effective gravitational force.

### Factors Affecting Settling Velocity:

*   **Particle Size (Diameter, $d$):** Larger particles generally settle faster.
*   **Particle Shape:** Spherical particles settle faster than irregular or elongated ones.
*   **Particle Density ($\rho_s$):** Denser particles settle faster.
*   **Fluid Density ($\rho$):** Denser fluids reduce settling velocity.
*   **Fluid Viscosity ($\mu$):** Higher viscosity increases drag and reduces settling velocity.
*   **Fluid Temperature:** Affects fluid density and viscosity.
*   **Concentration of Suspended Sediment:** In highly concentrated flows, particle interactions can affect settling.

### Stokes' Law (for laminar flow around a particle, small Reynolds number):

For a single, spherical particle in a viscous fluid:

$v_s = \frac{1}{18} \frac{\rho_s - \rho}{\mu} g d^2$

Where:
*   $v_s$ = Settling velocity
*   $\rho_s$ = Density of sediment particle
*   $\rho$ = Density of fluid
*   $g$ = Acceleration due to gravity
*   $\mu$ = Dynamic viscosity of fluid
*   $d$ = Diameter of sediment particle

**Important Note:** Stokes' Law is valid for laminar flow conditions around the particle. As particle size and velocity increase, the flow becomes turbulent, and Stokes' Law is no longer accurate. More complex formulas are needed for larger particles.

---

## 2. Incipient Motion and Critical Tractive Force

### Tractive Force Theory

The Tractive Force Theory, also known as the Critical Tractive Force Theory, proposes that sediment particles begin to move (incipient motion) when the tractive force exerted by the flowing water on the particle bed exceeds a certain critical value.

*   **Tractive Force:** The force per unit area of the channel bed exerted by the flowing water. It is primarily due to shear stress.
*   **Shear Stress ($\tau_b$):** The tangential force per unit area acting on the channel bed.

In a wide, straight channel with uniform flow, the shear stress at the bed can be expressed as:

$\tau_b = \rho g R S_0$

Where:
*   $\tau_b$ = Bed shear stress
*   $\rho$ = Density of water
*   $g$ = Acceleration due to gravity
*   $R$ = Hydraulic radius (Area of flow / Wetted perimeter)
*   $S_0$ = Bed slope

For wide channels, $R \approx y$ (depth of flow), so $\tau_b \approx \rho g y S_0$.

### Critical Tractive Force ($\tau_c$)

The critical tractive force is the minimum tractive force required to initiate the movement of sediment particles on the channel bed. It is a property of the sediment material and its arrangement on the bed.

The force exerted by the water on a sediment particle can be related to the bed shear stress. For incipient motion, the critical shear stress per unit area of the particle's projected area is considered.

Alternatively, we can consider the critical tractive force as the critical shear stress acting on the particle.

### Factors Affecting Critical Tractive Force:

*   **Particle Size ($d$):** Larger particles require a greater force to move.
*   **Particle Shape:** Irregular shapes might be more stable.
*   **Particle Density ($\rho_s$):** Denser particles are more resistant to motion.
*   **Bed Cohesion:** Fine sediments (silt, clay) can exhibit cohesion, increasing resistance to motion.
*   **Interparticle Forces:** Friction and interlocking between particles.
*   **Armoring:** The presence of larger, stable particles on the bed can protect smaller particles beneath from erosion.
*   **Bed Surface Roughness:** The presence of larger bedforms (ripples, dunes) can alter the local shear stress.

### Empirical Equations for Critical Tractive Force

Various empirical equations have been developed to estimate the critical tractive force. These are often expressed in terms of a dimensionless critical shear stress or critical velocity.

**1. Shields' Equation (more detailed below):**

This is a foundational equation that relates the critical shear stress to particle size and flow properties using dimensionless parameters.

**2. Critical Velocity:**

Another approach is to define a critical velocity ($v_c$) – the average flow velocity required to initiate motion. However, critical velocity is less fundamental as it depends on the depth of flow and channel width.

*   **Hjulström Curve:** A graphical representation relating sediment particle size to the velocity required for erosion, transport, and deposition. It shows that for very fine particles (silt/clay), higher velocities are needed for erosion due to cohesion.

**3. Kalinske's Equation:**

An empirical formula for critical velocity:

$v_c = A \sqrt{\frac{\rho_s - \rho}{\rho} g d}$

Where $A$ is an empirical coefficient (often around 0.2-0.3).

**4. Meyer-Peter and Müller's Formula:**

Primarily for bedload transport but also provides insight into incipient motion.

---

## 3. Shield's Analysis

Shield's analysis is a seminal work in sediment transport that provides a criterion for incipient motion based on dimensionless parameters.

### Shield's Criterion

Shields proposed that the condition for incipient motion of sediment particles on a flat, horizontal bed is governed by a dimensionless parameter, now known as the **Shields parameter** ($\theta$).

The fundamental idea is that motion starts when the destabilizing forces (due to shear stress) overcome the stabilizing forces (gravity, buoyancy, and interparticle forces).

### Shields Parameter ($\theta$)

The Shields parameter is defined as the ratio of the destabilizing force (related to bed shear stress) to the stabilizing force (related to the submerged weight of the particle).

$\theta = \frac{\tau_c}{(\rho_s - \rho) g d}$

Where:
*   $\theta$ = Shields parameter (dimensionless)
*   $\tau_c$ = Critical shear stress (or shear stress causing incipient motion)
*   $\rho_s$ = Density of sediment particle
*   $\rho$ = Density of fluid
*   $g$ = Acceleration due to gravity
*   $d$ = Representative diameter of the sediment particle

**Shields' critical value ($\theta_c$):** Shields found that for a given particle size, there is a critical value of $\theta$ below which no motion occurs, and above which motion begins. This critical value, $\theta_c$, is not a constant but varies with the particle Reynolds number ($Re_*$).

$Re_* = \frac{u_* d}{\nu}$

Where:
*   $u_*$ = Shear velocity ($\sqrt{\tau_b / \rho}$)
*   $\nu$ = Kinematic viscosity of the fluid

**Shields Curve:** A plot of $\theta_c$ versus $Re_*$.

*   **Laminar Regime ($Re_* < \sim5$):** In this regime, viscous forces dominate. $\theta_c$ generally increases with $Re_*$.
    *   For very small $Re_*$ (fine particles), $\theta_c \approx 0.316 / Re_*^{0.6}$ (derived from Stokes' Law and shear stress).
*   **Transitional Regime ($\sim5 < Re_* < \sim1000$):** A mix of viscous and inertial forces. $\theta_c$ decreases as $Re_*$ increases.
*   **Turbulent Regime ($Re_* > \sim1000$):** Inertial forces dominate. $\theta_c$ becomes relatively constant, approximately **$\theta_c \approx 0.045$ to $0.06$** for a flat, non-cohesive bed.

**Example:** For motion to begin, the calculated Shields parameter ($\theta$) must be greater than or equal to the critical Shields parameter ($\theta_c$) for the given particle size and flow conditions.

### Limitations of Shield's Analysis

*   **Assumes a Flat, Horizontal Bed:** Real riverbeds are rarely flat and horizontal; they have slopes and are covered with bedforms.
*   **Assumes Uniform Particle Size:** Rivers have a range of sediment sizes.
*   **Ignores Cohesion:** Not applicable to fine sediments.
*   **Definition of $\tau_c$ for Non-Flat Beds:** Applying $\tau_c$ to the average bed shear stress can be misleading when ripples or dunes are present.
*   **The value of $\theta_c$ in the turbulent regime can vary based on experimental conditions and sediment properties.**

---

## 4. White's Analysis

White's analysis (often referring to W. R. White's contributions) builds upon and refines the understanding of incipient motion, particularly by considering the effect of bedforms and using different empirical relationships.

While there isn't one single "White's analysis" as universally recognized as Shield's, researchers like White have contributed significantly to the development of more refined criteria. One common approach associated with White is the use of **effective shear stress** or considering the **instantaneous shear stress** experienced by particles, which can be higher than the mean shear stress due to turbulence and bedforms.

### White's Approach (Conceptual)

White's work often emphasizes the importance of:

1.  **Particle Reynolds Number ($Re_*$):** Similar to Shield's analysis, White's work also utilizes the particle Reynolds number to distinguish flow regimes around the particle.
2.  **Probability of Motion:** Recognizing that incipient motion is a probabilistic event rather than a sharp transition.
3.  **Bed Roughness and Bedforms:** Explicitly accounting for the influence of bedforms (ripples and dunes) on the local shear stress experienced by particles. This is a significant improvement over Shield's assumption of a flat bed.
4.  **The use of different empirical relationships for the critical Shields parameter, often tailored to specific experimental conditions or sediment types.**

### A Possible Interpretation of "White's Analysis" in this Context

One common extension and refinement of Shield's analysis, often referenced in works by researchers like White, involves using alternative empirical formulas for the critical Shields parameter or incorporating corrections for bedforms.

For instance, some analyses use a **modified Shields parameter** or a **local Shields parameter** that accounts for the varying shear stress on different parts of a bedform.

**Example of a Refinement (Conceptual, not a single definitive formula):**

Instead of using a single $\tau_c$ for the entire bed, White's work might lead to considering a distribution of critical shear stresses based on particle packing and local flow acceleration over bedforms.

**Relationship to Empirical Equations:**

White's contributions are often seen in the **development of more accurate empirical equations** for the Shields parameter across different flow regimes and bed conditions. These equations might be derived from extensive laboratory or field data.

**Comparison with Shield's Analysis:**

*   **Shields:** A foundational, simpler approach assuming a flat, non-cohesive bed. Provides a good starting point.
*   **White (and others):** More sophisticated, often incorporating the effects of bedforms, turbulence fluctuations, and using refined empirical relationships that may yield more accurate predictions in complex natural river environments.

**It's important to note that the term "White's analysis" can be broad. For specific applications, you might encounter different equations attributed to or developed by researchers like White that refine Shield's criterion.**

---

## 5. Scour Criteria

Scour is the erosion of the riverbed and/or banks by the action of flowing water. It is a critical concern in river engineering, particularly around structures like bridge piers, abutments, and groynes.

### Types of Scour:

1.  **General Scour:** The overall lowering of the riverbed over a significant reach due to changes in flow regime, sediment supply, or downstream obstructions.
2.  **Local Scour:** Erosion that occurs at specific locations, typically around structures or due to localized high-velocity flows.
    *   **Contraction Scour:** Occurs when the flow area is reduced (e.g., at a bridge opening), leading to increased velocities and shear stresses.
    *   **Pier Scour:** Erosion around bridge piers due to flow diversion and vortex formation.
    *   **Abutment Scour:** Erosion at bridge abutments due to flow separation and horseshoe vortex formation.
    *   **Aggradation/Degradation:** Periods of sediment deposition (aggradation) or erosion (degradation) of the channel bed.

### Predicting Scour Depth

Predicting scour depth is essential for ensuring the stability of hydraulic structures. Various empirical and semi-empirical methods are used.

**Key Parameters for Scour Prediction:**

*   **Flow Velocity and Depth:** Higher velocities and depths generally lead to more significant scour.
*   **Shear Stress:** Critical shear stress and the actual shear stress on the bed.
*   **Sediment Properties:** Size, shape, density, and cohesion of the bed material.
*   **Structure Geometry:** Shape and size of piers, abutments, etc.
*   **Flow Angle:** The angle at which the flow approaches the structure.
*   **Bedform Characteristics:** Presence of ripples or dunes.

**Empirical Equations for Scour (Examples):**

There are numerous empirical equations, often specific to certain structure types and conditions.

*   **For Pier Scour:**
    *   **HEC-18 (Hydraulic Engineering Center):** A widely used manual that provides methods for calculating clear-water scour (no sediment in upstream flow) and live-bed scour (sediment present).
    *   **Richardson and Davani's Equation:**
        $d_s = 2.0 K_{sh} K_{w} K_{s} K_{i} (\frac{a}{y})^{0.43} y$
        Where:
        *   $d_s$ = Scour depth
        *   $K_{sh}$ = Shape correction factor (e.g., for circular vs. square piers)
        *   $K_{w}$ = Flow angle correction factor
        *   $K_{s}$ = Bed armoring factor
        *   $K_{i}$ = Submergence factor
        *   $a$ = Pier width
        *   $y$ = Flow depth

*   **For Contraction Scour:**
    *   **HEC-18 methods:** Based on principles of continuity and sediment transport capacity.

**Clear-Water Scour vs. Live-Bed Scour:**

*   **Clear-Water Scour:** Occurs when the approaching flow is sediment-free. Erosion is driven solely by the flow's ability to overcome the bed material's resistance.
*   **Live-Bed Scour:** Occurs when the approaching flow already carries sediment. The flow has a higher sediment transport capacity through the constriction, leading to additional erosion as it tries to transport more sediment than is supplied.

**Scour Criteria:** A structure is considered to be at risk of scour if the predicted scour depth exceeds the depth of protection or the foundation depth of the structure. Safety factors are applied in design.

---

## 6. Regimes of Flow and Resistance

The nature of flow in a river, particularly its velocity and turbulence characteristics, directly influences sediment transport and erosion.

### Flow Regimes

Flow in rivers carrying sediment can be classified into different regimes based on the relationship between flow velocity, sediment size, and the presence of bedforms.

1.  **Lower Flow Regimes (Fine Sediment Transport):**
    *   **Laminar Flow (around particles):** Stokes' Law applies. Fine particles may remain suspended.
    *   **Interfacial Flow:** Transition where particles start to roll and slide.
    *   **Suspension:** Fine particles are carried within the flow, not settling rapidly.

2.  **Upper Flow Regimes (Coarse Sediment Transport):**
    *   **Saltation:** Particles lift off the bed, travel a short distance, and then fall back, bouncing off the bed.
    *   **Traction (Rolling/Sliding):** Larger particles are dragged along the bed.
    *   **Suspension (for large particles):** Very high turbulent flows can suspend large particles.

**Relation to Bedforms:**

The flow regime significantly influences the development of bedforms (ripples and dunes), which in turn affect resistance and further sediment transport.

*   **Ripples:** Small, wave-like bedforms formed at lower velocities and by finer sediments. Formed in the lower flow regime.
*   **Dunes:** Larger, wave-like bedforms formed at higher velocities and by coarser sediments. Formed in the upper flow regime.
*   **Anti-dunes:** Bedforms that move upstream or remain stationary relative to the flow. Occur at very high velocities, typically in the upper flow regime.
*   **Plane Bed:** A smooth, flat bed with no bedforms, occurring in transition zones.

### Resistance in Sediment Transport

Flow resistance in a river is what causes the flow to slow down. It's primarily due to friction at the bed and banks, and also influenced by the presence of bedforms.

*   **Manning's Roughness Coefficient ($n$):** A common parameter representing flow resistance. It's influenced by the grain roughness of the bed material and the size and shape of bedforms.
    *   For rougher beds (larger grains, dunes), $n$ is higher.
    *   For smoother beds (finer grains, ripples), $n$ is lower.
*   **Chezy Coefficient ($C$):** Another resistance coefficient related to velocity and hydraulic radius.
*   **Darcy-Weisbach Friction Factor ($f$):** A dimensionless friction factor used in fluid mechanics.

**Factors Affecting Resistance:**

*   **Bed Roughness:** Grain size distribution of the bed material.
*   **Bedforms:** Dunes and ripples significantly increase resistance compared to a plane bed. The larger the bedforms, the greater the resistance.
*   **Flow Depth:** Resistance generally decreases with increasing flow depth.
*   **Water Viscosity:** Affects viscous shear.
*   **Presence of Vegetation:** Can significantly increase resistance.

### Resistance Coefficients and Sediment Transport

The resistance coefficient is crucial because it determines the flow velocity and shear stress at the bed, which are the primary drivers of sediment movement.

*   **When dunes are present:** The resistance is higher, leading to lower velocities for a given slope and depth compared to a plane bed. However, the localized accelerations of flow over the dune crests and the turbulent wakes behind the dunes can enhance sediment transport.
*   **When the bed is armored:** The presence of larger, stable particles on the bed can reduce the overall roughness and resistance, even if the underlying material is finer.

**Van Rijn's Resistance Model:**

Van Rijn developed methods to account for the combined effect of grain roughness and dune roughness on the overall flow resistance, allowing for more accurate predictions of velocity and shear stress in sand-bed rivers.

---

## 7. Practice Questions and Answers

**Question 1:** Define the Shields parameter and state its significance in river engineering.

**Answer:** The Shields parameter ($\theta$) is a dimensionless quantity defined as the ratio of the critical shear stress ($\tau_c$) to the stabilizing forces acting on a sediment particle (related to its submerged weight): $\theta = \frac{\tau_c}{(\rho_s - \rho) g d}$. Its significance lies in providing a dimensionless criterion for incipient motion of sediment particles on a channel bed. When the Shields parameter of the flow exceeds the critical Shields parameter for the given sediment and flow conditions, motion is expected to begin.

**Question 2:** Explain the difference between clear-water scour and live-bed scour.

**Answer:**
*   **Clear-water scour** occurs when the approaching flow to an obstruction (like a bridge pier) is essentially free of suspended sediment. Erosion is caused by the flow's ability to entrain sediment from the bed.
*   **Live-bed scour** occurs when the approaching flow already contains sediment. When the flow passes through a constriction or around an obstruction, its sediment transport capacity often increases, leading to additional erosion of the bed as it attempts to transport more sediment than is supplied upstream.

**Question 3:** What are the primary factors that influence the settling velocity of a sediment particle?

**Answer:** The primary factors influencing the settling velocity of a sediment particle are:
*   Particle size (diameter)
*   Particle shape
*   Particle density
*   Fluid density
*   Fluid viscosity

**Question 4:** Describe the relationship between the Shields parameter and the particle Reynolds number, and its implications for incipient motion.

**Answer:** The Shields parameter ($\theta$) is plotted against the particle Reynolds number ($Re_*$). This relationship, known as the Shields curve, shows that:
*   For very small $Re_*$ (laminar flow around the particle), $\theta_c$ increases with $Re_*$.
*   As $Re_*$ increases into the transitional and then turbulent regimes, $\theta_c$ decreases and then becomes relatively constant (around 0.045-0.06 for a flat bed in the turbulent regime).
This means that the critical shear stress (and hence flow conditions) required to initiate motion depends on the flow regime around the particle. Fine particles in slow flows (low $Re_*$) need a relatively higher Shields parameter to move compared to coarser particles in faster flows (high $Re_*$), up to a certain point.

**Question 5:** If the critical Shields parameter for a particular sediment bed is $0.05$, and the calculated Shields parameter for the flow conditions is $0.06$, will incipient motion occur? Justify your answer.

**Answer:** Yes, incipient motion will occur. The condition for incipient motion is when the Shields parameter of the flow ($\theta$) is greater than or equal to the critical Shields parameter ($\theta_c$). Since $0.06 > 0.05$, the flow is sufficient to overcome the resistance of the sediment particles and initiate movement.

---
