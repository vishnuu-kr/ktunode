---
title: "deviations from ideal gas model"
subject: "ENGINEERING THERMODYNAMICS"
module: "Module 4: Entropy generation"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462f7b"
status: "completed"
scrapedAt: "2026-05-20T17:53:58.409Z"
---
# Engineering Thermodynamics: Module 4: Entropy Generation - Deviations from Ideal Gas Model

This module delves into the limitations of the ideal gas model and explores how real gases deviate, impacting entropy generation calculations. Understanding these deviations is crucial for accurate thermodynamic analysis, especially in processes involving high pressures or low temperatures.

**Course Outcomes Addressed:**

*   **CO1:** Understand basic concepts of thermodynamics (K1, K2) - *Focus on understanding the underlying principles of real gas behavior.*
*   **CO2:** Understand the laws of thermodynamics (K1, K2) - *Relate deviations to the validity and application of thermodynamic laws.*
*   **CO4:** Determine entropy changes associated with different processes (K3) - *This is the core focus, learning to calculate entropy changes for real gases.*

---

## 1. Revisiting the Ideal Gas Model

### 1.1. Definition and Assumptions

*   **Ideal Gas Law:** $PV = nRT$ or $Pv = RT$ (where $P$ is pressure, $V$ is volume, $n$ is the number of moles, $R$ is the universal gas constant, $T$ is absolute temperature, and $v$ is specific volume).
    *   *Cengel et al. (2011), Chapter 3*
*   **Assumptions of the Ideal Gas Model:**
    1.  **Negligible Molecular Volume:** The volume occupied by the gas molecules themselves is negligible compared to the total volume of the container.
    2.  **Negligible Intermolecular Forces:** There are no attractive or repulsive forces between gas molecules, except during brief collisions.
*   **When the Ideal Gas Model is Valid:**
    *   At **high temperatures** (molecules have high kinetic energy and overcome intermolecular forces).
    *   At **low pressures** (molecules are far apart, minimizing intermolecular interactions).
    *   *Cengel et al. (2011), Chapter 3; Nag (2017), Chapter 2*

### 1.2. Limitations of the Ideal Gas Model

The ideal gas model fails when the assumptions are significantly violated. This occurs under conditions of:

*   **Low temperatures:** Intermolecular forces become significant as molecular kinetic energy decreases.
*   **High pressures:** Molecules are forced closer together, increasing the effect of both molecular volume and intermolecular forces.

These deviations are critical when analyzing processes involving phase changes, compression at high pressures, or refrigeration cycles.

---

## 2. Deviations from Ideal Gas Behavior

### 2.1. Real Gas Behavior

Real gases do not strictly follow the ideal gas law due to:

*   **Finite Molecular Volume:** Gas molecules have a finite size. At high pressures, the volume occupied by molecules becomes a significant fraction of the total volume.
*   **Intermolecular Forces:** Attractive and repulsive forces exist between gas molecules.
    *   **Attractive forces:** Reduce the pressure exerted by the gas compared to an ideal gas at the same temperature and volume (tend to pull molecules together).
    *   **Repulsive forces:** Dominate at very close distances, increasing the pressure (tend to push molecules apart).

### 2.2. Compressibility Factor (Z)

The compressibility factor ($Z$) is a dimensionless parameter used to quantify the deviation of a real gas from ideal gas behavior.

*   **Definition:** $Z = \frac{PV}{RT}$
    *   *Cengel et al. (2011), Chapter 3; Nag (2017), Chapter 4*
*   **Interpretation of Z:**
    *   **Z = 1:** The gas behaves ideally.
    *   **Z < 1:** Attractive forces dominate; the real gas occupies less volume than an ideal gas at the same $P$ and $T$.
    *   **Z > 1:** Repulsive forces dominate; the real gas occupies more volume than an ideal gas at the same $P$ and $T$.

### 2.3. Corresponding States and Generalized Compressibility Charts

The principle of corresponding states suggests that different gases will have similar properties when compared at the same reduced pressure and reduced temperature.

