---
title: "thermodynamic analysis"
subject: "GAS TURBINE AND JET PROPULSION"
module: "Module 1: Gas Turbines – Introduction"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1751d0cf4804463c8f"
status: "completed"
scrapedAt: "2026-05-20T18:13:37.040Z"
---
# Module 1: Gas Turbines – Introduction

## Topic: Thermodynamic Analysis

This module introduces the fundamental thermodynamic principles governing the operation of gas turbines. Understanding these principles is crucial for analyzing the performance and efficiency of these power plants.

---

### Learning Outcomes

By the end of this topic, you should be able to:

*   Understand the basic thermodynamic cycles applicable to gas turbines.
*   Analyze the thermodynamic processes within individual gas turbine components (compressor, combustion chamber, turbine).
*   Calculate the net work output, thermal efficiency, and specific work for ideal gas turbine cycles.
*   Understand the impact of irreversibilities (real processes) on gas turbine performance.
*   Relate thermodynamic analysis to the practical performance of gas turbine engines.

---

### 1. Introduction to Gas Turbines and Thermodynamic Cycles

Gas turbines are thermal machines that convert thermal energy into mechanical work, primarily through the combustion of fuel and the expansion of hot gases. They are widely used in power generation, aircraft propulsion, and industrial applications.

**Key Concept:** **Thermodynamic Cycle**
A thermodynamic cycle consists of a series of processes that return a working fluid to its initial state. In gas turbines, the working fluid is typically air, which undergoes compression, heating, and expansion.

**Reference:**
*   **Ganesan (2017), Chapter 1 & 2:** Introduces the basic working principle of gas turbines and the concept of thermodynamic cycles, including the ideal Brayton cycle as the fundamental basis.

**Fundamental Ideal Cycle: The Brayton Cycle**
The ideal gas turbine cycle is known as the **Brayton Cycle**. It is an open cycle where air is taken in, compressed, heated, expanded, and then exhausted. The cycle consists of four ideal processes:

1.  **Isentropic Compression (Process 1-2):** Air is compressed reversibly and adiabatically from an initial pressure $P_1$ and temperature $T_1$ to a final pressure $P_2$ and temperature $T_2$.
    *   *Thermodynamic Process:* Adiabatic and Reversible.
    *   *Work Input:* Required by the compressor.
    *   *Example:* A highly efficient compressor operating without friction or heat transfer.

2.  **Constant Pressure Heat Addition (Process 2-3):** Heat is added to the compressed air at constant pressure $P_2$ from $T_2$ to $T_3$. In a real engine, this happens in the combustion chamber.
    *   *Thermodynamic Process:* Isobaric (constant pressure).
    *   *Heat Input ($Q_{in}$):* Supplied by burning fuel.
    *   *Example:* Burning fuel in the combustion chamber, where pressure drop is ideally neglected.

3.  **Isentropic Expansion (Process 3-4):** The hot gases expand reversibly and adiabatically through the turbine, producing work, from pressure $P_3$ and temperature $T_3$ to pressure $P_4$ and temperature $T_4$.
    *   *Thermodynamic Process:* Adiabatic and Reversible.
    *   *Work Output ($W_{out}$):* Produced by the turbine.
    *   *Example:* A highly efficient turbine extracting maximum energy from the hot gases.

4.  **Constant Pressure Heat Rejection (Process 4-1):** Heat is rejected from the working fluid at constant pressure $P_4$ from $T_4$ back to the initial state $T_1$. In an open cycle, this is achieved by exhausting the gases to the atmosphere.
    *   *Thermodynamic Process:* Isobaric (constant pressure).
    *   *Heat Rejection ($Q_{out}$):* Exhausted to the surroundings.
    *   *Example:* The hot exhaust gases released into the atmosphere.

**Important Point to Remember:** The Brayton cycle is the theoretical basis, and real cycles deviate due to irreversibilities.

---

