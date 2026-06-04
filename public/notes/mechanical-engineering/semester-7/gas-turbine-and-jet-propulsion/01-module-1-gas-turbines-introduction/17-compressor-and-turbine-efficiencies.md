---
title: "compressor and turbine efficiencies"
subject: "GAS TURBINE AND JET PROPULSION"
module: "Module 1: Gas Turbines – Introduction"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1751d0cf4804463c9b"
status: "completed"
scrapedAt: "2026-05-20T18:13:45.657Z"
---
# GAS TURBINE AND JET PROPULSION

## Module 1: Gas Turbines – Introduction

### Topic: Compressor and Turbine Efficiencies

---

**Course Outcomes Addressed:**

*   **CO1:** To apply the principles of thermodynamics and fluid dynamics to understand the performance and efficiency of various gas turbine cycles. (Knowledge Level: K3)
*   **CO2:** To analyze the performance characteristics and efficiencies of axial flow compressors and reaction turbines (Knowledge Level: K4)
*   **CO3:** To analyse the performance of gas turbine systems by understanding the characteristics of various components. (Knowledge Level: K4)

---

### 1. Introduction to Efficiencies in Gas Turbines

Gas turbines, the heart of many power generation and propulsion systems, rely on the efficient operation of their key components: the compressor and the turbine. Understanding their efficiencies is crucial for predicting overall system performance, fuel consumption, and power output.

**Key Concept:** Efficiency quantifies how well a device converts input energy into desired output energy, minimizing losses. In gas turbines, efficiencies are typically discussed in terms of thermodynamic performance and mechanical aspects.

---

### 2. Compressor Efficiencies

The compressor's role is to increase the pressure of the working fluid (air) before it enters the combustion chamber. Its efficiency directly impacts the net work output of the gas turbine cycle.

**2.1 Types of Compressors and Their Efficiencies:**

*   **Axial Flow Compressors:** Air flows parallel to the axis of rotation. They offer high flow rates and are common in jet engines and large industrial turbines.
*   **Centrifugal (Radial) Compressors:** Air is accelerated radially outwards. They are simpler, more robust, and suitable for smaller applications or as the initial stage in multi-stage compressors.

**2.2 Thermodynamic Efficiencies (Ideal vs. Actual):**

The performance of a compressor is typically assessed by comparing the actual work input required to the ideal work input for achieving the same pressure rise.

*   **Isentropic Efficiency ($\eta_{is}$):** This is the most common measure for compressors. It compares the actual work input to the isentropic work input for the same pressure ratio and inlet conditions.

    **Formula:**
    $\eta_{is} = \frac{\text{Isentropic work input}}{\text{Actual work input}} = \frac{h_{s2} - h_{1}}{h_{2} - h_{1}}$

    Where:
    *   $h_{s2}$ is the enthalpy at the isentropic final state.
    *   $h_1$ is the initial enthalpy.
    *   $h_2$ is the actual final enthalpy.

    For an ideal gas with constant specific heats:
    $\eta_{is} = \frac{T_{s2} - T_{1}}{T_{2} - T_{1}} = \frac{T_{1} \left( (P_{2}/P_{1})^{\frac{\gamma-1}{\gamma}} - 1 \right)}{T_{2} - T_{1}}$

    **Important Note:** Since the actual work input is always greater than the isentropic work input due to irreversibilities (friction, turbulence), $\eta_{is}$ is always less than 1 (or 100%).

