---
title: "Van-der-Waals equation of state"
subject: "ENGINEERING THERMODYNAMICS"
module: "Module 4: Entropy generation"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462f7d"
status: "completed"
scrapedAt: "2026-05-20T17:53:59.839Z"
---
# Engineering Thermodynamics: Module 4 - Entropy Generation

## Topic: Van-der-Waals Equation of State

This topic delves into a more realistic model of gas behavior than the ideal gas law, particularly at high pressures and low temperatures where intermolecular forces and molecular volume become significant. Understanding these deviations is crucial for accurate thermodynamic analysis, especially when dealing with processes that might involve significant entropy generation.

---

### 1. Introduction to Real Gases and Deviations from Ideal Gas Behavior

**(CO1: Understand basic concepts of thermodynamics - K1, K2; CO5: Determine the properties of pure substances - K2)**

The ideal gas model, based on two fundamental assumptions:
*   **Negligible Intermolecular Forces:** Molecules are assumed to exert no attractive or repulsive forces on each other.
*   **Negligible Molecular Volume:** The volume occupied by the molecules themselves is considered insignificant compared to the total volume of the gas.

However, real gases deviate from ideal behavior when:
*   **High Pressures:** Molecules are closer together, increasing the influence of intermolecular forces and the significance of molecular volume.
*   **Low Temperatures:** Molecules have lower kinetic energy, making them more susceptible to intermolecular attractive forces.

The **compressibility factor (Z)** is a measure of this deviation:
$Z = \frac{PV}{RT}$

*   For ideal gases, $Z = 1$.
*   For real gases, $Z \neq 1$.

---

### 2. The Van-der-Waals Equation of State

**(CO1: Understand basic concepts of thermodynamics - K2; CO5: Determine the properties of pure substances - K2)**

The Van-der-Waals equation of state is a semi-empirical equation that modifies the ideal gas law to account for the non-ideal behavior of real gases. It introduces two correction terms:

**Van-der-Waals Equation:**
$(\boldsymbol{P} + \frac{\boldsymbol{a} \boldsymbol{n}^2}{\boldsymbol{V}^2})(\boldsymbol{V} - \boldsymbol{n}\boldsymbol{b}) = \boldsymbol{n}\boldsymbol{R}\boldsymbol{T}$

Where:
*   $P$ = Absolute pressure
*   $V$ = Total volume
*   $n$ = Number of moles of gas
*   $R$ = Universal gas constant
*   $T$ = Absolute temperature
*   $a$ = Van-der-Waals constant related to **intermolecular attractive forces**. It has units of (Pressure × Volume²)/mole².
*   $b$ = Van-der-Waals constant related to the **excluded volume of molecules**. It has units of Volume/mole.

**Physical Significance of the Correction Terms:**

*   **$\frac{\boldsymbol{a} \boldsymbol{n}^2}{\boldsymbol{V}^2}$ (Pressure Correction Term):**
    *   Represents the reduction in pressure due to attractive intermolecular forces. Molecules at the surface of the liquid phase experience a net inward pull from other molecules, reducing their momentum upon collision with the container walls. This term corrects for this reduced pressure.
    *   As the volume ($V$) decreases (or moles $n$ increase), the molecules are closer, leading to stronger attractive forces, and thus a larger correction.

*   **$\boldsymbol{n}\boldsymbol{b}$ (Volume Correction Term):**
    *   Represents the volume occupied by the molecules themselves, which is unavailable for other molecules to move in. This term corrects for the finite volume of the molecules, which is ignored in the ideal gas law.
    *   $b$ is a measure of the "hard core" volume of a mole of gas molecules.

**Van-der-Waals Equation in terms of molar volume ($\bar{V} = V/n$):**
$(P + \frac{a}{\bar{V}^2})(\bar{V} - b) = RT$

**Important Points to Remember about 'a' and 'b':**

*   The constants $a$ and $b$ are specific to each gas and are determined experimentally.
*   Gases with stronger intermolecular forces (e.g., larger molecules, polar molecules) generally have higher values of 'a'.
*   Gases with larger molecular size have higher values of 'b'.
*   As temperature increases and pressure decreases (approaching ideal gas conditions), the Van-der-Waals equation approaches the ideal gas law.

