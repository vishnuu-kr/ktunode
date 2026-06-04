---
title: "T-v, p-v and p-T diagram of pure substance"
subject: "ENGINEERING THERMODYNAMICS"
module: "Module 4: Entropy generation"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462f74"
status: "completed"
scrapedAt: "2026-05-20T17:53:53.573Z"
---
# Engineering Thermodynamics: Module 4 - Entropy Generation

## Topic: T-v, p-v and p-T Diagrams of Pure Substances

**Course Outcomes Addressed:**
*   **CO5:** Determine the properties of pure substances (Knowledge Level: K2, K3)

**Learning Outcomes:**
*   Understand the phase change process of pure substances.
*   Interpret and utilize T-v, p-v, and p-T diagrams for pure substances.
*   Determine the phase of a pure substance using these diagrams.
*   Analyze the behavior of pure substances during phase transitions.

---

### 1. Introduction to Pure Substances

**Key Concept:** A pure substance is defined as a substance that is homogeneous and has a constant chemical composition. It can exist in different phases (solid, liquid, vapor) but the chemical composition remains the same.

**Examples:**
*   Water (H₂O)
*   Refrigerants (e.g., R-134a)
*   Nitrogen (N₂)
*   Oxygen (O₂)
*   Steam

**Important Note:** Air is often treated as a pure substance in thermodynamic analysis, although it is a mixture of gases. This is a common approximation.

**(Referenced from Cengel & Boles, Chapter 3)**

---

### 2. Phases of Pure Substances

Pure substances can exist in three primary phases:

*   **Solid:** Molecules are held in fixed positions in a crystalline structure.
*   **Liquid:** Molecules are closely packed but can move around.
*   **Vapor (Gas):** Molecules are far apart and move randomly.

**Phase Transitions:**
Pure substances undergo phase transitions at constant temperature and pressure when heat is added or removed. Common transitions include:
*   Melting (Solid to Liquid)
*   Freezing (Liquid to Solid)
*   Vaporization (Liquid to Vapor)
*   Condensation (Vapor to Liquid)
*   Sublimation (Solid to Vapor)
*   Deposition (Vapor to Solid)

---

### 3. Properties of Pure Substances and the Need for Diagrams

**Key Concept:** The state of a pure substance is determined by two independent intensive properties. However, during phase changes, temperature and pressure remain constant while other properties (like specific volume) change significantly. This makes it difficult to represent all states using a simple two-property relationship.

**Thermodynamic Diagrams** are graphical representations of the thermodynamic properties of a substance. They are essential tools for:
*   Visualizing phase changes.
*   Determining properties at various states.
*   Analyzing thermodynamic processes.

We will focus on three common diagrams: T-v, p-v, and p-T diagrams.

**(Referenced from Cengel & Boles, Chapter 3 & P.K. Nag, Chapter 4)**

---

### 4. The T-v Diagram (Temperature vs. Specific Volume)

**Key Concepts:**
*   **Specific Volume (v):** Volume per unit mass ($v = V/m$).
*   **Saturation Lines:** Lines on the diagram that represent the conditions where phase changes occur.
*   **Liquid Dome:** The region encompassing subcooled liquid and saturated liquid states.
*   **Vapor Dome:** The region encompassing superheated vapor and saturated vapor states.
*   **Saturation Temperature ($T_{sat}$):** The temperature at which a pure substance starts to boil or condense at a given pressure.
*   **Saturation Pressure ($p_{sat}$):** The pressure at which a pure substance starts to boil or condense at a given temperature.
*   **Triple Point:** The unique state where solid, liquid, and vapor phases coexist in equilibrium.
*   **Critical Point:** The state beyond which the liquid and vapor phases are indistinguishable.

**Regions on the T-v Diagram:**

*   **Compressed Liquid Region (Subcooled Liquid):**
    *   Specific volume is low and relatively insensitive to temperature changes.
    *   Heating at constant pressure leads to boiling.
    *   Usually located to the left of the saturated liquid line.
*   **Saturated Liquid Line:**
    *   Represents the state where the substance is entirely liquid at the saturation temperature.
    *   Corresponds to the left boundary of the saturation region.
