---
title: "cycle efficiency"
subject: "GAS TURBINE AND JET PROPULSION"
module: "Module 1: Gas Turbines – Introduction"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1751d0cf4804463c9d"
status: "completed"
scrapedAt: "2026-05-20T18:13:47.081Z"
---
# GAS TURBINE AND JET PROPULSION - Module 1: Gas Turbines – Introduction

## Topic: Cycle Efficiency

This module introduces the fundamental concepts of gas turbines, with a focus on understanding the efficiency of the underlying thermodynamic cycles. We will explore the theoretical basis of gas turbine operation and the factors that influence its efficiency, laying the groundwork for subsequent analysis of components and propulsion systems.

---

### **Learning Outcomes Covered:**

*   **Understanding the fundamental thermodynamic cycle of a gas turbine.** (Related to CO1)
*   **Defining and calculating thermal efficiency for ideal and actual gas turbine cycles.** (Related to CO1)
*   **Identifying key parameters that affect cycle efficiency.** (Related to CO1)
*   **Comparing different gas turbine cycles and their efficiencies.** (Related to CO1)

---

### **Key Concepts and Definitions:**

*   **Gas Turbine:** A rotary engine that extracts energy from a flow of combustion gas. It typically consists of a compressor, a combustor, and a turbine.
*   **Thermodynamic Cycle:** A sequence of thermodynamic processes that convert heat energy into mechanical work. Gas turbines primarily operate on cycles based on the Brayton cycle.
*   **Thermal Efficiency ($\eta_{th}$):** The ratio of the net work output to the heat input to the cycle. It represents how effectively the heat energy is converted into useful work.

    $\eta_{th} = \frac{\text{Net Work Output}}{\text{Heat Input}}$
*   **Work Output:** The work done by the turbine.
*   **Work Input:** The work done on the compressor.
*   **Net Work Output:** Work Output - Work Input.
*   **Heat Input:** The heat added in the combustor.
*   **Heat Rejection:** The heat rejected in the atmosphere (or cooling process).

---

### **1. The Ideal Brayton Cycle**

The **Brayton cycle** is the theoretical thermodynamic cycle on which most gas turbine engines operate. It consists of four ideal processes:

1.  **Isentropic Compression:** Air is compressed from an initial state ($p_1, T_1$) to a final state ($p_2, T_2$) by a compressor. Ideally, this process is reversible and adiabatic (isentropic).
    *   *Reference: Ganesan, "Gas Turbines", Chapter 3.1*
    *   *Reference: Yahya, "Turbines, Compressors and Fans", Chapter 2.1*

2.  **Isobaric Heat Addition:** Heat is added to the compressed air at constant pressure ($p_2$) in the combustor, increasing its temperature from $T_2$ to $T_3$.
    *   *Reference: Ganesan, "Gas Turbines", Section 3.1.1*
    *   *Reference: Yahya, "Turbines, Compressors and Fans", Section 2.1.1*

3.  **Isentropic Expansion:** The hot combustion gases expand through the turbine, producing work. Ideally, this process is reversible and adiabatic (isentropic), reducing the pressure from $p_2$ to $p_1$ and temperature from $T_3$ to $T_4$.
    *   *Reference: Ganesan, "Gas Turbines", Section 3.1*
    *   *Reference: Yahya, "Turbines, Compressors and Fans", Section 2.1*

4.  **Isobaric Heat Rejection:** Heat is rejected to the surroundings at constant pressure ($p_1$), returning the working fluid to its initial state.
    *   *Reference: Ganesan, "Gas Turbines", Section 3.1.1*
    *   *Reference: Yahya, "Turbines, Compressors and Fans", Section 2.1.1*

**Ideal Brayton Cycle Analysis:**

*   **Pressure Ratio ($r_p$)**: $r_p = p_2 / p_1$
*   **Temperature at Turbine Inlet ($T_3$)**: This is a critical parameter.
*   **Temperature at Compressor Inlet ($T_1$)**: Ambient temperature.

For an ideal gas with constant specific heats, the thermal efficiency of the ideal Brayton cycle is given by:

$\eta_{th, ideal} = 1 - \frac{1}{r_p^{(\gamma-1)/\gamma}}$

where:
*   $\gamma$ is the ratio of specific heats ($c_p / c_v$). For air, $\gamma \approx 1.4$.

**Key Insights from Ideal Brayton Cycle Efficiency:**

