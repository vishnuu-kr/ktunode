---
title: "property calculations using steam tables"
subject: "ENGINEERING THERMODYNAMICS"
module: "Module 4: Entropy generation"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462f77"
status: "completed"
scrapedAt: "2026-05-20T17:53:55.583Z"
---
# Engineering Thermodynamics: Module 4 - Entropy Generation

## Topic: Property Calculations Using Steam Tables

This section focuses on how to practically determine the thermodynamic properties of pure substances, specifically water in its various phases, using steam tables. This is a crucial skill for applying thermodynamic principles to real-world engineering problems, especially those involving power cycles and refrigeration cycles where water is often the working fluid. This topic directly supports **CO5: Determine the properties of pure substances (Knowledge Level: K2, K3)**.

---

### 1. Introduction to Pure Substances and Steam Tables

**Definition:** A **pure substance** is a substance that is uniform and invariable in chemical composition. It can exist in different phases (solid, liquid, vapor) but its chemical identity remains the same. Water (H₂O) is a common example of a pure substance.

**Phases of Water:**
*   **Solid (Ice):** Molecules are in fixed positions in a crystalline structure.
*   **Liquid (Water):** Molecules are closely packed but can move around.
*   **Vapor (Steam):** Molecules are far apart and move randomly.

**Importance of Steam Tables:**
Steam tables are compilations of experimentally determined thermodynamic properties of a pure substance, typically water, as a function of its temperature and pressure. They are essential tools for:
*   Determining unknown properties when two independent properties are known.
*   Analyzing the energy transfers and transformations in thermodynamic systems involving steam.
*   Understanding the behavior of working fluids in various cycles.

**Reference Textbooks:**
*   **Cengel & Boles:** Chapter 3 (Properties of Pure Substances) extensively covers the concept of pure substances and introduces the use of property tables.
*   **P.K. Nag:** Chapter 4 (Properties of Steam) is dedicated to steam tables and their application.
*   **Sonntag, Borgnakke, & VanWylen:** Chapter 5 (Properties of Pure Substances) and Chapter 6 (Thermodynamic Cycles) illustrate the practical use of steam tables.

---

### 2. Understanding the States of Water and Corresponding Properties

Water can exist in three main phases relevant to steam tables:

*   **Compressed Liquid (Subcooled Liquid):** The liquid is not about to vaporize. Its properties are primarily dependent on temperature and only weakly dependent on pressure.
    *   *Key Property:* Can be approximated as saturated liquid at the same temperature. (Cengel & Boles, P.K. Nag)
*   **Saturated Liquid:** The liquid is at the boiling point and about to vaporize.
*   **Saturated Vapor:** The vapor is at the condensation point and about to condense.
*   **Saturated Liquid-Vapor Mixture:** Both liquid and vapor phases coexist in equilibrium.
    *   *Key Property:* Quality ($x$) is introduced, representing the fraction of mass that is vapor.
*   **Superheated Vapor:** The vapor is at a temperature higher than its saturation temperature at the given pressure.

---

### 3. Types of Steam Tables

Steam tables are typically organized in two main ways:

#### 3.1. Saturation Tables

These tables list properties for saturated liquid and saturated vapor at various **temperatures** (Saturated-Temperature tables) or **pressures** (Saturated-Pressure tables).

*   **Saturated-Temperature Tables:**
    *   Columns usually include:
        *   Temperature ($T$)
        *   Pressure ($P_{sat}$) - Saturation pressure corresponding to $T$.
        *   Specific volume ($v_f$ - saturated liquid, $v_g$ - saturated vapor)
        *   Internal energy ($u_f$, $u_g$)
        *   Enthalpy ($h_f$, $h_g$)
        *   Entropy ($s_f$, $s_g$)
    *   **Notation:**
        *   Subscript 'f' denotes saturated liquid.
        *   Subscript 'g' denotes saturated vapor.
        *   Subscript 'fg' denotes the difference between vapor and liquid properties ($v_{fg} = v_g - v_f$, $h_{fg} = h_g - h_f$, $s_{fg} = s_g - s_f$). $h_{fg}$ is also known as the latent heat of vaporization.

*   **Saturated-Pressure Tables:**
    *   Similar columns as temperature tables, but properties are listed against saturation pressure.

**Key Concept: Saturation Property:**
The saturation pressure (or temperature) is the pressure (or temperature) at which a pure substance can undergo a phase change at a given temperature (or pressure). (Cengel & Boles)

#### 3.2. Superheated Tables

These tables provide properties for superheated vapor.

