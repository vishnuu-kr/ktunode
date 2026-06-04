---
title: "work done"
subject: "THERMAL ENGINEERING"
module: "Module 2: Steam turbines : Classification"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1651d0cf480446398e"
status: "completed"
scrapedAt: "2026-05-20T18:08:40.694Z"
---
# Thermal Engineering: Module 2 - Steam Turbines: Classification

## Topic: Work Done in Steam Turbines

**Course Outcome Alignment:**

*   **CO1 (K4):** This topic directly relates to applying thermodynamic principles to analyze the operation of steam power cycles, specifically how energy is extracted from steam in a turbine.
*   **CO2 (K3):** Understanding work done is fundamental to analyzing the performance of steam turbines and identifying methods to improve their efficiency.

**Learning Outcomes:**

Upon completion of this topic, you will be able to:

*   Define and explain the concept of work done in a steam turbine.
*   Differentiate between the theoretical and actual work done.
*   Explain the factors influencing the work done by a steam turbine.
*   Analyze the energy transformations occurring within a steam turbine to produce work.
*   Relate the work done to the stage-wise energy transfer in different types of steam turbines (impulse and reaction).

---

### 1. Introduction to Work Done in Steam Turbines

A steam turbine is a mechanical device that extracts thermal energy from pressurized steam and converts it into rotational mechanical work. This work is then typically used to drive generators for electricity production or other machinery.

**Key Concept:** Work done is the fundamental output of a steam turbine. It represents the energy transferred by the steam to the rotating blades of the turbine.

**Thermodynamic Basis:** The operation of a steam turbine is governed by the First Law of Thermodynamics (conservation of energy). The enthalpy of the steam decreases as it expands through the turbine, and this decrease in enthalpy is converted into kinetic energy of the steam and subsequently into mechanical work on the turbine blades.

---

### 2. Theoretical Work Done

The theoretical work done by a steam turbine assumes ideal conditions, where all the available energy from the steam expansion is converted into useful work.

**Definition:** Theoretical work done is the maximum possible work that can be extracted from the steam as it expands from an initial state (high pressure, high temperature) to a final state (low pressure, potentially saturated or wet steam) in an adiabatic process.

**Calculation:**

The theoretical work done per unit mass of steam is given by the change in enthalpy across the turbine, assuming an adiabatic and reversible expansion.

*   **Ideal Process:** Adiabatic (no heat transfer, $Q = 0$) and reversible (no friction or irreversibility).
*   **Enthalpy:** A measure of the total energy of a thermodynamic system. For steam, it includes internal energy and flow work.
*   **Formula:**
    $$W_{theoretical} = h_1 - h_2$$
    where:
    *   $W_{theoretical}$ = Theoretical work done per unit mass of steam (kJ/kg)
    *   $h_1$ = Specific enthalpy of steam at the inlet (kJ/kg)
    *   $h_2$ = Specific enthalpy of steam at the outlet after ideal expansion (kJ/kg)

**Determining $h_2$:**

The final enthalpy ($h_2$) is determined by the final pressure and the assumption of an isentropic (adiabatic and reversible) expansion from the initial state ($P_1, h_1, T_1$ or quality $x_1$) to the final pressure ($P_2$). This is typically done using steam tables or Mollier charts (h-s diagrams).

**Example:**

Consider steam entering a turbine at 40 bar pressure and 350°C, expanding to an exhaust pressure of 0.1 bar.
*   **Inlet conditions:** $P_1 = 40$ bar, $T_1 = 350^\circ$C. From steam tables, $h_1 \approx 3093.6$ kJ/kg.
*   **Expansion process:** Isentropic expansion ($s_1 = s_2$).
    *   Determine $s_1$ from steam tables at $P_1$ and $T_1$. $s_1 \approx 6.769$ kJ/kg.K.
    *   At the exhaust pressure $P_2 = 0.1$ bar, find the enthalpy $h_2$ corresponding to $s_2 = s_1 = 6.769$ kJ/kg.K.
    *   At 0.1 bar: $s_f \approx 0.3122$ kJ/kg.K, $s_g \approx 8.1497$ kJ/kg.K.
    *   Since $s_f < s_2 < s_g$, the steam is wet at the exhaust.
    *   Calculate the quality $x_2$: $s_2 = s_f + x_2 (s_g - s_f)$
        $6.769 = 0.3122 + x_2 (8.1497 - 0.3122)$
        $x_2 \approx 0.835$
    *   Calculate $h_2$: $h_2 = h_f + x_2 (h_g - h_f)$
        At 0.1 bar: $h_f \approx 191.8$ kJ/kg, $h_g \approx 2583.9$ kJ/kg.
        $h_2 = 191.8 + 0.835 (2583.9 - 191.8) \approx 2140.6$ kJ/kg.
