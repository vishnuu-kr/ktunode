---
title: "stage efficiency"
subject: "GAS TURBINE AND JET PROPULSION"
module: "Module 2: Axial flow compressor – Working principle"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1751d0cf4804463ca2"
status: "completed"
scrapedAt: "2026-05-20T18:13:49.863Z"
---
## Gas Turbine and Jet Propulsion: Module 2 - Axial Flow Compressor

### Topic: Stage Efficiency

---

**Module Objective:** To understand the working principle of an axial flow compressor, including the various components, aerodynamic principles, and efficiency considerations.

**Topic Objective:** To understand the concept of stage efficiency in an axial flow compressor, its importance, factors affecting it, and methods for its calculation.

**Assumed Prior Knowledge:** Basic understanding of thermodynamics, fluid mechanics, and the overall function of a gas turbine engine.

---

### 1. Introduction to Stage Efficiency

The axial flow compressor is a critical component in a gas turbine engine responsible for increasing the pressure of the incoming air. It consists of multiple stages, each comprising a rotating row of blades (rotor) and a stationary row of blades (stator). To analyze the performance of an axial flow compressor, we often consider the performance of individual stages.

**Definition:**
**Stage efficiency** is a measure of how effectively a single stage (rotor + stator) of an axial flow compressor converts the mechanical work input into useful pressure rise, compared to an ideal process. It quantifies the losses occurring within that stage.

**Importance:**
*   **Component-level Analysis:** Understanding stage efficiency allows for detailed analysis and optimization of individual compressor stages.
*   **Overall Compressor Performance:** The overall efficiency of the compressor is a product of the efficiencies of its individual stages. Improving stage efficiency directly leads to improved overall compressor performance.
*   **Design and Troubleshooting:** It helps designers identify and address areas of high loss within the compressor, aiding in efficient design and troubleshooting of performance issues.

**Relation to Course Outcomes:**
*   **CO1 (K3):** Applying thermodynamic and fluid dynamic principles to understand compressor efficiency. Stage efficiency is a direct application of these principles.
*   **CO2 (K4):** Analyzing performance characteristics and efficiencies of axial flow compressors. Stage efficiency is a key performance metric.
*   **CO3 (K4):** Analyzing gas turbine system performance by understanding component characteristics. Stage efficiency is a fundamental characteristic of a compressor stage.

---

### 2. Types of Stage Efficiency

There are two primary types of stage efficiency commonly used in the context of axial flow compressors:

#### 2.1. Isentropic Stage Efficiency ($\eta_{stage, isentropic}$)

This efficiency compares the actual work done by the stage to the work that would be done in an ideal **isentropic** compression process for the same pressure ratio and inlet conditions.

*   **Formula:**
    $$ \eta_{stage, isentropic} = \frac{\text{Isentropic work input per unit mass}}{\text{Actual work input per unit mass}} $$
    $$ \eta_{stage, isentropic} = \frac{h_{t2s} - h_{t1}}{h_{t2} - h_{t1}} $$

    Where:
    *   $h_{t1}$ is the total enthalpy at the inlet of the stage.
    *   $h_{t2}$ is the actual total enthalpy at the outlet of the stage.
    *   $h_{t2s}$ is the total enthalpy at the outlet of the stage if the compression were isentropic.

*   **Conceptual Understanding:**
    *   The numerator represents the ideal work required to achieve the observed pressure rise.
    *   The denominator represents the actual work supplied to achieve the same pressure rise.
    *   A value of 100% would mean no losses.

#### 2.2. Polytropic Stage Efficiency ($\eta_{stage, polytropic}$)

This efficiency considers the cumulative effect of losses over multiple infinitesimal stages. It is often more relevant for compressors with many stages where the pressure and temperature changes at each stage are small.

*   **Formula:**
    $$ \eta_{stage, polytropic} = \frac{\text{Polytropic work input per unit mass}}{\text{Actual work input per unit mass}} $$
    $$ \eta_{stage, polytropic} = \frac{\frac{\gamma}{\gamma-1} R T_{t1} \left[ \left(\frac{P_{t2}}{P_{t1}} \right)^{\frac{\gamma-1}{\gamma}} - 1 \right]}{h_{t2} - h_{t1}} $$

    Where:
    *   $T_{t1}$ is the total temperature at the inlet of the stage.
    *   $P_{t1}$ is the total pressure at the inlet of the stage.
    *   $P_{t2}$ is the total pressure at the outlet of the stage.
    *   $\gamma$ is the ratio of specific heats.
    *   $R$ is the gas constant.

