---
title: "Phase transformations of pure substance"
subject: "ENGINEERING THERMODYNAMICS"
module: "Module 4: Entropy generation"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462f6f"
status: "completed"
scrapedAt: "2026-05-20T17:53:50.141Z"
---
# ENGINEERING THERMODYNAMICS: Module 4 - Entropy Generation

## Topic: Phase Transformations of a Pure Substance

This module focuses on understanding and quantifying entropy generation during phase transformations of pure substances. This is crucial for analyzing the irreversibility and efficiency of various thermodynamic processes.

### Learning Outcomes:

*   **Understand the thermodynamic principles governing phase transformations.** (CO1, CO2, CO5)
*   **Analyze the entropy changes associated with phase change processes.** (CO4)
*   **Determine the properties of pure substances during phase change using property tables and diagrams.** (CO5)
*   **Apply the concept of entropy generation to evaluate the irreversibility of phase transformation processes.** (CO4)

### 1. Introduction to Phase Transformations

A **phase transformation** (or phase change) is a physical process where a substance changes from one state (solid, liquid, gas) to another. For a pure substance, these transformations occur at specific temperatures and pressures.

*   **Pure Substance:** A substance that has a fixed chemical composition throughout. Examples include water ($\text{H}_2\text{O}$), Refrigerant 134a, Nitrogen ($\text{N}_2$), etc.
*   **Phases of a Pure Substance:**
    *   **Solid:** Molecules are in fixed positions, highly ordered.
    *   **Liquid:** Molecules are close but can move around, less ordered than solid.
    *   **Gas:** Molecules are far apart and move randomly, highly disordered.

**Key Concepts:**

*   **Saturation Temperature ($T_{sat}$):** The temperature at which a phase change occurs at a given pressure.
*   **Saturation Pressure ($P_{sat}$):** The pressure at which a phase change occurs at a given temperature.
*   **Latent Heat:** The amount of energy absorbed or released during a phase change at constant temperature and pressure.
    *   **Latent Heat of Fusion:** Energy absorbed during melting (solid to liquid) or released during freezing (liquid to solid).
    *   **Latent Heat of Vaporization:** Energy absorbed during vaporization (liquid to gas) or released during condensation (gas to liquid).

**Cengel & Boles (2011):** Emphasizes that phase change for a pure substance occurs at constant temperature and pressure when heat is added or removed. The added heat is called latent heat.

**P.K. Nag (2017):** Defines saturation temperature and pressure and their relationship. He also introduces specific latent heats for fusion and vaporization.

### 2. Properties of Pure Substances During Phase Change

To analyze phase transformations, we need to understand the thermodynamic properties of pure substances in different phases. This often involves using **property tables**.

**Phases of a Pure Substance (Cengel & Boles, 2011):**

*   **Compressed Liquid:** Liquid below its saturation temperature at the given pressure.
*   **Saturated Liquid:** Liquid at its saturation temperature and pressure.
*   **Saturated Liquid-Vapor Mixture:** The region where both liquid and vapor phases coexist at saturation temperature and pressure.
*   **Saturated Vapor:** Vapor at its saturation temperature and pressure.
*   **Superheated Vapor:** Vapor above its saturation temperature at the given pressure.

**Quality ($x$) (Cengel & Boles, 2011; P.K. Nag, 2017):**

For a saturated liquid-vapor mixture, quality is defined as the ratio of the mass of vapor to the total mass of the mixture.

$x = \frac{m_{vapor}}{m_{total}} = \frac{m_{vapor}}{m_{liquid} + m_{vapor}}$

*   $x = 0$: Saturated liquid
*   $x = 1$: Saturated vapor
*   $0 < x < 1$: Saturated liquid-vapor mixture

**Properties of Saturated Liquids and Vapors:**

Tables in textbooks (e.g., Cengel & Boles, P.K. Nag) provide properties like:

