---
title: "pressure losses"
subject: "GAS TURBINE AND JET PROPULSION"
module: "Module 1: Gas Turbines – Introduction"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1751d0cf4804463c9c"
status: "completed"
scrapedAt: "2026-05-20T18:13:46.363Z"
---
# GAS TURBINE AND JET PROPULSION - Module 1: Gas Turbines – Introduction

## Topic: Pressure Losses

### 1. Introduction to Pressure Losses in Gas Turbines

Pressure losses are a critical aspect of gas turbine performance. They represent the irreversible reduction in static pressure as the working fluid (air or combustion gases) flows through the various components of the engine. These losses occur due to friction, turbulence, flow separation, and other dissipative mechanisms. Minimizing pressure losses is essential for maximizing the overall efficiency and power output of a gas turbine.

**Key Concept:** Pressure loss is a deviation from ideal thermodynamic processes, leading to reduced performance.

**Relevance to Course Outcomes:**
*   **CO1 (K3):** Understanding pressure losses is crucial for applying thermodynamic principles to analyze gas turbine cycles and their efficiencies.
*   **CO3 (K4):** Analyzing the performance of gas turbine systems necessitates understanding the characteristics and impact of pressure losses in each component.

### 2. Sources of Pressure Losses

Pressure losses can originate from various sources within a gas turbine. These can be broadly categorized as:

#### 2.1. Friction Losses (Skin Friction)

*   **Definition:** Resistance to flow due to viscous shear forces between the fluid and the stationary surfaces of the flow path (e.g., walls of the compressor and turbine casings, blades).
*   **Mechanism:** As fluid flows along a surface, a boundary layer develops where the velocity gradient is high. This shear stress at the wall opposes the flow, causing a pressure drop.
*   **Textbook Reference:** Ganesan (2017) and Cohen (2019) discuss boundary layer effects and their contribution to friction.
*   **Example:** The gradual decrease in static pressure as air flows through the diffuser section of a gas turbine.

#### 2.2. Aerodynamic Losses (Form Drag, Flow Separation)

*   **Definition:** Losses arising from the shape of the flow path and the behavior of the fluid flow around obstructions or changes in direction. This includes losses due to turbulence, eddies, and flow separation.
*   **Mechanism:**
    *   **Flow Separation:** When the fluid flow detaches from the surface, often in regions of adverse pressure gradient or sharp turns, it creates recirculation zones (eddies) that dissipate kinetic energy and lead to pressure loss. This is common in sharp bends or at high angles of attack on blades.
    *   **Turbulence:** Chaotic, irregular fluid motion characterized by swirling eddies. While turbulence can enhance mixing, it also dissipates energy through viscous dissipation within the eddies, leading to pressure losses.
    *   **Wake Losses:** Downstream of blades or other flow obstructions, a wake region exists where the velocity is reduced and turbulence is high. Fluid passing through this wake experiences pressure loss.
*   **Textbook Reference:** Yahya (2011) provides detailed explanations of aerodynamic losses in compressors and turbines. Mathur & Mathur (2010) also cover these phenomena in the context of propulsion.
*   **Example:** The pressure drop observed at the inlet to the compressor due to the stator vanes or at the exit of the turbine due to the nozzle guide vanes.

#### 2.3. Mixing Losses

*   **Definition:** Pressure losses that occur when streams of fluid with different velocities and temperatures are mixed.
*   **Mechanism:** When two streams at different thermodynamic states merge, the difference in momentum leads to turbulent mixing. This process is irreversible and results in a reduction of available energy, manifesting as a pressure loss.
*   **Example:** Mixing of primary combustion gases with secondary air in the combustor, or mixing of exhaust gases in multi-stage turbines.

#### 2.4. Exit Losses

*   **Definition:** Kinetic energy lost at the exit of a component or the entire engine, which is not converted into useful work or pressure recovery.
*   **Mechanism:** The fluid leaving a component still possesses kinetic energy. If this kinetic energy is not effectively utilized or is dissipated, it represents a loss in performance. For example, the kinetic energy of the exhaust gas leaving the turbine nozzle represents a loss of useful work that could have been extracted.
*   **Textbook Reference:** Rolls Royce (2015) elaborates on exit kinetic energy losses in jet engines.
*   **Example:** The exhaust velocity from a jet engine signifies kinetic energy that contributes to thrust but also represents a form of work loss from the thermodynamic cycle perspective.

#### 2.5. Other Losses