*   **Relationship between Isentropic and Polytropic Efficiency:**
    For a given pressure ratio across a stage, polytropic efficiency is generally higher than isentropic efficiency. The relationship can be complex, but for a single stage, if the polytropic efficiency is constant, the isentropic efficiency can be derived.

    *   For an isentropic process: $T_2/T_1 = (P_2/P_1)^{(\gamma-1)/\gamma}$
    *   For a polytropic process: $T_2/T_1 = (P_2/P_1)^{(\gamma-1)/(\gamma\eta_{polytropic})}$

    This relationship highlights that for the same pressure ratio, the temperature rise in a polytropic process is less than in an isentropic process (due to losses accounted for by $\eta_{polytropic}$ making the exponent smaller), hence the higher polytropic efficiency.

**Reference:**
*   **Ganesan, V. (2017) - Gas Turbines:** Discusses various efficiencies of compressors, including stage efficiency, often with detailed thermodynamic derivations. Chapter 4 typically covers compressors.
*   **Yahya, S. M. (2011) - Turbines, Compressors and Fans:** Provides a good distinction between isentropic and polytropic efficiencies and their applicability. Chapter 5 would be relevant.

---

### 3. Losses in an Axial Flow Compressor Stage

Understanding the sources of losses within a stage is crucial for improving its efficiency. These losses convert mechanical energy into heat or cause irreversible fluid flow phenomena.

**Key Losses:**

1.  **Blade Profile Losses:**
    *   **Description:** Due to friction between the air and the blade surfaces (boundary layer development) and flow separation on the blade.
    *   **Location:** Occurs on both rotor and stator blades.
    *   **Factors:** Blade shape, surface roughness, Reynolds number, incidence angle.

2.  **Tip Leakage Losses:**
    *   **Description:** Air leaking from the high-pressure side to the low-pressure side through the small gap between the blade tip and the casing. This leakage flow does not contribute to the main work done.
    *   **Location:** At the tip of the rotating blades.
    *   **Factors:** Blade tip clearance, pressure ratio across the tip.

3.  **Hub Leakage Losses:**
    *   **Description:** Similar to tip leakage, but occurs at the hub due to the gap between the rotating blades and the stationary hub.
    *   **Location:** At the root of the rotating blades.
    *   **Factors:** Blade root clearance, pressure ratio across the hub.

4.  **Secondary Flow Losses:**
    *   **Description:** Complex three-dimensional flow phenomena caused by pressure gradients acting on the flow in the secondary directions (spanwise and chordwise). This includes effects like spanwise velocity gradients and cross-stream flows.
    *   **Location:** Throughout the blade passages, especially at the casing end walls (hub and tip).
    *   **Factors:** Blade geometry, aspect ratio, flow angle, end wall design.

5.  **Incidence Loss:**
    *   **Description:** Occurs when the incoming air does not strike the rotor or stator blades at their design angle of attack. This can lead to flow separation and increased drag.
    *   **Location:** Inlet of rotor and stator blades.
    *   **Factors:** Off-design operation, changes in airflow angle.

6.  **Blockage Losses:**
    *   **Description:** Due to viscous effects causing thicker boundary layers and wake regions, which effectively reduce the flow area and can lead to flow redistribution and further losses.
    *   **Location:** Along blade surfaces and in the annulus.

7.  **Reynolds Stress Losses (Turbulence):**
    *   **Description:** Energy dissipation due to the turbulent nature of the flow, which is inherent in high-speed gas flows.

**Reference:**
*   **Cohen, H. (2019) - Gas Turbine Theory:** Provides an in-depth treatment of aerodynamic losses in turbomachinery, including detailed explanations of secondary flows and boundary layer effects. Chapter 7 is likely to cover compressor losses.
*   **Rolls Royce (2015) - The Jet Engine:** While more application-focused, it often describes the practical implications of losses on engine performance and efficiency.

---

### 4. Factors Affecting Stage Efficiency