*   **Saturated Liquid-Vapor Mixture Region (Two-Phase Region):**
    *   Exists between the saturated liquid line and the saturated vapor line.
    *   Contains both liquid and vapor phases in equilibrium.
    *   At constant pressure, temperature is constant ($T_{sat}$) during phase change.
    *   The horizontal line in this region at constant temperature represents boiling or condensation.
    *   **Quality (x):** The mass fraction of vapor in the mixture ($x = m_{vapor} / m_{total}$). Ranges from 0 (saturated liquid) to 1 (saturated vapor).
        *   $v = v_f + x (v_g - v_f) = v_f + x v_{fg}$
        where $v_f$ is specific volume of saturated liquid, $v_g$ is specific volume of saturated vapor, and $v_{fg} = v_g - v_f$ is the change in specific volume during vaporization.
*   **Saturated Vapor Line:**
    *   Represents the state where the substance is entirely vapor at the saturation temperature.
    *   Corresponds to the right boundary of the saturation region.
*   **Superheated Vapor Region:**
    *   Specific volume is high and increases significantly with temperature and pressure.
    *   Substance exists as a single vapor phase.
    *   Usually located to the right of the saturated vapor line.

**(Referenced from Cengel & Boles, Chapter 3, P.K. Nag, Chapter 4, Moran & Shapiro, Chapter 2)**

**Example:** Consider water. On a T-v diagram, you would see the triple point, the critical point, and the dome representing the saturation region. A horizontal line within the dome at a constant temperature (e.g., 100°C for water at atmospheric pressure) shows the transition from saturated liquid to saturated vapor.

---

### 5. The p-v Diagram (Pressure vs. Specific Volume)

**Key Concepts:**
*   Similar in shape to the T-v diagram but with pressure on the y-axis and specific volume on the x-axis.
*   **Isotherms:** Lines of constant temperature.
    *   Isotherms in the superheated vapor region are similar to those in the T-v diagram.
    *   Isotherms in the two-phase region are horizontal lines at the saturation pressure for that temperature.
    *   Isotherms in the compressed liquid region are steep and closely spaced.

**Regions on the p-v Diagram:**

*   **Compressed Liquid Region:** To the left of the saturated liquid line.
*   **Saturated Liquid-Vapor Mixture Region:** Between the saturated liquid and saturated vapor lines. Horizontal lines represent constant temperature processes (boiling/condensation).
*   **Superheated Vapor Region:** To the right of the saturated vapor line.

**(Referenced from Cengel & Boles, Chapter 3 & P.K. Nag, Chapter 4)**

**Important Point:** The p-v diagram is useful for visualizing how pressure changes during processes at constant temperature, especially during phase changes.

**Example:** For water at 1 atm, the p-v diagram would show a horizontal line at 1 atm within the saturation region, indicating that the pressure remains constant during boiling.

---

### 6. The p-T Diagram (Pressure vs. Temperature)

**Key Concepts:**
*   Represents the phase equilibrium of a pure substance.
*   **Phase Boundaries:** Lines that separate the different phases.
*   **Triple Line:** On a p-T diagram, this is a single point where the solid, liquid, and vapor phases coexist in equilibrium.
*   **Sublimation Curve:** Separates the solid and vapor phases.
*   **Vaporization Curve (Boiling Curve):** Separates the liquid and vapor phases. This curve ends at the critical point.
*   **Melting Curve (Fusion Curve):** Separates the solid and liquid phases.

**Regions on the p-T Diagram:**

*   **Solid Region:** Above the melting curve and to the left of the sublimation curve.
*   **Liquid Region:** Above the melting curve and to the right of the vaporization curve.
*   **Vapor Region:** Below the sublimation curve and to the right of the vaporization curve.

**(Referenced from Cengel & Boles, Chapter 3 & P.K. Nag, Chapter 4)**

**Example:** For water, the p-T diagram clearly shows the triple point (0.01°C and 0.6117 kPa). Above this point, the sublimation curve separates solid and vapor. The vaporization curve separates liquid and vapor, ending at the critical point (22.1 MPa and 374°C). The melting curve separates solid and liquid. A process of heating ice at constant pressure will move across these regions.

---

### 7. Using the Diagrams to Determine Properties and Phases

**Key Principle:** A pure substance has a defined phase (solid, liquid, vapor, or a mixture) at any given combination of pressure and temperature. These diagrams help us identify the phase and determine other thermodynamic properties.

**Steps to Determine Phase and Properties:**

1.  **Locate the State:** Find the point on the chosen diagram corresponding to the given two independent properties (e.g., T and v, or p and v, or p and T).
2.  **Identify the Region:** Determine which region of the diagram the point falls into. This tells you the phase of the substance.
    *   **Compressed Liquid:** If $p > p_{sat}$ at the given T, or $T < T_{sat}$ at the given p. (Cengel & Boles call this compressed liquid, Nag may use subcooled liquid).
    *   **Saturated Liquid:** On the saturated liquid line.
    *   **Saturated Mixture:** Between the saturated liquid and vapor lines. You'll need the quality (x) to find other properties.
    *   **Saturated Vapor:** On the saturated vapor line.
    *   **Superheated Vapor:** If $p < p_{sat}$ at the given T, or $T > T_{sat}$ at the given p.