*   $T_{sat}$
*   $P_{sat}$
*   Specific volume ($v_f$, $v_g$, $v_f = \frac{v_f}{m_{total}}$)
*   Internal energy ($u_f$, $u_g$, $u_{fg} = u_g - u_f$)
*   Enthalpy ($h_f$, $h_g$, $h_{fg} = h_g - h_f$)
*   Entropy ($s_f$, $s_g$, $s_{fg} = s_g - s_f$)

**Properties of Saturated Liquid-Vapor Mixture:**

Any property ($P$) in the mixture can be calculated using quality:

$P = P_f + x \cdot P_{fg}$

where $P_f$ is the property of saturated liquid and $P_{fg}$ is the difference between the saturated vapor and saturated liquid values ($P_g - P_f$).

*   $v = v_f + x v_{fg}$
*   $u = u_f + x u_{fg}$
*   $h = h_f + x h_{fg}$
*   $s = s_f + x s_{fg}$

**Example 1 (CO5):** Determine the enthalpy of 2 kg of Refrigerant 134a at 0.6 MPa and $x = 0.7$.

*   **Solution Approach:**
    1.  Locate Refrigerant 134a in the saturation pressure table. Find the saturation temperature corresponding to $P = 0.6 \text{ MPa}$.
    2.  From the same table, find $h_f$ and $h_{fg}$ at 0.6 MPa.
    3.  Use the formula $h = h_f + x h_{fg}$ to calculate the specific enthalpy.
    4.  Multiply the specific enthalpy by the mass (2 kg) to get the total enthalpy.

**Cengel & Boles (2011):** Provides comprehensive tables for various refrigerants, steam, and other common substances.

### 3. Entropy Changes During Phase Transformations

Phase transformations are characterized by significant changes in entropy. This is because the disorder of the substance increases as it transitions from a more ordered phase to a less ordered phase (e.g., solid to liquid, liquid to gas).

**Entropy of Saturated Liquid and Vapor:**

The entropy of saturated liquid is denoted by $s_f$, and the entropy of saturated vapor by $s_g$. The difference, $s_{fg} = s_g - s_f$, represents the change in entropy during vaporization at constant temperature and pressure.

**Entropy of a Saturated Liquid-Vapor Mixture:**

Similar to other properties, the entropy ($s$) of a mixture is calculated using quality:

$s = s_f + x s_{fg}$

**Isentropic Phase Change (Hypothetical):**

While phase changes involve latent heat, a phase change from saturated liquid to saturated vapor at constant temperature and pressure is **not** isentropic in the sense of a reversible adiabatic process where $s$ is constant. The process of absorbing latent heat (e.g., vaporization) is inherently irreversible if considered in isolation from the heat source. However, the **change in entropy** itself is a property value difference, not a process calculation.

**Example 2 (CO4):** Calculate the entropy change when 1 kg of saturated water at 100°C vaporizes completely to saturated steam at 100°C.

*   **Solution Approach:**
    1.  Use the steam tables to find $s_f$ and $s_g$ at 100°C (which is also the saturation temperature at 1 atm).
    2.  Calculate the entropy change: $\Delta s = s_g - s_f$. Since $x$ goes from 0 to 1, the final entropy is $s_g$ and the initial entropy is $s_f$.

**Cengel & Boles (2011) & P.K. Nag (2017):** Both texts provide entropy values in their saturation tables, allowing for the calculation of entropy changes during phase transitions.

### 4. Entropy Generation in Phase Transformations

Entropy generation ($s_{gen}$) is a measure of irreversibility in a process. A process with positive entropy generation is irreversible.

**Second Law of Thermodynamics and Entropy Generation:**

For any process, the total entropy change of a system and its surroundings is greater than or equal to zero.

$\Delta S_{total} = \Delta S_{system} + \Delta S_{surroundings} \ge 0$

Entropy generation is defined as:

$S_{gen} = \Delta S_{total} = \Delta S_{system} + \Delta S_{surroundings}$

**Phase Change with Heat Transfer:**

Consider a pure substance undergoing vaporization at its saturation temperature $T_{sat}$ by receiving heat $Q$ from a reservoir at temperature $T_{res}$.