The stage efficiency is not a constant value and can vary significantly due to several operating and design parameters.

**Key Factors:**

1.  **Blade Design:**
    *   **Aerofoil Profile:** Optimized shapes minimize profile losses and stall.
    *   **Blade Angle and Twist:** Proper angles ensure favorable incidence and reduce secondary flows.
    *   **Blade Loading:** High loading (large pressure changes across a blade) can increase losses.
    *   **Aspect Ratio:** The ratio of blade span to chord length. Higher aspect ratios generally lead to lower tip leakage losses and secondary flow losses but can introduce structural challenges.

2.  **Operating Conditions:**
    *   **Reynolds Number:** Higher Reynolds numbers (indicating turbulent flow) generally reduce profile losses but increase viscous dissipation.
    *   **Mach Number:** High Mach numbers can lead to compressibility effects, shock waves, and increased losses.
    *   **Incidence Angle:** Operating at or near the design incidence angle is crucial for optimal performance. Deviations increase losses.
    *   **Blade Tip Clearance:** Smaller clearances reduce tip leakage losses but require tighter manufacturing tolerances and can be affected by thermal expansion.

3.  **Flow Phenomena:**
    *   **Incidence:** As mentioned, off-design incidence is a major loss contributor.
    *   **Secondary Flow:** The extent of secondary flow development influences efficiency.
    *   **Stalling:** If the flow separates from the blades, it leads to a significant drop in performance and efficiency.

4.  **Stage Matching:**
    *   The performance of one stage affects the inlet conditions of the next. Poor matching between stages can lead to reduced overall efficiency.

**Reference:**
*   **Yahya, S. M. (2011) - Turbines, Compressors and Fans:** Chapters dedicated to compressor design will often discuss how these factors influence stage efficiency.
*   **Mathur, M. L. (2010) - Gas Turbine & Jet Rocket Propulsion:** May offer practical insights into how design choices and operating conditions impact compressor efficiency.

---

### 5. Calculation of Stage Efficiency

The calculation of stage efficiency typically involves measuring or predicting the relevant thermodynamic properties at the inlet and outlet of the stage.

**Steps and Measurements:**

1.  **Measure Inlet and Outlet Conditions:**
    *   **Total Pressure ($P_t$):** Measured using total pressure probes (e.g., pitot-static probes).
    *   **Total Temperature ($T_t$):** Measured using shielded thermocouples or resistance thermometers.
    *   **Mass Flow Rate ($m$):** Essential for mass-averaged calculations.
    *   **Rotational Speed ($N$):** For calculating work input.

2.  **Calculate Inlet and Outlet Enthalpies:**
    *   Assuming ideal gas behavior: $h = c_p T$, where $c_p$ is the specific heat at constant pressure.
    *   For air, $c_p \approx 1.005$ kJ/kg.K.
    *   Total enthalpy: $h_t = c_p T_t$.

3.  **Determine Isentropic Outlet Enthalpy ($h_{t2s}$):**
    *   Using the isentropic relation: $T_{t2s} = T_{t1} \left( \frac{P_{t2}}{P_{t1}} \right)^{\frac{\gamma-1}{\gamma}}$
    *   Then, $h_{t2s} = c_p T_{t2s}$.

4.  **Calculate Actual Work Input:**
    *   Work input per unit mass $= h_{t2} - h_{t1}$.

5.  **Calculate Isentropic Work Input:**
    *   Isentropic work input per unit mass $= h_{t2s} - h_{t1}$.

6.  **Compute Isentropic Stage Efficiency:**
    *   $\eta_{stage, isentropic} = \frac{h_{t2s} - h_{t1}}{h_{t2} - h_{t1}}$

**Important Considerations:**

*   **Radial Variations:** Stage efficiency can vary radially across the blade span due to differences in flow conditions (e.g., tip leakage). Measurements are often averaged or integrated across the span to get a representative stage efficiency.
*   **Mass Averaging:** Thermodynamic properties like pressure and temperature are often averaged across the flow annulus, weighted by the mass flow rate at each radial location.
*   **Compressibility Effects:** At high speeds, the ratio of specific heats ($\gamma$) and specific heat at constant pressure ($c_p$) may vary with temperature and pressure, requiring more complex thermodynamic calculations. The ideal gas assumption might not hold perfectly.

