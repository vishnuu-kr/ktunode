---
title: "simple cycle"
subject: "GAS TURBINE AND JET PROPULSION"
module: "Module 1: Gas Turbines – Introduction"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1751d0cf4804463c95"
status: "completed"
scrapedAt: "2026-05-20T18:13:41.433Z"
---
# GAS TURBINE AND JET PROPULSION

## Module 1: Gas Turbines – Introduction

### Topic: Simple Cycle

---

### 1. Introduction to Gas Turbines

**1.1 Definition and Basic Principle**

*   A gas turbine is a type of internal combustion engine that uses a rotating gas as the working fluid. It converts chemical energy from fuel into mechanical energy (shaft power) or kinetic energy (thrust).
*   **Basic Principle:** The gas turbine operates on a continuous flow cycle, typically the **Brayton cycle**. It involves three main stages:
    1.  **Compression:** Air is compressed.
    2.  **Combustion:** Fuel is added and burned, increasing the temperature and volume of the air.
    3.  **Expansion:** The hot, high-pressure gas expands through a turbine, producing work.

**1.2 Components of a Simple Gas Turbine Cycle**

A basic gas turbine consists of the following main components:

*   **Compressor:** Increases the pressure of the incoming air.
    *   *Types:* Axial flow, centrifugal flow.
*   **Combustor (Combustion Chamber):** Where fuel is injected and mixed with the compressed air and ignited.
    *   *Function:* To add heat to the working fluid at approximately constant pressure.
*   **Turbine:** Extracts energy from the high-temperature, high-pressure gas stream produced in the combustor.
    *   *Function:* To drive the compressor and produce output shaft power or thrust.
*   **Exhaust:** The hot gases are expelled from the system.

**1.3 Working Fluid**

*   The working fluid is air and the products of combustion (hot gases).
*   In a simple cycle, the working fluid is not cooled and reused. It is expelled after passing through the turbine.

**1.4 Applications of Gas Turbines**

*   **Power Generation:** Used in thermal power plants for electricity generation (often in combined cycles for higher efficiency).
*   **Aircraft Propulsion:** Jet engines and turboprop engines.
*   **Industrial Drives:** Pumping oil and gas, driving compressors.
*   **Marine Propulsion:** Powering ships.

---

### 2. The Ideal Brayton Cycle (Simple Cycle)

The ideal gas turbine cycle is known as the Brayton cycle. It is a thermodynamic cycle that describes the workings of a constant-pressure heat engine.

**2.1 Processes of the Ideal Brayton Cycle**

The ideal Brayton cycle consists of four reversible processes:

*   **Process 1-2: Isentropic Compression**
    *   Air is compressed reversibly and adiabatically (no heat transfer) from an initial pressure $P_1$ and temperature $T_1$ to a final pressure $P_2$ and temperature $T_2$.
    *   This process occurs in the compressor.
    *   The pressure ratio ($r_p$) is defined as $r_p = P_2 / P_1$.
    *   For an ideal gas, $T_2 / T_1 = (P_2 / P_1)^{(\gamma-1)/\gamma} = r_p^{(\gamma-1)/\gamma}$, where $\gamma$ is the ratio of specific heats.
    *   *Textbook Reference:* Ganesan, Chapter 4 (Thermodynamic Cycles)

*   **Process 2-3: Constant Pressure Heat Addition**
    *   Heat is added to the compressed air at constant pressure $P_2$ from temperature $T_2$ to $T_3$.
    *   This occurs in the combustor.
    *   $Q_{in} = c_p (T_3 - T_2)$, where $c_p$ is the specific heat at constant pressure.
    *   *Textbook Reference:* Yahya, Chapter 6 (Gas Turbine Cycles)

*   **Process 3-4: Isentropic Expansion**
    *   The hot, high-pressure gas expands reversibly and adiabatically through the turbine from pressure $P_3 (=P_2)$ and temperature $T_3$ to $P_4 (=P_1)$ and $T_4$.
    *   This process produces work.
    *   $T_3 / T_4 = (P_3 / P_4)^{(\gamma-1)/\gamma} = r_p^{(\gamma-1)/\gamma}$.
    *   *Textbook Reference:* Mathur & Mathur, Chapter 2 (Thermodynamic Cycles)

