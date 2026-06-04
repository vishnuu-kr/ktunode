---
title: "effect of friction-super saturated flow"
subject: "POWER PLANT ENGINEERING"
module: "Module 2: Steam generator classifications"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1651d0cf4804463785"
status: "completed"
scrapedAt: "2026-05-20T18:06:27.920Z"
---
# Power Plant Engineering: Module 2 - Steam Generator Classifications

## Topic: Effect of Friction on Supersaturated Flow

This topic delves into the behavior of steam as it expands through nozzles and turbine passages, particularly when it undergoes condensation, and the significant impact of friction on this process. Understanding this is crucial for optimizing steam generator performance and turbine efficiency.

---

### 1. Learning Outcomes Covered:

*   **Understanding the behavior of steam:** This section explains how steam behaves during expansion, especially in the supersaturated region, and how friction influences this.
*   **Nozzle and Turbine Performance:** The friction effects directly impact the isentropic efficiency and overall performance of steam nozzles and turbines, which are key components of steam power plants.
*   **Rankine Cycle Considerations:** While not directly calculating cycle parameters, the understanding of nozzle and turbine losses due to friction informs the deviations from ideal Rankine cycle assumptions.

---

### 2. Key Concepts and Definitions:

*   **Supersaturated Flow:** When steam expands through a nozzle, its temperature can drop below the saturation temperature corresponding to its pressure *without* condensation occurring. This unstable state is known as supersaturated flow or metastable flow. The steam exists as a vapor even though it is in a region where condensation would normally begin.
    *   *Reference:* El Wakil, M. M. (2017) mentions supersaturation as a phenomenon in nozzle flows where condensation is delayed.
*   **Condensation Delay (Lag of Condensation):** The time lag required for nucleation (formation of initial droplets) and droplet growth during the expansion process.
*   **Nucleation:** The process of forming stable embryonic droplets of liquid from the supersaturated vapor.
*   **Droplet Growth:** Once nuclei are formed, they grow by condensation of vapor molecules onto them.
*   **Saturation Line:** The boundary in a phase diagram (e.g., T-s diagram) separating the vapor phase from the two-phase liquid-vapor mixture.
*   **Dry Saturation Line:** The line on a T-s diagram representing saturated vapor.
*   **Friction:** The resistive force encountered by a fluid flowing through a conduit due to the viscosity of the fluid and the roughness of the conduit walls. In steam flow, this manifests as energy loss and a reduction in the velocity achieved.
*   **Isentropic Flow:** An ideal, reversible flow process where entropy remains constant. This serves as a benchmark for real flow processes.
*   **Real Flow (Adiabatic but Irreversible):** In reality, steam flow is adiabatic (no heat transfer) but irreversible due to friction and other dissipative mechanisms. This leads to an increase in entropy.
*   **Isentropic Efficiency ($\eta_{isen}$):** The ratio of the actual kinetic energy gain to the isentropic kinetic energy gain for the same pressure drop. For nozzles, it's often expressed in terms of velocity:
    $\eta_{isen} = \frac{V_{actual}^2}{V_{isentropic}^2} = \frac{h_{actual} - h_0}{h_{isentropic} - h_0}$
    where $V$ is velocity, $h$ is enthalpy, and subscripts denote actual, isentropic, and stagnation conditions.
*   **Friction Factor (f):** A dimensionless parameter used in fluid mechanics to quantify the frictional losses in pipe flow (e.g., Darcy-Weisbach equation). While the direct application of Darcy-Weisbach to steam nozzles is complex, the concept of friction causing pressure drop and velocity reduction is analogous.
*   **Mach Number (M):** The ratio of the fluid velocity to the local speed of sound.
*   **Divergent Nozzle:** A nozzle where the cross-sectional area increases. Typically used for supersonic flow.
*   **Convergent Nozzle:** A nozzle where the cross-sectional area decreases. Used for subsonic flow.
*   **Convergent-Divergent Nozzle (De Laval Nozzle):** A nozzle with a converging section followed by a diverging section, used for accelerating flow from subsonic to supersonic speeds.

---

### 3. Understanding Supersaturated Flow and Friction:

When steam expands through a nozzle, it cools and its specific volume increases. If the expansion is rapid, the steam can enter the region of supersaturation.

