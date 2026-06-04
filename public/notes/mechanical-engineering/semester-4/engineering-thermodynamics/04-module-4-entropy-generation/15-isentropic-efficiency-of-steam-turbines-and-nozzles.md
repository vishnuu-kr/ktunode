---
title: "isentropic efficiency of steam turbines and nozzles"
subject: "ENGINEERING THERMODYNAMICS"
module: "Module 4: Entropy generation"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462f78"
status: "completed"
scrapedAt: "2026-05-20T17:53:56.288Z"
---
# Engineering Thermodynamics - Module 4: Entropy Generation

## Topic: Isentropic Efficiency of Steam Turbines and Nozzles

This module delves into the concept of entropy generation and its implications in thermodynamic processes. Specifically, this topic focuses on understanding and quantifying the efficiency of turbines and nozzles, which are crucial components in many power generation and propulsion systems. We will explore how real-world devices deviate from ideal isentropic processes and how to measure this deviation using isentropic efficiency.

---

### Learning Outcomes

Upon successful completion of this topic, you will be able to:

*   Define isentropic efficiency for turbines and nozzles.
*   Explain the difference between ideal (isentropic) and actual processes in turbines and nozzles.
*   Calculate the isentropic efficiency of a steam turbine using enthalpy changes.
*   Calculate the isentropic efficiency of a steam nozzle using velocity changes.
*   Relate isentropic efficiency to entropy generation within these devices.
*   Apply thermodynamic principles to analyze the performance of steam turbines and nozzles.

---

### Course Outcomes Alignment

This topic directly contributes to the following course outcomes:

*   **CO1: Understand basic concepts of thermodynamics (Knowledge Level: K1, K2)**
    *   Understanding of thermodynamic processes, work, heat, and system properties.
    *   Familiarity with the operation of turbines and nozzles as thermodynamic devices.
*   **CO2: Understand the laws of thermodynamics (Knowledge Level: K1, K2)**
    *   Application of the First Law of Thermodynamics (conservation of energy) to analyze turbines and nozzles.
    *   Understanding the implications of the Second Law of Thermodynamics, particularly concerning irreversibilities and entropy generation.
*   **CO3: Conduct first law analysis of open and closed systems (Knowledge Level: K3)**
    *   Applying the steady-flow energy equation to analyze turbines and nozzles (which are typically steady-flow devices).
*   **CO4: Determine entropy changes associated with different processes (Knowledge Level: K3)**
    *   Calculating entropy changes for actual processes and comparing them to the zero entropy change for ideal isentropic processes.
*   **CO5: Determine the properties of pure substances (Knowledge Level: K2, K3)**
    *   Using steam tables or property diagrams to find enthalpy, entropy, and specific volume of steam at various states, crucial for efficiency calculations.

---

### Key Concepts and Definitions

*   **Turbine:** A rotating machine that extracts mechanical energy from a flowing fluid (like steam). It converts the thermal or pressure energy of the fluid into rotational kinetic energy.
*   **Nozzle:** A duct of varying cross-sectional area designed to accelerate a fluid and convert its internal energy and pressure energy into kinetic energy.
*   **Isentropic Process:** A reversible adiabatic process (no heat transfer and no irreversibility). During an isentropic process, entropy remains constant.
*   **Adiabatic Process:** A process where there is no heat transfer between the system and its surroundings.
*   **Reversible Process:** A process that can be reversed by an infinitesimal change in a property, returning both the system and its surroundings to their initial states without leaving any trace on the surroundings. Real processes are irreversible.
*   **Entropy Generation ($S_{gen}$):** A measure of the irreversibilities within a process. For any real process, $S_{gen} \ge 0$. An isentropic process has $S_{gen} = 0$.
*   **Enthalpy ($h$):** A thermodynamic property defined as $h = u + Pv$, where $u$ is internal energy, $P$ is pressure, and $v$ is specific volume. In flow systems, enthalpy represents the energy carried by the fluid.
*   **Specific Volume ($v$):** The volume occupied by a unit mass of a substance.
*   **Velocity ($V$):** The speed of the fluid flow.
*   **Kinetic Energy:** Energy possessed by a body by virtue of its motion.