### 2. Thermodynamic Analysis of the Ideal Brayton Cycle

Let's analyze the ideal Brayton cycle using the properties of a perfect gas with constant specific heats.

**Assumptions for Ideal Analysis:**
*   Working fluid is a perfect gas.
*   Specific heats are constant.
*   Compression and expansion processes are isentropic.
*   Heat addition and rejection occur at constant pressure.
*   Negligible pressure drops in the combustion chamber and exhaust.

**Analysis of Each Process:**

*   **Process 1-2 (Isentropic Compression):**
    *   Work input per unit mass ($w_c$) = $h_2 - h_1 = c_p (T_2 - T_1)$
    *   Since it's isentropic, $\frac{T_2}{T_1} = (\frac{P_2}{P_1})^{\frac{\gamma-1}{\gamma}} = (\text{Pressure Ratio})^{\frac{\gamma-1}{\gamma}}$
    *   Here, $\gamma$ is the ratio of specific heats ($c_p/c_v$).

*   **Process 2-3 (Constant Pressure Heat Addition):**
    *   Heat added per unit mass ($q_{in}$) = $h_3 - h_2 = c_p (T_3 - T_2)$

*   **Process 3-4 (Isentropic Expansion):**
    *   Work output per unit mass ($w_t$) = $h_3 - h_4 = c_p (T_3 - T_4)$
    *   Since it's isentropic, $\frac{T_3}{T_4} = (\frac{P_3}{P_4})^{\frac{\gamma-1}{\gamma}} = (\text{Pressure Ratio})^{\frac{\gamma-1}{\gamma}}$
    *   Note: $P_2 = P_3$ and $P_1 = P_4$ for an ideal cycle.

*   **Process 4-1 (Constant Pressure Heat Rejection):**
    *   Heat rejected per unit mass ($q_{out}$) = $h_4 - h_1 = c_p (T_4 - T_1)$

**Performance Metrics:**

*   **Net Work Output per unit mass ($w_{net}$):**
    *   $w_{net} = w_t - w_c$
    *   $w_{net} = c_p (T_3 - T_4) - c_p (T_2 - T_1)$

*   **Thermal Efficiency ($\eta_{th}$):**
    *   $\eta_{th} = \frac{w_{net}}{q_{in}} = \frac{w_t - w_c}{q_{in}}$
    *   $\eta_{th} = \frac{c_p (T_3 - T_4) - c_p (T_2 - T_1)}{c_p (T_3 - T_2)} = 1 - \frac{T_4 - T_1}{T_3 - T_2}$
    *   Substituting the temperature ratios from isentropic processes:
        *   $\frac{T_2}{T_1} = \frac{T_3}{T_4} = r_p^{\frac{\gamma-1}{\gamma}}$, where $r_p = \frac{P_2}{P_1}$ (Pressure Ratio).
        *   $\eta_{th} = 1 - \frac{T_1(T_4/T_1 - 1)}{T_3(1 - T_2/T_3)} = 1 - \frac{T_1(T_4/T_1 - 1)}{T_3(1 - T_2/T_3)}$
        *   Let $\frac{T_2}{T_1} = r_p^{\frac{\gamma-1}{\gamma}}$. Then $T_2 = T_1 r_p^{\frac{\gamma-1}{\gamma}}$.
        *   Also, $\frac{T_3}{T_4} = r_p^{\frac{\gamma-1}{\gamma}}$. Then $T_4 = \frac{T_3}{r_p^{\frac{\gamma-1}{\gamma}}}$.
        *   $\eta_{th} = 1 - \frac{T_1}{T_2} = 1 - \frac{1}{r_p^{\frac{\gamma-1}{\gamma}}}$