*   **Efficiency increases with increasing pressure ratio ($r_p$).**
*   **Efficiency is independent of the turbine inlet temperature ($T_3$) in the ideal cycle.**

---

### **2. Factors Affecting Thermal Efficiency in Real Gas Turbines**

Real gas turbines deviate from the ideal Brayton cycle due to irreversibilities and practical limitations. The thermal efficiency of a real cycle is always lower than the ideal cycle.

**2.1. Component Efficiencies:**

*   **Compressor Efficiency ($\eta_c$)**: The actual work input to the compressor is higher than the ideal isentropic work input.
    *   $\eta_c = \frac{\text{Isentropic work input}}{\text{Actual work input}}$
    *   *Reference: Ganesan, "Gas Turbines", Chapter 4*
    *   *Reference: Yahya, "Turbines, Compressors and Fans", Chapter 3*
    *   **Impact on Cycle:** Higher compressor work input reduces net work output and thus thermal efficiency.

*   **Turbine Efficiency ($\eta_t$)**: The actual work output from the turbine is lower than the ideal isentropic work output.
    *   $\eta_t = \frac{\text{Actual work output}}{\text{Isentropic work output}}$
    *   *Reference: Ganesan, "Gas Turbines", Chapter 5*
    *   *Reference: Yahya, "Turbines, Compressors and Fans", Chapter 5*
    *   **Impact on Cycle:** Lower turbine work output reduces net work output and thus thermal efficiency.

**2.2. Pressure Losses:**

*   **Combustor Pressure Loss ($\Delta p_{comb}$)**: A pressure drop occurs in the combustor due to friction and flow disturbances. This means the pressure in the turbine inlet ($p_3$) is lower than the pressure at the compressor outlet ($p_2$).
    *   *Reference: Ganesan, "Gas Turbines", Section 3.2.1*
    *   *Reference: Yahya, "Turbines, Compressors and Fans", Section 2.2.1*
    *   **Impact on Cycle:** Lower turbine inlet pressure reduces the potential for expansion work, decreasing efficiency.

*   **Ducting and Inter-component Losses**: Pressure drops also occur in inlet ducts, exhaust ducts, and other connecting passages.

**2.3. Non-Ideal Heat Addition:**

*   **Finite Heat Transfer**: In reality, heat transfer in the combustor is not instantaneous and may not reach the ideal constant-pressure state.

**2.4. Turbine Inlet Temperature ($T_3$):**

*   **Material Limitations**: The maximum turbine inlet temperature is limited by the metallurgical properties of the turbine blades. Exceeding these limits can lead to material failure.
*   **Impact on Cycle:** While the ideal cycle efficiency is independent of $T_3$, increasing $T_3$ in a real cycle generally increases thermal efficiency, provided other factors are constant. This is because it allows for more work extraction from the turbine.
    *   *Reference: Ganesan, "Gas Turbines", Section 3.2.1*
    *   *Reference: Mathur & Mathur, "Gas Turbine & Jet Rocket Propulsion", Chapter 4.2*

**2.5. Variation of Specific Heats:**

*   **Temperature Dependence**: For real gases and at higher temperatures, specific heats ($c_p$ and $c_v$) are not constant but vary with temperature. This affects the calculation of efficiencies.
    *   *Reference: Ganesan, "Gas Turbines", Appendix A*
    *   *Reference: Yahya, "Turbines, Compressors and Fans", Appendix B*

---

### **3. Actual Gas Turbine Cycle (Real Brayton Cycle)**

The actual cycle deviates from the ideal one, incorporating inefficiencies and pressure losses. The processes are:

1.  **Actual Compression:** Isentropic compression (ideal) becomes polytropic compression with $\eta_c < 1$. Work input is increased.
2.  **Isobaric Heat Addition with Pressure Loss:** Heat is added at approximately constant pressure, but with a pressure drop.
3.  **Actual Expansion:** Isentropic expansion (ideal) becomes polytropic expansion with $\eta_t < 1$. Work output is decreased.
4.  **Isobaric Heat Rejection:** Similar to the ideal case, but with potentially different working fluid properties.

**Calculating Actual Thermal Efficiency:**

The thermal efficiency of the actual cycle is calculated as:

$\eta_{th, actual} = \frac{W_{net}}{Q_{in}} = \frac{W_{turbine, actual} - W_{compressor, actual}}{Q_{in}}$