*   **System:** The pure substance undergoing phase change.
*   **Surroundings:** The reservoir.

**Process:**

1.  **System:** The substance absorbs heat $Q$ and its entropy increases. If the phase change is from liquid to vapor, the entropy change is:
    $\Delta S_{system} = S_{final} - S_{initial} = s_g - s_f = s_{fg}$ (per unit mass)

2.  **Surroundings:** The reservoir loses heat $Q$ at a constant temperature $T_{res}$. Assuming the reservoir is very large, its temperature change is negligible, and the process of heat transfer is assumed to be reversible from the reservoir's perspective.
    $\Delta S_{surroundings} = -\frac{Q}{T_{res}}$

**Entropy Generation Calculation:**

If the heat transfer from the reservoir to the substance is ideal (i.e., $T_{res} = T_{sat}$), the process is reversible, and entropy generation is zero.

$S_{gen} = \Delta S_{system} + \Delta S_{surroundings} = s_{fg} - \frac{Q}{T_{sat}}$

For complete vaporization of a unit mass, $Q = h_{fg}$ (the latent heat of vaporization).

$S_{gen} = s_{fg} - \frac{h_{fg}}{T_{sat}}$

**Important Relationship (Clausius Inequality/Clapeyron Equation connection):**

The Clapeyron equation relates the slope of the saturation curve on a P-T diagram to the latent heat and the change in specific volume during phase change:

$\frac{dP_{sat}}{dT} = \frac{h_{fg}}{T_{sat}(v_{fg})}$

We also know that $s_{fg} = \frac{h_{fg}}{T_{sat}}$ for a reversible phase change at constant temperature and pressure.

Therefore, for a reversible phase change:

$S_{gen} = s_{fg} - \frac{h_{fg}}{T_{sat}} = \frac{h_{fg}}{T_{sat}} - \frac{h_{fg}}{T_{sat}} = 0$

**Irreversible Phase Change:**

If the heat transfer occurs with a temperature difference ($T_{res} > T_{sat}$), the process becomes irreversible, and entropy generation will be positive.

$S_{gen} = s_{fg} - \frac{h_{fg}}{T_{res}} > 0$ (since $T_{res} > T_{sat}$)

**Example 3 (CO4):** 1 kg of saturated liquid water at 100°C is vaporized by heat transfer from a reservoir at 150°C. Calculate the entropy generation for this process.

*   **Data:**
    *   $T_{sat}$ = 100°C = 373.15 K
    *   $h_{fg}$ at 100°C ≈ 2257 kJ/kg
    *   $s_{fg}$ at 100°C ≈ 6.070 kJ/(kg·K)
    *   $T_{res}$ = 150°C = 423.15 K

*   **Solution Approach:**
    1.  Calculate the entropy change of the system (water): $\Delta S_{system} = s_{fg} = 6.070 \text{ kJ/(kg·K)}$.
    2.  Calculate the entropy change of the surroundings (reservoir): $\Delta S_{surroundings} = -\frac{Q}{T_{res}}$. Here $Q = m \cdot h_{fg} = 1 \text{ kg} \cdot 2257 \text{ kJ/kg} = 2257 \text{ kJ}$.
        $\Delta S_{surroundings} = -\frac{2257 \text{ kJ}}{423.15 \text{ K}} \approx -5.334 \text{ kJ/K}$.
    3.  Calculate the total entropy generation: $S_{gen} = \Delta S_{system} + \Delta S_{surroundings} = 6.070 \text{ kJ/K} + (-5.334 \text{ kJ/K}) \approx 0.736 \text{ kJ/K}$.

**Moran & Shapiro (2006):** Emphasizes the link between irreversibility and entropy generation. They often frame these analyses in terms of exergy destruction.

**Sonntag, Borgnakke, & VanWylen (2014):** Discusses phase equilibrium and the role of temperature and pressure. They also provide detailed property tables.

### 5. Applications and Examples

Phase transformations are fundamental to many thermodynamic cycles and devices.

