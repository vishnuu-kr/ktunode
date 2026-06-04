---
title: "Gas turbine cycles – open cycle"
subject: "GAS TURBINE AND JET PROPULSION"
module: "Module 1: Gas Turbines – Introduction"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1751d0cf4804463c92"
status: "completed"
scrapedAt: "2026-05-20T18:13:39.300Z"
---
# GAS TURBINE AND JET PROPULSION - Module 1: Gas Turbines – Introduction

## Topic: Gas Turbine Cycles – Open Cycle

---

### 1. Introduction to Gas Turbines and Open Cycles

**Definition:** A gas turbine is a type of internal combustion engine that uses a continuous combustion process to produce a high-velocity stream of hot gas. This gas stream then drives a turbine, which in turn powers a generator, propeller, or other machinery.

**Open Cycle vs. Closed Cycle:**

*   **Open Cycle:** In an open cycle gas turbine, the working fluid (air) is drawn from the atmosphere, compressed, heated by combustion with fuel, expanded through a turbine, and then exhausted back into the atmosphere. The working fluid is continuously replaced.
    *   *Referenced in:* Ganesan, "Gas Turbines," Chapter 1.
*   **Closed Cycle:** In a closed cycle, the working fluid is continuously recirculated and reheated in a closed loop. This allows for different working fluids (like helium or CO2) and cleaner operation, but is generally more complex and less common for simple power generation.

**Why Open Cycle is Prevalent:** Open cycles are simpler in construction, have lower initial costs, and are widely used for power generation and jet propulsion due to the readily available and inexpensive working fluid (air).

---

### 2. The Ideal Brayton Cycle (The Foundation of Open Cycle Gas Turbines)

The ideal open cycle gas turbine operates on the **Brayton Cycle**. This is a thermodynamic cycle that describes the operation of a gas turbine engine. It's analogous to the Otto cycle for reciprocating engines but for continuous flow.

**Key Processes of the Ideal Brayton Cycle (Constant Pressure Specific Heat Model):**

1.  **Isentropic Compression (1-2):** Air is drawn into the compressor and compressed isentropically (adiabatically and reversibly) from an initial state (pressure $P_1$, temperature $T_1$) to a higher pressure ($P_2$) and temperature ($T_2$).
    *   *Thermodynamics Principle:* Adiabatic process ($Q=0$) and reversible process (constant entropy, $s_1 = s_2$).
    *   *Related to CO1:* Applying principles of thermodynamics to understand performance.
    *   *Formula:* $T_2/T_1 = (P_2/P_1)^{(\gamma-1)/\gamma}$ where $\gamma$ is the ratio of specific heats.
2.  **Constant Pressure Heat Addition (2-3):** Heat is added to the compressed air at constant pressure ($P_2 = P_3$) in the combustion chamber, increasing its temperature from $T_2$ to $T_3$.
    *   *Thermodynamics Principle:* Isobaric process ($P=constant$).
    *   *Formula:* $Q_{in} = C_p (T_3 - T_2)$ where $C_p$ is the specific heat at constant pressure.
3.  **Isentropic Expansion (3-4):** The hot, high-pressure gas expands isentropically through the turbine, producing work and decreasing in pressure ($P_3$) and temperature ($T_4$).
    *   *Thermodynamics Principle:* Adiabatic and reversible process ($s_3 = s_4$).
    *   *Formula:* $T_3/T_4 = (P_3/P_4)^{(\gamma-1)/\gamma}$
4.  **Constant Pressure Heat Rejection (4-1):** Heat is rejected from the exhaust gases to the atmosphere at constant pressure ($P_4 = P_1$), returning the working fluid to its initial state.
    *   *Thermodynamics Principle:* Isobaric process ($P=constant$).
    *   *Formula:* $Q_{out} = C_p (T_4 - T_1)$

**Ideal Brayton Cycle Diagram (Pressure-Volume and Temperature-Entropy):**

*   **T-s Diagram:** A trapezoid shape. Lines 1-2 and 3-4 are isentropic, while lines 2-3 and 4-1 are isobaric.
*   **P-v Diagram:** Similar to a steam Rankine cycle but with gas as the working fluid. Lines 1-2 and 3-4 are isentropic curves, while lines 2-3 and 4-1 are constant pressure.

