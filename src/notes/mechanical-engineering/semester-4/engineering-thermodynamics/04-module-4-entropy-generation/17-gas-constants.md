---
title: "gas constants"
subject: "ENGINEERING THERMODYNAMICS"
module: "Module 4: Entropy generation"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462f7a"
status: "completed"
scrapedAt: "2026-05-20T17:53:57.703Z"
---
# Engineering Thermodynamics: Module 4 - Entropy Generation

## Topic: Gas Constants

---

### 1. Introduction to Gas Constants

**1.1 What are Gas Constants?**

Gas constants are fundamental properties of gases that relate pressure, volume, temperature, and the amount of substance in a gas. They are empirical constants derived from experimental observations. Understanding gas constants is crucial for applying the Ideal Gas Law and for analyzing thermodynamic processes involving gases.

**1.2 The Ideal Gas Law**

The Ideal Gas Law is a fundamental equation of state that describes the behavior of ideal gases. An ideal gas is a hypothetical gas composed of point particles that have no volume and no intermolecular forces. While no real gas is truly ideal, the Ideal Gas Law provides a good approximation for many gases under certain conditions (high temperature and low pressure).

The Ideal Gas Law is expressed as:

$$PV = nRT$$

Where:
*   $P$ = absolute pressure of the gas (e.g., Pascals (Pa), atmospheres (atm), psi)
*   $V$ = volume of the gas (e.g., cubic meters (m³), liters (L), cubic feet (ft³))
*   $n$ = amount of substance of the gas (in moles)
*   $R$ = the universal gas constant
*   $T$ = absolute temperature of the gas (in Kelvin (K) or Rankine (°R))

**1.3 The Universal Gas Constant ($R_u$)**

The universal gas constant, denoted by $R_u$, is a physical constant that appears in many fundamental equations in physics and chemistry, including the Ideal Gas Law. It represents the proportionality constant between the volume of an ideal gas and the product of its temperature and the amount of substance.

*   **Key Concept:** The value of $R_u$ is the same for all ideal gases, regardless of their chemical identity.

*   **Values of $R_u$ in various units:**
    *   $R_u = 8.314 \text{ J/(mol·K)}$ (SI units)
    *   $R_u = 1.986 \text{ cal/(mol·K)}$
    *   $R_u = 0.082057 \text{ L·atm/(mol·K)}$
    *   $R_u = 1545 \text{ ft·lb/(lbmol·K)}$

*   **Source:** Cengel & Boles, Chapter 4: "Ideal Gas Law". Nag, Chapter 2: "Properties of Pure Substances and Ideal Gases".

---

### 2. Specific Gas Constant ($R$)

**2.1 Definition**

While $R_u$ is universal for moles, we often work with gases in terms of mass (e.g., kilograms or pounds) rather than moles. This leads to the concept of the specific gas constant, denoted by $R$. The specific gas constant is unique to each gas and is related to the universal gas constant by the molar mass ($M$) of the gas.

The Ideal Gas Law can also be expressed in terms of mass ($m$) and specific gas constant ($R$) as:

$$PV = mRT$$

Or, in terms of specific volume ($v = V/m$):

$$Pv = RT$$

Where:
*   $P$ = absolute pressure
*   $v$ = specific volume (volume per unit mass)
*   $R$ = specific gas constant for the gas
*   $T$ = absolute temperature

**2.2 Relationship between $R_u$ and $R$**

The specific gas constant ($R$) for a particular gas is obtained by dividing the universal gas constant ($R_u$) by the molar mass ($M$) of that gas:

$$R = \frac{R_u}{M}$$

*   **Units for Molar Mass ($M$):**
    *   kg/kmol (kilograms per kilomole)
    *   lbm/lbmol (pounds-mass per pound-mole)

*   **Derivation:**
    We know $PV = nRT_u$.
    Since $n = m/M$, we substitute this into the equation: $PV = (m/M)R_uT$.
    Rearranging for the specific volume ($v = V/m$): $P(V/m) = (R_u/M)T$.
    Therefore, $Pv = RT$, where $R = R_u/M$.

**2.3 Calculating Specific Gas Constants for Common Gases**

Let's calculate the specific gas constant for some common gases using $R_u = 8.314 \text{ J/(mol·K)}$.

