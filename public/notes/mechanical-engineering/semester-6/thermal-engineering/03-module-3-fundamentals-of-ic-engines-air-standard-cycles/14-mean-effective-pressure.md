---
title: "Mean effective pressure."
subject: "THERMAL ENGINEERING"
module: "Module 3: Fundamentals of IC Engines :  Air standard cycles"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1651d0cf48044639a4"
status: "completed"
scrapedAt: "2026-05-20T18:08:55.667Z"
---
# Thermal Engineering: Module 3 - Fundamentals of IC Engines: Air Standard Cycles

## Topic: Mean Effective Pressure (MEP)

### 1. Introduction and Importance

*   **Definition:** Mean Effective Pressure (MEP) is a conceptual pressure that, if it acted constantly on the piston throughout the power stroke, would produce the same net work output as the actual engine cycle. It's a measure of the engine's ability to produce work per cycle.
*   **Significance:**
    *   **Performance Indicator:** MEP is a crucial parameter for comparing the performance of different IC engines, irrespective of their size or displacement. (Relates to CO3: Identify the performance parameters of IC engines and evaluate their performance.)
    *   **Design Tool:** It helps in engine design by allowing engineers to estimate the required cylinder size for a given power output or vice versa.
    *   **Simplification:** It simplifies the analysis of complex engine cycles by reducing the effect of the entire cycle to a single pressure value.
*   **Textbook References:**
    *   Rudra Moorthy, *Thermal Engineering* (McGraw Hill Education India, 2003) - Likely discusses MEP as a key performance parameter.
    *   R.K Rajput, *Thermal Engineering* (Laxmi publications, 2010) - Will certainly cover MEP in the context of engine performance.
    *   V. Ganesan, *Fundamentals of IC engines* (Tata McGraw-Hill, 2002) - Essential reading for MEP in IC engine context.
    *   H N Gupta, *Fundamentals of IC engines* (PHI, Second Edition, 2018) - Provides updated perspectives on MEP.
    *   V Sajith and Shijo Thomas, *Internal Combustion Engines* (Oxford University Press, 2017) - Offers a modern approach to MEP analysis.
*   **Reference Book References:**
    *   J.B.Heywood, *I.C engine fundamentals* (McGraw-Hill, 2011) - A highly regarded text for in-depth understanding of engine parameters including MEP.
    *   Mahesh Rathore, *Thermal Engineering* (McGraw Hill Education India, 2010) - Likely provides practical applications of MEP.

### 2. Types of Mean Effective Pressure

MEP can be calculated based on different cycle analyses, leading to various types:

#### 2.1. Indicated Mean Effective Pressure ($P_{im}$)

*   **Definition:** The average pressure acting on the piston during the power stroke, calculated from the indicated work output of the engine. Indicated work is the work done by the expanding gases on the piston.
*   **Formula:**
    $$ P_{im} = \frac{\text{Indicated Work per cycle (W_i)}}{\text{Stroke Volume (V_s)}} $$
    Where, $V_s = \frac{\pi}{4} D^2 L$ (D = bore diameter, L = stroke length).
*   **Calculation from Indicator Diagram:**
    *   The indicator diagram (or pressure-volume diagram) plots the instantaneous pressure in the cylinder against the piston displacement.
    *   The area of the indicator diagram represents the indicated work done per cycle.
    *   $P_{im} = \frac{\text{Area of Indicator Diagram}}{\text{Length of Indicator Diagram on the Volume Axis}}$
*   **Relationship to Indicated Power ($P_i$):**
    $$ P_i = P_{im} \times \frac{L \times A_p \times N \times n_c}{60} $$
    Where:
    *   $L$ = Stroke length (m)
    *   $A_p$ = Piston area ($\frac{\pi}{4} D^2$) (m²)
    *   $N$ = Engine speed (RPM)
    *   $n_c$ = Number of cylinders
    *   For 2-stroke engines, the term is $N/60$.
    *   For 4-stroke engines, the term is $N/(2 \times 60)$ (since power is produced every two revolutions).
    *   Simplified for a single cylinder: $P_i = \frac{P_{im} \times V_s \times N}{60}$ (for 2-stroke) or $P_i = \frac{P_{im} \times V_s \times N}{120}$ (for 4-stroke).