*   **Ideal Expansion (Isentropic):** In an ideal isentropic expansion, steam would begin to condense as it crosses the saturation line. This condensation releases latent heat, which further increases the temperature and velocity of the steam. This means the isentropic expansion of saturated or wet steam is more efficient in terms of achieving higher exit velocities compared to dry saturated steam expanding isentropically.
*   **Real Expansion with Supersaturation:** In a real expansion, there is a delay in condensation. This means the steam remains in a vapor state even after crossing the saturation line.
    *   **Effect of Supersaturation on Performance:**
        *   **Increased Velocity:** Because condensation is delayed, the latent heat release is also delayed. This means the steam expands as a superheated vapor for a longer period, achieving higher velocities than if condensation had started immediately. The specific volume also increases more rapidly, contributing to higher velocities.
        *   **Friction Losses:** While supersaturation can lead to higher initial velocities, the flow is inherently turbulent and prone to friction. Friction causes:
            *   **Pressure Drop:** A loss of pressure beyond that predicted by isentropic expansion.
            *   **Velocity Reduction:** A reduction in the actual exit velocity compared to the isentropic expectation.
            *   **Entropy Increase:** The process becomes irreversible, leading to an increase in the entropy of the steam.
*   **Re-emergence of Condensation:** As the steam continues to expand in the supersaturated state, the degree of supersaturation increases. Eventually, nucleation will occur, and condensation will begin. This condensation is often rapid and occurs in a very short axial length of the nozzle, leading to a sudden increase in the temperature and a decrease in the velocity of the steam. This is known as the "Wilson Line" or the point of condensation.

---

### 4. Friction in Nozzles and Turbine Blades:

Friction is a primary cause of irreversibility in steam flow through power plant components.

*   **Friction in Nozzles:**
    *   **Mechanism:** Viscous shear stresses between fluid layers and between the fluid and the nozzle walls.
    *   **Consequences:**
        *   **Reduced Exit Velocity:** The actual exit velocity is lower than the isentropic velocity.
        *   **Lower Mass Flow Rate:** For a given nozzle geometry and inlet conditions, friction can slightly reduce the mass flow rate.
        *   **Increased Exit Pressure:** The pressure at the nozzle exit will be higher than that for an isentropic expansion.
        *   **Loss of Useful Energy:** The kinetic energy lost due to friction could have been converted into useful work.
    *   *Reference:* P. K. Nag's "Power Plant Engineering" discusses frictional losses in nozzles and their impact on efficiency.
*   **Friction in Turbine Blades:**
    *   **Mechanism:** Viscous shear stresses on the curved surfaces of turbine blades. This includes friction in the boundary layers formed on the blade surfaces.
    *   **Consequences:**
        *   **Reduced Blade Efficiency:** The steam does less work on the blades than it would in an ideal frictionless scenario.
        *   **Lower Turbine Work Output:** This translates to a lower power output from the turbine.
        *   **Increased Steam Temperature at Exit:** Due to energy dissipation, the steam leaving the turbine will be at a higher temperature.
    *   *Reference:* El Wakil's "Power Plant Technology" and Nagpal & Sharma's "Power Plant Engineering" likely cover frictional losses on turbine blade profiles.

---

### 5. Interplay of Supersaturation and Friction:

The relationship between supersaturation and friction is complex.

*   **Supersaturation can exacerbate friction:** The highly disturbed and turbulent nature of flow associated with rapid condensation in the supersaturated region can potentially increase frictional effects.
*   **Friction can influence supersaturation:** While friction itself doesn't cause supersaturation, the resulting irreversibility and increased entropy can alter the expansion path, indirectly affecting the point and extent of condensation.
*   **Nozzle Design Considerations:**
    *   **Convergent-Divergent Nozzles:** For supersonic flow, the divergence angle is critical. Too steep an angle can lead to flow separation and increased friction.
    *   **Surface Finish:** Smooth nozzle surfaces reduce frictional losses.
    *   **Length:** Shorter nozzles generally have lower total frictional losses, but this needs to be balanced with achieving the desired expansion.

---

### 6. Measurement and Quantification:

*   **Experimental Measurement:** Actual velocity and pressure profiles can be measured in research settings.
*   **Empirical Correlations:** Engineers often use empirical correlations and coefficients derived from experiments to account for frictional losses in nozzle and turbine performance calculations.
*   **Isentropic Efficiency:** This is the most common way to quantify the combined effect of friction and other irreversibilities. A lower isentropic efficiency indicates greater losses.

---

### 7. Examples:

