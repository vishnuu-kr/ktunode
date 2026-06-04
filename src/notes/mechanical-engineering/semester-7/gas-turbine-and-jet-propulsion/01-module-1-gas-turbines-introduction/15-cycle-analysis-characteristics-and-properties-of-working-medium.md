---
title: "Cycle Analysis - Characteristics and properties of working medium"
subject: "GAS TURBINE AND JET PROPULSION"
module: "Module 1: Gas Turbines – Introduction"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1751d0cf4804463c99"
status: "completed"
scrapedAt: "2026-05-20T18:13:44.252Z"
---
# Gas Turbine and Jet Propulsion: Module 1 - Introduction

## Topic: Cycle Analysis - Characteristics and Properties of Working Medium

This module introduces the fundamental principles of gas turbines, focusing on the working medium used in their thermodynamic cycles. Understanding the characteristics and properties of this medium is crucial for analyzing and predicting the performance of gas turbine engines.

### 1. Introduction to Gas Turbine Cycles

*   **Definition:** A gas turbine is a type of internal combustion engine that uses a continuous combustion process to produce rotational power. It's a prime mover for electricity generation, aircraft propulsion, and industrial applications.
*   **Fundamental Cycle:** The most basic gas turbine cycle is the **Brayton Cycle**. This is an idealized thermodynamic cycle consisting of four main processes:
    1.  **Isentropic Compression:** Air is compressed.
    2.  **Constant Pressure Heat Addition:** Fuel is burned, adding heat to the compressed air.
    3.  **Isentropic Expansion:** The hot, high-pressure gas expands through a turbine, producing work.
    4.  **Constant Pressure Heat Rejection:** The exhaust gases are cooled.
*   **Relevance to Course Outcomes:** This section directly addresses **CO1** by introducing the thermodynamic principles of gas turbine cycles, which is foundational for applying them to analyze performance and efficiency. It also lays the groundwork for **CO3** by introducing the core components of a gas turbine system.

### 2. The Working Medium in Gas Turbine Cycles

The working fluid in a gas turbine is primarily air and the products of combustion (hot gases). Its behavior and properties significantly influence the cycle's performance.

#### 2.1 Characteristics of Air and Combustion Products

*   **Nature of the Fluid:**
    *   **Primarily Air:** In the compressor and before combustion, the working fluid is essentially air.
    *   **Combustion Products:** After combustion, the working fluid is a mixture of combustion products (mainly nitrogen, carbon dioxide, and water vapor) and excess air.
*   **Ideal Gas Behavior:** For many practical analyses, air and combustion products are treated as **ideal gases**. This assumption simplifies calculations but has limitations under extreme conditions.
    *   **Ideal Gas Law:** $PV = mRT$ or $P = \rho RT$
        *   $P$: Pressure
        *   $V$: Volume
        *   $m$: Mass
        *   $R$: Specific gas constant for the working fluid
        *   $T$: Absolute temperature
        *   $\rho$: Density
*   **Reference:**
    *   **Ganesan (Chapter 1):** Discusses the fundamental principles and the nature of the working fluid, often treating it as an ideal gas for initial cycle analysis.
    *   **Yahya (Chapter 1):** Also covers the working medium, emphasizing its gaseous state and properties.

#### 2.2 Properties of the Working Medium

The key thermodynamic properties that dictate the performance of a gas turbine cycle are:

*   **Specific Heat Capacity ($c_p$, $c_v$):**
    *   **Definition:** The amount of heat required to raise the temperature of a unit mass of a substance by one degree Celsius (or Kelvin).
    *   **Significance:** Higher specific heat capacity means more energy is absorbed or released for a given temperature change, impacting heat addition and rejection.
    *   **Variation with Temperature:**
        *   **Constant Specific Heats (Ideal Gas Assumption):** For simplicity, $c_p$ and $c_v$ are often assumed to be constant across the cycle. This is a reasonable assumption for small temperature ranges.
        *   **Variable Specific Heats:** In reality, $c_p$ and $c_v$ increase with temperature, especially at higher temperatures encountered in gas turbines. This means the actual work output and efficiency will differ from calculations using constant specific heats.
        *   **Temperature Dependence:** $c_p = f(T)$, $c_v = g(T)$
    *   **Relationship:** $c_p - c_v = R$ (for ideal gases)
    *   **Specific Heat Ratio ($\gamma$ or $k$):** $\gamma = c_p / c_v$
        *   **Significance:** $\gamma$ is crucial for analyzing adiabatic processes (isentropic compression and expansion).
        *   **Values:** For air, $\gamma \approx 1.4$ at room temperature, but it decreases slightly with increasing temperature. For combustion products, it can vary depending on the composition (e.g., water vapor content).