**Example:**
Air enters a gas turbine compressor at 1 bar and 15°C. The pressure ratio is 6:1. The air is heated to 700°C in the combustion chamber. Assuming ideal processes and constant specific heats ($c_p = 1.005 \, \text{kJ/kg} \cdot \text{K}$, $\gamma = 1.4$), calculate:
(a) Temperature at compressor outlet ($T_2$)
(b) Temperature at turbine outlet ($T_4$)
(c) Net work output ($w_{net}$)
(d) Thermal efficiency ($\eta_{th}$)

**Solution:**
Given: $P_1 = 1 \, \text{bar}$, $T_1 = 15^\circ\text{C} = 288.15 \, \text{K}$, $r_p = 6$. $T_3 = 700^\circ\text{C} = 973.15 \, \text{K}$.

(a) **Compressor Outlet Temperature ($T_2$):**
$\frac{T_2}{T_1} = r_p^{\frac{\gamma-1}{\gamma}} = 6^{\frac{1.4-1}{1.4}} = 6^{0.2857} \approx 1.585$
$T_2 = T_1 \times 1.585 = 288.15 \, \text{K} \times 1.585 \approx 456.76 \, \text{K}$
$T_2 \approx 183.61^\circ\text{C}$

(b) **Turbine Outlet Temperature ($T_4$):**
$\frac{T_3}{T_4} = r_p^{\frac{\gamma-1}{\gamma}} \approx 1.585$
$T_4 = \frac{T_3}{1.585} = \frac{973.15 \, \text{K}}{1.585} \approx 613.97 \, \text{K}$
$T_4 \approx 340.82^\circ\text{C}$

(c) **Net Work Output ($w_{net}$):**
$w_c = c_p (T_2 - T_1) = 1.005 \, \text{kJ/kg} \cdot \text{K} \times (456.76 - 288.15) \, \text{K} = 1.005 \times 168.61 \approx 169.45 \, \text{kJ/kg}$
$w_t = c_p (T_3 - T_4) = 1.005 \, \text{kJ/kg} \cdot \text{K} \times (973.15 - 613.97) \, \text{K} = 1.005 \times 359.18 \approx 360.98 \, \text{kJ/kg}$
$w_{net} = w_t - w_c = 360.98 - 169.45 = 191.53 \, \text{kJ/kg}$

(d) **Thermal Efficiency ($\eta_{th}$):**
$\eta_{th} = 1 - \frac{1}{r_p^{\frac{\gamma-1}{\gamma}}} = 1 - \frac{1}{1.585} \approx 1 - 0.6309 \approx 0.3691$
$\eta_{th} \approx 36.91\%$

**Alternative calculation for $\eta_{th}$:**
$q_{in} = c_p (T_3 - T_2) = 1.005 \, \text{kJ/kg} \cdot \text{K} \times (973.15 - 456.76) \, \text{K} = 1.005 \times 516.39 \approx 519.0 \, \text{kJ/kg}$
$\eta_{th} = \frac{w_{net}}{q_{in}} = \frac{191.53}{519.0} \approx 0.3690$
$\eta_{th} \approx 36.90\%$

**Reference:**
*   **Yahya (2011), Chapter 2:** Provides detailed derivation and analysis of the Brayton cycle, including the effect of pressure ratio on efficiency.
*   **Mathur & Mathur (2010), Chapter 3:** Covers the fundamental thermodynamic principles and cycle analysis of gas turbines.

---

### 3. Effect of Key Parameters on Ideal Brayton Cycle Performance

**a) Pressure Ratio ($r_p$):**
*   **Thermal Efficiency:** As the pressure ratio increases, the thermal efficiency of the ideal Brayton cycle increases. This is because a higher pressure ratio leads to higher compressor work input and higher turbine expansion ratio, resulting in a greater net work output for a given maximum temperature.
    *   **Observation:** The term $1/r_p^{(\gamma-1)/\gamma}$ decreases as $r_p$ increases, so $\eta_{th}$ increases.