**Net Work Output:**
$W_{net} = W_{turbine} - W_{compressor}$
$W_{net} = C_p (T_3 - T_4) - C_p (T_2 - T_1)$

**Thermal Efficiency of the Ideal Brayton Cycle:**
$\eta_{th, ideal} = \frac{W_{net}}{Q_{in}} = \frac{C_p (T_3 - T_4) - C_p (T_2 - T_1)}{C_p (T_3 - T_2)}$
$\eta_{th, ideal} = 1 - \frac{T_1}{T_2} = 1 - \frac{T_4}{T_3}$
Substituting the isentropic relations:
$\eta_{th, ideal} = 1 - \frac{1}{(P_2/P_1)^{(\gamma-1)/\gamma}} = 1 - \frac{1}{r_p^{(\gamma-1)/\gamma}}$
where $r_p = P_2/P_1$ is the pressure ratio.

**Key Points to Remember about Ideal Brayton Cycle:**
*   Maximum efficiency is achieved at higher pressure ratios.
*   Work output increases with turbine inlet temperature ($T_3$).

---

### 3. Components of an Open Cycle Gas Turbine

A practical open cycle gas turbine consists of three main components:

1.  **Compressor:**
    *   **Function:** To draw in atmospheric air and compress it to a higher pressure.
    *   **Types:** Axial flow compressors (most common for large turbines) and centrifugal compressors.
    *   **Ideal vs. Real:** In reality, compression is not perfectly isentropic. It involves losses due to friction and turbulence, leading to an increase in entropy and a higher work input requirement (indicated by compressor inefficiency).
    *   *Referenced in:* Yahya, "Turbines, Compressors and Fans," Chapter 4 (Axial Flow Compressors).
    *   *Related to CO2:* Analyzing performance characteristics of axial flow compressors.
    *   *Related to CO3:* Understanding characteristics of various components.
2.  **Combustor (Combustion Chamber):**
    *   **Function:** To mix the high-pressure air from the compressor with fuel (e.g., natural gas, kerosene) and ignite the mixture, releasing heat at approximately constant pressure.
    *   **Ideal vs. Real:** The process is ideally isobaric heat addition. In reality, there are some pressure losses due to friction and flow acceleration, and the combustion process itself is irreversible.
    *   *Referenced in:* Ganesan, "Gas Turbines," Chapter 4.
    *   *Related to CO3:* Understanding characteristics of various components.
3.  **Turbine:**
    *   **Function:** To extract energy from the high-temperature, high-pressure gas stream exiting the combustor, producing mechanical work. This work is used to drive the compressor and an external load (e.g., generator, propeller).
    *   **Types:** Axial flow turbines and radial flow turbines.
    *   **Ideal vs. Real:** Expansion is ideally isentropic. Real turbines have inefficiencies due to friction, leakage, and incomplete expansion, resulting in less work output than ideal (indicated by turbine inefficiency).
    *   *Referenced in:* Yahya, "Turbines, Compressors and Fans," Chapter 7 (Reaction Turbines).
    *   *Related to CO2:* Analyzing performance characteristics of reaction turbines.
    *   *Related to CO3:* Understanding characteristics of various components.

---

### 4. Real Open Cycle Gas Turbine (Actual Brayton Cycle)

The actual cycle deviates from the ideal Brayton cycle due to irreversibilities and inefficiencies in the components.

**Deviations from Ideal:**

*   **Compressor Inefficiency ($\eta_C$):** The actual temperature rise in the compressor is higher than in the ideal case for the same pressure ratio.
    *   $T_{2a} = T_1 + \frac{T_{2s} - T_1}{\eta_C}$
    *   Actual compressor work input: $W_{C,actual} = C_p (T_{2a} - T_1)$
*   **Combustor Pressure Drop ($\Delta P_{comb}$):** There is a small but significant pressure loss in the combustor, meaning $P_3 < P_2$.
*   **Turbine Inefficiency ($\eta_T$):** The actual temperature drop in the turbine is lower than in the ideal case for the same pressure drop.
    *   $T_{3} = T_{4a} + \eta_T (T_3 - T_{4s})$
    *   Actual turbine work output: $W_{T,actual} = \eta_T C_p (T_3 - T_{4a})$