*   **Gas Constant ($R$):**
    *   **Definition:** The specific gas constant for a mixture of gases is calculated based on the molar masses and mass fractions of the constituents.
    *   **Significance:** Directly influences the relationship between pressure, volume, and temperature (Ideal Gas Law).
    *   **For Air:** $R_{air} \approx 287 \, J/kg \cdot K$
    *   **For Combustion Products:** The gas constant changes due to the presence of $\text{CO}_2$ and $\text{H}_2\text{O}$, which have different molar masses than nitrogen and oxygen. This change in $R$ affects the cycle's performance.
*   **Enthalpy ($h$):**
    *   **Definition:** A thermodynamic property representing the total heat content of a system. $h = u + Pv$ (where $u$ is internal energy).
    *   **Significance:** Enthalpy changes are directly related to heat transfer in processes at constant pressure (heat addition and rejection) and work done during expansion.
    *   **For ideal gases with constant specific heat:** $\Delta h = c_p \Delta T$
    *   **For ideal gases with variable specific heat:** $\Delta h = \int_{T_1}^{T_2} c_p(T) dT$
*   **Internal Energy ($u$):**
    *   **Definition:** The energy possessed by a substance due to its molecular motion and configuration.
    *   **Significance:** For ideal gases, internal energy depends only on temperature.
    *   **For ideal gases with constant specific heat:** $\Delta u = c_v \Delta T$

#### 2.3 Impact of Working Medium Properties on Cycle Performance (CO1, CO3)

*   **Specific Heat Ratio ($\gamma$):**
    *   **Compression/Expansion Efficiency:** A higher $\gamma$ leads to a greater pressure ratio for a given temperature ratio during isentropic processes. It also affects the work done by the compressor and the turbine.
    *   **Brayton Cycle Efficiency (Ideal, constant $\gamma$):** $\eta_{th} = 1 - \frac{1}{(r_p)^{(\gamma-1)/\gamma}}$, where $r_p$ is the pressure ratio. A higher $\gamma$ increases the thermal efficiency.
*   **Specific Heat Capacity ($c_p$):**
    *   **Heat Addition:** A higher $c_p$ of the combustion products means more heat needs to be added for a given temperature rise in the combustor.
    *   **Work Output:** The work output of the turbine is directly proportional to the specific heat capacity of the expanding gas.
*   **Gas Constant ($R$):**
    *   **Pressure-Volume-Temperature Relationships:** Affects how pressure changes with temperature and volume.
    *   **Work Calculations:** Changes in $R$ for combustion products affect the work done in the compressor and turbine.

#### 2.4 Practical Considerations and Deviations from Ideal Behavior

*   **Variable Specific Heats:** As mentioned, assuming constant specific heats can lead to significant errors at high temperatures.
    *   **Approach:** Using polynomial expressions for $c_p$ as a function of temperature or using tabulated property data (e.g., from Mollier charts or tables of thermodynamic properties of air and combustion gases) provides more accurate results.
    *   **Reference:** **Cohen (Chapter 2):** Provides detailed methods for handling variable specific heats and discusses empirical relations for $c_p$ and $\gamma$ as functions of temperature.
*   **Real Gas Effects:** At very high pressures and near phase changes (though less common in typical gas turbine operation), real gas effects can become significant. The ideal gas law breaks down.
*   **Combustion Products Composition:** The presence of $\text{CO}_2$ and $\text{H}_2\text{O}$ in the exhaust gases changes the values of $c_p$, $c_v$, $\gamma$, and $R$ compared to pure air.
    *   **Effect of Water Vapor:** Water vapor has a higher specific heat than nitrogen or oxygen, which generally reduces the specific work output of the turbine but can affect the overall cycle efficiency depending on other factors.

