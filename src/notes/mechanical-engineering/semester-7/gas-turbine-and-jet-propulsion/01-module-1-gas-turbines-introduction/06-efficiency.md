---
title: "efficiency"
subject: "GAS TURBINE AND JET PROPULSION"
module: "Module 1: Gas Turbines – Introduction"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1751d0cf4804463c90"
status: "completed"
scrapedAt: "2026-05-20T18:13:37.760Z"
---
# Module 1: Gas Turbines – Introduction: Efficiency

## 1. Introduction to Gas Turbines and Efficiency

This module introduces the fundamental concepts of gas turbines and their operational principles. A key aspect of understanding gas turbine performance is **efficiency**. This topic will explore the various ways efficiency is defined and calculated for gas turbine systems.

**Learning Outcome Addressed:**
*   (Implicitly) Understanding the basic operation of gas turbines, which is a prerequisite to discussing efficiency.

**Course Outcomes Addressed:**
*   **CO1 (K3):** To apply the principles of thermodynamics and fluid dynamics to understand the performance and efficiency of various gas turbine cycles. (This topic lays the groundwork for applying these principles).

**Key Concepts:**
*   **Gas Turbine Engine:** A type of internal combustion engine that improves efficiency by using the combustion gases to drive a turbine.
*   **Efficiency:** A measure of how well an energy conversion device utilizes input energy to produce useful output energy. In gas turbines, this relates to how much of the thermal energy released from fuel combustion is converted into useful mechanical work or thrust.

**Important Points to Remember:**
*   Efficiency is a crucial parameter for evaluating the performance and economic viability of any gas turbine.
*   Different types of efficiencies exist, each focusing on specific aspects of the energy conversion process.

---

## 2. Types of Efficiencies in Gas Turbines

Understanding the different types of efficiencies is essential for a comprehensive analysis of gas turbine performance. These efficiencies help pinpoint losses within the system and guide improvements.

**Learning Outcomes Addressed:**
*   Understanding the various efficiencies relevant to gas turbine operation.

**Course Outcomes Addressed:**
*   **CO1 (K3):** To apply the principles of thermodynamics and fluid dynamics to understand the performance and efficiency of various gas turbine cycles.

### 2.1. Thermal Efficiency ($\eta_{th}$)

**Definition:**
Thermal efficiency is the ratio of the net work output of the thermodynamic cycle to the heat input supplied to the cycle. It represents the efficiency of converting heat energy into mechanical work.

**Formula:**
$\eta_{th} = \frac{\text{Net Work Output}}{\text{Heat Input}} = \frac{W_{net}}{Q_{in}}$

Where:
*   $W_{net}$ is the net work done by the turbine, subtracting the work consumed by the compressor.
*   $Q_{in}$ is the heat added to the working fluid, typically from fuel combustion.

**Textbook Reference:**
*   **Ganesan, V. (2017) - Gas Turbines:** Discusses thermal efficiency in the context of ideal and actual thermodynamic cycles (e.g., Brayton cycle).
*   **Yahya, S. M. (2011) - Turbines, Compressors and Fans:** Explains thermal efficiency as a fundamental thermodynamic performance metric.
*   **Mathur, M. L. (2010) - Gas Turbine & Jet Rocket Propulsion:** Defines thermal efficiency in relation to the energy balance of the gas turbine cycle.

**Example:**
Consider a simple gas turbine cycle where the heat input is 1000 kJ and the net work output is 400 kJ.
$\eta_{th} = \frac{400 \text{ kJ}}{1000 \text{ kJ}} = 0.4$ or 40%.

### 2.2. Mechanical Efficiency ($\eta_{mech}$)

**Definition:**
Mechanical efficiency accounts for the losses due to friction and other mechanical inefficiencies in the rotating components of the gas turbine (e.g., bearings, seals, gearbox if present). It is the ratio of the actual power delivered by the turbine shaft to the power developed by the turbine blades.

**Formula:**
$\eta_{mech} = \frac{\text{Shaft Power Delivered}}{\text{Turbine Power Developed}}$

**Textbook Reference:**
*   **Ganesan, V. (2017) - Gas Turbines:** Elaborates on mechanical losses in rotating machinery.
*   **Yahya, S. M. (2011) - Turbines, Compressors and Fans:** Discusses mechanical efficiency in the context of component performance.

**Important Points to Remember:**
*   Mechanical efficiency is typically between 0.95 and 0.99 for well-designed gas turbines.

### 2.3. Volumetric Efficiency ($\eta_{vol}$) (Primarily for Reciprocating Engines, but conceptual understanding can be useful)

