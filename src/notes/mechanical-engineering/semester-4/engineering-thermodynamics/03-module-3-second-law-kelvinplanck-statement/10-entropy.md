---
title: "entropy"
subject: "ENGINEERING THERMODYNAMICS"
module: "Module 3: Second law: Kelvin–Planck statement"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462f61"
status: "completed"
scrapedAt: "2026-05-20T17:53:40.837Z"
---
# Engineering Thermodynamics: Module 3 - Second Law: Kelvin-Planck Statement & Entropy

## Introduction to the Second Law of Thermodynamics

The Second Law of Thermodynamics introduces the concept of **directionality** to thermodynamic processes, which is absent in the First Law. While the First Law deals with the conservation of energy, the Second Law addresses the **quality** of energy and the **feasibility** of processes. It tells us which processes can occur spontaneously and which cannot.

### Key Concepts and Definitions:

*   **Thermal Reservoir:** A body of very large heat capacity, such that its temperature remains constant during heat transfer.
    *   **Source:** A reservoir at a higher temperature from which heat is supplied.
    *   **Sink:** A reservoir at a lower temperature to which heat is rejected.
*   **Heat Engine:** A device that operates in a cycle and produces work by transferring heat from a high-temperature reservoir to a low-temperature reservoir. (CO2)
*   **Heat Pump & Refrigerator:** Devices that operate in a cycle and transfer heat from a low-temperature reservoir to a high-temperature reservoir, requiring work input. (CO2)

### The Kelvin-Planck Statement of the Second Law

**Statement:** "It is impossible for any device that operates in a cycle to receive heat from a single reservoir and to produce a net amount of work." (CO2)

**Implications:**

*   No heat engine can be 100% efficient. There must always be a rejection of heat to a lower-temperature sink.
*   This statement directly opposes the concept of a "perpetual motion machine of the second kind" – a hypothetical machine that could convert all heat input into work.

---

## Topic: Entropy

Entropy is a fundamental property introduced by the Second Law of Thermodynamics that quantifies the degree of **disorder** or **randomness** in a system. It is also a measure of the **unavailability** of a system's thermal energy for conversion into mechanical work.

### 1. The Clausius Inequality and the Definition of Entropy

While the Kelvin-Planck statement deals with the impossibility of certain cycles, the Clausius inequality provides a more general way to assess the feasibility of any process, reversible or irreversible.

**The Clausius Inequality:** For any cycle executed by a system, the integral of $\delta Q/T$ over the cycle is less than or equal to zero.

$\oint \frac{\delta Q}{T} \le 0$ (CO2)

*   The equality holds for a **reversible cycle**.
*   The inequality holds for an **irreversible cycle**.

**Entropy (S) Definition:** For a reversible process, the change in entropy ($dS$) is defined as the heat transfer ($ \delta Q_{rev}$) divided by the absolute temperature ($T$) at which the transfer occurs.

$dS = \frac{\delta Q_{rev}}{T}$ (CO2)

*   **Units:** Entropy is typically measured in Joules per Kelvin (J/K) or Joules per kilogram Kelvin (J/kg·K).

**Entropy Change for a Process:** For a process between two states (1 and 2), the entropy change is the integral of $dS$ along a reversible path connecting these states:

$\Delta S = S_2 - S_1 = \int_{1}^{2} \frac{\delta Q_{rev}}{T}$ (CO2)

**Important Note:** The heat transfer term $\delta Q$ in the definition *must* be the heat transfer in a **reversible** process between the same two states. This is because entropy is a property, and its change between two states is path-independent.

### 2. Entropy Change of a System and its Surroundings

The Second Law can also be stated in terms of entropy:

**Entropy Principle (Second Law of Thermodynamics):** The total entropy of an isolated system can only increase over time, or remain constant in the case of reversible processes.

$\Delta S_{total} = \Delta S_{system} + \Delta S_{surroundings} \ge 0$ (CO2)

*   **$\Delta S_{total} > 0$:** The process is **irreversible** (spontaneous, real-world process).
*   **$\Delta S_{total} = 0$:** The process is **reversible** (idealized process).
*   **$\Delta S_{total} < 0$:** The process is **impossible**.

**Entropy Change of Surroundings:** The entropy change of the surroundings is calculated based on the heat transfer to/from the surroundings at its (assumed constant) temperature:

$\Delta S_{surroundings} = \frac{Q_{surroundings}}{T_{surroundings}}$ (CO2)

**How to calculate $\Delta S_{surroundings}$:**

*   If heat $Q$ is transferred from the system to the surroundings at temperature $T_{surr}$, then $Q_{surr} = -Q_{system}$, and $\Delta S_{surr} = \frac{-Q_{system}}{T_{surr}}$.
*   If heat $Q$ is transferred from the surroundings to the system at temperature $T_{surr}$, then $Q_{surr} = Q_{system}$, and $\Delta S_{surr} = \frac{Q_{system}}{T_{surr}}$.

### 3. Reversible Adiabatic Processes and Entropy