*   **Reduced Pressure ($P_r$):** $P_r = \frac{P}{P_{cr}}$
*   **Reduced Temperature ($T_r$):** $T_r = \frac{T}{T_{cr}}$
    *   Where $P_{cr}$ and $T_{cr}$ are the critical pressure and critical temperature, respectively.
    *   *Cengel et al. (2011), Chapter 3; Moran & Shapiro (2006), Chapter 4*

*   **Generalized Compressibility Charts:** These charts plot the compressibility factor ($Z$) as a function of reduced pressure ($P_r$) and reduced temperature ($T_r$) for various gases. By knowing $P_r$ and $T_r$, one can determine $Z$ for a real gas.
    *   *Cengel et al. (2011) provides generalized charts in Chapter 3; Nag (2017) also discusses their use in Chapter 4.*

**Important Point:** At low reduced pressures ($P_r \ll 1$), $Z$ approaches 1 for all gases, indicating ideal gas behavior. As $P_r$ increases, deviations become more significant.

---

## 3. Entropy Calculations for Real Gases

The ideal gas relations for entropy change are no longer directly applicable to real gases. We need to account for the deviations.

### 3.1. Entropy Change in Terms of $P$ and $T$

The general expression for the entropy change of a substance is:

$ds = \frac{c_v}{T} dT - \left(\frac{\partial P}{\partial T}\right)_v dv$

For a real gas, we need to express the term $\left(\frac{\partial P}{\partial T}\right)_v$.

**Consider the general relation:**

$ds = c_p \frac{dT}{T} - v \left(\frac{\partial P}{\partial T}\right)_v dP$ (for constant pressure process)
$ds = c_v \frac{dT}{T} + \left(\frac{\partial P}{\partial T}\right)_v dv$ (for constant volume process)

*   *Nag (2017), Chapter 4*

For real gases, the specific heats $c_p$ and $c_v$ are not constant and are functions of temperature. Also, the relationship between $P$, $v$, and $T$ is more complex.

**A key approach is to use departure functions, which represent the difference in a thermodynamic property between a real gas and an ideal gas at the same $P$ and $T$.**

Let's consider the entropy change from state 1 to state 2 for a real gas. A common method is to use the property difference from an ideal gas and then add the departure.

*   **Ideal Gas Entropy Change:**
    $s_2 - s_1 = \int_{T_1}^{T_2} c_v(T) \frac{dT}{T} - R \ln \frac{v_2}{v_1}$
    $s_2 - s_1 = \int_{T_1}^{T_2} c_p(T) \frac{dT}{T} - R \ln \frac{P_2}{P_1}$

*   **For Real Gases, we can write:**
    $s_2 - s_1 = s_2^{\text{ideal}} - s_1^{\text{ideal}} + (s_2^{\text{real}} - s_2^{\text{ideal}}) - (s_1^{\text{real}} - s_1^{\text{ideal}})$
    $s_2 - s_1 = \int_{T_1}^{T_2} c_v(T) \frac{dT}{T} - R \ln \frac{v_2}{v_1} + s_2^R - s_1^R$
    Where $s^R = s^{\text{real}} - s^{\text{ideal}}$ is the entropy departure.

### 3.2. Using Equations of State (e.g., Van der Waals Equation)

More complex equations of state are used to describe real gas behavior. The Van der Waals equation is a classic example:

$(P + \frac{a}{v^2})(v - b) = RT$

where:
*   $a$ accounts for attractive forces.
*   $b$ accounts for the volume occupied by molecules.

*   *Cengel et al. (2011), Chapter 3; Nag (2017), Chapter 4; Sonntag et al. (2014), Chapter 7*

From such equations of state, one can derive expressions for the entropy departure. For the Van der Waals equation, the entropy change for a real gas between states $(T_1, v_1)$ and $(T_2, v_2)$ is given by:

$s_2 - s_1 = \int_{T_1}^{T_2} c_v(T) \frac{dT}{T} + R \ln \frac{v_2 - b}{v_1 - b}$

