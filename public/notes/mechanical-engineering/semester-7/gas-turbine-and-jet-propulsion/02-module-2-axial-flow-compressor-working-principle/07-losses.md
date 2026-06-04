---
title: "Losses"
subject: "GAS TURBINE AND JET PROPULSION"
module: "Module 2: Axial flow compressor – Working principle"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1751d0cf4804463ca5"
status: "completed"
scrapedAt: "2026-05-20T18:13:51.993Z"
---
# Module 2: Axial Flow Compressor – Working Principle: Losses

## 1. Introduction to Losses in Axial Flow Compressors

Axial flow compressors are crucial components in gas turbine engines, responsible for increasing the pressure of the incoming air. However, due to inherent inefficiencies in the fluid flow and mechanical processes, energy is lost, leading to reduced overall compressor performance and efficiency. Understanding these losses is essential for designing and analyzing gas turbine engines.

This module focuses on the various types of losses that occur in axial flow compressors, their causes, and their impact on compressor performance.

**Learning Outcome Covered:**
* **Understanding the working principle of axial flow compressors** (implicitly, as losses affect the overall efficiency and performance achieved).

**Course Outcomes Addressed:**
* **CO1:** To apply the principles of thermodynamics and fluid dynamics to understand the performance and efficiency of various gas turbine cycles. (K3) - Understanding losses is fundamental to analyzing efficiency.
* **CO3:** To analyse the performance of gas turbine systems by understanding the characteristics of various components. (K4) - Losses are characteristics of compressor performance.

**Key Concepts:**
* **Efficiency:** The ratio of actual work done to the ideal work done.
* **Stage Efficiency:** Efficiency of a single stage (rotor + stator) of the compressor.
* **Isentropic Efficiency:** The ratio of the ideal (isentropic) work required to the actual work required to achieve a given pressure rise.

**Important Point to Remember:** All real compressors experience losses. The goal of design is to minimize these losses to maximize efficiency.

---

## 2. Classification of Losses

Losses in axial flow compressors can be broadly classified into two main categories:

### 2.1. Aerodynamic Losses (Fluid Flow Losses)

These losses arise from the imperfect flow of air through the compressor blades and passages. They are primarily governed by fluid dynamics principles.

*   **Aerodynamic losses are often the dominant losses in high-speed compressors.** (Referenced from Ganesan, "Gas Turbines").

### 2.2. Mechanical Losses

These losses are associated with the physical operation of the compressor and its components, independent of the aerodynamic flow.

---

## 3. Aerodynamic Losses in Detail

Aerodynamic losses can be further categorized based on their origin:

### 3.1. Profile Losses (Blade Profile Losses)

These losses are due to the friction between the air and the blade surfaces, as well as the viscous effects within the boundary layer.

*   **Cause:**
    *   **Skin Friction:** Viscous drag on the blade surfaces.
    *   **Flow Separation:** Disruption of smooth flow over the blade surface, especially on the suction side, due to adverse pressure gradients.
    *   **Wake Losses:** Energy dissipation in the wake of the blades, which is carried downstream and mixes with the free stream.
*   **Factors Affecting Profile Losses:**
    *   **Blade Shape and Camber:** Streamlined blade profiles minimize separation.
    *   **Blade Surface Roughness:** Rougher surfaces increase friction.
    *   **Reynolds Number:** Higher Reynolds numbers generally lead to thinner boundary layers and reduced profile losses, up to a certain point where turbulence can become more significant.
    *   **Incidence Angle:** The angle between the incoming airflow and the blade chord. Deviation from the optimal incidence angle can lead to separation.
*   **Example:** Imagine water flowing through a pipe with rough walls; friction will reduce the flow velocity. Similarly, air flowing over a blade surface experiences friction.

### 3.2. End Wall Losses (Tip and Hub Losses)

These losses occur at the boundaries of the blade passages, i.e., at the casing (tip) and the rotor shaft (hub).

*   **Cause:**
    *   **Tip Leakage Losses:** Air leaks from the high-pressure side to the low-pressure side of the blade tip, typically across a small clearance between the blade tip and the casing. This creates a swirling vortex (tip vortex) that reduces the effective work done by the blade.
    *   **Secondary Flows:** Complex three-dimensional flow patterns that arise due to the pressure difference between the blade surfaces and the influence of end walls. These flows, including spanwise and chordwise flows, redistribute momentum and can lead to flow separation or increased mixing losses.
    *   **Hub Corner Stall:** A stall phenomenon that can occur at the hub due to the interaction of secondary flows and the main flow.
