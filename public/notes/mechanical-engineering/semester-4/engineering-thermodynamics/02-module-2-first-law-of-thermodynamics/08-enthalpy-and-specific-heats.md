---
title: "enthalpy and specific heats"
subject: "ENGINEERING THERMODYNAMICS"
module: "Module 2: First law of thermodynamics"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462f4b"
status: "completed"
scrapedAt: "2026-05-20T17:53:26.073Z"
---
# Engineering Thermodynamics: Module 2 - First Law of Thermodynamics
## Topic: Enthalpy and Specific Heats

This module delves into fundamental concepts of the First Law of Thermodynamics, focusing on the properties of enthalpy and specific heats, crucial for analyzing energy transfer in thermodynamic systems.

---

### Learning Outcomes Covered:

*   Understand the definition and significance of enthalpy.
*   Define and differentiate between specific heat at constant volume ($c_v$) and specific heat at constant pressure ($c_p$).
*   Relate enthalpy changes to specific heats for various substances.
*   Apply the concepts of enthalpy and specific heats in the First Law analysis of closed and open systems.

---

### Course Outcomes Alignment:

*   **CO1 (Understand basic concepts):** This topic directly builds upon the foundational understanding of energy, heat, and work.
*   **CO2 (Understand the laws of thermodynamics):** Enthalpy and specific heats are integral to expressing and applying the First Law.
*   **CO3 (Conduct first law analysis):** Enthalpy and specific heats are essential properties used in the energy balance equations for both closed and open systems.
*   **CO5 (Determine properties of pure substances):** Understanding specific heats is key to calculating property changes for pure substances.

---

## 1. Enthalpy (H)

### 1.1 Definition and Significance

*   **Definition:** Enthalpy ($H$) is a thermodynamic property of a system that represents the total energy contained within the system, including its internal energy ($U$) and the energy associated with its pressure ($P$) and volume ($V$).
    $$H = U + PV$$
    *(Cengel & Boles, Chapter 2; Nag, Chapter 4)*

*   **Significance:**
    *   Enthalpy is particularly useful in analyzing thermodynamic processes occurring at **constant pressure**, as the $PV$ term has a direct relationship to the work done by or on the system.
    *   In many engineering applications, processes happen in open systems (like turbines, pumps, heat exchangers) where mass flows across the system boundary. Enthalpy is the property that conveniently accounts for the energy carried into or out of the system by the flowing mass, including flow work ($PV$).
    *   For a closed system, the change in enthalpy ($\Delta H$) is equal to the heat transfer ($Q$) if the process occurs at constant pressure and there is no work other than flow work (which is zero for closed systems).

### 1.2 Change in Enthalpy ($\Delta H$)

*   The change in enthalpy is defined as:
    $$\Delta H = \Delta U + \Delta (PV)$$
    *(Cengel & Boles, Chapter 2)*

*   For a **closed system** undergoing a process:
    $$\Delta H = \Delta U + (P_2V_2 - P_1V_1)$$

*   For an **ideal gas**, the internal energy ($U$) and enthalpy ($H$) are functions of temperature only. Therefore, $\Delta U = m \Delta u$ and $\Delta H = m \Delta h$.
    *   For an ideal gas, $PV = mRT$, so $PV$ is also a function of temperature.
    *   This simplifies the enthalpy change for an ideal gas:
        $$\Delta H = \Delta U + \Delta (mRT) = \Delta U + mR\Delta T$$
        Since $\Delta U = m c_v \Delta T$ for an ideal gas,
        $$\Delta H = m c_v \Delta T + mR\Delta T = m (c_v + R) \Delta T$$
        From the ideal gas relation, $c_p - c_v = R$ (for specific heats per unit mass).
        $$\Delta H = m c_p \Delta T$$
        *(Cengel & Boles, Chapter 2; Nag, Chapter 4)*

*   For a **pure substance** (like water or refrigerants), enthalpy ($h$ or $H$) is a property that can be found from property tables or diagrams (e.g., steam tables). The enthalpy includes the latent heat associated with phase changes.

