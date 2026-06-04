---
title: "reheat factor and
degree of reaction."
subject: "THERMAL ENGINEERING"
module: "Module 2: Steam turbines : Classification"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1651d0cf4804463994"
status: "completed"
scrapedAt: "2026-05-20T18:08:44.955Z"
---
# Thermal Engineering: Module 2 - Steam Turbines: Classification

## Topic: Reheat Factor and Degree of Reaction

This module focuses on steam turbines, a critical component in thermal power plants. This topic delves into two important concepts that help analyze and improve the performance of steam turbines: the Reheat Factor and the Degree of Reaction.

---

### 1. Reheat Factor (RF)

**Key Concept:** The Reheat Factor quantifies the gain in the available energy of steam due to reheating in a steam turbine, accounting for losses that occur in the reheater and piping.

**1.1 What is Reheating?**

*   **Definition:** Reheating is a process in a steam turbine where steam, after partially expanding in the high-pressure (HP) stages, is sent back to the boiler to be reheated to a higher temperature before entering the intermediate-pressure (IP) or low-pressure (LP) stages.
*   **Purpose:**
    *   **Reduce Moisture Content:** Reheating significantly reduces the moisture content in the exhaust steam from the turbine, especially in the later stages. High moisture content can cause erosion of turbine blades and reduce turbine efficiency.
    *   **Increase Turbine Work Output:** By increasing the enthalpy at the lower pressure stages, reheating increases the overall work output of the turbine.
    *   **Improve Thermal Efficiency:** Although not the primary goal, reheating can contribute to improved thermal efficiency by increasing the average temperature at which heat is supplied.

**1.2 Reheat Factor - Definition and Formula**

*   **Definition:** The Reheat Factor is defined as the ratio of the total work done by the steam in the turbine with reheating to the work done by the steam without reheating, assuming the initial and final states of the steam are the same.
*   **Mathematical Representation:**

    Let:
    *   $W_{total, with \ reheat}$ = Total work done by steam in the turbine with reheating.
    *   $W_{total, without \ reheat}$ = Total work done by steam in the turbine without reheating.

    $$ \text{Reheat Factor (RF)} = \frac{W_{total, with \ reheat}}{W_{total, without \ reheat}} $$