*   **Net Work Output:** The effect of pressure ratio on net work output is more complex. Initially, as $r_p$ increases, the net work output increases. However, beyond an optimal pressure ratio, the net work output starts to decrease. This is because the compressor work input increases significantly with higher pressure ratios, eventually outweighing the increase in turbine work output.

**b) Turbine Inlet Temperature ($T_3$):**
*   **Net Work Output:** Increasing the turbine inlet temperature increases the net work output. This is because it increases the enthalpy drop in the turbine, thus increasing the turbine work output. The compressor work remains unchanged if the pressure ratio and inlet conditions are the same.
*   **Thermal Efficiency:** Increasing the turbine inlet temperature also increases the thermal efficiency. This is because the heat input ($q_{in}$) increases, but the increase in net work output is proportionally larger.

**Important Point to Remember:** There is an optimal pressure ratio for maximum net work output, but thermal efficiency generally increases with pressure ratio. Turbine inlet temperature is limited by material properties of turbine blades.

**Reference:**
*   **Ganesan (2017), Chapter 3:** Discusses the influence of cycle parameters like pressure ratio and turbine inlet temperature on the performance of gas turbine cycles.
*   **Cohen, Rogers, & Saravanamuttoo (2019), Chapter 2:** Provides a thorough theoretical background on the Brayton cycle and its performance characteristics.

---

### 4. Real Gas Turbine Cycles and Deviations from Ideal

In reality, gas turbine cycles deviate from the ideal Brayton cycle due to various irreversibilities and practical limitations.

**Key Deviations:**

1.  **Isentropic Efficiency of Compressor and Turbine:**
    *   **Compressor:** Real compression is not isentropic; it involves friction and heat transfer to the surroundings, leading to a higher outlet temperature and requiring more work input. This is characterized by **isentropic efficiency of the compressor ($\eta_c$)**.
        *   $\eta_c = \frac{\text{Ideal work input}}{\text{Actual work input}} = \frac{h_{2s} - h_1}{h_2 - h_1} = \frac{c_p (T_{2s} - T_1)}{c_p (T_2 - T_1)} = \frac{T_{2s} - T_1}{T_2 - T_1}$
    *   **Turbine:** Real expansion is not isentropic; it involves friction and expansion losses, resulting in less work output than ideal. This is characterized by **isentropic efficiency of the turbine ($\eta_t$)**.
        *   $\eta_t = \frac{\text{Actual work output}}{\text{Ideal work output}} = \frac{h_3 - h_4}{h_3 - h_{4s}} = \frac{c_p (T_3 - T_4)}{c_p (T_3 - T_{4s})} = \frac{T_3 - T_4}{T_3 - T_{4s}}$
        *   Note: $T_{4s}$ is the temperature at turbine outlet if the expansion was isentropic from $T_3$ to $P_4$.

2.  **Pressure Drop in Combustion Chamber and Exhaust:**
    *   Combustion chamber: Fuel is added, and heat is transferred. There is always a pressure drop due to friction and flow losses.
    *   Exhaust: Similarly, there is a pressure drop in the exhaust system.
    *   In the ideal cycle, $P_2 = P_3$ and $P_1 = P_4$. In a real cycle, $P_3 < P_2$ and $P_1 > P_4$.

3.  **Variable Specific Heats:**
    *   At high temperatures encountered in gas turbines, the specific heats of gases are not constant and vary with temperature. This affects the calculations of work and heat transfer.

**Impact of Irreversibilities:**

*   **Reduced Net Work Output:** Both compressor and turbine inefficiencies, along with pressure drops, reduce the net work output.
*   **Reduced Thermal Efficiency:** The combination of reduced work output and potentially increased heat input (due to higher compressor work) leads to a lower thermal efficiency.

**Reference:**
*   **Yahya (2011), Chapter 3:** Dedicates a significant portion to the analysis of real gas turbine cycles, including the impact of component efficiencies and pressure drops.
*   **Ganesan (2017), Chapter 4:** Explains how component efficiencies affect the overall performance and how to analyze cycles with non-ideal components.
*   **Mathur & Mathur (2010), Chapter 4:** Discusses losses in various components and their effect on cycle efficiency.