*   **Example 1: Nozzle Performance**
    Consider steam expanding from 10 bar, 300°C to 1 bar.
    *   **Isentropic Expansion:** If the expansion were perfectly isentropic, we could determine the exit velocity using steam tables or property software.
    *   **Real Expansion:** Due to friction and potential supersaturation effects, the actual exit velocity will be less than the isentropic velocity. An isentropic efficiency of, say, 90% would mean the actual velocity is 90% of the isentropic velocity. This loss means less kinetic energy is available for the turbine.
*   **Example 2: Turbine Stage Efficiency**
    In a steam turbine stage, steam expands and does work on the rotating blades. Friction on the blade surfaces reduces the amount of work extracted. If an ideal turbine stage could extract 100 kJ of work per kg of steam, a real stage with frictional losses might only extract 90 kJ, resulting in a stage efficiency of 90%.

---

### 8. Important Points to Remember:

*   **Supersaturation is a delay in condensation, not absence of it.** Condensation eventually occurs, releasing latent heat and altering the expansion.
*   **Friction is a major source of irreversibility in steam flow.** It reduces velocities, increases pressures, and leads to energy losses.
*   **The effects of supersaturation and friction are intertwined.** Supersaturation can influence the nature of frictional losses.
*   **Isentropic efficiency is a key parameter to assess real flow performance.**
*   **Nozzle and turbine designs aim to minimize frictional losses** through optimized geometry and smooth surfaces.
*   **The phenomenon of supersaturation can paradoxically lead to higher velocities *before* condensation occurs** compared to immediate condensation, but the overall efficiency is still impacted by irreversibilities.

---

### 9. Practice Questions with Answers:

**Question 1:** Define supersaturated flow and explain why it occurs in steam nozzles.
**Answer:** Supersaturated flow occurs when steam expands rapidly through a nozzle and its temperature drops below the saturation temperature corresponding to its pressure *without* undergoing condensation. This happens because there is a time lag (nucleation and growth delay) for the formation of condensation nuclei and subsequent droplet growth.

**Question 2:** What are the primary effects of friction on steam flow in a nozzle?
**Answer:** The primary effects of friction are:
    a) Reduction in exit velocity.
    b) Increase in exit pressure.
    c) Loss of useful kinetic energy.
    d) Increase in entropy (irreversibility).

**Question 3:** How does friction in turbine blades affect the performance of a steam turbine?
**Answer:** Friction on turbine blades causes a loss of useful work output from the turbine. This reduces the overall power generated and leads to a higher temperature of steam exiting the turbine compared to an ideal frictionless expansion.

**Question 4:** Explain the statement: "Supersaturation can lead to higher velocities in the nozzle, but friction ultimately limits the actual achievable velocity."
**Answer:** During supersaturated flow, condensation is delayed. This means the steam remains in a vapor state for a longer expansion, leading to a larger specific volume and thus higher velocities *initially* compared to if condensation occurred immediately. However, this turbulent and potentially unstable flow is also subject to significant frictional losses. These frictional forces oppose the flow, reducing the final exit velocity and leading to energy dissipation, ultimately limiting the actual achievable velocity below what the supersaturated expansion might suggest in a purely frictionless scenario.

**Question 5:** If the isentropic exit velocity of steam from a nozzle is 800 m/s and the nozzle has an isentropic efficiency of 92%, what is the actual exit velocity?
**Answer:**
Isentropic efficiency ($\eta_{isen}$) = (Actual Velocity)² / (Isentropic Velocity)²
$0.92 = V_{actual}^2 / (800 \, m/s)^2$
$V_{actual}^2 = 0.92 * (800 \, m/s)^2$
$V_{actual}^2 = 0.92 * 640000 \, m^2/s^2$
$V_{actual}^2 = 588800 \, m^2/s^2$
$V_{actual} = \sqrt{588800} \, m/s$
$V_{actual} \approx 767.3 \, m/s$

---

### 10. Alignment with Course Outcomes:

*   **CO1: Explain the layout, components and working of steam, gas, hydro, and nuclear power plants.**
    This topic directly contributes to understanding the working of steam power plants by detailing the behavior of steam in critical components like nozzles and turbines, which are essential for converting thermal energy into mechanical work.
*   **CO3: Calculate the performance parameters of steam turbines and steam nozzles.**
    While this note doesn't provide calculation formulas for friction factors, it lays the foundation by explaining *why* performance parameters like velocity and efficiency are lower than ideal, and introduces the concept of isentropic efficiency which is used in such calculations.

---

This comprehensive set of notes provides a foundational understanding of the effects of friction on supersaturated steam flow, crucial for analyzing and optimizing steam generator and turbine performance in power plants.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