*   **Polytropic Efficiency ($\eta_{poly}$):** This is used for compressors with many stages, where the efficiency is defined for an infinitesimal stage. It's often more accurate for multi-stage compressors.

    **Formula:**
    $\eta_{poly} = \frac{dT_{s}}{dT} = \frac{T_{1} \left( (P_{2}/P_{1})^{\frac{\gamma-1}{\gamma}} - 1 \right)}{T_{2} - T_{1}}$
    (This formula can be derived from the polytropic process $T v^{\text{n}} = \text{constant}$, where $n$ is the polytropic index, and $\eta_{poly} = \frac{n-1}{n} \frac{\gamma}{\gamma-1}$).

    **Relationship between Isentropic and Polytropic Efficiency:**
    For a given pressure ratio, $\eta_{is} > \eta_{poly}$. The relationship is complex and depends on the number of stages, but a common approximation for a large number of stages is:
    $\eta_{is} = 1 - (1 - \eta_{poly}) \frac{\ln(P_2/P_1)}{\frac{\gamma-1}{\gamma}\ln(P_2/P_1)} = 1 - (1 - \eta_{poly}) \frac{\gamma}{\gamma-1}$ (This simplified relation is often used for preliminary analysis).

**2.3 Sources of Compressor Losses:**

*   **Aerodynamic Losses:** Friction between air and blade surfaces, flow separation from blades, shock waves (in axial compressors at high speeds), leakage past blade tips.
*   **Mechanical Losses:** Bearing friction, seal friction.
*   **Surge:** An aerodynamic instability where the flow within the compressor breaks down, leading to a significant drop in pressure ratio and flow rate. This is a critical operational limit.
*   **Stall:** Local breakdown of flow on a blade, which can propagate through the compressor.

**2.4 Factors Affecting Compressor Efficiency:**

*   **Blade design:** Aerofoil shape, incidence angle, blade tip clearance.
*   **Operating conditions:** Inlet temperature and pressure, speed of rotation.
*   **Reynolds number:** Influences boundary layer behavior.
*   **Number of stages:** Higher number of stages allows for lower pressure rise per stage, generally leading to higher efficiency.
*   **Internal leakage:** Air bypassing stages through seals.

**Example (from Ganesan, Chapter 4):**
Consider a single-stage axial compressor with an inlet temperature $T_1 = 288$ K and a pressure ratio $P_2/P_1 = 1.5$. If the ideal work input per kg of air is 100 kJ/kg, and the actual work input is 115 kJ/kg, calculate the isentropic efficiency.

$\eta_{is} = \frac{\text{Isentropic work input}}{\text{Actual work input}} = \frac{100 \text{ kJ/kg}}{115 \text{ kJ/kg}} \approx 0.87$ or 87%.

---

### 3. Turbine Efficiencies

The turbine's role is to extract energy from the high-temperature, high-pressure gas exiting the combustor to drive the compressor and produce useful work.

**3.1 Types of Turbines and Their Efficiencies:**

*   **Axial Flow Turbines:** Similar to axial compressors, gas flows parallel to the axis. These are predominant in jet engines and large power plants.
*   **Radial Flow Turbines:** Gas flows radially outwards or inwards. Less common in primary gas turbine applications but found in some specialized systems.

**3.2 Thermodynamic Efficiencies (Ideal vs. Actual):**

Similar to compressors, turbine performance is assessed by comparing actual work output to ideal work output.

*   **Isentropic Efficiency ($\eta_{is}$):** This is the most common measure. It compares the actual work output to the isentropic work output for the same pressure drop and inlet conditions.

    **Formula:**
    $\eta_{is} = \frac{\text{Actual work output}}{\text{Isentropic work output}} = \frac{h_{1} - h_{2}}{h_{1} - h_{s2}}$

    Where:
    *   $h_1$ is the initial enthalpy of the gas.
    *   $h_2$ is the actual final enthalpy of the gas.
    *   $h_{s2}$ is the enthalpy at the isentropic final state.

    For an ideal gas with constant specific heats:
    $\eta_{is} = \frac{T_{1} - T_{2}}{T_{1} - T_{s2}} = \frac{T_{1} - T_{2}}{T_{1} \left( 1 - (P_{2}/P_{1})^{\frac{\gamma-1}{\gamma}} \right)}$

    **Important Note:** Since the actual work output is always less than the isentropic work output due to irreversibilities, $\eta_{is}$ is always less than 1 (or 100%).