---

### 3. Determining Van-der-Waals Constants

**(CO5: Determine the properties of pure substances - K2)**

Van-der-Waals constants ($a$ and $b$) are typically determined from experimental data, often by utilizing the critical point properties of the substance.

**Critical Point Properties:**
The critical point is the state beyond which a gas cannot be liquefied by increasing pressure alone. At the critical point ($T_c$, $P_c$, $V_c$), the Van-der-Waals equation has a unique inflection point, meaning:
$(\frac{\partial P}{\partial V})_T = 0$ and $(\frac{\partial^2 P}{\partial V^2})_T = 0$ at $T_c$ and $V_c$.

From these conditions, we can derive expressions for $a$ and $b$ in terms of critical temperature ($T_c$) and critical pressure ($P_c$):

*   **Van-der-Waals constant 'b':**
    $b = \frac{RT_c}{8P_c}$
    This implies that the critical molar volume is $V_c = 3b$.

*   **Van-der-Waals constant 'a':**
    $a = \frac{27 R^2 T_c^2}{64 P_c}$

**Critical Compressibility Factor ($Z_c$):**
Using these derived values of $a$ and $b$, the critical compressibility factor for a Van-der-Waals fluid can be calculated:
$Z_c = \frac{P_c V_c}{RT_c} = \frac{P_c (3b)}{R (8P_c b / R)} = \frac{3}{8}$

This theoretical value of $Z_c = 3/8 = 0.375$ is an approximation. Actual measured critical compressibility factors for many substances are closer to 0.29 to 0.31. This highlights that the Van-der-Waals equation is still an approximation, albeit a significant improvement over the ideal gas law.

**Example Calculation of Van-der-Waals Constants:**
For Carbon Dioxide ($CO_2$):
$T_c = 304.1 \, K$
$P_c = 7.38 \, MPa = 7.38 \times 10^6 \, Pa$
$R = 8.314 \, J/(mol \cdot K)$

$b = \frac{(8.314 \, J/(mol \cdot K))(304.1 \, K)}{8 \times (7.38 \times 10^6 \, Pa)} \approx 4.28 \times 10^{-5} \, m^3/mol$
$a = \frac{27 (8.314 \, J/(mol \cdot K))^2 (304.1 \, K)^2}{64 \times (7.38 \times 10^6 \, Pa)} \approx 0.364 \, Pa \cdot m^6/mol^2$

*(Note: Values of 'a' and 'b' are often provided in tables for common gases in textbooks like Cengel & Boles or P.K. Nag.)*

---

### 4. Using the Van-der-Waals Equation for Property Calculations

**(CO3: Conduct first law analysis of open and closed systems - K3; CO4: Determine entropy changes associated with different processes - K3; CO5: Determine the properties of pure substances - K2, K3)**

The Van-der-Waals equation allows us to calculate thermodynamic properties like pressure, volume, and temperature for real gases more accurately. More advanced thermodynamic analyses, such as calculating internal energy, enthalpy, and entropy changes, also utilize the Van-der-Waals framework, though it often involves more complex derivations.

**Calculating Properties:**

1.  **Given any two of P, V, T, you can solve for the third.** This usually requires solving a cubic equation for V if P and T are known.
2.  **Calculating Compressibility Factor (Z):**
    $Z = \frac{P\bar{V}}{RT}$
    Once $\bar{V}$ is found from the Van-der-Waals equation for a given P and T, Z can be computed.

**Internal Energy, Enthalpy, and Entropy Changes (Conceptual Overview):**

The derivations for changes in internal energy, enthalpy, and entropy for Van-der-Waals fluids are more involved than for ideal gases. They stem from fundamental thermodynamic relations.