3.  **Determine Properties:**
    *   **In Single-Phase Regions (Compressed Liquid, Superheated Vapor):** If the diagram directly shows the property (e.g., specific volume on the axes), you can read it. For other properties (e.g., enthalpy, entropy), you would use property tables or charts that correspond to these regions, using the two independent properties to find the desired property.
    *   **In Two-Phase Region:**
        *   **T-v or p-v diagram:** The temperature (or pressure) is the saturation temperature (or pressure). You need the quality (x) to determine specific volume using $v = v_f + x v_{fg}$. Other properties are calculated similarly:
            *   $u = u_f + x u_{fg}$
            *   $h = h_f + x h_{fg}$
            *   $s = s_f + x s_{fg}$
        *   **p-T diagram:** Identifies the phase, but properties like specific volume, enthalpy, etc., are read from corresponding tables or charts based on the saturation pressure (or temperature) and the quality.

**(Referenced from Cengel & Boles, Chapter 3 & P.K. Nag, Chapter 4)**

---

### 8. Practice Questions and Exercises

**(Note: These questions require access to steam tables or refrigerant property tables, which are typically found in the appendices of the referenced textbooks.)**

**Question 1:** (CO5, K3)
Determine the phase of the following substances and find their specific volume using the appropriate tables:
a) Water at $T = 250^\circ\text{C}$ and $p = 1 \text{ MPa}$
b) Refrigerant-134a at $T = -20^\circ\text{C}$ and $x = 0.7$
c) Carbon dioxide at $p = 1000 \text{ kPa}$ and $T = 0^\circ\text{C}$

**Question 2:** (CO5, K3)
A rigid tank contains 2 kg of saturated R-134a liquid-vapor mixture at 0.3 MPa. The quality of the mixture is 0.2. Determine:
a) The volume of the tank.
b) The temperature of the mixture.
c) The enthalpy of the mixture.

**Question 3:** (CO5, K3)
A closed, rigid container holds 1 kg of water. Initially, the water is at $100^\circ\text{C}$ with a quality of 0.5. Heat is added until the pressure reaches 0.5 MPa. Determine the final temperature and the heat added.

---

### Answers to Practice Questions

**Answer 1:**
*   **a) Water at $T = 250^\circ\text{C}$ and $p = 1 \text{ MPa}$:**
    *   From steam tables at $p = 1 \text{ MPa}$, $T_{sat} = 179.88^\circ\text{C}$.
    *   Since $T (250^\circ\text{C}) > T_{sat} (179.88^\circ\text{C})$ at this pressure, the water is in the **superheated vapor** region.
    *   Looking up in the superheated steam tables at $p = 1 \text{ MPa}$ and $T = 250^\circ\text{C}$, the specific volume is $v \approx 0.2503 \text{ m}^3/\text{kg}$. (Refer to Cengel & Boles Appendix, Table A-6)

*   **b) Refrigerant-134a at $T = -20^\circ\text{C}$ and $x = 0.7$:**
    *   From R-134a tables at $T = -20^\circ\text{C}$, the saturation pressure $p_{sat} = 0.1327 \text{ MPa}$.
    *   Since $x = 0.7$ (between 0 and 1), the R-134a is in the **saturated liquid-vapor mixture** region.
    *   Using the quality equation for specific volume: $v = v_f + x (v_g - v_f)$.
    *   From R-134a tables at $T = -20^\circ\text{C}$: $v_f = 0.0007362 \text{ m}^3/\text{kg}$ and $v_g = 0.13395 \text{ m}^3/\text{kg}$.
    *   $v = 0.0007362 + 0.7 \times (0.13395 - 0.0007362) = 0.0007362 + 0.7 \times 0.13321 = 0.0007362 + 0.09325 = 0.09399 \text{ m}^3/\text{kg}$. (Refer to Cengel & Boles Appendix, Table A-12)

