---
title: "optimum expansion ratio"
subject: "GAS TURBINE AND JET PROPULSION"
module: "Module 4: Jet propulsion – Cycles and analysis – Gas turbine engines"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1751d0cf4804463ccc"
status: "completed"
scrapedAt: "2026-05-20T18:14:18.506Z"
---
# GAS TURBINE AND JET PROPULSION

## Module 4: Jet Propulsion – Cycles and Analysis – Gas Turbine Engines

---

## Topic: Optimum Expansion Ratio

---

### 1. Introduction to Expansion Ratio in Gas Turbine Engines

The **expansion ratio (r_p)** in a gas turbine engine is the ratio of the exit pressure to the inlet pressure of the turbine. It essentially indicates how much the working fluid (hot gas) expands as it passes through the turbine.

*   **Definition:** $r_p = \frac{P_{t,exit}}{P_{t,inlet}}$ (This is the expansion ratio across the turbine. In the context of the entire cycle, the overall pressure ratio of the engine is more commonly discussed, which is $P_2/P_1$, where $P_2$ is the compressor exit pressure and $P_1$ is the inlet pressure.)
*   **Importance:** The expansion ratio is a critical parameter that significantly influences the engine's net work output, thermal efficiency, and specific thrust.
*   **Relationship to Turbine Work:** The work done by the turbine is directly related to the expansion process. A higher expansion ratio, in general, leads to more work extraction from the hot gases.

---

### 2. The Ideal Gas Turbine Cycle (Brayton Cycle) and Expansion Ratio

Let's revisit the ideal Brayton cycle to understand the role of pressure ratio, which is directly linked to the expansion process.

*   **Ideal Brayton Cycle Processes:**
    1.  **Isentropic Compression:** Air is compressed from $P_1$ to $P_2$.
    2.  **Isobaric Heat Addition:** Heat is added to the compressed air at constant pressure $P_2$, reaching maximum temperature $T_3$.
    3.  **Isentropic Expansion:** Hot gases expand through the turbine from $P_3$ (effectively $P_2$) to $P_4$ (effectively $P_1$).
    4.  **Isobaric Heat Rejection:** Heat is rejected to the surroundings at constant pressure $P_1$.

*   **Key Pressures:**
    *   $P_1$: Inlet pressure (ambient pressure)
    *   $P_2$: Compressor exit pressure / Turbine inlet pressure
    *   $P_4$: Turbine exit pressure (effectively ambient pressure in the ideal cycle)

*   **Overall Pressure Ratio ($r_p_{overall}$):** Defined as $P_2/P_1$.

*   **Turbine Expansion Ratio ($r_p_{turbine}$):** Defined as $P_3/P_4$. In an ideal cycle where $P_3 = P_2$ and $P_4 = P_1$, the turbine expansion ratio is equal to the overall pressure ratio.

*   **Net Work Output:** $W_{net} = W_{turbine} - W_{compressor}$
    *   $W_{turbine} = c_p (T_3 - T_4)$
    *   $W_{compressor} = c_p (T_2 - T_1)$

*   **Thermal Efficiency ($\eta_{th}$):** $\eta_{th} = \frac{W_{net}}{Q_{in}} = 1 - \frac{Q_{out}}{Q_{in}}$

---

### 3. Factors Influencing Optimum Expansion Ratio

The "optimum expansion ratio" in a practical gas turbine engine refers to the **overall pressure ratio ($r_p_{overall} = P_2/P_1$)** that yields the maximum thermal efficiency or specific work output for a given set of operating conditions and component limitations.

*   **Limiting Factors:**
    *   **Turbine Inlet Temperature ($T_3$):** This is a crucial design parameter, limited by material properties and cooling technologies. Higher $T_3$ allows for higher pressure ratios.
    *   **Compressor Efficiency:** Real compressors are not isentropic, meaning $T_2$ is higher than ideal, increasing compressor work.
    *   **Turbine Efficiency:** Real turbines are not isentropic, meaning $T_4$ is higher than ideal, reducing turbine work.
    *   **Component Pressure Losses:** Pressure drops occur in the combustor and inlet/exhaust ducts, reducing the effective expansion ratio.
    *   **Specific Heat Variations:** $c_p$ and $\gamma$ are not constant over the temperature range, especially at high temperatures.

