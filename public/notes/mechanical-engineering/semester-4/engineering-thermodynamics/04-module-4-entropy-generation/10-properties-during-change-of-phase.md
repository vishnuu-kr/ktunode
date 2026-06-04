---
title: "properties during change of phase"
subject: "ENGINEERING THERMODYNAMICS"
module: "Module 4: Entropy generation"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462f73"
status: "completed"
scrapedAt: "2026-05-20T17:53:52.865Z"
---
# Module 4: Entropy Generation - Topic: Properties During Change of Phase

## Introduction

This topic delves into the behavior of substances as they undergo phase transitions (e.g., solid to liquid, liquid to vapor). Understanding the thermodynamic properties during these changes is crucial for analyzing various thermodynamic cycles and processes, particularly those involving heat transfer and work. This aligns with **CO5: Determine the properties of pure substances** at a **Knowledge Level K2, K3**.

## 1. Phases of Pure Substances

A **pure substance** is a substance that is uniform and unchanging in chemical composition. Its properties are the same throughout.

**Phases of Matter:**

*   **Solid:** Molecules are held in fixed positions and vibrate about these positions.
*   **Liquid:** Molecules are closely packed but can move past each other.
*   **Gas/Vapor:** Molecules are far apart and move randomly at high speeds.

## 2. Phase Change Processes

Phase change processes occur at **constant temperature and pressure** for a pure substance. During these processes, the energy added or removed is primarily used to break or form intermolecular bonds, rather than increasing kinetic energy (which would lead to a temperature increase).

**Common Phase Changes:**

*   **Melting (Fusion):** Solid to Liquid
*   **Freezing (Solidification):** Liquid to Solid
*   **Vaporization (Boiling/Evaporation):** Liquid to Vapor
*   **Condensation:** Vapor to Liquid
*   **Sublimation:** Solid to Vapor
*   **Deposition:** Vapor to Solid

## 3. Properties During Phase Change

The behavior of pure substances during phase change is best illustrated using **property diagrams**, such as the Pressure-Temperature (P-T) diagram and the Pressure-Specific Volume (P-v) diagram.

### 3.1. Saturation Saturation Table Data and Saturation Curves

**Saturation Temperature ($T_{sat}$):** The temperature at which a pure substance starts to boil or condense at a given pressure.
**Saturation Pressure ($P_{sat}$):** The pressure at which a pure substance starts to boil or condense at a given temperature.

*   **Cengel & Boles (2011), Chapter 3:** Discusses saturation properties and the use of saturation tables for pure substances like water. They emphasize that for a given saturation pressure, there is a unique saturation temperature, and vice-versa.

**Types of Liquid/Vapor States:**

*   **Compressed Liquid:** Liquid at a temperature below its saturation temperature for the given pressure. Its properties are relatively insensitive to pressure.
*   **Saturated Liquid:** Liquid at its saturation temperature and pressure.
*   **Saturated Vapor:** Vapor at its saturation temperature and pressure.
*   **Saturated Liquid-Vapor Mixture:** Both saturated liquid and saturated vapor coexist in equilibrium. The temperature and pressure are saturation values.
*   **Superheated Vapor:** Vapor at a temperature above its saturation temperature for the given pressure.

### 3.2. The Use of the Quality (x) in the Saturated Mixture Region

In the saturated liquid-vapor mixture region, the state is defined by the temperature (or pressure) and the **quality (x)**.

**Quality (x):** The ratio of the mass of vapor to the total mass of the mixture.
$$x = \frac{m_v}{m_{total}} = \frac{m_v}{m_l + m_v}$$

*   $x = 0$: Saturated Liquid
*   $x = 1$: Saturated Vapor
*   $0 < x < 1$: Saturated Liquid-Vapor Mixture

**Properties of a Saturated Mixture:**