---

### 5. Thermodynamic Analysis for Jet Propulsion

While the core thermodynamic principles are similar, the output of a gas turbine for jet propulsion is thrust, not shaft power.

**Key Concept:** **Thrust**
Thrust is the force that propels an aircraft forward. In a jet engine, it is generated by accelerating a mass of air rearward.

**Thermodynamic Aspect:**
The hot, high-pressure gas produced by the turbine expands through a nozzle, converting thermal and pressure energy into kinetic energy. This high-velocity exhaust creates a reaction force (thrust).

**Analysis Simplified:**
For a jet engine, we analyze the change in momentum of the air. The thermodynamic analysis is crucial for determining the properties of the gas entering the nozzle.

*   **Thrust ($F$)**:
    *   $F = \dot{m} (V_e - V_a) + (P_e - P_a) A_e$
        *   $\dot{m}$: mass flow rate of air and fuel.
        *   $V_e$: exhaust velocity.
        *   $V_a$: aircraft velocity (airspeed).
        *   $P_e$: exhaust pressure at the nozzle exit.
        *   $P_a$: ambient pressure.
        *   $A_e$: nozzle exit area.

**Reference:**
*   **Mathur & Mathur (2010), Chapter 10:** Introduces the thermodynamic principles of jet propulsion, focusing on thrust generation and basic cycle analysis of jet engines.
*   **Rolls Royce (2015), Chapter 2 & 3:** Provides an in-depth understanding of the fundamental principles of jet engines, including how the thermodynamic cycle translates into thrust.

---

### 6. Specific Work and Other Performance Indicators

**Specific Work:**
This refers to the net work output per unit mass of the working fluid. It's a key parameter for comparing the output of different gas turbine cycles for a given mass of air.

*   $w_{net} = w_t - w_c$

**Work Ratio:**
The ratio of net work output to the turbine work output. It indicates how much of the total energy extracted by the turbine is available as useful work after powering the compressor.

*   Work Ratio = $\frac{w_{net}}{w_t} = \frac{w_t - w_c}{w_t} = 1 - \frac{w_c}{w_t}$
*   For the ideal Brayton cycle: Work Ratio = $1 - \frac{c_p(T_2 - T_1)}{c_p(T_3 - T_4)} = 1 - \frac{T_2 - T_1}{T_3 - T_4}$

**Specific Fuel Consumption (SFC):**
This is the rate of fuel consumption per unit of power output. Lower SFC indicates better fuel efficiency.

*   SFC = $\frac{\dot{m}_f}{\dot{W}_{net}}$
    *   $\dot{m}_f$: fuel mass flow rate.
    *   $\dot{W}_{net}$: net power output.
*   For a gas turbine power plant, it is often expressed in kg/kWh or lb/hp-hr.

**Important Point to Remember:** Specific work and work ratio are crucial for understanding the internal energy conversion within the gas turbine, while SFC is a measure of overall fuel economy.

---

### 7. Practice Questions and Exercises

**Question 1:**
Air enters an ideal gas turbine compressor at 1 bar and 17°C. The pressure ratio is 10:1. The maximum cycle temperature is 900°C. Assuming air as a perfect gas with constant specific heats ($c_p = 1.005$ kJ/kg·K, $\gamma = 1.4$), calculate:
(a) The temperature at the compressor outlet.
(b) The temperature at the turbine outlet.
(c) The net work output per kg of air.
(d) The thermal efficiency of the cycle.

**Answer 1:**
Given: $P_1 = 1 \, \text{bar}$, $T_1 = 17^\circ\text{C} = 290.15 \, \text{K}$, $r_p = 10$. $T_3 = 900^\circ\text{C} = 1173.15 \, \text{K}$.