*   **Leakage Losses:** Flow of working fluid that bypasses the intended path, such as through seals between rotating and stationary components.
*   **Clearance Losses:** Due to the gap between the tips of rotating blades and the casing.
*   **Carry-over Losses:** Residual kinetic energy from one stage that impacts the performance of the subsequent stage.

### 3. Pressure Losses in Specific Gas Turbine Components

Understanding pressure losses within each component is vital for system analysis.

#### 3.1. Inlet

*   **Description:** The component that guides air into the compressor.
*   **Sources of Loss:** Friction with inlet duct walls, flow separation at bends, presence of screens or filters, and aerodynamic losses in inlet guide vanes (if present).
*   **Impact:** Reduced mass flow and lower compressor inlet pressure, affecting overall performance.
*   **Textbook Reference:** Ganesan (2017) details inlet duct design considerations.

#### 3.2. Compressor

*   **Description:** Compresses the incoming air to a higher pressure.
*   **Sources of Loss:**
    *   **Blade Aerodynamics:** Friction on blade surfaces, boundary layer development, flow separation on blades (especially at off-design conditions), incidence losses, wake losses from stator vanes impacting rotor blades.
    *   **End-wall Losses:** Losses at the casing and hub surfaces.
    *   **Recirculation/Recycling:** From bleed ports.
*   **Impact:** Reduces the pressure ratio achieved and increases the power required by the compressor.
*   **Textbook Reference:** Yahya (2011) provides extensive analysis of compressor losses (e.g., blade profile losses, secondary flow losses). CO2 (K4) is directly addressed here.

#### 3.3. Combustor

*   **Description:** Where fuel is mixed with compressed air and burned.
*   **Sources of Loss:**
    *   **Pressure Drop due to Dilution:** Introduction of dilution air to lower combustion temperature.
    *   **Friction:** Flow through perforations and baffles.
    *   **Mixing:** Inefficient mixing of fuel and air.
    *   **Swirlers:** Aerodynamic losses associated with swirl generation.
*   **Impact:** A significant pressure drop occurs in the combustor, which reduces the pressure available for the turbine and hence the work output.
*   **Textbook Reference:** Ganesan (2017) and Mathur & Mathur (2010) discuss combustor pressure losses. CO3 (K4) is relevant here for system analysis.
*   **Example:** A typical combustor might experience a pressure drop of 3-5% of the compressor outlet pressure.

#### 3.4. Turbine

*   **Description:** Extracts energy from the hot combustion gases to drive the compressor and output shaft.
*   **Sources of Loss:**
    *   **Blade Aerodynamics:** Similar to the compressor, friction, boundary layer, flow separation, incidence losses, wake losses.
    *   **Nozzle Guide Vane Losses:** Aerodynamic losses as gases are directed onto the rotor blades.
    *   **End-wall Losses:** At casing and hub.
    *   **Cooling Air Bleed:** Pressure loss associated with the extraction and channeling of cooling air.
*   **Impact:** Reduces the work output of the turbine, affecting the net power output of the engine.
*   **Textbook Reference:** Yahya (2011) and Cohen (2019) detail turbine loss mechanisms. CO2 (K4) is directly addressed here.

#### 3.5. Exhaust Nozzle

*   **Description:** Guides the exhaust gases out of the engine.
*   **Sources of Loss:** Friction with nozzle walls, adverse pressure gradients causing flow separation (especially in convergent-divergent nozzles at off-design conditions).
*   **Impact:** Reduces the exhaust velocity and therefore the thrust generated in jet engines.
*   **Textbook Reference:** Rolls Royce (2015) discusses nozzle efficiency and losses. CO4 (K2) is relevant for understanding propulsion.

### 4. Quantifying Pressure Losses

Pressure losses are typically expressed as:

*   **Absolute Pressure Drop:** $ \Delta P $ (e.g., Pascals, psi).
*   **Percentage of Inlet Pressure:** $ (\Delta P / P_{inlet}) \times 100\% $. This is common for components like the combustor.
*   **Loss Coefficient (K):** For a component, $ \Delta P = K \times (1/2) \rho V^2 $, where $ \rho $ is fluid density and $ V $ is a characteristic velocity. This approach is useful for comparing different designs.
*   **Pressure Loss Factor:** Often expressed as a fraction of the dynamic pressure at the component inlet or outlet.

**Important Point:** Pressure losses are often more significant when expressed as a percentage of the *stagnation* pressure or as a percentage of the inlet *static* pressure at that component's location.

### 5. Impact of Pressure Losses on Gas Turbine Performance