Any intensive property ($\phi$) in the mixture region can be calculated using the quality:
$$\phi = \phi_f + x \phi_{fg}$$
where:
*   $\phi_f$: Property of saturated liquid
*   $\phi_g$: Property of saturated vapor
*   $\phi_{fg} = \phi_g - \phi_f$: Difference between saturated vapor and saturated liquid properties (e.g., $h_{fg} = h_g - h_f$)

**Examples of Properties:**

*   **Specific Volume ($v$):**
    $$v = v_f + x v_{fg}$$
    where $v_{fg} = v_g - v_f$.
*   **Internal Energy ($u$):**
    $$u = u_f + x u_{fg}$$
    where $u_{fg} = u_g - u_f$.
*   **Enthalpy ($h$):**
    $$h = h_f + x h_{fg}$$
    where $h_{fg} = h_g - h_f$. This is the latent heat of vaporization.
*   **Entropy ($s$):**
    $$s = s_f + x s_{fg}$$
    where $s_{fg} = s_g - s_f$.

*   **P.K. Nag (2017), Chapter 4:** Provides detailed explanations and tables for saturated properties of various substances, including water. He emphasizes the importance of the quality in determining properties within the saturation region.
*   **Sonntag, Borgnakke, VanWylen (2014), Chapter 4:** Also covers saturation properties and the use of quality for mixtures. They present property tables and diagrams that are essential for solving problems.

### 3.3. Property Diagrams for Phase Change

**3.3.1. P-v Diagram:**

*   Shows pressure on the y-axis and specific volume on the x-axis.
*   **Dome:** The region bounded by the saturated liquid line and the saturated vapor line is the **saturation dome**.
*   **Critical Point:** The point where the saturated liquid and saturated vapor lines meet. Above the critical temperature and pressure, the distinction between liquid and vapor disappears.
*   **Triple Point:** A point on the P-T diagram where solid, liquid, and vapor phases coexist in equilibrium.
*   **Constant Pressure Lines (Isobars):** In the saturation region, these are horizontal lines.
*   **Constant Temperature Lines (Isotherms):** In the saturation region, these are also horizontal lines.

**3.3.2. T-s Diagram:**

*   Shows temperature on the y-axis and specific entropy on the x-axis.
*   The shape of the saturation dome on the T-s diagram is different from the P-v diagram.
*   **Constant Pressure Lines (Isobars):** In the saturation region, these are curved lines that become steeper as pressure increases.
*   **Constant Volume Lines (Isochoric):** In the saturation region, these are also curved lines.

*   **Moran & Shapiro (2006), Chapter 4:** Provides comprehensive coverage of property diagrams, explaining how to interpret them and use them for analyzing phase change processes. They highlight the significance of the saturation dome and critical point.
*   **Ansermet & Brechet (2019), Chapter 2:** Discusses the thermodynamic potentials and their relation to property diagrams, offering a more fundamental perspective on phase transitions.

### 3.4. Latent Heat

**Latent Heat:** The heat absorbed or released during a phase change at constant temperature and pressure.

*   **Latent Heat of Fusion:** Energy required to melt a solid into a liquid.
*   **Latent Heat of Vaporization:** Energy required to vaporize a liquid into a vapor. This is the dominant latent heat in many engineering applications.

The latent heat of vaporization ($h_{fg}$) is a crucial property for analyzing processes involving boiling and condensation. It decreases with increasing temperature and pressure, becoming zero at the critical point.

$$h_{fg} = h_g - h_f$$

### 3.5. Compressed Liquid and Superheated Vapor

*   **Compressed Liquid:** For compressed liquids, the properties depend on both temperature and pressure. However, the dependence on pressure is often weak, so properties of compressed liquids can be approximated by those of saturated liquid at the same temperature.
    $$\phi_{compressed liquid}(T, P) \approx \phi_f(T)$$
    *(Cengel & Boles, 2011)*
*   **Superheated Vapor:** For superheated vapors, properties are typically found using superheated vapor tables or by using generalized correlations.
    *(P.K. Nag, 2017)*

## 4. Entropy Generation During Phase Change