*   **Factors Affecting End Wall Losses:**
    *   **Tip Clearance:** Larger clearances lead to higher leakage.
    *   **Blade Shape and Sweep:** Blade sweep can help manage secondary flows.
    *   **Flow Coefficient:** Lower flow coefficients (higher axial velocity relative to rotational speed) can exacerbate end wall losses.
*   **Example:** Imagine a dam with a small leak at the top; water seeping through the leak represents tip leakage, reducing the net flow over the dam.

### 3.3. Secondary Flow Losses

These are a consequence of three-dimensional flow effects, particularly the pressure gradients across the blade span and the turning of the flow.

*   **Cause:**
    *   **Cross-passage Pressure Gradients:** Air tends to flow from the high-pressure side to the low-pressure side of the blade, leading to spanwise flow.
    *   **Boundary Layer Deflection:** The boundary layer air at the hub and tip is influenced by these pressure gradients, leading to complex flow patterns.
    *   **Vortex Formation:** These spanwise flows can roll up into vortices, causing mixing and energy loss.
*   **Impact:** Secondary flows can re-energize the boundary layer in some regions but can also cause flow separation and mixing losses in others.

### 3.4. Incidence Losses (Misalignment Losses)

These losses occur when the incoming airflow does not align with the optimal angle of attack for the compressor blade.

*   **Cause:**
    *   **Variations in Inlet Flow Angle:** Changes in the upstream flow conditions or the characteristic curve of the compressor stage itself.
    *   **Deviation Angle:** The difference between the actual exit flow angle and the ideal exit flow angle predicted by a 2D cascade.
*   **Factors Affecting Incidence Losses:**
    *   **Blade Setting Angle:** Proper initial setting is crucial.
    *   **Operating Point:** The compressor operating at off-design conditions.
*   **Example:** Trying to steer a boat against the current at an angle where the rudder is not most effective will lead to slower progress and wasted energy.

### 3.5. Blockage Losses

These losses are due to the reduction in the effective flow area caused by the presence of blades and the accumulation of flow phenomena like boundary layers.

*   **Cause:**
    *   **Blade Thickness and Solidity:** The physical presence of blades reduces the open flow area.
    *   **Boundary Layer Accumulation:** The thickened boundary layers on the blades reduce the effective passage area.
    *   **Wake Region:** The wake behind each blade also contributes to blockage.
*   **Impact:** Blockage can increase flow velocity in the remaining passages, leading to higher Mach numbers and potential for shock losses in transonic compressors.

### 3.6. Shock Losses (In Transonic and Supersonic Compressors)

These losses occur when the airflow exceeds the speed of sound within the compressor passages, leading to the formation of shock waves.

*   **Cause:**
    *   **Supersonic Flow:** High relative Mach numbers between the rotor blades can lead to localized supersonic regions.
    *   **Shock Waves:** Abrupt changes in pressure, temperature, and velocity as the flow passes through a shock wave. These are highly dissipative.
*   **Factors Affecting Shock Losses:**
    *   **Blade Mach Number:** Higher Mach numbers increase the likelihood and strength of shocks.
    *   **Blade Geometry:** The design of the blade profile influences where and how shocks form.
*   **Example:** The sonic boom produced by a supersonic aircraft is a visible manifestation of shock waves and the associated energy dissipation.

**Learning Outcome Covered:**
*   **Understanding the working principle of axial flow compressors** (as these losses directly impact the pressure rise and flow characteristics).

**Course Outcomes Addressed:**
*   **CO1:** To apply the principles of thermodynamics and fluid dynamics to understand the performance and efficiency of various gas turbine cycles. (K3) - Detailed understanding of aerodynamic losses is crucial for efficiency calculations.
*   **CO2:** To analyze the performance characteristics and efficiencies of axial flow compressors. (K4) - These losses are key performance characteristics.
*   **CO3:** To analyse the performance of gas turbine systems by understanding the characteristics of various components. (K4) - Understanding compressor losses is vital for system analysis.

**Important Points to Remember:**
*   **Interdependence of Losses:** Many aerodynamic losses are interconnected. For instance, poor blade profile can lead to secondary flows and tip leakage.
*   **Design Optimization:** Compressor designers use computational fluid dynamics (CFD) and experimental methods to minimize these losses through careful blade design and aerodynamic profiling.