*   **Reduced Thermal Efficiency:** Pressure losses increase the work required by the compressor and reduce the work output of the turbine, leading to a lower net work output and thus lower thermal efficiency.
*   **Reduced Power Output:** For a given turbine inlet temperature and mass flow rate, pressure losses directly decrease the net power output.
*   **Lower Overall Pressure Ratio:** Pressure losses in the components mean that the actual pressure ratio achieved across the engine is lower than the ideal pressure ratio set by the compressor.
*   **Reduced Thrust (for Jet Engines):** Exit losses and losses in the nozzle reduce the exit velocity, leading to lower thrust.
*   **Increased Fuel Consumption:** To compensate for losses and achieve a desired power output, more fuel needs to be burned, increasing fuel consumption.

**Relevance to Course Outcomes:**
*   **CO1 (K3):** Quantifying losses allows for accurate calculation of thermal efficiency and analysis of thermodynamic cycles.
*   **CO3 (K4):** Understanding these impacts is essential for analyzing component performance within the overall system.

### 6. Strategies to Minimize Pressure Losses

*   **Component Design:**
    *   **Streamlined Aerodynamics:** Using smooth curves and optimized blade profiles to prevent flow separation and reduce turbulence.
    *   **Gradual Changes in Flow Area/Direction:** Avoiding sharp bends and abrupt transitions.
    *   **Flow Control Devices:** Vortex generators to energize boundary layers.
    *   **Optimized Combustor Design:** Efficient mixing and dilution to minimize pressure drop.
*   **Surface Finish:** Using smooth internal surfaces to reduce skin friction.
*   **Operating Conditions:** Operating components as close to their design points as possible to minimize incidence and separation losses.
*   **Cooling Design:** Minimizing the amount of cooling air extracted and optimizing its flow path.
*   **Material Selection:** Using materials that can withstand higher temperatures, allowing for less dilution air and potentially lower pressure drops.

**Textbook Reference:** Yahya (2011) and Cohen (2019) provide design strategies for loss reduction in turbomachinery.

### 7. Practice Questions and Answers

**Question 1:** Which of the following is NOT a primary source of pressure loss in a gas turbine?
(a) Skin friction
(b) Cooling air leakage
(c) Heat addition in the combustor
(d) Flow separation on blades

**Answer:** (c) Heat addition is an energy input to the cycle; it doesn't directly cause pressure loss. The other options are well-established sources of pressure loss.

**Question 2:** The combustor typically experiences a significant pressure loss. True or False?

**Answer:** True. Combustors are designed to facilitate mixing and combustion, which inherently involves pressure drops due to airflow through perforations, dilution air addition, and mixing processes.

**Question 3:** Explain the concept of "wake loss" in a turbine blade row and how it affects performance.

**Answer:** Wake loss occurs in the region behind a blade where the flow velocity is reduced and turbulence is high due to the boundary layer and flow separation. When the subsequent blade row encounters this wake, it experiences a lower dynamic pressure and increased turbulence, leading to reduced efficiency and potentially increased incidence losses. This contributes to an overall pressure drop across the blade row.

**Question 4:** If the inlet pressure to a compressor stage is 0.5 MPa and the pressure loss across the stage is 0.05 MPa, what is the percentage pressure loss with respect to the inlet static pressure?

**Answer:**
Percentage Pressure Loss = (Pressure Loss / Inlet Pressure) * 100%
Percentage Pressure Loss = (0.05 MPa / 0.5 MPa) * 100%
Percentage Pressure Loss = 0.1 * 100% = 10%

**Question 5:** How do flow separation and turbulence contribute to pressure losses?

**Answer:** Flow separation creates recirculating eddies, which are regions of high vorticity that dissipate kinetic energy through viscous action, leading to a pressure drop. Turbulence, characterized by chaotic fluid motion, also causes energy dissipation due to viscous shear within the turbulent eddies, resulting in a pressure loss. Both phenomena represent irreversible processes that reduce the mechanical energy available in the flow.

### 8. Important Points to Remember

*   **Pressure loss is inevitable** in all real gas turbine components.
*   **Minimizing pressure losses is crucial** for achieving high thermal efficiency and power output.
*   **Sources of loss are varied:** Friction, aerodynamics, mixing, and exit effects.
*   **Compressor and combustor** are typically the components with the highest pressure losses as a percentage of their inlet pressure.
*   **Accurate assessment of pressure losses** is vital for thermodynamic cycle analysis and component performance prediction.
*   **Design optimization** is key to mitigating these losses.

This comprehensive set of notes covers the fundamental aspects of pressure losses in gas turbines, aligning with the learning outcomes and course objectives. The references provided can be consulted for deeper theoretical understanding and detailed explanations.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
