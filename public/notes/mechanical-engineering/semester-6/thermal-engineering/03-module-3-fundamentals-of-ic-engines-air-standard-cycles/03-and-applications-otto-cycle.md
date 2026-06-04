---
title: "and
applications - Otto cycle"
subject: "THERMAL ENGINEERING"
module: "Module 3: Fundamentals of IC Engines :  Air standard cycles"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1651d0cf4804463999"
status: "completed"
scrapedAt: "2026-05-20T18:08:48.000Z"
---
# Thermal Engineering: Module 3 - Fundamentals of IC Engines: Air Standard Cycles - Otto Cycle

This module delves into the fundamental principles governing the operation of Internal Combustion (IC) Engines, focusing on idealized thermodynamic cycles. We will specifically explore the **Otto Cycle**, a cornerstone for understanding spark-ignition engines.

---

## Learning Outcomes Covered:

By the end of this module, you will be able to:

*   Understand the concept of air-standard cycles and their importance in IC engine analysis.
*   Define and explain the processes involved in the Otto cycle.
*   Derive the expressions for thermal efficiency and mean effective pressure for the Otto cycle.
*   Analyze the effect of compression ratio and cut-off ratio on Otto cycle performance.
*   Compare the Otto cycle with other air-standard cycles (briefly introduced in later sections, but the foundation is laid here).
*   Understand the practical applications and limitations of the Otto cycle.
*   Relate the Otto cycle analysis to the performance of actual spark-ignition engines.

---

## CO Alignment:

This module primarily contributes to **CO3: Identify the performance parameters of IC engines and evaluate their performance.** (Knowledge Level: K3). The Otto cycle analysis provides the theoretical basis for evaluating the performance of spark-ignition engines by calculating parameters like thermal efficiency and mean effective pressure.

---

## 1. Introduction to Air-Standard Cycles

### 1.1 What are Air-Standard Cycles?

*   **Definition:** Air-standard cycles are idealized thermodynamic cycles used to analyze the performance of IC engines. They simplify the complex processes occurring in real engines by making several assumptions.
*   **Purpose:** They provide a theoretical benchmark against which the performance of actual engines can be compared. This helps in understanding the factors that limit engine efficiency and identifying areas for improvement.

### 1.2 Assumptions of Air-Standard Cycles:

The following assumptions are made for air-standard cycles:

1.  **Working Fluid:** The working fluid is assumed to be air, which behaves as an ideal gas throughout the cycle.
2.  **Specific Heats:** The specific heats of air ($c_v$ and $c_p$) are assumed to be constant and independent of temperature. (Note: In more advanced analyses, these are considered variable, but for basic air-standard cycles, they are constant).
3.  **Heat Addition & Rejection:** Heat is added to and rejected from the system instantaneously at constant volume or constant pressure.
4.  **Combustion:** Combustion is replaced by heat addition, and exhaust by heat rejection.
5.  **Reversibility:** All processes are assumed to be internally reversible (e.g., no friction, no heat loss to surroundings during processes).
6.  **No Chemical Changes:** No chemical reactions (combustion) occur. The working fluid remains air.

**Important Point:** These assumptions make the analysis simpler but also lead to deviations from the performance of actual engines. Real engines involve variable specific heats, heat losses, friction, incomplete combustion, and finite-rate heat transfer.

**Textbook Reference:** Rudra Moorthy, Chapter 9, Section 9.1 "Air Standard Cycles"; Rajput, Chapter 12, Section 12.1 "Air Standard Cycles".

---

## 2. The Otto Cycle

The Otto cycle is the theoretical cycle that represents the operation of a **spark-ignition (SI) engine**, commonly known as a petrol engine. It was proposed by Nikolaus Otto.

### 2.1 Processes of the Ideal Otto Cycle:

The Otto cycle consists of four reversible processes:

| Process | Description                        | Type of Process         | State Change       | Heat Transfer |
| :------ | :--------------------------------- | :---------------------- | :----------------- | :------------ |
| 1-2     | Isentropic Compression             | Reversible Adiabatic    | $V \uparrow, P \uparrow, T \uparrow$ | $Q=0$         |
| 2-3     | Constant Volume Heat Addition      | Isochoric               | $P \uparrow, T \uparrow$       | $Q_{in} > 0$  |
| 3-4     | Isentropic Expansion (Exhaust)     | Reversible Adiabatic    | $V \uparrow, P \downarrow, T \downarrow$ | $Q=0$         |
| 4-1     | Constant Volume Heat Rejection     | Isochoric               | $P \downarrow, T \downarrow$       | $Q_{out} < 0$ |

