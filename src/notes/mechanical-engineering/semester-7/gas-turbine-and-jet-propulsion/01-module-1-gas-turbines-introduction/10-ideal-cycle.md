---
title: "ideal cycle"
subject: "GAS TURBINE AND JET PROPULSION"
module: "Module 1: Gas Turbines – Introduction"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1751d0cf4804463c94"
status: "completed"
scrapedAt: "2026-05-20T18:13:40.732Z"
---
# Module 1: Gas Turbines – Introduction

## Topic: Ideal Cycle

This module introduces the fundamental concepts of gas turbines and their operation. We will begin by exploring the **ideal cycle**, which serves as a theoretical baseline for understanding the performance of real gas turbine engines. By analyzing the ideal cycle, we can grasp the core principles of energy conversion and identify areas where real-world inefficiencies occur.

---

### Learning Outcomes Addressed in this Topic:

*   **LO 1:** Understand the basic thermodynamic principles underlying gas turbine operation. (Relates to CO1)
*   **LO 2:** Define and explain the components and processes of the ideal gas turbine cycle. (Relates to CO1, CO3)
*   **LO 3:** Analyze the T-s and P-v diagrams for the ideal gas turbine cycle. (Relates to CO1)
*   **LO 4:** Calculate the work output and efficiency of the ideal gas turbine cycle. (Relates to CO1)

---

### Key Concepts and Definitions:

*   **Gas Turbine:** A type of internal combustion engine that converts chemical energy from fuel into mechanical energy. It typically consists of a compressor, a combustor, and a turbine.
*   **Ideal Cycle:** A theoretical thermodynamic cycle that assumes perfect operation of all components and ideal working fluid properties. It represents the maximum possible efficiency achievable under given conditions.
*   **Working Fluid:** The substance that undergoes the cyclic process. In gas turbines, this is typically air, which is treated as an ideal gas.
*   **Isentropic Process:** A reversible adiabatic process where entropy remains constant. This is the ideal process for compression and expansion in gas turbines.
*   **Isobaric Process:** A process occurring at constant pressure. Heat addition and rejection in the ideal cycle occur at constant pressure.

---

### The Ideal Gas Turbine Cycle (Brayton Cycle - Ideal)

The ideal gas turbine cycle, also known as the **ideal Brayton cycle**, is a thermodynamic model used to analyze the performance of gas turbine engines. It consists of four reversible processes:

**1. Isentropic Compression:**
*   **Process:** Air is compressed from an initial pressure $P_1$ to a final pressure $P_2$ in an isentropic process. This is ideally carried out by a compressor.
*   **Diagrammatic Representation:** On a T-s diagram, this is represented by a vertical line (constant entropy) from state 1 to state 2. On a P-v diagram, it's a curve.
*   **Energy Input:** Work is done *on* the fluid by the compressor.
*   **Idealized Assumption:** Reversible adiabatic compression, meaning no heat transfer and no irreversibilities (like friction).
*   **Textbook Reference:** *Gas Turbines* by V. Ganesan (Chapter 3) describes isentropic processes and their application in compressors.

**2. Isobaric Heat Addition:**
*   **Process:** Heat is added to the compressed air at constant pressure $P_2$, increasing its temperature to $T_3$. This occurs in the combustor.
*   **Diagrammatic Representation:** On a T-s diagram, this is a curve of increasing entropy at constant pressure. On a P-v diagram, it's a horizontal line (constant pressure) from state 2 to state 3.
*   **Energy Input:** Heat is added to the system.
*   **Idealized Assumption:** Reversible heat addition at constant pressure, with no pressure drop.
*   **Textbook Reference:** *Turbines, Compressors and Fans* by S. M. Yahya (Chapter 4) discusses heat addition in combustion chambers.