*   **Theoretical Work Done:**
    $W_{theoretical} = h_1 - h_2 = 3093.6 - 2140.6 = 953$ kJ/kg.

**Reference:** Rudra Moorthy, "Thermal Engineering", Chapter on Steam Turbines, Section on Ideal Expansion.

---

### 3. Actual Work Done

In reality, steam turbines are not ideal. Irreversibilities such as friction, throttling, and heat losses reduce the actual work output compared to the theoretical maximum.

**Definition:** Actual work done is the work delivered by the turbine to the rotating shaft, considering all the losses and inefficiencies present in the system.

**Calculation:**

The actual work done is less than the theoretical work done due to these irreversibilities.

*   **Formula:**
    $$W_{actual} = \eta_t \times W_{theoretical} = \eta_t \times (h_1 - h_2)$$
    where:
    *   $W_{actual}$ = Actual work done per unit mass of steam (kJ/kg)
    *   $\eta_t$ = Isentropic efficiency of the turbine (also known as adiabatic efficiency). This is a dimensionless factor between 0 and 1.

**Isentropic Efficiency ($\eta_t$):**

The isentropic efficiency of a turbine is defined as the ratio of the actual work done to the theoretical (isentropic) work done.

*   **Formula:**
    $$\eta_t = \frac{W_{actual}}{W_{theoretical}} = \frac{h_1 - h_{2,actual}}{h_1 - h_{2,isentropic}}$$
    where:
    *   $h_{2,actual}$ = Actual specific enthalpy of steam at the outlet after irreversible expansion.
    *   $h_{2,isentropic}$ = Specific enthalpy of steam at the outlet after ideal (isentropic) expansion.

**Why $h_{2,actual} > h_{2,isentropic}$?**

Due to irreversibilities, the actual expansion process is less efficient than an isentropic one. The steam still loses enthalpy, but less of it is converted into useful work. Instead, some of the available energy is dissipated as heat due to friction and other losses, leading to a higher final enthalpy.

**Factors Affecting Actual Work Done (and thus $\eta_t$):**

*   **Friction:** Friction between steam and blade surfaces, and within moving parts.
*   **Leakage:** Steam leaking past blade seals and glands.
*   **Blade speed and steam velocity mismatch:** In impulse turbines, the optimal blade speed is half the steam jet velocity. Mismatches reduce efficiency.
*   **Nozzle and blade losses:** Inefficient steam expansion in nozzles and energy dissipation in blades.
*   **Partial admission:** In some turbines, steam is admitted only to a portion of the circumference, leading to losses.
*   **Wetness of steam:** High moisture content in steam at the exhaust can cause blade erosion and reduce efficiency due to the energy required to heat the water droplets.
*   **Pressure drops in stationary passages:** Resistance to flow through nozzles and diaphragms.

**Example (Continuing from the previous example):**

If the isentropic efficiency of the turbine is $\eta_t = 85\% = 0.85$.
*   $W_{theoretical} = 953$ kJ/kg.
*   **Actual Work Done:**
    $W_{actual} = \eta_t \times W_{theoretical} = 0.85 \times 953 = 809.05$ kJ/kg.
*   **Actual outlet enthalpy:**
    We can also find the actual outlet enthalpy:
    $W_{actual} = h_1 - h_{2,actual}$
    $809.05 = 3093.6 - h_{2,actual}$
    $h_{2,actual} = 3093.6 - 809.05 = 2284.55$ kJ/kg.
    Note that $h_{2,actual} (2284.55)$ is indeed higher than $h_{2,isentropic} (2140.6)$, indicating losses.

**Reference:** R.K Rajput, "Thermal Engineering", Chapter on Steam Turbines, Section on Efficiency of Steam Turbines.

---

### 4. Work Done in Different Types of Steam Turbines

The calculation of work done is fundamental to understanding the operation of both impulse and reaction turbines, though the detailed analysis of energy transfer differs.

#### 4.1 Impulse Turbines

In an impulse turbine, the entire pressure drop occurs in the stationary nozzles. The steam emerges from the nozzles as a high-velocity jet and impinges on the moving blades, causing them to rotate. The pressure remains constant across the moving blades.

*   **Energy Transfer:** The nozzle converts thermal energy (enthalpy) into kinetic energy. This kinetic energy is then transferred to the moving blades as work.
*   **Work Done per stage:** For a single-stage impulse turbine, the work done is primarily related to the change in kinetic energy of the steam.
    $$W_{ideal \, impulse} \approx \frac{V_1^2 - V_2^2}{2}$$
    where $V_1$ is the steam velocity entering the blades and $V_2$ is the steam velocity leaving the blades.
    This kinetic energy is derived from the enthalpy drop in the nozzle, $\Delta h_{nozzle}$.
    $V_{nozzle} = \sqrt{2 \times \Delta h_{nozzle} \times 1000}$ (if $\Delta h$ is in kJ/kg, $V$ is in m/s).