### 1.3 Specific Enthalpy ($h$)

*   **Definition:** Specific enthalpy ($h$) is the enthalpy per unit mass of a substance.
    $$h = \frac{H}{m}$$
    *(Cengel & Boles, Chapter 2)*

*   The change in enthalpy is then:
    $$\Delta H = m \Delta h$$

---

## 2. Specific Heats ($c_v$ and $c_p$)

### 2.1 Definition and Significance

*   **Definition:** Specific heat is the amount of heat required to raise the temperature of a unit mass of a substance by one degree (Celsius or Kelvin).
    *(Cengel & Boles, Chapter 2; Nag, Chapter 4)*

*   **Significance:** Specific heats are fundamental properties that quantify how much energy a substance can store as sensible heat. They are crucial for calculating temperature changes associated with heat transfer.

### 2.2 Specific Heat at Constant Volume ($c_v$)

*   **Definition:** $c_v$ is the specific heat of a substance when its volume is held constant.
    *   For a closed system, the First Law is: $Q - W = \Delta U$.
    *   If the process occurs at constant volume, no boundary work ($W_b = \int P dV$) is done.
    *   Therefore, $Q = \Delta U$.
    *   The rate of heat transfer is $ \dot{Q} = \dot{U} $.
    *   For a unit mass: $q = \Delta u$.
    *   If the temperature change is $dT$: $dq = du$.
    *   The definition of $c_v$ is: $c_v = (\frac{\partial u}{\partial T})_v$.
    *   Thus, for a process at constant volume, $q = c_v \Delta T$ or $\Delta u = c_v \Delta T$.
    *   And for a system with mass $m$: $\Delta U = m c_v \Delta T$.
    *(Cengel & Boles, Chapter 2; Nag, Chapter 4)*

### 2.3 Specific Heat at Constant Pressure ($c_p$)

*   **Definition:** $c_p$ is the specific heat of a substance when its pressure is held constant.
    *   For a closed system, the First Law is: $Q - W = \Delta U$.
    *   If the process occurs at constant pressure, the boundary work is $W_b = P \Delta V = m P \Delta v$.
    *   So, $Q - P \Delta V = \Delta U$.
    *   Rearranging: $Q = \Delta U + P \Delta V = \Delta (U + PV) = \Delta H$.
    *   The rate of heat transfer is $ \dot{Q} = \dot{H} $.
    *   For a unit mass: $q = \Delta h$.
    *   If the temperature change is $dT$: $dq = dh$.
    *   The definition of $c_p$ is: $c_p = (\frac{\partial h}{\partial T})_p$.
    *   Thus, for a process at constant pressure, $q = c_p \Delta T$ or $\Delta h = c_p \Delta T$.
    *   And for a system with mass $m$: $\Delta H = m c_p \Delta T$.
    *(Cengel & Boles, Chapter 2; Nag, Chapter 4)*

### 2.4 Relationship between $c_p$ and $c_v$

*   For **solids and liquids**, the difference between $c_p$ and $c_v$ is very small because they are nearly incompressible. Their specific volumes change very little with pressure.
    *   $c_p \approx c_v$ for solids and liquids.
    *(Cengel & Boles, Chapter 2; Nag, Chapter 4)*

*   For **ideal gases**, there is a significant difference between $c_p$ and $c_v$ because of the work done by expansion at constant pressure.
    *   The relationship for specific heat per unit mass is: $c_p - c_v = R$ (where $R$ is the specific gas constant).
    *   The relationship for molar specific heats is: $\bar{c}_p - \bar{c}_v = R_{u}$ (where $R_u$ is the universal gas constant).
    *(Cengel & Boles, Chapter 2; Nag, Chapter 4)*

### 2.5 Specific Heat Variations

