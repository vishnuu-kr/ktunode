---
title: "Gas Turbines – Introduction"
subject: "GAS TURBINE AND JET PROPULSION"
module: "Module 1: Gas Turbines – Introduction"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1751d0cf4804463c8b"
status: "completed"
scrapedAt: "2026-05-20T18:13:34.186Z"
---
# GAS TURBINE AND JET PROPULSION - Module 1: Gas Turbines – Introduction

---

## Topic: Gas Turbines – Introduction

### 1. Introduction to Gas Turbines

#### 1.1 Definition and Basic Concept

*   **Definition:** A gas turbine is a type of internal combustion engine that uses a continuous combustion process to produce a flow of hot gas. This hot gas then expands through a turbine to produce mechanical work.
*   **Core Principle:** Gas turbines operate on the **Brayton cycle** (also known as the Joule cycle) in their ideal form. This cycle involves four fundamental processes:
    1.  **Isentropic Compression:** Air is compressed by a compressor.
    2.  **Isobaric Heat Addition:** Heat is added to the compressed air in a combustion chamber.
    3.  **Isentropic Expansion:** The hot combustion gases expand through a turbine.
    4.  **Isobaric Heat Rejection:** Heat is rejected to the atmosphere.
*   **Key Components:** The fundamental components of a basic gas turbine engine are:
    *   **Compressor:** Increases the pressure of the incoming air.
    *   **Combustion Chamber (or Combustor):** Fuel is injected and mixed with compressed air, and the mixture is ignited and burned, generating high-temperature, high-pressure gases.
    *   **Turbine:** Extracts energy from the hot gases to drive the compressor and produce useful work (mechanical power or thrust).
    *   **Exhaust Nozzle:** Directs the hot gases out of the engine.

**(Refer to Ganesan, Chapter 1; Yahya, Chapter 1; Mathur M.L., Chapter 1)**

#### 1.2 Historical Development

*   The concept of using expanding gases to produce work has a long history, dating back to ancient times (e.g., Aeolipile by Hero of Alexandria).
*   Modern gas turbine development gained momentum in the early 20th century with the advent of aircraft engine requirements.
*   Key milestones include:
    *   Sir Frank Whittle (UK) and Hans von Ohain (Germany) independently developed the first operational turbojet engines in the late 1930s.
    *   The development of more efficient compressors and turbines, as well as advancements in materials science to withstand high temperatures, were crucial.

**(Refer to Mathur M.L., Chapter 1)**

#### 1.3 Applications of Gas Turbines

Gas turbines are versatile machines used in a wide range of applications:

*   **Aircraft Propulsion:**
    *   **Turbojets:** Provide thrust by expelling a high-velocity jet of hot gas.
    *   **Turbofans:** The most common type for modern aircraft, where a fan at the front bypasses a significant amount of air around the core engine, increasing thrust and fuel efficiency.
    *   **Turboprops:** A jet engine where most of the power drives a propeller.
    *   **Turboshafts:** Used in helicopters and tanks, where the output is mechanical shaft power.
*   **Power Generation:**
    *   **Simple Cycle Power Plants:** Gas turbines directly coupled to generators for peak load and intermediate load power generation.
    *   **Combined Cycle Power Plants (CCGT):** The hot exhaust gases from the gas turbine are used to generate steam in a Heat Recovery Steam Generator (HRSG), which then drives a steam turbine. This significantly increases overall efficiency.
*   **Industrial Applications:**
    *   **Mechanical Drive:** Driving pumps, compressors, and other machinery in oil and gas industries, chemical plants, etc.
    *   **Marine Propulsion:** Powering ships and boats.

**(Refer to Ganesan, Chapter 1; Yahya, Chapter 1; Mathur M.L., Chapter 1)**

---

### 2. Working Principle and Thermodynamics

#### 2.1 The Brayton Cycle

*   **Ideal Brayton Cycle:** A theoretical thermodynamic cycle that describes the operation of an open gas turbine.
    *   **Process 1-2: Isentropic Compression:** Air is compressed reversibly and adiabatically from state 1 (ambient conditions) to state 2 (higher pressure and temperature).
    *   **Process 2-3: Isobaric Heat Addition:** Heat ($Q_{in}$) is added at constant pressure from state 2 to state 3. This occurs in the combustion chamber.
    *   **Process 3-4: Isentropic Expansion:** The hot gases expand reversibly and adiabatically through the turbine from state 3 to state 4.
    *   **Process 4-1: Isobaric Heat Rejection:** Heat ($Q_{out}$) is rejected at constant pressure from state 4 back to state 1. In an open cycle, this occurs by exhausting the gases to the atmosphere.