### 3. Key Concepts and Definitions Summary

*   **Brayton Cycle:** The fundamental thermodynamic cycle of a gas turbine.
*   **Isentropic Process:** A reversible adiabatic process where entropy remains constant.
*   **Specific Heat Capacity ($c_p$, $c_v$):** Heat required per unit mass per unit temperature change.
*   **Specific Heat Ratio ($\gamma$):** Ratio of $c_p$ to $c_v$.
*   **Gas Constant ($R$):** Specific gas constant for a substance.
*   **Enthalpy ($h$):** Total heat content of a system.
*   **Internal Energy ($u$):** Energy due to molecular motion.
*   **Ideal Gas Law:** $PV = mRT$.

### 4. Practice Questions and Exercises

**Question 1:**
A simple gas turbine operates on an ideal Brayton cycle with air as the working fluid. The air enters the compressor at $1$ atm and $27^\circ\text{C}$ and is compressed to $5$ atm. The maximum temperature in the cycle is $1000^\circ\text{C}$.
Assuming constant specific heats ($c_p = 1.005 \, \text{kJ/kg} \cdot \text{K}$, $c_v = 0.718 \, \text{kJ/kg} \cdot \text{K}$, $\gamma = 1.4$), calculate:
a) The net work output per unit mass.
b) The thermal efficiency of the cycle.

**Solution 1:**
**Given:**
$P_1 = 1 \, \text{atm} = 1.01325 \times 10^5 \, \text{Pa}$
$T_1 = 27^\circ\text{C} = 300.15 \, \text{K}$
$P_2/P_1 = 5$ (Pressure ratio, $r_p$)
$T_3 = 1000^\circ\text{C} = 1273.15 \, \text{K}$
$c_p = 1.005 \, \text{kJ/kg} \cdot \text{K}$
$c_v = 0.718 \, \text{kJ/kg} \cdot \text{K}$
$\gamma = 1.4$
$R = c_p - c_v = 1.005 - 0.718 = 0.287 \, \text{kJ/kg} \cdot \text{K} = 287 \, \text{J/kg} \cdot \text{K}$

**Calculations:**
*   **Process 1-2: Isentropic Compression**
    $T_2 = T_1 \left(\frac{P_2}{P_1}\right)^{(\gamma-1)/\gamma}$
    $T_2 = 300.15 \, \text{K} \times (5)^{(1.4-1)/1.4} = 300.15 \times (5)^{0.4/1.4} = 300.15 \times 5^{0.2857} \approx 300.15 \times 1.55 \approx 465.2 \, \text{K}$

*   **Work input to compressor ($w_c$):**
    $w_c = c_p (T_2 - T_1) = 1.005 \, \text{kJ/kg} \cdot \text{K} \times (465.2 - 300.15) \, \text{K} = 1.005 \times 165.05 \approx 165.9 \, \text{kJ/kg}$
    (Note: Work input is positive here, often denoted as negative work output).

*   **Process 3-4: Isentropic Expansion**
    $T_4 = T_3 \left(\frac{P_4}{P_3}\right)^{(\gamma-1)/\gamma}$
    Since heat is added at constant pressure, $P_4 = P_1$ and $P_3 = P_2$. So, $P_4/P_3 = P_1/P_2 = 1/5$.
    $T_4 = 1273.15 \, \text{K} \times (1/5)^{(1.4-1)/1.4} = 1273.15 \times (0.2)^{0.2857} \approx 1273.15 \times 0.645 \approx 821.2 \, \text{K}$

*   **Work output from turbine ($w_t$):**
    $w_t = c_p (T_3 - T_4) = 1.005 \, \text{kJ/kg} \cdot \text{K} \times (1273.15 - 821.2) \, \text{K} = 1.005 \times 451.95 \approx 454.2 \, \text{kJ/kg}$

*   **Net work output ($w_{net}$):**
    $w_{net} = w_t - w_c = 454.2 - 165.9 \approx 288.3 \, \text{kJ/kg}$