*   **Temperature Dependence:** The values of $c_v$ and $c_p$ are generally not constant; they vary with temperature.
    *   For **small temperature changes**, we can often assume $c_v$ and $c_p$ are constant and use an average value.
    *   For **large temperature changes**, the temperature dependence must be considered. This can be done using:
        *   **Specific heat tables or graphs:** These provide values of $c_p$ and $c_v$ at different temperatures.
        *   **Polynomial expressions:** $c_p(T) = a + bT + cT^2 + dT^3$. The enthalpy change is then calculated by integrating $c_p(T)$ with respect to temperature.
        $$\Delta h = \int_{T_1}^{T_2} c_p(T) dT$$
    *(Cengel & Boles, Chapter 2; Nag, Chapter 4)*

*   **Specific Heat Ratios ($\gamma$):**
    *   The ratio of specific heats is defined as $\gamma = \frac{c_p}{c_v}$.
    *   This ratio is important in analyzing adiabatic processes for ideal gases.
    *(Cengel & Boles, Chapter 2)*

---

## 3. Application of Enthalpy and Specific Heats in the First Law Analysis

### 3.1 Closed Systems

*   **First Law for a Closed System:**
    $$Q - W = \Delta U$$
    *(Cengel & Boles, Chapter 2; Nag, Chapter 4)*

*   **Using Enthalpy and Specific Heats:**
    *   For processes involving **ideal gases**, if specific heats are assumed constant:
        $$Q - W = m c_v \Delta T$$
    *   For **constant pressure processes** involving ideal gases where the only work is boundary work, we can use enthalpy:
        $$Q = \Delta H = m c_p \Delta T$$
        *(This is derived from $Q - P\Delta V = \Delta U$ by substituting $\Delta H = \Delta U + P\Delta V$ for constant $P$)*

*   **Example (Closed System):**
    Consider 2 kg of air (ideal gas) in a piston-cylinder device. The air is heated at constant pressure from 300 K to 500 K. If the constant pressure specific heat of air is $c_p = 1.005 \text{ kJ/kg} \cdot \text{K}$, determine the heat transfer for this process.
    *   **Solution:**
        Since the process is at constant pressure and involves an ideal gas, we can use the enthalpy change:
        $$Q = \Delta H = m c_p \Delta T$$
        $$Q = (2 \text{ kg}) \times (1.005 \text{ kJ/kg} \cdot \text{K}) \times (500 \text{ K} - 300 \text{ K})$$
        $$Q = (2 \text{ kg}) \times (1.005 \text{ kJ/kg} \cdot \text{K}) \times (200 \text{ K})$$
        $$Q = 402 \text{ kJ}$$
        *(This example demonstrates the application of $c_p$ for a constant pressure process, aligning with CO3 and CO5).*

### 3.2 Open Systems (Steady-Flow Systems)

*   **First Law for a Steady-Flow System:**
    $$\dot{Q} - \dot{W} = \frac{dE_{system}}{dt}$$
    For steady flow, the energy within the system does not change with time, so $\frac{dE_{system}}{dt} = 0$.
    $$\dot{Q} - \dot{W} = \sum_{out} \dot{m} (h + \frac{V^2}{2} + gz) - \sum_{in} \dot{m} (h + \frac{V^2}{2} + gz)$$
    *   Where:
        *   $\dot{Q}$ is the net rate of heat transfer into the system.
        *   $\dot{W}$ is the net rate of work done by the system.
        *   $\dot{m}$ is the mass flow rate.
        *   $h$ is the specific enthalpy.
        *   $\frac{V^2}{2}$ is the kinetic energy per unit mass.
        *   $gz$ is the potential energy per unit mass.
    *(Cengel & Boles, Chapter 2; Nag, Chapter 4)*