While phase change at equilibrium (constant T and P) is internally reversible and generates no entropy within the system, the overall process of achieving the phase change often involves irreversibilities (e.g., heat transfer across a finite temperature difference).

*   **Entropy Change of a Pure Substance:**
    *   **In the compressed liquid or superheated vapor region:**
        $$\Delta s = s(T_2, P_2) - s(T_1, P_1)$$
        *(Cengel & Boles, 2011)*
    *   **In the saturated mixture region:**
        $$\Delta s = s_f + x_2 s_{fg} - (s_f + x_1 s_{fg}) = (s_f + x_2 s_{fg}) - (s_f + x_1 s_{fg})$$
        This can also be written as:
        $$\Delta s = s_f + x \Delta s_{fg}$$
        where $s_{fg} = s_g - s_f$.
    *   **During phase change (e.g., saturated liquid to saturated vapor at constant T and P):**
        $$\Delta s_{phase change} = \frac{h_{fg}}{T_{sat}}$$
        This is a key equation relating entropy change to the latent heat and saturation temperature.
    *   **Moran & Shapiro (2006)** and **Sonntag, Borgnakke, VanWylen (2014)** provide detailed derivations and examples of entropy changes for various processes, including those involving phase transitions. They emphasize that for a process occurring at constant temperature, the entropy change is simply the heat transfer divided by that temperature.

## 5. Key Concepts and Definitions

*   **Pure Substance:** Uniform and unchanging chemical composition.
*   **Phase Change:** Transition from one phase to another (solid, liquid, vapor).
*   **Saturation Temperature ($T_{sat}$):** Temperature of phase change at a given pressure.
*   **Saturation Pressure ($P_{sat}$):** Pressure of phase change at a given temperature.
*   **Quality (x):** Ratio of vapor mass to total mass in a mixture.
*   **Saturated Liquid:** Liquid at its boiling/condensation point.
*   **Saturated Vapor:** Vapor at its condensation/boiling point.
*   **Saturation Dome:** Region on property diagrams where liquid and vapor coexist.
*   **Critical Point:** Point where the distinction between liquid and vapor vanishes.
*   **Latent Heat:** Energy absorbed/released during phase change.
*   **Latent Heat of Vaporization ($h_{fg}$):** Heat to convert liquid to vapor.

## 6. Important Points to Remember

*   Phase changes occur at constant temperature and pressure for pure substances.
*   The quality ($x$) is essential for determining properties within the saturated mixture region.
*   Property tables (saturation, compressed liquid, superheated vapor) are indispensable tools.
*   Property diagrams (P-v, T-s) provide visual representations of phase change behavior.
*   Latent heat of vaporization ($h_{fg}$) is a significant thermodynamic property.
*   The entropy change during a phase change at constant temperature is $h_{fg}/T_{sat}$.
*   Compressed liquid properties can often be approximated by saturated liquid properties at the same temperature.

## 7. Practice Questions and Exercises

**Question 1 (CO5, K2):**
What is the difference between saturated liquid and saturated vapor?

**Answer 1:**
Saturated liquid is a liquid at its boiling point, ready to vaporize. Saturated vapor is a vapor at its condensation point, ready to condense. At the saturation point, both phases can coexist.

**Question 2 (CO5, K3):**
Consider 2 kg of water at 100°C. If the quality is 0.8, determine:
a) The pressure of the water.
b) The specific volume.
c) The specific enthalpy.

*(Use steam tables for water, available in Cengel & Boles or P.K. Nag)*

**Solution 2:**
At 100°C, water is in the saturation region.
a) The pressure of the water is the saturation pressure at 100°C, which is $P_{sat} = 101.325$ kPa (1 atm).

From steam tables at 100°C:
$v_f = 0.001043 \, \text{m}^3/\text{kg}$
$v_g = 1.673 \, \text{m}^3/\text{kg}$
$h_f = 419.17 \, \text{kJ/kg}$
$h_g = 2257.5 \, \text{kJ/kg}$