A **reversible adiabatic process** is also known as an **isentropic process**.

*   In such a process, $\delta Q_{rev} = 0$.
*   From the definition of entropy ($dS = \delta Q_{rev}/T$), this implies $dS = 0$.
*   Therefore, for a reversible adiabatic process, the entropy remains constant: $\Delta S = 0$.

**Key Point:** While adiabatic processes have no heat transfer, they are not necessarily reversible or isentropic. An irreversible adiabatic process will result in an increase in entropy ($\Delta S > 0$). (CO4)

### 4. Entropy Change of Pure Substances

For pure substances, entropy is a property, and its values can be found in steam tables or other property tables. (CO5)

**Methods for Calculating Entropy Changes:**

*   **Using Property Tables:** This is the most common and practical method for real-world substances like water, refrigerants, etc. You find the entropy values ($s$) at the initial and final states from the tables. (CO5)

    *   **Compressed Liquid:** Use values for saturated liquid at the given temperature.
    *   **Saturated Mixture:** $s = s_f + x s_{fg}$, where $x$ is the quality.
    *   **Superheated Vapor:** Interpolate from superheated vapor tables.

*   **For Ideal Gases:**
    *   **Specific Heat Variation:** For processes where specific heats vary significantly with temperature, the following integral form is used:
        $s_2 - s_1 = \int_{T_1}^{T_2} c_p(T) \frac{dT}{T} - R \ln \frac{P_2}{P_1}$ (for constant pressure process)
        $s_2 - s_1 = \int_{T_1}^{T_2} c_v(T) \frac{dT}{T} - R \ln \frac{v_2}{v_1}$ (for constant volume process)
        $s_2 - s_1 = c_{p,avg} \ln \frac{T_2}{T_1} - R \ln \frac{P_2}{P_1}$ (for processes with constant average specific heats)
        $s_2 - s_1 = c_{v,avg} \ln \frac{T_2}{T_1} - R \ln \frac{v_2}{v_1}$ (for processes with constant average specific heats)
    *   **Constant Specific Heats (Approximation):** If specific heats can be assumed constant over the temperature range:
        $\Delta s = c_p \ln \frac{T_2}{T_1} - R \ln \frac{P_2}{P_1}$ (CO4)
        $\Delta s = c_v \ln \frac{T_2}{T_1} + R \ln \frac{v_2}{v_1}$ (CO4)

    **Derivation Hint (Cengel & Boles, Chapter 7):** Start with the Gibbs relations and ideal gas relations to arrive at these formulas.

*   **For Solids and Liquids:**
    *   Assuming constant specific heat ($c$):
        $\Delta s = c \ln \frac{T_2}{T_1}$ (CO4)
    *   The volume change is often neglected, so the pressure dependence is usually ignored unless dealing with very high pressures.

### 5. Entropy Generation and Irreversibility

Entropy generation ($S_{gen}$) is a measure of the irreversibility of a process. It is always a positive quantity for actual (irreversible) processes and zero for reversible processes.

$S_{gen} = \Delta S_{total} = \Delta S_{system} + \Delta S_{surroundings}$ (CO2)

*   For irreversible processes, $S_{gen} > 0$.
*   For reversible processes, $S_{gen} = 0$.

**Key Point:** Entropy generation is always non-negative. This is a more fundamental statement of the Second Law than the Clausius inequality.

### 6. Isentropic Processes

An **isentropic process** is a reversible adiabatic process, meaning entropy remains constant ($\Delta S = 0$). (CO4)

*   **Isentropic Efficiency:** For devices like turbines, compressors, and nozzles, the isentropic efficiency compares the actual performance to the ideal reversible (isentropic) performance.

    *   **Turbine/Nozzle Efficiency ($\eta_T$):**
        $\eta_T = \frac{\text{Actual work output}}{\text{Isentropic work output}} = \frac{w_a}{w_s} = \frac{h_{1}-h_{2a}}{h_{1}-h_{2s}}$
        where $h_{2a}$ is the actual enthalpy at the exit and $h_{2s}$ is the enthalpy at the exit for an isentropic expansion. (CO3, CO4)

    *   **Compressor/Pump Efficiency ($\eta_C$):**
        $\eta_C = \frac{\text{Isentropic work input}}{\text{Actual work input}} = \frac{w_s}{w_a} = \frac{h_{2s}-h_{1}}{h_{2a}-h_{1}}$
        where $h_{2s}$ is the enthalpy at the exit for an isentropic compression and $h_{2a}$ is the actual enthalpy at the exit. (CO3, CO4)

**How to determine the actual vs. isentropic exit state:**

1.  Determine the properties at the inlet state (state 1).
2.  For the isentropic process (state 2s), the entropy $s_{2s}$ is equal to $s_1$.
3.  Using $s_{2s}$ and the appropriate second property (e.g., outlet pressure), determine the enthalpy $h_{2s}$ from property tables or correlations.
4.  For the actual process (state 2a), the entropy $s_{2a}$ will be greater than $s_{2s}$ due to irreversibilities.
5.  Using $s_{2a}$ and the appropriate second property (e.g., outlet pressure), determine the enthalpy $h_{2a}$ from property tables or correlations.