| Gas          | Molar Mass ($M$) [kg/kmol] | Specific Gas Constant ($R$) [J/(kg·K)] (R = 8314 J/(kmol·K) / M [kg/kmol]) |
| :----------- | :------------------------- | :-------------------------------------------------------------------------- |
| Air          | 28.97                      | $8.314 / 28.97 \approx 287.0 \text{ J/(kg·K)}$                              |
| Nitrogen (N₂) | 28.01                      | $8.314 / 28.01 \approx 296.8 \text{ J/(kg·K)}$                              |
| Oxygen (O₂)  | 32.00                      | $8.314 / 32.00 \approx 259.8 \text{ J/(kg·K)}$                              |
| Hydrogen (H₂) | 2.016                      | $8.314 / 2.016 \approx 4125 \text{ J/(kg·K)}$                               |
| Carbon Dioxide (CO₂) | 44.01                      | $8.314 / 44.01 \approx 188.9 \text{ J/(kg·K)}$                              |
| Helium (He)  | 4.003                      | $8.314 / 4.003 \approx 2077 \text{ J/(kg·K)}$                               |

*   **Source:** Cengel & Boles, Table A-1: "Ideal-gas specific heat of various common gases at 300 K". This table often includes specific gas constants. Nag, Chapter 2, provides molar masses and the concept of specific gas constants.

---

### 3. Applications and Importance in Thermodynamics

**3.1 Applying the Ideal Gas Law to Thermodynamic Processes**

The Ideal Gas Law ($Pv = RT$) is a cornerstone for analyzing thermodynamic processes involving gases. It allows us to determine unknown properties (pressure, specific volume, or temperature) if two other properties are known.

**Example:**
A rigid tank contains air at 100 kPa and 25°C. If the tank has a volume of 0.5 m³ and the mass of air is 2 kg, what is the specific gas constant for air? What is the temperature if the pressure is increased to 200 kPa?