**Reference:**
*   **Ganesan, V. (2017) - Gas Turbines:** Provides practical examples and methods for calculating compressor efficiencies, often with numerical examples.
*   **Yahya, S. M. (2011) - Turbines, Compressors and Fans:** Likely to contain specific procedures and formulas for efficiency calculations.

---

### 6. Example Calculation

**Problem:**
An axial flow compressor stage operates with the following conditions:

*   Inlet total temperature ($T_{t1}$): 290 K
*   Inlet total pressure ($P_{t1}$): 1.0 bar
*   Outlet total temperature ($T_{t2}$): 330 K
*   Outlet total pressure ($P_{t2}$): 1.3 bar

Assume air behaves as an ideal gas with $\gamma = 1.4$ and $c_p = 1.005$ kJ/kg.K. Calculate the isentropic stage efficiency.

**Solution:**

1.  **Calculate Inlet and Outlet Enthalpies:**
    *   $h_{t1} = c_p T_{t1} = 1.005 \, \text{kJ/kg.K} \times 290 \, \text{K} = 291.45 \, \text{kJ/kg}$
    *   $h_{t2} = c_p T_{t2} = 1.005 \, \text{kJ/kg.K} \times 330 \, \text{K} = 331.65 \, \text{kJ/kg}$

2.  **Calculate Actual Work Input:**
    *   Actual work $= h_{t2} - h_{t1} = 331.65 - 291.45 = 40.2 \, \text{kJ/kg}$

3.  **Calculate Isentropic Outlet Temperature ($T_{t2s}$):**
    *   $T_{t2s} = T_{t1} \left( \frac{P_{t2}}{P_{t1}} \right)^{\frac{\gamma-1}{\gamma}}$
    *   $T_{t2s} = 290 \, \text{K} \left( \frac{1.3}{1.0} \right)^{\frac{1.4-1}{1.4}}$
    *   $T_{t2s} = 290 \, \text{K} (1.3)^{0.2857}$
    *   $T_{t2s} \approx 290 \, \text{K} \times 1.0785 = 312.765 \, \text{K}$

4.  **Calculate Isentropic Outlet Enthalpy ($h_{t2s}$):**
    *   $h_{t2s} = c_p T_{t2s} = 1.005 \, \text{kJ/kg.K} \times 312.765 \, \text{K} \approx 314.33 \, \text{kJ/kg}$

5.  **Calculate Isentropic Work Input:**
    *   Isentropic work $= h_{t2s} - h_{t1} = 314.33 - 291.45 = 22.88 \, \text{kJ/kg}$

6.  **Compute Isentropic Stage Efficiency:**
    *   $\eta_{stage, isentropic} = \frac{\text{Isentropic work}}{\text{Actual work}}$
    *   $\eta_{stage, isentropic} = \frac{22.88 \, \text{kJ/kg}}{40.2 \, \text{kJ/kg}} \approx 0.569$
    *   $\eta_{stage, isentropic} \approx 56.9\%$

**Interpretation:**
The calculated stage efficiency of 56.9% indicates that the stage is only converting about 56.9% of the actual work input into the ideal (isentropic) amount of work required for the compression. The remaining 43.1% is lost due to various inefficiencies within the stage. This value is relatively low and suggests significant losses. Modern compressor stages typically achieve much higher efficiencies (e.g., 85-95%).

---

### 7. Practice Questions

**Question 1:**
Define stage efficiency for an axial flow compressor. What are the two main types of stage efficiency?

**Question 2:**
List at least five sources of aerodynamic losses that contribute to a reduction in stage efficiency in an axial flow compressor.

**Question 3:**
The overall efficiency of a multi-stage axial flow compressor is directly related to the stage efficiencies. Explain this relationship and why improving individual stage efficiencies is important.

**Question 4:**
An axial flow compressor stage operates with the following conditions:
*   Inlet total temperature ($T_{t1}$): 300 K
*   Inlet total pressure ($P_{t1}$): 1.0 bar
*   Outlet total temperature ($T_{t2}$): 360 K
*   Outlet total pressure ($P_{t2}$): 1.4 bar

Assume air behaves as an ideal gas with $\gamma = 1.4$ and $c_p = 1.005$ kJ/kg.K. Calculate the isentropic stage efficiency for this stage.

