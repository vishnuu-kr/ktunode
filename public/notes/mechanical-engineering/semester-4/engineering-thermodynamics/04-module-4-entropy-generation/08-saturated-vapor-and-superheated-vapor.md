---
title: "saturated vapor and superheated vapor"
subject: "ENGINEERING THERMODYNAMICS"
module: "Module 4: Entropy generation"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462f71"
status: "completed"
scrapedAt: "2026-05-20T17:53:51.504Z"
---
# ENGINEERING THERMODYNAMICS - Module 4: Entropy Generation

## Topic: Saturated Vapor and Superheated Vapor

---

### **Introduction**

This module delves into the concept of entropy generation, a fundamental aspect of thermodynamics that governs the irreversibility of processes. Understanding the behavior of pure substances in different phases, particularly saturated and superheated vapor, is crucial for analyzing and predicting thermodynamic processes. These states are fundamental to understanding the operation of power cycles (like steam power plants) and refrigeration cycles.

---

### **Learning Outcomes Addressed in this Topic:**

*   **LO1:** Understand the concepts of saturated vapor and superheated vapor.
*   **LO2:** Differentiate between saturated vapor and superheated vapor states.
*   **LO3:** Identify the properties of saturated and superheated vapors using thermodynamic property tables.
*   **LO4:** Explain the significance of these phases in thermodynamic cycles.

---

### **Course Outcomes Alignment:**

*   **CO1:** Understand basic concepts of thermodynamics (Knowledge Level: K1, K2) - *This topic contributes by defining states of pure substances.*
*   **CO2:** Understand the laws of thermodynamics (Knowledge Level: K1, K2) - *While not directly calculating entropy generation, understanding these phases is essential for applying the Second Law.*
*   **CO5:** Determine the properties of pure substances (Knowledge Level: K2, K3) - *This is a primary focus of this topic, involving the use of property tables.*

---

### **Key Concepts and Definitions**

#### **Pure Substances and Phase Change**

*   **Pure Substance:** A substance that has a fixed chemical composition throughout, even though it may exist in different phases. Examples include water ($H_2O$), ammonia ($NH_3$), and refrigerant R-134a.
*   **Phase Change:** The process where a pure substance transitions from one phase (solid, liquid, vapor) to another. This occurs at constant temperature and pressure during a phase change for pure substances.

#### **Saturation States**

*   **Saturation Temperature ($T_{sat}$):** The temperature at which a pure substance can change phase at a given pressure.
*   **Saturation Pressure ($P_{sat}$):** The pressure at which a pure substance can change phase at a given temperature.
*   **Saturation Line:** The boundary on a phase diagram (like T-v or P-v diagrams) separating the liquid and vapor phases.
*   **Saturated Liquid:** A liquid that is about to vaporize. At this state, any additional heat transfer will cause it to vaporize.
*   **Saturated Vapor:** A vapor that is about to condense. At this state, any additional heat transfer will cause it to condense.
*   **Saturated Liquid-Vapor Mixture:** A region where both saturated liquid and saturated vapor coexist in equilibrium.
    *   **Quality (x):** The ratio of the mass of vapor to the total mass of the mixture.
        *   $x = \frac{m_{vapor}}{m_{total}} = \frac{m_{vapor}}{m_{liquid} + m_{vapor}}$
        *   $x = 0$ for saturated liquid
        *   $x = 1$ for saturated vapor
        *   $0 < x < 1$ for a saturated mixture

#### **Superheated Vapor**

*   **Superheated Vapor:** A vapor that is not about to condense. It exists at a temperature higher than its saturation temperature at the given pressure.
*   **Degrees of Superheat:** The difference between the actual temperature of the superheated vapor and its saturation temperature at that pressure.
    *   Degrees of Superheat $= T - T_{sat} @ P$

---

### **Thermodynamic Property Tables**

Thermodynamic property tables are essential for determining the state and properties of pure substances. For water and refrigerants, these tables are organized based on different states.

#### **Saturated Tables**

*   **Saturated Water - Temperature Table:** Lists properties ($P_{sat}$, $v_f$, $v_g$, $h_f$, $h_{fg}$, $h_g$, $s_f$, $s_{fg}$, $s_g$) as a function of saturation temperature.
    *   $v_f$: Specific volume of saturated liquid
    *   $v_g$: Specific volume of saturated vapor
    *   $v_f = v_{f} + x v_{fg}$ (Specific volume of saturated mixture)
    *   $h_f$: Specific enthalpy of saturated liquid
    *   $h_{fg}$: Latent heat of vaporization (difference in enthalpy between saturated vapor and saturated liquid: $h_g - h_f$)
    *   $h_g$: Specific enthalpy of saturated vapor
    *   $h = h_f + x h_{fg}$ (Specific enthalpy of saturated mixture)
    *   Similar relations apply for entropy ($s = s_f + x s_{fg}$).