**3. Isentropic Expansion:**
*   **Process:** The hot, high-pressure gas expands through the turbine, producing work. This is ideally an isentropic process, from pressure $P_2$ (or $P_3$) to $P_1$ (or $P_4$).
*   **Diagrammatic Representation:** On a T-s diagram, this is a vertical line (constant entropy) from state 3 to state 4. On a P-v diagram, it's a curve.
*   **Energy Output:** Work is done *by* the fluid by the turbine.
*   **Idealized Assumption:** Reversible adiabatic expansion, meaning no heat transfer and no irreversibilities.
*   **Textbook Reference:** *Gas Turbine & Jet Rocket Propulsion* by Mathur M. L. (Chapter 5) details the principles of turbine expansion.

**4. Isobaric Heat Rejection:**
*   **Process:** Heat is rejected from the expanded gas at constant pressure $P_1$, returning it to its initial state (state 1). This occurs in the exhaust.
*   **Diagrammatic Representation:** On a T-s diagram, this is a curve of decreasing entropy at constant pressure. On a P-v diagram, it's a horizontal line (constant pressure) from state 4 to state 1.
*   **Energy Output:** Heat is rejected from the system.
*   **Idealized Assumption:** Reversible heat rejection at constant pressure.
*   **Textbook Reference:** *Gas Turbines* by V. Ganesan (Chapter 3) covers the heat rejection process.

---

### Thermodynamic Analysis of the Ideal Brayton Cycle:

Assuming air as the working fluid and treating it as an ideal gas with constant specific heats ($c_p$ and $c_v$), we can derive key performance parameters.

**Key States:**

*   State 1: Inlet to the compressor (Pressure $P_1$, Temperature $T_1$)
*   State 2: Outlet of the compressor, inlet to the combustor (Pressure $P_2$, Temperature $T_2$)
*   State 3: Outlet of the combustor, inlet to the turbine (Pressure $P_3 = P_2$, Temperature $T_3$)
*   State 4: Outlet of the turbine, inlet to the exhaust (Pressure $P_4 = P_1$, Temperature $T_4$)

**Pressure Ratio ($r_p$):**
The ratio of the maximum pressure to the minimum pressure in the cycle.
$r_p = \frac{P_2}{P_1}$

**Temperature Ratios for Isentropic Processes:**
For isentropic compression (1-2):
$\frac{T_2}{T_1} = \left(\frac{P_2}{P_1}\right)^{\frac{\gamma-1}{\gamma}} = r_p^{\frac{\gamma-1}{\gamma}}$
$T_2 = T_1 \cdot r_p^{\frac{\gamma-1}{\gamma}}$

For isentropic expansion (3-4):
$\frac{T_3}{T_4} = \left(\frac{P_3}{P_4}\right)^{\frac{\gamma-1}{\gamma}} = r_p^{\frac{\gamma-1}{\gamma}}$
$T_4 = \frac{T_3}{r_p^{\frac{\gamma-1}{\gamma}}}$

**Work Input to Compressor ($W_c$):**
$W_c = h_2 - h_1 = c_p (T_2 - T_1)$
In terms of specific volume and pressure change: $W_c = \int_{1}^{2} v dP$

**Work Output from Turbine ($W_t$):**
$W_t = h_3 - h_4 = c_p (T_3 - T_4)$
In terms of specific volume and pressure change: $W_t = \int_{3}^{4} v dP$

**Net Work Output ($W_{net}$):**
$W_{net} = W_t - W_c = c_p (T_3 - T_4) - c_p (T_2 - T_1)$

**Heat Added ($Q_{in}$):**
$Q_{in} = h_3 - h_2 = c_p (T_3 - T_2)$

**Heat Rejected ($Q_{out}$):**
$Q_{out} = h_4 - h_1 = c_p (T_4 - T_1)$

**Thermal Efficiency ($\eta_{th}$):**
$\eta_{th} = \frac{W_{net}}{Q_{in}} = \frac{W_t - W_c}{Q_{in}}$
$\eta_{th} = \frac{c_p (T_3 - T_4) - c_p (T_2 - T_1)}{c_p (T_3 - T_2)}$
$\eta_{th} = 1 - \frac{T_4 - T_1}{T_3 - T_2}$