*   **Textbook Emphasis:** Ganesan, Rajput, and Heywood will provide detailed derivations and examples of calculating $P_{im}$ from indicator diagrams.

#### 2.2. Brake Mean Effective Pressure ($P_{bm}$ or $P_{me}$)

*   **Definition:** The average pressure acting on the piston that would produce the net work output delivered by the engine at the crankshaft (brake work). Brake work is the net work available after accounting for friction losses.
*   **Formula:**
    $$ P_{bm} = \frac{\text{Brake Work per cycle (W_b)}}{V_s} $$
    Where, $V_s = \frac{\pi}{4} D^2 L$.
*   **Relationship to Brake Power ($P_b$):**
    $$ P_b = P_{bm} \times \frac{L \times A_p \times N \times n_c}{60} $$
    (Similar simplification as for indicated power, depending on stroke cycle and number of cylinders).
    *   Simplified for a single cylinder: $P_b = \frac{P_{bm} \times V_s \times N}{60}$ (for 2-stroke) or $P_b = \frac{P_{bm} \times V_s \times N}{120}$ (for 4-stroke).
*   **Significance:** $P_{bm}$ is the most practical measure of engine performance as it represents the usable power output. (Relates to CO3).

#### 2.3. Relative Mean Effective Pressure ($P_{rm}$)

*   **Definition:** The ratio of brake mean effective pressure to indicated mean effective pressure. It's a measure of mechanical efficiency.
*   **Formula:**
    $$ P_{rm} = \frac{P_{bm}}{P_{im}} $$
*   **Relationship to Mechanical Efficiency ($\eta_m$):**
    $$ \eta_m = \frac{\text{Brake Work}}{\text{Indicated Work}} = \frac{P_{bm} \times V_s}{P_{im} \times V_s} = \frac{P_{bm}}{P_{im}} = P_{rm} $$
    Therefore, $P_{rm} = \eta_m$.
*   **Interpretation:** A higher $P_{rm}$ indicates lower frictional losses within the engine.

### 3. Mean Effective Pressure in Air Standard Cycles

Air standard cycles (like Otto, Diesel, Dual, Atkinson, Miller) are theoretical models that simplify IC engine operation. MEP can be calculated for these ideal cycles to provide a benchmark for real engine performance.

*   **Key Concept:** In air standard cycles, the net work done per cycle is calculated based on the idealized thermodynamic processes. This work is then used to determine the ideal MEP.

#### 3.1. Otto Cycle MEP

*   **Processes:** Isentropic compression, constant volume heat addition, isentropic expansion, constant volume heat rejection.
*   **Indicated Work per cycle ($W_i$):** $W_i = Q_{in} - Q_{out}$
*   **Specific Heat Addition ($q_{in}$):** $q_{in} = c_v (T_3 - T_2)$, where $T_3$ is temperature after heat addition and $T_2$ is temperature after compression.
*   **Specific Heat Rejection ($q_{out}$):** $q_{out} = c_v (T_4 - T_1)$, where $T_4$ is temperature after expansion and $T_1$ is initial temperature.
*   **Net Work per unit mass ($w_{net}$):** $w_{net} = q_{in} - q_{out} = c_v (T_3 - T_2 - T_4 + T_1)$
*   **Relationship to Compression Ratio ($r$):** $T_2 = T_1 r^{(\gamma-1)}$, $T_3 = T_2 \alpha = T_1 r^{(\gamma-1)} \alpha$, $T_4 = T_3 (1/r)^\gamma = T_1 r^{(\gamma-1)} \alpha (1/r)^\gamma = T_1 \alpha r^{(\gamma-1)} r^{-\gamma} = T_1 \alpha r^{-1}$
    Where $\alpha = T_3/T_2$ is the heat addition ratio.