*   **Boilers and Condensers in Power Cycles (e.g., Rankine Cycle):** Water vaporizes in the boiler and condenses in the condenser. Understanding entropy changes and generation is key to analyzing efficiency.
*   **Refrigeration Cycles:** Refrigerants undergo evaporation and condensation to absorb and reject heat, respectively.
*   **Drying Processes:** Water removal from materials often involves evaporation.
*   **Distillation:** Separation of components based on differences in boiling points.

**Example 4 (CO3, CO4):** Steam enters a turbine at 4 MPa and 400°C, and expands to 0.05 MPa. If the turbine is adiabatic and reversible (isentropic), what is the exit state and the work produced? If the turbine is adiabatic but irreversible with an isentropic efficiency of 85%, what is the exit state and the work produced?

*   **Part 1: Reversible (Isentropic) Expansion:**
    1.  **Inlet State:** From superheated steam tables at 4 MPa, 400°C: $h_1 \approx 3213.6 \text{ kJ/kg}$, $s_1 \approx 6.771 \text{ kJ/(kg·K)}$.
    2.  **Exit State (Isentropic):** The exit pressure is 0.05 MPa. Since $s_2 = s_1 = 6.771 \text{ kJ/(kg·K)}$, we need to find the state at 0.05 MPa with this entropy.
        *   At 0.05 MPa: $s_f = 0.5926 \text{ kJ/(kg·K)}$, $s_g = 8.1496 \text{ kJ/(kg·K)}$.
        *   Since $s_f < s_2 < s_g$, the exit state is a saturated mixture.
        *   Calculate quality $x_2$: $s_2 = s_f + x_2 s_{fg}$.
            $s_{fg} = s_g - s_f = 8.1496 - 0.5926 = 7.5570 \text{ kJ/(kg·K)}$.
            $6.771 = 0.5926 + x_2 (7.5570) \Rightarrow x_2 \approx 0.815$.
        *   Calculate exit enthalpy $h_2$: $h_f = 256.21 \text{ kJ/kg}$, $h_g = 2600.0 \text{ kJ/kg}$.
            $h_{fg} = h_g - h_f = 2600.0 - 256.21 = 2343.8 \text{ kJ/kg}$.
            $h_2 = h_f + x_2 h_{fg} = 256.21 + 0.815 (2343.8) \approx 2165.1 \text{ kJ/kg}$.
    3.  **Work Produced (Reversible):** For an adiabatic turbine, $w_{turb,rev} = h_1 - h_2 = 3213.6 - 2165.1 \approx 1048.5 \text{ kJ/kg}$.

*   **Part 2: Irreversible Expansion (85% Isentropic Efficiency):**
    1.  **Actual Exit Enthalpy:** Isentropic efficiency $\eta_{turb} = \frac{w_{turb,actual}}{w_{turb,rev}}$.
        $w_{turb,actual} = \eta_{turb} \cdot w_{turb,rev} = 0.85 \cdot 1048.5 \text{ kJ/kg} \approx 891.2 \text{ kJ/kg}$.
    2.  **Actual Exit State:** $w_{turb,actual} = h_1 - h_{2,actual}$.
        $h_{2,actual} = h_1 - w_{turb,actual} = 3213.6 - 891.2 \approx 2322.4 \text{ kJ/kg}$.
    3.  **Find Properties at 0.05 MPa and $h_{2,actual} = 2322.4 \text{ kJ/kg}$:**
        *   At 0.05 MPa: $h_f = 256.21 \text{ kJ/kg}$, $h_g = 2600.0 \text{ kJ/kg}$.
        *   Since $h_f < h_{2,actual} < h_g$, the actual exit state is also a saturated mixture.
        *   Calculate actual quality $x_{2,actual}$: $h_{2,actual} = h_f + x_{2,actual} h_{fg}$.
            $2322.4 = 256.21 + x_{2,actual} (2343.8) \Rightarrow x_{2,actual} \approx 0.879$.

**Note:** This example demonstrates how to use property tables for phase changes in a more complex scenario relevant to power cycles.

### 6. Important Points to Remember