*   **Process 4-1: Constant Pressure Heat Rejection**
    *   Heat is rejected from the gas at constant pressure $P_4$ from temperature $T_4$ back to the initial state $T_1$.
    *   This process occurs in the atmosphere (exhaust).
    *   $Q_{out} = c_p (T_4 - T_1)$.
    *   *Textbook Reference:* Ganesan, Chapter 4

**2.2 Work Done and Efficiency**

*   **Work done by compressor ($W_c$):** $W_c = c_p (T_2 - T_1)$
*   **Work done by turbine ($W_t$):** $W_t = c_p (T_3 - T_4)$
*   **Net work output ($W_{net}$):** $W_{net} = W_t - W_c = c_p [(T_3 - T_4) - (T_2 - T_1)]$
*   **Heat input ($Q_{in}$):** $Q_{in} = c_p (T_3 - T_2)$
*   **Thermal Efficiency ($\eta_{th}$):** The ratio of net work output to heat input.
    *   $\eta_{th} = W_{net} / Q_{in} = (W_t - W_c) / Q_{in}$
    *   $\eta_{th} = 1 - Q_{out} / Q_{in}$
    *   Substituting the ideal process equations:
        *   $\eta_{th} = 1 - (T_4 - T_1) / (T_3 - T_2)$
        *   Since $T_2/T_1 = T_3/T_4 = r_p^{(\gamma-1)/\gamma}$, we can rewrite the efficiency as:
        *   $\eta_{th} = 1 - 1 / r_p^{(\gamma-1)/\gamma}$
    *   This shows that for the ideal Brayton cycle, efficiency increases with increasing pressure ratio.

**2.3 Work Ratio**

*   **Work Ratio (WR):** The ratio of net work output to turbine work output.
    *   $WR = W_{net} / W_t = (W_t - W_c) / W_t = 1 - W_c / W_t$
    *   $WR = 1 - c_p(T_2 - T_1) / c_p(T_3 - T_4) = 1 - (T_2 - T_1) / (T_3 - T_4)$
    *   Work ratio is typically low for gas turbines (around 0.4 to 0.6), meaning a significant portion of the turbine work is consumed by the compressor.
    *   *Importance:* A low work ratio implies a high specific output (work per unit mass of air).

**2.4 Specific Output**

*   **Specific Output:** Net work output per unit mass of air.
    *   Specific Output = $W_{net} / \dot{m}_{air} = w_{net}$
    *   $w_{net} = c_p [(T_3 - T_4) - (T_2 - T_1)]$

**2.5 T-s Diagram of the Ideal Brayton Cycle**

*   The T-s diagram shows the temperature-entropy changes during the cycle.
*   **1-2:** Isentropic compression (entropy constant, temperature increases).
*   **2-3:** Constant pressure heat addition (temperature and entropy increase).
*   **3-4:** Isentropic expansion (entropy constant, temperature decreases).
*   **4-1:** Constant pressure heat rejection (temperature and entropy decrease).
*   The area under the heat addition curve (2-3) represents the heat input.
*   The area under the turbine expansion curve (3-4) represents the turbine work.
*   The area between the compressor work (1-2) and turbine work (3-4) represents the net work output.

**(Image Placeholder: T-s diagram for the ideal Brayton cycle)**

---

### 3. The Actual Gas Turbine Cycle (Simple Cycle)

Real gas turbines deviate from the ideal Brayton cycle due to irreversibilities and practical limitations.

**3.1 Deviations from Ideal Processes**