---

### 1. Isentropic Efficiency of Steam Turbines

**Concept:**
A steam turbine converts the internal energy and pressure of steam into mechanical work. In an ideal turbine, this expansion process would be reversible and adiabatic (isentropic). However, real turbines experience irreversibilities such as friction and turbulence, leading to less work output than an isentropic process. Isentropic efficiency quantifies this deviation.

**Ideal (Isentropic) Turbine Process:**
*   The expansion of steam from an initial state (1) to a final pressure ($P_2$) occurs reversibly and adiabatically.
*   Entropy remains constant ($s_1 = s_2$).
*   The maximum possible work output is achieved.

**Actual Turbine Process:**
*   The expansion of steam from the same initial state (1) to the same final pressure ($P_2$) is irreversible.
*   Entropy increases ($s_2 > s_1$).
*   Less work output is produced compared to the ideal case due to irreversibilities.

**First Law Analysis (Steady-Flow Energy Equation):**
For a single-inlet, single-outlet adiabatic turbine with negligible changes in kinetic and potential energy:

$W_{actual} = \dot{m}(h_1 - h_2)$

where:
*   $W_{actual}$ is the actual work output by the turbine.
*   $\dot{m}$ is the mass flow rate.
*   $h_1$ is the specific enthalpy of the steam at the inlet.
*   $h_2$ is the specific enthalpy of the steam at the outlet.

For an ideal (isentropic) turbine:

$W_{isentropic} = \dot{m}(h_1 - h_{2s})$

where:
*   $W_{isentropic}$ is the ideal work output.
*   $h_{2s}$ is the specific enthalpy of the steam at the outlet pressure $P_2$, assuming an isentropic expansion from state 1.

**Isentropic Efficiency of a Turbine ($\eta_T$):**
The isentropic efficiency of a turbine is defined as the ratio of the actual work output to the ideal (isentropic) work output:

$$\eta_T = \frac{W_{actual}}{W_{isentropic}} = \frac{\dot{m}(h_1 - h_2)}{\dot{m}(h_1 - h_{2s})} = \frac{h_1 - h_2}{h_1 - h_{2s}}$$

**How to find $h_{2s}$:**
1.  Determine the initial state (state 1) from given properties (e.g., pressure $P_1$, temperature $T_1$, or quality $x_1$).
2.  From the initial state, find the specific entropy $s_1$.
3.  The final state pressure is $P_2$. For an isentropic process, $s_{2s} = s_1$.
4.  Using $P_2$ and $s_{2s}$, find the enthalpy $h_{2s}$ from steam tables or property diagrams.
5.  Similarly, using $P_2$ and the actual exit condition (state 2), find the actual exit enthalpy $h_2$.

**Relationship with Entropy Generation:**
Since irreversibilities lead to entropy generation, the actual exit state (2) will have higher entropy than the isentropic exit state ($s_2 > s_{2s}$). This higher entropy state, at the same pressure, corresponds to a lower enthalpy ($h_2 < h_{2s}$), resulting in lower actual work output.

**Example (Turbine):**
Steam enters a turbine at 3 MPa and 400°C and exits at 0.1 MPa. If the actual exit specific enthalpy is 2450 kJ/kg, determine the isentropic efficiency of the turbine.

*   **State 1:** $P_1 = 3 \text{ MPa}$, $T_1 = 400^\circ\text{C}$.
    From steam tables (Cengel & Boles):
    $h_1 = 3230.9 \text{ kJ/kg}$
    $s_1 = 6.9215 \text{ kJ/kg} \cdot \text{K}$