*   **Phase changes occur at constant temperature and pressure for pure substances.**
*   **Latent heat is absorbed or released during phase changes.**
*   **Quality ($x$) is essential for defining properties in a saturated liquid-vapor mixture.**
*   **Entropy generally increases during transitions from solid to liquid to gas.**
*   **Entropy generation ($S_{gen}$) is a measure of irreversibility.**
*   **A phase change process with heat transfer from a reservoir at a higher temperature will result in positive entropy generation.**
*   **Property tables (saturation tables) are indispensable for obtaining data for phase changes.**
*   **The relationship $s_{fg} = h_{fg}/T_{sat}$ holds for reversible phase changes.**

### 7. Practice Questions and Exercises

**Question 1 (CO5):** Determine the specific enthalpy of 3 kg of water at 2 MPa pressure if the temperature is 150°C.
**Answer:**
*   At 2 MPa, $T_{sat} = 212.4^\circ\text{C}$. Since 150°C < 212.4°C, water is a compressed liquid.
*   Using compressed liquid tables for water at 2 MPa and 150°C, $h \approx 631.8 \text{ kJ/kg}$.
*   Total enthalpy = $3 \text{ kg} \times 631.8 \text{ kJ/kg} \approx 1895.4 \text{ kJ}$.

**Question 2 (CO4, CO5):** Calculate the entropy of 1 kg of Refrigerant 134a at 0.4 MPa and 80°C.
**Answer:**
*   At 0.4 MPa, $T_{sat} = 7.32^\circ\text{C}$. Since 80°C > 7.32°C, the refrigerant is superheated vapor.
*   Using superheated refrigerant tables at 0.4 MPa and 80°C, $s \approx 1.0354 \text{ kJ/(kg·K)}$.

**Question 3 (CO4):** 0.5 kg of saturated water vapor at 100°C is cooled to saturated liquid at 100°C. Calculate the entropy change of the water.
**Answer:**
*   Initial state: Saturated vapor at 100°C ($x=1$), $s_1 = s_g$ at 100°C. From steam tables, $s_g \approx 7.3589 \text{ kJ/(kg·K)}$.
*   Final state: Saturated liquid at 100°C ($x=0$), $s_2 = s_f$ at 100°C. From steam tables, $s_f \approx 1.3069 \text{ kJ/(kg·K)}$.
*   Entropy change $\Delta s = s_2 - s_1 = 1.3069 - 7.3589 \approx -6.052 \text{ kJ/(kg·K)}$.
*   Total entropy change = $0.5 \text{ kg} \times (-6.052 \text{ kJ/(kg·K)}) \approx -3.026 \text{ kJ/K}$. (Entropy decreases as disorder decreases).

**Question 4 (CO4):** A heat pump uses Refrigerant 134a. In the evaporator, the refrigerant absorbs heat at -10°C and completely vaporizes. If the heat is supplied from ambient air at -10°C (assume reversible heat transfer), calculate the entropy change of the refrigerant.
**Answer:**
*   The process is a phase change from saturated liquid to saturated vapor at $-10^\circ\text{C}$.
*   From R-134a saturation tables at $-10^\circ\text{C}$: $s_f = 0.9405 \text{ kJ/(kg·K)}$, $s_g = 1.0525 \text{ kJ/(kg·K)}$.
*   Entropy change per unit mass: $\Delta s_{system} = s_g - s_f = 1.0525 - 0.9405 = 0.1120 \text{ kJ/(kg·K)}$.
*   Since the heat transfer is reversible from the ambient air (at the same temperature), $\Delta S_{surroundings} = 0$.
*   Total entropy generation $S_{gen} = \Delta S_{system} + \Delta S_{surroundings} = 0.1120 + 0 = 0.1120 \text{ kJ/(kg·K)}$. (This is the entropy change of the refrigerant, and also the entropy generation for this reversible process).

This comprehensive set of notes covers the fundamental aspects of phase transformations of pure substances in the context of entropy generation, aligning with the learning outcomes and course objectives. Remember to consult the provided textbooks for detailed property tables and additional examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