*   **Indicated Mean Effective Pressure ($P_{im}$ for Otto Cycle):**
    $$ P_{im, \text{Otto}} = \frac{w_{net}}{V_s} $$
    The volume swept per cycle ($V_s$) depends on the number of strokes. For a unit mass of air undergoing the cycle in a cylinder of volume $V_1$ at the start of compression, $V_s$ is effectively the clearance volume $V_2$.
    A more practical approach uses specific volumes. The work done per unit mass is $w_{net}$. The work per cycle is $w_{net} \times m$.
    If we consider the engine cylinder, the stroke volume $V_s$ is the volume change during expansion.
    $$ P_{im} = \frac{\text{Net Work per cycle}}{V_s} $$
    For a unit mass of air, let the volume at the start of compression be $v_1$. Then $v_2 = v_1/r$. The change in volume during expansion is $v_3 - v_4$.
    In air standard cycles, it is often convenient to express MEP in terms of specific volume and temperatures.
    $w_{net} = c_v(T_1 - T_2 + T_3 - T_4)$
    Consider the work done per unit mass of air in a cylinder of stroke volume $V_s$. The mass of air in the cylinder is $m = P_1 V_1 / (R T_1)$.
    $V_s = V_1 - V_2 = V_1 (1 - 1/r)$.
    $P_{im} = \frac{w_{net}}{V_s}$ is dimensionally correct.
    **A common expression for Otto cycle MEP (derived from heat addition ratio $\alpha$ and compression ratio $r$):**
    $$ P_{im, \text{Otto}} = \frac{P_1}{(\gamma-1)r^{\gamma-1}} \left[ (\alpha r^{\gamma-1} - 1) - \gamma (\alpha - 1) r^{-1} \right] $$
    *   **Key Takeaway:** MEP for Otto cycle is primarily dependent on the compression ratio ($r$), heat addition ratio ($\alpha$), and specific heat ratio ($\gamma$). Higher $r$ and $\alpha$ generally lead to higher MEP.
*   **Textbook Focus:** Rajput, Ganesan, and Heywood will provide detailed derivations for this formula.

#### 3.2. Diesel Cycle MEP

*   **Processes:** Isentropic compression, constant pressure heat addition, isentropic expansion, constant volume heat rejection.
*   **Specific Heat Addition ($q_{in}$):** $q_{in} = c_p (T_3 - T_2)$, where $T_3$ is temperature after heat addition and $T_2$ is temperature after compression.
*   **Net Work per unit mass ($w_{net}$):** $w_{net} = q_{in} - q_{out} = c_p (T_3 - T_2) - c_v (T_4 - T_1)$
*   **Relationship to Cut-off Ratio ($\rho$) and Compression Ratio ($r$):**
    *   $T_2 = T_1 r^{(\gamma-1)}$
    *   $T_3 = T_2 \rho = T_1 r^{(\gamma-1)} \rho$ (since heat addition is at constant pressure)
    *   $T_4 = T_3 (1/\rho)^\gamma = T_1 r^{(\gamma-1)} \rho (1/\rho)^\gamma = T_1 r^{(\gamma-1)} \rho^{1-\gamma}$
*   **Indicated Mean Effective Pressure ($P_{im}$ for Diesel Cycle):**
    $$ P_{im, \text{Diesel}} = \frac{w_{net}}{V_s} $$
    **A common expression for Diesel cycle MEP (derived from cut-off ratio $\rho$ and compression ratio $r$):**
    $$ P_{im, \text{Diesel}} = \frac{P_1}{\gamma r^{\gamma-1}} \left[ \gamma(\rho-1) + \gamma\rho \ln\rho - (\gamma\rho^{\gamma} - 1) \right] $$
    *   **Key Takeaway:** MEP for Diesel cycle depends on compression ratio ($r$), cut-off ratio ($\rho$), and specific heat ratio ($\gamma$). Increasing $r$ generally increases MEP, while increasing $\rho$ can decrease MEP due to increased heat rejection.
*   **Textbook Focus:** Ganesan, Rajput, and Heywood will detail these derivations.

#### 3.3. Dual Cycle MEP