**Definition:**
While not a primary efficiency for continuous-flow gas turbines, volumetric efficiency is relevant in some contexts where air intake is critical. It relates to the amount of air actually drawn into the cylinder compared to the cylinder's swept volume.

**Formula:**
$\eta_{vol} = \frac{\text{Actual mass of air drawn in}}{\text{Theoretical mass of air that could be drawn in}}$

**Textbook Reference:**
*   **Ganesan, V. (2017) - Gas Turbines:** May touch upon intake efficiency conceptually or in relation to specific engine types.

### 2.4. Isentropic Efficiency ($\eta_{is}$)

**Definition:**
Isentropic efficiency (also known as adiabatic efficiency) compares the actual performance of a component (compressor or turbine) to its ideal isentropic (constant entropy) performance. This is a crucial measure of component efficiency.

*   **Isentropic Efficiency of Compressor ($\eta_{c,is}$):**
    *   **Definition:** Ratio of the ideal work required to compress the air isentropically to the actual work required.
    *   **Formula:**
        $\eta_{c,is} = \frac{\text{Isentropic work of compression}}{\text{Actual work of compression}} = \frac{h_{2s} - h_1}{h_2 - h_1}$
        (where $h_1$ is the enthalpy at the inlet, $h_2$ is the enthalpy at the outlet, and $h_{2s}$ is the enthalpy at the outlet if the compression were isentropic). For ideal gas: $\eta_{c,is} = \frac{T_{2s} - T_1}{T_2 - T_1}$
*   **Isentropic Efficiency of Turbine ($\eta_{t,is}$):**
    *   **Definition:** Ratio of the actual work delivered by the turbine to the work that would be delivered if the expansion were isentropic.
    *   **Formula:**
        $\eta_{t,is} = \frac{\text{Actual work of expansion}}{\text{Isentropic work of expansion}} = \frac{h_1 - h_2}{h_1 - h_{2s}}$
        (where $h_1$ is the enthalpy at the inlet, $h_2$ is the enthalpy at the outlet, and $h_{2s}$ is the enthalpy at the outlet if the expansion were isentropic). For ideal gas: $\eta_{t,is} = \frac{T_1 - T_2}{T_1 - T_{2s}}$

**Textbook Reference:**
*   **Ganesan, V. (2017) - Gas Turbines:** Provides detailed explanations and derivations of isentropic efficiencies for compressors and turbines.
*   **Yahya, S. M. (2011) - Turbines, Compressors and Fans:** Focuses heavily on isentropic efficiencies as a primary performance indicator for these components.
*   **Cohen, H. (2019) - Gas Turbine Theory:** Offers rigorous analysis of isentropic efficiencies and their impact on overall cycle performance.

**Example:**
A compressor requires 200 kJ/kg of work for isentropic compression, but in reality, it consumes 250 kJ/kg.
$\eta_{c,is} = \frac{200 \text{ kJ/kg}}{250 \text{ kJ/kg}} = 0.8$ or 80%.

**Important Points to Remember:**
*   Isentropic efficiency is a measure of how close a real process is to an ideal reversible adiabatic process.
*   Lower isentropic efficiencies indicate higher irreversibilities (losses) within the component.

### 2.5. Overall Efficiency ($\eta_{overall}$)

**Definition:**
Overall efficiency, often referred to as **propulsive efficiency** in jet engines or **shaft efficiency** in power generation turbines, combines the thermal efficiency with the efficiency of converting internal work into useful external output.

*   **For Jet Propulsion (Propulsive Efficiency):**
    *   **Definition:** Ratio of the useful power imparted to the aircraft to the kinetic energy of the exhaust jet. It considers the effectiveness of the engine in generating thrust.
    *   **Formula:**
        $\eta_{propulsive} = \frac{\text{Useful Thrust Power}}{\text{Rate of Kinetic Energy of Exhaust Jet}} = \frac{F_n \cdot V_a}{\frac{1}{2} \dot{m}_j (V_j - V_a)^2 (V_j + V_a)} = \frac{2 V_a}{V_j + V_a}$
        Where:
        *   $F_n$ is the net thrust.
        *   $V_a$ is the aircraft velocity.
        *   $\dot{m}_j$ is the mass flow rate of the jet.
        *   $V_j$ is the jet velocity.
    *   **Textbook Reference:**
        *   **Mathur, M. L. (2010) - Gas Turbine & Jet Rocket Propulsion:** Provides a detailed analysis of propulsive efficiency for jet engines.
        *   **Rolls Royce (2015) - The Jet Engine:** Explains propulsive efficiency in the context of real-world jet engine operation.