*   **Saturated Water - Pressure Table:** Lists properties as a function of saturation pressure. The values are the same as the temperature table but organized differently.

**[Cengel & Boles, Thermodynamics: An Engineering Approach, Chapter 3]** provides extensive saturation tables for water and other refrigerants.

#### **Superheated Tables**

*   **Superheated Water Table:** Lists properties ($T$, $P$, $v$, $u$, $h$, $s$) for superheated vapor. These tables are typically organized by pressure, with different temperatures listed for each pressure.
*   **Finding Properties in Superheated Tables:**
    1.  Locate the pressure in the table.
    2.  Within that pressure section, find the row corresponding to the given temperature.
    3.  Read the desired properties ($v, u, h, s$).
    4.  **Interpolation:** If the exact temperature is not listed, linear interpolation is used to find the property values.

**[P.K. Nag, Engineering Thermodynamics, Chapter 2]** also covers the usage of property tables for pure substances.

---

### **Examples**

#### **Example 1: Saturated Vapor Properties**

**Problem:** Determine the specific volume, internal energy, and enthalpy of saturated water vapor at 100°C.

**Solution:**
1.  **Identify the state:** The substance is water, and it's in the saturated vapor state at 100°C.
2.  **Consult the Saturated Water - Temperature Table:** Find the row corresponding to $T = 100^\circ C$.
3.  **Read the properties:**
    *   From the table, at 100°C, $P_{sat} = 101.325 \text{ kPa}$ (standard atmospheric pressure).
    *   Specific volume of saturated vapor ($v_g$) $= 1.673 \text{ m}^3/\text{kg}$.
    *   Specific internal energy of saturated vapor ($u_g$) $= 2506.0 \text{ kJ}/\text{kg}$.
    *   Specific enthalpy of saturated vapor ($h_g$) $= 2675.4 \text{ kJ}/\text{kg}$.

#### **Example 2: Saturated Mixture Properties**

**Problem:** Determine the specific enthalpy of 2 kg of water at 150°C, which is a mixture with a quality of 80% (x = 0.8).

**Solution:**
1.  **Identify the state:** The substance is water, at 150°C, and it's a saturated mixture with $x=0.8$.
2.  **Consult the Saturated Water - Temperature Table:** Find the row corresponding to $T = 150^\circ C$.
3.  **Read the relevant properties:**
    *   $h_f$ (enthalpy of saturated liquid) $= 631.6 \text{ kJ}/\text{kg}$.
    *   $h_{fg}$ (enthalpy of vaporization) $= 2113.4 \text{ kJ}/\text{kg}$.
4.  **Calculate the specific enthalpy of the mixture:**
    *   $h = h_f + x h_{fg}$
    *   $h = 631.6 \text{ kJ}/\text{kg} + 0.8 \times 2113.4 \text{ kJ}/\text{kg}$
    *   $h = 631.6 + 1690.72 = 2322.32 \text{ kJ}/\text{kg}$.
5.  **Calculate the total enthalpy:**
    *   Total enthalpy $= m \times h = 2 \text{ kg} \times 2322.32 \text{ kJ}/\text{kg} = 4644.64 \text{ kJ}$.

#### **Example 3: Superheated Vapor Properties**

**Problem:** Determine the specific volume and enthalpy of steam at 1 MPa and 300°C.

**Solution:**
1.  **Identify the state:** The substance is water (steam), at $P = 1 \text{ MPa}$ and $T = 300^\circ C$.
2.  **Determine the phase:**
    *   Consult the Saturated Water - Pressure Table for 1 MPa.
    *   $T_{sat} @ 1 \text{ MPa} = 179.89^\circ C$.
    *   Since the actual temperature ($300^\circ C$) is greater than the saturation temperature ($179.89^\circ C$), the steam is in the superheated vapor state.
3.  **Consult the Superheated Water Table:** Locate the section for $P = 1 \text{ MPa}$.
4.  **Find the temperature and read properties:** In the 1 MPa section, find the row for $T = 300^\circ C$.
    *   Specific volume ($v$) $= 0.2578 \text{ m}^3/\text{kg}$.
    *   Specific enthalpy ($h$) $= 3051.6 \text{ kJ}/\text{kg}$.