*   **Heat Loss:** While generally small in open cycles, some heat loss can occur from the casing and piping.

**Actual Brayton Cycle Diagram (T-s):**

*   The compressor process (1-2a) will have a higher final temperature and thus a curved line (due to increasing entropy).
*   The turbine process (3-4a) will have a higher final temperature than the ideal and also be a curved line.
*   The pressure drop in the combustor will result in $P_3 < P_2$, and thus the heat addition line (2a-3) will not be perfectly isobaric if viewed on a $P-v$ diagram with constant pressure lines.

**Actual Thermal Efficiency:**
$\eta_{th, actual} = \frac{W_{net, actual}}{Q_{in, actual}} = \frac{W_{T,actual} - W_{C,actual}}{C_p (T_3 - T_{2a})}$

**Impact of Inefficiencies:**
*   Reduced net work output.
*   Reduced thermal efficiency.
*   Higher fuel consumption.

**Key Points to Remember about Real Brayton Cycle:**
*   In real engines, compressor and turbine efficiencies are crucial for performance.
*   Pressure drops in the combustor also impact efficiency.

---

### 5. Key Parameters Affecting Open Cycle Performance

Several parameters significantly influence the performance of open cycle gas turbines:

1.  **Pressure Ratio ($r_p$):** The ratio of the compressor discharge pressure to the compressor inlet pressure ($P_2/P_1$).
    *   **Effect:** Increasing the pressure ratio (up to a certain limit) increases the thermal efficiency of the ideal cycle. For real cycles, there's an optimal pressure ratio beyond which efficiency might slightly decrease due to increasing compressor work and losses.
    *   *Referenced in:* Ganesan, "Gas Turbines," Chapter 3.
    *   *Related to CO1:* Applying principles of thermodynamics to understand performance.
2.  **Turbine Inlet Temperature ($T_3$):** The temperature of the gas entering the turbine.
    *   **Effect:** Higher turbine inlet temperatures lead to greater turbine work output and higher thermal efficiency. This is a primary driver for increasing engine power and performance. Material limitations and cooling technologies are key constraints.
    *   *Referenced in:* Mathur & Mathur, "Gas Turbine & Jet Rocket Propulsion," Chapter 3.
    *   *Related to CO1 & CO3:* Understanding performance and component characteristics.
3.  **Component Efficiencies ($\eta_C$, $\eta_T$):** As discussed, compressor and turbine efficiencies directly impact work output and efficiency.
    *   **Effect:** Higher efficiencies lead to better performance.
    *   *Related to CO2 & CO3:* Analyzing performance and understanding component characteristics.
4.  **Ambient Temperature ($T_1$):** The temperature of the air entering the compressor.
    *   **Effect:** Higher ambient temperatures reduce the density of the incoming air, leading to lower mass flow rate for a given engine size. This reduces the power output. Also, efficiency decreases as ambient temperature increases (for a given turbine inlet temperature).
    *   *Referenced in:* Ganesan, "Gas Turbines," Chapter 3.
    *   *Related to CO1:* Applying principles of thermodynamics to understand performance.
5.  **Component Pressure Losses:** Pressure drops in the combustor and exhaust system.
    *   **Effect:** Reduce the effective pressure ratio and net work output, hence reducing efficiency.
    *   *Related to CO3:* Understanding characteristics of various components.

---

### 6. Applications of Open Cycle Gas Turbines

Open cycle gas turbines are versatile and find applications in various sectors:

1.  **Power Generation:**
    *   **Simple Cycle Power Plants:** Gas turbines are used to directly drive generators for electricity production. They are known for quick start-up times, making them suitable for peaking power.
    *   **Combined Cycle Power Plants (CCPP):** The hot exhaust gases from the gas turbine are used to generate steam in a Heat Recovery Steam Generator (HRSG), which then drives a steam turbine. This significantly improves overall plant efficiency.
    *   *Referenced in:* Ganesan, "Gas Turbines," Chapter 1.