*   **Isentropic Exit (State 2s):** $P_{2s} = 0.1 \text{ MPa}$ and $s_{2s} = s_1 = 6.9215 \text{ kJ/kg} \cdot \text{K}$.
    At 0.1 MPa:
    $s_{f} = 0.6492 \text{ kJ/kg} \cdot \text{K}$
    $s_{g} = 8.1488 \text{ kJ/kg} \cdot \text{K}$
    Since $s_f < s_{2s} < s_g$, the steam is in the saturated mixture region at state 2s.
    Calculate the quality $x_{2s}$:
    $s_{2s} = s_f + x_{2s}(s_g - s_f)$
    $6.9215 = 0.6492 + x_{2s}(8.1488 - 0.6492)$
    $x_{2s} = \frac{6.9215 - 0.6492}{8.1488 - 0.6492} = \frac{6.2723}{7.4996} \approx 0.8363$

    Now find $h_{2s}$:
    $h_f$ at 0.1 MPa = 417.51 kJ/kg
    $h_g$ at 0.1 MPa = 2675.0 kJ/kg
    $h_{2s} = h_f + x_{2s}(h_g - h_f)$
    $h_{2s} = 417.51 + 0.8363(2675.0 - 417.51) = 417.51 + 0.8363(2257.49) \approx 417.51 + 1887.9 \approx 2305.4 \text{ kJ/kg}$

*   **Actual Exit (State 2):** $P_2 = 0.1 \text{ MPa}$, $h_2 = 2450 \text{ kJ/kg}$.

*   **Isentropic Efficiency:**
    $\eta_T = \frac{h_1 - h_2}{h_1 - h_{2s}} = \frac{3230.9 - 2450}{3230.9 - 2305.4} = \frac{780.9}{925.5} \approx 0.8437$ or 84.4%

---

### 2. Isentropic Efficiency of Steam Nozzles

**Concept:**
A nozzle's primary function is to increase the kinetic energy of a fluid by converting its internal energy and pressure energy. In an ideal nozzle, this expansion is reversible and adiabatic (isentropic). Real nozzles suffer from friction and turbulence, leading to less kinetic energy gain. Isentropic efficiency measures this performance.

**Ideal (Isentropic) Nozzle Process:**
*   The expansion of steam from an initial state (1) to a final pressure ($P_2$) occurs reversibly and adiabatically.
*   Entropy remains constant ($s_1 = s_2$).
*   The maximum possible exit velocity is achieved.

**Actual Nozzle Process:**
*   The expansion of steam from state 1 to pressure $P_2$ is irreversible.
*   Entropy increases ($s_2 > s_1$).
*   Less kinetic energy is gained compared to the ideal case.

**First Law Analysis (Steady-Flow Energy Equation):**
For a single-inlet, single-outlet adiabatic nozzle, neglecting changes in potential energy and assuming negligible inlet velocity ($V_1 \approx 0$):

$0 + h_1 + \frac{V_1^2}{2} = h_2 + \frac{V_2^2}{2}$

If $V_1 \approx 0$, then:
$h_1 = h_2 + \frac{V_2^2}{2}$
So, the actual kinetic energy gained is $\frac{V_2^2}{2} = h_1 - h_2$.

For an ideal (isentropic) nozzle:
$h_1 = h_{2s} + \frac{V_{2s}^2}{2}$
So, the ideal kinetic energy gained is $\frac{V_{2s}^2}{2} = h_1 - h_{2s}$.

**Isentropic Efficiency of a Nozzle ($\eta_N$):**
The isentropic efficiency of a nozzle is defined as the ratio of the actual kinetic energy gain to the ideal (isentropic) kinetic energy gain:

$$\eta_N = \frac{\frac{V_2^2}{2}}{\frac{V_{2s}^2}{2}} = \frac{V_2^2}{V_{2s}^2} = \frac{2(h_1 - h_2)}{2(h_1 - h_{2s})} = \frac{h_1 - h_2}{h_1 - h_{2s}}$$