#### **Example 4: Interpolation in Superheated Tables**

**Problem:** Determine the specific enthalpy of steam at 0.5 MPa and 250°C.

**Solution:**
1.  **Identify the state:** Water, $P = 0.5 \text{ MPa}$, $T = 250^\circ C$.
2.  **Determine the phase:**
    *   From the saturated table at 0.5 MPa, $T_{sat} = 151.83^\circ C$.
    *   Since $250^\circ C > 151.83^\circ C$, it's superheated vapor.
3.  **Consult the Superheated Water Table:** Locate the section for $P = 0.5 \text{ MPa}$.
4.  **Identify relevant values:** The table might not have 250°C listed. Suppose it has entries for 200°C and 300°C:
    *   At $P = 0.5 \text{ MPa}, T = 200^\circ C$: $h_{200} = 2855.8 \text{ kJ}/\text{kg}$
    *   At $P = 0.5 \text{ MPa}, T = 300^\circ C$: $h_{300} = 3051.6 \text{ kJ}/\text{kg}$
5.  **Perform linear interpolation:**
    *   $\frac{h - h_{200}}{h_{300} - h_{200}} = \frac{T - 200}{300 - 200}$
    *   $\frac{h - 2855.8}{3051.6 - 2855.8} = \frac{250 - 200}{300 - 200}$
    *   $\frac{h - 2855.8}{195.8} = \frac{50}{100} = 0.5$
    *   $h - 2855.8 = 0.5 \times 195.8 = 97.9$
    *   $h = 2855.8 + 97.9 = 2953.7 \text{ kJ}/\text{kg}$.

**[Moran & Shapiro, Fundamentals of Engineering Thermodynamics, Chapter 5]** provides a detailed explanation of interpolation techniques for thermodynamic properties.

---

### **Significance in Thermodynamic Cycles**

Understanding saturated and superheated states is fundamental for analyzing and designing various thermodynamic cycles:

*   **Rankine Cycle (Steam Power Plants):**
    *   **Boiler:** Water is heated, undergoes phase change (evaporation), and becomes superheated steam. The exit of the boiler is typically in the superheated region to improve efficiency and prevent condensation in the turbine.
    *   **Turbine:** Superheated steam expands, doing work.
    *   **Condenser:** Steam condenses back into saturated liquid.
    *   **Pump:** Saturated liquid is pumped to high pressure.
*   **Refrigeration Cycles:**
    *   **Evaporator:** Refrigerant absorbs heat and evaporates, becoming superheated vapor at low pressure.
    *   **Compressor:** Superheated vapor is compressed to high pressure and temperature.
    *   **Condenser:** Refrigerant releases heat and condenses into saturated liquid.
    *   **Expansion Valve:** Saturated liquid expands to low pressure and temperature.

**[Sonntag, Borgnakke, & VanWylen, Fundamentals of Thermodynamics, Chapter 7]** discusses these cycles in detail, emphasizing the phase transitions and states of the working fluid.

---

### **Important Points to Remember**

*   **Phase Change:** Occurs at constant temperature and pressure for pure substances.
*   **Saturation Tables:** Used for saturated liquids, saturated vapors, and saturated mixtures. The quality ($x$) is crucial for mixtures.
*   **Superheated Tables:** Used for vapors at temperatures above their saturation temperature at a given pressure.
*   **Interpolation:** Necessary when the exact property values are not listed in the tables.
*   **Phase Identification:** Always check the saturation temperature at the given pressure to determine if a substance is superheated or a saturated mixture. If $T > T_{sat}$, it's superheated. If $T = T_{sat}$, it's a saturated mixture or pure saturated liquid/vapor. If $T < T_{sat}$, it's a compressed liquid.

---

### **Practice Questions and Exercises**

**Question 1:**
A rigid tank contains 5 kg of refrigerant-134a at a pressure of 0.3 MPa. The tank's volume is 0.1 m³. Determine the temperature, specific enthalpy, and internal energy of the refrigerant. Is it a saturated mixture or superheated vapor?