*   **T-s Diagram (Ideal Brayton Cycle):**
    *   A characteristic "hump" shape, with compression and expansion lines and two horizontal lines representing heat addition and rejection at constant pressure.
    *   Key points: $T_1$, $P_1$ (inlet); $T_2$, $P_2$ (compressor outlet/combustor inlet); $T_3$, $P_3$ (combustor outlet/turbine inlet); $T_4$, $P_4$ (turbine outlet/exhaust).
    *   Pressure ratio ($r_p$) = $P_2/P_1 = P_3/P_4$.

*   **Thermal Efficiency ($\eta_{th}$):**
    *   The ratio of net work output to heat input.
    *   $\eta_{th} = \frac{\text{Net Work Output}}{\text{Heat Input}} = \frac{W_{net}}{Q_{in}}$
    *   $W_{net} = W_{turbine} - W_{compressor}$
    *   $Q_{in} = m \cdot c_p \cdot (T_3 - T_2)$
    *   In terms of pressure ratio ($r_p$) and specific heat ratio ($\gamma$):
        $\eta_{th, ideal} = 1 - \frac{1}{r_p^{\frac{\gamma-1}{\gamma}}}$

**(Refer to Ganesan, Chapter 2; Yahya, Chapter 2; Cohen, Chapter 2)**

#### 2.2 Actual Gas Turbine Cycle

*   **Deviations from Ideal Cycle:** Real gas turbines deviate from the ideal Brayton cycle due to irreversibilities and practical limitations.
    *   **Compressor Inefficiencies:** Compression is not isentropic; there are pressure losses and temperature rise beyond the isentropic value (polytropic efficiency).
    *   **Combustion Chamber Losses:** Pressure drop occurs across the combustor due to friction and turbulence. Heat addition is also not perfectly at constant pressure.
    *   **Turbine Inefficiencies:** Expansion is not isentropic; the actual work output is less than the ideal isentropic work (isentropic efficiency).
    *   **Pressure Drops:** Pressure losses occur in piping and ducts between components.

*   **Actual Cycle Processes:**
    *   **Process 1-2': Irreversible Compression:** Actual compression in the compressor (not isentropic).
    *   **Process 2'-3': Pressure Loss in Combustor:** Heat is added, but with a pressure drop.
    *   **Process 3'-4': Irreversible Expansion:** Actual expansion in the turbine (not isentropic).
    *   **Process 4'-1: Heat Rejection:** Exhaust to atmosphere.

*   **Key Performance Parameters:**
    *   **Compressor Efficiency ($\eta_c$):** $\eta_c = \frac{\text{Isentropic work required}}{\text{Actual work required}} = \frac{h_{2s} - h_1}{h_2 - h_1}$ (for enthalpy) or $\frac{T_{2s} - T_1}{T_2 - T_1}$ (for temperature, assuming ideal gas).
    *   **Turbine Efficiency ($\eta_t$):** $\eta_t = \frac{\text{Actual work delivered}}{\text{Isentropic work delivered}} = \frac{h_3 - h_4}{h_3 - h_{4s}}$ (for enthalpy) or $\frac{T_3 - T_4}{T_3 - T_{4s}}$ (for temperature, assuming ideal gas).
    *   **Thermal Efficiency ($\eta_{th, actual}$):** $\eta_{th, actual} = \frac{W_{net, actual}}{Q_{in, actual}} = \frac{W_{turbine, actual} - W_{compressor, actual}}{Q_{in, actual}}$

**(Refer to Ganesan, Chapter 2; Yahya, Chapter 2; Cohen, Chapter 2)**

---

### 3. Key Concepts and Definitions

*   **Work Ratio:** The ratio of net work output to turbine work output. A higher work ratio is generally desirable for applications requiring significant shaft power.
    *   Work Ratio = $\frac{W_{net}}{W_t} = \frac{W_t - W_c}{W_t} = 1 - \frac{W_c}{W_t}$