**Visual Representation (P-V and T-S Diagrams):**

*   **P-V Diagram:**
    *   A curve from 1 to 2 (isentropic compression).
    *   A vertical line from 2 to 3 (constant volume heat addition).
    *   A curve from 3 to 4 (isentropic expansion).
    *   A vertical line from 4 to 1 (constant volume heat rejection).

*   **T-S Diagram:**
    *   A curve from 1 to 2 (isentropic compression).
    *   A horizontal line from 2 to 3 (constant temperature heat addition - *Correction: This is incorrect for a T-S diagram of the Otto cycle. It should be a line of increasing temperature at constant entropy, with heat added.* The T-S diagram shows entropy change during heat addition/rejection. For constant volume heat addition, the entropy increases. For constant volume heat rejection, the entropy decreases.)
    *   A curve from 3 to 4 (isentropic expansion).
    *   A horizontal line from 4 to 1 (constant temperature heat rejection - *Correction: Similar to above, it should be a line of decreasing temperature at constant entropy, with heat rejected.*)

**Key Concept:** The area enclosed by the cycle on the P-V diagram represents the net work done per cycle.

**Textbook Reference:** Ganesan, Chapter 3, Section 3.2 "Otto Cycle"; Rajput, Chapter 12, Section 12.2 "Otto Cycle".

---

### 2.2 Analysis of the Otto Cycle (with Constant Specific Heats):

Let:
*   $T_1, P_1, V_1$ be the initial state.
*   $T_2, P_2, V_2$ be the state after compression.
*   $T_3, P_3, V_3$ be the state after heat addition.
*   $T_4, P_4, V_4$ be the state after expansion.

**Compression Ratio (r):**
*   **Definition:** The ratio of the volume at the beginning of compression to the volume at the end of compression.
*   **Formula:** $r = \frac{V_1}{V_2} = \frac{V_4}{V_3}$
*   **Significance:** A higher compression ratio generally leads to higher thermal efficiency.

**Processes Breakdown:**

*   **Process 1-2 (Isentropic Compression):**
    *   $T_1V_1^{\gamma-1} = T_2V_2^{\gamma-1} \implies T_2 = T_1 \left(\frac{V_1}{V_2}\right)^{\gamma-1} = T_1 r^{\gamma-1}$
    *   $\frac{P_2}{P_1} = \left(\frac{V_1}{V_2}\right)^{\gamma} = r^{\gamma}$

*   **Process 2-3 (Constant Volume Heat Addition):**
    *   $Q_{in} = m c_v (T_3 - T_2)$
    *   $\frac{T_3}{T_2} = \frac{P_3}{P_2}$ (from ideal gas law, $PV=mRT$, with $V$ constant)

*   **Process 3-4 (Isentropic Expansion):**
    *   $T_3V_3^{\gamma-1} = T_4V_4^{\gamma-1} \implies T_4 = T_3 \left(\frac{V_3}{V_4}\right)^{\gamma-1} = T_3 \left(\frac{1}{r}\right)^{\gamma-1}$
    *   $\frac{P_3}{P_4} = \left(\frac{V_4}{V_3}\right)^{\gamma} = r^{\gamma}$

*   **Process 4-1 (Constant Volume Heat Rejection):**
    *   $Q_{out} = m c_v (T_4 - T_1)$
    *   $\frac{T_4}{T_1} = \frac{P_4}{P_1}$

### 2.3 Thermal Efficiency of the Otto Cycle ($\eta_{th}$):

*   **Definition:** The ratio of net work done to the heat supplied.
*   **Formula:** $\eta_{th} = \frac{W_{net}}{Q_{in}} = \frac{Q_{in} - Q_{out}}{Q_{in}} = 1 - \frac{Q_{out}}{Q_{in}}$

Substituting the expressions for $Q_{in}$ and $Q_{out}$:
$\eta_{th} = 1 - \frac{m c_v (T_4 - T_1)}{m c_v (T_3 - T_2)} = 1 - \frac{T_4 - T_1}{T_3 - T_2}$

Now, let's express $T_2$ and $T_4$ in terms of $T_1$ and $T_3$ using the compression ratio $r$:
*   $T_2 = T_1 r^{\gamma-1}$
*   $T_4 = T_3 \left(\frac{1}{r}\right)^{\gamma-1}$

Substitute these into the efficiency equation:
$\eta_{th} = 1 - \frac{T_3 (1/r)^{\gamma-1} - T_1}{T_3 - T_1 r^{\gamma-1}}$