*   **Trade-offs:**
    *   **Increasing $r_p_{overall}$:**
        *   Increases compressor work.
        *   Increases turbine work (initially).
        *   Increases thermal efficiency (up to a point).
        *   Increases specific thrust for jet engines.
    *   **Excessive $r_p_{overall}$:**
        *   Can lead to compressor stall or surge if not designed properly.
        *   May require a larger and heavier compressor.
        *   Turbine exit temperature might become too low, reducing turbine work and potentially leading to flameout.

---

### 4. Optimum Expansion Ratio for Maximum Thermal Efficiency (Ideal Brayton Cycle)

Let's derive the expression for optimum pressure ratio for maximum thermal efficiency in the ideal Brayton cycle.

*   From isentropic relations:
    *   $T_2 = T_1 (r_p_{overall})^{\frac{\gamma-1}{\gamma}}$
    *   $T_4 = T_3 \left(\frac{1}{r_p_{overall}}\right)^{\frac{\gamma-1}{\gamma}}$

*   Work done per unit mass of air:
    *   $w_c = c_p (T_2 - T_1) = c_p T_1 \left[ (r_p_{overall})^{\frac{\gamma-1}{\gamma}} - 1 \right]$
    *   $w_t = c_p (T_3 - T_4) = c_p T_3 \left[ 1 - \left(\frac{1}{r_p_{overall}}\right)^{\frac{\gamma-1}{\gamma}} \right]$
    *   $w_{net} = w_t - w_c = c_p \left[ T_3 \left(1 - \left(\frac{1}{r_p_{overall}}\right)^{\frac{\gamma-1}{\gamma}}\right) - T_1 \left( (r_p_{overall})^{\frac{\gamma-1}{\gamma}} - 1 \right) \right]$

*   Heat input: $q_{in} = c_p (T_3 - T_2) = c_p [T_3 - T_1 (r_p_{overall})^{\frac{\gamma-1}{\gamma}}]$

*   Thermal Efficiency: $\eta_{th} = \frac{w_{net}}{q_{in}} = \frac{c_p \left[ T_3 \left(1 - \left(\frac{1}{r_p_{overall}}\right)^{\frac{\gamma-1}{\gamma}}\right) - T_1 \left( (r_p_{overall})^{\frac{\gamma-1}{\gamma}} - 1 \right) \right]}{c_p [T_3 - T_1 (r_p_{overall})^{\frac{\gamma-1}{\gamma}}]}$

Let $x = (r_p_{overall})^{\frac{\gamma-1}{\gamma}}$. Then $r_p_{overall} = x^{\frac{\gamma}{\gamma-1}}$.
The efficiency becomes: $\eta_{th} = \frac{T_3(1 - 1/x) - T_1(x - 1)}{T_3 - T_1 x}$

To find the maximum efficiency, we differentiate $\eta_{th}$ with respect to $x$ (or $r_p_{overall}$) and set it to zero.
Differentiating with respect to $x$:
$\frac{d\eta_{th}}{dx} = \frac{[T_3(1/x^2) - T_1] (T_3 - T_1 x) - [T_3(1 - 1/x) - T_1(x - 1)] (-T_1)}{(T_3 - T_1 x)^2} = 0$

Numerator must be zero:
$T_3/x^2 (T_3 - T_1 x) - T_1 (T_3 - T_1 x) + T_1 [T_3(1 - 1/x) - T_1(x - 1)] = 0$
$T_3^2/x^2 - T_1 T_3/x - T_1 T_3 + T_1^2 x + T_1 T_3 - T_1 T_3/x - T_1^2 x + T_1^2 = 0$
$T_3^2/x^2 - 2 T_1 T_3/x + T_1^2 = 0$
Multiply by $x^2$:
$T_3^2 - 2 T_1 T_3 x + T_1^2 x^2 = 0$
$(T_3 - T_1 x)^2 = 0$
$T_3 = T_1 x$

Substitute back $x = (r_p_{overall})^{\frac{\gamma-1}{\gamma}}$:
$T_3 = T_1 (r_p_{overall})^{\frac{\gamma-1}{\gamma}}$
$\frac{T_3}{T_1} = (r_p_{overall})^{\frac{\gamma-1}{\gamma}}$