*   **Thermal efficiency ($\eta_{th}$):**
    $\eta_{th} = \frac{w_{net}}{q_{in}} = \frac{w_{net}}{c_p (T_3 - T_2)}$
    $q_{in} = c_p (T_3 - T_2) = 1.005 \, \text{kJ/kg} \cdot \text{K} \times (1273.15 - 465.2) \, \text{K} = 1.005 \times 807.95 \approx 812.0 \, \text{kJ/kg}$
    $\eta_{th} = \frac{288.3}{812.0} \approx 0.355$ or $35.5\%$

**Answer:**
a) The net work output per unit mass is approximately **288.3 kJ/kg**.
b) The thermal efficiency of the cycle is approximately **35.5%**.

**Question 2:**
Discuss the effect of increasing the specific heat ratio ($\gamma$) of the working fluid on the thermal efficiency of an ideal Brayton cycle, assuming a constant maximum temperature and inlet conditions.

**Solution 2:**
The thermal efficiency of an ideal Brayton cycle with constant specific heats is given by:
$\eta_{th} = 1 - \frac{1}{(r_p)^{(\gamma-1)/\gamma}}$
where $r_p$ is the pressure ratio.

Let's analyze the exponent: $E = (\gamma-1)/\gamma = 1 - 1/\gamma$.
*   As $\gamma$ increases, $1/\gamma$ decreases.
*   Therefore, $E = 1 - 1/\gamma$ increases.
*   As $E$ increases, $(r_p)^E$ increases (assuming $r_p > 1$).
*   This means $1/(r_p)^E$ decreases.
*   Consequently, $\eta_{th} = 1 - (\text{a decreasing term})$ increases.

**Conclusion:** Increasing the specific heat ratio ($\gamma$) of the working fluid leads to an **increase** in the thermal efficiency of an ideal Brayton cycle, provided the pressure ratio and maximum temperature are held constant. This is because a higher $\gamma$ indicates a greater difference between $c_p$ and $c_v$, which is advantageous for the expansion process in the turbine relative to the compression process in the compressor.

---

### 5. Important Points to Remember

*   **Ideal Gas Assumption:** While useful, remember that real gases, especially combustion products, deviate from ideal gas behavior, particularly at higher temperatures.
*   **Variable Specific Heats:** For accurate analysis of high-temperature gas turbines, accounting for the variation of $c_p$, $c_v$, and $\gamma$ with temperature is crucial.
*   **Composition of Working Medium:** The presence of combustion products ($\text{CO}_2$, $\text{H}_2\text{O}$) alters the thermodynamic properties ($R$, $c_p$, $\gamma$) of the working fluid compared to pure air.
*   **Effect of $\gamma$:** Higher $\gamma$ generally improves the efficiency of the ideal Brayton cycle.
*   **Role of $R$:** The gas constant is fundamental to the ideal gas law and affects work and heat transfer calculations.

### 6. Alignment with Course Outcomes

*   **CO1 (Apply principles of thermodynamics and fluid dynamics to understand performance and efficiency):** This topic directly lays the foundation for CO1 by defining the working medium and its properties, which are essential for thermodynamic cycle analysis. Understanding $c_p$, $c_v$, $\gamma$, and $R$ is fundamental to calculating work, heat transfer, and efficiency.
*   **CO3 (Analyze performance of gas turbine systems by understanding characteristics of various components):** While this topic focuses on the working medium, its properties directly influence the performance of the compressor and turbine (the primary components of a gas turbine). Understanding how these properties change affects how we analyze component performance.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


### 7. References

*   **Ganesan, V.** *Gas Turbines*. Third Edition. McGraw Hill Education, 2017. (Chapters on fundamental cycles and working fluids)
*   **Yahya, S. M.** *Turbines, Compressors and Fans*. Fourth Edition. McGraw Hill, 2011. (Chapters on working fluids and basic gas turbine principles)
*   **Mathur, M. L.** *Gas Turbine & Jet Rocket Propulsion*. First Edition. Standard Publishers Distributors, 2010. (Initial chapters on basic cycles and working fluids)
*   **Cohen, H.** *Gas Turbine Theory*. Seventh Edition. Pearson Education, 2019. (Detailed discussion on variable specific heats and properties of combustion gases)

---