*   **Using Enthalpy and Specific Heats:**
    *   Enthalpy ($h$) is crucial here because it incorporates both internal energy and flow work ($Pv$), representing the total energy carried by the fluid.
    *   For ideal gases where specific heats are assumed constant: $\Delta h = c_p \Delta T$.
    *   The energy balance equation can be written in terms of enthalpy changes:
        $$\dot{Q} - \dot{W} = \sum_{out} \dot{m} (h + \frac{V^2}{2} + gz) - \sum_{in} \dot{m} (h + \frac{V^2}{2} + gz)$$
    *   If we consider only one inlet and one outlet, and mass is conserved ($\dot{m}_{in} = \dot{m}_{out} = \dot{m}$):
        $$\dot{Q} - \dot{W} = \dot{m} \left[ (h_2 - h_1) + \frac{V_2^2 - V_1^2}{2} + g(z_2 - z_1) \right]$$
        Or in terms of specific enthalpy change:
        $$\dot{Q} - \dot{W} = \dot{m} \left[ c_p (T_2 - T_1) + \frac{V_2^2 - V_1^2}{2} + g(z_2 - z_1) \right]$$
        *(This is highly relevant for CO3 and CO5).*

*   **Example (Open System):**
    Steam enters an adiabatic turbine at 5 MPa and 400°C and exits at 100 kPa. The specific enthalpy of the steam at the inlet is $h_1 = 3195.7 \text{ kJ/kg}$ and at the outlet is $h_2 = 2675.5 \text{ kJ/kg}$. If the mass flow rate is 2 kg/s, determine the power output of the turbine. Assume kinetic and potential energy changes are negligible.
    *   **Solution:**
        The turbine is adiabatic ($\dot{Q} = 0$) and the work output is $\dot{W}_{out}$.
        The First Law for steady flow is:
        $$0 - \dot{W}_{out} = \dot{m} (h_2 - h_1)$$
        $$\dot{W}_{out} = -\dot{m} (h_2 - h_1) = \dot{m} (h_1 - h_2)$$
        $$\dot{W}_{out} = (2 \text{ kg/s}) \times (3195.7 \text{ kJ/kg} - 2675.5 \text{ kJ/kg})$$
        $$\dot{W}_{out} = (2 \text{ kg/s}) \times (520.2 \text{ kJ/kg})$$
        $$\dot{W}_{out} = 1040.4 \text{ kJ/s} = 1040.4 \text{ kW}$$
        *(This example showcases the use of enthalpy in analyzing work done by an open system, fulfilling CO3).*

---

## 4. Important Points to Remember

*   **Enthalpy ($H$)** is a useful thermodynamic property, especially for constant pressure processes and open systems, as it accounts for internal energy and flow work. $H = U + PV$.
*   **Specific Enthalpy ($h$)** is enthalpy per unit mass.
*   **Specific Heat at Constant Volume ($c_v$)** relates to the change in internal energy: $\Delta u = c_v \Delta T$.
*   **Specific Heat at Constant Pressure ($c_p$)** relates to the change in enthalpy: $\Delta h = c_p \Delta T$.
*   For **ideal gases**, $c_p - c_v = R$.
*   For **solids and liquids**, $c_p \approx c_v$.
*   Specific heats ($c_p, c_v$) can vary with temperature, requiring integration for large temperature changes.
*   The First Law for closed systems is $Q - W = \Delta U$. For ideal gases with constant specific heats, $Q - W = m c_v \Delta T$.
*   The First Law for steady-flow open systems is $\dot{Q} - \dot{W} = \sum_{out} \dot{m} (h + \frac{V^2}{2} + gz) - \sum_{in} \dot{m} (h + \frac{V^2}{2} + gz)$.
*   Enthalpy is crucial for open system analysis as it accounts for energy carried by mass flow.

---

## 5. Practice Questions/Exercises

**Question 1:** (CO3, CO5)
A 0.5 kg block of iron ($\text{c}_p = 0.45 \text{ kJ/kg} \cdot ^\circ\text{C}$) is heated from 50°C to 150°C.
a) How much heat is required if the process occurs at constant volume?
b) How much heat is required if the process occurs at constant pressure?