*   **c) Carbon dioxide at $p = 1000 \text{ kPa}$ and $T = 0^\circ\text{C}$:**
    *   From CO₂ tables at $p = 1 \text{ MPa} = 10 \text{ bar}$. At this pressure, $T_{sat} \approx -8.14^\circ\text{C}$.
    *   Since $T (0^\circ\text{C}) > T_{sat} (-8.14^\circ\text{C})$ at this pressure, the CO₂ is in the **superheated vapor** region.
    *   Looking up in the superheated CO₂ tables at $p = 1 \text{ MPa}$ and $T = 0^\circ\text{C}$, the specific volume is $v \approx 0.04412 \text{ m}^3/\text{kg}$. (Refer to P.K. Nag, Appendix, Table A.20 for CO2)

**Answer 2:**
*   **Given:** $m = 2 \text{ kg}$, saturated mixture of R-134a, $p = 0.3 \text{ MPa}$, $x = 0.2$.
*   **a) Volume of the tank (V):**
    *   From R-134a tables at $p = 0.3 \text{ MPa}$: $v_f = 0.0007926 \text{ m}^3/\text{kg}$ and $v_g = 0.06856 \text{ m}^3/\text{kg}$.
    *   Specific volume of the mixture: $v = v_f + x (v_g - v_f) = 0.0007926 + 0.2 \times (0.06856 - 0.0007926)$
    *   $v = 0.0007926 + 0.2 \times 0.067767 = 0.0007926 + 0.0135534 = 0.014346 \text{ m}^3/\text{kg}$.
    *   Volume of the tank: $V = m \times v = 2 \text{ kg} \times 0.014346 \text{ m}^3/\text{kg} = 0.0287 \text{ m}^3$.

*   **b) Temperature of the mixture (T):**
    *   Since it's a saturated mixture, the temperature is the saturation temperature at the given pressure.
    *   From R-134a tables at $p = 0.3 \text{ MPa}$, $T_{sat} = 5.94^\circ\text{C}$.
    *   Therefore, $T = 5.94^\circ\text{C}$.

*   **c) Enthalpy of the mixture (h):**
    *   From R-134a tables at $p = 0.3 \text{ MPa}$: $h_f = 44.76 \text{ kJ}/\text{kg}$ and $h_g = 273.90 \text{ kJ}/\text{kg}$.
    *   Enthalpy of the mixture: $h = h_f + x (h_g - h_f) = 44.76 + 0.2 \times (273.90 - 44.76)$
    *   $h = 44.76 + 0.2 \times 229.14 = 44.76 + 45.828 = 90.59 \text{ kJ}/\text{kg}$.

**Answer 3:**
*   **Given:** $m = 1 \text{ kg}$ water, initial state: $T_1 = 100^\circ\text{C}$, $x_1 = 0.5$. Final state: $p_2 = 0.5 \text{ MPa}$. Rigid container (constant volume).
*   **Initial State Analysis:**
    *   At $T_1 = 100^\circ\text{C}$, water is saturated if the pressure is $p_{sat} (100^\circ\text{C}) = 0.10135 \text{ MPa}$. Since the problem doesn't specify the initial pressure, we assume it's at saturation conditions for the quality to be defined this way.
    *   From steam tables at $T = 100^\circ\text{C}$: $v_{f1} = 0.001043 \text{ m}^3/\text{kg}$ and $v_{g1} = 1.673 \text{ m}^3/\text{kg}$.
    *   Initial specific volume: $v_1 = v_{f1} + x_1 (v_{g1} - v_{f1}) = 0.001043 + 0.5 \times (1.673 - 0.001043)$
    *   $v_1 = 0.001043 + 0.5 \times 1.671957 = 0.001043 + 0.8359785 = 0.83702 \text{ m}^3/\text{kg}$.
    *   Since the container is rigid, the volume is constant, so $v_2 = v_1 = 0.83702 \text{ m}^3/\text{kg}$.

