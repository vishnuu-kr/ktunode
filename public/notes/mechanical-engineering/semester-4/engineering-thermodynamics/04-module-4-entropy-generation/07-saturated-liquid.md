---
title: "saturated liquid"
subject: "ENGINEERING THERMODYNAMICS"
module: "Module 4: Entropy generation"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462f70"
status: "completed"
scrapedAt: "2026-05-20T17:53:50.797Z"
---
# Engineering Thermodynamics: Module 4 - Entropy Generation

## Topic: Saturated Liquid

This topic delves into the behavior of substances when they exist as saturated liquids, a critical concept for understanding phase changes and entropy generation in thermodynamic systems.

### Learning Outcomes Covered:

*   **Understanding the properties of pure substances:** This topic directly addresses how to determine and interpret the properties of a substance in its saturated liquid state. (CO5: K2, K3)
*   **Understanding the concept of entropy generation:** While this topic focuses on a specific phase, the understanding of saturated liquid properties is fundamental to calculating entropy changes in processes involving phase transitions, a core aspect of entropy generation. (CO4: K3 - foundational knowledge)

### Key Concepts and Definitions:

*   **Pure Substance:** A substance that is homogeneous and has a constant chemical composition. It can exist in different phases (solid, liquid, gas), but the chemical composition remains the same. (Cengel & Boles, Ch. 3; Nag, Ch. 3)
    *   **Example:** Water (H₂O) is a pure substance. A mixture of water and steam is also considered a pure substance, provided the composition is uniform.
*   **Phase:** A physically distinct, chemically homogeneous, and mechanically separable part of a system.
    *   **Example:** Solid ice, liquid water, and gaseous steam are distinct phases of water.
*   **Saturation Temperature ($T_{sat}$):** The temperature at which a pure substance can undergo a phase change at a given pressure. For a given pressure, there is a unique saturation temperature. (Cengel & Boles, Ch. 3; Nag, Ch. 3)
*   **Saturation Pressure ($P_{sat}$):** The pressure at which a pure substance can undergo a phase change at a given temperature. For a given temperature, there is a unique saturation pressure. (Cengel & Boles, Ch. 3; Nag, Ch. 3)
*   **Saturated Liquid:** A liquid that is about to vaporize. It is at the saturation temperature and pressure, and any further addition of heat will cause it to vaporize. (Cengel & Boles, Ch. 3; Nag, Ch. 3)
    *   **Notation:** Properties of saturated liquid are often denoted with the subscript 'f'. For example, specific volume of saturated liquid is $v_f$, internal energy is $u_f$, enthalpy is $h_f$, and entropy is $s_f$.
*   **Saturated Vapor:** A vapor that is about to condense. It is also at the saturation temperature and pressure. (Cengel & Boles, Ch. 3; Nag, Ch. 3)
    *   **Notation:** Properties of saturated vapor are often denoted with the subscript 'g'. For example, specific volume of saturated vapor is $v_g$, internal energy is $u_g$, enthalpy is $h_g$, and entropy is $s_g$.
*   **Saturated Liquid-Vapor Mixture:** A state where both saturated liquid and saturated vapor coexist in equilibrium. (Cengel & Boles, Ch. 3; Nag, Ch. 3)
*   **Quality (x):** The ratio of the mass of vapor to the total mass of the mixture in a saturated liquid-vapor mixture. It ranges from 0 (saturated liquid) to 1 (saturated vapor). (Cengel & Boles, Ch. 3; Nag, Ch. 3)
    *   $x = \frac{m_{vapor}}{m_{total}} = \frac{m_{vapor}}{m_{liquid} + m_{vapor}}$

### Properties of Saturated Liquid:

Understanding the properties of a saturated liquid is crucial for analyzing processes involving phase change, such as boiling or condensation. These properties are typically found in **saturation tables** provided in thermodynamics textbooks.

#### 1. Specific Volume ($v_f$):

*   The specific volume of a saturated liquid is the smallest specific volume among the saturation states.
*   It is highly dependent on temperature and pressure.
*   **Source:** Found in the 'saturated liquid' columns of the saturation tables. (Cengel & Boles, Thermodynamics Tables; Nag, Appendix Tables)

#### 2. Internal Energy ($u_f$):

*   The internal energy of a saturated liquid is the internal energy of the liquid phase at the saturation conditions.
*   **Source:** Found in the 'saturated liquid' columns of the saturation tables.

#### 3. Enthalpy ($h_f$):

*   The enthalpy of a saturated liquid is defined as $h_f = u_f + P_{sat} v_f$.
*   It represents the energy content of the saturated liquid.
*   **Source:** Found in the 'saturated liquid' columns of the saturation tables.
*   **Important Note:** Enthalpy is often tabulated as **enthalpy of vaporization ($h_{fg}$)**, which is the difference in enthalpy between saturated vapor and saturated liquid ($h_{fg} = h_g - h_f$). The enthalpy of the saturated liquid ($h_f$) is the enthalpy of the saturated vapor minus the enthalpy of vaporization ($h_f = h_g - h_{fg}$).