*   **For Power Generation (Shaft Efficiency):**
    *   **Definition:** Ratio of the net shaft power output to the heat input. This accounts for both the thermal efficiency of the cycle and the mechanical efficiency of the rotating machinery.
    *   **Formula:**
        $\eta_{shaft} = \eta_{th} \times \eta_{mech}$ (Simplified relation; actual calculation involves net work and heat input). A more precise definition would consider net shaft power output.

**Course Outcomes Addressed:**
*   **CO1 (K3):** Directly applies to understanding thermal and propulsive/shaft efficiencies.
*   **CO4 (K2):** Propulsive efficiency is a key characteristic of jet propulsion systems.

**Important Points to Remember:**
*   Propulsive efficiency is maximized when the jet velocity is close to the aircraft velocity.
*   Overall efficiency is the ultimate measure of how effectively the engine converts fuel energy into useful output.

---

## 3. Factors Affecting Gas Turbine Efficiency

Several factors influence the efficiency of a gas turbine. Understanding these factors is crucial for optimizing performance and design.

**Learning Outcomes Addressed:**
*   Understanding the factors that influence gas turbine efficiency.

**Course Outcomes Addressed:**
*   **CO1 (K3):** To apply the principles of thermodynamics and fluid dynamics to understand the performance and efficiency of various gas turbine cycles.
*   **CO3 (K4):** To analyse the performance of gas turbine systems by understanding the characteristics of various components.

### 3.1. Temperature Ratios

*   **Pressure Ratio ($r_p$):** A higher pressure ratio generally leads to higher thermal efficiency. This is because it allows for a higher peak temperature relative to the ambient temperature.
    *   **Reference:** Ganesan, V. (2017) - Gas Turbines; Yahya, S. M. (2011) - Turbines, Compressors and Fans.
*   **Turbine Inlet Temperature ($T_{max}$):** Higher turbine inlet temperatures lead to increased work output and higher thermal efficiency, provided the materials can withstand these temperatures.
    *   **Reference:** Ganesan, V. (2017) - Gas Turbines; Cohen, H. (2019) - Gas Turbine Theory.
*   **Ambient Temperature ($T_1$):** Higher ambient temperatures reduce the efficiency of the gas turbine, as the temperature difference for heat addition and work production is smaller.
    *   **Reference:** Ganesan, V. (2017) - Gas Turbines.

### 3.2. Component Efficiencies

*   **Compressor Isentropic Efficiency ($\eta_{c,is}$):** A higher compressor efficiency means less work is required to compress the air, leading to a higher net work output and better overall efficiency.
    *   **Reference:** Yahya, S. M. (2011) - Turbines, Compressors and Fans; Cohen, H. (2019) - Gas Turbine Theory.
*   **Turbine Isentropic Efficiency ($\eta_{t,is}$):** A higher turbine efficiency means more work is extracted from the hot gases, contributing to higher net work output and efficiency.
    *   **Reference:** Ganesan, V. (2017) - Gas Turbines; Yahya, S. M. (2011) - Turbines, Compressors and Fans; Cohen, H. (2019) - Gas Turbine Theory.

### 3.3. Losses

*   **Friction Losses:** Occur in bearings, seals, and the flow passages within the compressor and turbine.
*   **Heat Losses:** Heat transfer from the working fluid to the surroundings.
*   **Combustion Inefficiencies:** Incomplete combustion of fuel.
*   **Pressure Losses:** Due to friction and flow disturbances in the intake, combustor, and exhaust.
    *   **Reference:** Ganesan, V. (2017) - Gas Turbines; Mathur, M. L. (2010) - Gas Turbine & Jet Rocket Propulsion.

### 3.4. Air-Fuel Ratio

*   The correct air-fuel ratio is crucial for efficient combustion. Too lean or too rich a mixture can reduce combustion efficiency and affect turbine inlet temperature.
    *   **Reference:** Mathur, M. L. (2010) - Gas Turbine & Jet Rocket Propulsion.

---

## 4. Worked Examples and Practice Questions

These examples and questions will help you apply the concepts of efficiency discussed.

### Worked Example 1: Thermal Efficiency of a Simple Gas Turbine

**Problem:**
A gas turbine operates on a simple Brayton cycle. The air enters the compressor at 1 bar and 27°C. The pressure ratio is 6:1, and the maximum temperature in the cycle is 1000°C. The isentropic efficiency of the compressor is 85%, and the isentropic efficiency of the turbine is 88%. Calculate the thermal efficiency of the cycle.

**Assumptions:**
*   Air is an ideal gas with $\gamma = 1.4$ and $c_p = 1.005 \text{ kJ/kg.K}$.
*   The process in the combustor is constant pressure heat addition.
*   The process in the turbine is an expansion.

**Solution:**

**1. Inlet Conditions:**
$T_1 = 27^\circ\text{C} = 300 \text{ K}$
$P_1 = 1 \text{ bar}$