*   **Organization:** Typically organized by **pressure**, and for each pressure, properties are listed at various **temperatures**.
*   **Columns usually include:**
    *   Pressure ($P$)
    *   Temperature ($T$)
    *   Specific volume ($v$)
    *   Internal energy ($u$)
    *   Enthalpy ($h$)
    *   Entropy ($s$)
    *   Specific heat at constant pressure ($c_p$) - less common in basic tables.

#### 3.3. Compressed Liquid Tables (or Subcooled Liquid Tables)

These tables are less common than superheated tables, as properties of compressed liquids are often approximated using saturated liquid properties at the same temperature. However, for high accuracy, they provide:

*   **Organization:** Typically organized by **temperature**, and for each temperature, properties are listed at various **pressures**.
*   **Columns usually include:**
    *   Temperature ($T$)
    *   Pressure ($P$)
    *   Specific volume ($v$)
    *   Internal energy ($u$)
    *   Enthalpy ($h$)
    *   Entropy ($s$)

**Approximation for Compressed Liquid:**
For compressed liquid, $v \approx v_f(T)$, $u \approx u_f(T)$, $h \approx h_f(T) + v_f(T)(P - P_{sat}(T))$, and $s \approx s_f(T)$. This approximation is valid when the pressure is not significantly higher than the saturation pressure at that temperature. (P.K. Nag)

---

### 4. Determining the State of a Substance

To use steam tables effectively, you must first determine the state of the substance. This is done by comparing the given properties (e.g., pressure and temperature, or pressure and quality) with the properties in the tables.

**Steps to Determine the State:**

1.  **Identify the given properties:** You will typically be given at least two independent intensive properties (e.g., $P$ and $T$, $T$ and $x$, $P$ and $v$).
2.  **Locate the relevant table:**
    *   If $T$ is given, look at the Saturated-Temperature table first.
    *   If $P$ is given, look at the Saturated-Pressure table first.
    *   If the given $T$ is greater than $T_{sat}$ at the given $P$ (or given $P$ is less than $P_{sat}$ at the given $T$), the substance is likely **superheated vapor**. Go to the Superheated Vapor tables.
    *   If the given $T$ is less than $T_{sat}$ at the given $P$ (or given $P$ is greater than $P_{sat}$ at the given $T$), the substance is likely **compressed liquid**.
    *   If the given $T$ equals $T_{sat}$ at the given $P$ (or given $P$ equals $P_{sat}$ at the given $T$), the substance is in the **saturated phase**.
3.  **Within the saturated phase, determine the condition:**
    *   If **quality ($x$)** is given (and you are in the saturated region), use the following equations:
        *   $v = v_f + x v_{fg}$
        *   $u = u_f + x u_{fg}$
        *   $h = h_f + x h_{fg}$
        *   $s = s_f + x s_{fg}$
    *   If **specific volume ($v$)** is given in the saturated region:
        *   If $v_f < v < v_g$, it's a saturated mixture, and you can calculate quality: $x = \frac{v - v_f}{v_{fg}}$. Then use this quality to find other properties.
        *   If $v = v_f$, it's saturated liquid.
        *   If $v = v_g$, it's saturated vapor.
        *   If $v < v_f$, it's compressed liquid.
        *   If $v > v_g$, it's superheated vapor.

**Important Point to Remember:** For a pure substance, two independent intensive properties are sufficient to fix its state. (Cengel & Boles)

---

### 5. Property Calculations Using Steam Tables

Once the state is determined, you can extract the required properties from the appropriate table.

#### 5.1. Calculations in the Saturated Region (Mixture)

When the substance is a saturated liquid-vapor mixture (state identified by $T$ or $P$ and $x$ or $v$ in the range $v_f < v < v_g$), the following relations are used:

*   **Specific Volume ($v$):**
    $v = v_f + x(v_g - v_f) = v_f + x v_{fg}$
*   **Internal Energy ($u$):**
    $u = u_f + x(u_g - u_f) = u_f + x u_{fg}$
*   **Enthalpy ($h$):**
    $h = h_f + x(h_g - h_f) = h_f + x h_{fg}$
*   **Entropy ($s$):**
    $s = s_f + x(s_g - s_f) = s_f + x s_{fg}$

**Example Calculation 1: Saturated Mixture**
Determine the enthalpy and specific volume of steam at 200 kPa and a quality of 0.8.