*   **Internal Energy ($U$):**
    For a Van-der-Waals fluid, the internal energy depends on both temperature and molar volume: $U = U(T, \bar{V})$.
    The change in internal energy is given by:
    $du = c_v dT + (\frac{\partial u}{\partial \bar{v}})_T d\bar{v}$
    For a Van-der-Waals fluid, $(\frac{\partial u}{\partial \bar{v}})_T = T(\frac{\partial P}{\partial T})_{\bar{v}} - P$.
    Substituting the Van-der-Waals equation: $P = \frac{RT}{\bar{v}-b} - \frac{a}{\bar{v}^2}$.
    $(\frac{\partial P}{\partial T})_{\bar{v}} = \frac{R}{\bar{v}-b}$.
    So, $(\frac{\partial u}{\partial \bar{v}})_T = T(\frac{R}{\bar{v}-b}) - (\frac{RT}{\bar{v}-b} - \frac{a}{\bar{v}^2}) = \frac{a}{\bar{v}^2}$.
    Therefore, the change in internal energy is:
    $du = c_v dT + \frac{a}{\bar{v}^2} d\bar{v}$
    For a process from state 1 to state 2:
    $\Delta u = \int_{T_1}^{T_2} c_v dT + \int_{\bar{v}_1}^{\bar{v}_2} \frac{a}{\bar{v}^2} d\bar{v}$
    Assuming $c_v$ is constant:
    $\Delta u = c_v (T_2 - T_1) - a(\frac{1}{\bar{v}_2} - \frac{1}{\bar{v}_1})$

*   **Enthalpy ($H$):**
    Since $H = U + PV$, the change in enthalpy can be derived from the change in internal energy and the PV work:
    $\Delta h = \Delta u + \Delta(P\bar{v})$
    Substituting the expression for $\Delta u$:
    $\Delta h = c_v (T_2 - T_1) - a(\frac{1}{\bar{v}_2} - \frac{1}{\bar{v}_1}) + (P_2\bar{v}_2 - P_1\bar{v}_1)$

*   **Entropy ($S$):**
    The change in entropy is given by $ds = c_v \frac{dT}{T} + (\frac{\partial P}{\partial T})_{\bar{v}} d\bar{v}$.
    For a Van-der-Waals fluid:
    $ds = c_v \frac{dT}{T} + \frac{R}{\bar{v}-b} d\bar{v}$
    For a process from state 1 to state 2:
    $\Delta s = \int_{T_1}^{T_2} c_v \frac{dT}{T} + \int_{\bar{v}_1}^{\bar{v}_2} \frac{R}{\bar{v}-b} d\bar{v}$
    Assuming $c_v$ is constant:
    $\Delta s = c_v \ln(\frac{T_2}{T_1}) + R \ln(\frac{\bar{v}_2 - b}{\bar{v}_1 - b})$

**This is where the link to Module 4 (Entropy Generation) becomes apparent.** The accurate calculation of entropy changes for real gases is essential for evaluating the performance of thermodynamic cycles and identifying sources of irreversibility (entropy generation).

---

### 5. Comparison with Ideal Gas Law

**(CO1: Understand basic concepts of thermodynamics - K2; CO5: Determine the properties of pure substances - K2)**

| Feature              | Ideal Gas Law ($PV = RT$)                               | Van-der-Waals Equation ($(P + \frac{a}{\bar{v}^2})(\bar{v} - b) = RT$) |
| :------------------- | :------------------------------------------------------ | :----------------------------------------------------------------------- |
| **Assumptions**      | Negligible intermolecular forces, negligible molecular volume | Accounts for intermolecular forces and molecular volume                |
| **Applicability**    | Low pressures, high temperatures                        | Wider range, especially at higher pressures and lower temperatures       |
| **Predictive Accuracy** | Less accurate for real gases under non-ideal conditions | More accurate for real gases under a wider range of conditions          |
| **Compressibility Factor (Z)** | $Z = 1$                                                 | $Z = \frac{P\bar{v}}{RT} \neq 1$ (can be $>1$ or $<1$)                 |
| **Physical State**   | Cannot predict phase transitions (liquefaction)         | Can predict critical point and liquefaction behavior                      |

**Example Scenario:**
Consider a gas at a state where $P$ is high and $T$ is low.
*   **Ideal gas law:** Will likely predict a lower pressure or higher volume than reality because it ignores attractive forces (which tend to reduce pressure) and molecular volume (which tends to increase effective volume).
*   **Van-der-Waals equation:** Will provide a more realistic prediction by accounting for these effects. The term $\frac{a}{\bar{v}^2}$ reduces the pressure, and the term $(\bar{v} - b)$ increases the effective molar volume.