To simplify, divide the numerator and denominator by $T_1$:
$\eta_{th} = 1 - \frac{(T_3/T_1) (1/r)^{\gamma-1} - 1}{(T_3/T_1) - r^{\gamma-1}}$

Let the temperature ratio across heat addition be $\theta = \frac{T_3}{T_2}$. Then $T_3 = \theta T_2 = \theta T_1 r^{\gamma-1}$.
Substituting $T_3/T_1 = \theta r^{\gamma-1}$:
$\eta_{th} = 1 - \frac{(\theta r^{\gamma-1}) (1/r)^{\gamma-1} - 1}{\theta r^{\gamma-1} - r^{\gamma-1}} = 1 - \frac{\theta - 1}{(\theta - 1) r^{\gamma-1}}$
$\eta_{th} = 1 - \frac{1}{r^{\gamma-1}}$

**Final Formula for Thermal Efficiency:**
$\boxed{\eta_{th, Otto} = 1 - \frac{1}{r^{\gamma-1}}}$

**Key Observation:** The thermal efficiency of the ideal Otto cycle depends only on the **compression ratio (r)** and the **adiabatic index ($\gamma$)** of the working fluid. It is independent of the heat added or rejected.

**Important Point:** For a fixed $\gamma$, increasing the compression ratio $r$ increases the thermal efficiency of the Otto cycle.

**Textbook Reference:** Rudra Moorthy, Chapter 9, Section 9.3 "Otto Cycle Analysis"; Rajput, Chapter 12, Section 12.3 "Efficiency of the Otto Cycle".

---

### 2.4 Mean Effective Pressure ($P_m$)

*   **Definition:** The hypothetical constant pressure that, if applied to the piston throughout the power stroke, would produce the same net work as the actual cycle.
*   **Formula:** $W_{net} = P_m \times V_{displacement}$
    *   $V_{displacement} = V_1 - V_2 = V_1 \left(1 - \frac{1}{r}\right)$

The net work done can also be expressed as $W_{net} = Q_{in} - Q_{out}$.
$W_{net} = m c_v (T_3 - T_2) - m c_v (T_4 - T_1)$
$W_{net} = m c_v [(T_3 - T_2) - (T_4 - T_1)]$

So, $P_m = \frac{W_{net}}{V_1 - V_2} = \frac{m c_v [(T_3 - T_2) - (T_4 - T_1)]}{V_1 (1 - 1/r)}$

Using $V_1 = mRT_1/P_1$, $V_2 = mRT_2/P_2$, etc. and substituting the temperature relations derived earlier:
$P_m = \frac{P_1}{r-1} \left[ \frac{\gamma-1}{2} \left( (\frac{P_3}{P_1}) - (\frac{P_2}{P_1}) \right) + (\frac{P_3}{P_1}) - (\frac{P_4}{P_1}) \right]$

A more commonly used simplified expression for Mean Effective Pressure can be derived:
$P_m = \frac{W_{net}}{V_1-V_2} = \frac{Q_{in} - Q_{out}}{V_1(1 - 1/r)}$
$P_m = \frac{mc_v(T_3-T_2) - mc_v(T_4-T_1)}{V_1(1-1/r)}$
$P_m = \frac{mc_v[T_1 r^{\gamma-1}(\theta-1) - T_1 r^{\gamma-1} (r^{\gamma-1}-1) ]}{V_1(1-1/r)}$
$P_m = \frac{mc_v T_1}{V_1(1-1/r)} [ (\theta-1)(r^{\gamma-1}-1) ]$
Since $P_1 V_1 = m R T_1$, and $R = c_p - c_v = c_v(\gamma-1)$:
$P_m = \frac{P_1}{\gamma-1} \frac{(\theta-1)(r^{\gamma-1}-1)}{(1-1/r)}$
$P_m = \frac{P_1}{\gamma-1} \frac{(\theta-1)(r^{\gamma-1}-1)}{(\frac{r-1}{r})}$
$P_m = \frac{P_1 r (\theta-1)(r^{\gamma-1}-1)}{(\gamma-1)(r-1)}$

Where:
*   $P_1$ is the pressure at the start of compression.
*   $\theta = T_3/T_2$ is the temperature ratio during heat addition.

**Key Point:** Mean effective pressure is a measure of the engine's ability to produce power for a given displacement. It depends on initial pressure, compression ratio, and heat addition ratio.

**Textbook Reference:** Ganesan, Chapter 3, Section 3.4 "Mean Effective Pressure"; Heywood, Chapter 3, Section 3.4 "Work and Mean Effective Pressure".