$v_{fg} = v_g - v_f = 1.673 - 0.001043 = 1.671957 \, \text{m}^3/\text{kg}$
$h_{fg} = h_g - h_f = 2257.5 - 419.17 = 1838.33 \, \text{kJ/kg}$

b) Specific volume:
$v = v_f + x v_{fg}$
$v = 0.001043 + 0.8 \times 1.671957$
$v = 0.001043 + 1.3375656$
$v \approx 1.3386 \, \text{m}^3/\text{kg}$

c) Specific enthalpy:
$h = h_f + x h_{fg}$
$h = 419.17 + 0.8 \times 1838.33$
$h = 419.17 + 1470.664$
$h \approx 1889.83 \, \text{kJ/kg}$

**Question 3 (CO4, K3):**
Calculate the entropy change when 1 kg of saturated liquid water at 100°C is vaporized into saturated vapor at the same temperature.

**Answer 3:**
The process is a phase change at constant temperature.
$T_{sat} = 100^\circ\text{C} = 100 + 273.15 = 373.15 \, \text{K}$
From steam tables at 100°C, $h_{fg} = 1838.33 \, \text{kJ/kg}$.

The entropy change ($\Delta s$) is given by:
$\Delta s = \frac{h_{fg}}{T_{sat}}$
$\Delta s = \frac{1838.33 \, \text{kJ/kg}}{373.15 \, \text{K}}$
$\Delta s \approx 4.926 \, \text{kJ/(kg}\cdot\text{K)}$

For 1 kg of water, the total entropy change is $1 \, \text{kg} \times 4.926 \, \text{kJ/(kg}\cdot\text{K)} = 4.926 \, \text{kJ/K}$.

**Question 4 (CO5, K3):**
A rigid tank contains 5 kg of refrigerant-134a at 100 kPa and 20°C. Determine the volume of the tank and the state of the refrigerant.

*(Assume refrigerant-134a properties can be found in standard tables)*

**Solution 4:**
Given: $m = 5 \, \text{kg}$, $P = 100 \, \text{kPa}$, $T = 20^\circ\text{C}$.

First, we need to determine the state of the refrigerant-134a. We compare the given temperature with the saturation temperature at the given pressure.
From refrigerant-134a tables, at $P = 100 \, \text{kPa}$:
$T_{sat} = -24.22^\circ\text{C}$

Since the given temperature ($20^\circ\text{C}$) is much higher than the saturation temperature ($-24.22^\circ\text{C}$) at 100 kPa, the refrigerant-134a is in the **superheated vapor region**.

Now, we find the specific volume ($v$) of superheated refrigerant-134a at $P = 100 \, \text{kPa}$ and $T = 20^\circ\text{C}$ from superheated tables.
From superheated refrigerant-134a tables:
$v(100 \, \text{kPa}, 20^\circ\text{C}) \approx 0.2420 \, \text{m}^3/\text{kg}$

The volume of the tank ($V$) is:
$V = m \times v$
$V = 5 \, \text{kg} \times 0.2420 \, \text{m}^3/\text{kg}$
$V \approx 1.21 \, \text{m}^3$

The state of the refrigerant is **superheated vapor**.

## 8. Alignment with Course Outcomes

*   **CO1 & CO2 (Knowledge Level K1, K2):** This topic reinforces the fundamental concepts of phases, phase changes, and the properties associated with them, building upon the basic understanding of thermodynamics.
*   **CO4 (Knowledge Level K3):** Determining entropy changes during phase transitions ($h_{fg}/T_{sat}$) is a direct application of this outcome.
*   **CO5 (Knowledge Level K2, K3):** The core of this topic is understanding and determining the properties (specific volume, enthalpy, entropy) of pure substances during phase changes, utilizing saturation tables, quality, and property diagrams.

This module lays the groundwork for understanding more complex thermodynamic processes and cycles where phase changes are integral, such as in power cycles (Rankine) and refrigeration cycles.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