(a) $\frac{T_2}{T_1} = r_p^{\frac{\gamma-1}{\gamma}} = 10^{\frac{1.4-1}{1.4}} = 10^{0.2857} \approx 1.931$
$T_2 = 290.15 \, \text{K} \times 1.931 \approx 560.18 \, \text{K}$

(b) $\frac{T_3}{T_4} = r_p^{\frac{\gamma-1}{\gamma}} \approx 1.931$
$T_4 = \frac{1173.15 \, \text{K}}{1.931} \approx 607.53 \, \text{K}$

(c) $w_c = c_p (T_2 - T_1) = 1.005 \times (560.18 - 290.15) = 1.005 \times 270.03 \approx 271.38 \, \text{kJ/kg}$
$w_t = c_p (T_3 - T_4) = 1.005 \times (1173.15 - 607.53) = 1.005 \times 565.62 \approx 568.45 \, \text{kJ/kg}$
$w_{net} = w_t - w_c = 568.45 - 271.38 = 297.07 \, \text{kJ/kg}$

(d) $\eta_{th} = 1 - \frac{1}{r_p^{\frac{\gamma-1}{\gamma}}} = 1 - \frac{1}{1.931} \approx 1 - 0.5178 \approx 0.4822$ or 48.22%

**Question 2:**
Explain how the isentropic efficiency of the compressor and turbine affects the net work output and thermal efficiency of a real gas turbine cycle compared to an ideal cycle.

**Answer 2:**
*   **Compressor Efficiency ($\eta_c < 1$):** For a given pressure ratio, a less efficient compressor requires more work input ($w_c$ is higher) to achieve the desired pressure rise, and the outlet temperature ($T_2$) is higher than ideal. This reduces the net work output ($w_{net} = w_t - w_c$).
*   **Turbine Efficiency ($\eta_t < 1$):** For a given expansion ratio, a less efficient turbine produces less work output ($w_t$ is lower) than ideal. This also reduces the net work output.
*   **Net Work Output:** Consequently, the net work output for a real cycle is always lower than that of an ideal cycle with the same pressure ratio and maximum temperature.
*   **Thermal Efficiency:** Both compressor and turbine inefficiencies reduce the thermal efficiency. The higher compressor work input and lower turbine work output both contribute to a lower net work output for a given heat input.

**Question 3:**
What is the relationship between pressure ratio and thermal efficiency for an ideal Brayton cycle?

**Answer 3:**
For an ideal Brayton cycle with constant specific heats, the thermal efficiency is given by:
$\eta_{th} = 1 - \frac{1}{r_p^{\frac{\gamma-1}{\gamma}}}$
This equation shows that the thermal efficiency increases as the pressure ratio ($r_p$) increases.

---

### Important Points to Remember

*   The **Brayton Cycle** is the foundational thermodynamic cycle for gas turbines.
*   **Isentropic compression** and **isentropic expansion** are ideal processes.
*   The **pressure ratio** ($r_p$) is a critical parameter influencing both net work and thermal efficiency.
*   Increasing **turbine inlet temperature** ($T_3$) generally improves net work output and thermal efficiency.
*   **Real cycles** deviate from ideal cycles due to component inefficiencies (compressor and turbine isentropic efficiencies) and pressure drops.
*   These irreversibilities lead to **reduced net work output** and **lower thermal efficiency**.
*   For jet propulsion, the thermodynamic cycle's output is converted into **thrust** by accelerating a mass of fluid through a nozzle.

---

### Alignment with Course Outcomes

*   **CO1 (Knowledge Level: K3):** This topic directly addresses applying thermodynamic principles to understand gas turbine performance and efficiency by introducing the Brayton cycle and its analysis.
*   **CO3 (Knowledge Level: K4):** The analysis of individual components (compressor, combustion chamber, turbine) in terms of their thermodynamic processes and the impact of inefficiencies aligns with analyzing gas turbine system performance.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