Substituting the temperature ratios:
$\eta_{th} = 1 - \frac{T_1 \cdot r_p^{\frac{\gamma-1}{\gamma}} - T_1}{T_3 - T_2}$ (This substitution is not fully simplified here to show the direct relation)

A more useful form for efficiency in terms of pressure ratio:
We know $T_2/T_1 = r_p^{(\gamma-1)/\gamma}$ and $T_3/T_4 = r_p^{(\gamma-1)/\gamma}$.
Let $T_2/T_1 = T_3/T_4 = \alpha$.
So, $T_2 = \alpha T_1$ and $T_4 = T_3/\alpha$.

$\eta_{th} = 1 - \frac{T_4 - T_1}{T_3 - T_2} = 1 - \frac{T_3/\alpha - T_1}{T_3 - \alpha T_1}$
$\eta_{th} = 1 - \frac{T_1(T_3/(\alpha T_1) - 1)}{T_3 - \alpha T_1}$
$\eta_{th} = 1 - \frac{T_1(T_3/T_2 - 1)}{T_3 - \alpha T_1}$

The most common form derived from the temperature relations:
$\eta_{th} = 1 - \frac{T_1}{T_2} = 1 - \frac{1}{r_p^{(\gamma-1)/\gamma}}$
This is a crucial result for the ideal Brayton cycle.

**Specific Work Output:**
Specific work output is the net work done per unit mass of working fluid.
$w_{net} = c_p (T_3 - T_4) - c_p (T_2 - T_1)$

**Specific Heat Rate (or Fuel-Air Ratio in terms of heat):**
This is not a direct calculation from the ideal cycle but is a performance parameter for real cycles. In the ideal cycle, we just analyze the heat added.

**Relationship between Efficiency and Pressure Ratio:**
The ideal thermal efficiency of the Brayton cycle increases with the pressure ratio ($r_p$).
*   Higher $r_p$ means a larger temperature drop across the turbine, leading to more work output.
*   However, at very high pressure ratios, the compressor work also increases significantly.

**Relationship between Efficiency and Turbine Inlet Temperature ($T_3$):**
For a given pressure ratio, increasing the turbine inlet temperature ($T_3$) increases the net work output but does *not* change the ideal thermal efficiency. The efficiency formula $\eta_{th} = 1 - 1/r_p^{(\gamma-1)/\gamma}$ is independent of $T_3$.

**Reference Book Insight:** *Gas Turbine Theory* by H. Cohen (Chapter 2) provides a comprehensive derivation of the Brayton cycle equations and discusses the impact of pressure ratio and turbine inlet temperature on performance.

---

### T-s and P-v Diagrams for the Ideal Brayton Cycle:

**T-s Diagram:**

```mermaid
graph LR
    1(State 1: T1, s1) --> 2(State 2: T2, s1);
    2 --> 3(State 3: T3, s3);
    3 --> 4(State 4: T4, s3);
    4 --> 1;

    style 1 fill:#f9f,stroke:#333,stroke-width:2px
    style 2 fill:#ccf,stroke:#333,stroke-width:2px
    style 3 fill:#f9f,stroke:#333,stroke-width:2px
    style 4 fill:#ccf,stroke:#333,stroke-width:2px

    linkStyle 1 stroke-width:2px,stroke:blue,stroke-dasharray: 5 5; /* Isentropic Compression */
    linkStyle 2 stroke-width:2px,stroke:red; /* Isobaric Heat Addition */
    linkStyle 3 stroke-width:2px,stroke:blue,stroke-dasharray: 5 5; /* Isentropic Expansion */
    linkStyle 4 stroke-width:2px,stroke:green; /* Isobaric Heat Rejection */

    %% Annotations
    subgraph T-s Diagram
        direction TB
        1 -- "Isentropic Compression" --> 2
        2 -- "Isobaric Heat Addition" --> 3
        3 -- "Isentropic Expansion" --> 4
        4 -- "Isobaric Heat Rejection" --> 1
    end
```