---

## 4. Mechanical Losses

These losses are primarily due to friction and leakage in the mechanical components of the compressor.

### 4.1. Bearing Friction

*   **Cause:** Friction in the bearings supporting the rotating compressor shaft.
*   **Impact:** Consumes a small amount of power that would otherwise go into compressing the air.

### 4.2. Seal Friction and Leakage

*   **Cause:**
    *   **Shaft Seals:** Friction and leakage at seals around the shaft where it passes through the casing.
    *   **Inter-stage Seals:** Seals between stages to prevent air leakage from higher pressure stages to lower pressure stages.
*   **Impact:** Leakage of high-pressure air back to a lower-pressure side represents a direct loss of useful work.

### 4.3. Disk Friction

*   **Cause:** Friction of the rotating compressor disks with the surrounding air. This is particularly significant at high rotational speeds.
*   **Impact:** The disks churning the air contribute to aerodynamic heating, and some power is lost to overcome this viscous drag.

### 4.4. Gearbox Losses (if applicable)

*   **Cause:** Friction and churning losses within any gearbox used to drive the compressor.
*   **Impact:** Reduces the power transmitted to the compressor shaft.

**Learning Outcome Covered:**
*   **Understanding the working principle of axial flow compressors** (as mechanical losses affect the net work input required).

**Course Outcomes Addressed:**
*   **CO1:** To apply the principles of thermodynamics and fluid dynamics to understand the performance and efficiency of various gas turbine cycles. (K3) - Mechanical losses reduce overall system efficiency.
*   **CO3:** To analyse the performance of gas turbine systems by understanding the characteristics of various components. (K4) - Mechanical losses are characteristics of the compressor system.

**Important Point to Remember:** Mechanical losses are generally smaller than aerodynamic losses in modern, high-performance axial flow compressors but are still important for accurate efficiency calculations.

---

## 5. Quantifying and Modeling Losses

Several approaches are used to quantify and model these losses:

*   **Loss Coefficients:** Dimensionless coefficients ($\omega$, $Y$) are used to represent different types of losses. These coefficients are often empirically derived or obtained from CFD simulations.
    *   **Total Pressure Loss Coefficient ($\omega$):** Represents the loss in total pressure normalized by the dynamic pressure.
    *   **Flow Deviation Coefficient ($Y$):** Represents the deviation of the flow angle from the ideal.
*   **Stage Matching:** Understanding how losses in one stage affect the performance of subsequent stages is crucial.
*   **One-Dimensional (1D) and Quasi-3D (Q3D) Mean Line Modeling:** These simplified models use loss correlations to predict stage performance and overall compressor behavior.
*   **3D Computational Fluid Dynamics (CFD):** Advanced simulations that capture the complex three-dimensional flow phenomena and associated losses more accurately.

**(Referenced from Yahya, "Turbines, Compressors and Fans" and Cohen, "Gas Turbine Theory")**

**Learning Outcome Covered:**
*   **Understanding the working principle of axial flow compressors** (by how these models predict performance).

**Course Outcomes Addressed:**
*   **CO1:** To apply the principles of thermodynamics and fluid dynamics to understand the performance and efficiency of various gas turbine cycles. (K3) - Modeling losses is applying these principles.
*   **CO2:** To analyze the performance characteristics and efficiencies of axial flow compressors. (K4) - Quantifying losses is part of performance analysis.
*   **CO3:** To analyse the performance of gas turbine systems by understanding the characteristics of various components. (K4) - Modeling losses is key to component characteristic analysis.

---

## 6. Impact of Losses on Compressor Performance

*   **Reduced Pressure Rise:** Energy losses mean less energy is available to increase the air pressure.
*   **Lower Efficiency:** The actual work input required is higher than the ideal work, leading to lower isentropic efficiency.
*   **Increased Temperature Rise:** Some losses, especially frictional and shock losses, convert kinetic energy into thermal energy, leading to a higher temperature rise than ideal. This can reduce the efficiency of subsequent components like the combustion chamber.
*   **Reduced Mass Flow Rate:** Flow blockages and separation can limit the amount of air that can be passed through the compressor at a given speed.
*   **Stall and Surge:** Under certain operating conditions, particularly at low mass flow rates, flow separation can become so severe that it leads to stall (localized separation) or surge (systematic instability of flow). Losses contribute to the susceptibility to stall.