Where:
*   $W_{compressor, actual} = \dot{m} c_{p,avg} (T_{2a} - T_1)$
*   $W_{turbine, actual} = \dot{m} c_{p,avg} (T_3 - T_{4a})$
*   $Q_{in} = \dot{m} c_{p,avg} (T_3 - T_{2a})$

And $T_{2a}$ and $T_{4a}$ are the actual outlet temperatures from the compressor and turbine, respectively. These are related to the isentropic temperatures by the component efficiencies.

*   $T_{2a} = T_1 \left(1 + \frac{r_p^{(\gamma-1)/\gamma} - 1}{\eta_c}\right)$
*   $T_{4a} = T_3 \left(1 - \eta_t (1 - \frac{1}{r_p^{(\gamma-1)/\gamma}})\right)$

---

### **4. Other Relevant Efficiencies**

While thermal efficiency is paramount for power generation, other efficiencies are also important in gas turbine analysis, particularly for propulsion.

*   **Specific Output (Net Work Output per unit mass of air):**
    *   $w_{net} = w_{turbine} - w_{compressor}$
    *   *Impact: Higher specific output is desirable for compact engines.*

*   **Specific Fuel Consumption (SFC):**
    *   SFC is a measure of fuel efficiency. It is the rate of fuel consumption per unit of power output. Lower SFC means better fuel economy.
    *   SFC = $\frac{\text{Fuel Flow Rate}}{\text{Power Output}}$
    *   *Reference: Mathur & Mathur, "Gas Turbine & Jet Rocket Propulsion", Chapter 1.6*

---

### **5. Comparison of Cycles and Factors Influencing Efficiency**

| Factor                 | Impact on Ideal Brayton Cycle Efficiency | Impact on Actual Gas Turbine Cycle Efficiency | Explanation                                                                                                                                        |
| :--------------------- | :--------------------------------------- | :-------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Pressure Ratio ($r_p$)** | Increases                                | Increases (up to a point)                     | Higher $r_p$ increases the temperature difference between heat addition and rejection, leading to higher theoretical efficiency. However, very high $r_p$ can lead to excessive compressor work and increased irreversibilities. |
| **Turbine Inlet Temp ($T_3$)** | No impact                                | Increases                                     | Higher $T_3$ allows for more expansion work from the turbine and a greater potential for net work output. However, it is limited by material constraints. |
| **Compressor Efficiency ($\eta_c$)** | Not applicable                           | Decreases                                     | Lower $\eta_c$ means more work is required to compress the air, reducing net work output.                                                            |
| **Turbine Efficiency ($\eta_t$)** | Not applicable                           | Decreases                                     | Lower $\eta_t$ means less work is extracted from the turbine, reducing net work output.                                                            |
| **Pressure Losses**    | Not applicable                           | Decreases                                     | Pressure drops reduce the effective pressure ratio across the turbine, leading to less expansion work.                                              |
| **Specific Heat Variation** | Not applicable                           | Affects calculations, can slightly reduce efficiency at high $T_3$ | Real gas behavior requires more complex calculations and can slightly alter the efficiency trend.                                                  |

*   *Reference: Ganesan, "Gas Turbines", Chapter 3.2*
*   *Reference: Yahya, "Turbines, Compressors and Fans", Chapter 2.2*

---

### **6. Practice Questions and Exercises**

**Question 1:**
The air enters the compressor of an ideal gas turbine at 1 bar and 15°C. The pressure ratio is 5. The turbine inlet temperature is 1000°C. Calculate the thermal efficiency of the ideal cycle. Assume air behaves as an ideal gas with $\gamma = 1.4$ and $c_p = 1.005$ kJ/kg.K.

**Solution 1:**
*   $p_1 = 1$ bar, $T_1 = 15^\circ\text{C} = 288.15$ K
*   $r_p = 5$
*   $T_3 = 1000^\circ\text{C} = 1273.15$ K
*   $\gamma = 1.4$

Ideal Brayton Cycle Efficiency:
$\eta_{th, ideal} = 1 - \frac{1}{r_p^{(\gamma-1)/\gamma}}$
$\eta_{th, ideal} = 1 - \frac{1}{5^{(1.4-1)/1.4}} = 1 - \frac{1}{5^{0.4/1.4}} = 1 - \frac{1}{5^{0.2857}}$
$\eta_{th, ideal} = 1 - \frac{1}{1.5405} = 1 - 0.6491 = 0.3509$