*   **Multi-stage Impulse Turbines:** In multi-stage impulse turbines (e.g., Rateau turbine), the steam is expanded sequentially through a series of nozzles and blade rows. The total work done is the sum of the work done by each stage. Each stage involves a pressure drop in the nozzle and a velocity change over the moving blades.
*   **Work Done Calculation:** The overall work done per unit mass is still $h_1 - h_{2,actual}$, but the enthalpy drop is distributed across multiple stages.

**Reference:** Rudra Moorthy, "Thermal Engineering", Chapter on Steam Turbines, Section on Impulse Turbines.

#### 4.2 Reaction Turbines

In a reaction turbine (e.g., Parsons turbine), the pressure drop occurs partially in the stationary nozzles (or guide vanes) and partially in the moving blades. The moving blades are designed as nozzles, causing the steam to expand and accelerate as it passes through them.

*   **Energy Transfer:** Both the stationary and moving blades contribute to the work output.
    *   **Stationary Blades (Nozzles):** Convert enthalpy into kinetic energy.
    *   **Moving Blades:** Simultaneously convert kinetic energy (from the incoming jet) and enthalpy (from expansion within the blades) into mechanical work.
*   **Degree of Reaction (R):** This is a crucial parameter for reaction turbines. It represents the ratio of the enthalpy drop in the moving blades to the total enthalpy drop in a stage (both stationary and moving blades).
    $$R = \frac{h_{moving \, blades}}{h_{stage}} = \frac{h_2 - h_3}{h_1 - h_3}$$
    where $h_1, h_2, h_3$ are enthalpies at different points in the stage.
    *   In a 50% reaction turbine ($R = 0.5$), the enthalpy drop in the stationary blades equals the enthalpy drop in the moving blades. This results in equal pressure and velocity changes in both sets of blades, leading to a balanced thrust on the shaft.
*   **Work Done Calculation:** The total work done per unit mass is still $h_1 - h_{2,actual}$, where $h_1$ is the inlet enthalpy to the first stage and $h_{2,actual}$ is the outlet enthalpy from the last stage. For a single stage, the work done is the sum of work done by stationary and moving blades.

**Reference:** R.K Rajput, "Thermal Engineering", Chapter on Steam Turbines, Section on Reaction Turbines.
**Reference:** Mahesh Rathore, "Thermal Engineering", Chapter on Steam Turbines, discussing degree of reaction.

---

### 5. Work Done and Energy Transformations

The conversion of thermal energy into mechanical work in a steam turbine is a multi-step process involving different forms of energy:

1.  **Thermal Energy (Enthalpy):** High-pressure, high-temperature steam possesses significant thermal energy.
2.  **Kinetic Energy:** As steam expands through nozzles, its enthalpy is converted into kinetic energy, resulting in a high-velocity steam jet.
3.  **Mechanical Work:** The high-velocity steam jet impinges on the turbine blades, transferring its kinetic energy to the blades, causing them to rotate and do mechanical work on the shaft.
4.  **Internal Energy:** Some energy remains within the steam as internal energy, and some is lost due to irreversibilities.

**Important Point:** The work done by a steam turbine is directly proportional to the enthalpy drop across the turbine. Maximizing the enthalpy drop (within the limits of practical expansion) and minimizing losses are key to achieving high turbine efficiency.

---

### 6. Factors Affecting Work Output

*   **Inlet Steam Conditions:** Higher inlet pressure and temperature (superheat) lead to a greater enthalpy drop and thus more potential work.
*   **Exhaust Steam Conditions:** Lowering the exhaust pressure (often achieved using condensers) significantly increases the enthalpy drop and work output.
*   **Isentropic Efficiency:** Higher efficiency means more of the available energy is converted into useful work.
*   **Number of Stages:** Multi-staging allows for a more gradual expansion, better matching of steam velocity to blade velocity, and can improve efficiency by reducing the impact of irreversibilities in each stage.
*   **Blade Design and Speed:** Optimal design of blade profiles and matching blade speed to steam velocity are crucial for efficient energy transfer.
*   **Steam Wetness:** Excessive moisture in the exhaust steam reduces efficiency and can cause blade damage.

---

### 7. Practice Questions and Exercises

**Question 1:**

A steam turbine receives steam at 40 bar and 350°C. The steam expands isentropically to a final pressure of 0.2 bar. Calculate the theoretical work done by the turbine per kg of steam.