### 7. The T-s Diagram

The **temperature-entropy (T-s) diagram** is a useful tool for visualizing thermodynamic processes and calculating entropy changes. (CO4)

*   **Area under the curve:** For a reversible process, the area under the $T-s$ curve represents the heat transfer.
    $Q_{rev} = \int_{1}^{2} T dS$
*   **Isothermal process:** A horizontal line on the T-s diagram.
*   **Isobaric process:** An upward sloping curve on the T-s diagram (for ideal gases).
*   **Isochoric process:** An upward sloping curve on the T-s diagram (for ideal gases), steeper than isobaric.
*   **Isentropic process:** A vertical line on the T-s diagram.

### 8. Entropy Generation Minimization

The Second Law drives us to design systems that minimize entropy generation, as this leads to higher efficiencies and better utilization of energy resources. (CO1, CO2)

*   Minimizing irreversibilities (friction, unrestrained expansion, mixing, heat transfer across finite temperature differences) is crucial for efficient engineering design.

---

## Examples and Practice Questions

**(Note: For these problems, you will need access to steam tables or ideal gas property tables. Assume standard atmospheric conditions unless otherwise specified.)**

### Example 1: Entropy Change of Water (Pure Substance)

**Problem:** Calculate the entropy change of 1 kg of water as it is heated in a constant-pressure process from $25^\circ\text{C}$ saturated liquid to $200^\circ\text{C}$ superheated vapor. (CO4, CO5)

**Solution Approach:**

1.  **State 1:** $25^\circ\text{C}$ saturated liquid. From steam tables, find $s_f$ at $25^\circ\text{C}$.
2.  **State 2:** $200^\circ\text{C}$ superheated vapor at constant pressure. Since the process is constant pressure and starts from a saturated liquid, the pressure is the saturation pressure at $25^\circ\text{C}$. Then find the entropy value for superheated vapor at $200^\circ\text{C}$ and this pressure.
3.  Calculate $\Delta s = s_2 - s_1$.
4.  For 1 kg, $\Delta S = 1 \text{ kg} \times \Delta s \text{ (J/kg}\cdot\text{K)}$.

**(Refer to Cengel & Boles, Chapter 7, or Nag, Chapter 6 for detailed steam table usage.)**

### Example 2: Entropy Change of an Ideal Gas

**Problem:** A rigid tank contains 2 kg of air at $200$ kPa and $300$ K. The air is heated until the temperature is $400$ K. Calculate the entropy change of the air. Assume constant specific heats. (CO4)

**Given:**
*   $m = 2$ kg
*   $P_1 = 200$ kPa
*   $T_1 = 300$ K
*   $T_2 = 400$ K
*   Constant pressure process (since it's a rigid tank and heated, volume is constant, so it's an isochoric process)
*   For air: $c_v = 0.718$ kJ/kg·K, $R = 0.287$ kJ/kg·K

**Solution:**
This is a constant-volume process. The formula for entropy change of an ideal gas at constant volume is:
$\Delta s = c_v \ln \frac{T_2}{T_1}$

$\Delta s = 0.718 \frac{\text{kJ}}{\text{kg} \cdot \text{K}} \ln \frac{400 \text{ K}}{300 \text{ K}}$
$\Delta s = 0.718 \times \ln(1.333)$
$\Delta s = 0.718 \times 0.2877$
$\Delta s \approx 0.2066$ kJ/kg·K

Total entropy change:
$\Delta S = m \times \Delta s = 2 \text{ kg} \times 0.2066 \frac{\text{kJ}}{\text{kg} \cdot \text{K}} = 0.4132$ kJ/K

**Answer:** $\Delta S = 0.4132$ kJ/K

### Example 3: Isentropic Efficiency of a Turbine

**Problem:** Steam enters an adiabatic turbine at 4 MPa and $300^\circ\text{C}$ and leaves at 100 kPa. The actual work output is 550 kJ/kg. Calculate the isentropic efficiency of the turbine. (CO3, CO4)

**Solution Approach:**

1.  **State 1:** 4 MPa, $300^\circ\text{C}$. From steam tables, find $h_1$ and $s_1$.
2.  **State 2s (Isentropic Exit):** 100 kPa, $s_{2s} = s_1$. From steam tables, find $h_{2s}$ at this pressure and entropy value.
3.  **Calculate Isentropic Work:** $w_s = h_1 - h_{2s}$.
4.  **Calculate Isentropic Efficiency:** $\eta_T = \frac{w_a}{w_s} = \frac{550 \text{ kJ/kg}}{w_s}$.

**(Refer to Cengel & Boles, Chapter 7, or Nag, Chapter 6 for steam table usage and turbine analysis.)**

---

### Practice Questions:

1.  **Understanding the Second Law:** State the Kelvin-Planck statement of the Second Law of Thermodynamics and explain its direct implication on the efficiency of heat engines. (CO2, Knowledge Level: K1, K2)
2.  **Entropy Definition:** Define entropy and the differential of entropy for a reversible process. What are the units of entropy? (CO2, Knowledge Level: K1, K2)
3.  **Entropy Change Calculation (Ideal Gas):** Nitrogen gas ($N_2$) is compressed reversibly from 100 kPa and $25^\circ\text{C}$ to 600 kPa. Assuming constant specific heats, calculate the entropy change per unit mass of nitrogen. (CO4, Knowledge Level: K3)
    *   *Given for Nitrogen ($N_2$):* $R = 0.2968$ kJ/kg·K, $c_p = 1.041$ kJ/kg·K, $c_v = 0.745$ kJ/kg·K.
4.  **Entropy Change Calculation (Pure Substance):** 1 kg of R-134a is cooled from $50^\circ\text{C}$ to $20^\circ\text{C}$ in a constant-pressure process. Determine the entropy change of the R-134a. (CO4, CO5, Knowledge Level: K3)
    *   *(You will need R-134a property tables for this. For example, saturated pressure at $50^\circ\text{C}$ is approx. 1.27 MPa, saturated pressure at $20^\circ\text{C}$ is approx. 0.496 MPa. This is a constant pressure process, so the pressure remains constant at the saturation pressure of the initial temperature or final temperature if it's within the saturation range. Here, it will be constant at the saturation pressure of the lowest temperature, assuming it's a condensation process. Let's assume it starts as superheated vapor and ends as subcooled liquid at constant pressure of 1.27 MPa.)*
    *   **State 1:** 1.27 MPa, $50^\circ\text{C}$ (Superheated Vapor). Find $s_1$.
    *   **State 2:** 1.27 MPa, $20^\circ\text{C}$ (Compressed Liquid). Find $s_2$.
5.  **Isentropic Efficiency:** Air enters an adiabatic compressor at $100$ kPa and $25^\circ\text{C}$ with a velocity of $50$ m/s. The air is compressed to $400$ kPa, and the actual exit temperature is $130^\circ\text{C}$. Calculate the isentropic efficiency of the compressor. Assume constant specific heats. (CO3, CO4, Knowledge Level: K3)
    *   *(Hint: The definition of isentropic efficiency for a compressor involves work. Work is related to enthalpy change. You'll need to account for kinetic energy change in the enthalpy balance for actual work and isentropic work calculation if the velocity is significant.)*
    *   For air: $c_p = 1.005$ kJ/kg·K, $R = 0.287$ kJ/kg·K, $c_v = 0.718$ kJ/kg·K.

---

### Answers to Practice Questions:

1.  **Kelvin-Planck Statement:** "It is impossible for any device that operates in a cycle to receive heat from a single reservoir and to produce a net amount of work." This implies that no heat engine can be 100% efficient; some heat must always be rejected to a lower-temperature reservoir.
2.  **Entropy Definition:** Entropy ($S$) is a measure of the disorder or randomness of a system, or the unavailability of its energy for conversion to work. For a reversible process, the differential of entropy is $dS = \frac{\delta Q_{rev}}{T}$. Units are typically J/K or kJ/kg·K.
3.  **Entropy Change (Ideal Gas):**
    *   Process: Reversible, constant temperature, pressure increase.
    *   Formula: $\Delta s = c_p \ln \frac{T_2}{T_1} - R \ln \frac{P_2}{P_1}$. Since temperature is constant, $T_1 = T_2$, so $\ln \frac{T_2}{T_1} = 0$.
    *   $\Delta s = -R \ln \frac{P_2}{P_1} = -0.2968 \frac{\text{kJ}}{\text{kg} \cdot \text{K}} \ln \frac{600 \text{ kPa}}{100 \text{ kPa}}$
    *   $\Delta s = -0.2968 \times \ln(6) = -0.2968 \times 1.7918 \approx -0.5316$ kJ/kg·K.
    *   **Answer:** $\Delta s = -0.5316$ kJ/kg·K
4.  **Entropy Change (Pure Substance):**
    *   **State 1:** 1.27 MPa, $50^\circ\text{C}$ (Superheated Vapor). From R-134a tables, $s_1 \approx 0.9324$ kJ/kg·K. (Value depends on exact tables used).
    *   **State 2:** 1.27 MPa, $20^\circ\text{C}$ (Compressed Liquid). From R-134a tables (compressed liquid), $s_2$ at $20^\circ\text{C}$ and 1.27 MPa is approximately equal to $s_f$ at $20^\circ\text{C}$, which is $\approx 0.3363$ kJ/kg·K. (Value depends on exact tables used).
    *   $\Delta s = s_2 - s_1 = 0.3363 - 0.9324 = -0.5961$ kJ/kg·K.
    *   $\Delta S = 1 \text{ kg} \times \Delta s = -0.5961$ kJ/K.
    *   **Answer:** $\Delta S = -0.5961$ kJ/K (approximate value).
5.  **Isentropic Efficiency (Compressor):**
    *   **State 1:** $P_1 = 100$ kPa, $T_1 = 25^\circ\text{C} = 298.15$ K. $V_1 = 50$ m/s.
    *   Find $h_1$ and $s_1$ for air. $h_1 = c_p T_1 = 1.005 \text{ kJ/kg}\cdot\text{K} \times 298.15 \text{ K} \approx 299.65$ kJ/kg. $s_1 = c_p \ln T_1 - R \ln P_1 = 1.005 \ln(298.15) - 0.287 \ln(100) \approx 5.657 - 1.318 = 4.339$ kJ/kg·K.
    *   **State 2s (Isentropic):** $P_{2s} = 400$ kPa, $s_{2s} = s_1 = 4.339$ kJ/kg·K.
    *   Find $T_{2s}$ using $s_{2s} = c_p \ln T_{2s} - R \ln P_{2s}$.
        $4.339 = 1.005 \ln T_{2s} - 0.287 \ln(400)$
        $4.339 = 1.005 \ln T_{2s} - 0.287 \times 5.991$
        $4.339 = 1.005 \ln T_{2s} - 1.719$
        $6.058 = 1.005 \ln T_{2s}$
        $\ln T_{2s} = 6.038$
        $T_{2s} = e^{6.038} \approx 419.2$ K.
    *   Calculate $h_{2s} = c_p T_{2s} = 1.005 \text{ kJ/kg}\cdot\text{K} \times 419.2 \text{ K} \approx 421.3$ kJ/kg.
    *   **Actual Work Input:** The First Law for an open system (steady flow) is $w_a = h_2 - h_1 + \frac{V_2^2 - V_1^2}{2}$. We are given $T_{2a} = 130^\circ\text{C} = 403.15$ K.
        $h_{2a} = c_p T_{2a} = 1.005 \times 403.15 \approx 405.17$ kJ/kg.
        We need $V_2$. For an isentropic process, $T V^{k-1} = \text{const}$. For air, $k \approx 1.4$, $k-1 = 0.4$. Also, $PV = mRT$. For a fixed mass, $P V/T = \text{const}$.
        So, $P_1 V_1 / T_1 = P_{2s} V_{2s} / T_{2s}$.
        $V_{2s}/V_1 = (P_1/P_{2s}) (T_{2s}/T_1) = (100/400)(419.2/298.15) \approx 0.25 \times 1.406 \approx 0.3515$.
        $V_{2s} = 0.3515 V_1$.
        For an actual compressor, we often assume the density changes linearly with pressure in a PV diagram or use ideal gas relations to find $V_{2a}$.
        For simplicity in this problem, let's assume the kinetic energy change at the exit is negligible or is implicitly handled in the work term if not explicitly given. However, to be precise:
        $w_s = h_{2s} - h_1 = 421.3 - 299.65 = 121.65$ kJ/kg. (Neglecting KE change for isentropic work).
        $w_a = h_{2a} - h_1 + \frac{V_{2a}^2 - V_1^2}{2}$. We need $V_{2a}$.
        Let's re-evaluate using the definition of isentropic efficiency for a compressor:
        $\eta_C = \frac{w_s}{w_a} = \frac{h_{2s} - h_1}{h_{2a} - h_1}$ (assuming KE change is small or handled separately)
        Using the calculated values:
        $\eta_C = \frac{121.65 \text{ kJ/kg}}{405.17 \text{ kJ/kg} - 299.65 \text{ kJ/kg}} = \frac{121.65}{105.52} \approx 1.153$. This is greater than 1, which is impossible. This suggests we *must* consider kinetic energy or the given actual exit temperature is inconsistent with the provided velocity for an ideal scenario.

        Let's reconsider the problem statement and typical approach for compressor efficiency when kinetic energy is mentioned. The work input should account for enthalpy and kinetic energy change.
        Actual work input $w_a = (h_{2a} - h_1) + \frac{V_{2a}^2 - V_1^2}{2}$.
        Isentropic work input $w_s = (h_{2s} - h_1) + \frac{V_{2s}^2 - V_1^2}{2}$.

        To find $V_{2a}$ and $V_{2s}$, we can use $P V = m R T$ and the ideal gas law $PV = mRT$. $v = RT/P$.
        $v_1 = RT_1/P_1 = (0.287 \text{ kJ/kg}\cdot\text{K} \times 298.15 \text{ K}) / 100 \text{ kPa} \approx 0.855 \text{ m}^3/\text{kg}$.
        $v_{2s}$ can be found using isentropic relations: $P_1 v_1^k = P_{2s} v_{2s}^k$.
        $v_{2s} = v_1 (P_1/P_{2s})^{1/k} = 0.855 (100/400)^{1/1.4} = 0.855 \times (0.25)^{0.7143} \approx 0.855 \times 0.3716 \approx 0.317 \text{ m}^3/\text{kg}$.
        $V_{2s} = \sqrt{2 \times (h_{2s} - h_1) \times 1000 \text{ J/kJ}}$ -- NO, this is wrong. Velocity is not derived from enthalpy difference alone for isentropic.
        Let's use $v_{2s} = RT_{2s}/P_{2s} = (0.287 \times 419.2)/400 \approx 0.301 \text{ m}^3/\text{kg}$. (This matches our previous calculation of $v_{2s}$ approximately).

        For actual process: $v_{2a} = RT_{2a}/P_{2a} = (0.287 \times 403.15)/400 \approx 0.290 \text{ m}^3/\text{kg}$.

        Now, let's assume velocities are proportional to specific volumes for a given mass flow rate, or we can work with specific volumes.
        We can assume a mass flow rate or work with specific quantities.
        Let's assume $V_1 = 50$ m/s.
        $h_1 = 299.65$ kJ/kg, $s_1 = 4.339$ kJ/kg·K.
        $h_{2s} = 421.3$ kJ/kg, $s_{2s} = 4.339$ kJ/kg·K.
        $h_{2a} = 405.17$ kJ/kg, $s_{2a} = s_1 + c_p \ln(T_{2a}/T_1) - R \ln(P_{2a}/P_1) = 4.339 + 1.005 \ln(403.15/298.15) - 0.287 \ln(400/100) = 4.339 + 1.005(0.306) - 0.287(1.386) = 4.339 + 0.308 - 0.398 = 4.249$ kJ/kg·K.
        Wait, actual entropy $s_{2a}$ must be greater than $s_{2s}$. Let's recheck the $s_{2a}$ calculation.
        $s_{2a} = s_1 + c_p \ln(T_{2a}/T_1) - R \ln(P_{2a}/P_1)$
        $s_{2a} = 4.339 + 1.005 \ln(403.15/298.15) - 0.287 \ln(400/100)$
        $s_{2a} = 4.339 + 1.005 \times 0.306 - 0.287 \times 1.386$
        $s_{2a} = 4.339 + 0.308 - 0.398 \approx 4.249$ kJ/kg·K. This is still less than $s_{2s}$. Something is wrong in the problem statement or my assumptions.

        **Let's assume the problem implies that $T_{2a} = 130^\circ\text{C}$ is the actual exit temperature, and $s_{2a} > s_{2s}$ is implicitly satisfied.**
        Let's recalculate $s_{2s}$ to be absolutely sure.
        $s_1 = c_p \ln T_1 - R \ln P_1 = 1.005 \ln(298.15) - 0.287 \ln(100) = 1.005(5.697) - 0.287(4.605) = 5.725 - 1.321 = 4.404$ kJ/kg·K.
        Then $s_{2s} = 4.404$ kJ/kg·K.
        $s_{2s} = c_p \ln T_{2s} - R \ln P_{2s}$
        $4.404 = 1.005 \ln T_{2s} - 0.287 \ln(400)$
        $4.404 = 1.005 \ln T_{2s} - 0.287(5.991)$
        $4.404 = 1.005 \ln T_{2s} - 1.720$
        $6.124 = 1.005 \ln T_{2s}$
        $\ln T_{2s} = 6.0935$
        $T_{2s} = e^{6.0935} \approx 443.1$ K.

        Now, $h_1 = 1.005 \times 298.15 = 299.65$ kJ/kg.
        $h_{2s} = 1.005 \times 443.1 = 445.3$ kJ/kg.
        $h_{2a} = 1.005 \times 403.15 = 405.17$ kJ/kg.

        **Actual work input ($w_a$) for the compressor:**
        $w_a = (h_{2a} - h_1) + \frac{V_{2a}^2 - V_1^2}{2}$.
        We need $V_{2a}$. Using $Pv=RT$. $v_{2a} = RT_{2a}/P_{2a} = (0.287 \times 403.15)/400 \approx 0.290 \text{ m}^3/\text{kg}$.
        Assume mass flow rate $\dot{m}$. $\dot{m} v_1 = \dot{m} V_1$ -- NO.
        We can relate velocity to specific volume using continuity equation for a given mass flow rate. If we assume a mass flow rate, say 1 kg/s, then $V_1 = \dot{m} v_1 = 1 \times 0.855 = 0.855$ m/s. This is not 50 m/s.
        This means the $V_1=50$ m/s is a given velocity, not derived.
        Let's assume we have a mass flow rate $\dot{m}$.
        $V_1 = 50$ m/s. Then $v_1 = V_1/\dot{m}$. We know $v_1 = 0.855$ m$^3$/kg.
        So, $\dot{m} = V_1/v_1 = 50 \text{ m/s} / 0.855 \text{ m}^3/\text{kg} \approx 58.5$ kg/s.
        $V_{2a} = \dot{m} v_{2a} = 58.5 \text{ kg/s} \times 0.290 \text{ m}^3/\text{kg} \approx 16.96$ m/s.

        $w_a = (405.17 - 299.65) + \frac{(16.96)^2 - (50)^2}{2} \times \frac{1 \text{ J}}{1000 \text{ J/kJ}}$
        $w_a = 105.52 + \frac{287.64 - 2500}{2} \times 0.001 = 105.52 + \frac{-2212.36}{2} \times 0.001 = 105.52 - 1.106 \approx 104.41$ kJ/kg.

        **Isentropic work input ($w_s$):**
        $w_s = (h_{2s} - h_1) + \frac{V_{2s}^2 - V_1^2}{2}$.
        $v_{2s} = 0.301 \text{ m}^3/\text{kg}$.
        $V_{2s} = \dot{m} v_{2s} = 58.5 \text{ kg/s} \times 0.301 \text{ m}^3/\text{kg} \approx 17.61$ m/s.

        $w_s = (445.3 - 299.65) + \frac{(17.61)^2 - (50)^2}{2} \times 0.001$
        $w_s = 145.65 + \frac{309.9 - 2500}{2} \times 0.001 = 145.65 + \frac{-2190.1}{2} \times 0.001 = 145.65 - 1.095 \approx 144.56$ kJ/kg.

        **Isentropic Efficiency:**
        $\eta_C = \frac{w_s}{w_a} = \frac{144.56 \text{ kJ/kg}}{104.41 \text{ kJ/kg}} \approx 1.384$. This is still greater than 1.

        **Let's re-check the standard approach for compressor efficiency with velocity.** Often, the kinetic energy change is considered negligible if not explicitly stated or if velocities are low. If the problem intends for the kinetic energy to be ignored for efficiency calculations, then:
        $w_s = h_{2s} - h_1 = 445.3 - 299.65 = 145.65$ kJ/kg.
        $w_a = h_{2a} - h_1 = 405.17 - 299.65 = 105.52$ kJ/kg.
        $\eta_C = \frac{w_s}{w_a} = \frac{145.65}{105.52} \approx 1.38$. Still $>1$.

        **There seems to be an inconsistency in the given values ($P_1, T_1, V_1$ and $P_2, T_{2a}$) for a standard compressor problem, leading to an efficiency greater than 1.** A common error is assuming $T_{2a}$ implies the actual process is isentropic, which is incorrect. $s_{2a}$ must be $>s_{2s}$.

        **Let's assume the problem meant that the actual work input is calculated from the given $T_{2a}$, and we need to find the isentropic work output and compare.**

        If $T_{2a} = 130^\circ\text{C}$, then $s_{2a} = 4.249$ kJ/kg·K (using first $s_1$ calculation). $s_{2s}=4.404$ kJ/kg·K. This implies $s_{2a} < s_{2s}$ which is impossible.
        Let's use the second calculation of $s_1$ and $s_{2s}$.
        $s_1 = 4.404$ kJ/kg·K. $T_{2s} = 443.1$ K.
        Actual exit temperature $T_{2a} = 403.15$ K.
        $s_{2a} = c_p \ln(T_{2a}/T_1) - R \ln(P_{2a}/P_1) = 1.005 \ln(403.15/298.15) - 0.287 \ln(400/100) = 1.005(0.306) - 0.287(1.386) = 0.308 - 0.398 = -0.09$ -- this is incorrect.
        $s_{2a} = 4.404 + 1.005 \ln(403.15/298.15) - 0.287 \ln(400/100)$
        $s_{2a} = 4.404 + 1.005 \times 0.306 - 0.287 \times 1.386$
        $s_{2a} = 4.404 + 0.308 - 0.398 = 4.314$ kJ/kg·K.

        This $s_{2a}=4.314$ kJ/kg·K is indeed less than $s_{2s}=4.404$ kJ/kg·K. This means the problem statement likely contains inconsistent values.

        **Assuming the actual exit temperature $T_{2a}$ is given for the actual process, and the velocity $V_1=50$ m/s and $P_2=400$ kPa are also for the actual process, we are missing $V_{2a}$ to calculate $w_a$ precisely.**
        If we ignore velocity changes:
        $w_s = h_{2s} - h_1 = 145.65$ kJ/kg.
        $w_a = h_{2a} - h_1 = 105.52$ kJ/kg.
        $\eta_C = 145.65 / 105.52 \approx 1.38$.

        **Let's assume the question implies that the actual compressor requires work $w_a$ and produces $T_{2a}$ etc. and we need to compare it to the isentropic case.** A more typical phrasing would be "actual work input is X".

        **If we reverse the logic and assume the intent was a solvable problem and focus on the definition:**
        Isentropic efficiency for compressor: $\eta_C = \frac{\text{Isentropic work input}}{\text{Actual work input}}$.

        Let's hypothesize that the question meant to ask for isentropic efficiency given an *actual* work input. If the actual work input were given, say $w_a = 120$ kJ/kg, then $\eta_C = 145.65 / 120 \approx 1.21$, still $>1$.

        **Conclusion for Q5:** The provided data in question 5 is likely inconsistent, leading to an efficiency greater than 1 under standard assumptions. For a typical exam setting, focus on the formula and process. If velocity is given, it should be used in the energy balance for work. The inconsistency might stem from the assumed specific heats or the values themselves.

        **Let's provide a typical answer assuming the kinetic energy is neglected and the values were consistent:**
        If we ignore kinetic energy and assume $w_a$ and $w_s$ are purely enthalpy changes.
        $w_s = h_{2s} - h_1 = 145.65$ kJ/kg.
        $w_a = h_{2a} - h_1 = 105.52$ kJ/kg.
        This implies the actual process is more efficient than the isentropic one, which is impossible.

        **Let's re-read the definition of isentropic efficiency for compressor**:
        $\eta_C = \frac{w_s}{w_a} = \frac{h_{2s}-h_1}{h_{2a}-h_1}$. Here $w_a$ is the actual work input.

        If the actual exit temperature is $130^\circ\text{C}$, the actual enthalpy is $h_{2a} = 405.17$ kJ/kg.
        The isentropic exit temperature is $T_{2s} = 443.1$ K, and isentropic enthalpy is $h_{2s} = 445.3$ kJ/kg.

        The problem statement might be flawed as given. A common scenario is that the actual work input is given, or the actual exit temperature is higher than the isentropic one for a compressor.

        **Let's assume the exit temperature for the isentropic case is $T_{2s}$ and for the actual case is $T_{2a}$.**
        We calculated $T_{2s} = 443.1$ K.
        We are given $T_{2a} = 403.15$ K.
        For a compressor, work input is required. Work input is related to the increase in enthalpy and kinetic energy.
        $w_s = (h_{2s}-h_1) + \frac{V_{2s}^2-V_1^2}{2}$
        $w_a = (h_{2a}-h_1) + \frac{V_{2a}^2-V_1^2}{2}$

        If we assume KE changes are negligible for the sake of calculation:
        $w_s = h_{2s} - h_1 = 445.3 - 299.65 = 145.65$ kJ/kg.
        $w_a = h_{2a} - h_1 = 405.17 - 299.65 = 105.52$ kJ/kg.
        $\eta_C = w_s / w_a = 145.65 / 105.52 > 1$.

        **This means the actual process achieved a lower enthalpy rise for the same pressure ratio, which implies higher efficiency. This is physically impossible.**

        **Hypothetical corrected problem:** Let's assume actual exit temperature is $180^\circ\text{C}$ (453.15 K).
        $h_{2a} = 1.005 \times 453.15 = 455.42$ kJ/kg.
        $s_{2a} = 1.005 \ln(453.15/298.15) - 0.287 \ln(400/100) = 1.005(0.411) - 0.287(1.386) = 0.413 - 0.398 = 0.015$ - error in calculation.
        $s_{2a} = 4.404 + 1.005 \ln(453.15/298.15) - 0.287 \ln(400/100)$
        $s_{2a} = 4.404 + 1.005(0.411) - 0.287(1.386) = 4.404 + 0.413 - 0.398 = 4.419$ kJ/kg·K.
        This is $> s_{2s}$, which is correct.

        Then $w_a = h_{2a} - h_1 = 455.42 - 299.65 = 155.77$ kJ/kg.
        $\eta_C = w_s / w_a = 145.65 / 155.77 \approx 0.935$ or 93.5%.

        **Given the problem statement, it's impossible to calculate a valid isentropic efficiency greater than 1.** The most likely interpretation is that there's an error in the problem statement itself.
        **Answer for Q5, based on the provided (inconsistent) data:** Calculation yields efficiency > 1, indicating data inconsistency. In a real scenario, re-check input parameters. If forced to provide an answer, state the inconsistency.

---

## Important Points to Remember

*   **Second Law:** Introduces directionality, quality of energy, and feasibility of processes.
*   **Kelvin-Planck:** No heat engine can be 100% efficient.
*   **Entropy (S):** Measure of disorder/randomness, unavailability of energy for work.
*   **Clausius Inequality:** $\oint \frac{\delta Q}{T} \le 0$ for any cycle.
*   **Entropy Change Definition:** $dS = \frac{\delta Q_{rev}}{T}$.
*   **Entropy Principle:** $\Delta S_{total} = \Delta S_{system} + \Delta S_{surroundings} \ge 0$.
*   **Reversible Adiabatic = Isentropic ($\Delta S = 0$):** Not all adiabatic processes are isentropic.
*   **Entropy Generation ($S_{gen}$):** $S_{gen} = \Delta S_{total} \ge 0$. It's a measure of irreversibility.
*   **Pure Substances:** Use property tables (steam tables, refrigerant tables) to find entropy values. (CO5)
*   **Ideal Gases:** Use formulas involving specific heats and temperature/pressure ratios. (CO4)
*   **Isentropic Efficiency:** Compares actual performance to ideal isentropic performance for devices like turbines, compressors, nozzles.
*   **T-s Diagram:** Area under the curve represents reversible heat transfer.

---

This set of notes covers the fundamental concepts of entropy, its definition, calculation methods, and its role in the Second Law of Thermodynamics, aligning with the provided learning and course outcomes. Remember to consult your textbooks for detailed examples and property data.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