---

### 2.5 Factors Affecting Otto Cycle Performance:

1.  **Compression Ratio (r):**
    *   **Effect:** As $r$ increases, the thermal efficiency $\eta_{th} = 1 - 1/r^{\gamma-1}$ increases.
    *   **Limitation:** In actual SI engines, a very high compression ratio can lead to **knocking** (auto-ignition of the fuel-air mixture), which can damage the engine. This limits the practical compression ratio.

2.  **Specific Heat Ratio ($\gamma$):**
    *   **Effect:** A higher $\gamma$ (for a given $r$) also increases thermal efficiency. Air has $\gamma \approx 1.4$.
    *   **Context:** The actual working fluid in an engine is a mixture of air and fuel vapor, and its specific heat ratio can vary.

3.  **Heat Addition (or Combustion) Process:**
    *   **Cut-off Ratio:** In some variations of the Otto cycle, heat is added over a range of volumes. For the ideal Otto cycle, heat is added instantaneously at constant volume.
    *   **Impact of heat addition timing:** The efficiency is maximized when heat is added at the largest volume and rejected at the smallest volume.

4.  **Variable Specific Heats:**
    *   **Real Engine Behavior:** In actual engines, specific heats of gases change with temperature. At high temperatures encountered in IC engines, $c_v$ and $c_p$ increase.
    *   **Effect:** Using constant specific heats overestimates the efficiency compared to a cycle with variable specific heats. The increase in specific heats reduces the temperature rise during heat addition and the temperature drop during expansion, thus reducing work output.

**Textbook Reference:** Rajput, Chapter 12, Section 12.5 "Effect of Various Factors on Efficiency"; Gupta, Chapter 5, Section 5.3 "Performance of the Otto Cycle".

---

## 3. Applications of the Otto Cycle

*   **Spark Ignition (SI) Engines:** The Otto cycle is the fundamental model for gasoline engines, commonly found in:
    *   Cars
    *   Motorcycles
    *   Light aircraft
    *   Portable generators
    *   Lawnmowers

### 3.1 Comparison with Actual SI Engine Operation:

| Ideal Otto Cycle Process | Actual SI Engine Process                                       | Remarks                                                                                                                            |
| :----------------------- | :------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------- |
| Isentropic Compression   | Compression with friction, heat loss to cylinder walls.        | Real compression is not perfectly isentropic; temperatures might be slightly lower due to heat loss, but friction increases work input. |
| Constant Volume Heat Add | Flame propagation, heat release during combustion, spark ignition. | Combustion is not instantaneous; it takes a finite time. Heat is released gradually. Spark timing is critical.                     |
| Isentropic Expansion     | Expansion with friction, heat loss to cylinder walls.        | Real expansion is not perfectly isentropic; work output is reduced due to friction and heat loss.                                  |
| Constant Volume Heat Rej | Exhaust valve opening, scavenging, heat loss to exhaust.       | Heat rejection is not instantaneous at constant volume. Exhaust valve opens before the piston reaches the end of stroke (early blowdown). |

**Key Differences:**

*   **Heat Transfer:** Real engines experience heat losses to the surroundings, reducing the net work output and efficiency.
*   **Friction:** Friction in moving parts increases the work required for compression and reduces the work output during expansion.
*   **Combustion:** Combustion is a finite-rate process, not an instantaneous heat addition. The spark timing and flame speed significantly affect performance.
*   **Valve Timing:** Real engines have valves that open and close at specific points, leading to overlap and non-ideal gas exchange.
*   **Variable Specific Heats:** As mentioned, the actual specific heats of the gas mixture change with temperature, affecting the cycle performance.

**Textbook Reference:** Ganesan, Chapter 3, Section 3.6 "Actual Otto Cycle"; Heywood, Chapter 3, Section 3.5 "Comparison of Ideal Cycle with Actual Engine".

---

## 4. Practice Questions & Answers

**Question 1:** An ideal Otto cycle has a compression ratio of 8:1. The air at the beginning of compression is at 1 bar and 27°C. The maximum temperature in the cycle is 1200°C. Calculate:
(a) The thermal efficiency of the cycle.
(b) The heat added per kg of air.
(c) The net work done per kg of air.
Assume $\gamma = 1.4$ and $c_v = 1.005 \text{ kJ/kgK}$.

**Answer 1:**

