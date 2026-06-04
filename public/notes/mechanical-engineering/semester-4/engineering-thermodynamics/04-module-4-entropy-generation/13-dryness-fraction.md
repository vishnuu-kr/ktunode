---
title: "dryness fraction"
subject: "ENGINEERING THERMODYNAMICS"
module: "Module 4: Entropy generation"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462f76"
status: "completed"
scrapedAt: "2026-05-20T17:53:54.875Z"
---
# Engineering Thermodynamics: Module 4 - Entropy Generation

## Topic: Dryness Fraction

### 1. Introduction to Dryness Fraction (K2)

The concept of dryness fraction is primarily associated with **saturated mixtures**, specifically **wet steam** (a mixture of saturated liquid and saturated vapor). It is a crucial property for accurately determining the thermodynamic state and properties of such mixtures.

**Definition:** The dryness fraction (often denoted by the symbol 'x') is the ratio of the mass of saturated vapor to the total mass of the mixture.

*   **Formula:**
    $x = \frac{m_g}{m_{total}} = \frac{m_g}{m_f + m_g}$

    Where:
    *   $m_g$: mass of saturated vapor
    *   $m_f$: mass of saturated liquid
    *   $m_{total}$: total mass of the mixture

**Range of Dryness Fraction:**

*   **x = 0:** Represents saturated liquid (entirely liquid phase).
*   **x = 1:** Represents saturated vapor (entirely vapor phase).
*   **0 < x < 1:** Represents a wet mixture (containing both liquid and vapor phases).

### 2. Dryness Fraction in Thermodynamic Property Tables (K2, K3, CO5)

Dryness fraction is used to interpolate and determine the specific properties of a saturated mixture from steam tables. The general approach for calculating any specific property (e.g., specific enthalpy $h$, specific internal energy $u$, specific entropy $s$, specific volume $v$) of a wet mixture is as follows:

**General Formula:**

Property of mixture = (1 - x) * Property of saturated liquid + x * Property of saturated vapor

$Y = Y_f + x \cdot Y_{fg}$

Where:
*   $Y$: Any specific property of the mixture (e.g., $v$, $u$, $h$, $s$)
*   $Y_f$: Specific property of the saturated liquid at the given temperature or pressure.
*   $Y_g$: Specific property of the saturated vapor at the given temperature or pressure.
*   $x$: Dryness fraction.
*   $Y_{fg}$: Change in the specific property during vaporization ($Y_{fg} = Y_g - Y_f$). This term is also tabulated in steam tables.

**Specific Examples for Key Properties:**

*   **Specific Volume (v):**
    $v = v_f + x \cdot v_{fg}$
    (As per Cengel & Boles, Thermodynamics: An Engineering Approach, Chapter 4)

*   **Specific Internal Energy (u):**
    $u = u_f + x \cdot u_{fg}$
    (As per P.K. Nag, Engineering Thermodynamics, Chapter 4)

*   **Specific Enthalpy (h):**
    $h = h_f + x \cdot h_{fg}$
    (As per Sonntag, Borgnakke, VanWylen, Fundamentals of Thermodynamics, Chapter 6)

*   **Specific Entropy (s):**
    $s = s_f + x \cdot s_{fg}$
    (This is particularly important for Module 4, as entropy generation is the focus)

**Important Note:** When dealing with superheated vapors or subcooled liquids, the concept of dryness fraction is not applicable. Dryness fraction is *only* defined for saturated mixtures.

### 3. Determination of Dryness Fraction (K3, CO5)

The dryness fraction of a steam sample can be determined experimentally using various methods and instruments. Some common methods include:

*   **Throttling Calorimeter:**
    *   **Principle:** A sample of wet steam is throttled through a valve or orifice. Throttling is an adiabatic process where enthalpy remains constant ($h_{in} = h_{out}$).
    *   **Procedure:** The wet steam ($P_1, x_1$) is throttled to a superheated state ($P_2, T_2$) where its properties can be directly read from the superheated steam tables.
    *   **Calculation:**
        1.  Find the specific enthalpy of the initial wet steam using: $h_1 = h_f(T_1) + x_1 \cdot h_{fg}(T_1)$, where $T_1$ is the saturation temperature corresponding to $P_1$.
        2.  The enthalpy in the superheated region is $h_2$, determined from superheated steam tables at $P_2$ and $T_2$.
        3.  Since $h_1 = h_2$, we can solve for $x_1$: $x_1 = \frac{h_2 - h_f(T_1)}{h_{fg}(T_1)}$.
    *   **Limitation:** This method is suitable for steam with a dryness fraction generally above 0.9. For very wet steam, the throttled steam might remain in the saturated mixture region, making it difficult to determine its state accurately.

*   **Separating Calorimeter:**
    *   **Principle:** The wet steam is passed through a separator that physically separates the liquid water from the vapor.
    *   **Procedure:** A known mass of wet steam is passed through the calorimeter. The separated water is collected and weighed ($m_f'$), and the remaining dry steam is passed through a throttling calorimeter or a heat exchanger to determine its enthalpy and thus its mass ($m_g'$).
    *   **Calculation:**
        1.  Measure the mass of liquid separated ($m_f'$).
        2.  Measure the mass of dry steam ($m_g'$).
        3.  The dryness fraction is then calculated as: $x = \frac{m_g'}{m_f' + m_g'}$.
    *   **Advantage:** Can be used for lower dryness fractions than the throttling calorimeter.

*   **Combined Calorimeter:**
    *   A combination of separating and throttling calorimeters is often used to extend the range of dryness fraction that can be measured accurately. The steam is first passed through a separator, and the separated liquid and the remaining vapor are measured. The vapor is then often passed through a throttling calorimeter.

**Referencing Textbooks:**

*   **Cengel & Boles:** Chapter 4, "Properties of Pure Substances," extensively covers steam tables and the calculation of properties for saturated mixtures using dryness fraction.
*   **P.K. Nag:** Chapter 4, "Properties of Pure Substances," also details the use of steam tables and the calculation of properties for wet steam based on dryness fraction.
*   **Sonntag, Borgnakke, VanWylen:** Chapter 6, "The Power Cycle," discusses the practical application of steam tables and properties, where dryness fraction is fundamental for evaluating steam in power cycles.

### 4. Relevance to Entropy Generation (K3, CO4)

While dryness fraction itself is a property of a *pure substance* in a specific phase, its accurate determination is crucial for calculating entropy changes in processes involving wet steam. This directly impacts the understanding and calculation of **entropy generation**.

**How Dryness Fraction Relates to Entropy Changes:**

When the dryness fraction of a wet steam mixture changes during a thermodynamic process (e.g., expansion, heat transfer), the specific entropy of the mixture also changes.

*   **Isentropic Process (no entropy change):** If a wet steam mixture undergoes an isentropic expansion (like in a turbine), its dryness fraction will increase, but its specific entropy will remain constant. To analyze this, we need to use the formula $s = s_f + x \cdot s_{fg}$ at the initial and final states.
*   **Non-Isentropic Process (entropy generation):** If there is irreversibility in the process (e.g., frictional losses during expansion), the entropy of the wet steam will increase. The dryness fraction will change accordingly, and the increase in entropy ($s_2 - s_1$) is a direct measure of the entropy generated within the system during that process.

**Example:** Consider steam expanding in a turbine.
*   **Initial State:** Wet steam with $x_1$.
*   **Final State:** After expansion, the steam might become drier (higher $x_2$) or even superheated.
*   **Entropy Change:** $\Delta s = s_2 - s_1$. To calculate this, we need to know $x_1$ and the final state properties (which might involve determining $x_2$ if it remains wet).

**Connection to Course Outcomes:**

*   **CO4: Determine entropy changes associated with different processes:** Accurate calculation of dryness fraction is a prerequisite for calculating entropy changes for wet steam, which are common in many thermodynamic cycles.
*   **CO5: Determine the properties of pure substances:** Dryness fraction is the key parameter for determining properties of pure substances in the saturated mixture phase.

### 5. Important Points to Remember

*   **Dryness fraction (x) is only defined for saturated mixtures (wet steam).**
*   **0 ≤ x ≤ 1:** x=0 (saturated liquid), x=1 (saturated vapor), 0<x<1 (wet mixture).
*   The general formula for any property Y of a wet mixture is: $Y = Y_f + x \cdot Y_{fg}$.
*   Steam tables are essential for obtaining $Y_f$, $Y_g$, and $Y_{fg}$ values at given temperatures or pressures.
*   The accuracy of thermodynamic calculations for wet steam relies heavily on the correct determination of dryness fraction.
*   Understanding dryness fraction is fundamental to calculating entropy changes and analyzing energy transfer in processes involving phase change.

### 6. Practice Questions and Exercises

**Question 1:**
Saturated steam at 1 MPa exists as a wet mixture with a dryness fraction of 0.8. Determine the specific volume, specific enthalpy, and specific entropy of this mixture. (Refer to steam tables for properties of saturated water and steam at 1 MPa).

**Solution 1:**
From steam tables at P = 1 MPa:
*   $v_f = 0.001127 \ m^3/kg$
*   $v_{fg} = 0.19436 \ m^3/kg$
*   $h_f = 740.51 \ kJ/kg$
*   $h_{fg} = 2014.7 \ kJ/kg$
*   $s_f = 2.1387 \ kJ/kg \cdot K$
*   $s_{fg} = 4.4477 \ kJ/kg \cdot K$

Given $x = 0.8$:

*   **Specific Volume:**
    $v = v_f + x \cdot v_{fg} = 0.001127 + 0.8 \cdot 0.19436 = 0.001127 + 0.155488 = 0.156615 \ m^3/kg$

*   **Specific Enthalpy:**
    $h = h_f + x \cdot h_{fg} = 740.51 + 0.8 \cdot 2014.7 = 740.51 + 1611.76 = 2352.27 \ kJ/kg$

*   **Specific Entropy:**
    $s = s_f + x \cdot s_{fg} = 2.1387 + 0.8 \cdot 4.4477 = 2.1387 + 3.55816 = 5.69686 \ kJ/kg \cdot K$

**Question 2:**
A sample of steam at 100°C has a specific enthalpy of 2000 kJ/kg. Determine its dryness fraction. (Refer to steam tables for properties of saturated water and steam at 100°C).

**Solution 2:**
From steam tables at T = 100°C:
*   $h_f = 419.17 \ kJ/kg$
*   $h_{fg} = 2257.0 \ kJ/kg$

Given $h = 2000 \ kJ/kg$:
$h = h_f + x \cdot h_{fg}$
$2000 = 419.17 + x \cdot 2257.0$
$2000 - 419.17 = x \cdot 2257.0$
$1580.83 = x \cdot 2257.0$
$x = \frac{1580.83}{2257.0} \approx 0.7004$

The dryness fraction of the steam is approximately 0.7004.

**Question 3 (Conceptual):**
If a wet steam mixture undergoes an adiabatic throttling process, will its dryness fraction increase, decrease, or remain the same? Explain your reasoning.

**Answer 3:**
The dryness fraction will **increase**.
**Reasoning:** Throttling is a process where enthalpy remains constant ($h_1 = h_2$). For a wet mixture, enthalpy is given by $h = h_f + x \cdot h_{fg}$. As the pressure drops during throttling (typically), $h_f$ and $h_{fg}$ change. However, a key characteristic of throttling from a wet region is that the process moves towards the saturated vapor line. If the throttled state is still in the wet region, the increase in $h_{fg}$ and/or a decrease in $h_f$ combined with constant enthalpy requires an increase in the dryness fraction ($x$) to satisfy $h_2 = h_f(P_2) + x_2 \cdot h_{fg}(P_2)$. If the throttled state enters the superheated region, it means the dryness fraction has reached 1 (saturated vapor) and then vaporized further. In both cases, the dryness fraction effectively increases.

---

This concludes the notes on Dryness Fraction for Module 4: Entropy Generation. Remember to consult the specified textbooks for detailed steam table data and further examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