**Answer 1:**
Since iron is a solid, we can assume $c_v \approx c_p$.
a) For a constant volume process in a closed system: $Q = \Delta U = m c_v \Delta T$.
   $Q = (0.5 \text{ kg}) \times (0.45 \text{ kJ/kg} \cdot ^\circ\text{C}) \times (150^\circ\text{C} - 50^\circ\text{C})$
   $Q = (0.5 \text{ kg}) \times (0.45 \text{ kJ/kg} \cdot ^\circ\text{C}) \times (100^\circ\text{C})$
   $Q = 22.5 \text{ kJ}$

b) For a constant pressure process in a closed system: $Q = \Delta H = m c_p \Delta T$.
   $Q = (0.5 \text{ kg}) \times (0.45 \text{ kJ/kg} \cdot ^\circ\text{C}) \times (150^\circ\text{C} - 50^\circ\text{C})$
   $Q = 22.5 \text{ kJ}$
   *(The heat required is the same because for solids, $c_v \approx c_p$ and the change in volume with pressure is negligible, meaning the boundary work is negligible).*

**Question 2:** (CO3, CO5)
Nitrogen gas ($\text{N}_2$) at 150 kPa and 20°C is heated in a closed rigid tank to 150°C. Assuming nitrogen behaves as an ideal gas with constant specific heats ($c_v = 0.743 \text{ kJ/kg} \cdot \text{K}$ and $c_p = 1.041 \text{ kJ/kg} \cdot \text{K}$), determine the heat transfer per unit mass.

**Answer 2:**
The tank is rigid, meaning the volume is constant. For a closed system at constant volume, the heat transfer is equal to the change in internal energy.
$\Delta T = 150^\circ\text{C} - 20^\circ\text{C} = 130^\circ\text{C} = 130 \text{ K}$.
$q = \Delta u = c_v \Delta T$
$q = (0.743 \text{ kJ/kg} \cdot \text{K}) \times (130 \text{ K})$
$q = 96.59 \text{ kJ/kg}$

**Question 3:** (CO3, CO5)
Air at 27°C (300 K) and 100 kPa enters a steady-flow compressor at a rate of 0.5 kg/s. The air is compressed to 500 kPa and 177°C (450 K). Heat is lost from the compressor to the surroundings at a rate of 10 kJ/kg. Neglecting kinetic and potential energy changes, determine the power input to the compressor.
Use ideal gas properties for air: $c_p = 1.005 \text{ kJ/kg} \cdot \text{K}$ and $R = 0.287 \text{ kJ/kg} \cdot \text{K}$.

**Answer 3:**
The First Law for a steady-flow system is:
$\dot{Q} - \dot{W} = \dot{m} (h_2 - h_1 + \frac{V_2^2 - V_1^2}{2} + g(z_2 - z_1))$
Given $\dot{Q} = -10 \text{ kJ/kg} \times 0.5 \text{ kg/s} = -5 \text{ kW}$ (heat lost).
Neglecting kinetic and potential energy changes.
$\dot{W}$ is the net work done *by* the system. The power input to the compressor is $-\dot{W}_{input}$.
$\dot{Q} - \dot{W} = \dot{m} (h_2 - h_1) = \dot{m} c_p (T_2 - T_1)$
$\Delta T = T_2 - T_1 = 450 \text{ K} - 300 \text{ K} = 150 \text{ K}$
$\dot{Q} - \dot{W} = (0.5 \text{ kg/s}) \times (1.005 \text{ kJ/kg} \cdot \text{K}) \times (150 \text{ K})$
$\dot{Q} - \dot{W} = 75.375 \text{ kW}$

We are given $\dot{Q} = -5 \text{ kW}$ (heat lost, hence negative).
$-5 \text{ kW} - \dot{W} = 75.375 \text{ kW}$
$\dot{W} = -5 \text{ kW} - 75.375 \text{ kW} = -80.375 \text{ kW}$

The work done *by* the compressor is $-80.375 \text{ kW}$.
Therefore, the power *input* to the compressor is $80.375 \text{ kW}$.

---

This concludes the notes on Enthalpy and Specific Heats. Mastering these concepts is crucial for a solid understanding of the First Law of Thermodynamics and its applications in various engineering systems.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