**Learning Outcome Covered:**
*   **Understanding the working principle of axial flow compressors** (how losses limit its capability).

**Course Outcomes Addressed:**
*   **CO1:** To apply the principles of thermodynamics and fluid dynamics to understand the performance and efficiency of various gas turbine cycles. (K3) - Impact on efficiency is a direct application.
*   **CO2:** To analyze the performance characteristics and efficiencies of axial flow compressors. (K4) - Impact on pressure rise, temperature, and stall are performance characteristics.
*   **CO3:** To analyse the performance of gas turbine systems by understanding the characteristics of various components. (K4) - Component performance impacts the system.

**Example:** A compressor with high tip leakage losses will have a lower overall pressure ratio for a given shaft power input compared to a compressor with effective tip sealing.

---

## 7. Practice Questions and Answers

**Question 1:**
Which of the following is primarily an aerodynamic loss in an axial flow compressor?
a) Bearing friction
b) Tip leakage
c) Disk friction
d) Seal leakage

**Answer:** b) Tip leakage

**Explanation:** Tip leakage is the flow of air across the clearance between the blade tip and the casing, which is a fluid flow phenomenon. Bearing friction, disk friction, and seal leakage are mechanical losses.

**Question 2:**
What is the primary cause of profile losses in compressor blades?
a) Fluid leakage through tip clearances
b) Friction and separation on the blade surface
c) Friction in the bearings
d) Disk rotation against the air

**Answer:** b) Friction and separation on the blade surface

**Explanation:** Profile losses are directly related to the interaction of the fluid with the blade's aerodynamic profile, including skin friction and flow separation.

**Question 3:**
Define secondary flow and explain how it contributes to losses in an axial flow compressor.

**Answer:** Secondary flow refers to complex, three-dimensional flow patterns that occur in turbomachinery passages due to pressure gradients across the blade span and the turning of the flow. These flows can redistribute momentum, cause flow separation, and lead to increased mixing losses, ultimately reducing the compressor's efficiency.

**Question 4:**
List at least three types of mechanical losses that occur in an axial flow compressor.

**Answer:**
1. Bearing friction
2. Disk friction
3. Seal friction and leakage (shaft seals, inter-stage seals)

**Question 5:**
A compressor operating at a higher than optimal incidence angle will likely experience:
a) Reduced profile losses and increased pressure rise.
b) Increased profile losses and potentially flow separation.
c) No significant change in performance.
d) Improved tip leakage control.

**Answer:** b) Increased profile losses and potentially flow separation.

**Explanation:** Operating at an off-design incidence angle can lead to adverse pressure gradients, causing the boundary layer to thicken and potentially separate, increasing profile losses.

**Question 6:**
Explain the significance of tip clearance in axial flow compressors.

**Answer:** Tip clearance refers to the gap between the tip of the rotating blades and the stationary casing. A significant tip clearance allows high-pressure air to leak from the pressure side to the suction side of the blade, forming a tip vortex. This leakage reduces the effective work done by the blade, lowers the pressure rise achieved, and decreases the overall efficiency of the compressor stage. Minimizing tip clearance is crucial for performance.

---

## 8. Important Points to Remember (Summary)

*   **Losses are inevitable:** All axial flow compressors experience both aerodynamic and mechanical losses.
*   **Aerodynamic losses dominate:** These are typically the most significant contributors to overall inefficiency, especially at high speeds.
*   **Key aerodynamic losses include:** Profile losses (friction, separation), end wall losses (tip leakage, secondary flows), incidence losses, blockage losses, and shock losses (in transonic/supersonic compressors).
*   **Mechanical losses are due to:** Bearing friction, disk friction, and seal friction/leakage.
*   **Losses directly impact performance:** They reduce pressure rise, lower efficiency, increase temperature rise, and can lead to flow instabilities like stall.
*   **Design aims to minimize losses:** Careful blade profiling, tip sealing, and stage matching are employed to reduce these inefficiencies.
*   **Understanding losses is crucial for:** Analyzing compressor performance, predicting efficiency, and designing effective gas turbine engines.

---

This comprehensive study note covers the working principle of axial flow compressors with a specific focus on the various types of losses, their causes, impacts, and how they are managed. It aligns with the provided learning and course outcomes and draws upon the principles outlined in the referenced textbooks.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