*   **Process 1-2:** Isentropic compression (vertical line).
*   **Process 2-3:** Isobaric heat addition (curved line at constant pressure, increasing entropy).
*   **Process 3-4:** Isentropic expansion (vertical line).
*   **Process 4-1:** Isobaric heat rejection (curved line at constant pressure, decreasing entropy).
*   The area under the process 2-3 represents $Q_{in}$.
*   The area under the process 3-4 represents $W_t$.
*   The area under the process 1-2 represents $W_c$.
*   The area between curves 1-2 and 4-1 represents the net work output.

**P-v Diagram:**

```mermaid
graph LR
    1(State 1: P1, v1) --> 2(State 2: P2, v2);
    2 --> 3(State 3: P2, v3);
    3 --> 4(State 4: P1, v4);
    4 --> 1;

    style 1 fill:#f9f,stroke:#333,stroke-width:2px
    style 2 fill:#ccf,stroke:#333,stroke-width:2px
    style 3 fill:#f9f,stroke:#333,stroke-width:2px
    style 4 fill:#ccf,stroke:#333,stroke-width:2px

    linkStyle 1 stroke-width:2px,stroke:blue,stroke-dasharray: 5 5; /* Isentropic Compression */
    linkStyle 2 stroke-width:2px,stroke:red; /* Isobaric Heat Addition */
    linkStyle 3 stroke-width:2px,stroke:blue,stroke-dasharray: 5 5; /* Isentropic Expansion */
    linkStyle 4 stroke-width:2px,stroke:green; /* Isobaric Heat Rejection */

    %% Annotations
    subgraph P-v Diagram
        direction TB
        1 -- "Isentropic Compression" --> 2
        2 -- "Isobaric Heat Addition" --> 3
        3 -- "Isentropic Expansion" --> 4
        4 -- "Isobaric Heat Rejection" --> 1
    end
```

*   **Process 1-2:** Isentropic compression (curve, $Pv^\gamma = const$).
*   **Process 2-3:** Isobaric heat addition (horizontal line at constant pressure $P_2$).
*   **Process 3-4:** Isentropic expansion (curve, $Pv^\gamma = const$).
*   **Process 4-1:** Isobaric heat rejection (horizontal line at constant pressure $P_1$).
*   The area under the 2-3 process represents the heat added.
*   The area under the 3-4 process represents the turbine work.
*   The area under the 1-2 process represents the compressor work.
*   The enclosed area (cycle area) represents the net work output.

---

### Example Calculation:

**Problem:**
An ideal gas turbine operates on the Brayton cycle with air entering the compressor at 1 bar and $20^\circ$C. The pressure ratio is 5. The turbine inlet temperature is $1000^\circ$C. Calculate the net work output per kg of air and the thermal efficiency. Assume air behaves as an ideal gas with $c_p = 1.005$ kJ/kg.K and $\gamma = 1.4$.

**Solution:**

**Given:**
$P_1 = 1$ bar = 100 kPa
$T_1 = 20^\circ$C = $20 + 273.15$ = 293.15 K
$r_p = P_2/P_1 = 5$
$T_3 = 1000^\circ$C = $1000 + 273.15$ = 1273.15 K
$c_p = 1.005$ kJ/kg.K
$\gamma = 1.4$

**Calculations:**

1.  **Calculate $T_2$ (Compressor Outlet Temperature):**
    $\frac{T_2}{T_1} = r_p^{\frac{\gamma-1}{\gamma}}$
    $\frac{\gamma-1}{\gamma} = \frac{1.4-1}{1.4} = \frac{0.4}{1.4} \approx 0.2857$
    $T_2 = T_1 \cdot r_p^{0.2857} = 293.15 \text{ K} \cdot (5)^{0.2857}$
    $T_2 \approx 293.15 \text{ K} \cdot 1.5275 \approx 447.48 \text{ K}$