2.  **Jet Propulsion:**
    *   **Turbojet, Turbofan, Turboprop Engines:** These are variations of the gas turbine used to generate thrust for aircraft. The principles of the open cycle Brayton cycle are fundamental to their operation.
    *   *Referenced in:* Mathur & Mathur, "Gas Turbine & Jet Rocket Propulsion," Chapter 1.
    *   *Related to CO4:* Understanding principles and characteristics of jet propulsion systems.
3.  **Industrial Applications:**
    *   **Mechanical Drive:** Driving pumps, compressors, and other machinery in industrial plants (e.g., oil and gas, chemical industries).
    *   **Marine Propulsion:** Powering ships and vessels.

---

### 7. Practice Questions and Exercises

**Question 1:**
An ideal gas turbine operates on the Brayton cycle with air entering the compressor at $1 \text{ bar}$ and $27^\circ\text{C}$. The pressure ratio is $8$ and the turbine inlet temperature is $1000^\circ\text{C}$. Assume $C_p = 1.005 \text{ kJ/kgK}$ and $\gamma = 1.4$. Calculate:
a) The thermal efficiency of the cycle.
b) The net work output per kg of air.

**Answer 1:**
Given: $P_1 = 1 \text{ bar}$, $T_1 = 27^\circ\text{C} = 300 \text{ K}$, $r_p = 8$, $T_3 = 1000^\circ\text{C} = 1273 \text{ K}$, $C_p = 1.005 \text{ kJ/kgK}$, $\gamma = 1.4$.

a) Thermal efficiency ($\eta_{th, ideal}$):
$\eta_{th, ideal} = 1 - \frac{1}{r_p^{(\gamma-1)/\gamma}}$
$(\gamma-1)/\gamma = (1.4-1)/1.4 = 0.4/1.4 = 0.2857$
$r_p^{(\gamma-1)/\gamma} = 8^{0.2857} \approx 1.811$
$\eta_{th, ideal} = 1 - \frac{1}{1.811} \approx 1 - 0.5522 \approx 0.4478$ or $44.78\%$

b) Net work output ($W_{net}$):
First, find $T_2$ (ideal compressor outlet temperature):
$T_2/T_1 = (P_2/P_1)^{(\gamma-1)/\gamma} = r_p^{(\gamma-1)/\gamma} = 1.811$
$T_2 = T_1 \times 1.811 = 300 \text{ K} \times 1.811 \approx 543.3 \text{ K}$

Next, find $T_4$ (ideal turbine outlet temperature):
$T_3/T_4 = (P_3/P_4)^{(\gamma-1)/\gamma} = r_p^{(\gamma-1)/\gamma} = 1.811$
$T_4 = T_3 / 1.811 = 1273 \text{ K} / 1.811 \approx 702.9 \text{ K}$

Compressor work input ($W_C$):
$W_C = C_p (T_2 - T_1) = 1.005 \text{ kJ/kgK} \times (543.3 - 300) \text{ K} = 1.005 \times 243.3 \approx 244.5 \text{ kJ/kg}$

Turbine work output ($W_T$):
$W_T = C_p (T_3 - T_4) = 1.005 \text{ kJ/kgK} \times (1273 - 702.9) \text{ K} = 1.005 \times 570.1 \approx 572.9 \text{ kJ/kg}$

Net work output ($W_{net}$):
$W_{net} = W_T - W_C = 572.9 - 244.5 \approx 328.4 \text{ kJ/kg}$

**Question 2:**
Explain the main reasons why the actual thermal efficiency of an open cycle gas turbine is lower than that of the ideal Brayton cycle. Mention at least three specific factors.

**Answer 2:**
The actual thermal efficiency is lower than the ideal Brayton cycle primarily due to irreversibilities and losses in the components:

1.  **Compressor Inefficiency:** Real compressors are not isentropic. Friction and turbulent flow cause a temperature rise in the air that is greater than ideal for the same pressure ratio, requiring more work input.
2.  **Turbine Inefficiency:** Real turbines are not isentropic. Friction and incomplete expansion lead to less work output than theoretically possible for the given pressure and temperature drop.
3.  **Pressure Losses in the Combustor:** The combustion process and flow through the combustor involve friction and acceleration, resulting in a pressure drop ($P_3 < P_2$). This reduces the effective pressure ratio and the enthalpy drop available for work in the turbine.
4.  **(Other possible answers include):**
    *   **Incomplete Combustion:** While efforts are made, combustion may not be perfectly complete, reducing heat input.
    *   **Heat Loss:** Small amounts of heat can be lost from the casing and exhaust system.
    *   **Non-uniform Flow:** Flow entering and leaving components may not be uniform, leading to inefficiencies.