#### 4. Entropy ($s_f$):

*   The entropy of a saturated liquid is the entropy of the liquid phase at saturation conditions.
*   **Source:** Found in the 'saturated liquid' columns of the saturation tables.
*   **Importance in Entropy Generation:** Entropy calculations involving phase change will utilize $s_f$ and $s_g$. For example, in a process where saturated liquid is heated to become saturated vapor at constant pressure, the entropy change per unit mass would be $s_g - s_f$.

#### 5. Gibbs Free Energy ($g_f$) and Helmholtz Free Energy ($a_f$):

*   While less commonly used directly in basic analyses, these thermodynamic potentials also have values for saturated liquid.
*   Their importance lies in understanding phase equilibrium and stability.

### Determining Properties of Saturated Liquid:

To find the properties of a saturated liquid, you need to know either the **saturation temperature** or the **saturation pressure**.

**Steps:**

1.  **Identify the substance:** Determine what pure substance you are dealing with (e.g., water, ammonia, refrigerant R-134a).
2.  **Determine the state:** If the substance is in a saturated liquid state, you will be given either the saturation temperature or the saturation pressure.
3.  **Consult the Saturation Tables:** Locate the appropriate saturation table for the given substance.
    *   If you know the **temperature**, find the row corresponding to that temperature. Read the properties from the columns labeled for "saturated liquid" (denoted by subscript 'f').
    *   If you know the **pressure**, find the row corresponding to that pressure. Read the properties from the columns labeled for "saturated liquid" (denoted by subscript 'f').
4.  **Interpolation (if necessary):** If the exact temperature or pressure is not listed in the table, you will need to use linear interpolation to find the properties.

### Examples:

**Example 1: Properties of Saturated Water at 100°C**

**Given:** Water is in a saturated liquid state at $T = 100^\circ\text{C}$.

**Find:** Specific volume ($v_f$), internal energy ($u_f$), enthalpy ($h_f$), and entropy ($s_f$).

**Solution:**

1.  **Substance:** Water.
2.  **State:** Saturated liquid.
3.  **Known property:** Temperature, $T = 100^\circ\text{C}$.
4.  **Consult Saturation Table for Water (Temperature-based):**
    *   Locate the row for $T = 100^\circ\text{C}$.
    *   At $100^\circ\text{C}$, the saturation pressure ($P_{sat}$) is 101.325 kPa (standard atmospheric pressure).
    *   From the "saturated liquid" columns:
        *   $v_f = 0.001043 \text{ m}^3/\text{kg}$
        *   $u_f = 419.06 \text{ kJ/kg}$
        *   $h_f = 419.17 \text{ kJ/kg}$ (Note: $h_f \approx u_f$ at low pressures because $P v_f$ term is small)
        *   $s_f = 1.3069 \text{ kJ/(kg}\cdot\text{K)}$

**Example 2: Properties of Saturated Refrigerant-134a at 0.3 MPa**

**Given:** Refrigerant-134a is in a saturated liquid state at $P = 0.3 \text{ MPa}$.

**Find:** Specific volume ($v_f$), internal energy ($u_f$), enthalpy ($h_f$), and entropy ($s_f$).

**Solution:**

1.  **Substance:** Refrigerant-134a.
2.  **State:** Saturated liquid.
3.  **Known property:** Pressure, $P = 0.3 \text{ MPa} = 300 \text{ kPa}$.
4.  **Consult Saturation Table for Refrigerant-134a (Pressure-based):**
    *   Locate the row for $P = 300 \text{ kPa}$.
    *   At $300 \text{ kPa}$, the saturation temperature ($T_{sat}$) is approximately $-1.84^\circ\text{C}$.
    *   From the "saturated liquid" columns:
        *   $v_f = 0.0007198 \text{ m}^3/\text{kg}$
        *   $u_f = 185.22 \text{ kJ/kg}$
        *   $h_f = 187.07 \text{ kJ/kg}$
        *   $s_f = 0.9444 \text{ kJ/(kg}\cdot\text{K)}$

**Example 3: Interpolation for Saturated Ammonia**

**Given:** Saturated ammonia as a liquid at $T = 10^\circ\text{C}$.

**Find:** Enthalpy ($h_f$).

**Solution:**