*   **Alternative Formulation (based on enthalpy drop):**

    Let:
    *   $h_1$ = Enthalpy of steam at the inlet of the turbine (HP stage inlet).
    *   $h_2$ = Enthalpy of steam at the outlet of the HP stage (reheat inlet).
    *   $h_3$ = Enthalpy of steam at the outlet of the IP/LP stage (turbine exhaust).
    *   $h_{2'}$ = Enthalpy of steam after expansion in the HP stage without reheating (same as $h_2$ in the non-reheat case).
    *   $h_3'$ = Enthalpy of steam at the exhaust when expansion is from $h_{2'}$ to the same final pressure.

    Assuming expansion from $h_1$ to $h_3$ in a non-reheating turbine:
    $$ W_{total, without \ reheat} = (h_1 - h_2) + (h_2 - h_3) = h_1 - h_3 $$
    In a reheating turbine:
    $$ W_{total, with \ reheat} = (h_1 - h_2) + (h_2^* - h_3) $$
    where $h_2^*$ is the enthalpy after expansion from the reheat pressure, and $h_3$ is the final exhaust enthalpy.

    A more practical approach often involves considering the enthalpy drops:
    Let $\Delta h_{HP}$ be the isentropic enthalpy drop in the HP turbine and $\Delta h_{IP/LP}$ be the isentropic enthalpy drop in the IP/LP turbine.

    Without reheat: Total enthalpy drop = $\Delta h_{total} = \Delta h_{HP} + \Delta h_{IP/LP}$
    With reheat: Total enthalpy drop = $\Delta h'_{total} = \Delta h_{HP} + \Delta h'_{IP/LP}$ (where $\Delta h'_{IP/LP}$ is the enthalpy drop in IP/LP stages after reheating).

    The Reheat Factor can also be expressed as:
    $$ \text{RF} = \frac{(h_1 - h_2) + (h_2^{**} - h_3)}{(h_1 - h_3)} $$
    where $h_2^{**}$ is the enthalpy at the exit of the IP/LP turbine after expansion from the reheated state.

    **Crucially, the Reheat Factor is always greater than 1.** This is because reheating increases the internal energy of the steam entering the lower pressure stages, leading to a greater overall work output for the same initial and final pressures.

**1.3 Factors Affecting Reheat Factor**

*   **Reheat Pressure:** The pressure at which reheating occurs significantly impacts the RF.
*   **Reheat Temperature:** Higher reheat temperatures generally lead to higher RF.
*   **Initial Steam Conditions:** Initial pressure and temperature influence the moisture content and the potential for reheating benefits.
*   **Turbine Efficiency:** Actual turbine efficiencies (as opposed to isentropic) are considered in real-world calculations.
*   **Pressure Drop in Reheater and Piping:** Losses in the reheater and piping reduce the actual reheating effect and thus the RF.

**1.4 Significance of Reheat Factor (Relating to CO1, CO2)**

*   **Performance Analysis:** The RF is essential for accurately calculating the total work output of a multi-stage steam turbine with reheating.
*   **Efficiency Improvement:** By quantifying the benefit of reheating, it helps justify the added complexity and cost of a reheating system.
*   **Thermodynamic Cycle Analysis:** Understanding RF contributes to the analysis of the Rankine cycle with modifications.

**1.5 Example (Conceptual)**

Consider a steam turbine where the initial expansion provides $X$ kJ/kg of work, and the subsequent expansion after reheating provides $Y$ kJ/kg of work. The total work without reheating (assuming the same expansion path but no reheat) would be $Z$ kJ/kg.

*   If the reheat process is beneficial, $(X+Y) > Z$, and the RF will be greater than 1.
*   The RF helps quantify how much more work is obtained due to reheating.

---

### 2. Degree of Reaction (DR)

**Key Concept:** The Degree of Reaction describes how the enthalpy drop is distributed between the stationary (nozzle) and rotating (blade) components of a turbine stage. It's a measure of the proportion of the total enthalpy drop in a stage that occurs in the moving blades.

**2.1 Turbine Stage Components**

A typical steam turbine stage consists of:

*   **Stationary Blades (Nozzles/Diaphragm):** These blades are fixed and convert the enthalpy of steam into kinetic energy by allowing it to expand and accelerate.
*   **Moving Blades (Rotor Blades):** These blades are attached to the turbine shaft and extract kinetic energy from the high-velocity steam jet, causing the rotor to rotate.

**2.2 Degree of Reaction - Definition and Formula**

*   **Definition:** The Degree of Reaction for a stage is the ratio of the isentropic enthalpy drop in the moving blades to the total isentropic enthalpy drop in the stage (across both stationary and moving blades).
*   **Mathematical Representation:**

    Let:
    *   $\Delta h_{moving}$ = Isentropic enthalpy drop across the moving blades of a stage.
    *   $\Delta h_{stationary}$ = Isentropic enthalpy drop across the stationary blades (nozzle) of a stage.
    *   $\Delta h_{stage}$ = Total isentropic enthalpy drop across the stage = $\Delta h_{stationary} + \Delta h_{moving}$.

    $$ \text{Degree of Reaction (DR)} = \frac{\Delta h_{moving}}{\Delta h_{stage}} = \frac{\Delta h_{moving}}{\Delta h_{stationary} + \Delta h_{moving}} $$

*   **Alternative Formulation (using blade velocities and steam velocities):**

    The degree of reaction can also be expressed in terms of velocities. For a stage, if we consider the velocity triangles at the nozzle exit and the moving blade exit:

    $$ \text{DR} = \frac{V_{w1}^2 - V_{w2}^2}{V_{w1}^2 - V_{w2}^2 + V_{w1}^2} $$
    This form relates to the kinetic energy imparted to the rotor.

    A more common and useful expression derived from the principles of impulse and reaction turbines (explained below) is:

    $$ \text{DR} = \frac{C^2 - C_1^2}{C^2 - C_0^2} $$
    where:
    *   $C$ is the absolute velocity of steam leaving the stationary blades (nozzle).
    *   $C_1$ is the absolute velocity of steam leaving the moving blades.
    *   $C_0$ is the absolute velocity of steam entering the stationary blades.

    Another very useful formula derived from the work done on the moving blades relates to the enthalpy drop:
    $$ \text{DR} = \frac{u(V_{w1} - V_{w2})}{u(V_{w1} - V_{w2}) + u V_{w1}} $$
    Simplifying this leads to:
    $$ \text{DR} = \frac{V_{w1} - V_{w2}}{V_{w1}} $$
    where:
    *   $V_{w1}$ is the whirl velocity (tangential component of steam velocity) entering the moving blades.
    *   $V_{w2}$ is the whirl velocity leaving the moving blades.

    **Important Note:** The Degree of Reaction is a dimensionless quantity, ranging from 0 to 1.

**2.3 Types of Turbines based on Degree of Reaction**

The degree of reaction is a key parameter used to classify steam turbines:

*   **Impulse Turbine (DR = 0):**
    *   **Description:** In an ideal impulse turbine, the entire enthalpy drop occurs across the stationary nozzles. The steam leaves the nozzles with high velocity, and this kinetic energy is used to drive the moving blades. There is no pressure drop across the moving blades.
    *   **Enthalpy Distribution:** All enthalpy drop in the stage is in the stationary blades ($\Delta h_{moving} = 0$).
    *   **Pressure:** Steam pressure is constant across the moving blades.
    *   **Work:** Work is done solely by the impulse of the steam jet.

*   **Reaction Turbine (DR > 0):**
    *   **Description:** In a reaction turbine, the enthalpy drop occurs across both stationary and moving blades. The moving blades are designed as nozzles, causing expansion and acceleration of steam as it passes through them.
    *   **Enthalpy Distribution:** Enthalpy drops occur in both stationary and moving blades ($\Delta h_{moving} > 0$).
    *   **Pressure:** Steam pressure drops across the moving blades.
    *   **Work:** Work is done by the impulse of the steam and the reaction force due to the change in momentum of the steam passing through the shaped moving blades.

*   **Parson's Reaction Turbine (DR = 0.5 or 50%):**
    *   **Description:** This is a special case of a reaction turbine where the enthalpy drop is equally divided between the stationary and moving blades.
    *   **Enthalpy Distribution:** $\Delta h_{stationary} = \Delta h_{moving}$.
    *   **Significance:** Parson's turbine is known for its balance of impulse and reaction forces, leading to good efficiency and reduced blade thrust. The symmetrical design of the blades simplifies manufacturing.

**2.4 Factors Affecting Degree of Reaction**

*   **Blade Design:** The shape and profile of both stationary and moving blades determine the pressure and velocity changes of the steam.
*   **Nozzle Design:** The expansion and acceleration characteristics of the stationary blades are crucial.
*   **Velocity Ratio (Blade Speed to Steam Speed):** The ratio of blade tip speed ($u$) to the steam jet speed ($C_0$) influences the work done and efficiency. A higher velocity ratio generally leads to higher efficiency for reaction turbines.
*   **Stage Loading:** The extent to which the steam expands and imparts energy in each stage.

**2.5 Significance of Degree of Reaction (Relating to CO1, CO2)**

*   **Blade Design and Efficiency:** The DR dictates the design of turbine blades and significantly impacts the stage efficiency.
*   **Stage Characteristics:** It helps understand how energy is extracted in each stage.
*   **Blade Thrust:** A non-zero DR can result in a significant axial thrust on the rotor due to the pressure difference across the moving blades, requiring thrust bearings. Impulse turbines have minimal axial thrust.
*   **Specific Speed:** The degree of reaction is related to the specific speed of a turbine, which is a parameter used for turbine selection.

**2.6 Example (Illustrative)**

Consider a turbine stage with a total enthalpy drop of 100 kJ/kg.

*   **Case A: Impulse Turbine (DR = 0)**
    *   Enthalpy drop in stationary blades = 100 kJ/kg
    *   Enthalpy drop in moving blades = 0 kJ/kg
    *   $\Delta h_{moving} / \Delta h_{stage} = 0 / 100 = 0$

*   **Case B: Reaction Turbine (DR = 0.5)**
    *   Enthalpy drop in stationary blades = 50 kJ/kg
    *   Enthalpy drop in moving blades = 50 kJ/kg
    *   $\Delta h_{moving} / \Delta h_{stage} = 50 / 100 = 0.5$

*   **Case C: Reaction Turbine (DR = 0.2)**
    *   Enthalpy drop in stationary blades = 80 kJ/kg
    *   Enthalpy drop in moving blades = 20 kJ/kg
    *   $\Delta h_{moving} / \Delta h_{stage} = 20 / 100 = 0.2$

**2.7 Textual References**

*   **Rudra Moorthy:** Likely discusses Reheating in chapters related to steam power cycles and turbine types. Degree of Reaction would be covered in the detailed analysis of turbine stages, impulse vs. reaction turbines, and blade velocity diagrams.
*   **R.K Rajput:** Similar to Rudra Moorthy, Rajput's book will have dedicated sections on Reheating for improving cycle efficiency and exhaust conditions. The Degree of Reaction will be a core concept in explaining the working principle of different turbine types and stage analysis.
*   **Mahesh Rathore:** May offer a more analytical approach to the Reheat Factor and the detailed mechanics behind the Degree of Reaction, potentially with more emphasis on velocity triangles.

---

### 3. Practice Questions and Exercises

**Question 1 (Reheat Factor):**
Explain the necessity of reheating in a steam turbine and define the Reheat Factor. What are the typical values of Reheat Factor for a modern steam power plant?

**Answer:**
Reheating is necessary to reduce moisture content in the exhaust steam of a turbine, thereby preventing erosion of turbine blades and improving efficiency. It also increases the work output. The Reheat Factor is defined as the ratio of total work done with reheating to the total work done without reheating, for the same initial and final conditions. Typical values of Reheat Factor for modern steam power plants are in the range of 1.02 to 1.10, indicating a 2% to 10% increase in work output due to reheating.

**Question 2 (Degree of Reaction):**
What is the Degree of Reaction? Derive an expression for the Degree of Reaction for a turbine stage in terms of whirl velocities.

**Answer:**
The Degree of Reaction is the ratio of the isentropic enthalpy drop in the moving blades to the total isentropic enthalpy drop in the stage.

Derivation:
Work done per stage per unit mass flow rate ($W_{stage}$) = $u(V_{w1} - V_{w2})$.
Enthalpy drop in stationary blades ($\Delta h_{stationary}$) is converted to kinetic energy $C^2/2$. So, $\Delta h_{stationary} \propto C^2$.
Enthalpy drop in moving blades ($\Delta h_{moving}$) is related to the change in kinetic energy across the moving blades.
From velocity triangles and impulse-momentum principle, it can be shown that $\Delta h_{moving}$ is proportional to $u(V_{w1} - V_{w2})$ or $V_{w1}^2 - V_{w2}^2$.

A common derivation leads to:
Degree of Reaction (DR) = $\frac{\Delta h_{moving}}{\Delta h_{stage}} = \frac{\Delta h_{moving}}{\Delta h_{stationary} + \Delta h_{moving}}$

Considering the work done by the steam on the blades and the enthalpy changes:
$\Delta h_{moving} = u (V_{w1} - V_{w2})$ (This is a simplified relationship for pure reaction force contribution)
$\Delta h_{stationary} = u V_{w1}$ (This is a simplified relationship for pure impulse contribution, assuming no reaction force from nozzle curvature).

So, $DR = \frac{u(V_{w1} - V_{w2})}{u(V_{w1} - V_{w2}) + u V_{w1}} = \frac{V_{w1} - V_{w2}}{V_{w1}}$.
*(Note: The exact derivation involves detailed velocity triangles and energy balance. This simplified form highlights the relation to whirl velocities).*

**Question 3 (Conceptual):**
An impulse turbine and a reaction turbine are designed to produce the same amount of work from a given steam flow rate and enthalpy drop. Which turbine is likely to be more compact (smaller diameter), and why?

**Answer:**
A reaction turbine is likely to be more compact.
**Reasoning:** In a reaction turbine (especially with DR closer to 0.5), there is an enthalpy drop across both stationary and moving blades. This means the steam expands and its velocity increases as it passes through the moving blades. To handle this expansion and ensure efficient energy transfer, reaction turbines generally operate with lower blade speeds relative to the steam jet velocity compared to pure impulse turbines, or they require more stages for the same pressure drop. However, the key here is how the enthalpy drop is distributed. The expansion in moving blades of a reaction turbine means the steam jet itself is less energetic and potentially slower overall compared to a pure impulse turbine where all expansion happens in the nozzle. This allows for more stages operating at lower speeds, or alternatively, a given work output can be achieved with a higher stage loading in reaction turbines, potentially leading to fewer stages or a more compact design for a given efficiency target.

*(Self-correction/Refinement: While reaction turbines can be more compact for a given power output due to higher stage loading, a pure impulse turbine can achieve very high blade speeds for a given steam velocity, potentially requiring a smaller rotor diameter for the same tangential velocity. The compactness argument can be nuanced. However, typically, reaction turbines are considered to have higher stage efficiencies and can achieve desired work output with finer staging or better space utilization.)*

**Let's re-evaluate the compactness argument:**
For the same work output and initial/final conditions, a **pure impulse turbine** often requires a higher blade speed relative to the steam jet velocity (lower velocity ratio) for optimal efficiency. To achieve this high blade speed with a given rotational speed, the rotor diameter needs to be larger.
A **reaction turbine** (especially with DR=0.5) can achieve optimal efficiency with a lower velocity ratio. This means for the same rotational speed, the rotor diameter can be smaller.
Therefore, a **reaction turbine is generally considered more compact for a given work output.**

**Question 4 (Multiple Choice):**
The Reheat Factor is always:
a) Less than 1
b) Equal to 1
c) Greater than 1
d) Zero