*   **Inefficiency of Compressor (Process 1-2'):**
    *   The actual compression process is not isentropic. It involves friction and turbulence, leading to a higher outlet temperature ($T_{2'}$) than the ideal case ($T_2$) for the same pressure ratio.
    *   This is represented by **isentropic efficiency of the compressor ($\eta_c$)**.
    *   $\eta_c = (T_{2s} - T_1) / (T_{2'} - T_1)$, where $T_{2s}$ is the ideal isentropic outlet temperature.
    *   Higher $\eta_c$ means less work required by the compressor.
    *   *Textbook Reference:* Yahya, Chapter 6

*   **Pressure Drop in Combustor (Process 2'-3'):**
    *   In reality, there is a small pressure drop in the combustion chamber due to friction and flow losses. So, $P_3 < P_2$.
    *   The heat addition is still approximately at constant pressure, but the pressure is lower at the turbine inlet than at the compressor outlet.
    *   *Textbook Reference:* Ganesan, Chapter 4

*   **Inefficiency of Turbine (Process 3'-4'):**
    *   The actual expansion process in the turbine is not isentropic. It involves friction and aerodynamic losses, resulting in a lower outlet temperature ($T_{4'}$) than the ideal case ($T_4$) for the same pressure ratio.
    *   This is represented by **isentropic efficiency of the turbine ($\eta_t$)**.
    *   $\eta_t = (T_{3'} - T_{4'}) / (T_{3'} - T_{4s})$, where $T_{4s}$ is the ideal isentropic outlet temperature.
    *   Higher $\eta_t$ means more work produced by the turbine.
    *   *Textbook Reference:* Mathur & Mathur, Chapter 2

*   **Heat Rejection (Process 4'-1'):**
    *   The exhaust gases are expelled at $P_{4'} (=P_1)$ and $T_{4'}$. The process returns to the initial state $T_1$, but with residual heat in the exhaust.

**3.2 Actual Cycle T-s Diagram**

*   The actual cycle will lie below the ideal cycle on a T-s diagram.
*   1-2': Actual compression (higher temperature than ideal).
*   2'-3': Constant pressure heat addition (with a slight pressure drop, so $P_3 < P_2$).
*   3'-4': Actual expansion (lower temperature than ideal for the same pressure ratio).
*   4'-1': Heat rejection.

**(Image Placeholder: T-s diagram for the actual gas turbine cycle)**

**3.3 Performance of the Actual Cycle**

*   **Actual Work of Compressor ($W_{c,actual}$):** $W_{c,actual} = c_p (T_{2'} - T_1)$
*   **Actual Work of Turbine ($W_{t,actual}$):** $W_{t,actual} = c_p (T_{3'} - T_{4'})$
*   **Actual Net Work Output ($W_{net,actual}$):** $W_{net,actual} = W_{t,actual} - W_{c,actual}$
*   **Actual Heat Input ($Q_{in,actual}$):** $Q_{in,actual} = c_p (T_{3'} - T_{2'})$ (assuming no pressure loss for simplicity in this calculation)
*   **Actual Thermal Efficiency ($\eta_{th,actual}$):** $\eta_{th,actual} = W_{net,actual} / Q_{in,actual}$

**3.4 Factors Affecting Actual Cycle Performance**

*   **Compressor Efficiency ($\eta_c$)**
*   **Turbine Efficiency ($\eta_t$)**
*   **Combustor Pressure Drop**
*   **Ambient Conditions (Temperature and Pressure)**
*   **Fuel-Air Ratio**

---

### 4. Performance Parameters and Analysis

**4.1 Key Performance Parameters**

*   **Thermal Efficiency ($\eta_{th}$):** As discussed earlier.
*   **Specific Output ($w_{net}$):** Net work per unit mass of air.
*   **Power Output:** Net work output multiplied by mass flow rate of air.
*   **Fuel-Air Ratio (f):** The ratio of the mass of fuel to the mass of air.
    *   $f = \dot{m}_{fuel} / \dot{m}_{air}$
*   **Calorific Value of Fuel (CV):** The amount of heat released per unit mass of fuel.
*   **Heat Rate:** The amount of heat input required to produce a unit of power output.
    *   Heat Rate = $Q_{in} / W_{net} = 1 / \eta_{th}$ (in units of kJ/kJ or MJ/kWh)

**4.2 Effect of Pressure Ratio on Performance**

*   **Ideal Cycle:** Efficiency increases with pressure ratio ($r_p$).
*   **Actual Cycle:**
    *   As $r_p$ increases, compressor work increases significantly.
    *   Turbine work also increases, but not as rapidly.
    *   Initial increase in efficiency with $r_p$ due to higher turbine work and higher temperature difference between turbine inlet and compressor outlet.
    *   However, beyond an optimal $r_p$, the increase in compressor work (due to higher $T_2$ and compressor inefficiency) and potential limitations in turbine inlet temperature lead to a decrease in overall efficiency.
    *   There exists an optimal pressure ratio for maximum thermal efficiency for a given turbine inlet temperature.

**(Image Placeholder: Graph of Ideal and Actual Cycle Efficiency vs. Pressure Ratio)**
*Textbook Reference:* Cohen, H., Rogers, G.F.C., & Saravanamuttoo, H.I.H. (2019). *Gas Turbine Theory*. Pearson Education. (Chapter on Brayton Cycle Analysis)

**4.3 Effect of Turbine Inlet Temperature ($T_3$) on Performance**

*   Increasing the turbine inlet temperature ($T_3$) leads to:
    *   Increased turbine work output.
    *   Increased net work output.
    *   Increased thermal efficiency.
*   **Limitation:** The turbine inlet temperature is limited by the material properties of the turbine blades, which must withstand very high temperatures. Advanced cooling techniques are employed to achieve higher turbine inlet temperatures.
*   *Textbook Reference:* Ganesan, Chapter 4

**4.4 Effect of Component Efficiencies on Performance**

*   Lower compressor efficiency ($\eta_c$) reduces net work output and thermal efficiency.
*   Lower turbine efficiency ($\eta_t$) reduces net work output and thermal efficiency.

---

### 5. Numerical Examples and Practice Questions

**Example 1:**

An ideal gas turbine operates on the Brayton cycle with a pressure ratio of 5. The air enters the compressor at 1 bar and 15°C. The maximum temperature in the cycle is 800°C. Assuming air behaves as an ideal gas with $c_p = 1.005$ kJ/kg·K and $\gamma = 1.4$, determine:
a) The temperatures at the exit of the compressor and turbine.
b) The specific work output of the compressor and turbine.
c) The net specific work output.
d) The thermal efficiency of the cycle.

**Solution:**

Given:
$P_1 = 1$ bar $= 0.1$ MPa
$T_1 = 15^\circ\text{C} = 288.15$ K
$r_p = P_2/P_1 = 5$
$T_3 = 800^\circ\text{C} = 1073.15$ K
$c_p = 1.005$ kJ/kg·K
$\gamma = 1.4$

a) **Temperatures:**
$T_2 = T_1 \times r_p^{(\gamma-1)/\gamma} = 288.15 \times 5^{(1.4-1)/1.4} = 288.15 \times 5^{0.2857} \approx 288.15 \times 1.5437 \approx 445.2$ K
$T_4 = T_3 / r_p^{(\gamma-1)/\gamma} = 1073.15 / 5^{0.2857} \approx 1073.15 / 1.5437 \approx 695.2$ K

b) **Specific work:**
Compressor work ($w_c$) = $c_p (T_2 - T_1) = 1.005 \times (445.2 - 288.15) \approx 157.8$ kJ/kg
Turbine work ($w_t$) = $c_p (T_3 - T_4) = 1.005 \times (1073.15 - 695.2) \approx 379.9$ kJ/kg

c) **Net specific work output ($w_{net}$):**
$w_{net} = w_t - w_c = 379.9 - 157.8 \approx 222.1$ kJ/kg

d) **Thermal efficiency ($\eta_{th}$):**
$\eta_{th} = 1 - 1 / r_p^{(\gamma-1)/\gamma} = 1 - 1 / 5^{0.2857} \approx 1 - 1 / 1.5437 \approx 1 - 0.6480 \approx 0.3520$ or 35.2%

---

**Practice Question 1:**

An open cycle gas turbine has a pressure ratio of 6. The air enters the compressor at 1 bar and 27°C. The turbine inlet temperature is 900°C. The compressor has an isentropic efficiency of 85% and the turbine has an isentropic efficiency of 88%. Assume $c_p = 1.005$ kJ/kg·K and $\gamma = 1.4$. Calculate:
a) The actual temperature at the compressor outlet.
b) The actual temperature at the turbine outlet.
c) The actual specific work output of the compressor and turbine.
d) The net specific work output.
e) The thermal efficiency of the actual cycle.