**2. Compressor Outlet (Ideal Isentropic Compression):**
$T_{2s} = T_1 \times (r_p)^{(\gamma-1)/\gamma} = 300 \times (6)^{(1.4-1)/1.4} = 300 \times 6^{0.2857} = 300 \times 1.668 = 500.4 \text{ K}$
Work input for isentropic compression: $w_{c,s} = c_p (T_{2s} - T_1) = 1.005 \times (500.4 - 300) = 1.005 \times 200.4 = 201.4 \text{ kJ/kg}$

**3. Compressor Outlet (Actual):**
Using compressor isentropic efficiency:
$\eta_{c,is} = \frac{w_{c,s}}{w_c} \implies w_c = \frac{w_{c,s}}{\eta_{c,is}} = \frac{201.4}{0.85} = 237 \text{ kJ/kg}$
Actual temperature at compressor outlet: $T_2 = T_1 + \frac{w_c}{c_p} = 300 + \frac{237}{1.005} = 300 + 235.8 = 535.8 \text{ K}$

**4. Turbine Inlet:**
$T_3 = T_{max} = 1000^\circ\text{C} = 1273 \text{ K}$
$P_3 = P_2 = P_1 \times r_p = 1 \times 6 = 6 \text{ bar}$

**5. Turbine Outlet (Ideal Isentropic Expansion):**
$T_{4s} = T_3 \times \left(\frac{1}{r_p}\right)^{(\gamma-1)/\gamma} = 1273 \times \left(\frac{1}{6}\right)^{0.2857} = 1273 \times 0.600 = 763.8 \text{ K}$
Work output for isentropic expansion: $w_{t,s} = c_p (T_3 - T_{4s}) = 1.005 \times (1273 - 763.8) = 1.005 \times 509.2 = 511.7 \text{ kJ/kg}$

**6. Turbine Outlet (Actual):**
Using turbine isentropic efficiency:
$\eta_{t,is} = \frac{w_t}{w_{t,s}} \implies w_t = \eta_{t,is} \times w_{t,s} = 0.88 \times 511.7 = 450.3 \text{ kJ/kg}$
Actual temperature at turbine outlet: $T_4 = T_3 - \frac{w_t}{c_p} = 1273 - \frac{450.3}{1.005} = 1273 - 448.1 = 824.9 \text{ K}$

**7. Net Work Output:**
$w_{net} = w_t - w_c = 450.3 - 237 = 213.3 \text{ kJ/kg}$

**8. Heat Input:**
$q_{in} = c_p (T_3 - T_2) = 1.005 \times (1273 - 535.8) = 1.005 \times 737.2 = 741 \text{ kJ/kg}$

**9. Thermal Efficiency:**
$\eta_{th} = \frac{w_{net}}{q_{in}} = \frac{213.3}{741} = 0.2878$ or **28.78%**

**Answer:** The thermal efficiency of the cycle is approximately 28.78%.

### Practice Question 1:

A turbojet engine has a mass flow rate of air of 50 kg/s. The aircraft is flying at 200 m/s. The exhaust jet velocity is 600 m/s. Calculate the propulsive efficiency of the engine.

**Answer:**
$V_a = 200 \text{ m/s}$
$V_j = 600 \text{ m/s}$
$\eta_{propulsive} = \frac{2 V_a}{V_j + V_a} = \frac{2 \times 200}{600 + 200} = \frac{400}{800} = 0.5$ or **50%**

### Practice Question 2:

A gas turbine compressor has an isentropic efficiency of 80%. If the actual work required to compress 1 kg of air is 240 kJ/kg, what is the work required for isentropic compression?

**Answer:**
$\eta_{c,is} = \frac{w_{c,s}}{w_c}$
$0.80 = \frac{w_{c,s}}{240 \text{ kJ/kg}}$
$w_{c,s} = 0.80 \times 240 \text{ kJ/kg} = 192 \text{ kJ/kg}$

---

## 5. Summary and Key Takeaways

*   **Efficiency** is a critical parameter for assessing gas turbine performance.
*   **Thermal efficiency** relates to the conversion of heat to work within the thermodynamic cycle.
*   **Isentropic efficiency** measures the performance of individual components (compressor and turbine) against ideal reversible processes.
*   **Propulsive efficiency** is specific to jet engines and measures the effectiveness of thrust generation.
*   **Overall efficiency** represents the final conversion of fuel energy into useful output.
*   Higher **pressure ratios**, **turbine inlet temperatures**, and **component isentropic efficiencies** generally lead to higher thermal efficiencies.
*   Losses due to friction, heat transfer, and incomplete combustion reduce overall efficiency.

---

**End of Module 1: Efficiency Topic**

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