---

### 6. Limitations of the Van-der-Waals Equation

**(CO1: Understand basic concepts of thermodynamics - K2)**

While a significant improvement over the ideal gas law, the Van-der-Waals equation still has limitations:

*   **Not universally accurate:** It doesn't perfectly predict the behavior of all real gases over all conditions.
*   **Cubic equation:** Solving for volume can be mathematically complex, especially when multiple real roots exist.
*   **Simplified corrections:** The corrections for intermolecular forces and molecular volume are simplified models. More complex equations of state (e.g., Redlich-Kwong, Peng-Robinson, Benedict-Webb-Rubin) exist that provide even greater accuracy by incorporating more sophisticated corrections.
*   **Constant 'a' and 'b':** Assumes the constants $a$ and $b$ are indeed constant, whereas in reality, they can vary slightly with temperature and pressure.

---

### 7. Practice Questions and Exercises

**(CO3: Conduct first law analysis of open and closed systems - K3; CO4: Determine entropy changes associated with different processes - K3; CO5: Determine the properties of pure substances - K2, K3)**

**Question 1:**
Calculate the pressure of 1 mole of $CO_2$ at $300 \, K$ occupying a volume of $0.01 \, m^3/mol$ using both the ideal gas law and the Van-der-Waals equation.
Given for $CO_2$: $a = 0.364 \, Pa \cdot m^6/mol^2$, $b = 4.28 \times 10^{-5} \, m^3/mol$, $R = 8.314 \, J/(mol \cdot K)$.

**Solution 1:**
**Ideal Gas Law:**
$P_{ideal} = \frac{RT}{\bar{V}} = \frac{(8.314 \, J/(mol \cdot K))(300 \, K)}{0.01 \, m^3/mol} = 249420 \, Pa = 0.2494 \, MPa$

**Van-der-Waals Equation:**
$P_{VdW} = \frac{RT}{\bar{V}-b} - \frac{a}{\bar{V}^2}$
$P_{VdW} = \frac{(8.314 \, J/(mol \cdot K))(300 \, K)}{0.01 \, m^3/mol - 4.28 \times 10^{-5} \, m^3/mol} - \frac{0.364 \, Pa \cdot m^6/mol^2}{(0.01 \, m^3/mol)^2}$
$P_{VdW} = \frac{2494.2}{0.0099572} - \frac{0.364}{0.0001}$
$P_{VdW} = 250489 - 3640 = 246849 \, Pa = 0.2468 \, MPa$

**Observation:** The Van-der-Waals pressure is slightly lower than the ideal gas pressure, which is expected due to attractive forces (the $a/\bar{V}^2$ term is larger than the correction from $(\bar{V}-b)$ in this case).

**Question 2:**
Calculate the change in specific entropy for Nitrogen ($N_2$) undergoing a change from $T_1 = 300 \, K, \bar{V}_1 = 0.05 \, m^3/mol$ to $T_2 = 400 \, K, \bar{V}_2 = 0.08 \, m^3/mol$.
Use the Van-der-Waals equation for entropy change and assume $c_v = 20.8 \, kJ/(kg \cdot K)$ for $N_2$.
Given for $N_2$: $a = 0.137 \, Pa \cdot m^6/mol^2$, $b = 3.86 \times 10^{-5} \, m^3/mol$, $R = 8.314 \, J/(mol \cdot K)$.
Molar mass of $N_2 = 28.013 \, g/mol = 0.028013 \, kg/mol$.

**Solution 2:**
First, convert $c_v$ to molar basis:
$c_v \, (\text{molar}) = c_v \, (\text{specific}) \times \text{Molar Mass}$
$c_v \, (\text{molar}) = (20.8 \times 10^3 \, J/(kg \cdot K)) \times (0.028013 \, kg/mol) \approx 583.07 \, J/(mol \cdot K)$

Now, use the entropy change formula for Van-der-Waals fluid:
$\Delta s = c_v \ln(\frac{T_2}{T_1}) + R \ln(\frac{\bar{v}_2 - b}{\bar{v}_1 - b})$