**Answer to Practice Question 1:**

Given:
$P_1 = 1$ bar $= 0.1$ MPa
$T_1 = 27^\circ\text{C} = 300.15$ K
$r_p = 6$
$T_3 = 900^\circ\text{C} = 1173.15$ K
$\eta_c = 0.85$
$\eta_t = 0.88$
$c_p = 1.005$ kJ/kg·K
$\gamma = 1.4$

a) **Actual temperature at compressor outlet ($T_{2'}$):**
Ideal $T_{2s} = T_1 \times r_p^{(\gamma-1)/\gamma} = 300.15 \times 6^{(1.4-1)/1.4} = 300.15 \times 6^{0.2857} \approx 300.15 \times 1.744 \approx 523.3$ K
$\eta_c = (T_{2s} - T_1) / (T_{2'} - T_1)$
$0.85 = (523.3 - 300.15) / (T_{2'} - 300.15)$
$0.85 = 223.15 / (T_{2'} - 300.15)$
$T_{2'} - 300.15 = 223.15 / 0.85 \approx 262.53$
$T_{2'} \approx 300.15 + 262.53 \approx 562.7$ K

b) **Actual temperature at turbine outlet ($T_{4'}$):**
Ideal $T_{4s} = T_3 / r_p^{(\gamma-1)/\gamma} = 1173.15 / 6^{0.2857} \approx 1173.15 / 1.744 \approx 672.7$ K
$\eta_t = (T_3 - T_{4'}) / (T_3 - T_{4s})$
$0.88 = (1173.15 - T_{4'}) / (1173.15 - 672.7)$
$0.88 = (1173.15 - T_{4'}) / 500.45$
$1173.15 - T_{4'} = 0.88 \times 500.45 \approx 440.4$
$T_{4'} \approx 1173.15 - 440.4 \approx 732.75$ K

c) **Actual specific work output:**
Compressor work ($w_{c,actual}$) = $c_p (T_{2'} - T_1) = 1.005 \times (562.7 - 300.15) \approx 1.005 \times 262.55 \approx 263.9$ kJ/kg
Turbine work ($w_{t,actual}$) = $c_p (T_3 - T_{4'}) = 1.005 \times (1173.15 - 732.75) \approx 1.005 \times 440.4 \approx 442.6$ kJ/kg

d) **Net specific work output ($w_{net,actual}$):**
$w_{net,actual} = w_{t,actual} - w_{c,actual} = 442.6 - 263.9 \approx 178.7$ kJ/kg

e) **Thermal efficiency of the actual cycle ($\eta_{th,actual}$):**
Actual heat input ($q_{in,actual}$) = $c_p (T_3 - T_{2'}) = 1.005 \times (1173.15 - 562.7) \approx 1.005 \times 610.45 \approx 613.5$ kJ/kg
$\eta_{th,actual} = w_{net,actual} / q_{in,actual} = 178.7 / 613.5 \approx 0.2913$ or 29.13%

---

### 6. Important Points to Remember

*   The simple gas turbine cycle operates on the **Brayton cycle**.
*   The ideal Brayton cycle consists of **isentropic compression**, **constant pressure heat addition**, **isentropic expansion**, and **constant pressure heat rejection**.
*   Efficiency of the **ideal Brayton cycle increases with pressure ratio**.
*   **Real gas turbines have irreversibilities**, leading to lower efficiencies. Key irreversibilities include **compressor and turbine inefficiencies** and **pressure drop in the combustor**.
*   **Compressor efficiency ($\eta_c$)** and **turbine efficiency ($\eta_t$)** significantly impact the overall performance.
*   The **turbine inlet temperature ($T_3$)** is a critical parameter for performance; higher $T_3$ generally leads to higher efficiency and specific output, but is limited by material capabilities.
*   Gas turbines have a **low work ratio**, meaning a large fraction of the turbine work is used to drive the compressor.
*   Understanding the T-s diagram is crucial for visualizing and analyzing the cycle processes.
*   **CO1:** This topic directly addresses applying thermodynamic principles (Brayton cycle, efficiencies) to understand performance. (K3)
*   **CO3:** Analyzing the performance by understanding component characteristics (compressor/turbine efficiencies) is central. (K4)

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |


### 7. Further Reading and References

*   **Gas Turbines** by V Ganesan: Chapters on Thermodynamic Cycles, Components of Gas Turbines.
*   **Turbines, Compressors and Fans** by S M Yahya: Chapters on Gas Turbine Cycles, Performance of Gas Turbines.
*   **Gas Turbine & Jet Rocket Propulsion** by Mathur M L: Chapters covering thermodynamic analysis of gas turbine cycles.
*   **Gas Turbine Theory** by H. Cohen: Chapters providing detailed analysis of the Brayton cycle and its variations.

---