*   **Final State Analysis:**
    *   We have $p_2 = 0.5 \text{ MPa}$ and $v_2 = 0.83702 \text{ m}^3/\text{kg}$.
    *   From steam tables at $p_2 = 0.5 \text{ MPa}$: $v_{f2} = 0.001093 \text{ m}^3/\text{kg}$ and $v_{g2} = 0.3749 \text{ m}^3/\text{kg}$.
    *   Compare $v_2$ with $v_{f2}$ and $v_{g2}$ at $p_2 = 0.5 \text{ MPa}$:
        *   $v_{f2} (0.001093) < v_2 (0.83702) < v_{g2} (0.3749)$ is FALSE.
        *   $v_2 (0.83702) > v_{g2} (0.3749)$. This means the substance is in the **superheated vapor** region at the final state.
    *   Now, we need to find the temperature ($T_2$) from the superheated steam tables at $p_2 = 0.5 \text{ MPa}$ and $v_2 = 0.83702 \text{ m}^3/\text{kg}$.
    *   Looking at the superheated steam table for $p = 0.5 \text{ MPa}$:
        | T (°C) | v (m³/kg) |
        | :----- | :-------- |
        | 200    | 0.4743    |
        | 250    | 0.5342    |
        | 300    | 0.5941    |
        | 350    | 0.6536    |
        | 400    | 0.7133    |
        | 450    | 0.7730    |
        | 500    | 0.8328    |
        | 550    | 0.8926    |
    *   Our $v_2 = 0.83702 \text{ m}^3/\text{kg}$ is very close to the value at $T = 500^\circ\text{C}$ ($0.8328 \text{ m}^3/\text{kg}$). It's slightly higher, indicating a temperature slightly above 500°C. Let's use linear interpolation between 500°C and 550°C.
    *   $T_2 \approx 500 + \frac{0.83702 - 0.8328}{0.8926 - 0.8328} \times (550 - 500)$
    *   $T_2 \approx 500 + \frac{0.00422}{0.0598} \times 50 = 500 + 0.07057 \times 50 \approx 500 + 3.53 \approx 503.5^\circ\text{C}$.
    *   So, the final temperature is approximately $T_2 \approx 503.5^\circ\text{C}$.

*   **Heat Added (Q):**
    *   This is a constant volume process, so $Q = m (u_2 - u_1)$. We need to find the initial and final internal energies.
    *   **Initial state (T1=100°C, x1=0.5):**
        *   From steam tables at $T = 100^\circ\text{C}$: $u_{f1} = 417.51 \text{ kJ}/\text{kg}$ and $u_{g1} = 2088.2 \text{ kJ}/\text{kg}$.
        *   $u_1 = u_{f1} + x_1 (u_{g1} - u_{f1}) = 417.51 + 0.5 \times (2088.2 - 417.51)$
        *   $u_1 = 417.51 + 0.5 \times 1670.69 = 417.51 + 835.345 = 1252.855 \text{ kJ}/\text{kg}$.
    *   **Final state (p2=0.5 MPa, v2=0.83702 m³/kg, T2≈503.5°C):**
        *   From superheated steam tables at $p = 0.5 \text{ MPa}$ and $T = 500^\circ\text{C}$, $u = 2870.8 \text{ kJ}/\text{kg}$.
        *   From superheated steam tables at $p = 0.5 \text{ MPa}$ and $T = 550^\circ\text{C}$, $u = 2950.4 \text{ kJ}/\text{kg}$.
        *   Using linear interpolation for $u_2$ at $T_2 \approx 503.5^\circ\text{C}$:
        *   $u_2 \approx 2870.8 + \frac{503.5 - 500}{550 - 500} \times (2950.4 - 2870.8)$
        *   $u_2 \approx 2870.8 + \frac{3.5}{50} \times 79.6 = 2870.8 + 0.07 \times 79.6 = 2870.8 + 5.572 = 2876.37 \text{ kJ}/\text{kg}$.
    *   **Heat Added:** $Q = m (u_2 - u_1) = 1 \text{ kg} \times (2876.37 - 1252.855) \text{ kJ}/\text{kg}$
    *   $Q = 1623.515 \text{ kJ}$.

---

### 9. Important Points to Remember

*   **Phase Determination:** Always compare the given properties (T, p, v, x) with the saturation properties from tables to correctly identify the phase.
*   **Quality (x):** Only valid in the saturated liquid-vapor mixture region. $x=0$ for saturated liquid, $x=1$ for saturated vapor.
*   **Constant Properties during Phase Change:** In the two-phase region on T-v or p-v diagrams, temperature (or pressure) remains constant during boiling/condensation at a given pressure (or temperature).
*   **Diagram Shape:** The general shape of T-v and p-v diagrams is similar for most pure substances, with a critical point and a saturation dome. The p-T diagram shows phase boundaries meeting at the triple point.
*   **Interpolation:** When values are not directly available in tables, use linear interpolation carefully for both properties and temperatures/pressures.
*   **Units:** Pay close attention to units (MPa, kPa, bar, °C, K, m³/kg, kJ/kg, etc.) and ensure consistency.
*   **Source of Data:** Always refer to accurate property tables or charts for the specific substance you are analyzing.

---

This concludes the study notes for T-v, p-v, and p-T diagrams of pure substances. These diagrams are fundamental tools for understanding the behavior of matter in thermodynamic systems.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