**Note:** The formula for isentropic efficiency for both turbines and nozzles is the same, but the interpretation differs:
*   For turbines: $\eta_T = \frac{\text{Actual Work}}{\text{Isentropic Work}}$
*   For nozzles: $\eta_N = \frac{\text{Actual Kinetic Energy}}{\text{Isentropic Kinetic Energy}}$

**How to find $h_{2s}$:**
This process is identical to finding $h_{2s}$ for a turbine.
1.  Determine the initial state (state 1).
2.  Find the specific entropy $s_1$.
3.  The final pressure is $P_2$. For an isentropic process, $s_{2s} = s_1$.
4.  Using $P_2$ and $s_{2s}$, find the enthalpy $h_{2s}$ from steam tables.
5.  The actual exit enthalpy $h_2$ is found using the given actual exit conditions (state 2).

**Relationship with Entropy Generation:**
Similar to turbines, irreversibilities in nozzles lead to entropy generation ($s_2 > s_{2s}$). This means the actual exit enthalpy $h_2$ is lower than $h_{2s}$ at the same exit pressure. Consequently, the actual kinetic energy ($h_1 - h_2$) is less than the isentropic kinetic energy ($h_1 - h_{2s}$), resulting in a lower exit velocity.

**Example (Nozzle):**
Steam enters a nozzle at 2 MPa and 300°C with negligible velocity and expands to 0.05 MPa. If the actual exit velocity is 800 m/s, determine the isentropic efficiency of the nozzle.

*   **State 1:** $P_1 = 2 \text{ MPa}$, $T_1 = 300^\circ\text{C}$, $V_1 \approx 0$.
    From steam tables (Cengel & Boles):
    $h_1 = 3024.2 \text{ kJ/kg}$
    $s_1 = 6.7688 \text{ kJ/kg} \cdot \text{K}$

*   **Isentropic Exit (State 2s):** $P_{2s} = 0.05 \text{ MPa}$ and $s_{2s} = s_1 = 6.7688 \text{ kJ/kg} \cdot \text{K}$.
    At 0.05 MPa:
    $s_f = 0.4765 \text{ kJ/kg} \cdot \text{K}$
    $s_g = 8.4504 \text{ kJ/kg} \cdot \text{K}$
    Since $s_f < s_{2s} < s_g$, the steam is in the saturated mixture region at state 2s.
    Calculate the quality $x_{2s}$:
    $s_{2s} = s_f + x_{2s}(s_g - s_f)$
    $6.7688 = 0.4765 + x_{2s}(8.4504 - 0.4765)$
    $x_{2s} = \frac{6.7688 - 0.4765}{8.4504 - 0.4765} = \frac{6.2923}{7.9739} \approx 0.7891$

    Now find $h_{2s}$:
    $h_f$ at 0.05 MPa = 203.32 kJ/kg
    $h_g$ at 0.05 MPa = 2617.5 kJ/kg
    $h_{2s} = h_f + x_{2s}(h_g - h_f)$
    $h_{2s} = 203.32 + 0.7891(2617.5 - 203.32) = 203.32 + 0.7891(2414.18) \approx 203.32 + 1904.4 \approx 2107.7 \text{ kJ/kg}$

*   **Actual Exit (State 2):** $P_2 = 0.05 \text{ MPa}$, $V_2 = 800 \text{ m/s}$.
    Calculate the actual exit enthalpy $h_2$:
    $\frac{V_2^2}{2} = h_1 - h_2$
    $h_2 = h_1 - \frac{V_2^2}{2}$
    Need to ensure consistent units. Convert kJ/kg to J/kg for velocity calculation:
    $h_1 = 3024.2 \text{ kJ/kg} = 3024200 \text{ J/kg}$
    $\frac{V_2^2}{2} = \frac{(800 \text{ m/s})^2}{2} = \frac{640000}{2} = 320000 \text{ J/kg}$
    $h_2 = 3024200 \text{ J/kg} - 320000 \text{ J/kg} = 2704200 \text{ J/kg} = 2704.2 \text{ kJ/kg}$