*   **Processes:** Isentropic compression, constant volume heat addition, constant pressure heat addition, isentropic expansion, constant volume heat rejection.
*   **Indicated Mean Effective Pressure ($P_{im}$ for Dual Cycle):** The derivation is more complex, involving both heat addition at constant volume and constant pressure. The net work is the sum of work from these two phases.
    $$ P_{im, \text{Dual}} = \frac{w_{net}}{V_s} $$
    The net work per cycle is:
    $w_{net} = c_v(T_3 - T_2) + c_p(T_4 - T_3) - c_v(T_5 - T_1)$
    Where $T_2, T_3, T_4, T_5$ are temperatures at different points in the cycle, related by compression ratio, pressure ratio, and cut-off ratio.
    *   **Key Takeaway:** Dual cycle MEP is influenced by compression ratio, pressure ratio (for constant volume heat addition), and cut-off ratio (for constant pressure heat addition). It offers a compromise between Otto and Diesel cycles.

#### 3.4. Importance of Air Standard Cycle MEP for Real Engines

*   **Theoretical Upper Limit:** The MEP calculated for air standard cycles represents an idealized upper bound for the indicated MEP of a real engine operating on a similar cycle.
*   **Design Benchmarking:** It allows engineers to set performance targets and understand the theoretical potential of different engine cycles.
*   **Understanding Influencing Factors:** By analyzing the MEP formulas for different cycles, engineers can identify how parameters like compression ratio, heat addition strategy, and fluid properties affect engine work output. (Relates to CO3).
*   **Limitations:** Real engines deviate significantly from air standard cycles due to:
    *   **Actual Working Fluid:** Air is not the actual working fluid (mixture of fuel and air, then combustion products). Specific heat values are not constant.
    *   **Heat Losses:** Heat is lost to cylinder walls and cooling systems.
    *   **Incomplete Combustion:** Combustion is not instantaneous and complete.
    *   **Friction:** Mechanical friction reduces brake work.
    *   **Gas Exchange Processes:** Intake and exhaust strokes are not ideal and consume work.

### 4. Factors Affecting Mean Effective Pressure

*   **Compression Ratio ($r$):** Higher compression ratios generally lead to higher MEP because they increase thermal efficiency and expand the pressure-volume diagram. (Textbooks like Ganesan, Gupta, Heywood will detail this).
*   **Heat Input/Cut-off Ratio ($\alpha, \rho$):** The amount and way heat is added influences MEP. For Otto cycle, higher heat addition (higher $\alpha$) increases MEP. For Diesel cycle, increasing cut-off ratio ($\rho$) can increase work but may reduce efficiency if it becomes too large.
*   **Specific Heat Ratio ($\gamma$):** A higher $\gamma$ generally increases MEP for both Otto and Diesel cycles.
*   **Engine Speed (N):** While MEP itself is a pressure term independent of speed, the *power output* is directly proportional to MEP and engine speed. However, at very high speeds, volumetric efficiency might decrease, affecting the mass of air inducted, which in turn can affect actual MEP.
*   **Volumetric Efficiency ($\eta_{vol}$):** This is crucial for real engines. It's the ratio of the actual mass of air inducted into the cylinder to the mass of air that would fill the cylinder at ambient conditions. Lower volumetric efficiency reduces the amount of fuel that can be burned, thus reducing MEP. (Heywood, Sajith/Thomas are excellent resources for this).
*   **Fuel-Air Ratio (f):** The optimal fuel-air ratio for maximum power output (stoichiometric or slightly rich) influences MEP.
*   **Combustion Efficiency:** Incomplete combustion reduces the energy released, lowering MEP. (CO4: Explain the combustion phenomenon).
*   **Mechanical Friction:** Affects brake MEP ($P_{bm}$) but not indicated MEP ($P_{im}$).

### 5. Practice Questions and Answers

**Question 1:** Define Mean Effective Pressure (MEP) and explain its significance in IC engine performance analysis. (K3, CO3)

**Answer:**
Mean Effective Pressure (MEP) is a conceptual pressure that, if acting constantly on the piston throughout the power stroke, would produce the same net work output as the actual engine cycle. It is a crucial performance indicator because it quantifies the engine's work-producing capability independent of its size. It allows for the comparison of different engines and aids in engine design by relating power output to cylinder dimensions.