*   **Specific Work:** Work done per unit mass of working fluid.
*   **Specific Thrust (for jet engines):** Thrust per unit mass flow rate of air.
*   **Efficiency:**
    *   **Thermal Efficiency:** Ratio of net work output to heat input.
    *   **Mechanical Efficiency:** Accounts for losses in the gearbox, bearings, etc., between the turbine and the driven load.
    *   **Propulsive Efficiency (for jet engines):** Ratio of useful propulsive power to kinetic energy imparted to the jet.
    *   **Overall Efficiency:** Product of thermal efficiency and propulsive efficiency.
*   **Power Turbine vs. Free Turbine:**
    *   **Power Turbine:** Directly coupled to the compressor in a single-shaft engine.
    *   **Free Turbine:** An additional turbine stage located downstream of the power turbine, not mechanically coupled to the compressor, allowing for variable output shaft speed. Used in turboshaft and turboprop engines.
*   **Back Work Ratio:** The ratio of compressor work to turbine work. A high back work ratio means a larger portion of the turbine's work is consumed by the compressor, reducing net output.

**(Refer to Ganesan, Chapter 2; Yahya, Chapter 2; Mathur M.L., Chapter 2; Rolls Royce, Chapter 2)**

---

### 4. Components of a Gas Turbine Engine (Overview)

*   **Inlet:** Guides ambient air into the compressor with minimum loss.
*   **Compressor:**
    *   **Types:** Axial flow, centrifugal (radial flow).
    *   **Function:** To increase the pressure of the incoming air.
    *   **Axial Flow Compressor:** Consists of rotating blades (rotors) and stationary blades (stators) arranged in stages. Offers high efficiency and flow rates.
    *   **Centrifugal Compressor:** Air enters axially and is thrown radially outwards by a rotating impeller. Simpler and more robust, but generally less efficient and has lower flow rates than axial compressors.
*   **Combustion Chamber:**
    *   **Types:** Can, annular, can-annular.
    *   **Function:** To burn fuel efficiently and add heat to the compressed air.
    *   **Requirements:** Stable combustion, complete combustion, uniform outlet temperature profile, minimum pressure loss, low emissions.
*   **Turbine:**
    *   **Types:** Impulse turbine, reaction turbine.
    *   **Function:** To extract energy from the hot combustion gases to drive the compressor and produce output power.
    *   **Staging:** Often multiple turbine stages are used to extract maximum energy.
*   **Exhaust Nozzle:**
    *   **Function:** To accelerate the exhaust gases to produce thrust (in jet engines) or to discharge them with minimal loss (in power generation).
    *   **Types:** Convergent, convergent-divergent.

**(Refer to Ganesan, Chapter 3; Yahya, Chapter 3; Mathur M.L., Chapter 2)**

---

### 5. Applications and Advantages/Disadvantages

#### 5.1 Advantages of Gas Turbines

*   **High Power-to-Weight Ratio:** Especially for aircraft applications.
*   **Continuous Operation:** Unlike reciprocating engines, they don't have reciprocating parts, leading to smoother operation and less vibration.
*   **Compact Size:** For a given power output, they are generally more compact than other engine types.
*   **Quick Starting and Loading:** Can be brought online rapidly.
*   **Fuel Flexibility:** Can operate on a variety of fuels (natural gas, diesel, kerosene, etc.), though specific designs are optimized for certain fuels.
*   **Environmental Benefits (in Combined Cycle):** Combined cycle power plants offer high thermal efficiencies, leading to lower fuel consumption and emissions per unit of electricity generated.

#### 5.2 Disadvantages of Gas Turbines

*   **Lower Efficiency at Part Load:** Efficiency drops significantly at loads much lower than the design point.
*   **High Initial Cost:** Can be expensive to manufacture.
*   **High Fuel Consumption (Simple Cycle):** Simple cycle gas turbines have lower thermal efficiencies compared to steam turbines or modern combined cycle plants.
*   **Susceptibility to Fouling and Erosion:** The compressor and turbine blades can be affected by dirt, dust, and corrosive elements in the air.
*   **High Operating Temperatures:** Requires advanced materials capable of withstanding extreme heat and stress.

**(Refer to Ganesan, Chapter 1; Yahya, Chapter 1; Mathur M.L., Chapter 1)**

---

### 6. Alignment with Course Outcomes