**Solution:**
1.  **State Identification:** We are given pressure and quality, and we are in the saturated region (implied by quality being between 0 and 1).
2.  **Table Lookup:** Go to the Saturated-Pressure steam table (Table A-5 in Cengel & Boles, or similar tables in P.K. Nag). Find the row for $P = 200$ kPa.
    *   From the table: $v_f = 0.001061$ m³/kg, $v_g = 0.88578$ m³/kg, $h_f = 503.50$ kJ/kg, $h_g = 2706.7$ kJ/kg.
    *   $v_{fg} = v_g - v_f = 0.88578 - 0.001061 = 0.88472$ m³/kg
    *   $h_{fg} = h_g - h_f = 2706.7 - 503.50 = 2203.2$ kJ/kg
3.  **Property Calculation:**
    *   Specific Volume: $v = v_f + x v_{fg} = 0.001061 + 0.8 \times (0.88472) = 0.001061 + 0.707776 \approx 0.70884$ m³/kg
    *   Enthalpy: $h = h_f + x h_{fg} = 503.50 + 0.8 \times (2203.2) = 503.50 + 1762.56 = 2266.06$ kJ/kg

**Answer:** The enthalpy is 2266.06 kJ/kg and the specific volume is 0.70884 m³/kg.

#### 5.2. Calculations in the Superheated Region

When the substance is in the superheated vapor state, properties are directly read from the superheated tables. If the exact state is not listed, **interpolation** is required.

**Example Calculation 2: Superheated Vapor**
Determine the specific volume and enthalpy of steam at 1.0 MPa and 200°C.

**Solution:**
1.  **State Identification:** Given $P = 1.0$ MPa (1000 kPa) and $T = 200$°C.
    *   From the saturated-pressure table at $P = 1.0$ MPa, $T_{sat} = 179.91$°C.
    *   Since $T (200^\circ C) > T_{sat} (179.91^\circ C)$, the steam is in the superheated region.
2.  **Table Lookup:** Go to the Superheated Water Vapor table (Table A-6 in Cengel & Boles, or similar). Find the section for $P = 1.0$ MPa (1000 kPa). Then, find the row for $T = 200$°C.
    *   From the table: $v = 0.20600$ m³/kg, $h = 2837.5$ kJ/kg.

**Answer:** The specific volume is 0.20600 m³/kg and the enthalpy is 2837.5 kJ/kg.

#### 5.3. Calculations in the Compressed Liquid Region

For compressed liquids, properties are often approximated using saturated liquid properties at the given temperature. For higher accuracy, use compressed liquid tables if available.

**Example Calculation 3: Compressed Liquid (with approximation)**
Determine the specific enthalpy of water at 15 MPa and 70°C.

**Solution:**
1.  **State Identification:** Given $P = 15$ MPa and $T = 70$°C.
    *   From the saturated-temperature table at $T = 70$°C, $P_{sat} = 31.19$ kPa.
    *   Since $P (15000 \text{ kPa}) > P_{sat} (31.19 \text{ kPa})$, the water is in the compressed liquid region.
2.  **Table Lookup (Saturated Table for Approximation):** Go to the Saturated-Temperature table (Table A-4 in Cengel & Boles) and find the row for $T = 70$°C.
    *   From the table: $h_f = 293.35$ kJ/kg, $v_f = 0.001023$ m³/kg, $P_{sat} = 31.19$ kPa.
3.  **Property Calculation (Approximation):**
    Using the approximation: $h \approx h_f(T) + v_f(T)(P - P_{sat}(T))$
    $h \approx 293.35 \text{ kJ/kg} + (0.001023 \text{ m³/kg}) \times (15000 \text{ kPa} - 31.19 \text{ kPa})$
    $h \approx 293.35 \text{ kJ/kg} + 0.001023 \times 14968.81 \text{ kPa} \cdot \text{m³/kg}$
    Note: 1 kPa · m³/kg = 1 kJ/kg
    $h \approx 293.35 \text{ kJ/kg} + 15.31 \text{ kJ/kg}$
    $h \approx 308.66$ kJ/kg

**Using Compressed Liquid Table (for comparison, if available):**
If a compressed liquid table for water is available, you would look up $T = 70$°C and $P = 15$ MPa. The value might be slightly different but close to the approximated value. (Cengel & Boles, Appendix A.7)

**Answer:** The approximate specific enthalpy is 308.66 kJ/kg.

---

### 6. Interpolation

Often, the specific state you are looking for is not directly listed in the steam tables. In such cases, interpolation is necessary. Linear interpolation is commonly used.

**Formula for Linear Interpolation:**

If you need to find a property $Y$ at a value $X$, and you have two points $(X_1, Y_1)$ and $(X_2, Y_2)$, where $X_1 < X < X_2$, then:

$\frac{Y - Y_1}{Y_2 - Y_1} = \frac{X - X_1}{X_2 - X_1}$

Rearranging to solve for $Y$:

$Y = Y_1 + (Y_2 - Y_1) \frac{X - X_1}{X_2 - X_1}$

**Example Calculation 4: Interpolation**
Determine the enthalpy of superheated steam at 1.0 MPa and 250°C. (Assume values from the superheated table are provided below).

Given data for $P = 1.0$ MPa:
| T (°C) | v (m³/kg) | h (kJ/kg) | s (kJ/kg·K) |
| :----- | :-------- | :-------- | :---------- |
| 200    | 0.20600   | 2837.5    | 6.9217      |
| 250    | ?         | ?         | ?           |
| 300    | 0.17765   | 3004.1    | 7.1740      |

**Solution:**
1.  **State Identification:** Superheated vapor at $P = 1.0$ MPa and $T = 250$°C.
2.  **Interpolation:** We need to interpolate between $T_1 = 200$°C and $T_2 = 300$°C for $T = 250$°C.
    *   We are interpolating for enthalpy ($h$), so our values are $h_1 = 2837.5$ kJ/kg and $h_2 = 3004.1$ kJ/kg.
    *   $T_1 = 200$°C, $T_2 = 300$°C, $T = 250$°C.

    $h = h_1 + (h_2 - h_1) \frac{T - T_1}{T_2 - T_1}$
    $h = 2837.5 + (3004.1 - 2837.5) \frac{250 - 200}{300 - 200}$
    $h = 2837.5 + (166.6) \frac{50}{100}$
    $h = 2837.5 + 166.6 \times 0.5$
    $h = 2837.5 + 83.3$
    $h = 2920.8$ kJ/kg

**Answer:** The enthalpy is 2920.8 kJ/kg.

**Important Note on Interpolation:** If interpolating for quality $x$ in the saturated region using specific volume, use the same formula:
$x = x_1 + (x_2 - x_1) \frac{v - v_1}{v_2 - v_1}$

---

### 7. Connection to Entropy Generation (Module 4)

While this topic focuses on property calculations, understanding these properties is fundamental to calculating entropy changes and, consequently, entropy generation in various processes.

*   **Entropy Calculation:** For a pure substance, entropy ($s$) is a property that can be directly read from steam tables or calculated using the quality in the saturated mixture region ($s = s_f + x s_{fg}$).
*   **Entropy Change:** To find the change in entropy between two states ($\Delta s = s_2 - s_1$), you first need to determine the properties at both states using steam tables.
*   **Entropy Generation:** Entropy generation ($s_{gen}$) in a process is typically calculated using the entropy balance equation: $S_{in} - S_{out} + \int \frac{\delta Q}{T} + S_{gen} = \Delta S_{system}$. The property $s$ from steam tables is crucial for determining $\Delta S_{system}$.
*   **Isentropic Processes:** If a process is isentropic ($\Delta s = 0$), you can use this information to find an unknown property. For example, if a process is isentropic and the initial state is known, you can find the entropy of the final state and then use that entropy value (along with another known property like pressure) to determine the final state from the superheated or saturated tables. (Supports **CO4: Determine entropy changes associated with different processes (Knowledge Level: K3)**).

**Example:** An isentropic expansion of steam from a superheated state to a saturated mixture state. You'd find the entropy at the initial state, set the entropy at the final state equal to this value, and then use this final entropy (along with the final pressure or temperature) in the saturated tables to find the quality $x$ and other properties.

---

### 8. Practice Questions and Exercises

**Instructions:** Use the provided steam tables (or standard steam tables from your textbook) to solve the following problems.

**Question 1:**
Determine the phase and specific enthalpy of water at 500 kPa and 120°C.

**Answer 1:**
1.  **State Identification:** At $P = 500$ kPa, $T_{sat} = 151.83$°C. Since $T (120^\circ C) < T_{sat} (151.83^\circ C)$, it's compressed liquid.
2.  **Table Lookup (Saturated Table):** At $T = 120$°C, $h_f = 503.50$ kJ/kg, $v_f = 0.001060$ m³/kg, $P_{sat} = 23.38$ kPa.
3.  **Calculation (Approximation):**
    $h \approx h_f(T) + v_f(T)(P - P_{sat}(T))$
    $h \approx 503.50 + 0.001060 \times (500 - 23.38)$
    $h \approx 503.50 + 0.001060 \times 476.62$
    $h \approx 503.50 + 0.505$
    $h \approx 504.01$ kJ/kg
    **Answer:** Compressed liquid, $h \approx 504.01$ kJ/kg.