$\Delta s = 583.07 \ln(\frac{400}{300}) + 8.314 \ln(\frac{0.08 - 3.86 \times 10^{-5}}{0.05 - 3.86 \times 10^{-5}})$
$\Delta s = 583.07 \ln(1.3333) + 8.314 \ln(\frac{0.0799614}{0.0499614})$
$\Delta s = 583.07 (0.28768) + 8.314 \ln(1.6004)$
$\Delta s = 167.77 + 8.314 (0.4705)$
$\Delta s = 167.77 + 3.911 = 171.68 \, J/(mol \cdot K)$

**Question 3 (Conceptual):**
Explain why the Van-der-Waals equation is more appropriate than the ideal gas law for analyzing the behavior of steam at the exit of a turbine in a power plant, especially if the steam is close to the saturation region or in a superheated state at high pressure.

**Answer 3:**
At high pressures and/or near the saturation region, steam deviates significantly from ideal gas behavior. Intermolecular forces become substantial, and the molecular volume is no longer negligible. The ideal gas law would lead to inaccurate predictions of properties like specific volume, enthalpy, and entropy, which are critical for calculating work output and efficiency. The Van-der-Waals equation, by incorporating correction terms for these effects, provides a more realistic representation of steam's thermodynamic properties under such conditions, leading to more accurate analyses of turbine performance and overall plant efficiency. This is crucial for understanding energy conversion and potential irreversibilities.

---

### 8. Key Points to Remember

*   **Real gases deviate from ideal gas behavior** at high pressures and low temperatures due to intermolecular forces and finite molecular volume.
*   The **Van-der-Waals equation** is an empirical modification of the ideal gas law that accounts for these deviations using constants '$a$' (intermolecular attraction) and '$b$' (molecular volume).
*   The equation is: $(\boldsymbol{P} + \frac{\boldsymbol{a} \boldsymbol{n}^2}{\boldsymbol{V}^2})(\boldsymbol{V} - \boldsymbol{n}\boldsymbol{b}) = \boldsymbol{n}\boldsymbol{R}\boldsymbol{T}$ or $(P + \frac{a}{\bar{V}^2})(\bar{V} - b) = RT$ per mole.
*   **Constants '$a$' and '$b$' are gas-specific** and can be determined from critical properties: $b = \frac{RT_c}{8P_c}$ and $a = \frac{27 R^2 T_c^2}{64 P_c}$.
*   The Van-der-Waals equation enables more **accurate property calculations** for real gases compared to the ideal gas law.
*   Derivations for **internal energy, enthalpy, and entropy changes** for Van-der-Waals fluids are more complex but are essential for accurate thermodynamic cycle analysis and the study of entropy generation in real systems.
*   The Van-der-Waals equation has limitations and is superseded by more complex equations of state for higher accuracy.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |


### 9. Textbook References

*   **Cengel, Yunus A., Michael A. Boles, and Mehmet Kanoğlu. *Thermodynamics: an engineering approach*. McGraw-hill, 2011.**
    *   Chapter on Compressibility Charts and Equations of State would cover this topic. Look for sections discussing real gases and the Van-der-Waals equation for detailed derivations and examples.
*   **P.K. Nag. *Engineering Thermodynamics*. McGraw-Hill Education, 6th Edition, 2017.**
    *   Likely covered in chapters related to properties of pure substances or real gas behavior. Nag's text often provides clear explanations and practical examples.
*   **Moran J. Shapiro N. M. *Fundamentals of Engineering Thermodynamics*. Wiley, 2006.**
    *   Expect coverage in sections on property relations for real gases.
*   **Sonntag, Richard E., Claus Borgnakke, Gordon J. VanWylen. *Fundamentals of Thermodynamics*. Wiley, 8th Edition, 2014.**
    *   This is a classic text; the Van-der-Waals equation will be discussed in relation to gas behavior and its thermodynamic implications.
*   **Ansermet, Jean-Philippe, Sylvain D. Brechet. *Thermodynamics: Principles and Applications*. Cambridge University Press, 1st Edition, 2019.**
    *   This book might offer a more modern perspective on equations of state and their applications.

---

This concludes the study notes for the Van-der-Waals equation of state within Module 4: Entropy Generation. Remember to refer to your textbooks for a deeper understanding and more detailed derivations.