**Answer:**
*   Inlet conditions: $P_1 = 40$ bar, $T_1 = 350^\circ$C.
    From steam tables: $h_1 = 3093.6$ kJ/kg, $s_1 = 6.769$ kJ/kg.K.
*   Isentropic expansion to $P_2 = 0.2$ bar.
    At 0.2 bar: $s_f = 0.5101$ kJ/kg.K, $s_g = 8.0919$ kJ/kg.K.
    $h_f = 251.5$ kJ/kg, $h_g = 2609.9$ kJ/kg.
*   Calculate quality $x_2$ at the outlet:
    $s_2 = s_1 = 6.769$ kJ/kg.K
    $s_2 = s_f + x_2 (s_g - s_f)$
    $6.769 = 0.5101 + x_2 (8.0919 - 0.5101)$
    $6.769 = 0.5101 + 7.5818 x_2$
    $x_2 = \frac{6.769 - 0.5101}{7.5818} = 0.8259$
*   Calculate $h_2$ at the outlet:
    $h_2 = h_f + x_2 (h_g - h_f)$
    $h_2 = 251.5 + 0.8259 (2609.9 - 251.5)$
    $h_2 = 251.5 + 0.8259 \times 2358.4$
    $h_2 = 251.5 + 1948.3 = 2199.8$ kJ/kg.
*   Theoretical Work Done:
    $W_{theoretical} = h_1 - h_2 = 3093.6 - 2199.8 = 893.8$ kJ/kg.

---

**Question 2:**

An actual steam turbine operates with an isentropic efficiency of 88%. If the inlet steam conditions are the same as in Question 1, and the isentropic expansion results in an outlet enthalpy of 2199.8 kJ/kg, calculate the actual work done by the turbine.

**Answer:**
*   Inlet enthalpy $h_1 = 3093.6$ kJ/kg.
*   Isentropic outlet enthalpy $h_{2,isentropic} = 2199.8$ kJ/kg.
*   Theoretical work done $W_{theoretical} = h_1 - h_{2,isentropic} = 3093.6 - 2199.8 = 893.8$ kJ/kg.
*   Isentropic efficiency $\eta_t = 88\% = 0.88$.
*   Actual Work Done:
    $W_{actual} = \eta_t \times W_{theoretical}$
    $W_{actual} = 0.88 \times 893.8 = 786.54$ kJ/kg.

---

**Question 3:**

Describe the role of enthalpy drop in generating work in a steam turbine. How does the degree of reaction concept apply to work output in reaction turbines?

**Answer:**
*   **Enthalpy Drop and Work:** The work done by a steam turbine is fundamentally derived from the decrease in the enthalpy of the steam as it expands. Enthalpy represents the total energy of the steam. As steam expands through the turbine (through nozzles and blades), its pressure and temperature decrease, leading to a reduction in enthalpy. This reduction in enthalpy is converted into kinetic energy of the steam and then into mechanical work delivered to the turbine shaft. The greater the enthalpy drop, the more energy is available for conversion into work.
*   **Degree of Reaction (R) in Reaction Turbines:** In reaction turbines, the steam expands both in stationary (nozzle) and moving blades. The degree of reaction ($R = \frac{\Delta h_{moving}}{\Delta h_{stage}}$) indicates how much of the total enthalpy drop in a stage occurs across the moving blades.
    *   A higher degree of reaction implies a larger portion of the stage's enthalpy drop occurs in the moving blades. This means the moving blades are also acting as nozzles, accelerating the steam and converting thermal energy directly into kinetic energy, which then does work.
    *   This expansion in moving blades contributes directly to the work output. A balanced design (like 50% reaction) ensures that the work done by the steam in the moving blades is optimized relative to the work done by the steam exiting the stationary blades, leading to efficient energy transfer and reduced axial thrust.

---

### 8. Important Points to Remember

*   **Work done = Enthalpy drop:** The core principle is that work is extracted from the enthalpy drop of the steam.
*   **Theoretical vs. Actual:** Theoretical work assumes ideal (isentropic) expansion. Actual work is always less due to irreversibilities.
*   **Isentropic efficiency ($\eta_t$):** A crucial parameter quantifying the turbine's performance, linking actual to theoretical work.
*   **Mollier Chart (h-s diagram):** An invaluable tool for visualizing steam expansion processes and determining enthalpy values.
*   **Exhaust Pressure:** Minimizing exhaust pressure (vacuum) is a primary way to increase work output.
*   **Impulse vs. Reaction:** In impulse turbines, pressure drop is in nozzles; in reaction turbines, it's in both stationary and moving blades, with the degree of reaction being key.

---

This concludes the topic on "Work Done" in steam turbines. The next topics will likely cover the classification of steam turbines in more detail and specific aspects like governing and efficiency improvements.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