*   **Polytropic Efficiency ($\eta_{poly}$):** Similar to compressors, used for multi-stage turbines.

    **Formula:**
    $\eta_{poly} = \frac{-dT}{-dT_{s}} = \frac{T_{1} - T_{2}}{T_{1} - T_{2,s}}$
    (This formula can be derived from the polytropic process $T v^{\text{n}} = \text{constant}$, where $n$ is the polytropic index, and $\eta_{poly} = \frac{\gamma-1}{\gamma} \frac{n}{n-1}$).

    **Relationship between Isentropic and Polytropic Efficiency:**
    For a given pressure ratio, $\eta_{is} > \eta_{poly}$. The relationship is analogous to compressors but with the factors reversed in the ratio of specific heats.

**3.3 Sources of Turbine Losses:**

*   **Aerodynamic Losses:** Friction between gas and blade surfaces, flow separation, secondary flows, leakage through seals (especially at blade roots and tips), nozzle wakes, disc windage.
*   **Mechanical Losses:** Bearing friction.
*   **Cooling Air:** In high-temperature turbines, cooling air is often bled from the compressor and passed through internal passages in the turbine blades and discs. This reduces the net work output and effectively lowers the turbine efficiency if not accounted for properly.

**3.4 Factors Affecting Turbine Efficiency:**

*   **Blade design:** Aerofoil shape, nozzle angle, stage loading.
*   **Operating conditions:** Inlet temperature and pressure, speed of rotation.
*   **Blade tip clearance:** Critical for preventing gas bypass.
*   **Cooling air flow rate:** Higher cooling air reduces turbine efficiency.
*   **Turbine inlet temperature (TIT):** Higher TIT generally leads to higher power output but requires advanced cooling technologies, which can impact efficiency.

**Example (from Yahya, Chapter 6):**
A turbine stage receives gas at $T_1 = 1200$ K and expands it to $T_2 = 900$ K. The isentropic expansion would result in a final temperature $T_{s2} = 800$ K. Calculate the isentropic efficiency of the turbine stage.

$\eta_{is} = \frac{T_{1} - T_{2}}{T_{1} - T_{s2}} = \frac{1200 \text{ K} - 900 \text{ K}}{1200 \text{ K} - 800 \text{ K}} = \frac{300 \text{ K}}{400 \text{ K}} = 0.75$ or 75%.

---

### 4. Combined Component Efficiencies and Overall Gas Turbine Efficiency

The efficiencies of the compressor and turbine are key inputs for determining the overall performance of a gas turbine engine.

**4.1 Compressor Work Input ($W_c$):**
$W_c = \dot{m}_a (h_{02} - h_{01}) = \dot{m}_a c_p (T_{02} - T_{01})$
where $T_{02} = T_{01} \left( \frac{P_{02}}{P_{01}} \right)^{\frac{\gamma-1}{\gamma}} / \eta_{is,c}$ for the actual work input.

**4.2 Turbine Work Output ($W_t$):**
$W_t = \dot{m}_g (h_{03} - h_{05}) = \dot{m}_g c_p (T_{03} - T_{05})$
where $T_{05} = T_{03} \eta_{is,t} \left( \frac{P_{05}}{P_{03}} \right)^{\frac{\gamma-1}{\gamma}}$ for the actual work output.

**4.3 Shaft Power:**
The turbine work output drives the compressor.
Shaft Power = $W_t - W_c$ (where $W_c$ is the work required by the compressor).
Note: In a simple jet engine, the turbine drives the compressor directly, and the remaining energy is expelled as kinetic energy in the exhaust. In a turboshaft or turboprop engine, the turbine drives an output shaft.

**4.4 Thermal Efficiency ($\eta_{th}$):**
The overall thermal efficiency of the gas turbine cycle is given by:
$\eta_{th} = \frac{\text{Net work output}}{\text{Heat input}} = \frac{W_t - W_c}{Q_{in}}$