**Question 3:**
Consider a gas turbine operating on an open cycle. If the ambient temperature increases, what is the likely effect on the power output and thermal efficiency, assuming the turbine inlet temperature is kept constant? Justify your answer using thermodynamic principles.

**Answer 3:**
If the ambient temperature ($T_1$) increases, assuming the turbine inlet temperature ($T_3$) and the pressure ratio ($r_p$) are kept constant:

*   **Effect on Power Output:** The power output will **decrease**.
    *   **Justification:** A higher ambient temperature means the air entering the compressor is hotter. According to the ideal gas law, for a given volume flow rate, the mass flow rate of air will decrease (density decreases with temperature). Since the power output is directly proportional to the mass flow rate of the working fluid, a reduction in mass flow rate leads to a reduction in power output. Additionally, the compressor work input will increase slightly for a given pressure ratio if the inlet air is hotter (as $T_2$ will be higher), reducing the net work.
*   **Effect on Thermal Efficiency:** The thermal efficiency will **decrease**.
    *   **Justification:** The ideal thermal efficiency of the Brayton cycle is given by $\eta_{th, ideal} = 1 - \frac{1}{r_p^{(\gamma-1)/\gamma}}$. This expression does not explicitly include $T_1$. However, if we look at the actual work output, $W_{net} = C_p(T_3 - T_{4a}) - C_p(T_{2a} - T_1)$ and $Q_{in} = C_p(T_3 - T_{2a})$.
    *   As $T_1$ increases, $T_{2a}$ (actual compressor outlet temperature) also increases for a given $r_p$ and $\eta_C$.
    *   The increase in $T_{2a}$ leads to a larger compressor work input ($W_{C, actual}$).
    *   While $T_{4a}$ might also change, the overall effect is that the net work output ($W_{net}$) tends to decrease more significantly relative to the heat input ($Q_{in}$) as ambient temperature rises, leading to lower thermal efficiency. The term $T_1/T_2$ in the ideal efficiency formula shows that higher $T_1$ (and thus higher $T_2$ for a fixed ratio) reduces efficiency.

---

### 8. Important Points to Remember

*   **Open cycle gas turbines use atmospheric air as the working fluid, which is continuously drawn in, processed, and exhausted.**
*   **The ideal thermodynamic cycle for an open cycle gas turbine is the Brayton cycle.**
*   **Key components are the compressor, combustor, and turbine.**
*   **Actual performance is always lower than ideal due to component inefficiencies (compressor and turbine) and pressure losses.**
*   **Increasing pressure ratio and turbine inlet temperature are primary ways to increase the efficiency and power output of gas turbines.**
*   **Ambient temperature has a significant negative impact on both power output and efficiency.**
*   **The open cycle principle is fundamental to jet engines and power generation.**

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |


### 9. Further Reading and References

*   **Ganesan, V. (2017). *Gas Turbines*. McGraw Hill Education.** (Chapters on basic cycles, components, and performance).
*   **Yahya, S. M. (2011). *Turbines, Compressors and Fans*. McGraw Hill.** (Detailed information on compressor and turbine design and performance).
*   **Mathur, M. L., & Mathur, A. (2010). *Gas Turbine & Jet Rocket Propulsion*. Standard Publishers Distributors.** (Covers both gas turbine principles and their application in propulsion).
*   **Rolls Royce. (2015). *The Jet Engine*. Wiley.** (Provides practical insights into jet propulsion, which relies on open cycle gas turbines).
*   **Cohen, H., Rogers, G. F. C., & Saravanamuttoo, H. I. H. (2019). *Gas Turbine Theory*. Pearson Education.** (A comprehensive theoretical treatment of gas turbine performance and cycles).

---

This concludes the notes for Module 1, Topic: Gas Turbine Cycles – Open Cycle. The concepts covered are foundational for understanding more advanced gas turbine and jet propulsion systems.