And for a process between $(T_1, P_1)$ and $(T_2, P_2)$:

$s_2 - s_1 = \int_{T_1}^{T_2} c_p(T) \frac{dT}{T} - R \ln \frac{P_2}{P_1} - R \ln \left(1 - \frac{b}{v_2}\right) + \ln \left(1 - \frac{b}{v_1}\right) - \ln \left(\frac{Z_2}{Z_1}\right)$
*(This is a complex derivation and often simplified using charts or other methods in practice).*

**A more fundamental approach involves deriving entropy using Maxwell relations and equations of state.**

From Maxwell relations, we have:
$\left(\frac{\partial s}{\partial v}\right)_T = \left(\frac{\partial P}{\partial T}\right)_v$

Integrating this expression for entropy:
$s(T, v) = \int_{T_{ref}}^{T} c_v(T, v) \frac{dT}{T} + \int_{v_{ref}}^{v} \left(\frac{\partial P}{\partial T}\right)_{v', T} dv' + s_{ref}$

For real gases, $c_v$ might also be a function of $v$, and $(\partial P/\partial T)_v$ is derived from the specific equation of state.

**Example: Entropy change for a Van der Waals gas between $(T_1, v_1)$ and $(T_2, v_2)$**

Using $(P + \frac{a}{v^2})(v - b) = RT$:
$\left(\frac{\partial P}{\partial T}\right)_{v} = \frac{R}{v-b}$

So, $ds = c_v \frac{dT}{T} + \frac{R}{v-b} dv$.
Integrating from $(T_1, v_1)$ to $(T_2, v_2)$:
$s_2 - s_1 = \int_{T_1}^{T_2} c_v(T) \frac{dT}{T} + R \ln \left(\frac{v_2 - b}{v_1 - b}\right)$

This is the most common form used for calculating entropy change with Van der Waals equation when specific heat is temperature dependent.

---

## 4. Entropy Generation in Non-Ideal Processes

Entropy generation ($s_{gen}$) is a direct consequence of irreversibilities in a process. For real gases, the complexities in calculating actual entropy changes directly impact how we determine entropy generation.

### 4.1. General Entropy Balance

The general entropy balance for a system is:

$\dot{S}_{in} - \dot{S}_{out} + \dot{S}_{gen} = \Delta \dot{S}_{system}$

For a closed system undergoing a process from state 1 to state 2:

$S_2 - S_1 = S_{generated}$

Where $S_{generated} = \int_{1}^{2} \frac{\delta Q_{rev}}{T_{boundary}} = \sum \frac{Q_{i,rev}}{T_{i,boundary}}$ for a reversible process, and $S_{generated}$ is always positive for irreversible processes.

The calculation of $S_2 - S_1$ for real gases requires the use of appropriate equations of state or property tables/charts for real gases.

### 4.2. Irreversibilities in Real Gas Processes

*   **Friction:** Viscous effects in flowing real gases contribute to irreversibility.
*   **Unrestrained Expansion/Free Expansion:** Expansion of a real gas into a vacuum involves significant changes in internal energy and entropy.
*   **Heat Transfer Across a Finite Temperature Difference:** This is a primary source of entropy generation, irrespective of whether the substance is ideal or real.

**Example: Unrestrained Expansion of a Real Gas**

For a real gas undergoing unrestrained expansion (no work done, no heat transfer), the internal energy change is given by:

$du = c_v dT + \left(T \left(\frac{\partial P}{\partial T}\right)_v - P\right) dv$

For the Van der Waals gas:
$T \left(\frac{\partial P}{\partial T}\right)_v - P = T \left(\frac{R}{v-b}\right) - \left(\frac{RT}{v-b} - \frac{a}{v^2}\right) = \frac{a}{v^2}$

So, $du = c_v dT + \frac{a}{v^2} dv$.

If the expansion is isothermal ($dT=0$), then $du = \frac{a}{v^2} dv$. This means the internal energy of a real gas changes with volume even at constant temperature due to intermolecular forces.

For an irreversible process with no heat transfer ($\delta Q = 0$):
$du = \delta w$

For unrestrained expansion, $\delta w = 0$. So, $du=0$.
If we assume $c_v$ is constant, then $du = c_v dT = 0 \implies dT = 0$.
However, for a real gas, $du = c_v dT + \frac{a}{v^2} dv$. If $du=0$ and $dT=0$, then $\frac{a}{v^2} dv = 0$. This implies $dv=0$, which is incorrect for an expansion.

This highlights that for real gases, an isothermal unrestrained expansion does not necessarily mean no temperature change if the $c_v$ is temperature-dependent or if we consider the full equation for $du$.

However, the Joule-Thomson effect (isenthalpic expansion) is a more practical scenario for real gases.

---

## 5. Property Tables and Charts for Real Gases

While equations of state provide a theoretical basis, engineering practice often relies on property tables and charts for real gases, similar to those for ideal gases but specifically generated from experimental data and sophisticated equations of state.

*   **Enthalpy and Entropy Departure Charts:** These charts allow direct determination of the difference in enthalpy and entropy between a real gas and an ideal gas at the same state.
    *   $h^R = h^{\text{real}} - h^{\text{ideal}}$
    *   $s^R = s^{\text{real}} - s^{\text{ideal}}$
    *   *Cengel et al. (2011), Chapter 3, Appendix F, G, H provide property tables and charts for common gases like Nitrogen, Oxygen, Air, Steam, Refrigerants.*
    *   *Nag (2017) also presents similar charts and tables.*

*   **Using Departure Charts for Entropy Change:**
    $s_2 - s_1 = (s_2^{\text{ideal}} - s_1^{\text{ideal}}) + (s_2^R - s_1^R)$
    $s_2 - s_1 = \int_{T_1}^{T_2} c_p(T) \frac{dT}{T} - R \ln \frac{P_2}{P_1} + s_2^R - s_1^R$

This approach is widely used in engineering because it simplifies calculations by leveraging pre-computed data.

---

## 6. Practice Questions and Exercises

**Question 1 (K1, K2):** Explain the two primary assumptions of the ideal gas model and under what conditions these assumptions are likely to be violated.
**Answer:** The assumptions are negligible molecular volume and negligible intermolecular forces. These are violated at low temperatures and high pressures.

**Question 2 (K2, K3):** Define the compressibility factor ($Z$) and interpret the cases when $Z < 1$ and $Z > 1$.
**Answer:** $Z = \frac{PV}{RT}$. When $Z < 1$, attractive forces dominate, leading to a smaller molar volume than ideal. When $Z > 1$, repulsive forces dominate, leading to a larger molar volume than ideal.

**Question 3 (K3):** A tank contains 10 kg of Nitrogen at 10 MPa and 300 K. Using generalized compressibility charts, determine the specific volume of Nitrogen. (Assume $P_{cr} = 3.39$ MPa, $T_{cr} = 126.2$ K for Nitrogen).
**Solution:**
1.  Calculate reduced pressure and temperature:
    $P_r = \frac{P}{P_{cr}} = \frac{10 \text{ MPa}}{3.39 \text{ MPa}} \approx 2.95$
    $T_r = \frac{T}{T_{cr}} = \frac{300 \text{ K}}{126.2 \text{ K}} \approx 2.38$
2.  From generalized compressibility charts (refer to Cengel et al. or similar), at $P_r \approx 2.95$ and $T_r \approx 2.38$, the compressibility factor $Z$ is approximately $0.89$.
3.  Use the compressibility factor to find the specific volume:
    $PV = ZRT \implies v = \frac{ZRT}{P}$
    The gas constant for Nitrogen ($R$) is $0.2968 \text{ kJ/kg} \cdot \text{K}$.
    $v = \frac{0.89 \times 0.2968 \text{ kJ/kg} \cdot \text{K} \times 300 \text{ K}}{10 \times 10^3 \text{ kPa}}$
    $v = \frac{0.89 \times 0.2968 \times 300}{10000} \text{ m}^3/\text{kg}$
    $v \approx 0.00794 \text{ m}^3/\text{kg}$

**Question 4 (K3):** Calculate the entropy change of Nitrogen when it is cooled from 500 K to 300 K at a constant pressure of 10 MPa. Assume Nitrogen behaves as a real gas and use appropriate property data (e.g., from tables or departure charts). For ideal Nitrogen, $c_p = 1.041 \text{ kJ/kg} \cdot \text{K}$ (assume constant for simplicity in this hypothetical calculation, though it varies).
**Solution Approach:**
1.  Calculate the ideal gas entropy change:
    $s_2^{\text{ideal}} - s_1^{\text{ideal}} = c_p \ln \frac{T_2}{T_1} - R \ln \frac{P_2}{P_1}$
    Since the pressure is constant, $\ln \frac{P_2}{P_1} = \ln(1) = 0$.
    $s_2^{\text{ideal}} - s_1^{\text{ideal}} = 1.041 \ln \frac{300}{500} = 1.041 \ln(0.6) \approx 1.041 \times (-0.5108) \approx -0.5318 \text{ kJ/kg} \cdot \text{K}$
2.  Determine the entropy departure $(s^R)$ at state 1 (500 K, 10 MPa) and state 2 (300 K, 10 MPa) using generalized entropy departure charts or property tables for Nitrogen.
    *   For state 1: Calculate $P_{r1} = \frac{10}{3.39} \approx 2.95$ and $T_{r1} = \frac{500}{126.2} \approx 3.96$. Find $s_1^R$.
    *   For state 2: Calculate $P_{r2} = \frac{10}{3.39} \approx 2.95$ and $T_{r2} = \frac{300}{126.2} \approx 2.38$. Find $s_2^R$.
3.  Calculate the real gas entropy change:
    $s_2 - s_1 = (s_2^{\text{ideal}} - s_1^{\text{ideal}}) + (s_2^R - s_1^R)$

**(Note: Actual calculation requires consulting the generalized charts for $s^R$ values, which are typically presented as functions of $P_r$ and $T_r$. The ideal gas calculation provides a baseline.)**

---

## 7. Important Points to Remember

*   **Ideal gas assumptions are a simplification:** Real gases deviate significantly at low temperatures and high pressures.
*   **Compressibility factor (Z) quantifies deviation:** $Z=1$ for ideal gases, $Z<1$ for attractive forces dominance, $Z>1$ for repulsive forces dominance.
*   **Reduced properties ($P_r, T_r$) enable the principle of corresponding states:** This allows generalization of real gas behavior using compressibility charts.
*   **Entropy calculations for real gases are more complex:** They require using equations of state or property tables/charts that account for non-ideal behavior.
*   **Departure functions ($h^R, s^R$) are key for practical calculations:** They represent the difference between real gas and ideal gas properties.
*   **Irreversibilities still lead to entropy generation:** The calculation of the actual entropy change will reflect these irreversibilities more accurately for real gases.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |


## 8. References

*   **Cengel, Yunus A., Michael A. Boles, and Mehmet Kanoğlu.** *Thermodynamics: an engineering approach.* McGraw-hill, 2011. (Primary Reference for Chapters 3, 4)
*   **Nag, P.K.** *Engineering Thermodynamics.* McGraw-Hill Education, 6th Edition, 2017. (Primary Reference for Chapters 2, 4)
*   **Moran J. Shapiro N. M.** *Fundamentals of Engineering Thermodynamics.* Wiley, 2006. (Reference for advanced concepts and generalized charts)
*   **Sonntag, Richard E., Claus Borgnakke, and Gordon J. VanWylen.** *Fundamentals of Thermodynamics.* Wiley, 8th Edition, 2014. (Reference for equations of state and property derivations)
*   **Ansermet, Jean-Philippe, and Sylvain D. Brechet.** *Thermodynamics: Principles and Applications.* Cambridge University Press, 1st Edition, 2019. (Provides theoretical underpinnings)

---