**4.5 Isentropic Efficiencies in Cycle Analysis:**
When analyzing the overall gas turbine cycle (e.g., Brayton cycle), the isentropic efficiencies of the compressor and turbine are used to calculate the actual temperatures and enthalpies at the compressor and turbine exit.

*   **Actual Compressor Outlet Temperature ($T_{02}$):**
    $T_{02} = T_{01} \left( 1 + \frac{1}{\eta_{is,c}} \left[ \left(\frac{P_{02}}{P_{01}}\right)^{\frac{\gamma-1}{\gamma}} - 1 \right] \right)$

*   **Actual Turbine Outlet Temperature ($T_{05}$):**
    $T_{05} = T_{03} \left( 1 - \eta_{is,t} \left[ 1 - \left(\frac{P_{05}}{P_{03}}\right)^{\frac{\gamma-1}{\gamma}} \right] \right)$

**4.6 Mechanical Efficiency ($\eta_m$):**
This accounts for losses in bearings and other rotating machinery.
Actual Shaft Power = Turbine Shaft Power $\times \eta_m$

**4.7 Overall Efficiency ($\eta_o$):**
$\eta_o = \eta_{th} \times \eta_m \times \eta_{combustor}$ (where $\eta_{combustor}$ accounts for combustion efficiency and pressure losses in the combustor).

**From Mathur, M. L. (Standard Publishers Distributors, 2010), Chapter 3 on "Performance of Gas Turbines":** The book emphasizes that component efficiencies are fundamental to predicting the performance of the entire engine. It details how variations in compressor and turbine efficiencies affect the specific work output and thermal efficiency of the Brayton cycle.

**From Cohen, H. (Pearson Education, 2019), Chapter 8 on "Axial Flow Compressors" and Chapter 10 on "Axial Flow Turbines":** These chapters provide in-depth analysis of the flow processes within each component, highlighting factors contributing to losses and how these losses are quantified through isentropic and polytropic efficiencies. They also discuss the stage stacking for multi-stage machines.

---

### 5. Practice Questions and Answers

**Question 1:**
An axial flow compressor has an isentropic efficiency of 85%. If the air enters at 288 K and is compressed to a pressure ratio of 10:1, what is the actual temperature rise of the air? Assume $\gamma = 1.4$ and $c_p = 1.005$ kJ/kg.K.

**Answer 1:**
First, calculate the isentropic temperature rise:
$T_{s2} = T_1 \left(\frac{P_2}{P_1}\right)^{\frac{\gamma-1}{\gamma}} = 288 \text{ K} \times (10)^{\frac{1.4-1}{1.4}} = 288 \text{ K} \times (10)^{0.2857} \approx 288 \text{ K} \times 1.9307 \approx 556.04$ K.
Isentropic temperature rise = $T_{s2} - T_1 = 556.04 \text{ K} - 288 \text{ K} = 268.04$ K.

Now, use the isentropic efficiency formula to find the actual temperature rise:
$\eta_{is} = \frac{\text{Isentropic temperature rise}}{\text{Actual temperature rise}}$
$0.85 = \frac{268.04 \text{ K}}{\Delta T_{actual}}$
$\Delta T_{actual} = \frac{268.04 \text{ K}}{0.85} \approx 315.34$ K.
Actual temperature rise = 315.34 K.

**Question 2:**
A turbine stage operates with an inlet temperature of 1100 K and expands gas to an outlet pressure which is 1/4th of the inlet pressure. If the isentropic efficiency of the turbine stage is 90%, calculate the actual outlet temperature. Assume $\gamma = 1.33$.

**Answer 2:**
Isentropic outlet temperature:
$T_{s2} = T_1 \left(\frac{P_2}{P_1}\right)^{\frac{\gamma-1}{\gamma}} = 1100 \text{ K} \times (0.25)^{\frac{1.33-1}{1.33}} = 1100 \text{ K} \times (0.25)^{\frac{0.33}{1.33}} \approx 1100 \text{ K} \times (0.25)^{0.248} \approx 1100 \text{ K} \times 0.7695 \approx 846.45$ K.