1.  **Substance:** Ammonia.
2.  **State:** Saturated liquid.
3.  **Known property:** Temperature, $T = 10^\circ\text{C}$.
4.  **Consult Saturation Table for Ammonia (Temperature-based):**
    *   Find values around $10^\circ\text{C}$:
        | $T$ ($^\circ\text{C}$) | $P_{sat}$ (kPa) | $v_f$ (m³/kg) | $h_f$ (kJ/kg) | $s_f$ (kJ/kg·K) |
        | :-------------------- | :------------ | :------------ | :------------ | :-------------- |
        | 8                     | 280.32        | 0.001519      | 291.13        | 1.1182          |
        | **10**                | **?**         | **?**         | **?**         | **?**           |
        | 12                    | 321.08        | 0.001530      | 293.40        | 1.1260          |

    *   We need to find $h_f$ at $10^\circ\text{C}$. We can see that $10^\circ\text{C}$ is exactly halfway between $8^\circ\text{C}$ and $12^\circ\text{C}$. We can interpolate linearly for $P_{sat}$, $v_f$, and $s_f$ as well if needed.
    *   Interpolating for $h_f$:
        $h_f(10^\circ\text{C}) = h_f(8^\circ\text{C}) + \frac{10^\circ\text{C} - 8^\circ\text{C}}{12^\circ\text{C} - 8^\circ\text{C}} \times (h_f(12^\circ\text{C}) - h_f(8^\circ\text{C}))$
        $h_f(10^\circ\text{C}) = 291.13 + \frac{2}{4} \times (293.40 - 291.13)$
        $h_f(10^\circ\text{C}) = 291.13 + 0.5 \times 2.27$
        $h_f(10^\circ\text{C}) = 291.13 + 1.135$
        $h_f(10^\circ\text{C}) = 292.265 \text{ kJ/kg}$

### Practice Questions/Exercises:

**Question 1:**
A tank contains 2 kg of saturated liquid R-134a at 400 kPa. Determine the volume occupied by the R-134a.

**Answer 1:**
1.  **Substance:** R-134a.
2.  **State:** Saturated liquid.
3.  **Known property:** Pressure, $P = 400 \text{ kPa}$. Mass, $m = 2 \text{ kg}$.
4.  **Consult Saturation Table for R-134a (Pressure-based):**
    *   At $P = 400 \text{ kPa}$, find $v_f$.
    *   $v_f = 0.0007474 \text{ m}^3/\text{kg}$ (from tables)
5.  **Calculate Volume:**
    *   Volume $V = m \times v_f = 2 \text{ kg} \times 0.0007474 \text{ m}^3/\text{kg} = 0.0014948 \text{ m}^3$.

**Question 2:**
What is the enthalpy of saturated liquid water at a temperature of $150^\circ\text{C}$?

**Answer 2:**
1.  **Substance:** Water.
2.  **State:** Saturated liquid.
3.  **Known property:** Temperature, $T = 150^\circ\text{C}$.
4.  **Consult Saturation Table for Water (Temperature-based):**
    *   At $T = 150^\circ\text{C}$, find $h_f$.
    *   $h_f = 631.69 \text{ kJ/kg}$ (from tables).

**Question 3:**
Find the specific entropy of saturated liquid ammonia at a pressure of 500 kPa.

**Answer 3:**
1.  **Substance:** Ammonia.
2.  **State:** Saturated liquid.
3.  **Known property:** Pressure, $P = 500 \text{ kPa}$.
4.  **Consult Saturation Table for Ammonia (Pressure-based):**
    *   At $P = 500 \text{ kPa}$, find $s_f$.
    *   $s_f = 0.9957 \text{ kJ/(kg}\cdot\text{K)}$ (from tables).

### Important Points to Remember:

*   **Saturation Tables are Essential:** The properties of saturated liquids (and vapors) are found in specific saturation tables provided in textbooks.
*   **Saturation Temperature and Pressure are Linked:** For a pure substance, a given saturation temperature corresponds to a unique saturation pressure, and vice versa.
*   **Subscript 'f':** Always remember that the subscript 'f' denotes properties of the saturated liquid.
*   **Low Compressibility:** Saturated liquids are generally considered incompressible, meaning their specific volume changes very little with pressure. However, their properties (like enthalpy and entropy) change significantly with temperature.
*   **Foundation for Phase Change:** Understanding saturated liquid states is a prerequisite for analyzing any thermodynamic process involving phase change, such as boiling (liquid to vapor) or condensation (vapor to liquid).
*   **Entropy Generation Link:** While this topic focuses on saturated liquid properties, these values ($s_f$) are crucial inputs for calculating entropy changes in processes involving phase transitions, directly impacting entropy generation calculations in Module 4.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |


### Textbooks and Reference Material Used:

*   **Cengel & Boles, Thermodynamics: An Engineering Approach:** Excellent coverage of phase change, saturation properties, and the use of tables.
*   **P.K. Nag, Engineering Thermodynamics:** Provides comprehensive saturation tables and explanations for pure substances.
*   **Moran & Shapiro, Fundamentals of Engineering Thermodynamics:** Offers detailed theoretical background on phase equilibrium and property determination.
*   **Sonntag, Borgnakke, VanWylen, Fundamentals of Thermodynamics:** Another reliable source for saturation data and analysis of phase change.

This concludes the study notes for the "Saturated Liquid" topic within Module 4. Mastering these concepts is fundamental for further thermodynamic analysis.