*   **Isentropic Efficiency:**
    $\eta_N = \frac{h_1 - h_2}{h_1 - h_{2s}} = \frac{3024.2 - 2704.2}{3024.2 - 2107.7} = \frac{320}{916.5} \approx 0.3492$ or 34.9%

    **Important Note:** This example shows a very low efficiency. In reality, nozzles are designed to be more efficient. Always double-check calculations and steam table values. The calculation for $h_2$ is correct if $V_2$ is given.

---

### Practice Questions & Exercises

**Question 1:**
Steam enters an adiabatic turbine at 4 MPa and 450°C and expands to 0.1 MPa. The isentropic efficiency of the turbine is 85%. Determine:
a) The isentropic exit specific enthalpy.
b) The actual exit specific enthalpy.
c) The actual work output per unit mass.
d) The isentropic efficiency.
(Use Cengel & Boles steam tables).

**Answer 1:**
*   **State 1:** $P_1 = 4 \text{ MPa}$, $T_1 = 450^\circ\text{C}$
    $h_1 = 3355.5 \text{ kJ/kg}$
    $s_1 = 7.0862 \text{ kJ/kg} \cdot \text{K}$

*   **Isentropic Exit (State 2s):** $P_{2s} = 0.1 \text{ MPa}$, $s_{2s} = s_1 = 7.0862 \text{ kJ/kg} \cdot \text{K}$
    At 0.1 MPa: $s_f = 0.6492$, $s_g = 8.1488$
    $x_{2s} = \frac{7.0862 - 0.6492}{8.1488 - 0.6492} = \frac{6.437}{7.4996} \approx 0.8583$
    $h_f = 417.51$, $h_g = 2675.0$
    a) $h_{2s} = 417.51 + 0.8583(2675.0 - 417.51) = 417.51 + 0.8583(2257.49) \approx 417.51 + 1938.0 \approx 2355.5 \text{ kJ/kg}$

*   **Isentropic Efficiency:** $\eta_T = 0.85$
    b) $\eta_T = \frac{h_1 - h_2}{h_1 - h_{2s}} \implies 0.85 = \frac{3355.5 - h_2}{3355.5 - 2355.5}$
    $0.85 = \frac{3355.5 - h_2}{1000}$
    $850 = 3355.5 - h_2$
    $h_2 = 3355.5 - 850 = 2505.5 \text{ kJ/kg}$

*   c) Actual work output per unit mass:
    $w_{actual} = h_1 - h_2 = 3355.5 - 2505.5 = 850 \text{ kJ/kg}$

*   d) The isentropic efficiency is given as 85% (0.85).

**Question 2:**
Steam at 1 MPa and 300°C enters a nozzle with negligible velocity and exits at 0.1 MPa. The exit velocity of the steam is measured to be 750 m/s. Determine the isentropic efficiency of the nozzle.
(Use Cengel & Boles steam tables).

**Answer 2:**
*   **State 1:** $P_1 = 1 \text{ MPa}$, $T_1 = 300^\circ\text{C}$, $V_1 \approx 0$
    $h_1 = 3051.6 \text{ kJ/kg}$
    $s_1 = 7.1228 \text{ kJ/kg} \cdot \text{K}$

*   **Isentropic Exit (State 2s):** $P_{2s} = 0.1 \text{ MPa}$, $s_{2s} = s_1 = 7.1228 \text{ kJ/kg} \cdot \text{K}$
    At 0.1 MPa: $s_f = 0.6492$, $s_g = 8.1488$
    $x_{2s} = \frac{7.1228 - 0.6492}{8.1488 - 0.6492} = \frac{6.4736}{7.4996} \approx 0.8632$
    $h_f = 417.51$, $h_g = 2675.0$
    $h_{2s} = 417.51 + 0.8632(2675.0 - 417.51) = 417.51 + 0.8632(2257.49) \approx 417.51 + 1949.4 \approx 2366.9 \text{ kJ/kg}$