**Question 2:** Differentiate between Indicated Mean Effective Pressure ($P_{im}$) and Brake Mean Effective Pressure ($P_{bm}$). (K3, CO3)

**Answer:**
*   **Indicated Mean Effective Pressure ($P_{im}$):** This is the average pressure acting on the piston calculated from the *indicated work*, which is the work done by the expanding gases on the piston. It is derived from the indicator diagram and represents the work output before accounting for frictional losses.
*   **Brake Mean Effective Pressure ($P_{bm}$):** This is the average pressure acting on the piston calculated from the *brake work*, which is the net work output available at the crankshaft. It accounts for all internal losses, including friction. $P_{bm}$ is always less than $P_{im}$ in a real engine.

**Question 3:** The indicated work per cycle for a single-cylinder, 4-stroke engine is 1500 J, and the stroke volume is 0.0005 m³. Calculate the Indicated Mean Effective Pressure ($P_{im}$). (K4, CO3)

**Answer:**
Given:
Indicated Work per cycle ($W_i$) = 1500 J
Stroke Volume ($V_s$) = 0.0005 m³

Formula for Indicated Mean Effective Pressure:
$P_{im} = \frac{W_i}{V_s}$

Calculation:
$P_{im} = \frac{1500 \text{ J}}{0.0005 \text{ m}^3} = 3,000,000 \text{ Pa} = 3 \text{ MPa}$

So, $P_{im} = 3$ MPa.

**Question 4:** An engine operates on an ideal Otto cycle with a compression ratio of 8:1. The pressure and temperature at the beginning of compression are 100 kPa and 300 K. Heat is added at constant volume such that the maximum temperature in the cycle is 1500 K. Calculate the Indicated Mean Effective Pressure ($P_{im}$) for this cycle. Assume $\gamma = 1.4$ and $c_v = 0.717$ kJ/kg.K. (K4, CO3)
*Assume for simplicity that the volume at the start of compression per unit mass of air is 0.8 m³/kg and the calculation is for this unit mass, where $V_s$ is the difference in specific volumes during expansion.*

**Answer:**
Given:
$r = 8$
$P_1 = 100$ kPa
$T_1 = 300$ K
$T_3 = 1500$ K
$\gamma = 1.4$
$c_v = 0.717$ kJ/kg.K = 0.717 J/kg.K
$v_1 = 0.8$ m³/kg (specific volume at start of compression)

First, calculate temperatures at different points:
$T_2 = T_1 r^{\gamma-1} = 300 \times 8^{(1.4-1)} = 300 \times 8^{0.4} = 300 \times 2.297 = 689.1$ K
The heat addition is from state 2 to state 3.
$q_{in} = c_v (T_3 - T_2) = 0.717 \times (1500 - 689.1) = 0.717 \times 810.9 = 581.7$ J/kg
Process 3-4 is isentropic expansion.
$T_4 = T_3 (1/r)^\gamma = 1500 \times (1/8)^{1.4} = 1500 \times (0.125)^{1.4} = 1500 \times 0.0544 = 81.6$ K
Process 4-1 is constant volume heat rejection.
$q_{out} = c_v (T_4 - T_1) = 0.717 \times (81.6 - 300) = 0.717 \times (-218.4) = -156.6$ J/kg (Heat rejected is positive value)

Net work per unit mass ($w_{net}$):
$w_{net} = q_{in} - |q_{out}| = 581.7 - 156.6 = 425.1$ J/kg

Now, calculate the stroke volume per unit mass. For Otto cycle, the expansion ratio is the same as compression ratio.
$v_2 = v_1 / r = 0.8 / 8 = 0.1$ m³/kg
Stroke Volume per unit mass ($V_s$ in this context, as specific volume difference) = $v_1 - v_2 = 0.8 - 0.1 = 0.7$ m³/kg

Indicated Mean Effective Pressure ($P_{im}$):
$P_{im} = \frac{w_{net}}{V_s} = \frac{425.1 \text{ J/kg}}{0.7 \text{ m³/kg}} = 607.3 \text{ J/m³} = 607.3 \text{ Pa}$