$\eta_{th, ideal} \approx 35.09\%$

**Question 2:**
For the same ideal cycle as in Question 1, if the compressor efficiency is 85% and the turbine efficiency is 90%, and there is a pressure loss of 0.05 bar in the combustor, calculate the thermal efficiency of the actual cycle. Assume constant specific heats for simplicity.

**Solution 2:**
*   $T_1 = 288.15$ K, $p_1 = 1$ bar
*   $r_p = 5$, $p_2 = 5$ bar
*   $T_3 = 1273.15$ K
*   $\eta_c = 0.85$, $\eta_t = 0.90$
*   Combustor pressure loss = 0.05 bar, so $p_3 = p_2 - 0.05 = 4.95$ bar.
*   The pressure ratio across the turbine is $p_3/p_4 = p_3/p_1 = 4.95/1 = 4.95$.

**Step 1: Calculate actual compressor outlet temperature ($T_{2a}$)**
Isentropic temperature after compression ($T_{2s}$):
$T_{2s} = T_1 \times r_p^{(\gamma-1)/\gamma} = 288.15 \times 5^{0.2857} = 288.15 \times 1.5405 = 444.09$ K

Actual compressor outlet temperature ($T_{2a}$):
$T_{2a} = T_1 \left(1 + \frac{r_p^{(\gamma-1)/\gamma} - 1}{\eta_c}\right) = 288.15 \left(1 + \frac{1.5405 - 1}{0.85}\right)$
$T_{2a} = 288.15 \left(1 + \frac{0.5405}{0.85}\right) = 288.15 (1 + 0.6359) = 288.15 \times 1.6359 = 471.99$ K

**Step 2: Calculate actual turbine outlet temperature ($T_{4a}$)**
Isentropic temperature after expansion ($T_{4s}$):
The effective pressure ratio for expansion is $r_{peff} = p_3/p_4 = 4.95/1 = 4.95$.
$T_{4s} = T_3 \left(\frac{p_4}{p_3}\right)^{(\gamma-1)/\gamma} = T_3 \left(\frac{1}{r_{peff}}\right)^{(\gamma-1)/\gamma} = 1273.15 \left(\frac{1}{4.95}\right)^{0.2857}$
$T_{4s} = 1273.15 \times (0.2020)^{0.2857} = 1273.15 \times 0.7052 = 897.89$ K

Actual turbine outlet temperature ($T_{4a}$):
$T_{4a} = T_3 \left(1 - \eta_t (1 - \left(\frac{p_4}{p_3}\right)^{(\gamma-1)/\gamma})\right) = T_3 \left(1 - \eta_t (1 - \frac{1}{r_{peff}^{(\gamma-1)/\gamma}})\right)$
$T_{4a} = 1273.15 \left(1 - 0.90 (1 - \frac{1}{4.95^{0.2857}})\right) = 1273.15 \left(1 - 0.90 (1 - 0.7052)\right)$
$T_{4a} = 1273.15 (1 - 0.90 \times 0.2948) = 1273.15 (1 - 0.2653) = 1273.15 \times 0.7347 = 935.33$ K

**Step 3: Calculate specific work input to compressor ($w_{c,actual}$) and specific work output from turbine ($w_{t,actual}$)**
Assume $c_p = 1.005$ kJ/kg.K.
$w_{c,actual} = c_p (T_{2a} - T_1) = 1.005 (471.99 - 288.15) = 1.005 \times 183.84 = 184.76$ kJ/kg

$w_{t,actual} = c_p (T_3 - T_{4a}) = 1.005 (1273.15 - 935.33) = 1.005 \times 337.82 = 339.51$ kJ/kg

**Step 4: Calculate net specific work output ($w_{net}$)**
$w_{net} = w_{t,actual} - w_{c,actual} = 339.51 - 184.76 = 154.75$ kJ/kg

**Step 5: Calculate heat input ($q_{in}$)**
$q_{in} = c_p (T_3 - T_{2a}) = 1.005 (1273.15 - 471.99) = 1.005 \times 801.16 = 805.17$ kJ/kg

**Step 6: Calculate actual thermal efficiency ($\eta_{th, actual}$)**
$\eta_{th, actual} = \frac{w_{net}}{q_{in}} = \frac{154.75}{805.17} = 0.1922$

$\eta_{th, actual} \approx 19.22\%$