**Question 5:**
Discuss how blade tip clearance affects the stage efficiency of an axial flow compressor.

---

### 8. Answers to Practice Questions

**Answer 1:**
Stage efficiency measures how effectively a single stage (rotor + stator) of an axial flow compressor converts mechanical work input into useful pressure rise compared to an ideal process. The two main types are:
*   **Isentropic Stage Efficiency:** Compares actual work to isentropic work for the same pressure ratio.
*   **Polytropic Stage Efficiency:** Accounts for cumulative losses over infinitesimal stages.

**Answer 2:**
Five sources of aerodynamic losses are:
1.  Blade Profile Losses (friction and separation)
2.  Tip Leakage Losses
3.  Hub Leakage Losses
4.  Secondary Flow Losses
5.  Incidence Loss
(Other valid answers include blockage losses, Reynolds stress losses).

**Answer 3:**
The overall efficiency of a multi-stage compressor is generally the product of the efficiencies of the individual stages, often with adjustments for inter-stage conditions. For $N$ stages, $\eta_{overall} \approx \prod_{i=1}^{N} \eta_{stage,i}$. Therefore, improving the efficiency of each individual stage leads to a proportional increase in the overall compressor efficiency, directly impacting the engine's overall performance and fuel consumption.

**Answer 4:**
**Given:** $T_{t1}=300$ K, $P_{t1}=1.0$ bar, $T_{t2}=360$ K, $P_{t2}=1.4$ bar, $\gamma=1.4$, $c_p=1.005$ kJ/kg.K.

1.  **Actual work:** $h_{t2} - h_{t1} = c_p (T_{t2} - T_{t1}) = 1.005 \times (360 - 300) = 1.005 \times 60 = 60.3$ kJ/kg.
2.  **Isentropic outlet temperature:** $T_{t2s} = T_{t1} \left( \frac{P_{t2}}{P_{t1}} \right)^{\frac{\gamma-1}{\gamma}} = 300 \left( \frac{1.4}{1.0} \right)^{\frac{1.4-1}{1.4}} = 300 (1.4)^{0.2857} \approx 300 \times 1.0967 = 329.01$ K.
3.  **Isentropic work:** $h_{t2s} - h_{t1} = c_p (T_{t2s} - T_{t1}) = 1.005 \times (329.01 - 300) = 1.005 \times 29.01 \approx 29.155$ kJ/kg.
4.  **Isentropic stage efficiency:** $\eta_{stage, isentropic} = \frac{\text{Isentropic work}}{\text{Actual work}} = \frac{29.155}{60.3} \approx 0.4835$ or $48.35\%$.

*(Note: This calculated efficiency is very low, suggesting significant losses or a poorly performing stage in this hypothetical scenario.)*

**Answer 5:**
Blade tip clearance refers to the small gap between the tip of the rotating rotor blades and the compressor casing.
*   **Effect:** Air from the high-pressure region on the suction side of the blade tip leaks to the low-pressure region on the pressure side. This leakage flow bypasses the main working path of the stage, reduces the effective work done on the air, and creates a rotating vortex with associated losses.
*   **Impact on Efficiency:** Smaller tip clearances reduce tip leakage losses and thus improve stage efficiency. However, very small clearances can lead to rubbing between the blade tips and casing during operation (due to thermal expansion or rotor vibrations), causing damage and potentially catastrophic failure. Therefore, an optimal balance is sought in design.

---

### 9. Important Points to Remember

*   **Stage efficiency is a measure of performance for a single compressor stage.**
*   **Isentropic stage efficiency** is the most common metric, comparing actual work to ideal isentropic work.
*   **Numerous losses** contribute to reduced stage efficiency, including profile, tip leakage, secondary flow, and incidence losses.
*   **Blade design, operating conditions (Reynolds number, Mach number, incidence), and flow phenomena** are key factors affecting stage efficiency.
*   **Accurate measurement of total pressure and total temperature** at stage inlet and outlet is crucial for efficiency calculation.
*   **Improving stage efficiency is vital for the overall performance and fuel economy of gas turbine engines.**
*   **Modern axial flow compressor stages achieve high efficiencies (typically 85-95%)** through advanced aerodynamic design and careful attention to loss reduction.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