*   **Actual Exit (State 2):** $P_2 = 0.1 \text{ MPa}$, $V_2 = 750 \text{ m/s}$.
    Calculate actual exit enthalpy $h_2$:
    $h_1 = 3051.6 \text{ kJ/kg} = 3051600 \text{ J/kg}$
    $\frac{V_2^2}{2} = \frac{(750 \text{ m/s})^2}{2} = \frac{562500}{2} = 281250 \text{ J/kg}$
    $h_2 = h_1 - \frac{V_2^2}{2} = 3051600 \text{ J/kg} - 281250 \text{ J/kg} = 2770350 \text{ J/kg} = 2770.4 \text{ kJ/kg}$

*   **Isentropic Efficiency:**
    $\eta_N = \frac{h_1 - h_2}{h_1 - h_{2s}} = \frac{3051.6 - 2770.4}{3051.6 - 2366.9} = \frac{281.2}{684.7} \approx 0.4107$ or 41.1%

---

### Important Points to Remember

*   **Isentropic efficiency is always less than or equal to 1 (or 100%).** An efficiency of 1 means a perfectly reversible process.
*   **Irreversibilities (friction, turbulence) cause entropy generation.** This leads to a decrease in the useful work output of a turbine or the kinetic energy gain of a nozzle compared to an ideal isentropic process.
*   **The formulas for turbine and nozzle efficiencies are identical ($ \frac{h_1 - h_2}{h_1 - h_{2s}} $), but the numerator represents work for turbines and kinetic energy for nozzles.**
*   **Steam tables are essential for determining properties like enthalpy and entropy at different states.** Always ensure you are using the correct units and states.
*   **For isentropic processes, entropy remains constant ($s_1 = s_{2s}$).**
*   **For actual processes, entropy increases ($s_2 > s_{2s}$).**
*   **For turbines, actual work is always less than isentropic work ($W_{actual} < W_{isentropic}$), meaning $h_2 > h_{2s}$.**
*   **For nozzles, actual kinetic energy is always less than isentropic kinetic energy ($\frac{V_2^2}{2} < \frac{V_{2s}^2}{2}$), meaning $h_2 > h_{2s}$.**

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |


### Textbook References

*   **Cengel & Boles, Thermodynamics: An Engineering Approach:** Chapter 9 (Second Law of Thermodynamics) covers irreversibility and entropy generation. Chapter 13 (Thermodynamic Cycles) discusses applications in power plants involving turbines. The concept of efficiency is generally discussed in relevant chapters on work-producing devices.
*   **P.K. Nag, Engineering Thermodynamics:** Chapter 6 (Entropy) is relevant for understanding entropy changes and irreversibilities. Chapters on Steam Turbines and Nozzles will detail their analysis using energy equations and the concept of efficiency.
*   **Moran & Shapiro, Fundamentals of Engineering Thermodynamics:** Chapters on the Second Law and Entropy are key. Specific chapters on turbomachinery and nozzles will provide detailed analysis and efficiency definitions.
*   **Sonntag, Borgnakke, VanWylen, Fundamentals of Thermodynamics:** Chapters dealing with the Second Law of Thermodynamics and its implications, and sections on turbomachinery and flow through nozzles will be informative.
*   **Ansermet & Brechet, Thermodynamics: Principles and Applications:** Chapters on the Second Law and its applications, as well as sections on energy conversion devices, will provide the necessary background.

---
This concludes the study notes for the Isentropic Efficiency of Steam Turbines and Nozzles. Remember to practice solving problems using steam tables and applying the energy equations to master this topic.