Given:
$r = 8$
$T_1 = 27^\circ\text{C} = 27 + 273 = 300 \text{ K}$
$P_1 = 1 \text{ bar} = 10^5 \text{ Pa}$
$T_3 = 1200^\circ\text{C} = 1200 + 273 = 1473 \text{ K}$
$\gamma = 1.4$
$c_v = 1.005 \text{ kJ/kgK}$

**(a) Thermal Efficiency ($\eta_{th}$):**
$\eta_{th} = 1 - \frac{1}{r^{\gamma-1}} = 1 - \frac{1}{8^{1.4-1}} = 1 - \frac{1}{8^{0.4}}$
$8^{0.4} \approx 2.297$
$\eta_{th} = 1 - \frac{1}{2.297} \approx 1 - 0.435 = 0.565$
$\eta_{th} = 56.5\%$

**(b) Heat Added ($Q_{in}$):**
First, find $T_2$:
$T_2 = T_1 r^{\gamma-1} = 300 \times 8^{0.4} \approx 300 \times 2.297 \approx 689.1 \text{ K}$
$Q_{in} = m c_v (T_3 - T_2)$
Assuming $m=1$ kg:
$Q_{in} = 1 \times 1.005 \text{ kJ/kgK} \times (1473 - 689.1) \text{ K}$
$Q_{in} = 1.005 \times 783.9 \text{ kJ/kg}$
$Q_{in} \approx 787.8 \text{ kJ/kg}$

**(c) Net Work Done ($W_{net}$):**
$W_{net} = \eta_{th} \times Q_{in}$
$W_{net} = 0.565 \times 787.8 \text{ kJ/kg}$
$W_{net} \approx 445.1 \text{ kJ/kg}$

---

**Question 2:** What is the relationship between the thermal efficiency of an ideal Otto cycle and its compression ratio? How does this affect the design of actual SI engines?

**Answer 2:**
The thermal efficiency of an ideal Otto cycle is given by $\eta_{th} = 1 - \frac{1}{r^{\gamma-1}}$. This equation shows a direct relationship: as the compression ratio ($r$) increases, the thermal efficiency ($\eta_{th}$) also increases.

This has significant implications for actual SI engine design. Higher thermal efficiency means more fuel energy is converted into useful work, leading to better fuel economy. Therefore, engine designers aim for the highest possible compression ratio. However, this is limited by the phenomenon of **knocking** or **detonation** in gasoline engines. If the compression ratio is too high, the unburnt fuel-air mixture ahead of the flame front can auto-ignite due to the high temperature and pressure, causing a shock wave and a distinct knocking sound. This can lead to engine damage. Thus, the practical compression ratio is a compromise between achieving high thermal efficiency and avoiding knocking. This often involves using higher octane fuels, which are more resistant to auto-ignition.

---

**Question 3:** State the four main assumptions of an air-standard cycle.

**Answer 3:**
The four main assumptions of an air-standard cycle are:
1.  The working fluid is air, behaving as an ideal gas.
2.  The specific heats of air ($c_v$ and $c_p$) are constant.
3.  All processes are internally reversible.
4.  Combustion is replaced by heat addition, and exhaust is replaced by heat rejection, both occurring instantaneously at constant volume (for the Otto cycle).

---

## 5. Important Points to Remember

*   **Air-standard cycles** are idealized models for analyzing IC engines.
*   The **Otto cycle** represents spark-ignition (petrol) engines.
*   The **compression ratio (r)** is a key parameter; higher $r$ leads to higher thermal efficiency.
*   The thermal efficiency of the ideal Otto cycle is $\eta_{th} = 1 - \frac{1}{r^{\gamma-1}}$.
*   Actual SI engines deviate from the ideal Otto cycle due to heat losses, friction, finite combustion time, and valve timing.
*   The maximum practical compression ratio in SI engines is limited by **knocking**.
*   **Mean Effective Pressure (P_m)** is a measure of work output per displacement volume.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |


## 6. Further Reading & Textbooks:

*   **Thermal Engineering by Rudra Moorthy:** Provides a solid foundation in the theoretical aspects of cycles.
*   **Thermal Engineering by R.K Rajput:** Offers a clear and step-by-step approach to cycle analysis.
*   **Fundamentals of IC engines by V. Ganesan:** Deep dives into the mechanics and thermodynamics of IC engines.
*   **Fundamentals of IC engines by H N Gupta:** Offers a modern perspective on IC engine principles.
*   **Internal Combustion Engines by V Sajith and Shijo Thomas:** A comprehensive resource covering various aspects of IC engines.
*   **I.C engine fundamentals by J.B.Heywood:** A highly regarded and detailed reference for in-depth understanding.

---