To convert to kPa: $P_{im} = 0.6073$ kPa.

*Note: If the question implies cylinder dimensions, then $V_s = \frac{\pi}{4}D^2L$. For air standard cycles, the work per unit mass is often used, and the MEP is calculated as work per unit mass divided by the specific volume swept. However, the standard approach is to relate the work per cycle to the geometric stroke volume. If we assume the volume swept per cycle corresponds to a specific volume difference for a unit mass, the above calculation is valid for that unit mass.*

**Alternative, more standard MEP calculation for Otto Cycle using formula:**
$P_{im, \text{Otto}} = \frac{P_1}{(\gamma-1)r^{\gamma-1}} \left[ (\alpha r^{\gamma-1} - 1) - \gamma (\alpha - 1) r^{-1} \right]$
First, find $\alpha = T_3/T_2 = 1500 / 689.1 = 2.177$

$P_{im, \text{Otto}} = \frac{100 \times 10^3}{(\color{red}{1.4}\color{black}{-1})(8)^{\color{red}{1.4}\color{black}{-1}}} \left[ (2.177 \times 8^{\color{red}{0.4}} - 1) - \color{red}{1.4} \times (2.177 - 1) \times 8^{-1} \right]$
$P_{im, \text{Otto}} = \frac{100 \times 10^3}{0.4 \times 2.297} \left[ (2.177 \times 2.297 - 1) - 1.4 \times 1.177 \times 0.125 \right]$
$P_{im, \text{Otto}} = \frac{100 \times 10^3}{0.9188} \left[ (5.000 - 1) - 0.206 \right]$
$P_{im, \text{Otto}} = 108835 \left[ 4.000 - 0.206 \right] = 108835 \times 3.794 = 412898$ Pa
$P_{im, \text{Otto}} = 412.9$ kPa

*The difference in answers highlights the importance of careful interpretation of "stroke volume" in air standard cycle calculations. The formula-based approach usually provides the standard MEP.*

**Question 5:** List at least three factors (other than compression ratio) that affect the Brake Mean Effective Pressure ($P_{bm}$) of a real IC engine. (K3, CO3)

**Answer:**
1.  **Volumetric Efficiency:** The amount of air-fuel mixture drawn into the cylinder.
2.  **Combustion Efficiency:** How completely and effectively the fuel is burned.
3.  **Mechanical Efficiency (or Friction):** Engine friction reduces the indicated work to brake work.

### 6. Important Points to Remember

*   MEP is a measure of the engine's performance independent of its size.
*   $P_{im}$ is based on indicated work, while $P_{bm}$ is based on brake work.
*   $P_{bm} \le P_{im}$ in real engines.
*   $P_{rm} = P_{bm}/P_{im} = \eta_m$ (Mechanical Efficiency).
*   Air standard cycle MEP provides a theoretical benchmark.
*   Key parameters affecting air standard cycle MEP are compression ratio ($r$), heat addition strategy ( $\alpha$ or $\rho$), and specific heat ratio ($\gamma$).
*   For real engines, volumetric efficiency, combustion efficiency, and friction are crucial factors influencing $P_{bm}$.
*   MEP is directly proportional to engine power for a given engine speed and displacement.

### 7. Alignment with Course Outcomes

*   **CO1 (Apply basic thermodynamic principles... steam power cycles):** While this module focuses on IC engines, the understanding of thermodynamic cycles and work calculation is transferable.
*   **CO3 (Identify performance parameters of IC engines and evaluate their performance):** This topic directly addresses CO3 by defining and explaining MEP as a key performance parameter and providing methods to evaluate it through air standard cycles and real-world considerations.
*   **CO4 (Explain combustion phenomenon...):** Factors like combustion efficiency directly relate to this outcome, as efficient combustion is vital for achieving higher MEP.

### 8. Conclusion

Mean Effective Pressure is a vital parameter for understanding and comparing the performance of IC engines. By analyzing it through air standard cycles, we gain insights into the theoretical potential and the influence of key design parameters. However, it's crucial to remember the limitations of these ideal cycles and consider real-world factors like volumetric efficiency and combustion quality when evaluating the actual performance of an engine.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