This condition, $\frac{T_3}{T_1} = (r_p_{overall})^{\frac{\gamma-1}{\gamma}}$, corresponds to the case where the turbine exit temperature ($T_4$) equals the compressor inlet temperature ($T_1$) in the ideal cycle.
$T_4 = T_3 \left(\frac{1}{r_p_{overall}}\right)^{\frac{\gamma-1}{\gamma}} = T_3 \frac{T_1}{T_3} = T_1$.

So, for maximum thermal efficiency in an *ideal* Brayton cycle, the turbine exit temperature should be equal to the ambient inlet temperature.

---

### 5. Optimum Expansion Ratio for Maximum Net Work Output (Ideal Brayton Cycle)

To find the optimum pressure ratio for maximum net work output, we differentiate $w_{net}$ with respect to $x$ and set it to zero.
$w_{net} = c_p [ T_3(1 - 1/x) - T_1(x - 1) ]$

$\frac{dw_{net}}{dx} = c_p [ T_3(1/x^2) - T_1 ] = 0$
$T_3/x^2 = T_1$
$x^2 = T_3/T_1$
$x = \sqrt{T_3/T_1}$

Substitute back $x = (r_p_{overall})^{\frac{\gamma-1}{\gamma}}$:
$(r_p_{overall})^{\frac{\gamma-1}{\gamma}} = \sqrt{\frac{T_3}{T_1}}$
$r_p_{overall} = \left(\frac{T_3}{T_1}\right)^{\frac{\gamma}{2(\gamma-1)}}$

This condition yields the maximum net work output for the ideal Brayton cycle. This pressure ratio is generally higher than that for maximum thermal efficiency.

---

### 6. Optimum Expansion Ratio in Real Gas Turbine Engines

The analysis for real engines is more complex due to:

*   **Component Efficiencies ($\eta_c, \eta_t$):**
    *   Actual compressor work: $w_c = \frac{c_p(T_2' - T_1)}{\eta_c}$ where $T_2'$ is the actual compressor outlet temperature.
    *   Actual turbine work: $w_t = \eta_t c_p (T_3 - T_4')$ where $T_4'$ is the actual turbine outlet temperature.
*   **Pressure Losses ($\Delta P_{combustor}$):** $P_3 < P_2$ and $P_4 < P_1$ (effectively).
*   **Variable Specific Heats:** $c_p$ and $\gamma$ change with temperature.

**General Trend for Real Engines:**

*   **For Maximum Thermal Efficiency:** The optimum pressure ratio is lower than that predicted by the ideal cycle ($T_4=T_1$ condition). This is because compressor inefficiency increases with pressure ratio, and turbine inefficiency reduces the work output at higher pressure ratios.
*   **For Maximum Specific Work Output:** The optimum pressure ratio is also lower than the ideal case, but generally higher than the optimum for thermal efficiency.
*   **For Jet Propulsion (Thrust):** The objective is often to maximize specific thrust ($F_s = F/(\dot{m}_{air} g_0)$) or propulsive efficiency.
    *   Higher pressure ratios generally lead to higher specific thrust because the jet velocity increases.
    *   However, there's an optimum pressure ratio beyond which further increases might not be beneficial due to engine weight, complexity, and component efficiencies.
    *   The optimum pressure ratio for thrust may differ from that for thermal efficiency.

**Graphical Representation (Conceptual):**

*   **Thermal Efficiency vs. Pressure Ratio:** Typically shows a peak at a certain pressure ratio.
*   **Net Work Output vs. Pressure Ratio:** Also shows a peak, usually at a higher pressure ratio than thermal efficiency.
*   **Specific Thrust vs. Pressure Ratio:** Generally increases with pressure ratio, but the rate of increase may diminish, and eventually, other factors might limit further gains.

---

### 7. Factors Determining the "Best" Expansion Ratio for a Specific Application

The choice of the "optimum" expansion ratio is application-dependent and involves balancing competing objectives.

*   **Aircraft Engines (Jet/Turbofan):**
    *   **Specific Thrust:** Crucial for takeoff and acceleration. Higher pressure ratios are generally favored.
    *   **Fuel Efficiency (Specific Fuel Consumption - SFC):** Important for range. Thermal efficiency plays a major role.
    *   **Weight and Size:** Higher pressure ratios often mean heavier and bulkier compressors.
    *   **Operational Envelope:** Must perform across a wide range of altitudes and speeds.
    *   **Cost:** Development and manufacturing costs.

*   **Industrial Gas Turbines (Power Generation/Mechanical Drive):**
    *   **Thermal Efficiency:** Paramount for minimizing fuel costs.
    *   **Reliability and Durability:** Often operate continuously at or near peak power.
    *   **Emissions:** Higher pressure ratios can sometimes influence combustion characteristics and NOx formation.
    *   **Cost of Electricity/Power:** Overall economic viability.

**Example:** Early jet engines operated at relatively low pressure ratios (e.g., 4-6). Modern high-performance turbofan engines operate at pressure ratios of 40:1 and above, thanks to advancements in materials, cooling, and aerodynamic design. This evolution highlights the continuous quest for optimizing the pressure ratio for better performance and efficiency.

---

### 8. Practice Questions and Exercises

**Question 1:**
In an ideal Brayton cycle, the turbine inlet temperature is $1500 K$ and the ambient temperature is $300 K$. What is the pressure ratio for maximum thermal efficiency?
(Assume $\gamma = 1.4$)

**Answer 1:**
For maximum thermal efficiency in an ideal Brayton cycle, $T_3/T_1 = (r_p)^{\frac{\gamma-1}{\gamma}}$.
Given $T_3 = 1500 K$ and $T_1 = 300 K$.
$\frac{T_3}{T_1} = \frac{1500}{300} = 5$.
The exponent $\frac{\gamma-1}{\gamma} = \frac{1.4-1}{1.4} = \frac{0.4}{1.4} = \frac{2}{7} \approx 0.2857$.
So, $5 = (r_p)^{2/7}$.
To find $r_p$, we raise both sides to the power of $7/2$:
$r_p = 5^{7/2} = 5^{3.5}$
$r_p \approx 5^3 \times \sqrt{5} \approx 125 \times 2.236$
$r_p \approx 279.5$

*Self-Correction/Note:* The calculated pressure ratio for maximum efficiency in an ideal cycle can be very high. This indicates that in practical engines, the design is a compromise. Real engine efficiencies prevent such extreme pressure ratios from being optimal.

**Question 2:**
Consider an ideal Brayton cycle with $T_3 = 1500 K$ and $T_1 = 300 K$. What is the pressure ratio for maximum net work output?
(Assume $\gamma = 1.4$)

**Answer 2:**
For maximum net work output in an ideal Brayton cycle, $(r_p)^{\frac{\gamma-1}{\gamma}} = \sqrt{\frac{T_3}{T_1}}$.
We know $\frac{T_3}{T_1} = 5$ and $\frac{\gamma-1}{\gamma} = \frac{2}{7}$.
So, $(r_p)^{2/7} = \sqrt{5} \approx 2.236$.
To find $r_p$, we raise both sides to the power of $7/2$:
$r_p = (\sqrt{5})^{7/2} = (5^{1/2})^{7/2} = 5^{(1/2) \times (7/2)} = 5^{7/4}$
$r_p = 5^{1.75}$
$r_p \approx 5^1 \times 5^{0.75} = 5 \times (5^3)^{1/4} = 5 \times (125)^{1/4}$
$r_p \approx 5 \times 3.34$
$r_p \approx 16.7$

*Comparison:* The pressure ratio for maximum net work output (16.7) is significantly lower than that for maximum thermal efficiency (279.5) in the ideal case. This is a key insight.

**Question 3:**
Explain why the optimum pressure ratio for a real gas turbine engine is generally lower than that predicted for maximum thermal efficiency in an ideal Brayton cycle.

**Answer 3:**
The optimum pressure ratio for a real gas turbine engine is lower than the ideal prediction for maximum thermal efficiency due to several factors:
1.  **Compressor Inefficiencies:** Real compressors have isentropic efficiencies less than 100%. As the pressure ratio increases, the compressor outlet temperature rises faster than in the ideal case ($T_2' > T_2$), leading to a significant increase in compressor work input ($w_c$).
2.  **Turbine Inefficiencies:** Real turbines also have efficiencies less than 100%. This means the actual work output from the turbine ($w_t$) is less than the ideal work. At higher pressure ratios, the turbine operates with cooler gases, and the effects of inefficiency become more pronounced, further reducing the net work output.
3.  **Pressure Losses:** In real engines, there are pressure drops in the combustor and ducting. These losses reduce the effective expansion ratio across the turbine and increase the pressure ratio the compressor must overcome.
4.  **Material Limitations and Cooling:** While high turbine inlet temperatures ($T_3$) are desirable for efficiency, the practical limits of materials and the complexity of cooling systems at very high pressure ratios can constrain the design.
5.  **Specific Heat Variations:** The assumption of constant specific heats ($\gamma$ and $c_p$) breaks down at high temperatures, making the ideal cycle analysis less accurate for very high pressure ratios.

These inefficiencies mean that beyond a certain pressure ratio, the increase in compressor work and the reduction in turbine work (due to its own inefficiency and lower inlet temperatures if not properly managed) outweigh the benefits of higher pressure ratios, leading to a lower overall thermal efficiency than theoretically possible in an ideal cycle.

---

### 9. Key Points to Remember

*   **Expansion Ratio vs. Pressure Ratio:** In the context of the overall gas turbine cycle, the "expansion ratio" is often implicitly referred to as the **overall pressure ratio ($r_p = P_2/P_1$)**.
*   **Ideal Cycle Maximum Efficiency:** Occurs when $T_4 = T_1$.
*   **Ideal Cycle Maximum Net Work:** Occurs at a higher pressure ratio than for maximum efficiency.
*   **Real Engines:** Optimum pressure ratios are lower than ideal due to component inefficiencies, pressure losses, and material limitations.
*   **Application-Specific:** The "best" expansion ratio depends on whether the primary goal is thermal efficiency, specific thrust, or a balance of both.
*   **Advancements:** Modern engines push for higher pressure ratios to improve performance and fuel economy, enabled by technological progress.

---

### 10. Alignment with Course Outcomes

*   **CO1 (Thermodynamics & Fluid Dynamics):** Understanding the Brayton cycle, isentropic relations, and work/efficiency calculations directly applies principles of thermodynamics. The concept of pressure ratio is fundamental to fluid dynamics in turbomachinery. (Knowledge Level: K3)
*   **CO2 (Compressor/Turbine Performance):** Analyzing how pressure ratio affects work input to the compressor and work output from the turbine relates to component performance. (Knowledge Level: K4)
*   **CO3 (Gas Turbine System Analysis):** Understanding the trade-offs and factors influencing the choice of expansion ratio is crucial for analyzing the overall system performance and optimizing it for specific applications. (Knowledge Level: K4)
*   **CO4 (Jet Propulsion):** For jet engines, the pressure ratio is a key determinant of specific thrust and influences propulsive efficiency. This topic directly contributes to understanding jet propulsion characteristics. (Knowledge Level: K2 - foundational understanding of its impact).

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |


### 11. References and Further Reading

*   **Gas Turbines by V Ganesan (McGraw Hill Education, Third, 2017):** Chapters covering the Brayton cycle and its analysis will provide detailed mathematical derivations and discussions on performance parameters.
*   **Turbines, Compressors and Fans by S M Yahya (McGraw Hill, Fourth, 2011):** This book will offer in-depth analysis of compressor and turbine characteristics, which are critical for understanding deviations from ideal cycle behavior and their impact on optimum pressure ratios.
*   **Gas Turbine & Jet Rocket Propulsion by Mathur M L (Standard Publishers Distributors, First, 2010):** This reference is directly relevant for jet propulsion aspects, including how pressure ratio influences thrust and efficiency.
*   **The Jet Engine by Rolls Royce (Wiley, First, 2015):** Provides practical insights into the design and operation of jet engines, including the role of pressure ratio in achieving desired performance.
*   **Gas Turbine Theory by H. Cohen (Pearson Education, Seventh, 2019):** A comprehensive text that delves deeply into the theoretical aspects of gas turbine cycles and component performance, offering advanced analysis of optimization parameters.

---
**(End of Study Notes)**