**Question 2:**
Find the specific volume and internal energy of steam at 4 MPa and 400°C.

**Answer 2:**
1.  **State Identification:** At $P = 4$ MPa (4000 kPa), $T_{sat} = 250.35$°C. Since $T (400^\circ C) > T_{sat} (250.35^\circ C)$, it's superheated vapor.
2.  **Table Lookup (Superheated Table):** At $P = 4$ MPa and $T = 400$°C, from superheated tables:
    $v = 0.08643$ m³/kg
    $u = 2957.5$ kJ/kg
    **Answer:** $v = 0.08643$ m³/kg, $u = 2957.5$ kJ/kg.

**Question 3:**
Calculate the specific entropy and enthalpy of steam at 1.0 MPa with a quality of 0.7.

**Answer 3:**
1.  **State Identification:** Saturated mixture at $P = 1.0$ MPa.
2.  **Table Lookup (Saturated Table):** At $P = 1.0$ MPa:
    $s_f = 2.7966$ kJ/kg·K, $s_g = 6.4716$ kJ/kg·K
    $h_f = 740.53$ kJ/kg, $h_g = 2782.4$ kJ/kg
    $s_{fg} = s_g - s_f = 6.4716 - 2.7966 = 3.6750$ kJ/kg·K
    $h_{fg} = h_g - h_f = 2782.4 - 740.53 = 2041.87$ kJ/kg
3.  **Calculation:**
    $s = s_f + x s_{fg} = 2.7966 + 0.7 \times 3.6750 = 2.7966 + 2.5725 = 5.3691$ kJ/kg·K
    $h = h_f + x h_{fg} = 740.53 + 0.7 \times 2041.87 = 740.53 + 1429.31 = 2170.04$ kJ/kg
    **Answer:** $s = 5.3691$ kJ/kg·K, $h = 2170.04$ kJ/kg.

**Question 4 (Interpolation):**
Determine the specific volume of steam at 0.8 MPa and 180°C. (Use provided hypothetical data if actual tables are unavailable).

Hypothetical Superheated Data for $P = 0.8$ MPa:
| T (°C) | v (m³/kg) |
| :----- | :-------- |
| 150    | 0.2820    |
| 180    | ?         |
| 200    | 0.2404    |

**Answer 4:**
1.  **State Identification:** Superheated vapor.
2.  **Interpolation:**
    $v = v_1 + (v_2 - v_1) \frac{T - T_1}{T_2 - T_1}$
    $v = 0.2820 + (0.2404 - 0.2820) \frac{180 - 150}{200 - 150}$
    $v = 0.2820 + (-0.0416) \frac{30}{50}$
    $v = 0.2820 + (-0.0416) \times 0.6$
    $v = 0.2820 - 0.02496$
    $v = 0.25704$ m³/kg
    **Answer:** $v \approx 0.2570$ m³/kg.

---

### 9. Important Points to Remember

*   **Two Independent Properties:** For a pure substance, two independent intensive properties are sufficient to fix its thermodynamic state.
*   **State Determination is Key:** Always first determine the phase (compressed liquid, saturated mixture, superheated vapor) before looking up properties.
*   **Saturation Tables:** Use for states where $T = T_{sat}$ at a given $P$, or $P = P_{sat}$ at a given $T$.
*   **Superheated Tables:** Use when $T > T_{sat}$ at a given $P$, or $P < P_{sat}$ at a given $T$.
*   **Compressed Liquid Tables (or Approximation):** Use when $T < T_{sat}$ at a given $P$, or $P > P_{sat}$ at a given $T$. The approximation $h \approx h_f(T) + v_f(T)(P - P_{sat}(T))$ is often sufficient.
*   **Quality ($x$):** Used only in the saturated mixture region. It represents the mass fraction of vapor.
*   **Interpolation:** Necessary when the exact state is not listed in the tables. Linear interpolation is the standard method.
*   **Units:** Pay close attention to units (kJ, MJ, kPa, MPa, bar, °C, K, m³, L).
*   **Steam Tables Variations:** Different textbooks or sources may have slightly different table formats or value sets due to experimental variations or rounding. Always use the tables provided or specified for your course.
*   **Entropy:** Fundamental for analyzing the irreversibility of processes and the second law of thermodynamics. Accurate property determination is the first step in calculating entropy changes.

---

This comprehensive set of notes covers the essential aspects of property calculations using steam tables, directly addressing **CO5** and laying the groundwork for other course outcomes related to energy and entropy analysis. The examples and practice questions are designed to reinforce practical application.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