Now, use the isentropic efficiency formula to find the actual outlet temperature ($T_2$):
$\eta_{is} = \frac{T_{1} - T_{2}}{T_{1} - T_{s2}}$
$0.90 = \frac{1100 \text{ K} - T_{2}}{1100 \text{ K} - 846.45 \text{ K}}$
$0.90 = \frac{1100 \text{ K} - T_{2}}{253.55 \text{ K}}$
$0.90 \times 253.55 \text{ K} = 1100 \text{ K} - T_{2}$
$228.195 \text{ K} = 1100 \text{ K} - T_{2}$
$T_{2} = 1100 \text{ K} - 228.195 \text{ K} \approx 871.8$ K.
Actual outlet temperature = 871.8 K.

**Question 3:**
Explain the difference between isentropic and polytropic efficiency for compressors and turbines. For which type of machine (single-stage or multi-stage) is polytropic efficiency generally more appropriate, and why?

**Answer 3:**
*   **Isentropic Efficiency:** Compares the actual process to an ideal isentropic process for the *entire* pressure (or enthalpy) change. It assumes a single, overall ideal process.
*   **Polytropic Efficiency:** Compares the actual process to an ideal polytropic process for an *infinitesimal* change in pressure (or enthalpy). It accounts for the varying conditions as the fluid moves through multiple stages.

Polytropic efficiency is generally more appropriate for **multi-stage compressors and turbines**. This is because in a multi-stage machine, the fluid properties (temperature and pressure) change at each stage. An isentropic efficiency applied to the entire machine may not accurately reflect the accumulated irreversibilities, as the specific heat and other properties might vary significantly across the stages. Polytropic efficiency, by considering infinitesimal stages, provides a more accurate representation of the cumulative effect of irreversibilities in a multi-stage device.

---

### 6. Important Points to Remember

*   **Compressor Efficiency:** $\eta_{is,c} = \frac{\text{Isentropic work input}}{\text{Actual work input}} < 1$. Higher efficiency means less work required to achieve a pressure rise.
*   **Turbine Efficiency:** $\eta_{is,t} = \frac{\text{Actual work output}}{\text{Isentropic work output}} < 1$. Higher efficiency means more work extracted from the gas.
*   **Losses:** Friction, flow separation, leakage, and shock waves are primary sources of inefficiency in both compressors and turbines.
*   **Polytropic vs. Isentropic:** For the same overall pressure ratio, $\eta_{is} > \eta_{poly}$. Polytropic efficiency is more suited for multi-stage machines.
*   **Overall Performance:** The efficiencies of the compressor and turbine are critical drivers for the net power output and thermal efficiency of the entire gas turbine system.
*   **Impact of High Turbine Inlet Temperature (TIT):** While higher TIT increases power, it necessitates advanced cooling for turbine blades, which can affect turbine efficiency.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |


### 7. References and Further Reading

*   **Gas Turbines** by V Ganesan (McGraw Hill Education, Third, 2017) - Chapters on compressors and turbines provide fundamental thermodynamic and performance analyses.
*   **Turbines, Compressors and Fans** by S M Yahya (McGraw Hill, Fourth, 2011) - Offers detailed coverage of aerodynamic design principles and efficiency considerations for these components.
*   **Gas Turbine & Jet Rocket Propulsion** by Mathur M L (Standard Publishers Distributors, First, 2010) - Focuses on the application of these components within propulsion systems and power generation.
*   **The Jet Engine** by Rolls Royce (Wiley, First, 2015) - Practical insights into the design and performance of jet engine components, including compressors and turbines.
*   **Gas Turbine Theory** by H. Cohen (Pearson Education, Seventh, 2019) - A comprehensive theoretical treatment of gas turbine cycles and component performance, including advanced topics on efficiency.

---