*(Note: The pressure loss in the combustor slightly reduces the effective pressure ratio for the turbine, which in turn slightly reduces the turbine work compared to if the pressure remained constant at 5 bar for the entire heat addition phase. This calculation includes that effect.)*

**Question 3:**
Discuss the impact of increasing the turbine inlet temperature on the thermal efficiency of a real gas turbine, referencing material limitations. (Conceptual question)

**Solution 3:**
Increasing the turbine inlet temperature ($T_3$) in a real gas turbine generally increases its thermal efficiency. This is because a higher $T_3$ allows for a greater enthalpy drop across the turbine, leading to more work output for the same amount of compressor work input. This directly increases the net work output and thus the thermal efficiency.

However, this increase is limited by the material properties of the turbine blades. Turbine blades operate under extreme thermal and mechanical stress. Exceeding the material's melting point or creep limit will cause catastrophic failure. Therefore, manufacturers use advanced materials (superalloys) and cooling techniques (film cooling, internal cooling channels) to allow for higher $T_3$ values. The pursuit of higher turbine inlet temperatures is a key driver for improving gas turbine performance and efficiency, but it is a complex engineering challenge involving thermodynamics, material science, and heat transfer.
*   *Reference: Ganesan, "Gas Turbines", Chapter 3.2.1*
*   *Reference: Rolls Royce, "The Jet Engine", Chapter on Turbine Technology*

---

### **7. Important Points to Remember**

*   **Brayton cycle is the fundamental thermodynamic cycle.**
*   **Ideal cycle efficiency increases with pressure ratio ($r_p$) and is independent of turbine inlet temperature ($T_3$).**
*   **Real cycle efficiency is always lower than the ideal cycle efficiency.**
*   **Key factors reducing real cycle efficiency:** compressor inefficiency ($\eta_c$), turbine inefficiency ($\eta_t$), and pressure losses (especially in the combustor).
*   **Turbine inlet temperature ($T_3$) is a crucial parameter for real cycle performance, but it is limited by material capabilities.**
*   **Higher pressure ratios generally lead to higher efficiencies, but there are practical limits.**
*   **Understanding component efficiencies is essential for analyzing actual cycle performance.**

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


### **8. Textbook and Reference Content Integration:**

*   **Ganesan, "Gas Turbines":** Provides detailed derivations of ideal and actual Brayton cycles, component efficiencies, and factors influencing performance. Chapters 3 and 4 are particularly relevant.
*   **Yahya, "Turbines, Compressors and Fans":** Offers a comprehensive treatment of the Brayton cycle and thermodynamic analysis. Chapters 2 and 3 cover the core concepts.
*   **Mathur & Mathur, "Gas Turbine & Jet Rocket Propulsion":** Focuses on the application of gas turbine cycles to propulsion, introducing concepts like specific fuel consumption. Chapter 1.6 and Chapter 4.2 are useful.
*   **Rolls Royce, "The Jet Engine":** Offers practical insights into the operational aspects and advancements in gas turbine technology, including material limitations for high temperatures.
*   **Cohen, "Gas Turbine Theory":** A more advanced theoretical treatment that can be referenced for deeper understanding of cycle analysis and variations.

---

### **9. Alignment with Course Outcomes:**

*   **CO1: To apply the principles of thermodynamics and fluid dynamics to understand the performance and efficiency of various gas turbine cycles. (Knowledge Level: K3)**
    *   This topic directly addresses CO1 by explaining the Brayton cycle, its ideal and actual forms, and the thermodynamic principles governing its efficiency. The practice questions require applying these principles.
*   **CO2: To analyze the performance characteristics and efficiencies of axial flow compressors and reaction turbines (Knowledge Level: K4)**
    *   While this module focuses on the cycle, the efficiencies of compressors ($\eta_c$) and turbines ($\eta_t$) are introduced as critical parameters affecting cycle efficiency. Subsequent modules will delve into the specifics of these components.
*   **CO3: To analyse the performance of gas turbine systems by understanding the characteristics of various components. (Knowledge Level: K4)**
    *   This module establishes the overarching framework (the cycle efficiency) within which component performance is analyzed. Understanding how component efficiencies impact the overall cycle is a key aspect of CO3.
*   **CO4: To understand the principles and characteristics of jet and rocket propulsion systems. (Knowledge Level: K2)**
    *   The Brayton cycle is the foundation for jet propulsion. Understanding its efficiency is the first step towards analyzing the performance of jet engines, which will be covered in later modules.