*   **CO1 (K3 - Apply):** This module lays the groundwork for understanding the thermodynamic principles (Brayton cycle) and the performance parameters (efficiencies) that will be applied to analyze gas turbine cycles.
*   **CO2 (K4 - Analyze):** While this module provides an introduction, the understanding of the basic components (compressor, turbine) and their functions is a prerequisite for analyzing their performance characteristics in later modules.
*   **CO3 (K4 - Analyze):** This module introduces the core components and their roles in the overall gas turbine system, enabling the analysis of system performance based on these individual parts.
*   **CO4 (K2 - Understand):** The introduction to gas turbines, especially their application in aircraft propulsion, is a foundational step towards understanding jet and rocket propulsion systems.

---

### 7. Important Points to Remember

*   The **Brayton cycle** is the fundamental thermodynamic cycle for gas turbines.
*   Key components are **compressor, combustor, and turbine**.
*   **Efficiency** is a critical parameter, and real cycles have **irreversibilities** leading to lower efficiencies than ideal.
*   Gas turbines have a **high power-to-weight ratio** and are versatile in applications.
*   **Combined cycle power plants** significantly improve overall efficiency by utilizing exhaust heat.

---

### 8. Practice Questions and Exercises

**Question 1:**
Describe the four processes of an ideal Brayton cycle and sketch its T-s diagram.

**Answer 1:**
The four processes of an ideal Brayton cycle are:
1.  **Isentropic Compression:** Air is compressed reversibly and adiabatically from inlet conditions to a higher pressure.
2.  **Isobaric Heat Addition:** Heat is added at constant pressure in the combustion chamber.
3.  **Isentropic Expansion:** Hot gases expand reversibly and adiabatically through the turbine.
4.  **Isobaric Heat Rejection:** Heat is rejected at constant pressure to the surroundings.

**T-s Diagram:** (Sketch would show two isentropic curves and two constant pressure lines, forming a "hump" shape.)

**Question 2:**
Define compressor efficiency and turbine efficiency. Why are these efficiencies less than 100% in a real gas turbine?

**Answer 2:**
*   **Compressor Efficiency ($\eta_c$):** The ratio of the ideal (isentropic) work required to compress a fluid to the actual work done. It quantifies how effectively the compressor converts input work into pressure rise.
*   **Turbine Efficiency ($\eta_t$):** The ratio of the actual work delivered by the turbine to the ideal (isentropic) work that could be extracted. It quantifies how effectively the turbine converts the thermal energy of the gas into mechanical work.

These efficiencies are less than 100% in real gas turbines due to **irreversibilities**, such as:
*   Friction between the fluid and the blades and casing.
*   Turbulence and mixing losses within the fluid.
*   Adiabatic losses (heat transfer to or from the surroundings, though often minimized).
*   Leakage of fluid past seals.

**Question 3:**
A simple gas turbine plant operates on an ideal Brayton cycle between minimum pressure $P_1$ and maximum pressure $P_2$. The temperatures at the beginning of compression and at the turbine inlet are $T_1$ and $T_3$ respectively. If the compressor and turbine have isentropic efficiencies $\eta_c$ and $\eta_t$, and the pressure drop in the combustion chamber is neglected, derive an expression for the net work output per unit mass of air. (Assume constant specific heats).

**Answer 3:**
Let the pressure ratio be $r_p = P_2/P_1$.
Ideal compressor outlet temperature: $T_{2s} = T_1 \cdot r_p^{(\gamma-1)/\gamma}$
Actual compressor outlet temperature: $T_2 = T_1 + \frac{T_{2s} - T_1}{\eta_c}$

Ideal turbine outlet temperature: $T_{4s} = T_3 \cdot (1/r_p)^{(\gamma-1)/\gamma} = T_3 / r_p^{(\gamma-1)/\gamma}$
Actual turbine outlet temperature: $T_4 = T_3 - \eta_t \cdot (T_3 - T_{4s})$

Work done by compressor ($w_c$): $w_c = c_p (T_2 - T_1)$
Work done by turbine ($w_t$): $w_t = c_p (T_3 - T_4)$

Net work output ($w_{net}$): $w_{net} = w_t - w_c = c_p [(T_3 - T_4) - (T_2 - T_1)]$

**Note:** This is a setup for a derivation. A full derivation would involve substituting the expressions for $T_2$ and $T_4$. The key is to use the efficiency definitions correctly.

**(This question is more advanced and aims at CO1 and CO3).**

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