2.  **Calculate $T_4$ (Turbine Outlet Temperature):**
    $\frac{T_3}{T_4} = r_p^{\frac{\gamma-1}{\gamma}}$
    $T_4 = \frac{T_3}{r_p^{\frac{\gamma-1}{\gamma}}} = \frac{1273.15 \text{ K}}{5^{0.2857}}$
    $T_4 \approx \frac{1273.15 \text{ K}}{1.5275} \approx 833.57 \text{ K}$

3.  **Calculate Compressor Work Input ($w_c$):**
    $w_c = c_p (T_2 - T_1)$
    $w_c = 1.005 \text{ kJ/kg.K} \cdot (447.48 \text{ K} - 293.15 \text{ K})$
    $w_c \approx 1.005 \text{ kJ/kg.K} \cdot 154.33 \text{ K} \approx 155.1$ kJ/kg

4.  **Calculate Turbine Work Output ($w_t$):**
    $w_t = c_p (T_3 - T_4)$
    $w_t = 1.005 \text{ kJ/kg.K} \cdot (1273.15 \text{ K} - 833.57 \text{ K})$
    $w_t \approx 1.005 \text{ kJ/kg.K} \cdot 439.58 \text{ K} \approx 441.88$ kJ/kg

5.  **Calculate Net Work Output ($w_{net}$):**
    $w_{net} = w_t - w_c$
    $w_{net} \approx 441.88 \text{ kJ/kg} - 155.1 \text{ kJ/kg} \approx 286.78$ kJ/kg

6.  **Calculate Heat Added ($q_{in}$):**
    $q_{in} = c_p (T_3 - T_2)$
    $q_{in} = 1.005 \text{ kJ/kg.K} \cdot (1273.15 \text{ K} - 447.48 \text{ K})$
    $q_{in} \approx 1.005 \text{ kJ/kg.K} \cdot 825.67 \text{ K} \approx 829.8$ kJ/kg

7.  **Calculate Thermal Efficiency ($\eta_{th}$):**
    $\eta_{th} = \frac{w_{net}}{q_{in}} = \frac{286.78 \text{ kJ/kg}}{829.8 \text{ kJ/kg}} \approx 0.3456$
    Or, using the formula:
    $\eta_{th} = 1 - \frac{1}{r_p^{(\gamma-1)/\gamma}} = 1 - \frac{1}{5^{0.2857}}$
    $\eta_{th} \approx 1 - \frac{1}{1.5275} \approx 1 - 0.6547 \approx 0.3453$

**Answer:**
The net work output per kg of air is approximately **286.8 kJ/kg**.
The thermal efficiency is approximately **34.5%**.

---

### Practice Questions:

1.  An ideal Brayton cycle has a pressure ratio of 8. If the inlet temperature is $27^\circ$C and the turbine inlet temperature is $1200^\circ$C, calculate:
    a) The temperatures at the compressor and turbine outlets.
    b) The specific work output of the turbine and compressor.
    c) The net specific work output.
    d) The thermal efficiency of the cycle.
    Assume air properties: $c_p = 1.005$ kJ/kg.K, $\gamma = 1.4$.

2.  How does the thermal efficiency of an ideal Brayton cycle change with an increase in pressure ratio? Explain with the help of the relevant formula.

3.  For a given pressure ratio, how does increasing the turbine inlet temperature affect the net work output and the thermal efficiency of an ideal Brayton cycle?

---

### Answers to Practice Questions:

1.  **Given:**
    $T_1 = 27^\circ$C = 300 K
    $r_p = 8$
    $T_3 = 1200^\circ$C = 1473 K
    $c_p = 1.005$ kJ/kg.K, $\gamma = 1.4$
    $(\gamma-1)/\gamma \approx 0.2857$

    a)  **Temperatures:**
        $T_2 = T_1 \cdot r_p^{(\gamma-1)/\gamma} = 300 \text{ K} \cdot 8^{0.2857} \approx 300 \text{ K} \cdot 1.925 \approx 577.5$ K ($577.5^\circ$C)
        $T_4 = T_3 / r_p^{(\gamma-1)/\gamma} = 1473 \text{ K} / 8^{0.2857} \approx 1473 \text{ K} / 1.925 \approx 765.2$ K ($492.2^\circ$C)

    b)  **Specific Work:**
        $w_c = c_p (T_2 - T_1) = 1.005 \cdot (577.5 - 300) \approx 1.005 \cdot 277.5 \approx 278.9$ kJ/kg
        $w_t = c_p (T_3 - T_4) = 1.005 \cdot (1473 - 765.2) \approx 1.005 \cdot 707.8 \approx 711.3$ kJ/kg

    c)  **Net Specific Work:**
        $w_{net} = w_t - w_c = 711.3 - 278.9 \approx 432.4$ kJ/kg

    d)  **Thermal Efficiency:**
        $\eta_{th} = 1 - 1/r_p^{(\gamma-1)/\gamma} = 1 - 1/8^{0.2857} \approx 1 - 1/1.925 \approx 1 - 0.5195 \approx 0.4805$ or 48.05%

2.  The thermal efficiency of an ideal Brayton cycle is given by $\eta_{th} = 1 - \frac{1}{r_p^{(\gamma-1)/\gamma}}$. As the pressure ratio ($r_p$) increases, the term $r_p^{(\gamma-1)/\gamma}$ also increases. Consequently, $1/r_p^{(\gamma-1)/\gamma}$ decreases, leading to an **increase in thermal efficiency**. This indicates that for ideal cycles, higher pressure ratios generally lead to better efficiency.

3.  For a given pressure ratio, increasing the turbine inlet temperature ($T_3$) **increases the net work output** ($w_{net} = c_p(T_3 - T_4) - c_p(T_2 - T_1)$) because the turbine work output ($w_t = c_p(T_3 - T_4)$) increases more significantly than the compressor work input ($w_c = c_p(T_2 - T_1)$). However, the **thermal efficiency remains unchanged** because the formula for ideal efficiency, $\eta_{th} = 1 - 1/r_p^{(\gamma-1)/\gamma}$, is independent of $T_3$.

---

### Important Points to Remember:

*   The ideal Brayton cycle represents the **maximum theoretical performance** and serves as a benchmark.
*   It assumes **reversible processes** (isentropic compression and expansion) and **ideal working fluid** (air with constant specific heats).
*   **Pressure ratio ($r_p$)** is a key parameter; increasing $r_p$ increases ideal efficiency.
*   **Turbine inlet temperature ($T_3$)** affects net work output but not the ideal thermal efficiency.
*   The cycle consists of **four processes**: isentropic compression, isobaric heat addition, isentropic expansion, and isobaric heat rejection.
*   The **net work output** is the difference between turbine work and compressor work.

---

### Alignment with Course Outcomes:

*   **CO1: To apply the principles of thermodynamics and fluid dynamics to understand the performance and efficiency of various gas turbine cycles. (Knowledge Level: K3)**
    This topic directly addresses CO1 by explaining the thermodynamic principles (isentropic, isobaric processes) and enabling the calculation of performance metrics like thermal efficiency and work output for the ideal gas turbine cycle. The example calculation demonstrates this application.
*   **CO3: To analyse the performance of gas turbine systems by understanding the characteristics of various components. (Knowledge Level: K4)**
    While this topic focuses on the ideal cycle, it lays the groundwork for understanding component performance by defining the ideal compressor and turbine processes. Subsequent modules will build upon this foundation to analyze real component efficiencies.

---

This concludes the introduction to the ideal gas turbine cycle. Understanding this theoretical basis is crucial for comprehending the complexities and challenges of real gas turbine engines.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