**Answer:** c) Greater than 1

**Question 5 (True/False):**
In a pure impulse turbine, the degree of reaction is 0.5.

**Answer:** False (In a pure impulse turbine, DR = 0. In a 50% reaction turbine, DR = 0.5).

---

### 4. Important Points to Remember

*   **Reheating:** Primarily reduces exhaust moisture and increases work output. RF > 1.
*   **Reheat Factor:** Quantifies the benefit of reheating. Affected by reheat pressure, temperature, and system losses.
*   **Degree of Reaction:** Distributes enthalpy drop between stationary and moving blades. DR = $\Delta h_{moving} / \Delta h_{stage}$.
*   **Impulse Turbine:** DR = 0. All expansion in stationary nozzles.
*   **Reaction Turbine:** DR > 0. Expansion in both stationary and moving blades.
*   **Parson's Turbine:** DR = 0.5. Equal enthalpy drop in stationary and moving blades.
*   **Blade Thrust:** Reaction turbines experience significant axial thrust due to pressure drop across moving blades, requiring thrust bearings. Impulse turbines have negligible axial thrust.
*   **Efficiency:** Both reheating and appropriate choice of DR are crucial for maximizing steam turbine efficiency.

---

### 5. Alignment with Course Outcomes

*   **CO1 (Apply thermodynamic principles):** Understanding enthalpy drops, work calculation, and cycle modifications (reheating) directly applies thermodynamic principles to steam power cycles.
*   **CO2 (Analyze turbine performance, improve efficiency):** RF and DR are fundamental parameters used to analyze stage performance and identify methods to improve overall turbine efficiency by optimizing energy extraction and minimizing losses.
*   **CO3 & CO4:** While this topic is specific to steam turbines, the underlying thermodynamic principles of energy conversion and fluid dynamics are applicable to IC engines as well, forming a broader understanding of thermal machines.
*   **CO5:** Understanding these concepts is a prerequisite for advanced analysis, simulation, or experimental studies on steam turbines.

---
**End of Notes for Topic: Reheat Factor and Degree of Reaction**

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