**Solution:**
1.  **Calculate the specific gas constant for air:**
    We know $Pv = RT$. We need to find the specific volume first.
    Specific volume $v = V/m = 0.5 \text{ m³} / 2 \text{ kg} = 0.25 \text{ m³/kg}$.
    First, convert temperature to Kelvin: $T = 25°C + 273.15 = 298.15 \text{ K}$.
    Using $Pv = RT$:
    $R = Pv/T = (100 \times 10³ \text{ Pa}) \times (0.25 \text{ m³/kg}) / (298.15 \text{ K})$
    $R \approx 83.8 \text{ J/(kg·K)}$
    *(Note: This calculated value might slightly differ from the tabulated value due to assumptions or rounding. The accepted value for air is around 287 J/(kg·K). Let's use the accepted value for the second part of the question to demonstrate the law.)*

    Using the accepted value for air ($R = 287 \text{ J/(kg·K)}$) and the initial conditions ($P_1 = 100 \text{ kPa}$, $T_1 = 298.15 \text{ K}$):
    $v_1 = RT_1/P_1 = (287 \text{ J/(kg·K)}) \times (298.15 \text{ K}) / (100 \times 10³ \text{ Pa})$
    $v_1 \approx 0.855 \text{ m³/kg}$.
    The volume of the tank is $V = m \times v_1 = 2 \text{ kg} \times 0.855 \text{ m³/kg} = 1.71 \text{ m³}$.
    *(Correction: The problem states the tank volume is 0.5 m³ and mass is 2 kg. Let's re-calculate based on the given volume and mass to find R for the system.)*

    From the given information: $V = 0.5 \text{ m³}$, $m = 2 \text{ kg}$, $P_1 = 100 \text{ kPa}$, $T_1 = 298.15 \text{ K}$.
    Specific volume $v_1 = V/m = 0.5 \text{ m³} / 2 \text{ kg} = 0.25 \text{ m³/kg}$.
    $R = P_1 v_1 / T_1 = (100 \times 10³ \text{ Pa}) \times (0.25 \text{ m³/kg}) / (298.15 \text{ K})$
    $R \approx 83.8 \text{ J/(kg·K)}$.
    *(Self-correction: The common value for air is 287 J/(kg·K). The problem might be set up to illustrate the calculation or implies a non-standard gas. For the purpose of learning, let's assume the question implies we should use the known R for air (287 J/kgK) and the given volume and mass to find the initial state, or that the given values define the specific gas constant for this specific scenario.)*

    Let's assume the problem intended to use the known specific gas constant for air: $R_{air} \approx 287 \text{ J/(kg·K)}$.

    Using $Pv = RT$:
    At state 1: $P_1 = 100 \text{ kPa}$, $T_1 = 25°C = 298.15 \text{ K}$.
    $v_1 = R_{air} T_1 / P_1 = (287 \text{ J/(kg·K)}) \times (298.15 \text{ K}) / (100 \times 10³ \text{ Pa})$
    $v_1 \approx 0.855 \text{ m³/kg}$.
    The total volume $V = m \times v_1 = 2 \text{ kg} \times 0.855 \text{ m³/kg} = 1.71 \text{ m³}$.
    *(This contradicts the given tank volume of 0.5 m³. This highlights the importance of consistent data in problem statements or understanding when to use tabulated values vs. deriving from given states.)*

    Let's proceed with the assumption that the gas constant for this specific scenario is determined by the given initial conditions if they are consistent. If we must use $R=287 \text{ J/(kg·K)}$, then the mass or volume given must be adjusted to be consistent.

    **Let's rephrase the example to be more illustrative for gas constants:**
    A rigid tank contains 2 kg of a gas at 100 kPa and 25°C. The specific volume of the gas is 0.25 m³/kg. Determine the specific gas constant for this gas. If the pressure is increased to 200 kPa, what is the new temperature?

    **Solution (Revised):**
    1.  **Calculate the specific gas constant ($R$):**
        Given: $P_1 = 100 \text{ kPa}$, $T_1 = 25°C = 298.15 \text{ K}$, $v_1 = 0.25 \text{ m³/kg}$.
        Using the Ideal Gas Law $P_1v_1 = RT_1$:
        $R = P_1v_1 / T_1 = (100 \times 10³ \text{ Pa}) \times (0.25 \text{ m³/kg}) / (298.15 \text{ K})$
        $R \approx 83.8 \text{ J/(kg·K)}$

    2.  **Calculate the new temperature ($T_2$):**
        The tank is rigid, so the volume and mass remain constant. Therefore, the specific volume remains constant ($v_2 = v_1 = 0.25 \text{ m³/kg}$).
        The new pressure is $P_2 = 200 \text{ kPa}$.
        Using the Ideal Gas Law $P_2v_2 = RT_2$:
        $T_2 = P_2v_2 / R = (200 \times 10³ \text{ Pa}) \times (0.25 \text{ m³/kg}) / (83.8 \text{ J/(kg·K)})$
        $T_2 \approx 596.6 \text{ K}$
        Converting back to Celsius: $T_2 \approx 596.6 - 273.15 = 323.5°C$.

*   **Source:** Cengel & Boles, Chapter 4. Nag, Chapter 2. These sections provide the Ideal Gas Law and examples of its application.

**3.2 Role in Entropy Generation (Module Context)**

While gas constants themselves are not directly about entropy generation, they are fundamental to defining the properties of gases. To analyze entropy generation in processes involving gases (e.g., expansion, compression, heat transfer), we rely on the Ideal Gas Law and the specific heat capacities of gases.

*   **Entropy Change of an Ideal Gas:** The calculation of entropy change for an ideal gas often involves the specific gas constant ($R$) and specific heat capacities ($c_p$ and $c_v$). For example, for an ideal gas undergoing a process from state 1 to state 2:
    $$s_2 - s_1 = c_{p,avg} \ln\left(\frac{T_2}{T_1}\right) - R \ln\left(\frac{P_2}{P_1}\right)$$
    or
    $$s_2 - s_1 = c_{v,avg} \ln\left(\frac{T_2}{T_1}\right) + R \ln\left(\frac{v_2}{v_1}\right)$$

*   **Irreversibility and Entropy Generation:** The difference between the actual entropy change and the reversible entropy change for a process is the entropy generated due to irreversibilities. Understanding the properties of the gas (through its gas constant and specific heats) is essential for calculating these changes.

*   **Source:** Cengel & Boles, Chapter 6: "Second Law of Thermodynamics" (specifically sections on entropy changes of ideal gases). Nag, Chapter 5: "Second Law of Thermodynamics" (similar content).

---

### 4. Gas Constants for Real Gases

**4.1 Limitations of the Ideal Gas Law**

The Ideal Gas Law is an approximation. Real gases deviate from ideal behavior at high pressures and low temperatures due to:
*   **Intermolecular forces:** Attractive and repulsive forces between gas molecules.
*   **Molecular volume:** The finite volume occupied by gas molecules themselves.

**4.2 Compressibility Factor (Z)**

To account for the deviation of real gases from ideal behavior, the compressibility factor ($Z$) is introduced. The real gas equation of state is often written as:

$$Pv = ZRT$$

Where:
*   $Z = \frac{Pv}{RT}$
*   $Z = 1$ for ideal gases.
*   $Z < 1$ indicates that the gas is more compressible than an ideal gas (intermolecular attractive forces dominate).
*   $Z > 1$ indicates that the gas is less compressible than an ideal gas (intermolecular repulsive forces or molecular volume effects dominate).

**4.3 Obtaining $Z$ values**

The compressibility factor $Z$ is a function of reduced pressure ($P_r$) and reduced temperature ($T_r$):
*   $P_r = P/P_{cr}$ (reduced pressure)
*   $T_r = T/T_{cr}$ (reduced temperature)
    Where $P_{cr}$ and $T_{cr}$ are the critical pressure and critical temperature of the gas, respectively.

$Z$ values can be obtained from:
*   **Generalized compressibility charts:** These charts plot $Z$ versus $P_r$ for various values of $T_r$. (Refer to Cengel & Boles, Appendix F, or Nag, Appendix).
*   **Equations of State:** More complex equations of state, like the van der Waals equation, can also describe real gas behavior.

**4.4 Implications for Entropy Calculations**

When dealing with real gases at conditions where deviations from ideal behavior are significant, the calculations for entropy change must account for the compressibility factor or use real gas property tables/charts. The specific gas constant ($R$) for a real gas remains the same as for an ideal gas (calculated from $R_u/M$), but the $Pv = RT$ relationship is modified by $Z$.

*   **Source:** Cengel & Boles, Chapter 4 (Real Gases section). Nag, Chapter 2 (Real Gases section). Moran & Shapiro, Chapter 3: "Properties of Pure Substances". Sonntag & VanWylen, Chapter 3: "Properties of Pure Substances".

---

### 5. Summary of Key Points

*   **Universal Gas Constant ($R_u$)**: A fundamental constant applicable to all ideal gases, relating moles, pressure, volume, and temperature. (e.g., 8.314 J/(mol·K)).
*   **Specific Gas Constant ($R$)**: Unique to each gas, relating mass, pressure, volume, and temperature. Calculated as $R = R_u / M$.
*   **Ideal Gas Law ($Pv = RT$)**: A fundamental equation of state for ideal gases, crucial for analyzing thermodynamic processes.
*   **Real Gas Behavior**: Deviations from ideal gas behavior at high pressures and low temperatures are accounted for using the compressibility factor ($Z$).
*   **Entropy Calculations**: The specific gas constant ($R$) is a vital component in calculating entropy changes for ideal gases. For real gases, $Z$ must be considered.

---

### 6. Practice Questions

**Question 1:**
Calculate the specific gas constant for Argon (Ar), given its molar mass is approximately 39.95 kg/kmol. Express your answer in J/(kg·K) and ft·lb/(lbm·°R).

**Question 2:**
A cylinder contains 0.5 kg of nitrogen gas (N₂) at 150 kPa and 20°C. If the volume of the cylinder is 0.1 m³, what is the specific gas constant of nitrogen, and is the ideal gas assumption reasonable at this condition? (Use $R_u = 8.314$ J/(mol·K) and Molar mass of N₂ = 28.01 kg/kmol). (Hint: For nitrogen, ideal gas behavior is generally reasonable up to ~1000 kPa and ~1000 K).

**Question 3:**
Consider a process where 2 kg of air expands isothermally from 300 kPa to 100 kPa. If the initial temperature is 100°C and the initial volume is 0.2 m³, calculate the final volume and the work done by the gas. (Assume air behaves as an ideal gas with $R = 287$ J/(kg·K)).

---

### 7. Answers to Practice Questions

**Answer 1:**
Using $R_u = 8.314 \text{ J/(mol·K)}$ and $M_{Ar} = 39.95 \text{ kg/kmol}$:
$R_{Ar} = \frac{R_u}{M_{Ar}} = \frac{8.314 \text{ kJ/(kmol·K)}}{39.95 \text{ kg/kmol}} \approx 0.2081 \text{ kJ/(kg·K)}$
Converting to J/(kg·K): $R_{Ar} \approx 0.2081 \times 1000 = 208.1 \text{ J/(kg·K)}$

To convert to ft·lb/(lbm·°R), we can use the conversion factor $1 \text{ J} \approx 0.73756 \text{ ft·lb}$.
And $1 \text{ K} = 1 \text{ °R}$ (for temperature differences or absolute temperature scales that increment by the same amount, though technically K is absolute and R is absolute).
$R_{Ar} \approx 208.1 \frac{\text{J}}{\text{kg·K}} \times 0.73756 \frac{\text{ft·lb}}{\text{J}} \times \frac{1 \text{ K}}{1 \text{ °R}} \approx 153.4 \text{ ft·lb/(lbm·°R)}$
*(Alternatively, use $R_u = 1545 \text{ ft·lb/(lbmol·K)}$ and $M_{Ar} = 39.95 \text{ lbm/lbmol}$)*
$R_{Ar} = \frac{1545 \text{ ft·lb/(lbmol·K)}}{39.95 \text{ lbm/lbmol}} \approx 38.67 \text{ ft·lb/(lbm·K)}$
*(Checking units: there seems to be a discrepancy. The standard value for R for Argon in Imperial units is around 38.67 ft-lb/(lb-R). Let's re-verify the conversion. The key is that molar mass should be in lbm/lbmol for the imperial calculation.)*

Let's use the SI value and convert directly:
$R_{Ar} = 208.1 \text{ J/(kg·K)}$
$1 \text{ J} = 1 \text{ N·m}$
$1 \text{ N} = 0.2248 \text{ lbf}$
$1 \text{ m} = 3.2808 \text{ ft}$
$1 \text{ kg} = 2.2046 \text{ lbm}$
$1 \text{ K} = 1.8 \text{ °R}$ (for absolute scales, $\Delta T$ in K is $1.8 \times \Delta T$ in R? No, $T_K = T_C + 273.15$ and $T_R = T_F + 459.67$. $T_R = 1.8 T_K$. So $1 \text{ K} = 1.8 \text{ R}$ is incorrect. The conversion is that a difference of 1 K is equal to a difference of 1.8 R. However, when using absolute scales directly in $Pv=RT$, the conversion is $T_R = 1.8 T_K$.)

$R_{Ar} = 208.1 \frac{\text{J}}{\text{kg·K}} \times \frac{0.73756 \text{ ft·lb}}{1 \text{ J}} \times \frac{1 \text{ kg}}{2.2046 \text{ lbm}} \times \frac{1 \text{ K}}{1.8 \text{ °R}}$
$R_{Ar} \approx 208.1 \times 0.73756 / 2.2046 / 1.8 \approx 38.67 \text{ ft·lb/(lbm·°R)}$

**Answer 2:**
Given: $m = 0.5 \text{ kg}$, $P_1 = 150 \text{ kPa}$, $T_1 = 20°C = 293.15 \text{ K}$, $V_1 = 0.1 \text{ m³}$.
Specific volume $v_1 = V_1/m = 0.1 \text{ m³} / 0.5 \text{ kg} = 0.2 \text{ m³/kg}$.
Using $P_1v_1 = RT_1$:
$R = P_1v_1 / T_1 = (150 \times 10³ \text{ Pa}) \times (0.2 \text{ m³/kg}) / (293.15 \text{ K})$
$R \approx 102.3 \text{ J/(kg·K)}$

To check if the ideal gas assumption is reasonable, we compare this calculated $R$ with the known $R$ for nitrogen.
$R_{nitrogen} = R_u / M_{N₂} = 8314 \text{ J/(kmol·K)} / 28.01 \text{ kg/kmol} \approx 296.8 \text{ J/(kg·K)}$.

Our calculated $R$ (102.3 J/(kg·K)) is significantly different from the actual $R$ for nitrogen (296.8 J/(kg·K)). This large deviation suggests that the ideal gas assumption is **not reasonable** at these conditions for nitrogen. The gas is behaving significantly differently than an ideal gas.

**Answer 3:**
Given: $m = 2 \text{ kg}$, $P_1 = 300 \text{ kPa}$, $P_2 = 100 \text{ kPa}$, $T_1 = 100°C = 373.15 \text{ K}$, $V_1 = 0.2 \text{ m³}$.
Assuming ideal gas behavior for air with $R = 287 \text{ J/(kg·K)}$.

1.  **Calculate the final volume ($V_2$):**
    The process is isothermal, so $T_1 = T_2 = 373.15 \text{ K}$.
    From the Ideal Gas Law, $P_1V_1 = mRT_1$ and $P_2V_2 = mRT_2$.
    Since $m$, $R$, $T_1$, and $T_2$ are constant, $P_1V_1 = P_2V_2$.
    $V_2 = V_1 \times (P_1/P_2) = 0.2 \text{ m³} \times (300 \text{ kPa} / 100 \text{ kPa})$
    $V_2 = 0.2 \text{ m³} \times 3 = 0.6 \text{ m³}$.

2.  **Calculate the work done ($W$):**
    For an isothermal process of an ideal gas, the work done is given by:
    $W = \int_{V_1}^{V_2} P dV$. Since $PV = constant$, $P = PV/V$.
    $W = \int_{V_1}^{V_2} \frac{P_1V_1}{V} dV = P_1V_1 \int_{V_1}^{V_2} \frac{dV}{V} = P_1V_1 \ln\left(\frac{V_2}{V_1}\right)$
    $W = (300 \times 10³ \text{ Pa}) \times (0.2 \text{ m³}) \times \ln\left(\frac{0.6 \text{ m³}}{0.2 \text{ m³}}\right)$
    $W = 60000 \text{ J} \times \ln(3)$
    $W \approx 60000 \text{ J} \times 1.0986$
    $W \approx 65916 \text{ J} = 65.916 \text{ kJ}$.

---

### 8. Important Points to Remember

*   Always use **absolute pressure** and **absolute temperature** (Kelvin or Rankine) in the Ideal Gas Law.
*   The specific gas constant ($R$) is crucial for mass-based calculations involving gases.
*   Be mindful of units when performing calculations.
*   When analyzing real gases at high pressures or low temperatures, consider using the compressibility factor ($Z$) or real gas property tables.
*   Gas constants play a role in calculating entropy changes of gases.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


### 9. Textbook References

*   **Cengel & Boles, Thermodynamics: An Engineering Approach:**
    *   Chapter 4: Covers the Ideal Gas Law, specific gas constant, and real gas behavior with compressibility.
    *   Chapter 6: Discusses entropy changes of ideal gases, where the specific gas constant is utilized.

*   **P.K. Nag, Engineering Thermodynamics:**
    *   Chapter 2: Properties of Pure Substances and Ideal Gases, including the Ideal Gas Law and specific gas constant.
    *   Chapter 5: Second Law of Thermodynamics, where entropy changes for ideal gases are derived using $R$.

*   **Moran & Shapiro, Fundamentals of Engineering Thermodynamics:**
    *   Chapter 3: Properties of Pure Substances, which includes discussion on equations of state and real gas behavior.

*   **Sonntag, Borgnakke, VanWylen, Fundamentals of Thermodynamics:**
    *   Chapter 3: Properties of Pure Substances, covering ideal gas behavior and deviations.

---

### 10. Alignment with Course Outcomes

*   **CO1: Understand basic concepts of thermodynamics (Knowledge Level: K1, K2)**
    *   This topic directly contributes by defining fundamental constants ($R_u$, $R$) and the Ideal Gas Law, which are core concepts.

*   **CO2: Understand the laws of thermodynamics (Knowledge Level: K1, K2)**
    *   While not directly stating a law, the Ideal Gas Law is a primary equation of state used in conjunction with the laws of thermodynamics to analyze processes.

*   **CO3: Conduct first law analysis of open and closed systems (Knowledge Level: K3)**
    *   The Ideal Gas Law ($Pv=RT$) is essential for calculating the internal energy, enthalpy, and work for ideal gas systems in First Law analyses.

*   **CO4: Determine entropy changes associated with different processes (Knowledge Level: K3)**
    *   As demonstrated, the specific gas constant ($R$) is a critical parameter in the equations used to calculate entropy changes for ideal gases.

*   **CO5: Determine the properties of pure substances (Knowledge Level: K2, K3)**
    *   This topic focuses on gases, which are pure substances. Understanding their behavior via gas constants and deviations from ideal gas law (e.g., using $Z$) falls under determining their properties.

---