**Answer 1:**
1.  **Calculate specific volume:** $v = V/m = 0.1 \text{ m}^3 / 5 \text{ kg} = 0.02 \text{ m}^3/\text{kg}$.
2.  **Consult R-134a Saturation Table (Pressure Table):** At $P = 0.3 \text{ MPa}$ (3 bar):
    *   $v_f = 0.0007533 \text{ m}^3/\text{kg}$
    *   $v_g = 0.06851 \text{ m}^3/\text{kg}$
3.  **Determine the phase:** Since $v_f < v < v_g$ ($0.0007533 < 0.02 < 0.06851$), the refrigerant is a **saturated mixture**.
4.  **Calculate quality (x):**
    *   $v = v_f + x v_{fg}$
    *   $v_{fg} = v_g - v_f = 0.06851 - 0.0007533 = 0.0677567 \text{ m}^3/\text{kg}$
    *   $0.02 = 0.0007533 + x (0.0677567)$
    *   $x = (0.02 - 0.0007533) / 0.0677567 \approx 0.284$
5.  **Consult R-134a Saturation Table (Pressure Table) for enthalpy:**
    *   $h_f = 52.46 \text{ kJ}/\text{kg}$
    *   $h_{fg} = 197.68 \text{ kJ}/\text{kg}$
6.  **Calculate specific enthalpy (h):**
    *   $h = h_f + x h_{fg} = 52.46 + 0.284 \times 197.68 = 52.46 + 56.14 = 108.6 \text{ kJ}/\text{kg}$.
7.  **Determine temperature:** From the saturation table at 0.3 MPa, $T_{sat} = 11.17^\circ C$.

**Summary:** Temperature = $11.17^\circ C$, Specific Enthalpy = $108.6 \text{ kJ}/\text{kg}$, Internal Energy can be calculated similarly using $u_f$ and $u_{fg}$. The refrigerant is a saturated mixture.

---

**Question 2:**
Determine the specific volume and entropy of steam at 2 MPa and 400°C using steam tables.

**Answer 2:**
1.  **Determine the phase:**
    *   Consult Saturated Water - Pressure Table for $P = 2 \text{ MPa}$.
    *   $T_{sat} @ 2 \text{ MPa} = 212.38^\circ C$.
    *   Since $400^\circ C > 212.38^\circ C$, the steam is superheated vapor.
2.  **Consult Superheated Water Table:** Locate the section for $P = 2 \text{ MPa}$.
3.  **Find the temperature and read properties:** In the 2 MPa section, at $T = 400^\circ C$:
    *   Specific volume ($v$) $= 0.1334 \text{ m}^3/\text{kg}$.
    *   Specific entropy ($s$) $= 7.1277 \text{ kJ}/(\text{kg} \cdot K)$.

---

**Question 3:**
Water at 100°C exists as a saturated mixture with a quality of 90%. Calculate the specific internal energy and specific volume of this mixture.

**Answer 3:**
1.  **Identify the state:** Water, saturated mixture at $T = 100^\circ C$, $x = 0.9$.
2.  **Consult Saturated Water - Temperature Table:** At $T = 100^\circ C$:
    *   $v_f = 0.001043 \text{ m}^3/\text{kg}$
    *   $v_g = 1.673 \text{ m}^3/\text{kg}$
    *   $u_f = 419.10 \text{ kJ}/\text{kg}$
    *   $u_{fg} = 2087.0 \text{ kJ}/\text{kg}$
3.  **Calculate specific volume:**
    *   $v = v_f + x v_{fg}$
    *   $v_{fg} = v_g - v_f = 1.673 - 0.001043 = 1.671957 \text{ m}^3/\text{kg}$
    *   $v = 0.001043 + 0.9 \times 1.671957 = 0.001043 + 1.50476 = 1.5058 \text{ m}^3/\text{kg}$.
4.  **Calculate specific internal energy:**
    *   $u = u_f + x u_{fg}$
    *   $u = 419.10 + 0.9 \times 2087.0 = 419.10 + 1878.3 = 2297.4 \text{ kJ}/\text{kg}$.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |


### **Further Reading & References:**

*   **Cengel & Boles, Thermodynamics: An Engineering Approach:** Chapters on the properties of pure substances and basic concepts.
*   **P.K. Nag, Engineering Thermodynamics:** Chapters covering pure substances, phase equilibrium, and property tables.
*   **Moran & Shapiro, Fundamentals of Engineering Thermodynamics:** Chapters on the thermodynamic properties of substances and phase diagrams.
*   **Sonntag, Borgnakke, & VanWylen, Fundamentals of Thermodynamics:** Sections on phase changes and the use of tables.

---
**End of Topic Notes**